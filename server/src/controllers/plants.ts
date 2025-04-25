// import { playintegrity } from "googleapis/build/src/apis/playintegrity";
import moment from "moment";

import { AirHumiditySensorMode, AirTemperatureSensorMode, C02SensorMode, DistanceSensorMode, HumiditySensorMode, ISensorSetting, ISetting, LightSensorMode, Plant } from "../lib/types";
import { sendMessage } from "./send";
import { WeekDays } from "../utils/constants";
import { fireWhatappAlarmIfIsOn, logTimeStampWithTimeFilter } from "../utils/logsUtils";
import 'moment-timezone';

export const checkSensorAndUpdateSettings = async (plant: Plant, sensorIndex: number, phoneNumber: string, timeZone: string) => {
    if (!plant?.sensors[sensorIndex]) { console.log('NO MODULE FOUND', plant?.sensors[sensorIndex]); return plant; }
    let setting = plant.sensors[sensorIndex];
    let { minWarning, maxWarning, relayOneIdRelated, relayTwoIdRelated, whatsappWarningsOn, mode, logs, relayOneAutomatedTimeToRun, relayTwoAutomatedTimeToRun, relayOneAutomatedStartedTime, relayTwoAutomatedStartedTime, relayTwoWorking, scheduledOnTimes } = setting;
    const sensorReadingName = plant.sensors[sensorIndex].settingType?.toLocaleLowerCase();
    // @ts-ignore
    setting.reading = plant[sensorReadingName];
    // @ts-ignore
    const reading = plant[sensorReadingName];
    // @ts-ignore
    const relayOneWorking = plant[relayOneIdRelated];

    const minReading = Number(minWarning);
    const maxReading = Number(maxWarning);
    const secondActionTimeInMins = Number(relayTwoAutomatedTimeToRun);
    const firstActionTimeInMins = Number(relayOneAutomatedTimeToRun);

    const currentTime = moment(new Date().toLocaleString('en-US', { timeZone }));

    const actionStartedTime = moment(relayOneAutomatedStartedTime);
    const startedSecondActionTime = moment(relayTwoAutomatedStartedTime);
    const firstActionInSeconds = currentTime?.diff(actionStartedTime, 'minutes');
    const secondActionInSeconds = currentTime?.diff(startedSecondActionTime, 'minutes');

    const irrigationShouldStart = reading < minReading && !relayOneWorking && !!!relayOneAutomatedStartedTime.length;
    const irrigationInProgress = firstActionInSeconds >= 0 && firstActionInSeconds < firstActionTimeInMins;
    const irrigationComplete = firstActionInSeconds >= firstActionTimeInMins && relayOneWorking;
    const relayTwoAsocciatedActionShouldStart = reading >= maxReading && !relayTwoWorking && relayOneAutomatedStartedTime.length > 0;
    const relayTwoAsocciatedActionComplete = secondActionInSeconds >= secondActionTimeInMins && !!relayTwoAutomatedStartedTime.length;
    
    moment.locale('es');
    const today = moment(new Date().toLocaleString('en-US', { timeZone }), 'MM/D/YYYY').day();
    
    const maxLevelReached = reading >= maxReading && !relayOneWorking && !!!relayOneAutomatedStartedTime.length;
    const minLevelReached = reading <= minReading && relayOneAutomatedStartedTime.length > 0;
    const currentTimeWithoutNotifing = currentTime?.diff(actionStartedTime, 'minutes');
    const timeInMinutesThatShouldntNotify = Number(relayTwoAutomatedStartedTime);
    const actionShouldStart = Number(reading) >= minReading && !relayOneWorking && !!!relayOneAutomatedStartedTime.length;

    // refactor: WE SHOULD ADD A SWITH FOR MODULE TYPE, AND FROM THERE A SWITCH FOR MODE, is still working fine cause each mode for each sensor is unique
    switch (mode) {
        case HumiditySensorMode.IRRIGATE_ON_DEMAND:
            // modo riego solo cuando falta agua con 1 solo reley y cierra cuando detecta humedad,
            // must have maxReading, minWarning and relayIdRelated variables setted!!!

            if (!minReading || !relayOneIdRelated) { console.log('No relayOneIdRelated, or no minWarning setted: [please set one] ', plant.sensors[sensorIndex]); break; }

            if (reading < minReading && !relayOneWorking) {

                plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading, timeZone);
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;

                if (whatsappWarningsOn) sendMessage(phoneNumber, `Aviso: tu planta: ${setting.name} llego a ${reading}% de humedad, ya estamos regando!`);
                break;
            } else if (reading >= minReading && relayOneWorking) {
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone, false, true);

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu planta: ${setting.name} llego a ${reading}% de humedad, ya terminamos de regar!`);
                break;
            }

            plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case HumiditySensorMode.INTERMITTENT_IRRIGATION:
            setting?.scheduledOnTimes?.map((schedule: any, i: number) => {
                if (schedule.daysToRepeat.includes(today) && schedule.enabled) {
                    const currentTime = moment(new Date().toLocaleString('en-US', { timeZone }));

                    let startTime = moment(new Date().toLocaleString('en-US', { timeZone }));
                    let endTime = moment(new Date().toLocaleString('en-US', { timeZone }));
                    startTime.set('hour', Number(schedule.startTime.split(':')[0])); 
                    startTime.set('minute', Number(schedule.startTime.split(':')[1])); 
                    endTime.set('hour', Number(schedule.endTime.split(':')[0])); 
                    endTime.set('minute', Number(schedule.endTime.split(':')[1])); 

                    const isInsideTimeFrame = currentTime.isBetween(startTime, endTime);

                    if (isInsideTimeFrame) {
                        // relayOneAutomatedTimeToRun : original cycles num
                        // relayTwoAutomatedTimeToRun : current cycles num
                        const originalIrrigationCycles = Number(relayOneAutomatedTimeToRun);
                        const currentIrrigationCycles = Number(relayTwoAutomatedTimeToRun);
                        // const currentIrrigationCycles = Number(relayOneAutomatedStartedTime);
                        const lastIrrigationMinuteStamp = Number(relayTwoAutomatedStartedTime);
                        
                        if (currentIrrigationCycles > 0 && setting.relayOneWorking) {
                            // @ts-ignore
                            plant[relayOneIdRelated] = !setting.relayOneWorking;
                            setting.relayOneWorking = !setting.relayOneWorking;
                            // @ts-ignore
                            plant[relayTwoIdRelated] = !setting.relayTwoWorking;
                            setting.relayTwoWorking = !setting.relayTwoWorking;
                            console.log(1)  
                        } else if (currentIrrigationCycles > 0 && !setting.relayOneWorking  && currentTime.minutes() !== lastIrrigationMinuteStamp) {
                            setting.relayTwoAutomatedTimeToRun = String(currentIrrigationCycles - 1); 
                            setting.relayTwoAutomatedStartedTime = String(currentTime.minutes()); 
                            // @ts-ignore
                            plant[relayOneIdRelated] = !setting.relayOneWorking;
                            setting.relayOneWorking = !setting.relayOneWorking;
                            // @ts-ignore
                            plant[relayTwoIdRelated] = !setting.relayTwoWorking;
                            setting.relayTwoWorking = !setting.relayTwoWorking;
                            console.log(2)    
                        } else if (currentIrrigationCycles === 0) {
                            // @ts-ignore
                            plant[relayOneIdRelated] = false;
                            setting.relayOneWorking = false;   
                            // @ts-ignore
                            plant[relayTwoIdRelated] = false;
                            setting.relayTwoWorking = false; 
                            setting.relayOneAutomatedStartedTime = String(relayOneAutomatedTimeToRun); 
                            setting.relayTwoAutomatedStartedTime = String(relayTwoAutomatedTimeToRun); 
                            console.log(3)    
                        }
                    }
                }  
            })
            setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case HumiditySensorMode.IRRIGATE_SPECIFICT_AMOUNT_WITH_DOUBLE_ACTION:
            if (!minReading || !relayOneIdRelated || !relayTwoIdRelated)  { console.log('No relayOneIdRelated, relayOneAutomatedStartedTime or no minWarning setted: ', plant.sensors[sensorIndex]); break; }

            if (irrigationInProgress) {
                plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading, timeZone);
                return plant;
            }

            if (irrigationShouldStart) {
                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;
                // @ts-ignore
                plant[relayTwoIdRelated] = true;
                setting.relayTwoWorking = true;

                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                setting.relayTwoAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading, timeZone);

                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting?.name} llego a ${reading}% de humedad, accionamos las 2 acciones.`);
                break;
            } else if (irrigationComplete) {
                // we just turn off the filling in watter system
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone, false, true);

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;
                // @ts-ignore
                plant[relayTwoIdRelated] = false;
                setting.relayTwoWorking = false;
                setting.relayOneAutomatedStartedTime = '';
                setting.relayTwoAutomatedStartedTime = '';

                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} termino sus acciones en ${Number(relayOneAutomatedTimeToRun)} minutos.`);
                break;
            }

            setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case HumiditySensorMode.IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND:
            // modo semillero: detecta seco, abre reley 1 y cierra el reley 2, detecta humedad y cierra reley 1 y abre reley 2. // detecta seco, abre 1 y cierra 2  
            // must have minWarning and relayIdRelated variables setted!!!

            // relayTwoAutomatedTimeToRun SHOULD CONTAIN THE MINUTES TIME

            if (!minReading || !relayOneIdRelated)  { console.log('No relayOneIdRelated or no minWarning setted: ', plant.sensors[sensorIndex]); break; }

            if (irrigationInProgress) {
                plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading, timeZone);
                return plant;
            }

            if (irrigationShouldStart) {
                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;

                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading, timeZone);

                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting?.name} llego a ${reading}% de humedad, ya estamos llenando la pileta con agua.`);
                break;
            } else if (irrigationComplete) {
                // we just turn off the filling in watter system
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone, false, true);

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu semillero: ${setting.name} acaba de llenar la pileta con ${Number(relayOneAutomatedTimeToRun) * 2} litros agua.`);
                break;
            }

            setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case HumiditySensorMode.SEEDS_POOL_IRRIGATION:
            // modo semillero: detecta seco, abre reley 1 y cierra el reley 2, detecta humedad y cierra reley 1 y abre reley 2. // detecta seco, abre 1 y cierra 2  
            // must have minWarning and relayIdRelated variables setted!!!

            // relayTwoAutomatedTimeToRun SHOULD CONTAIN THE MINUTES TIME

            if (!minReading || !relayOneIdRelated || !maxReading || !relayTwoIdRelated || !relayOneAutomatedTimeToRun || !relayTwoAutomatedTimeToRun)  { console.log('No relayOneIdRelated, or no minWarning setted: ', setting); break; }
            if (secondActionTimeInMins <=0) { console.log('relayTwoAutomatedTimeToRun SHOULD CONTAIN THE NUMBER OF MINUTES TO BE THE RELAY ON ', setting); break; }

            if (irrigationInProgress) {
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
                return plant;
            }

            if (irrigationShouldStart) {
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu semillero: ${setting.name} llego a ${reading}% de humedad, ya estamos llenando la pileta con agua.`);

                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;

                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone, true, false);
                // we turn evacuation watering relay OFF just in case
                // @ts-ignore
                plant[relayTwoIdRelated] = false;
                setting.relayTwoWorking = false;
                break;
            } else if (irrigationComplete) {
                // we just turn off the filling in watter system
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu semillero: ${setting.name} acaba de llenar la pileta con ${Number(relayOneAutomatedTimeToRun) * 2} litros agua.`);

                setting = logTimeStampWithTimeFilter(setting, reading, timeZone, false, true);

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;
                break;
            } else if (relayTwoAsocciatedActionShouldStart) {
                if (!relayTwoIdRelated) { console.log('No relayTwoIdRelated setted: ', reading); break; }

                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu semillero: ${setting.name} llego a ${reading}% de humedad, ya estamos evacuamos el agua.`);

                // we turn the exit watering relay ON
                // @ts-ignore
                plant[relayTwoIdRelated] = true;
                setting.relayTwoWorking = true;

                // we set the start time of the relay
                setting.relayTwoAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });

                setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
                break;
            } else if (relayTwoAsocciatedActionComplete) {
                const whatsappMsg = `Aviso: tu semillero: ${setting.name} mantiene ${reading}% de humedad, y ya se termino de evacuar el agua en ${firstActionTimeInMins} minutos.`;
                if (whatsappWarningsOn) await sendMessage(phoneNumber, whatsappMsg, undefined, undefined);

                // we turn the exit watering relay OFF, and reset relayOneAutomatedTimeToRun (that has the start time of the relay)
                // @ts-ignore
                plant[relayTwoIdRelated] = false;
                setting.relayTwoWorking = false;
                setting.relayOneAutomatedStartedTime = '';
                setting.relayTwoAutomatedStartedTime = '';
                
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
                break;
            }
            setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case HumiditySensorMode.MANUAL:
            if (!relayOneIdRelated) { console.log('No relayOneIdRelated in manual mode. [please set one] ', setting); break; }
            
            // @ts-ignore
            const willStartWatering = !plant[relayOneIdRelated] && relayOneWorking!;
            // @ts-ignore
            const willStopWatering = plant[relayOneIdRelated] && relayOneWorking;
            if (willStartWatering) setting = logTimeStampWithTimeFilter(setting, reading, timeZone, true, false);
            else if (willStopWatering) setting = logTimeStampWithTimeFilter(setting, reading, timeZone, false, true);
            else setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
            // @ts-ignore
            plant[relayOneIdRelated] = setting.relayOneWorking;
            break;
        case HumiditySensorMode.SCHEDULE_DOUBLE_ACTION:
        case HumiditySensorMode.SCHEDULE:
            
            setting?.scheduledOnTimes?.some((schedule: any, i: number) => {
                if (schedule.daysToRepeat.includes(today) && schedule.enabled) {
                    const currentTime = moment(new Date().toLocaleString('en-US', { timeZone }));
                    
                    let startTime = moment(new Date().toLocaleString('en-US', { timeZone }));
                    let endTime = moment(new Date().toLocaleString('en-US', { timeZone }));
                    startTime.set('hour', Number(schedule.startTime.split(':')[0])); 
                    startTime.set('minute', Number(schedule.startTime.split(':')[1])); 
                    endTime.set('hour', Number(schedule.endTime.split(':')[0])); 
                    endTime.set('minute', Number(schedule.endTime.split(':')[1])); 

                    const isInsideTimeFrame = currentTime.isBetween(startTime, endTime);
                    // const soilIsStillHumid = reading >= minReading && schedule.smartLight;
                    const smartLightOn = schedule.smartLight;

                    // @ts-ignore
                    plant[relayOneIdRelated] = isInsideTimeFrame;
                    setting.relayOneWorking = isInsideTimeFrame;
                    if (isInsideTimeFrame) return;

                    if (mode === HumiditySensorMode.SCHEDULE_DOUBLE_ACTION) {
                        // @ts-ignore
                        plant[relayTwoIdRelated] = smartLightOn ? false : isInsideTimeFrame;
                        setting.relayTwoWorking = smartLightOn ? false : isInsideTimeFrame;
                    }
                }  
            })
            setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case AirTemperatureSensorMode.MANUAL:
            if (!relayOneIdRelated) { console.log('No relayOneIdRelated in manual mode. [please set one] ', setting); break; }
            // @ts-ignore
            plant[relayOneIdRelated] = setting.relayOneWorking;

            setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case C02SensorMode.MANUAL:
            if (!relayOneIdRelated) { console.log('No relayOneIdRelated in manual mode. [please set one] ', setting); break; }
            // @ts-ignore
            plant[relayOneIdRelated] = setting.relayOneWorking;

            setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case C02SensorMode.SCHEDULE:
            setting?.scheduledOnTimes?.map((schedule: any, i: number) => {
                if (schedule.daysToRepeat.includes(today) && schedule.enabled) {
                    const currentTime = moment(new Date().toLocaleString('en-US', { timeZone }));

                    let startTime = moment(new Date().toLocaleString('en-US', { timeZone }));
                    let endTime = moment(new Date().toLocaleString('en-US', { timeZone }));
                    startTime.set('hour', Number(schedule.startTime.split(':')[0])); 
                    startTime.set('minute', Number(schedule.startTime.split(':')[1])); 
                    endTime.set('hour', Number(schedule.endTime.split(':')[0])); 
                    endTime.set('minute', Number(schedule.endTime.split(':')[1])); 

                    const isInsideTimeFrame = currentTime.isBetween(startTime, endTime);

                    // @ts-ignore
                    plant[relayOneIdRelated] = isInsideTimeFrame;
                    setting.relayOneWorking = isInsideTimeFrame;

                }
            })
            setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case C02SensorMode.WHEN_MIN_ACTION_AUTOMATED: 
            if (!minReading || !relayOneIdRelated) { console.log('No relayOneIdRelated, or no minWarning setted: [please set one] ', plant.sensors[sensorIndex]); break; }

            if (reading < minReading && !relayOneWorking) {

                plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading, timeZone);
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;

                if (whatsappWarningsOn) sendMessage(phoneNumber, `[${setting.name}] llego a ${reading} ppm de co2, ya activamos tu accion asociada!`);
                break;
            } else if (reading >= minReading && relayOneWorking) {
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone, false, true);

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `[${setting.name}] llego a ${reading} ppm de co2, ya desactivamos tu accion asociada!`);
                break;
            }

            plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case C02SensorMode.WHEN_MAX_ACTION_AUTOMATED:
            if (!maxReading || !relayOneIdRelated) { console.log('No relayOneIdRelated, or no minWarning setted: [please set one] ', plant.sensors[sensorIndex]); break; }

            if (reading < maxReading && !relayOneWorking) {

                plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading, timeZone);
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;

                if (whatsappWarningsOn) sendMessage(phoneNumber, `[${setting.name}] llego a ${reading} ppm de co2, ya activamos tu accion asociada!`);
                break;
            } else if (reading >= maxReading && relayOneWorking) {
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone, false, true);

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `[${setting.name}] llego a ${reading} ppm de co2, ya desactivamos tu accion asociada!`);
                break;
            }

            plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case AirTemperatureSensorMode.SCHEDULE:
            setting?.scheduledOnTimes?.map((schedule: any, i: number) => {
                if (schedule.daysToRepeat.includes(today) && schedule.enabled) {
                    const currentTime = moment(new Date().toLocaleString('en-US', { timeZone }));

                    let startTime = moment(new Date().toLocaleString('en-US', { timeZone }));
                    let endTime = moment(new Date().toLocaleString('en-US', { timeZone }));
                    startTime.set('hour', Number(schedule.startTime.split(':')[0])); 
                    startTime.set('minute', Number(schedule.startTime.split(':')[1])); 
                    endTime.set('hour', Number(schedule.endTime.split(':')[0])); 
                    endTime.set('minute', Number(schedule.endTime.split(':')[1])); 

                    const isInsideTimeFrame = currentTime.isBetween(startTime, endTime);
                    // if there is natural light we dont turn the lights on
                    const thereIsNaturalLight = reading > 50 && schedule.smartLight;
                    // @ts-ignore
                    plant[relayOneIdRelated] = thereIsNaturalLight ? false : isInsideTimeFrame;
                    setting.relayOneWorking = thereIsNaturalLight ? false : isInsideTimeFrame;

                }
            })
            setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case AirHumiditySensorMode.WHEN_MIN_ACTION_AUTOMATED:
            if (!minReading || !relayOneIdRelated) { console.log('No relayOneIdRelated, or no minWarning setted: [please set one] ', plant.sensors[sensorIndex]); break; }
            // @ts-ignore
            if (reading < minReading && !plant[relayOneIdRelated]) {

                plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading, timeZone);
                // @ts-ignore
                plant[relayOneIdRelated] = true;

                if (whatsappWarningsOn) sendMessage(phoneNumber, `[${plant.name}] llego a ${reading}% de temperatura, ya activamos el ${setting.name}!`);
                break;
                // @ts-ignore
            } else if (reading >= minReading && plant[relayOneIdRelated]) {
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone, false, true);

                // @ts-ignore
                plant[relayOneIdRelated] = false;

                if (whatsappWarningsOn) await sendMessage(phoneNumber, `[${setting.name}] llego a ${reading}% de temperatura, ya desactivamos el ${setting.name}!`);
                break;
            }

            plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case AirTemperatureSensorMode.WHEN_MIN_ACTION_AUTOMATED:
            if (!minReading || !relayOneIdRelated) { console.log('No relayOneIdRelated, or no minWarning setted: [please set one] ', plant.sensors[sensorIndex]); break; }

            if (reading < minReading && !relayOneWorking) {

                plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading, timeZone);
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;

                if (whatsappWarningsOn) sendMessage(phoneNumber, `[${setting.name}] llego a ${reading}% de temperatura, ya activamos tu accion asociada!`);
                break;
            } else if (reading >= minReading && relayOneWorking) {
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone, false, true);

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `[${setting.name}] llego a ${reading}% de temperatura, ya desactivamos tu accion asociada!`);
                break;
            }

            plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case AirTemperatureSensorMode.WHEN_MAX_ACTION_AUTOMATED:
            if (!maxReading || !relayOneIdRelated) { console.log('No relayOneIdRelated, or no minWarning setted: [please set one] ', plant.sensors[sensorIndex]); break; }

            if (reading > maxReading && !relayOneWorking) {

                plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading, timeZone);
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;

                if (whatsappWarningsOn) sendMessage(phoneNumber, `[${setting.name}] llego a ${reading}% de temperatura, ya activamos tu accion asociada!`);
                break;
            } else if (reading <= maxReading && relayOneWorking) {
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone, false, true);

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `[${setting.name}] llego a ${reading}% de temperatura, ya desactivamos tu accion asociada!`);
                break;
            }

            plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case AirHumiditySensorMode.MANUAL:
            if (!relayOneIdRelated) { console.log('No relayOneIdRelated in manual mode. [please set one] ', setting); break; }
            // @ts-ignore
            plant[relayOneIdRelated] = setting.relayOneWorking;

            setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case AirHumiditySensorMode.SCHEDULE:
            if (!relayOneIdRelated) { console.log('No relayOneIdRelated in manual mode. [please set one] ', setting); break; }
            setting?.scheduledOnTimes?.map((schedule: any, i: number) => {
                if (schedule.daysToRepeat.includes(today) && schedule.enabled) {
                    const currentTime = moment(new Date().toLocaleString('en-US', { timeZone }));

                    let startTime = moment(new Date().toLocaleString('en-US', { timeZone }));
                    let endTime = moment(new Date().toLocaleString('en-US', { timeZone }));
                    startTime.set('hour', Number(schedule.startTime.split(':')[0])); 
                    startTime.set('minute', Number(schedule.startTime.split(':')[1])); 
                    endTime.set('hour', Number(schedule.endTime.split(':')[0])); 
                    endTime.set('minute', Number(schedule.endTime.split(':')[1])); 

                    const isInsideTimeFrame = currentTime.isBetween(startTime, endTime);

                    // @ts-ignore
                    plant[relayOneIdRelated] = isInsideTimeFrame;
                    setting.relayOneWorking = isInsideTimeFrame;

                }
            })
            setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case AirTemperatureSensorMode.SCHEDULE:
            if (!relayOneIdRelated) { console.log('No relayOneIdRelated in manual mode. [please set one] ', setting); break; }
            setting?.scheduledOnTimes?.map((schedule: any, i: number) => {
                if (schedule.daysToRepeat.includes(today) && schedule.enabled) {
                    const currentTime = moment(new Date().toLocaleString('en-US', { timeZone }));

                    let startTime = moment(new Date().toLocaleString('en-US', { timeZone }));
                    let endTime = moment(new Date().toLocaleString('en-US', { timeZone }));
                    startTime.set('hour', Number(schedule.startTime.split(':')[0])); 
                    startTime.set('minute', Number(schedule.startTime.split(':')[1])); 
                    endTime.set('hour', Number(schedule.endTime.split(':')[0])); 
                    endTime.set('minute', Number(schedule.endTime.split(':')[1])); 

                    const isInsideTimeFrame = currentTime.isBetween(startTime, endTime);

                    // @ts-ignore
                    plant[relayOneIdRelated] = isInsideTimeFrame;
                    setting.relayOneWorking = isInsideTimeFrame;

                }
            })
            setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case AirHumiditySensorMode.WHEN_MAX_ACTION_AUTOMATED:
            if (!maxReading || !relayOneIdRelated) { console.log('No relayOneIdRelated, or no minWarning setted: [please set one] ', plant.sensors[sensorIndex]); break; }

            if (reading > maxReading && !relayOneWorking) {

                plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading, timeZone);
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;

                if (whatsappWarningsOn) sendMessage(phoneNumber, `[${setting.name}] llego a ${reading}% de temperatura, ya activamos tu accion asociada!`);
                break;
            } else if (reading <= maxReading && relayOneWorking) {
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone, false, true);

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `[${setting.name}] llego a ${reading}% de temperatura, ya desactivamos tu accion asociada!`);
                break;
            }

            plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case LightSensorMode.MANUAL:
            if (!relayOneIdRelated) { console.log('No relayOneIdRelated in manual mode. [please set one] ', setting); break; }
            // @ts-ignore
            plant[relayOneIdRelated] = setting.relayOneWorking;

            setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case LightSensorMode.SCHEDULE:
            setting?.scheduledOnTimes?.map((schedule: any, i: number) => {
                
                if (schedule.daysToRepeat.includes(today) && schedule.enabled) {
                    const currentTime = moment(new Date().toLocaleString('en-US', { timeZone }));

                    let startTime = moment(new Date().toLocaleString('en-US', { timeZone }));
                    let endTime = moment(new Date().toLocaleString('en-US', { timeZone }));
                    startTime.set('hour', Number(schedule.startTime.split(':')[0])); 
                    startTime.set('minute', Number(schedule.startTime.split(':')[1])); 
                    endTime.set('hour', Number(schedule.endTime.split(':')[0])); 
                    endTime.set('minute', Number(schedule.endTime.split(':')[1])); 

                    const isInsideTimeFrame = currentTime.isBetween(startTime, endTime);
                    // if there is natural light we dont turn the lights on
                    // const thereIsNaturalLight = reading > 50 && schedule.smartLight;
                    // @ts-ignore
                    // plant[relayOneIdRelated] = thereIsNaturalLight ? false : isInsideTimeFrame;
                    // setting.relayOneWorking = thereIsNaturalLight ? false : isInsideTimeFrame;
                    plant[relayOneIdRelated] = isInsideTimeFrame;
                    setting.relayOneWorking = isInsideTimeFrame;

                }
            })
            setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case DistanceSensorMode.WHEN_EMPTY_ACTION_CUSTOM:
            if (!minReading || !relayOneIdRelated )  { console.log('No relayOneIdRelated, relayOneAutomatedStartedTime or no minWarning setted: ', plant.sensors[sensorIndex]); break; }

            if (irrigationInProgress) {
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
                return plant;
            }

            if (actionShouldStart) {
                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;

                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone, true, false);

                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} llego a ${reading}% de capacidad, ya estamos activando la acción asociada.`);
                break;
            } else if (irrigationComplete) {
                // we just turn off the filling in watter system
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone, false, true);

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;

                setting.relayOneAutomatedStartedTime = '';
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} acaba de llegar a la capacidad máxima con ${Number(relayOneAutomatedTimeToRun) * 2} litros agua.`);
                break;
            }

            setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case DistanceSensorMode.WHEN_EMPTY_ACTION_AUTOMATED:                
            if (!minReading || !relayOneIdRelated)  { console.log('No relayOneIdRelated, or no minWarning setted: ', plant.sensors[sensorIndex]); break; }
            
            const maxCapacityReached = reading <= maxReading && relayOneAutomatedStartedTime.length > 0;

            if (irrigationInProgress) {
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
                return plant;
            }

            if (actionShouldStart) {
                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;

                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone, true, false);

                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} llego a ${reading}% de capacidad, ya estamos activando la acción asociada.`);
                break;
            } else if (maxCapacityReached) {
                // we just turn off the filling in watter system
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone, false, true);

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} acaba de llegar a la capacidad máxima con ${Number(relayOneAutomatedTimeToRun) * 2} litros agua.`);
                break;
            }

            setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case DistanceSensorMode.WHEN_FULL_ACTION_CUSTOM:
            if (!minReading || !relayOneIdRelated || !relayOneAutomatedStartedTime)  { console.log('No relayOneIdRelated, relayOneAutomatedStartedTime or no minWarning setted: ', plant.sensors[sensorIndex]); break; }
            
            if (irrigationInProgress) {
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
                return plant;
            }

            if (maxLevelReached) {
                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;

                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone, true);

                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} acaba de llegar a la capacidad máxima con ${Number(relayOneAutomatedTimeToRun) * 2} litros agua.`);
                break;
            } else if (relayTwoAsocciatedActionShouldStart) {
                if (!relayTwoIdRelated) { console.log('No relayTwoIdRelated setted: ', reading); break; }

                // @ts-ignore
                plant[relayTwoIdRelated] = true;
                setting.relayTwoWorking = true;

                // we set the start time of the relay
                setting.relayTwoAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });

                setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} llego a ${reading}% de capacidad, ya estamos activando la acción asociada.`);
                break;
            } else if (relayTwoAsocciatedActionComplete) {
                const whatsappMsg = `Aviso: la acción asociada a tu ${setting.name} a sido completada.`;

                // we turn the exit watering relay OFF, and reset relayOneAutomatedTimeToRun (that has the start time of the relay)
                // @ts-ignore
                plant[relayTwoIdRelated] = false;
                setting.relayTwoWorking = false;
                setting.relayOneAutomatedStartedTime = '';
                setting.relayTwoAutomatedStartedTime = '';
                
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
                if (whatsappWarningsOn) await sendMessage(phoneNumber, whatsappMsg, undefined, undefined);
                break;
            }
            setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case DistanceSensorMode.WHEN_FULL_ACTION_AUTOMATED:
            if (!minReading || !relayOneIdRelated || !relayOneAutomatedStartedTime)  { console.log('No relayOneIdRelated, relayOneAutomatedStartedTime or no minWarning setted: ', plant.sensors[sensorIndex]); break; }
            
            if (irrigationInProgress) {
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
                return plant;
            }

            if (maxLevelReached) {
                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;

                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone, true);

                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} llego a ${reading}% de capacidad. Activamos el dispositivo asociado`);
                break;
            }  else if (minLevelReached) {
                // we just turn off the filling in watter system
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone, false, true);

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} acaba de llegar a la capacidad minima.`);
                break;
            }

            setting = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
        case DistanceSensorMode.MAX_WARNING:                   
            setting = logTimeStampWithTimeFilter(setting, reading, timeZone);

            if (maxLevelReached && !setting.relayOneAutomatedStartedTime.length) {
                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });

                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} llego a ${reading}% de capacidad.`);
                break;
            } 
            
            if (timeInMinutesThatShouldntNotify > currentTimeWithoutNotifing) {
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} llego a ${reading}% de capacidad.`);
                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                break;
            }
        case DistanceSensorMode.MIN_WARNING:            
            setting = logTimeStampWithTimeFilter(setting, reading, timeZone);

            if (minLevelReached && !setting.relayOneAutomatedStartedTime.length) {
                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });

                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} llego a ${reading}% de capacidad.`);
                break;
            } 
            
            if (timeInMinutesThatShouldntNotify > currentTimeWithoutNotifing) {
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} llego a ${reading}% de capacidad.`);
                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                break;
            }
            
        default:
            break;
    }
    return plant;
};

                