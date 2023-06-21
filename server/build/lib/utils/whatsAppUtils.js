"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSectionWith = exports.getButtons = exports.getListButtons = void 0;
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
