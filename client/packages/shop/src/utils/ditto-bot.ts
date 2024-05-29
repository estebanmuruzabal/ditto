import moment from "moment";
import { SensorsTypes } from "./constant";
import { useQuery } from "@apollo/react-hooks";
import { GET_LOGGED_IN_USER_SETTINGS } from "graphql/query/customer.query";

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


export const hasDittoBotUpdatedInLastMinute = (lastTimeStamp: string, timeZone: string) => {
    const currentTimeMoment = moment(new Date().toLocaleString('en-US', { timeZone }));
    // console.log('currentTimeMoment', currentTimeMoment)
    const lastTimeStampMoment = moment(new Date(lastTimeStamp));
    // console.log('lastTimeStampMoment', lastTimeStampMoment)
    const lastTimestampInMins = currentTimeMoment?.diff(lastTimeStampMoment, 'minutes');

    // we are updating acutally every 5 seconds, but just in case we check if in the last minute there was any conection
    return lastTimestampInMins < 1;
}