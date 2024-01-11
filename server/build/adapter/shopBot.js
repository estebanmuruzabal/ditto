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
exports.getReplyFromShopBot = void 0;
const api_1 = require("../api");
const handle_1 = require("../controllers/handle");
const types_1 = require("../lib/types");
const constant_1 = require("../lib/utils/constant");
const shoppingUtils_1 = require("../lib/utils/shoppingUtils");
const customersMessages_1 = require("../messages/customersMessages");
const lenguageLocale = 'en';
const getReplyFromShopBot = (triggerStep, user, userInput, number, access_token) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32;
        let resData = { replyMessage: '', media: null, trigger: '' };
        let availableProducts;
        let deliveryOpts;
        let userInputNumber;
        let productSelected;
        let shoppingCart;
        let paymentMethodsResponse;
        let categories;
        let maxOptions;
        let productInShoppingCart;
        let categoriesRes;
        const num = (0, handle_1.cleanNumber)(number);
        console.log('step in SHOP BOT Switch:', triggerStep);
        switch (triggerStep) {
            case types_1.TriggerSteps.INITIAL_UNAUTHENTICATED_USER:
                const res = yield (0, api_1.signUpUser)(constant_1.INITIAL_USER_USERNAME, num, constant_1.INITIAL_USER_PASSWORD);
                const registeredSuccessfully = (_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.signUp) === null || _b === void 0 ? void 0 : _b.status;
                if (!registeredSuccessfully) {
                    resData.replyMessage = (0, customersMessages_1.thereWasAProblemWaitForAssistance)();
                    resData.trigger = types_1.TriggerSteps.INITIAL_UNAUTHENTICATED_USER;
                    resolve(resData);
                }
                categoriesRes = yield (0, api_1.getCategories)();
                categories = (_d = (_c = categoriesRes === null || categoriesRes === void 0 ? void 0 : categoriesRes.data) === null || _c === void 0 ? void 0 : _c.categories) === null || _d === void 0 ? void 0 : _d.items;
                categories = (0, shoppingUtils_1.harcodedFilterOfUnusedCategories)(categories);
                resData.replyMessage = (0, customersMessages_1.mainMenuUnauthenticatedUser)(categories);
                resData.trigger = types_1.TriggerSteps.SELECT_CATEGORY;
                resolve(resData);
                break;
            case types_1.TriggerSteps.UNBLOCK_CHAT:
            case types_1.TriggerSteps.AUTHENTICATED_USER_ALL_CATEGORIES:
                categoriesRes = yield (0, api_1.getCategories)();
                categories = (_f = (_e = categoriesRes === null || categoriesRes === void 0 ? void 0 : categoriesRes.data) === null || _e === void 0 ? void 0 : _e.categories) === null || _f === void 0 ? void 0 : _f.items;
                categories = (0, shoppingUtils_1.harcodedFilterOfUnusedCategories)(categories);
                if ((categories === null || categories === void 0 ? void 0 : categories.length) <= 0 || !!!categories)
                    throw new Error('Error 2: no available categories');
                if ((user === null || user === void 0 ? void 0 : user.id) && (user === null || user === void 0 ? void 0 : user.name)) {
                    resData.replyMessage = user.name !== constant_1.INITIAL_USER_USERNAME ? (0, customersMessages_1.mainMenuAuthenticatedUser)(user === null || user === void 0 ? void 0 : user.name, categories) : (0, customersMessages_1.mainMenuUnauthenticatedUser)(categories);
                    resData.trigger = types_1.TriggerSteps.SELECT_CATEGORY;
                    resolve(resData);
                }
                else {
                    resData.replyMessage = (0, customersMessages_1.thereWasAProblemWaitForAssistance2)();
                    resData.trigger = types_1.TriggerSteps.BLOCK_CHAT;
                    resolve(resData);
                }
                break;
            case types_1.TriggerSteps.BLOCK_CHAT:
            case types_1.TriggerSteps.ALL_CATEGORIES:
                // el usuario esta autenticado y respondio al menu inicial
                userInputNumber = Number(userInput);
                categoriesRes = yield (0, api_1.getCategories)();
                categories = (_h = (_g = categoriesRes === null || categoriesRes === void 0 ? void 0 : categoriesRes.data) === null || _g === void 0 ? void 0 : _g.categories) === null || _h === void 0 ? void 0 : _h.items;
                categories = (0, shoppingUtils_1.harcodedFilterOfUnusedCategories)(categories);
                if ((categories === null || categories === void 0 ? void 0 : categories.length) <= 0 || !!!categories)
                    throw new Error('Error 2: no available categories');
                resData.replyMessage = (0, customersMessages_1.listCategories)(categories);
                resData.trigger = types_1.TriggerSteps.SELECT_CATEGORY;
                resolve(resData);
                break;
            case types_1.TriggerSteps.SELECT_CATEGORY:
                userInputNumber = Number(userInput);
                shoppingCart = user === null || user === void 0 ? void 0 : user.shoppingCart;
                // if it doestn have a shopping cart we create an empty one
                shoppingCart = (user === null || user === void 0 ? void 0 : user.shoppingCart) ? user === null || user === void 0 ? void 0 : user.shoppingCart : (0, shoppingUtils_1.getEmptyShoppingCart)(user);
                categoriesRes = yield (0, api_1.getCategories)();
                categories = (_k = (_j = categoriesRes === null || categoriesRes === void 0 ? void 0 : categoriesRes.data) === null || _j === void 0 ? void 0 : _j.categories) === null || _k === void 0 ? void 0 : _k.items;
                categories = (0, shoppingUtils_1.harcodedFilterOfUnusedCategories)(categories);
                maxOptions = (categories === null || categories === void 0 ? void 0 : categories.length) + 1;
                // +1 because of the got to pay option
                if ((0, shoppingUtils_1.isUserInputInvalid)(userInputNumber, maxOptions)) {
                    resData.trigger = types_1.TriggerSteps.SELECT_CATEGORY;
                    resData.replyMessage = (0, customersMessages_1.invalidNumberInput)(maxOptions);
                    resolve(resData);
                    break;
                }
                const selectedCategory = categories[userInputNumber - 1];
                const talkToARepresentativeOpt = userInputNumber === (categories === null || categories === void 0 ? void 0 : categories.length) + 1;
                if (talkToARepresentativeOpt) {
                    resData.replyMessage = (0, customersMessages_1.hablarConUnRepMsg)();
                    resData.trigger = types_1.TriggerSteps.BLOCK_CHAT;
                    // do we trigger a msj to admin phone?
                    resolve(resData);
                    break;
                }
                if (!selectedCategory) {
                    resData.trigger = types_1.TriggerSteps.SELECT_CATEGORY;
                    resData.replyMessage = (0, customersMessages_1.invalidNumberInput)(categories === null || categories === void 0 ? void 0 : categories.length);
                    resolve(resData);
                    break;
                }
                shoppingCart.selectedCategorySlug = selectedCategory.slug;
                yield (0, api_1.updateUserShoppingCart)(shoppingCart);
                availableProducts = yield (0, api_1.getProducts)(shoppingCart.selectedCategorySlug);
                availableProducts = (_m = (_l = availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.data) === null || _l === void 0 ? void 0 : _l.products) === null || _m === void 0 ? void 0 : _m.items;
                if ((availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.length) <= 0 || !!!availableProducts) {
                    resData.replyMessage = (0, customersMessages_1.noAvailableProducts)();
                    resData.trigger = types_1.TriggerSteps.ALL_CATEGORIES;
                    // do we trigger a msj to admin phone?
                    resolve(resData);
                    break;
                }
                resData.replyMessage = (0, customersMessages_1.listAvailableProducts)(availableProducts);
                resData.trigger = types_1.TriggerSteps.ADD_PRODUCT_TO_CART;
                resolve(resData);
                break;
            case types_1.TriggerSteps.ADD_MORE_PRODUCTS_STEP:
            case types_1.TriggerSteps.ADD_PRODUCT_TO_CART:
                userInputNumber = Number(userInput);
                shoppingCart = user === null || user === void 0 ? void 0 : user.shoppingCart;
                availableProducts = yield (0, api_1.getProducts)(shoppingCart.selectedCategorySlug);
                availableProducts = (_p = (_o = availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.data) === null || _o === void 0 ? void 0 : _o.products) === null || _p === void 0 ? void 0 : _p.items;
                if ((availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.length) <= 0 || !!!availableProducts)
                    throw new Error('Error 1: no available products');
                maxOptions = ((_q = shoppingCart === null || shoppingCart === void 0 ? void 0 : shoppingCart.products) === null || _q === void 0 ? void 0 : _q.length) > 0 ? (availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.length) + 1 : availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.length;
                // +1 because of the got to pay option
                if ((0, shoppingUtils_1.isUserInputInvalid)(userInputNumber, maxOptions)) {
                    resData.trigger = types_1.TriggerSteps.ADD_PRODUCT_TO_CART;
                    resData.replyMessage = (0, customersMessages_1.invalidNumberInput)(maxOptions);
                    resolve(resData);
                    break;
                }
                const goToSetDeliveryStepSelected = userInputNumber === (availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.length) + 1;
                if (goToSetDeliveryStepSelected) {
                    deliveryOpts = yield (0, api_1.getDeliveryMethods)();
                    if (((_t = (_s = (_r = deliveryOpts === null || deliveryOpts === void 0 ? void 0 : deliveryOpts.data) === null || _r === void 0 ? void 0 : _r.deliveryMethods) === null || _s === void 0 ? void 0 : _s.items) === null || _t === void 0 ? void 0 : _t.length) <= 0 || !!!((_v = (_u = deliveryOpts === null || deliveryOpts === void 0 ? void 0 : deliveryOpts.data) === null || _u === void 0 ? void 0 : _u.deliveryMethods) === null || _v === void 0 ? void 0 : _v.items)) {
                        throw new Error('No delivery methods set');
                    }
                    ;
                    resData.replyMessage = (0, customersMessages_1.deliveryOptions)((_x = (_w = deliveryOpts === null || deliveryOpts === void 0 ? void 0 : deliveryOpts.data) === null || _w === void 0 ? void 0 : _w.deliveryMethods) === null || _x === void 0 ? void 0 : _x.items);
                    resData.trigger = types_1.TriggerSteps.DELIVERY_OR_PICKUP_OPT_SELECTED;
                    resolve(resData);
                    break;
                }
                productSelected = availableProducts[userInputNumber - 1];
                if (!productSelected) {
                    resData.trigger = types_1.TriggerSteps.ALL_CATEGORIES;
                    resData.replyMessage = (0, customersMessages_1.invalidNumberInput)(availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.length);
                    resolve(resData);
                    break;
                }
                const productAdded = {
                    product_id: productSelected.id,
                    unit: productSelected.unit,
                    quantity: 0,
                    recicledQuantity: 0,
                    sale_price: productSelected.sale_price,
                    price: productSelected.price,
                    image: ((_y = productSelected === null || productSelected === void 0 ? void 0 : productSelected.images) === null || _y === void 0 ? void 0 : _y.length) >= 0 ? productSelected === null || productSelected === void 0 ? void 0 : productSelected.images[0] : null,
                    name: productSelected.name,
                };
                // still fix case when trying to add a product were it was added in cart with all the possible stock available
                const productIndexFound = shoppingCart === null || shoppingCart === void 0 ? void 0 : shoppingCart.products.findIndex(((prod) => prod.product_id === productSelected.id));
                if (productIndexFound >= 0)
                    shoppingCart.products.splice(productIndexFound, 1);
                shoppingCart.products.push(productAdded);
                yield (0, api_1.updateUserShoppingCart)(shoppingCart);
                resData.replyMessage = (0, customersMessages_1.getQuantityOfProduct)(productSelected.name, productSelected.product_quantity);
                resData.trigger = types_1.TriggerSteps.SELECT_QUANTITY_OF_PRODUCT;
                resolve(resData);
                break;
            case types_1.TriggerSteps.SELECT_QUANTITY_OF_PRODUCT:
                userInputNumber = Number(userInput);
                shoppingCart = user === null || user === void 0 ? void 0 : user.shoppingCart;
                availableProducts = yield (0, api_1.getProducts)(shoppingCart.selectedCategorySlug);
                availableProducts = (_0 = (_z = availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.data) === null || _z === void 0 ? void 0 : _z.products) === null || _0 === void 0 ? void 0 : _0.items;
                const prodSelectedIndex = shoppingCart.products.length - 1;
                if ((availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.length) <= 0 || !!!availableProducts)
                    throw new Error('Error 3: no available products');
                productInShoppingCart = ((_1 = shoppingCart === null || shoppingCart === void 0 ? void 0 : shoppingCart.products) === null || _1 === void 0 ? void 0 : _1.length) > 0 ? shoppingCart.products[prodSelectedIndex] : null;
                if (!productInShoppingCart) {
                    resData.trigger = types_1.TriggerSteps.ALL_CATEGORIES;
                    resData.replyMessage = (0, customersMessages_1.invalidNumberInput)(availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.length);
                    resolve(resData);
                    break;
                }
                const product = availableProducts.find(((prod) => prod.id === productInShoppingCart.product_id));
                if (!product) {
                    resolve(resData);
                    break;
                }
                if ((0, shoppingUtils_1.isUserInputInvalid)(userInputNumber, Number(product.product_quantity))) {
                    resData.replyMessage = (0, customersMessages_1.invalidProductQuantity)(product.product_quantity);
                    resData.trigger = types_1.TriggerSteps.SELECT_QUANTITY_OF_PRODUCT;
                    resolve(resData);
                    break;
                }
                // actualizamos la cantidad y preguntamos que otro producto quiere agregar
                shoppingCart.products[prodSelectedIndex].quantity = userInputNumber;
                const updateShoppingCartResponse = yield (0, api_1.updateUserShoppingCart)(shoppingCart);
                // one last check, just in case:
                if ((_4 = (_3 = (_2 = updateShoppingCartResponse === null || updateShoppingCartResponse === void 0 ? void 0 : updateShoppingCartResponse.errors) === null || _2 === void 0 ? void 0 : _2[0]) === null || _3 === void 0 ? void 0 : _3.message) === null || _4 === void 0 ? void 0 : _4.includes("No hay suficiente cantidad de este producto")) {
                    resData.replyMessage = (0, customersMessages_1.invalidProductQuantity)(product.product_quantity);
                    resData.trigger = types_1.TriggerSteps.SELECT_QUANTITY_OF_PRODUCT;
                    resolve(resData);
                }
                else {
                    // added success case, we relist the products again
                    resData.replyMessage = (0, customersMessages_1.reListingAvailableProducts)(shoppingCart.products, availableProducts);
                    resData.trigger = types_1.TriggerSteps.ADD_MORE_PRODUCTS_STEP;
                    resolve(resData);
                }
                break;
            case types_1.TriggerSteps.DELIVERY_OR_PICKUP_OPT_SELECTED:
                userInputNumber = Number(userInput);
                deliveryOpts = yield (0, api_1.getDeliveryMethods)();
                shoppingCart = user === null || user === void 0 ? void 0 : user.shoppingCart;
                if (((_7 = (_6 = (_5 = deliveryOpts === null || deliveryOpts === void 0 ? void 0 : deliveryOpts.data) === null || _5 === void 0 ? void 0 : _5.deliveryMethods) === null || _6 === void 0 ? void 0 : _6.items) === null || _7 === void 0 ? void 0 : _7.length) <= 0 || !!!((_9 = (_8 = deliveryOpts === null || deliveryOpts === void 0 ? void 0 : deliveryOpts.data) === null || _8 === void 0 ? void 0 : _8.deliveryMethods) === null || _9 === void 0 ? void 0 : _9.items)) {
                    throw new Error('Error1: No delivery methods set');
                }
                ;
                deliveryOpts = (_11 = (_10 = deliveryOpts === null || deliveryOpts === void 0 ? void 0 : deliveryOpts.data) === null || _10 === void 0 ? void 0 : _10.deliveryMethods) === null || _11 === void 0 ? void 0 : _11.items;
                // el usuario selecciona metodo de envio y si es valido, preguntamos direccion, o 
                if ((0, shoppingUtils_1.isUserInputInvalid)(userInputNumber, deliveryOpts === null || deliveryOpts === void 0 ? void 0 : deliveryOpts.length)) {
                    resData.replyMessage = (0, customersMessages_1.invalidNumberInput)(deliveryOpts.length);
                    resData.trigger = types_1.TriggerSteps.DELIVERY_OR_PICKUP_OPT_SELECTED;
                    resolve(resData);
                    break;
                }
                const delyOptSelected = deliveryOpts[userInputNumber - 1];
                if (delyOptSelected) {
                    // encontramos que opcion eligio el usuario y setteamos en el shoppingCart con ese delivery method seleccionado
                    shoppingCart.delivery_method_id = delyOptSelected.id;
                    // arreglar aca abajo::
                    shoppingCart.delivery_date = (0, shoppingUtils_1.getDeliveryOrPickUpDatetime)(delyOptSelected.details);
                    shoppingCart.delivery_method_name = delyOptSelected.name;
                    shoppingCart.delivery_address = delyOptSelected.pickUpAddress;
                    yield (0, api_1.updateUserShoppingCart)(shoppingCart);
                    paymentMethodsResponse = yield (0, api_1.getPaymentMethods)();
                    if (!((_13 = (_12 = paymentMethodsResponse === null || paymentMethodsResponse === void 0 ? void 0 : paymentMethodsResponse.data) === null || _12 === void 0 ? void 0 : _12.paymentOptions) === null || _13 === void 0 ? void 0 : _13.items)) {
                        resData.replyMessage = (0, customersMessages_1.unknownUserInput)();
                        resData.trigger = types_1.TriggerSteps.ALL_CATEGORIES;
                        resolve(resData);
                    }
                    resData.replyMessage = (delyOptSelected === null || delyOptSelected === void 0 ? void 0 : delyOptSelected.isPickUp) ? (0, customersMessages_1.getDeliveryOrPickupOptSelectedAndGetPaymentMethodText)(delyOptSelected, (_14 = paymentMethodsResponse === null || paymentMethodsResponse === void 0 ? void 0 : paymentMethodsResponse.data) === null || _14 === void 0 ? void 0 : _14.paymentOptions.items, shoppingCart.delivery_address) : (0, customersMessages_1.getDeliveryAddress)();
                    resData.trigger = (delyOptSelected === null || delyOptSelected === void 0 ? void 0 : delyOptSelected.isPickUp) ? types_1.TriggerSteps.SELECT_PAYMENT_METHOD : types_1.TriggerSteps.DELIVERY_OPT_SELECTED;
                    resolve(resData);
                    break;
                }
                resData.replyMessage = (0, customersMessages_1.unknownDeliPickUpOptInput)(deliveryOpts);
                resData.trigger = types_1.TriggerSteps.DELIVERY_OR_PICKUP_OPT_SELECTED;
                resolve(resData);
                break;
            // CAMBIAR LUEGO A BUSCAR OPTIONS DE FECHAS DE PICKUP
            // caso en que usuario elije envio a domicilio
            case types_1.TriggerSteps.DELIVERY_OPT_SELECTED:
                if ((userInput === null || userInput === void 0 ? void 0 : userInput.length) < 10) {
                    resData.replyMessage = (0, customersMessages_1.enterValidAddress)();
                    resData.trigger = types_1.TriggerSteps.DELIVERY_OPT_SELECTED;
                    resolve(resData);
                    break;
                }
                shoppingCart = user === null || user === void 0 ? void 0 : user.shoppingCart;
                shoppingCart.delivery_address = userInput;
                yield (0, api_1.updateUserShoppingCart)(shoppingCart);
                const newAddress = (0, shoppingUtils_1.getEmptyAddress)(user.id, userInput);
                const addressAddResponse = yield (0, api_1.addAddressToUser)(user.id, newAddress.address, newAddress.title, newAddress.location, newAddress.instructions, newAddress.is_primary);
                // now we ask for the payment method
                paymentMethodsResponse = yield (0, api_1.getPaymentMethods)();
                paymentMethodsResponse = (_16 = (_15 = paymentMethodsResponse === null || paymentMethodsResponse === void 0 ? void 0 : paymentMethodsResponse.data) === null || _15 === void 0 ? void 0 : _15.paymentOptions) === null || _16 === void 0 ? void 0 : _16.items;
                deliveryOpts = yield (0, api_1.getDeliveryMethods)();
                deliveryOpts = (_18 = (_17 = deliveryOpts === null || deliveryOpts === void 0 ? void 0 : deliveryOpts.data) === null || _17 === void 0 ? void 0 : _17.deliveryMethods) === null || _18 === void 0 ? void 0 : _18.items;
                if (!paymentMethodsResponse || !deliveryOpts) {
                    resData.replyMessage = (0, customersMessages_1.unknownUserInput)();
                    resData.trigger = types_1.TriggerSteps.ALL_CATEGORIES;
                    resolve(resData);
                }
                const deliveryMethodSelected = deliveryOpts.find((deliOpt) => deliOpt.name === shoppingCart.delivery_method_name);
                resData.replyMessage = (0, customersMessages_1.getDeliveryOrPickupOptSelectedAndGetPaymentMethodText)(deliveryMethodSelected, paymentMethodsResponse, shoppingCart.delivery_address);
                resData.trigger = types_1.TriggerSteps.SELECT_PAYMENT_METHOD;
                resolve(resData);
                break;
            case types_1.TriggerSteps.SELECT_PAYMENT_METHOD:
                userInputNumber = Number(userInput);
                paymentMethodsResponse = yield (0, api_1.getPaymentMethods)();
                if (!((_20 = (_19 = paymentMethodsResponse === null || paymentMethodsResponse === void 0 ? void 0 : paymentMethodsResponse.data) === null || _19 === void 0 ? void 0 : _19.paymentOptions) === null || _20 === void 0 ? void 0 : _20.items)) {
                    resData.replyMessage = (0, customersMessages_1.unknownUserInput)();
                    resData.trigger = types_1.TriggerSteps.ALL_CATEGORIES;
                    resolve(resData);
                }
                shoppingCart = user === null || user === void 0 ? void 0 : user.shoppingCart;
                const paymentMethodsOpts = (_22 = (_21 = paymentMethodsResponse === null || paymentMethodsResponse === void 0 ? void 0 : paymentMethodsResponse.data) === null || _21 === void 0 ? void 0 : _21.paymentOptions) === null || _22 === void 0 ? void 0 : _22.items;
                // el usuario selecciona metodo de envio y si es valido, preguntamos direccion, o 
                if ((0, shoppingUtils_1.isUserInputInvalid)(userInputNumber, paymentMethodsOpts === null || paymentMethodsOpts === void 0 ? void 0 : paymentMethodsOpts.length)) {
                    resData.replyMessage = (0, customersMessages_1.invalidNumberInput)(paymentMethodsOpts.length);
                    resData.trigger = types_1.TriggerSteps.SELECT_PAYMENT_METHOD;
                    resolve(resData);
                    break;
                }
                const paymentSelected = paymentMethodsOpts[userInputNumber - 1];
                if (paymentSelected) {
                    // encuentra que opcion eligio el usuario y setteamos el shoppingCart con ese metodo
                    deliveryOpts = yield (0, api_1.getDeliveryMethods)();
                    const deliveryMethodSelected = (_25 = (_24 = (_23 = deliveryOpts === null || deliveryOpts === void 0 ? void 0 : deliveryOpts.data) === null || _23 === void 0 ? void 0 : _23.deliveryMethods) === null || _24 === void 0 ? void 0 : _24.items) === null || _25 === void 0 ? void 0 : _25.find((deliOpt) => deliOpt.id === shoppingCart.delivery_method_id);
                    if (((_28 = (_27 = (_26 = deliveryOpts === null || deliveryOpts === void 0 ? void 0 : deliveryOpts.data) === null || _26 === void 0 ? void 0 : _26.deliveryMethods) === null || _27 === void 0 ? void 0 : _27.items) === null || _28 === void 0 ? void 0 : _28.length) <= 0 || !deliveryMethodSelected) {
                        throw new Error('No delivery methods set or deliveryMethodSelected');
                    }
                    ;
                    shoppingCart.payment_method_name = paymentSelected.name;
                    shoppingCart.payment_option_type = paymentSelected.type;
                    shoppingCart.payment_option_id = paymentSelected.id;
                    // now we calculate total
                    const totalItemsAmount = (0, shoppingUtils_1.getTotalAmount)(shoppingCart.products);
                    const ccCharge = (0, shoppingUtils_1.calculateCCCharge)(paymentSelected, totalItemsAmount);
                    const deliveryFee = (0, shoppingUtils_1.calculateDeliveryCharge)(deliveryMethodSelected);
                    shoppingCart.discount_amount = 0;
                    shoppingCart.sub_total = totalItemsAmount;
                    shoppingCart.ccCharge = ccCharge;
                    shoppingCart.deliveryFee = deliveryFee;
                    shoppingCart.total = totalItemsAmount + ccCharge + deliveryFee;
                    yield (0, api_1.updateUserShoppingCart)(shoppingCart);
                    resData.replyMessage = (user === null || user === void 0 ? void 0 : user.name) !== constant_1.INITIAL_USER_USERNAME ? (0, customersMessages_1.paymentMethodSelectedAndOrderConfirmationMsj)(shoppingCart) : (0, customersMessages_1.enterValidName)();
                    resData.trigger = (user === null || user === void 0 ? void 0 : user.name) !== constant_1.INITIAL_USER_USERNAME ? types_1.TriggerSteps.ORDER_CHECK_CONFIRMATION : types_1.TriggerSteps.ASK_USER_NAME_TO_SIGN_UP_USER_BEFORE_PURCHASE;
                    resolve(resData);
                    break;
                }
                resData.replyMessage = (0, customersMessages_1.unknownPaymentOptInput)(paymentMethodsOpts);
                resData.trigger = types_1.TriggerSteps.SELECT_PAYMENT_METHOD;
                resolve(resData);
                break;
            case types_1.TriggerSteps.ASK_USER_NAME_TO_SIGN_UP_USER_BEFORE_PURCHASE:
                const userName = userInput;
                if (userName.length < 4 || /\d/.test(userName) || userName.split(' ').length < 2) {
                    resData.replyMessage = (0, customersMessages_1.reEnterValidName)();
                    resData.trigger = types_1.TriggerSteps.ASK_USER_NAME_TO_SIGN_UP_USER_BEFORE_PURCHASE;
                    resolve(resData);
                }
                const response = yield (0, api_1.updateUserNameAndEmail)(user.id, userName, user.email, access_token);
                if (!((_30 = (_29 = response === null || response === void 0 ? void 0 : response.data) === null || _29 === void 0 ? void 0 : _29.updateUserNameAndEmail) === null || _30 === void 0 ? void 0 : _30.status)) {
                    console.log('coulnt updateUserNameAndEmail ', response);
                    resData.replyMessage = (0, customersMessages_1.purchaseErrorMsg)();
                    resData.trigger = types_1.TriggerSteps.ASK_USER_NAME_TO_SIGN_UP_USER_BEFORE_PURCHASE;
                    resolve(resData);
                    break;
                }
                resData.replyMessage = (0, customersMessages_1.paymentMethodSelectedAndOrderConfirmationMsj)(user === null || user === void 0 ? void 0 : user.shoppingCart);
                resData.trigger = types_1.TriggerSteps.ORDER_CHECK_CONFIRMATION;
                resolve(resData);
                break;
            case types_1.TriggerSteps.ORDER_CHECK_CONFIRMATION:
                userInputNumber = Number(userInput);
                shoppingCart = user === null || user === void 0 ? void 0 : user.shoppingCart;
                switch (userInputNumber) {
                    case 1:
                        const res = yield (0, api_1.createOrder)(shoppingCart);
                        if ((_32 = (_31 = res === null || res === void 0 ? void 0 : res.data) === null || _31 === void 0 ? void 0 : _31.createOrder) === null || _32 === void 0 ? void 0 : _32.customer_id) {
                            // @ts-ignore
                            resData.replyMessage = (0, shoppingUtils_1.getOrderConfirmationMsgText)(shoppingCart, user === null || user === void 0 ? void 0 : user.name, lenguageLocale);
                            resData.trigger = types_1.TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
                            yield (0, api_1.updateUserShoppingCart)(shoppingCart);
                            resolve(resData);
                        }
                        else {
                            resData.replyMessage = (0, customersMessages_1.purchaseErrorMsg)();
                            resData.trigger = types_1.TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
                            resolve(resData);
                        }
                        break;
                    case 2:
                        resData.trigger = types_1.TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
                        resData.replyMessage = (0, customersMessages_1.thanksMsgNoDevelopedFunction)();
                        console.log('finish this option case 2 ');
                        resolve(resData);
                        break;
                    case 3:
                        resData.trigger = types_1.TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
                        resData.replyMessage = (0, customersMessages_1.thanksMsgNoDevelopedFunction)();
                        console.log('finish this option case 3');
                        resolve(resData);
                        break;
                    case 4:
                        resData.trigger = types_1.TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
                        resData.replyMessage = (0, customersMessages_1.thanksMsgNoDevelopedFunction)();
                        console.log('finish this option case 4');
                        resolve(resData);
                        break;
                    case 5:
                        resData.trigger = types_1.TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
                        resData.replyMessage = (0, customersMessages_1.thanksMsgNoPurchase)();
                        resolve(resData);
                        break;
                    default:
                        resData.replyMessage = (0, customersMessages_1.invalidNumberInput)('5');
                        resData.trigger = types_1.TriggerSteps.ORDER_CHECK_CONFIRMATION;
                        resolve(resData);
                        break;
                }
                break;
            case types_1.TriggerSteps.END_CONVERSATION_AND_RESET_CHAT:
                resData.trigger = types_1.TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
                resData.replyMessage = (0, customersMessages_1.thanksMsgNoPurchase)();
                resolve(resData);
                break;
            case types_1.TriggerSteps.UNKNOWN_ERROR_STEP:
                console.log('triggerStep""', triggerStep);
                resData.replyMessage = (0, customersMessages_1.thereWasAProblemWaitForAssistance)();
                resData.trigger = types_1.TriggerSteps.ALL_CATEGORIES;
                resolve(resData);
                break;
            default:
                resData.replyMessage = (0, customersMessages_1.thereWasAProblemWaitForAssistance2)();
                resData.trigger = types_1.TriggerSteps.ALL_CATEGORIES;
                resolve(resData);
                break;
        }
    }));
});
exports.getReplyFromShopBot = getReplyFromShopBot;
