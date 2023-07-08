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
exports.getNextStep = exports.findResponseMsg = void 0;
const growerBot_1 = require("../adapter/growerBot");
const shopBot_1 = require("../adapter/shopBot");
const staffBot_1 = require("../adapter/staffBot");
const shoppingUtils_1 = require("../lib/utils/shoppingUtils");
const handle_1 = require("./handle");
const stepsReponse = require('../flow/response.json');
const findResponseMsg = (trigger, customer, message, number, access_token) => __awaiter(void 0, void 0, void 0, function* () {
    let data;
    if ((0, shoppingUtils_1.isGrower)(customer)) {
        data = (0, growerBot_1.getReplyFromGrowerBot)(trigger, customer, message, number, access_token);
    }
    else if ((0, shoppingUtils_1.isUserStaff)(customer)) {
        data = (0, staffBot_1.getReplyFromStaffBot)(trigger, customer, message, number, access_token);
    }
    else {
        data = (0, shopBot_1.getReplyFromShopBot)(trigger, customer, message, number, access_token);
    }
    if (data && data.media) {
        const file = (0, handle_1.checkIsUrl)(data.media) ? yield (0, handle_1.saveExternalFile)(data.media) : data.media;
        return Object.assign(Object.assign({}, data), { media: file });
    }
    return data;
});
exports.findResponseMsg = findResponseMsg;
// export const getMessages = async (message: string) => {
//     const data: any = await identifyFirstMessageAndGetInitialResponse(message)
//     return data
// }
const getNextStep = (message, lastStep) => new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
    const subStepSelected = message.match(new RegExp('[0-9]')) ? message : null;
    const notRecognicedResponseKey = `NOT_RECOGNICE_${lastStep}`;
    const nextStepKey = `${lastStep}_${subStepSelected}`;
    const nextStep = stepsReponse[nextStepKey] || stepsReponse[notRecognicedResponseKey];
    return resolve(nextStep);
    // const responseFind = 
    //  switch (responseNum) {
    //      case '1':
    //           message.()
    //          resolve( await saveMessageMysql( message, trigger, number ) )
    //          break;
    //      case 'none':
    //          break;
    //      default:
    //          resolve(null)
    //          break;
    // }
}));
exports.getNextStep = getNextStep;
// export const bothResponse = async (message: string) => {
//     const data: any = await getIA(message)
//     if(data && data.media){
//         const file = await saveExternalFile(data.media)
//         return {...data,...{media:file}}
//     }
//     return data
// }
