import moment from "moment";
import { ISetting } from "../lib/types";

export const logTimeStampWithTimeFilter = (setting: ISetting, currentSoilHumidity: number) => {
    if (setting?.logs?.length > 0) {
        const currentTimeMoment = moment(new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }));
        const lastTimeStamp = setting?.logs[setting?.logs?.length - 1]?.timestamp;
        const lastTimeStampMoment = moment(new Date(lastTimeStamp));
        const lastTimestampInMins = currentTimeMoment?.diff(lastTimeStampMoment, 'minutes');

        // if it hasnt pass more than 30 mins, we dont log anything basically
        if (lastTimestampInMins < 30) return setting;
    }

    setting?.logs.push({ humidity: currentSoilHumidity, timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }) });

    return setting;
}
