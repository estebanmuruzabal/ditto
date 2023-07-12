import moment from "moment";
import { ISoilHumiditySettings } from "../lib/types";

export const logTimeStamp = (soilHumiditySetting: ISoilHumiditySettings, currentSoilHumidity: number) => {
    const currentTimeMoment = moment(new Date());

    if (soilHumiditySetting?.logs?.length > 0) {
        const lastTimeStamp = soilHumiditySetting?.logs[soilHumiditySetting?.logs?.length]?.timestamp;
        const lastTimeStampMoment = moment(new Date(lastTimeStamp));
        const lastTimestampInMins = currentTimeMoment?.diff(lastTimeStampMoment, 'minutes');

        if (lastTimestampInMins < 5 && soilHumiditySetting?.logs.length !== 0) return soilHumiditySetting;
    }

//         // we only log timestamp if there has pass 5 mins from the latest timestamp currently
//     const lastTimeStamp = soilHumiditySetting?.logs[soilHumiditySetting?.logs?.length]?.timestamp || currentTimeMoment;
//     console.log('lastTimeStamp', lastTimeStamp)
// // @ts-ignore
//     const lastTimeStampMoment = moment(new Date(lastTimeStamp|| currentTimeMoment));
//     console.log('lastTimeStampMoment',lastTimeStampMoment)
//     const lastTimestampInMins = currentTimeMoment?.diff(lastTimeStampMoment, 'minutes');
// console.log('lastTimestampInMins', lastTimestampInMins)
//     if (lastTimestampInMins < 5 && soilHumiditySetting?.logs.length !== 0) return soilHumiditySetting;

    soilHumiditySetting.logs = [];
    soilHumiditySetting?.logs.push({
        humidity: currentSoilHumidity,
        timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })
    });

    return soilHumiditySetting;
}
