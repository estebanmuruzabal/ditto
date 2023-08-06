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
import { HumiditySensorMode, WeekDays, fourRelaysOptions, humidityModeOptions, manualModeOptions, SensorsTypes, DistanceMode, distanceModeOptions } from 'utils/constant';
import HumidityLogsGraph from '../humidity-logs-graph/humidity-logs-graph';
import { PlantsSensorContainer, ListItem, ListTitle, ListDes, InputUpper, WeekContainer, DayContainer, ScheduleTime, TextSpaced, CardButtons, ActionButton, Text, Status, ButtonText, Type, Row, ErrorMsg, Porcentage } from '../your-plants.style';
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
  errorId: string;
  handleSettingsChange: (plant: any, field: string, value: string | boolean, settingType: SensorsTypes) => void;
  onDeleteSchedule: (plant: any, settingType: SensorsTypes, position: number) => void;
}

const DistanceSensor: React.FC<Props> = ({ plant, settingType, handleSettingsChange, onDeleteSchedule, data, openTab, setOpenTab, handleDeleteSensor, errorId  }) => {
    const setting = plant.sensors.find((sensor: ISetting) => sensor.settingType === settingType);
    const intl = useIntl();
    const [daySelected, setDay] = useState('');
    const [editIsOn, setEditIsOn] = useState(false);
    const selectedMode = distanceModeOptions.find((option) => option.value === setting.mode);
    const selectedManualState = manualModeOptions.find((option) => option.value === setting.relayOneWorking);
    const relayOneSelected = fourRelaysOptions.find((option) => option.value === setting.relayOneIdRelated);
    const relayTwoSelected = fourRelaysOptions.find((option) => option.value === setting.relayTwoIdRelated);
    const selectStyle = { control: styles => ({ ...styles, width: '179.88px', textAlign: 'left' }) };
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

            { (setting?.mode === DistanceMode.NONE && !!openTab) && (
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
         
            { setting?.mode !== DistanceMode.NONE && (
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
                        disabled={(setting?.mode === DistanceMode.MIN_WARNING || setting?.mode === DistanceMode.MAX_WARNING) ? true : false}
                        checked={setting.whatsappWarningsOn || (setting?.mode === DistanceMode.MIN_WARNING || setting?.mode === DistanceMode.MAX_WARNING)}
                        labelPosition={'right'}
                        // className,
                        onUpdate={() => handleSettingsChange(plant, 'whatsappWarningsOn', !setting.whatsappWarningsOn, settingType)}
                    />
                    </ListDes>
                </ListItem>
            )}

            { setting?.mode === DistanceMode.MIN_WARNING && (
                <ListItem>
                    <ListTitle>
                        <Text>
                        <FormattedMessage
                            id='minDistanceId'
                            defaultMessage='minDistanceId'
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
                            <Text bold>{setting.minWarning}</Text>
                        )}
                    </ListDes>
                    {errorId === 'minWarning' && (
                        <ErrorMsg>
                            <FormattedMessage id="minMaxWarningId" defaultMessage="minMaxWarningId" />
                        </ErrorMsg>
                    )}
                </ListItem>
            )}

            { setting?.mode === DistanceMode.MAX_WARNING && (
                 <ListItem>
                    <ListTitle>
                        <Text>
                        <FormattedMessage
                            id='maxDistanceId'
                            defaultMessage='maxDistanceId'
                        />
                        </Text>
                    </ListTitle>
                    <ListDes>
                        { editIsOn ? (
                            <Row>
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
                            </Row>
                        ) : (
                            <Text bold>{setting.maxWarning}</Text>
                        )}
                        {errorId === 'maxWarning' && (
                            <ErrorMsg>
                                <FormattedMessage id="minMaxWarningId" defaultMessage="minMaxWarningId" />
                            </ErrorMsg>
                        )}
                    </ListDes>
                </ListItem>
            )}

            { (setting?.mode === DistanceMode.MIN_WARNING || setting?.mode === DistanceMode.MAX_WARNING) && (
                 <ListItem>
                    <ListTitle>
                        <Text>
                        <FormattedMessage
                            id='timeWithoutNotice'
                            defaultMessage='timeWithoutNotice'
                        />
                        </Text>
                    </ListTitle>
                    <ListDes>
                        { editIsOn ? (
                            <Row>
                                <Input
                                    type='number'
                                    name='relayTwoAutomatedStartedTime'
                                    value={setting.relayTwoAutomatedStartedTime}
                                    onChange={(e: any) => handleSettingsChange(plant, 'relayTwoAutomatedStartedTime', e.target.value, settingType)}
                                    backgroundColor='#F7F7F7'
                                    height='34.5px'
                                    width='45px'
                                />
                                <Porcentage>mins</Porcentage>
                            </Row>
                        ) : (
                            <Text bold>{setting.relayTwoAutomatedStartedTime}</Text>
                        )}
                    </ListDes>
                </ListItem>
            )}

            { [DistanceMode.WHEN_FULL_ACTION_CUSTOM, DistanceMode.WHEN_FULL_ACTION_AUTOMATED].indexOf(setting.mode) >= 0 && (
                <>
                    { setting?.mode === DistanceMode.WHEN_FULL_ACTION_AUTOMATED && (
                        <ListItem>
                            <ListTitle>
                                <Text>
                                <FormattedMessage
                                    id='minDistanceId'
                                    defaultMessage='minDistanceId'
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
                                    <Text bold>{setting.minWarning}</Text>
                                )}
                            </ListDes>
                            {errorId === 'minWarning' && (
                                <ErrorMsg>
                                    <FormattedMessage id="minMaxWarningId" defaultMessage="minMaxWarningId" />
                                </ErrorMsg>
                            )}
                        </ListItem>
                    )}

                    <ListItem>
                        <ListTitle>
                            <Text>
                            <FormattedMessage
                                id='maxDistanceId'
                                defaultMessage='maxDistanceId'
                            />
                            </Text>
                        </ListTitle>
                        <ListDes>
                            { editIsOn ? (
                                <Row>
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
                                </Row>
                            ) : (
                                <Text bold>{setting.maxWarning}</Text>
                            )}
                            {errorId === 'maxWarning' && (
                                <ErrorMsg>
                                    <FormattedMessage id="minMaxWarningId" defaultMessage="minMaxWarningId" />
                                </ErrorMsg>
                            )}
                        </ListDes>
                    </ListItem>

                    { setting?.mode === DistanceMode.WHEN_FULL_ACTION_CUSTOM && (
                         <ListItem>
                            <ListTitle>
                                <Text>
                                <FormattedMessage
                                    id='runingMinMaxWarningTimeId'
                                    defaultMessage='runingMinMaxWarningTimeId'
                                />
                                </Text>
                            </ListTitle>
                            <ListDes>
                                { editIsOn ? (
                                    <Row>
                                        <Input
                                            type='number'
                                            name='relayOneAutomatedTimeToRun'
                                            value={setting.relayOneAutomatedTimeToRun}
                                            onChange={(e: any) => handleSettingsChange(plant, 'relayOneAutomatedTimeToRun', e.target.value, settingType)}
                                            backgroundColor='#F7F7F7'
                                            height='34.5px'
                                            width='45px'
                                        />
                                        <Porcentage>mins.</Porcentage>
                                    </Row>
                                ) : (
                                    <Text bold>{setting.relayOneAutomatedTimeToRun}</Text>
                                )}
                            </ListDes>
                        </ListItem>
                    )}

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

            { [DistanceMode.WHEN_EMPTY_ACTION_CUSTOM, DistanceMode.WHEN_EMPTY_ACTION_AUTOMATED].indexOf(setting.mode) >= 0 && (
                <>
                    <ListItem>
                        <ListTitle>
                            <Text>
                            <FormattedMessage
                                id='minDistanceId'
                                defaultMessage='minDistanceId'
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
                                <Text bold>{setting.minWarning}</Text>
                            )}
                        </ListDes>
                        {errorId === 'minWarning' && (
                            <ErrorMsg>
                                <FormattedMessage id="minMaxWarningId" defaultMessage="minMaxWarningId" />
                            </ErrorMsg>
                        )}
                    </ListItem>

                    { setting?.mode === DistanceMode.WHEN_EMPTY_ACTION_AUTOMATED && (
                        <ListItem>
                             <ListTitle>
                                 <Text>
                                 <FormattedMessage
                                     id='maxDistanceId'
                                     defaultMessage='maxDistanceId'
                                 />
                                 </Text>
                             </ListTitle>
                             <ListDes>
                                 { editIsOn ? (
                                     <Row>
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
                                     </Row>
                                 ) : (
                                     <Text bold>{setting.maxWarning}</Text>
                                 )}
                                 {errorId === 'maxWarning' && (
                                     <ErrorMsg>
                                         <FormattedMessage id="minMaxWarningId" defaultMessage="minMaxWarningId" />
                                     </ErrorMsg>
                                 )}
                             </ListDes>
                         </ListItem>
                    )}

                    { setting?.mode === DistanceMode.WHEN_EMPTY_ACTION_CUSTOM && (
                         <ListItem>
                            <ListTitle>
                                <Text>
                                <FormattedMessage
                                    id='runingMinMaxWarningTimeId'
                                    defaultMessage='runingMinMaxWarningTimeId'
                                />
                                </Text>
                            </ListTitle>
                            <ListDes>
                                { editIsOn ? (
                                    <Row>
                                        <Input
                                            type='number'
                                            name='relayOneAutomatedTimeToRun'
                                            value={setting.relayOneAutomatedTimeToRun}
                                            onChange={(e: any) => handleSettingsChange(plant, 'relayOneAutomatedTimeToRun', e.target.value, settingType)}
                                            backgroundColor='#F7F7F7'
                                            height='34.5px'
                                            width='45px'
                                        />
                                        <Porcentage>mins.</Porcentage>
                                    </Row>
                                ) : (
                                    <Text bold>{setting.relayOneAutomatedTimeToRun}</Text>
                                )}
                            </ListDes>
                        </ListItem>
                    )}

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

export default DistanceSensor;
