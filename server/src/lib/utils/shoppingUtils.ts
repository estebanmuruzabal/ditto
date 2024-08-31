import { ICategory, IDeliveryMethod, IPaymentOption, IUser, Roles, TriggerStaffSteps, TriggerSteps } from "../types";
import { BANK_TRANSFER_PAYMENT_OPTION, CASH_PAYMENT_OPTION, CC_PAYMENT_OPTION, COMPANY_DESCRIPTION_TEXT, CUSTOMER_ADDRESS_DELIVERY_METHOD, INTRODUCE_NEW_NAME_KEY_WORDS, INTRODUCE_QUANTITY_OPT_TEXT, KEEP_USER_NAME_KEY_WORD, Locales, PICKUP_GRANJA_DELIVERY_METHOD, PICKUP_GUEMES_DELIVERY_METHOD, PICKUP_LAJOLLA_DELIVERY_METHOD, PICKUP_OB_DELIVERY_METHOD, TALK_TO_A_REPRESENTATIVE_MODE, timeZone } from "./constant";
import { getButtons, getListButtons, getSectionWith } from "./whatsAppUtils";
import { deliveryPurchaseWithTransferPayment, pickUpPurchaseWithCashPayment, deliveryPurchaseWithCashPayment, getDeliveryAddress, pickUpPurchaseWithTransferPayment } from "../../messages/customersMessages";
export const isUserInputInvalid = (userInput: number, maxOptions: number) => { 
    return userInput < 1 || userInput > maxOptions;
}

export const getDeliveryPickUpDate = (details: string) => details.split("|")[1]?.trim();

const unusedCategories = ['hortalizas-de-hojas', 'remedios-naturales', 'plaguicida', 'repelente', 'bioestimulante', 'fertilizantes', 'todos-los-productos', 'insumos-para-cultivos'];
export const harcodedFilterOfUnusedCategories = (categories: ICategory[]) => categories.filter((category: ICategory) => !unusedCategories.includes(category.slug))

export const getEmptyShoppingCart = (user: any, lenguageLocale: string) => { 
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
        payment_id: null,
        lenguageLocale
    }
}

export const getQuickSaleShoppingCart = (user: any) => { 
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
    user: any = null,
    lenguageLocale: string
) => { 
    /// aca papa metele codigo
    const purchasedDate = new Date().toLocaleString('en-US', { timeZone });
    const pickupMethoSelected = lenguageLocale === 'en' ? (PICKUP_LAJOLLA_DELIVERY_METHOD === input.delivery_method_name || PICKUP_OB_DELIVERY_METHOD === input.delivery_method_name) : (PICKUP_GUEMES_DELIVERY_METHOD === input.delivery_method_name || PICKUP_GRANJA_DELIVERY_METHOD === input.delivery_method_name);
    // const deliveryMethodSelected = lenguageLocale === 'en' ? normalizeText(input.delivery_method_name).includes(normalizeText(DELIVERY_METHOD_SELECTED)) : normalizeText(input.delivery_method_name).includes(normalizeText(CUSTOMER_ADDRESS_DELIVERY_METHOD));
    switch (input.payment_option_type) {
        case BANK_TRANSFER_PAYMENT_OPTION:
            return pickupMethoSelected
                ? pickUpPurchaseWithTransferPayment(purchasedDate, input?.delivery_address, input.total, user?.name, input.delivery_method_name, input.payment_method_name, input?.products, input.delivery_date, lenguageLocale)
                : deliveryPurchaseWithTransferPayment(purchasedDate, input?.delivery_address, input.total, user?.name, input.delivery_method_name, input.payment_method_name, input?.products, input.delivery_date, lenguageLocale);
            break;
        case CASH_PAYMENT_OPTION:
        case CC_PAYMENT_OPTION:
            return pickupMethoSelected
                ? pickUpPurchaseWithCashPayment(purchasedDate, input?.delivery_address, input.total, user?.name, input.delivery_method_name, input.payment_method_name, input?.products, input.delivery_date, lenguageLocale)
                : deliveryPurchaseWithCashPayment(purchasedDate, input?.delivery_address, input.total, user?.name, input.delivery_method_name, input.payment_method_name, input?.products, input.delivery_date, lenguageLocale);         
            break;
        default:
            console.log('no case found in: switch (input.payment_option_type)::', input.payment_option_type)
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
export const isGrower = (customer: IUser) => customer?.role === Roles.GROWER;

export const getDeliveryOrPickUpDatetime = (detailsText: string, lenguageLocale: string) => {
    // if modify this, also modify server utils with these functions logic
    const timeText = getDeliverySchedule(detailsText, lenguageLocale);
    const dateText = geDateScheduleOnly(detailsText);
    // solo por el evento saco esto
    // return `${dateText} ${timeText}`;
    return detailsText;
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


export const getCategoriesButtons = (resData: any, categories: any) => {
    if (categories.length === 1 || categories.length === 2) {
        const buttonsBodies: any = [];
        categories.map((category: any, idx: number) => buttonsBodies.push({ body: idx + 1 + ' - ' + category.name })) ;
        TALK_TO_A_REPRESENTATIVE_MODE && addTalkToRepresentativeOptToButtons(buttonsBodies);

        resData.replyMessage = getButtons(
            COMPANY_DESCRIPTION_TEXT,
            buttonsBodies,
            'Hola! 🙋🏻 Muchas gracias por comunicarte con nosotros. Soy tu asistente virtual y estoy para ayudarte.',
            'Seleccione una opción:'
        );
    } else {
        const menuRows = getCategoryRowsFrom(categories);
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
    return resData;
};
    
export const getAddQuantityButtons = (resData: any, product_quantity: any) => {
    const menuRows = getButtonTextBodiesFrom(Number(product_quantity));
            
    resData.replyMessage = getButtons(
        'Por favor, seleccione cuantas unidades desea comprar, si la opción que busca no esta en los botones, es porque no hay suficiente stock :)',
        menuRows,
        'Ingrese la cantidad',
        ''
    );

    resData.trigger = TriggerSteps.SELECT_QUANTITY_OF_PRODUCT;
    return resData;
};
    
export const confirmNameOrNewNameButtons = (resData: any, username: string) => {
    const menuRows = [{ body: KEEP_USER_NAME_KEY_WORD }, { body: INTRODUCE_NEW_NAME_KEY_WORDS }];
            
    resData.replyMessage = getButtons(
        `¿Quiere usar este nombre para su pedido?
*${username}*`,
        menuRows,
        'Nombre del comprador',
        ''
    );

    resData.trigger = TriggerSteps.USER_SHOULD_INPUT_HIS_NAME;
    return resData;
};

const getCategoryRowsFrom = (items: any) => items.map((item: any, idx: number) => {
    return {
        title: idx + 1 + ' - ' + item.name,
        description: item.meta_description,
        id: item.id
    }
});

const getDeliveryRowsFrom = (items: any) => items.map((item: any, idx: number) => {
    return {
        title: item.name,
        description: item.details,
        id: item.id
    }
});

const getPaymentRowsFrom = (items: any) => items.map((item: any, idx: number) => {
    return {
        body: idx + 1 + ' - ' + item.name,
    }
});


const getConfirmationTextBodiesFrom = () => {
    return [{ body: '1 - Confirmar compra 😎' }, { body: '2 - Empezar todo de vuelta 😭' }, { body: '3 - Cancelar compra 🤨' }];
};

const getButtonTextBodiesFrom = (maxOptNumber: number) => {
    if (maxOptNumber > 3) {
        return [{ body: '1' }, { body: '2' }, { body: INTRODUCE_QUANTITY_OPT_TEXT }];
    } else if (maxOptNumber === 3) {
        return [{ body: '1' }, { body: '2' }, { body: '3' }];
    } else if (maxOptNumber === 2) {
        return [{ body: '1' }, { body: '2' }];
    } else {
        return [{ body: '1' }];
    }
};

export const getProductsList = (resData: any, availableProducts: any, trigger: TriggerSteps, title: string, buttonText: string, shoppingCart: any) => {
    const menuRows = availableProducts?.length > 0 ? getProductRowsFrom(availableProducts) : [{ title: 'No hay productos disponibles por el momento', description: '', id: '00' }];
    console.log('menuRows:', menuRows);
    const listSections = getSectionWith('Seleccione de a 1 opción', menuRows)
    const hasAlreadyProductsInCart = shoppingCart?.products?.length > 0;
    let bodyContent = '  ';
    const totalItemsAmount = getTotalAmount(shoppingCart.products);

    if (hasAlreadyProductsInCart) {
        listSections.rows.unshift({ title: '0 - Borrar carrito', description: 'Empezar de vuelta la compra si seleccionaste mal algun producto' })
        
        bodyContent = `${shoppingCart.products.map((product: any, i: number) => (`- ${product.name} $${product.price}. *Cantidad:* ${product.quantity}\n`)).join('')}\n*Total a Pagar: $${(totalItemsAmount).toFixed(2)}*`;
    }
    
      resData.replyMessage = getListButtons(
        bodyContent,
        buttonText,
        listSections,
        title,
    '');

    resData.trigger = trigger;

    return resData;
};

export const getDeliveryMethodsButtons = (resData: any, deliveryMethods: any, trigger: TriggerSteps, title: string) => {
    const menuRows = getDeliveryRowsFrom(deliveryMethods);
    const listSections = getSectionWith('Selecciona envío/pickup', menuRows)

    resData.replyMessage = getListButtons(
        'Si ya tiene todo lo que necesita, presione el siguiente botón para ver si va a buscar su envío o quiere enviarlo a una dirección:',
        'Seleccionar envío/pickup',
        listSections,
        title,
    '');
    
    resData.trigger = trigger;
    return resData;
};

export const getInputDeliveryAddress = (resData: any, trigger: TriggerSteps, title: string) => {
    resData.replyMessage = getDeliveryAddress();
    resData.trigger = trigger;

    return resData;
};
  
export const getPaymentButtons = (resData: any, paymentMethods: any, trigger: TriggerSteps) => {
    const buttonsBodies = getPaymentRowsFrom(paymentMethods);

    resData.replyMessage = getButtons(
        'Por favor seleccione su forma de pago:',
        buttonsBodies,
        'Método de pago',
        '',
    );
    resData.trigger = trigger;
    return resData;
};
  
export const getOrderConfirmationButtons = (resData: any, shoppingCart: any, trigger: TriggerSteps, userName: string) => {
    const buttonsBodies = getConfirmationTextBodiesFrom();

    const ccString = `Recargo por tarjeta: $${(shoppingCart.ccCharge).toFixed(2)}`;
    const deliveryFeeString = `Recargo por envío: $${(shoppingCart.deliveryFee).toFixed(2)}`;
    const total = shoppingCart.ccCharge + shoppingCart.deliveryFee + shoppingCart.total;
    resData.replyMessage = getButtons(
        `*Comprador:* ${userName}
*Método de pago:* ${shoppingCart.payment_method_name}
*Método de envío:* ${shoppingCart.delivery_method_name}
*Dirección:* ${shoppingCart.delivery_address}

*Su carrito:*
${shoppingCart.products.map((product: any, i: number) => (`- ${product.name} $${product.price}. *Cantidad:* ${product.quantity}\n`)).join('')}
Subtotal productos: $${(shoppingCart.sub_total).toFixed(2)}${shoppingCart.ccCharge > 0 ? `\n${ccString}` : ''}${shoppingCart.deliveryFee > 0 ? `\n${deliveryFeeString}` : ''}
*Total a Pagar: $${(shoppingCart.total).toFixed(2)}*
`,
        buttonsBodies,
        '*Por favor verifique que su orden sea correcta.*',
        '',
    );
    resData.trigger = trigger;
    return resData;
};

const getProductRowsFrom = (items: any) => items.map((item: any, idx: number) => {
    return {
        title: idx + 1 + ' - ' + item.name + ' $' + item.price,
        description: item.description,
        id: item.id
    }
});

export const getDeliverySchedule = (details: string, intLocale: string) => {
    if (!details) return '';
    const word = intLocale === 'en' ? 'Time: ' : 'Horario: ';

    const index = details.indexOf(word);   // 8
    const length = word.length;			// 7

    return details.slice(index + length);
}
  
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


export const calculateCCCharge = (paymentOptionSelected: { name : string }, totalAmount: number) => {

    if (    paymentOptionSelected?.name?.toLowerCase().includes('tarjeta') || paymentOptionSelected?.name?.toLowerCase().includes('card')) {
        const ccCharge = paymentOptionSelected?.name?.replace(/\D/g, '');
        return totalAmount * (Number(ccCharge) / 100);
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