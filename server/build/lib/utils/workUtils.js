"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGrowerMainMenuButtons = exports.hasDittoBotUpdatedInLast3Minute = void 0;
const moment_1 = __importDefault(require("moment"));
const whatsAppUtils_1 = require("./whatsAppUtils");
// export const getSensorsMenuList = (resData: any, user: IUser, plant: Plant, trigger: TriggerGrowerSteps, title: string, buttonText: string) => {
//     //  dependiendo del modo, 
// //     lectura: (desconectado/20% humedad)
// // sestear minima/maxima (warn whatsapp),
// //         Asociar relay: (“nombre del relay asociado”/ “no hay relay asociado, asocial uno“)
//     const menuRows: any = [{
//             title: 'Configurar alerta maxima',
//             description: 'Recibis un whatsapp cuando sobrepase este limite. Code: 1A',
//             id: 'test-4',
//         }, {
//             title: 'Configurar alerta minima',
//             description: 'Recibis un whatsapp cuando baje de este limite. Code: 1B',
//             id: 'test-2',
//         }, {
//             title: 'Asociar relay',
//             description: '. Code: 1C',
//             id: 'test-423',
//         }, {
//             title: 'Prender relay',
//             description: 'Recibis un whatsapp cuando sobrepase este limite. Code: 1D',
//             id: 'test-4455',
//         }, {
//             title: 'Apagar relay',
//             description: 'Recibis un whatsapp cuando sobrepase este limite. Code: 1E',
//             id: 'test11-4',
//         }];
//     const listSections = getSectionWith('Configuracion', menuRows);
//      resData.replyMessage = getListButtons(
//          `Invernadero 1
//          Sensor humedad 1: ${plant.soil_humidity_1}
//         Modo:  (ninguno/manual)
//          Sensor humedad 2: ${plant.soil_humidity_2}
//          Modo:  (ninguno/manual)
//          Sensor humedad de ambiente: 
//          Modo: Ninguno
//          Sensor temperatura de ambiente: 
//          Modo: Ninguno
//          Editar configuracion
//          Editar module 1
//          Code: 1Z
//          Editar module 2
//          Code: 2Z
//          Agregar module temperatura
//          Code: 3Z
//          Agregar module de humedad de ambiente
//          Code: 4Z
//          ------
//          Cambiar modo: SEMILLERO.
//          Modo actual: MANUAL. CODE 2L
//          AUTOMATICO
//          SCHEDULE
//          ON_DEMAND
// Relay 1 is: ${plant.isRelayOneOn ? 'ON' : 'OFF'}
// Relay 2 is: ${plant.isRelayTwoOn ? 'ON' : 'OFF'}
// Relay 3 is: ${plant.isRelayThirdOn ? 'ON' : 'OFF'}
// Relay 4 is: ${plant.isRelayFourthOn ? 'ON' : 'OFF'}
// Sensor 1 configs:
// Relay One Automated Started Time: ${plant.soilHumiditySettings1.relayOneAutomatedStartedTime || 'Undefined'}
// Relay Two Automated Started Time: ${plant.soilHumiditySettings1.relayTwoAutomatedStartedTime || 'Undefined'}
// Relay One Automated Time To Run: ${plant.soilHumiditySettings1.relayOneAutomatedTimeToRun || 'Undefined'}
// Relay Two Automated Time To Run: ${plant.soilHumiditySettings1.relayTwoAutomatedTimeToRun || 'Undefined'}
// Sensor 2 configs:
// Relay One Automated Started Time: ${plant.soilHumiditySettings2.relayOneAutomatedStartedTime || 'Undefined'}
// Relay Two Automated Started Time: ${plant.soilHumiditySettings2.relayTwoAutomatedStartedTime || 'Undefined'}
// Relay One Automated Time To Run: ${plant.soilHumiditySettings2.relayOneAutomatedTimeToRun || 'Undefined'}
// Relay Two Automated Time To Run: ${plant.soilHumiditySettings2.relayTwoAutomatedTimeToRun || 'Undefined'}
//     `,
//         'Editar configuracion',
//         listSections,
//         title,
//          '');
//     resData.trigger = trigger;
//     return resData;
// };
// export const getGrowerSensorList = (resData: any, user: IUser, plant: Plant, trigger: TriggerGrowerSteps, title: string, buttonText: string) => {
//     //  dependiendo del modo, 
// //     lectura: (desconectado/20% humedad)
// // sestear minima/maxima (warn whatsapp),
// //         Asociar relay: (“nombre del relay asociado”/ “no hay relay asociado, asocial uno“)
//     const menuRows: any = [{
//             title: 'Configurar alerta maxima',
//             description: 'Recibis un whatsapp cuando sobrepase este limite. Code: 1A',
//             id: 'test-4',
//         }, {
//             title: 'Configurar alerta minima',
//             description: 'Recibis un whatsapp cuando baje de este limite. Code: 1B',
//             id: 'test-2',
//         }, {
//             title: 'Asociar relay',
//             description: '. Code: 1C',
//             id: 'test-423',
//         }, {
//             title: 'Prender relay',
//             description: 'Recibis un whatsapp cuando sobrepase este limite. Code: 1D',
//             id: 'test-4455',
//         }, {
//             title: 'Apagar relay',
//             description: 'Recibis un whatsapp cuando sobrepase este limite. Code: 1E',
//             id: 'test11-4',
//         }];
//     const listSections = getSectionWith('Configuracion', menuRows);
//      resData.replyMessage = getListButtons(
//          `Humedad module 1: ${plant.soil_humidity_1}
// Humedad module 2: ${plant.soil_humidity_2}
// Relay 1 is: ${plant.isRelayOneOn ? 'ON' : 'OFF'}
// Relay 2 is: ${plant.isRelayTwoOn ? 'ON' : 'OFF'}
// Relay 3 is: ${plant.isRelayThirdOn ? 'ON' : 'OFF'}
// Relay 4 is: ${plant.isRelayFourthOn ? 'ON' : 'OFF'}
// Sensor 1 configs:
// Relay One Automated Started Time: ${plant.soilHumiditySettings1.relayOneAutomatedStartedTime || 'Undefined'}
// Relay Two Automated Started Time: ${plant.soilHumiditySettings1.relayTwoAutomatedStartedTime || 'Undefined'}
// Relay One Automated Time To Run: ${plant.soilHumiditySettings1.relayOneAutomatedTimeToRun || 'Undefined'}
// Relay Two Automated Time To Run: ${plant.soilHumiditySettings1.relayTwoAutomatedTimeToRun || 'Undefined'}
// Sensor 2 configs:
// Relay One Automated Started Time: ${plant.soilHumiditySettings2.relayOneAutomatedStartedTime || 'Undefined'}
// Relay Two Automated Started Time: ${plant.soilHumiditySettings2.relayTwoAutomatedStartedTime || 'Undefined'}
// Relay One Automated Time To Run: ${plant.soilHumiditySettings2.relayOneAutomatedTimeToRun || 'Undefined'}
// Relay Two Automated Time To Run: ${plant.soilHumiditySettings2.relayTwoAutomatedTimeToRun || 'Undefined'}
//     `,
//         'Editar configuracion',
//         listSections,
//         title,
//          '');
//     resData.trigger = trigger;
//     return resData;
// };
const hasDittoBotUpdatedInLast3Minute = (lastTimeStamp, timeZone) => {
    const currentTimeMoment = (0, moment_1.default)(new Date().toLocaleString('en-US', { timeZone }));
    // console.log('currentTimeMoment', currentTimeMoment)
    const lastTimeStampMoment = (0, moment_1.default)(new Date(lastTimeStamp));
    // console.log('lastTimeStampMoment', lastTimeStampMoment)
    const lastTimestampInMins = currentTimeMoment === null || currentTimeMoment === void 0 ? void 0 : currentTimeMoment.diff(lastTimeStampMoment, 'minutes');
    // we are updating acutally every 5 seconds, but just in case we check if in the last minute there was any conection
    return lastTimestampInMins < 3;
};
exports.hasDittoBotUpdatedInLast3Minute = hasDittoBotUpdatedInLast3Minute;
const getGrowerMainMenuButtons = (resData, user, plant, trigger, title, buttonText) => {
    const buttons = [{ body: '1 - Editar configuración' }, { body: '2 - Agregar module' }];
    const bodyContent = `Controller ID: ${plant.plantId}
Humedad del suelo: ${plant.soil_humidity_1}
Humedad del aire: ${plant.humidity}
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
