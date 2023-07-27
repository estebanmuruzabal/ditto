import { playintegrity } from "googleapis/build/src/apis/playintegrity";
import moment from "moment";

import { HumiditySensorMode, ISensorSetting, ISetting, LightSensorMode, Plant } from "../lib/types";
import { sendMessage } from "./send";
import { WeekDays } from "../utils/constants";
import { logTimeStampWithTimeFilter } from "../utils/logsUtils";

export const checkSensor = async (plant: Plant, sensorIndex: number, phoneNumber: string) => {
    if (!plant.sensors[sensorIndex]) { console.log('NO SENSOR FOUND', plant.sensors[sensorIndex]); return plant; }

    let { minWarning, maxWarning, relayOneIdRelated, relayTwoIdRelated, whatsappWarningsOn, mode, reading, logs, relayOneWorking, relayOneAutomatedTimeToRun, relayTwoAutomatedTimeToRun, relayOneAutomatedStartedTime, relayTwoAutomatedStartedTime, relayTwoWorking, scheduledOnTimes } = plant.sensors[sensorIndex];
    const sensorReadingName = plant.sensors[sensorIndex].settingType?.toLocaleLowerCase();
    // @ts-ignore
    reading = plant[sensorReadingName];
    plant.sensors[sensorIndex].reading = reading;

    const minReading = !isNaN(Number(minWarning)) ? Number(minWarning) : null;
    const maxReading = !isNaN(Number(maxWarning)) ? Number(maxWarning) : null;
    moment.locale('es');
    const today = moment(new Date(), 'MM/D/YYYY').day();
    const currentTime = moment(new Date()).format('hh:mm:ss');
    console.log('setting BF process:', plant);

    switch (mode) {
        case HumiditySensorMode.IRRIGATE_ON_DEMAND:
            // modo riego solo cuando falta agua con 1 solo reley y cierra cuando detecta humedad,
            // must have maxReading, minWarning and relayIdRelated variables setted!!!

            if (!minReading || !relayOneIdRelated) { console.log('No relayOneIdRelated, or no minWarning setted: [please set one] ', plant.sensors[sensorIndex]); break; }

            if (reading < minReading && !relayOneWorking) {
                console.log(1)

                logs.push({ reading, timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }), started: true });
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                plant.sensors[sensorIndex].relayOneWorking = true;

                if (whatsappWarningsOn) sendMessage(phoneNumber, `Aviso: tu planta: ${plant.name} llego a ${reading}% de humedad, ya estamos regando!`);
                break;
            } else if (reading >= minReading && relayOneWorking) {
                console.log(2)
                logs.push({ reading, timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }), finished: true });

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                plant.sensors[sensorIndex].relayOneWorking = false;
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu planta: ${plant.name} llego a ${reading}% de humedad, ya terminamos de regar!`);
                break;
            }
            console.log(3)
            plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(plant.sensors[sensorIndex], reading);
            break;
        case HumiditySensorMode.SEEDS_POOL_IRRIGATION:
            // modo semillero: detecta seco, abre reley 1 y cierra el reley 2, detecta humedad y cierra reley 1 y abre reley 2. // detecta seco, abre 1 y cierra 2  
            // must have minWarning and relayIdRelated variables setted!!!

            // relayTwoAutomatedTimeToRun SHOULD CONTAIN THE MINUTES TIME
            const timeToEvacuateInMins = Number(relayTwoAutomatedTimeToRun);
            const timeToIrrigateInMins = Number(relayOneAutomatedTimeToRun);

            if (!minReading || !relayOneIdRelated || !maxReading)  { console.log('No relayOneIdRelated, or no minWarning setted: ', plant.sensors[sensorIndex]); break; }
            if (timeToEvacuateInMins <=0) { console.log('relayTwoAutomatedTimeToRun SHOULD CONTAIN THE NUMBER OF MINUTES TO BE THE RELAY ON ', plant.sensors[sensorIndex]); break; }

            const currentTime = moment(new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }));

            
            const startedIrrigationTime = moment(relayOneAutomatedStartedTime);
            const startedEvacuationTime = moment(relayTwoAutomatedStartedTime);
            const currentIrrigationMins = currentTime?.diff(startedIrrigationTime, 'minutes');
            const currentEvacuationMins = currentTime?.diff(startedEvacuationTime, 'minutes');

            const irrigationShouldStart = reading < minReading && !relayOneWorking && !!!relayOneAutomatedStartedTime.length;
            const irrigationInProgress = currentIrrigationMins >= 0 && currentIrrigationMins < timeToIrrigateInMins;
            const irrigationComplete = currentIrrigationMins >= timeToIrrigateInMins && relayOneWorking;
            const evacuationShouldStart = reading >= maxReading && !relayTwoWorking && relayOneAutomatedStartedTime.length > 0;
            const evacuationComplete = currentEvacuationMins >= timeToEvacuateInMins && !!relayTwoAutomatedStartedTime.length;

            console.log('irrigationComplete', irrigationComplete)
            console.log('currentEvacuationMins', currentEvacuationMins)
            if (irrigationInProgress) {
                plant.sensors[sensorIndex].logs.push({ reading, timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }) });
                return plant;
            }

            if (irrigationShouldStart) {
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu semillero: ${plant.name} llego a ${reading}% de humedad, ya estamos llenando la pileta con agua.`);

                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                plant.sensors[sensorIndex].relayOneWorking = true;

                plant.sensors[sensorIndex].relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });
                plant.sensors[sensorIndex].logs.push({ reading, timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }), started: true });
                // we turn evacuation watering relay OFF just in case
                // @ts-ignore
                plant[relayTwoIdRelated] = false;
                plant.sensors[sensorIndex].relayTwoWorking = false;
                break;
            } else if (irrigationComplete) {
                // we just turn off the filling in watter system
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu semillero: ${plant.name} acaba de llenar la pileta con ${Number(relayOneAutomatedTimeToRun) * 2} litros agua.`);

                plant.sensors[sensorIndex].logs.push({ reading, timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }), finished: true });

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                plant.sensors[sensorIndex].relayOneWorking = false;
                break;
            } else if (evacuationShouldStart) {
                if (!relayTwoIdRelated) { console.log('No relayTwoIdRelated setted: ', reading); break; }

                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu semillero: ${plant.name} llego a ${reading}% de humedad, ya estamos evacuamos el agua.`);

                // we turn the exit watering relay ON
                // @ts-ignore
                plant[relayTwoIdRelated] = true;
                plant.sensors[sensorIndex].relayTwoWorking = true;

                // we set the start time of the relay
                plant.sensors[sensorIndex].relayTwoAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });

                plant.sensors[sensorIndex].logs.push({ reading, timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }) });
                break;
            } else if (evacuationComplete) {
                const whatsappMsg = `Aviso: tu semillero: ${plant.name} mantiene ${reading}% de humedad, y ya se termino de evacuar el agua en ${timeToIrrigateInMins} minutos.`;
                if (phoneNumber) await sendMessage(phoneNumber, whatsappMsg, undefined, undefined);

                // we turn the exit watering relay OFF, and reset relayOneAutomatedTimeToRun (that has the start time of the relay)
                // @ts-ignore
                plant[relayTwoIdRelated] = false;
                relayTwoWorking = false;
                relayOneAutomatedStartedTime = '';
                relayTwoAutomatedStartedTime = '';
                
                plant.sensors[sensorIndex].logs.push({
                    reading,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }) });
                break;
            }
            plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(plant.sensors[sensorIndex], reading);
            break;
        case HumiditySensorMode.MANUAL:
            if (!relayOneIdRelated) { console.log('No relayOneIdRelated in manual mode. [please set one] ', plant.sensors[sensorIndex]); break; }
            
            // @ts-ignore
            const willStartWatering = !plant[relayOneIdRelated] && relayOneWorking!;
            // @ts-ignore
            const willStopWatering = plant[relayOneIdRelated] && relayOneWorking;
            if (willStartWatering) {
                plant.sensors[sensorIndex].logs.push({
                    reading,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }),
                    started: true
                });
            } else if (willStopWatering) {
                plant.sensors[sensorIndex].logs.push({
                    reading,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }),
                    finished: true
                });
            }
            plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(plant.sensors[sensorIndex], reading);
            // @ts-ignore
            plant[relayOneIdRelated] = setting.relayOneWorking;
            break;
        case HumiditySensorMode.SCHEDULE:

            scheduledOnTimes?.map((schedule: any, i: number) => {
                if (schedule.daysToRepeat.includes(today.toString().toUpperCase())) {
                    const startTime = moment(new Date(schedule.startTime).toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })).format('hh:mm:ss');
                    const endTime = moment(new Date(schedule.endTime).toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })).format('hh:mm:ss');
                    // const currentTime = moment(new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })).format('hh:mm:ss');
                    
                    // @ts-ignore
                    plant[relayOneIdRelated] = currentTime1.isBetween(startTime, endTime);
                }
            })
            break;
        case HumiditySensorMode.MANUAL:
            if (!relayOneIdRelated) { console.log('No relayOneIdRelated in manual mode. [please set one] ', plant.sensors[sensorIndex]); break; }
            // @ts-ignore
            plant[relayOneIdRelated] = setting.relayOneWorking;
            plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(plant.sensors[sensorIndex], reading);
            break;
        case LightSensorMode.SCHEDULE:
        case LightSensorMode.SMART_SCHEDULE:

            plant.sensors[sensorIndex]?.scheduledOnTimes?.map((schedule: any, i: number) => {
                if (schedule.daysToRepeat.includes(today.toString().toUpperCase())) {
                    const startTime = moment(new Date(schedule.startTime).toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })).format('hh:mm:ss');
                    const endTime = moment(new Date(schedule.endTime).toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })).format('hh:mm:ss');
                    
                    // @ts-ignore
                    if (currentTime.isBetween(startTime, endTime)) {
                        // @ts-ignore
                        plant[relayOneIdRelated] = schedule.smartLight ? false : true;
                    }
                }
            })
            plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(plant.sensors[sensorIndex], reading);
            break;
            // case checkSensors.distance:
            //     const amountOfWater = plant.distanceSensorSettings?.relayOneAutomatedTimeToRun;
            //     const minWarningDistance: any = !isNaN(Number(plant?.distanceSensorSettings?.minWarning)) ? Number(plant?.distanceSensorSettings.minWarning) : null;
            //     const maxWarningDistance: any = !isNaN(Number(plant?.distanceSensorSettings?.maxWarning)) ? Number(plant?.distanceSensorSettings.maxWarning) : null;
            //     const relayOneIdRelatedName: any = plant.distanceSensorSettings.relayOneIdRelated;
            //     const relayTwoIdRelatedName: any = plant.distanceSensorSettings.relayTwoIdRelated;
    
            //     // if distance is equal or grater than maxWarningDistance, and relayMaxWorking is not ON, meaning is not alreado working, we turn on maxWarningRelayIdRelatedName
            //     if (plant.distance_cm >= maxWarningDistance && !plant.distanceSensorSettings.relayOneWorking) {
            //         // const whatsappMsg = `Aviso: tu ${plant.name} llego a ${plant.distance_cm}% de humedad, ya la estamos regando con ${amountOfWater}!`;
            //         // if (phoneNumber) await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);
    
            //         // @ts-ignore
            //         plant[relayOneIdRelatedName] = true;
            //         plant.distanceSensorSettings.relayOneWorking = true;
            //         // @ts-ignore
            //         plant[relayTwoIdRelatedName] = false;
            //         plant.distanceSensorSettings.relayTwoWorking = false;
    
            //         // if distance is lower or equal than minWarningDistance, and relayMinWorking wasnt ON but relayMaxWorking was ON, then we turn on the off maxWarningRelayIdRelatedName and turn ON minWarningRelayIdRelatedName and relayMinWorking to true
            //     } else if (plant.distance_cm <= minWarningDistance && !plant.distanceSensorSettings.relayTwoWorking && plant.distanceSensorSettings.relayOneWorking) {
            //         // const whatsappMsg = `Aviso: tu ${plant.name} llego a ${reading}% de humedad, ya terminamos de regar!`;
            //         // if (phoneNumber) await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);
    
            //         // @ts-ignore
            //         plant[relayOneIdRelatedName] = false;
            //         plant.distanceSensorSettings.relayOneWorking = false;
            //         // @ts-ignore
            //         plant[relayTwoIdRelatedName] = true;
            //         plant.distanceSensorSettings.relayTwoWorking = true;
            //         // @ts-ignore
            //         // plant.distanceSensorSettings.relayMaxAutomatedOnTime = '4 litros';
            //         // @ts-ignore
            //         plant.distanceSensorSettings.relayMinAutomatedOnTime = '4 litros';
            //     } else {
            //     // aca tengo que ver que mandar cuando esta trabajando el arduino 
            //     }
    
            //     return plant;
        default:
            console.log('defaulted!!! papa')
            break;
    }
    console.log('setting AF process:', plant);
    return plant;
};

                