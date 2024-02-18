import React, { useRef } from 'react';
import { IntlProvider } from 'react-intl';
import { InjectRTL } from 'assets/styles/global.style';
import Cookie from 'js-cookie';
import { isRTL, isLocale } from './language.utils';
import { StyleSheetManager } from 'styled-components';
import RTLPlugin from 'stylis-plugin-rtl';
import { Locales } from 'utils/constant';

const LanguageContext = React.createContext({} as any);
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export const LanguageProvider = ({ children, messages }) => {
  const [locale, setLocale] = React.useState('en');
  const OPEN_CAGE_KEY = process.env.OPEN_CAGE_KEY;
  const [location, setLocation] = React.useState('');

  const changeLanguage = (newLocale): void => {
    setLocale(newLocale);
    document.documentElement.lang = newLocale;
    Cookie.set('locale', newLocale);
  };

  React.useEffect(() => {
    setLocateBasedOnLocation()
  }, [locale, location]);

  const setLocateBasedOnLocation = () => {
    const isUs = location.toLowerCase().includes('united states')
    const isAr = location.toLowerCase().includes('argentina')

    if (isUs && locale !== Locales.EN) {
      changeLanguage(Locales.EN)
    } else if (isAr && locale !== Locales.ES) {
      changeLanguage(Locales.ES)
    }
  }

  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: 'AIzaSyBfOLWnTDHvAxu7eftvpbiGT54bcOZgwS0',
  // });
  // console.log('isLoaded',isLoaded)
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          // console.log(result);
          if (result.state === "granted") {
            //If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "prompt") {
            //If prompt then the user will be asked to give permission
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
        });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);
  
  function getLocationInfo(latitude, longitude) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=9224762c77b8486bb04d32f036690d2f`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status.code === 200) {

          // console.log("results:", data.results);
          setLocation(data.results[0].formatted);
        } else {
          console.log("Reverse geolocation request failed.");
        }
      })
      .catch((error) => console.error(error));
  }
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  function success(pos) {
    var crd = pos.coords;
    // console.log("Your current position is:");
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);
    
    getLocationInfo(crd.latitude, crd.longitude);
  }

  function errors(err) { console.warn(`ERROR(${err.code}): ${err.message}`); }


  React.useEffect(() => {
    const localSetting = Cookie.get('locale');
    if (localSetting && isLocale(localSetting)) {
      document.documentElement.lang = localSetting;
      setLocale(localSetting);
    }
  }, [locale]);
  let isRtl = isRTL(locale);

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage, isRtl, location }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <InjectRTL lang={locale} dir={isRtl ? 'rtl' : 'ltr'}>
          <StyleSheetManager stylisPlugins={[]}>
            {children}
          </StyleSheetManager>
        </InjectRTL>
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export const useLocale = () => React.useContext(LanguageContext);
