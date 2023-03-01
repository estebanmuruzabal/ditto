import { playintegrity } from "googleapis/build/src/apis/playintegrity";
import moment from "moment";
import { client } from "..";
import { HumiditySensorMode, ISoilHumiditySettings, Plant } from "../lib/types";
import { sendMessage } from "./send";

export const checkSoilWarnings = async (plant: Plant, soilHumiditySetting: ISoilHumiditySettings, phoneNumber: string, currentSoilHumidity: number) => {
    const minHumiditySetted = !isNaN(Number(soilHumiditySetting?.minWarning)) ? Number(soilHumiditySetting?.minWarning) : null;
    const relayOneIdRelated: any = soilHumiditySetting.relayOneIdRelated;
    const relayTwoIdRelated: any = soilHumiditySetting.relayTwoIdRelated;
    const timeToIrrigateInMins = Number(soilHumiditySetting?.relayTwoAutomatedOnTime);

    console.log('Switch of soilHumiditySetting.mode: ', soilHumiditySetting.mode);
    switch (soilHumiditySetting.mode) {
        case HumiditySensorMode.IRRIGATE_ON_DEMAND:
            // modo riego solo cuando falta agua con 1 solo reley y cierra cuando detecta humedad,
            // must have minWarning and relayIdRelated variables setted!!!
            // if (relayOneIdRelated !== 'isRaleyOneOn')

            if (!minHumiditySetted || !relayOneIdRelated) { console.log('No relayOneIdRelated, or no minWarning setted: ', soilHumiditySetting); break; }

            if (currentSoilHumidity < minHumiditySetted && !soilHumiditySetting.relayOneWorking) {
                const whatsappMsg = `Aviso: tu ${plant.name} llego a ${currentSoilHumidity}% de humedad, ya la estamos regando con ${timeToIrrigateInMins}!`;
                await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);

                // @ts-ignore
                plant[relayOneIdRelated] = true;
                soilHumiditySetting.relayOneWorking = true;
                break;
            } else if (currentSoilHumidity >= minHumiditySetted && soilHumiditySetting.relayOneWorking) {
                const whatsappMsg = `Aviso: tu ${plant.name} llego a ${currentSoilHumidity}% de humedad, ya terminamos de regar!`;
                await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                soilHumiditySetting.relayOneWorking = false;
                break;
            }
            break;
        case HumiditySensorMode.SEEDS_POOL_IRRIGATION:
            // modo semillero: detecta seco, abre reley 1 y cierra el reley 2, detecta humedad y cierra reley 1 y abre reley 2. // detecta seco, abre 1 y cierra 2  
            // must have minWarning and relayIdRelated variables setted!!!
            if (!minHumiditySetted || !relayOneIdRelated)  { console.log('No relayOneIdRelated, or no minWarning setted: ', soilHumiditySetting); break; }
            const currentTime = moment(new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }));

            const irrigationStartedOn = soilHumiditySetting?.relayOneAutomatedOnTime;
            
            const currentIrrigationMins = currentTime?.diff(irrigationStartedOn, 'minutes');
            const isIrrigationTimeComplete = currentIrrigationMins >= timeToIrrigateInMins;
            console.log('irrigationStartedOn', irrigationStartedOn)
            console.log('currentIrrigationMins', currentIrrigationMins)
            console.log('currentTime', currentTime)
            console.log('timeToIrrigateInMins', timeToIrrigateInMins)
            console.log('1')
            if (currentSoilHumidity < minHumiditySetted && !soilHumiditySetting.relayOneWorking) {
                const whatsappMsg = `Aviso: tu semillero: ${plant.name} llego a ${currentSoilHumidity}% de humedad, ya estamos llenando la pileta con ${timeToIrrigateInMins} minutos de auga!`;
                if (phoneNumber) await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);
console.log('2')
                // we turn the exit watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                soilHumiditySetting.relayOneWorking = true;
                // we turn the watering relay OFF
                // @ts-ignore
                plant[relayTwoIdRelated] = false;
                soilHumiditySetting.relayTwoWorking = false;
                break;
            } if (currentSoilHumidity >= minHumiditySetted && soilHumiditySetting.relayOneWorking) {
                if (!relayTwoIdRelated) { console.log('No relayTwoIdRelated setted: ', soilHumiditySetting); break; }

                const whatsappMsg = `Aviso: tu semillero: ${plant.name} llego a ${currentSoilHumidity}% de humedad, ya estamos evacuamos el agua!`;
                if (phoneNumber) await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);
console.log('3')
                // we turn the watering relay OFF
                // @ts-ignore
                plant[relayOneIdRelated] = false;
                soilHumiditySetting.relayOneWorking = false;
                // we turn the exit watering relay ON
                // @ts-ignore
                plant[relayTwoIdRelated] = true;
                soilHumiditySetting.relayTwoWorking = true;

                // if (!isNaN(timeToIrrigateInMins) && irrigationStartedOn?.length <= 0) {
                soilHumiditySetting.relayOneAutomatedOnTime = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });
                // }

                break;
            } else if (isIrrigationTimeComplete) {
                const whatsappMsg = `Aviso: tu semillero: ${plant.name} tiene ${currentSoilHumidity}% de humedad, y ya se termino de evacuar el agua!`;
                if (phoneNumber) await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);

                console.log('4')
                // we turn the exit watering relay ON
                // @ts-ignore
                plant[relayTwoIdRelated] = false;
                soilHumiditySetting.relayTwoWorking = false;
                soilHumiditySetting.relayOneAutomatedOnTime = '';
                break;
            }
            
            break;
        case HumiditySensorMode.MANUAL:
            console.log('HumiditySensorMode.MANUAL entered')
            break;
        case HumiditySensorMode.SCHEDULE:
            console.log('HumiditySensorMode.SCHEDULE entered')
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
    const amountOfWater = plant.distanceSensorSettings?.relayOneAutomatedOnTime;
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
                