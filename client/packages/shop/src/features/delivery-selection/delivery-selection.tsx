import React, { useState, useEffect, useRef, useContext } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { DeliveryMethodsConstants, deliveryMethodCookieKeyName, plazaBelgranoPolygon, plazaEspañaPolygon, plazaNueveDeJulioPolygon, plazadoceDeOctubrePolygon, resistenciaZipCode } from 'utils/constant';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { DELIVERY_METHOD } from 'graphql/query/delivery';
import { CloseIcon } from 'assets/icons/CloseIcon';
import Checkbox from 'components/checkbox/checkbox';
import { getCookie, setCookie } from 'utils/session';
import { ActionButton, ActionsButtons, BannerIcon, CardWrapper, Container, DeliveryMethods, DeliveryText, Heading, Input, Offer, OfferSection, Options, PickUpOptions, Wrapper } from './delivery-selection.style';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { alignContent, borderRadius, display, flexDirection, justifyContent, textAlign, width } from 'styled-system';
import { ProfileContext } from 'contexts/profile/profile.context';
import { ADD_ADDRESS } from 'graphql/mutation/address';
import DeliveryIcon from 'assets/images/locationIcon.webp';

interface Props {
  deliveryMethodSelected: any
  setDeliveryMethodSelected: any
  deliveryMethodTypeSelected: any
  setDeliveryMethodType: any
}

const DeliverySelection: React.FC<Props> = ({ ...props  }) => {

  const [deliveryMethodSelected, setDeliveryMethod] = React.useState(undefined);
  const { data: deliverData } = useQuery(DELIVERY_METHOD)
  const deliveryMethods = deliverData?.deliveryMethods?.items;
  const [zipCode, setZipCode] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [notInsideDeliveryAreas, setNotInsideDeliveryAreas] = useState(false);

  const setDeliveryMethodAndSaveCookie =  (deliveryOrPickupMethodSelected) => {
    const deliveryMethod = isPickUpSelected ? deliveryOrPickupMethodSelected : {...deliveryOrPickupMethodSelected, deliveryAddress};
    setDeliveryMethod(deliveryMethod)
    props.setDeliveryMethodSelected(deliveryMethod, false)

    // setCookie(deliveryMethodCookieKeyName, deliveryMethod);
    // }
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

  const searchPickupZipCode =  (e) => {
    const zipCode = e.target.value;
    handleOnFocus(e)
    setZipCode(zipCode)
    const pickUpOptionsMethods = deliveryMethods?.filter(deliveryMethod => {
      return deliveryMethod.isPickUp === true;
    });

    // const methodFound = pickUpOptionsMethods.filter(method => method.details.includes(zipCode)
    const methodFound = zipCode === resistenciaZipCode ? pickUpOptionsMethods : [];

    // e.stopPropagation();
    setSearchResult(methodFound.length > 0 ? methodFound : null)
    
    // setSearchResult(pickUpOptionsMethods)
  };

  const setDelivery =  (e, deli: DeliveryMethodsConstants) => {
    // if (deli === DeliveryMethodsConstants.DELIVERY) {
    //   setDeliveryMethodType(deli)
    //   props.setDeliveryMethodSelected(DeliveryMethodsConstants.DELIVERY)
    //   return;  
    // }
    e.stopPropagation();
    props.setDeliveryMethodType(deli)
    setSearchResult(null)
    setZipCode('')
  };

  const deleteDeliveryAddress =  () => {
    setSearchResult(null)
    setDeliveryAddress('')
    setNotInsideDeliveryAreas(false)
  };

  const handleOnFocus =  (event) => {
    event.preventDefault()
    event.stopPropagation()
  };

  // deliveryMethodSelected
  const isPickUpSelected = props.deliveryMethodTypeSelected === DeliveryMethodsConstants.PICKUP;
  const isDeliverySelected = props.deliveryMethodTypeSelected === DeliveryMethodsConstants.DELIVERY;
  const intl = useIntl();

  const handleSelect = async (address) => {
    setDeliveryAddress(address);
    const results = await geocodeByAddress(address);
    const latLng = await getLatLng(results[0]);
    setNotInsideDeliveryAreas(false);
    let deliveryOptionsMethods = [];

    if (inside([latLng.lat, latLng.lng], plazadoceDeOctubrePolygon)) {
      deliveryOptionsMethods = deliveryMethods?.filter(deliveryMethod => {
        if (!deliveryMethod.isPickUp && deliveryMethod.details.includes('Lunes')) { deliveryMethod.name = 'GRATIS'; return true;}
        return !deliveryMethod.isPickUp;
      });
    } else if (inside([latLng.lat, latLng.lng], plazaBelgranoPolygon)) {
      deliveryOptionsMethods = deliveryMethods?.filter(deliveryMethod => {
        if (!deliveryMethod.isPickUp && deliveryMethod.details.includes('Martes')) { deliveryMethod.name = 'GRATIS'; return true;}
        return !deliveryMethod.isPickUp;
      });
    } else if (inside([latLng.lat, latLng.lng], plazaNueveDeJulioPolygon)) {
        deliveryOptionsMethods = deliveryMethods?.filter(deliveryMethod => {
          if (!deliveryMethod.isPickUp && deliveryMethod.details.includes('Miercoles')) { deliveryMethod.name = 'GRATIS'; return true;}
          return !deliveryMethod.isPickUp;
        });
    } else if (inside([latLng.lat, latLng.lng], plazaEspañaPolygon)) {
      deliveryOptionsMethods = deliveryMethods?.filter(deliveryMethod => {
        if (!deliveryMethod.isPickUp && deliveryMethod.details.includes('Jueves')) { deliveryMethod.name = 'GRATIS'; return true;}
        return !deliveryMethod.isPickUp;
      });
    } else {
      setNotInsideDeliveryAreas(true);
      console.log(inside([latLng.lat, latLng.lng], plazaNueveDeJulioPolygon));
    }
    setSearchResult(deliveryOptionsMethods)
  };
    
  // const searchDeliveryZipCode =  (e) => {
  //   handleOnFocus(e)
  //   setZipCode(e.target.value)
    

  //   const methodFound = deliveryOptionsMethods.filter(method => method.name.includes(zipCode));
  //   e.stopPropagation();
  //   // setSearchResult(deli ? methodFound : null)
  //   setSearchResult(deliveryOptionsMethods)
  // };

  
  return (
        <DeliveryMethods>
            <Options>
                <CardWrapper color={isPickUpSelected ? '#009E7F' : '#e4f4fc'} onClick={(e) => setDelivery(e, DeliveryMethodsConstants.PICKUP)}><FormattedMessage id="pickUpId" defaultMessage="notFoundId" /></CardWrapper> 
                <CardWrapper color={isDeliverySelected ? '#009E7F' : '#e4f4fc'} onClick={(e) => setDelivery(e, DeliveryMethodsConstants.DELIVERY)}><FormattedMessage id="deliveryId" defaultMessage="notFoundId2" /></CardWrapper> 
            </Options>
            <Wrapper>
            
                { !!props.deliveryMethodTypeSelected && (
                  <Container>
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
                          value={deliveryAddress}
                          onChange={(e) => setDeliveryAddress(e)}
                          onSelect={handleSelect}
                          searchOptions={{
                            types: [],
                            componentRestrictions: { country: "ar" },
                          }}
                        >
                          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div onClick={(e) => handleOnFocus(e)} >
                              <div style={{ width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: '0px 0px',}}>
                                <input
                                  {...getInputProps({
                                    placeholder: "Calle, altura, localidad",
                                    className: "location-search-input",
                                    style: {
                                      width: '220px',
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
                                />{ deliveryAddress?.length ? (
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
                        <div style={{ paddingTop: '20px'}}>
                          {searchResult?.length ? searchResult.map((deliveryMethod, i) => {
                            return (
                              <PickUpOptions>
                                <Checkbox
                                    keyName={`${i}-deliveryMethods`}
                                    isChecked={deliveryMethodSelected?.id === deliveryMethod.id}
                                    labelText={`${deliveryMethod.name} - ${deliveryMethod.details} `}
                                    id={`deliveryMethod-${i}`}
                                    onChange={e => {
                                        setDeliveryMethodAndSaveCookie(deliveryMethodSelected?.id === deliveryMethod.id ? null : deliveryMethod)
                                    }}
                                />
                              </PickUpOptions>
                            )}) : ('')
                          }
                        </div>
                      { !searchResult && zipCode.length >= 4 && props.deliveryMethodTypeSelected === DeliveryMethodsConstants.PICKUP && (
                        <DeliveryText>{intl.formatMessage({ id: 'noDittoPickUpLocations', defaultMessage: 'noDittoPickUpLocations' })}</DeliveryText>
                      )}
                      {notInsideDeliveryAreas && (
                        <DeliveryText>{intl.formatMessage({ id: 'noDeliveryThereYet', defaultMessage: 'noDeliveryThereYet' })}</DeliveryText>
                      )}
                  </Container>
                )}
                {/* <OfferSection>
                <GiftBox />
                <Offer>
                    <FormattedMessage
                    id="locationModalFooter"
                    defaultMessage="Free Delivery For 1st Order"
                    values={{ number: 1 }}
                    />
                </Offer>
                </OfferSection> */}
            </Wrapper>
        </DeliveryMethods>
  );

};

export default DeliverySelection;

