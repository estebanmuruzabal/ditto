import { playintegrity } from "googleapis/build/src/apis/playintegrity";
import { client } from "..";
import { Plant } from "../lib/types";
import { sendMessage } from "./send";

export const checkSoilWarnings = async (plant: Plant, phoneNumber: string) => {
    // make method to see how much water is used based on time that relay is ON       
    const amountOfWater = plant.soilHumiditySettings?.relayAutomatedOnTime;
    const minHumidity = !isNaN(Number(plant?.soilHumiditySettings?.minWarning)) ? Number(plant?.soilHumiditySettings?.minWarning) : null;

    if (!minHumidity) return plant;
    console.log('plant.soilHumiditySettings:', plant.soilHumiditySettings)
    console.log('minHumidity::', minHumidity)


    if (plant.soilHumidity < minHumidity && !plant.soilHumiditySettings.relayWorking) {
        const whatsappMsg = `Aviso: tu ${plant.name} llego a ${plant.soilHumidity}% de humedad, ya la estamos regando con ${amountOfWater}!`;
        if (phoneNumber) await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);

        plant.isRelayOneOn = true;
        plant.soilHumiditySettings.relayWorking = true;
    } else if (plant.soilHumidity >= minHumidity && plant.soilHumiditySettings.relayWorking) {
        const whatsappMsg = `Aviso: tu ${plant.name} llego a ${plant.soilHumidity}% de humedad, ya terminamos de regar!`;
        if (phoneNumber) await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);

        plant.isRelayOneOn = false;
        plant.soilHumiditySettings.relayWorking = false;
    }

    return plant;
};
                