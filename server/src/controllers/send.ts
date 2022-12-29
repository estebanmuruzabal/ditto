// import { saveMessage } from "../adapter";
import { saveUserChatHistory, signUpUser } from "../api";
import { ISetting, IUser, TriggerStaffSteps, TriggerSteps } from "../lib/types";
import { INITIAL_DITTO_USERNAME } from "../lib/utils/constant";
import { endConversationKeys, getCleanNumber, initialConversationKeys, isUserStaff, normalizeText } from "../lib/utils/shoppingUtils";

const ExcelJS = require('exceljs');
const fs = require('fs');

const { MessageMedia, Buttons } = require('whatsapp-web.js');
const { cleanNumber } = require('./handle')
const DELAY_TIME = 170; //ms
const DIR_MEDIA = `${__dirname}/../mediaSend`;
// import { Low, JSONFile } from 'lowdb'
// import { join } from 'path'
/**
 * Enviamos archivos multimedia a nuestro cliente
 * @param {*} number 
 * @param {*} fileName 
 */

export const sendMedia = (client: any, number = null, fileName = null) => {
    if(!client) return console.error("El objeto cliente no está definido.");
    try {
        const file = `${DIR_MEDIA}/${fileName}`;
        if (fs.existsSync(file)) {
            const media = MessageMedia.fromFilePath(file);
            client.sendMessage(number, media, { sendAudioAsVoice: true });
        }
    } catch(e) {
        throw e;
    }
}

/**
 * Enviamos archivos como notas de voz
 * @param {*} number 
 * @param {*} fileName 
 */

 export const sendMediaVoiceNote = (client: any, number = null, fileName = null) => {
     if(!client) return console.error("El objeto cliente no está definido.");
     try { 
        const file = `${DIR_MEDIA}/${fileName}`;
        if (fs.existsSync(file)) {
            const media = MessageMedia.fromFilePath(file);
            client.sendMessage(number, media ,{ sendAudioAsVoice: true });

        }
    } catch(e) {
        throw e;
}

}
/**
 * Enviamos un mensaje simple (texto) a nuestro cliente
 * @param {*} number 
 */
export const sendMessage = async (client: any, number: string, text: string, trigger: TriggerSteps, token: string) => {
   setTimeout(async () => {
    const message: any = text
    try {
        if (number[0] == '5' && number[1] === '4' && number[2] !== '9') number = '549' + number.substring(2, number.length);
        if (!number.endsWith('@c.us')) number += '@c.us';
        client.sendMessage(number, message);
        console.log(`⚡⚡⚡ Enviando mensaje:`, message);
    } catch (error) {
        console.log('Error tratando de enviar el siguiente whatsapp [message, number, trigger, error]', message, number, trigger, error )
    }
    await saveUserChatHistory(message, number, trigger, token)
    
   },DELAY_TIME)
}

/**
 * Enviamos un mensaje con buttons a nuestro cliente
 * @param {*} number 
 */
export const sendMessageButton = async (client: any, number = null, text = null, actionButtons: any) => {
    const { title = null, message = null, footer = null, buttons = [] } = actionButtons;
    let button = new Buttons(message,[...buttons], title, footer);
    client.sendMessage(number, button);

    // console.log(`⚡⚡⚡ Enviando mensajes....`);
}

/**
 * Opte
 */
export const lastTrigger = async (customer: IUser, userMessage: string) => {
    userMessage = normalizeText(userMessage);
    
    if (!customer) return TriggerSteps.INITIAL_UNAUTHENTICATED_USER;
    if (customer?.name === INITIAL_DITTO_USERNAME) return TriggerSteps.USER_SHOULD_INPUT_HIS_NAME;

    let lastDittoMessageSent: any = { trigger: undefined };

    if (customer?.chatHistory?.length >= 1) lastDittoMessageSent = customer.chatHistory[customer.chatHistory.length - 1]
    //staff checks
    if (isUserStaff(customer) && lastDittoMessageSent?.trigger === null) return TriggerStaffSteps.STAFF_ALL_CATEGORIES;

    // block unblock checks
    if (lastDittoMessageSent?.trigger === TriggerSteps.BLOCK_CHAT && !userMessage.includes('menu')) return TriggerSteps.BLOCK_CHAT;
    if (lastDittoMessageSent?.trigger === TriggerSteps.BLOCK_CHAT && userMessage.includes('menu')) return TriggerSteps.UNBLOCK_CHAT;

    // if is initial, we reset conversation and we start all over again, non matter what
    if (initialConversationKeys.includes(userMessage)) return TriggerSteps.AUTHENTICATED_USER_ALL_CATEGORIES;
    if (endConversationKeys.includes(userMessage)) return TriggerSteps.END_CONVERSATION_AND_RESET_CHAT;

    return lastDittoMessageSent?.trigger || TriggerSteps.AUTHENTICATED_USER_ALL_CATEGORIES;
    
        

    
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
}

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

