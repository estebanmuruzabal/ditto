import React, { useState, useEffect, useRef, useContext } from 'react';
import DeliveryIcon from 'assets/images/locationIcon.webp';
import { useMedia } from 'utils/use-media';
import { FormattedMessage, useIntl } from 'react-intl';
import PopoverBigger from 'components/popover-bigger/popover-bigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faChevronCircleUp, faTrash } from "@fortawesome/free-solid-svg-icons";
import { DeliveryMethodsConstants, deliveryMethodCookieKeyName } from 'utils/constant';
import { getCookie, setCookie } from 'utils/session';
import DeliverySelection from 'features/delivery-selection/delivery-selection';
import { BannerIcon, BannerText, DeliveryText, LocationContent, SubHeaderWrapper } from './sub-header.style';

interface Props {
  className: string
}


const LocationMenu = ({ deliveryMethodSelected, isOpen }) => {
  const mobile = useMedia('(max-width: 580px)');
  const address = mobile 
    ? deliveryMethodSelected?.details?.split('|')?.[0].substring(0, deliveryMethodSelected?.details?.split('|')?.[0]?.lengtha)
    : deliveryMethodSelected?.details?.split('|')?.[0]
  const time = deliveryMethodSelected?.details?.split('|')?.[1]

  const intl = useIntl();

  const defaultText = intl.formatMessage({ id: 'defaultDeliveryPickupText', defaultMessage: 'check here' })
  return (
    <LocationContent>
        { isOpen 
          ? (<FontAwesomeIcon icon={faChevronCircleDown} className="fas fa-chevron-down" style={{ color: "black" }} />) 
          : (<FontAwesomeIcon icon={faChevronCircleUp} className="fas fa-chevron-up" style={{ color: "black" }} />)
        }
        { 

        }
        <DeliveryText>{deliveryMethodSelected ? deliveryMethodSelected?.isPickUp ? DeliveryMethodsConstants.PICKUP : DeliveryMethodsConstants.DELIVERY : defaultText}</DeliveryText>
        { deliveryMethodSelected?.name && address && (
          <>
              |
            <BannerIcon><img src={DeliveryIcon} alt="" /></BannerIcon>
            <BannerText>{`${deliveryMethodSelected.name} - ${address}`}</BannerText>
          </>
        )}
      </LocationContent>
  );
};


const SubHeader: React.FC<Props> = ({ ...props  }) => {
  const [deliveryMethodSelected, setDeliveryMethodSaved] = React.useState();

  // useEffect(() => {
  //   // if (getCookie(deliveryMethodCookieKeyName) && !deliveryMethodSelected) {
  //   //   const deliveryMethodSelected = JSON.parse(getCookie(deliveryMethodCookieKeyName));
  //   //   setDeliveryMethodSaved(deliveryMethodSelected)
  //   // }
  //   console.log('window.location.href.split("?").pop()',window.location.href.split("?").pop())
  //   if (window.location.href.split("?").pop()) {
  //     handlePhoneChange(window.location.href.split("?").pop())
  //   }
  // }, []);


  return (
    <SubHeaderWrapper className={props.className} id="layout-header">
      <PopoverBigger
        direction="left"
        className="user-pages-dropdown"
        openHandler={<LocationMenu
          isOpen={false} deliveryMethodSelected={deliveryMethodSelected} />
        }
        closeHandler={<LocationMenu
          isOpen={true} deliveryMethodSelected={deliveryMethodSelected}/>
        }
        content={<DeliverySelection deliveryMethodSelected={deliveryMethodSelected} setDeliveryMethodSaved={setDeliveryMethodSaved} />}
      />
    </SubHeaderWrapper>
  );

};

export default SubHeader;
