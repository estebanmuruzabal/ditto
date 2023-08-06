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
import { HumiditySensorMode, WeekDays, fourRelaysOptions, humidityModeOptions, manualModeOptions, SensorsTypes, PlugMode, distanceModeOptions } from 'utils/constant';
import HumidityLogsGraph from '../humidity-logs-graph/humidity-logs-graph';
import { PlantsSensorContainer, ListItem, ListTitle, ListDes, InputUpper, WeekContainer, DayContainer, ScheduleTime, TextSpaced, CardButtons, ActionButton, Text, Status, ButtonText, Type, Row, Porcentage } from '../your-plants.style';
import { openModal } from '@redq/reuse-modal';
import AddTimeSchedule from 'components/add-time-schedule/add-schedule-card';  
import { ISetting } from 'utils/types';
import { getRelayNameText, getSettingTypeText } from 'utils/sensorUtils';
import { CheckMark } from 'assets/icons/CheckMark';

interface Props {
  data?: any;
  plant: any;
  openTab: string;
  setOpenTab: (settingType: string) => void;
  handleDeleteSensor: (plant: any, settingType: string) => void;
  settingType: SensorsTypes;
  handleSettingsChange: (plant: any, field: string, value: string | boolean, settingType: SensorsTypes) => void;
  onDeleteSchedule: (plant: any, settingType: SensorsTypes, position: number) => void;
}

const Plug: React.FC<Props> = ({ plant, settingType, handleSettingsChange, onDeleteSchedule, data, openTab, setOpenTab, handleDeleteSensor  }) => {
    const setting = plant.sensors.find((sensor: ISetting) => sensor.settingType === settingType);
    const intl = useIntl();
    const [daySelected, setDay] = useState('');
    const [editIsOn, setEditIsOn] = useState(false);
    const selectedMode = distanceModeOptions.find((option) => option.value === setting.mode);
    const selectedManualState = manualModeOptions.find((option) => option.value === setting.relayOneWorking);
    const relayOneSelected = fourRelaysOptions.find((option) => option.value === setting.relayOneIdRelated);
    const relayTwoSelected = fourRelaysOptions.find((option) => option.value === setting.relayTwoIdRelated);
    const selectStyle = { control: styles => ({ ...styles, width: '160px', textAlign: 'left' }) };
    // const tabIsOpen = openTab === settingType;
    const tabIsOpen = true;
    
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
        <PlantsSensorContainer style={{ height: tabIsOpen ? '100%' : '82px' }} onClick={() => setOpenTab(tabIsOpen ? '' : settingType)}>
            <ListItem style={{ justifyContent: 'flex-start' }}>
                <ListTitle>
                    <Type bold>{getSettingTypeText(setting?.settingType)}</Type>
                </ListTitle>
                <ListDes style={{ marginLeft: '-10px' }}>
                    <CardButtons className='button-wrapper'>
                        { editIsOn ? (
                            <ActionButton onClick={() => setEditIsOn(!editIsOn)} className='edit-btn'>
                                <CheckMark />
                            </ActionButton>
                        ) : (
                            <ActionButton onClick={() => setEditIsOn(!editIsOn)} className='edit-btn'>
                                <PencilIcon />
                            </ActionButton>
                        )}
                        <ActionButton onClick={() => handleDeleteSensor(plant, settingType)} className='delete-btn'>
                            <CloseIcon />
                        </ActionButton>
                    </CardButtons>
                </ListDes>
            
            </ListItem>

            { (setting?.mode === PlugMode.NONE && !!openTab) && (
                <ListItem>
                    <Status>
                        <FormattedMessage id="modoRequiredWarningText" defaultMessage="modoRequiredWarningText" />
                    </Status>
                </ListItem>
            )}

            <ListItem style={{ justifyContent: 'flex-start' }}>
                <ListTitle>
                    <Text>
                        <FormattedMessage
                        id="distanceId"
                        defaultMessage="distanceId"
                        />
                    </Text>
                </ListTitle>
                <ListDes>
                    <Text bold>{(setting?.reading > 0 && setting?.reading < 100) ? setting?.reading + 'cm.'  : '-' } </Text>
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
                        <Text  bold>{setting?.name}</Text>
                    )}
                </ListDes>
            </ListItem>
        
            <ListItem style={{ justifyContent: 'flex-start' }}>
                <ListTitle>
                    <Text>
                        <FormattedMessage
                        id="distanceModeId"
                        defaultMessage="distanceModeId"
                        />
                    </Text>
                </ListTitle>
                <ListDes>
                { editIsOn ? (
                    <Select 
                        onChange={(e: any) => handleSettingsChange(plant, 'mode', e.value, settingType)}
                        value={selectedMode}
                        // placeholder={'asdsad'}
                        options={distanceModeOptions}
                        styles={selectStyle}
                        menuPosition={'fixed'}
                    />
                    ) : (
                        <Text  bold>{selectedMode.value.length > 1 ? selectedMode.label : '-'}</Text>
                    )}
                </ListDes>
            </ListItem>
         
            { setting?.mode !== PlugMode.NONE && (
                <ListItem style={{ justifyContent: 'flex-start' }}>
                    <ListTitle>
                    <Text bold>
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
            { setting.mode === PlugMode.CALENDAR && (
            <>
                <ListItem>
                    <ListTitle>
                        <Text>
                        <FormattedMessage
                            id='maxDistanceId'
                            defaultMessage='maxDistanceId'
                        />
                        </Text>
                    </ListTitle>
                    <Row>
                        { editIsOn ? (
                            <>
                                <Input
                                    type='number'
                                    name='maxWarning'
                                    value={setting.maxWarning}
                                    onChange={(e: any) => handleSettingsChange(plant, 'maxWarning', e.target.value, settingType)}
                                    backgroundColor='#F7F7F7'
                                    height='34.5px'
                                    width='45px'
                                />
                                <Porcentage>%</Porcentage>
                            </>
                        ) : (
                            <Text bold>{setting.maxWarning}</Text>
                        )}
                    </Row>
                </ListItem>

                <ListItem>
                    <ListTitle>
                        <Text>
                        <FormattedMessage
                            id='minDistanceId'
                            defaultMessage='minDistanceId'
                        />
                        </Text>
                    </ListTitle>
                    <Row>
                        { editIsOn ? (
                            <>
                                <InputUpper
                                    type='number'
                                    name='minWarning'
                                    value={setting.minWarning}
                                    onChange={(e: any) => handleSettingsChange(plant, 'minWarning', e.target.value, settingType)}
                                    backgroundColor='#F7F7F7'
                                    height='34.5px'
                                    width='45px'
                                />
                                <Porcentage>%</Porcentage>
                            </>
                        ) : (
                            <Text bold>{setting.minWarning}</Text>
                        )}
                    </Row>
                </ListItem>

                <ListItem>
                    <ListTitle>
                        <Text>
                        <FormattedMessage
                            id='asociateRelayOneId'
                            defaultMessage='asociateRelayOneId'
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
                            <Text bold>{setting?.relayOneIdRelated.length > 1 ? getRelayNameText(setting?.relayOneIdRelated) : '-'}</Text>
                        )}
                    </ListDes>
                </ListItem>
                
                <ListItem>
                    <ListTitle>
                        <Text>
                        <FormattedMessage
                            id='asociateRelayTwoId'
                            defaultMessage='asociateRelayTwoId'
                        />
                        </Text>
                    </ListTitle>
                    <ListDes>
                    { editIsOn ? (
                        <Select 
                            onChange={(e: any) => handleSettingsChange(plant, 'relayTwoIdRelated', e.value, settingType)}
                            value={relayTwoSelected}
                            options={fourRelaysOptions}
                            styles={selectStyle}
                            menuPosition={'fixed'}
                        />
                    ) : (
                        <Text bold>{setting?.relayTwoIdRelated.length > 1 ? getRelayNameText(setting?.relayTwoIdRelated) : '-'}</Text>
                    )}
                    </ListDes>
                </ListItem>

            </>
            )}

            { setting.mode === HumiditySensorMode.SCHEDULE && (
            <>
                <WeekContainer>
                {Object.keys(WeekDays).map((day, i: number) => {
                    return (
                        <DayContainer
                            key={i + '-day--humidity-1container'}
                            style={{ backgroundColor: daySelected === day ? '#c2b0b0' : 'transparent' }}
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
                        <WeekContainer>
                            { schedule.daysToRepeat.includes(daySelected) ? (
                                <ScheduleTime>
                                <TextSpaced><FormattedMessage id='startTimeId' defaultMessage='startTimeId' /></TextSpaced> <TextSpaced>{schedule.startTime}</TextSpaced>
                                <TextSpaced><FormattedMessage id='endTimeId' defaultMessage='endTimeId' /></TextSpaced> <TextSpaced>{schedule.endTime}</TextSpaced>
                                <CardButtons className='button-wrapper'>
                                    <ActionButton onClick={() => handleModal( AddTimeSchedule, { settingType: settingType, plant, id: data?.getUser?.id } )} className='edit-btn'>
                                    <PencilIcon />
                                    </ActionButton>

                                    <ActionButton onClick={() => onDeleteSchedule(plant, settingType, i)} className='delete-btn'>
                                    <CloseIcon />
                                    </ActionButton>
                                </CardButtons>
                                </ScheduleTime>
                            ) : <ScheduleTime style={{ border: '0px', height: '42px' }}></ScheduleTime>}
                        </WeekContainer>
                    )
                })}

                <ListItem style={{ justifyContent: 'flex-start' }}>
                    <ListTitle>
                    <Text bold>
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


                <Button
                    size='small'
                    variant='outlined'
                    type='button'
                    className='add-button'
                    onClick={() => handleModal(
                        AddTimeSchedule, 
                        {
                            name: 'add-humidity-1-schedule',
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
            </>
            )}
            
            { setting.mode === HumiditySensorMode.MANUAL && (
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
                        onChange={(e: any) => handleSettingsChange(plant, 'relayOneWorking', e.value, settingType)}
                        value={selectedManualState}
                        options={manualModeOptions}
                        styles={selectStyle}
                        menuPosition={'fixed'}
                        />
                    </ListDes>
                </ListItem>

                <ListItem>
                    <ListTitle>
                        <Text bold>
                        <FormattedMessage
                            id={setting.relayOneIdRelated?.length ? 'asociateRelayId' :'asociatedRelayId' }
                            defaultMessage={setting.relayOneIdRelated?.length ? 'asociateRelayId' :'asociatedRelayId'}
                        />
                        </Text>
                    </ListTitle>
                    <ListDes>
                        <Select 
                        onChange={(e: any) => handleSettingsChange(plant, 'relayOneIdRelated', e.value, settingType)}
                        value={relayOneSelected}
                        options={fourRelaysOptions}
                        styles={selectStyle}
                        menuPosition={'fixed'}
                        />
                    </ListDes>
                </ListItem>
            </>
            )}

            { setting.mode === HumiditySensorMode.SEEDS_POOL_IRRIGATION && (
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
                    value={setting.relayOneAutomatedTimeToRun}
                    onChange={(e: any) => handleSettingsChange(plant, 'relayOneAutomatedTimeToRun', e.target.value, settingType)}
                    backgroundColor='#F7F7F7'
                    height='34.5px'
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
                    value={setting.relayTwoAutomatedTimeToRun}
                    onChange={(e: any) => handleSettingsChange(plant, 'relayTwoAutomatedTimeToRun', e.target.value, settingType)}
                    backgroundColor='#F7F7F7'
                    height='34.5px'
                    />
                </ListDes>
                </ListItem>
            </>
            )}
            
            { setting?.logs?.length > 0 && (
                <HumidityLogsGraph
                    data={setting.logs}
                />
            )}
{/*         
            <CardButtons className='button-wrapper'>
                <ActionButton onClick={() => setEditIsOn(!editIsOn)} className='edit-btn'>
                    <PencilIcon />
                </ActionButton>
                <ActionButton onClick={() => handleDeleteSensor(plant, settingType)} className='delete-btn'>
                    <CloseIcon />
                </ActionButton>
            </CardButtons> */}
        </PlantsSensorContainer>
    );
};

export default Plug;
