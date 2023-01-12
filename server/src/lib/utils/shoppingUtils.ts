import { deliveryPurchaseWithCashPayment, deliveryPurchaseWithTransferPayment, pickUpPurchaseWithCashPayment, pickUpPurchaseWithTransferPayment } from "../../messages/customersMessages";
import { ICategory, IDeliveryMethod, IPaymentOption, IUser, Roles, TriggerSteps } from "../types";
import { BANK_TRANSFER_PAYMENT_OPTION, CASH_PAYMENT_OPTION, CC_PAYMENT_OPTION, COMPANY_DESCRIPTION_TEXT, CUSTOMER_ADDRESS_DELIVERY_METHOD, PICKUP_GRANJA_DELIVERY_METHOD, PICKUP_GUEMES_DELIVERY_METHOD, TALK_TO_A_REPRESENTATIVE_MODE } from "./constant";
const { MessageMedia, List } = require('whatsapp-web.js');
import { Buttons } from "whatsapp-web.js"

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
    console.log(input.payment_option_type)
    switch (input.payment_option_type) {
        case BANK_TRANSFER_PAYMENT_OPTION:
            if (PICKUP_GUEMES_DELIVERY_METHOD === input.delivery_method_name || PICKUP_GRANJA_DELIVERY_METHOD === input.delivery_method_name) {
                return pickUpPurchaseWithTransferPayment(purchasedDate, input?.delivery_address, input.total, user?.name, input.delivery_method_name, input.payment_method_name, input?.products, input.delivery_date);
            } else if (normalizeText(input.delivery_method_name).includes(normalizeText(CUSTOMER_ADDRESS_DELIVERY_METHOD))) {
                return deliveryPurchaseWithTransferPayment(purchasedDate, input?.delivery_address, input.total, user?.name, input.delivery_method_name, input.payment_method_name, input?.products, input.delivery_date);
            }
            break;
        case CASH_PAYMENT_OPTION:
        case CC_PAYMENT_OPTION:
            if (PICKUP_GUEMES_DELIVERY_METHOD === input.delivery_method_name || PICKUP_GRANJA_DELIVERY_METHOD === input.delivery_method_name) {
                return pickUpPurchaseWithCashPayment(purchasedDate, input?.delivery_address, input.total, user?.name, input.delivery_method_name, input.payment_method_name, input?.products, input.delivery_date); 
            } else if (normalizeText(input.delivery_method_name).includes(normalizeText(CUSTOMER_ADDRESS_DELIVERY_METHOD))) {
                return deliveryPurchaseWithCashPayment(purchasedDate, input?.delivery_address, input.total, user?.name, input.delivery_method_name, input.payment_method_name, input?.products, input.delivery_date);
            }         
            break;
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

export const addTalkToRepresentativeOptToList = (section: { title?: string; rows?: any; row?: any; }) => {
    section?.rows.push({
        title: section?.rows?.length + 1 + ' - Necesito ayuda',
        description: 'Hablar con un encargado para ayudarte con alguna opción fuera de este menú',
        id: 'talk-to-rep-opt',
    })
    return section;
};

export const addTalkToRepresentativeOptToButtons = (buttons: { body: string;}[]) => {
    const body = buttons?.length + 1 + ' - Necesito ayuda';
    buttons.push({
        body
        // description: 'Hablar con un encargado para ayudarte con alguna opción fuera de este menú',
        // id: 'talk-to-rep-opt',
    })
    return buttons;
};

export const getListButtons = (bodyDescription: string, listButtonText: string, listSections: any, listTitle: string, footer: any) => {
    return new List(bodyDescription,
        listButtonText,
        [listSections],
        listTitle,
        footer);
};

export const getButtons = (bodyDescription: string, buttonsTexts: any[], buttonTitle: string, footer: any) => {
    return new Buttons(bodyDescription,
        buttonsTexts,
        buttonTitle,
        footer);

};
            
export const getCategoriesButtons = (resData: any, categories: any) => {
    console.log(categories)
    if (categories.length === 1 || categories.length === 2) {
        const buttonsBodies: any = [];
        categories.map((category: any, idx: number) => buttonsBodies.push({ body: idx + 1 + ' - ' + category.name })) ;
        TALK_TO_A_REPRESENTATIVE_MODE && addTalkToRepresentativeOptToButtons(buttonsBodies);
        console.log('buttonsBodies:',buttonsBodies, buttonsBodies.toString())
        resData.replyMessage = getButtons(
            COMPANY_DESCRIPTION_TEXT,
            buttonsBodies,
            'Hola! 🙋🏻 Muchas gracias por comunicarte con nosotros. Soy tu asistente virtual y estoy para ayudarte.',
            'Seleccione una opción:'
        );
    } else {
        const menuRows = getRowsFrom(categories);
        const listSections = getSectionWith('Seleccioná una categoría', menuRows)
        TALK_TO_A_REPRESENTATIVE_MODE && addTalkToRepresentativeOptToList(listSections);

        resData.replyMessage = getListButtons(
            COMPANY_DESCRIPTION_TEXT + '/n Seleccione una opción en el siguiente menú:',
            'Ver menú',
            listSections,
            'Hola! 🙋🏻 Muchas gracias por comunicarte con nosotros. Soy tu asistente virtual y estoy para ayudarte.',
        '');
    } 
    resData.trigger = TriggerSteps.SELECT_CATEGORY;
    console.log('resData:::', resData)
    return resData;
};
    
export const getAddQuantityButtons = (resData: any, product_quantity: any) => {
    const menuRows = getButtonTextBodiesFrom(Number(product_quantity));
            
    resData.replyMessage = getButtons(
        'Por favor, seleccione que cantidad desea agregar, si la opción que busca no esta en los botones, es porque no hay suficiente stock :)',
        menuRows,
        'Ingrese la cantidad',
        ''
    );

    resData.trigger = TriggerSteps.SELECT_QUANTITY_OF_PRODUCT;
    return resData;
};
    
const getRowsFrom = (items: any) => items.map((item: any, idx: number) => {
    return {
        title: idx + 1 + ' - ' + item.name,
        description: item.meta_description,
        id: item.id
    }
});

const getButtonTextBodiesFrom = (maxOptNumber: number) => {
    if (maxOptNumber > 3) {
        return [{ body: '1' }, { body: '2' }, { body: 'Ingresar otra cantidad' }];
    } else if (maxOptNumber === 3) {
        return [{ body: '1' }, { body: '2' }, { body: '3' }];
    } else if (maxOptNumber === 2) {
        return [{ body: '1' }, { body: '2' }];
    } else {
        return [{ body: '1' }];
    }
};

export const getProductsList = (resData: any, availableProducts: any, trigger: TriggerSteps, title: string) => {
    // later on add buttons option if number is bellow 3

    const menuRows = getProductRowsFrom(availableProducts);
    const listSections = getSectionWith('Productos', menuRows)

    resData.replyMessage = getListButtons(
        'Seleccion de productos',
        'Ver productos',
        listSections,
        title,
        '');
    resData.trigger = trigger;

    return resData;
};

export const getDeliveryMethodsButtons = (resData: any, deliveryMethods: any, trigger: TriggerSteps, title: string) => {
    const menuRows = getRowsFrom(deliveryMethods);
        const listSections = getSectionWith('Selecciona envío/pickup', menuRows)
        TALK_TO_A_REPRESENTATIVE_MODE && addTalkToRepresentativeOptToList(listSections);

        resData.replyMessage = getListButtons(
            'Seleccione si va a buscar su envio o quiere enviarlo:',
            'Seleccionar metodo',
            listSections,
            'Metodo de envio/pickup',
        '');
    
    resData.trigger = TriggerSteps.DELIVERY_OPT_SELECTED;
    console.log('resData:::', resData)
    return resData;
};
  
    
const getSectionWith = (title: string, rows: any) => {
    return {
        title,
        rows,
    }
};

const getProductRowsFrom = (items: any) => items.map((item: any, idx: number) => {
    return {
        title: idx + 1 + ' - ' + item.name + ' $' + item.price,
        description: item.description,
        id: item.id
    }
});

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
    "adios",
    "chau"
]

export const normalizeText = (texto: string) => {
    return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"");
}