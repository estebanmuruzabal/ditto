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
  PlantsPageContainer,
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
  PlantPageWrapper,
  PlantsWrapper
} from './your-plants.style';
import { FormattedMessage, useIntl } from 'react-intl';
import { GET_LOGGED_IN_USER } from 'graphql/query/customer.query';
import { PlantsListWrapper } from 'features/your-plants/your-plants.style';
import ErrorMessageTwo from 'components/error-message/error-message-two';
import { Button } from 'components/button/button';
import { ADD_PLANT, UPDATE_HUMIDITY_SETTINGS_1, UPDATE_HUMIDITY_SETTINGS_2 } from 'graphql/query/plants.query';
import Select from 'react-select';
import { Input } from 'components/forms/input';
import { ProfileContext } from 'contexts/profile/profile.context';
import { SuccessMsg } from 'features/user-profile/settings/settings.style';
import Switch from 'components/switch/switch';
  

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

  const handleHumiditySettings1Change = (plant: any, field: string, value: string | boolean) => {
    dispatch({
      type: 'HANDLE_HUMIDITY_1_SETTINGS_CHANGE',
      payload: { plant, value, field },
    });

    setTimeout(function () {
      handleSettings1SaveClick(plant, field, value);
    }, 1000)

    setUserinfoMsg('Update user info successfully');
    setTimeout(function () {
      setUserinfoMsg('');
    }, 8000)
  };

  const handleHumiditySettings2Change = (plant: any, field: string, value: string | boolean) => {
    dispatch({
      type: 'HANDLE_HUMIDITY_2_SETTINGS_CHANGE',
      payload: { plant, value, field },
    });

    handleSettings2SaveClick(plant, field, value);

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

    
  const handleSettings1SaveClick = (plant: any, fieldName: string, fieldValue: string | boolean) => {
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

  const handleSettings2SaveClick = (plant: any, fieldName: string, fieldValue: string | boolean) => {
    console.log(plant, fieldName, fieldValue);
    updateSoilHumiditySettings2({
      variables: {
        id: data?.getUser?.id,
        [fieldName]: fieldValue,
        controllerId: plant.controllerId,
        ...plant.soilHumiditySettings2
      },
    });
  };

  const modeOptions = [
    { value: HumiditySensorMode.SEEDS_POOL_IRRIGATION, label: 'Riego por inmersión' },
    { value: HumiditySensorMode.MANUAL, label: 'Manual' },
    { value: HumiditySensorMode.IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND, label: 'Semi-automático' },
    { value: HumiditySensorMode.IRRIGATE_ON_DEMAND, label: 'Automático' },
    { value: HumiditySensorMode.SCHEDULE, label: 'Calendario de riego' },
    { value: HumiditySensorMode.NONE, label: 'NONE' }
  ];

  const manualModeOptions = [
    { value: true, label: 'Prendido' },
    { value: false, label: 'Apagado' }
  ];

  const fourRelaysOptions = [
    { value: 'isRelayOneOn', label: 'Enchufe 1' },
    { value: 'isRelayTwoOn', label: 'Enchufe 2' },
    { value: 'isRelayThirdOn', label: 'Enchufe 3' },
    { value: 'isRelayFourthOn', label: 'Enchufe 4' }
  ];

  const eightRelaysOptions = [
    { value: 'isRelayOneOn', label: 'Enchufe 1' },
    { value: 'isRelayTwoOn', label: 'Enchufe 2' },
    { value: 'isRelayThirdOn', label: 'Enchufe 3' },
    { value: 'isRelayFourthOn', label: 'Enchufe 4' }
  ];

  const renderSoilSensor1 = (plant: any, i: any) => {
    const selectedMode = modeOptions.find((option) => option.value === plant?.soilHumiditySettings1?.mode);
    const selectedManualState = manualModeOptions.find((option) => option.value === plant?.soilHumiditySettings1?.relayOneWorking);
    const relayOneSelected = fourRelaysOptions.find((option) => option.value === plant?.soilHumiditySettings1?.relayOneIdRelated);
    const relayTwoSelected = fourRelaysOptions.find((option) => option.value === plant?.soilHumiditySettings1?.relayTwoIdRelated);
    return (
      <>
      <PlantsPageContainer key={i + '-orderList'}>
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
            <Input
              type='text'
              name='name'
              value={plant?.soilHumiditySettings1.name}
              onChange={(e: any) => handleHumiditySettings1Change(plant, 'name', e.target.value)}
              backgroundColor='#F7F7F7'
              // intlInputLabelId="profileEmailField"
            />
          </ListDes>
        </ListItem>
      

          <ListItem style={{ justifyContent: 'flex-start' }}>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="soilHumidityId"
                  defaultMessage="soilHumidityId"
                />
              </Text>
            </ListTitle>
            <ListDes style={{ marginLeft: '10px' }}>
              <Text>{plant?.soilHumidity1} %</Text>
            </ListDes>
          </ListItem>
          <ListItem style={{ justifyContent: 'flex-start' }}>
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
                styles={selectStyle}
              />
            </ListDes>
          </ListItem>

          <ListItem style={{ justifyContent: 'flex-start' }}>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="notifyChangesId"
                  defaultMessage="notifyChangesId"
                />
              </Text>
            </ListTitle>
            <ListDes style={{ marginLeft: '10px' }}>
              <Switch 
                disabled={false}
                checked={plant?.soilHumiditySettings1?.sendWhatsappWarnings}
                labelPosition={'right'}
                // className,
                onUpdate={() => handleHumiditySettings1Change(plant, 'sendWhatsappWarnings', !plant?.soilHumiditySettings1?.sendWhatsappWarnings)}
                // style
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
                  // intlInputLabelId="profileNameField"
                />
              </ListDes>
            </ListItem>

            <ListItem>
              <ListTitle>
                <Text bold>
                  <FormattedMessage
                    id='asociateRelayOneId'
                    defaultMessage='asociateRelayOneId'
                  />
                </Text>
              </ListTitle>
              <ListDes>
                <Select 
                  onChange={(e: any) => handleHumiditySettings1Change(plant, 'relayOneIdRelated', e.value)}
                  value={relayOneSelected}
                  options={fourRelaysOptions}
                  styles={selectStyle}
                />
              </ListDes>
            </ListItem>

            <ListItem>
              <ListTitle>
                <Text bold>
                  <FormattedMessage
                    id='asociateRelayTwoId'
                    defaultMessage='asociateRelayTwoId'
                  />
                </Text>
              </ListTitle>
              <ListDes>
                <Select 
                  onChange={(e: any) => handleHumiditySettings1Change(plant, 'relayTwoIdRelated', e.value)}
                  value={relayTwoSelected}
                  options={fourRelaysOptions}
                  styles={selectStyle}
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
                  styles={selectStyle}
                />
              </ListDes>
            </ListItem>

            <ListItem>
              <ListTitle>
                <Text bold>
                  <FormattedMessage
                    id='asociateRelayId'
                    defaultMessage='asociateRelayId'
                  />
                </Text>
              </ListTitle>
              <ListDes>
                <Select 
                  onChange={(e: any) => handleHumiditySettings1Change(plant, 'relayOneIdRelated', e.value)}
                  value={relayOneSelected}
                  options={fourRelaysOptions}
                  styles={selectStyle}
                />
              </ListDes>
            </ListItem>
          </>
        )}

        { plant?.soilHumiditySettings1?.mode === HumiditySensorMode.SEEDS_POOL_IRRIGATION && (
          <>
            <ListItem>
              <ListTitle>
                <Text bold>
                  <FormattedMessage
                    id='irrigationTimeId'
                    defaultMessage='irrigationTimeId'
                  />
                </Text>
              </ListTitle>
              <ListDes>
                <Input
                  type='number'
                  name='relayOneAutomatedTimeToRun'
                  value={plant?.soilHumiditySettings1.relayOneAutomatedTimeToRun}
                  onChange={(e: any) => handleHumiditySettings1Change(plant, 'relayOneAutomatedTimeToRun', e.target.value)}
                  backgroundColor='#F7F7F7'
                  // intlInputLabelId="profileEmailField"
                />
              </ListDes>
            </ListItem>

            <ListItem>
              <ListTitle>
                <Text bold>
                  <FormattedMessage
                    id='irrigationEvacuationTimeId'
                    defaultMessage='irrigationEvacuationTimeId'
                  />
                </Text>
              </ListTitle>
              <ListDes>
                <Input
                  type='number'
                  name='relayTwoAutomatedTimeToRun'
                  value={plant?.soilHumiditySettings1.relayTwoAutomatedTimeToRun}
                  onChange={(e: any) => handleHumiditySettings1Change(plant, 'relayTwoAutomatedTimeToRun', e.target.value)}
                  backgroundColor='#F7F7F7'
                  // intlInputLabelId="profileEmailField"
                />
              </ListDes>
            </ListItem>

          </>
        )}
        
        
        { plant?.soilHumiditySettings1?.mode === HumiditySensorMode.NONE && (
          <Text>Necesitas seleccionar un modo</Text>
        )}
        </PlantsPageContainer>
      </>
    )
  }

  const renderSoilSensor2 = (plant: any, i: any) => {
    const selectedMode = modeOptions.find((option) => option.value === plant?.soilHumiditySettings2?.mode);
    const selectedManualState = manualModeOptions.find((option) => option.value === plant?.soilHumiditySettings2?.relayOneWorking);
    const relayOneSelected = fourRelaysOptions.find((option) => option.value === plant?.soilHumiditySettings2?.relayOneIdRelated);
    const relayTwoSelected = fourRelaysOptions.find((option) => option.value === plant?.soilHumiditySettings2?.relayTwoIdRelated);
    return (
      <PlantsPageContainer key={i + '-orderList'}>
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
            <Input
              type='text'
              name='name'
              value={plant?.soilHumiditySettings2.name}
              onChange={(e: any) => handleHumiditySettings2Change(plant, 'name', e.target.value)}
              backgroundColor='#F7F7F7'
              // intlInputLabelId="profileEmailField"
            />
          </ListDes>
        </ListItem>
      

          <ListItem style={{ justifyContent: 'flex-start' }}>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="soilHumidityId"
                  defaultMessage="soilHumidityId"
                />
              </Text>
            </ListTitle>
            <ListDes style={{ marginLeft: '10px' }}>
              <Text>{plant?.soilHumidity2} %</Text>
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
                onChange={(e: any) => handleHumiditySettings2Change(plant, 'mode', e.value)}
                value={selectedMode}
                options={modeOptions}
                styles={selectStyle}
              />
            </ListDes>
          </ListItem>

          <ListItem style={{ justifyContent: 'flex-start' }}>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="notifyChangesId"
                  defaultMessage="notifyChangesId"
                />
              </Text>
            </ListTitle>
            <ListDes style={{ marginLeft: '10px' }}>
              <Switch 
                disabled={false}
                checked={plant?.soilHumiditySettings2?.sendWhatsappWarnings}
                labelPosition={'right'}
                // className,
                onUpdate={() => handleHumiditySettings2Change(plant, 'sendWhatsappWarnings', !plant?.soilHumiditySettings2?.sendWhatsappWarnings)}
                // style
              />
            </ListDes>
          </ListItem>


        { (plant?.soilHumiditySettings2?.mode === HumiditySensorMode.IRRIGATE_ON_DEMAND ||
          plant?.soilHumiditySettings2?.mode === HumiditySensorMode.SEEDS_POOL_IRRIGATION) && (
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
                  // min="1" 
                  // max="5"
                  // placeholder={intl.formatMessage({
                  //   id: 'couponPlaceholder',
                  //   defaultMessage: 'Enter Coupon Here',
                  // })}
                  // inputRef={register({required: true})}
                  //               placeholder='Ex: Search By Name'
                                                  required={true}
                  name='maxWarning'
                  value={plant?.soilHumiditySettings2.maxWarning}
                  onChange={(e: any) => handleHumiditySettings2Change(plant, 'maxWarning', e.target.value)}
                  backgroundColor='#F7F7F7'
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
                  value={plant?.soilHumiditySettings2?.minWarning}
                  onChange={(e: any) => handleHumiditySettings2Change(plant, 'minWarning', e.target.value)}
                  backgroundColor='#F7F7F7'
                  height='48px'
                  // intlInputLabelId="profileNameField"
                />
              </ListDes>
            </ListItem>

            <ListItem>
              <ListTitle>
                <Text bold>
                  <FormattedMessage
                    id='asociateRelayOneId'
                    defaultMessage='asociateRelayOneId'
                  />
                </Text>
              </ListTitle>
              <ListDes>
                <Select 
                  onChange={(e: any) => handleHumiditySettings2Change(plant, 'relayOneIdRelated', e.value)}
                  value={relayOneSelected}
                  options={fourRelaysOptions}
                  styles={selectStyle}
                />
              </ListDes>
            </ListItem>

            <ListItem>
              <ListTitle>
                <Text bold>
                  <FormattedMessage
                    id='asociateRelayTwoId'
                    defaultMessage='asociateRelayTwoId'
                  />
                </Text>
              </ListTitle>
              <ListDes>
                <Select 
                  onChange={(e: any) => handleHumiditySettings2Change(plant, 'relayTwoIdRelated', e.value)}
                  value={relayTwoSelected}
                  options={fourRelaysOptions}
                  styles={selectStyle}
                />
              </ListDes>
            </ListItem>
          </>
        )}

        { plant?.soilHumiditySettings2?.mode === HumiditySensorMode.MANUAL && (
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
                  onChange={(e: any) => handleHumiditySettings2Change(plant, 'relayOneWorking', e.value)}
                  value={selectedManualState}
                  options={manualModeOptions}
                  styles={selectStyle}
                />
              </ListDes>
            </ListItem>

            <ListItem>
              <ListTitle>
                <Text bold>
                  <FormattedMessage
                    id='asociateRelayId'
                    defaultMessage='asociateRelayId'
                  />
                </Text>
              </ListTitle>
              <ListDes>
                <Select 
                  onChange={(e: any) => handleHumiditySettings2Change(plant, 'relayOneIdRelated', e.value)}
                  value={relayOneSelected}
                  options={fourRelaysOptions}
                  styles={selectStyle}
                />
              </ListDes>
            </ListItem>
          </>
        )}

        { plant?.soilHumiditySettings2?.mode === HumiditySensorMode.SEEDS_POOL_IRRIGATION && (
          <>
            <ListItem>
              <ListTitle>
                <Text bold>
                  <FormattedMessage
                    id='irrigationTimeId'
                    defaultMessage='irrigationTimeId'
                  />
                </Text>
              </ListTitle>
              <ListDes>
                <Input
                  type='number'
                  name='relayOneAutomatedTimeToRun'
                  value={plant?.soilHumiditySettings2.relayOneAutomatedTimeToRun}
                  onChange={(e: any) => handleHumiditySettings2Change(plant, 'relayOneAutomatedTimeToRun', e.target.value)}
                  backgroundColor='#F7F7F7'
                  // intlInputLabelId="profileEmailField"
                />
              </ListDes>
            </ListItem>

            <ListItem>
              <ListTitle>
                <Text bold>
                  <FormattedMessage
                    id='irrigationEvacuationTimeId'
                    defaultMessage='irrigationEvacuationTimeId'
                  />
                </Text>
              </ListTitle>
              <ListDes>
                <Input
                  type='number'
                  name='relayTwoAutomatedTimeToRun'
                  value={plant?.soilHumiditySettings2.relayTwoAutomatedTimeToRun}
                  onChange={(e: any) => handleHumiditySettings2Change(plant, 'relayTwoAutomatedTimeToRun', e.target.value)}
                  backgroundColor='#F7F7F7'
                  // intlInputLabelId="profileEmailField"
                />
              </ListDes>
            </ListItem>
          </>
        )}
        
        
        { plant?.soilHumiditySettings2?.mode === HumiditySensorMode.NONE && (
          <Text>Necesitas seleccionar un modo</Text>
        )}
        </PlantsPageContainer>
    )
  }

  const selectStyle = {
    control: styles => ({ ...styles, width: '197px' }),
    // option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    //   // const color = chroma(data.color);
    //   return {
    //     ...styles,
    //     backgroundColor: isDisabled ? 'red' : blue,
    //     color: '#FFF',
    //     cursor: isDisabled ? 'not-allowed' : 'default',
    //     ...
    //   };
    // }
  };

  return (
    <PlantPageWrapper>
      <PlantsPageContainer>
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
              return (
                <PlantsWrapper key={i + '-orderList'}>
                  <ListItem>
                      <ListTitle>
                        <Text bold>
                          <FormattedMessage
                            id="controllerNameId"
                            defaultMessage="controllerNameId"
                          />
                        </Text>
                      </ListTitle>
                      <ListDes>
                        <Input
                          type='text'
                          name='name'
                          value={plant?.name}
                          // onChange={(e: any) => handleHumiditySettings1Change(plant, 'name', e.target.value)}
                          backgroundColor='#F7F7F7'
                          // intlInputLabelId="profileEmailField"
                        />
                      </ListDes>
                    </ListItem>

                  {renderSoilSensor1(plant, i)}
                  {renderSoilSensor2(plant, i)}

                  <PlantsPageContainer>
                    <ListItem style={{ justifyContent: 'flex-start' }}>
                      <ListTitle>
                        <Text bold>
                          <FormattedMessage
                            id="tempSensorId"
                            defaultMessage="tempSensorId"
                          />
                        </Text>
                      </ListTitle>
                      <ListDes style={{ marginLeft: '10px' }}>
                        <Text>{plant?.tempeture} °</Text>
                      </ListDes>
                    </ListItem>
                  </PlantsPageContainer>

                  <PlantsPageContainer>
                    <ListItem style={{ justifyContent: 'flex-start' }}>
                      <ListTitle>
                        <Text bold>
                          <FormattedMessage
                            id="humedadAmbienteSensorId"
                            defaultMessage="humedadAmbienteSensorId"
                          />
                        </Text>
                      </ListTitle>
                      <ListDes style={{ marginLeft: '10px' }}>
                        <Text>{plant?.airHumidity} %</Text>
                      </ListDes>
                    </ListItem>
                  </PlantsPageContainer>

                </PlantsWrapper>
              )
            })
          }

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
      </PlantsPageContainer>
    </PlantPageWrapper>
  );
};

export default YourPlants;
