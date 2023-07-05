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
exports.getReplyFromShopBot = exports.getReplyFromEmployeeBot = exports.getReplyFromGrowerBot = void 0;
const api_1 = require("../api");
const handle_1 = require("../controllers/handle");
const types_1 = require("../lib/types");
const constant_1 = require("../lib/utils/constant");
const shoppingUtils_1 = require("../lib/utils/shoppingUtils");
const customersMessages_1 = require("../messages/customersMessages");
const workUtils_1 = require("../lib/utils/workUtils");
const { saveMessageJson } = require('./jsonDb');
// const { getDataIa } = require('./diaglogflow')
const stepsInitial = require('../flow/initial.json');
const stepsReponse = require('../flow/response.json');
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
                resData.replyMessage = (0, workUtils_1.getSensorsMenuList)(resData, user, user === null || user === void 0 ? void 0 : user.plants[0], types_1.TriggerGrowerSteps.CHANGE_MIN_HUMIDITY, 'title1', 'buttonText1');
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
const getReplyFromEmployeeBot = (triggerStep, user, userInput, number, access_token) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        let resData = { replyMessage: '', media: null, trigger: '' };
        let availableProducts;
        let deliveryOpts;
        let userInputNumber;
        let productSelected;
        let shoppingCart;
        const num = (0, handle_1.cleanNumber)(number);
        console.log('nextTriggerStep received in Switch Staff:', triggerStep);
        switch (triggerStep) {
            case types_1.TriggerStaffSteps.STAFF_ALL_CATEGORIES:
                resData = (0, workUtils_1.getStuffMainMenuButtons)(resData, user);
                resolve([resData]);
                break;
            case types_1.TriggerStaffSteps.ALL_CATEGORIES_ANSWER:
                userInputNumber = Number(userInput.match(/[0-9]+/));
                resData.trigger = types_1.TriggerStaffSteps.STAFF_ALL_CATEGORIES;
                if (user.workInfo.isWorking && userInputNumber === 1) {
                    yield (0, workUtils_1.stopWorking)(user);
                    resData.replyMessage = 'Termino de trabajar! Muchas gracias por su esfuerzo! Descansa y te esperamos mañana!!';
                    resolve([resData]);
                }
                else if (!user.workInfo.isWorking && userInputNumber === 1) {
                    resData.replyMessage = 'Empezo a trabajar exitosamente! Metale pata muchacho/a!';
                    yield (0, workUtils_1.startWorking)(user);
                    resolve([resData]);
                }
                break;
            default:
                resData = (0, workUtils_1.getStuffMainMenuButtons)(resData, user);
                resolve([resData]);
                break;
        }
    }));
});
exports.getReplyFromEmployeeBot = getReplyFromEmployeeBot;
const getReplyFromShopBot = (triggerStep, user, userInput, number, access_token) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19;
        let resData = { replyMessage: '', media: null, trigger: '' }, availableProducts, deliveryOpts, productSelected, shoppingCart, paymentMethodsResponse, categories, maxOptions, productInShoppingCart, categoriesRes;
        let userInputNumber;
        console.log('nextTriggerStep in Switch BEFORE checks:', triggerStep);
        // aca si el usuario selecciona la opcion que no tiene un numero al principio del label (productos) es porque sigue agregando productos, de lo contrario es porque selecciono el delivery selection 
        if (triggerStep === types_1.TriggerSteps.ADD_PRODUCT_OR_DELIVERY_PICKUP_OPT)
            triggerStep = isNaN(Number(userInput[0])) ? types_1.TriggerSteps.DELIVERY_OR_PICKUP_OPT_SELECTED : types_1.TriggerSteps.ADD_MORE_PRODUCTS_STEP;
        // // aca esta cambiando el nombre o confirma que el nombre esta bien
        // if (triggerStep === TriggerSteps.USER_SHOULD_INPUT_HIS_NAME) triggerStep = normalizeText(userInput).includes('si') ? TriggerSteps.USER_SHOULD_INPUT_HIS_NAME : TriggerSteps.INTODUCE_NEW_USER_NAME;
        console.log('nextTriggerStep in Switch AFTER checks:', triggerStep);
        switch (triggerStep) {
            case types_1.TriggerSteps.INITIAL_UNAUTHENTICATED_USER:
            case types_1.TriggerSteps.UNBLOCK_CHAT:
            case types_1.TriggerSteps.AUTHENTICATED_USER_ALL_CATEGORIES:
            case types_1.TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART:
            case types_1.TriggerSteps.END_CONVERSATION_AND_RESET_CHAT:
                if (triggerStep === types_1.TriggerSteps.INITIAL_UNAUTHENTICATED_USER) {
                    const res = yield (0, api_1.signUpUser)(constant_1.INITIAL_USER_USERNAME, (0, handle_1.cleanNumber)(number), constant_1.INITIAL_USER_PASSWORD);
                    // we should do something if this sign up does not happen
                    const registeredSuccessfully = (_c = (_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.signUp) === null || _c === void 0 ? void 0 : _c.status;
                }
                categoriesRes = yield (0, api_1.getCategories)();
                categories = (_e = (_d = categoriesRes === null || categoriesRes === void 0 ? void 0 : categoriesRes.data) === null || _d === void 0 ? void 0 : _d.categories) === null || _e === void 0 ? void 0 : _e.items;
                categories = (0, shoppingUtils_1.harcodedFilterOfUnusedCategories)(categories);
                if ((categories === null || categories === void 0 ? void 0 : categories.length) <= 0 || !!!categories) {
                    resData.replyMessage = (0, customersMessages_1.noAvailableCategories)();
                    resData.trigger = types_1.TriggerSteps.BLOCK_CHAT;
                    // do we trigger a msj to admin phone?
                    resolve([resData]);
                    break;
                }
                resData = (0, shoppingUtils_1.getCategoriesButtons)(resData, categories);
                resolve([resData]);
                break;
            case types_1.TriggerSteps.BLOCK_CHAT:
            case types_1.TriggerSteps.ALL_CATEGORIES:
            case types_1.TriggerSteps.SELECT_CATEGORY:
                userInputNumber = Number(userInput.match(/[0-9]+/));
                shoppingCart = user === null || user === void 0 ? void 0 : user.shoppingCart;
                // if it doestn have a shopping cart we create an empty one
                shoppingCart = (user === null || user === void 0 ? void 0 : user.shoppingCart) ? user === null || user === void 0 ? void 0 : user.shoppingCart : (0, shoppingUtils_1.getEmptyShoppingCart)(user);
                categoriesRes = yield (0, api_1.getCategories)();
                categories = (_g = (_f = categoriesRes === null || categoriesRes === void 0 ? void 0 : categoriesRes.data) === null || _f === void 0 ? void 0 : _f.categories) === null || _g === void 0 ? void 0 : _g.items;
                categories = (0, shoppingUtils_1.harcodedFilterOfUnusedCategories)(categories);
                maxOptions = (categories === null || categories === void 0 ? void 0 : categories.length) + 1;
                // +1 because of the got to pay option
                if ((0, shoppingUtils_1.isUserInputInvalid)(userInputNumber, maxOptions)) {
                    resData.trigger = types_1.TriggerSteps.SELECT_CATEGORY;
                    resData.replyMessage = (0, customersMessages_1.invalidNumberInput)(maxOptions);
                    resolve([resData]);
                    break;
                }
                const selectedCategory = categories[userInputNumber - 1];
                const talkToARepresentativeOpt = userInputNumber === (categories === null || categories === void 0 ? void 0 : categories.length) + 1;
                if (talkToARepresentativeOpt) {
                    resData.replyMessage = (0, customersMessages_1.hablarConUnRepMsg)();
                    resData.trigger = types_1.TriggerSteps.BLOCK_CHAT;
                    // do we trigger a msj to admin phone?
                    resolve([resData]);
                    break;
                }
                if (!selectedCategory) {
                    resData.trigger = types_1.TriggerSteps.SELECT_CATEGORY;
                    resData.replyMessage = (0, customersMessages_1.invalidNumberInput)(categories === null || categories === void 0 ? void 0 : categories.length);
                    resolve([resData]);
                    break;
                }
                shoppingCart.selectedCategorySlug = selectedCategory.slug;
                yield (0, api_1.updateUserShoppingCart)(shoppingCart);
                availableProducts = yield (0, api_1.getProducts)(shoppingCart.selectedCategorySlug);
                availableProducts = (_j = (_h = availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.data) === null || _h === void 0 ? void 0 : _h.products) === null || _j === void 0 ? void 0 : _j.items;
                if ((availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.length) <= 0 || !!!availableProducts) {
                    resData.replyMessage = (0, customersMessages_1.noAvailableProducts)();
                    resData.trigger = types_1.TriggerSteps.BLOCK_CHAT;
                    // do we trigger a msj to admin phone?
                    resolve([resData]);
                    break;
                }
                resData = (0, shoppingUtils_1.getProductsList)(resData, availableProducts, types_1.TriggerSteps.ADD_PRODUCT_TO_CART, 'Agregar productos a tu pedido', 'Ver lista de productos', shoppingCart);
                resolve([resData]);
                break;
            case types_1.TriggerSteps.ADD_MORE_PRODUCTS_STEP:
            case types_1.TriggerSteps.ADD_PRODUCT_TO_CART:
                userInputNumber = Number(userInput.match(/[0-9]+/));
                shoppingCart = user === null || user === void 0 ? void 0 : user.shoppingCart;
                availableProducts = yield (0, api_1.getProducts)(shoppingCart.selectedCategorySlug);
                availableProducts = (_l = (_k = availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.data) === null || _k === void 0 ? void 0 : _k.products) === null || _l === void 0 ? void 0 : _l.items;
                if ((availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.length) <= 0 || !!!availableProducts) {
                    resData.replyMessage = (0, customersMessages_1.noAvailableProducts)();
                    resData.trigger = types_1.TriggerSteps.BLOCK_CHAT;
                    // do we trigger a msj to admin phone?
                    resolve([resData]);
                    break;
                }
                maxOptions = ((_m = shoppingCart === null || shoppingCart === void 0 ? void 0 : shoppingCart.products) === null || _m === void 0 ? void 0 : _m.length) > 0 ? (availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.length) + 1 : availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.length;
                const deleteShoppingCartOpt = userInputNumber === 0;
                if (deleteShoppingCartOpt) {
                    const newShoppingCart = (0, shoppingUtils_1.getEmptyShoppingCart)(user);
                    yield (0, api_1.updateUserShoppingCart)(newShoppingCart);
                    categoriesRes = yield (0, api_1.getCategories)();
                    categories = (_p = (_o = categoriesRes === null || categoriesRes === void 0 ? void 0 : categoriesRes.data) === null || _o === void 0 ? void 0 : _o.categories) === null || _p === void 0 ? void 0 : _p.items;
                    categories = (0, shoppingUtils_1.harcodedFilterOfUnusedCategories)(categories);
                    if ((categories === null || categories === void 0 ? void 0 : categories.length) <= 0 || !!!categories) {
                        resData.replyMessage = (0, customersMessages_1.noAvailableCategories)();
                        resData.trigger = types_1.TriggerSteps.BLOCK_CHAT;
                        // do we trigger a msj to admin phone?
                        resolve([resData]);
                        break;
                    }
                    resData = (0, shoppingUtils_1.getCategoriesButtons)(resData, categories);
                    resolve([resData]);
                    break;
                }
                // +1 because of the got to pay option
                if ((0, shoppingUtils_1.isUserInputInvalid)(userInputNumber, maxOptions)) {
                    resData.trigger = types_1.TriggerSteps.ADD_PRODUCT_TO_CART;
                    resData.replyMessage = (0, customersMessages_1.invalidNumberInput)(maxOptions);
                    resolve([resData]);
                    break;
                }
                productSelected = availableProducts[userInputNumber - 1];
                if (!productSelected) {
                    resData.trigger = types_1.TriggerSteps.ALL_CATEGORIES;
                    resData.replyMessage = (0, customersMessages_1.invalidNumberInput)(availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.length);
                    resolve([resData]);
                    break;
                }
                const productAdded = {
                    product_id: productSelected.id,
                    unit: productSelected.unit,
                    quantity: 0,
                    recicledQuantity: 0,
                    sale_price: productSelected.sale_price,
                    price: productSelected.price,
                    image: ((_q = productSelected === null || productSelected === void 0 ? void 0 : productSelected.images) === null || _q === void 0 ? void 0 : _q.length) >= 0 ? productSelected === null || productSelected === void 0 ? void 0 : productSelected.images[0] : null,
                    name: productSelected.name,
                };
                // still fix case when trying to add a product were it was added in cart with all the possible stock available
                const productIndexFound = shoppingCart === null || shoppingCart === void 0 ? void 0 : shoppingCart.products.findIndex(((prod) => prod.product_id === productSelected.id));
                if (productIndexFound >= 0)
                    shoppingCart.products.splice(productIndexFound, 1);
                shoppingCart.products.push(productAdded);
                yield (0, api_1.updateUserShoppingCart)(shoppingCart);
                // resData.replyMessage = getQuantityOfProduct(productSelected.name, productSelected.product_quantity)
                resData = (0, shoppingUtils_1.getAddQuantityButtons)(resData, productSelected.product_quantity);
                resolve([resData]);
                break;
            case types_1.TriggerSteps.SELECT_QUANTITY_OF_PRODUCT:
                if (userInput.includes(constant_1.INTRODUCE_QUANTITY_OPT_TEXT)) {
                    resData.replyMessage = (0, customersMessages_1.manualInput)();
                    resData.trigger = types_1.TriggerSteps.SELECT_QUANTITY_OF_PRODUCT;
                    resolve([resData]);
                    break;
                }
                userInputNumber = Number(userInput.match(/[0-9]+/));
                shoppingCart = user === null || user === void 0 ? void 0 : user.shoppingCart;
                availableProducts = yield (0, api_1.getProducts)(shoppingCart.selectedCategorySlug);
                availableProducts = (_s = (_r = availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.data) === null || _r === void 0 ? void 0 : _r.products) === null || _s === void 0 ? void 0 : _s.items;
                if ((availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.length) <= 0 || !!!availableProducts) {
                    resData.replyMessage = (0, customersMessages_1.noAvailableProducts)();
                    resData.trigger = types_1.TriggerSteps.BLOCK_CHAT;
                    // do we trigger a msj to admin phone?
                    resolve([resData]);
                    break;
                }
                deliveryOpts = yield (0, api_1.getDeliveryMethods)();
                deliveryOpts = (_u = (_t = deliveryOpts === null || deliveryOpts === void 0 ? void 0 : deliveryOpts.data) === null || _t === void 0 ? void 0 : _t.deliveryMethods) === null || _u === void 0 ? void 0 : _u.items;
                if ((deliveryOpts === null || deliveryOpts === void 0 ? void 0 : deliveryOpts.length) <= 0 || !!!deliveryOpts) {
                    resData.replyMessage = (0, customersMessages_1.noAvailableDeliveryMethods)();
                    resData.trigger = types_1.TriggerSteps.BLOCK_CHAT;
                    // do we trigger a msj to admin phone?
                    resolve([resData]);
                    break;
                }
                const prodSelectedIndex = shoppingCart.products.length - 1;
                productInShoppingCart = ((_v = shoppingCart === null || shoppingCart === void 0 ? void 0 : shoppingCart.products) === null || _v === void 0 ? void 0 : _v.length) > 0 ? shoppingCart.products[prodSelectedIndex] : null;
                if (!productInShoppingCart) {
                    resData.trigger = types_1.TriggerSteps.ALL_CATEGORIES;
                    resData.replyMessage = (0, customersMessages_1.invalidNumberInput)(availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.length);
                    resolve([resData]);
                    break;
                }
                const product = availableProducts.find(((prod) => prod.id === productInShoppingCart.product_id));
                if (!product) {
                    resolve([resData]);
                    break;
                }
                if ((0, shoppingUtils_1.isUserInputInvalid)(userInputNumber, Number(product.product_quantity))) {
                    resData.replyMessage = (0, customersMessages_1.invalidProductQuantity)(product.product_quantity);
                    resData.trigger = types_1.TriggerSteps.SELECT_QUANTITY_OF_PRODUCT;
                    resolve([resData]);
                    break;
                }
                // actualizamos la cantidad y preguntamos que otro producto quiere agregar
                shoppingCart.products[prodSelectedIndex].quantity = userInputNumber;
                const updateShoppingCartResponse = yield (0, api_1.updateUserShoppingCart)(shoppingCart);
                // one last check, just in case:
                if ((_y = (_x = (_w = updateShoppingCartResponse === null || updateShoppingCartResponse === void 0 ? void 0 : updateShoppingCartResponse.errors) === null || _w === void 0 ? void 0 : _w[0]) === null || _x === void 0 ? void 0 : _x.message) === null || _y === void 0 ? void 0 : _y.includes("No hay suficiente cantidad de este producto")) {
                    resData.replyMessage = (0, customersMessages_1.invalidProductQuantity)(product.product_quantity);
                    resData.trigger = types_1.TriggerSteps.SELECT_QUANTITY_OF_PRODUCT;
                }
                else {
                    // added success case, we relist the products again
                    // ACA VER DE DEVOLVER DOS MENSAJES: UNA LISTA PARA AGREGAR MAS PRODUCTOS Y LISTA DEL CARRITO AddArgumentsAsVariables, Y OTRO MENSAJE APARTE CON UN BOTON DE IR A PAGAR
                    resData = (0, shoppingUtils_1.getProductsList)(resData, availableProducts, types_1.TriggerSteps.ADD_PRODUCT_OR_DELIVERY_PICKUP_OPT, 'Su carrito:', 'Agregar más productos', shoppingCart);
                    const resData3 = Object.assign({}, resData);
                    const resData2 = (0, shoppingUtils_1.getDeliveryMethodsButtons)(resData3, deliveryOpts, types_1.TriggerSteps.ADD_PRODUCT_OR_DELIVERY_PICKUP_OPT, 'Finalizar compra');
                    resolve([resData, resData2]);
                }
                break;
            case types_1.TriggerSteps.DELIVERY_OR_PICKUP_OPT_SELECTED:
                shoppingCart = user === null || user === void 0 ? void 0 : user.shoppingCart;
                deliveryOpts = yield (0, api_1.getDeliveryMethods)();
                deliveryOpts = (_0 = (_z = deliveryOpts === null || deliveryOpts === void 0 ? void 0 : deliveryOpts.data) === null || _z === void 0 ? void 0 : _z.deliveryMethods) === null || _0 === void 0 ? void 0 : _0.items;
                if ((deliveryOpts === null || deliveryOpts === void 0 ? void 0 : deliveryOpts.length) <= 0 || !!!deliveryOpts) {
                    resData.replyMessage = (0, customersMessages_1.noAvailableDeliveryMethods)();
                    resData.trigger = types_1.TriggerSteps.BLOCK_CHAT;
                    // do we trigger a msj to admin phone?
                    resolve([resData]);
                    break;
                }
                // userInputNumber = Number(userInput.match(/[0-9]+/))
                const deliOptIndexFound = deliveryOpts.findIndex(((deliOpt) => userInput.includes(deliOpt.name)));
                // el usuario selecciona metodo de envio y si es valido, preguntamos direccion, o 
                if (deliOptIndexFound < 0) {
                    resData.replyMessage = (0, customersMessages_1.invalidNumberInput)(deliveryOpts.length);
                    resData.trigger = types_1.TriggerSteps.DELIVERY_OR_PICKUP_OPT_SELECTED;
                    resolve([resData]);
                    break;
                }
                const delyOptSelected = deliveryOpts[deliOptIndexFound];
                if (!delyOptSelected) {
                    resData.replyMessage = (0, customersMessages_1.unknownDeliPickUpOptInput)(deliveryOpts);
                    resData.trigger = types_1.TriggerSteps.DELIVERY_OR_PICKUP_OPT_SELECTED;
                    resolve([resData]);
                    break;
                }
                // encontramos que opcion eligio el usuario y setteamos en el shoppingCart con ese delivery method seleccionado
                shoppingCart.delivery_method_id = delyOptSelected.id;
                // arreglar aca abajo::
                shoppingCart.delivery_date = (0, shoppingUtils_1.getDeliveryOrPickUpDatetime)(delyOptSelected.details);
                shoppingCart.delivery_method_name = delyOptSelected.name;
                shoppingCart.delivery_address = delyOptSelected.pickUpAddress;
                yield (0, api_1.updateUserShoppingCart)(shoppingCart);
                paymentMethodsResponse = yield (0, api_1.getPaymentMethods)();
                paymentMethodsResponse = (_2 = (_1 = paymentMethodsResponse === null || paymentMethodsResponse === void 0 ? void 0 : paymentMethodsResponse.data) === null || _1 === void 0 ? void 0 : _1.paymentOptions) === null || _2 === void 0 ? void 0 : _2.items;
                if (!paymentMethodsResponse || (paymentMethodsResponse === null || paymentMethodsResponse === void 0 ? void 0 : paymentMethodsResponse.length) < 1) {
                    resData.replyMessage = (0, customersMessages_1.unknownUserInput)();
                    resData.trigger = types_1.TriggerSteps.ALL_CATEGORIES;
                    resolve([resData]);
                    break;
                }
                resData = (delyOptSelected === null || delyOptSelected === void 0 ? void 0 : delyOptSelected.isPickUp)
                    ? (0, shoppingUtils_1.getPaymentButtons)(resData, paymentMethodsResponse, types_1.TriggerSteps.SELECT_PAYMENT_METHOD)
                    : (0, shoppingUtils_1.getInputDeliveryAddress)(resData, types_1.TriggerSteps.DELIVERY_OPT_SELECTED, 'Delivery seleccionado');
                const resData3 = Object.assign({}, resData);
                resData3.replyMessage = '*Método seleccionado con éxito!*';
                (delyOptSelected === null || delyOptSelected === void 0 ? void 0 : delyOptSelected.isPickUp) ? resolve([resData3, resData]) : resolve([resData]);
                break;
            // CAMBIAR LUEGO A BUSCAR OPTIONS DE FECHAS DE PICKUP
            // caso en que usuario elije envio a domicilio
            case types_1.TriggerSteps.DELIVERY_OPT_SELECTED:
                if ((userInput === null || userInput === void 0 ? void 0 : userInput.length) < 10) {
                    resData.replyMessage = (0, customersMessages_1.enterValidAddress)();
                    resData.trigger = types_1.TriggerSteps.DELIVERY_OPT_SELECTED;
                    resolve([resData]);
                    break;
                }
                shoppingCart = user === null || user === void 0 ? void 0 : user.shoppingCart;
                shoppingCart.delivery_address = userInput;
                yield (0, api_1.updateUserShoppingCart)(shoppingCart);
                const newAddress = (0, shoppingUtils_1.getEmptyAddress)(user.id, userInput);
                // const addressAddResponse = await addAddressToUser(user.id, newAddress.address, newAddress.title, newAddress.location, newAddress.instructions, newAddress.is_primary);
                // now we ask for the payment method
                paymentMethodsResponse = yield (0, api_1.getPaymentMethods)();
                paymentMethodsResponse = (_4 = (_3 = paymentMethodsResponse === null || paymentMethodsResponse === void 0 ? void 0 : paymentMethodsResponse.data) === null || _3 === void 0 ? void 0 : _3.paymentOptions) === null || _4 === void 0 ? void 0 : _4.items;
                if (!paymentMethodsResponse || !deliveryOpts) {
                    resData.replyMessage = (0, customersMessages_1.unknownUserInput)();
                    resData.trigger = types_1.TriggerSteps.ALL_CATEGORIES;
                    resolve([resData]);
                }
                resData = (0, shoppingUtils_1.getPaymentButtons)(resData, paymentMethodsResponse, types_1.TriggerSteps.SELECT_PAYMENT_METHOD);
                const resData4 = Object.assign({}, resData);
                resData4.replyMessage = '*Método seleccionado con éxito!*';
                resolve([resData4, resData]);
                break;
            case types_1.TriggerSteps.SELECT_PAYMENT_METHOD:
                userInputNumber = Number(userInput.match(/[0-9]+/));
                paymentMethodsResponse = yield (0, api_1.getPaymentMethods)();
                if (!((_6 = (_5 = paymentMethodsResponse === null || paymentMethodsResponse === void 0 ? void 0 : paymentMethodsResponse.data) === null || _5 === void 0 ? void 0 : _5.paymentOptions) === null || _6 === void 0 ? void 0 : _6.items)) {
                    resData.replyMessage = (0, customersMessages_1.unknownUserInput)();
                    resData.trigger = types_1.TriggerSteps.ALL_CATEGORIES;
                    resolve([resData]);
                }
                shoppingCart = user === null || user === void 0 ? void 0 : user.shoppingCart;
                const paymentMethodsOpts = (_8 = (_7 = paymentMethodsResponse === null || paymentMethodsResponse === void 0 ? void 0 : paymentMethodsResponse.data) === null || _7 === void 0 ? void 0 : _7.paymentOptions) === null || _8 === void 0 ? void 0 : _8.items;
                // el usuario selecciona metodo de envio y si es valido, preguntamos direccion, o 
                if ((0, shoppingUtils_1.isUserInputInvalid)(userInputNumber, paymentMethodsOpts === null || paymentMethodsOpts === void 0 ? void 0 : paymentMethodsOpts.length)) {
                    resData.replyMessage = (0, customersMessages_1.invalidNumberInput)(paymentMethodsOpts.length);
                    resData.trigger = types_1.TriggerSteps.SELECT_PAYMENT_METHOD;
                    resolve([resData]);
                    break;
                }
                const paymentSelected = paymentMethodsOpts[userInputNumber - 1];
                if (!paymentSelected) {
                    resData.replyMessage = (0, customersMessages_1.unknownPaymentOptInput)(paymentMethodsOpts);
                    resData.trigger = types_1.TriggerSteps.SELECT_PAYMENT_METHOD;
                    resolve([resData]);
                    break;
                }
                // encuentra que opcion eligio el usuario y setteamos el shoppingCart con ese metodo
                deliveryOpts = yield (0, api_1.getDeliveryMethods)();
                deliveryOpts = (_10 = (_9 = deliveryOpts === null || deliveryOpts === void 0 ? void 0 : deliveryOpts.data) === null || _9 === void 0 ? void 0 : _9.deliveryMethods) === null || _10 === void 0 ? void 0 : _10.items;
                if ((deliveryOpts === null || deliveryOpts === void 0 ? void 0 : deliveryOpts.length) <= 0 || !!!deliveryOpts) {
                    resData.replyMessage = (0, customersMessages_1.noAvailableDeliveryMethods)();
                    resData.trigger = types_1.TriggerSteps.BLOCK_CHAT;
                    // do we trigger a msj to admin phone?
                    resolve([resData]);
                    break;
                }
                const deliveryMethodSelected2 = deliveryOpts === null || deliveryOpts === void 0 ? void 0 : deliveryOpts.find((deliOpt) => deliOpt.id === shoppingCart.delivery_method_id);
                shoppingCart.payment_method_name = paymentSelected.name;
                shoppingCart.payment_option_type = paymentSelected.type;
                shoppingCart.payment_option_id = paymentSelected.id;
                // now we calculate total
                const totalItemsAmount = (0, shoppingUtils_1.getTotalAmount)(shoppingCart.products);
                const ccCharge = (0, shoppingUtils_1.calculateCCCharge)(paymentSelected, totalItemsAmount);
                const deliveryFee = (0, shoppingUtils_1.calculateDeliveryCharge)(deliveryMethodSelected2);
                shoppingCart.discount_amount = 0;
                shoppingCart.sub_total = totalItemsAmount;
                shoppingCart.ccCharge = ccCharge;
                shoppingCart.deliveryFee = deliveryFee;
                shoppingCart.total = totalItemsAmount + ccCharge + deliveryFee;
                yield (0, api_1.updateUserShoppingCart)(shoppingCart);
                if ((user === null || user === void 0 ? void 0 : user.name) === constant_1.INITIAL_USER_USERNAME || ((_11 = user === null || user === void 0 ? void 0 : user.name) === null || _11 === void 0 ? void 0 : _11.length) < 3 || !(user === null || user === void 0 ? void 0 : user.name)) {
                    resData.replyMessage = (0, customersMessages_1.enterValidName)();
                    resData.trigger = types_1.TriggerSteps.USER_SHOULD_INPUT_HIS_NAME;
                    resolve([resData]);
                    break;
                }
                resData = (0, shoppingUtils_1.confirmNameOrNewNameButtons)(resData, user.name);
                resolve([resData]);
                break;
            case types_1.TriggerSteps.INTODUCE_NEW_USER_NAME:
                resData.replyMessage = (0, customersMessages_1.enterValidName)();
                resData.trigger = types_1.TriggerSteps.USER_SHOULD_INPUT_HIS_NAME;
                resolve([resData]);
                break;
            case types_1.TriggerSteps.USER_SHOULD_INPUT_HIS_NAME:
                const userName = userInput;
                shoppingCart = user === null || user === void 0 ? void 0 : user.shoppingCart;
                switch (userInput) {
                    case constant_1.INTRODUCE_NEW_NAME_KEY_WORDS:
                        resData.replyMessage = (0, customersMessages_1.enterValidName)();
                        resData.trigger = types_1.TriggerSteps.USER_SHOULD_INPUT_HIS_NAME;
                        break;
                    case constant_1.KEEP_USER_NAME_KEY_WORD:
                        resData = (0, shoppingUtils_1.getOrderConfirmationButtons)(resData, shoppingCart, types_1.TriggerSteps.ORDER_CHECK_CONFIRMATION, user === null || user === void 0 ? void 0 : user.name);
                        break;
                    default:
                        if ((userInput === null || userInput === void 0 ? void 0 : userInput.length) < 4) {
                            resData.replyMessage = (0, customersMessages_1.reEnterValidName)();
                            resData.trigger = types_1.TriggerSteps.USER_SHOULD_INPUT_HIS_NAME;
                            break;
                        }
                        const res = yield (0, api_1.updateUserNameAndEmail)(user.id, userName, user.email, access_token);
                        if (!((_13 = (_12 = res === null || res === void 0 ? void 0 : res.data) === null || _12 === void 0 ? void 0 : _12.updateUserNameAndEmail) === null || _13 === void 0 ? void 0 : _13.status))
                            console.log('coulnt updateUserNameAndEmail ', res);
                        resData = (0, shoppingUtils_1.getOrderConfirmationButtons)(resData, shoppingCart, types_1.TriggerSteps.ORDER_CHECK_CONFIRMATION, userInput);
                        break;
                }
                resolve([resData]);
                break;
            case types_1.TriggerSteps.ORDER_CHECK_CONFIRMATION:
                userInputNumber = Number(userInput.match(/[0-9]+/));
                shoppingCart = user === null || user === void 0 ? void 0 : user.shoppingCart;
                switch (userInputNumber) {
                    case 1:
                        const res = yield (0, api_1.createOrder)(shoppingCart);
                        if ((_15 = (_14 = res === null || res === void 0 ? void 0 : res.data) === null || _14 === void 0 ? void 0 : _14.createOrder) === null || _15 === void 0 ? void 0 : _15.customer_id) {
                            resData.replyMessage = (0, shoppingUtils_1.getOrderConfirmationMsgText)(shoppingCart);
                            resData.trigger = types_1.TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
                            yield (0, api_1.updateUserShoppingCart)(shoppingCart);
                            resolve([resData]);
                        }
                        else {
                            resData.replyMessage = (0, customersMessages_1.purchaseErrorMsg)();
                            resData.trigger = types_1.TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
                            resolve([resData]);
                        }
                        break;
                    case 2:
                        categoriesRes = yield (0, api_1.getCategories)();
                        categories = (_17 = (_16 = categoriesRes === null || categoriesRes === void 0 ? void 0 : categoriesRes.data) === null || _16 === void 0 ? void 0 : _16.categories) === null || _17 === void 0 ? void 0 : _17.items;
                        categories = (0, shoppingUtils_1.harcodedFilterOfUnusedCategories)(categories);
                        if ((categories === null || categories === void 0 ? void 0 : categories.length) <= 0 || !!!categories) {
                            resData.replyMessage = (0, customersMessages_1.noAvailableCategories)();
                            resData.trigger = types_1.TriggerSteps.BLOCK_CHAT;
                            // do we trigger a msj to admin phone?
                            resolve([resData]);
                            break;
                        }
                        resData = (0, shoppingUtils_1.getCategoriesButtons)(resData, categories);
                        resolve([resData]);
                        break;
                    case 3:
                        resData.trigger = types_1.TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
                        resData.replyMessage = (0, customersMessages_1.thanksMsgNoPurchase)();
                        resolve([resData]);
                        break;
                    default:
                        resData.replyMessage = (0, customersMessages_1.unknownInputDefault)();
                        resData.trigger = types_1.TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
                        resolve([resData]);
                        break;
                }
                break;
            case types_1.TriggerSteps.END_CONVERSATION_AND_RESET_CHAT:
                resData.trigger = types_1.TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
                resData.replyMessage = (0, customersMessages_1.thanksMsgNoPurchase)();
                resolve([resData]);
                break;
            default:
                categoriesRes = yield (0, api_1.getCategories)();
                categories = (_19 = (_18 = categoriesRes === null || categoriesRes === void 0 ? void 0 : categoriesRes.data) === null || _18 === void 0 ? void 0 : _18.categories) === null || _19 === void 0 ? void 0 : _19.items;
                categories = (0, shoppingUtils_1.harcodedFilterOfUnusedCategories)(categories);
                if ((categories === null || categories === void 0 ? void 0 : categories.length) <= 0 || !!!categories) {
                    resData.replyMessage = (0, customersMessages_1.noAvailableCategories)();
                    resData.trigger = types_1.TriggerSteps.BLOCK_CHAT;
                    // do we trigger a msj to admin phone?
                    resolve([resData]);
                    break;
                }
                resData = (0, shoppingUtils_1.getCategoriesButtons)(resData, categories);
                resolve([resData]);
                break;
        }
    }));
});
exports.getReplyFromShopBot = getReplyFromShopBot;
// export const getIA = (message: string) => new Promise((resolve, reject) => {
//     /**
//      * Si usas dialogflow
//      */
//      if (process.env.BOT_DATABASE === 'dialogflow') {
//         let resData = { replyMessage: '', media: null, trigger: null }
//         getDataIa(message,(dt: any) => {
//             resData = { ...resData, ...dt }
//             resolve([resData])
//         })
//     }
// })
// export const identifyFirstMessageAndGetInitialResponse = (message: string) => new Promise((resolve, reject) => {
//     /**
//      * Si no estas usando un gesto de base de datos
//      */
//     console.log('process.env.BOT_DATABASE', process.env.BOT_DATABASE)
//     if (process.env.BOT_DATABASE === 'none') {
//         const { key } = stepsInitial.find((k: any) => k.keywords.includes(message)) || { key: null }
//         console.log('key', key)
//         const response: string = key || null
//         resolve(response)
//     }
// })
/**
//  *
//  * @param {*} message
//  * @param {*} date
//  * @param {*} trigger
//  * @param {*} number
//  * @returns
//  */
// export const saveMessage = (message: string, trigger: TriggerSteps | null, number: string) => new Promise(async (resolve, reject) => {
// resolve( await saveMessageJson( message, trigger, number ) )
//  switch ( process.env.DATABASE ) {
//      case 'mysql':
//          resolve( await saveMessageMysql( message, trigger, number ) )
//          break;
//      case 'none':
//          break;
//      default:
//          resolve(true)
//          break;
// }
// })
