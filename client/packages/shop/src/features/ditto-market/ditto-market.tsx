import * as React from 'react';
import {useRef, useEffect, useContext} from 'react';
import Link from 'next/link';
import { useMutation, useQuery } from '@apollo/react-hooks';
import ErrorMessage from 'components/error-message/error-message';

import {
  PlantsPageContainer,
  PlantPageWrapper,
} from './ditto-market.style';
import { FormattedMessage, useIntl } from 'react-intl';
import { GET_LOGGED_IN_USER, GET_LOGGED_IN_USER_SETTINGS } from 'graphql/query/customer.query';
import { ProfileContext } from 'contexts/profile/profile.context';
import { AuthContext } from 'contexts/auth/auth.context';
// import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
// import { GeolocateControl } from "mapbox-gl";
// import Map, {GeolocateControl} from 'react-map-gl';
type DittoMarketProps = {
  data?: any;
  userRefetch: any;
  index?: Number;
  Router?: any;
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const DittoMarket: React.FC<DittoMarketProps> = ({ deviceType, userRefetch }) => {
  const { state, dispatch } = useContext(ProfileContext);
  const {authDispatch} = useContext<any>(AuthContext);
  const intl = useIntl();

  const { loading, error, data = {} } = useQuery(GET_LOGGED_IN_USER, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    // pollInterval: 5000,
  });
  // const geoControlRef = useRef<mapboxgl.GeolocateControl>();

  // useEffect(() => {
  //   // Activate as soon as the control is loaded
  //   geoControlRef.current?.trigger();
  // }, [geoControlRef.current]);

  if (loading) {
    return <ErrorMessage message={intl.formatMessage({ id: 'loading', defaultMessage: 'Cargando...' })} />
  };

  if (error) {
    return (
      <ErrorMessage message={error.message} />
    );
  };

  return (
    <PlantPageWrapper>
      {/* <PlantsPageContainer> */}
        {/* <Map
          mapboxAccessToken="pk.eyJ1IjoiZXN0ZWJhbm11cnV6YWJhbCIsImEiOiJjbG4ybGZzYmcwMWQwMmlvMDVrbHhheno3In0.EZPhoOcmHwM3BFhGkrQ2-A"
          initialViewState={{
            longitude: -100,
            latitude: 40,
            zoom: 3.5
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <GeolocateControl ref={geoControlRef} />
        </Map> */}
      {/* </PlantsPageContainer> */}
    </PlantPageWrapper>
  );
};

export default DittoMarket;
