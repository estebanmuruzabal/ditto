import { playintegrity } from "googleapis/build/src/apis/playintegrity";
import { client } from "..";
import { Plant } from "../lib/types";
import { sendMessage } from "./send";

export const checkSoilWarnings = async (plant: Plant, phoneNumber: string) => {
    // make method to see how much water is used based on time that relay is ON       
    const amountOfWater = plant.soilHumiditySettings?.relayAutomatedOnTime;
    const minHumidity = !isNaN(Number(plant?.soilHumiditySettings?.minWarning)) ? Number(plant?.soilHumiditySettings?.minWarning) : null;
    const relayIdName: any = plant.soilHumiditySettings.relayIdRelated;

    // must have minWarning and relayIdRelated variables setted!!!
    if (!minHumidity || !relayIdName) return plant;

    if (plant.soilHumidity < minHumidity && !plant.soilHumiditySettings.relayWorking) {
        const whatsappMsg = `Aviso: tu ${plant.name} llego a ${plant.soilHumidity}% de humedad, ya la estamos regando con ${amountOfWater}!`;
        if (phoneNumber) await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);

        // @ts-ignore
        plant[relayIdName] = true;
        plant.soilHumiditySettings.relayWorking = true;
    } else if (plant.soilHumidity >= minHumidity && plant.soilHumiditySettings.relayWorking) {
        const whatsappMsg = `Aviso: tu ${plant.name} llego a ${plant.soilHumidity}% de humedad, ya terminamos de regar!`;
        if (phoneNumber) await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);

        // @ts-ignore
        plant[relayIdName] = false;
        plant.soilHumiditySettings.relayWorking = false;
    }

    return plant;
};

export const checkAirHumidityAndTempeture = async (plant: Plant, phoneNumber: string) => {
    // implement checks
    return plant;
};
                