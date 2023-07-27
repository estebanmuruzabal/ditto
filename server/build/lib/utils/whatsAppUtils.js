"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmojiNumber = exports.getSectionWith = exports.getButtons = exports.getListButtons = void 0;
const { MessageMedia, List } = require('whatsapp-web.js');
const whatsapp_web_js_1 = require("whatsapp-web.js");
const getListButtons = (bodyDescription, listButtonText, listSections, listTitle, footer) => {
    return new List(bodyDescription, listButtonText, [listSections], listTitle, footer);
};
exports.getListButtons = getListButtons;
const getButtons = (bodyDescription, buttonsTexts, buttonTitle, footer) => {
    return new whatsapp_web_js_1.Buttons(bodyDescription, buttonsTexts, buttonTitle, footer);
};
exports.getButtons = getButtons;
const getSectionWith = (title, rows) => {
    return {
        title,
        rows,
    };
};
exports.getSectionWith = getSectionWith;
const getEmojiNumber = (number) => {
    switch (number) {
        case 1:
            return '1️⃣';
            break;
        case 2:
            return '2️⃣';
            break;
        case 3:
            return '3️⃣';
            break;
        case 4:
            return '4️⃣';
            break;
        case 5:
            return '5️⃣';
            break;
        case 6:
            return '6️⃣';
            break;
        case 7:
            return '7️⃣';
            break;
        case 8:
            return '8️⃣';
            break;
        case 9:
            return '9️⃣';
            break;
        case 10:
            return '1️⃣0️⃣';
            break;
        case 11:
            return '1️⃣1️⃣';
            break;
        case 12:
            return '1️⃣2️⃣';
            break;
        case 13:
            return '1️⃣3️⃣';
            break;
        case 14:
            return '1️⃣4️⃣';
            break;
        case 15:
            return '1️⃣5️⃣';
            break;
        default:
            return number;
            break;
    }
};
exports.getEmojiNumber = getEmojiNumber;
