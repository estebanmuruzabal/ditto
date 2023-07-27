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
const moment_1 = __importDefault(require("moment"));
const types_1 = require("../lib/types");
const send_1 = require("./send");
const logsUtils_1 = require("../utils/logsUtils");
const checkSensor = (plant, setting, phoneNumber) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    let { minWarning, maxWarning, relayOneIdRelated, relayTwoIdRelated, whatsappWarningsOn, mode, reading, logs, relayOneWorking, relayOneAutomatedTimeToRun, relayTwoAutomatedTimeToRun, relayOneAutomatedStartedTime, relayTwoAutomatedStartedTime, relayTwoWorking, scheduledOnTimes } = setting;
    const sensorReadingName = (_a = setting.settingType) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase();
    // @ts-ignore
    reading = plant[sensorReadingName];
    setting.reading = reading;
    const minReading = !isNaN(Number(minWarning)) ? Number(minWarning) : null;
    const maxReading = !isNaN(Number(maxWarning)) ? Number(maxWarning) : null;
    moment_1.default.locale('es');
    const today = (0, moment_1.default)(new Date(), 'MM/D/YYYY').day();
    const currentTime = (0, moment_1.default)(new Date()).format('hh:mm:ss');
    console.log('setting being process:', setting);
    switch (mode) {
        case types_1.HumiditySensorMode.IRRIGATE_ON_DEMAND:
            // modo riego solo cuando falta agua con 1 solo reley y cierra cuando detecta humedad,
            // must have maxReading, minWarning and relayIdRelated variables setted!!!
            if (!minReading || !relayOneIdRelated || !maxReading) {
                console.log('No relayOneIdRelated, or no minWarning setted: [please set one] ', setting);
                break;
            }
            if (reading < minReading && !relayOneWorking) {
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu planta: ${plant.name} llego a ${reading}% de humedad, ya estamos regando!`);
                logs.push({ reading, timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }), started: true });
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                relayOneWorking = true;
                break;
            }
            else if (reading >= maxReading && relayOneWorking) {
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu planta: ${plant.name} llego a ${reading}% de humedad, ya terminamos de regar!`);
                logs.push({ reading, timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }), finished: true });
                // @ts-ignore
                plant[relayOneIdRelated] = false;
                relayOneWorking = false;
                break;
            }
            setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading);
            break;
        case types_1.HumiditySensorMode.SEEDS_POOL_IRRIGATION:
            // modo semillero: detecta seco, abre reley 1 y cierra el reley 2, detecta humedad y cierra reley 1 y abre reley 2. // detecta seco, abre 1 y cierra 2  
            // must have minWarning and relayIdRelated variables setted!!!
            // relayTwoAutomatedTimeToRun SHOULD CONTAIN THE MINUTES TIME
            const timeToEvacuateInMins = Number(relayTwoAutomatedTimeToRun);
            const timeToIrrigateInMins = Number(relayOneAutomatedTimeToRun);
            if (!minReading || !relayOneIdRelated || !maxReading) {
                console.log('No relayOneIdRelated, or no minWarning setted: ', setting);
                break;
            }
            if (timeToEvacuateInMins <= 0) {
                console.log('relayTwoAutomatedTimeToRun SHOULD CONTAIN THE NUMBER OF MINUTES TO BE THE RELAY ON ', setting);
                break;
            }
            const currentTime = (0, moment_1.default)(new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }));
            const startedIrrigationTime = (0, moment_1.default)(relayOneAutomatedStartedTime);
            const startedEvacuationTime = (0, moment_1.default)(relayTwoAutomatedStartedTime);
            const currentIrrigationMins = currentTime === null || currentTime === void 0 ? void 0 : currentTime.diff(startedIrrigationTime, 'minutes');
            const currentEvacuationMins = currentTime === null || currentTime === void 0 ? void 0 : currentTime.diff(startedEvacuationTime, 'minutes');
            const irrigationShouldStart = reading < minReading && !relayOneWorking && !!!relayOneAutomatedStartedTime.length;
            const irrigationInProgress = currentIrrigationMins >= 0 && currentIrrigationMins < timeToIrrigateInMins;
            const irrigationComplete = currentIrrigationMins >= timeToIrrigateInMins && relayOneWorking;
            const evacuationShouldStart = reading >= maxReading && !relayTwoWorking && relayOneAutomatedStartedTime.length > 0;
            const evacuationComplete = currentEvacuationMins >= timeToEvacuateInMins && !!relayTwoAutomatedStartedTime.length;
            console.log('irrigationComplete', irrigationComplete);
            console.log('currentEvacuationMins', currentEvacuationMins);
            if (irrigationInProgress) {
                logs.push({ reading, timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }) });
                return plant;
            }
            if (irrigationShouldStart) {
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu semillero: ${plant.name} llego a ${reading}% de humedad, ya estamos llenando la pileta con agua.`);
                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                relayOneWorking = true;
                relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });
                logs.push({ reading, timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }), started: true });
                // we turn evacuation watering relay OFF just in case
                // @ts-ignore
                plant[relayTwoIdRelated] = false;
                relayTwoWorking = false;
                break;
            }
            else if (irrigationComplete) {
                // we just turn off the filling in watter system
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu semillero: ${plant.name} acaba de llenar la pileta con ${Number(relayOneAutomatedTimeToRun) * 2} litros agua.`);
                logs.push({ reading, timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }), finished: true });
                // @ts-ignore
                plant[relayOneIdRelated] = false;
                relayOneWorking = false;
                break;
            }
            else if (evacuationShouldStart) {
                if (!relayTwoIdRelated) {
                    console.log('No relayTwoIdRelated setted: ', reading);
                    break;
                }
                if (whatsappWarningsOn)
                    yield (0, send_1.sendMessage)(phoneNumber, `Aviso: tu semillero: ${plant.name} llego a ${reading}% de humedad, ya estamos evacuamos el agua.`);
                // we turn the exit watering relay ON
                // @ts-ignore
                plant[relayTwoIdRelated] = true;
                relayTwoWorking = true;
                // we set the start time of the relay
                relayTwoAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });
                logs.push({ reading, timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }) });
                break;
            }
            else if (evacuationComplete) {
                const whatsappMsg = `Aviso: tu semillero: ${plant.name} mantiene ${reading}% de humedad, y ya se termino de evacuar el agua en ${timeToIrrigateInMins} minutos.`;
                if (phoneNumber)
                    yield (0, send_1.sendMessage)(phoneNumber, whatsappMsg, undefined, undefined);
                // we turn the exit watering relay OFF, and reset relayOneAutomatedTimeToRun (that has the start time of the relay)
                // @ts-ignore
                plant[relayTwoIdRelated] = false;
                relayTwoWorking = false;
                relayOneAutomatedStartedTime = '';
                relayTwoAutomatedStartedTime = '';
                logs.push({
                    reading,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })
                });
                break;
            }
            setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading);
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
            if (willStartWatering) {
                logs.push({
                    reading,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }),
                    started: true
                });
            }
            else if (willStopWatering) {
                logs.push({
                    reading,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }),
                    finished: true
                });
            }
            setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading);
            // @ts-ignore
            plant[relayOneIdRelated] = setting.relayOneWorking;
            break;
        case types_1.HumiditySensorMode.SCHEDULE:
            scheduledOnTimes === null || scheduledOnTimes === void 0 ? void 0 : scheduledOnTimes.map((schedule, i) => {
                if (schedule.daysToRepeat.includes(today.toString().toUpperCase())) {
                    const startTime = (0, moment_1.default)(new Date(schedule.startTime).toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })).format('hh:mm:ss');
                    const endTime = (0, moment_1.default)(new Date(schedule.endTime).toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })).format('hh:mm:ss');
                    // const currentTime = moment(new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })).format('hh:mm:ss');
                    // @ts-ignore
                    plant[relayOneIdRelated] = currentTime1.isBetween(startTime, endTime);
                }
            });
            break;
        case types_1.HumiditySensorMode.MANUAL:
            if (!relayOneIdRelated) {
                console.log('No relayOneIdRelated in manual mode. [please set one] ', setting);
                break;
            }
            // @ts-ignore
            plant[relayOneIdRelated] = setting.relayOneWorking;
            setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading);
            break;
        case types_1.LightSensorMode.SCHEDULE:
        case types_1.LightSensorMode.SMART_SCHEDULE:
            (_b = setting === null || setting === void 0 ? void 0 : setting.scheduledOnTimes) === null || _b === void 0 ? void 0 : _b.map((schedule, i) => {
                if (schedule.daysToRepeat.includes(today.toString().toUpperCase())) {
                    const startTime = (0, moment_1.default)(new Date(schedule.startTime).toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })).format('hh:mm:ss');
                    const endTime = (0, moment_1.default)(new Date(schedule.endTime).toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })).format('hh:mm:ss');
                    // @ts-ignore
                    if (currentTime.isBetween(startTime, endTime)) {
                        // @ts-ignore
                        plant[relayOneIdRelated] = schedule.smartLight ? false : true;
                    }
                }
            });
            setting = (0, logsUtils_1.logTimeStampWithTimeFilter)(setting, reading);
            break;
        // case checkSensors.distance:
        //     const amountOfWater = plant.distanceSensorSettings?.relayOneAutomatedTimeToRun;
        //     const minWarningDistance: any = !isNaN(Number(plant?.distanceSensorSettings?.minWarning)) ? Number(plant?.distanceSensorSettings.minWarning) : null;
        //     const maxWarningDistance: any = !isNaN(Number(plant?.distanceSensorSettings?.maxWarning)) ? Number(plant?.distanceSensorSettings.maxWarning) : null;
        //     const relayOneIdRelatedName: any = plant.distanceSensorSettings.relayOneIdRelated;
        //     const relayTwoIdRelatedName: any = plant.distanceSensorSettings.relayTwoIdRelated;
        //     // if distance is equal or grater than maxWarningDistance, and relayMaxWorking is not ON, meaning is not alreado working, we turn on maxWarningRelayIdRelatedName
        //     if (plant.distance_cm >= maxWarningDistance && !plant.distanceSensorSettings.relayOneWorking) {
        //         // const whatsappMsg = `Aviso: tu ${plant.name} llego a ${plant.distance_cm}% de humedad, ya la estamos regando con ${amountOfWater}!`;
        //         // if (phoneNumber) await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);
        //         // @ts-ignore
        //         plant[relayOneIdRelatedName] = true;
        //         plant.distanceSensorSettings.relayOneWorking = true;
        //         // @ts-ignore
        //         plant[relayTwoIdRelatedName] = false;
        //         plant.distanceSensorSettings.relayTwoWorking = false;
        //         // if distance is lower or equal than minWarningDistance, and relayMinWorking wasnt ON but relayMaxWorking was ON, then we turn on the off maxWarningRelayIdRelatedName and turn ON minWarningRelayIdRelatedName and relayMinWorking to true
        //     } else if (plant.distance_cm <= minWarningDistance && !plant.distanceSensorSettings.relayTwoWorking && plant.distanceSensorSettings.relayOneWorking) {
        //         // const whatsappMsg = `Aviso: tu ${plant.name} llego a ${reading}% de humedad, ya terminamos de regar!`;
        //         // if (phoneNumber) await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);
        //         // @ts-ignore
        //         plant[relayOneIdRelatedName] = false;
        //         plant.distanceSensorSettings.relayOneWorking = false;
        //         // @ts-ignore
        //         plant[relayTwoIdRelatedName] = true;
        //         plant.distanceSensorSettings.relayTwoWorking = true;
        //         // @ts-ignore
        //         // plant.distanceSensorSettings.relayMaxAutomatedOnTime = '4 litros';
        //         // @ts-ignore
        //         plant.distanceSensorSettings.relayMinAutomatedOnTime = '4 litros';
        //     } else {
        //     // aca tengo que ver que mandar cuando esta trabajando el arduino 
        //     }
        //     return plant;
        default:
            console.log('defaulted!!! papa');
            break;
    }
    return plant;
});
exports.checkSensor = checkSensor;
