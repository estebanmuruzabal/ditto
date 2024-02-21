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


const LocationMenu = ({ deliveryMethodSaved, isOpen }) => {
  const mobile = useMedia('(max-width: 580px)');
  const address = mobile 
    ? deliveryMethodSaved?.details?.split('|')?.[0].substring(0, deliveryMethodSaved?.details?.split('|')?.[0]?.length - 6)
    : deliveryMethodSaved?.details?.split('|')?.[0]
  const time = deliveryMethodSaved?.details?.split('|')?.[1]

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
        <DeliveryText>{deliveryMethodSaved ? deliveryMethodSaved?.isPickUp ? DeliveryMethodsConstants.PICKUP : DeliveryMethodsConstants.DELIVERY : defaultText}</DeliveryText>
        { deliveryMethodSaved?.name && address && (
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
  const [deliveryMethodSaved, setDeliveryMethodSaved] = React.useState();

  useEffect(() => {
    if (getCookie(deliveryMethodCookieKeyName) && !deliveryMethodSaved) {
      const deliveryMethodSaved = JSON.parse(getCookie(deliveryMethodCookieKeyName));
      setDeliveryMethodSaved(deliveryMethodSaved)
    }
  }, [deliveryMethodSaved]);

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
        content={<DeliverySelection deliveryMethodSaved={deliveryMethodSaved} setDeliveryMethodSaved={setDeliveryMethodSaved} />}
      />
    </SubHeaderWrapper>
  );

};

export default SubHeader;
