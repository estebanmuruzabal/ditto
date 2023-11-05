// import { playintegrity } from "googleapis/build/src/apis/playintegrity";
import moment from "moment";

import { DistanceSensorMode, HumiditySensorMode, ISensorSetting, ISetting, LightSensorMode, Plant } from "../lib/types";
import { sendMessage } from "./send";
import { WeekDays } from "../utils/constants";
import { logTimeStampWithTimeFilter } from "../utils/logsUtils";
import 'moment-timezone';

export const checkSensor = async (plant: Plant, sensorIndex: number, phoneNumber: string) => {
    if (!plant?.sensors[sensorIndex]) { console.log('NO MODULE FOUND', plant?.sensors[sensorIndex]); return plant; }
    let setting = plant.sensors[sensorIndex];
    let { minWarning, maxWarning, relayOneIdRelated, relayTwoIdRelated, whatsappWarningsOn, mode, reading, logs, relayOneWorking, relayOneAutomatedTimeToRun, relayTwoAutomatedTimeToRun, relayOneAutomatedStartedTime, relayTwoAutomatedStartedTime, relayTwoWorking, scheduledOnTimes } = setting;
    const currentTimeZone = 'America/Denver';
    const sensorReadingName = plant.sensors[sensorIndex].settingType?.toLocaleLowerCase();

    // console.log('sensorReadingName::', sensorReadingName)
    // @ts-ignore
    setting.reading = plant[sensorReadingName];

    // // @ts-ignore
    // console.log('plant[sensorReadingName]::', plant[sensorReadingName])

    const minReading = Number(minWarning);
    const maxReading = Number(maxWarning);
    const timeToEvacuateInMins = Number(relayTwoAutomatedTimeToRun);
    const timeToIrrigateInMins = Number(relayOneAutomatedTimeToRun);

    const currentTime = moment(new Date().toLocaleString('en-US', { timeZone: currentTimeZone }));

    const startedIrrigationTime = moment(relayOneAutomatedStartedTime);
    const startedEvacuationTime = moment(relayTwoAutomatedStartedTime);
    const currentIrrigationSeconds = currentTime?.diff(startedIrrigationTime, 'minutes');
    const currentEvacuationSeconds = currentTime?.diff(startedEvacuationTime, 'minutes');

    const irrigationShouldStart = reading < minReading && !relayOneWorking && !!!relayOneAutomatedStartedTime.length;
    const irrigationInProgress = currentIrrigationSeconds >= 0 && currentIrrigationSeconds < timeToIrrigateInMins;
    const irrigationComplete = currentIrrigationSeconds >= timeToIrrigateInMins && relayOneWorking;
    const relayTwoAsocciatedActionShouldStart = reading >= maxReading && !relayTwoWorking && relayOneAutomatedStartedTime.length > 0;
    const relayTwoAsocciatedActionComplete = currentEvacuationSeconds >= timeToEvacuateInMins && !!relayTwoAutomatedStartedTime.length;
    
    moment.locale('es');
    const today = moment(new Date().toLocaleString('en-US', { timeZone: currentTimeZone }), 'MM/D/YYYY').day();
    
    const maxLevelReached = reading >= maxReading && !relayOneWorking && !!!relayOneAutomatedStartedTime.length;
    const minLevelReached = reading <= minReading && relayOneAutomatedStartedTime.length > 0;
    const currentTimeWithoutNotifing = currentTime?.diff(startedIrrigationTime, 'minutes');
    const timeInMinutesThatShouldntNotify = Number(relayTwoAutomatedStartedTime);

    // WE SHOULD ADD A SWITH FOR MODULE TYPE, AND FROM THERE A SWITCH FOR MODE

    switch (mode) {
        case HumiditySensorMode.IRRIGATE_ON_DEMAND:
            // modo riego solo cuando falta agua con 1 solo reley y cierra cuando detecta humedad,
            // must have maxReading, minWarning and relayIdRelated variables setted!!!

            if (!minReading || !relayOneIdRelated) { console.log('No relayOneIdRelated, or no minWarning setted: [please set one] ', plant.sensors[sensorIndex]); break; }

            if (reading < minReading && !relayOneWorking) {

                plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading);
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;

                if (whatsappWarningsOn) sendMessage(phoneNumber, `Aviso: tu planta: ${setting.name} llego a ${reading}% de humedad, ya estamos regando!`);
                break;
            } else if (reading >= minReading && relayOneWorking) {
                setting = logTimeStampWithTimeFilter(setting, reading, false, true);

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu planta: ${setting.name} llego a ${reading}% de humedad, ya terminamos de regar!`);
                break;
            }

            plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading);
            break;
        // @todo 
        case HumiditySensorMode.IRRIGATE_SPECIFICT_AMOUNT_WITH_DOUBLE_ACTION:
        case HumiditySensorMode.IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND:
            // modo semillero: detecta seco, abre reley 1 y cierra el reley 2, detecta humedad y cierra reley 1 y abre reley 2. // detecta seco, abre 1 y cierra 2  
            // must have minWarning and relayIdRelated variables setted!!!

            // relayTwoAutomatedTimeToRun SHOULD CONTAIN THE MINUTES TIME

            if (!minReading || !relayOneIdRelated || !relayOneAutomatedStartedTime)  { console.log('No relayOneIdRelated, relayOneAutomatedStartedTime or no minWarning setted: ', plant.sensors[sensorIndex]); break; }

            if (irrigationInProgress) {
                plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading);
                return plant;
            }

            if (irrigationShouldStart) {
                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;

                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone: currentTimeZone });
                plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading);

                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting?.name} llego a ${reading}% de humedad, ya estamos llenando la pileta con agua.`);
                break;
            } else if (irrigationComplete) {
                // we just turn off the filling in watter system
                setting = logTimeStampWithTimeFilter(setting, reading, false, true);

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu semillero: ${setting.name} acaba de llenar la pileta con ${Number(relayOneAutomatedTimeToRun) * 2} litros agua.`);
                break;
            }

            setting = logTimeStampWithTimeFilter(setting, reading);
            break;
        case HumiditySensorMode.SEEDS_POOL_IRRIGATION:
            // modo semillero: detecta seco, abre reley 1 y cierra el reley 2, detecta humedad y cierra reley 1 y abre reley 2. // detecta seco, abre 1 y cierra 2  
            // must have minWarning and relayIdRelated variables setted!!!

            // relayTwoAutomatedTimeToRun SHOULD CONTAIN THE MINUTES TIME

            if (!minReading || !relayOneIdRelated || !maxReading || !relayTwoIdRelated || !relayOneAutomatedTimeToRun || !relayTwoAutomatedTimeToRun)  { console.log('No relayOneIdRelated, or no minWarning setted: ', setting); break; }
            if (timeToEvacuateInMins <=0) { console.log('relayTwoAutomatedTimeToRun SHOULD CONTAIN THE NUMBER OF MINUTES TO BE THE RELAY ON ', setting); break; }

            if (irrigationInProgress) {
                setting = logTimeStampWithTimeFilter(setting, reading);
                return plant;
            }

            if (irrigationShouldStart) {
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu semillero: ${setting.name} llego a ${reading}% de humedad, ya estamos llenando la pileta con agua.`);

                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;

                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone: currentTimeZone });
                setting = logTimeStampWithTimeFilter(setting, reading, true, false);
                // we turn evacuation watering relay OFF just in case
                // @ts-ignore
                plant[relayTwoIdRelated] = false;
                setting.relayTwoWorking = false;
                break;
            } else if (irrigationComplete) {
                // we just turn off the filling in watter system
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu semillero: ${setting.name} acaba de llenar la pileta con ${Number(relayOneAutomatedTimeToRun) * 2} litros agua.`);

                setting = logTimeStampWithTimeFilter(setting, reading, false, true);

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
                setting.relayTwoAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone: currentTimeZone });

                setting = logTimeStampWithTimeFilter(setting, reading);
                break;
            } else if (relayTwoAsocciatedActionComplete) {
                const whatsappMsg = `Aviso: tu semillero: ${setting.name} mantiene ${reading}% de humedad, y ya se termino de evacuar el agua en ${timeToIrrigateInMins} minutos.`;
                if (whatsappWarningsOn) await sendMessage(phoneNumber, whatsappMsg, undefined, undefined);

                // we turn the exit watering relay OFF, and reset relayOneAutomatedTimeToRun (that has the start time of the relay)
                // @ts-ignore
                plant[relayTwoIdRelated] = false;
                setting.relayTwoWorking = false;
                setting.relayOneAutomatedStartedTime = '';
                setting.relayTwoAutomatedStartedTime = '';
                
                setting = logTimeStampWithTimeFilter(setting, reading);
                break;
            }
            setting = logTimeStampWithTimeFilter(setting, reading);
            break;
        case HumiditySensorMode.MANUAL:
            if (!relayOneIdRelated) { console.log('No relayOneIdRelated in manual mode. [please set one] ', setting); break; }
            
            // @ts-ignore
            const willStartWatering = !plant[relayOneIdRelated] && relayOneWorking!;
            // @ts-ignore
            const willStopWatering = plant[relayOneIdRelated] && relayOneWorking;
            if (willStartWatering) setting = logTimeStampWithTimeFilter(setting, reading, true, false);
            else if (willStopWatering) setting = logTimeStampWithTimeFilter(setting, reading, false, true);
            else setting = logTimeStampWithTimeFilter(setting, reading);
            // @ts-ignore
            plant[relayOneIdRelated] = setting.relayOneWorking;
            break;
        // @todo 
        case HumiditySensorMode.SCHEDULE_DOUBLE_ACTION:
        case HumiditySensorMode.SCHEDULE:
            scheduledOnTimes?.map((schedule: any, i: number) => {
                if (schedule.daysToRepeat.includes(today)) {
                    const startTime = moment(new Date(schedule.startTime).toLocaleString('en-US', { timeZone: currentTimeZone })).format('hh:mm:ss');
                    const endTime = moment(new Date(schedule.endTime).toLocaleString('en-US', { timeZone: currentTimeZone })).format('hh:mm:ss');
                    // const currentTime = moment(new Date().toLocaleString('en-US', { timeZone: currentTimeZone })).format('hh:mm:ss');
                    console.log(startTime, endTime)
                    // @ts-ignore
                    plant[relayOneIdRelated] = currentTime.isBetween(startTime, endTime);
                    setting.relayOneWorking = true;
                }
            })
            break;

        case LightSensorMode.MANUAL:
            if (!relayOneIdRelated) { console.log('No relayOneIdRelated in manual mode. [please set one] ', setting); break; }
            // @ts-ignore
            plant[relayOneIdRelated] = setting.relayOneWorking;
            console.log('relayOneIdRelated', relayOneIdRelated)
            // @ts-ignore
            console.log('plant[relayOneIdRelated]', plant[relayOneIdRelated])


            setting = logTimeStampWithTimeFilter(setting, reading);
            break;
        case LightSensorMode.SCHEDULE:
        case LightSensorMode.SMART_SCHEDULE:
            console.log('currentTime:', currentTime)
            setting?.scheduledOnTimes?.map((schedule: any, i: number) => {
                if (schedule.daysToRepeat.includes(today)) {
                    const format = 'hh:mm:ss';
                    const startTime = moment.tz(schedule.startTime, format, currentTimeZone);
                    const endTime = moment.tz(schedule.endTime, format, currentTimeZone);
                    // @ts-ignore
                    console.log('currentTime.isBetween(startTime, endTime):', currentTime.isBetween(startTime, endTime))
                    console.log('startTime', startTime)
                    console.log('endTime', endTime)
                    // @ts-ignore
                    if (currentTime.isBetween(startTime, endTime)) {
                        // @ts-ignore
                        plant[relayOneIdRelated] = schedule.smartLight ? false : true;
                        setting.relayOneWorking = schedule.smartLight ? false : true;
                    } else {
                        // @ts-ignore
                        plant[relayOneIdRelated] = false;
                        setting.relayOneWorking = false;
                    }
                }
            })
            setting = logTimeStampWithTimeFilter(setting, reading);
            break;
        case DistanceSensorMode.WHEN_EMPTY_ACTION_CUSTOM:
            if (!minReading || !relayOneIdRelated || !relayOneAutomatedStartedTime)  { console.log('No relayOneIdRelated, relayOneAutomatedStartedTime or no minWarning setted: ', plant.sensors[sensorIndex]); break; }

            if (irrigationInProgress) {
                setting = logTimeStampWithTimeFilter(setting, reading);
                return plant;
            }

            if (irrigationShouldStart) {
                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;

                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone: currentTimeZone });
                setting = logTimeStampWithTimeFilter(setting, reading, true, false);

                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} llego a ${reading}% de capacidad, ya estamos activando la acción asociada.`);
                break;
            } else if (irrigationComplete) {
                // we just turn off the filling in watter system
                setting = logTimeStampWithTimeFilter(setting, reading, false, true);

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} acaba de llegar a la capacidad máxima con ${Number(relayOneAutomatedTimeToRun) * 2} litros agua.`);
                break;
            }

            setting = logTimeStampWithTimeFilter(setting, reading);
            break;
        case DistanceSensorMode.WHEN_EMPTY_ACTION_AUTOMATED:                
            if (!minReading || !relayOneIdRelated || !relayOneAutomatedStartedTime)  { console.log('No relayOneIdRelated, relayOneAutomatedStartedTime or no minWarning setted: ', plant.sensors[sensorIndex]); break; }
            const maxCapacityReached = reading >= maxReading && relayOneAutomatedStartedTime.length > 0;

            if (irrigationInProgress) {
                setting = logTimeStampWithTimeFilter(setting, reading);
                return plant;
            }

            if (irrigationShouldStart) {
                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;

                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone: currentTimeZone });
                setting = logTimeStampWithTimeFilter(setting, reading, true, false);

                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} llego a ${reading}% de capacidad, ya estamos activando la acción asociada.`);
                break;
            } else if (maxCapacityReached) {
                // we just turn off the filling in watter system
                setting = logTimeStampWithTimeFilter(setting, reading, false, true);

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} acaba de llegar a la capacidad máxima con ${Number(relayOneAutomatedTimeToRun) * 2} litros agua.`);
                break;
            }

            setting = logTimeStampWithTimeFilter(setting, reading);
            break;
        case DistanceSensorMode.WHEN_FULL_ACTION_CUSTOM:
            if (!minReading || !relayOneIdRelated || !relayOneAutomatedStartedTime)  { console.log('No relayOneIdRelated, relayOneAutomatedStartedTime or no minWarning setted: ', plant.sensors[sensorIndex]); break; }
            
            if (irrigationInProgress) {
                setting = logTimeStampWithTimeFilter(setting, reading);
                return plant;
            }

            if (maxLevelReached) {
                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;

                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone: currentTimeZone });
                setting = logTimeStampWithTimeFilter(setting, reading, true);

                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} acaba de llegar a la capacidad máxima con ${Number(relayOneAutomatedTimeToRun) * 2} litros agua.`);
                break;
            } else if (relayTwoAsocciatedActionShouldStart) {
                if (!relayTwoIdRelated) { console.log('No relayTwoIdRelated setted: ', reading); break; }

                // @ts-ignore
                plant[relayTwoIdRelated] = true;
                setting.relayTwoWorking = true;

                // we set the start time of the relay
                setting.relayTwoAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone: currentTimeZone });

                setting = logTimeStampWithTimeFilter(setting, reading);
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
                
                setting = logTimeStampWithTimeFilter(setting, reading);
                if (whatsappWarningsOn) await sendMessage(phoneNumber, whatsappMsg, undefined, undefined);
                break;
            }
            setting = logTimeStampWithTimeFilter(setting, reading);
            break;
        case DistanceSensorMode.WHEN_FULL_ACTION_AUTOMATED:
            if (!minReading || !relayOneIdRelated || !relayOneAutomatedStartedTime)  { console.log('No relayOneIdRelated, relayOneAutomatedStartedTime or no minWarning setted: ', plant.sensors[sensorIndex]); break; }
            
            if (irrigationInProgress) {
                setting = logTimeStampWithTimeFilter(setting, reading);
                return plant;
            }

            if (maxLevelReached) {
                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;

                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone: currentTimeZone });
                setting = logTimeStampWithTimeFilter(setting, reading, true);

                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} llego a ${reading}% de capacidad. Activamos el dispositivo asociado`);
                break;
            }  else if (minLevelReached) {
                // we just turn off the filling in watter system
                setting = logTimeStampWithTimeFilter(setting, reading, false, true);

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} acaba de llegar a la capacidad minima.`);
                break;
            }

            setting = logTimeStampWithTimeFilter(setting, reading);
            break;
        case DistanceSensorMode.MAX_WARNING:                   
            setting = logTimeStampWithTimeFilter(setting, reading);

            if (maxLevelReached && !setting.relayOneAutomatedStartedTime.length) {
                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone: currentTimeZone });

                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} llego a ${reading}% de capacidad.`);
                break;
            } 
            
            if (timeInMinutesThatShouldntNotify > currentTimeWithoutNotifing) {
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} llego a ${reading}% de capacidad.`);
                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone: currentTimeZone });
                break;
            }
        case DistanceSensorMode.MIN_WARNING:            
            setting = logTimeStampWithTimeFilter(setting, reading);

            if (minLevelReached && !setting.relayOneAutomatedStartedTime.length) {
                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone: currentTimeZone });

                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} llego a ${reading}% de capacidad.`);
                break;
            } 
            
            if (timeInMinutesThatShouldntNotify > currentTimeWithoutNotifing) {
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu ${setting.name} llego a ${reading}% de capacidad.`);
                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone: currentTimeZone });
                break;
            }
        default:
            console.log('defaulted!!! papa')
            break;
    }
    console.log('setting AF process:', plant);
    return plant;
};

                