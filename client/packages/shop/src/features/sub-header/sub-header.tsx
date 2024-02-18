import React, { useState, useEffect, useRef, useContext } from 'react';
import { BannerIcon, BannerText, Button, CardWrapper, Container, DeliveryMethods, DeliveryText, Heading, Input, LocationContent, MethodOption, Offer, OfferSection, Options, SubHeaderWrapper, Wrapper } from './sub-header.style';
import { openModal } from '@redq/reuse-modal';
import { useLocale } from 'contexts/language/language.provider';
import DeliveryIcon from 'assets/images/locationIcon.webp';
import Popover from 'components/popover/popover';
import { useMedia } from 'utils/use-media';
import { MenuItem } from 'layouts/header/menu/language-switcher/language-switcher.style';
import { FormattedMessage, useIntl } from 'react-intl';
import PopoverBigger from 'components/popover-bigger/popover-bigger';
import LocationModal from 'features/location-modal/location-modal';
import { AuthContext } from 'contexts/auth/auth.context';
import AuthenticationForm from 'features/authentication-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronCircleDown, faChevronCircleUp, faTrash } from "@fortawesome/free-solid-svg-icons";
import { DeliveryMethodsConstants } from 'utils/constant';
import { useQuery } from '@apollo/react-hooks';
import { DELIVERY_METHOD } from 'graphql/query/delivery';
import { GiftBox } from 'assets/icons/GiftBox';
import Checkbox from 'components/checkbox/checkbox';
import { getCookie, setCookie } from 'utils/session';

interface Props {
  className: string
}


const LocationMenu = ({ deliveryMethodSaved, isOpen }) => {
  const mobile = useMedia('(max-width: 580px)');
  const address = mobile 
    ? deliveryMethodSaved?.details?.split('|')?.[0].substring(0, deliveryMethodSaved?.details?.split('|')?.[0]?.length - 6)
    : deliveryMethodSaved?.details?.split('|')?.[0]
  const time = deliveryMethodSaved?.details?.split('|')?.[1]

  const intl = useIntl();
  console.log('deliveryMethodSaved:"::', deliveryMethodSaved)
  const defaultText = intl.formatMessage({ id: 'defaultDeliveryPickupText', defaultMessage: 'check here' })
  return (
    <LocationContent>
        { isOpen 
          ? (<FontAwesomeIcon icon={faChevronCircleDown} className="fas fa-chevron-down" style={{ color: "black" }} />) 
          : (<FontAwesomeIcon icon={faChevronCircleUp} className="fas fa-chevron-up" style={{ color: "black" }} />)
        }
        { 

        }
        <DeliveryText>{deliveryMethodSaved ? deliveryMethodSaved?.isPickUp ? DeliveryMethodsConstants.PICKUP : DeliveryMethodsConstants.DELIVERY : defaultText}</DeliveryText>
        { deliveryMethodSaved && (
          <>
              |
            <BannerIcon><img src={DeliveryIcon} alt="" /></BannerIcon>
            <BannerText>{`${deliveryMethodSaved.name} - ${address}`}</BannerText>
          </>
        )}
      </LocationContent>
  );
};


const SubHeader: React.FC<Props> = ({ ...props  }) => {
  const { location } = useLocale();
  const mobile = useMedia('(max-width: 580px)');
  const intl = useIntl();
  const [deliveryMethodTypeSelected, setDeliveryMethodType] = React.useState();
  const [deliveryMethodSaved, setDeliveryMethodSaved] = React.useState();
  const [deliveryMethodSelected, setDeliveryMethod] = React.useState(undefined);
  const { data: deliverData } = useQuery(DELIVERY_METHOD)
  const deliveryMethods = deliverData?.deliveryMethods?.items;
  const { authDispatch } = useContext<any>(AuthContext);
  const [zipCode, setZipCode] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);
  
  useEffect(() => {
    if (getCookie('deliveryMethodSaved') && !deliveryMethodSaved) {
      const deliveryMethodSaved = JSON.parse(getCookie('deliveryMethodSaved'));
      console.log('deliveryMethodSaved', deliveryMethodSaved)
      setDeliveryMethodSaved(deliveryMethodSaved)
    }
  }, []);
  
  const setDeliveryMethodAndSaveCookie =  (deli) => {
    setDeliveryMethod(deli)
    setDeliveryMethodSaved(deli)
    // if (getCookie('first_visit')) {
      setCookie('deliveryMethodSaved', deli);
    // }
  };
  

  const searchDeliveryZipCode =  (e, deli) => {
    handleOnFocus(e)
    setZipCode(deli)
    const deliveryOptionsMethods = deliveryMethods?.filter(deliveryMethod => {
      return !deliveryMethod.isPickUp;
    });
   
    const methodFound = deliveryOptionsMethods.filter(method => method.details.includes(zipCode));

    e.stopPropagation();
    setSearchResult(deli ? methodFound : [])
  };
  
  const searchPickupZipCode =  (e, deli) => {
    handleOnFocus(e)
    setZipCode(deli)
    const pickUpOptionsMethods = deliveryMethods?.filter(deliveryMethod => {
      return deliveryMethod.isPickUp === true;
    });

    const methodFound = pickUpOptionsMethods.filter(method => method.details.includes(zipCode));

    e.stopPropagation();
    setSearchResult(deli ? methodFound : [])
  };

  const setDelivery =  (e, deli: DeliveryMethodsConstants) => {
    e.stopPropagation();
    setDeliveryMethodType(deli)
    setSearchResult([])
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
    <SubHeaderWrapper className={props.className} id="layout-header">
      <PopoverBigger
        direction="left"
        className="user-pages-dropdown"
        openHandler={<LocationMenu
          isOpen={false} deliveryMethodSaved={deliveryMethodSaved} />
        }
        closeHandler={<LocationMenu
          isOpen={true} deliveryMethodSaved={deliveryMethodSaved}/>
        }
        content={
          <DeliveryMethods>
      
            <Options>
              <CardWrapper color={isPickUpSelected ? '#0d1136' : '#e4f4fc'} onClick={(e) => setDelivery(e, DeliveryMethodsConstants.PICKUP)}>Pickup</CardWrapper> 
              <CardWrapper color={isDeliverySelected ? '#0d1136' : '#e4f4fc'} onClick={(e) => setDelivery(e, DeliveryMethodsConstants.DELIVERY)}>Delivery</CardWrapper> 
            </Options>
            <Wrapper>
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
                {/* <SubHeading>
                  <FormattedMessage
                    id="locationModalSubHeading"
                    defaultMessage="You have to select your location for deliver service perpous"
                  />
                </SubHeading> */}
                <div onClick={(e) => handleOnFocus(e)}>
                <Input
                    type='text'
                    name='name'
                    onFocus={(e) => handleOnFocus(e)}
                    placeholder='Enter zip code'
                    value={zipCode}
                    // we have to change the onChange because the is no one for the controller name actualy
                    onChange={(e) => isPickUpSelected ? searchPickupZipCode(e, e.target.value) : searchDeliveryZipCode(e, e.target.value)}
                    width='197px'
                    height='34.5px'
                  />
                </div>
                { searchResult?.length === 0 && zipCode.length > 4 && (
                   <DeliveryText>{deliveryMethodTypeSelected === DeliveryMethodsConstants.PICKUP ? 'No Dittos Pickup Locations found, yet, sorry' : 'Sorry, we dont deliver there, yet..'}</DeliveryText>
                )}
                {searchResult?.length ? searchResult.map((result, i) => {
                  // const isChecked = deliveryMethodSelected?.id === result.id;
                  return (
                      <Checkbox
                        keyName={`${i}-results`}
                        isChecked={deliveryMethodSelected?.id === result.id}
                        labelText={`${result.name} - ${result.details}`}
                        id={`result-${i}`}
                        onChange={e => {
                          setDeliveryMethodAndSaveCookie(deliveryMethodSelected?.id === result.id ? [] : result)
                        }}

                      />
                    )}
                  ) : ('')
                }
              </Container>
              {/* <Button
                  fullwidth
                  radius={100}
                  onClick={null}
                >
                  <FormattedMessage id='con' defaultMessage='Save' />
                </Button> */}
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
        }
      />
  </SubHeaderWrapper>
  );

};

export default SubHeader;
