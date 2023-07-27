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
exports.getReplyFromGrowerBot = void 0;
const handle_1 = require("../controllers/handle");
const types_1 = require("../lib/types");
const getReplyFromGrowerBot = (triggerStep, user, userInput, number, access_token) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        let resData = { replyMessage: '', media: null, trigger: '' };
        let availableProducts;
        let deliveryOpts;
        let userInputNumber;
        let productSelected;
        let shoppingCart;
        const num = (0, handle_1.cleanNumber)(number);
        console.log('nextTriggerStep received in Switch Grower:', triggerStep);
        switch (triggerStep) {
            case types_1.TriggerGrowerSteps.SHOW_ALL_PLANTS:
                if (!((_a = user === null || user === void 0 ? void 0 : user.plants) === null || _a === void 0 ? void 0 : _a.length)) {
                    resData.replyMessage = 'No tenes plantas agregadas';
                    resolve(resData);
                    break;
                }
                let resDataArrayOfPlants = [];
                // resData.replyMessage = getSensorsMenuList(resData, user, user?.plants[0], TriggerGrowerSteps.CHANGE_MIN_HUMIDITY, 'title1', 'buttonText1');
                resolve([resData]);
                break;
            // case TriggerGrowerSteps.PLANT_DETAILS:
            //     const userInputPlantNumber = userInput[userInput.length];
            //     const userInputPlantSettingNumber = userInput[userInput.length - 1];
            //     if (!user?.plants[userInputPlantNumber]) {
            //         resData.trigger = TriggerGrowerSteps.SHOW_ALL_PLANTS;
            //         resData.replyMessage = invalidNumberInput(user?.plants?.length);
            //         resolve([resData]);
            //         break;
            //     }
            //     switch (userInputPlantSettingNumber) {
            //         case 'A':
            //             resData.trigger = `${TriggerGrowerSteps.CHANGE_MIN_HUMIDITY}_${userInputPlantSettingNumber}`;
            //             resData.replyMessage = 'Ingresar temperatura minima';
            //             resolve([resData]);
            //             break;
            //         case 'B':
            //             resData.trigger = `${TriggerGrowerSteps.CHANGE_MAX_HUMIDITY}_${userInputPlantSettingNumber}`;
            //             resData.replyMessage = 'Ingresar temperatura máxima';
            //             resolve([resData]);
            //             break;
            //         default:
            //             break;
            //     }
            //     resolve([resData])
            //     break;
            // case `${TriggerGrowerSteps.CHANGE_MIN_HUMIDITY}_1`:
            // case `${TriggerGrowerSteps.CHANGE_MIN_HUMIDITY}_2`:
            // case `${TriggerGrowerSteps.CHANGE_MIN_HUMIDITY}_3`:
            //     userInputNumber = Number(userInput.match(/[0-9]+/))
            //     const plantSettingNumber = triggerStep[triggerStep.length];
            //     const plant = user.plants[plantSettingNumber];
            //     if (!plant || userInputNumber < 0 || userInputNumber > 100) {
            //         resData.trigger = `${TriggerGrowerSteps.CHANGE_MIN_HUMIDITY}_${plantSettingNumber}`;
            //         resData.replyMessage = invalidNumberInput('100');
            //         resolve([resData]);
            //         break;
            //     }
            //     await updatePlantSettings(user, plant, 'minWarning', userInputNumber);
            //     resData.trigger = TriggerGrowerSteps.SHOW_ALL_PLANTS;
            //     resolve([resData])
            //     break;
            default:
                resolve([resData]);
                break;
        }
    }));
});
exports.getReplyFromGrowerBot = getReplyFromGrowerBot;
