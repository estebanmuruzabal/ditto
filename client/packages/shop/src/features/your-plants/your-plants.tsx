import React,  { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Col } from 'react-styled-flexboxgrid';
import moment from 'moment';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { GET_ORDERS } from 'graphql/query/order.query';
import { CURRENCY } from 'utils/constant';
import ErrorMessage from 'components/error-message/error-message';
import { Modal } from '@redq/reuse-modal';
import { Label } from 'components/forms/label';
  
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
  ButtonText,
  Row,
  InputUpper
} from './your-plants.style';
import { FormattedMessage, useIntl } from 'react-intl';
import { GET_LOGGED_IN_USER } from 'graphql/query/customer.query';
import { OrderListWrapper } from 'features/user-profile/order/order.style';
import ErrorMessageTwo from 'components/error-message/error-message-two';
import { Button } from 'components/button/button';
import { ADD_PLANT } from 'graphql/query/plants.query';
  

type YourPlantsProps = {
  data?: any;
  index?: Number;
  Router?: any;
};

const YourPlants: React.FunctionComponent<YourPlantsProps> = (props) => {
  const router = useRouter();
  const intl = useIntl();
  const [name, setPlantName] = useState('');
  const [controllerId, setControllerID] = useState('');
  const { data, error, loading } = useQuery(GET_LOGGED_IN_USER);
  const [addPlant] = useMutation(ADD_PLANT);

  if (loading) {
    return <ErrorMessage message={'Cargando...'} />
  };

  if (error) {
    return (
      <ErrorMessage message={error.message} />
    );
  };


  
  const handleAddClick = () => {
    addPlant({
      variables: {
        id: data?.getUser?.id,
        name,
        controllerId: Number(controllerId)
      },
    });
  };

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

          {/* { userPlants?.length < 1 && (<Text>No tienes plantas registradas</Text>) } */}
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

                  {/* <ListItem>
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
                  </ListItem> */}
                </OrderListWrapper>
              )
            })
          }
          <BlockTitle>
            <FormattedMessage
              id="addController"
              defaultMessage="Your Plants"
            />
          </BlockTitle>
          <Row style={{ alignItems: 'flex-end', marginBottom: '50px' }}>
            <Col xs={12} sm={5} md={5} lg={5}>
              <Label>
                <FormattedMessage
                  id='plantNameField'
                  defaultMessage='Name of the plant'
                />
              </Label>
              <InputUpper
                type='text'
                label='Name'
                name='name'
                value={name}
                onChange={(e) => setPlantName(e.target.value)}
                backgroundColor='#F7F7F7'
                height='48px'
                marginBottom='10px'
                // intlInputLabelId="profileNameField"
              />
            </Col>

             <Col xs={12} sm={5} md={5} lg={5}>
              <Label>
                <FormattedMessage
                  id='controllerIdField'
                  defaultMessage='ID of the controller'
                />
              </Label>
              <InputUpper
                type='number'
                label='Controller ID'
                name='controllerId'
                value={controllerId}
                onChange={(e) => setControllerID(e.target.value)}
                backgroundColor='#F7F7F7'
                height='48px'
                marginBottom='10px'
                // intlInputLabelId="profileNameField"
              />
            </Col>
          </Row>
          <Button className="cart-button" variant="secondary" borderRadius={100} onClick={handleAddClick}>
            <ButtonText>
              <FormattedMessage id={"addPlantButton"} defaultMessage="Add plant" />
            </ButtonText>
          </Button>
        </OrderDetails>
      </OrderReceivedContainer>
    </OrderReceivedWrapper>
  );
};

export default YourPlants;
