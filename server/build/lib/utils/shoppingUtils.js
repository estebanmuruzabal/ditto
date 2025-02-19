"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeText = exports.endConversationKeys = exports.initialConversationKeys = exports.getTotalAmount = exports.calculateCCCharge = exports.calculateSubTotalPrice = exports.calculateDeliveryCharge = exports.getDeliverySchedule = exports.getOrderConfirmationButtons = exports.getPaymentButtons = exports.getInputDeliveryAddress = exports.getDeliveryMethodsButtons = exports.getProductsList = exports.confirmNameOrNewNameButtons = exports.getAddQuantityButtons = exports.getCategoriesButtons = exports.addTalkToRepresentativeOptToButtons = exports.addTalkToRepresentativeOptToList = exports.getDeliveryOrPickUpDatetime = exports.isGrower = exports.isUserStaff = exports.getCustomerPrimaryNumber = exports.containsValidName = exports.getCleanNumber = exports.getOrderConfirmationMsgText = exports.getEmptyAddress = exports.getQuickSaleShoppingCart = exports.getEmptyShoppingCart = exports.harcodedFilterOfUnusedCategories = exports.getDeliveryPickUpDate = exports.isUserInputInvalid = void 0;
const types_1 = require("../types");
const constant_1 = require("./constant");
const whatsAppUtils_1 = require("./whatsAppUtils");
const customersMessages_1 = require("../../messages/customersMessages");
const isUserInputInvalid = (userInput, maxOptions) => {
    return userInput < 1 || userInput > maxOptions;
};
exports.isUserInputInvalid = isUserInputInvalid;
const getDeliveryPickUpDate = (details) => { var _a; return (_a = details.split("|")[1]) === null || _a === void 0 ? void 0 : _a.trim(); };
exports.getDeliveryPickUpDate = getDeliveryPickUpDate;
const unusedCategories = ['hortalizas-de-hojas', 'remedios-naturales', 'plaguicida', 'repelente', 'bioestimulante', 'fertilizantes', 'todos-los-productos', 'insumos-para-cultivos'];
const harcodedFilterOfUnusedCategories = (categories) => categories.filter((category) => !unusedCategories.includes(category.slug));
exports.harcodedFilterOfUnusedCategories = harcodedFilterOfUnusedCategories;
const getEmptyShoppingCart = (user, lenguageLocale) => {
    return {
        products: [],
        customer_id: user.id,
        contact_number: (0, exports.getCustomerPrimaryNumber)(user),
        payment_option_id: null,
        delivery_method_id: null,
        delivery_date: null,
        delivery_address: null,
        selectedCategorySlug: null,
        sub_total: null,
        total: null,
        coupon_code: null,
        discount_amount: null,
        payment_id: null,
        lenguageLocale
    };
};
exports.getEmptyShoppingCart = getEmptyShoppingCart;
const getQuickSaleShoppingCart = (user) => {
    return {
        products: [],
        customer_id: user.id,
        contact_number: (0, exports.getCustomerPrimaryNumber)(user),
        payment_option_id: null,
        delivery_method_id: null,
        delivery_date: null,
        delivery_address: null,
        selectedCategorySlug: null,
        sub_total: null,
        total: null,
        coupon_code: null,
        discount_amount: null,
        payment_id: null
    };
};
exports.getQuickSaleShoppingCart = getQuickSaleShoppingCart;
const getEmptyAddress = (userId = null, address = '', title = '', location = '', instructions = '', is_primary = false) => {
    return {
        id: userId,
        title: title,
        address: address,
        location: location,
        instructions: instructions,
        is_primary: is_primary
    };
};
exports.getEmptyAddress = getEmptyAddress;
const getOrderConfirmationMsgText = (input, user = null, lenguageLocale) => {
    /// aca papa metele codigo
    const purchasedDate = new Date().toLocaleString('en-US', { timeZone: constant_1.timeZone });
    const pickupMethoSelected = lenguageLocale === 'en' ? (constant_1.PICKUP_LAJOLLA_DELIVERY_METHOD === input.delivery_method_name || constant_1.PICKUP_OB_DELIVERY_METHOD === input.delivery_method_name) : (constant_1.PICKUP_GUEMES_DELIVERY_METHOD === input.delivery_method_name || constant_1.PICKUP_GRANJA_DELIVERY_METHOD === input.delivery_method_name);
    // const deliveryMethodSelected = lenguageLocale === 'en' ? normalizeText(input.delivery_method_name).includes(normalizeText(DELIVERY_METHOD_SELECTED)) : normalizeText(input.delivery_method_name).includes(normalizeText(CUSTOMER_ADDRESS_DELIVERY_METHOD));
    switch (input.payment_option_type) {
        case constant_1.BANK_TRANSFER_PAYMENT_OPTION:
            return pickupMethoSelected
                ? (0, customersMessages_1.pickUpPurchaseWithTransferPayment)(purchasedDate, input === null || input === void 0 ? void 0 : input.delivery_address, input.total, user === null || user === void 0 ? void 0 : user.name, input.delivery_method_name, input.payment_method_name, input === null || input === void 0 ? void 0 : input.products, input.delivery_date, lenguageLocale)
                : (0, customersMessages_1.deliveryPurchaseWithTransferPayment)(purchasedDate, input === null || input === void 0 ? void 0 : input.delivery_address, input.total, user === null || user === void 0 ? void 0 : user.name, input.delivery_method_name, input.payment_method_name, input === null || input === void 0 ? void 0 : input.products, input.delivery_date, lenguageLocale);
            break;
        case constant_1.CASH_PAYMENT_OPTION:
        case constant_1.CC_PAYMENT_OPTION:
            return pickupMethoSelected
                ? (0, customersMessages_1.pickUpPurchaseWithCashPayment)(purchasedDate, input === null || input === void 0 ? void 0 : input.delivery_address, input.total, user === null || user === void 0 ? void 0 : user.name, input.delivery_method_name, input.payment_method_name, input === null || input === void 0 ? void 0 : input.products, input.delivery_date, lenguageLocale)
                : (0, customersMessages_1.deliveryPurchaseWithCashPayment)(purchasedDate, input === null || input === void 0 ? void 0 : input.delivery_address, input.total, user === null || user === void 0 ? void 0 : user.name, input.delivery_method_name, input.payment_method_name, input === null || input === void 0 ? void 0 : input.products, input.delivery_date, lenguageLocale);
            break;
        default:
            console.log('no case found in: switch (input.payment_option_type)::', input.payment_option_type);
            break;
    }
    return 'Error: in getOrderConfirmationMsgText, payment_option_type not cool';
};
exports.getOrderConfirmationMsgText = getOrderConfirmationMsgText;
const getCleanNumber = (contact_number) => {
    if (contact_number === null || contact_number === void 0 ? void 0 : contact_number.includes('54'))
        return `${contact_number}@c.us`;
};
exports.getCleanNumber = getCleanNumber;
const containsValidName = (name) => {
    const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    return regName.test(name);
};
exports.containsValidName = containsValidName;
// @ts-ignore
const getCustomerPrimaryNumber = (customer) => { var _a, _b; return ((_a = customer === null || customer === void 0 ? void 0 : customer.phones) === null || _a === void 0 ? void 0 : _a.length) > 0 ? (_b = customer === null || customer === void 0 ? void 0 : customer.phones[0]) === null || _b === void 0 ? void 0 : _b.number : ''; };
exports.getCustomerPrimaryNumber = getCustomerPrimaryNumber;
//   const selectedContact= customer?.phones.find(
//     (item) => item.is_primary === true
//   );
const isUserStaff = (customer) => (customer === null || customer === void 0 ? void 0 : customer.role) === types_1.Roles.STAFF;
exports.isUserStaff = isUserStaff;
const isGrower = (customer) => (customer === null || customer === void 0 ? void 0 : customer.role) === types_1.Roles.GROWER;
exports.isGrower = isGrower;
const getDeliveryOrPickUpDatetime = (detailsText, lenguageLocale) => {
    // if modify this, also modify server utils with these functions logic
    const timeText = (0, exports.getDeliverySchedule)(detailsText, lenguageLocale);
    const dateText = geDateScheduleOnly(detailsText);
    // solo por el evento saco esto
    // return `${dateText} ${timeText}`;
    return detailsText;
};
exports.getDeliveryOrPickUpDatetime = getDeliveryOrPickUpDatetime;
const addTalkToRepresentativeOptToList = (section) => {
    var _a;
    section === null || section === void 0 ? void 0 : section.rows.push({
        title: ((_a = section === null || section === void 0 ? void 0 : section.rows) === null || _a === void 0 ? void 0 : _a.length) + 1 + ' - Necesito ayuda',
        description: 'Hablar con un encargado para ayudarte con alguna opción fuera de este menú',
        id: 'talk-to-rep-opt',
    });
    return section;
};
exports.addTalkToRepresentativeOptToList = addTalkToRepresentativeOptToList;
const addTalkToRepresentativeOptToButtons = (buttons) => {
    const body = (buttons === null || buttons === void 0 ? void 0 : buttons.length) + 1 + ' - Necesito ayuda';
    buttons.push({
        body
        // description: 'Hablar con un encargado para ayudarte con alguna opción fuera de este menú',
        // id: 'talk-to-rep-opt',
    });
    return buttons;
};
exports.addTalkToRepresentativeOptToButtons = addTalkToRepresentativeOptToButtons;
const getCategoriesButtons = (resData, categories) => {
    if (categories.length === 1 || categories.length === 2) {
        const buttonsBodies = [];
        categories.map((category, idx) => buttonsBodies.push({ body: idx + 1 + ' - ' + category.name }));
        constant_1.TALK_TO_A_REPRESENTATIVE_MODE && (0, exports.addTalkToRepresentativeOptToButtons)(buttonsBodies);
        resData.replyMessage = (0, whatsAppUtils_1.getButtons)(constant_1.COMPANY_DESCRIPTION_TEXT, buttonsBodies, 'Hola! 🙋🏻 Muchas gracias por comunicarte con nosotros. Soy tu asistente virtual y estoy para ayudarte.', 'Seleccione una opción:');
    }
    else {
        const menuRows = getCategoryRowsFrom(categories);
        const listSections = (0, whatsAppUtils_1.getSectionWith)('Seleccioná una categoría', menuRows);
        constant_1.TALK_TO_A_REPRESENTATIVE_MODE && (0, exports.addTalkToRepresentativeOptToList)(listSections);
        resData.replyMessage = (0, whatsAppUtils_1.getListButtons)(constant_1.COMPANY_DESCRIPTION_TEXT + '/n Seleccione una opción en el siguiente menú:', 'Ver menú', listSections, 'Hola! 🙋🏻 Muchas gracias por comunicarte con nosotros. Soy tu asistente virtual y estoy para ayudarte.', '');
    }
    resData.trigger = types_1.TriggerSteps.SELECT_CATEGORY;
    return resData;
};
exports.getCategoriesButtons = getCategoriesButtons;
const getAddQuantityButtons = (resData, product_quantity) => {
    const menuRows = getButtonTextBodiesFrom(Number(product_quantity));
    resData.replyMessage = (0, whatsAppUtils_1.getButtons)('Por favor, seleccione cuantas unidades desea comprar, si la opción que busca no esta en los botones, es porque no hay suficiente stock :)', menuRows, 'Ingrese la cantidad', '');
    resData.trigger = types_1.TriggerSteps.SELECT_QUANTITY_OF_PRODUCT;
    return resData;
};
exports.getAddQuantityButtons = getAddQuantityButtons;
const confirmNameOrNewNameButtons = (resData, username) => {
    const menuRows = [{ body: constant_1.KEEP_USER_NAME_KEY_WORD }, { body: constant_1.INTRODUCE_NEW_NAME_KEY_WORDS }];
    resData.replyMessage = (0, whatsAppUtils_1.getButtons)(`¿Quiere usar este nombre para su pedido?
*${username}*`, menuRows, 'Nombre del comprador', '');
    resData.trigger = types_1.TriggerSteps.USER_SHOULD_INPUT_HIS_NAME;
    return resData;
};
exports.confirmNameOrNewNameButtons = confirmNameOrNewNameButtons;
const getCategoryRowsFrom = (items) => items.map((item, idx) => {
    return {
        title: idx + 1 + ' - ' + item.name,
        description: item.meta_description,
        id: item.id
    };
});
const getDeliveryRowsFrom = (items) => items.map((item, idx) => {
    return {
        title: item.name,
        description: item.details,
        id: item.id
    };
});
const getPaymentRowsFrom = (items) => items.map((item, idx) => {
    return {
        body: idx + 1 + ' - ' + item.name,
    };
});
const getConfirmationTextBodiesFrom = () => {
    return [{ body: '1 - Confirmar compra 😎' }, { body: '2 - Empezar todo de vuelta 😭' }, { body: '3 - Cancelar compra 🤨' }];
};
const getButtonTextBodiesFrom = (maxOptNumber) => {
    if (maxOptNumber > 3) {
        return [{ body: '1' }, { body: '2' }, { body: constant_1.INTRODUCE_QUANTITY_OPT_TEXT }];
    }
    else if (maxOptNumber === 3) {
        return [{ body: '1' }, { body: '2' }, { body: '3' }];
    }
    else if (maxOptNumber === 2) {
        return [{ body: '1' }, { body: '2' }];
    }
    else {
        return [{ body: '1' }];
    }
};
const getProductsList = (resData, availableProducts, trigger, title, buttonText, shoppingCart) => {
    var _a;
    const menuRows = (availableProducts === null || availableProducts === void 0 ? void 0 : availableProducts.length) > 0 ? getProductRowsFrom(availableProducts) : [{ title: 'No hay productos disponibles por el momento', description: '', id: '00' }];
    console.log('menuRows:', menuRows);
    const listSections = (0, whatsAppUtils_1.getSectionWith)('Seleccione de a 1 opción', menuRows);
    const hasAlreadyProductsInCart = ((_a = shoppingCart === null || shoppingCart === void 0 ? void 0 : shoppingCart.products) === null || _a === void 0 ? void 0 : _a.length) > 0;
    let bodyContent = '  ';
    const totalItemsAmount = (0, exports.getTotalAmount)(shoppingCart.products);
    if (hasAlreadyProductsInCart) {
        listSections.rows.unshift({ title: '0 - Borrar carrito', description: 'Empezar de vuelta la compra si seleccionaste mal algun producto' });
        bodyContent = `${shoppingCart.products.map((product, i) => (`- ${product.name} $${product.price}. *Cantidad:* ${product.quantity}\n`)).join('')}\n*Total a Pagar: $${(totalItemsAmount).toFixed(2)}*`;
    }
    resData.replyMessage = (0, whatsAppUtils_1.getListButtons)(bodyContent, buttonText, listSections, title, '');
    resData.trigger = trigger;
    return resData;
};
exports.getProductsList = getProductsList;
const getDeliveryMethodsButtons = (resData, deliveryMethods, trigger, title) => {
    const menuRows = getDeliveryRowsFrom(deliveryMethods);
    const listSections = (0, whatsAppUtils_1.getSectionWith)('Selecciona envío/pickup', menuRows);
    resData.replyMessage = (0, whatsAppUtils_1.getListButtons)('Si ya tiene todo lo que necesita, presione el siguiente botón para ver si va a buscar su envío o quiere enviarlo a una dirección:', 'Seleccionar envío/pickup', listSections, title, '');
    resData.trigger = trigger;
    return resData;
};
exports.getDeliveryMethodsButtons = getDeliveryMethodsButtons;
const getInputDeliveryAddress = (resData, trigger, title) => {
    resData.replyMessage = (0, customersMessages_1.getDeliveryAddress)();
    resData.trigger = trigger;
    return resData;
};
exports.getInputDeliveryAddress = getInputDeliveryAddress;
const getPaymentButtons = (resData, paymentMethods, trigger) => {
    const buttonsBodies = getPaymentRowsFrom(paymentMethods);
    resData.replyMessage = (0, whatsAppUtils_1.getButtons)('Por favor seleccione su forma de pago:', buttonsBodies, 'Método de pago', '');
    resData.trigger = trigger;
    return resData;
};
exports.getPaymentButtons = getPaymentButtons;
const getOrderConfirmationButtons = (resData, shoppingCart, trigger, userName) => {
    const buttonsBodies = getConfirmationTextBodiesFrom();
    const ccString = `Recargo por tarjeta: $${(shoppingCart.ccCharge).toFixed(2)}`;
    const deliveryFeeString = `Recargo por envío: $${(shoppingCart.deliveryFee).toFixed(2)}`;
    const total = shoppingCart.ccCharge + shoppingCart.deliveryFee + shoppingCart.total;
    resData.replyMessage = (0, whatsAppUtils_1.getButtons)(`*Comprador:* ${userName}
*Método de pago:* ${shoppingCart.payment_method_name}
*Método de envío:* ${shoppingCart.delivery_method_name}
*Dirección:* ${shoppingCart.delivery_address}

*Su carrito:*
${shoppingCart.products.map((product, i) => (`- ${product.name} $${product.price}. *Cantidad:* ${product.quantity}\n`)).join('')}
Subtotal productos: $${(shoppingCart.sub_total).toFixed(2)}${shoppingCart.ccCharge > 0 ? `\n${ccString}` : ''}${shoppingCart.deliveryFee > 0 ? `\n${deliveryFeeString}` : ''}
*Total a Pagar: $${(shoppingCart.total).toFixed(2)}*
`, buttonsBodies, '*Por favor verifique que su orden sea correcta.*', '');
    resData.trigger = trigger;
    return resData;
};
exports.getOrderConfirmationButtons = getOrderConfirmationButtons;
const getProductRowsFrom = (items) => items.map((item, idx) => {
    return {
        title: idx + 1 + ' - ' + item.name + ' $' + item.price,
        description: item.description,
        id: item.id
    };
});
const getDeliverySchedule = (details, intLocale) => {
    if (!details)
        return '';
    const word = intLocale === 'en' ? 'Time: ' : 'Horario: ';
    const index = details.indexOf(word); // 8
    const length = word.length; // 7
    return details.slice(index + length);
};
exports.getDeliverySchedule = getDeliverySchedule;
const geDateScheduleOnly = (detailsText) => {
    const contentDivided = detailsText === null || detailsText === void 0 ? void 0 : detailsText.split(' | ');
    return `${contentDivided[1] && contentDivided[1]}`;
};
const calculateDeliveryCharge = (delivery_method) => {
    var _a, _b;
    if (delivery_method.isPickUp)
        return 0;
    const charge = (_a = delivery_method === null || delivery_method === void 0 ? void 0 : delivery_method.name) === null || _a === void 0 ? void 0 : _a.split("$");
    const chargeFormatted = (_b = charge[(charge === null || charge === void 0 ? void 0 : charge.length) - 1]) === null || _b === void 0 ? void 0 : _b.replace(/\D/g, '');
    return Number(chargeFormatted);
};
exports.calculateDeliveryCharge = calculateDeliveryCharge;
const calculateSubTotalPrice = (delivery_method) => {
    var _a, _b;
    if (delivery_method.isPickUp)
        return 0;
    const charge = (_a = delivery_method === null || delivery_method === void 0 ? void 0 : delivery_method.name) === null || _a === void 0 ? void 0 : _a.split("$");
    const chargeFormatted = (_b = charge[(charge === null || charge === void 0 ? void 0 : charge.length) - 1]) === null || _b === void 0 ? void 0 : _b.replace(/\D/g, '');
    return Number(chargeFormatted);
};
exports.calculateSubTotalPrice = calculateSubTotalPrice;
const calculateCCCharge = (paymentOptionSelected, totalAmount) => {
    var _a, _b, _c;
    if (((_a = paymentOptionSelected === null || paymentOptionSelected === void 0 ? void 0 : paymentOptionSelected.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes('tarjeta')) || ((_b = paymentOptionSelected === null || paymentOptionSelected === void 0 ? void 0 : paymentOptionSelected.name) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes('card'))) {
        const ccCharge = (_c = paymentOptionSelected === null || paymentOptionSelected === void 0 ? void 0 : paymentOptionSelected.name) === null || _c === void 0 ? void 0 : _c.replace(/\D/g, '');
        return totalAmount * (Number(ccCharge) / 100);
    }
    return 0;
};
exports.calculateCCCharge = calculateCCCharge;
const getTotalAmount = (products) => {
    const totalItemsAmount = products.reduce((total, item) => {
        const { price, salePrice = 0, quantity = 0, recicledQuantity = 0, packagePrice = 0 } = item;
        const recicledPrice = price - packagePrice;
        const displayPrice = price || salePrice;
        const nonRecicledTotalPrice = displayPrice * quantity;
        const recicledTotalPrice = recicledPrice * recicledQuantity;
        const totalPrice = nonRecicledTotalPrice + recicledTotalPrice;
        return total + totalPrice;
    }, 0);
    return totalItemsAmount;
};
exports.getTotalAmount = getTotalAmount;
exports.initialConversationKeys = [
    "hola",
    "hola!",
    "buenas",
    "buenas!",
    "que tal!",
    "que tal",
    "buenos días",
    "buenas tardes",
    "buenas noches",
    "me dieron este número",
    "quisiera saber si venden",
    "necesito saber"
];
exports.endConversationKeys = [
    "muchas gracias",
    "ok",
    "gracias",
    "adios",
    "chau"
];
const normalizeText = (texto) => {
    return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
};
exports.normalizeText = normalizeText;
