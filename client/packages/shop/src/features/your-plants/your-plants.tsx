import React,  { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { openModal } from '@redq/reuse-modal';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { CommonMode, RelaysIds, SensorsTypes, timezones } from 'utils/constant';
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
  Column1,
  Row1,
  CardButtons,
  DashboardContainer,
  SensorsWrapper
} from './your-plants.style';
import { FormattedMessage, useIntl } from 'react-intl';
import { GET_LOGGED_IN_USER, GET_LOGGED_IN_USER_SETTINGS } from 'graphql/query/customer.query';
import { Button } from 'components/button/button';
import { CREATE_UPDATE_PLANT, DELETE_SETTING, UPDATE_SETTING } from 'graphql/query/plants.query';
import { Input } from 'components/forms/input';
import { ProfileContext } from 'contexts/profile/profile.context';
import { SuccessMsg } from 'features/user-profile/settings/settings.style';
import SoilHumiditySensor from './sensors/SoilHumiditySensor';
import LightSensor from './sensors/LightSensor';
import { ISetting } from 'utils/types';
import Select from 'react-select';
import Plug from './sensors/Plug';
import DistanceSensor from './sensors/DistanceSensor';
import { AuthContext } from 'contexts/auth/auth.context';
import { hasDittoBotUpdatedInLastMinute, getLastNumOfSensor, getSensorWithoutNumber } from 'utils/ditto-bot';
import moment from 'moment';
  

type YourPlantsProps = {
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

const YourPlants: React.FC<YourPlantsProps> = ({ deviceType, userRefetch }) => {
  const { state, dispatch } = useContext(ProfileContext);
  const {authDispatch} = useContext<any>(AuthContext);

  const { loading, error, data = {} } = useQuery(GET_LOGGED_IN_USER, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    // pollInterval: 5000,
  });

  // const { loading1, error1, data1 = {} } = useQuery(GET_LOGGED_IN_USER_SETTINGS, {
  //   notifyOnNetworkStatusChange: true,
  //   fetchPolicy: "network-only",
  //   // pollInterval: 5000,
  // });
  
  // const router = useRouter();
  const intl = useIntl();
  const [name, setPlantName] = useState('');
  const [openTab, setOpenTab] = useState('');
  const [errorId, setErrorId] = useState('');
  const [plantId, setControllerID] = useState('');
  const [userinfoMsg, setUserinfoMsg] = useState('');
  const [sensorSelected, setSensor] = useState('');
  const [timezoneSelected, setTimezone] = useState('');
  const [addPlant] = useMutation(CREATE_UPDATE_PLANT);
  
  const [updateSetting] = useMutation(UPDATE_SETTING);
  const [deleteSetting] = useMutation(DELETE_SETTING);
  const { plants } = state;

  if (loading) {
    return <ErrorMessage message={intl.formatMessage({ id: 'loading', defaultMessage: 'Cargando...' })} />
  };

  if (error) {
    return (
      <ErrorMessage message={error.message} />
    );
  };

  const shouldNotAssignRelay = (plant: any, field: string, value: string | boolean) => {
    const relayOneIdRelated = 'relayOneIdRelated';
    const relayTwoIdRelated = 'relayTwoIdRelated';

    if (field !== relayOneIdRelated && field !== relayTwoIdRelated) return false;

    plant.sensors.map((module) => {
      if ((module[relayOneIdRelated] === value || module[relayTwoIdRelated] === value ) && value !== '') {
        const texto1 = intl.formatMessage({ id: 'relayAlreadyAssinged', defaultMessage: 'Relay already assigned in ' });
        const texto2 = intl.formatMessage({ id: 'relayAlreadyAssinged2', defaultMessage: 'desigagned  ' });
        const hasConfirmed = confirm(texto1 + module.name + texto2);
        if (hasConfirmed) return false;
        return false;
      }
    })

   return false;
  };

  const defaultSettingValuesIfModeChanges = (plant: any, field: string, value: string | boolean, settingType: SensorsTypes) => {
    const mode = 'mode';
    if (field !== mode) return plant;

    const settingIndex = plant.sensors.findIndex((module: ISetting) => module.settingType === settingType);            
    plant.sensors[settingIndex] = getDefaultSetting(settingType, plant.sensors[settingIndex].name, value === CommonMode.NONE ? [] : plant.sensors[settingIndex].logs);
    
   return plant;
  };

  const isClean = (plant: any, field: string, value: string | boolean) => {
    // min max checks
    const minWarning = 'minWarning';
    const maxWarning = 'maxWarning';

    if (field !== minWarning && field !== maxWarning) return true;
    if (Number(value) < 0 || Number(value) > 100) {
      setErrorId(field);
      setTimeout(() => {
          setErrorId('')
      }, 2000)
      return false;
    }
    setErrorId(''); 

    // add more checks
    return true;
  };

  const handleSettingsChange = (plant: any, field: string, value: string | boolean, settingType: SensorsTypes) => {
    // if we want to stop user to reuse plugs, uncomment line bellow
    if (shouldNotAssignRelay(plant, field, value)) return;
    plant = defaultSettingValuesIfModeChanges(plant, field, value, settingType);

    dispatch({ type: settingType, payload: { plant, value, field } });

    if(isClean(plant, field, value)) dispatchSettingSave(plant, field, value, settingType);

    setUserinfoMsg('Update user info successfully');
    setTimeout(function () {
      setUserinfoMsg('');
    }, 8000)
  };

  const handleCreateUpdatePlantOnClick = (plant, name: string, newPlant: boolean, timeZone?: string) => {
    setTimezone(timeZone);
    setTimeout(function () {
      addPlant({
        variables: {
          id: data?.getUser?.id,
          name,
          plantId: newPlant ? Number(plantId) : plant.plantId,
          ...(timeZone && {timeZone})
        },
      });
  
    }, 2000)
    setUserinfoMsg(newPlant ? 'added plant successfully' : 'updated plant successfully');
    setTimeout(function () {
      setUserinfoMsg('');
    }, 2000)  
  };

  const handleDeleteSensor = (plantSelected: any, settingType: SensorsTypes) => {
    deleteSetting({
      variables: {
        id: data?.getUser?.id,
        plantId: plantSelected.plantId,
        settingName: settingType
      },
    });

    const plantIndex = plants.findIndex((plant: any) => plant.plantId === plantSelected.plantId);            
    const settingIndex = plants[plantIndex].sensors.findIndex((module: ISetting) => module.settingType === settingType);            

    dispatch({ type: 'DELETE_MODULE', payload: {plantIndex, settingIndex }});

    setUserinfoMsg('deleted setting successfully');
    setTimeout(function () {
      setUserinfoMsg('');
    }, 2000)  
  };

  const onDeleteSchedule = (plant: any, settingType: SensorsTypes, scheduleIndex: number) => {
    const settingIndex = plant.sensors.findIndex((module: ISetting) => module.settingType === settingType);            
    plant.sensors[settingIndex]?.scheduledOnTimes.splice(scheduleIndex, 1);
    
    updateSetting({
      variables: {
        id: data?.getUser?.id,
        plantId: plant.plantId,
        input: { ...plant.sensors[settingIndex], settingType: settingType }
      },
    });

    setUserinfoMsg('deleted schedule successfully');
    setTimeout(function () {
      setUserinfoMsg('');
    }, 2000)  
  };

  const getDefaultSetting = (settingTypeName: string, name?: string, logs?: string) => { 
    return {
      name: name || '',
      whatsappWarningsOn: false,
      maxWarning: '',
      minWarning: '',
      mode: CommonMode.NONE,
      relayOneAutomatedTimeToRun: '',
      relayTwoAutomatedStartedTime: '',
      relayOneAutomatedStartedTime: '',
      relayOneIdRelated: '',
      relayOneWorking: false,
      relayTwoAutomatedTimeToRun: '',
      relayTwoIdRelated: '',
      relayTwoWorking: false,
      logs: logs || [],
      scheduledOnTimes: [],
      settingType: settingTypeName
    }
}
    
  const dispatchSettingSave = (plant: any, fieldName: string, fieldValue: string | boolean, settingType: SensorsTypes) => {
    const settingIndex = plant.sensors.findIndex((module: ISetting) => module.settingType === settingType);
    plant.sensors[settingIndex][fieldName] = fieldValue;

    updateSetting({
      variables: {
        id: data?.getUser?.id,
        plantId: plant.plantId,
        input: plant.sensors[settingIndex]
      },
    });
  };
  
  const getSensorCompleteName = (plant, settingType: SensorsTypes) => {
    let sensorNewNumber = 1;

    plant?.sensors?.map((module: ISetting) => {
      let lastSensorNum = getLastNumOfSensor(module.settingType);
      const rawSensorTypeName = getSensorWithoutNumber(module?.settingType);

      if (!isNaN(lastSensorNum) && rawSensorTypeName === settingType) {
        sensorNewNumber = lastSensorNum + 1;
      }
    });

    return `${settingType}_${sensorNewNumber}`;
  };

  const dispatchNewSettingSave = (plant: any, settingType: SensorsTypes, plantIndex: number) => {
    const completeSensorTypeName = getSensorCompleteName(plant, settingType);

    updateSetting({
      variables: {
        id: data?.getUser?.id,
        plantId: plant.plantId,
        input: getDefaultSetting(completeSensorTypeName)
      },
    });

    dispatch({ type: 'ADD_MODULE', payload: {plantIndex, setting: getDefaultSetting(completeSensorTypeName) }});
  };

  const selectStyle = { control: styles => ({ ...styles, width: '197px', textAlign: 'left' }) };
  const sensorsOptions = [
    { value: SensorsTypes.DISTANCE, label: intl.formatMessage({ id: 'distanceId', defaultMessage: 'distanceId' }) },
    { value: SensorsTypes.SOIL_HUMIDITY, label: intl.formatMessage({ id: 'moistHumidityId', defaultMessage: 'moistHumidityId' }) },
    { value: SensorsTypes.HUMIDITY_TEMPETURE, label: intl.formatMessage({ id: 'airHumidityAndTempetureId', defaultMessage: 'airHumidityAndTempetureId' }) },
    { value: SensorsTypes.LIGHT, label: intl.formatMessage({ id: 'lightSensorId', defaultMessage: 'lightSensorId' }) },
    { value: SensorsTypes.PLUG, label: intl.formatMessage({ id: 'intelligentPlugId', defaultMessage: 'intelligentPlugId' }) },
  ];

  const timezonesList = timezones.map((timezone: string) => ({ value: timezone, label: timezone  }))
  console.log('plants', plants)
  return (
    <PlantPageWrapper>
      <PlantsPageContainer style={{ width: '100%' }}>
        <Link href="/profile">
          <a className="home-btn">
            <FormattedMessage id="backProfileBtn" defaultMessage="Back to Profile" />
          </a>
        </Link>

        <OrderDetails>
          <BlockTitle>
            <FormattedMessage
              id="dittoBotsIds"
              defaultMessage="dittoBotsIds"
            />
          </BlockTitle>

          { plants?.length < 1 && (<Text>{intl.formatMessage({ id: 'noDittoBotsTextId', defaultMessage: 'noDittoBotsTextId' })}</Text>) }
          { plants?.map((plant, i: number) => {
            const { sensors } = plant;
              return (
                <DashboardContainer key={i + '-orderList'}>
                  <Row1>
                    <Column1>
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
                            disabled={true}
                            value={plant?.name}
                            // we have to change the onChange because the is no one for the controller name actualy
                            onChange={(e: any) => handleCreateUpdatePlantOnClick(plant, e.target.value, false)}
                            backgroundColor='#F7F7F7'
                            width='197px'
                            height='34.5px'
                          />
                        </ListDes>
                      </ListItem>

                      <ListItem>
                        <ListTitle>
                          <Text bold>
                        {/* <Reading> */}
                        {/* <Reading> */}
                        {/* <Reading> */}
                        {/* <Reading> */}
                            <FormattedMessage
                              id="statusId"
                              defaultMessage="statusId"
                            />
                          {/* <Reading> */}
                        {/* <Reading> */}

                          </Text>
                        </ListTitle>
                        <ListDes>
                          <Text>{plant.timestamp?.length > 0 ? moment(plant.timestamp).format('hh:mm A - DD MMM') : ''} {hasDittoBotUpdatedInLastMinute(plant.timestamp, plant.timeZone) ? '[ONLINE]' : '[OFFLINE]'}</Text>
                        </ListDes>
                        {/* <Reading> */}{/* <Reading> */}
                      </ListItem>

                      <ListItem style={{ justifyContent: 'flex-start' }}>
                          <ListTitle>
                          <Text bold>
                              <FormattedMessage
                              id="addSensorId"
                              defaultMessage="addSensorId"
                              />
                          </Text>
                          </ListTitle>
                          <ListDes>
                          <Select 
                              onChange={(e: any) => dispatchNewSettingSave(plant, e.value, i)}
                              value={sensorSelected}
                              // @ts-ignore
                              options={sensorsOptions}
                              styles={selectStyle}
                              menuPosition={'fixed'}
                          />
                          </ListDes>
                        </ListItem>

                        <ListItem style={{ justifyContent: 'flex-start' }}>
                            <ListTitle>
                              <Text bold>
                                  <FormattedMessage
                                  id="timezone"
                                  defaultMessage="timezone"
                                  />
                              </Text>
                            </ListTitle>
                            <ListDes>
                              <Select 
                                  onChange={(e: any) => handleCreateUpdatePlantOnClick(plant, plant.name, false, e.value)}
                                  value={timezoneSelected}
                                  // @ts-ignore
                                  options={timezonesList}
                                  styles={selectStyle}
                                  menuPosition={'fixed'}
                              />
                            </ListDes>
                          </ListItem>
                    </Column1>
                  </Row1>
                  <SensorsWrapper>
                  { sensors?.map((module: ISetting, index: number) => {
                      switch (module?.settingType) {
                        case `${SensorsTypes.SOIL_HUMIDITY}_1`:
                        case `${SensorsTypes.SOIL_HUMIDITY}_2`:
                        case `${SensorsTypes.SOIL_HUMIDITY}_3`:
                          // check the number of same setting to send
                          return (
                            <SoilHumiditySensor 
                              key={i + module.settingType}
                              data={data}
                              plant={plant}
                              errorId={errorId}
                              openTab={openTab}
                              handleDeleteSensor={handleDeleteSensor}
                              setOpenTab={setOpenTab}
                              settingType={module.settingType}
                              handleSettingsChange={handleSettingsChange}
                              onDeleteSchedule={onDeleteSchedule} 
                            />
                          );
                        case `${SensorsTypes.LIGHT}_1`:
                          return (
                            <LightSensor 
                              key={i + module.settingType}
                              data={data}
                              errorId={errorId}
                              plant={plant}
                              handleDeleteSensor={handleDeleteSensor}
                              openTab={openTab}
                              setOpenTab={setOpenTab}
                              settingType={module.settingType}
                              handleSettingsChange={handleSettingsChange}
                              onDeleteSchedule={onDeleteSchedule} 
                            />
                          );
                        case `${SensorsTypes.DISTANCE}_1`:
                          return (
                            <DistanceSensor
                              key={i + module.settingType}
                              data={data}
                              plant={plant}
                              errorId={errorId}
                              handleDeleteSensor={handleDeleteSensor}
                              openTab={openTab}
                              setOpenTab={setOpenTab}
                              settingType={module.settingType}
                              handleSettingsChange={handleSettingsChange}
                              onDeleteSchedule={onDeleteSchedule} 
                            />
                          );
                        case `${SensorsTypes.PLUG}_1`:
                          return (
                            <Plug
                              key={i + module.settingType}
                              data={data}
                              plant={plant}
                              handleDeleteSensor={handleDeleteSensor}
                              openTab={openTab}
                              setOpenTab={setOpenTab}
                              settingType={module.settingType}
                              handleSettingsChange={handleSettingsChange}
                              onDeleteSchedule={onDeleteSchedule} 
                            />
                          );
                      
                        default:
                          break;
                      }
                    })}
                  </SensorsWrapper>
                   
                </DashboardContainer>
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

        </OrderDetails>
      </PlantsPageContainer>

      <PlantsPageContainer style={{ width: '100%' }}>
        <BlockTitle>
          <FormattedMessage
            id="addController"
            defaultMessage="Your Plants"
          />
        </BlockTitle>

        <ListItem>
          <ListTitle>
            <Text bold>
              <FormattedMessage
                id='plantNameField'
                defaultMessage='Name of the plant'
              />
            </Text>
          </ListTitle>
          <ListDes>
            <Input
              type='text'
              name='name'
              value={name}
              onChange={(e) => setPlantName(e.target.value)}
              placeholder={intl.formatMessage({ id: 'plantNamePlaceholderId', defaultMessage: 'Balcony plants' })}
              backgroundColor='#F7F7F7'
              width='197px'
            />
          </ListDes>
        </ListItem>

        <ListItem>
          <ListTitle>
            <Text bold>
              <FormattedMessage
                id='plantIdField'
                defaultMessage='ID of the controller'
              />
            </Text>
          </ListTitle>
          <ListDes>
            <Input
              type='number'
              name='plantId'
              value={plantId}
              onChange={(e) => setControllerID(e.target.value)}
              placeholder={intl.formatMessage({ id: 'serialNumberPlaceholderId', defaultMessage: 'Look behind Ditto Bot' })}
              backgroundColor='#F7F7F7'
              width='197px'
            />
          </ListDes>
        </ListItem>

        <Button className="cart-button" variant="secondary" borderRadius={100} onClick={() => handleCreateUpdatePlantOnClick(plants, name, true)}>
          <ButtonText>
            <FormattedMessage id={"addDittoBotButton"} defaultMessage="Add plant" />
          </ButtonText>
        </Button>
      </PlantsPageContainer>
    </PlantPageWrapper>
  );
};

export default YourPlants;
