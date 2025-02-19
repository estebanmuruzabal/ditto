"use strict";
// import { signUpUser, updateUserShoppingCart, getDeliveryMethods, getPaymentMethods, createOrder, updateUserNameEmailAndLenguageQuery, addAddressToUser, getCategories, getProducts, updateProductStock } from "../api"
// import { cleanNumber } from "../controllers/handle"
// import { IDeliveryMethod, IProduct, IUser, Plant, TriggerGrowerSteps, TriggerStaffSteps, TriggerSteps } from "../lib/types"
// import { INITIAL_USER_PASSWORD, INITIAL_USER_USERNAME, INTRODUCE_NEW_NAME_KEY_WORDS, INTRODUCE_QUANTITY_OPT_TEXT, KEEP_USER_NAME_KEY_WORD, TECNICAS_DE_CULTIVO_OPT } from "../lib/utils/constant"
// import { getTotalAmount, calculateCCCharge, calculateDeliveryCharge, isUserInputInvalid, getEmptyShoppingCart, getOrderConfirmationMsgText, getEmptyAddress, getDeliveryOrPickUpDatetime, harcodedFilterOfUnusedCategories, getAddQuantityButtons, getCategoriesButtons, getProductsList, getDeliveryMethodsButtons, getPaymentButtons, getInputDeliveryAddress, getOrderConfirmationButtons, confirmNameOrNewNameButtons, normalizeText, containsValidName } from "../lib/utils/shoppingUtils"
// import { deliveryOptions, enterValidAddress, enterValidName, getDeliveryAddress, getDeliveryOrPickupOptSelectedAndGetPaymentMethodText, getQuantityOfProduct, hablarConUnRepMsg, invalidNumberInput, invalidProductQuantity, listAvailableProducts, listCategories, mainMenuAuthenticatedUser, manualInput, noAvailableCategories, noAvailableDeliveryMethods, noAvailableProducts, paymentMethodSelectedAndOrderConfirmationMsj, purchaseErrorMsg, reEnterValidName, reListingAvailableProducts, thanksMsgNoDevelopedFunction, thanksMsgNoPurchase, thereWasAProblemWaitForAssistance, thereWasAProblemWaitForAssistance2, unknownDeliPickUpOptInput, unknownInputDefault, unknownPaymentOptInput, unknownUserInput, welcomeMsgNameRequired } from "../messages/customersMessages"
// import { getGrowerSensorList, getSensorsMenuList } from "../lib/utils/workUtils"
// const { saveMessageJson } = require('./jsonDb')
// // const { getDataIa } = require('./diaglogflow')
// const  stepsInitial = require('../flow/initial.json')
// const  stepsReponse = require('../flow/response.json')
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
