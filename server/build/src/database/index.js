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
// @ts-ignore
const dbPassword = process.env.DB_USER_PASSWORD;
if (process.env.APP_ENV == 'production') {
    url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net`;
}
else if (process.env.APP_ENV == 'server') {
    url = `mongodb://${process.env.DB_USER}:${encodeURIComponent(dbPassword)}@${process.env.DB_CLUSTER}:27017/?authMechanism=DEFAULT&authSource=admin&ssl=false`;
}
else if (process.env.APP_ENV == 'local') {
    url = process.env.DB_URL;
}
exports.connectDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("[mongodb]: Starting db init...");
    const client = yield mongodb_1.MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("[mongodb]: Connected successfully to database");
    const db = client.db(dbName);
    return {
        users: db.collection('users'),
        types: db.collection('types'),
        categories: db.collection('categories'),
        products: db.collection('products'),
        delivery_methods: db.collection('delivery_methods'),
        listings: db.collection('listings'),
        payment_options: db.collection('payment_options'),
        orders: db.collection('orders'),
        settings: db.collection('settings'),
        coupons: db.collection('coupons'),
        home_cards: db.collection('home_cards'),
    };
});
