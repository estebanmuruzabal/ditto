"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const User_1 = require("./User");
const Type_1 = require("./Type");
const Category_1 = require("./Category");
const Product_1 = require("./Product");
const DeliveryMethod_1 = require("./DeliveryMethod");
const Staff_1 = require("./Staff");
const PaymentOption_1 = require("./PaymentOption");
const Orders_1 = require("./Orders");
const Setting_1 = require("./Setting");
const Coupon_1 = require("./Coupon");
const HomeCard_1 = require("./HomeCard");
exports.resolvers = lodash_merge_1.default(User_1.usersResolvers, Type_1.typesResolvers, Category_1.categoriesResolvers, Product_1.productsResolvers, DeliveryMethod_1.deliveryMethodsResolvers, PaymentOption_1.paymentOptionsResolvers, Orders_1.ordersResolvers, Setting_1.settingsResolvers, Coupon_1.couponsResolvers, HomeCard_1.homeCardsResolvers, Staff_1.staffMethodsResolvers);
