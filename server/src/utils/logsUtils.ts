import moment from "moment";
import { ISoilHumiditySettings } from "../lib/types";

export const logTimeStamp = (soilHumiditySetting: ISoilHumiditySettings, currentSoilHumidity: number) => {
    const currentTimeMoment = moment(new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }));

    if (soilHumiditySetting?.logs?.length > 0) {
        const lastTimeStamp = soilHumiditySetting?.logs[soilHumiditySetting?.logs?.length - 1]?.timestamp;
        const lastTimeStampMoment = moment(new Date(lastTimeStamp));
        const lastTimestampInMins = currentTimeMoment?.diff(lastTimeStampMoment, 'minutes');

        if (lastTimestampInMins < 5) return soilHumiditySetting;
    }
    soilHumiditySetting?.logs.push({
        humidity: currentSoilHumidity,
        timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })
    });
    return soilHumiditySetting;
}
