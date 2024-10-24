
export const CREATED = 'created';
export const RUNNING = 'running';
export const EXPIRED = 'expired';
export const DELETED = 'deleted';
export const AVAILABLE_PRODUCTS_OPT = 1;
export const HABLAR_CON_UN_REPRESENTANTE_OPT = 2;
export const TECNICAS_DE_CULTIVO_OPT = 3;
export const CHECKOUT_OPTION_SELECTED = 99;

// COMPANY RELATED CONSTANTS TO FILL OUT
export const BANK_TRANSFER_ALIAS = 'ditto.farm.rcia';
export const BANK_TRANSFER_CBU = '0000168300000003376935';
export const COMPANY_EMAIL = 'dittofarmresistencia@gmail.com';
export const COMPANY_DESCRIPTION_TEXT = 'Ditto Farm es un proyecto frutihorticola a solo 8km de Rcia. Chaco producimos frutas, verduras y fertilizantes orgánicos con tecnicas de agricultura sustentable y cosechados en el dia!';
export const COMPANY_EMAIL_PASSWORD = 'glbequknuqtduxxc';
export const INITIAL_USER_USERNAME = 'nonamed';
export const INTRODUCE_NEW_NAME_KEY_WORDS = 'No, cambiar nombre';
export const KEEP_USER_NAME_KEY_WORD = 'Si';
export const INITIAL_USER_PASSWORD = 'Initial_ditt0_pa$$word';
export const CURRENCY = '$';
// delivery_methods
export const PICKUP_GUEMES_DELIVERY_METHOD = 'Lo busco en el centro';
export const PICKUP_GRANJA_DELIVERY_METHOD = 'Lo busco en la granja';
export const CUSTOMER_ADDRESS_DELIVERY_METHOD = 'Enviámelo a casa';
// payment methods
export const CASH_PAYMENT_OPTION = 'cash';
export const CC_PAYMENT_OPTION = 'cc';
export const BANK_TRANSFER_PAYMENT_OPTION = 'bank_transfer';

// representative opt
export const TALK_TO_A_REPRESENTATIVE_MODE = true;
export const INTRODUCE_QUANTITY_OPT_TEXT = 'Ingresar otra cantidad';

export const READ_MAIL_CONFIG = {
  imap: {
    user: COMPANY_EMAIL,
    password: COMPANY_EMAIL_PASSWORD,
    host: 'imap.gmail.com',
    port: 993,
    authTimeout: 10000,
    tls: true,
    tlsOptions: { rejectUnauthorized: false },
  },
};