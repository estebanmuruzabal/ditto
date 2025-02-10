
export const CREATED = 'created';
export const RUNNING = 'running';
export const EXPIRED = 'expired';
export const DELETED = 'deleted';
export const AVAILABLE_PRODUCTS_OPT = 1;
export const HABLAR_CON_UN_REPRESENTANTE_OPT = 2;
export const TECNICAS_DE_CULTIVO_OPT = 3;
export const CHECKOUT_OPTION_SELECTED = 99;

// ditto bot personal variables (change in front and back):
export const timeZone = 'America/Argentina/Buenos_Aires';

// COMPANY RELATED CONSTANTS TO FILL OUT
// MUST CHANGE ALL THIS THE GET IT 

// DITTO FARM RCIA VARIABLES
export const PRIMARY_ONCALL_NUMBER = '5493624951926';

export const BANK_TRANSFER_ALIAS = 'ditto.rcia';
export const BANK_TRANSFER_CBU = '0000168300000003376935';

// export const COMPANY_EMAIL = 'dittofarm.rcia@gmail.com';
// export const COMPANY_DESCRIPTION_TEXT = 'Ditto Farm es un proyecto frutihorticola a solo 8km de Rcia. Chaco producimos frutas, verduras y fertilizantes orgánicos con tecnicas de agricultura sustentable y cosechados en el dia!';
// delivery_methods
export const PICKUP_GUEMES_DELIVERY_METHOD = 'Lo busco en el centro';
export const PICKUP_GRANJA_DELIVERY_METHOD = 'Lo busco en la granja';
export const CUSTOMER_ADDRESS_DELIVERY_METHOD = 'Enviámelo a casa';

// DITTO FARM SD VARIABLES
export const PICKUP_LAJOLLA_DELIVERY_METHOD = 'La Jolla PickUp Point'
export const PICKUP_OB_DELIVERY_METHOD = 'OB Dog Beach PickUp Point'
export const DELIVERY_METHOD_SELECTED = 'Delivery (+$20)';

export const ZELLE_MAIL = 'estebannmuruzabal@gmail.com';
export const COMPANY_EMAIL = 'estebannmuruzabal@gmail.com';
export const COMPANY_DESCRIPTION_TEXT = 'Ditto Farm es un proyecto frutihorticola a solo 8km de Rcia. Chaco producimos frutas, verduras y fertilizantes orgánicos con tecnicas de agricultura sustentable y cosechados en el dia!';
export const COMPANY_EMAIL_PASSWORD = 'xjqq clhj tkgc bzxq';
export const INTRODUCE_NEW_NAME_KEY_WORDS = 'No, cambiar nombre';
export const KEEP_USER_NAME_KEY_WORD = 'Si';
export const INITIAL_USER_PASSWORD = '123456';
export const CURRENCY = '$';



// payment methods
export const CASH_PAYMENT_OPTION = 'cash';
export const CC_PAYMENT_OPTION = 'cc';
export const BANK_TRANSFER_PAYMENT_OPTION = 'bank_transfer';
export const INITIAL_USER_USERNAME = 'nonamed';

// representative opt
export const TALK_TO_A_REPRESENTATIVE_MODE = true;
export const INTRODUCE_QUANTITY_OPT_TEXT = 'Ingresar otra cantidad';

export enum Locales {
  ES = 'es',
  EN = 'en',
}

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

export const READ_MAIL_CONFIG = {
  user: COMPANY_EMAIL,
    password: COMPANY_EMAIL_PASSWORD,
  host: 'imap.gmail.com',
  port: 993,
  tls: true,
  tlsOptions: {
      rejectUnauthorized: false, // For testing, you can disable certificate rejection
  },
  connectTimeout: 100000, // 60 seconds 
  authTimeout: 30000,
  debug: console.log,
};