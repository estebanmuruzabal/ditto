import React, { useState, useEffect, useRef } from 'react';
import { SearchBox } from 'components/search-box/search-box';
import Router,{ useRouter } from 'next/router';
import { IHumidityLogs } from 'utils/types';
import LineChart from 'components/line-chart/line-chart';
import GraphChart from 'components/graph-chart/graph-chart';
import { CloseIcon } from 'assets/icons/CloseIcon';
import { PencilIcon } from 'assets/icons/PencilIcon';
import { Button } from 'components/button/button';
import Switch from 'components/switch/switch';
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';
import { Input } from 'components/forms/input';
import { SettingsNames, HumiditySensorMode, WeekDays, fourRelaysOptions, humidityModeOptions, manualModeOptions, lightModeOptions, LightSensorModes } from 'utils/constant';
import HumidityLogsGraph from '../humidity-logs-graph/humidity-logs-graph';
import { PlantsSensorContainer, ListItem, ListTitle, ListDes, InputUpper, WeekContainer, DayContainer, ScheduleTime, TextSpaced, CardButtons, ActionButton, Text } from '../your-plants.style';
import { openModal } from '@redq/reuse-modal';
import AddTimeSchedule from 'components/add-time-schedule/add-schedule-card';  

interface Props {
  data?: any;
  plant: any;
  settingName: SettingsNames;
  openTab: string;
  setOpenTab: (settingName: string) => void;
  handleSettingsChange: (plant: any, field: string, value: string | boolean, settingName: SettingsNames) => void;
  onDeleteSchedule: (plant: any, settingName: SettingsNames, position: number) => void;
}

const LightSensor: React.FC<Props> = ({ plant, settingName, handleSettingsChange, onDeleteSchedule, data, openTab, setOpenTab }) => {
    const setting = plant[settingName];
    const [daySelected, setDay] = useState('');

    const selectedMode = lightModeOptions.find((option) => option.value === setting.mode);
    const selectedManualState = manualModeOptions.find((option) => option.value === setting.relayOneWorking);
    const relayOneSelected = fourRelaysOptions.find((option) => option.value === setting.relayOneIdRelated);
    const relayTwoSelected = fourRelaysOptions.find((option) => option.value === setting.relayTwoIdRelated);
    const selectStyle = { control: styles => ({ ...styles, width: '197px', textAlign: 'left' }) };
    const tabIsOpen = openTab === settingName;

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

    return (
        <PlantsSensorContainer style={{ height: tabIsOpen ? '100%' : '66px' }} onClick={() => setOpenTab(tabIsOpen ? '' : settingName)}>
          <ListItem style={{ justifyContent: 'flex-start' }}>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="lightId"
                  defaultMessage="lightId"
                />
              </Text>
            </ListTitle>
            <ListDes style={{ marginLeft: '10px' }}>
              <Text>{plant?.light} % {plant?.light < 40 ? '🌙' : '☀️'}</Text>
            </ListDes>
          </ListItem>
  
          <ListItem style={{ justifyContent: 'flex-start' }}>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="manualModeStateId"
                  defaultMessage="manualModeStateId"
                />
              </Text>
            </ListTitle>
            <ListDes style={{ marginLeft: '10px' }}>
              <Text> 
                <FormattedMessage
                  id={setting.relayOneWorking ? 'manualModeStateOnId' : 'manualModeStateOffId'}
                  defaultMessage='noDefaultOnOffMsg'
                />
              </Text>
            </ListDes>
          </ListItem>
  
          <ListItem style={{ justifyContent: 'flex-start' }}>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="lightModeId"
                  defaultMessage="lightModeId"
                />
              </Text>
            </ListTitle>
            <ListDes>
              <Select 
                onChange={(e: any) => handleSettingsChange(plant, 'mode', e.value, SettingsNames.LIGHT_SETTING)}
                value={selectedMode}
                options={lightModeOptions}
                styles={selectStyle}
                menuPosition={'fixed'}
              />
            </ListDes>
          </ListItem>
  
          { (setting?.mode === LightSensorModes.MANUAL || setting?.mode === LightSensorModes.SCHEDULE || setting?.mode === LightSensorModes.SMART_SCHEDULE) && (
            <ListItem>
              <ListTitle>
                <Text bold>
                  <FormattedMessage
                    id={setting.relayOneIdRelated?.length ? 'asociatedRelayId': 'asociateRelayId'}
                    defaultMessage={setting.relayOneIdRelated?.length ? 'asociatedRelayId': 'asociateRelayId'}
                  />
                </Text>
              </ListTitle>
              <ListDes>
                <Select 
                  onChange={(e: any) => handleSettingsChange(plant, 'relayOneIdRelated', e.value, SettingsNames.LIGHT_SETTING)}
                  value={relayOneSelected}
                  options={fourRelaysOptions}
                  styles={selectStyle}
                  menuPosition={'fixed'}
                />
              </ListDes>
            </ListItem>
          )}
          
          { setting.mode === LightSensorModes.MANUAL && (
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
                    onChange={(e: any) => handleSettingsChange(plant, 'relayOneWorking', e.value, SettingsNames.LIGHT_SETTING)}
                    value={selectedManualState}
                    options={manualModeOptions}
                    styles={selectStyle}
                    menuPosition={'fixed'}
                  />
                </ListDes>
              </ListItem>
            </>
          )}
  
          { (setting.mode === LightSensorModes.SCHEDULE || setting.mode === LightSensorModes.SMART_SCHEDULE) && (
            <>
              <WeekContainer>
              {Object.keys(WeekDays).map((day, i: number) => {
                 return (
                    <DayContainer
                      key={i + '-day-container'}
                      style={{ backgroundColor: daySelected === day ? '#E6E6E6' : 'transparent' }}
                      onClick={() => setDay(day)}
                    >
                      {day.substring(0,3)}
                    </DayContainer>
                  )
                })
              }
              </WeekContainer>
  
              { setting?.scheduledOnTimes?.map((schedule: any, i: number) => {
                return (
                  <WeekContainer key={i + '-days-to-repeat-2'}>
                    { schedule.daysToRepeat.includes(daySelected) ? (
                      <ScheduleTime>
                        <TextSpaced><FormattedMessage id='startTimeId' defaultMessage='startTimeId' /></TextSpaced> <TextSpaced>{schedule.startTime}</TextSpaced>
                        <TextSpaced><FormattedMessage id='endTimeId' defaultMessage='endTimeId' /></TextSpaced> <TextSpaced>{schedule.endTime}</TextSpaced>
                        <CardButtons className='button-wrapper'>
                          <ActionButton onClick={() => handleModal( AddTimeSchedule, { settingName: SettingsNames.LIGHT_SETTING, plant, id: data?.getUser?.id } )} className='edit-btn'>
                            <PencilIcon />
                          </ActionButton>
  
                          <ActionButton onClick={() => onDeleteSchedule(plant, SettingsNames.LIGHT_SETTING, i)} className='delete-btn'>
                            <CloseIcon />
                          </ActionButton>
                        </CardButtons>
                      </ScheduleTime>
                    ) : <ScheduleTime style={{ border: '0px', height: '42px' }}></ScheduleTime>}
                  </WeekContainer>
                )
              }
              )}
              <Button
                size='small'
                variant='outlined'
                type='button'
                className='add-button'
                onClick={() => handleModal(
                    AddTimeSchedule, 
                    {
                        settingName: SettingsNames.LIGHT_SETTING,
                        plant,
                        id: data?.getUser?.id
                    }
                  )
                }
              >
                <FormattedMessage
                  id='addTimeScheduleId'
                  defaultMessage='addTimeScheduleId' 
                />
              </Button>

              { setting?.logs.length > 0 && (
                    <HumidityLogsGraph
                        data={setting.logs}
                    />
                )}
            </>
          )}
        </PlantsSensorContainer>
      )
};

export default LightSensor;
