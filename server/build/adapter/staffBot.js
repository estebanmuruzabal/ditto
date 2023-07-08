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
exports.getReplyFromStaffBot = void 0;
const api_1 = require("../api");
const handle_1 = require("../controllers/handle");
const types_1 = require("../lib/types");
const shoppingUtils_1 = require("../lib/utils/shoppingUtils");
const staffMessages_1 = require("../messages/staffMessages");
const getReplyFromStaffBot = (triggerStep, user, userInput, number, access_token) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f;
        let resData = { replyMessage: '', media: null, trigger: '' };
        let availableProducts;
        let deliveryOpts;
        let userInputNumber;
        let productSelected;
        let shoppingCart;
        const num = (0, handle_1.cleanNumber)(number);
        // change bellowwwwww
        shoppingCart.selectedCategorySlug = 'harcode this';
        console.log('nextTriggerStep received in Switch Staff:', triggerStep);
        switch (triggerStep) {
            case types_1.TriggerStaffSteps.STAFF_ALL_CATEGORIES:
                resData = (0, staffMessages_1.getStuffMainMenuOptions)(resData, user);
                resolve([resData]);
                break;
            case types_1.TriggerStaffSteps.ALL_CATEGORIES_ANSWER:
                userInputNumber = Number(userInput.match(/[0-9]+/));
                switch (userInputNumber) {
                    case types_1.TriggerStaffSteps.CHANGE_WORKING_STATE:
                        user.workInfo.isWorking ? yield (0, staffMessages_1.stopWorking)(user) : yield (0, staffMessages_1.startWorking)(user);
                        resData.replyMessage = user.workInfo.isWorking ? 'Termino de trabajar! Muchas gracias por su esfuerzo! Descansa y te esperamos mañana!!' : 'Empezo a trabajar exitosamente! Metale pata muchacho/a!';
                        resData.trigger = types_1.TriggerStaffSteps.STAFF_ALL_CATEGORIES;
                        resolve([resData]);
                        break;
                    case types_1.TriggerStaffSteps.SEE_PRODUCTS_TO_UPDATE_STOCK:
                        availableProducts = yield (0, api_1.getProducts)(shoppingCart.selectedCategorySlug);
                        availableProducts = (_b = (_a = availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.data) === null || _a === void 0 ? void 0 : _a.products) === null || _b === void 0 ? void 0 : _b.items;
                        resData.replyMessage = (0, staffMessages_1.listAvailableProductsToUpdate)(availableProducts);
                        resData.trigger = types_1.TriggerStaffSteps.UPDATE_PRODUCT_STOCK;
                        resolve([resData]);
                        break;
                    case types_1.TriggerStaffSteps.SEE_STAFF_INFO:
                        resData = (0, staffMessages_1.getStuffWorkingInfo)(resData, user);
                        resolve([resData]);
                        break;
                    default:
                        break;
                }
                break;
            case types_1.TriggerStaffSteps.UPDATE_PRODUCT_STOCK:
                userInputNumber = Number(userInput);
                availableProducts = yield (0, api_1.getProducts)(shoppingCart.selectedCategorySlug);
                availableProducts = (_d = (_c = availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.data) === null || _c === void 0 ? void 0 : _c.products) === null || _d === void 0 ? void 0 : _d.items;
                shoppingCart = user === null || user === void 0 ? void 0 : user.shoppingCart;
                productSelected = availableProducts[userInputNumber - 1];
                shoppingCart.products.push({
                    product_id: productSelected.id,
                    quantity: 0,
                    name: productSelected.name,
                });
                yield (0, api_1.updateUserShoppingCart)(shoppingCart);
                resData.replyMessage = (0, staffMessages_1.getNewStockOfProduct)(productSelected.name);
                resData.trigger = types_1.TriggerStaffSteps.INTRODUCE_PRODUCT_STOCK;
                resolve(resData);
            case types_1.TriggerStaffSteps.INTRODUCE_PRODUCT_STOCK:
                userInputNumber = Number(userInput);
                availableProducts = yield (0, api_1.getProducts)(shoppingCart.selectedCategorySlug);
                availableProducts = (_f = (_e = availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.data) === null || _e === void 0 ? void 0 : _e.products) === null || _f === void 0 ? void 0 : _f.items;
                if ((0, shoppingUtils_1.isUserInputInvalid)(userInputNumber, availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.length)) {
                    resData.trigger = types_1.TriggerStaffSteps.UPDATE_PRODUCT_STOCK;
                    resData.replyMessage = (0, staffMessages_1.listAvailableProductsToUpdateAsInvalid)(availableProducts);
                    resolve(resData);
                    break;
                }
                const product = availableProducts.find(((prod) => { var _a; return prod.id === ((_a = shoppingCart.products[0]) === null || _a === void 0 ? void 0 : _a.product_id); }));
                product.quantity = userInputNumber;
                yield (0, api_1.updateProductStock)(product);
                shoppingCart.products = [];
                yield (0, api_1.updateUserShoppingCart)(shoppingCart);
                resData.replyMessage = 'Actualizado correctamente. Gracias';
                resData.trigger = types_1.TriggerStaffSteps.STAFF_ALL_CATEGORIES;
                resolve(resData);
            default:
                console.log('defaultedd');
                resolve([resData]);
                break;
        }
    }));
});
exports.getReplyFromStaffBot = getReplyFromStaffBot;
