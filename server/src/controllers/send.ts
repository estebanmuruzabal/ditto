// import { saveMessage } from "../adapter";
// import { List } from "whatsapp-web.js";
import { getSettings, saveUserChatHistory, signUpUser } from "../api";
import { IUser, TriggerGrowerSteps, TriggerStaffSteps, TriggerSteps } from "../lib/types";
import { INITIAL_USER_USERNAME } from "../lib/utils/constant";
import { endConversationKeys, getCleanNumber, initialConversationKeys, isGrower, isUserStaff, normalizeText } from "../lib/utils/shoppingUtils";
import { client } from "..";

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
            // const media = MessageMedia.fromFilePath(file);
            // client.sendMessage(number, media, { sendAudioAsVoice: true });
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
            // const media = MessageMedia.fromFilePath(file);
            // client.sendMessage(number, media ,{ sendAudioAsVoice: true });

        }
    } catch(e) {
        throw e;
}

}
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
    },{
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
            
export const sendMessage = async (number: string, text: string, trigger?: TriggerSteps, token?: string) => {
    let settingResponse: any = await getSettings();
    settingResponse = settingResponse?.data?.getSiteSetting?.value;

    const settingValues = JSON.parse(settingResponse);
    if (!settingValues?.whatsapp_bot_is_on) {
      console.log('Tried to send msg, but whatsapp setting is OFF', text);
      return;
    }
    
  if (!number) { console.log('no number error at sendMessage!'); return; }
  
   setTimeout(async () => {
     const message: any = text

    try {
        if (number[0] == '5' && number[1] === '4' && number[2] !== '9') number = '549' + number.substring(2, number.length);
        if (!number.endsWith('@c.us') && !number.endsWith('@g.us')) number += '@c.us';
        client.sendMessage(number, message);
        console.log(`⚡⚡⚡ Enviando mensaje:`, message, number);
    } catch (error) {
        console.log('Error tratando de enviar el siguiente whatsapp [message, number, trigger, error]', message, number, trigger, error )
    }
    //  if (token) await saveUserChatHistory('', number, trigger, token)
     await saveUserChatHistory('', number, trigger, token)
    
   },DELAY_TIME)
}

/**
 * Enviamos un mensaje con buttons a nuestro cliente
 * @param {*} number 
 */
export const sendMessageButton = async (client: any, number = null, text = null, actionButtons: any) => {
    const { title = null, message = null, footer = null, buttons = [] } = actionButtons;
    // let button = new Buttons(message,[...buttons], title, footer);
    // client.sendMessage(number, button);

    // console.log(`⚡⚡⚡ Enviando mensajes....`);
}

/**
 * Opte
 */
export const lastGrowerTrigger = async (customer: IUser, userMessage: string) => {
    userMessage = normalizeText(userMessage);
    if (!customer) return TriggerSteps.INITIAL_UNAUTHENTICATED_USER;
    let lastDittoMessageSent: any = { trigger: undefined };

    if (customer?.chatHistory?.length >= 1) lastDittoMessageSent = customer.chatHistory[customer.chatHistory.length - 1]
  
    if (!lastDittoMessageSent?.trigger) return TriggerGrowerSteps.SHOW_ALL_PLANTS;

    if (!lastDittoMessageSent?.trigger) console.log('No lastDittoMessageSent?.trigger setted');
    
    return lastDittoMessageSent?.trigger;
}

export const lastClientTrigger = async (customer: IUser, userMessage: string) => {
  userMessage = normalizeText(userMessage);
  if (!customer) return TriggerSteps.INITIAL_UNAUTHENTICATED_USER;
  let lastDittoMessageSent: any = { trigger: undefined };

  if (customer?.chatHistory?.length >= 1) lastDittoMessageSent = customer.chatHistory[customer.chatHistory.length - 1]

  // START: blocked unblock chats checks
  if (lastDittoMessageSent?.trigger === TriggerSteps.BLOCK_CHAT && !userMessage.includes('menu')) return TriggerSteps.BLOCK_CHAT;
  if (lastDittoMessageSent?.trigger === TriggerSteps.BLOCK_CHAT && userMessage.includes('menu')) return TriggerSteps.UNBLOCK_CHAT;
  // END: blocked chat checks

  // if is initial, we reset conversation and we start all over again, non matter what
  if (initialConversationKeys.includes(userMessage)) return customer ? TriggerSteps.AUTHENTICATED_USER_ALL_CATEGORIES : TriggerSteps.INITIAL_UNAUTHENTICATED_USER;
  if (endConversationKeys.includes(userMessage)) return TriggerSteps.END_CONVERSATION_AND_RESET_CHAT;

  if (!lastDittoMessageSent?.trigger) console.log('No lastDittoMessageSent?.trigger setted');
  
  return lastDittoMessageSent?.trigger;
}

export const lastStaffTrigger = async (customer: IUser, userMessage: string) => {
  userMessage = normalizeText(userMessage);
  if (!customer) return TriggerSteps.INITIAL_UNAUTHENTICATED_USER;
  let lastDittoMessageSent: any = { trigger: undefined };

  if (customer?.chatHistory?.length >= 1) lastDittoMessageSent = customer.chatHistory[customer.chatHistory.length - 1]

  // if is initial, we reset conversation and we start all over again, non matter what
  if (initialConversationKeys.includes(userMessage)) return TriggerStaffSteps.STAFF_ALL_CATEGORIES;
  // id: 23213521  if (endConversationKeys.includes(userMessage)) return TriggerStaffSteps.END_CONVERSATION_AND_RESET_CHAT;

  if (!lastDittoMessageSent?.trigger) return TriggerStaffSteps.STAFF_ALL_CATEGORIES;
  
  if (!lastDittoMessageSent?.trigger) console.log('No lastDittoMessageSent?.trigger setted');
  
  return lastDittoMessageSent?.trigger;
}
        

    
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

