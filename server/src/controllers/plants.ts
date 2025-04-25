// import { playintegrity } from "googleapis/build/src/apis/playintegrity";
import moment from "moment";

import { AirHumiditySensorMode, AirTemperatureSensorMode, C02SensorMode, DistanceSensorMode, HumiditySensorMode, ISensorSetting, ISetting, LightSensorMode, Plant } from "../lib/types";
import { sendMessage } from "./send";
import { WeekDays } from "../utils/constants";
import { fireWhatappAlarmIfIsOn, logTimeStampWithTimeFilter } from "../utils/logsUtils";
import 'moment-timezone';

export const checkSensorAndUpdateSettings = async (plant: Plant, sensorIndex: number, phoneNumber: string, timeZone: string) => {
    // console.log('BF',plant)
    if (!plant?.sensors[sensorIndex]) { console.log('NO MODULE FOUND', plant?.sensors[sensorIndex]); return plant; }
    let setting = plant.sensors[sensorIndex];
    let { minWarning, maxWarning, relayOneIdRelated, relayTwoIdRelated, whatsappWarningsOn, mode, logs, relayOneWorking, relayOneAutomatedTimeToRun, relayTwoAutomatedTimeToRun, relayOneAutomatedStartedTime, relayTwoAutomatedStartedTime, relayTwoWorking, scheduledOnTimes } = setting;
    const sensorReadingName = plant.sensors[sensorIndex].settingType?.toLocaleLowerCase();
    // @ts-ignore
    const reading = plant[sensorReadingName];
    const minReading = Number(minWarning);
    const maxReading = Number(maxWarning);
    const secondActionTimeInMins = Number(relayTwoAutomatedTimeToRun);
    const firstActionTimeInMins = Number(relayOneAutomatedTimeToRun);

    const currentTime = moment(new Date().toLocaleString('en-US', { timeZone }));

    const actionStartedTime = moment(relayOneAutomatedStartedTime);
    const startedSecondActionTime = moment(relayTwoAutomatedStartedTime);
    const firstActionInSeconds = currentTime?.diff(actionStartedTime, 'minutes');
    const secondActionInSeconds = currentTime?.diff(startedSecondActionTime, 'minutes');

    const irrigationShouldStart = reading < minReading && !relayOneWorking && !!!relayOneAutomatedStartedTime.length;
    const irrigationInProgress = firstActionInSeconds >= 0 && firstActionInSeconds < firstActionTimeInMins;
    const irrigationComplete = firstActionInSeconds >= firstActionTimeInMins && relayOneWorking;
    const relayTwoAsocciatedActionShouldStart = reading >= maxReading && !relayTwoWorking && relayOneAutomatedStartedTime.length > 0;
    const relayTwoAsocciatedActionComplete = secondActionInSeconds >= secondActionTimeInMins && !!relayTwoAutomatedStartedTime.length;
    
    moment.locale('es');
    const today = moment(new Date().toLocaleString('en-US', { timeZone }), 'MM/D/YYYY').day();
    
    const maxLevelReached = reading >= maxReading && !relayOneWorking && !!!relayOneAutomatedStartedTime.length;
    const minLevelReached = reading <= minReading && relayOneAutomatedStartedTime.length > 0;
    const currentTimeWithoutNotifing = currentTime?.diff(actionStartedTime, 'minutes');
    const timeInMinutesThatShouldntNotify = Number(relayTwoAutomatedStartedTime);
    const actionShouldStart = Number(reading) >= minReading && !relayOneWorking && !!!relayOneAutomatedStartedTime.length;
    // @ts-ignore
    // console.log('START: minReading', minReading, 'reading', reading, 'maxReading', maxReading, 'relayOneIdRelated', relayOneIdRelated, 'relayOneWorking', relayOneWorking, sensorReadingName, plant[relayOneIdRelated]);
    // refactor: WE SHOULD ADD A SWITH FOR MODULE TYPE, AND FROM THERE A SWITCH FOR MODE, is still working fine cause each mode for each sensor is unique
    switch (mode) {

        case AirHumiditySensorMode.WHEN_MIN_ACTION_AUTOMATED:
            if (!minReading || !relayOneIdRelated) { console.log('No relayOneIdRelated, or no minWarning setted: [please set one] ', plant.sensors[sensorIndex]); break; }
            // @ts-ignore
            console.log('A: minReading', minReading, 'reading', reading, 'relayOneIdRelated', relayOneIdRelated, 'relayOneWorking', relayOneWorking, sensorReadingName, plant[relayOneIdRelated]);
            if (reading > minReading && !relayOneWorking) {

                plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading, timeZone);
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                plant.sensors[sensorIndex]['relayOneWorking'] = true;
                console.log('B: minReading', minReading, 'reading', reading, 'relayOneIdRelated', relayOneIdRelated, 'relayOneWorking', relayOneWorking, sensorReadingName, plant.sensors[sensorIndex]['relayOneWorking']);
                if (whatsappWarningsOn) sendMessage(phoneNumber, `[${plant.name}] llego a ${reading}% de temperatura, ya activamos el ${setting.name}!`);
                break;
            } else if (reading <= minReading && relayOneWorking) {
                setting = logTimeStampWithTimeFilter(setting, reading, timeZone, false, true);

                // @ts-ignore
                plant[relayOneIdRelated] = false;
                plant.sensors[sensorIndex]['relayOneWorking'] = false;
                console.log('C: minReading', minReading, 'reading', reading, 'relayOneIdRelated', relayOneIdRelated, 'relayOneWorking', relayOneWorking, sensorReadingName, plant.sensors[sensorIndex]['relayOneWorking']);
                if (whatsappWarningsOn) await sendMessage(phoneNumber, `[${setting.name}] llego a ${reading}% de temperatura, ya desactivamos el ${setting.name}!`);
                break;
            }

            plant.sensors[sensorIndex] = logTimeStampWithTimeFilter(setting, reading, timeZone);
            break;
    }
    return plant;
};

                