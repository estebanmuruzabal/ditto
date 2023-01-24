const { MessageMedia, List } = require('whatsapp-web.js');
import { Buttons } from "whatsapp-web.js"

export const getListButtons = (bodyDescription: string, listButtonText: string, listSections: any, listTitle: string, footer: any) => {
    return new List(bodyDescription,
        listButtonText,
        [listSections],
        listTitle,
        footer);
};

export const getButtons = (bodyDescription: string, buttonsTexts: any[], buttonTitle: string, footer: any) => {
    return new Buttons(bodyDescription,
        buttonsTexts,
        buttonTitle,
        footer);

};

export const getSectionWith = (title: string, rows: any) => {
    return {
        title,
        rows,
    }
};