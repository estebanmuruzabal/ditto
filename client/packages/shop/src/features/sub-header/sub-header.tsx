import React, { useState, useEffect, useRef } from 'react';
import { BannerIcon, BannerText, DeliveryMethods, LocationContent, MethodOption, SubHeaderWrapper } from './sub-header.style';
import { useLocale } from 'contexts/language/language.provider';
import DeliveryIcon from 'assets/images/locationIcon.webp';
import Popover from 'components/popover/popover';
import { useMedia } from 'utils/use-media';
import { MenuItem } from 'layouts/header/menu/language-switcher/language-switcher.style';
import { FormattedMessage } from 'react-intl';
import PopoverBigger from 'components/popover-bigger/popover-bigger';
interface Props {
  className: string
}


const LocationMenu = ({ cityAndStateText, onClick, deliveryMethodSelected }) => {
  
  return (
    <LocationContent onClick={onClick}>
        <i class="ld ld-ChevronUp ml2 dn db-m" aria-hidden="true"></i>
        {deliveryMethodSelected}
        |
        <BannerIcon><img src={DeliveryIcon} alt="" /></BannerIcon>
        <BannerText>{cityAndStateText && cityAndStateText}</BannerText>
      </LocationContent>
  );
};

const DeliveryMethodsView = ({ cityAndStateText, onClick }) => {
  return (
    <DeliveryMethods>
      <MethodOption onClick={() => onClick('Pickup')}>Pickup</MethodOption> 
      <MethodOption onClick={() => onClick('Delivery')}>Delivery</MethodOption> 
    </DeliveryMethods>
  );
};

const SubHeader: React.FC<Props> = ({ ...props  }) => {
  const { location } = useLocale();
  const mobile = useMedia('(max-width: 580px)');
  const [deliveryMethodSelected, setDeliveryMethod] = React.useState('');
  const cityAndStateText = location ? mobile ?
    `${location.split(', ')[1]}, ${location.split(', ')[2]}`
    : `${location.split(', ')[0]}, ${location.split(', ')[1]}`
    : '';
console.log('location',location)
  return (
    <SubHeaderWrapper className={props.className} id="layout-header">
      <PopoverBigger
        direction="left"
        className="user-pages-dropdown"
        handler={<LocationMenu onClick={()=> null} deliveryMethodSelected={deliveryMethodSelected} cityAndStateText={cityAndStateText} />}
        content={<DeliveryMethodsView onClick={setDeliveryMethod} cityAndStateText={cityAndStateText} />}
      />
  </SubHeaderWrapper>
  );

};

export default SubHeader;
