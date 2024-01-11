"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSensor = void 0;
// import { playintegrity } from "googleapis/build/src/apis/playintegrity";
const moment_1 = __importDefault(require("moment"));
const types_1 = require("../lib/types");
const send_1 = require("./send");
const logsUtils_1 = require("../utils/logsUtils");
require("moment-timezone");
const checkSensor = (plant, sensorIndex, phoneNumber, timeZone) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (!(plant === null || plant === void 0 ? void 0 : plant.sensors[sensorIndex])) {
        console.log('NO MODULE FOUND', plant === null || plant === void 0 ? void 0 : plant.sensors[sensorIndex]);
        return plant;
    }
    let setting = plant.sensors[sensorIndex];
    let { minWarning, maxWarning, relayOneIdRelated, relayTwoIdRelated, whatsappWarningsOn, mode, reading, logs, relayOneWorking, relayOneAutomatedTimeToRun, relayTwoAutomatedTimeToRun, relayOneAutomatedStartedTime, relayTwoAutomatedStartedTime, relayTwoWorking, scheduledOnTimes } = setting;
    const sensorReadingName = (_a = plant.sensors[sensorIndex].settingType) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase();
    // @ts-ignore
    setting.reading = plant[sensorReadingName];
    const minReading = Number(minWarning);
    const maxReading = Number(maxWarning);
    const secondActionTimeInMins = Number(relayTwoAutomatedTimeToRun);
    const firstActionTimeInMins = Number(relayOneAutomatedTimeToRun);
    const currentTime = (0, moment_1.default)(new Date().toLocaleString('en-US', { timeZone }));
    const actionStartedTime = (0, moment_1.default)(relayOneAutomatedStartedTime);
    const startedSecondActionTime = (0, moment_1.default)(relayTwoAutomatedStartedTime);
    const firstActionInSeconds = currentTime === null || currentTime === void 0 ? void 0 : currentTime.diff(actionStartedTime, 'minutes');
    const secondActionInSeconds = currentTime === null || currentTime === void 0 ? void 0 : currentTime.diff(startedSecondActionTime, 'minutes');
    const irrigationShouldStart = reading < minReading && !relayOneWorking && !!!relayOneAutomatedStartedTime.length;
    const irrigationInProgress = firstActionInSeconds >= 0 && firstActionInSeconds < firstActionTimeInMins;
    const irrigationComplete = firstActionInSeconds >= firstActionTimeInMins && relayOneWorking;
    const relayTwoAsocciatedActionShouldStart = reading >= maxReading && !relayTwoWorking && relayOneAutomatedStartedTime.length > 0;
    const relayTwoAsocciatedActionComplete = secondActionInSeconds >= secondActionTimeInMins && !!relayTwoAutomatedStartedTime.length;
    moment_1.default.locale('es');
    const today = (0, moment_1.default)(new Date().toLocaleString('en-US', { timeZone }), 'MM/D/YYYY').day();
    const maxLevelReached = reading >= maxReading && !relayOneWorking && !!!relayOneAutomatedStartedTime.length;
    const minLevelReached = reading <= minReading && relayOneAutomatedStartedTime.length > 0;
    const currentTimeWithoutNotifing = currentTime === null || currentTime === void 0 ? void 0 : currentTime.diff(actionStartedTime, 'minutes');
    const timeInMinutesThatShouldntNotify = Number(relayTwoAutomatedStartedTime);
    const actionShouldStart = Number(reading) >= minReading && !relayOneWorking && !!!relayOneAutomatedStartedTime.length;
    // refactor: WE SHOULD ADD A SWITH FOR MODULE TYPE, AND FROM THERE A SWITCH FOR MODE, is still working fine cause each mode for each sensor is unique
    switch (mode) {
        case types_1.HumiditySensorMode.IRRIGATE_ON_DEMAND:
            // modo riego solo cuando falta agua con 1 solo reley y cierra cuando detecta humedad,
            // must have maxReading, minWarning and relayIdRelated variables setted!!!
            if (!minReading || !relayOneIdRelated) {
                console.log('No relayOneIdRelated, or no minWarning setted: [please set one] ', plant.sensors[sensorIndex]);
                break;
            }
            if (reading < minReading && !relayOneWorking) {
                plant.sensors[sensorIndex] = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;
                if (whatsappWarningsOn)
                    (0, send_1.sendMessage)(phoneNumber, `Aviso: tu planta: ${setting.name} llego a ${reading}% de humedad, ya estamos regando!`);
                break;
            }
            else if (reading >= minReading && relayOneWorking) {
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone, false, true);
                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu planta: ${setting.name} llego a ${reading}% de humedad, ya terminamos de regar!`);
                break;
            }
            plant.sensors[sensorIndex] = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
            break;
        case types_1.HumiditySensorMode.IRRIGATE_SPECIFICT_AMOUNT_WITH_DOUBLE_ACTION:
            if (!minReading || !relayOneIdRelated || !relayTwoIdRelated) {
                console.log('No relayOneIdRelated, relayOneAutomatedStartedTime or no minWarning setted: ', plant.sensors[sensorIndex]);
                break;
            }
            if (irrigationInProgress) {
                plant.sensors[sensorIndex] = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
                return plant;
            }
            if (irrigationShouldStart) {
                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;
                // @ts-ignore
                plant[relayTwoIdRelated] = true;
                setting.relayTwoWorking = true;
                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                setting.relayTwoAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                plant.sensors[sensorIndex] = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu ${setting === null || setting === void 0 ? void 0 : setting.name} llego a ${reading}% de humedad, accionamos las 2 acciones.`);
                break;
            }
            else if (irrigationComplete) {
                // we just turn off the filling in watter system
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone, false, true);
                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;
                // @ts-ignore
                plant[relayTwoIdRelated] = false;
                setting.relayTwoWorking = false;
                setting.relayOneAutomatedStartedTime = '';
                setting.relayTwoAutomatedStartedTime = '';
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu ${setting.name} termino sus acciones en ${Number(relayOneAutomatedTimeToRun)} minutos.`);
                break;
            }
            setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
            break;
        case types_1.HumiditySensorMode.IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND:
            // modo semillero: detecta seco, abre reley 1 y cierra el reley 2, detecta humedad y cierra reley 1 y abre reley 2. // detecta seco, abre 1 y cierra 2  
            // must have minWarning and relayIdRelated variables setted!!!
            // relayTwoAutomatedTimeToRun SHOULD CONTAIN THE MINUTES TIME
            if (!minReading || !relayOneIdRelated) {
                console.log('No relayOneIdRelated or no minWarning setted: ', plant.sensors[sensorIndex]);
                break;
            }
            if (irrigationInProgress) {
                plant.sensors[sensorIndex] = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
                return plant;
            }
            if (irrigationShouldStart) {
                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;
                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                plant.sensors[sensorIndex] = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu ${setting === null || setting === void 0 ? void 0 : setting.name} llego a ${reading}% de humedad, ya estamos llenando la pileta con agua.`);
                break;
            }
            else if (irrigationComplete) {
                // we just turn off the filling in watter system
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone, false, true);
                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu semillero: ${setting.name} acaba de llenar la pileta con ${Number(relayOneAutomatedTimeToRun) * 2} litros agua.`);
                break;
            }
            setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
            break;
        case types_1.HumiditySensorMode.SEEDS_POOL_IRRIGATION:
            // modo semillero: detecta seco, abre reley 1 y cierra el reley 2, detecta humedad y cierra reley 1 y abre reley 2. // detecta seco, abre 1 y cierra 2  
            // must have minWarning and relayIdRelated variables setted!!!
            // relayTwoAutomatedTimeToRun SHOULD CONTAIN THE MINUTES TIME
            if (!minReading || !relayOneIdRelated || !maxReading || !relayTwoIdRelated || !relayOneAutomatedTimeToRun || !relayTwoAutomatedTimeToRun) {
                console.log('No relayOneIdRelated, or no minWarning setted: ', setting);
                break;
            }
            if (secondActionTimeInMins <= 0) {
                console.log('relayTwoAutomatedTimeToRun SHOULD CONTAIN THE NUMBER OF MINUTES TO BE THE RELAY ON ', setting);
                break;
            }
            if (irrigationInProgress) {
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
                return plant;
            }
            if (irrigationShouldStart) {
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu semillero: ${setting.name} llego a ${reading}% de humedad, ya estamos llenando la pileta con agua.`);
                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;
                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone, true, false);
                // we turn evacuation watering relay OFF just in case
                // @ts-ignore
                plant[relayTwoIdRelated] = false;
                setting.relayTwoWorking = false;
                break;
            }
            else if (irrigationComplete) {
                // we just turn off the filling in watter system
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu semillero: ${setting.name} acaba de llenar la pileta con ${Number(relayOneAutomatedTimeToRun) * 2} litros agua.`);
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone, false, true);
                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;
                break;
            }
            else if (relayTwoAsocciatedActionShouldStart) {
                if (!relayTwoIdRelated) {
                    console.log('No relayTwoIdRelated setted: ', reading);
                    break;
                }
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu semillero: ${setting.name} llego a ${reading}% de humedad, ya estamos evacuamos el agua.`);
                // we turn the exit watering relay ON
                // @ts-ignore
                plant[relayTwoIdRelated] = true;
                setting.relayTwoWorking = true;
                // we set the start time of the relay
                setting.relayTwoAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
                break;
            }
            else if (relayTwoAsocciatedActionComplete) {
                const whatsappMsg = `Aviso: tu semillero: ${setting.name} mantiene ${reading}% de humedad, y ya se termino de evacuar el agua en ${firstActionTimeInMins} minutos.`;
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, whatsappMsg, undefined, undefined);
                // we turn the exit watering relay OFF, and reset relayOneAutomatedTimeToRun (that has the start time of the relay)
                // @ts-ignore
                plant[relayTwoIdRelated] = false;
                setting.relayTwoWorking = false;
                setting.relayOneAutomatedStartedTime = '';
                setting.relayTwoAutomatedStartedTime = '';
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
                break;
            }
            setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
            break;
        case types_1.HumiditySensorMode.MANUAL:
            if (!relayOneIdRelated) {
                console.log('No relayOneIdRelated in manual mode. [please set one] ', setting);
                break;
            }
            // @ts-ignore
            const willStartWatering = !plant[relayOneIdRelated] && relayOneWorking;
            // @ts-ignore
            const willStopWatering = plant[relayOneIdRelated] && relayOneWorking;
            if (willStartWatering)
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone, true, false);
            else if (willStopWatering)
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone, false, true);
            else
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
            // @ts-ignore
            plant[relayOneIdRelated] = setting.relayOneWorking;
            break;
        case types_1.HumiditySensorMode.SCHEDULE_DOUBLE_ACTION:
        case types_1.HumiditySensorMode.SCHEDULE:
            scheduledOnTimes === null || scheduledOnTimes === void 0 ? void 0 : scheduledOnTimes.map((schedule, i) => {
                var _a;
                (_a = setting === null || setting === void 0 ? void 0 : setting.scheduledOnTimes) === null || _a === void 0 ? void 0 : _a.map((schedule, i) => {
                    if (schedule.daysToRepeat.includes(today) && schedule.enabled) {
                        const format = 'hh:mm:ss';
                        const currentTime = (0, moment_1.default)(new Date().toLocaleString('en-US', { timeZone }));
                        let startTime = (0, moment_1.default)(new Date().toLocaleString('en-US', { timeZone }));
                        let endTime = (0, moment_1.default)(new Date().toLocaleString('en-US', { timeZone }));
                        startTime = (0, moment_1.default)(schedule.startTime, format);
                        endTime = (0, moment_1.default)(schedule.endTime, format);
                        const isInsideTimeFrame = currentTime.isBetween(startTime, endTime);
                        // @ts-ignore
                        plant[relayOneIdRelated] = isInsideTimeFrame;
                        setting.relayOneWorking = isInsideTimeFrame;
                        if (mode === types_1.HumiditySensorMode.SCHEDULE_DOUBLE_ACTION) {
                            // @ts-ignore
                            plant[relayTwoIdRelated] = isInsideTimeFrame;
                            setting.relayTwoWorking = isInsideTimeFrame;
                        }
                    }
                    setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
                });
            });
            break;
        case types_1.LightSensorMode.MANUAL:
            if (!relayOneIdRelated) {
                console.log('No relayOneIdRelated in manual mode. [please set one] ', setting);
                break;
            }
            // @ts-ignore
            plant[relayOneIdRelated] = setting.relayOneWorking;
            setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
            break;
        case types_1.LightSensorMode.SCHEDULE:
            (_b = setting === null || setting === void 0 ? void 0 : setting.scheduledOnTimes) === null || _b === void 0 ? void 0 : _b.map((schedule, i) => {
                if (schedule.daysToRepeat.includes(today) && schedule.enabled) {
                    const format = 'hh:mm:ss';
                    const currentTime = (0, moment_1.default)(new Date().toLocaleString('en-US', { timeZone }));
                    let startTime = (0, moment_1.default)(new Date().toLocaleString('en-US', { timeZone }));
                    let endTime = (0, moment_1.default)(new Date().toLocaleString('en-US', { timeZone }));
                    startTime = (0, moment_1.default)(schedule.startTime, format);
                    endTime = (0, moment_1.default)(schedule.endTime, format);
                    // console.log('currentTime.isBetween(startTime, endTime):', currentTime.isBetween(startTime, endTime))
                    // console.log('startTime', startTime)
                    // console.log('endTime', endTime)
                    if (currentTime.isBetween(startTime, endTime)) {
                        // @ts-ignore
                        plant[relayOneIdRelated] = schedule.smartLight ? false : true;
                        setting.relayOneWorking = schedule.smartLight ? false : true;
                    }
                    else {
                        // @ts-ignore
                        plant[relayOneIdRelated] = false;
                        setting.relayOneWorking = false;
                    }
                }
            });
            setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
            break;
        case types_1.DistanceSensorMode.WHEN_EMPTY_ACTION_CUSTOM:
            if (!minReading || !relayOneIdRelated) {
                console.log('No relayOneIdRelated, relayOneAutomatedStartedTime or no minWarning setted: ', plant.sensors[sensorIndex]);
                break;
            }
            if (irrigationInProgress) {
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
                return plant;
            }
            if (actionShouldStart) {
                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;
                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone, true, false);
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu ${setting.name} llego a ${reading}% de capacidad, ya estamos activando la acción asociada.`);
                break;
            }
            else if (irrigationComplete) {
                // we just turn off the filling in watter system
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone, false, true);
                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;
                setting.relayOneAutomatedStartedTime = '';
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu ${setting.name} acaba de llegar a la capacidad máxima con ${Number(relayOneAutomatedTimeToRun) * 2} litros agua.`);
                break;
            }
            setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
            break;
        case types_1.DistanceSensorMode.WHEN_EMPTY_ACTION_AUTOMATED:
            if (!minReading || !relayOneIdRelated) {
                console.log('No relayOneIdRelated, or no minWarning setted: ', plant.sensors[sensorIndex]);
                break;
            }
            const maxCapacityReached = reading <= maxReading && relayOneAutomatedStartedTime.length > 0;
            if (irrigationInProgress) {
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
                return plant;
            }
            if (actionShouldStart) {
                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;
                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone, true, false);
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu ${setting.name} llego a ${reading}% de capacidad, ya estamos activando la acción asociada.`);
                break;
            }
            else if (maxCapacityReached) {
                // we just turn off the filling in watter system
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone, false, true);
                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu ${setting.name} acaba de llegar a la capacidad máxima con ${Number(relayOneAutomatedTimeToRun) * 2} litros agua.`);
                break;
            }
            setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
            break;
        case types_1.DistanceSensorMode.WHEN_FULL_ACTION_CUSTOM:
            if (!minReading || !relayOneIdRelated || !relayOneAutomatedStartedTime) {
                console.log('No relayOneIdRelated, relayOneAutomatedStartedTime or no minWarning setted: ', plant.sensors[sensorIndex]);
                break;
            }
            if (irrigationInProgress) {
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
                return plant;
            }
            if (maxLevelReached) {
                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;
                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone, true);
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu ${setting.name} acaba de llegar a la capacidad máxima con ${Number(relayOneAutomatedTimeToRun) * 2} litros agua.`);
                break;
            }
            else if (relayTwoAsocciatedActionShouldStart) {
                if (!relayTwoIdRelated) {
                    console.log('No relayTwoIdRelated setted: ', reading);
                    break;
                }
                // @ts-ignore
                plant[relayTwoIdRelated] = true;
                setting.relayTwoWorking = true;
                // we set the start time of the relay
                setting.relayTwoAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu ${setting.name} llego a ${reading}% de capacidad, ya estamos activando la acción asociada.`);
                break;
            }
            else if (relayTwoAsocciatedActionComplete) {
                const whatsappMsg = `Aviso: la acción asociada a tu ${setting.name} a sido completada.`;
                // we turn the exit watering relay OFF, and reset relayOneAutomatedTimeToRun (that has the start time of the relay)
                // @ts-ignore
                plant[relayTwoIdRelated] = false;
                setting.relayTwoWorking = false;
                setting.relayOneAutomatedStartedTime = '';
                setting.relayTwoAutomatedStartedTime = '';
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, whatsappMsg, undefined, undefined);
                break;
            }
            setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
            break;
        case types_1.DistanceSensorMode.WHEN_FULL_ACTION_AUTOMATED:
            if (!minReading || !relayOneIdRelated || !relayOneAutomatedStartedTime) {
                console.log('No relayOneIdRelated, relayOneAutomatedStartedTime or no minWarning setted: ', plant.sensors[sensorIndex]);
                break;
            }
            if (irrigationInProgress) {
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
                return plant;
            }
            if (maxLevelReached) {
                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                setting.relayOneWorking = true;
                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone, true);
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu ${setting.name} llego a ${reading}% de capacidad. Activamos el dispositivo asociado`);
                break;
            }
            else if (minLevelReached) {
                // we just turn off the filling in watter system
                setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone, false, true);
                // @ts-ignore
                plant[relayOneIdRelated] = false;
                setting.relayOneWorking = false;
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu ${setting.name} acaba de llegar a la capacidad minima.`);
                break;
            }
            setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
            break;
        case types_1.DistanceSensorMode.MAX_WARNING:
            setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
            if (maxLevelReached && !setting.relayOneAutomatedStartedTime.length) {
                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu ${setting.name} llego a ${reading}% de capacidad.`);
                break;
            }
            if (timeInMinutesThatShouldntNotify > currentTimeWithoutNotifing) {
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu ${setting.name} llego a ${reading}% de capacidad.`);
                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                break;
            }
        case types_1.DistanceSensorMode.MIN_WARNING:
            setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading, timeZone);
            if (minLevelReached && !setting.relayOneAutomatedStartedTime.length) {
                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu ${setting.name} llego a ${reading}% de capacidad.`);
                break;
            }
            if (timeInMinutesThatShouldntNotify > currentTimeWithoutNotifing) {
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu ${setting.name} llego a ${reading}% de capacidad.`);
                setting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone });
                break;
            }
        default:
            break;
    }
    return plant;
});
exports.checkSensor = checkSensor;
