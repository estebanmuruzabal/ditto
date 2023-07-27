import { SensorsTypes } from "./constant";

export const getSensorWithoutNumber = (settingType: SensorsTypes) : string => {
    if (!isNaN(Number(settingType[settingType.length - 1]))) {
        return settingType.substring(0, settingType.length - 2);
    }
    console.log('didnt work')
};

export const getLastNumOfSensor = (settingType: SensorsTypes) : number => {
    if (!isNaN(Number(settingType[settingType.length - 1]))) {
        return Number(settingType.substring(settingType.length, settingType.length - 1));
    }
    console.log('didnt work 2')
};