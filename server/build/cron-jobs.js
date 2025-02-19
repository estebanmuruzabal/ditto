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
Object.defineProperty(exports, "__esModule", { value: true });
exports.offlineDittoBotsJobEvery5Min = void 0;
const api_1 = require("./api");
const send_1 = require("./controllers/send");
const constant_1 = require("./lib/utils/constant");
const workUtils_1 = require("./lib/utils/workUtils");
// const cheerio = require('cheerio');
// const Imap = require('imap');
// const { default: puppeteer} = require('puppeteer');
// const simpleParser = require('mailparser').simpleParser;
const nodeCron = require("node-cron");
exports.offlineDittoBotsJobEvery5Min = nodeCron.schedule('0 */5 * * * *', () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    // const res: any = await fetchOfflineDittoBotsUsers();
    const res = yield (0, api_1.fetchCustomerAndToken)('5493624951926');
    const grower = (_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.getCustomer) === null || _b === void 0 ? void 0 : _b.user;
    console.log(grower);
    if (!grower)
        return;
    console.log(1);
    (_c = grower.plants) === null || _c === void 0 ? void 0 : _c.map((plant) => __awaiter(void 0, void 0, void 0, function* () {
        var _d, _e, _f;
        console.log(2);
        if (plant.offline_notification === true && !(0, workUtils_1.hasDittoBotUpdatedInLast3Minute)(plant.timestamp, constant_1.timeZone)) {
            yield (0, send_1.sendMessage)((_d = grower.phones[0]) === null || _d === void 0 ? void 0 : _d.number, `Aviso: tu dittobot ${plant.name} esta apagado`);
            if ((_e = grower === null || grower === void 0 ? void 0 : grower.phones[1]) === null || _e === void 0 ? void 0 : _e.number)
                yield (0, send_1.sendMessage)((_f = grower.phones[1]) === null || _f === void 0 ? void 0 : _f.number, `Aviso: tu dittobot ${plant.name} esta apagado`);
            yield (0, send_1.sendMessage)(constant_1.PRIMARY_ONCALL_NUMBER, `Problema: dittobot apagado. User name: ${grower.name}, User id: ${grower.id} plant ID: ${plant.plantId}`);
        }
    }));
    // if (res?.data?.getOfflineDittoBotsUsers?.length) {
    //   res?.data?.getOfflineDittoBotsUsers.map((grower: any) => {
    //       grower?.plants?.map(async (plant: any) => {
    //           if (plant.offline_notification === true && !hasDittoBotUpdatedInLast3Minute(plant.timestamp, timeZone)) {
    //               await sendMessage(grower.phones[0]?.number, `Aviso: tu dittobot ${plant.name} esta apagado`);
    //               if (grower?.phones[1]?.number) await sendMessage(grower.phones[1]?.number, `Aviso: tu dittobot ${plant.name} esta apagado`);
    //               await sendMessage(PRIMARY_ONCALL_NUMBER, `Problema: dittobot apagado. User name: ${grower.name}, User id: ${grower.id} plant ID: ${plant.id}`);
    //               console.log('Cron job running every minute');
    //           }
    //       })
    //   })
    //   }
}));
const magicLinkSubject = 'Recibiste dinero';
//   export const scrapPaymentsReceivedEvery5Mins = nodeCron.schedule('0 */1 * * * *', async () => {
//     try {
//         // Set up an IMAP client
//         const imap = new Imap(READ_MAIL_CONFIG);
//         imap.once('ready', () => {
//             imap.openBox('INBOX', true, (err: any) => {
//                 if (err) {
//                     console.error('Error opening mailbox', err);
//                     imap.end();
//                     return;
//                 }
//                 // Search for emails with the magic link subject
//                 imap.search([['SUBJECT', magicLinkSubject]], (err: any, results: any) => {
//                     if (err) throw err;
//                     const emailId = results[0]; // Assuming the first result is the correct email
//                     console.log('This is the email address: ' + emailId);
//                     const email = imap.fetch(emailId, { bodies: '' });
//                     email.on('message', (msg: any, seqno: any) => {
//                         msg.on('body', (stream: any) => {
//                             simpleParser(stream, async (err: any, mail: any) => {
//                                 if (err) throw err;
//                                 // Extract and log the email subject
//                                 const emailSubject = mail.text;
//                                 console.log('Email Subject:', emailSubject);
//                                 // Your code to extract and process the email content here
//                                 // Extract and log the email body
//                                 const emailBody = mail.html;
//                                 console.log('Email Body:', emailBody);
//                                 //Use cheerio to extract links 
//                                 const $ =cheerio.load(emailBody);
//                                 const links: any=[];
//                                 $('a').each((index: any, element: any)=>{
//                                     links.push($(element).attr('href'));
//                                 });
//                                 console.log('Extracted Links', links);
//                                 const browser =await puppeteer.launch({headless: false});
//                                 const page = await browser.newPage();
//                                 await page.goto(links[0]);
//                                 console.log('this is the first link'+ links[0]);
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//         imap.connect();
//         // Handle errors and edge cases as needed
//       } catch (error) {
//         console.log(error);
//       }
//   });
