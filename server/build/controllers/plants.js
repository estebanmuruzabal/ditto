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
exports.checkSensors = exports.checkAirHumidityAndTempeture = exports.checkLightSensor = exports.checkSoilWarnings = void 0;
const moment_1 = __importDefault(require("moment"));
const __1 = require("..");
const types_1 = require("../lib/types");
const send_1 = require("./send");
const checkSoilWarnings = (plant, soilHumiditySetting, phoneNumber, currentSoilHumidity) => __awaiter(void 0, void 0, void 0, function* () {
    const minHumiditySetted = !isNaN(Number(soilHumiditySetting === null || soilHumiditySetting === void 0 ? void 0 : soilHumiditySetting.minWarning)) ? Number(soilHumiditySetting === null || soilHumiditySetting === void 0 ? void 0 : soilHumiditySetting.minWarning) : null;
    const maxHumiditySetted = !isNaN(Number(soilHumiditySetting === null || soilHumiditySetting === void 0 ? void 0 : soilHumiditySetting.maxWarning)) ? Number(soilHumiditySetting === null || soilHumiditySetting === void 0 ? void 0 : soilHumiditySetting.maxWarning) : null;
    const relayOneIdRelated = soilHumiditySetting.relayOneIdRelated;
    const relayTwoIdRelated = soilHumiditySetting.relayTwoIdRelated;
    console.log('soilHumiditySetting being process:', soilHumiditySetting);
    switch (soilHumiditySetting.mode) {
        case types_1.HumiditySensorMode.IRRIGATE_ON_DEMAND:
            // modo riego solo cuando falta agua con 1 solo reley y cierra cuando detecta humedad,
            // must have maxHumiditySetted, minWarning and relayIdRelated variables setted!!!
            // if (relayOneIdRelated !== 'isRaleyOneOn')
            if (!minHumiditySetted || !relayOneIdRelated || !maxHumiditySetted) {
                console.log('No relayOneIdRelated, or no minWarning setted: [please set one] ', soilHumiditySetting);
                break;
            }
            if (currentSoilHumidity < minHumiditySetted && !soilHumiditySetting.relayOneWorking) {
                const whatsappMsg = `Aviso: tu planta: ${plant.name} llego a ${currentSoilHumidity}% de humedad, ya estamos regando!`;
                yield (0, send_1.sendMessage)(__1.client, phoneNumber, whatsappMsg, undefined, undefined);
                soilHumiditySetting === null || soilHumiditySetting === void 0 ? void 0 : soilHumiditySetting.logs.push({
                    humidity: currentSoilHumidity,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }),
                    startedWatering: true,
                });
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                soilHumiditySetting.relayOneWorking = true;
                break;
            }
            else if (currentSoilHumidity >= maxHumiditySetted && soilHumiditySetting.relayOneWorking) {
                const whatsappMsg = `Aviso: tu planta: ${plant.name} llego a ${currentSoilHumidity}% de humedad, ya terminamos de regar!`;
                yield (0, send_1.sendMessage)(__1.client, phoneNumber, whatsappMsg, undefined, undefined);
                soilHumiditySetting === null || soilHumiditySetting === void 0 ? void 0 : soilHumiditySetting.logs.push({
                    humidity: currentSoilHumidity,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }),
                    finishedWatering: true,
                });
                // @ts-ignore
                plant[relayOneIdRelated] = false;
                soilHumiditySetting.relayOneWorking = false;
                break;
            }
            soilHumiditySetting === null || soilHumiditySetting === void 0 ? void 0 : soilHumiditySetting.logs.push({
                humidity: currentSoilHumidity,
                timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })
            });
            break;
        case types_1.HumiditySensorMode.SEEDS_POOL_IRRIGATION:
            // modo semillero: detecta seco, abre reley 1 y cierra el reley 2, detecta humedad y cierra reley 1 y abre reley 2. // detecta seco, abre 1 y cierra 2  
            // must have minWarning and relayIdRelated variables setted!!!
            // relayTwoAutomatedTimeToRun SHOULD CONTAIN THE MINUTES TIME
            const timeToEvacuateInMins = Number(soilHumiditySetting === null || soilHumiditySetting === void 0 ? void 0 : soilHumiditySetting.relayTwoAutomatedTimeToRun);
            const timeToIrrigateInMins = Number(soilHumiditySetting === null || soilHumiditySetting === void 0 ? void 0 : soilHumiditySetting.relayOneAutomatedTimeToRun);
            if (!minHumiditySetted || !relayOneIdRelated || !maxHumiditySetted) {
                console.log('No relayOneIdRelated, or no minWarning setted: ', soilHumiditySetting);
                break;
            }
            if (timeToEvacuateInMins <= 0) {
                console.log('relayTwoAutomatedTimeToRun SHOULD CONTAIN THE NUMBER OF MINUTES TO BE THE RELAY ON ', soilHumiditySetting);
                break;
            }
            const currentTime = (0, moment_1.default)(new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }));
            const startedIrrigationTime = (0, moment_1.default)(soilHumiditySetting.relayOneAutomatedStartedTime);
            const startedEvacuationTime = (0, moment_1.default)(soilHumiditySetting.relayTwoAutomatedStartedTime);
            const currentIrrigationMins = currentTime === null || currentTime === void 0 ? void 0 : currentTime.diff(startedIrrigationTime, 'minutes');
            const currentEvacuationMins = currentTime === null || currentTime === void 0 ? void 0 : currentTime.diff(startedEvacuationTime, 'minutes');
            const irrigationShouldStart = currentSoilHumidity < minHumiditySetted && !soilHumiditySetting.relayOneWorking && !!!soilHumiditySetting.relayOneAutomatedStartedTime.length;
            const irrigationInProgress = currentIrrigationMins >= 0 && currentIrrigationMins < timeToIrrigateInMins;
            const irrigationComplete = currentIrrigationMins >= timeToIrrigateInMins && soilHumiditySetting.relayOneWorking;
            const evacuationShouldStart = currentSoilHumidity >= maxHumiditySetted && !soilHumiditySetting.relayTwoWorking && soilHumiditySetting.relayOneAutomatedStartedTime.length > 0;
            const evacuationComplete = currentEvacuationMins >= timeToEvacuateInMins && !!soilHumiditySetting.relayTwoAutomatedStartedTime.length;
            console.log('irrigationComplete', irrigationComplete);
            console.log('currentEvacuationMins', currentEvacuationMins);
            // console.log('soilHumiditySetting.relayOneAutomatedStartedTime', soilHumiditySetting.relayOneAutomatedStartedTime)
            // console.log('!!!soilHumiditySetting.relayTwoAutomatedStartedTime.length', !!soilHumiditySetting.relayTwoAutomatedStartedTime.length)
            // console.log('soilHumiditySetting.relayTwoAutomatedStartedTime.length', soilHumiditySetting.relayTwoAutomatedStartedTime.length)
            if (irrigationInProgress) {
                soilHumiditySetting === null || soilHumiditySetting === void 0 ? void 0 : soilHumiditySetting.logs.push({
                    humidity: currentSoilHumidity,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })
                });
                return plant;
            }
            if (irrigationShouldStart) {
                const whatsappMsg = `Aviso: tu semillero: ${plant.name} llego a ${currentSoilHumidity}% de humedad, ya estamos llenando la pileta con agua.`;
                if (phoneNumber)
                    yield (0, send_1.sendMessage)(__1.client, phoneNumber, whatsappMsg, undefined, undefined);
                // we turn the filling in watering relay ON
                // @ts-ignore
                plant[relayOneIdRelated] = true;
                soilHumiditySetting.relayOneWorking = true;
                soilHumiditySetting.relayOneAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });
                soilHumiditySetting === null || soilHumiditySetting === void 0 ? void 0 : soilHumiditySetting.logs.push({
                    humidity: currentSoilHumidity,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }),
                    startedWatering: true,
                });
                // we turn evacuation watering relay OFF just in case
                // @ts-ignore
                plant[relayTwoIdRelated] = false;
                soilHumiditySetting.relayTwoWorking = false;
                break;
            }
            else if (irrigationComplete) {
                // we just turn off the filling in watter system
                const whatsappMsg = `Aviso: tu semillero: ${plant.name} acaba de llenar la pileta con ${Number(soilHumiditySetting.relayOneAutomatedTimeToRun) * 2} litros agua.`;
                if (phoneNumber)
                    yield (0, send_1.sendMessage)(__1.client, phoneNumber, whatsappMsg, undefined, undefined);
                soilHumiditySetting === null || soilHumiditySetting === void 0 ? void 0 : soilHumiditySetting.logs.push({
                    humidity: currentSoilHumidity,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }),
                    finishedWatering: true,
                });
                // @ts-ignore
                plant[relayOneIdRelated] = false;
                soilHumiditySetting.relayOneWorking = false;
                break;
            }
            else if (evacuationShouldStart) {
                if (!relayTwoIdRelated) {
                    console.log('No relayTwoIdRelated setted: ', soilHumiditySetting);
                    break;
                }
                const whatsappMsg = `Aviso: tu semillero: ${plant.name} llego a ${currentSoilHumidity}% de humedad, ya estamos evacuamos el agua.`;
                if (phoneNumber)
                    yield (0, send_1.sendMessage)(__1.client, phoneNumber, whatsappMsg, undefined, undefined);
                // we turn the exit watering relay ON
                // @ts-ignore
                plant[relayTwoIdRelated] = true;
                soilHumiditySetting.relayTwoWorking = true;
                // we set the start time of the relay
                soilHumiditySetting.relayTwoAutomatedStartedTime = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });
                soilHumiditySetting === null || soilHumiditySetting === void 0 ? void 0 : soilHumiditySetting.logs.push({
                    humidity: currentSoilHumidity,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })
                });
                break;
            }
            else if (evacuationComplete) {
                const whatsappMsg = `Aviso: tu semillero: ${plant.name} mantiene ${currentSoilHumidity}% de humedad, y ya se termino de evacuar el agua en ${timeToIrrigateInMins} minutos.`;
                if (phoneNumber)
                    yield (0, send_1.sendMessage)(__1.client, phoneNumber, whatsappMsg, undefined, undefined);
                // we turn the exit watering relay OFF, and reset relayOneAutomatedTimeToRun (that has the start time of the relay)
                // @ts-ignore
                plant[relayTwoIdRelated] = false;
                soilHumiditySetting.relayTwoWorking = false;
                soilHumiditySetting.relayOneAutomatedStartedTime = '';
                soilHumiditySetting.relayTwoAutomatedStartedTime = '';
                soilHumiditySetting === null || soilHumiditySetting === void 0 ? void 0 : soilHumiditySetting.logs.push({
                    humidity: currentSoilHumidity,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })
                });
                break;
            }
            soilHumiditySetting === null || soilHumiditySetting === void 0 ? void 0 : soilHumiditySetting.logs.push({
                humidity: currentSoilHumidity,
                timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })
            });
            break;
        case types_1.HumiditySensorMode.MANUAL:
            if (!relayOneIdRelated) {
                console.log('No relayOneIdRelated in manual mode. [please set one] ', soilHumiditySetting);
                break;
            }
            // @ts-ignore
            const willStartWatering = !plant[relayOneIdRelated] && soilHumiditySetting.relayOneWorking;
            // @ts-ignore
            const willStopWatering = plant[relayOneIdRelated] && soilHumiditySetting.relayOneWorking;
            if (willStartWatering) {
                soilHumiditySetting === null || soilHumiditySetting === void 0 ? void 0 : soilHumiditySetting.logs.push({
                    humidity: currentSoilHumidity,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }),
                    startedWatering: true
                });
            }
            else if (willStopWatering) {
                soilHumiditySetting === null || soilHumiditySetting === void 0 ? void 0 : soilHumiditySetting.logs.push({
                    humidity: currentSoilHumidity,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }),
                    finishedWatering: true
                });
            }
            else {
                soilHumiditySetting === null || soilHumiditySetting === void 0 ? void 0 : soilHumiditySetting.logs.push({
                    humidity: currentSoilHumidity,
                    timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }),
                });
            }
            // @ts-ignore
            plant[relayOneIdRelated] = soilHumiditySetting.relayOneWorking;
            break;
        case types_1.HumiditySensorMode.SCHEDULE:
            // console.log('HumiditySensorMode.SCHEDULE entered')
            break;
        default:
            // const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
            // const lightSchedule = {
            //     daysToRepeat: [weekDays[0], weekDays[2], weekDays[3]],
            //     startTime: '00:00',
            //     endTime: '23:59',
            //     enabled: true,
            //     smartLight: false
            // }
            // const b = {
            //     daysToRepeat: [weekDays[0], weekDays[2], weekDays[3]]
            // }
            // const onTimes = [a, b]
            console.log('defaulted entered');
            //set notification schedule
            // [mon] tue wed thu ...
            // 00:00 --- 07:15
            // 15:15 ----- 23:59
            // Add time Schedule (button)
            // (when pressing the button you see this pop up)
            // Add time Schedule
            //start time: 00:00
            //end time: 23:59
            // repeat: (touch and you can see all days of the week to select/deselect) press ok, and original view is seeing the selected days
            // also the smart option for when is no light and there should be light
            break;
    }
    return plant;
});
exports.checkSoilWarnings = checkSoilWarnings;
const checkLightSensor = (plant, lightSettings, phoneNumber, light) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    console.log('lightSettings:', lightSettings);
    console.log('light:', light);
    // const minHumiditySetted = !isNaN(Number(soilHumiditySetting?.minWarning)) ? Number(soilHumiditySetting?.minWarning) : null;
    // const maxHumiditySetted = !isNaN(Number(soilHumiditySetting?.maxWarning)) ? Number(soilHumiditySetting?.maxWarning) : null;
    const relayOneIdRelated = lightSettings.relayOneIdRelated;
    // const relayTwoIdRelated: any = soilHumiditySetting.relayTwoIdRelated;
    // console.log('soilHumiditySetting being process:', soilHumiditySetting);
    switch (lightSettings.mode) {
        case types_1.HumiditySensorMode.MANUAL:
            if (!relayOneIdRelated) {
                console.log('No relayOneIdRelated in manual mode. [please set one] ', lightSettings);
                break;
            }
            // @ts-ignore
            plant[relayOneIdRelated] = lightSettings.relayOneWorking;
            break;
        case types_1.LightSensorMode.SCHEDULE:
        case types_1.LightSensorMode.SMART_SCHEDULE:
            moment_1.default.locale('es');
            const today = (0, moment_1.default)(new Date(), 'MM/D/YYYY').day();
            const currentTime = (0, moment_1.default)(new Date()).format('hh:mm:ss');
            {
                (_a = lightSettings === null || lightSettings === void 0 ? void 0 : lightSettings.scheduledOnTimes) === null || _a === void 0 ? void 0 : _a.map((schedule, i) => {
                    if (schedule.daysToRepeat.includes(today.toString().toUpperCase())) {
                        const startTime = (0, moment_1.default)(new Date(schedule.startTime).toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })).format('hh:mm:ss');
                        const endTime = (0, moment_1.default)(new Date(schedule.endTime).toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })).format('hh:mm:ss');
                        const currentTime = (0, moment_1.default)(new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })).format('hh:mm:ss');
                        // @ts-ignore
                        if (currentTime.isBetween(startTime, endTime)) {
                            // @ts-ignore
                            plant[relayOneIdRelated] = schedule.smartLight ? false : true;
                        }
                    }
                });
            }
            break;
        default:
            console.log('defaulted entered');
            break;
    }
    return plant;
});
exports.checkLightSensor = checkLightSensor;
const checkAirHumidityAndTempeture = (plant, phoneNumber) => __awaiter(void 0, void 0, void 0, function* () {
    // implement checks
    return plant;
});
exports.checkAirHumidityAndTempeture = checkAirHumidityAndTempeture;
const checkSensors = (plant, phoneNumber) => __awaiter(void 0, void 0, void 0, function* () {
    var _b, _c, _d;
    // make method to see how much water is used based on time that relay is ON       
    const amountOfWater = (_b = plant.distanceSensorSettings) === null || _b === void 0 ? void 0 : _b.relayOneAutomatedTimeToRun;
    const minWarningDistance = !isNaN(Number((_c = plant === null || plant === void 0 ? void 0 : plant.distanceSensorSettings) === null || _c === void 0 ? void 0 : _c.minWarning)) ? Number(plant === null || plant === void 0 ? void 0 : plant.distanceSensorSettings.minWarning) : null;
    const maxWarningDistance = !isNaN(Number((_d = plant === null || plant === void 0 ? void 0 : plant.distanceSensorSettings) === null || _d === void 0 ? void 0 : _d.maxWarning)) ? Number(plant === null || plant === void 0 ? void 0 : plant.distanceSensorSettings.maxWarning) : null;
    const relayOneIdRelatedName = plant.distanceSensorSettings.relayOneIdRelated;
    const relayTwoIdRelatedName = plant.distanceSensorSettings.relayTwoIdRelated;
    // if distance is equal or grater than maxWarningDistance, and relayMaxWorking is not ON, meaning is not alreado working, we turn on maxWarningRelayIdRelatedName
    if (plant.distance_cm >= maxWarningDistance && !plant.distanceSensorSettings.relayOneWorking) {
        // const whatsappMsg = `Aviso: tu ${plant.name} llego a ${plant.distance_cm}% de humedad, ya la estamos regando con ${amountOfWater}!`;
        // if (phoneNumber) await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);
        // @ts-ignore
        plant[relayOneIdRelatedName] = true;
        plant.distanceSensorSettings.relayOneWorking = true;
        // @ts-ignore
        plant[relayTwoIdRelatedName] = false;
        plant.distanceSensorSettings.relayTwoWorking = false;
        // if distance is lower or equal than minWarningDistance, and relayMinWorking wasnt ON but relayMaxWorking was ON, then we turn on the off maxWarningRelayIdRelatedName and turn ON minWarningRelayIdRelatedName and relayMinWorking to true
    }
    else if (plant.distance_cm <= minWarningDistance && !plant.distanceSensorSettings.relayTwoWorking && plant.distanceSensorSettings.relayOneWorking) {
        // const whatsappMsg = `Aviso: tu ${plant.name} llego a ${currentSoilHumidity}% de humedad, ya terminamos de regar!`;
        // if (phoneNumber) await sendMessage(client, phoneNumber, whatsappMsg, undefined, undefined);
        // @ts-ignore
        plant[relayOneIdRelatedName] = false;
        plant.distanceSensorSettings.relayOneWorking = false;
        // @ts-ignore
        plant[relayTwoIdRelatedName] = true;
        plant.distanceSensorSettings.relayTwoWorking = true;
        // @ts-ignore
        // plant.distanceSensorSettings.relayMaxAutomatedOnTime = '4 litros';
        // @ts-ignore
        plant.distanceSensorSettings.relayMinAutomatedOnTime = '4 litros';
    }
    else {
        // aca tengo que ver que mandar cuando esta trabajando el arduino 
    }
    return plant;
});
exports.checkSensors = checkSensors;
