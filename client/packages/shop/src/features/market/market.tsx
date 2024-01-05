import React,  { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { openModal } from '@redq/reuse-modal';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { CommonMode, RelaysIds, SensorsTypes } from 'utils/constant';
import ErrorMessage from 'components/error-message/error-message';

import {
  PlantsPageContainer,
  OrderDetails,
  BlockTitle,
  Text,
  ListItem,
  ListTitle,
  ListDes,
  ButtonText,
  PlantPageWrapper,
  PlantsWrapper,
  PlantsSensorContainer,
  Column1,
  Row1,
  CardButtons
} from './market.style';
import { FormattedMessage, useIntl } from 'react-intl';
import { GET_LOGGED_IN_USER } from 'graphql/query/customer.query';
import { Button } from 'components/button/button';
import { CREATE_UPDATE_PLANT, DELETE_SETTING, UPDATE_SETTING } from 'graphql/query/plants.query';
import { Input } from 'components/forms/input';
import { ProfileContext } from 'contexts/profile/profile.context';
import { SuccessMsg } from 'features/user-profile/settings/settings.style';
import { AuthContext } from 'contexts/auth/auth.context';
import { GET_SETTING } from 'graphql/query/site.settings.query';
  

type MarketProps = {
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

const Market: React.FC<MarketProps> = ({ deviceType, userRefetch }) => {
  const { state, dispatch } = useContext(ProfileContext);
  
  const {data, error, loading} = useQuery(GET_SETTING);
  const [ siteSettingData, setSiteSettingData ] = useState<any | null>();
  const intl = useIntl();

  useEffect( () => {
    if(data){
      setSiteSettingData(JSON.parse(data.getSiteSetting.value))
    }
  }, [data])

  if (loading) {
    return <ErrorMessage message={intl.formatMessage({ id: 'loading', defaultMessage: 'Cargando...' })} />
  };

  if (error) {
    return (
      <ErrorMessage message={error.message} />
    );
  };

  const growersList = [
    {
      user_id: '32151231',
      productsCategories: [],
      bestSellProducts: [],
      slug: '/el-patio-de-cachito'
    }
  ]

  return (
    <PlantPageWrapper>
      <PlantsPageContainer style={{ width: '100%' }}>
        <Link href="/profile">
          <a className="home-btn">
            <FormattedMessage id="backProfileBtn" defaultMessage="Back to Profile" />
          </a>
        </Link>

        <BlockTitle>
          <FormattedMessage
            id="dittoBotsIds"
            defaultMessage="dittoBotsIds"
          />
        </BlockTitle>
{/* 
        <buscador />
        <filtros />
        < Mapa growersList={
          userId
          productos(fetch categorylist and 5 products?)
          slug

        }  /> <Filtros />
        <ProductosList>
          <Product>
          <Product>
        </ProductosList> */}
      </PlantsPageContainer>
    </PlantPageWrapper>
  );
};

export default Market;
