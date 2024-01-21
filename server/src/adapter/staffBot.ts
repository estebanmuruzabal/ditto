import { signUpUser, updateUserShoppingCart, getDeliveryMethods, getPaymentMethods, createOrder, addAddressToUser, getCategories, getProducts, updateProductStock, createQuickOrder } from "../api"
import { cleanNumber } from "../controllers/handle"
import { IUser, TriggerStaffSteps } from "../lib/types"
import { getEmptyShoppingCart, getQuickSaleShoppingCart, getTotalAmount, isUserInputInvalid } from "../lib/utils/shoppingUtils"
import { invalidNumberInput, invalidProductQuantity } from "../messages/customersMessages"
import { getAmountOfProductToSell, getNewStockOfProduct, getStuffMainMenuOptions, getStuffWorkingInfo, listAvailableProductsToSale, listAvailableProductsToUpdate, listAvailableProductsToUpdateAsInvalid, noOptionFound, startWorking, stopWorking } from "../messages/staffMessages"

export const getReplyFromStaffBot = async (triggerStep: string, user: IUser | any, userInput: string, number: string, access_token: string) => new Promise(async (resolve, reject) => {
    let resData = { replyMessage: '', media: null, trigger: '' }
    let availableProducts: any;
    let maxOptions: any;
    let userInputNumber: number;
    let productSelected: any;
    let shoppingCart: any;
    const num = cleanNumber(number);
    const englishUser = true;
    console.log('nextTriggerStep received in Switch Staff:', triggerStep)
    switch (triggerStep) {
        case TriggerStaffSteps.SUCCESS_SALE_AND_MAIN_MENU:
        case TriggerStaffSteps.STAFF_ALL_CATEGORIES:
            resData = getStuffMainMenuOptions(resData, user);
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
                    resData.trigger = TriggerStaffSteps.CHOOSE_PRODUCT_TO_UPDATE_STOCK;
                    resolve(resData);
                    break;
                case TriggerStaffSteps.SEE_STAFF_INFO:
                    resData.trigger = TriggerStaffSteps.STAFF_ALL_CATEGORIES;
                    resData = getStuffWorkingInfo(resData, user);
                    resolve(resData);
                    break;
                case TriggerStaffSteps.SEE_PRODUCTS_TO_QUICK_SALE:
                    availableProducts = await getProducts('verduleria');
                    availableProducts = availableProducts?.data?.products?.items;

                    resData.replyMessage = listAvailableProductsToSale(availableProducts)
                    resData.trigger = TriggerStaffSteps.CHOOSE_PRODUCT_TO_SALE;
                    resolve(resData);
                    break;
                default:
                    resData.trigger = TriggerStaffSteps.STAFF_ALL_CATEGORIES;
                    resData.replyMessage = noOptionFound();
                    resolve(resData);
                    break;
            }
            break;
        case TriggerStaffSteps.CHOOSE_PRODUCT_TO_SALE:
            userInputNumber = Number(userInput);
            availableProducts = await getProducts('verduleria');
            availableProducts = availableProducts?.data?.products?.items;

            shoppingCart = user?.shoppingCart;
            productSelected = availableProducts[userInputNumber - 1];
            
            // agregar opcion volver al menu principal
            maxOptions = availableProducts?.length;

            // +1 because of the got to pay option
            if (isUserInputInvalid(userInputNumber, maxOptions)) {
                resData.trigger = TriggerStaffSteps.CHOOSE_PRODUCT_TO_UPDATE_STOCK;
                resData.replyMessage = invalidNumberInput(maxOptions);
                resolve(resData);
                break;
            } 

            shoppingCart = getQuickSaleShoppingCart(user);

            shoppingCart.products.push({
                product_id: productSelected.id,
                price: productSelected.price,
                sale_price: productSelected.sale_price,
                name: productSelected.name,

            })
            await updateUserShoppingCart(shoppingCart);   

            resData.replyMessage = getAmountOfProductToSell(productSelected.name);
            resData.trigger = TriggerStaffSteps.CHOOSE_AMOUNT_UNITS_TO_SALE;
            resolve(resData);
            break;
        case TriggerStaffSteps.CHOOSE_PRODUCT_TO_UPDATE_STOCK:
            userInputNumber = Number(userInput);
            availableProducts = await getProducts('verduleria');
            availableProducts = availableProducts?.data?.products?.items;

            shoppingCart = user?.shoppingCart;
            productSelected = availableProducts[userInputNumber - 1];
            
            // agregar opcion volver al menu principal
            maxOptions = availableProducts?.length;

            // +1 because of the got to pay option
            if (isUserInputInvalid(userInputNumber, maxOptions)) {
                resData.trigger = TriggerStaffSteps.CHOOSE_PRODUCT_TO_UPDATE_STOCK;
                resData.replyMessage = invalidNumberInput(maxOptions);
                resolve(resData);
                break;
            } 

            shoppingCart = getEmptyShoppingCart(user, shoppingCart.lenguageLocale);

            shoppingCart.products.push({
                product_id: productSelected.id
            })
            await updateUserShoppingCart(shoppingCart);   

            resData.replyMessage = getNewStockOfProduct(productSelected.name);
            resData.trigger = TriggerStaffSteps.INTRODUCE_PRODUCT_NEW_STOCK;
            resolve(resData);
            break;
        case TriggerStaffSteps.CHOOSE_AMOUNT_UNITS_TO_SALE:
            userInputNumber = Number(userInput)
            shoppingCart = user?.shoppingCart;
            availableProducts = await getProducts('verduleria');
            availableProducts = availableProducts?.data?.products?.items;
            const prodSelectedIndex = shoppingCart.products.length - 1;
            if (availableProducts?.length <= 0 || !!!availableProducts) throw new Error('Error 3: no available products');

            const productInShoppingCart = shoppingCart?.products?.length > 0 ? shoppingCart.products[prodSelectedIndex] : null; 

            if (!productInShoppingCart) {
                resData.trigger = TriggerStaffSteps.STAFF_ALL_CATEGORIES;
                resData.replyMessage = invalidNumberInput(availableProducts?.length);
                resolve(resData); break;
            } 

            productSelected = availableProducts.find(((prod: any) => prod.id === productInShoppingCart.product_id))

            if (!productSelected) { console.log('issue jere'); resolve(resData); break; }

            if (isUserInputInvalid(userInputNumber, Number(productSelected.product_quantity))) {
                resData.replyMessage = invalidProductQuantity(productSelected.product_quantity);
                resData.trigger = TriggerStaffSteps.CHOOSE_AMOUNT_UNITS_TO_SALE;
                resolve(resData);
                break;
            }

            // actualizamos la cantidad y preguntamos que otro producto quiere agregar
            shoppingCart.products[prodSelectedIndex].quantity = userInputNumber;
            const updateShoppingCartResponse: any = await updateUserShoppingCart(shoppingCart);

            // one last check, just in case:
            if (updateShoppingCartResponse?.errors?.[0]?.message?.includes("No hay suficiente cantidad de este producto")) {
                resData.replyMessage = invalidProductQuantity(productSelected.product_quantity);
                resData.trigger = TriggerStaffSteps.CHOOSE_AMOUNT_UNITS_TO_SALE;
                resolve(resData);
            } else {
                const totalItemsAmount = getTotalAmount(shoppingCart.products);
                shoppingCart.discount_amount = 0;
                shoppingCart.sub_total = totalItemsAmount;
                shoppingCart.total = totalItemsAmount;
                shoppingCart.payment_status = 'Pagado'
                await updateUserShoppingCart(shoppingCart);
                const res: any = await createQuickOrder(shoppingCart);
                if (res?.data?.createQuickOrder?.customer_id) {
                    resData = getStuffMainMenuOptions(resData, user, true);
                    resData.trigger = TriggerStaffSteps.SUCCESS_SALE_AND_MAIN_MENU;
                    resolve(resData)
                }
            }

            break;
        case TriggerStaffSteps.INTRODUCE_PRODUCT_NEW_STOCK:
            userInputNumber = Number(userInput);
            shoppingCart = user?.shoppingCart;
            availableProducts = await getProducts('verduleria');
            availableProducts = availableProducts?.data?.products?.items;

            const product = availableProducts.find(((prod: any) => prod.id === shoppingCart.products[0]?.product_id))
            product.product_quantity = userInputNumber;

            await updateProductStock(product.id, {
                name: product.name,
                type: {
                  id: product.type.id,
                  name: product.type.name,
                  slug: product.type.slug
                },
                // @ts-ignore
                categories: JSON.stringify(product.categories.map((category: any) => ({
                  id: category.id,
                  name: category.name,
                  slug: category.slug
                }))),
                description: product.description,
                images_data: product.images_data,
                slug: product.slug,
                packagePrice: Number(product.packagePrice),
                images: product.images,
                price: Number(product.price),
                unit: product.unit,
                sale_price: Number(product.sale_price),
                discount_in_percent: Number(product.discount_in_percent),
                product_quantity: userInputNumber,
                is_featured: product.is_featured,
                is_online: product.is_online,
                meta_title: product.meta_title,
                meta_keyword: product.meta_keyword,
                meta_description: product.meta_description,
              });

            resData.replyMessage = 'Actualizado correctamente. Gracias';
            resData.trigger = TriggerStaffSteps.STAFF_ALL_CATEGORIES;
            resolve(resData);
            break;
        // define this oneeee, and go to "23213521"
        // case TriggerStaffSteps.END_CONVERSATION_AND_RESET_CHAT:
        default:
            console.log('defaultedd');
            resolve([resData]);
            break;
    }
})