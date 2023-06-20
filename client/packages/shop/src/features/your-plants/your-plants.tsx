import React,  { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Col } from 'react-styled-flexboxgrid';
import moment from 'moment';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { GET_ORDERS } from 'graphql/query/order.query';
import { CURRENCY, HumiditySensorMode } from 'utils/constant';
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
  InputUpper,
  PlantPageWrapper
} from './your-plants.style';
import { FormattedMessage, useIntl } from 'react-intl';
import { GET_LOGGED_IN_USER } from 'graphql/query/customer.query';
import { OrderListWrapper } from 'features/your-plants/your-plants.style';
import ErrorMessageTwo from 'components/error-message/error-message-two';
import { Button } from 'components/button/button';
import { ADD_PLANT, UPDATE_HUMIDITY_SETTINGS_1, UPDATE_HUMIDITY_SETTINGS_2 } from 'graphql/query/plants.query';
import Select from 'react-select';
import { Input } from 'components/forms/input';
import { ProfileContext } from 'contexts/profile/profile.context';
import { SuccessMsg } from 'features/user-profile/settings/settings.style';
  

type YourPlantsProps = {
  data?: any;
  index?: Number;
  Router?: any;
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const YourPlants: React.FC<YourPlantsProps> = ({ deviceType }) => {
  const { state, dispatch } = useContext(ProfileContext);
  const { data, error, loading } = useQuery(GET_LOGGED_IN_USER);
  // const router = useRouter();
  // const intl = useIntl();
  const [name, setPlantName] = useState('');
  const [controllerId, setControllerID] = useState('');
  const [userinfoMsg, setUserinfoMsg] = useState('');
  const [addPlant] = useMutation(ADD_PLANT);
  const [updateSoilHumiditySettings1] = useMutation(UPDATE_HUMIDITY_SETTINGS_1);
  const [updateSoilHumiditySettings2] = useMutation(UPDATE_HUMIDITY_SETTINGS_2);
  const { plants } = state;

  if (loading) {
    return <ErrorMessage message={'Cargando...'} />
  };

  if (error) {
    return (
      <ErrorMessage message={error.message} />
    );
  };

  const handleHumiditySettings1Change = (plant: any, field: string, value: string) => {
    dispatch({
      type: 'HANDLE_HUMIDITY_1_SETTINGS_CHANGE',
      payload: { plant, value, field },
    });

    setTimeout(function () {
      handleSettingsSaveClick(plant, field, value);
    }, 1000)

    setUserinfoMsg('Update user info successfully');
    setTimeout(function () {
      setUserinfoMsg('');
    }, 8000)
  };

  const handleHumiditySettings2Change = (plant: any, field: string, value: string) => {
    dispatch({
      type: 'HANDLE_HUMIDITY_2_SETTINGS_CHANGE',
      payload: { plant, value, field },
    });

    handleSettingsSaveClick(plant, field, value);

    setUserinfoMsg('Update user info successfully');
    setTimeout(function () {
      setUserinfoMsg('');
    }, 8000)
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

    
  const handleSettingsSaveClick = (plant: any, fieldName: string, fieldValue: string) => {
    console.log(plant, fieldName, fieldValue);
    updateSoilHumiditySettings1({
      variables: {
        id: data?.getUser?.id,
        [fieldName]: fieldValue,
        controllerId: plant.controllerId,
        ...plant.soilHumiditySettings1
      },
    });
  };

  const modeOptions = [
    { value: HumiditySensorMode.SEEDS_POOL_IRRIGATION, label: 'Semillero' },
    { value: HumiditySensorMode.MANUAL, label: 'Manual' },
    { value: HumiditySensorMode.IRRIGATE_ON_DEMAND, label: 'A demanda' },
    { value: HumiditySensorMode.SCHEDULE, label: 'Calendario' },
    { value: HumiditySensorMode.NONE, label: 'NONE' }
  ];

  const manualModeOptions = [
    { value: true, label: 'Prendido' },
    { value: false, label: 'Apagado' }
  ];

  return (
    <PlantPageWrapper>
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

          { plants?.length < 1 && (<Text>No tienes plantas registradas</Text>) }
          { plants?.map((plant, i: number) => {
            const selectedMode = modeOptions.find((option) => option.value === plant?.soilHumiditySettings1?.mode);
            const selectedManualState = manualModeOptions.find((option) => option.value === plant?.soilHumiditySettings1?.relayOneWorking);
            console.log('selectedManualState', selectedManualState)
              return (
                <OrderListWrapper key={i + '-orderList'}>
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
                            id="humedadSensor1Id"
                            defaultMessage="humedadSensor1Id"
                          />
                        </Text>
                      </ListTitle>
                      <ListDes>
                        <Text>{plant?.soilHumidity1} </Text>
                      </ListDes>
                    </ListItem>
                    <ListItem>
                      <ListTitle>
                        <Text bold>
                          <FormattedMessage
                            id="modoId"
                            defaultMessage="modoId"
                          />
                        </Text>
                      </ListTitle>
                      <ListDes>
                        <Select 
                          onChange={(e: any) => handleHumiditySettings1Change(plant, 'mode', e.value)}
                          value={selectedMode}
                          options={modeOptions}
                        />
                      </ListDes>
                    </ListItem>
                  
                  { (plant?.soilHumiditySettings1?.mode === HumiditySensorMode.IRRIGATE_ON_DEMAND ||
                    plant?.soilHumiditySettings1?.mode === HumiditySensorMode.SEEDS_POOL_IRRIGATION) && (
                    <>
                      <ListItem>
                        <ListTitle>
                          <Text bold>
                            <FormattedMessage
                              id='maxHumidityId'
                              defaultMessage='maxHumidityId'
                            />
                          </Text>
                        </ListTitle>
                        <ListDes>
                          <Input
                            type='number'
                            name='maxWarning'
                            value={plant?.soilHumiditySettings1.maxWarning}
                            onChange={(e: any) => handleHumiditySettings1Change(plant, 'maxWarning', e.target.value)}
                            backgroundColor='#F7F7F7'
                            marginBottom='10px'
                            // intlInputLabelId="profileEmailField"
                          />
                        </ListDes>
                      </ListItem>

                      <ListItem>
                        <ListTitle>
                          <Text bold>
                            <FormattedMessage
                               id='minHumidityId'
                               defaultMessage='minHumidityId'
                            />
                          </Text>
                        </ListTitle>
                        <ListDes>
                          <InputUpper
                            type='number'
                            name='minWarning'
                            value={plant?.soilHumiditySettings1?.minWarning}
                            onChange={(e: any) => handleHumiditySettings1Change(plant, 'minWarning', e.target.value)}
                            backgroundColor='#F7F7F7'
                            height='48px'
                            marginBottom='10px'
                            // intlInputLabelId="profileNameField"
                          />
                        </ListDes>
                      </ListItem>
    
                    </>
                  )}

                  { plant?.soilHumiditySettings1?.mode === HumiditySensorMode.MANUAL && (
                    <>
                      <ListItem>
                        <ListTitle>
                          <Text bold>
                            <FormattedMessage
                              id='manualModeStateId'
                              defaultMessage='manualModeStateId'
                            />
                          </Text>
                        </ListTitle>
                        <ListDes>
                          <Select 
                            onChange={(e: any) => handleHumiditySettings1Change(plant, 'relayOneWorking', e.value)}
                            value={selectedManualState}
                            options={manualModeOptions}
                          />
                        </ListDes>
                      </ListItem>
                    </>
                  )}
                  
                  { plant?.soilHumiditySettings1?.mode === HumiditySensorMode.NONE && (
                    <Text>Necesitas seleccionar un modo</Text>
                  )}
                  
                  {/* <OrderListWrapper>
                    <ListItem>
                      <ListTitle>
                        <Text bold>
                          <FormattedMessage
                            id="humedadSensor2Id"
                            defaultMessage="humedadSensor2Id"
                          />
                        </Text>
                      </ListTitle>
                      <ListDes>
                        <Text>{plant?.soilHumidity2} </Text>
                      </ListDes>
                    </ListItem>
                    <ListItem>
                      <ListTitle>
                        <Text bold>
                          <FormattedMessage
                            id="modoId"
                            defaultMessage="modoId"
                          />
                        </Text>
                      </ListTitle>
                      <ListDes>
                        <Text>{plant?.soilHumiditySettings2?.mode} </Text>
                      </ListDes>
                    </ListItem>
                  </OrderListWrapper> */}

                  <OrderListWrapper>
                    <ListItem>
                      <ListTitle>
                        <Text bold>
                          <FormattedMessage
                            id="tempSensorId"
                            defaultMessage="tempSensorId"
                          />
                        </Text>
                      </ListTitle>
                      <ListDes>
                        <Text>{plant?.tempeture} </Text>
                      </ListDes>
                    </ListItem>
                  </OrderListWrapper>

                  <OrderListWrapper>
                    <ListItem>
                      <ListTitle>
                        <Text bold>
                          <FormattedMessage
                            id="humedadSensorId"
                            defaultMessage="humedadSensorId"
                          />
                        </Text>
                      </ListTitle>
                      <ListDes>
                        <Text>{plant?.airHumidity} </Text>
                      </ListDes>
                    </ListItem>
                  </OrderListWrapper>

                </OrderListWrapper>
              )
            })
          }

          <Col xs={12} sm={2} md={2} lg={2}>
            <Button size='big' style={{ width: '100%', marginBottom: '10px' }} onClick={handleSettingsSaveClick}>
              <FormattedMessage id='profileSaveBtn' defaultMessage='Save' />
            </Button>
          </Col>
          {userinfoMsg && (
              <SuccessMsg>
                <FormattedMessage
                  id='userInfoSuccess'
                  defaultMessage={userinfoMsg}
                />
              </SuccessMsg>
          )}

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
    </PlantPageWrapper>
  );
};

export default YourPlants;
