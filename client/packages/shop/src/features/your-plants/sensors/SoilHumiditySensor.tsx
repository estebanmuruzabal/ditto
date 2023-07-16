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
import { FormattedMessage, useIntl } from 'react-intl';
import Select from 'react-select';
import { Input } from 'components/forms/input';
import { SettingsNames, HumiditySensorMode, WeekDays, fourRelaysOptions, humidityModeOptions, manualModeOptions } from 'utils/constant';
import HumidityLogsGraph from '../humidity-logs-graph/humidity-logs-graph';
import { PlantsSensorContainer, ListItem, ListTitle, ListDes, InputUpper, WeekContainer, DayContainer, ScheduleTime, TextSpaced, CardButtons, ActionButton, Text, Status } from '../your-plants.style';
import { openModal } from '@redq/reuse-modal';
import AddTimeSchedule from 'components/add-time-schedule/add-schedule-card';  

interface Props {
  data?: any;
  plant: any;
  openTab: string;
  setOpenTab: (settingName: string) => void;
  settingName: SettingsNames;
  handleSettingsChange: (e: any, plant: any, field: string, value: string | boolean, settingName: SettingsNames) => void;
  onDeleteSchedule: (plant: any, settingName: SettingsNames, position: number) => void;
}

const SoilHumiditySensor: React.FC<Props> = ({ plant, settingName, handleSettingsChange, onDeleteSchedule, data, openTab, setOpenTab  }) => {
    const setting = plant[settingName];
    const intl = useIntl();
    const [daySelected, setDay] = useState('');
    const selectedMode = humidityModeOptions.find((option) => option.value === setting.mode);
    const selectedManualState = manualModeOptions.find((option) => option.value === setting.relayOneWorking);
    const relayOneSelected = fourRelaysOptions.find((option) => option.value === setting.relayOneIdRelated);
    const relayTwoSelected = fourRelaysOptions.find((option) => option.value === setting.relayTwoIdRelated);
    const selectStyle = { control: styles => ({ ...styles, width: '197px', textAlign: 'left' }) };
    // const tabIsOpen = openTab === settingName;
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
        <PlantsSensorContainer style={{ height: tabIsOpen ? '100%' : '82px' }} onClick={() => setOpenTab(tabIsOpen ? '' : settingName)}>
            { (setting?.mode === HumiditySensorMode.NONE && !!openTab) && (
                <ListItem>
                    <Status>
                        <FormattedMessage id="modoRequiredWarningText" defaultMessage="modoRequiredWarningText" />
                    </Status>
                </ListItem>
            )}
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
                    value={setting.name}
                    placeholder={intl.formatMessage({ id: 'plantNameRequiredNameId', defaultMessage: 'plantNameRequiredNameId' })}
                    onChange={(e: any) => handleSettingsChange(e, plant, 'name', e.target.value, settingName)}
                    backgroundColor='#F7F7F7'
                    width='197px'
                    height='34.5px'
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
                <Text>{SettingsNames.SOIL_HUMIDITY_SETTING_1 === settingName ? plant?.soilHumidity1 : plant?.soilHumidity2} %</Text>
                </ListDes>
            </ListItem>
            <ListItem style={{ justifyContent: 'flex-start' }}>
                <ListTitle>
                <Text bold>
                    <FormattedMessage
                    id="humidityModeId"
                    defaultMessage="humidityModeId"
                    />
                </Text>
                </ListTitle>
                <ListDes>
                <Select 
                    onChange={(e: any) => handleSettingsChange(e, plant, 'mode', e.value, settingName)}
                    value={selectedMode}
                    options={humidityModeOptions}
                    styles={selectStyle}
                    menuPosition={'fixed'}
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
                    checked={setting.whatsappWarningsOn}
                    labelPosition={'right'}
                    // className,
                    onUpdate={(e) => handleSettingsChange(e, plant, 'sendWhatsappWarnings', !setting.sendWhatsappWarnings, settingName)}
                />
                </ListDes>
            </ListItem>


            { (setting.mode === HumiditySensorMode.IRRIGATE_ON_DEMAND ||
            setting.mode === HumiditySensorMode.SEEDS_POOL_IRRIGATION) && (
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
                    value={setting.maxWarning}
                    onChange={(e: any) => handleSettingsChange(e, plant, 'maxWarning', e.target.value, settingName)}
                    backgroundColor='#F7F7F7'
                    width='197px'
                    height='34.5px'
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
                    value={setting.minWarning}
                    onChange={(e: any) => handleSettingsChange(e, plant, 'minWarning', e.target.value, settingName)}
                    backgroundColor='#F7F7F7'
                    width='197px'
                    height='34.5px'
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
                    onChange={(e: any) => handleSettingsChange(e, plant, 'relayOneIdRelated', e.value, settingName)}
                    value={relayOneSelected}
                    options={fourRelaysOptions}
                    styles={selectStyle}
                    menuPosition={'fixed'}
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
                    onChange={(e: any) => handleSettingsChange(e, plant, 'relayTwoIdRelated', e.value, settingName)}
                    value={relayTwoSelected}
                    options={fourRelaysOptions}
                    styles={selectStyle}
                    menuPosition={'fixed'}
                    />
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
                    <WeekContainer>
                    { schedule.daysToRepeat.includes(daySelected) ? (
                        <ScheduleTime>
                        <TextSpaced><FormattedMessage id='startTimeId' defaultMessage='startTimeId' /></TextSpaced> <TextSpaced>{schedule.startTime}</TextSpaced>
                        <TextSpaced><FormattedMessage id='endTimeId' defaultMessage='endTimeId' /></TextSpaced> <TextSpaced>{schedule.endTime}</TextSpaced>
                        <CardButtons className='button-wrapper'>
                            <ActionButton onClick={() => handleModal( AddTimeSchedule, { settingName: settingName, plant, id: data?.getUser?.id } )} className='edit-btn'>
                            <PencilIcon />
                            </ActionButton>

                            <ActionButton onClick={() => onDeleteSchedule(plant, settingName, i)} className='delete-btn'>
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
                    onChange={(e: any) => handleSettingsChange(e, plant, 'relayOneWorking', e.value, settingName)}
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
                    onChange={(e: any) => handleSettingsChange(e, plant, 'relayOneIdRelated', e.value, settingName)}
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
                    onChange={(e: any) => handleSettingsChange(e, plant, 'relayOneAutomatedTimeToRun', e.target.value, settingName)}
                    backgroundColor='#F7F7F7'
                    width='197px'
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
                    onChange={(e: any) => handleSettingsChange(e, plant, 'relayTwoAutomatedTimeToRun', e.target.value, settingName)}
                    backgroundColor='#F7F7F7'
                    width='197px'
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
            
        </PlantsSensorContainer>
    );
};

export default SoilHumiditySensor;
