import { signUpUser, updateUserShoppingCart, getDeliveryMethods, getPaymentMethods, createOrder, updateUserNameAndEmail, addAddressToUser, getCategories, getProducts, updatePlantSettings } from "../api"
import { cleanNumber } from "../controllers/handle"
import { IProduct, IUser, Plant, TriggerGrowerSteps, TriggerStaffSteps, TriggerSteps } from "../lib/types"
import { INITIAL_USER_PASSWORD, INITIAL_USER_USERNAME, INTRODUCE_QUANTITY_OPT_TEXT, TECNICAS_DE_CULTIVO_OPT } from "../lib/utils/constant"
import { getTotalAmount, calculateCCCharge, calculateDeliveryCharge, isUserInputInvalid, getEmptyShoppingCart, getOrderConfirmationMsgText, getEmptyAddress, getDeliveryOrPickUpDatetime, harcodedFilterOfUnusedCategories, getAddQuantityButtons, getCategoriesButtons, getProductsList, getDeliveryMethodsButtons, getPaymentButtons, getInputDeliveryAddress, getOrderConfirmationButtons } from "../lib/utils/shoppingUtils"
import { enterValidAddress, hablarConUnRepMsg, invalidNumberInput, invalidProductQuantity, manualInput, purchaseErrorMsg, thanksMsgNoPurchase, thereWasAProblemWaitForAssistance, thereWasAProblemWaitForAssistance2, unknownDeliPickUpOptInput, unknownInputDefault, unknownPaymentOptInput, unknownUserInput } from "../messages/customersMessages"
import { getGrowerSensorList, getStuffMainMenuButtons, startWorking, stopWorking } from "../lib/utils/workUtils"

const { saveMessageJson } = require('./jsonDb')
// const { getDataIa } = require('./diaglogflow')
const  stepsInitial = require('../flow/initial.json')
const  stepsReponse = require('../flow/response.json')

export const getReplyFromGrowerBot = async (triggerStep: string, user: IUser | any, userInput: string, number: string, access_token: string) => new Promise(async (resolve, reject) => {
    let resData = { replyMessage: '', media: null, trigger: '' }
    let availableProducts: any;
    let deliveryOpts: any;
    let userInputNumber: number;
    let productSelected: any;
    let shoppingCart: any;
    const num = cleanNumber(number);

    console.log('nextTriggerStep received in Switch Grower:', triggerStep)
    switch (triggerStep) {
        case TriggerGrowerSteps.SHOW_ALL_PLANTS:
            if (!user?.plants?.length) {
                resData.replyMessage = 'No tenes plantas agregadas';
                resolve(resData); break;
            }

            let resDataArrayOfPlants: any = [];
            user?.plants.map((plant: Plant) => {
                let resDataCopy = Object.assign({}, resData);
                // const resDataReady = getGrowerMainMenuButtons(resDataCopy, user, plant, TriggerGrowerSteps.PLANT_DETAILS, `${plant.name}`, 'Editar configuraciones');
                const resDataReady = getGrowerSensorList(resDataCopy, user, plant, TriggerGrowerSteps.PLANT_DETAILS, `${plant.name}`, 'Acciones');
                resDataArrayOfPlants.push(resDataReady)
            });

            resolve(resDataArrayOfPlants);
            break;
        
        case TriggerGrowerSteps.PLANT_DETAILS:
            const userInputPlantNumber = userInput[userInput.length];
            const userInputPlantSettingNumber = userInput[userInput.length - 1];
    
            if (!user?.plants[userInputPlantNumber]) {
                resData.trigger = TriggerGrowerSteps.SHOW_ALL_PLANTS;
                resData.replyMessage = invalidNumberInput(user?.plants?.length);
                resolve([resData]);
                break;
            }

            switch (userInputPlantSettingNumber) {
                case 'A':
                    resData.trigger = `${TriggerGrowerSteps.CHANGE_MIN_HUMIDITY}_${userInputPlantSettingNumber}`;
                    resData.replyMessage = 'Ingresar temperatura minima';
                    resolve([resData]);
                    break;
                    break;
            
                default:
                    break;
            }

            
            resolve([resData])
            break;
        case `${TriggerGrowerSteps.CHANGE_MIN_HUMIDITY}_1`:
        case `${TriggerGrowerSteps.CHANGE_MIN_HUMIDITY}_2`:
        case `${TriggerGrowerSteps.CHANGE_MIN_HUMIDITY}_3`:
            userInputNumber = Number(userInput.match(/[0-9]+/))
            const plantSettingNumber = triggerStep[triggerStep.length];
            const plant = user.plants[plantSettingNumber];

            if (!plant || userInputNumber < 0 || userInputNumber > 100) {
                resData.trigger = `${TriggerGrowerSteps.CHANGE_MIN_HUMIDITY}_${plantSettingNumber}`;
                resData.replyMessage = invalidNumberInput('100');
                resolve([resData]);
                break;
            }

            await updatePlantSettings(user, plant, 'minWarning', userInputNumber);
            resData.trigger = TriggerGrowerSteps.SHOW_ALL_PLANTS;
            resolve([resData])
            break;
        default:
            
            resolve([resData]);
            break;
    }
})

export const getReplyFromEmployeeBot = async (triggerStep: string, user: IUser | any, userInput: string, number: string, access_token: string) => new Promise(async (resolve, reject) => {
    let resData = { replyMessage: '', media: null, trigger: '' }
    let availableProducts: any;
    let deliveryOpts: any;
    let userInputNumber: number;
    let productSelected: any;
    let shoppingCart: any;
    const num = cleanNumber(number);

    console.log('nextTriggerStep received in Switch Staff:', triggerStep)
    switch (triggerStep) {
        case TriggerStaffSteps.STAFF_ALL_CATEGORIES:
            resData = getStuffMainMenuButtons(resData, user);
            
            resolve([resData]);
            break;
        
        case TriggerStaffSteps.ALL_CATEGORIES_ANSWER:
            userInputNumber = Number(userInput.match(/[0-9]+/))
            resData.trigger = TriggerStaffSteps.STAFF_ALL_CATEGORIES;
            if (user.workInfo.isWorking && userInputNumber === 1) {
                await stopWorking(user);
                resData.replyMessage = 'Termino de trabajar! Muchas gracias por su esfuerzo! Descansa y te esperamos mañana!!';
                resolve([resData])
            } else if (!user.workInfo.isWorking && userInputNumber === 1) {
                resData.replyMessage = 'Empezo a trabajar exitosamente! Metale pata muchacho/a!';
                await startWorking(user);
                resolve([resData])
            }
            break;
        default:
            resData = getStuffMainMenuButtons(resData, user);
            
            resolve([resData]);
            break;
    }
})

export const getReplyFromShopBot = async (triggerStep: string, user: IUser | any, userInput: string, number: string, access_token: string) => new Promise(async (resolve, reject) => {

    let resData: any = { replyMessage: '', media: null, trigger: '' };
    let availableProducts: any;
    let deliveryOpts: any;
    let userInputNumber: number;
    let productSelected: any;
    let shoppingCart: any;
    let paymentMethodsResponse: any;
    let categories: any;
    let maxOptions: any;
    let productInShoppingCart: any;
    let categoriesRes: any;
    const num = cleanNumber(number);

    console.log('nextTriggerStep received in Switch:', triggerStep)
    if (triggerStep === TriggerSteps.ADD_PRODUCT_OR_DELIVERY_PICKUP_OPT) triggerStep = isNaN(Number(userInput[0])) ? TriggerSteps.DELIVERY_OR_PICKUP_OPT_SELECTED : TriggerSteps.ADD_MORE_PRODUCTS_STEP;
    console.log('nextTriggerStep received after in Switch:', triggerStep)
    switch (triggerStep) {

        case TriggerSteps.INITIAL_UNAUTHENTICATED_USER:
        case TriggerSteps.UNBLOCK_CHAT:
        case TriggerSteps.AUTHENTICATED_USER_ALL_CATEGORIES:
            let registeredSuccessfully;

            if (triggerStep === TriggerSteps.INITIAL_UNAUTHENTICATED_USER) {
                const res: any = await signUpUser(INITIAL_USER_USERNAME, num, INITIAL_USER_PASSWORD);
                registeredSuccessfully = res?.data?.signUp?.status;
            }
            
            categoriesRes = await getCategories();
            categories = categoriesRes?.data?.categories?.items;
            categories = harcodedFilterOfUnusedCategories(categories);
            if (categories?.length <= 0 || !!!categories) throw new Error('Error 2: no available categories');

            resData = getCategoriesButtons(resData, categories);
            resolve([resData]);
            break;
        case TriggerSteps.BLOCK_CHAT:
        // case TriggerSteps.ALL_CATEGORIES:
        //     // el usuario esta autenticado y respondio al menu inicial
        //     userInputNumber = Number(userInput.match(/[0-9]+/))
        //     console.log(userInputNumber)
        //     categoriesRes = await getCategories();
        //     categories = categoriesRes?.data?.categories?.items;
        //     categories = harcodedFilterOfUnusedCategories(categories);
        //     if (categories?.length <= 0 || !!!categories) throw new Error('Error 2: no available categories');

        //     resData.replyMessage = listCategories(categories);
        //     resData.trigger = TriggerSteps.SELECT_CATEGORY;
        //     resolve([resData]);
        //     break;
            
        case TriggerSteps.SELECT_CATEGORY:
            userInputNumber = Number(userInput.match(/[0-9]+/))
            console.log(userInputNumber)
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
                resolve([resData]);
                break;
            }

            const selectedCategory = categories[userInputNumber - 1];
            const talkToARepresentativeOpt = userInputNumber === categories?.length + 1;

            if (talkToARepresentativeOpt) {
                resData.replyMessage = hablarConUnRepMsg()
                resData.trigger = TriggerSteps.BLOCK_CHAT;
                // do we trigger a msj to admin phone?
                resolve([resData]);
                break;
            }

            if (!selectedCategory) {
                resData.trigger = TriggerSteps.SELECT_CATEGORY;
                resData.replyMessage = invalidNumberInput(categories?.length);
                resolve([resData]);
                break;
            }
            shoppingCart.selectedCategorySlug = selectedCategory.slug;
            await updateUserShoppingCart(shoppingCart);

            availableProducts = await getProducts(shoppingCart.selectedCategorySlug);
            availableProducts = availableProducts?.data?.products?.items;
            
            // resData.replyMessage = listAvailableProducts(availableProducts)
            
            resData = getProductsList(resData, availableProducts, TriggerSteps.ADD_PRODUCT_TO_CART, 'Agregar productos a tu pedido', 'Ver lista de productos', shoppingCart);
            resolve([resData]);
            break;

        case TriggerSteps.ADD_MORE_PRODUCTS_STEP:
        case TriggerSteps.ADD_PRODUCT_TO_CART:
            userInputNumber = Number(userInput.match(/[0-9]+/))
            shoppingCart = user?.shoppingCart;

            availableProducts = await getProducts(shoppingCart.selectedCategorySlug);
            availableProducts = availableProducts?.data?.products?.items;
            if (availableProducts?.length <= 0 || !!!availableProducts) throw new Error('Error 1: no available products');

            maxOptions = shoppingCart?.products?.length > 0 ? availableProducts?.length + 1 : availableProducts?.length;


            const deleteShoppingCartOpt = userInputNumber === 0;
            if (deleteShoppingCartOpt) {   
                const newShoppingCart: any = getEmptyShoppingCart(user);
                await updateUserShoppingCart(newShoppingCart);
                categoriesRes = await getCategories();
                categories = categoriesRes?.data?.categories?.items;
                categories = harcodedFilterOfUnusedCategories(categories);
                if (categories?.length <= 0 || !!!categories) throw new Error('Error 2: no available categories');

                resData = getCategoriesButtons(resData, categories);
                resolve([resData]);
                break;
            } 
            
            // +1 because of the got to pay option
            if (isUserInputInvalid(userInputNumber, maxOptions)) {
                resData.trigger = TriggerSteps.ADD_PRODUCT_TO_CART;
                resData.replyMessage = invalidNumberInput(maxOptions);
                resolve([resData]);
                break;
            }

            productSelected = availableProducts[userInputNumber - 1];
            if (!productSelected) {
                resData.trigger = TriggerSteps.ALL_CATEGORIES;
                resData.replyMessage = invalidNumberInput(availableProducts?.length);
                resolve([resData]);
                break;
            }

            const productAdded: any = {
                product_id: productSelected.id,
                unit: productSelected.unit,
                quantity: 0,
                recicledQuantity: 0,
                sale_price: productSelected.sale_price,
                price: productSelected.price,
                image: productSelected?.images?.length >= 0 ? productSelected?.images[0] : null,
                name: productSelected.name,
            };

            // still fix case when trying to add a product were it was added in cart with all the possible stock available
            const productIndexFound = shoppingCart?.products.findIndex(((prod: any) => prod.product_id === productSelected.id))

            if (productIndexFound >= 0) shoppingCart.products.splice(productIndexFound, 1);
            shoppingCart.products.push(productAdded)
            await updateUserShoppingCart(shoppingCart);

            // resData.replyMessage = getQuantityOfProduct(productSelected.name, productSelected.product_quantity)
            resData = getAddQuantityButtons(resData, productSelected.product_quantity)
            resolve([resData]);
            break;

        case TriggerSteps.SELECT_QUANTITY_OF_PRODUCT:

            if (userInput.includes(INTRODUCE_QUANTITY_OPT_TEXT)) {
                resData.replyMessage = manualInput();
                resData.trigger = TriggerSteps.SELECT_QUANTITY_OF_PRODUCT;
                resolve([resData]);
                break;
            }
            userInputNumber = Number(userInput.match(/[0-9]+/))
            shoppingCart = user?.shoppingCart;
            availableProducts = await getProducts(shoppingCart.selectedCategorySlug);
            deliveryOpts = await getDeliveryMethods();

            availableProducts = availableProducts?.data?.products?.items;
            deliveryOpts = deliveryOpts?.data?.deliveryMethods?.items;            
            
            if (deliveryOpts?.length <= 0 || !!!deliveryOpts) { throw new Error('Error1: No delivery methods set'); };

            const prodSelectedIndex = shoppingCart.products.length - 1;
            if (availableProducts?.length <= 0 || !!!availableProducts) throw new Error('Error 3: no available products');

            productInShoppingCart = shoppingCart?.products?.length > 0 ? shoppingCart.products[prodSelectedIndex] : null; 

            if (!productInShoppingCart) {
                resData.trigger = TriggerSteps.ALL_CATEGORIES;
                resData.replyMessage = invalidNumberInput(availableProducts?.length);
                resolve([resData]);
                break;
            } 

            const product = availableProducts.find(((prod: any) => prod.id === productInShoppingCart.product_id))

            if (!product) { resolve([resData]); break; }

            if (isUserInputInvalid(userInputNumber, Number(product.product_quantity))) {
                resData.replyMessage = invalidProductQuantity(product.product_quantity);
                resData.trigger = TriggerSteps.SELECT_QUANTITY_OF_PRODUCT;
                resolve([resData]);
                break;
            }

            // actualizamos la cantidad y preguntamos que otro producto quiere agregar
            shoppingCart.products[prodSelectedIndex].quantity = userInputNumber;
            const updateShoppingCartResponse: any = await updateUserShoppingCart(shoppingCart);

            // one last check, just in case:
            if (updateShoppingCartResponse?.errors?.[0]?.message?.includes("No hay suficiente cantidad de este producto")) {
                resData.replyMessage = invalidProductQuantity(product.product_quantity);
                resData.trigger = TriggerSteps.SELECT_QUANTITY_OF_PRODUCT;
            } else {
                // added success case, we relist the products again
                // ACA VER DE DEVOLVER DOS MENSAJES: UNA LISTA PARA AGREGAR MAS PRODUCTOS Y LISTA DEL CARRITO AddArgumentsAsVariables, Y OTRO MENSAJE APARTE CON UN BOTON DE IR A PAGAR
                resData = getProductsList(resData, availableProducts, TriggerSteps.ADD_PRODUCT_OR_DELIVERY_PICKUP_OPT, 'Su carrito:', 'Agregar más productos', shoppingCart);    
                const resData3 = Object.assign({}, resData);
                const resData2 = getDeliveryMethodsButtons(resData3, deliveryOpts, TriggerSteps.ADD_PRODUCT_OR_DELIVERY_PICKUP_OPT, 'Finalizar compra');    

                resolve([resData, resData2]);
            }
            break;

        case TriggerSteps.DELIVERY_OR_PICKUP_OPT_SELECTED:
            deliveryOpts = await getDeliveryMethods();
            shoppingCart = user?.shoppingCart;
            if (deliveryOpts?.data?.deliveryMethods?.items?.length <= 0 || !!!deliveryOpts?.data?.deliveryMethods?.items) { throw new Error('Error1: No delivery methods set'); };
            deliveryOpts = deliveryOpts?.data?.deliveryMethods?.items;

            // userInputNumber = Number(userInput.match(/[0-9]+/))
            const deliOptIndexFound = deliveryOpts.findIndex(((deliOpt: any) => userInput.includes(deliOpt.name)));
            
            // el usuario selecciona metodo de envio y si es valido, preguntamos direccion, o 
            if (isUserInputInvalid(deliOptIndexFound, deliveryOpts?.length)) {
                resData.replyMessage = invalidNumberInput(deliveryOpts.length);
                resData.trigger = TriggerSteps.DELIVERY_OR_PICKUP_OPT_SELECTED;
                resolve([resData]);
                break;
            }
            
            const delyOptSelected = deliveryOpts[deliOptIndexFound];
            if (!delyOptSelected) {
                resData.replyMessage = unknownDeliPickUpOptInput(deliveryOpts)
                resData.trigger = TriggerSteps.DELIVERY_OR_PICKUP_OPT_SELECTED;
                resolve([resData])
                break;
            }
            // encontramos que opcion eligio el usuario y setteamos en el shoppingCart con ese delivery method seleccionado
            shoppingCart.delivery_method_id = delyOptSelected.id;
            // arreglar aca abajo::
            shoppingCart.delivery_date = getDeliveryOrPickUpDatetime(delyOptSelected.details);
            shoppingCart.delivery_method_name = delyOptSelected.name;
            shoppingCart.delivery_address = delyOptSelected.pickUpAddress;

            await updateUserShoppingCart(shoppingCart);
            paymentMethodsResponse = await getPaymentMethods();
            paymentMethodsResponse = paymentMethodsResponse?.data?.paymentOptions?.items;
            if (!paymentMethodsResponse || paymentMethodsResponse?.length < 1) {
                resData.replyMessage = unknownUserInput();
                resData.trigger = TriggerSteps.ALL_CATEGORIES;
                resolve([resData]);
                break;
            }

            resData = delyOptSelected?.isPickUp
                ? getPaymentButtons(resData, paymentMethodsResponse, TriggerSteps.SELECT_PAYMENT_METHOD)
                : getInputDeliveryAddress(resData, TriggerSteps.DELIVERY_OPT_SELECTED, 'Delivery seleccionado');

            const resData3 = Object.assign({}, resData);
            resData3.replyMessage = 'Método seleccionado con éxito!';
        
            delyOptSelected?.isPickUp ? resolve([resData3, resData]) : resolve([resData]);
            break;
        // CAMBIAR LUEGO A BUSCAR OPTIONS DE FECHAS DE PICKUP
        // caso en que usuario elije envio a domicilio
        case TriggerSteps.DELIVERY_OPT_SELECTED:
            if (userInput?.length < 10) {
                resData.replyMessage = enterValidAddress();
                resData.trigger = TriggerSteps.DELIVERY_OPT_SELECTED;    
                resolve([resData]);
                break;
            }
            
            shoppingCart = user?.shoppingCart;
            shoppingCart.delivery_address = userInput;

            await updateUserShoppingCart(shoppingCart);
            const newAddress = getEmptyAddress(user.id, userInput);
            // const addressAddResponse = await addAddressToUser(user.id, newAddress.address, newAddress.title, newAddress.location, newAddress.instructions, newAddress.is_primary);

            // now we ask for the payment method
            paymentMethodsResponse = await getPaymentMethods();
            paymentMethodsResponse = paymentMethodsResponse?.data?.paymentOptions?.items;
            // deliveryOpts = await getDeliveryMethods();
            // deliveryOpts = deliveryOpts?.data?.deliveryMethods?.items;

            if (!paymentMethodsResponse || !deliveryOpts) {
                resData.replyMessage = unknownUserInput();
                resData.trigger = TriggerSteps.ALL_CATEGORIES;
                resolve([resData]);
            }

            // const deliveryMethodSelected = deliveryOpts.find((deliOpt: IDeliveryMethod) => deliOpt.name === shoppingCart.delivery_method_name);
            // resData.replyMessage = getDeliveryOrPickupOptSelectedAndGetPaymentMethodText(deliveryMethodSelected, paymentMethodsResponse, shoppingCart.delivery_address);

            resData = getPaymentButtons(resData, paymentMethodsResponse, TriggerSteps.SELECT_PAYMENT_METHOD)

            const resData4 = Object.assign({}, resData);
            resData4.replyMessage = 'Método seleccionado con éxito!';
        
            resolve([resData4, resData]);
            break;

        case TriggerSteps.SELECT_PAYMENT_METHOD:
            userInputNumber = Number(userInput.match(/[0-9]+/))
            paymentMethodsResponse = await getPaymentMethods();

            if (!paymentMethodsResponse?.data?.paymentOptions?.items) {
                resData.replyMessage = unknownUserInput();
                resData.trigger = TriggerSteps.ALL_CATEGORIES;
                resolve([resData]);
            }
            shoppingCart = user?.shoppingCart;
            const paymentMethodsOpts = paymentMethodsResponse?.data?.paymentOptions?.items;
            // el usuario selecciona metodo de envio y si es valido, preguntamos direccion, o 
            if (isUserInputInvalid(userInputNumber, paymentMethodsOpts?.length)) {
                resData.replyMessage = invalidNumberInput(paymentMethodsOpts.length);
                resData.trigger = TriggerSteps.SELECT_PAYMENT_METHOD;
                resolve([resData]);
                break;
            }

            const paymentSelected = paymentMethodsOpts[userInputNumber - 1];

            if (!paymentSelected) {
                resData.replyMessage = unknownPaymentOptInput(paymentMethodsOpts)
                resData.trigger = TriggerSteps.SELECT_PAYMENT_METHOD;
                resolve([resData])
                break;
            }
            // encuentra que opcion eligio el usuario y setteamos el shoppingCart con ese metodo
            deliveryOpts = await getDeliveryMethods();                
            const deliveryMethodSelected2 = deliveryOpts?.data?.deliveryMethods?.items?.find((deliOpt: any) => deliOpt.id === shoppingCart.delivery_method_id)

            if (deliveryOpts?.data?.deliveryMethods?.items?.length <= 0 || !deliveryMethodSelected2) { throw new Error('No delivery methods set or deliveryMethodSelected2'); };
            shoppingCart.payment_method_name = paymentSelected.name;
            shoppingCart.payment_option_type = paymentSelected.type;
            shoppingCart.payment_option_id = paymentSelected.id;
            // now we calculate total
            const totalItemsAmount = getTotalAmount(shoppingCart.products);
            const ccCharge = calculateCCCharge(paymentSelected, totalItemsAmount);
            const deliveryFee = calculateDeliveryCharge(deliveryMethodSelected2);

            shoppingCart.discount_amount = 0;
            shoppingCart.sub_total = totalItemsAmount;
            
            shoppingCart.ccCharge = ccCharge;
            shoppingCart.deliveryFee = deliveryFee;
            shoppingCart.total = totalItemsAmount + ccCharge + deliveryFee;
            await updateUserShoppingCart(shoppingCart);

            resData = getOrderConfirmationButtons(resData, shoppingCart, TriggerSteps.ORDER_CHECK_CONFIRMATION);
            resolve([resData]);
            break;
        
        case TriggerSteps.ORDER_CHECK_CONFIRMATION:
            userInputNumber = Number(userInput.match(/[0-9]+/))
            shoppingCart = user?.shoppingCart;
            switch (userInputNumber) {
                case 1:
                    const res: any = await createOrder(shoppingCart);
                    if (res?.data?.createOrder?.customer_id) {
                        resData.replyMessage = getOrderConfirmationMsgText(shoppingCart)
                        resData.trigger = TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
                        await updateUserShoppingCart(shoppingCart);
                        resolve([resData])
                    } else {
                        resData.replyMessage = purchaseErrorMsg()
                        resData.trigger = TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
                        resolve([resData])
                    }
                    break;
                case 2:
                    categoriesRes = await getCategories();
                    categories = categoriesRes?.data?.categories?.items;
                    categories = harcodedFilterOfUnusedCategories(categories);
                    if (categories?.length <= 0 || !!!categories) throw new Error('Error 2: no available categories');

                    resData = getCategoriesButtons(resData, categories);
                    resolve([resData])
                    break;
                case 3: 
                    resData.trigger = TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
                    resData.replyMessage = thanksMsgNoPurchase();
                    resolve([resData])
                    break;
                default:
                    resData.replyMessage = unknownInputDefault();
                    resData.trigger = TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
                    resolve([resData])
                    break;
            }
            break;
        case TriggerSteps.END_CONVERSATION_AND_RESET_CHAT:
            resData.trigger = TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART;
            resData.replyMessage = thanksMsgNoPurchase();
            resolve([resData])
            break;
        case TriggerSteps.UNKNOWN_ERROR_STEP: 
            resData.replyMessage = thereWasAProblemWaitForAssistance()
            resData.trigger = TriggerSteps.ALL_CATEGORIES;
            resolve([resData])
            break;
        default:
            resData.replyMessage = thereWasAProblemWaitForAssistance2()
            resData.trigger = TriggerSteps.ALL_CATEGORIES;
            resolve([resData])
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
//             resolve([resData])
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

const productRows = (products: IProduct[]) => products.map((product: any) => {
    return {
        title: product.name,
        description: product.description || '',
        id: product.id
    }
});

const productSections = {
  title: 'Selecciona un producto',
    rows: [
    {
        title: 'Test 4',
        description: 'This is a smaller text field, a description',
        id: 'test-4',
    },
    {
      title: 'Test 4',
      description: 'This is a smaller text field, a description',
      id: 'test-4',
    },{
      title: 'Test 4',
      description: 'This is a smaller text field, a description',
      id: 'test-4',
    },{
      title: 'Test 4',
      description: 'This is a smaller text field, a description',
      id: 'test-4',
    },{
      title: 'Test 4',
      description: 'This is a smaller text field, a description',
      id: 'test-4',
    },{
      title: 'Test 4',
      description: 'This is a smaller text field, a description',
      id: 'test-4',
    },{
      title: 'Test 4',
      description: 'This is a smaller text field, a description',
      id: 'test-4',
    },{
      title: 'Test 4',
      description: 'This is a smaller text field, a description',
      id: 'test-4',
    },{
      title: 'Test 4',
      description: 'This is a smaller text field, a description',
      id: 'test-4',
    },{
      title: 'Test 4',
      description: 'This is a smaller text field, a description',
      id: 'test-4',
    },{
      title: 'Test 4',
      description: 'This is a smaller text field, a description',
      id: 'test-4',
    },{
      title: 'Test 4',
      description: 'This is a smaller text field, a description',
      id: 'test-4',
    },{
      title: 'Test 4',
      description: 'This is a smaller text field, a description',
      id: 'test-4',
    },{
      title: 'Test 4',
      description: 'This is a smaller text field, a description',
      id: 'test-4',
    }
  ],
};
