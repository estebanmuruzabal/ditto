import { playintegrity } from "googleapis/build/src/apis/playintegrity";
import moment from "moment";
import { client } from "..";
import { HumiditySensorMode, ISoilHumiditySettings, LightSensorMode, Plant } from "../lib/types";
import { sendMessage } from "./send";
import { WeekDays } from "../utils/constants";

export const checkSoilWarnings = async (plant: Plant, soilHumiditySetting: ISoilHumiditySettings, phoneNumber: string, currentSoilHumidity: number) => {
    const minHumiditySetted = !isNaN(Number(soilHumiditySetting?.minWarning)) ? Number(soilHumiditySetting?.minWarning) : null;
    const maxHumiditySetted = !isNaN(Number(soilHumiditySetting?.maxWarning)) ? Number(soilHumiditySetting?.maxWarning) : null;
    const relayOneIdRelated: any = soilHumiditySetting.relayOneIdRelated;
    const relayTwoIdRelated: any = soilHumiditySetting.relayTwoIdRelated;

    console.log('soilHumiditySetting being process:', soilHumiditySetting);
    switch (soilHumiditySetting.mode) {
        case HumiditySensorMode.IRRIGATE_ON_DEMAND:
            // modo riego solo cuando falta agua con 1 solo reley y cierra cuando detecta humedad,
            // must have maxHumiditySetted, minWarning and relayIdRelated variables setted!!!
            // if (relayOneIdRelated !== 'isRaleyOneOn')

            if (!minHumiditySetted || !relayOneIdRelated || !maxHumiditySetted) { console.log('No relayOneIdRelated, or no minWarning setted: [please set one] ', soilHumiditySetting); break; }

            if (currentSoilHumidity < minHumiditySetted && !soilHumiditySetting.relayOneWorking) {
                const whatsappMsg = `Aviso: tu planta: ${plant.name} llego a ${currentSoilHumidity}% de humedad, ya estamos regando!`;
                await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);
                soilHumiditySetting?.logs.push({
                    humidity: currentSoilHumidity,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }),
                    startedWatering: true,
                });

                // @ts-ignore
                plant[relayOneIdRelated] = true;
                soilHumiditySetting.relayOneWorking = true;
                break;
            } else if (currentSoilHumidity >= maxHumiditySetted && soilHumiditySetting.relayOneWorking) {
                const whatsappMsg = `Aviso: tu planta: ${plant.name} llego a ${currentSoilHumidity}% de humedad, ya terminamos de regar!`;
                await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);
                soilHumiditySetting?.logs.push({
                    humidity: currentSoilHumidity,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }),
                    finishedWatering: true,
                });

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                soilHumiditySetting.relayOneWorking = false;
                break;
            }
            soilHumiditySetting?.logs.push({
                humidity: currentSoilHumidity,
                timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })
            });
            break;
        case HumiditySensorMode.SEEDS_POOL_IRRIGATION:
            // modo semillero: detecta seco, abre reley 1 y cierra el reley 2, detecta humedad y cierra reley 1 y abre reley 2. // detecta seco, abre 1 y cierra 2  
            // must have minWarning and relayIdRelated variables setted!!!

            // relayTwoAutomatedTimeToRun SHOULD CONTAIN THE MINUTES TIME
            const timeToEvacuateInMins = Number(soilHumiditySetting?.relayTwoAutomatedTimeToRun);
            const timeToIrrigateInMins = Number(soilHumiditySetting?.relayOneAutomatedTimeToRun);

            if (!minHumiditySetted || !relayOneIdRelated || !maxHumiditySetted)  { console.log('No relayOneIdRelated, or no minWarning setted: ', soilHumiditySetting); break; }
            if (timeToEvacuateInMins <=0) { console.log('relayTwoAutomatedTimeToRun SHOULD CONTAIN THE NUMBER OF MINUTES TO BE THE RELAY ON ', soilHumiditySetting); break; }

            const currentTime = moment(new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }));

            
            const startedIrrigationTime = moment(soilHumiditySetting.relayOneAutomatedStartedTime);
            const startedEvacuationTime = moment(soilHumiditySetting.relayTwoAutomatedStartedTime);
            const currentIrrigationMins = currentTime?.diff(startedIrrigationTime, 'minutes');
            const currentEvacuationMins = currentTime?.diff(startedEvacuationTime, 'minutes');

            const irrigationShouldStart = currentSoilHumidity < minHumiditySetted && !soilHumiditySetting.relayOneWorking && !!!soilHumiditySetting.relayOneAutomatedStartedTime.length;
            const irrigationInProgress = currentIrrigationMins >= 0 && currentIrrigationMins < timeToIrrigateInMins;
            const irrigationComplete = currentIrrigationMins >= timeToIrrigateInMins && soilHumiditySetting.relayOneWorking;
            const evacuationShouldStart = currentSoilHumidity >= maxHumiditySetted && !soilHumiditySetting.relayTwoWorking && soilHumiditySetting.relayOneAutomatedStartedTime.length > 0;
            const evacuationComplete = currentEvacuationMins >= timeToEvacuateInMins && !!soilHumiditySetting.relayTwoAutomatedStartedTime.length;


            console.log('irrigationComplete', irrigationComplete)
            console.log('currentEvacuationMins', currentEvacuationMins)
            // console.log('soilHumiditySetting.relayOneAutomatedStartedTime', soilHumiditySetting.relayOneAutomatedStartedTime)
            // console.log('!!!soilHumiditySetting.relayTwoAutomatedStartedTime.length', !!soilHumiditySetting.relayTwoAutomatedStartedTime.length)
            // console.log('soilHumiditySetting.relayTwoAutomatedStartedTime.length', soilHumiditySetting.relayTwoAutomatedStartedTime.length)
            if (irrigationInProgress) {
                soilHumiditySetting?.logs.push({
                    humidity: currentSoilHumidity,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })
                });
                return plant;
            }

            if (irrigationShouldStart) {
                const whatsappMsg = `Aviso: tu semillero: ${plant.name} llego a ${currentSoilHumidity}% de humedad, ya estamos llenando la pileta con agua.`;
                if (phoneNumber) await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);

                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                soilHumiditySetting.relayOneWorking = true;

                soilHumiditySetting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });
                soilHumiditySetting?.logs.push({
                    humidity: currentSoilHumidity,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }),
                    startedWatering: true,
                });
                // we turn evacuation watering relay OFF just in case
                // @ts-ignore
                plant[relayTwoIdRelated] = false;
                soilHumiditySetting.relayTwoWorking = false;
                break;
            } else if (irrigationComplete) {
                // we just turn off the filling in watter system
                const whatsappMsg = `Aviso: tu semillero: ${plant.name} acaba de llenar la pileta con ${Number(soilHumiditySetting.relayOneAutomatedTimeToRun) * 2} litros agua.`;
                if (phoneNumber) await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);

                soilHumiditySetting?.logs.push({
                    humidity: currentSoilHumidity,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }),
                    finishedWatering: true,
                });

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                soilHumiditySetting.relayOneWorking = false;
                break;
            } else if (evacuationShouldStart) {
                if (!relayTwoIdRelated) { console.log('No relayTwoIdRelated setted: ', soilHumiditySetting); break; }

                const whatsappMsg = `Aviso: tu semillero: ${plant.name} llego a ${currentSoilHumidity}% de humedad, ya estamos evacuamos el agua.`;
                if (phoneNumber) await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);

                // we turn the exit watering relay ON
                // @ts-ignore
                plant[relayTwoIdRelated] = true;
                soilHumiditySetting.relayTwoWorking = true;

                // we set the start time of the relay
                soilHumiditySetting.relayTwoAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });

                soilHumiditySetting?.logs.push({
                    humidity: currentSoilHumidity,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })
                });
                break;
            } else if (evacuationComplete) {
                const whatsappMsg = `Aviso: tu semillero: ${plant.name} mantiene ${currentSoilHumidity}% de humedad, y ya se termino de evacuar el agua en ${timeToIrrigateInMins} minutos.`;
                if (phoneNumber) await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);

                // we turn the exit watering relay OFF, and reset relayOneAutomatedTimeToRun (that has the start time of the relay)
                // @ts-ignore
                plant[relayTwoIdRelated] = false;
                soilHumiditySetting.relayTwoWorking = false;
                soilHumiditySetting.relayOneAutomatedStartedTime = '';
                soilHumiditySetting.relayTwoAutomatedStartedTime = '';
                
                soilHumiditySetting?.logs.push({
                    humidity: currentSoilHumidity,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })
                });
                break;
            }
            soilHumiditySetting?.logs.push({
                humidity: currentSoilHumidity,
                timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })
            });
            break;
        case HumiditySensorMode.MANUAL:
            if (!relayOneIdRelated) { console.log('No relayOneIdRelated in manual mode. [please set one] ', soilHumiditySetting); break; }
            
            // @ts-ignore
            const willStartWatering = !plant[relayOneIdRelated] && soilHumiditySetting.relayOneWorking!;
            // @ts-ignore
            const willStopWatering = plant[relayOneIdRelated] && soilHumiditySetting.relayOneWorking;
            if (willStartWatering) {
                soilHumiditySetting?.logs.push({
                    humidity: currentSoilHumidity,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }),
                    startedWatering: true
                });
            } else if (willStopWatering) {
                soilHumiditySetting?.logs.push({
                    humidity: currentSoilHumidity,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }),
                    finishedWatering: true
                });
            } else {
                soilHumiditySetting?.logs.push({
                    humidity: currentSoilHumidity,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }),
                });
            }
            // @ts-ignore
            plant[relayOneIdRelated] = soilHumiditySetting.relayOneWorking;

            break;
        case HumiditySensorMode.SCHEDULE:
            moment.locale('es');
            const today = moment(new Date(), 'MM/D/YYYY').day();
            const currentTime1 = moment(new Date()).format('hh:mm:ss');

            soilHumiditySetting?.scheduledOnTimes?.map((schedule: any, i: number) => {
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

export const checkLightSensor = async (plant: Plant, lightSettings: ISoilHumiditySettings, phoneNumber: string, light: number) => {
    console.log('lightSettings:', lightSettings)
    console.log('light:', light)
    // const minHumiditySetted = !isNaN(Number(soilHumiditySetting?.minWarning)) ? Number(soilHumiditySetting?.minWarning) : null;
    // const maxHumiditySetted = !isNaN(Number(soilHumiditySetting?.maxWarning)) ? Number(soilHumiditySetting?.maxWarning) : null;
    const relayOneIdRelated: any = lightSettings.relayOneIdRelated;
    // const relayTwoIdRelated: any = soilHumiditySetting.relayTwoIdRelated;

    // console.log('soilHumiditySetting being process:', soilHumiditySetting);
    switch (lightSettings.mode) {
        case HumiditySensorMode.MANUAL:
            if (!relayOneIdRelated) { console.log('No relayOneIdRelated in manual mode. [please set one] ', lightSettings); break; }
            // @ts-ignore
            plant[relayOneIdRelated] = lightSettings.relayOneWorking;
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
                    // const currentTime = moment(new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })).format('hh:mm:ss');
                    
                    // @ts-ignore
                    if (currentTime.isBetween(startTime, endTime)) {
                        // @ts-ignore
                        plant[relayOneIdRelated] = schedule.smartLight ? false : true;
                    }
                }
            })

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
        // const whatsappMsg = `Aviso: tu ${plant.name} llego a ${currentSoilHumidity}% de humedad, ya terminamos de regar!`;
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
                