import { ICategory, IDeliveryMethod, IPaymentOption, IProduct } from "../lib/types";
import { BANK_TRANSFER_ALIAS, BANK_TRANSFER_CBU, COMPANY_DESCRIPTION_TEXT, CURRENCY, Locales } from "../lib/utils/constant";
import { getDeliveryOrPickUpDatetime, getTotalAmount } from "../lib/utils/shoppingUtils";
import { getEmojiNumber } from "../lib/utils/whatsAppUtils";

const pickUpPurchaseWithTransferPayment = (purchasedDate: string, address: string, total: number, customerName: string, deliveryMethod: string, paymentMethod: string, products: any, delivery_pickup_date: string, lenguageLocale: string) => {
switch (lenguageLocale) {
case Locales.ES:
return (
`${customerName ? `Hola ${customerName}, t` : 'T'}u compra ha sido realizada con éxito!

📢 *Importante* 📢
 - Te recordamos llevar bolsas para retirar tus productos!
 - Para pagar, enviános una transferencia por *${CURRENCY}${total}* al alias *${BANK_TRANSFER_ALIAS}* o cbu ${BANK_TRANSFER_CBU} y compartinos el comprobante por aquí antes de retirar tu pedido. 

*Detalle:*
*Fecha de compra:*
${purchasedDate}
*Método de envío o retiro seleccionado:*
${deliveryMethod}
*Fecha y horario del envío o retiro en tienda:*
${delivery_pickup_date}
*Dirección de envío o donde retirar:*
${address}
*Método de pago:*
${paymentMethod}
*Productos comprados:*
${products.map((product: any) => (`${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}\n`)).join('')}
*Monton total:*
${CURRENCY}${total}

Muchas gracias por su compra eco-sustentable!💚
También podes hacer tu pedido en nuestra página web http://www.dittofarm.com
Para mas info seguinos en IG https://www.instagram.com/dittofarm.sd
`)
case Locales.EN:
return (
`${customerName ? `Hello ${customerName}, y` : 'Y'}our purchase has been completed successfully!

📢 *Important* 📢
 - If you can bring your own bags to carry the produce, the better!!
 - In order to pay, send us a bank/digital bank transfer for *${CURRENCY}${total}* to the following zelle account: *${BANK_TRANSFER_ALIAS}* and please share it us in this conversation before picking up your order. 

*Detail:*
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
${products.map((product: any) => (`${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}\n`)).join('')}
*Final price:*
${CURRENCY}${total}

Thank you! Your help is very much appreciated it!
You can also make your orders at http://www.dittofarm.com
And keep yourself posted at our IG: https://www.instagram.com/dittofarm.sd`)
default: console.log('pickUpPurchaseWithTransferPayment defaulted. lenguageLocale not found:', lenguageLocale)
}};

const pickUpPurchaseWithCashPayment = (purchasedDate: string, address: string, total: number, customerName: string, deliveryMethod: string, paymentMethod: string, products: any, delivery_pickup_date: string, lenguageLocale: string) => {
switch (lenguageLocale) {
case Locales.ES:
return (
`${customerName ? `Hola ${customerName}, t` : 'T'}u compra ha sido realizada con éxito!

📢 *Importante* 📢
    - Te recordamos llevar bolsas para retirar tus productos!

*Detalle:*
*Fecha de compra:*
${purchasedDate}
*Método de envío o retiro seleccionado:*
${deliveryMethod}
*Fecha y horario del envío o retiro en tienda:*
${delivery_pickup_date}
*Dirección de envío o donde retirar:*
${address}
*Método de pago:*
${paymentMethod}
*Productos comprados:*
${products.map((product: any) => (`${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}\n`)).join('')}
*Monton total:*
${CURRENCY}${total}

Muchas gracias por su compra eco-sustentable!💚
También podes hacer tu pedido en nuestra página web http://www.dittofarm.com
Para mas info seguinos en IG https://www.instagram.com/dittofarm.sd
`)
case Locales.EN:
return (
`${customerName ? `Hello ${customerName}, y` : 'Y'}our purchase has been completed successfully!

📢 *Important* 📢
    - If you can bring your own bags to carry the produce, the better!!

*Detail:*
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
${products.map((product: any) => (`${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}\n`)).join('')}
*Final price:*
${CURRENCY}${total}

Thank you! Your help is very much appreciated it!
You can also make your orders at http://www.dittofarm.com
And keep yourself posted at our IG: https://www.instagram.com/dittofarm.sd`)
default: console.log('pickUpPurchaseWithCashPayment defaulted. lenguageLocale not found:', lenguageLocale)
}};

const deliveryPurchaseWithTransferPayment = (purchasedDate: string, address: string, total: number, customerName: string, deliveryMethod: string, paymentMethod: string, products: any, delivery_pickup_date: string, lenguageLocale: string) =>  {
switch (lenguageLocale) {
case Locales.ES:
return (
`${customerName ? `Hola ${customerName}, t` : 'T'}u compra ha sido realizada con éxito!

📢 *Importante* 📢
    - Te vamos a escribir una hora antes de llevar tu pedido.
    - Para pagar, enviános una transferencia por *${CURRENCY}${total}* al alias *${BANK_TRANSFER_ALIAS}* o cbu ${BANK_TRANSFER_CBU} y compartinos el comprobante por aquí antes de retirar tu pedido. 

*Detalle:*
*Fecha de compra:*
${purchasedDate}
*Método de envío o retiro seleccionado:*
${deliveryMethod}
*Fecha y horario del envío o retiro en tienda:*
${delivery_pickup_date}
*Dirección de envío o donde retirar:*
${address}
*Método de pago:*
${paymentMethod}
*Productos comprados:*
${products.map((product: any) => (`${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}\n`)).join('')}
*Monton total:*
${CURRENCY}${total}

Muchas gracias por su compra eco-sustentable!💚
También podes hacer tu pedido en nuestra página web http://www.dittofarm.com
Para mas info seguinos en IG https://www.instagram.com/dittofarm.sd
`)
case Locales.EN:
return (
`${customerName ? `Hello ${customerName}, y` : 'Y'}our purchase has been completed successfully!

📢 *Important* 📢
    - We will send you a text message one hour before being at the delivery address.
    - In order to pay, send us a bank/digital bank transfer for *${CURRENCY}${total}* to the following zelle account: *${BANK_TRANSFER_ALIAS}* and please share it us in this conversation before picking up your order. 

*Detail:*
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
${products.map((product: any) => (`${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}\n`)).join('')}
*Final price:*
${CURRENCY}${total}

Thank you! Your help is very much appreciated it!
You can also make your orders at http://www.dittofarm.com
And keep yourself posted at our IG: https://www.instagram.com/dittofarm.sd`)
default: console.log('deliveryPurchaseWithTransferPayment defaulted. lenguageLocale not found:', lenguageLocale)
}};

const deliveryPurchaseWithCashPayment = (purchasedDate: string, address: string, total: number, customerName: string, deliveryMethod: string, paymentMethod: string, products: any, delivery_pickup_date: string, lenguageLocale: string) => {
switch (lenguageLocale) {
case Locales.ES:
return (
`${customerName ? `Hola ${customerName}, t` : 'T'}u compra ha sido realizada con éxito!

📢 *Importante* 📢
    - Te vamos a escribir una hora antes de llevar tu pedido.

*Detalle:*
*Fecha de compra:*
${purchasedDate}
*Método de envío o retiro seleccionado:*
${deliveryMethod}
*Fecha y horario del envío o retiro en tienda:*
${delivery_pickup_date}
*Dirección de envío o donde retirar:*
${address}
*Método de pago:*
${paymentMethod}
*Productos comprados:*
${products.map((product: any) => (`${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}\n`)).join('')}
*Monton total:*
${CURRENCY}${total}

Muchas gracias por su compra eco-sustentable!💚
También podes hacer tu pedido en nuestra página web http://www.dittofarm.com
Para mas info seguinos en IG https://www.instagram.com/dittofarm.sd
`)
case Locales.EN:
return (
`${customerName ? `Hello ${customerName}, y` : 'Y'}our purchase has been completed successfully!

📢 *Important* 📢
    - We will send you a text message one hour before being at the delivery address.

*Detail:*
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
${products.map((product: any) => (`${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}\n`)).join('')}
*Final price:*
${CURRENCY}${total}

Thank you! Your help is very much appreciated it!
You can also make your orders at http://www.dittofarm.com
And keep yourself posted at our IG: https://www.instagram.com/dittofarm.sd`)
default: console.log('deliveryPurchaseWithCashPayment defaulted. lenguageLocale not found:', lenguageLocale)
}};

const orderPaidConfirmation = (purchasedDate: string, address: string, total: number, customerName: string, deliveryMethod: string, paymentMethod: string, products: any, lenguageLocale: string) =>  {
switch (lenguageLocale) {
case Locales.ES:
return (
`Hola ${customerName}, hemos recibido tu pago con exito!

Muchas gracias por su compra eco-sustentable!
Juntos transformamos el mundo ♻️ Ditto Farm.`)
case Locales.EN:
return (
`Hello ${customerName}, we have received your order!

Thank you! Your help is very much appreciated it!
Together we'll change the future ♻️ Ditto Farm SD.`)
default: console.log('orderPaidConfirmation defaulted. lenguageLocale not found:', lenguageLocale)
}};

const orderDeliveredAndFeedBack = (customerName: string) => {
    // @ts-ignore
switch (lenguageLocale) {
case Locales.ES:
return (
`Hola ${customerName}, has recibido tu pedido con exito!

Sabemos que errar es humano, y tu opinion nos importa!
Ganate un cupón de 10% de descuento con tan solo contarnos como llegó tu pedido y si de paso, tenés alguna recomendación/consejo 🙌

Muchas gracias por su compra eco-sustentable!
Juntos transformamos el mundo ♻️ Ditto Farm.
`)
case Locales.EN:
return (
`Hello ${customerName}, you have received your order successfully!

We know that to fail is human, so we want your feedback!
Get a 10% discount coupon only by telling us how your order arrived, and if you have any improvements/advices for us.🙌

Thank you! Your help is very much appreciated it!
Together we'll change the future ♻️ Ditto Farm SD.`)
default: console.log('orderDeliveredAndFeedBack defaulted. lenguageLocale not found:')   
}};

const userSignedUp = (customerName: string) => {
    // @ts-ignore
switch (lenguageLocale) {
case Locales.ES: return (`Hola ${customerName}, creaste tu cuenta!`)
case Locales.EN: return (`Hello ${customerName}, you have just created your account!`)
default: console.log('userSignedUp defaulted. lenguageLocale not found:')   
}};

const enterValidName = (lenguageLocale?: string) =>  {
switch (lenguageLocale) {
case Locales.ES:
return (
`Falta poco! Necesitaría que me escribas tu 𝐧𝐨𝐦𝐛𝐫𝐞 𝐲 𝐚𝐩𝐞𝐥𝐥𝐢𝐝𝐨 completo por favor 🙂, 
solamente eso (Por ejemplo: Sofia Martinez)`)
case Locales.EN:
return (
`Almost there! I will need to to write complete name (name, last name) please 🙂, 
just that (Like: Joe Smith)`)
default: console.log('enterValidName defaulted. lenguageLocale not found:'); return ''   
}};

const reEnterValidName = () => {
const lenguageLocale = Locales.EN;
switch (lenguageLocale) {
    // @ts-ignore
case Locales.ES:
return (
`Nombre invalido, necesitaría que me escribas tu 𝐧𝐨𝐦𝐛𝐫𝐞 𝐲 𝐚𝐩𝐞𝐥𝐥𝐢𝐝𝐨 completo por favor 🙂, 
solamente eso (Por ejemplo: Sofia Martinez)`)
case Locales.EN:
return (
`Invalid name! Please write your complete name (name, last name) please 🙂, 
just that (Like: Joe Smith)`)
default: {console.log('reEnterValidName defaulted. lenguageLocale not found:', lenguageLocale); return '';}
}};

const thereWasAProblemWaitForAssistance = () =>  
`Algo salío mal, pero revisaremos pronto este chat para corregirlo, 
mientras tanto tenés las siguientes opciones:

*1 - Ver listado con precios de frutas/verduras y hacer pedido.*
*2 - Hablar con un encargado para ayudarte con alguna opción fuera de este menú*

Por favor escribí un número entre el 1 y el 2 para elegir una opción
`;

const thereWasAProblemWaitForAssistance2 = () =>  
`Algo salío mal, pero revisaremos pronto este chat para corregirlo
`;

export const welcomeTextAndCategoriesOpts = () =>  
`Hola! 🙋🏻 Muchas gracias por comunicarte con nosotros. Soy tu asistente virtual y estoy para ayudarte.

${COMPANY_DESCRIPTION_TEXT}

Por favor, selecciona una opción en el siguiente menú:
`;


const welcomeMsgNameRequired = () =>  
`Hola! 🙋🏻 Muchas gracias por comunicarte con nosotros. Soy tu asistente virtual y estoy para ayudarte.

${COMPANY_DESCRIPTION_TEXT}

Para comenzar necesitaría que me escribas tu 𝐧𝐨𝐦𝐛𝐫𝐞 𝐲 
𝐚𝐩𝐞𝐥𝐥𝐢𝐝𝐨 completo por favor 🙂, (Por ejemplo: Sofia Martinez )
`;


export const mainMenuUnauthenticatedUser = (categories: ICategory[]) =>  
    `Hola! 🙋🏻 Soy un asistente virtual de Ditto Farm y estoy para ayudarte!

Seleccioná una categoría para ver/comprar nuestros productos:

${categories.map((product: any, i: number) => (`${getEmojiNumber(i + 1)} - ${product.name}\n`)).join('')}${categories.length + 1} - Ayuda! Necesito hablar con una persona física.

*Por favor ingresá un número entre el 1 y el ${categories.length + 1}*
`;

// 2 - Ver listado con precios mayorista de frutas/verduras.
const mainMenuAuthenticatedUser = (customerName: string, categories: ICategory[]) =>  
    `Hola ${customerName},

*Seleccioná una categoría para ver/comprar nuestras productos:*

${categories.map((product: any, i: number) => (`${getEmojiNumber(i + 1)} - ${product.name}\n`)).join('')} ${categories.length + 1} - Hablar con un encargado para ayudarte con alguna opción fuera de este menú

*Por favor ingresá un número entre el 1 y el ${categories.length + 1}*
`;

const listAvailableProducts = (products: any) =>  
`*Ingresá el número del producto para agregarlo a tu carrito:*

${products.map((product: any, i: number) => (`${getEmojiNumber(i + 1)} - ${product.name} - $${product.price}\n`)).join('')}
`;

const listCategories = (categories: ICategory[]) =>  
`*Seleccione una categoría ingresando su número:*

${categories.map((product: any, i: number) => (`${getEmojiNumber(i + 1)} - ${product.name}\n`)).join('')}${categories.length + 1} - Hablar con un encargado para ayudarte con alguna opción fuera de este menú
`;

const reListingAvailableProducts = (productsAdded: any, availableProducts: any) => {
const totalItemsAmount = getTotalAmount(productsAdded);
    return (
`*Agregado correctamente*

Su carrito:
${productsAdded.map((product: any, i: number) => (`- ${product.name} - Cantidad: ${product.quantity}\n`)).join('')}
Total: $${totalItemsAmount}

*Puedes seguir agregando productos:*

${availableProducts.map((product: any, i: number) => (`${getEmojiNumber(i + 1)} - ${product.name} - $${product.price}\n`)).join('')}*${availableProducts.length + 1} - Ir a pagar*
`)};

const tecnicasDeCultivoInfo = () =>  
`asi y asa hacemos las verdus

 Tenés las sig. opciones:

1 - Ver listado con precios de frutas/verduras y hacer pedido.
*2 - Hablar con un encargado para ayudarte con alguna opción fuera de este menú*

Por favor escribí un número entre el 1 y el 2 para elegir una opción
`;

const hablarConUnRepMsg = () =>  
`Por favor aguarde y un representante se va a comunicar con usted.`;

const noAvailableProducts = () =>  
`Disculpe las molestias, por el momento no hay productos disponibles. Por favor, intente nuevamente más tarde!`;

const noAvailableDeliveryMethods = () =>  
`Disculpe las molestias, por el momento no hay métodos de envíos disponible. Por favor, intente nuevamente más tarde!`;

const noAvailableCategories = () =>  
`Disculpe las molestias, por el momento no hay Categorias disponibles. Por favor, intente nuevamente más tarde!`;

const enterValidAddress = () =>  
`Por favor ingrese una dirección válida. Ejemplo: Belgrano 432, piso 3A`;

const invalidProductQuantity = (maxInputNumber: string) =>  
`No hay suficiente cantidad de stock o no ingresó un número.
Por favor indique la cantidad de unidades que desea, ${Number(maxInputNumber) < 2 ? 'Solo tenemos 1 unidad' : `ingresando un número entre el 1 y el ${maxInputNumber}`}
`;

const invalidNumberInput = (maxInputNumber: string) =>  
`Por favor ingrese un número entre el 1 y el ${maxInputNumber}
`;

const manualInput = () =>  
`Que cantidad necesita? Por favor ingrese un número. Ejemplo: "2"`;

const getQuantityOfProduct = (productName: string, quantity: string) =>  
`Ingresá la cantidad de ${productName} querés agregar a tu pedido. Por favor ingrese un número. Ejemplo: "2"`;

const unknownUserInput = () =>  
`Disculpe no reconocimos su respuesta, por favor elija una opción
entre las siguientes:

*1 - Ver listado con precios de frutas/verduras y hacer pedido.*
*2 - Hablar con un encargado para ayudarte con alguna opción fuera de este menú*

Por favor escribí un número entre el 1 y el 2 para elegir una opción
`;

const unknownInputDefault = () =>  
`Disculpe no reconocimos su respuesta.`;




const unknownDeliPickUpOptInput = (deliveryOptions: any) =>  
`Disculpe no reconocimos su respuesta, por favor elija una opción
entre las siguientes:

${deliveryOptions.map((deliOption: any, i: number) => (`\n*${i + 1} - ${deliOption.name}* \n ${getPickUpAddress(deliOption?.pickUpAddress)}${getDeliveryOrPickUpDatetime(deliOption.details)}\n${getPrelinkText(deliOption.details)}: ${getAddressLinkText(deliOption.details)}`)).join('')}

- Responda escribiendo un núm. entre el 1 y el ${deliveryOptions.length}.
`;

const unknownPaymentOptInput = (paymentMethods: any) =>  
`Disculpe no reconocimos su respuesta, por favor elija una opción
entre las siguientes:

${paymentMethods.map((method: any, i: number) => (`${i + 1} - ${method.name}\n${method.details}\n`)).join('')}

- Responda escribiendo un núm. entre el 1 y el ${deliveryOptions.length}.
`;

export const getLinkOnly = (text: string) => {
    if (!text) return;
    const word = 'https';

    const index = text.indexOf(word);   // 8
    const length = word.length;			// 7

    return text.slice(index + length - 5);
}

export const getPrelinkText = (detailsText: string) => {

    const contentDivided = detailsText?.split(' | ');

    const linkContent = contentDivided?.find((part) => part.includes('http'));
    const preLinkText = linkContent?.substring(0, linkContent.indexOf('http'));
    return preLinkText;
}

export const getAddressLinkText = (detailsText: string) => {
    const contentDivided = detailsText?.split(' | ');

    const linkContent: any = contentDivided?.find((part) => part.includes('http'));
    const linkOnly = getLinkOnly(linkContent);
    return linkOnly;
}

export const getPickUpAddress = (pickUpAddress: string) => {
    return pickUpAddress && !pickUpAddress.includes('http') ? `*- Dirección:* ${pickUpAddress}` : '';
}


const deliveryOptions = (deliveryOptions: any) => {
    return (
        `*Seleccioná día y opción de envío/retiro:*
${deliveryOptions.map((deliOption: any, i: number) => (`
*${i + 1} - ${deliOption.name}*
Dirección: ${deliOption.pickUpAddress}
¿Cuándo?: ${getDeliveryOrPickUpDatetime(deliOption.details)}
${getPrelinkText(deliOption.details)}: ${getAddressLinkText(deliOption.details)}`)).join('')}
`);
};

const getDeliveryOrPickupOptSelectedAndGetPaymentMethodText = (deliOption: IDeliveryMethod, paymentMethods: any, delivery_address: string) => {
    const hasDeliveryAddress = deliOption?.pickUpAddress || delivery_address;
    return hasDeliveryAddress ? (
//         *Método seleccionado con éxito!*

// *- Tipo de envío:* ${deliOption.name} 
// *- ¿Cuándo?:* ${getDeliveryOrPickUpDatetime(deliOption.details)}
// ${getPickUpAddress(deliOption?.pickUpAddress || delivery_address)}
// *- ${getPrelinkText(deliOption.details)}:* ${getAddressLinkText(deliOption.details)}

`
*Seleccione su forma de pago:*

${paymentMethods.map((method: IPaymentOption, i: number) => (`*${getEmojiNumber(i + 1)} - ${method.name}* \n${method.details}\n`)).join('')}
`): (
//     *Método seleccionado con éxito!*

// *- Tipo de envío:* ${deliOption.name} 
// *- ¿Cuándo?:* ${getDeliveryOrPickUpDatetime(deliOption.details)}
// *- ${getPrelinkText(deliOption.details)}:* ${getAddressLinkText(deliOption.details)}

`
*Por favor seleccione su forma de pago:*

${paymentMethods.map((method: IPaymentOption, i: number) => (`*${i + 1} - ${method.name}* \n${method.details}\n`)).join('')}
`)};

const thanksMsg = () =>  
`Muchas gracias por tu compra!!
`;

const thanksMsgNoPurchase = () =>  
`Qué tengas un excelente día ☀ y acordate que también podes pedir por nuestra pagina web!
Aprovecho para invitarte a que nos sigas en Instagram 😊: https://www.instagram.com/dittofarm.sd

Gracias por tu tiempo, te invitamos a que vuelvas en el momento que desees.
`;

const thanksMsgNoDevelopedFunction = () =>  
`Funcionalidad todavia en desarrollo, te pedimos disculpas, pronto estará posible esta opción. Puede comenzar su compra desde el comienzo si deséa.
`;

const purchaseErrorMsg = () =>  
`Hubo un error en tu compra, por favor aguarda y te avisaremos en breve que salio mal! Puede probar de vuelta su compra en unos instantes.

Te pedimos disculpas!
`;

const getDeliveryAddress = () =>  
`Por favor ingrese la dirección de envío, calle, altura y detalles. Por ej. Belgrano 320, porton gris, o Dpto. 4B.

- Te recordamos que solo hacemos delivery en la zona indicada en el siguiente link:
https://cutt.ly/4Cvlc59 , si está fuera de esta zona, su compra va a ser cancelada.
`;

const paymentMethodSelectedAndOrderConfirmationMsj = (shoppingCart: any) => {
    const ccString = `Recargo por tarjeta: $${(shoppingCart.ccCharge).toFixed(2)}`;
    const deliveryFeeString = `Recargo por envío: $${(shoppingCart.deliveryFee).toFixed(2)}`;
    const total = shoppingCart.ccCharge + shoppingCart.deliveryFee + shoppingCart.total;
    return `*Por favor verifique que su orden sea correcta.*

Mét. de pago: *${shoppingCart.payment_method_name}*
Mét. de envío: *${shoppingCart.delivery_method_name}*
Dir. *${shoppingCart.delivery_address}*

*Su carrito:*
${shoppingCart.products.map((product: any, i: number) => (`- ${product.name} $${product.price}. *Unidades:* ${product.quantity}\n`)).join('')}
Subtotal productos: $${(shoppingCart.total).toFixed(2)}${shoppingCart.ccCharge > 0 ? `\n${ccString}\n` : ''}${shoppingCart.deliveryFee > 0 ? `\n${deliveryFeeString}` : ''}
*Total a Pagar: $${(total).toFixed(2)}*

1️⃣ - Confirmar tu compra
2️⃣ - Cambiar forma de pago
3️⃣ - Cambiar método de envio
4️⃣ - Cambiar productos de tu carrito
5️⃣ - Desistir de tu compra
`};

export {
    deliveryPurchaseWithTransferPayment,
    deliveryPurchaseWithCashPayment,
    pickUpPurchaseWithTransferPayment,
    pickUpPurchaseWithCashPayment,
    orderPaidConfirmation,
    orderDeliveredAndFeedBack,
    userSignedUp,
    welcomeMsgNameRequired,
    mainMenuAuthenticatedUser,
    enterValidName,
    listAvailableProducts,
    tecnicasDeCultivoInfo,
    getQuantityOfProduct,
    invalidNumberInput,
    reListingAvailableProducts,
    unknownUserInput,
    deliveryOptions,
    getDeliveryAddress,
    getDeliveryOrPickupOptSelectedAndGetPaymentMethodText,
    unknownDeliPickUpOptInput,
    thereWasAProblemWaitForAssistance,
    unknownPaymentOptInput,
    paymentMethodSelectedAndOrderConfirmationMsj,
    enterValidAddress,
    thanksMsg,
    thanksMsgNoDevelopedFunction,
    thanksMsgNoPurchase,
    purchaseErrorMsg,
    thereWasAProblemWaitForAssistance2,
    invalidProductQuantity,
    hablarConUnRepMsg,
    listCategories,
    unknownInputDefault,
    manualInput,
    reEnterValidName,
    noAvailableProducts,
    noAvailableDeliveryMethods,
    noAvailableCategories
};