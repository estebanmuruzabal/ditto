import { signUpUser, updateUserShoppingCart, getDeliveryMethods, getPaymentMethods, createOrder, updateUserNameAndEmail, addAddressToUser, getCategories, getProducts, updateProductStock } from "../api"
import { cleanNumber } from "../controllers/handle"
import { IUser, TriggerStaffSteps } from "../lib/types"
import { getEmptyShoppingCart, isUserInputInvalid } from "../lib/utils/shoppingUtils"
import { getNewStockOfProduct, getStuffMainMenuOptions, getStuffWorkingInfo, listAvailableProductsToUpdate, listAvailableProductsToUpdateAsInvalid, startWorking, stopWorking } from "../messages/staffMessages"

export const getReplyFromStaffBot = async (triggerStep: string, user: IUser | any, userInput: string, number: string, access_token: string) => new Promise(async (resolve, reject) => {
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
            resData = getStuffMainMenuOptions(resData, user);
            console.log('resData:::', resData);
            resolve(resData);
            break;
        
        case TriggerStaffSteps.ALL_CATEGORIES_ANSWER:
            userInputNumber = Number(userInput.match(/[0-9]+/))
            switch (userInputNumber) {
                case TriggerStaffSteps.CHANGE_WORKING_STATE:
                    user.workInfo.isWorking ? await stopWorking(user) : await startWorking(user);
                    resData.replyMessage = user.workInfo.isWorking ? 'Empezo a trabajar exitosamente! Metale pata muchacho/a!' : 'Termino de trabajar! Muchas gracias por su esfuerzo! Descansa y te esperamos mañana!!';
                    resData.trigger = TriggerStaffSteps.STAFF_ALL_CATEGORIES;
                    resolve(resData);
                    break;
                case TriggerStaffSteps.SEE_PRODUCTS_TO_UPDATE_STOCK:
                    availableProducts = await getProducts('verduleria');
                    availableProducts = availableProducts?.data?.products?.items;

                    resData.replyMessage = listAvailableProductsToUpdate(availableProducts)
                    resData.trigger = TriggerStaffSteps.UPDATE_PRODUCT_STOCK;
                    resolve(resData);
                    break;
                case TriggerStaffSteps.SEE_STAFF_INFO:
                    
                    resData = getStuffWorkingInfo(resData, user);
                    resolve(resData);
                    break;
                default:
                    break;
            }
            break;
        case TriggerStaffSteps.UPDATE_PRODUCT_STOCK:
            userInputNumber = Number(userInput);
            availableProducts = await getProducts('verduleria');
            availableProducts = availableProducts?.data?.products?.items;

            shoppingCart = user?.shoppingCart;
            productSelected = availableProducts[userInputNumber - 1];

            shoppingCart = user?.shoppingCart ? user?.shoppingCart : getEmptyShoppingCart(user);

            shoppingCart.products.push({
                product_id: productSelected.id,
                quantity: 0,
                name: productSelected.name,
            })
            await updateUserShoppingCart(shoppingCart);   

            resData.replyMessage = getNewStockOfProduct(productSelected.name)
            resData.trigger = TriggerStaffSteps.INTRODUCE_PRODUCT_STOCK;
            resolve(resData);

        case TriggerStaffSteps.INTRODUCE_PRODUCT_STOCK:
            userInputNumber = Number(userInput);
            availableProducts = await getProducts('verduleria');
            availableProducts = availableProducts?.data?.products?.items;

            if (isUserInputInvalid(userInputNumber, availableProducts?.length)) {
                resData.trigger = TriggerStaffSteps.UPDATE_PRODUCT_STOCK;
                resData.replyMessage = listAvailableProductsToUpdateAsInvalid(availableProducts)
                resolve(resData);
                break;
            } 

            const product = availableProducts.find(((prod: any) => prod.id === shoppingCart.products[0]?.product_id))
            product.quantity = userInputNumber;
            await updateProductStock(product);

            shoppingCart.products = [];
            await updateUserShoppingCart(shoppingCart);   

            resData.replyMessage = 'Actualizado correctamente. Gracias'
            resData.trigger = TriggerStaffSteps.STAFF_ALL_CATEGORIES;
            resolve(resData);
        default:
            console.log('defaultedd');
            resolve([resData]);
            break;
    }
})