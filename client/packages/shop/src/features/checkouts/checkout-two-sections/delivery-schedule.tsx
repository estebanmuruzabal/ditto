import React, { useState, useEffect, useRef, useContext } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { DeliveryMethodsConstants, deliveryCarrySelectOptions, deliveryMethodCookieKeyName, plazaBelgranoPolygon, plazaEspañaPolygon, plazaNueveDeJulioPolygon, plazadoceDeOctubrePolygon, resistenciaZipCode } from 'utils/constant';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { DELIVERY_METHOD } from 'graphql/query/delivery';
import { CloseIcon } from 'assets/icons/CloseIcon';
import Checkbox from 'components/checkbox/checkbox';
import { getCookie, setCookie } from 'utils/session';
import { ActionButton, ActionsButtons, BannerIcon, Button, CardWrapper, Container, DeliveryMethods, DeliveryText, Heading, Input, Offer, OfferSection, Options, PickUpOptions, Wrapper } from './delivery-selection.style';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { alignContent, borderRadius, display, flexDirection, justifyContent, textAlign, width } from 'styled-system';
import { ProfileContext } from 'contexts/profile/profile.context';
import { ADD_ADDRESS } from 'graphql/mutation/address';
import DeliveryIcon from 'assets/images/locationIcon.webp';
import { Plus } from 'assets/icons/PlusMinus';
import { IconWrapper } from 'components/payment-group/payment-group.style';
import RadioCard from 'components/radio-card/radio-card';
import RadioGroupThree from 'components/radio-group/radio-group-three';
import { ButtonGroup } from '../checkout-two/checkout-two.style';
import RadioCardTWO from 'components/radio-card/radio-card-two';

interface Props {
  setDeliverySchedule: any
  schedulesOfDeliveryMethodSelected: any
  deliveryMethodSelected: any
}

const DeliverySchedule: React.FC<Props> = ({ ...props  }) => {

  const [deliveryMethodSelected, setDeliveryMethodSelected] = React.useState(undefined);
  
  const [zipCode, setZipCode] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [notInsideDeliveryAreas, setNotInsideDeliveryAreas] = useState(false);




  const handleOnFocus =  (event) => {
    event.preventDefault()
    event.stopPropagation()
  };

  const intl = useIntl();

  console.log('schedulesOfDeliveryMethodSelected', props.schedulesOfDeliveryMethodSelected)
  return (
    <>
        <ButtonGroup>
              <RadioGroupThree
                items={props.schedulesOfDeliveryMethodSelected}
                component={(item: any, index: any) => (
                  <RadioCardTWO
                    id={item.id}
                    hasEdit={false}
                    key={item.id}
                    title={item.details}
                    // link={item.isPickUp && item.pickUpAddress ? item.pickUpAddress : null}
                    name='schedule'
                    isChecked={item.id === props.deliveryMethodSelected?.id}
                    withActionButtons={false}
                    onChange={(e) => { props.setDeliverySchedule(item); handleOnFocus(e) }}
                  />
                )}
              />
            </ButtonGroup>
      </>
  );
};

export default DeliverySchedule;

