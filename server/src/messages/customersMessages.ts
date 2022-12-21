import { IDeliveryMethod, IPaymentOption, IProduct } from "../lib/types";
import { BANK_TRANSFER_ALIAS, BANK_TRANSFER_CBU, CURRENCY } from "../lib/utils/constant";
import { getDeliveryOrPickUpDatetime, getTotalAmount } from "../lib/utils/shoppingUtils";

const pickUpPurchaseWithTransferPayment = (purchasedDate: string, address: string, total: number, customerName: string, deliveryMethod: string, paymentMethod: string, products: any, delivery_pickup_date: string) =>
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
Juntos transformamos el mundo ♻️ Ditto Farm.
`;

const pickUpPurchaseWithCashPayment = (purchasedDate: string, address: string, total: number, customerName: string, deliveryMethod: string, paymentMethod: string, products: any, delivery_pickup_date: string) =>
`${customerName ? `Hola ${customerName}, t` : 'T'}u compra ha sido realizada con éxito!

📢 *Importante* 📢
 - Te recordamos llevar bolsas llevar tus productos por favor!

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

Muchas gracias por su compra eco-sustentable!
Juntos transformamos el mundo ♻️ Ditto Farm.
`;

const deliveryPurchaseWithTransferPayment = (purchasedDate: string, address: string, total: number, customerName: string, deliveryMethod: string, paymentMethod: string, products: any, delivery_pickup_date: string) =>  
`${customerName ? `Hola ${customerName}, t` : 'T'}u compra ha sido realizada con éxito!
📢 Importante 📢
 - Te vamos a escribir una hora antes de llevar tu pedido.
 - Para pagar, enviános una transfercia por ${CURRENCY}${total} al alias *${BANK_TRANSFER_ALIAS}* o cbu ${BANK_TRANSFER_CBU} y compartinos el comprobante aquí antes de retirar tu pedido 🙏.
 
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

Muchas gracias por su compra eco-sustentable!
Juntos transformamos el mundo ♻️ Ditto Farm.
`;

const deliveryPurchaseWithCashPayment = (purchasedDate: string, address: string, total: number, customerName: string, deliveryMethod: string, paymentMethod: string, products: any, delivery_pickup_date: string) =>  
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

Muchas gracias por su compra eco-sustentable!
Juntos transformamos el mundo ♻️ Ditto Farm.
`;

const orderPaidConfirmation = (purchasedDate: string, address: string, total: number, customerName: string, deliveryMethod: string, paymentMethod: string, products: any) =>  
`Hola ${customerName}, hemos recibido tu pago con exito!

Muchas gracias por su compra eco-sustentable!
Juntos transformamos el mundo ♻️ Ditto Farm.
`;

const orderDeliveredAndFeedBack = (customerName: string) =>  
`Hola ${customerName}, has recibido tu pedido con exito!

Sabemos que errar es humano, y tu opinion nos importa!
Ganate un cupón de 10% de descuento con tan solo contarnos como llegó tu pedido y si de paso, tenés alguna recomendación/consejo 🙌

Muchas gracias por su compra eco-sustentable!
Juntos transformamos el mundo ♻️ Ditto Farm.
`;

const userSignedUp = (customerName: string) =>  
`Hola ${customerName}, creaste tu cuenta!
`;

const enterValidName = () =>  
`Respuesta inválida.
Para comenzar necesitaría que me escribas  tu 𝐧𝐨𝐦𝐛𝐫𝐞 𝐲 𝐚𝐩𝐞𝐥𝐥𝐢𝐝𝐨 completo por favor 🙂, 
solamente eso (Por ejemplo: Sofia Martinez)
`;

const thereWasAProblemWaitForAssistance = () =>  
`Algo salío mal, pero revisaremos pronto este chat para corregirlo, 
mientras tanto tenés las siguientes opciones:

1 - Ver listado con precios de frutas/verduras y hacer pedido.
2 - Conocer las técnicas agrosustentables que aplicamos.

Por favor solamente escribí el número elegido 1 o 2.
`;

const thereWasAProblemWaitForAssistance2 = () =>  
`Algo salío mal, pero revisaremos pronto este chat para corregirlo, 
mientras tanto tenés las siguientes opciones:
`;

const welcomeMsgNameRequired = () =>  
`Hola! 🙋🏻 Muchas gracias por comunicarte con nosotros. Soy *Ditto*😎 
tu asistente virtual y estoy para ayudarte.
Para comenzar necesitaría que me escribas tu 𝐧𝐨𝐦𝐛𝐫𝐞 𝐲 
𝐚𝐩𝐞𝐥𝐥𝐢𝐝𝐨 completo por favor 🙂, (Por ejemplo: Sofia Martinez )
`;

// 2 - Ver listado con precios mayorista de frutas/verduras.
const mainMenuAuthenticatedUser = (customerName: string) =>  
`Hola ${customerName}, Muchas gracias por comunicarte con nosotros. Soy *Ditto*😎 
tu asistente virtual y estoy para ayudarte. Tenés las siguientes opciones:

*1 - Ver listado con precios de frutas/verduras y hacer pedido.*
*2 - Conocer las técnicas agrosustentables que aplicamos.*

Por favor escribí un número entre el 1 y el 2 para elegir una opción
`;

const listAvailableProducts = (products: any) =>  
`*Tenemos disponibles los siguientes productos:*

${products.map((product: any, i: number) => (`${i+1} - ${product.name} - $${product.price}\n`)).join('')}

*Por favor ingresá un número entre el 1 y el ${products.length} para agregarlo a tu carrito*
`;

const reListingAvailableProducts = (productsAdded: any, availableProducts: any) => {
    const totalItemsAmount = getTotalAmount(productsAdded);
    return (
`*Producto agregado al carrito correctamente!*
*Su carrito:*

${productsAdded.map((product: any, i: number) => (`- ${product.name} - Cantidad: ${product.quantity}\n`)).join('')}
Total: $${totalItemsAmount}

*Puedes seguir agregando productos:*

${availableProducts.map((product: any, i: number) => (`${i+1} - ${product.name} - $${product.price}\n`)).join('')}
*${availableProducts.length + 1} - Ir a pagar*

(Por favor ingresá un numero entre el 1 y el ${availableProducts.length + 1})
`)};

const tecnicasDeCultivoInfo = () =>  
`asi y asa hacemos las verdus

 Tenés las sig. opciones:

1 - Ver listado con precios de frutas/verduras y hacer pedido.
2 - Conocer las técnicas agrosustentables que aplicamos.

Por favor escribí un número entre el 1 y el 2 para elegir una opción
`;

const enterValidAddress = () =>  
`Por favor ingrese una dirección válida. Ejemplo: Belgrano 432, piso 3A`;

const invalidProductQuantity = (maxInputNumber: string) =>  
`No hay suficiente cantidad de stock o no ingresó un número.
Por favor indique la cantidad de unidades que desea, ${Number(maxInputNumber) < 2 ? 'Solo tenemos 1 unidad' : `ingresando un número entre el 1 y el ${maxInputNumber}`}
`;

const invalidNumberInput = (maxInputNumber: string) =>  
`Por favor ingrese un número entre el 1 y el ${maxInputNumber}
`;

const getQuantityOfProduct = (productName: string, quantity: string) =>  
`Cuántas unidades de 

*- ${productName}*

 querés agregar a tu pedido?
`;
// (Ingresa un numero entre el 1 y el ${quantity})

const unknownUserInput = () =>  
`Disculpe no reconocimos su respuesta, por favor elija una opción
entre las siguientes:

*1 - Ver listado con precios de frutas/verduras y hacer pedido.*
*2 - Conocer las técnicas agrosustentables que aplicamos.*

Por favor escribí un número entre el 1 y el 2 para elegir una opción
`;



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

const getLinkOnly = (text: string) => {
    if (!text) return;
    const word = 'https';

    const index = text.indexOf(word);   // 8
    const length = word.length;			// 7

    return text.slice(index + length - 5);
}

const getPrelinkText = (detailsText: string) => {

    const contentDivided = detailsText?.split(' | ');

    const linkContent = contentDivided?.find((part) => part.includes('http'));
    const preLinkText = linkContent?.substring(0, linkContent.indexOf('http'));
    return preLinkText;
}

const getAddressLinkText = (detailsText: string) => {
    const contentDivided = detailsText?.split(' | ');

    const linkContent: any = contentDivided?.find((part) => part.includes('http'));
    const linkOnly = getLinkOnly(linkContent);
    return linkOnly;
}

const getPickUpAddress = (pickUpAddress: string) => {
    return pickUpAddress && !pickUpAddress.includes('http') ? `Dirección:* ${pickUpAddress}` : '';
}


const deliveryOptions = (deliveryOptions: any) => {
    return (
        `*Por favor seleccione día y opción de envío o retiro de su compra:*
${deliveryOptions.map((deliOption: any, i: number) => (`
*${i + 1} - ${deliOption.name}*
Dirección: ${deliOption.pickUpAddress}
¿Cuándo?: ${getDeliveryOrPickUpDatetime(deliOption.details)}
${getPrelinkText(deliOption.details)}: ${getAddressLinkText(deliOption.details)}`)).join('')}

- *Responda escribiendo un núm. entre el 1 y el ${deliveryOptions.length} para elegir una opción.*`
);};

const getDeliveryOrPickupOptSelectedAndGetPaymentMethodText = (deliOption: IDeliveryMethod, paymentMethods: any, delivery_address: string) =>  
`*Método seleccionado con éxito!*

*- Tipo de envío:* ${deliOption.name} 
*- ¿Cuándo?:* ${getDeliveryOrPickUpDatetime(deliOption.details)}
*- ${getPickUpAddress(deliOption?.pickUpAddress || delivery_address)}
*- ${getPrelinkText(deliOption.details)}:* ${getAddressLinkText(deliOption.details)}

 *Por favor seleccione su forma de pago:*

${paymentMethods.map((method: IPaymentOption, i: number) => (`*${i + 1} - ${method.name}* \n${method.details}\n`)).join('')}

- Responda escribiendo un núm. entre el 1 y el ${paymentMethods.length}.
`;

const thanksMsg = () =>  
`Muchas gracias por tu compra!!
`;

const thanksMsgNoPurchase = () =>  
`Esperemos leerte pronto, hasta luego!
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
    const ccString = `Recargo por tarjeta: $${shoppingCart.ccCharge}`;
    const deliveryFeeString = `Recargo por envío: $${shoppingCart.deliveryFee}`;
    const total = shoppingCart.ccCharge + shoppingCart.deliveryFee + shoppingCart.total;
    return `*Por favor verifique que su orden sea correcta.*

Su carrito:
${shoppingCart.products.map((product: any, i: number) => (`- ${product.name} $${product.price}. *Cantidad:* ${product.quantity}`)).join('')}

*Método de pago:* ${shoppingCart.payment_method_name}
*Método de envío:* ${shoppingCart.delivery_method_name}
*Dirección:* ${shoppingCart.delivery_address}

Subtotal productos: $${shoppingCart.total}${shoppingCart.ccCharge > 0 ? `\n${ccString}\n` : ''}${shoppingCart.deliveryFee > 0 ? `${deliveryFeeString}\n` : ''}

*Total a Pagar: $${total}*

*Por favor ingresa un número del 1 al 5 para elegir una opción*
1 - Para confirmar tu compra
2 - Para cambiar forma de pago
3 - Para cambiar método de envio
4 - Cambiar productos de tu carrito
5 - Para desistir de tu compra :(
`
};

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
    invalidProductQuantity
};