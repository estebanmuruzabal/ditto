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
} from './your-plants.style';
import { FormattedMessage, useIntl } from 'react-intl';
import { GET_LOGGED_IN_USER } from 'graphql/query/customer.query';
import { Button } from 'components/button/button';
import { ADD_PLANT, DELETE_SETTING, UPDATE_SETTING } from 'graphql/query/plants.query';
import { Input } from 'components/forms/input';
import { ProfileContext } from 'contexts/profile/profile.context';
import { SuccessMsg } from 'features/user-profile/settings/settings.style';
import SoilHumiditySensor from './sensors/SoilHumiditySensor';
import LightSensor from './sensors/LightSensor';
import { ISetting } from 'utils/types';
import Select from 'react-select';
import Plug from './sensors/Plug';
import DistanceSensor from './sensors/DistanceSensor';
  

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
  const { data, error, loading  } = useQuery(GET_LOGGED_IN_USER, {
    pollInterval: 5000,
  });
  // const router = useRouter();
  const intl = useIntl();
  const [name, setPlantName] = useState('');
  const [openTab, setOpenTab] = useState('');
  const [plantId, setControllerID] = useState('');
  const [userinfoMsg, setUserinfoMsg] = useState('');
  const [sensorSelected, setSensor] = useState('');
  const [addPlant] = useMutation(ADD_PLANT);
  
  const [updateSetting] = useMutation(UPDATE_SETTING);
  const [deleteSetting] = useMutation(DELETE_SETTING);
  const { plants } = state;

  if (loading) {
    return <ErrorMessage message={'Cargando...'} />
  };

  if (error) {
    return (
      <ErrorMessage message={error.message} />
    );
  };

  const isRelayIdAlreadyAssigend = (plant: any, field: string) => {
    if (field !== 'relayOneIdRelated' && field !== 'relayTwoIdRelated' && field !== 'relayThreeIdRelated' && field !== 'relayFourIdRelated') return false;

    {Object.keys(SensorsTypes).map((settingType, i: number) => {
      const relaysIds = [RelaysIds.RELAY_ONE, RelaysIds.RELAY_TWO, RelaysIds.RELAY_THIRD, RelaysIds.RELAY_FOURTH];
      const relayAlreadyAssigned = plant[settingType] && relaysIds.includes(plant[settingType][field]);

      if (relayAlreadyAssigned) {
        setUserinfoMsg(`${intl.formatMessage({ id: 'relayAlreadyAssinged', defaultMessage: 'Relay already assigned in ' })} ${plant[settingType]}`);
        setTimeout(function () {
          setUserinfoMsg('');
        }, 8000)
        return true;
      }
     })
   }
   return false;
  };
  

  const handleSettingsChange = (plant: any, field: string, value: string | boolean, settingType: SensorsTypes) => {
    if (isRelayIdAlreadyAssigend(plant, field)) return;

    dispatch({ type: settingType, payload: { plant, value, field } });

    dispatchSettingSave(plant, field, value, settingType);

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
        plantId: Number(plantId)
      },
    });

    setUserinfoMsg('added plany successfully');
    setTimeout(function () {
      setUserinfoMsg('');
      userRefetch();
      window.location.reload();
    }, 3000)
  };

  const handleDeleteSensor = (plant: any, settingName: SensorsTypes) => {
    deleteSetting({
      variables: {
        id: data?.getUser?.id,
        plantId: plant.plantId,
        settingName
      },
    });

    setUserinfoMsg('deleted setting successfully');
    setTimeout(function () {
      setUserinfoMsg('');
      userRefetch();
      window.location.reload();
    }, 3000)
  };

  const onDeleteSchedule = (plant: any, settingType: SensorsTypes, scheduleIndex: number) => {

    const settingIndex = plant.sensors.findIndex((sensor: ISetting) => sensor.settingType === settingType);            
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
      userRefetch();
      window.location.reload();
  }, 3000)
  };

  const getDefaultSetting = (settingTypeName: string) => { 
    return {
      name: '',
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
      logs: [],
      scheduledOnTimes: [],
      settingType: settingTypeName
    }
}
    
  const dispatchSettingSave = (plant: any, fieldName: string, fieldValue: string | boolean, settingType: SensorsTypes) => {
    const settingIndex = plant.sensors.findIndex((sensor: ISetting) => sensor.settingType === settingType);
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
    let amountOfSameType = 1;
    plant?.sensors?.map((sensor: ISetting) => {
      if (sensor?.settingType?.split('_')[0] === settingType) amountOfSameType ++;
    });
    return `${settingType}_${amountOfSameType}`;
  };

  const dispatchNewSettingSave = (plant: any, settingType: SensorsTypes) => {
    const completeSensorTypeName = getSensorCompleteName(plant, settingType);

    updateSetting({
      variables: {
        id: data?.getUser?.id,
        plantId: plant.plantId,
        input: getDefaultSetting(completeSensorTypeName)
      },
    });
    setTimeout(function () {
      userRefetch();
      window.location.reload();
    }, 2000)
  };


  // Add or edit modal
  const handleModal = (
    modalComponent: any,
    modalProps = {},
    className: string = 'add-time-schedule-modal'
  ) => {
    openModal({
      show: true,
      config: {
        width: 360,
        height: 'auto',
        enableResizing: false,
        disableDragging: true,
        className: className,
      },
      closeOnClickOutside: true,
      component: modalComponent,
      componentProps: { item: modalProps },
    });
  };

  const selectStyle = { control: styles => ({ ...styles, width: '197px', textAlign: 'left' }) };
  const sensorsOptions = [
    { value: SensorsTypes.DISTANCE, label: intl.formatMessage({ id: 'distanceId', defaultMessage: 'distanceId' }) },
    { value: SensorsTypes.SOIL_HUMIDITY, label: intl.formatMessage({ id: 'moistHumidityId', defaultMessage: 'moistHumidityId' }) },
    { value: SensorsTypes.HUMIDITY_TEMPETURE, label: intl.formatMessage({ id: 'airHumidityAndTempetureId', defaultMessage: 'airHumidityAndTempetureId' }) },
    { value: SensorsTypes.LIGHT, label: intl.formatMessage({ id: 'lightSensorId', defaultMessage: 'lightSensorId' }) },
    { value: SensorsTypes.PLUG, label: intl.formatMessage({ id: 'intelligentPlugId', defaultMessage: 'intelligentPlugId' }) },
  ];

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

          { plants?.length < 1 && (<Text>No tienes plantas registradas</Text>) }
          { plants?.map((plant, i: number) => {
            const { sensors } = plant;
              return (
                <PlantsWrapper key={i + '-orderList'}>
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
                            value={plant?.name || ''}
                            // we have to change the onChange because the is no one for the controller name actualy
                            // onChange={(e: any) => handleSettingsChange(plant, 'name', e.target.value, SensorsTypes.SOIL_HUMIDITY_SETTING_1)}
                            backgroundColor='#F7F7F7'
                            width='197px'
                            height='34.5px'
                          />
                        </ListDes>
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
                            onChange={(e: any) => dispatchNewSettingSave(plant, e.value)}
                            value={sensorSelected}
                            // @ts-ignore
                            options={sensorsOptions}
                            styles={selectStyle}
                            menuPosition={'fixed'}
                        />
                        </ListDes>
                      </ListItem>

                    </Column1>
                  </Row1>

                    { sensors?.map((sensor: ISetting) => {
                      switch (sensor?.settingType) {
                        case `${SensorsTypes.SOIL_HUMIDITY}_1`:
                        case `${SensorsTypes.SOIL_HUMIDITY}_2`:
                        case `${SensorsTypes.SOIL_HUMIDITY}_3`:
                          // check the number of same setting to send
                          return (
                            <SoilHumiditySensor 
                              key={i + sensor.settingType}
                              data={data}
                              plant={plant}
                              openTab={openTab}
                              handleDeleteSensor={handleDeleteSensor}
                              setOpenTab={setOpenTab}
                              settingType={sensor.settingType}
                              handleSettingsChange={handleSettingsChange}
                              onDeleteSchedule={onDeleteSchedule} 
                            />
                          );
                        case `${SensorsTypes.LIGHT}_1`:
                          return (
                            <LightSensor 
                              data={data}
                              plant={plant}
                              handleDeleteSensor={handleDeleteSensor}
                              openTab={openTab}
                              setOpenTab={setOpenTab}
                              settingType={sensor.settingType}
                              handleSettingsChange={handleSettingsChange}
                              onDeleteSchedule={onDeleteSchedule} 
                            />
                          );
                        case `${SensorsTypes.DISTANCE}_1`:
                          return (
                            <DistanceSensor
                              data={data}
                              plant={plant}
                              handleDeleteSensor={handleDeleteSensor}
                              openTab={openTab}
                              setOpenTab={setOpenTab}
                              settingType={sensor.settingType}
                              handleSettingsChange={handleSettingsChange}
                              onDeleteSchedule={onDeleteSchedule} 
                            />
                          );
                        case `${SensorsTypes.PLUG}_1`:
                          return (
                            <Plug 
                              data={data}
                              plant={plant}
                              handleDeleteSensor={handleDeleteSensor}
                              openTab={openTab}
                              setOpenTab={setOpenTab}
                              settingType={sensor.settingType}
                              handleSettingsChange={handleSettingsChange}
                              onDeleteSchedule={onDeleteSchedule} 
                            />
                          );
                      
                        default:
                          break;
                      }
                    })}
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

        <Button className="cart-button" variant="secondary" borderRadius={100} onClick={handleAddClick}>
          <ButtonText>
            <FormattedMessage id={"addPlantButton"} defaultMessage="Add plant" />
          </ButtonText>
        </Button>
      </PlantsPageContainer>
    </PlantPageWrapper>
  );
};

export default YourPlants;
