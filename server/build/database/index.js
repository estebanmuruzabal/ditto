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
exports.connectDatabase = void 0;
const mongodb_1 = require("mongodb");
// env settings
require("dotenv").config();
let url;
const dbName = process.env.DB_NAME;
const dbUserName = process.env.DB_USER;
// @ts-ignore
const dbPassword = process.env.DB_USER_PASSWORD;
console.log(process.env.APP_ENV);
if (process.env.APP_ENV == 'production') {
    url = `mongodb+srv://estebanmuruzabal:Dallas765@cluster0.cmdfgmr.mongodb.net/?retryWrites=true&w=majority`;
    // url = `mongodb+srv://${dbUserName}:${dbPassword}@${process.env.DB_CLUSTER}/${dbName}`;
}
else if (process.env.APP_ENV == 'development') {
    url = `mongodb+srv://${dbUserName}:${encodeURIComponent(dbPassword)}@${process.env.DB_CLUSTER}/${dbName}`;
    // url = `mongodb+srv://${dbUserName}:${encodeURIComponent(dbPassword)}@${process.env.DB_CLUSTER}:27017/?authMechanism=DEFAULT&authSource=admin&ssl=false`;
}
else if (process.env.APP_ENV == 'local') {
    // url = `mongodb+srv://${dbUserName}:${encodeURIComponent(dbPassword)}@${process.env.DB_CLUSTER}:27017/?authMechanism=DEFAULT&authSource=admin&ssl=false`;
    url = process.env.DB_URL;
}
const connectDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("[mongodb]: Starting db init on", url);
    const client = yield mongodb_1.MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("[mongodb]: Connected successfully to database");
    const db = client.db(dbName);
    const allCollections = {
        users: db.collection('users'),
        types: db.collection('types'),
        categories: db.collection('categories'),
        products: db.collection('products'),
        delivery_methods: db.collection('delivery_methods'),
        listings: db.collection('listings'),
        payment_options: db.collection('payment_options'),
        orders: db.collection('orders'),
        shops: db.collection('shops'),
        settings: db.collection('settings'),
        coupons: db.collection('coupons'),
        home_cards: db.collection('home_cards'),
        chats: db.collection('chats'),
    };
    return allCollections;
});
exports.connectDatabase = connectDatabase;
