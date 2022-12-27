import { deliveryPurchaseWithCashPayment, deliveryPurchaseWithTransferPayment, pickUpPurchaseWithCashPayment, pickUpPurchaseWithTransferPayment } from "../../messages/customersMessages";
import { ICategory, IDeliveryMethod, IPaymentOption, IUser, Roles } from "../types";
import { BANK_TRANSFER_PAYMENT_OPTION, CASH_PAYMENT_OPTION, CC_PAYMENT_OPTION, CUSTOMER_ADDRESS_DELIVERY_METHOD, PICKUP_GRANJA_DELIVERY_METHOD, PICKUP_GUEMES_DELIVERY_METHOD } from "./constant";

export const isUserInputInvalid = (userInput: number, maxOptions: number) => { 
    return !userInput || userInput < 1 || userInput > maxOptions;
}

export const getDeliveryPickUpDate = (details: string) => details.split("|")[1]?.trim();

const unusedCategories = ['hortalizas-de-hojas', 'remedios-naturales', 'plaguicida', 'repelente', 'bioestimulante', 'fertilizantes', 'todos-los-productos', 'insumos-para-cultivos'];
export const harcodedFilterOfUnusedCategories = (categories: ICategory[]) => categories.filter((category: ICategory) => !unusedCategories.includes(category.slug))

export const getEmptyShoppingCart = (user: any) => { 
    return {
        products: [],
        customer_id: user.id,
        contact_number: getCustomerPrimaryNumber(user),
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
    }
}

export const getEmptyAddress = (userId = null, address: string = '', title: string = '', location: string = '', instructions: string = '', is_primary = false) => { 
    return {
        id: userId,
        title: title,
        address: address,
        location: location,
        instructions: instructions,
        is_primary: is_primary
    }
}

export const getOrderConfirmationMsgText = (
    input: {
        delivery_method_name: string;
        payment_option_type: string;
        delivery_address: string;
        total?: any;
        payment_method_name: string;
        products?: any;
        delivery_date: string;
    },
    user: any = null
) => { 
    const purchasedDate = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });
    switch (input.payment_option_type) {
        case BANK_TRANSFER_PAYMENT_OPTION:
            if (PICKUP_GUEMES_DELIVERY_METHOD === input.delivery_method_name || PICKUP_GRANJA_DELIVERY_METHOD === input.delivery_method_name) {
                return pickUpPurchaseWithTransferPayment(purchasedDate, input?.delivery_address, input.total, user?.name, input.delivery_method_name, input.payment_method_name, input?.products, input.delivery_date);
            } else if (CUSTOMER_ADDRESS_DELIVERY_METHOD === input.delivery_method_name) {
                return deliveryPurchaseWithTransferPayment(purchasedDate, input?.delivery_address, input.total, user?.name, input.delivery_method_name, input.payment_method_name, input?.products, input.delivery_date);
            }
        case CASH_PAYMENT_OPTION:
        case CC_PAYMENT_OPTION:
            if (PICKUP_GUEMES_DELIVERY_METHOD === input.delivery_method_name || PICKUP_GRANJA_DELIVERY_METHOD === input.delivery_method_name) {
                return pickUpPurchaseWithCashPayment(purchasedDate, input?.delivery_address, input.total, user?.name, input.delivery_method_name, input.payment_method_name, input?.products, input.delivery_date); 
            } else if (CUSTOMER_ADDRESS_DELIVERY_METHOD === input.delivery_method_name) {
                return deliveryPurchaseWithCashPayment(purchasedDate, input?.delivery_address, input.total, user?.name, input.delivery_method_name, input.payment_method_name, input?.products, input.delivery_date);
            }            
        default:
            console.log('no case found in: switch (input.payment_option_type)')
            break;
    }
    return 'Error: in getOrderConfirmationMsgText, payment_option_type not cool'                   
}
        
export const getCleanNumber = (contact_number: string) => {
    if (contact_number?.includes('54'))
    return `${contact_number}@c.us`;
}

export const containsValidName = (name: string) => {
    const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

    return regName.test(name);
}
// @ts-ignore
export const getCustomerPrimaryNumber = (customer: IUser) => customer?.phones?.length > 0 ? customer?.phones[0]?.number : '';

//   const selectedContact= customer?.phones.find(
//     (item) => item.is_primary === true
//   );

export const isUserStaff = (customer: IUser) => customer?.role === Roles.STAFF;



export const getDeliveryOrPickUpDatetime = (detailsText: string) => {
    // if modify this, also modify server utils with these functions logic
    const timeText = geTimeScheduleOnly(detailsText);
    const dateText = geDateScheduleOnly(detailsText);

    return `${dateText} ${timeText}`;
}

const geTimeScheduleOnly = (details: string) => {
    if (!details) return '';
    const word = 'Horario: ';

    const index = details.indexOf(word);   // 8
    const length = word.length;			// 7

    return details.slice(index + length);
};
  
const geDateScheduleOnly = (detailsText: string) => {
    const contentDivided = detailsText?.split(' | ');
    return `${contentDivided[1] && contentDivided[1]}`;
};
  
export const calculateDeliveryCharge = (delivery_method: any) => {
    if (delivery_method.isPickUp) return 0;
    const charge = delivery_method?.name?.split("$");
    const chargeFormatted = charge[charge?.length - 1]?.replace(/\D/g, '');
    
    return Number(chargeFormatted);
}

export const calculateSubTotalPrice = (delivery_method: any) => {
    if (delivery_method.isPickUp) return 0;

    const charge = delivery_method?.name?.split("$");
    const chargeFormatted = charge[charge?.length - 1]?.replace(/\D/g, '');
    
    return Number(chargeFormatted);
}


export const calculateCCCharge = (paymentOptionSelected: any, totalAmount: number) => {

    if (paymentOptionSelected?.name?.toLowerCase().includes('tarjeta')) {
        const ccCharge = paymentOptionSelected?.name?.replace(/\D/g, '');
        return totalAmount * (ccCharge / 100);
    }
    return 0;
}

export const getTotalAmount = (products: any) => {

  const totalItemsAmount = products.reduce((total: number, item: any) => {
    const { price, salePrice = 0, quantity = 0, recicledQuantity = 0, packagePrice = 0 } = item;
    

    const recicledPrice = price - packagePrice;
    const displayPrice = price || salePrice;
    const nonRecicledTotalPrice = displayPrice * quantity;
    const recicledTotalPrice = recicledPrice * recicledQuantity;
    const totalPrice = nonRecicledTotalPrice + recicledTotalPrice
    return total + totalPrice;
  }, 0);

  return totalItemsAmount;
};

export const initialConversationKeys = [
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

export const endConversationKeys = [
    "muchas gracias",
    "ok",
    "gracias",
    "vale gracias",
    "adios"
]

export const normalizeText = (texto: string) => {
    return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}