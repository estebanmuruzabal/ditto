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
import { SensorsTypes, HumiditySensorMode, WeekDays, fourRelaysOptions, manualModeOptions, AirHumiditySensorMode, airHumiditySensorModeOptions } from 'utils/constant';
import HumidityLogsGraph from '../humidity-logs-graph/humidity-logs-graph';
import { PlantsSensorContainer, ListItem, ListTitle, ListDes, InputUpper, WeekContainer, DayContainer, ScheduleTime, TextSpaced, CardButtons, ActionButton, Text, ButtonText, Type, Status, ScheduleTimeContainer, ActionsButtons, Row, ErrorMsg, Porcentage } from '../your-plants.style';
import { openModal } from '@redq/reuse-modal';
import AddTimeSchedule from 'components/add-time-schedule/add-schedule-card';  
import { ISetting } from 'utils/types';
import { getDayShortName, getRelayNameText, getSettingTypeText } from 'utils/sensorUtils';
import { CheckMark } from 'assets/icons/CheckMark';
import AirHumidityReading from './sensor-readings/AirHumidityReading';

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

const AirHumidity: React.FC<Props> = ({ errorId, plant, settingType, handleSettingsChange, onDeleteSchedule, data, openTab, setOpenTab, handleDeleteSensor }) => {
    const setting = plant.sensors.find((setting: ISetting) => setting.settingType === settingType);
    const [editIsOn, setEditIsOn] = useState(false);
    const intl = useIntl();
    const module = plant.sensors.find((module: ISetting) => module.settingType === settingType);
    const selectedMode = airHumiditySensorModeOptions.find((option) => option.value === setting.mode);
    const relayOneSelected = fourRelaysOptions.find((option) => option.value === setting.relayOneIdRelated);
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


            { (setting?.mode === AirHumiditySensorMode.NONE && !!openTab) && (
                <ListItem>
                    <Status><FormattedMessage id="modoRequiredWarningText" defaultMessage="modoRequiredWarningText" /> </Status>
                </ListItem>
            )}

          <ListItem style={{ justifyContent: 'flex-start' }}>
            <ListTitle>
              <Text>
                <FormattedMessage
                  id="airHumidityId"
                  defaultMessage="airHumidityId"
                />
              </Text>
            </ListTitle>
            <ListDes>
                <AirHumidityReading module={module} plantId={plant.plantId} latestDataFetched={data} />
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
                  id="modeId"
                  defaultMessage="modeId"
                />
              </Text>
            </ListTitle>
            <ListDes>
                { editIsOn ? (
                    <Select 
                        onChange={(e: any) => handleSettingsChange(plant, 'mode', e.value, settingType)}
                        value={selectedMode}
                        options={airHumiditySensorModeOptions}
                        styles={selectStyle}
                        menuPosition={'fixed'}
                    />
                ) : (
                    <Text style={{ width: 'max-content' }} bold>{selectedMode?.value.length > 1 ? selectedMode.label : '-'}</Text>
                )}
            </ListDes>
          </ListItem>

          { (setting?.mode !== AirHumiditySensorMode.NONE) && (
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

          )}

        { (setting?.mode === AirHumiditySensorMode.MANUAL) && (
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
                    <Switch 
                        disabled={false}
                        checked={setting.relayOneWorking}
                        labelPosition={'right'}
                        // className,
                        onUpdate={() => handleSettingsChange(plant, 'relayOneWorking', !setting.relayOneWorking, settingType)}
                    />
                </ListDes>
            </ListItem>
          )}

          { (setting?.mode === AirHumiditySensorMode.MANUAL || setting?.mode === AirHumiditySensorMode.SCHEDULE) && (
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

          { ((setting.mode === AirHumiditySensorMode.SCHEDULE) && hasRelayAsociated) && (
            <>
  
                { setting?.scheduledOnTimes?.map((schedule: any, i: number) => {
                    return (
                        <WeekContainer>
                            <ListDes style={{ flexDirection: 'row', display: 'flex', paddingBottom: '10px' }} >
                                {WeekDays.map((day: any) => {
                                    return (
                                        <DayContainer
                                            key={day + '-day-airtemp-1-container'}
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

            { setting.mode === AirHumiditySensorMode.WHEN_MIN_ACTION_AUTOMATED && (
                <>
                    <ListItem>
                        <ListTitle>
                            <Text>
                            <FormattedMessage
                                id='minHumidityId'
                                defaultMessage='minHumidityId'
                            />
                            </Text>
                        </ListTitle>
                        <ListDes>
                            { editIsOn ? (
                                <Row>
                                    <Input
                                        type='number'
                                        name='minWarning'
                                        value={setting.minWarning}
                                        onChange={(e: any) => handleSettingsChange(plant, 'minWarning', e.target.value, settingType)}
                                        backgroundColor='#F7F7F7'
                                        height='34.5px'
                                        width='45px'
                                    />
                                    <Porcentage>%</Porcentage>
                                </Row>
                            ) : (
                                <Text bold>{(setting.minWarning >= 0 && setting.minWarning <= 100) ? setting?.minWarning : '-'} %</Text>
                            )}
                            {errorId === 'minWarning' && (
                                <ErrorMsg>
                                    <FormattedMessage id="minMaxWarningId" defaultMessage="minMaxWarningId" />
                                </ErrorMsg>
                            )}
                        </ListDes>
                    </ListItem>

                    <ListItem>
                        <ListTitle>
                            <Text>
                            <FormattedMessage
                                id={relayOneSelected?.value?.length > 0 ? 'asociatedToId' : 'asociateRelayToId'}
                                defaultMessage='asociateRelayToId'
                            />
                            </Text>
                        </ListTitle>
                        <ListDes>
                            { editIsOn ? (
                                <Select 
                                    onChange={(e: any) => handleSettingsChange(plant, 'relayOneIdRelated', e.value, settingType)}
                                    value={relayOneSelected}
                                    options={fourRelaysOptions}
                                    // inputFocusOnClick={false}
                                    // focusInputOnMenuOpen={false}
                                    isSearchable={false}
                                    styles={selectStyle}
                                    menuPosition={'fixed'}
                                />
                            ) : (
                                <>
                            {/* <Reading> */}
                            {/* <Reading> */}
                                    <Text bold>{setting?.relayOneIdRelated.length > 1 ? getRelayNameText(setting?.relayOneIdRelated) : '-'}  {setting?.relayOneWorking ? '[ON]' : '[OFF]'}</Text>
                                    {/* <Reading> */}
                            {/* <Reading> */}
                                </>
                            )}
                        </ListDes>
                    </ListItem>
                </>
                )}

            { (setting?.logs?.length > 0 && hasRelayAsociated) && ( <HumidityLogsGraph data={setting.logs} /> )}
        </PlantsSensorContainer>
      )
};

export default AirHumidity;
