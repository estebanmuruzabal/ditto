import moment from "moment";
import { ISoilHumiditySettings } from "../lib/types";

export const logTimeStamp = (soilHumiditySetting: ISoilHumiditySettings, currentSoilHumidity: number) => {
    // we only log timestamp if there has pass 5 mins from the latest timestamp currently
    const lastTimeStamp = soilHumiditySetting?.logs[soilHumiditySetting?.logs?.length].timestamp;
    const lastTimeStampMoment = moment(new Date(lastTimeStamp).toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })).format('hh:mm:ss');
    const currentTimeMoment = moment(new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }));    
    const lastTimestampInMins = currentTimeMoment?.diff(lastTimeStampMoment, 'minutes');

    if (lastTimestampInMins < 5) return soilHumiditySetting;

    soilHumiditySetting?.logs.push({
        humidity: currentSoilHumidity,
        timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })
    });

    return soilHumiditySetting;
}