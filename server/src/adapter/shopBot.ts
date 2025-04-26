import { signUpUser, updateUserShoppingCart, getDeliveryMethods, getPaymentMethods, createOrder, addAddressToUser, getCategories, getProducts, updateUserNameEmailAndLenguage } from "../api"
import { cleanNumber } from "../controllers/handle"
import { IDeliveryMethod, IProduct, IUser, TriggerSteps } from "../lib/types"
import { INITIAL_USER_PASSWORD, INITIAL_USER_USERNAME, Locales } from "../lib/utils/constant"
import { getTotalAmount, calculateCCCharge, calculateDeliveryCharge, isUserInputInvalid, getEmptyShoppingCart, getOrderConfirmationMsgText, getEmptyAddress, getDeliveryOrPickUpDatetime, harcodedFilterOfUnusedCategories, getAddQuantityButtons, getCategoriesButtons, getProductsList, getDeliveryMethodsButtons, getPaymentButtons, getInputDeliveryAddress, getOrderConfirmationButtons, confirmNameOrNewNameButtons, normalizeText, containsValidName } from "../lib/utils/shoppingUtils"
import { deliveryOptions, enterValidAddress, enterValidName, getDeliveryAddress, getDeliveryOrPickupOptSelectedAndGetPaymentMethodText, getQuantityOfProduct, hablarConUnRepMsg, invalidNumberInput, invalidProductQuantity, listAvailableProducts, listCategories, mainMenuAuthenticatedUser, mainMenuUnauthenticatedUser, manualInput, noAvailableCategories, noAvailableDeliveryMethods, noAvailableProducts, noProductsAvailableListCategoriesAgain, paymentMethodSelectedAndOrderConfirmationMsj, purchaseErrorMsg, reEnterValidName, reListingAvailableProducts, thanksMsgNoDevelopedFunction, thanksMsgNoPurchase, thereWasAProblemWaitForAssistance, thereWasAProblemWaitForAssistance2, unknownDeliPickUpOptInput, unknownInputDefault, unknownPaymentOptInput, unknownUserInput, welcomeMsgNameRequired } from "../messages/customersMessages"
import { mainMenuUnauthenticatedUser1 } from "../messages/newShopPathMessages"
const lenguageLocale = Locales.ES;

const fetchCategories = async () => {
    let categoriesRes: any = await getCategories();
    categoriesRes = categoriesRes?.data?.categories?.items;
    if (categoriesRes?.length <= 0 || !!!categoriesRes) throw new Error('Error fetchCategories: no available categories');
    return harcodedFilterOfUnusedCategories(categoriesRes);
}

const fetchProducts = async (selectedCategorySlug: string, noLengthCheck?: boolean) => {
    let availableProducts: any = await getProducts(selectedCategorySlug);
    availableProducts = availableProducts?.data?.products?.items;
    if (!noLengthCheck) if (availableProducts?.length <= 0 || !!!availableProducts) throw new Error('Error 1: no available products');
    return availableProducts;
}


export const getReplyFromShopBot = async (triggerStep: string, user: IUser | any, userInput: string, number: string, access_token: string) => new Promise(async (resolve, reject) => {

    let resData = { replyMessage: '', media: null, trigger: '' }
    let products: any;
    let deliveryOpts: any;
    let userInputNumber: number;
    let productSelected: any;
    let shoppingCart: any;
    let paymentMethodsResponse: any;
    let categories: any;
    let maxOptions: any;
    let productInShoppingCart: any;
    const num = cleanNumber(number);

    console.log('step in SHOP BOT Switch:', triggerStep)
    switch (triggerStep) {
        case TriggerSteps.INITIAL_UNAUTHENTICATED_USER:
            // const res: any = await signUpUser(INITIAL_USER_USERNAME, num, INITIAL_USER_PASSWORD);
            // const registeredSuccessfully = res?.data?.signUp?.status;

            // welcomeTextAndCategoriesOpts
            // hereee
            // if (!registeredSuccessfully) {
            //     resData.replyMessage = thereWasAProblemWaitForAssistance();
            //     resData.trigger = TriggerSteps.INITIAL_UNAUTHENTICATED_USER;
            //     resolve(resData);
            // }
        
            categories = await fetchCategories();
            resData.replyMessage = mainMenuUnauthenticatedUser1(categories, number);
            // console.log('res',res)
            resData.trigger = TriggerSteps.SELECT_CATEGORY;
            // resData = getCategoriesButtons(resData, categories);
            resolve(resData);
            break;

        case TriggerSteps.UNBLOCK_CHAT:
        case TriggerSteps.AUTHENTICATED_USER_ALL_CATEGORIES:
            categories = await fetchCategories();

            if (user?.id && user?.name) {
                // resData.replyMessage = user.name !== INITIAL_USER_USERNAME ? mainMenuAuthenticatedUser(user?.name, categories) : mainMenuUnauthenticatedUser(categories);
                // resData.trigger = TriggerSteps.SELECT_CATEGORY;
                // resData = getCategoriesButtons(resData, categories);
                resData.replyMessage = mainMenuUnauthenticatedUser1(categories, number);
                resolve(resData);
            } else {
                resData.replyMessage = thereWasAProblemWaitForAssistance2();
                resData.trigger = TriggerSteps.BLOCK_CHAT;
                resolve(resData);
            }
            break;
        case TriggerSteps.BLOCK_CHAT:
        case TriggerSteps.ALL_CATEGORIES:
            // el usuario esta autenticado y respondio al menu inicial
            userInputNumber = Number(userInput)
            categories = await fetchCategories();

            resData.replyMessage = listCategories(categories);
            resData.trigger = TriggerSteps.SELECT_CATEGORY;
            resolve(resData);
            break;
            
        case TriggerSteps.SELECT_CATEGORY:
            userInputNumber = Number(userInput);
            shoppingCart = user?.shoppingCart;
            
            // if it doestn have a shopping cart we create an empty one
            shoppingCart = user?.shoppingCart ? user?.shoppingCart : getEmptyShoppingCart(user, lenguageLocale);
            categories = await fetchCategories();
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
            const noLengthCheck = true;
            products = await fetchProducts(shoppingCart.selectedCategorySlug, noLengthCheck);

            if (products?.length <= 0 || !!!products) {
                categories = await fetchCategories();
                resData.replyMessage = noProductsAvailableListCategoriesAgain(categories);
                resData.trigger = TriggerSteps.SELECT_CATEGORY;
                // do we trigger a msj to admin phone?
                resolve(resData);
                break;
            }

            resData.replyMessage = listAvailableProducts(products)
            resData.trigger = TriggerSteps.ADD_PRODUCT_TO_CART;
            resolve(resData);
            break;

        case TriggerSteps.ADD_MORE_PRODUCTS_STEP:
        case TriggerSteps.ADD_PRODUCT_TO_CART:
            userInputNumber = Number(userInput);
            shoppingCart = user?.shoppingCart;

            products = await fetchProducts(shoppingCart.selectedCategorySlug);
            
            const goBackToMainMenu = userInputNumber === products?.length + 1;

            if (goBackToMainMenu) {   
                categories = await fetchCategories();
                resData.replyMessage = listCategories(categories);
                resData.trigger = TriggerSteps.SELECT_CATEGORY;
                resolve(resData);
                break;
            } 

            // go to checkout is the option but we first take them to set delivery method step!
            const goToSetDeliveryStepSelected = userInputNumber === products?.length + 2;
            if (goToSetDeliveryStepSelected) {   
                deliveryOpts = await getDeliveryMethods();
                if (deliveryOpts?.data?.deliveryMethods?.items?.length <= 0 || !!!deliveryOpts?.data?.deliveryMethods?.items) { throw new Error('No delivery methods set'); };

                resData.replyMessage = deliveryOptions(deliveryOpts?.data?.deliveryMethods?.items, lenguageLocale)
                resData.trigger = TriggerSteps.DELIVERY_OR_PICKUP_OPT_SELECTED;
                resolve(resData);
                break;
            } 

            maxOptions = shoppingCart?.products?.length > 0 ? products?.length + 1 : products?.length;
            // +1 because of the got to pay option
            if (isUserInputInvalid(userInputNumber, maxOptions)) {
                resData.trigger = TriggerSteps.ADD_PRODUCT_TO_CART;
                resData.replyMessage = invalidNumberInput(maxOptions);
                resolve(resData);
                break;
            } 
            
            productSelected = products[userInputNumber - 1];
            if (!productSelected) {
                resData.trigger = TriggerSteps.ALL_CATEGORIES;
                resData.replyMessage = invalidNumberInput(products?.length);
                resolve(resData);
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

            resData.replyMessage = getQuantityOfProduct(productSelected.name, productSelected.product_quantity)
            resData.trigger = TriggerSteps.SELECT_QUANTITY_OF_PRODUCT;
            resolve(resData);
            break;

        case TriggerSteps.SELECT_QUANTITY_OF_PRODUCT:
            userInputNumber = Number(userInput)
            shoppingCart = user?.shoppingCart;
            products = await fetchProducts(shoppingCart.selectedCategorySlug);

            const prodSelectedIndex = shoppingCart.products.length - 1;

            productInShoppingCart = shoppingCart?.products?.length > 0 ? shoppingCart.products[prodSelectedIndex] : null; 

            if (!productInShoppingCart) {
                resData.trigger = TriggerSteps.ALL_CATEGORIES;
                resData.replyMessage = invalidNumberInput(products?.length);
                resolve(resData);
                break;
            } 

            const product = products.find(((prod: any) => prod.id === productInShoppingCart.product_id))

            if (!product) { resolve(resData); break; }

            if (isUserInputInvalid(userInputNumber, Number(product.product_quantity))) {
                resData.replyMessage = invalidProductQuantity(product.product_quantity);
                resData.trigger = TriggerSteps.SELECT_QUANTITY_OF_PRODUCT;
                resolve(resData);
                break;
            }

            // actualizamos la cantidad y preguntamos que otro producto quiere agregar
            shoppingCart.products[prodSelectedIndex].quantity = userInputNumber;
            const updateShoppingCartResponse: any = await updateUserShoppingCart(shoppingCart);

            // one last check, just in case:
            if (updateShoppingCartResponse?.errors?.[0]?.message?.includes("No hay suficiente cantidad de este producto")) {
                resData.replyMessage = invalidProductQuantity(product.product_quantity);
                resData.trigger = TriggerSteps.SELECT_QUANTITY_OF_PRODUCT;
                resolve(resData);
            } else {
                // added success case, we relist the products again
                resData.replyMessage = reListingAvailableProducts(shoppingCart.products, products)
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
                shoppingCart.delivery_date = getDeliveryOrPickUpDatetime(delyOptSelected.details, lenguageLocale);
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

            resData.replyMessage = unknownDeliPickUpOptInput(deliveryOpts, lenguageLocale)
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

                resData.replyMessage = user?.name !== INITIAL_USER_USERNAME ? paymentMethodSelectedAndOrderConfirmationMsj(shoppingCart) : enterValidName(lenguageLocale);
                resData.trigger = user?.name !== INITIAL_USER_USERNAME ? TriggerSteps.ORDER_CHECK_CONFIRMATION : TriggerSteps.ASK_USER_NAME_TO_SIGN_UP_USER_BEFORE_PURCHASE;
                resolve(resData);
                break;
            }

            resData.replyMessage = unknownPaymentOptInput(paymentMethodsOpts)
            resData.trigger = TriggerSteps.SELECT_PAYMENT_METHOD;
            resolve(resData)
            break;
        case TriggerSteps.ASK_USER_NAME_TO_SIGN_UP_USER_BEFORE_PURCHASE:
            const userName = userInput;
            if (userName.length < 4 || /\d/.test(userName) || userName.split(' ').length < 2) {
                resData.replyMessage = reEnterValidName();
                resData.trigger = TriggerSteps.ASK_USER_NAME_TO_SIGN_UP_USER_BEFORE_PURCHASE;
                resolve(resData)
            }

            const response: any = await updateUserNameEmailAndLenguage(user.id, userName, user.email, access_token);
            if (!response?.data?.updateUserNameEmailAndLenguage?.status) {

                resData.replyMessage = purchaseErrorMsg();
                resData.trigger = TriggerSteps.ASK_USER_NAME_TO_SIGN_UP_USER_BEFORE_PURCHASE;
                resolve(resData)
                break;
            }

            resData.replyMessage = paymentMethodSelectedAndOrderConfirmationMsj(user?.shoppingCart);
            resData.trigger = TriggerSteps.ORDER_CHECK_CONFIRMATION;
            resolve(resData);
            break;
        case TriggerSteps.ORDER_CHECK_CONFIRMATION:
            userInputNumber = Number(userInput);
            shoppingCart = user?.shoppingCart;

            switch (userInputNumber) {
                case 1:
                    const res: any = await createOrder(shoppingCart);
                    if (res?.data?.createOrder?.customer_id) {
                        // @ts-ignore
                        resData.replyMessage = getOrderConfirmationMsgText(shoppingCart, user?.name, lenguageLocale)
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
    