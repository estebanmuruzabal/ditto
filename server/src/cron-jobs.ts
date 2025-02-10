import { fetchCustomerAndToken, fetchOfflineDittoBotsUsers } from "./api";
import { sendMessage } from "./controllers/send";
import { PRIMARY_ONCALL_NUMBER, READ_MAIL_CONFIG, timeZone } from "./lib/utils/constant";
import { hasDittoBotUpdatedInLast3Minute } from "./lib/utils/workUtils";
// const cheerio = require('cheerio');
// const Imap = require('imap');
// const { default: puppeteer} = require('puppeteer');
// const simpleParser = require('mailparser').simpleParser;

const nodeCron = require("node-cron");

export const offlineDittoBotsJobEvery5Min = nodeCron.schedule('0 */5 * * * *', async () => {
    // const res: any = await fetchOfflineDittoBotsUsers();
    const res: any = await fetchCustomerAndToken('5493624951926');
    const grower = res?.data?.getCustomer?.user;
    console.log(grower)
    if (!grower) return;
    console.log(1)
    grower.plants?.map(async (plant: any) => {
        console.log(2)
        if (plant.offline_notification === true && !hasDittoBotUpdatedInLast3Minute(plant.timestamp, timeZone)) {
            await sendMessage(grower.phones[0]?.number, `Aviso: tu dittobot ${plant.name} esta apagado`);
            if (grower?.phones[1]?.number) await sendMessage(grower.phones[1]?.number, `Aviso: tu dittobot ${plant.name} esta apagado`);
            await sendMessage(PRIMARY_ONCALL_NUMBER, `Problema: dittobot apagado. User name: ${grower.name}, User id: ${grower.id} plant ID: ${plant.plantId}`);
        }
    })
  
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

  });
  
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
