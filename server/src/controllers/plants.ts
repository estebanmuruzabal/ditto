import { playintegrity } from "googleapis/build/src/apis/playintegrity";
import moment from "moment";

import { HumiditySensorMode, ISetting, LightSensorMode, Plant } from "../lib/types";
import { sendMessage } from "./send";
import { WeekDays } from "../utils/constants";
import { logTimeStampWithTimeFilter } from "../utils/logsUtils";

export const checkSoilWarnings = async (plant: Plant, setting: ISetting, phoneNumber: string) => {
    let { minWarning, maxWarning, relayOneIdRelated, relayTwoIdRelated, whatsappWarningsOn, mode, reading, logs, relayOneWorking, relayOneAutomatedTimeToRun, relayTwoAutomatedTimeToRun, relayOneAutomatedStartedTime, relayTwoAutomatedStartedTime, relayTwoWorking, scheduledOnTimes } = setting;
    const minHumiditySetted = !isNaN(Number(minWarning)) ? Number(minWarning) : null;
    const maxHumiditySetted = !isNaN(Number(maxWarning)) ? Number(maxWarning) : null;
    // if (reading < 0 || reading > 120) {
    //     console.log('humidity outside normal paramethers', reading);
    //     return plant;
    // }
    console.log('setting being process:', setting);
    switch (mode) {
        case HumiditySensorMode.IRRIGATE_ON_DEMAND:
            // modo riego solo cuando falta agua con 1 solo reley y cierra cuando detecta humedad,
            // must have maxHumiditySetted, minWarning and relayIdRelated variables setted!!!

            if (!minHumiditySetted || !relayOneIdRelated || !maxHumiditySetted) { console.log('No relayOneIdRelated, or no minWarning setted: [please set one] ', soilHumiditySetting); break; }

            if (reading < minHumiditySetted && !relayOneWorking) {
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu planta: ${plant.name} llego a ${reading}% de humedad, ya estamos regando!`);

                logs.push({ humidity: reading, timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }), startedWatering: true });

                // @ts-ignore
                plant[relayOneIdRelated] = true;
                relayOneWorking = true;
                break;
            } else if (reading >= maxHumiditySetted && relayOneWorking) {
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu planta: ${plant.name} llego a ${reading}% de humedad, ya terminamos de regar!`);

                logs.push({ humidity: reading, timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }), finishedWatering: true });

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                relayOneWorking = false;
                break;
            }

            setting = logTimeStampWithTimeFilter(setting, reading);
            break;
        case HumiditySensorMode.SEEDS_POOL_IRRIGATION:
            // modo semillero: detecta seco, abre reley 1 y cierra el reley 2, detecta humedad y cierra reley 1 y abre reley 2. // detecta seco, abre 1 y cierra 2  
            // must have minWarning and relayIdRelated variables setted!!!

            // relayTwoAutomatedTimeToRun SHOULD CONTAIN THE MINUTES TIME
            const timeToEvacuateInMins = Number(relayTwoAutomatedTimeToRun);
            const timeToIrrigateInMins = Number(relayOneAutomatedTimeToRun);

            if (!minHumiditySetted || !relayOneIdRelated || !maxHumiditySetted)  { console.log('No relayOneIdRelated, or no minWarning setted: ', setting); break; }
            if (timeToEvacuateInMins <=0) { console.log('relayTwoAutomatedTimeToRun SHOULD CONTAIN THE NUMBER OF MINUTES TO BE THE RELAY ON ', setting); break; }

            const currentTime = moment(new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }));

            
            const startedIrrigationTime = moment(relayOneAutomatedStartedTime);
            const startedEvacuationTime = moment(relayTwoAutomatedStartedTime);
            const currentIrrigationMins = currentTime?.diff(startedIrrigationTime, 'minutes');
            const currentEvacuationMins = currentTime?.diff(startedEvacuationTime, 'minutes');

            const irrigationShouldStart = reading < minHumiditySetted && !relayOneWorking && !!!relayOneAutomatedStartedTime.length;
            const irrigationInProgress = currentIrrigationMins >= 0 && currentIrrigationMins < timeToIrrigateInMins;
            const irrigationComplete = currentIrrigationMins >= timeToIrrigateInMins && relayOneWorking;
            const evacuationShouldStart = reading >= maxHumiditySetted && !relayTwoWorking && relayOneAutomatedStartedTime.length > 0;
            const evacuationComplete = currentEvacuationMins >= timeToEvacuateInMins && !!relayTwoAutomatedStartedTime.length;

            console.log('irrigationComplete', irrigationComplete)
            console.log('currentEvacuationMins', currentEvacuationMins)
            if (irrigationInProgress) {
                logs.push({ humidity: reading, timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }) });
                return plant;
            }

            if (irrigationShouldStart) {
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu semillero: ${plant.name} llego a ${reading}% de humedad, ya estamos llenando la pileta con agua.`);

                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                relayOneWorking = true;

                relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });
                logs.push({ humidity: reading, timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }), startedWatering: true });
                // we turn evacuation watering relay OFF just in case
                // @ts-ignore
                plant[relayTwoIdRelated] = false;
                relayTwoWorking = false;
                break;
            } else if (irrigationComplete) {
                // we just turn off the filling in watter system
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu semillero: ${plant.name} acaba de llenar la pileta con ${Number(relayOneAutomatedTimeToRun) * 2} litros agua.`);

                logs.push({ humidity: reading, timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }), finishedWatering: true });

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                relayOneWorking = false;
                break;
            } else if (evacuationShouldStart) {
                if (!relayTwoIdRelated) { console.log('No relayTwoIdRelated setted: ', soilHumiditySetting); break; }

                if (whatsappWarningsOn) await sendMessage(phoneNumber, `Aviso: tu semillero: ${plant.name} llego a ${reading}% de humedad, ya estamos evacuamos el agua.`);

                // we turn the exit watering relay ON
                // @ts-ignore
                plant[relayTwoIdRelated] = true;
                relayTwoWorking = true;

                // we set the start time of the relay
                relayTwoAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });

                logs.push({ humidity: reading, timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }) });
                break;
            } else if (evacuationComplete) {
                const whatsappMsg = `Aviso: tu semillero: ${plant.name} mantiene ${reading}% de humedad, y ya se termino de evacuar el agua en ${timeToIrrigateInMins} minutos.`;
                if (phoneNumber) await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);

                // we turn the exit watering relay OFF, and reset relayOneAutomatedTimeToRun (that has the start time of the relay)
                // @ts-ignore
                plant[relayTwoIdRelated] = false;
                relayTwoWorking = false;
                relayOneAutomatedStartedTime = '';
                relayTwoAutomatedStartedTime = '';
                
                logs.push({
                    humidity: reading,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }) });
                break;
            }
            setting = logTimeStampWithTimeFilter(setting, reading);
            break;
        case HumiditySensorMode.MANUAL:
            if (!relayOneIdRelated) { console.log('No relayOneIdRelated in manual mode. [please set one] ', soilHumiditySetting); break; }
            
            // @ts-ignore
            const willStartWatering = !plant[relayOneIdRelated] && relayOneWorking!;
            // @ts-ignore
            const willStopWatering = plant[relayOneIdRelated] && relayOneWorking;
            if (willStartWatering) {
                logs.push({
                    humidity: reading,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }),
                    startedWatering: true
                });
            } else if (willStopWatering) {
                logs.push({
                    humidity: reading,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }),
                    finishedWatering: true
                });
            }
            setting = logTimeStampWithTimeFilter(setting, reading);
            // @ts-ignore
            plant[relayOneIdRelated] = setting.relayOneWorking;
            break;
        case HumiditySensorMode.SCHEDULE:
            moment.locale('es');
            const today = moment(new Date(), 'MM/D/YYYY').day();
            const currentTime1 = moment(new Date()).format('hh:mm:ss');

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
        default:
            console.log('defaulted!!! papa')
            break;
    }
    return plant;
};

export const checkLightSensor = async (plant: Plant, lightSettings: ISetting, phoneNumber: string, light: number) => {
    // const minHumiditySetted = !isNaN(Number(minWarning)) ? Number(minWarning) : null;
    // const maxHumiditySetted = !isNaN(Number(maxWarning)) ? Number(maxWarning) : null;
    const relayOneIdRelated: any = lightSettings.relayOneIdRelated;

    switch (lightSettings.mode) {
        case HumiditySensorMode.MANUAL:
            if (!relayOneIdRelated) { console.log('No relayOneIdRelated in manual mode. [please set one] ', lightSettings); break; }
            // @ts-ignore
            plant[relayOneIdRelated] = lightSettings.relayOneWorking;
            lightSettings = logTimeStampWithTimeFilter(lightSettings, light);
            break;
        case LightSensorMode.SCHEDULE:
        case LightSensorMode.SMART_SCHEDULE:
            moment.locale('es');
            const today = moment(new Date(), 'MM/D/YYYY').day();
            const currentTime = moment(new Date()).format('hh:mm:ss');

            lightSettings?.scheduledOnTimes?.map((schedule: any, i: number) => {
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
            lightSettings = logTimeStampWithTimeFilter(lightSettings, light);
            break;
        default:
            console.log('defaulted entered')
            break;
    }
    return plant;
};


export const checkAirHumidityAndTempeture = async (plant: Plant, phoneNumber: string) => {
    // implement checks
    return plant;
};

export const checkSensors = async (plant: Plant, phoneNumber: string) => {
    // make method to see how much water is used based on time that relay is ON       
    const amountOfWater = plant.distanceSensorSettings?.relayOneAutomatedTimeToRun;
    const minWarningDistance: any = !isNaN(Number(plant?.distanceSensorSettings?.minWarning)) ? Number(plant?.distanceSensorSettings.minWarning) : null;
    const maxWarningDistance: any = !isNaN(Number(plant?.distanceSensorSettings?.maxWarning)) ? Number(plant?.distanceSensorSettings.maxWarning) : null;
    const relayOneIdRelatedName: any = plant.distanceSensorSettings.relayOneIdRelated;
    const relayTwoIdRelatedName: any = plant.distanceSensorSettings.relayTwoIdRelated;

    // if distance is equal or grater than maxWarningDistance, and relayMaxWorking is not ON, meaning is not alreado working, we turn on maxWarningRelayIdRelatedName
    if (plant.distance_cm >= maxWarningDistance && !plant.distanceSensorSettings.relayOneWorking) {
        // const whatsappMsg = `Aviso: tu ${plant.name} llego a ${plant.distance_cm}% de humedad, ya la estamos regando con ${amountOfWater}!`;
        // if (phoneNumber) await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);

        // @ts-ignore
        plant[relayOneIdRelatedName] = true;
        plant.distanceSensorSettings.relayOneWorking = true;
        // @ts-ignore
        plant[relayTwoIdRelatedName] = false;
        plant.distanceSensorSettings.relayTwoWorking = false;

        // if distance is lower or equal than minWarningDistance, and relayMinWorking wasnt ON but relayMaxWorking was ON, then we turn on the off maxWarningRelayIdRelatedName and turn ON minWarningRelayIdRelatedName and relayMinWorking to true
    } else if (plant.distance_cm <= minWarningDistance && !plant.distanceSensorSettings.relayTwoWorking && plant.distanceSensorSettings.relayOneWorking) {
        // const whatsappMsg = `Aviso: tu ${plant.name} llego a ${reading}% de humedad, ya terminamos de regar!`;
        // if (phoneNumber) await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);

        // @ts-ignore
        plant[relayOneIdRelatedName] = false;
        plant.distanceSensorSettings.relayOneWorking = false;
        // @ts-ignore
        plant[relayTwoIdRelatedName] = true;
        plant.distanceSensorSettings.relayTwoWorking = true;
        // @ts-ignore
        // plant.distanceSensorSettings.relayMaxAutomatedOnTime = '4 litros';
        // @ts-ignore
        plant.distanceSensorSettings.relayMinAutomatedOnTime = '4 litros';
    } else {
       // aca tengo que ver que mandar cuando esta trabajando el arduino 
    }

    return plant;
};
                