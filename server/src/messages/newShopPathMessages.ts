import { ICategory, TriggerSteps } from "../lib/types";
import { TALK_TO_A_REPRESENTATIVE_MODE, COMPANY_DESCRIPTION_TEXT } from "../lib/utils/constant";
import { addTalkToRepresentativeOptToButtons, addTalkToRepresentativeOptToList } from "../lib/utils/shoppingUtils";
import { getButtons, getEmojiNumber, getListButtons, getSectionWith } from "../lib/utils/whatsAppUtils";

const isEnglish = false;

export const mainMenuUnauthenticatedUser1 = (categories: ICategory[], phoneNumber: string) => {
    return isEnglish ? 
    `Hello! 🙋🏻 I am here to help you, I am Ditto Farm SD front desk!
    
    Please select a section to check/buy our products:
    
    ${categories.map((product: any, i: number) => (`${getEmojiNumber(i + 1)} ${product.name}\n`)).join('')}${getEmojiNumber(categories.length + 1)} Help! I need to talk to a real person.
        
    *Please reply with a number between 1 and ${categories.length + 1}*` 
    : 
    `Hola! 🙋🏻 Soy un asistente virtual de Ditto Farm y estoy para ayudarte!
Para hacer un pedido o ver nuestros productos ingresa a nuestra página web: https://shorturl.at/clDsE`   
    };
    
    export const getCategoriesButtons = (resData: any, categories: any) => {
        if (categories.length === 1 || categories.length === 2) {
            const buttonsBodies: any = [];
            categories.map((category: any, idx: number) => buttonsBodies.push({ body: idx + 1 + ' - ' + category.name })) ;
            TALK_TO_A_REPRESENTATIVE_MODE && addTalkToRepresentativeOptToButtons(buttonsBodies);
    
            resData.replyMessage = getButtons(
                "COMPANY_DESCRIPTION_TEXT",
                buttonsBodies,
                'Hola! 🙋🏻 Muchas gracias por comunicarte con nosotros. Soy tu asistente virtual y estoy para ayudarte.',
                'Seleccione una opción:'
            );
        } else {
            const menuRows = getCategoryRowsFrom(categories);
            const listSections = getSectionWith('Opciones', menuRows)
            TALK_TO_A_REPRESENTATIVE_MODE && addTalkToRepresentativeOptToList(listSections);
    
            resData.replyMessage = getListButtons(
                COMPANY_DESCRIPTION_TEXT + '/n Seleccione una opción en el siguiente menú:',
                'Ver menú',
                listSections,
                'Hola! 🙋🏻 Muchas gracias por comunicarte con nosotros. Soy tu asistente virtual y estoy para ayudarte.',
            '');
        } 
        resData.trigger = TriggerSteps.SELECT_CATEGORY;
        return resData;
    };

    const getCategoryRowsFrom = (items: any) => items.map((item: any, idx: number) => {
        return {
            title: idx + 1 + ' - ' + item.name,
            description: item.meta_description,
            id: item.id
        }
    });
    