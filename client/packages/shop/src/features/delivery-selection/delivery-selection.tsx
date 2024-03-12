import React, { useState, useEffect, useRef, useContext } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { DeliveryMethodsConstants, deliveryMethodCookieKeyName } from 'utils/constant';
import { useQuery } from '@apollo/react-hooks';
import { DELIVERY_METHOD } from 'graphql/query/delivery';
import { GiftBox } from 'assets/icons/GiftBox';
import Checkbox from 'components/checkbox/checkbox';
import { getCookie, setCookie } from 'utils/session';
import { CardWrapper, Container, DeliveryMethods, DeliveryText, Heading, Input, Offer, OfferSection, Options, Wrapper } from './delivery-selection.style';

interface Props {
  deliveryMethodSaved: any
  setDeliveryMethodSaved: any
}

const DeliverySelection: React.FC<Props> = ({ ...props  }) => {
  const [deliveryMethodTypeSelected, setDeliveryMethodType] = React.useState();

  const [deliveryMethodSelected, setDeliveryMethod] = React.useState(undefined);
  const { data: deliverData } = useQuery(DELIVERY_METHOD)
  const deliveryMethods = deliverData?.deliveryMethods?.items;
  // const [address, setDeliveryAddress] = useState("");
  const [zipCode, setZipCode] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);
  
  // useEffect(() => {
  //   if (getCookie(deliveryMethodCookieKeyName) && !props.deliveryMethodSaved) {
  //     const deliveryMethodSaved = JSON.parse(getCookie(deliveryMethodCookieKeyName));
  //     props.setDeliveryMethodSaved(deliveryMethodSaved)
  //   }
  // }, [props.deliveryMethodSaved]);
  
  const setDeliveryMethodAndSaveCookie =  (deli) => {
    setDeliveryMethod(deli)
    props.setDeliveryMethodSaved(deli)
    // if (getCookie('first_visit')) {
    setCookie(deliveryMethodCookieKeyName, deli);
    // }
  };
  
  const searchDeliveryZipCode =  (e, deli) => {
    handleOnFocus(e)
    setZipCode(deli)
    const deliveryOptionsMethods = deliveryMethods?.filter(deliveryMethod => {
      return !deliveryMethod.isPickUp;
    });

    const methodFound = deliveryOptionsMethods.filter(method => method.name.includes(zipCode));
    e.stopPropagation();
    setSearchResult(deli ? methodFound : null)
  };
  
  const searchPickupZipCode =  (e, deli) => {
    handleOnFocus(e)
    setZipCode(deli)
    const pickUpOptionsMethods = deliveryMethods?.filter(deliveryMethod => {
      return deliveryMethod.isPickUp === true;
    });

    const methodFound = pickUpOptionsMethods.filter(method => method.details.includes(zipCode));

    e.stopPropagation();
    setSearchResult(deli ? methodFound : null)
  };

  const setDelivery =  (e, deli: DeliveryMethodsConstants) => {
    e.stopPropagation();
    setDeliveryMethodType(deli)
    setSearchResult(null)
    setZipCode('')
  };

  const handleOnFocus =  (event) => {
    event.preventDefault()
    event.stopPropagation()
  };

  // deliveryMethodSelected
  const isPickUpSelected = deliveryMethodTypeSelected === DeliveryMethodsConstants.PICKUP;
  const isDeliverySelected = deliveryMethodTypeSelected === DeliveryMethodsConstants.DELIVERY;

  return (
        <DeliveryMethods>
            <Options>
                <CardWrapper color={isPickUpSelected ? '#009E7F' : '#e4f4fc'} onClick={(e) => setDelivery(e, DeliveryMethodsConstants.PICKUP)}>Pickup</CardWrapper> 
                <CardWrapper color={isDeliverySelected ? '#009E7F' : '#e4f4fc'} onClick={(e) => setDelivery(e, DeliveryMethodsConstants.DELIVERY)}>Delivery</CardWrapper> 
            </Options>
            <Wrapper>
            
                { !!deliveryMethodTypeSelected && (
                  <Container>
                    <Heading  onClick={(e) => handleOnFocus(e)}>
                        { isPickUpSelected ? (
                        <FormattedMessage
                            id="pickupModalheading"
                            defaultMessage="Select Your Location"
                        />
                        ) : (
                        <FormattedMessage
                            id="deliveryModalheading"
                            defaultMessage="Select Your Location"
                        />
                        )}
                      </Heading>
                      <div onClick={(e) => handleOnFocus(e)}>
                        <Input
                            type='text'
                            name='name'
                            onFocus={(e) => handleOnFocus(e)}
                            placeholder='ZIP Code'
                            value={zipCode}
                            // we have to change the onChange because the is no one for the controller name actualy
                            onChange={(e) => isPickUpSelected ? searchPickupZipCode(e, e.target.value) : searchDeliveryZipCode(e, e.target.value)}
                        />
                      </div>
                      { searchResult?.length === 0 && zipCode.length > 4 && (
                          <DeliveryText>{deliveryMethodTypeSelected === DeliveryMethodsConstants.PICKUP ? 'No Dittos Pickup Locations found, yet, sorry' : 'Sorry, we dont deliver there, yet..'}</DeliveryText>
                      )}
                      {searchResult?.length ? searchResult.map((result, i) => {
                          return (
                            <>
                              <Checkbox
                                  keyName={`${i}-results`}
                                  isChecked={deliveryMethodSelected?.id === result.id}
                                  labelText={`${result.name} - ${result.details}`}
                                  id={`result-${i}`}
                                  onChange={e => {
                                      setDeliveryMethodAndSaveCookie(deliveryMethodSelected?.id === result.id ? null : result)
                                  }}
                              />
                            </>
                          )}
                          ) : ('')
                      }
                      {!!searchResult?.length && <>{isPickUpSelected ? <FormattedMessage id="timepickupOfConvinience" defaultMessage="Frevery For 1st Order" /> : <FormattedMessage id="timedeliOfConvinience" defaultMessage="Fder" />}</>}
                  </Container>
                )}
                <OfferSection>
                <GiftBox />
                <Offer>
                    <FormattedMessage
                    id="locationModalFooter"
                    defaultMessage="Free Delivery For 1st Order"
                    values={{ number: 1 }}
                    />
                </Offer>
                </OfferSection>
            </Wrapper>
        </DeliveryMethods>
  );

};

export default DeliverySelection;

