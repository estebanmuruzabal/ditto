// env settings
require("dotenv").config();

import express, {Application} from 'express';
import {ApolloServer} from "apollo-server-express";
import {connectDatabase} from "./database";
import {typeDefs, resolvers} from "./graphql";
import cors from "cors";
import moment from 'moment';
import path from "path";
const fs = require('fs');
const DELAY_TIME = 170; //ms
// import { fstat, fstatSync } from 'fs';
import { cleanNumber, isValidNumber } from './controllers/handle';
import { lastClientTrigger, lastGrowerTrigger, lastStaffTrigger, sendMedia, sendMessage, sendMessageButton } from './controllers/send';
import { findResponseMsg } from './controllers/flows';
import { fetchCustomerAndToken, fetchOfflineDittoBotsUsers, getSettings, saveUserChatHistory } from './api';
import { TriggerSteps } from './lib/types';
import { isGrower, isUserStaff, normalizeText } from './lib/utils/shoppingUtils';
import { offlineDittoBotsJobEvery5Min } from './cron-jobs';

const { Client, LocalAuth, List, Buttons } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const SESSION_FILE_PATH = './session.json'
const wwebVersion = '2.2412.54';

export let client: any =  new Client({
        authStrategy: new LocalAuth(),
        puppeteer: { headless: true, args: ["--no-sandbox"] },
        webVersionCache: {
            type: 'remote',
            remotePath: `https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/${wwebVersion}.html`,
        },
});

let sessionData: any;

/**
 * Escuchamos cuando entre un mensaje
 */

// const listenMessage = async (msg: any) => {
const listenMessage = () => client.on('message', async (msg: any) => {
    const { from, body, hasMedia } = msg;
    let settingResponse: any = await getSettings();
    let nextTrigger: TriggerSteps;
    const message = body;
    settingResponse = settingResponse?.data?.getSiteSetting?.value;

    const settingValues = JSON.parse(settingResponse);
    if (!settingValues?.whatsapp_bot_is_on) return;

    // console.log('from: ', from?.toString()); console.log('text msg: ', message?.toString());

    // if (!isValidNumber(from) || message.trim === '' || from === 'status@broadcast') return;
    if (message.trim === '' || from === 'status@broadcast') return;

    const number: string = cleanNumber(from)
    let user, access_token: any;
    // if (number !== '5493624951926') return;

    const res: any = await fetchCustomerAndToken(number);

    if (!!(res?.data?.getCustomer.user && res?.data?.getCustomer.access_token)) {
        user = res.data.getCustomer.user;
        access_token = res.data.getCustomer.access_token;
    }
    // nextTrigger means that we use the latest nextTrigger saved in user history chat, that was setted by us, 
    // depending on what client's latest answer.

    if (isGrower(user)) nextTrigger = await lastGrowerTrigger(user, message);
    if (isUserStaff(user)) nextTrigger = await lastStaffTrigger(user, message);
    else return;
    // else nextTrigger = await lastClientTrigger(user, message);

    const isChatBlocked = nextTrigger === TriggerSteps.BLOCK_CHAT;

    if (isChatBlocked && !normalizeText(message).includes('menu')) return;

    const userIsRegistered = !!access_token;

    if (userIsRegistered) await saveUserChatHistory(message, number, nextTrigger, access_token)

    const msgResponse = await findResponseMsg(nextTrigger, user, message, number, access_token);


    // if (!messages?.length) console.log('no messages to send: ', messages);
    
    await sendMessage(from, msgResponse.replyMessage, msgResponse.trigger, access_token);

    // messages.map(async (msj: any) => {
    //     await sendMessage(client, from, msj.replyMessage, msj.trigger, access_token);
    // });
    
// };
});


const withOutSession = () => {
    
    client.on('qr', (qr: any) => {
        qrcode.generate(qr, {small: true});
    });

    client.on('ready', async () => {
        console.log('Client is ready!');
        listenMessage();
    });
    
    // client.on('authenticated', (session: any) => {
    //     sessionData = session;
    //     fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err: any) => {
    //         if (err) {
    //             console.log(err);
    //         }
    //     });
    // });
    client.initialize();
    
    return client;
}

const withSession = () => {
    sessionData = require(SESSION_FILE_PATH);

    client = new Client({
        session: sessionData
    })

    client.on('ready', () => {
        console.log('Client is ready!');
    });


    // client.on('message', (message: any) => {
    //     const {from, to, body } = message;
    //     // console.log('From:', from);
    //     // console.log('To:', to);
    //     // console.log('Message:', body);
    //     // if(message.body === 'ping') {
    //     //     message.reply('pong');
    //     // }
    // });
    
    // client.sendMessage('+5493624951926', 'test');
    client.initialize();
    
    return client;
}

const mount = async (app: Application) => {
    // client = fs.existsSync(SESSION_FILE_PATH) ? withSession() : withOutSession();

    client = withOutSession();

    const hostname = 'localhost';
    // const hostname = '0.0.0.0';
    // mongodb connection
    const db = await connectDatabase();
    // apollo server
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({req, res}) => ({db, req, res}),
    });

    const dir = path.join(process.cwd(), "images");
    app.use("/images", express.static(dir));
    // app.use('/', require('./routes/web'))
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    app.use(cors());

    offlineDittoBotsJobEvery5Min.start();
    // scrapPaymentsReceivedEvery5Mins.start();

    server.applyMiddleware({
        app,
        path: '/api',
        bodyParserConfig: {
            limit: '30mb', // Your Limited Here
        },
    });
    // readInboxContent("from:info@mercadopago.com");
    const port = process.env.PORT;
    app.listen(7000, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}`)
    });
    console.log(`[app]: http://${hostname}:${process.env.PORT}`);
      
};

mount(express());