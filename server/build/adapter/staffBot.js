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
const customersMessages_1 = require("../messages/customersMessages");
const staffMessages_1 = require("../messages/staffMessages");
const getReplyFromStaffBot = (triggerStep, user, userInput, number, access_token) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        let resData = { replyMessage: '', media: null, trigger: '' };
        let availableProducts;
        let maxOptions;
        let userInputNumber;
        let productSelected;
        let shoppingCart;
        const num = (0, handle_1.cleanNumber)(number);
        const englishUser = true;
        console.log('nextTriggerStep received in Switch Staff:', triggerStep);
        switch (triggerStep) {
            case types_1.TriggerStaffSteps.SUCCESS_SALE_AND_MAIN_MENU:
            case types_1.TriggerStaffSteps.STAFF_ALL_CATEGORIES:
                resData = (0, staffMessages_1.getStuffMainMenuOptions)(resData, user);
                resolve(resData);
                break;
            case types_1.TriggerStaffSteps.ALL_CATEGORIES_ANSWER:
                userInputNumber = Number(userInput.match(/[0-9]+/));
                switch (userInputNumber) {
                    case types_1.TriggerStaffSteps.CHANGE_WORKING_STATE:
                        user.workInfo.isWorking ? yield (0, staffMessages_1.stopWorking)(user) : yield (0, staffMessages_1.startWorking)(user);
                        resData.replyMessage = user.workInfo.isWorking ? 'Empezo a trabajar exitosamente! Metale pata muchacho/a!' : 'Termino de trabajar! Muchas gracias por su esfuerzo! Descansa y te esperamos mañana!!';
                        resData.trigger = types_1.TriggerStaffSteps.STAFF_ALL_CATEGORIES;
                        resolve(resData);
                        break;
                    case types_1.TriggerStaffSteps.SEE_PRODUCTS_TO_UPDATE_STOCK:
                        availableProducts = yield (0, api_1.getProducts)('verduleria');
                        availableProducts = (_b = (_a = availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.data) === null || _a === void 0 ? void 0 : _a.products) === null || _b === void 0 ? void 0 : _b.items;
                        resData.replyMessage = (0, staffMessages_1.listAvailableProductsToUpdate)(availableProducts);
                        resData.trigger = types_1.TriggerStaffSteps.CHOOSE_PRODUCT_TO_UPDATE_STOCK;
                        resolve(resData);
                        break;
                    case types_1.TriggerStaffSteps.SEE_STAFF_INFO:
                        resData.trigger = types_1.TriggerStaffSteps.STAFF_ALL_CATEGORIES;
                        resData = (0, staffMessages_1.getStuffWorkingInfo)(resData, user);
                        resolve(resData);
                        break;
                    case types_1.TriggerStaffSteps.SEE_PRODUCTS_TO_QUICK_SALE:
                        availableProducts = yield (0, api_1.getProducts)('verduleria');
                        availableProducts = (_d = (_c = availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.data) === null || _c === void 0 ? void 0 : _c.products) === null || _d === void 0 ? void 0 : _d.items;
                        resData.replyMessage = (0, staffMessages_1.listAvailableProductsToSale)(availableProducts);
                        resData.trigger = types_1.TriggerStaffSteps.CHOOSE_PRODUCT_TO_SALE;
                        resolve(resData);
                        break;
                    default:
                        resData.trigger = types_1.TriggerStaffSteps.STAFF_ALL_CATEGORIES;
                        resData.replyMessage = (0, staffMessages_1.noOptionFound)();
                        resolve(resData);
                        break;
                }
                break;
            case types_1.TriggerStaffSteps.CHOOSE_PRODUCT_TO_SALE:
                userInputNumber = Number(userInput);
                availableProducts = yield (0, api_1.getProducts)('verduleria');
                availableProducts = (_f = (_e = availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.data) === null || _e === void 0 ? void 0 : _e.products) === null || _f === void 0 ? void 0 : _f.items;
                shoppingCart = user === null || user === void 0 ? void 0 : user.shoppingCart;
                productSelected = availableProducts[userInputNumber - 1];
                // agregar opcion volver al menu principal
                maxOptions = availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.length;
                // +1 because of the got to pay option
                if ((0, shoppingUtils_1.isUserInputInvalid)(userInputNumber, maxOptions)) {
                    resData.trigger = types_1.TriggerStaffSteps.CHOOSE_PRODUCT_TO_UPDATE_STOCK;
                    resData.replyMessage = (0, customersMessages_1.invalidNumberInput)(maxOptions);
                    resolve(resData);
                    break;
                }
                shoppingCart = (0, shoppingUtils_1.getQuickSaleShoppingCart)(user);
                shoppingCart.products.push({
                    product_id: productSelected.id,
                    price: productSelected.price,
                    sale_price: productSelected.sale_price,
                    name: productSelected.name,
                });
                yield (0, api_1.updateUserShoppingCart)(shoppingCart);
                resData.replyMessage = (0, staffMessages_1.getAmountOfProductToSell)(productSelected.name);
                resData.trigger = types_1.TriggerStaffSteps.CHOOSE_AMOUNT_UNITS_TO_SALE;
                resolve(resData);
                break;
            case types_1.TriggerStaffSteps.CHOOSE_PRODUCT_TO_UPDATE_STOCK:
                userInputNumber = Number(userInput);
                availableProducts = yield (0, api_1.getProducts)('verduleria');
                availableProducts = (_h = (_g = availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.data) === null || _g === void 0 ? void 0 : _g.products) === null || _h === void 0 ? void 0 : _h.items;
                shoppingCart = user === null || user === void 0 ? void 0 : user.shoppingCart;
                productSelected = availableProducts[userInputNumber - 1];
                // agregar opcion volver al menu principal
                maxOptions = availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.length;
                // +1 because of the got to pay option
                if ((0, shoppingUtils_1.isUserInputInvalid)(userInputNumber, maxOptions)) {
                    resData.trigger = types_1.TriggerStaffSteps.CHOOSE_PRODUCT_TO_UPDATE_STOCK;
                    resData.replyMessage = (0, customersMessages_1.invalidNumberInput)(maxOptions);
                    resolve(resData);
                    break;
                }
                shoppingCart = (0, shoppingUtils_1.getEmptyShoppingCart)(user, shoppingCart.lenguageLocale);
                shoppingCart.products.push({
                    product_id: productSelected.id
                });
                yield (0, api_1.updateUserShoppingCart)(shoppingCart);
                resData.replyMessage = (0, staffMessages_1.getNewStockOfProduct)(productSelected.name);
                resData.trigger = types_1.TriggerStaffSteps.INTRODUCE_PRODUCT_NEW_STOCK;
                resolve(resData);
                break;
            case types_1.TriggerStaffSteps.CHOOSE_AMOUNT_UNITS_TO_SALE:
                userInputNumber = Number(userInput);
                shoppingCart = user === null || user === void 0 ? void 0 : user.shoppingCart;
                availableProducts = yield (0, api_1.getProducts)('verduleria');
                availableProducts = (_k = (_j = availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.data) === null || _j === void 0 ? void 0 : _j.products) === null || _k === void 0 ? void 0 : _k.items;
                const prodSelectedIndex = shoppingCart.products.length - 1;
                if ((availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.length) <= 0 || !!!availableProducts)
                    throw new Error('Error 3: no available products');
                const productInShoppingCart = ((_l = shoppingCart === null || shoppingCart === void 0 ? void 0 : shoppingCart.products) === null || _l === void 0 ? void 0 : _l.length) > 0 ? shoppingCart.products[prodSelectedIndex] : null;
                if (!productInShoppingCart) {
                    resData.trigger = types_1.TriggerStaffSteps.STAFF_ALL_CATEGORIES;
                    resData.replyMessage = (0, customersMessages_1.invalidNumberInput)(availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.length);
                    resolve(resData);
                    break;
                }
                productSelected = availableProducts.find(((prod) => prod.id === productInShoppingCart.product_id));
                if (!productSelected) {
                    console.log('issue jere');
                    resolve(resData);
                    break;
                }
                if ((0, shoppingUtils_1.isUserInputInvalid)(userInputNumber, Number(productSelected.product_quantity))) {
                    resData.replyMessage = (0, customersMessages_1.invalidProductQuantity)(productSelected.product_quantity);
                    resData.trigger = types_1.TriggerStaffSteps.CHOOSE_AMOUNT_UNITS_TO_SALE;
                    resolve(resData);
                    break;
                }
                // actualizamos la cantidad y preguntamos que otro producto quiere agregar
                shoppingCart.products[prodSelectedIndex].quantity = userInputNumber;
                const updateShoppingCartResponse = yield (0, api_1.updateUserShoppingCart)(shoppingCart);
                // one last check, just in case:
                if ((_p = (_o = (_m = updateShoppingCartResponse === null || updateShoppingCartResponse === void 0 ? void 0 : updateShoppingCartResponse.errors) === null || _m === void 0 ? void 0 : _m[0]) === null || _o === void 0 ? void 0 : _o.message) === null || _p === void 0 ? void 0 : _p.includes("No hay suficiente cantidad de este producto")) {
                    resData.replyMessage = (0, customersMessages_1.invalidProductQuantity)(productSelected.product_quantity);
                    resData.trigger = types_1.TriggerStaffSteps.CHOOSE_AMOUNT_UNITS_TO_SALE;
                    resolve(resData);
                }
                else {
                    const totalItemsAmount = (0, shoppingUtils_1.getTotalAmount)(shoppingCart.products);
                    shoppingCart.discount_amount = 0;
                    shoppingCart.sub_total = totalItemsAmount;
                    shoppingCart.total = totalItemsAmount;
                    shoppingCart.payment_status = 'Pagado';
                    yield (0, api_1.updateUserShoppingCart)(shoppingCart);
                    const res = yield (0, api_1.createQuickOrder)(shoppingCart);
                    if ((_r = (_q = res === null || res === void 0 ? void 0 : res.data) === null || _q === void 0 ? void 0 : _q.createQuickOrder) === null || _r === void 0 ? void 0 : _r.customer_id) {
                        resData = (0, staffMessages_1.getStuffMainMenuOptions)(resData, user, true);
                        resData.trigger = types_1.TriggerStaffSteps.SUCCESS_SALE_AND_MAIN_MENU;
                        resolve(resData);
                    }
                }
                break;
            case types_1.TriggerStaffSteps.INTRODUCE_PRODUCT_NEW_STOCK:
                userInputNumber = Number(userInput);
                shoppingCart = user === null || user === void 0 ? void 0 : user.shoppingCart;
                availableProducts = yield (0, api_1.getProducts)('verduleria');
                availableProducts = (_t = (_s = availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.data) === null || _s === void 0 ? void 0 : _s.products) === null || _t === void 0 ? void 0 : _t.items;
                const product = availableProducts.find(((prod) => { var _a; return prod.id === ((_a = shoppingCart.products[0]) === null || _a === void 0 ? void 0 : _a.product_id); }));
                product.product_quantity = userInputNumber;
                yield (0, api_1.updateProductStock)(product.id, {
                    name: product.name,
                    type: {
                        id: product.type.id,
                        name: product.type.name,
                        slug: product.type.slug
                    },
                    // @ts-ignore
                    categories: JSON.stringify(product.categories.map((category) => ({
                        id: category.id,
                        name: category.name,
                        slug: category.slug
                    }))),
                    description: product.description,
                    images_data: product.images_data,
                    slug: product.slug,
                    packagePrice: Number(product.packagePrice),
                    images: product.images,
                    price: Number(product.price),
                    unit: product.unit,
                    sale_price: Number(product.sale_price),
                    discount_in_percent: Number(product.discount_in_percent),
                    product_quantity: userInputNumber,
                    is_featured: product.is_featured,
                    is_online: product.is_online,
                    meta_title: product.meta_title,
                    meta_keyword: product.meta_keyword,
                    meta_description: product.meta_description,
                });
                resData.replyMessage = 'Actualizado correctamente. Gracias';
                resData.trigger = types_1.TriggerStaffSteps.STAFF_ALL_CATEGORIES;
                resolve(resData);
                break;
            // define this oneeee, and go to "23213521"
            // case TriggerStaffSteps.END_CONVERSATION_AND_RESET_CHAT:
            default:
                console.log('defaultedd');
                resolve([resData]);
                break;
        }
    }));
});
exports.getReplyFromStaffBot = getReplyFromStaffBot;
