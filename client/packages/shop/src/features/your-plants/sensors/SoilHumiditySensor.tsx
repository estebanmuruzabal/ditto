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
import { SensorsTypes, HumiditySensorMode, WeekDays, fourRelaysOptions, humidityModeOptions, manualModeOptions } from 'utils/constant';
import HumidityLogsGraph from '../humidity-logs-graph/humidity-logs-graph';
import { PlantsSensorContainer, ListItem, ListTitle, ListDes, InputUpper, WeekContainer, DayContainer, ScheduleTime, TextSpaced, CardButtons, ActionButton, Text, Status, ButtonText, Type, ActionsButtons, Row, ScheduleTimeContainer, WeekContainerModal } from '../your-plants.style';
import { openModal } from '@redq/reuse-modal';
import AddTimeSchedule from 'components/add-time-schedule/add-schedule-card';  
import { ISetting } from 'utils/types';
import { CheckMark } from 'assets/icons/CheckMark';
import { getRelayNameText, getSettingTypeText } from 'utils/sensorUtils';

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

const SoilHumiditySensor: React.FC<Props> = ({ plant, settingType, handleSettingsChange, onDeleteSchedule, data, openTab, setOpenTab, handleDeleteSensor  }) => {
    const setting = plant.sensors.find((sensor: ISetting) => sensor.settingType === settingType);
    const intl = useIntl();
    const [editIsOn, setEditIsOn] = useState(false);
    const selectedMode = humidityModeOptions.find((option) => option.value === setting.mode);
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

            { (setting?.mode === HumiditySensorMode.NONE && !!openTab) && (
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
                        id="soilHumidityId"
                        defaultMessage="soilHumidityId"
                        />
                    </Text>
                </ListTitle>
                <ListDes>
                    <Text bold>{(setting?.reading > 0 && setting?.reading < 100) ? setting?.reading + '%'  : '-' } </Text>
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
                        id="humidityModeId"
                        defaultMessage="humidityModeId"
                        />
                    </Text>
                </ListTitle>
                <ListDes>
                { editIsOn ? (
                    <Select 
                        onChange={(e: any) => handleSettingsChange(plant, 'mode', e.value, settingType)}
                        value={selectedMode}
                        options={humidityModeOptions}
                        styles={selectStyle}
                        menuPosition={'fixed'}
                    />
                    ) : (
                        <Text  bold>{selectedMode.value.length > 1 ? selectedMode.label : '-'}</Text>
                    )}
                </ListDes>
            </ListItem>

            { setting?.mode !== HumiditySensorMode.NONE && (
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
            
            { (setting.mode === HumiditySensorMode.IRRIGATE_ON_DEMAND ||
                setting.mode === HumiditySensorMode.SEEDS_POOL_IRRIGATION) && (
            <>
                <ListItem style={{ justifyContent: 'flex-start' }}>
                    <ListTitle>
                        <Text>
                        <FormattedMessage
                            id='maxHumidityId'
                            defaultMessage='maxHumidityId'
                        />
                        </Text>
                    </ListTitle>
                    <ListDes>
                        { editIsOn ? (
                            <Input
                                type='number'
                                name='maxWarning'
                                value={setting.maxWarning}
                                onChange={(e: any) => handleSettingsChange(plant, 'maxWarning', e.target.value, settingType)}
                                backgroundColor='#F7F7F7'
                                height='34.5px'
                            />
                        ) : (
                            <Text bold>{(setting.maxWarning >= 0 && setting.maxWarning <= 100) ? setting?.maxWarning : '-'} %</Text>
                        )}
                    </ListDes>
                </ListItem>

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
                            <InputUpper
                                type='number'
                                name='minWarning'
                                value={setting.minWarning}
                                onChange={(e: any) => handleSettingsChange(plant, 'minWarning', e.target.value, settingType)}
                                backgroundColor='#F7F7F7'
                                height='34.5px'
                            />
                        ) : (
                            <Text bold>{(setting.minWarning >= 0 && setting.minWarning <= 100) ? setting?.minWarning : '-'} %</Text>
                        )}
                    </ListDes>
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

            </>
            )}

            { setting.mode === HumiditySensorMode.SCHEDULE && (
            <>
                { setting?.scheduledOnTimes?.map((schedule: any, i: number) => {
                    return (
                        <WeekContainer>
                            <ListDes style={{ flexDirection: 'row', display: 'flex', paddingBottom: '10px' }} >
                                {Object.keys(WeekDays).map((day, i: number) => {
                                    return (
                                        <DayContainer
                                            key={i + '-day--humidity-1container'}
                                            style={{ backgroundColor: schedule.daysToRepeat.includes(day) ? '#c2b0b0' : 'transparent' }}
                                            // onClick={() => setDay(day)}
                                        >
                                            {day.substring(0,2)}
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
                            </ScheduleTimeContainer>
                        </WeekContainer>
                    )
                })}

                <Button
                    size='small'
                    variant='outlined'
                    type='button'
                    className='add-button'
                    onClick={() => handleModal(
                        AddTimeSchedule,  { name: 'add-humidity-1-schedule', plant, id: data?.getUser?.id, settingType } )}
                >
                    <FormattedMessage id='addTimeScheduleId' defaultMessage='addTimeScheduleId' />
                </Button>
            </>
            )}
            
            { (setting.mode === HumiditySensorMode.MANUAL && setting.relayOneIdRelated.length > 1) && (
            <ListItem style={{ justifyContent: 'flex-start' }}>
                <ListTitle>
                    <Text>
                    <FormattedMessage
                        id='manualModeStateId'
                        defaultMessage='manualModeStateId'
                    />
                    </Text>
                </ListTitle>
                <ListDes>
                    { editIsOn ? (
                        <Select 
                            onChange={(e: any) => handleSettingsChange(plant, 'relayOneWorking', e.value, settingType)}
                            value={selectedManualState}
                            options={manualModeOptions}
                            styles={selectStyle}
                            menuPosition={'fixed'}
                        />
                    ) : (
                        <Text bold>{selectedManualState.label}</Text>
                    )}
                </ListDes>
            </ListItem>
            )}

            { setting.mode === HumiditySensorMode.SEEDS_POOL_IRRIGATION && (
            <>
                <ListItem>
                <ListTitle>
                    <Text>
                    <FormattedMessage
                        id='irrigationTimeId'
                        defaultMessage='irrigationTimeId'
                    />
                    </Text>
                </ListTitle>
                <ListDes>
                    { editIsOn ? (
                        <Input
                            type='number'
                            name='relayOneAutomatedTimeToRun'
                            value={setting.relayOneAutomatedTimeToRun}
                            onChange={(e: any) => handleSettingsChange(plant, 'relayOneAutomatedTimeToRun', e.target.value, settingType)}
                            backgroundColor='#F7F7F7'
                            height='34.5px'
                        />
                    ) : (
                        <Text bold>{setting?.relayOneAutomatedTimeToRun >= 0 ? setting.relayOneAutomatedTimeToRun + ' mins' : '-'}</Text>
                    )}
                </ListDes>
                </ListItem>

                <ListItem>
                <ListTitle>
                    <Text>
                    <FormattedMessage
                        id='irrigationEvacuationTimeId'
                        defaultMessage='irrigationEvacuationTimeId'
                    />
                    </Text>
                </ListTitle>
                <ListDes>
                    { editIsOn ? (
                        <Input
                            type='number'
                            name='relayTwoAutomatedTimeToRun'
                            value={setting.relayTwoAutomatedTimeToRun}
                            onChange={(e: any) => handleSettingsChange(plant, 'relayTwoAutomatedTimeToRun', e.target.value, settingType)}
                            backgroundColor='#F7F7F7'
                            height='34.5px'
                        />
                    ) : (
                        <Text bold>{setting?.relayTwoAutomatedTimeToRun?.length > 1 ? setting.relayTwoAutomatedTimeToRun + ' mins' : '-'}</Text>
                    )}
                </ListDes>
                </ListItem>
            </>
            )}
            
            { setting?.logs?.length > 0 && ( <HumidityLogsGraph data={setting.logs} /> )}
        </PlantsSensorContainer>
    );
};

export default SoilHumiditySensor;
