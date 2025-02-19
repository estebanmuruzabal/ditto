"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.READ_MAIL_CONFIG = exports.Locales = exports.INTRODUCE_QUANTITY_OPT_TEXT = exports.TALK_TO_A_REPRESENTATIVE_MODE = exports.INITIAL_USER_USERNAME = exports.BANK_TRANSFER_PAYMENT_OPTION = exports.CC_PAYMENT_OPTION = exports.CASH_PAYMENT_OPTION = exports.CURRENCY = exports.INITIAL_USER_PASSWORD = exports.KEEP_USER_NAME_KEY_WORD = exports.INTRODUCE_NEW_NAME_KEY_WORDS = exports.COMPANY_EMAIL_PASSWORD = exports.COMPANY_DESCRIPTION_TEXT = exports.COMPANY_EMAIL = exports.ZELLE_MAIL = exports.DELIVERY_METHOD_SELECTED = exports.PICKUP_OB_DELIVERY_METHOD = exports.PICKUP_LAJOLLA_DELIVERY_METHOD = exports.CUSTOMER_ADDRESS_DELIVERY_METHOD = exports.PICKUP_GRANJA_DELIVERY_METHOD = exports.PICKUP_GUEMES_DELIVERY_METHOD = exports.BANK_TRANSFER_CBU = exports.BANK_TRANSFER_ALIAS = exports.PRIMARY_ONCALL_NUMBER = exports.timeZone = exports.CHECKOUT_OPTION_SELECTED = exports.TECNICAS_DE_CULTIVO_OPT = exports.HABLAR_CON_UN_REPRESENTANTE_OPT = exports.AVAILABLE_PRODUCTS_OPT = exports.DELETED = exports.EXPIRED = exports.RUNNING = exports.CREATED = void 0;
exports.CREATED = 'created';
exports.RUNNING = 'running';
exports.EXPIRED = 'expired';
exports.DELETED = 'deleted';
exports.AVAILABLE_PRODUCTS_OPT = 1;
exports.HABLAR_CON_UN_REPRESENTANTE_OPT = 2;
exports.TECNICAS_DE_CULTIVO_OPT = 3;
exports.CHECKOUT_OPTION_SELECTED = 99;
// ditto bot personal variables (change in front and back):
exports.timeZone = 'America/Argentina/Buenos_Aires';
// COMPANY RELATED CONSTANTS TO FILL OUT
// MUST CHANGE ALL THIS THE GET IT 
// DITTO FARM RCIA VARIABLES
exports.PRIMARY_ONCALL_NUMBER = '5493624951926';
exports.BANK_TRANSFER_ALIAS = 'ditto.rcia';
exports.BANK_TRANSFER_CBU = '0000168300000003376935';
// export const COMPANY_EMAIL = 'dittofarm.rcia@gmail.com';
// export const COMPANY_DESCRIPTION_TEXT = 'Ditto Farm es un proyecto frutihorticola a solo 8km de Rcia. Chaco producimos frutas, verduras y fertilizantes orgánicos con tecnicas de agricultura sustentable y cosechados en el dia!';
// delivery_methods
exports.PICKUP_GUEMES_DELIVERY_METHOD = 'Lo busco en el centro';
exports.PICKUP_GRANJA_DELIVERY_METHOD = 'Lo busco en la granja';
exports.CUSTOMER_ADDRESS_DELIVERY_METHOD = 'Enviámelo a casa';
// DITTO FARM SD VARIABLES
exports.PICKUP_LAJOLLA_DELIVERY_METHOD = 'La Jolla PickUp Point';
exports.PICKUP_OB_DELIVERY_METHOD = 'OB Dog Beach PickUp Point';
exports.DELIVERY_METHOD_SELECTED = 'Delivery (+$20)';
exports.ZELLE_MAIL = 'estebannmuruzabal@gmail.com';
exports.COMPANY_EMAIL = 'estebannmuruzabal@gmail.com';
exports.COMPANY_DESCRIPTION_TEXT = 'Ditto Farm es un proyecto frutihorticola a solo 8km de Rcia. Chaco producimos frutas, verduras y fertilizantes orgánicos con tecnicas de agricultura sustentable y cosechados en el dia!';
exports.COMPANY_EMAIL_PASSWORD = 'xjqq clhj tkgc bzxq';
exports.INTRODUCE_NEW_NAME_KEY_WORDS = 'No, cambiar nombre';
exports.KEEP_USER_NAME_KEY_WORD = 'Si';
exports.INITIAL_USER_PASSWORD = '123456';
exports.CURRENCY = '$';
// payment methods
exports.CASH_PAYMENT_OPTION = 'cash';
exports.CC_PAYMENT_OPTION = 'cc';
exports.BANK_TRANSFER_PAYMENT_OPTION = 'bank_transfer';
exports.INITIAL_USER_USERNAME = 'nonamed';
// representative opt
exports.TALK_TO_A_REPRESENTATIVE_MODE = true;
exports.INTRODUCE_QUANTITY_OPT_TEXT = 'Ingresar otra cantidad';
var Locales;
(function (Locales) {
    Locales["ES"] = "es";
    Locales["EN"] = "en";
})(Locales || (exports.Locales = Locales = {}));
// export const READ_MAIL_CONFIG = {
//   imap: {
//     user: COMPANY_EMAIL,
//     password: COMPANY_EMAIL_PASSWORD,
//     host: 'imap.gmail.com',
//     port: 993,
//     authTimeout: 10000,
//     tls: true,
//     tlsOptions: { rejectUnauthorized: false },
//   },
// };
exports.READ_MAIL_CONFIG = {
    user: exports.COMPANY_EMAIL,
    password: exports.COMPANY_EMAIL_PASSWORD,
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    tlsOptions: {
        rejectUnauthorized: false, // For testing, you can disable certificate rejection
    },
    connectTimeout: 100000,
    authTimeout: 30000,
    debug: console.log,
};
