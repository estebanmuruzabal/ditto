// env settings
require("dotenv").config();

import express, {Application} from 'express';
import {ApolloServer} from "apollo-server-express";
import {connectDatabase} from "./database";
import {typeDefs, resolvers} from "./graphql";
import cors from "cors";
import path from "path";
const fs = require('fs');
const DELAY_TIME = 170; //ms
import { fstat, fstatSync } from 'fs';
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const SESSION_FILE_PATH = './session.json'
   
export let client: any = new Client();
let sessionData: any;

const cleanNumber = (number: any) => {
    number = number.replace('@c.us', '');
    number = `${number}@c.us`;
    return number
}
const sendMessage = async (client: any, number = null, text = null, trigger = null) => {
   setTimeout(async () => {
    number = cleanNumber(number)
    const message = text
    client.sendMessage(number, message);
    console.log(`⚡⚡⚡ Enviando mensajes....`);
   },DELAY_TIME)
}

const withOutSession = () => {

    client.on('qr', (qr: any) => {
        qrcode.generate(qr, {small: true});
    });

    client.on('ready', () => {
        console.log('Client is ready!');
    });


    client.on('message', (message: any) => {
        const { from, to, body } = message;
        if (from === 'status@broadcast') {
            return;
        }
        console.log('From:', from);
        console.log('To:', to);
        console.log('Message:', body);
        // if(message.body === 'ping') {
        //     message.reply('pong');
        // }
        // @ts-ignore
        // sendMessage(client, '5493624951926', 'test');
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


    client.on('message', (message: any) => {
        const {from, to, body } = message;
        console.log('From:', from);
        console.log('To:', to);
        console.log('Message:', body);
        // if(message.body === 'ping') {
        //     message.reply('pong');
        // }
    });
    
    client.sendMessage('+5493624951926', 'test');
    client.initialize();
    
    return client;
}

const mount = async (app: Application) => {
    client = fs.existsSync(SESSION_FILE_PATH) ? withSession() : withOutSession();

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


