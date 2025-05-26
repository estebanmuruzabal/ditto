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
// import { GoogleMap, useJsApiLoader, Marker, LoadScript } from "@react-google-maps/api";
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
    // geocodeByAddress(address)
    //   .then(results => getLatLng(results[0]))
    //   .then(latLng => {
    //     console.log('Success', latLng)
    //     setAddress(address)
    //   })
    //   .catch(error => console.error('Error', error));

  };

// const handleSelect = address => {
  //   geocodeByAddress(address)
  //     .then(results => getLatLng(results[0]))
  //     .then(latLng => {
  //       console.log('Success', latLng)
  //       setDeliveryAddress(address)
  //     })
  //     .catch(error => console.error('Error', error));

  // };

  // const isPointInPolygon = (latitude, longitude, polygon) => {
  //   if (typeof latitude !== 'number' || typeof longitude !== 'number') {
  //     throw new TypeError('Invalid latitude or longitude. Numbers are expected')
  //   } else if (!polygon || !Array.isArray(polygon)) {
  //     throw new TypeError('Invalid polygon. Array with locations expected')
  //   } else if (polygon.length === 0) {
  //     throw new TypeError('Invalid polygon. Non-empty Array expected')
  //   }
  
  //   const x = latitude; const y = longitude
  
  //   let inside = false
  //   for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
  //     const xi = polygon[i][0]; const yi = polygon[i][1]
  //     const xj = polygon[j][0]; const yj = polygon[j][1]
  
  //     const intersect = ((yi > y) !== (yj > y)) &&
  //             (x < (xj - xi) * (y - yi) / (yj - yi) + xi)
  //     if (intersect) inside = !inside
  //   }
  
  //   return inside
  // };

  // const dogsBeachPolygon = [
  //   { latitude: 32.7502030, longitude: -117.2432460},
  //   { latitude: 32.7489451, longitude: -117.2523153},
  //   { latitude: 32.7541973, longitude: -117.2525931},
  //   { latitude: 32.7542674, longitude: -117.2460937},
  // ]

  // console.log('isInside:', isPointInPolygon(32.7449888, -117.2263579, dogsBeachPolygon))
  
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

  const containerStyle = {
    width: '100%',
    height: '400px'
  };
  
  const center = {
    lat: 37.437041393899676,
    lng: -4.191635586788259
  };

  return (
    <></>
      //   <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      //   <GoogleMap
      //     mapContainerStyle={containerStyle}
      //     center={center}
      //     zoom={10}
      //   >
      //     <Marker position={center} />
      //   </GoogleMap>
      // </LoadScript>
    //     {/* <SubHeading>
    //       <FormattedMessage
    //         id="locationModalSubHeading"
    //         defaultMessage="You have to select your location for deliver service perpous"
    //       />
    //     </SubHeading> */}
    //     {/* <PlacesAutocomplete
    //       value={address}
    //       onChange={(e) => setAddress(e)}
    //       onSelect={handleSelect}
    //       searchOptions={{
    //         types: [],
    //         componentRestrictions: { country: "us" },
    //       }}
    //     >
    //       {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
    //         <div>
    //           <input
    //             {...getInputProps({
    //               placeholder: "Enter address",
    //               className: "location-search-input",
    //               style: {
    //                 display: 'block',
    //                 width: '220px',

    //                 padding:'0px 8px',
    //                 appearance: 'none',
    //                 fontFamily: `'Lato', sans-serif`,
    //                 fontSize: 'base',
    //                 lineHeight: 'inherit',
    //                 border: '1px solid',
    //                 borderColor: '#f1f1f1',
    //                 borderRadius: '3px',
    //                 backgroundColor: 'white',
    //                 color: 'text.bold',
    //                 height: '48px',
    //                 transition: 'all 0.25s ease',
    //                 // mb: 3,
    //                 '&:focus': {
    //                   borderColor: '#009E7F',
    //                 },
    //               },
    //             })}
    //           />
    //           <div className="autocomplete-dropdown-container">
    //             {loading && <div>Loading...</div>}
    //             {suggestions.map((suggestion) => {
    //               const style = suggestion.active
    //                 ? { backgroundColor: "#fafafa", cursor: "pointer" }
    //                 : { backgroundColor: "#ffffff", cursor: "pointer" };
    //               return (
    //                 <div {...getSuggestionItemProps(suggestion, { style })}>
    //                   {suggestion.description}
    //                 </div>
    //               );
    //             })}
    //           </div>
    //         </div>
    //       )}
    //     </PlacesAutocomplete> */}
    //     <Button
    //       fullwidth
    //       radius={100}
    //       onClick={handleZipCode}
    //     >
    //       <FormattedMessage id='continueBtn' defaultMessage='Continue' />
    //     </Button>
    //   </Container>
    //   <OfferSection>
    //     <GiftBox />
    //     <Offer>
    //       <FormattedMessage
    //         id="locationModalFooter"
    //         defaultMessage="Free Delivery For 1st Order"
    //         values={{ number: 1 }}
    //       />
    //     </Offer>
    //   </OfferSection>
    // </Wrapper>
  );
}
