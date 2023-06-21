"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.READ_MAIL_CONFIG = exports.INTRODUCE_QUANTITY_OPT_TEXT = exports.TALK_TO_A_REPRESENTATIVE_MODE = exports.BANK_TRANSFER_PAYMENT_OPTION = exports.CC_PAYMENT_OPTION = exports.CASH_PAYMENT_OPTION = exports.CUSTOMER_ADDRESS_DELIVERY_METHOD = exports.PICKUP_GRANJA_DELIVERY_METHOD = exports.PICKUP_GUEMES_DELIVERY_METHOD = exports.CURRENCY = exports.INITIAL_USER_PASSWORD = exports.KEEP_USER_NAME_KEY_WORD = exports.INTRODUCE_NEW_NAME_KEY_WORDS = exports.INITIAL_USER_USERNAME = exports.COMPANY_EMAIL_PASSWORD = exports.COMPANY_DESCRIPTION_TEXT = exports.COMPANY_EMAIL = exports.BANK_TRANSFER_CBU = exports.BANK_TRANSFER_ALIAS = exports.CHECKOUT_OPTION_SELECTED = exports.TECNICAS_DE_CULTIVO_OPT = exports.HABLAR_CON_UN_REPRESENTANTE_OPT = exports.AVAILABLE_PRODUCTS_OPT = exports.DELETED = exports.EXPIRED = exports.RUNNING = exports.CREATED = void 0;
exports.CREATED = 'created';
exports.RUNNING = 'running';
exports.EXPIRED = 'expired';
exports.DELETED = 'deleted';
exports.AVAILABLE_PRODUCTS_OPT = 1;
exports.HABLAR_CON_UN_REPRESENTANTE_OPT = 2;
exports.TECNICAS_DE_CULTIVO_OPT = 3;
exports.CHECKOUT_OPTION_SELECTED = 99;
// COMPANY RELATED CONSTANTS TO FILL OUT
exports.BANK_TRANSFER_ALIAS = 'ditto.farm.rcia';
exports.BANK_TRANSFER_CBU = '0000168300000003376935';
exports.COMPANY_EMAIL = 'dittofarmresistencia@gmail.com';
exports.COMPANY_DESCRIPTION_TEXT = 'Ditto Farm es un proyecto frutihorticola a solo 8km de Rcia. Chaco producimos frutas, verduras y fertilizantes orgánicos con tecnicas de agricultura sustentable y cosechados en el dia!';
exports.COMPANY_EMAIL_PASSWORD = 'glbequknuqtduxxc';
exports.INITIAL_USER_USERNAME = 'nonamed';
exports.INTRODUCE_NEW_NAME_KEY_WORDS = 'No, cambiar nombre';
exports.KEEP_USER_NAME_KEY_WORD = 'Si';
exports.INITIAL_USER_PASSWORD = 'Initial_ditt0_pa$$word';
exports.CURRENCY = '$';
// delivery_methods
exports.PICKUP_GUEMES_DELIVERY_METHOD = 'Lo busco en el centro';
exports.PICKUP_GRANJA_DELIVERY_METHOD = 'Lo busco en la granja';
exports.CUSTOMER_ADDRESS_DELIVERY_METHOD = 'Enviámelo a casa';
// payment methods
exports.CASH_PAYMENT_OPTION = 'cash';
exports.CC_PAYMENT_OPTION = 'cc';
exports.BANK_TRANSFER_PAYMENT_OPTION = 'bank_transfer';
// representative opt
exports.TALK_TO_A_REPRESENTATIVE_MODE = true;
exports.INTRODUCE_QUANTITY_OPT_TEXT = 'Ingresar otra cantidad';
exports.READ_MAIL_CONFIG = {
    imap: {
        user: exports.COMPANY_EMAIL,
        password: exports.COMPANY_EMAIL_PASSWORD,
        host: 'imap.gmail.com',
        port: 993,
        authTimeout: 10000,
        tls: true,
        tlsOptions: { rejectUnauthorized: false },
    },
};
