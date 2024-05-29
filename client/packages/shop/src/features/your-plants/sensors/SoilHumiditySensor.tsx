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
import { PlantsSensorContainer, ListItem, ListTitle, ListDes, InputUpper, WeekContainer, DayContainer, ScheduleTime, TextSpaced, CardButtons, ActionButton, Text, Status, ButtonText, Type, ActionsButtons, Row, ScheduleTimeContainer, ErrorMsg, Porcentage } from '../your-plants.style';
import { openModal } from '@redq/reuse-modal';
import AddTimeSchedule from 'components/add-time-schedule/add-schedule-card';  
import { ISetting } from 'utils/types';
import { CheckMark } from 'assets/icons/CheckMark';
import { getDayShortName, getRelayNameText, getSettingTypeText } from 'utils/sensorUtils';
import HumidityReading from './sensor-readings/HumidityReading';

// import { useQuery } from '@apollo/react-hooks';
// const { loading, error, data = {} } = useQuery(GET_LOGGED_IN_USER_SETTINGS, {
//     notifyOnNetworkStatusChange: true,
//     fetchPolicy: "network-only",
//     // pollInterval: 5000,
//   });
interface Props {
  data?: any;
  plant: any;
  sensorIndex: number;
  openTab: string;
  errorId: string;
  setOpenTab: (settingType: string) => void;
  handleDeleteSensor: (plant: any, settingType: string) => void;
  settingType: SensorsTypes;
  handleSettingsChange: (plant: any, field: string, value: string | boolean, settingType: SensorsTypes) => void;
  onDeleteSchedule: (plant: any, settingType: SensorsTypes, position: number) => void;
}

const SoilHumiditySensor: React.FC<Props> = ({ errorId, plant, settingType, handleSettingsChange, onDeleteSchedule, data, openTab, setOpenTab, handleDeleteSensor  }) => {

    const intl = useIntl();
    const [editIsOn, setEditIsOn] = useState(false);
    const module = plant.sensors.find((module: ISetting) => module.settingType === settingType);
    const selectedMode = humidityModeOptions.find((option) => option.value === module.mode);
    const selectedManualState = manualModeOptions.find((option) => option.value === module.relayOneWorking);
    const relayOneSelected = fourRelaysOptions.find((option) => option.value === module.relayOneIdRelated);
    const relayTwoSelected = fourRelaysOptions.find((option) => option.value === module.relayTwoIdRelated);
    const selectStyle = { control: styles => ({ ...styles, width: '120px', textAlign: 'left' }) };

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
        <PlantsSensorContainer style={{ height: tabIsOpen ? '100%' : '82px' }} onClick={(e) => { e.stopPropagation(); setOpenTab(tabIsOpen ? '' : settingType); }}>
            <ListItem style={{ justifyContent: 'flex-start' }}>
                <ListTitle>
                    <Type bold>{getSettingTypeText(module?.settingType)}</Type>
                </ListTitle>
                <ListDes>
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

            { (module?.mode === HumiditySensorMode.NONE && !!openTab) && (
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
                    <HumidityReading module={module} plantId={plant.plantId} latestDataFetched={data} />
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
                            value={module.name}
                            placeholder={intl.formatMessage({ id: 'plantNameRequiredNameId', defaultMessage: 'plantNameRequiredNameId' })}
                            onChange={(e: any) => handleSettingsChange(plant, 'name', e.target.value, settingType)}
                            backgroundColor='#F7F7F7'
                            height='34.5px'
                            // intlInputLabelId="profileEmailField"
                        />
                    ) : (
                        <Text bold>{module?.name}</Text>
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
                        <Text style={{ width: 'max-content', textOverflow: 'ellipsis' }} bold>{selectedMode?.value.length > 1 ? selectedMode.label : '-'}</Text>
                    )}
                </ListDes>
            </ListItem>

            { module?.mode !== HumiditySensorMode.NONE && (
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
                        checked={module.whatsappWarningsOn}
                        labelPosition={'right'}
                        // className,
                        onUpdate={() => handleSettingsChange(plant, 'whatsappWarningsOn', !module.whatsappWarningsOn, settingType)}
                    />
                    </ListDes>
                </ListItem>
            )}
            
            { module.mode === HumiditySensorMode.IRRIGATE_ON_DEMAND && (
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
                                    value={module.minWarning}
                                    onChange={(e: any) => handleSettingsChange(plant, 'minWarning', e.target.value, settingType)}
                                    backgroundColor='#F7F7F7'
                                    height='34.5px'
                                    width='45px'
                                />
                                <Porcentage>%</Porcentage>
                            </Row>
                        ) : (
                            <Text bold>{(module.minWarning >= 0 && module.minWarning <= 100) ? module?.minWarning : '-'} %</Text>
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
                                <Text bold>{module?.relayOneIdRelated.length > 1 ? getRelayNameText(module?.relayOneIdRelated) : '-'}  {module?.relayOneWorking ? '[ON]' : '[OFF]'}</Text>
                                {/* <Reading> */}
                        {/* <Reading> */}
                            </>
                        )}
                    </ListDes>
                </ListItem>
            </>
            )}

            {   module.mode === HumiditySensorMode.SEEDS_POOL_IRRIGATION && (
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
                                <Row>
                                    <Input
                                        type='number'
                                        name='maxWarning'
                                        value={module.maxWarning}
                                        onChange={(e: any) => handleSettingsChange(plant, 'maxWarning', e.target.value, settingType)}
                                        backgroundColor='#F7F7F7'
                                        height='34.5px'
                                        width='45px'
                                    />
                                    <Porcentage>%</Porcentage>
                                    {errorId === 'maxWarning' && (
                                        <ErrorMsg>
                                            <FormattedMessage id="minMaxWarningId" defaultMessage="minMaxWarningId" />
                                        </ErrorMsg>
                                    )}
                                </Row>
                            ) : (
                                <Text bold>{(module.maxWarning >= 0 && module.maxWarning <= 100) ? module?.maxWarning : '-'} %</Text>
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
                                <Row>
                                    <Input
                                        type='number'
                                        name='minWarning'
                                        value={module.minWarning}
                                        onChange={(e: any) => handleSettingsChange(plant, 'minWarning', e.target.value, settingType)}
                                        backgroundColor='#F7F7F7'
                                        height='34.5px'
                                        width='45px'
                                        />
                                        <Porcentage>%</Porcentage>
                                    {errorId === 'minWarning' && (
                                        <ErrorMsg>
                                            <FormattedMessage id="minMaxWarningId" defaultMessage="minMaxWarningId" />
                                        </ErrorMsg>
                                    )}
                                </Row>
                            ) : (
                                <Text bold>{(module.minWarning >= 0 && module.minWarning <= 100) ? module?.minWarning : '-'} %</Text>
                            )}
                        </ListDes>
                    </ListItem>

                    <ListItem>
                        <ListTitle>
                            <Text>
                            <FormattedMessage
                                id={relayOneSelected?.value?.length > 0 ? 'asociatedToId' : 'asociateRelayOneId'}
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
                                <Text bold>{module?.relayOneIdRelated.length > 1 ? getRelayNameText(module?.relayOneIdRelated) : '-'}  {module?.relayOneWorking ? '[ON]' : '[OFF]'}</Text>
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
                            <Text bold>{module?.relayTwoIdRelated.length > 1 ? getRelayNameText(module?.relayTwoIdRelated) : '-'}</Text>
                        )}
                        </ListDes>
                    </ListItem>

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
                                    value={module.relayOneAutomatedTimeToRun}
                                    onChange={(e: any) => handleSettingsChange(plant, 'relayOneAutomatedTimeToRun', e.target.value, settingType)}
                                    backgroundColor='#F7F7F7'
                                    height='34.5px'
                                />
                            ) : (
                                <Text bold>{module?.relayOneAutomatedTimeToRun >= 0 ? module.relayOneAutomatedTimeToRun + ' mins' : '-'}</Text>
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
                                    value={module.relayTwoAutomatedTimeToRun}
                                    onChange={(e: any) => handleSettingsChange(plant, 'relayTwoAutomatedTimeToRun', e.target.value, settingType)}
                                    backgroundColor='#F7F7F7'
                                    height='34.5px'
                                />
                            ) : (
                                <Text bold>{module?.relayTwoAutomatedTimeToRun?.length > 0 ? module.relayTwoAutomatedTimeToRun + ' mins' : '-'}</Text>
                            )}
                        </ListDes>
                    </ListItem>
                </>
            )}

            {   (module.mode === HumiditySensorMode.IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND || module.mode === HumiditySensorMode.IRRIGATE_SPECIFICT_AMOUNT_WITH_DOUBLE_ACTION) && (
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
                                        value={module.minWarning}
                                        onChange={(e: any) => handleSettingsChange(plant, 'minWarning', e.target.value, settingType)}
                                        backgroundColor='#F7F7F7'
                                        height='34.5px'
                                        width='45px'
                                    />
                                    <Porcentage>%</Porcentage>
                                </Row>
                            ) : (
                                <Text bold>{(module.minWarning >= 0 && module.minWarning <= 100) ? module?.minWarning : '-'} %</Text>
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
                                id={relayOneSelected?.value?.length > 0 ? 'asociatedToId' : 'asociateRelay1Id'}
                                defaultMessage='asociateRelay1Id'
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
                                <>
                                    <Text bold>{module?.relayOneIdRelated.length > 1 ? getRelayNameText(module?.relayOneIdRelated) : '-'}  {module?.relayOneWorking ? '[ON]' : '[OFF]'}</Text>
                                </>
                            )}
                        </ListDes>
                    </ListItem>

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
                                    value={module.relayOneAutomatedTimeToRun}
                                    onChange={(e: any) => handleSettingsChange(plant, 'relayOneAutomatedTimeToRun', e.target.value, settingType)}
                                    backgroundColor='#F7F7F7'
                                    height='34.5px'
                                />
                            ) : (
                                <Text bold>{module?.relayOneAutomatedTimeToRun >= 0 ? module.relayOneAutomatedTimeToRun + ' mins' : '-'}</Text>
                            )}
                        </ListDes>
                    </ListItem>
                    
                    {   module.mode === HumiditySensorMode.IRRIGATE_SPECIFICT_AMOUNT_WITH_DOUBLE_ACTION && (                        
                        <ListItem>
                            <ListTitle>
                                <Text>
                                <FormattedMessage
                                    id={relayTwoSelected?.value?.length > 0 ? 'asociatedToId' : 'asociateRelay2Id'}
                                    defaultMessage='asociateRelay2Id'
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
                                <Text bold>{module?.relayTwoIdRelated.length > 1 ? getRelayNameText(module?.relayTwoIdRelated) : '-'}  {module?.relayTwoWorking ? '[ON]' : '[OFF]'}</Text>
                            )}
                            </ListDes>
                        </ListItem>
                    )}
                </>
            )}

            { (module.mode === HumiditySensorMode.SCHEDULE || module.mode === HumiditySensorMode.SCHEDULE_DOUBLE_ACTION) && (
            <>
                <ListItem>
                    <ListTitle>
                        <Text>
                        <FormattedMessage
                            id={relayTwoSelected?.value?.length > 0 ? 'asociatedToId' : 'asociateRelay1Id'}
                            defaultMessage='asociateRelay1Id'
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
                            <Text bold>{module?.relayOneIdRelated.length > 1 ? getRelayNameText(module?.relayOneIdRelated) : '-'}  {module?.relayOneWorking ? '[ON]' : '[OFF]'}</Text>
                        )}
                    </ListDes>
                </ListItem>

                {   module.mode === HumiditySensorMode.SCHEDULE_DOUBLE_ACTION && (                        
                    <ListItem>
                        <ListTitle>
                            <Text>
                            <FormattedMessage
                                id={relayTwoSelected?.value?.length > 0 ? 'asociatedToId' : 'asociateRelay2Id'}
                                defaultMessage='asociateRelay2Id'
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
                            <Text bold>{module?.relayTwoIdRelated.length > 1 ? getRelayNameText(module?.relayTwoIdRelated) : '-'}  {module?.relayTwoWorking ? '[ON]' : '[OFF]'}</Text>
                        )}
                        </ListDes>
                    </ListItem>
                )}

                { module?.scheduledOnTimes?.map((schedule: any, i: number) => {
                    return (
                        <WeekContainer>
                            <ListDes style={{ flexDirection: 'row', display: 'flex', paddingBottom: '10px' }} >
                            {WeekDays.map((day: any) => {
                                    return (
                                        <DayContainer
                                            key={i + '-day--humidity-1container'}
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
                                    <ActionButton onClick={(e) => { handleModal( AddTimeSchedule, { settingType: settingType, plant, id: data?.getUser?.id, schedulePosition: i } ); e.stopPropagation(); } } className='edit-btn'>
                                        <PencilIcon />
                                    </ActionButton>

                                    <ActionButton onClick={() => onDeleteSchedule(plant, settingType, i)} className='delete-btn'>
                                        <CloseIcon />
                                    </ActionButton>
                                    {/* 💤🤖 ❌🚫⛔️✅🔆⏹️ */}
                                    <TextSpaced bold>{schedule.enabled ? '' : '⏹️'}</TextSpaced>
                                </ActionsButtons>
                            </ScheduleTimeContainer>
                        </WeekContainer>
                    )
                })}

                <Button
                    size='small'
                    variant='outlined'
                    style={{marginLeft: '10px'}}
                    type='button'
                    className='add-button'
                    onClick={() => handleModal(
                        AddTimeSchedule,  { name: 'add-humidity-1-schedule', plant, id: data?.getUser?.id, settingType } )}
                >
                    <FormattedMessage id='addTimeScheduleId' defaultMessage='addTimeScheduleId' />
                </Button>
            </>
            )}
            
            { (module.mode === HumiditySensorMode.MANUAL) && (
                <>
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
                            {/* { editIsOn ? (
                                <Select 
                                    onChange={(e: any) => handleSettingsChange(plant, 'relayOneWorking', e.value, settingType)}
                                    value={selectedManualState}
                                    options={manualModeOptions}
                                    styles={selectStyle}
                                    menuPosition={'fixed'}
                                />
                            ) : (
                                <Text bold>{module.relayOneWorking}</Text>
                            )} */}
                            {/* <Reading> */}
                        {/* <Reading> */}
                        {/* <Reading> */}
                        {/* <Reading> */}
                        {/* <Reading> */}
                        {/* <Reading> */}
                        {/* <Reading> */}
                        {/* <Reading> */}
                            <Switch 
                                disabled={false}
                                checked={module.relayOneWorking}
                                labelPosition={'right'}
                                // className,
                                onUpdate={() => handleSettingsChange(plant, 'relayOneWorking', !module.relayOneWorking, settingType)}
                            />

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
                                    styles={selectStyle}
                                    menuPosition={'fixed'}
                                />
                            ) : (
                                <>
                                    <Text bold>{module?.relayOneIdRelated.length > 1 ? getRelayNameText(module?.relayOneIdRelated) : '-'}  {module?.relayOneWorking ? '[ON]' : '[OFF]'}</Text>
                                </>
                            )}
                        </ListDes>
                    </ListItem>
                </>
            )}

            { module?.logs?.length > 0 && ( <HumidityLogsGraph data={module.logs} /> )}
        </PlantsSensorContainer>
    );
};

export default SoilHumiditySensor;
