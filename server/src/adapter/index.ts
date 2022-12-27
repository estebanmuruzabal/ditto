import { getAvailableProducts, signUpUser, updateUserShoppingCart, getDeliveryMethods, getPaymentMethods, createOrder, updateUserNameAndEmail, addAddressToUser, getCategories, getProducts } from "../api"
import { cleanNumber } from "../controllers/handle"
import { IDeliveryMethod, IProduct, IUser, TriggerStaffSteps, TriggerSteps } from "../lib/types"
import { AVAILABLE_PRODUCTS_OPT, CHECKOUT_OPTION_SELECTED, HABLAR_CON_UN_REPRESENTANTE_OPT, INITIAL_DITTO_PASSWORD, INITIAL_DITTO_USERNAME, TECNICAS_DE_CULTIVO_OPT } from "../lib/utils/constant"
import { getDeliveryPickUpDate, getCustomerPrimaryNumber, containsValidName, getTotalAmount, calculateCCCharge, calculateDeliveryCharge, isUserInputInvalid, getEmptyShoppingCart, getOrderConfirmationMsgText, getEmptyAddress, getDeliveryOrPickUpDatetime, harcodedFilterOfUnusedCategories } from "../lib/utils/shoppingUtils"
import { mainMenuStaffUser } from "../messages/staffMessages"
import { deliveryOptions, enterValidAddress, enterValidName, getDeliveryAddress, getDeliveryOrPickupOptSelectedAndGetPaymentMethodText, getQuantityOfProduct, hablarConUnRepMsg, invalidNumberInput, invalidProductQuantity, listAvailableProducts, listCategories, mainMenuAuthenticatedUser, paymentMethodSelectedAndOrderConfirmationMsj, purchaseErrorMsg, reListingAvailableProducts, tecnicasDeCultivoInfo, thanksMsg, thanksMsgNoDevelopedFunction, thanksMsgNoPurchase, thereWasAProblemWaitForAssistance, thereWasAProblemWaitForAssistance2, unknownDeliPickUpOptInput, unknownPaymentOptInput, unknownUserInput, welcomeMsgNameRequired } from "../messages/customersMessages"

const { saveMessageJson } = require('./jsonDb')
// const { getDataIa } = require('./diaglogflow')
const  stepsInitial = require('../flow/initial.json')
const  stepsReponse = require('../flow/response.json')

export const getReplyBasedOnStaffMsg = async (triggerStep: string, user: IUser | any, userInput: string, number: string, access_token: string) => new Promise(async (resolve, reject) => {
    let resData = { replyMessage: '', media: null, trigger: '' }
    let availableProducts: any;
    let deliveryOpts: any;
    let userInputNumber: number;
    let productSelected: any;
    let shoppingCart: any;
    const num = cleanNumber(number);

    switch (triggerStep) {
        case TriggerStaffSteps.STAFF_ALL_CATEGORIES:
            resData.replyMessage = mainMenuStaffUser(user?.name);
            resData.trigger = TriggerStaffSteps.ALL_CATEGORIES_ANSWER;
            resolve(resData);
            break;
    }
})

export const getReplyBasedOnTriggerStep = async (triggerStep: string, user: IUser | any, userInput: string, number: string, access_token: string) => new Promise(async (resolve, reject) => {

    let resData = { replyMessage: '', media: null, trigger: '' }
    let availableProducts: any;
    let deliveryOpts: any;
    let userInputNumber: number;
    let productSelected: any;
    let shoppingCart: any;
    let paymentMethodsResponse: any;
    let categories: any;
    let maxOptions: any;
    let categoriesRes: any;
    const num = cleanNumber(number);

    console.log('nextTriggerStep received in Switch:', triggerStep)
    switch (triggerStep) {
        case TriggerSteps.INITIAL_UNAUTHENTICATED_USER:
            const res: any = await signUpUser(INITIAL_DITTO_USERNAME, num, INITIAL_DITTO_PASSWORD);
            const registeredSuccessfully = res?.data?.signUp?.status;
            if (registeredSuccessfully) {
                    resData.replyMessage = welcomeMsgNameRequired();
                    resData.trigger = TriggerSteps.USER_SHOULD_INPUT_HIS_NAME;
                    resolve(resData);
                } else {
                    resData.replyMessage = thereWasAProblemWaitForAssistance();
                    resData.trigger = TriggerSteps.INITIAL_UNAUTHENTICATED_USER_AGAIN;
                    resolve(resData);
                }
            break;

        case TriggerSteps.INITIAL_UNAUTHENTICATED_USER_AGAIN:
        case TriggerSteps.USER_SHOULD_INPUT_HIS_NAME:
            categoriesRes = await getCategories();
            categories = categoriesRes?.data?.categories?.items;
            categories = harcodedFilterOfUnusedCategories(categories);
            if (categories?.length <= 0 || !!!categories) throw new Error('Error 2: no available categories');

            if (containsValidName(userInput) && user?.id) {
                const res: any = await updateUserNameAndEmail(user.id, userInput, '', access_token);
                resData.replyMessage = mainMenuAuthenticatedUser(userInput, categories);
                resData.trigger = TriggerSteps.SELECT_CATEGORY;
                resolve(resData);
            } else {
                resData.replyMessage = enterValidName()
                resData.trigger = TriggerSteps.INITIAL_UNAUTHENTICATED_USER_AGAIN;
                resolve(resData);
            }
            break;
        case TriggerSteps.AUTHENTICATED_USER_ALL_CATEGORIES:
            categoriesRes = await getCategories();
            categories = categoriesRes?.data?.categories?.items;
            categories = harcodedFilterOfUnusedCategories(categories);
            if (categories?.length <= 0 || !!!categories) throw new Error('Error 2: no available categories');

            if (user?.id && user?.name) {
                resData.replyMessage = mainMenuAuthenticatedUser(user?.name, categories);
                resData.trigger = TriggerSteps.SELECT_CATEGORY;
                resolve(resData);
            } else {
                resData.replyMessage = 'error heere: 22020'
                resData.trigger = TriggerSteps.INITIAL_UNAUTHENTICATED_USER_AGAIN;
                resolve(resData);
            }
            break;
        case TriggerSteps.BLOCK_CHAT:
        case TriggerSteps.ALL_CATEGORIES:
            // el usuario esta autenticado y respondio al menu inicial
            userInputNumber = Number(userInput)
            categoriesRes = await getCategories();
            categories = categoriesRes?.data?.categories?.items;
            categories = harcodedFilterOfUnusedCategories(categories);
            if (categories?.length <= 0 || !!!categories) throw new Error('Error 2: no available categories');

            resData.replyMessage = listCategories(categories);
            resData.trigger = TriggerSteps.SELECT_CATEGORY;
            resolve(resData);
            break;

            // switch (userInputNumber) {
            //     case AVAILABLE_PRODUCTS_OPT:
            //         resData.replyMessage = listAvailableProducts(productResponse?.data?.products?.items)
            //         resData.trigger = TriggerSteps.ADD_PRODUCT_TO_CART;
            //         resolve(resData);
            //         break;
            //     case HABLAR_CON_UN_REPRESENTANTE_OPT:
            //         resData.replyMessage = hablarConUnRepMsg()
            //         resData.trigger = TriggerSteps.BLOCK_CHAT;
            //         resolve(resData);
            //         break;
            //     // case TECNICAS_DE_CULTIVO_OPT:
            //     //     resData.replyMessage = tecnicasDeCultivoInfo()
            //     //     resData.trigger = TriggerSteps.ALL_CATEGORIES;
            //     //     resolve(resData);
            //     //     break;
            //     default:
            //         resData.replyMessage = unknownUserInput();
            //         resData.trigger = TriggerSteps.ALL_CATEGORIES;
            //         resolve(resData);
            //         break;
            // }
            break;
            
        case TriggerSteps.SELECT_CATEGORY:
            userInputNumber = Number(userInput);
            shoppingCart = user?.shoppingCart;
            
           // if it doestn have a shopping cart we create an empty one
            shoppingCart = user?.shoppingCart ? user?.shoppingCart : getEmptyShoppingCart(user);
           
            categoriesRes = await getCategories();
            categories = categoriesRes?.data?.categories?.items;
            categories = harcodedFilterOfUnusedCategories(categories);
            maxOptions = categories?.length + 1;

            // +1 because of the got to pay option
            if (isUserInputInvalid(userInputNumber, maxOptions)) {
                resData.trigger = TriggerSteps.SELECT_CATEGORY;
                resData.replyMessage = invalidNumberInput(maxOptions);
                resolve(resData);
                break;
            } 

            const selectedCategory = categories[userInputNumber - 1];

             const talkToARepresentativeOpt = userInputNumber === categories?.length + 1;

            if (talkToARepresentativeOpt) {   
                resData.replyMessage = hablarConUnRepMsg()
                resData.trigger = TriggerSteps.BLOCK_CHAT;
                // do we trigger a msj to admin phone?
                resolve(resData);
                break;
            } 

            if (!selectedCategory) {
                resData.trigger = TriggerSteps.SELECT_CATEGORY;
                resData.replyMessage = invalidNumberInput(categories?.length);
                resolve(resData);
                break;
            } 
            shoppingCart.selectedCategorySlug = selectedCategory.slug;
            await updateUserShoppingCart(shoppingCart);

            availableProducts = await getProducts(shoppingCart.selectedCategorySlug);
            availableProducts = availableProducts?.data?.products?.items;
            
            resData.replyMessage = listAvailableProducts(availableProducts)
            resData.trigger = TriggerSteps.ADD_PRODUCT_TO_CART;
            resolve(resData);
            break;

        case TriggerSteps.ADD_MORE_PRODUCTS_STEP:
        case TriggerSteps.ADD_PRODUCT_TO_CART:
            userInputNumber = Number(userInput);
            shoppingCart = user?.shoppingCart;

            availableProducts = await getProducts(shoppingCart.selectedCategorySlug);
            availableProducts = availableProducts?.data?.products?.items;
            if (availableProducts?.length <= 0 || !!!availableProducts) throw new Error('Error 1: no available products');

            maxOptions = shoppingCart?.products?.length > 0 ? availableProducts?.length + 1 : availableProducts?.length;

            // +1 because of the got to pay option
            if (isUserInputInvalid(userInputNumber, maxOptions)) {
                resData.trigger = TriggerSteps.ADD_PRODUCT_TO_CART;
                resData.replyMessage = invalidNumberInput(maxOptions);
                resolve(resData);
                break;
            } 
            const goToSetDeliveryStepSelected = userInputNumber === availableProducts?.length + 1;
         
            if (goToSetDeliveryStepSelected) {   
                deliveryOpts = await getDeliveryMethods();
                if (deliveryOpts?.data?.deliveryMethods?.items?.length <= 0 || !!!deliveryOpts?.data?.deliveryMethods?.items) { throw new Error('No delivery methods set'); };

                resData.replyMessage = deliveryOptions(deliveryOpts?.data?.deliveryMethods?.items)
                resData.trigger = TriggerSteps.DELIVERY_OR_PICKUP_OPT_SELECTED;
                resolve(resData);
                break;
            } 
            
            productSelected = availableProducts[userInputNumber - 1];

            if (!productSelected) {
                resData.trigger = TriggerSteps.ALL_CATEGORIES;
                resData.replyMessage = invalidNumberInput(availableProducts?.length);
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
                image: productSelected?.images?.length >= 0 ? productSelected?.images[0] : null,
                name: productSelected.name,
            };

            shoppingCart.products.push(productAdded)
            await updateUserShoppingCart(shoppingCart);

            resData.replyMessage = getQuantityOfProduct(productSelected.name, productSelected.product_quantity)
            resData.trigger = TriggerSteps.SELECT_QUANTITY_OF_PRODUCT;
            resolve(resData);
            break;

        case TriggerSteps.SELECT_QUANTITY_OF_PRODUCT:
            userInputNumber = Number(userInput)
            shoppingCart = user?.shoppingCart;
            availableProducts = await getProducts(shoppingCart.selectedCategorySlug);
            availableProducts = availableProducts?.data?.products?.items;

            if (availableProducts?.length <= 0 || !!!availableProducts) throw new Error('Error 3: no available products');

            productSelected = shoppingCart?.products?.length > 0 ? shoppingCart.products[shoppingCart.products.length - 1] : null; 

            if (!productSelected) {
                resData.trigger = TriggerSteps.ALL_CATEGORIES;
                resData.replyMessage = invalidNumberInput(availableProducts?.length);
                resolve(resData);
                break;
            } 

            const product = availableProducts.find(((prod: IProduct) => prod._id === productSelected.id))

            if (!product) { resolve(resData); break; }

            if (isUserInputInvalid(userInputNumber, Number(product.product_quantity))) {
                resData.replyMessage = invalidProductQuantity(product.product_quantity);
                resData.trigger = TriggerSteps.SELECT_QUANTITY_OF_PRODUCT;
                resolve(resData);
                break;
            }

            // actualizamos la cantidad y preguntamos que otro producto quiere agregar
            shoppingCart.products[shoppingCart.products.length - 1].quantity = Number(userInput);
            const updateShoppingCartResponse: any = await updateUserShoppingCart(shoppingCart);

            // one last check, just in case:
            if (updateShoppingCartResponse?.errors?.[0]?.message?.includes("No hay suficiente cantidad de este producto")) {
                resData.replyMessage = invalidProductQuantity(product.product_quantity);
                resData.trigger = TriggerSteps.SELECT_QUANTITY_OF_PRODUCT;
                resolve(resData);
            } else {
                // added success case, we relist the products again
                resData.replyMessage = reListingAvailableProducts(shoppingCart.products, availableProducts)
                resData.trigger = TriggerSteps.ADD_MORE_PRODUCTS_STEP;
                resolve(resData);
            }

            break;

        case TriggerSteps.DELIVERY_OR_PICKUP_OPT_SELECTED:
            userInputNumber = Number(userInput);
            deliveryOpts = await getDeliveryMethods();
            shoppingCart = user?.shoppingCart;
            
            if (deliveryOpts?.data?.deliveryMethods?.items?.length <= 0 || !!!deliveryOpts?.data?.deliveryMethods?.items) { throw new Error('Error1: No delivery methods set'); };

            deliveryOpts = deliveryOpts?.data?.deliveryMethods?.items;
            // el usuario selecciona metodo de envio y si es valido, preguntamos direccion, o 
            if (isUserInputInvalid(userInputNumber, deliveryOpts?.length)) {
                resData.replyMessage = invalidNumberInput(deliveryOpts.length);
                resData.trigger = TriggerSteps.DELIVERY_OR_PICKUP_OPT_SELECTED;
                resolve(resData);
                break;
            }
            
            const delyOptSelected = deliveryOpts[userInputNumber - 1];

            if (delyOptSelected) {
                // encontramos que opcion eligio el usuario y setteamos en el shoppingCart con ese delivery method seleccionado
                shoppingCart.delivery_method_id = delyOptSelected.id;
                // arreglar aca abajo::
                shoppingCart.delivery_date = getDeliveryOrPickUpDatetime(delyOptSelected.details);
                shoppingCart.delivery_method_name = delyOptSelected.name;
                shoppingCart.delivery_address = delyOptSelected.pickUpAddress;

                await updateUserShoppingCart(shoppingCart);
                paymentMethodsResponse = await getPaymentMethods();

                 if (!paymentMethodsResponse?.data?.paymentOptions?.items) {
                    resData.replyMessage = unknownUserInput();
                    resData.trigger = TriggerSteps.ALL_CATEGORIES;
                    resolve(resData);
                }
                resData.replyMessage = delyOptSelected?.isPickUp ? getDeliveryOrPickupOptSelectedAndGetPaymentMethodText(delyOptSelected, paymentMethodsResponse?.data?.paymentOptions.items, shoppingCart.delivery_address) : getDeliveryAddress();
                resData.trigger = delyOptSelected?.isPickUp ? TriggerSteps.SELECT_PAYMENT_METHOD : TriggerSteps.DELIVERY_OPT_SELECTED;
                resolve(resData)
                break;
            }
            resData.replyMessage = unknownDeliPickUpOptInput(deliveryOpts)
            resData.trigger = TriggerSteps.DELIVERY_OR_PICKUP_OPT_SELECTED;
            resolve(resData)
            break;
        
        // CAMBIAR LUEGO A BUSCAR OPTIONS DE FECHAS DE PICKUP
        // caso en que usuario elije envio a domicilio
        case TriggerSteps.DELIVERY_OPT_SELECTED:
            if (userInput?.length < 10) {
                resData.replyMessage = enterValidAddress();
                resData.trigger = TriggerSteps.DELIVERY_OPT_SELECTED;    
                resolve(resData);
                break;
            }
            
            shoppingCart = user?.shoppingCart;
            shoppingCart.delivery_address = userInput;

            await updateUserShoppingCart(shoppingCart);
            const newAddress = getEmptyAddress(user.id, userInput);
            const addressAddResponse = await addAddressToUser(user.id, newAddress.address, newAddress.title, newAddress.location, newAddress.instructions, newAddress.is_primary);

            // now we ask for the payment method
            paymentMethodsResponse = await getPaymentMethods();
            paymentMethodsResponse = paymentMethodsResponse?.data?.paymentOptions?.items;
            deliveryOpts = await getDeliveryMethods();
            deliveryOpts = deliveryOpts?.data?.deliveryMethods?.items;

            if (!paymentMethodsResponse || !deliveryOpts) {
                resData.replyMessage = unknownUserInput();
                resData.trigger = TriggerSteps.ALL_CATEGORIES;
                resolve(resData);
            }

            const deliveryMethodSelected = deliveryOpts.find((deliOpt: IDeliveryMethod) => deliOpt.name === shoppingCart.delivery_method_name);
            resData.replyMessage = getDeliveryOrPickupOptSelectedAndGetPaymentMethodText(deliveryMethodSelected, paymentMethodsResponse, shoppingCart.delivery_address);
            resData.trigger = TriggerSteps.SELECT_PAYMENT_METHOD;
            
            resolve(resData);
            break;

        case TriggerSteps.SELECT_PAYMENT_METHOD:
            userInputNumber = Number(userInput);
            paymentMethodsResponse = await getPaymentMethods();

            if (!paymentMethodsResponse?.data?.paymentOptions?.items) {
                resData.replyMessage = unknownUserInput();
                resData.trigger = TriggerSteps.ALL_CATEGORIES;
                resolve(resData);
            }
            shoppingCart = user?.shoppingCart;
            const paymentMethodsOpts = paymentMethodsResponse?.data?.paymentOptions?.items;
            // el usuario selecciona metodo de envio y si es valido, preguntamos direccion, o 
            if (isUserInputInvalid(userInputNumber, paymentMethodsOpts?.length)) {
                resData.replyMessage = invalidNumberInput(paymentMethodsOpts.length);
                resData.trigger = TriggerSteps.SELECT_PAYMENT_METHOD;
                resolve(resData);
                break;
            }

            const paymentSelected = paymentMethodsOpts[userInputNumber - 1];

            if (paymentSelected) {
                // encuentra que opcion eligio el usuario y setteamos el shoppingCart con ese metodo
                deliveryOpts = await getDeliveryMethods();                
                const deliveryMethodSelected = deliveryOpts?.data?.deliveryMethods?.items?.find((deliOpt: any) => deliOpt.id === shoppingCart.delivery_method_id)

                if (deliveryOpts?.data?.deliveryMethods?.items?.length <= 0 || !deliveryMethodSelected) { throw new Error('No delivery methods set or deliveryMethodSelected'); };
                shoppingCart.payment_method_name = paymentSelected.name;
                shoppingCart.payment_option_type = paymentSelected.type;
                shoppingCart.payment_option_id = paymentSelected.id;
                // now we calculate total
                const totalItemsAmount = getTotalAmount(shoppingCart.products);
                const ccCharge = calculateCCCharge(paymentSelected, totalItemsAmount);
                const deliveryFee = calculateDeliveryCharge(deliveryMethodSelected);

                shoppingCart.discount_amount = 0;
                shoppingCart.sub_total = totalItemsAmount;
                
                shoppingCart.ccCharge = ccCharge;
                shoppingCart.deliveryFee = deliveryFee;
                shoppingCart.total = totalItemsAmount + ccCharge + deliveryFee;
                await updateUserShoppingCart(shoppingCart);

                resData.replyMessage = paymentMethodSelectedAndOrderConfirmationMsj(shoppingCart);
                resData.trigger = TriggerSteps.ORDER_CHECK_CONFIRMATION;
                resolve(resData);
                break;
            }
            resData.replyMessage = unknownPaymentOptInput(paymentMethodsOpts)
            resData.trigger = TriggerSteps.SELECT_PAYMENT_METHOD;
            resolve(resData)
            break;
        case TriggerSteps.ORDER_CHECK_CONFIRMATION:
            userInputNumber = Number(userInput);
            shoppingCart = user?.shoppingCart;
            switch (userInputNumber) {
                case 1:
                    const res: any = await createOrder(shoppingCart);
                    if (res?.data?.createOrder?.customer_id) {
                        resData.replyMessage = getOrderConfirmationMsgText(shoppingCart)
                        resData.trigger = TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
                        await updateUserShoppingCart(shoppingCart);
                        resolve(resData)
                    } else {
                        resData.replyMessage = purchaseErrorMsg()
                        resData.trigger = TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
                        resolve(resData)
                    }
                    break;
                case 2:
                    resData.trigger = TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
                    resData.replyMessage = thanksMsgNoDevelopedFunction();
                    console.log('finish this option case 2 ');
                    resolve(resData)
                    break;
                case 3: 
                    resData.trigger = TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
                    resData.replyMessage = thanksMsgNoDevelopedFunction();
                    console.log('finish this option case 3');
                    resolve(resData)
                    break;
                case 4: 
                    resData.trigger = TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
                    resData.replyMessage = thanksMsgNoDevelopedFunction();
                    console.log('finish this option case 4');
                    resolve(resData)
                    break;
                case 5:
                    resData.trigger = TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
                    resData.replyMessage = thanksMsgNoPurchase();
                    resolve(resData)
                    break;
                default:
                    resData.replyMessage = invalidNumberInput('5');
                    resData.trigger = TriggerSteps.ORDER_CHECK_CONFIRMATION;
                    resolve(resData)
                    break;
            }
            break;
        case TriggerSteps.END_CONVERSATION_AND_RESET_CHAT:
            resData.trigger = TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
            resData.replyMessage = thanksMsgNoPurchase();
            resolve(resData)
            break;
        case TriggerSteps.UNKNOWN_ERROR_STEP: 
            console.log('triggerStep""', triggerStep)
            resData.replyMessage = thereWasAProblemWaitForAssistance()
            resData.trigger = TriggerSteps.ALL_CATEGORIES;
            resolve(resData)
            break;
        default:
            resData.replyMessage = thereWasAProblemWaitForAssistance2()
            resData.trigger = TriggerSteps.ALL_CATEGORIES;
            resolve(resData)
            break;
        } 
})

// export const getIA = (message: string) => new Promise((resolve, reject) => {
//     /**
//      * Si usas dialogflow
//      */
//      if (process.env.BOT_DATABASE === 'dialogflow') {
//         let resData = { replyMessage: '', media: null, trigger: null }
//         getDataIa(message,(dt: any) => {
//             resData = { ...resData, ...dt }
//             resolve(resData)
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