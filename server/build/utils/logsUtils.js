"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logTimeStampWithTimeFilter = void 0;
const moment_1 = __importDefault(require("moment"));
const logTimeStampWithTimeFilter = (setting, reading) => {
    var _a, _b, _c;
    if (((_a = setting === null || setting === void 0 ? void 0 : setting.logs) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        const currentTimeMoment = (0, moment_1.default)(new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }));
        const lastTimeStamp = (_c = setting === null || setting === void 0 ? void 0 : setting.logs[((_b = setting === null || setting === void 0 ? void 0 : setting.logs) === null || _b === void 0 ? void 0 : _b.length) - 1]) === null || _c === void 0 ? void 0 : _c.timestamp;
        const lastTimeStampMoment = (0, moment_1.default)(new Date(lastTimeStamp));
        const lastTimestampInMins = currentTimeMoment === null || currentTimeMoment === void 0 ? void 0 : currentTimeMoment.diff(lastTimeStampMoment, 'minutes');
        // if it hasnt pass more than 30 mins, we dont log anything basically
        if (lastTimestampInMins < 30)
            return setting;
    }
    setting === null || setting === void 0 ? void 0 : setting.logs.push({ reading, timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }) });
    return setting;
};
exports.logTimeStampWithTimeFilter = logTimeStampWithTimeFilter;
