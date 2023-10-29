import moment from "moment";
import { ISensorSetting } from "../lib/types";

export const logTimeStampWithTimeFilter = (setting: ISensorSetting, reading: number, started?: boolean, finished?: boolean) => {
    const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (reading < -5 || reading > 105) return setting;
    if (setting?.logs?.length > 0) {
        const currentTimeMoment = moment(new Date().toLocaleString('en-US', { timeZone: currentTimeZone }));
        const lastTimeStamp = setting?.logs[setting?.logs?.length - 1]?.timestamp;
        const lastTimeStampMoment = moment(new Date(lastTimeStamp));
        const lastTimestampInMins = currentTimeMoment?.diff(lastTimeStampMoment, 'minutes');

        // if it hasnt pass more than 30 mins, we dont log anything basically
        if (lastTimestampInMins < 30) return setting;
    }

    if (started) setting?.logs.push({ reading, timestamp: new Date().toLocaleString('en-US', { timeZone: currentTimeZone }), started: true });
    else if (finished) setting?.logs.push({ reading, timestamp: new Date().toLocaleString('en-US', { timeZone: currentTimeZone }), finished: true});
    else setting?.logs.push({ reading, timestamp: new Date().toLocaleString('en-US', { timeZone: currentTimeZone }) });

    return setting;
}
