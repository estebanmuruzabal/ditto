"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readInboxContent = exports.sendClientConfirmationMail = exports.sendSellerConfirmationMail = exports.sendCompanyConfirmationMail = exports.sendOtp = void 0;
const axios_1 = __importDefault(require("axios"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const constant_1 = require("./constant");
const fromNumber = process.env.OTP_FROM_NUMBER;
const apiToken = process.env.OTP_API_TOKEN;
// const path = require('path');
// const {google} = require('googleapis');
// const {authenticate} = require('@google-cloud/local-auth');
const sendOtp = (sendToNumber, otpCode) => {
    const postData = {
        from: fromNumber,
        to: [sendToNumber],
        body: `Verification code: ${otpCode}`,
    };
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
        },
    };
    return axios_1.default.post("https://sms.api.sinch.com/xms/v1/240c4a432e32458fa8312a71ffddbb52/batches", postData, axiosConfig);
};
exports.sendOtp = sendOtp;
// export const readMail = async () => {
//   try {
//     const connection = await imaps.connect(READ_MAIL_CONFIG);
//     console.log('CONNECTION SUCCESSFUL', new Date().toString());
//     const box = await connection.openBox('INBOX');
//     const searchCriteria = ['UNSEEN'];
//     const fetchOptions = {
//       bodies: ['HEADER', 'TEXT'],
//       markSeen: false,
//     };
//     const results = await connection.search(searchCriteria, fetchOptions);
//     results.forEach((res: any) => {
//       const text = res.parts.filter((part: any) => {
//         return part.which === 'TEXT';
//       });
//       let emailHTML = text[0].body;
//       let emailText = convert(emailHTML);
//       console.log(emailText);
//     });
//     connection.end();
//   } catch (error) {
//     console.log(error);
//   }
// };
const sendCompanyConfirmationMail = (email, customer, input, deliveryMethod, paymentMethod, lenguageLocale) => {
    var _a, _b, _c, _d;
    const transporter = nodemailer_1.default.createTransport({
        host: "live.smtp.mailtrap.io",
        port: 587,
        auth: {
            user: "api",
            pass: "fa6003645f3677f052161a6140ee5df3"
        }
    });
    let template;
    let emailTitle;
    const englishConfirmationTemplate = `
        <div>Customer name: ${customer.name}</div><br>
        <div>Date: ${new Date().toLocaleString('en-US', { timeZone: constant_1.timeZone })}</div>
        <div>Contact Phone Number:${((_a = customer.phones) === null || _a === void 0 ? void 0 : _a.length) > 0 ? (_b = customer === null || customer === void 0 ? void 0 : customer.phones[0]) === null || _b === void 0 ? void 0 : _b.number : ''}</div>
        <div>Delivery/pickup method: ${deliveryMethod}</div>
        <div>Address of delivery/pickup: ${input === null || input === void 0 ? void 0 : input.delivery_address}</div>
        <div>Date of delivery/pickup: ${input.delivery_date}</div>
        <div>Payment Method: ${paymentMethod}</div>
        <div>Purchased products</div>
        ${input.products.map((product) => (`<div>${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}</div>`))}
        <div>Total Amount $${input.total}</div>
    `;
    const spanishConfirmationTemplate = `
        <div>Nombre cliente: ${customer.name}</div><br> 
        <div>Fecha: ${new Date().toLocaleString('en-US', { timeZone: constant_1.timeZone })}</div>
        <div>Telefono:${((_c = customer.phones) === null || _c === void 0 ? void 0 : _c.length) > 0 ? (_d = customer === null || customer === void 0 ? void 0 : customer.phones[0]) === null || _d === void 0 ? void 0 : _d.number : ''}</div>
        <div>Metodo de envio: ${deliveryMethod}</div>
        <div>Direccion de envio/pickup: ${input === null || input === void 0 ? void 0 : input.delivery_address}</div>
        <div>Fecha de envio/pickup: ${input.delivery_date}</div>
        <div>Metodo de pago: ${paymentMethod}</div>
        <div>Productos comprados</div>
        ${input.products.map((product) => (`<div>${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}</div>`))}
        <div>Monto total ${input.total}</div>
    `;
    const spanishTitle = 'Confirmación de compra';
    const englishTitle = 'Purchase Confirmation';
    switch (lenguageLocale) {
        case constant_1.Locales.ES:
            {
                template = spanishConfirmationTemplate;
                emailTitle = spanishTitle;
            }
            break;
        case constant_1.Locales.EN:
            {
                template = englishConfirmationTemplate;
                emailTitle = englishTitle;
            }
            break;
        default:
            {
                console.log('sendCompanyConfirmationMail. no locale found at sendind confirmation email');
            }
            break;
    }
    return transporter.sendMail({
        from: 'mailtrap@dittofarm.com',
        to: email,
        subject: emailTitle,
        text: template,
        html: template
    });
};
exports.sendCompanyConfirmationMail = sendCompanyConfirmationMail;
const sendSellerConfirmationMail = (email, customer, input, deliveryMethod, paymentMethod, lenguageLocale) => {
    var _a, _b;
    const transporter = nodemailer_1.default.createTransport({
        host: "live.smtp.mailtrap.io",
        port: 587,
        auth: {
            user: "api",
            pass: "fa6003645f3677f052161a6140ee5df3"
        }
    });
    let template;
    let emailTitle;
    const englishConfirmationTemplate = `
        <div>Customer name: ${customer.name}</div><br>
        <div>Date: ${new Date().toLocaleString('en-US', { timeZone: constant_1.timeZone })}</div>
        <div>Delivery/pickup method: ${deliveryMethod}</div>
        <div>Address of delivery/pickup: ${input === null || input === void 0 ? void 0 : input.delivery_address}</div>
        <div>Date of delivery/pickup: ${input.delivery_date}</div>
        <div>Payment Method: ${paymentMethod}</div>
        <div>Purchased products</div>
        ${input.products.map((product) => (`<div>${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}</div>`))}
        <div>Total Amount $${input.total}</div>
    `;
    const spanishConfirmationTemplate = `
        <div>Nombre cliente: ${customer.name}</div><br> 
        <div>Fecha: ${new Date().toLocaleString('en-US', { timeZone: constant_1.timeZone })}</div>
        <div>Telefono:${((_a = customer.phones) === null || _a === void 0 ? void 0 : _a.length) > 0 ? (_b = customer === null || customer === void 0 ? void 0 : customer.phones[0]) === null || _b === void 0 ? void 0 : _b.number : ''}</div>
        <div>Metodo de envio: ${deliveryMethod}</div>
        <div>Direccion de envio/pickup: ${input === null || input === void 0 ? void 0 : input.delivery_address}</div>
        <div>Fecha de envio/pickup: ${input.delivery_date}</div>
        <div>Metodo de pago: ${paymentMethod}</div>
        <div>Productos comprados</div>
        ${input.products.map((product) => (`<div>${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}</div>`))}
        <div>Monto total ${input.total}</div>
    `;
    const spanishTitle = 'Confirmación de compra';
    const englishTitle = 'Purchase Confirmation';
    switch (lenguageLocale) {
        case constant_1.Locales.ES:
            {
                template = spanishConfirmationTemplate;
                emailTitle = spanishTitle;
            }
            break;
        case constant_1.Locales.EN:
            {
                template = englishConfirmationTemplate;
                emailTitle = englishTitle;
            }
            break;
        default:
            {
                console.log('sendCompanyConfirmationMail. no locale found at sendind confirmation email');
            }
            break;
    }
    return transporter.sendMail({
        from: 'mailtrap@dittofarm.com',
        to: email,
        subject: emailTitle,
        text: template,
        html: template
    });
};
exports.sendSellerConfirmationMail = sendSellerConfirmationMail;
const sendClientConfirmationMail = (email, customer, input, deliveryMethod, paymentMethod, lenguageLocale) => {
    var _a, _b, _c, _d;
    const transporter = nodemailer_1.default.createTransport({
        host: "live.smtp.mailtrap.io",
        port: 587,
        auth: {
            user: "api",
            pass: "fa6003645f3677f052161a6140ee5df3"
        }
    });
    let template;
    let emailTitle;
    const englishConfirmationTemplate = `
        <div>Thank you ${customer.name}. Bellow you can check your order details.</div><br>
        <div>Date: ${new Date().toLocaleString('en-US', { timeZone: constant_1.timeZone })}</div>
        <div>Contact Phone Number:${((_a = customer.phones) === null || _a === void 0 ? void 0 : _a.length) > 0 ? (_b = customer === null || customer === void 0 ? void 0 : customer.phones[0]) === null || _b === void 0 ? void 0 : _b.number : ''}</div>
        <div>Delivery/pickup method: ${deliveryMethod}</div>
        <div>Address of delivery/pickup: ${input === null || input === void 0 ? void 0 : input.delivery_address}</div>
        <div>Date of delivery/pickup: ${input.delivery_date}</div>
        <div>Payment Method: ${paymentMethod}</div>
        <div>Purchased products</div>
        ${input.products.map((product) => (`<div>${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}</div>`))}
        <div>Total Amount $${input.total}</div>
    `;
    const spanishConfirmationTemplate = `
        <div>Muchas gracias por su pedido ${customer.name}. A continuacion le enviamos los datos de tu compra.</div><br>
        <div>Fecha: ${new Date().toLocaleString('en-US', { timeZone: constant_1.timeZone })}</div>
        <div>Telefono:${((_c = customer.phones) === null || _c === void 0 ? void 0 : _c.length) > 0 ? (_d = customer === null || customer === void 0 ? void 0 : customer.phones[0]) === null || _d === void 0 ? void 0 : _d.number : ''}</div>
        <div>Metodo de envio: ${deliveryMethod}</div>
        <div>Direccion de envio/pickup: ${input === null || input === void 0 ? void 0 : input.delivery_address}</div>
        <div>Fecha de envio/pickup: ${input.delivery_date}</div>
        <div>Metodo de pago: ${paymentMethod}</div>
        <div>Productos comprados</div>
        ${input.products.map((product) => (`<div>${product.quantity + product.recicledQuantity} - ${product.name} - $${product.price}</div>`))}
        <div>Monto total ${input.total}</div>
    `;
    const spanishTitle = 'Confirmación de compra';
    const englishTitle = 'Purchase Confirmation';
    switch (lenguageLocale) {
        case constant_1.Locales.ES:
            {
                template = spanishConfirmationTemplate;
                emailTitle = spanishTitle;
            }
            break;
        case constant_1.Locales.EN:
            {
                template = englishConfirmationTemplate;
                emailTitle = englishTitle;
            }
            break;
        default:
            {
                console.log('no locale found at sendind confirmation email');
            }
            break;
    }
    return transporter.sendMail({
        from: 'mailtrap@dittofarm.com',
        to: email,
        subject: emailTitle,
        text: template,
        html: template
    });
};
exports.sendClientConfirmationMail = sendClientConfirmationMail;
const getAccesToken = () => __awaiter(void 0, void 0, void 0, function* () {
    const client_id = process.env.GMAIL_CLIENT_ID;
    const client_secret = process.env.GMAIL_CLIENT_SECRET;
    // var data = qs.stringify({
    //   client_id: '781050703767-lsf0dfi6fdmbmaamfmbopha59562qrfc.apps.googleusercontent.com',
    //     client_secret: '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',
    //     // grant_type: 'password',
    //     grant_type: "refresh_token",
    //     // username: 'dittofarmresistencia@gmail.com',
    //     // password: 'Dittofarm765',
    //     refresh_token: "1//0gzoM1QlCgYIARAAGBASNwF-Lp0Tom1emMG9eK0hXaTTCNkxFYatcupth-iwHVuf7oRumMVN7DivbMz6Pms",
    // //   refresh_token:
    // //     "1//0gzoM1QlCgYIARAAGBASNwF-Lp0Tom1emMG9eK0hXaTTCNkxFYatcupth-iwHVuf7oRumMVN7DivbMz6Pms",
    // //   grant_type: "refresh_token",
    // });
    // var config = {
    //   method: "post",
    //   url: "https://www.googleapis.com/oauth2/v4/token",
    //   headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     //   'User-Agent': 'Mozilla/5.0 (X11; Linux i686; rv:7.0.1) Gecko/20100101 Firefox/7.0.1',
    //     //     'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    //     //     'Accept-Language': 'en-us,en;q=0.5',
    //     //     'Accept-Encoding': 'gzip, deflate',
    //     //     'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.7',
    //         // 'Connection': 'keep-alive',
    //         // 'Cache-Control': 'max-age=0'
    //   },
    //   data: data,
    // };
    //     let accessToken = "";
    //     // Obtain user credentials to use for the request
    //   const auth = await authenticate({
    //     keyfilePath: path.join(__dirname, '../oauth2.keys.json'),
    //     scopes: 'https://www.googleapis.com/auth/gmail.readonly',
    //   });
    //   google.options({auth});
    // const gmail = google.gmail('v1');
    //   const res = await gmail.users.messages.list({userId: 'me'});
    //   console.log(res.data);
    //   // @ts-ignore
    // await axios(config)
    //   .then(async function (response) {
    //     accessToken = await response.data.access_token;
    //     console.log("Access Token " + accessToken);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // return res.data;
    return;
});
// export const searchGmail = async (searchItem: string, accessToken: string) => {
//     var config1 = {
//       method: "get",
//       url:
//         "https://www.googleapis.com/gmail/v1/users/me/messages?q=" + searchItem,
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${accessToken}`,
//       },
//     };
//     var threadId = "";
//     // @ts-ignore
//     await axios(config1)
//       .then(async function (response) {
//         threadId = await response.data["messages"][0].id;
//         console.log("ThreadId = " + threadId);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//     return threadId;
//   };
// export const readGmailContent = async (messageId: string, accessToken: string) => {
//   var config = {
//     method: "get",
//     url: `https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}`,
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${accessToken}`,
//     },
//   };
//   var data = {};
//   // @ts-ignore
//   await axios(config)
//     .then(async function (response) {
//       data = await response.data;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   return data;
// };
const readInboxContent = (searchText) => __awaiter(void 0, void 0, void 0, function* () {
    const accessToken = yield getAccesToken();
    // const threadId = await searchGmail(searchText, accessToken);
    // const message: any = await readGmailContent(threadId, accessToken);
    // const encodedMessage = await message?.payload["parts"][0].body.data;
    // const decodedStr = Buffer.from(encodedMessage, "base64").toString("ascii");
    // console.log('decodedStr::::::', decodedStr);
    return null;
});
exports.readInboxContent = readInboxContent;
