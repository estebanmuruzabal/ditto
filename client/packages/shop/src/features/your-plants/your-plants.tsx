import React,  { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import moment from 'moment';
import { useQuery } from '@apollo/react-hooks';
import { GET_ORDERS } from 'graphql/query/order.query';
import { CURRENCY } from 'utils/constant';
import ErrorMessage from 'components/error-message/error-message';
import OrderReceivedWrapper, {
  OrderReceivedContainer,
  OrderInfo,
  OrderDetails,
  TotalAmount,
  BlockTitle,
  Text,
  InfoBlockWrapper,
  InfoBlock,
  ListItem,
  ListTitle,
  ListDes,
} from './your-plants.style';
import { FormattedMessage, useIntl } from 'react-intl';
import { GET_LOGGED_IN_USER } from 'graphql/query/customer.query';
import { OrderListWrapper } from 'features/user-profile/order/order.style';

type YourPlantsProps = {
  data?: any;
  index?: Number;
  Router?: any;
};

const YourPlants: React.FunctionComponent<YourPlantsProps> = (props) => {
  const router = useRouter();
  const intl = useIntl();
  const { data, error, loading } = useQuery(GET_LOGGED_IN_USER);
  if (loading) {
    return <ErrorMessage message={'Loading...'} />
  };
  console.log(data)
  if (error) {
    return (
      <ErrorMessage message={error.message} />
    );
  };

  const printHandler = () =>{
    if (typeof window !== 'undefined') {
      window.print()
    }
  }
  console.log('data', data?.getUser?.plants)
  // const dateAndTime = `${moment(myOrder?.datetime).format('MM/DD/YY')}, ${moment(myOrder?.datetime).format('hh:mm A')}`;
  const userPlants = data?.getUser?.plants;

  return (
    <OrderReceivedWrapper>
      <OrderReceivedContainer>
        <Link href="/profile">
          <a className="home-btn">
            <FormattedMessage id="backProfileBtn" defaultMessage="Back to Profile" />
          </a>
        </Link>

        <OrderDetails>
          <BlockTitle>
            <FormattedMessage
              id="yourPlants"
              defaultMessage="Your Plants"
            />
          </BlockTitle>

          { userPlants?.length < 1 && (<Text>No tienes plantas registradas</Text>) }
          { userPlants?.map((plant) => {
              return (
                <OrderListWrapper>
                  <ListItem>
                    <ListTitle>
                      <Text bold>
                        <FormattedMessage
                          id="plantName"
                          defaultMessage="plantName"
                        />
                      </Text>
                    </ListTitle>
                    <ListDes>
                      <Text>{plant?.name} </Text>
                    </ListDes>
                  </ListItem>

                  <ListItem>
                    <ListTitle>
                      <Text bold>
                        <FormattedMessage
                          id="tempId"
                          defaultMessage="tempId"
                        />
                      </Text>
                    </ListTitle>
                    <ListDes>
                      <Text>{plant?.temperatura} </Text>
                    </ListDes>
                  </ListItem>

                  <ListItem>
                    <ListTitle>
                      <Text bold>
                        <FormattedMessage
                          id="humedadId"
                          defaultMessage="humedadId"
                        />
                      </Text>
                    </ListTitle>
                    <ListDes>
                      <Text>{plant?.humedad} </Text>
                    </ListDes>
                  </ListItem>

                  <ListItem>
                    <ListTitle>
                      <Text bold>
                        <FormattedMessage
                          id="phId"
                          defaultMessage="PH"
                        />
                      </Text>
                    </ListTitle>
                    <ListDes>
                      <Text>{"7.2"} </Text>
                    </ListDes>
                  </ListItem>
                </OrderListWrapper>
              )
            })
          }

        </OrderDetails>
      </OrderReceivedContainer>
    </OrderReceivedWrapper>
  );
};

export default YourPlants;
