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
import { lastTrigger, sendMedia, sendMessage, sendMessageButton } from './controllers/send';
import { findResponseMsg } from './controllers/flows';
import { fetchCustomerAndToken, saveUserChatHistory } from './api';
import { TriggerSteps } from './lib/types';
import { INITIAL_DITTO_USERNAME } from './lib/utils/constant';
import { normalizeText } from './lib/utils/shoppingUtils';
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const SESSION_FILE_PATH = './session.json'

export let client: any =  new Client({
        authStrategy: new LocalAuth(),
        puppeteer: { headless: true }
});

// let sessionData: any;

/**
 * Escuchamos cuando entre un mensaje
 */


const sendMsg = (text: string) => ({
    _data: {
        id: {
            fromMe: false,
            remote: '5493624885763@c.us',
            id: '186D67502EFCE99A8B',
            _serialized: 'false_5493624885763@c.us_186D67502EFCE99A8B'
        },
        body: text,
        type: 'chat',
        t: 1670288146,
        notifyName: '5493624885763',
        from: '5493624885763@c.us',
        to: '5493624951926@c.us',
        self: 'in',
        ack: 1,
        isNewMsg: true,
        star: false,
        kicNotified: false,
        recvFresh: true,
        isFromTemplate: false,
        pollInvalidated: false,
        latestEditMsgKey: null,
        latestEditSenderTimestampMs: null,
        broadcast: false,
        mentionedJidList: [],
        isVcardOverMmsDocument: false,
        isForwarded: false,
        hasReaction: false,
        ephemeralOutOfSync: false,
        privacyModeWhenSent: { actualActors: 2, hostStorage: 1, privacyModeTs: 1612483200 },
        productHeaderImageRejected: false,
        lastPlaybackProgress: 0,
        isDynamicReplyButtonsMsg: false,
        isMdHistoryMsg: false,
        stickerSentTs: 0,
        isAvatar: false,
        requiresDirectConnection: false,
        pttForwardedFeaturesEnabled: true,
        isEphemeral: false,
        isStatusV3: false,
        links: []
    },
    mediaKey: undefined,
    id: {
        fromMe: false,
        remote: '5493624885763@c.us',
        id: '186D67502EFCE99A8B',
        _serialized: 'false_5493624885763@c.us_186D67502EFCE99A8B'
    },
    ack: 1,
    hasMedia: false,
    body: text,
    type: 'chat',
    timestamp: 1670288146,
    from: '5493624885763@c.us',
    to: '5493624951926@c.us',
    author: undefined,
    deviceType: 'web',
    isForwarded: false,
    forwardingScore: 0,
    isStatus: false,
    isStarred: false,
    broadcast: false,
    fromMe: false,
    hasQuotedMsg: false,
    duration: undefined,
    location: undefined,
    vCards: [],
    inviteV4: undefined,
    mentionedIds: [],
    orderId: undefined,
    token: undefined,
    isGif: false,
    isEphemeral: false,
    links: []
});


// const listenMessage = async (msg: any) => {
const listenMessage = () => client.on('message', async (msg: any) => {
    const { from, body, hasMedia } = msg;
    const message = body;
    
    if (!isValidNumber(from) || !!message || message === '') return;
    if (from === 'status@broadcast') return;
    const number: string = cleanNumber(from)
    let user, access_token;
    
    // if (number !== '5493624885763') return;
    console.log('recevvinggg: ', body)
    const res: any = await fetchCustomerAndToken(number);

    if (!!(res?.data?.getCustomer.user && res?.data?.getCustomer.access_token)) {
        user = res.data.getCustomer.user;
        access_token = res.data.getCustomer.access_token;
    }

    // nextTrigger means that we use the latest nextTrigger saved in user history chat, that was setted by us, 
    // depending on what client's latest answer.
    // @ts-ignore
    const nextTrigger: TriggerSteps = await lastTrigger(user, message);
    const isChatBlocked = nextTrigger === TriggerSteps.BLOCK_CHAT;

    if (isChatBlocked && !normalizeText(message).includes('menu')) return;

    const userIsRegistered = !!access_token;
    if (userIsRegistered) await saveUserChatHistory(message, number, nextTrigger, access_token)
    const msgResponse = await findResponseMsg(nextTrigger, user, message, number, access_token);
    await sendMessage(client, from, msgResponse.replyMessage, msgResponse.trigger, access_token);
// };
});


const withOutSession = () => {
    client.on('qr', (qr: any) => {
        qrcode.generate(qr, {small: true});
    });

    client.on('ready', () => {
        console.log('Client is ready!');

        listenMessage();
        //  setTimeout(() => {
        //     listenMessage(sendMsg('hola'));
        //  }, 1000);
        
        // setTimeout(() => {
        //     listenMessage(sendMsg('seba muruzabal'));
        //  }, 3000);
        
        // setTimeout(() => {
        //     listenMessage(sendMsg('1'));
        //  }, 6000);
        
        // setTimeout(() => {
        //     listenMessage(sendMsg('1'));
        // }, 9000);
        
        // setTimeout(() => {
        //     listenMessage(sendMsg('1'));
        // }, 12000);
        
        // setTimeout(() => {
        //     listenMessage(sendMsg('11'));
        //  }, 15000);
        
        // setTimeout(() => {
        //     listenMessage(sendMsg('3'));
        // }, 18000);
        
        // setTimeout(() => {
        //     listenMessage(sendMsg('Belgrano 291, porton negro'));
        // }, 21000);
        
        // setTimeout(() => {
        //     listenMessage(sendMsg('2'));
        // }, 24000);
        
        //  setTimeout(() => {
        //     listenMessage(sendMsg('1'));
        //  }, 27000);
        
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

// const withSession = () => {
//     sessionData = require(SESSION_FILE_PATH);

//     client = new Client({
//         session: sessionData
//     })

//     client.on('ready', () => {
//         console.log('Client is ready!');
//     });


//     client.on('message', (message: any) => {
//         const {from, to, body } = message;
//         // console.log('From:', from);
//         // console.log('To:', to);
//         // console.log('Message:', body);
//         // if(message.body === 'ping') {
//         //     message.reply('pong');
//         // }
//     });
    
//     // client.sendMessage('+5493624951926', 'test');
//     client.initialize();
    
//     return client;
// }

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

    server.applyMiddleware({
        app,
        path: '/api',
        bodyParserConfig: {
            limit: '30mb', // Your Limited Here
        },
    });

    const port = process.env.PORT;
    app.listen(7000, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}`)
    });
    console.log(`[app]: http://${hostname}:${process.env.PORT}`);
      
};

mount(express());