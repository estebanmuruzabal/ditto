import { playintegrity } from "googleapis/build/src/apis/playintegrity";
import { client } from "..";
import { HumiditySensorMode, Plant } from "../lib/types";
import { sendMessage } from "./send";

export const checkSoilWarnings = async (plant: Plant, phoneNumber: string) => {
    // make method to see how much water is used based on time that relay is ON       
    const amountOfWater = plant.soilHumiditySettings?.relayOneAutomatedOnTime;
    const minHumidity = !isNaN(Number(plant?.soilHumiditySettings?.minWarning)) ? Number(plant?.soilHumiditySettings?.minWarning) : null;
    const relayOneIdRelated: any = plant.soilHumiditySettings.relayOneIdRelated;
    const relayTwoIdRelated: any = plant.soilHumiditySettings.relayTwoIdRelated;

    
    switch (plant.soilHumiditySettings.mode) {
        case HumiditySensorMode.IRRIGATE_ON_DEMAND:
            // modo riego solo cuando falta agua con 1 solo reley y cierra cuando detecta humedad,
            // must have minWarning and relayIdRelated variables setted!!!
            if (!minHumidity || !relayOneIdRelated) return plant;

            if (plant.soilHumidity < minHumidity && !plant.soilHumiditySettings.relayOneWorking) {
                const whatsappMsg = `Aviso: tu ${plant.name} llego a ${plant.soilHumidity}% de humedad, ya la estamos regando con ${amountOfWater}!`;
                await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);

                // @ts-ignore
                plant[relayOneIdRelated] = true;
                plant.soilHumiditySettings.relayOneWorking = true;
            } else if (plant.soilHumidity >= minHumidity && plant.soilHumiditySettings.relayOneWorking) {
                const whatsappMsg = `Aviso: tu ${plant.name} llego a ${plant.soilHumidity}% de humedad, ya terminamos de regar!`;
                await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                plant.soilHumiditySettings.relayOneWorking = false;
            }
            break;
        case HumiditySensorMode.SEEDS_POOL_IRRIGATION:
            // modo semillero: detecta seco, abre reley 1 y cierra el reley 2, detecta humedad y cierra reley 1 y abre reley 2. // detecta seco, abre 1 y cierra 2  
            // must have minWarning and relayIdRelated variables setted!!!
            if (!minHumidity || !relayOneIdRelated) return plant;

            if (plant.soilHumidity < minHumidity && !plant.soilHumiditySettings.relayOneWorking) {
                const whatsappMsg = `Aviso: tu semillero: ${plant.name} llego a ${plant.soilHumidity}% de humedad, ya estamos llenando la pileta con ${amountOfWater}!`;
                if (phoneNumber) await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);

                // we turn the exit watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                plant.soilHumiditySettings.relayOneWorking = true;
                // we turn the watering relay OFF
                // @ts-ignore
                plant[relayTwoIdRelated] = false;
                plant.soilHumiditySettings.relayTwoWorking = false;
            } else if (plant.soilHumidity >= minHumidity && plant.soilHumiditySettings.relayOneWorking) {
                const whatsappMsg = `Aviso: tu semillero: ${plant.name} llego a ${plant.soilHumidity}% de humedad, ya evacuamos el agua!`;
                if (phoneNumber) await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);

                // we turn the watering relay OFF
                // @ts-ignore
                plant[relayOneIdRelated] = false;
                plant.soilHumiditySettings.relayOneWorking = false;
                // we turn the exit watering relay ON
                // @ts-ignore
                plant[relayTwoIdRelated] = true;
                plant.soilHumiditySettings.relayTwoWorking = true;
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
        // const whatsappMsg = `Aviso: tu ${plant.name} llego a ${plant.soilHumidity}% de humedad, ya terminamos de regar!`;
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
                