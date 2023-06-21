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
exports.startWorking = exports.stopWorking = exports.getStuffMainMenuButtons = exports.getGrowerMainMenuButtons = exports.getGrowerSensorList = exports.getSensorsMenuList = void 0;
const moment_1 = __importDefault(require("moment"));
const api_1 = require("../../api");
const types_1 = require("../types");
const whatsAppUtils_1 = require("./whatsAppUtils");
const getSensorsMenuList = (resData, user, plant, trigger, title, buttonText) => {
    //  dependiendo del modo, 
    //     lectura: (desconectado/20% humedad)
    // sestear minima/maxima (warn whatsapp),
    //         Asociar relay: (“nombre del relay asociado”/ “no hay relay asociado, asocial uno“)
    const menuRows = [{
            title: 'Configurar alerta maxima',
            description: 'Recibis un whatsapp cuando sobrepase este limite. Code: 1A',
            id: 'test-4',
        }, {
            title: 'Configurar alerta minima',
            description: 'Recibis un whatsapp cuando baje de este limite. Code: 1B',
            id: 'test-2',
        }, {
            title: 'Asociar relay',
            description: '. Code: 1C',
            id: 'test-423',
        }, {
            title: 'Prender relay',
            description: 'Recibis un whatsapp cuando sobrepase este limite. Code: 1D',
            id: 'test-4455',
        }, {
            title: 'Apagar relay',
            description: 'Recibis un whatsapp cuando sobrepase este limite. Code: 1E',
            id: 'test11-4',
        }];
    const listSections = (0, whatsAppUtils_1.getSectionWith)('Configuracion', menuRows);
    resData.replyMessage = (0, whatsAppUtils_1.getListButtons)(`Invernadero 1

         Sensor humedad 1: ${plant.soilHumidity1}
        Modo:  (ninguno/manual)
         Sensor humedad 2: ${plant.soilHumidity2}
         Modo:  (ninguno/manual)

         Sensor humedad de ambiente: 
         Modo: Ninguno

         Sensor temperatura de ambiente: 
         Modo: Ninguno

         Editar configuracion


         Editar sensor 1
         Code: 1Z

         Editar sensor 2
         Code: 2Z

         Agregar sensor temperatura
         Code: 3Z

         Agregar sensor de humedad de ambiente
         Code: 4Z

         ------
         Cambiar modo: SEMILLERO.
         Modo actual: MANUAL. CODE 2L
         AUTOMATICO
         SCHEDULE
         ON_DEMAND
Relay 1 is: ${plant.isRelayOneOn ? 'ON' : 'OFF'}
Relay 2 is: ${plant.isRelayTwoOn ? 'ON' : 'OFF'}
Relay 3 is: ${plant.isRelayThirdOn ? 'ON' : 'OFF'}
Relay 4 is: ${plant.isRelayFourthOn ? 'ON' : 'OFF'}

Sensor 1 configs:

Relay One Automated Started Time: ${plant.soilHumiditySettings1.relayOneAutomatedStartedTime || 'Undefined'}
Relay Two Automated Started Time: ${plant.soilHumiditySettings1.relayTwoAutomatedStartedTime || 'Undefined'}
Relay One Automated Time To Run: ${plant.soilHumiditySettings1.relayOneAutomatedTimeToRun || 'Undefined'}
Relay Two Automated Time To Run: ${plant.soilHumiditySettings1.relayTwoAutomatedTimeToRun || 'Undefined'}

Sensor 2 configs:

Relay One Automated Started Time: ${plant.soilHumiditySettings2.relayOneAutomatedStartedTime || 'Undefined'}
Relay Two Automated Started Time: ${plant.soilHumiditySettings2.relayTwoAutomatedStartedTime || 'Undefined'}
Relay One Automated Time To Run: ${plant.soilHumiditySettings2.relayOneAutomatedTimeToRun || 'Undefined'}
Relay Two Automated Time To Run: ${plant.soilHumiditySettings2.relayTwoAutomatedTimeToRun || 'Undefined'}
    `, 'Editar configuracion', listSections, title, '');
    resData.trigger = trigger;
    return resData;
};
exports.getSensorsMenuList = getSensorsMenuList;
const getGrowerSensorList = (resData, user, plant, trigger, title, buttonText) => {
    //  dependiendo del modo, 
    //     lectura: (desconectado/20% humedad)
    // sestear minima/maxima (warn whatsapp),
    //         Asociar relay: (“nombre del relay asociado”/ “no hay relay asociado, asocial uno“)
    const menuRows = [{
            title: 'Configurar alerta maxima',
            description: 'Recibis un whatsapp cuando sobrepase este limite. Code: 1A',
            id: 'test-4',
        }, {
            title: 'Configurar alerta minima',
            description: 'Recibis un whatsapp cuando baje de este limite. Code: 1B',
            id: 'test-2',
        }, {
            title: 'Asociar relay',
            description: '. Code: 1C',
            id: 'test-423',
        }, {
            title: 'Prender relay',
            description: 'Recibis un whatsapp cuando sobrepase este limite. Code: 1D',
            id: 'test-4455',
        }, {
            title: 'Apagar relay',
            description: 'Recibis un whatsapp cuando sobrepase este limite. Code: 1E',
            id: 'test11-4',
        }];
    const listSections = (0, whatsAppUtils_1.getSectionWith)('Configuracion', menuRows);
    resData.replyMessage = (0, whatsAppUtils_1.getListButtons)(`Humedad sensor 1: ${plant.soilHumidity1}
Humedad sensor 2: ${plant.soilHumidity2}
Relay 1 is: ${plant.isRelayOneOn ? 'ON' : 'OFF'}
Relay 2 is: ${plant.isRelayTwoOn ? 'ON' : 'OFF'}
Relay 3 is: ${plant.isRelayThirdOn ? 'ON' : 'OFF'}
Relay 4 is: ${plant.isRelayFourthOn ? 'ON' : 'OFF'}

Sensor 1 configs:

Relay One Automated Started Time: ${plant.soilHumiditySettings1.relayOneAutomatedStartedTime || 'Undefined'}
Relay Two Automated Started Time: ${plant.soilHumiditySettings1.relayTwoAutomatedStartedTime || 'Undefined'}
Relay One Automated Time To Run: ${plant.soilHumiditySettings1.relayOneAutomatedTimeToRun || 'Undefined'}
Relay Two Automated Time To Run: ${plant.soilHumiditySettings1.relayTwoAutomatedTimeToRun || 'Undefined'}

Sensor 2 configs:

Relay One Automated Started Time: ${plant.soilHumiditySettings2.relayOneAutomatedStartedTime || 'Undefined'}
Relay Two Automated Started Time: ${plant.soilHumiditySettings2.relayTwoAutomatedStartedTime || 'Undefined'}
Relay One Automated Time To Run: ${plant.soilHumiditySettings2.relayOneAutomatedTimeToRun || 'Undefined'}
Relay Two Automated Time To Run: ${plant.soilHumiditySettings2.relayTwoAutomatedTimeToRun || 'Undefined'}
    `, 'Editar configuracion', listSections, title, '');
    resData.trigger = trigger;
    return resData;
};
exports.getGrowerSensorList = getGrowerSensorList;
// Modo: ${plant.soilHumiditySettings1.mode || 'Ninguno'}
// Relay asociado: ${plant.soilHumiditySettings1.relayOneIdRelated || 'Ninguno' }
// RelayOneWorking: ${ plant.soilHumiditySettings1.relayOneWorking ? 'ON' : 'OFF' }
const getGrowerMainMenuButtons = (resData, user, plant, trigger, title, buttonText) => {
    const buttons = [{ body: '1 - Editar configuración' }, { body: '2 - Agregar sensor' }];
    const bodyContent = `Controller ID: ${plant.controllerId}
Humedad del suelo: ${plant.soilHumidity1}
Humedad del aire: ${plant.airHumidity}
Temperatura: ${plant.tempeture}
Relay 1: ${plant.isRelayOneOn}
Relay 2: ${plant.isRelayTwoOn}
Relay 3: ${plant.isRelayThirdOn}
Relay 4: ${plant.isRelayFourthOn}
        `;
    resData.replyMessage = (0, whatsAppUtils_1.getButtons)(bodyContent, buttons, `Detalles de su ${plant.name}`, '');
    resData.trigger = trigger;
    return resData;
};
exports.getGrowerMainMenuButtons = getGrowerMainMenuButtons;
const getPlantsRowsFrom = (items) => items.map((item, idx) => {
    return {
        title: idx + 1 + ' - ' + item.name,
        description: item.meta_description,
        id: item.id
    };
});
const getStuffMainMenuButtons = (resData, user) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const buttons = user.workInfo.isWorking
        ? [{ body: '1 - Terminar de trabajar ⛔️🙅‍♂️⛔️' }]
        : [{ body: '1 - Empezar a trabajar  🟢🧰⚒' }];
    const h = ((_a = user.workInfo) === null || _a === void 0 ? void 0 : _a.totalWorkingMinutesPerWeek) / 60 | 0;
    const m = ((_b = user.workInfo) === null || _b === void 0 ? void 0 : _b.totalWorkingMinutesPerWeek) % 60 | 0;
    const subtotalSalario = Number((_c = user.workInfo) === null || _c === void 0 ? void 0 : _c.totalWorkingMinutesPerWeek) / 60 * Number((_d = user.workInfo) === null || _d === void 0 ? void 0 : _d.ratePerHour);
    // const pendingTasks = user?.tasks?.filter((task: any) => (task.startDate.length === 0 && task.finishDate.length === 0 && task.isDone === false) || task.isRepetitived)
    // const inProgressTasks = user?.tasks?.filter((task: any) => (task.startDate.length > 1 && task.finishDate.length === 0));
    resData.replyMessage = (0, whatsAppUtils_1.getButtons)(`Usted se encuentra: ${((_e = user.workInfo) === null || _e === void 0 ? void 0 : _e.isWorking) ? '*Chambeando*' : '*Vagando*'}
💵🕝Salario por hora $${(_g = (_f = user.workInfo) === null || _f === void 0 ? void 0 : _f.ratePerHour) === null || _g === void 0 ? void 0 : _g.toFixed(2)}
Salario subtotal: $${subtotalSalario}
Salario adelantado: $${(_h = user.workInfo) === null || _h === void 0 ? void 0 : _h.advancedSalaryPaid}
💵Salario final: $${(_k = (_j = user.workInfo) === null || _j === void 0 ? void 0 : _j.totalSalaryToPayWeekly) === null || _k === void 0 ? void 0 : _k.toFixed(2)}
⌛️Horas trabajadas: ${h}:${Number(m) >= 9 ? m : '0' + m} hs.`, buttons, `Hola ${user === null || user === void 0 ? void 0 : user.name} 🙋🏻, bienvenido al pokemenú de Ditto Farm`, 'Seleccione una opción:');
    resData.trigger = types_1.TriggerStaffSteps.ALL_CATEGORIES_ANSWER;
    return resData;
};
exports.getStuffMainMenuButtons = getStuffMainMenuButtons;
const stopWorking = (user) => __awaiter(void 0, void 0, void 0, function* () {
    user.workInfo.isWorking = false;
    user.workInfo.stoppedWorkTime = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });
    const startedWorkTime = (0, moment_1.default)(new Date(user.workInfo.startedWorkTime));
    const stoppedWorkTime = (0, moment_1.default)(new Date(user.workInfo.stoppedWorkTime));
    const workedInMinutes = stoppedWorkTime.diff(startedWorkTime, 'minutes');
    const ratePerMinute = user.workInfo.ratePerHour / 60;
    user.workInfo.totalWorkingMinutesPerWeek += workedInMinutes;
    user.workInfo.totalSalaryToPayWeekly = Number(user.workInfo.totalWorkingMinutesPerWeek) * Number(ratePerMinute) - Number(user.workInfo.advancedSalaryPaid);
    yield (0, api_1.updateUserWorkInfoMutation)(user, `finished working.`);
});
exports.stopWorking = stopWorking;
const startWorking = (user) => __awaiter(void 0, void 0, void 0, function* () {
    if (!user.workInfo)
        user.workInfo = {
            stoppedWorkTime: '',
            startedWorkTime: '',
            ratePerHour: 0,
            totalWorkingMinutesPerWeek: 0,
            totalSalaryToPayWeekly: 0,
            advancedSalaryPaid: 0,
            isWorking: false,
            taskRelated: null
        };
    user.workInfo.isWorking = true;
    user.workInfo.startedWorkTime = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });
    user.workInfo.stoppedWorkTime = null;
    user.workInfo.ratePerHour = 375;
    yield (0, api_1.updateUserWorkInfoMutation)(user, `started working.`);
});
exports.startWorking = startWorking;
