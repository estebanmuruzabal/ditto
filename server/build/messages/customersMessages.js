"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noProductsAvailableListCategoriesAgain = exports.noAvailableCategories = exports.noAvailableDeliveryMethods = exports.noAvailableProducts = exports.reEnterValidName = exports.manualInput = exports.unknownInputDefault = exports.listCategories = exports.hablarConUnRepMsg = exports.invalidProductQuantity = exports.thereWasAProblemWaitForAssistance2 = exports.purchaseErrorMsg = exports.thanksMsgNoPurchase = exports.thanksMsgNoDevelopedFunction = exports.thanksMsg = exports.enterValidAddress = exports.paymentMethodSelectedAndOrderConfirmationMsj = exports.unknownPaymentOptInput = exports.thereWasAProblemWaitForAssistance = exports.unknownDeliPickUpOptInput = exports.getDeliveryOrPickupOptSelectedAndGetPaymentMethodText = exports.getDeliveryAddress = exports.deliveryOptions = exports.unknownUserInput = exports.reListingAvailableProducts = exports.invalidNumberInput = exports.getQuantityOfProduct = exports.tecnicasDeCultivoInfo = exports.listAvailableProducts = exports.enterValidName = exports.mainMenuAuthenticatedUser = exports.welcomeMsgNameRequired = exports.userSignedUp = exports.orderDeliveredAndFeedBack = exports.orderPaidConfirmation = exports.pickUpPurchaseWithCashPayment = exports.pickUpPurchaseWithTransferPayment = exports.deliveryPurchaseWithCashPayment = exports.deliveryPurchaseWithTransferPayment = exports.getPickUpAddress = exports.getAddressLinkText = exports.getPrelinkText = exports.getLinkOnly = exports.mainMenuUnauthenticatedUser = exports.welcomeTextAndCategoriesOpts = void 0;
const moment_1 = __importDefault(require("moment"));
const constant_1 = require("../lib/utils/constant");
const shoppingUtils_1 = require("../lib/utils/shoppingUtils");
const whatsAppUtils_1 = require("../lib/utils/whatsAppUtils");
const isEnglish = false;
const pickUpPurchaseWithTransferPayment = (purchasedDate, address, total, customerName, deliveryMethod, paymentMethod, products, delivery_pickup_date, lenguageLocale) => {
    switch (lenguageLocale) {
        case constant_1.Locales.ES:
            return (`📢 *Importante* 📢
- Para pagar, enviános una transferencia por *${constant_1.CURRENCY}${total}* al alias *${constant_1.BANK_TRANSFER_ALIAS}* o cbu ${constant_1.BANK_TRANSFER_CBU} y compartinos el comprobante por aquí antes de retirar tu pedido. 

*Método de envío o retiro seleccionado:*
${deliveryMethod}
*Fecha y horario del envío o retiro en tienda:*
${delivery_pickup_date}
*Dirección de envío o donde retirar:*
${address}

${products.map((product) => (`${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}\n`)).join('')}
*Monton total:*
${constant_1.CURRENCY}${total}

Para mas info seguinos en IG https://www.instagram.com/dittofarms.sd
`);
        case constant_1.Locales.EN:
            return (`${customerName ? `Hello ${customerName}, y` : 'Y'}our purchase has been completed successfully!

📢 *Important* 📢
- If you can bring your own bags to carry the produce, the better!!
- In order to pay, send us a bank/digital bank transfer for *${constant_1.CURRENCY}${total}* to the following zelle account: *${constant_1.BANK_TRANSFER_ALIAS}* and please share it us in this conversation before picking up your order. 

*Purchase date:*
${purchasedDate}
*Delivery/pickup method selected:*
${deliveryMethod}
*Date and time of pickup/delivery:*
${delivery_pickup_date}
*Address of delivery/Pickup Address:*
${address}
*Payment method:*
${paymentMethod}
*Products list:*
${products.map((product) => (`${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}\n`)).join('')}
*Final price:*
${constant_1.CURRENCY}${total}

Thank you! Your help is very much appreciated it!
You can also make your orders at http://www.dittofarms.com
And keep yourself posted at our IG: https://www.instagram.com/dittofarms.sd`);
        default: console.log('pickUpPurchaseWithTransferPayment defaulted. lenguageLocale not found:', lenguageLocale);
    }
};
exports.pickUpPurchaseWithTransferPayment = pickUpPurchaseWithTransferPayment;
const pickUpPurchaseWithCashPayment = (purchasedDate, address, total, customerName, deliveryMethod, paymentMethod, products, delivery_pickup_date, lenguageLocale) => {
    switch (lenguageLocale) {
        case constant_1.Locales.ES:
            return (`📢 *Importante* 📢
- Te recordamos llevar bolsas para retirar tus productos!

*Método de envío o retiro seleccionado:*
${deliveryMethod}
*Fecha y horario del envío o retiro en tienda:*
${delivery_pickup_date}
*Dirección de envío o donde retirar:*
${address}
*Método de pago:*
${paymentMethod}
*Productos comprados:*
${products.map((product) => (`${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}\n`)).join('')}
*Monton total:*
${constant_1.CURRENCY}${total}

Para mas info seguinos en IG https://www.instagram.com/dittofarms.sd
`);
        case constant_1.Locales.EN:
            return (`${customerName ? `Hello ${customerName}, y` : 'Y'}our purchase has been completed successfully!

📢 *Important* 📢
- If you can bring your own bags to carry the produce, the better!!

*Purchase date:*
${purchasedDate}
*Delivery/pickup method selected:*
${deliveryMethod}
*Date and time of pickup/delivery:*
${delivery_pickup_date}
*Address of delivery/Pickup Address:*
${address}
*Payment method:*
${paymentMethod}
*Products list:*
${products.map((product) => (`${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}\n`)).join('')}
*Final price:*
${constant_1.CURRENCY}${total}

Thank you! Your help is very much appreciated it!
You can also make your orders at http://www.dittofarms.com
And keep yourself posted at our IG: https://www.instagram.com/dittofarms.sd`);
        default: console.log('pickUpPurchaseWithCashPayment defaulted. lenguageLocale not found:', lenguageLocale);
    }
};
exports.pickUpPurchaseWithCashPayment = pickUpPurchaseWithCashPayment;
const deliveryPurchaseWithTransferPayment = (purchasedDate, address, total, customerName, deliveryMethod, paymentMethod, products, delivery_pickup_date, lenguageLocale) => {
    switch (lenguageLocale) {
        case constant_1.Locales.ES:
            return (`📢 *Importante* 📢
- Te vamos a escribir una hora antes de llevar tu pedido.
- Para pagar, enviános una transferencia por *${constant_1.CURRENCY}${total}* al alias *${constant_1.BANK_TRANSFER_ALIAS}* o cbu ${constant_1.BANK_TRANSFER_CBU} y compartinos el comprobante por aquí antes de retirar tu pedido. 

*Método de envío o retiro seleccionado:*
${deliveryMethod}
*Fecha y horario del envío o retiro en tienda:*
${delivery_pickup_date}
*Dirección de envío o donde retirar:*
${address}
*Método de pago:*
${paymentMethod}
*Productos comprados:*
${products.map((product) => (`${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}\n`)).join('')}
*Monton total:*
${constant_1.CURRENCY}${total}

Para mas info seguinos en IG https://www.instagram.com/dittofarms.sd
`);
        case constant_1.Locales.EN:
            return (`${customerName ? `Hello ${customerName}, y` : 'Y'}our purchase has been completed successfully!

📢 *Important* 📢
- We will send you a text message one hour before being at the delivery address.
- In order to pay, send us a bank/digital bank transfer for *${constant_1.CURRENCY}${total}* to the following zelle account: *${constant_1.BANK_TRANSFER_ALIAS}* and please share it us in this conversation before picking up your order. 

*Purchase date:*
${purchasedDate}
*Delivery/pickup method selected:*
${deliveryMethod}
*Date and time of pickup/delivery:*
${delivery_pickup_date}
*Address of delivery/Pickup Address:*
${address}
*Payment method:*
${paymentMethod}
*Products list:*
${products.map((product) => (`${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}\n`)).join('')}
*Final price:*
${constant_1.CURRENCY}${total}

Thank you! Your help is very much appreciated it!
You can also make your orders at http://www.dittofarms.com
And keep yourself posted at our IG: https://www.instagram.com/dittofarms.sd`);
        default: console.log('deliveryPurchaseWithTransferPayment defaulted. lenguageLocale not found:', lenguageLocale);
    }
};
exports.deliveryPurchaseWithTransferPayment = deliveryPurchaseWithTransferPayment;
const deliveryPurchaseWithCashPayment = (purchasedDate, address, total, customerName, deliveryMethod, paymentMethod, products, delivery_pickup_date, lenguageLocale) => {
    const pickupMethoSelected = !!(constant_1.PICKUP_LAJOLLA_DELIVERY_METHOD === deliveryMethod || constant_1.PICKUP_OB_DELIVERY_METHOD === deliveryMethod) || (constant_1.PICKUP_GUEMES_DELIVERY_METHOD === deliveryMethod || constant_1.PICKUP_GRANJA_DELIVERY_METHOD === deliveryMethod);
    switch (lenguageLocale) {
        case constant_1.Locales.ES:
            return (`📢 *Importante* 📢
- Te vamos a escribir una hora antes de llevar tu pedido.

*Método de envío o retiro seleccionado:*
${deliveryMethod}
*Fecha y horario del envío o retiro en tienda:*
${delivery_pickup_date}
*Dirección de envío o donde retirar:*
${address}
*Método de pago:*
${paymentMethod}
*Productos comprados:*
${products.map((product) => (`${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}\n`)).join('')}
*Monton total:*
${constant_1.CURRENCY}${total}

Para mas info seguinos en IG https://www.instagram.com/dittofarms.sd
`);
        case constant_1.Locales.EN:
            return (`${customerName ? `Hello ${customerName}, y` : 'Y'}our purchase has been completed successfully!

📢 *Important* 📢
- We will send you a text message one hour before being at the delivery address.

*Purchase date:* ${(0, moment_1.default)(purchasedDate).format('hh:mm A')} ${(0, moment_1.default)(purchasedDate).format('DD MMM')}  
${pickupMethoSelected ? '*Pickup Address:*' : '*Deliver to Address:*'}${deliveryMethod}
*Date and time of pickup/delivery:*
${delivery_pickup_date}
*Address of delivery/Pickup Address:*
${address}
*Payment method:*
${paymentMethod}
*Products list:*
${products.map((product) => (`${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}\n`)).join('')}
*Final price:*
${constant_1.CURRENCY}${total}

Thank you! Your help is very much appreciated it!
You can also make your orders at http://www.dittofarms.com
And keep yourself posted at our IG: https://www.instagram.com/dittofarms.sd`);
        default: console.log('deliveryPurchaseWithCashPayment defaulted. lenguageLocale not found:', lenguageLocale);
    }
};
exports.deliveryPurchaseWithCashPayment = deliveryPurchaseWithCashPayment;
const orderPaidConfirmation = (purchasedDate, address, total, customerName, deliveryMethod, paymentMethod, products, lenguageLocale) => {
    switch (lenguageLocale) {
        case constant_1.Locales.ES:
            return (`Hola ${customerName}, hemos recibido tu pago con exito!

Muchas gracias por su compra eco-sustentable!
Juntos transformamos el mundo ♻️ Ditto Farm.`);
        case constant_1.Locales.EN:
            return (`Hello ${customerName}, we have received your order!

Thank you! Your help is very much appreciated it!
Together we'll change the future ♻️ Ditto Farm SD.`);
        default: console.log('orderPaidConfirmation defaulted. lenguageLocale not found:', lenguageLocale);
    }
};
exports.orderPaidConfirmation = orderPaidConfirmation;
const orderDeliveredAndFeedBack = (customerName) => {
    // @ts-ignore
    switch (lenguageLocale) {
        case constant_1.Locales.ES:
            return (`Hola ${customerName}, has recibido tu pedido con exito!

Sabemos que errar es humano, y tu opinion nos importa!
Ganate un cupón de 10% de descuento con tan solo contarnos como llegó tu pedido y si de paso, tenés alguna recomendación/consejo 🙌

Muchas gracias por su compra eco-sustentable!
Juntos transformamos el mundo ♻️ Ditto Farm.
`);
        case constant_1.Locales.EN:
            return (`Hello ${customerName}, you have received your order successfully!

We know that to fail is human, so we want your feedback!
Get a 10% discount coupon only by telling us how your order arrived, and if you have any improvements/advices for us.🙌

Thank you! Your help is very much appreciated it!
Together we'll change the future ♻️ Ditto Farm SD.`);
        default: console.log('orderDeliveredAndFeedBack defaulted. lenguageLocale not found:');
    }
};
exports.orderDeliveredAndFeedBack = orderDeliveredAndFeedBack;
const userSignedUp = (customerName) => {
    // @ts-ignore
    switch (lenguageLocale) {
        case constant_1.Locales.ES: return (`Hola ${customerName}, creaste tu cuenta!`);
        case constant_1.Locales.EN: return (`Hello ${customerName}, you have just created your account!`);
        default: console.log('userSignedUp defaulted. lenguageLocale not found:');
    }
};
exports.userSignedUp = userSignedUp;
const enterValidName = (lenguageLocale) => {
    switch (lenguageLocale) {
        case constant_1.Locales.ES:
            return (`Falta poco! Necesitaría que me escribas tu 𝐧𝐨𝐦𝐛𝐫𝐞 𝐲 𝐚𝐩𝐞𝐥𝐥𝐢𝐝𝐨 completo por favor 🙂, 
solamente eso (Por ejemplo: Sofia Martinez)`);
        case constant_1.Locales.EN:
            return (`Almost there! Por favor escribí tu nombre completo. 
Example: "Pablito Lezcano"`);
        default:
            console.log('enterValidName defaulted. lenguageLocale not found:');
            return '';
    }
};
exports.enterValidName = enterValidName;
const reEnterValidName = () => {
    const lenguageLocale = constant_1.Locales.EN;
    switch (lenguageLocale) {
        // @ts-ignore
        case constant_1.Locales.ES:
            return (`Nombre invalido, necesitaría que me escribas tu 𝐧𝐨𝐦𝐛𝐫𝐞 𝐲 𝐚𝐩𝐞𝐥𝐥𝐢𝐝𝐨 completo por favor 🙂, 
solamente eso (Por ejemplo: Sofia Martinez)`);
        case constant_1.Locales.EN:
            return (`Invalid name! Please write your complete name. 
Example: "Joe Smith"`);
        default: {
            console.log('reEnterValidName defaulted. lenguageLocale not found:', lenguageLocale);
            return '';
        }
    }
};
exports.reEnterValidName = reEnterValidName;
const thereWasAProblemWaitForAssistance = () => {
    return isEnglish ?
        `Something when wrong, somebody will assist you shortly to fix that,
meantime you have one of the following options:
    
*1 - Show the products price list and start a new order.*
*2 - Talk to a real person to help you with an option out of this menu.*

Please reply back with a number between 1 and 2 to pick a choise.
`
        :
            `Algo salío mal, pero revisaremos pronto este chat para corregirlo, 
mientras tanto tenés las siguientes opciones:

*1 - Ver listado con precios de frutas/verduras y hacer pedido.*
*2 - Hablar con un encargado para ayudarte con alguna opción fuera de este menú*

Por favor escribí un número entre el 1 y el 2 para elegir una opción`;
};
exports.thereWasAProblemWaitForAssistance = thereWasAProblemWaitForAssistance;
const thereWasAProblemWaitForAssistance2 = () => {
    return isEnglish ?
        `Something when wrong, somebody will assist you shortly, please excuse us.`
        :
            `Algo salío mal, pero revisaremos pronto este chat para corregirlo, por favor disculpenos`;
};
exports.thereWasAProblemWaitForAssistance2 = thereWasAProblemWaitForAssistance2;
const welcomeTextAndCategoriesOpts = () => `Hola! 🙋🏻 Muchas gracias por comunicarte con nosotros. Soy tu asistente virtual y estoy para ayudarte.

${constant_1.COMPANY_DESCRIPTION_TEXT}

Por favor, selecciona una opción en el siguiente menú:
`;
exports.welcomeTextAndCategoriesOpts = welcomeTextAndCategoriesOpts;
const welcomeMsgNameRequired = () => `Hola! 🙋🏻 Muchas gracias por comunicarte con nosotros. Soy tu asistente virtual y estoy para ayudarte.

${constant_1.COMPANY_DESCRIPTION_TEXT}

Para comenzar necesitaría que me escribas tu 𝐧𝐨𝐦𝐛𝐫𝐞 𝐲 
𝐚𝐩𝐞𝐥𝐥𝐢𝐝𝐨 completo por favor 🙂, (Por ejemplo: Sofia Martinez )
`;
exports.welcomeMsgNameRequired = welcomeMsgNameRequired;
const mainMenuUnauthenticatedUser = (categories) => {
    return isEnglish ?
        `Hello! 🙋🏻 I am here to help you, I am Ditto Farm SD front desk!

Please select a section to check/buy our products:

${categories.map((product, i) => (`${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} ${product.name}\n`)).join('')}${(0, whatsAppUtils_1.getEmojiNumber)(categories.length + 1)} Help! I need to talk to a real person.
    
*Please reply with a number between 1 and ${categories.length + 1}*`
        :
            `Hola! 🙋🏻 Soy un asistente virtual de Ditto Farm y estoy para ayudarte!

Seleccioná una categoría para ver/comprar nuestros productos:

${categories.map((product, i) => (`${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} ${product.name}\n`)).join('')}${(0, whatsAppUtils_1.getEmojiNumber)(categories.length + 1)} Ayuda! Necesito hablar con una persona física.

*Por favor ingresá un número entre el 1 y el ${categories.length + 1}*`;
};
exports.mainMenuUnauthenticatedUser = mainMenuUnauthenticatedUser;
// 2 Ver listado con precios mayorista de frutas/verduras.
const mainMenuAuthenticatedUser = (customerName, categories) => {
    return isEnglish ?
        `Hello ${customerName},

*Please select a section to check/buy our products:*

${categories.map((product, i) => (`${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} ${product.name}\n`)).join('')}${(0, whatsAppUtils_1.getEmojiNumber)(categories.length + 1)} Help! I need to talk to a real person.

*Please reply with a number between 1 and ${categories.length + 1}*`
        :
            `Hola ${customerName},

*Seleccioná una categoría para ver/comprar nuestras productos:*

${categories.map((product, i) => (`${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} ${product.name}\n`)).join('')} ${(0, whatsAppUtils_1.getEmojiNumber)(categories.length + 1)} Hablar con un encargado para ayudarte con alguna opción fuera de este menú

*Por favor ingresá un número entre el 1 y el ${categories.length + 1}*`;
};
exports.mainMenuAuthenticatedUser = mainMenuAuthenticatedUser;
const listAvailableProducts = (products) => {
    return isEnglish ?
        `*Choose an item to add it to your cart:*

${products.map((product, i) => (`${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} ${product.name} $${product.price.toFixed(2)}\n`)).join('')}${(0, whatsAppUtils_1.getEmojiNumber)(products.length + 1)} Go back to main menu\n*${(0, whatsAppUtils_1.getEmojiNumber)(products.length + 2)} Go to Checkout*

*Please reply with a number between 1 and ${products.length + 2}*
`
        :
            `*Ingresá el número del producto para agregarlo a tu carrito:*

${products.map((product, i) => (`${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} ${product.name} $${product.price.toFixed(2)}\n`)).join('')}${(0, whatsAppUtils_1.getEmojiNumber)(products.length + 1)} Volver al menú principal\n*${(0, whatsAppUtils_1.getEmojiNumber)(products.length + 2)} Ir a pagar*`;
};
exports.listAvailableProducts = listAvailableProducts;
const listCategories = (categories) => {
    return isEnglish ?
        `*Please select a section to check/buy our products:*

${categories.map((product, i) => (`${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} ${product.name}\n`)).join('')}${(0, whatsAppUtils_1.getEmojiNumber)(categories.length + 1)} Help! I need to talk to a real person.

*Please reply with a number between 1 and ${categories.length + 1}*`
        :
            `*Seleccione una categoría ingresando su número:*

${categories.map((product, i) => (`${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} ${product.name}\n`)).join('')}${(0, whatsAppUtils_1.getEmojiNumber)(categories.length + 1)} Hablar con un encargado para ayudarte con alguna opción fuera de este menú`;
};
exports.listCategories = listCategories;
const noProductsAvailableListCategoriesAgain = (categories) => {
    return isEnglish ?
        `At the moment the category selected has no available products.

*Please select a another section to check/buy our products:*

${categories.map((product, i) => (`${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} ${product.name}\n`)).join('')}${(0, whatsAppUtils_1.getEmojiNumber)(categories.length + 1)} Help! I need to talk to a real person.

*Please reply with a number between 1 and ${categories.length + 1}*`
        :
            `Por el momento esa categoria no tiene productos disponibles.

*Seleccione otra categoría ingresando su número:*

${categories.map((product, i) => (`${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} ${product.name}\n`)).join('')}${(0, whatsAppUtils_1.getEmojiNumber)(categories.length + 1)} Hablar con un encargado para ayudarte con alguna opción fuera de este menú`;
};
exports.noProductsAvailableListCategoriesAgain = noProductsAvailableListCategoriesAgain;
const reListingAvailableProducts = (productsAdded, availableProducts) => {
    const totalItemsAmount = (0, shoppingUtils_1.getTotalAmount)(productsAdded);
    return isEnglish ?
        `*Item added successfully*

Your cart:
${productsAdded.map((product, i) => (` ${product.name} Qty: ${product.quantity} Price: $${product.price}\n`)).join('')}
Total: $${totalItemsAmount.toFixed(2)}

*You can keep on adding items:*

${availableProducts.map((product, i) => (`${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} ${product.name} $${product.price}\n`)).join('')}${(0, whatsAppUtils_1.getEmojiNumber)(availableProducts.length + 1)} Go back to main menu\n*${(0, whatsAppUtils_1.getEmojiNumber)(availableProducts.length + 2)} Go to Checkout*

*Please reply with a number between 1 and ${availableProducts.length + 2}*
`
        :
            `*Agregado correctamente*

Su carrito:
${productsAdded.map((product, i) => (` ${product.name}. Cantidad: ${product.quantity}\n`)).join('')}
Total: $${totalItemsAmount}

*Puedes seguir agregando productos:*

${availableProducts.map((product, i) => (`${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} ${product.name} $${product.price}\n`)).join('')}${(0, whatsAppUtils_1.getEmojiNumber)(availableProducts.length + 1)} Volver al menú principal\n*${(0, whatsAppUtils_1.getEmojiNumber)(availableProducts.length + 2)} Ir a pagar*

*Por favor responde con un número entre el 1 y el ${availableProducts.length + 2}*`;
};
exports.reListingAvailableProducts = reListingAvailableProducts;
const tecnicasDeCultivoInfo = () => `asi y asa hacemos las verdus

Tenés las sig. opciones:

1 Ver listado con precios de frutas/verduras y hacer pedido.
*2 Hablar con un encargado para ayudarte con alguna opción fuera de este menú*

Por favor escribí un número entre el 1 y el 2 para elegir una opción
`;
exports.tecnicasDeCultivoInfo = tecnicasDeCultivoInfo;
const hablarConUnRepMsg = () => {
    return isEnglish ?
        `Please hold on and somebody will assist you shortly.`
        :
            `Por favor aguarde y un representante se va a comunicar con usted.`;
};
exports.hablarConUnRepMsg = hablarConUnRepMsg;
const noAvailableProducts = () => {
    return isEnglish ?
        `We apologize, at the moment we do not have products available. Somebody is probably working on it.
Please come back later!`
        :
            `Disculpe las molestias, por el momento no hay productos disponibles. Alguien esta trabajando en actualizarla.
Por favor, intente nuevamente más tarde!`;
};
exports.noAvailableProducts = noAvailableProducts;
const noAvailableDeliveryMethods = () => {
    return isEnglish ?
        `We apologize, at the moment we do not have delivery/pickup methods available. Somebody is probably working on it.
Please come back later!`
        :
            `Disculpe las molestias, por el momento no hay métodos de envíos disponible. Alguien esta trabajando en arreglarlo. 
Por favor, intente nuevamente más tarde!`;
};
exports.noAvailableDeliveryMethods = noAvailableDeliveryMethods;
const noAvailableCategories = () => {
    return isEnglish ?
        `We apologize, at the moment we do not have categories available. Somebody is probably working on it.
Please come back later!`
        :
            `Disculpe las molestias, por el momento no hay categorias disponibles. Alguien esta trabajando en arreglarlo. 
Por favor, intente nuevamente más tarde!`;
};
exports.noAvailableCategories = noAvailableCategories;
const enterValidAddress = () => {
    return isEnglish ?
        `Please introduce a valid address. Example: 407 Lincoln Rd. El Cajon, CA 92020`
        :
            `Por favor ingrese una dirección válida. Ejemplo: Belgrano 432, piso 3A`;
};
exports.enterValidAddress = enterValidAddress;
const invalidProductQuantity = (maxStockAvailable) => {
    return isEnglish ?
        `There isn't enough stock. We only have ${Number(maxStockAvailable)} left.
Please reply with a number bellow.`
        :
            `No hay suficiente cantidad de stock o no ingresó un número.
Por favor indique la cantidad de unidades que desea, ${Number(maxStockAvailable) < 2 ? 'Solo tenemos 1 unidad' : `ingresando un número entre el 1 y el ${maxStockAvailable}`}`;
};
exports.invalidProductQuantity = invalidProductQuantity;
const invalidNumberInput = (maxInputNumber) => {
    return isEnglish ?
        `*Please reply with a number between 1 and ${maxInputNumber}*`
        :
            `Por favor ingrese un número entre el 1 y el ${maxInputNumber}*`;
};
exports.invalidNumberInput = invalidNumberInput;
const manualInput = () => `Que cantidad necesita? Por favor ingrese un número. Ejemplo: "2"`;
exports.manualInput = manualInput;
const getQuantityOfProduct = (productName, quantity) => {
    return isEnglish ?
        `How many *${productName}* you want to add to your cart. 
Please reply with a exact number. Example: "2"`
        :
            `Ingresá la cantidad de ${productName} querés agregar a tu pedido.
Por favor ingrese un número. Ejemplo: "2"`;
};
exports.getQuantityOfProduct = getQuantityOfProduct;
const unknownUserInput = () => {
    return isEnglish ?
        `I apologize, I could not recognize your answer.
Please choose between one of the following options:

*1 Show the products price list and start a new order.*
*2 Talk to a real person to help you with an option out of this menu.*

Please reply back with a number between 1 and 2 to pick a choise.`
        :
            `Disculpe no reconocimos su respuesta, por favor elija una opción
entre las siguientes:

*1 Ver listado con precios de frutas/verduras y hacer pedido.*
*2 Hablar con un encargado para ayudarte con alguna opción fuera de este menú*

Por favor escribí un número entre el 1 y el 2 para elegir una opción`;
};
exports.unknownUserInput = unknownUserInput;
const unknownInputDefault = () => `Disculpe no reconocimos su respuesta.`;
exports.unknownInputDefault = unknownInputDefault;
const unknownDeliPickUpOptInput = (deliveryOptions, localeLenguage) => {
    return isEnglish ?
        `I'm sorry, I couldn't recognize your answer, please pick one of the following options:

${deliveryOptions.map((deliOption, i) => (`\n*${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} - ${deliOption.name}* \n ${(0, exports.getPickUpAddress)(deliOption === null || deliOption === void 0 ? void 0 : deliOption.pickUpAddress)}${(0, shoppingUtils_1.getDeliveryOrPickUpDatetime)(deliOption.details, localeLenguage)}\n${(0, exports.getPrelinkText)(deliOption.details)}: ${(0, exports.getAddressLinkText)(deliOption.details)}`)).join('')}

- Please reply with a number. Example: "2"`
        :
            `Disculpe no reconocimos su respuesta, por favor elija una opción
entre las siguientes:

${deliveryOptions.map((deliOption, i) => (`\n*${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} - ${deliOption.name}* \n ${(0, exports.getPickUpAddress)(deliOption === null || deliOption === void 0 ? void 0 : deliOption.pickUpAddress)}${(0, shoppingUtils_1.getDeliveryOrPickUpDatetime)(deliOption.details, localeLenguage)}\n${(0, exports.getPrelinkText)(deliOption.details)}: ${(0, exports.getAddressLinkText)(deliOption.details)}`)).join('')}

- Responda escribiendo un núm. entre el 1 y el ${deliveryOptions.length}.`;
};
exports.unknownDeliPickUpOptInput = unknownDeliPickUpOptInput;
const unknownPaymentOptInput = (paymentMethods) => {
    return isEnglish ?
        `We apologize we could not recognize your answer, 
please choose between one of the following options:

${paymentMethods.map((method, i) => (`${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} - ${method.name}\n${method.details}\n`)).join('')}

*Please reply with a number between 1 and ${deliveryOptions.length}*`
        :
            `Disculpe no reconocimos su respuesta, por favor elija una opción
entre las siguientes:

${paymentMethods.map((method, i) => (`${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} - ${method.name}\n${method.details}\n`)).join('')}

- Responda escribiendo un núm. entre el 1 y el ${deliveryOptions.length}.`;
};
exports.unknownPaymentOptInput = unknownPaymentOptInput;
const getLinkOnly = (text) => {
    if (!text)
        return;
    const word = 'https';
    const index = text.indexOf(word); // 8
    const length = word.length; // 7
    return text.slice(index + length - 5);
};
exports.getLinkOnly = getLinkOnly;
const getPrelinkText = (detailsText) => {
    const contentDivided = detailsText === null || detailsText === void 0 ? void 0 : detailsText.split(' | ');
    const linkContent = contentDivided === null || contentDivided === void 0 ? void 0 : contentDivided.find((part) => part.includes('http'));
    const preLinkText = linkContent === null || linkContent === void 0 ? void 0 : linkContent.substring(0, linkContent.indexOf('http'));
    // solo por el evento saco esto
    return '';
};
exports.getPrelinkText = getPrelinkText;
const getAddressLinkText = (detailsText) => {
    const contentDivided = detailsText === null || detailsText === void 0 ? void 0 : detailsText.split(' | ');
    const linkContent = contentDivided === null || contentDivided === void 0 ? void 0 : contentDivided.find((part) => part.includes('http'));
    const linkOnly = (0, exports.getLinkOnly)(linkContent);
    return linkOnly;
};
exports.getAddressLinkText = getAddressLinkText;
const getPickUpAddress = (pickUpAddress) => {
    return pickUpAddress && !pickUpAddress.includes('http') ? isEnglish ? `*- Address:* ${pickUpAddress}` : `*- Dirección:* ${pickUpAddress}` : '';
};
exports.getPickUpAddress = getPickUpAddress;
const deliveryOptions = (deliveryOptions, localeLenguage) => {
    return isEnglish ?
        `*Select a day and delivery/pickup option:*
${deliveryOptions.map((deliOption, i) => (`
*${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} ${deliOption.name}*
Address: ${deliOption.pickUpAddress}
¿When?: ${(0, shoppingUtils_1.getDeliveryOrPickUpDatetime)(deliOption.details, localeLenguage)}
${(0, exports.getPrelinkText)(deliOption.details)}: ${(0, exports.getAddressLinkText)(deliOption.details)}`)).join('')}`
        :
            `*Seleccioná día y opción de envío/retiro:*
${deliveryOptions.map((deliOption, i) => (`
*${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} ${deliOption.name}*
Dirección: ${deliOption.pickUpAddress}
¿Cuándo?: ${(0, shoppingUtils_1.getDeliveryOrPickUpDatetime)(deliOption.details, localeLenguage)}
Pizzas salen de 19:30 a 21:30. Barra de 18 a 23hs.
`)).join('')}
`;
};
exports.deliveryOptions = deliveryOptions;
const getDeliveryOrPickupOptSelectedAndGetPaymentMethodText = (deliOption, paymentMethods, delivery_address) => {
    //         *Método seleccionado con éxito!*
    // *- Tipo de envío:* ${deliOption.name} 
    // *- ¿Cuándo?:* ${getDeliveryOrPickUpDatetime(deliOption.details)}
    // ${getPickUpAddress(deliOption?.pickUpAddress || delivery_address)}
    // *- ${getPrelinkText(deliOption.details)}:* ${getAddressLinkText(deliOption.details)}
    // oooo
    //     *Método seleccionado con éxito!*
    // *- Tipo de envío:* ${deliOption.name} 
    // *- ¿Cuándo?:* ${getDeliveryOrPickUpDatetime(deliOption.details)}
    // *- ${getPrelinkText(deliOption.details)}:* ${getAddressLinkText(deliOption.details)}
    const hasDeliveryAddress = (deliOption === null || deliOption === void 0 ? void 0 : deliOption.pickUpAddress) || delivery_address;
    return isEnglish ?
        `*Select your payment method:*
${paymentMethods.map((method, i) => (`*${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} ${method.name}* \n${method.details}\n`)).join('')}`
        :
            `*Seleccione su forma de pago:*

${paymentMethods.map((method, i) => (`*${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} ${method.name}* \n${method.details}\n`)).join('')}`;
};
exports.getDeliveryOrPickupOptSelectedAndGetPaymentMethodText = getDeliveryOrPickupOptSelectedAndGetPaymentMethodText;
const thanksMsg = () => `Muchas gracias por tu compra!!
`;
exports.thanksMsg = thanksMsg;
const thanksMsgNoPurchase = () => {
    return isEnglish ?
        `Hope you have a nice day ☀ and remember you can order from our website as well, http://www.dittofarms.com
And you can also follow us on Instagram to see what we are up to 😊: https://www.instagram.com/dittofarms.sd

Thanks for your time and you are welcome back anytime you wish.`
        :
            `Qué tengas un excelente día ☀ y acordate que también podes pedir por nuestra pagina web!
Aprovecho para invitarte a que nos sigas en Instagram 😊: https://www.instagram.com/dittofarms.sd

Gracias por tu tiempo, te invitamos a que vuelvas en el momento que desees.`;
};
exports.thanksMsgNoPurchase = thanksMsgNoPurchase;
const thanksMsgNoDevelopedFunction = () => {
    return isEnglish ?
        `Feature still under development, we apologize!
You can still start your order from scratch:`
        :
            `Funcionalidad todavia en desarrollo, te pedimos disculpas, pronto estará posible esta opción. Puede comenzar su compra desde el comienzo si deséa.`;
};
exports.thanksMsgNoDevelopedFunction = thanksMsgNoDevelopedFunction;
const purchaseErrorMsg = () => {
    return isEnglish ?
        `There was an error in your order, somebody will take a look and go back to you with a solution shortly.

We apologize!`
        :
            `Hubo un error en tu compra, por favor aguarda y te avisaremos en breve que salio mal! Puede probar de vuelta su compra en unos instantes.

Te pedimos disculpas!`;
};
exports.purchaseErrorMsg = purchaseErrorMsg;
const getDeliveryAddress = () => {
    return isEnglish ?
        `Please reply with: Street Address, Suite/Apt #, ZIP Code. 
Example: "407 Lincoln Rd. Apt B 92037"

We remind you that we only make deliveries in the area indicated in the following link:
https://cutt.ly/4Cvlc59 . If your address is not inside, your order will be cancelled`
        :
            `Por favor ingrese la dirección de envío, calle, altura y detalles. Por ej. Belgrano 320, porton gris, o Dpto. 4B.

Te recordamos que solo hacemos delivery en la zona indicada en el siguiente link:
https://cutt.ly/4Cvlc59 , si está fuera de esta zona, su compra va a ser cancelada.`;
};
exports.getDeliveryAddress = getDeliveryAddress;
const paymentMethodSelectedAndOrderConfirmationMsj = (shoppingCart) => {
    console.log('shoppingCartasdasdasd', shoppingCart);
    const total = shoppingCart.ccCharge + shoppingCart.deliveryFee + shoppingCart.total;
    if (isEnglish) {
        const ccString = `Card fee: $${shoppingCart.ccCharge}`;
        const deliveryFeeString = `Delivery fee: $${shoppingCart.deliveryFee}`;
        return `*Please verify that your order looks correct.*

Payment method: *${shoppingCart.payment_method_name}*
Delivery method: *${shoppingCart.delivery_method_name}*
Address: *${shoppingCart.delivery_address}*

${shoppingCart.products.map((product, i) => (` ${product.name} $${product.price}. *Quantity:* ${product.quantity}\n`)).join('')}
Subtotal: $${shoppingCart.total}${shoppingCart.ccCharge > 0 ? `\n${ccString}\n` : ''}${shoppingCart.deliveryFee > 0 ? `\n${deliveryFeeString}` : ''}
*Total to Pay: $${total}*

1️⃣ Confirm order
2️⃣ Modify payment method
3️⃣ Modify delivery method
4️⃣ Modify items in your cart
5️⃣ Cancel order`;
    }
    else {
        const ccString = `Recargo por tarjeta: $${shoppingCart.ccCharge}`;
        const deliveryFeeString = `Recargo por envío: $${shoppingCart.deliveryFee}`;
        return `*Por favor verifique que su orden sea correcta.*

Mét. de pago: *${shoppingCart.payment_method_name}*
Mét. de envío: *${shoppingCart.delivery_method_name}*
Dir. *${shoppingCart.delivery_address}*

*Su carrito:*
${shoppingCart.products.map((product, i) => (` ${product.name} $${product.price}. *Unidades:* ${product.quantity}\n`)).join('')}
Subtotal productos: $${shoppingCart.total}${shoppingCart.ccCharge > 0 ? `\n${ccString}\n` : ''}${shoppingCart.deliveryFee > 0 ? `\n${deliveryFeeString}` : ''}
*Total a Pagar: $${total}*

1️⃣ Confirmar tu compra
2️⃣ Cambiar forma de pago
3️⃣ Cambiar método de envio
4️⃣ Cambiar productos de tu carrito
5️⃣ Desistir de tu compra`;
    }
};
exports.paymentMethodSelectedAndOrderConfirmationMsj = paymentMethodSelectedAndOrderConfirmationMsj;
