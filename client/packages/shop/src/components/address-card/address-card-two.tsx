import React, { useContext } from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, Form } from 'formik';
import { closeModal } from '@redq/reuse-modal';
import TextField from 'components/forms/text-field';
import { Button } from 'components/button/button';
import { useMutation } from '@apollo/react-hooks';
import { ADD_ADDRESS, UPDATE_ADDRESS } from 'graphql/mutation/address';
import { FieldWrapper, Heading } from './address-card.style';
import { ProfileContext } from 'contexts/profile/profile.context';
import { FormattedMessage, useIntl } from 'react-intl';

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
  const ID = item.id;
  let newAddressid = null;
  const addressItem = item.item;
  const addressValue = {
    id: ID,
    addressId: addressItem.id, 
    title: values.title,
    address: values.address,
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
      if (Object.keys(addressItem).length === 0) {
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
  return (
    <Form>
      <Heading>{intl.formatMessage({ id: addressItem?.id ? 'editAddressId' : 'addNewAddressId', defaultMessage: 'Address name' })}</Heading>
      <FieldWrapper>
        <TextField
          id="title"
          type="text"
          placeholder={intl.formatMessage({ id: 'addressRefId', defaultMessage: 'Address name' })}
          error={touched.title && errors.title}
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldWrapper>
      <FieldWrapper>
        <TextField
          id="address"
          type="text"
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
