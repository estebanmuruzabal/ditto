import { BANK_TRANSFER_ALIAS, BANK_TRANSFER_CBU, CURRENCY } from "../lib/utils/constant";

const pickUpPurchaseWithTransferPayment = (purchasedDate: string, address: string, total: number, customerName: string, deliveryMethod: string, paymentMethod: string, products: any) =>  
`Hola ${customerName}, tu compra ha sido realizada con éxito!

📢 *Importante* 📢
 - Te recordamos llevar bolsas llevar tus productos por favor!
 - Para pagar, enviános una transfercia por ${CURRENCY}${total} al alias *${BANK_TRANSFER_ALIAS}* o cbu ${BANK_TRANSFER_CBU} y compartinos el comprobante aquí antes de retirar tu pedido 🙏.

*Detalle:*
*Fecha de compra:*
${purchasedDate}
*Método de envío/pickup:*
${deliveryMethod}
*Dirección de pickup/envío:*
${address}
*Método de pago:*
${paymentMethod}
*Productos comprados:*
${products.map((product: any) => (`${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}`))}
*Monton total:*
${CURRENCY}${total}

Muchas gracias por su compra eco-sustentable!
Juntos transformamos el mundo ♻️ Ditto Farm.
`;

const pickUpPurchaseWithCashPayment = (purchasedDate: string, address: string, total: number, customerName: string, deliveryMethod: string, paymentMethod: string, products: any) =>  
`Hola ${customerName}, tu compra ha sido realizada con éxito!

📢 *Importante* 📢
 - Te recordamos llevar bolsas llevar tus productos por favor!

*Detalle:*
*Fecha de compra:*
${purchasedDate}
*Método de envío/pickup:*
${deliveryMethod}
*Dirección de pickup/envío:*
${address}
*Método de pago:*
${paymentMethod}
*Productos comprados:*
${products.map((product: any) => (`${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}`))}
*Monton total:*
${CURRENCY}${total}

Muchas gracias por su compra eco-sustentable!
Juntos transformamos el mundo ♻️ Ditto Farm.
`;

const deliveryPurchaseWithTransferPayment = (purchasedDate: string, address: string, total: number, customerName: string, deliveryMethod: string, paymentMethod: string, products: any) =>  
`Hola ${customerName}, tu compra ha sido realizada con éxito!
📢 Importante 📢
 - Te vamos a escribir una hora antes de llevar tu pedido.
 - Para pagar, enviános una transfercia por ${CURRENCY}${total} al alias *${BANK_TRANSFER_ALIAS}* o cbu ${BANK_TRANSFER_CBU} y compartinos el comprobante aquí antes de retirar tu pedido 🙏.
 
*Detalle:*
*Fecha de compra:*
${purchasedDate}
*Método de envío/pickup:*
${deliveryMethod}
*Dirección de pickup/envío:*
${address}
*Método de pago:*
${paymentMethod}
*Productos comprados:*
${products.map((product: any) => (`${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}`))}
*Monton total:*
${CURRENCY}${total}

Muchas gracias por su compra eco-sustentable!
Juntos transformamos el mundo ♻️ Ditto Farm.
`;

const deliveryPurchaseWithCashPayment = (purchasedDate: string, address: string, total: number, customerName: string, deliveryMethod: string, paymentMethod: string, products: any) =>  
`Hola ${customerName}, tu compra ha sido realizada con éxito!
📢 *Importante* 📢
 - Te vamos a escribir una hora antes de llevar tu pedido.

*Detalle:*
*Fecha de compra:*
${purchasedDate}
*Método de envío/pickup:*
${deliveryMethod}
*Dirección de pickup/envío:*
${address}
*Método de pago:*
${paymentMethod}
*Productos comprados:*
${products.map((product: any) => (`${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}`))}
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
Ganate un cupón de 5% de descuento con tan solo contarnos como llegó tu pedido y si de paso, tenés alguna recomendación/consejo 🙌

Muchas gracias por su compra eco-sustentable!
Juntos transformamos el mundo ♻️ Ditto Farm.
`;

export {
    deliveryPurchaseWithTransferPayment,
    deliveryPurchaseWithCashPayment,
    pickUpPurchaseWithTransferPayment,
    pickUpPurchaseWithCashPayment,
    orderPaidConfirmation,
    orderDeliveredAndFeedBack
};