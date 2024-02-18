import React, { useState, useEffect } from 'react';
import { closeModal } from '@redq/reuse-modal';
import MaskedInput from 'react-text-mask';
import { FormattedMessage, useIntl } from 'react-intl';
import { getCookie, setCookie } from 'utils/session';
import {
  Wrapper,
  Container,
  LogoWrapper,
  Heading,
  SubHeading,
  OfferSection,
  Offer,
  Button,
  Input,
} from './location-modal.style';
import { GiftBox } from 'assets/icons/GiftBox';
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
// import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import {
  setKey,
  setDefaults,
  setLanguage,
  setRegion,
  fromAddress,
  fromLatLng,
  fromPlaceId,
  setLocationType,
  geocode,
  RequestType,
} from "react-geocode";
const googleApiKey = process.env.GOOGLE_API_KEY;

import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
// import { useJsApiLoader } from '@react-google-maps/api';


export default function LocationModal({ isPickUp }) {
  // Your existing state variables and functions here
  const [address, setAddress] = useState("");
  const intl = useIntl();
  // Handle place selection
  
  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: "YOUR_API_KEY"
  // })
  
  // const handleSelect = async (address) => {
  //   console.log('address',address)
  //   setAddress(address);
  //   const results = await geocodeByAddress(address);
  //   const latLng = await getLatLng(results[0]);
  // };
  
  const handleZipCode = () => {
    setCookie('zip_code', address);
    closeModal();
  };

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng)
        setAddress(address)
      })
      .catch(error => console.error('Error', error));

  };


  // const fetchCurrentPosition = () => {
  //   navigator.geolocation.getCurrentPosition(
  //     function(position) {
  //       var pos = new google.maps.LatLng(
  //         position.coords.latitude,
  //         position.coords.longitude
  //       );

  //       console.log(position.coords);
  //       google.maps.geometry.poly.containsLocation(pos, refPoly.current.polygon)
  //         ? setShowBtn(true)
  //         : setShowBtn(false);
  //     },
  //     function(error) {
  //       console.log(error);
  //     }
  //   );
  // };

  useEffect(() => {
    if (!getCookie('first_visit')) {
      setCookie('first_visit', true);
    }
  }, []);
  console.log('addresss', address)


  return (
    <Wrapper>
      <Container>
        <Heading>
          { isPickUp ? (
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
        <PlacesAutocomplete
          value={address}
          onChange={(e) => setAddress(e)}
          onSelect={handleSelect}
          searchOptions={{
            types: [],
            componentRestrictions: { country: "us" },
          }}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: "Enter address",
                  className: "location-search-input",
                  style: {
                    display: 'block',
                    width: '220px',

                    padding:'0px 8px',
                    appearance: 'none',
                    fontFamily: `'Lato', sans-serif`,
                    fontSize: 'base',
                    lineHeight: 'inherit',
                    border: '1px solid',
                    borderColor: '#f1f1f1',
                    borderRadius: '3px',
                    backgroundColor: 'white',
                    color: 'text.bold',
                    height: '48px',
                    transition: 'all 0.25s ease',
                    // mb: 3,
                    '&:focus': {
                      borderColor: '#009E7F',
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
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <Button
          fullwidth
          radius={100}
          onClick={handleZipCode}
        >
          <FormattedMessage id='continueBtn' defaultMessage='Continue' />
        </Button>
      </Container>
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
  );
}
