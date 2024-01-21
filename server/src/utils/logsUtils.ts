import moment from "moment";
import { ISensorSetting, Plant } from "../lib/types";
import { sendMessage } from "../controllers/send";

export const logTimeStampWithTimeFilter = (setting: ISensorSetting, reading: number, timeZone: string, started?: boolean, finished?: boolean) => {
    if (reading < -5 || reading > 105) return setting;
    if (setting?.logs?.length > 0) {
        const currentTimeMoment = moment(new Date().toLocaleString('en-US', { timeZone }));
        const lastTimeStamp = setting?.logs[setting?.logs?.length - 1]?.timestamp;
        const lastTimeStampMoment = moment(new Date(lastTimeStamp));
        const lastTimestampInMins = currentTimeMoment?.diff(lastTimeStampMoment, 'minutes');

        // if it hasnt pass more than 30 mins, we dont log anything basically
        if (lastTimestampInMins < 30) return setting;
    }

    if (started) setting?.logs.push({ reading, timestamp: new Date().toLocaleString('en-US', { timeZone }), started: true });
    else if (finished) setting?.logs.push({ reading, timestamp: new Date().toLocaleString('en-US', { timeZone }), finished: true});
    else setting?.logs.push({ reading, timestamp: new Date().toLocaleString('en-US', { timeZone }) });

    return setting;
}

export const fireWhatappAlarmIfIsOn = (plant: Plant) => {
    const { alarm, alarm_timestamp, timeZone } = plant;
    if (!alarm) return false;

    const currentTimeMoment = moment(new Date().toLocaleString('en-US', { timeZone }));
    const lastTimeStamp = alarm_timestamp;
    const lastTimeStampMoment = moment(new Date(lastTimeStamp));
    const lastAlarmNotificationInMins = currentTimeMoment?.diff(lastTimeStampMoment, 'minutes');

    // if it hasnt pass more than 30 mins, we dont log anything basically
    return lastAlarmNotificationInMins <= 1;
}
