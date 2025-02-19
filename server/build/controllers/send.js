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
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastStaffTrigger = exports.lastClientTrigger = exports.lastGrowerTrigger = exports.sendMessageButton = exports.sendMessage = exports.sendMediaVoiceNote = exports.sendMedia = void 0;
// import { saveMessage } from "../adapter";
// import { List } from "whatsapp-web.js";
const api_1 = require("../api");
const types_1 = require("../lib/types");
const shoppingUtils_1 = require("../lib/utils/shoppingUtils");
const __1 = require("..");
const ExcelJS = require('exceljs');
const fs = require('fs');
const { MessageMedia, Buttons } = require('whatsapp-web.js');
const { cleanNumber } = require('./handle');
const DELAY_TIME = 170; //ms
const DIR_MEDIA = `${__dirname}/../mediaSend`;
// import { Low, JSONFile } from 'lowdb'
// import { join } from 'path'
/**
 * Enviamos archivos multimedia a nuestro cliente
 * @param {*} number
 * @param {*} fileName
 */
const sendMedia = (client, number = null, fileName = null) => {
    if (!client)
        return console.error("El objeto cliente no está definido.");
    try {
        const file = `${DIR_MEDIA}/${fileName}`;
        if (fs.existsSync(file)) {
            // const media = MessageMedia.fromFilePath(file);
            // client.sendMessage(number, media, { sendAudioAsVoice: true });
        }
    }
    catch (e) {
        throw e;
    }
};
exports.sendMedia = sendMedia;
/**
 * Enviamos archivos como notas de voz
 * @param {*} number
 * @param {*} fileName
 */
const sendMediaVoiceNote = (client, number = null, fileName = null) => {
    if (!client)
        return console.error("El objeto cliente no está definido.");
    try {
        const file = `${DIR_MEDIA}/${fileName}`;
        if (fs.existsSync(file)) {
            // const media = MessageMedia.fromFilePath(file);
            // client.sendMessage(number, media ,{ sendAudioAsVoice: true });
        }
    }
    catch (e) {
        throw e;
    }
};
exports.sendMediaVoiceNote = sendMediaVoiceNote;
/**
 * Enviamos un mensaje simple (texto) a nuestro cliente
 * @param {*} number
 */
const productSections = {
    title: 'Selecciona un producto',
    rows: [
        {
            title: 'Test 4',
            description: 'This is a smaller text field, a description',
            id: 'test-4',
        },
        {
            title: 'Test 4',
            description: 'This is a smaller text field, a description',
            id: 'test-4',
        }, {
            title: 'Test 4',
            description: 'This is a smaller text field, a description',
            id: 'test-4',
        }
    ],
};
// const list = new List(`/n Por favor, selecciona una opción en el siguiente menú:`,
//     'Ver menu',
//     [productSections],
//     'Hola! 🙋🏻 Muchas gracias por comunicarte con nosotros. Soy tu asistente virtual y estoy para ayudarte.',
//     'footer');
const sendMessage = (number, text, trigger, token) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    let settingResponse = yield (0, api_1.getSettings)();
    settingResponse = (_b = (_a = settingResponse === null || settingResponse === void 0 ? void 0 : settingResponse.data) === null || _a === void 0 ? void 0 : _a.getSiteSetting) === null || _b === void 0 ? void 0 : _b.value;
    const settingValues = JSON.parse(settingResponse);
    if (!(settingValues === null || settingValues === void 0 ? void 0 : settingValues.whatsapp_bot_is_on)) {
        console.log('Tried to send msg, but whatsapp setting is OFF', text);
        return;
    }
    if (!number) {
        console.log('no number error at sendMessage!');
        return;
    }
    setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
        const message = text;
        try {
            if (number[0] == '5' && number[1] === '4' && number[2] !== '9')
                number = '549' + number.substring(2, number.length);
            if (!number.endsWith('@c.us') && !number.endsWith('@g.us'))
                number += '@c.us';
            __1.client.sendMessage(number, message);
            console.log(`⚡⚡⚡ Enviando mensaje:`, message, number);
        }
        catch (error) {
            console.log('Error tratando de enviar el siguiente whatsapp [message, number, trigger, error]', message, number, trigger, error);
        }
        //  if (token) await saveUserChatHistory('', number, trigger, token)
        yield (0, api_1.saveUserChatHistory)('', number, trigger, token);
    }), DELAY_TIME);
});
exports.sendMessage = sendMessage;
/**
 * Enviamos un mensaje con buttons a nuestro cliente
 * @param {*} number
 */
const sendMessageButton = (client, number = null, text = null, actionButtons) => __awaiter(void 0, void 0, void 0, function* () {
    const { title = null, message = null, footer = null, buttons = [] } = actionButtons;
    // let button = new Buttons(message,[...buttons], title, footer);
    // client.sendMessage(number, button);
    // console.log(`⚡⚡⚡ Enviando mensajes....`);
});
exports.sendMessageButton = sendMessageButton;
/**
 * Opte
 */
const lastGrowerTrigger = (customer, userMessage) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    userMessage = (0, shoppingUtils_1.normalizeText)(userMessage);
    if (!customer)
        return types_1.TriggerSteps.INITIAL_UNAUTHENTICATED_USER;
    let lastDittoMessageSent = { trigger: undefined };
    if (((_c = customer === null || customer === void 0 ? void 0 : customer.chatHistory) === null || _c === void 0 ? void 0 : _c.length) >= 1)
        lastDittoMessageSent = customer.chatHistory[customer.chatHistory.length - 1];
    if (!(lastDittoMessageSent === null || lastDittoMessageSent === void 0 ? void 0 : lastDittoMessageSent.trigger))
        return types_1.TriggerGrowerSteps.SHOW_ALL_PLANTS;
    if (!(lastDittoMessageSent === null || lastDittoMessageSent === void 0 ? void 0 : lastDittoMessageSent.trigger))
        console.log('No lastDittoMessageSent?.trigger setted');
    return lastDittoMessageSent === null || lastDittoMessageSent === void 0 ? void 0 : lastDittoMessageSent.trigger;
});
exports.lastGrowerTrigger = lastGrowerTrigger;
const lastClientTrigger = (customer, userMessage) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    userMessage = (0, shoppingUtils_1.normalizeText)(userMessage);
    if (!customer)
        return types_1.TriggerSteps.INITIAL_UNAUTHENTICATED_USER;
    let lastDittoMessageSent = { trigger: undefined };
    if (((_d = customer === null || customer === void 0 ? void 0 : customer.chatHistory) === null || _d === void 0 ? void 0 : _d.length) >= 1)
        lastDittoMessageSent = customer.chatHistory[customer.chatHistory.length - 1];
    // START: blocked unblock chats checks
    if ((lastDittoMessageSent === null || lastDittoMessageSent === void 0 ? void 0 : lastDittoMessageSent.trigger) === types_1.TriggerSteps.BLOCK_CHAT && !userMessage.includes('menu'))
        return types_1.TriggerSteps.BLOCK_CHAT;
    if ((lastDittoMessageSent === null || lastDittoMessageSent === void 0 ? void 0 : lastDittoMessageSent.trigger) === types_1.TriggerSteps.BLOCK_CHAT && userMessage.includes('menu'))
        return types_1.TriggerSteps.UNBLOCK_CHAT;
    // END: blocked chat checks
    // if is initial, we reset conversation and we start all over again, non matter what
    if (shoppingUtils_1.initialConversationKeys.includes(userMessage))
        return customer ? types_1.TriggerSteps.AUTHENTICATED_USER_ALL_CATEGORIES : types_1.TriggerSteps.INITIAL_UNAUTHENTICATED_USER;
    if (shoppingUtils_1.endConversationKeys.includes(userMessage))
        return types_1.TriggerSteps.END_CONVERSATION_AND_RESET_CHAT;
    if (!(lastDittoMessageSent === null || lastDittoMessageSent === void 0 ? void 0 : lastDittoMessageSent.trigger))
        console.log('No lastDittoMessageSent?.trigger setted');
    return lastDittoMessageSent === null || lastDittoMessageSent === void 0 ? void 0 : lastDittoMessageSent.trigger;
});
exports.lastClientTrigger = lastClientTrigger;
const lastStaffTrigger = (customer, userMessage) => __awaiter(void 0, void 0, void 0, function* () {
    var _e;
    userMessage = (0, shoppingUtils_1.normalizeText)(userMessage);
    if (!customer)
        return types_1.TriggerSteps.INITIAL_UNAUTHENTICATED_USER;
    let lastDittoMessageSent = { trigger: undefined };
    if (((_e = customer === null || customer === void 0 ? void 0 : customer.chatHistory) === null || _e === void 0 ? void 0 : _e.length) >= 1)
        lastDittoMessageSent = customer.chatHistory[customer.chatHistory.length - 1];
    // if is initial, we reset conversation and we start all over again, non matter what
    if (shoppingUtils_1.initialConversationKeys.includes(userMessage))
        return types_1.TriggerStaffSteps.STAFF_ALL_CATEGORIES;
    // id: 23213521  if (endConversationKeys.includes(userMessage)) return TriggerStaffSteps.END_CONVERSATION_AND_RESET_CHAT;
    if (!(lastDittoMessageSent === null || lastDittoMessageSent === void 0 ? void 0 : lastDittoMessageSent.trigger))
        return types_1.TriggerStaffSteps.STAFF_ALL_CATEGORIES;
    if (!(lastDittoMessageSent === null || lastDittoMessageSent === void 0 ? void 0 : lastDittoMessageSent.trigger))
        console.log('No lastDittoMessageSent?.trigger setted');
    return lastDittoMessageSent === null || lastDittoMessageSent === void 0 ? void 0 : lastDittoMessageSent.trigger;
});
exports.lastStaffTrigger = lastStaffTrigger;
// const pathExcel = `${__dirname}/../controllers/chats/${number}.xlsx`;
// console.log('pathExcel', pathExcel)
// console.log('exists', fs.existsSync(pathExcel), pathExcel)
// const workbook = new ExcelJS.Workbook();
// if (!fs.existsSync(pathExcel)) return resolve(null);
// workbook.xlsx.readFile(pathExcel)
//     .then(() => {
//         const worksheet = workbook.getWorksheet(1);
//         const lastRow = worksheet.lastRow;
//         const getRowPrevStep = worksheet.getRow(lastRow.number);
//         const lastStep = getRowPrevStep.getCell('C').value;
//         console.log('lastStep:', lastStep)
//         resolve(lastStep)
//     });
// /**
//  * Guardar historial de conversacion
//  * @param {*} number 
//  * @param {*} message 
//  */
// export const saveChat = async (number: string, message: string, trigger: TriggerSteps | null) => {
//     number = cleanNumber(number)
//     await saveMessage( message, trigger, number )
//     console.log('Saved')
// }
