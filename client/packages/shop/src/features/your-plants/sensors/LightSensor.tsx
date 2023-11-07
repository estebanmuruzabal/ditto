import React, { useState, useEffect, useRef } from 'react';
import { SearchBox } from 'components/search-box/search-box';
import Router,{ useRouter } from 'next/router';
import LineChart from 'components/line-chart/line-chart';
import GraphChart from 'components/graph-chart/graph-chart';
import { CloseIcon } from 'assets/icons/CloseIcon';
import { PencilIcon } from 'assets/icons/PencilIcon';
import { Button } from 'components/button/button';
import Switch from 'components/switch/switch';
import { FormattedMessage, useIntl } from 'react-intl';
import Select from 'react-select';
import { Input } from 'components/forms/input';
import { SensorsTypes, HumiditySensorMode, WeekDays, fourRelaysOptions, humidityModeOptions, manualModeOptions, lightModeOptions, LightSensorMode } from 'utils/constant';
import HumidityLogsGraph from '../humidity-logs-graph/humidity-logs-graph';
import { PlantsSensorContainer, ListItem, ListTitle, ListDes, InputUpper, WeekContainer, DayContainer, ScheduleTime, TextSpaced, CardButtons, ActionButton, Text, ButtonText, Type, Status, ScheduleTimeContainer, ActionsButtons } from '../your-plants.style';
import { openModal } from '@redq/reuse-modal';
import AddTimeSchedule from 'components/add-time-schedule/add-schedule-card';  
import { ISetting } from 'utils/types';
import { getDayShortName, getRelayNameText, getSettingTypeText } from 'utils/sensorUtils';
import { CheckMark } from 'assets/icons/CheckMark';
import Reading from './HumidityReading';
import LightReading from './LightReading';

interface Props {
  data?: any;
  plant: any;
  settingType: SensorsTypes;
  openTab: string;
  errorId: string;
  setOpenTab: (settingType: string) => void;
  handleSettingsChange: (plant: any, field: string, value: string | boolean, settingType: SensorsTypes) => void;
  onDeleteSchedule: (plant: any, settingType: SensorsTypes, position: number) => void;
  handleDeleteSensor: (plant: any, settingType: string) => void;
}

const LightSensor: React.FC<Props> = ({ errorId, plant, settingType, handleSettingsChange, onDeleteSchedule, data, openTab, setOpenTab, handleDeleteSensor }) => {
    const setting = plant.sensors.find((module: ISetting) => module.settingType === settingType);
    const [daySelected, setDay] = useState('');
    const [editIsOn, setEditIsOn] = useState(false);
    const intl = useIntl();
    const selectedMode = lightModeOptions.find((option) => option.value === setting.mode);
    const selectedManualState = manualModeOptions.find((option) => option.value === setting.relayOneWorking);
    const relayOneSelected = fourRelaysOptions.find((option) => option.value === setting.relayOneIdRelated);
    const relayTwoSelected = fourRelaysOptions.find((option) => option.value === setting.relayTwoIdRelated);
    const selectStyle = { control: styles => ({ ...styles, width: '120px', textAlign: 'left' }) };
    // const tabIsOpen = openTab === settingType;
    const tabIsOpen = true;
    const hasRelayAsociated = setting.relayOneIdRelated?.length > 0;
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
        <PlantsSensorContainer style={{ height: tabIsOpen ? '100%' : '66px' }} onClick={(e) => { e.stopPropagation(); setOpenTab(tabIsOpen ? '' : settingType); }}>
            <ListItem style={{ justifyContent: 'flex-start' }}>
                <ListTitle>
                    <Type bold>{getSettingTypeText(setting?.settingType)}</Type>
                    { !hasRelayAsociated && (<Type>{<FormattedMessage id="fillModeAndRelayToWork" defaultMessage="fillModeAndRelayToWork" />}</Type>)}
                </ListTitle>
                <ListDes style={{ marginLeft: '-10px' }}>
                    <CardButtons className='button-wrapper'>
                        { editIsOn ? (
                            <ActionButton onClick={(e) => { e.stopPropagation(); setEditIsOn(!editIsOn); }} className='edit-btn'>
                                <CheckMark />
                            </ActionButton>
                        ) : (
                            <ActionButton onClick={(e) => { e.stopPropagation(); setEditIsOn(!editIsOn); }} className='edit-btn'>
                                <PencilIcon />
                            </ActionButton>
                        )}
                        <ActionButton onClick={(e) => { e.stopPropagation(); handleDeleteSensor(plant, settingType); }} className='delete-btn'>
                            <CloseIcon />
                        </ActionButton>
                    </CardButtons>
                </ListDes>
            </ListItem>


            { (setting?.mode === HumiditySensorMode.NONE && !!openTab) && (
                <ListItem>
                    <Status><FormattedMessage id="modoRequiredWarningText" defaultMessage="modoRequiredWarningText" /> </Status>
                </ListItem>
            )}

          <ListItem style={{ justifyContent: 'flex-start' }}>
            <ListTitle>
              <Text>
                <FormattedMessage
                  id="lightId"
                  defaultMessage="lightId"
                />
              </Text>
            </ListTitle>
            <ListDes>
                <LightReading
                    settingType={settingType}
                    plant={plant}
                />
              {/* <Text bold>{setting?.reading} % {setting?.reading < 40 ? '🌙' : '💡'}</Text> */}
            </ListDes>
          </ListItem>
  
          <ListItem style={{ justifyContent: 'flex-start' }}>
                <ListTitle>
                    <Text>
                    <FormattedMessage
                        id="plantName"
                        defaultMessage="plantName"
                    />
                    </Text>
                </ListTitle>
                <ListDes>
                    { editIsOn ? (
                        <Input
                            type='text'
                            name='name'
                            value={setting.name}
                            placeholder={intl.formatMessage({ id: 'plantNameRequiredNameId', defaultMessage: 'plantNameRequiredNameId' })}
                            onChange={(e: any) => handleSettingsChange(plant, 'name', e.target.value, settingType)}
                            backgroundColor='#F7F7F7'
                            height='34.5px'
                            // intlInputLabelId="profileEmailField"
                        />
                    ) : (
                        <Text bold>{setting?.name}</Text>
                    )}
                </ListDes>
            </ListItem>

          <ListItem style={{ justifyContent: 'flex-start' }}>
            <ListTitle>
              <Text>
                <FormattedMessage
                  id="lightModeId"
                  defaultMessage="lightModeId"
                />
              </Text>
            </ListTitle>
            <ListDes>
                { editIsOn ? (
                    <Select 
                        onChange={(e: any) => handleSettingsChange(plant, 'mode', e.value, settingType)}
                        value={selectedMode}
                        options={lightModeOptions}
                        styles={selectStyle}
                        menuPosition={'fixed'}
                    />
                ) : (
                    <Text style={{ width: 'max-content' }} bold>{selectedMode?.value.length > 1 ? selectedMode.label : '-'}</Text>
                )}
            </ListDes>
          </ListItem>
  
          { (setting?.mode === LightSensorMode.MANUAL || setting?.mode === LightSensorMode.SCHEDULE) && (
            <ListItem>
              <ListTitle>
                <Text>
                  <FormattedMessage
                    id={setting.relayOneIdRelated?.length ? 'asociatedRelayId': 'asociateRelayId'}
                    defaultMessage={setting.relayOneIdRelated?.length ? 'asociatedRelayId': 'asociateRelayId'}
                  />
                </Text>
              </ListTitle>
              <ListDes>
              { editIsOn ? (
                    <Select 
                        onChange={(e: any) => handleSettingsChange(plant, 'relayOneIdRelated', e.value, settingType)}
                        value={relayOneSelected}
                        options={fourRelaysOptions}
                        styles={selectStyle}
                        menuPosition={'fixed'}
                    />
                ) : (
                    <Text bold>{setting?.relayOneIdRelated.length > 1 ? getRelayNameText(setting?.relayOneIdRelated) : '-'}  {setting?.relayOneWorking ? '[ON]' : '[OFF]'}</Text>
                )}
              </ListDes>
            </ListItem>
          )}
          
          { (setting.mode === LightSensorMode.MANUAL && hasRelayAsociated) && (
            <>
              <ListItem>
                <ListTitle>
                  <Text>
                    <FormattedMessage
                      id='manualModeStateId'
                      defaultMessage='manualModeStateId'
                    />
                  </Text>
                </ListTitle>
                <ListDes>
                    <Switch 
                        disabled={false}
                        checked={setting.relayOneWorking}
                        labelPosition={'right'}
                        // className,
                        onUpdate={(e: any) => handleSettingsChange(plant, 'relayOneWorking', !setting.relayOneWorking, settingType)}
                    />
                </ListDes>
              </ListItem>
            </>
          )}

          { ((setting.mode === LightSensorMode.SCHEDULE) && hasRelayAsociated) && (
            <>
              <ListItem style={{ justifyContent: 'flex-start' }}>
                <ListTitle>
                <Text>
                    <FormattedMessage
                    id="manualModeStateId"
                    defaultMessage="manualModeStateId"
                    />
                </Text>
                </ListTitle>
                <ListDes>
                    <Text  bold> 
                        <FormattedMessage
                        id={setting.relayOneWorking ? 'manualModeStateOnId' : 'manualModeStateOffId'}
                        defaultMessage='noDefaultOnOffMsg'
                        />
                    </Text>
                    </ListDes>
                </ListItem>

                <ListItem style={{ justifyContent: 'flex-start' }}>
                    <ListTitle>
                    <Text>
                        <FormattedMessage
                        id="notifyChangesId"
                        defaultMessage="notifyChangesId"
                        />
                    </Text>
                    </ListTitle>
                    <ListDes>
                        <Switch 
                            disabled={false}
                            checked={setting.whatsappWarningsOn}
                            labelPosition={'right'}
                            // className,
                            onUpdate={() => handleSettingsChange(plant, 'whatsappWarningsOn', !setting.whatsappWarningsOn, settingType)}
                        />
                    </ListDes>
                </ListItem>

                { setting?.scheduledOnTimes?.map((schedule: any, i: number) => {
                    return (
                        <WeekContainer>
                            <ListDes style={{ flexDirection: 'row', display: 'flex', paddingBottom: '10px' }} >
                                {WeekDays.map((day: any) => {
                                    return (
                                        <DayContainer
                                            key={day + '-day-light-1-container'}
                                            style={{ backgroundColor: schedule.daysToRepeat.includes(day) ? '#c2b0b0' : 'transparent' }}
                                            // onClick={() => setDay(day)}
                                        >
                                            {getDayShortName(day)}
                                        </DayContainer>
                                        )
                                    })
                                }
                            </ListDes>
                            <ScheduleTimeContainer>
                                <TextSpaced> <FormattedMessage id='desdeId' defaultMessage='desdeId' /> </TextSpaced> 
                                <TextSpaced bold>{schedule.startTime}</TextSpaced>
                                <TextSpaced> <FormattedMessage id='aId' defaultMessage='aId' /> </TextSpaced> 
                                <TextSpaced bold>{schedule.endTime}</TextSpaced>
                                <ActionsButtons className='button-wrapper'>
                                    <ActionButton onClick={() => handleModal( AddTimeSchedule, { settingType: settingType, plant, id: data?.getUser?.id, schedulePosition: i } )} className='edit-btn'>
                                        <PencilIcon />
                                    </ActionButton>

                                    <ActionButton onClick={() => onDeleteSchedule(plant, settingType, i)} className='delete-btn'>
                                        <CloseIcon />
                                    </ActionButton>
                                </ActionsButtons>
                                {/* 💤🤖 ❌🚫⛔️✅🔆⏹️ */}
                                <TextSpaced bold>{schedule.enabled ? '' : '⏹️'}</TextSpaced>
                                <TextSpaced bold>{schedule.smartLight ? '🔆' : ''}</TextSpaced>
                            </ScheduleTimeContainer>
                        </WeekContainer>
                    )
                })}

                <Button
                    size='small'
                    variant='outlined'
                    type='button'
                    style={{marginLeft: '10px'}}
                    className='add-button'
                    onClick={() => handleModal(
                        AddTimeSchedule,  { name: 'add-humidity-1-schedule', plant, id: data?.getUser?.id, settingType } )}
                >
                    <FormattedMessage id='addTimeScheduleId' defaultMessage='addTimeScheduleId' />
                </Button>
            </>
            )}

            { (setting?.logs?.length > 0 && hasRelayAsociated) && ( <HumidityLogsGraph data={setting.logs} /> )}
        </PlantsSensorContainer>
      )
};

export default LightSensor;
