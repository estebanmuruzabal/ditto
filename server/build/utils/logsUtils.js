"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fireWhatappAlarmIfIsOn = exports.logTimeStampWithTimeFilter = void 0;
const moment_1 = __importDefault(require("moment"));
const logTimeStampWithTimeFilter = (setting, reading, timeZone, started, finished) => {
    var _a, _b, _c;
    if (reading < -5 || reading > 105)
        return setting;
    if (((_a = setting === null || setting === void 0 ? void 0 : setting.logs) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        const currentTimeMoment = (0, moment_1.default)(new Date().toLocaleString('en-US', { timeZone }));
        const lastTimeStamp = (_c = setting === null || setting === void 0 ? void 0 : setting.logs[((_b = setting === null || setting === void 0 ? void 0 : setting.logs) === null || _b === void 0 ? void 0 : _b.length) - 1]) === null || _c === void 0 ? void 0 : _c.timestamp;
        const lastTimeStampMoment = (0, moment_1.default)(new Date(lastTimeStamp));
        const lastTimestampInMins = currentTimeMoment === null || currentTimeMoment === void 0 ? void 0 : currentTimeMoment.diff(lastTimeStampMoment, 'minutes');
        // if it hasnt pass more than 30 mins, we dont log anything basically
        if (lastTimestampInMins < 30)
            return setting;
    }
    if (started)
        setting === null || setting === void 0 ? void 0 : setting.logs.push({ reading, timestamp: new Date().toLocaleString('en-US', { timeZone }), started: true });
    else if (finished)
        setting === null || setting === void 0 ? void 0 : setting.logs.push({ reading, timestamp: new Date().toLocaleString('en-US', { timeZone }), finished: true });
    else
        setting === null || setting === void 0 ? void 0 : setting.logs.push({ reading, timestamp: new Date().toLocaleString('en-US', { timeZone }) });
    return setting;
};
exports.logTimeStampWithTimeFilter = logTimeStampWithTimeFilter;
const fireWhatappAlarmIfIsOn = (plant) => {
    const { alarm, alarm_timestamp, timeZone } = plant;
    if (!alarm)
        return false;
    const currentTimeMoment = (0, moment_1.default)(new Date().toLocaleString('en-US', { timeZone }));
    const lastTimeStamp = alarm_timestamp;
    const lastTimeStampMoment = (0, moment_1.default)(new Date(lastTimeStamp));
    const lastAlarmNotificationInMins = currentTimeMoment === null || currentTimeMoment === void 0 ? void 0 : currentTimeMoment.diff(lastTimeStampMoment, 'minutes');
    // if it hasnt pass more than 30 mins, we dont log anything basically
    return lastAlarmNotificationInMins <= 1;
};
exports.fireWhatappAlarmIfIsOn = fireWhatappAlarmIfIsOn;
