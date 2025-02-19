"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoriesButtons = exports.mainMenuUnauthenticatedUser1 = void 0;
const types_1 = require("../lib/types");
const constant_1 = require("../lib/utils/constant");
const shoppingUtils_1 = require("../lib/utils/shoppingUtils");
const whatsAppUtils_1 = require("../lib/utils/whatsAppUtils");
const isEnglish = false;
const mainMenuUnauthenticatedUser1 = (categories, phoneNumber) => {
    return isEnglish ?
        `Hello! 🙋🏻 I am here to help you, I am Ditto Farm SD front desk!
    
    Please select a section to check/buy our products:
    
    ${categories.map((product, i) => (`${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} ${product.name}\n`)).join('')}${(0, whatsAppUtils_1.getEmojiNumber)(categories.length + 1)} Help! I need to talk to a real person.
        
    *Please reply with a number between 1 and ${categories.length + 1}*`
        :
            `Hola! 🙋🏻 Soy un asistente virtual de Ditto Farm y estoy para ayudarte!
Para hacer un pedido o ver nuestros productos ingresa a nuestra página web: https://shorturl.at/clDsE`;
};
exports.mainMenuUnauthenticatedUser1 = mainMenuUnauthenticatedUser1;
const getCategoriesButtons = (resData, categories) => {
    if (categories.length === 1 || categories.length === 2) {
        const buttonsBodies = [];
        categories.map((category, idx) => buttonsBodies.push({ body: idx + 1 + ' - ' + category.name }));
        constant_1.TALK_TO_A_REPRESENTATIVE_MODE && (0, shoppingUtils_1.addTalkToRepresentativeOptToButtons)(buttonsBodies);
        resData.replyMessage = (0, whatsAppUtils_1.getButtons)("COMPANY_DESCRIPTION_TEXT", buttonsBodies, 'Hola! 🙋🏻 Muchas gracias por comunicarte con nosotros. Soy tu asistente virtual y estoy para ayudarte.', 'Seleccione una opción:');
    }
    else {
        const menuRows = getCategoryRowsFrom(categories);
        const listSections = (0, whatsAppUtils_1.getSectionWith)('Opciones', menuRows);
        constant_1.TALK_TO_A_REPRESENTATIVE_MODE && (0, shoppingUtils_1.addTalkToRepresentativeOptToList)(listSections);
        resData.replyMessage = (0, whatsAppUtils_1.getListButtons)(constant_1.COMPANY_DESCRIPTION_TEXT + '/n Seleccione una opción en el siguiente menú:', 'Ver menú', listSections, 'Hola! 🙋🏻 Muchas gracias por comunicarte con nosotros. Soy tu asistente virtual y estoy para ayudarte.', '');
    }
    resData.trigger = types_1.TriggerSteps.SELECT_CATEGORY;
    return resData;
};
exports.getCategoriesButtons = getCategoriesButtons;
const getCategoryRowsFrom = (items) => items.map((item, idx) => {
    return {
        title: idx + 1 + ' - ' + item.name,
        description: item.meta_description,
        id: item.id
    };
});
