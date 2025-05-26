import React, { useState, useEffect, useRef, useContext } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { DeliveryMethodsConstants, deliveryMethodCookieKeyName, plazaBelgranoPolygon, plazaEspañaPolygon, plazaNueveDeJulioPolygon, plazadoceDeOctubrePolygon, resistenciaZipCode } from 'utils/constant';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { DELIVERY_METHOD } from 'graphql/query/delivery';
import { CloseIcon } from 'assets/icons/CloseIcon';
import Checkbox from 'components/checkbox/checkbox';
import { getCookie, setCookie } from 'utils/session';
import { ActionButton, ActionsButtons, BannerIcon, Button, ButtonGroup, CardWrapper, Container, DeleteButtonsContainer, DeliveryMethods, DeliveryText, Heading, Input, Offer, OfferSection, Options, PickUpOptions, Wrapper } from './delivery-selection.style';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { alignContent, borderRadius, display, flexDirection, justifyContent, textAlign, width } from 'styled-system';
import { ProfileContext } from 'contexts/profile/profile.context';
import { ADD_ADDRESS } from 'graphql/mutation/address';
import DeliveryIcon from 'assets/images/locationIcon.webp';
import { Plus } from 'assets/icons/PlusMinus';
import RadioCard from 'components/radio-card/radio-card';
import RadioCardTWO from 'components/radio-card/radio-card-two';
import RadioGroupThree from 'components/radio-group/radio-group-three';
import RadioGroupTwo from 'components/radio-group/radio-group-two';
import { IconWrapper } from '../checkout-two/checkout-two.style';
import { ButtonsContainer } from 'components/add-time-schedule/add-schedule-card.style';


interface Props {
  deliveryMethodSelected: any
  setDeliveryAddress: any
  deliveryMethodTypeSelected: any
  setDeliveryMethodsSelected: any
  deliveryMethodsSelected: any
  setDeliveryMethodType: any
  deliveryMethods: any
  setSubmitResult: (result: any) => void
  submitResult: any
  cartProduct: any // Added this line
  handleEditDelete?: (item: any, index: number, action: string, type: string) => void // Added this line
  userSavedAddresses?: any[] // Added this line
  handlePrimary?: (item: any, type: string) => void // Added this line
}

const DeliverySelection: React.FC<Props> = ({ ...props  }) => {

  const [zipCode, setZipCode] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);
  const [deliveryAddressAutocomplete, setDeliveryAddressAutocomplete] = useState("");
  const [insideDeliveryArea, setInsideDeliveryArea] = useState(true);

  // const setDeliveryMethod =  (deliveryOrPickupMethodSelected) => {
  //   const deliveryMethod = isPickUpSelected ? deliveryOrPickupMethodSelected : {...deliveryOrPickupMethodSelected, deliveryAddressAutocomplete};
  //   setDeliveryMethodSelected(deliveryMethod)
  //   props.setDeliveryAddress(deliveryMethod, false)

  //   // setCookie(deliveryMethodCookieKeyName, deliveryMethod);
  //   // }
  // };

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

  const searchPickupZipCode =  (e) => {
    const zipCode = e.target.value;
    handleOnFocus(e)
    setZipCode(zipCode)
    const pickUpOptionsMethods = props.deliveryMethods?.filter(deliveryMethod => {
      return deliveryMethod.isPickUp === true;
    });

    // const methodFound = pickUpOptionsMethods.filter(method => method.details.includes(zipCode)
    const methodsFound = zipCode === resistenciaZipCode ? pickUpOptionsMethods : [];

    // e.stopPropagation();

    props.setDeliveryMethodsSelected(methodsFound.length > 0 ? methodsFound : null)

  };

  const setDelivery =  (e, deli: DeliveryMethodsConstants) => {
    e?.stopPropagation();
    props.setDeliveryMethodType(deli)
    props.setDeliveryMethodsSelected(null)
    setZipCode('')
  };

  const deleteDeliveryAddress =  () => {
    setDeliveryAddressAutocomplete('')
    setInsideDeliveryArea(true)
    setZipCode('')
  };

  const deleteDeliverySelection =  () => {
    props.setDeliveryMethodsSelected(null)
    props.setDeliveryAddress(null, true);
    setDeliveryAddressAutocomplete('')
    setInsideDeliveryArea(true)
    props.setDeliveryMethodType(null)
    setZipCode('')
  };

  const handleOnFocus =  (event) => {
    event.preventDefault()
    event.stopPropagation()
  };

  // deliveryMethodSelected
  const isPickUpSelected = props.deliveryMethodTypeSelected === DeliveryMethodsConstants.PICKUP;
  const isDeliverySelected = props.deliveryMethodTypeSelected === DeliveryMethodsConstants.DELIVERY;
  const intl = useIntl();

  const handleSelect = async (address, addressAlreadyAdded) => {

    const results = await geocodeByAddress(address);
    console.log('results', results);
    const latLng = await getLatLng(results[0]);
    let deliveryOptionsMethods = [];
    let insideDeliveryArea = false;

    if (inside([latLng.lat, latLng.lng], plazadoceDeOctubrePolygon)) {
      console.log('inside plazadoceDeOctubrePolygon');
      insideDeliveryArea = true;
      deliveryOptionsMethods = props.deliveryMethods?.filter(deliveryMethod => {
        if (!deliveryMethod.isPickUp && deliveryMethod.details.includes('Lunes')) { deliveryMethod.name = 'GRATIS'; return true;}
        return !deliveryMethod.isPickUp;
      });
    } else if (inside([latLng.lat, latLng.lng], plazaBelgranoPolygon)) {
      console.log('inside plazaBelgranoPolygon');
      insideDeliveryArea = true;
      deliveryOptionsMethods = props.deliveryMethods?.filter(deliveryMethod => {
        if (!deliveryMethod.isPickUp && deliveryMethod.details.includes('Martes')) { deliveryMethod.name = 'GRATIS'; return true;}
        return !deliveryMethod.isPickUp;
      });
    } else if (inside([latLng.lat, latLng.lng], plazaNueveDeJulioPolygon)) {
      console.log('inside plazaNueveDeJulioPolygon');
      insideDeliveryArea = true;
        deliveryOptionsMethods = props.deliveryMethods?.filter(deliveryMethod => {
          if (!deliveryMethod.isPickUp && deliveryMethod.details.includes('Miercoles')) { deliveryMethod.name = 'GRATIS'; return true;}
          return !deliveryMethod.isPickUp;
        });
    } else if (inside([latLng.lat, latLng.lng], plazaEspañaPolygon)) {
      insideDeliveryArea = true;
      console.log('inside plazaEspañaPolygon');
      deliveryOptionsMethods = props.deliveryMethods?.filter(deliveryMethod => {
        if (!deliveryMethod.isPickUp && deliveryMethod.details.includes('Jueves')) { deliveryMethod.name = 'GRATIS'; return true;}
        return !deliveryMethod.isPickUp;
      });
    }

    if (insideDeliveryArea) {
      console.log('sad');
      setInsideDeliveryArea(true)
      props.setDeliveryMethodsSelected(deliveryOptionsMethods)
      props.setDeliveryAddress(results[0]?.formatted_address, addressAlreadyAdded) 
    } else {
      setInsideDeliveryArea(false)
    }
  };

  return (
      <>
        <DeliveryMethods>
          { props.deliveryMethodsSelected && (
            <DeleteButtonsContainer>
              <Button
                className='addButton'
                variant='text'
                type='button'
                onClick={() => deleteDeliverySelection()}
              >
                <IconWrapper>
                  <Plus width='10px' />
                </IconWrapper>
                <FormattedMessage id='changeAddress' defaultMessage='Add New' />
              </Button>
            </DeleteButtonsContainer>
          )}
          <Options style={{justifyContent: !props.deliveryMethodsSelected ? 'space-between' : 'space-between', marginTop: props.deliveryMethodsSelected ? '30px' : '0px'}}>
              <CardWrapper color={isPickUpSelected ? '#009E7F' : '#e4f4fc'} onClick={(e) => setDelivery(e, DeliveryMethodsConstants.PICKUP)}><FormattedMessage id="pickUpId" defaultMessage="notFoundId" /></CardWrapper>
              <CardWrapper color={isDeliverySelected ? '#009E7F' : '#e4f4fc'} onClick={(e) => setDelivery(e, DeliveryMethodsConstants.DELIVERY)}><FormattedMessage id="deliveryId" defaultMessage="notFoundId2" /></CardWrapper>
          </Options>
        </DeliveryMethods>
        
        { !!props?.userSavedAddresses?.length && props?.deliveryMethodTypeSelected === DeliveryMethodsConstants.DELIVERY && (
          <ButtonGroup>
            <RadioGroupThree
              items={props.userSavedAddresses}
                component={(item: any, index: any) => (
                <RadioCardTWO
                    id={`${index}-addresses`}
                    key={index}
                    address={item.address}
                    location={item.location}
                    instructions={item.instructions}
                    title={item.title}
                    name='address'
                    isChecked={props.submitResult?.delivery_address?.includes(item.address)}
                    onChange={() => props.handlePrimary(item, 'address')}
                    onClick={() => { 
                      handleSelect(`${item.address?.split(",")[0]} ${item.address?.split(",")[1]}, ${item.location}, ${item.instructions}`, true);
                    }}
                    hasEdit={false}
                    // onEdit={() => props.handleEditDelete(item, index, 'edit', 'address')}
                    onDelete={() =>
                      props.handleEditDelete(item, index, 'delete', 'address')
                    }
                  />
                )}
                />
              </ButtonGroup>
            )}
        
            <Wrapper>  
              { !!props.deliveryMethodTypeSelected && (
                <Container>
                  
                    { !props.deliveryMethodsSelected && (
                      <>
                      <Heading  onClick={(e) => handleOnFocus(e)}>
                      { isPickUpSelected ? (
                      <FormattedMessage
                          id="pickupModalheading"
                          defaultMessage="pickupModalheading"
                      />
                      ) : (
                      <FormattedMessage
                          id="deliveryModalheading"
                          defaultMessage="deliveryModalheading"
                      />
                      )}
                    </Heading>
                      { isPickUpSelected ? (
                        <div onClick={(e) => handleOnFocus(e)}>
                          <Input
                              type='text'
                              name='name'
                              onFocus={(e) => handleOnFocus(e)}
                              // placeholder='Código postal'
                              value={zipCode}
                              autoComplete="off"
                              // we have to change the onChange because the is no one for the controller name actualy
                              onChange={(e) => searchPickupZipCode(e)}
                          />
                        </div>
                        ) : (
                        <PlacesAutocomplete
                          value={deliveryAddressAutocomplete}
                          onChange={(e) => setDeliveryAddressAutocomplete(e)}
                          onSelect={(e) => handleSelect(e, false)}
                          searchOptions={{
                            types: [],
                            componentRestrictions: { country: "ar" },
                          }}
                        >
                          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div onClick={(e) => handleOnFocus(e)} >
                              <div style={{ width: '100%',
                                display: 'flex',
                                justifyContent: 'left',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '0px 0px',}}>
                                <input
                                  {...getInputProps({
                                    placeholder: "Calle, altura, localidad",
                                    className: "location-search-input",
                                    style: {
                                      width: '100%',
                                      padding:'0px 8px',
                                      appearance: 'none',
                                      fontFamily: `'Lato', sans-serif`,
                                      fontSize: '15',
                                      lineHeight: 'inherit',
                                      border: '1px solid',
                                      borderColor: '#f7f7f7',
                                      borderRadius: '6px',
                                      backgroundColor: '#f7f7f7',
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
                                />{ deliveryAddressAutocomplete?.length ? (
                                  <ActionsButtons className='button-wrapper'>
                                      <ActionButton onClick={() => deleteDeliveryAddress()} className='delete-btn'>
                                          <CloseIcon />
                                      </ActionButton>
                                  </ActionsButtons>
                                ): ''}
                              </div>
                              <div className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map((suggestion, i) => {
                                  const style = suggestion.active
                                    ? { backgroundColor: "#fafafa", cursor: "pointer", borderBottom: "1px solid gray",justifyContent: "flex-start", display: 'flex', maxWidth: '320px' }
                                    : { backgroundColor: "#ffffff", cursor: "pointer", borderBottom: "1px solid gray",justifyContent: "flex-start", display: 'flex', maxWidth: '320px', alignItems: "center" };
                                  return (
                                    <div key={`${i}-suggestion`} {...getSuggestionItemProps(suggestion, { style })}>
                                      <BannerIcon><img src={DeliveryIcon} alt="" /></BannerIcon>{suggestion.description?.split(",")[0]}{suggestion.description?.split(",")[1]}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </PlacesAutocomplete>
                        )}
                      { !props.deliveryMethodsSelected && zipCode.length >= 4 && props.deliveryMethodTypeSelected === DeliveryMethodsConstants.PICKUP && (
                        <DeliveryText>{intl.formatMessage({ id: 'noDittoPickUpLocations', defaultMessage: 'noDittoPickUpLocations' })}</DeliveryText>
                      )}
                      {!insideDeliveryArea && (
                        <DeliveryText>{intl.formatMessage({ id: 'noDeliveryThereYet', defaultMessage: 'noDeliveryThereYet' })}</DeliveryText>
                      )}
                      </>
                        
                    )}
                    
                </Container>
              )}
          </Wrapper>
      </>
    );

};

export default DeliverySelection;

