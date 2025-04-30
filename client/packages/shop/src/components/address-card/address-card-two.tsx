import DeliveryIcon from 'assets/images/locationIcon.webp';
import React, { useContext, useEffect } from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, Form } from 'formik';
import { closeModal } from '@redq/reuse-modal';
import TextField from 'components/forms/text-field';
import { Button } from 'components/button/button';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_ADDRESS, UPDATE_ADDRESS } from 'graphql/mutation/address';
import { BannerIcon, DeliveryText, FieldWrapper, Heading, PickUpOptions } from './address-card.style';
import { ProfileContext } from 'contexts/profile/profile.context';
import { FormattedMessage, useIntl } from 'react-intl';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { DELIVERY_METHOD } from 'graphql/query/delivery';
import { getCookie } from 'utils/session';
import { deliveryMethodCookieKeyName, plazaBelgranoPolygon, plazadoceDeOctubrePolygon, plazaEspañaPolygon, plazaNueveDeJulioPolygon } from 'utils/constant';
import Checkbox from 'components/checkbox/checkbox';

// Shape of form values
interface FormValues {
  id: any | null;
  addressId: any | null,
  title: string;
  address: string;
  location?: string;
  instructions?: string;
}

// The type of props MyForm receives
interface MyFormProps {
  item?: any | null;
  id?: any | null;
}

// Wrap our form with the using withFormik HoC
const FormEnhancer = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    const ID = props.item.id;
    const addressItem = props.item.item;
    return {
      id: ID || null,
      addressId: addressItem.id || null,
      title: addressItem.title || '',
      address: addressItem.address || '',
      instructions: addressItem.instructions || '',
      location: addressItem.location || ''
    };
  },
  validationSchema: Yup.object().shape({
    title: Yup.string().required('Required!'),
    address: Yup.string().required('Required'),
    location: Yup.string().required('Required'),
  }),
  handleSubmit: (values) => {
    // do submitting things
  },
});

const UpdateAddressTwo = (props: FormikProps<FormValues> & MyFormProps) => {
  const {
    isValid,
    item,
    values,
    touched,
    errors,
    dirty,
    handleChange,
    handleBlur,

    handleReset,
    isSubmitting,
  } = props;
  const { data: deliverData } = useQuery(DELIVERY_METHOD)
  
  const deliveryMethods = deliverData?.deliveryMethods?.items;
  const [searchResult, setSearchResult] = React.useState([]);
  const [deliveryAddress, setDeliveryAddress] = React.useState("");
  const [notInsideDeliveryAreas, setNotInsideDeliveryAreas] = React.useState(false);

  const ID = item.id;
  let newAddressid = null;
  const addressItem = item.item;

  const addressValue = {
    id: ID,
    addressId: addressItem.id, 
    title: values.title,
    address: addressItem.address,
    location: values.location,
    instructions: values.instructions,
    is_primary: true
  };

  const { state, dispatch } = useContext(ProfileContext);
  const intl = useIntl();

  const [updateAddressMutation] = useMutation(UPDATE_ADDRESS);
  const [addAddressMutation] = useMutation(ADD_ADDRESS);

  const handleSubmit = async () => {
    if (isValid) {
      const {id, addressId, title, address, location, instructions} = addressValue;
      // addressItem puede pre-cargar address solamente para luego el usuario completar el resto de los datos

      if (Object.keys(addressItem).length === 0 || Object.keys(addressItem).length === 2) {
        const {data}  = await addAddressMutation({
          variables: { 
            id,
            title,
            address, 
            location,
            instructions
           },
        });
        newAddressid = data.addDeliveryAddress.id;
        addressValue.id = data.addDeliveryAddress.id;
        dispatch({
          type: 'ADD_ADDRESS',
          payload: addressValue 
        });
        closeModal();
      }else{
        const updateAddressData = await updateAddressMutation({
          variables: { 
            id,
            addressId,
            title,
            address, 
            location,
            instructions
           }
        });
        dispatch({
          type: 'UPDATE_ADDRESS',
          payload: { value: addressValue, id: addressItem.id }

        });
        closeModal();
      }
    }
  };

  function inside(point, vs) {
    var x = point[0], y = point[1];
    
    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    return inside;
};

const handleSelect = async (address) => {
  const results = await geocodeByAddress(address);
  const latLng = await getLatLng(results[0]);
  setNotInsideDeliveryAreas(false);
  let deliveryOptionsMethods = [];

  if (inside([latLng.lat, latLng.lng], plazadoceDeOctubrePolygon)) {
    deliveryOptionsMethods = deliveryMethods?.filter(deliveryMethod => {
      if (!deliveryMethod.isPickUp && deliveryMethod.details.includes('Lunes')) { deliveryMethod.name = 'Delivery Gratis'; return true;}
      return !deliveryMethod.isPickUp;
    });
  } else if (inside([latLng.lat, latLng.lng], plazaBelgranoPolygon)) {
    deliveryOptionsMethods = deliveryMethods?.filter(deliveryMethod => {
      if (!deliveryMethod.isPickUp && deliveryMethod.details.includes('Martes')) { deliveryMethod.name = 'Delivery Gratis'; return true;}
      return !deliveryMethod.isPickUp;
    });
  } else if (inside([latLng.lat, latLng.lng], plazaNueveDeJulioPolygon)) {
      deliveryOptionsMethods = deliveryMethods?.filter(deliveryMethod => {
        if (!deliveryMethod.isPickUp && deliveryMethod.details.includes('Miercoles')) { deliveryMethod.name = 'Delivery Gratis'; return true;}
        return !deliveryMethod.isPickUp;
      });
  } else if (inside([latLng.lat, latLng.lng], plazaEspañaPolygon)) {
    deliveryOptionsMethods = deliveryMethods?.filter(deliveryMethod => {
      if (!deliveryMethod.isPickUp && deliveryMethod.details.includes('Jueves')) { deliveryMethod.name = 'Delivery Gratis'; return true;}
      return !deliveryMethod.isPickUp;
    });
  } else {
    setNotInsideDeliveryAreas(true);
    console.log(inside([latLng.lat, latLng.lng], plazaNueveDeJulioPolygon));
  }
  console.log('setDeliveryAddress(address?.split(',')[0]);', address?.split(',')[0])
  setDeliveryAddress(address?.split(',')[0]);
  setSearchResult(deliveryOptionsMethods)
};
  console.log(values)
  return (
    <Form>
      <Heading>{intl.formatMessage({ id: addressItem?.id ? 'editAddressId' : 'addNewAddressId', defaultMessage: 'Address name' })}</Heading>
      <FieldWrapper>
        <TextField
          id="title"
          type="text"
          width='100%'
          placeholder={intl.formatMessage({ id: 'addressRefId', defaultMessage: 'Address name' })}
          error={touched.title && errors.title}
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldWrapper>
      <FieldWrapper>
          {/* <PlacesAutocomplete
            value={deliveryAddress?.split(',')[0]}
            // onChange={handleChange}
            onChange={(e) => { setDeliveryAddress(e); handleChange(e);}}
            onSelect={handleSelect}
            searchOptions={{
              types: [],
              componentRestrictions: { country: "ar" },
            }}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: "Dirección",
                    className: "location-search-input",
                    style: {
                      width: '300px',
                      padding:'0px 8px',
                      appearance: 'none',
                      fontFamily: `'Lato', sans-serif`,
                      fontSize: '15',
                      lineHeight: 'inherit',
                      border: '1px solid',
                      borderColor: '#f7f7f7',
                      borderRadius: '6px',
                      backgroundColor: 'white',
                      color: '#0D1136',
                      height: '48px',
                      transition: 'all 0.25s ease',
                      // mb: 3,
                      '&:hover,&:focus': {
                        outline: 0,
                        borderColor: '#009e7f',
                      },
                    },
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    const style = suggestion.active
                      ? { backgroundColor: "#fafafa", cursor: "pointer" }
                      : { backgroundColor: "#ffffff", cursor: "pointer" };
                    return (
                      <div {...getSuggestionItemProps(suggestion, { style })}>
                        <BannerIcon><img src={DeliveryIcon} alt="" /></BannerIcon>{suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete> */}
          {/* {searchResult?.length ? searchResult.map((deliveryMethod, i) => {
              return (
                <PickUpOptions>
                  <Checkbox
                      keyName={`${i}-deliveryMethods`}
                      isChecked={deliveryMethodSelected?.id === deliveryMethod.id}
                      labelText={`${deliveryMethod.name} - ${deliveryMethod.details} `}
                      id={`deliveryMethod-${i}`}
                      onChange={e => {
                          setDeliveryMethod(deliveryMethodSelected?.id === deliveryMethod.id ? null : deliveryMethod)
                      }}
                  />
                </PickUpOptions>
              )}
              ) : ('')
          } */}
          {/* {notInsideDeliveryAreas && (
            <DeliveryText>{intl.formatMessage({ id: 'noDeliveryThereYet', defaultMessage: 'noDeliveryThereYet' })}</DeliveryText>
          )} */}
          <TextField
            id="address"
            type="text"
            disabled={true}
            width='100%'
            placeholder={intl.formatMessage({ id: 'addressId', defaultMessage: 'Address' })}
            error={touched.address && errors.address}
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />
      </FieldWrapper>
      <FieldWrapper>
        <TextField
          id="location"
          type="text"
          placeholder={intl.formatMessage({ id: 'locationId', defaultMessage: 'Localidad' })}
          width='100%'
          error={touched.location && errors.location}
          value={values.location}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldWrapper>
      <FieldWrapper>
        <TextField
          id="instructions"
          as="textarea"
          width='100%'
          placeholder={intl.formatMessage({ id: 'instructionsId', defaultMessage: 'Delivery instructions' })}
          error={touched.instructions && errors.instructions}
          value={values.instructions}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldWrapper>

      <Button
        onClick={handleSubmit}
        type="submit"
        style={{ width: '100%', height: '44px' }}
      >
        <FormattedMessage id="savedAddressId" defaultMessage="Save Address" />
      </Button>
    </Form>
  );
};

export default FormEnhancer(UpdateAddressTwo);
