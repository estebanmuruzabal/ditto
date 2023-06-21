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
exports.client = void 0;
// env settings
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const database_1 = require("./database");
const graphql_1 = require("./graphql");
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const fs = require('fs');
const DELAY_TIME = 170; //ms
// import { fstat, fstatSync } from 'fs';
const handle_1 = require("./controllers/handle");
const send_1 = require("./controllers/send");
const flows_1 = require("./controllers/flows");
const api_1 = require("./api");
const types_1 = require("./lib/types");
const shoppingUtils_1 = require("./lib/utils/shoppingUtils");
const { Client, LocalAuth, List, Buttons } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const SESSION_FILE_PATH = './session.json';
exports.client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { headless: true }
});
// let sessionData: any;
/**
 * Escuchamos cuando entre un mensaje
 */
// const listenMessage = async (msg: any) => {
const listenMessage = () => exports.client.on('message', (msg) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { from, body, hasMedia } = msg;
    let settingResponse = yield (0, api_1.getSettings)();
    let nextTrigger;
    const message = body;
    // settingResponse = settingResponse?.data?.getSiteSetting?.value;
    // const settingValues = JSON.parse(settingResponse);
    // if (!settingValues?.whatsapp_bot_is_on) return;
    console.log('from: ', from === null || from === void 0 ? void 0 : from.toString());
    console.log('text msg: ', message === null || message === void 0 ? void 0 : message.toString());
    if (!(0, handle_1.isValidNumber)(from) || message.trim === '' || from === 'status@broadcast')
        return;
    const number = (0, handle_1.cleanNumber)(from);
    let user, access_token;
    // ditto num
    // if (number !== '5493624885763') return;
    // if (number !== '5493624276159') return;
    // juan numero
    // if (number !== '5493624309309') return;
    if (number !== '5493624951926')
        return;
    const res = yield (0, api_1.fetchCustomerAndToken)(number);
    if (!!(((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.getCustomer.user) && ((_b = res === null || res === void 0 ? void 0 : res.data) === null || _b === void 0 ? void 0 : _b.getCustomer.access_token))) {
        user = res.data.getCustomer.user;
        access_token = res.data.getCustomer.access_token;
    }
    // nextTrigger means that we use the latest nextTrigger saved in user history chat, that was setted by us, 
    // depending on what client's latest answer.
    if ((0, shoppingUtils_1.isGrower)(user))
        nextTrigger = yield (0, send_1.lastGrowerTrigger)(user, message);
    if ((0, shoppingUtils_1.isUserStaff)(user))
        nextTrigger = yield (0, send_1.lastStaffTrigger)(user, message);
    else
        nextTrigger = yield (0, send_1.lastClientTrigger)(user, message);
    const isChatBlocked = nextTrigger === types_1.TriggerSteps.BLOCK_CHAT;
    if (isChatBlocked && !(0, shoppingUtils_1.normalizeText)(message).includes('menu'))
        return;
    const userIsRegistered = !!access_token;
    if (userIsRegistered)
        yield (0, api_1.saveUserChatHistory)(message, number, nextTrigger, access_token);
    const messages = yield (0, flows_1.findResponseMsg)(nextTrigger, user, message, number, access_token);
    if (!(messages === null || messages === void 0 ? void 0 : messages.length))
        console.log('no messages to send: ', messages);
    messages.map((msj) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, send_1.sendMessage)(exports.client, from, msj.replyMessage, msj.trigger, access_token);
    }));
    // };
}));
const withOutSession = () => {
    exports.client.on('qr', (qr) => {
        qrcode.generate(qr, { small: true });
    });
    exports.client.on('ready', () => __awaiter(void 0, void 0, void 0, function* () {
        console.log('Client is ready!');
        listenMessage();
    }));
    // client.on('authenticated', (session: any) => {
    //     sessionData = session;
    //     fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err: any) => {
    //         if (err) {
    //             console.log(err);
    //         }
    //     });
    // });
    exports.client.initialize();
    return exports.client;
};
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
const mount = (app) => __awaiter(void 0, void 0, void 0, function* () {
    // client = fs.existsSync(SESSION_FILE_PATH) ? withSession() : withOutSession();
    // client = withOutSession();
    const hostname = 'localhost';
    // const hostname = '0.0.0.0';
    // mongodb connection
    const db = yield (0, database_1.connectDatabase)();
    // apollo server
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: graphql_1.typeDefs,
        resolvers: graphql_1.resolvers,
        context: ({ req, res }) => ({ db, req, res }),
    });
    const dir = path_1.default.join(process.cwd(), "images");
    app.use("/images", express_1.default.static(dir));
    // app.use('/', require('./routes/web'))
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    app.use((0, cors_1.default)());
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
        console.log(`Server running at http://${hostname}:${port}`);
    });
    console.log(`[app]: http://${hostname}:${process.env.PORT}`);
});
mount((0, express_1.default)());
