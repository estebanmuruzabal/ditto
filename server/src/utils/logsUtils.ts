import moment from "moment";
import { ISoilHumiditySettings } from "../lib/types";

export const logTimeStamp = (soilHumiditySetting: ISoilHumiditySettings, currentSoilHumidity: number) => {
    if (soilHumiditySetting?.logs?.length > 0) {
        const currentTimeMoment = moment(new Date());
        const lastTimeStamp = soilHumiditySetting?.logs[soilHumiditySetting?.logs?.length - 1]?.timestamp;
        const lastTimeStampMoment = moment(new Date(lastTimeStamp));
        const lastTimestampInMins = currentTimeMoment?.diff(lastTimeStampMoment, 'minutes');

        // if it hasnt pass more than 30 mins, we dont log anything basically
        if (lastTimestampInMins < 30) return soilHumiditySetting;
    }

    soilHumiditySetting?.logs.push({ humidity: currentSoilHumidity, timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }) });

    return soilHumiditySetting;
}
