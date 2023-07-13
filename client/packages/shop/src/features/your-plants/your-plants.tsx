import React,  { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { openModal } from '@redq/reuse-modal';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { RelaysIds, SettingsNames } from 'utils/constant';
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
  PlantsSensorContainer
} from './your-plants.style';
import { FormattedMessage, useIntl } from 'react-intl';
import { GET_LOGGED_IN_USER } from 'graphql/query/customer.query';
import { Button } from 'components/button/button';
import { ADD_PLANT, UPDATE_SETTING } from 'graphql/query/plants.query';
import { Input } from 'components/forms/input';
import { ProfileContext } from 'contexts/profile/profile.context';
import { SuccessMsg } from 'features/user-profile/settings/settings.style';
import SoilHumiditySensor from './sensors/SoilHumiditySensor';
import LightSensor from './sensors/LightSensor';
  

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
  const { data, error, loading, refetch: userRefetch } = useQuery(GET_LOGGED_IN_USER, {
    pollInterval: 5000,
  });
  // const router = useRouter();
  const intl = useIntl();
  const [name, setPlantName] = useState('');
  const [openTab, setOpenTab] = useState('');
  const [plantId, setControllerID] = useState('');
  const [userinfoMsg, setUserinfoMsg] = useState('');
  const [addPlant] = useMutation(ADD_PLANT);
  
  const [updateSetting] = useMutation(UPDATE_SETTING);
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

    {Object.keys(SettingsNames).map((settingName, i: number) => {
      const relaysIds = [RelaysIds.RELAY_ONE, RelaysIds.RELAY_TWO, RelaysIds.RELAY_THIRD, RelaysIds.RELAY_FOURTH];
      const relayAlreadyAssigned = plant[settingName] && relaysIds.includes(plant[settingName][field]);

      if (relayAlreadyAssigned) {
        setUserinfoMsg(`${intl.formatMessage({ id: 'relayAlreadyAssinged', defaultMessage: 'Relay already assigned in ' })} ${plant[settingName]}`);
        setTimeout(function () {
          setUserinfoMsg('');
        }, 8000)
        return true;
      }
     })
   }
   return false;
  };
  

  const handleSettingsChange = (e: any, plant: any, field: string, value: string | boolean, settingName: SettingsNames) => {
    if (isRelayIdAlreadyAssigend(plant, field)) return;

    dispatch({ type: settingName, payload: { plant, value, field } });

    dispatchSettingSave(plant, field, value, settingName);

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

    setUserinfoMsg('Update user info successfully');
    userRefetch();
    setTimeout(function () {
      setUserinfoMsg('');
    }, 8000)
  };

  const onDeleteSchedule = (plant: any, settingName: SettingsNames, position: number) => {
    delete plant[settingName][position];
    
    updateSetting({
      variables: {
        id: data?.getUser?.id,
        plantId: plant.plantId,
        input: { ...plant[settingName], settingName: settingName }
      },
    });

    setUserinfoMsg('Update user info successfully');
    setTimeout(function () {
      setUserinfoMsg('');
    }, 8000)
  };
    
  const dispatchSettingSave = (plant: any, fieldName: string, fieldValue: string | boolean, settingName: SettingsNames) => {
    const plantSettingInput = plant[settingName];
    plantSettingInput[fieldName] = fieldValue;
    plantSettingInput.settingName = settingName;
    updateSetting({
      variables: {
        id: data?.getUser?.id,
        plantId: plant.plantId,
        input: plantSettingInput
      },
    });
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

  const renderAirTemperatureSensor = (plant: any, i: any) => {
    return (
      <PlantsSensorContainer>
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
      </PlantsSensorContainer>
    )
  }

  const renderAirHumiditySensor = (plant: any, i: any) => {
    return (
      <PlantsSensorContainer>
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
      </PlantsSensorContainer>
    )
  }


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
                          disabled={true}
                          value={plant?.name || ''}
                          // we have to change the onChange because the is no one for the controller name actualy
                          onChange={(e: any) => handleSettingsChange(e, plant, 'name', e.target.value, SettingsNames.SOIL_HUMIDITY_SETTING_1)}
                          backgroundColor='#F7F7F7'
                          width='197px'
                          height='34.5px'
                        />
                      </ListDes>
                    </ListItem>

                    <SoilHumiditySensor 
                      data={data}
                      plant={plant}
                      openTab={openTab}
                      setOpenTab={setOpenTab}
                      settingName={SettingsNames.SOIL_HUMIDITY_SETTING_1}
                      handleSettingsChange={handleSettingsChange}
                      onDeleteSchedule={onDeleteSchedule} 
                    />
                    <SoilHumiditySensor 
                      data={data}
                      plant={plant}
                      openTab={openTab}
                      setOpenTab={setOpenTab}
                      settingName={SettingsNames.SOIL_HUMIDITY_SETTING_2}
                      handleSettingsChange={handleSettingsChange}
                      onDeleteSchedule={onDeleteSchedule} 
                    />
                    <LightSensor 
                      data={data}
                      plant={plant}
                      openTab={openTab}
                      setOpenTab={setOpenTab}
                      settingName={SettingsNames.LIGHT_SETTING}
                      handleSettingsChange={handleSettingsChange}
                      onDeleteSchedule={onDeleteSchedule} 
                    />
                  {renderAirTemperatureSensor(plant, i)}
                  {renderAirHumiditySensor(plant, i)}

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
