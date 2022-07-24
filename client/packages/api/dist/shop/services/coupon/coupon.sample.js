"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const coupon_type_1 = __importDefault(require("./coupon.type"));
const class_transformer_1 = require("class-transformer");
const loadCoupons = () => {
    return class_transformer_1.plainToClass(coupon_type_1.default, [
        {
            id: 1,
            title: 'Free Delivery',
            image: 'http://s3.amazonaws.com/redqteam.com/Mahdi Fashion/gift-card-1.png',
            code: 'RAMADAN15',
            discountInPercent: 15,
            number_of_coupon: 20,
            number_of_used_coupon: 10,
            products: [
                {
                    id: '1',
                    url: '',
                },
            ],
            status: 'active',
            expiration_date: new Date(),
            creation_date: new Date(),
        },
        {
            id: 2,
            title: 'Free Delivery',
            image: 'http://s3.amazonaws.com/redqteam.com/Mahdi Fashion/gift-card-2.png',
            code: 'RAMADAN20',
            discountInPercent: 20,
            number_of_coupon: 20,
            number_of_used_coupon: 10,
            products: [
                {
                    id: '1',
                    url: '',
                },
            ],
            status: 'revoked',
            expiration_date: new Date(),
            creation_date: new Date(),
        },
        {
            id: 3,
            title: 'cyber Monday Sale',
            code: 'CYBERMONDAY10',
            image: 'http://s3.amazonaws.com/redqteam.com/Mahdi Fashion/gift-card-1.png',
            discountInPercent: 10,
            number_of_coupon: 20,
            number_of_used_coupon: 10,
            products: [
                {
                    id: '1',
                    url: '',
                },
            ],
            status: 'active',
            expiration_date: new Date(),
            creation_date: new Date(),
        },
        {
            id: 4,
            title: 'Boxing Day Sale',
            code: 'DISCOUNT10',
            image: 'http://s3.amazonaws.com/redqteam.com/Mahdi Fashion/gift-card-2.png',
            discountInPercent: 10,
            number_of_coupon: 10,
            number_of_used_coupon: 5,
            products: [
                {
                    id: '1',
                    url: '',
                },
            ],
            status: 'active',
            expiration_date: new Date(),
            creation_date: new Date(),
        },
        {
            id: 5,
            title: 'Summer Discount',
            code: 'SUMMER10',
            image: 'http://s3.amazonaws.com/redqteam.com/Mahdi Fashion/gift-card-2.png',
            discountInPercent: 10,
            number_of_coupon: 10,
            number_of_used_coupon: 5,
            products: [
                {
                    id: '1',
                    url: '',
                },
            ],
            status: 'active',
            expiration_date: new Date(),
            creation_date: new Date(),
        },
        {
            id: 6,
            title: 'Winter Discount',
            code: 'WINTER10',
            image: 'http://s3.amazonaws.com/redqteam.com/Mahdi Fashion/gift-card-1.png',
            discountInPercent: 10,
            number_of_coupon: 10,
            number_of_used_coupon: 15,
            products: [
                {
                    id: '1',
                    url: '',
                },
            ],
            status: 'active',
            expiration_date: new Date(),
            creation_date: new Date(),
        },
        {
            id: 7,
            title: 'Autumn Discount',
            code: '1AUTUMN10',
            image: 'http://s3.amazonaws.com/redqteam.com/Mahdi Fashion/gift-card-2.png',
            discountInPercent: 10,
            number_of_coupon: 10,
            number_of_used_coupon: 15,
            products: [
                {
                    id: '1',
                    url: '',
                },
            ],
            status: 'active',
            expiration_date: new Date(),
            creation_date: new Date(),
        },
        {
            id: 8,
            title: 'Winter Discount',
            code: 'WINTER10',
            image: 'http://s3.amazonaws.com/redqteam.com/Mahdi Fashion/gift-card-1.png',
            discountInPercent: 10,
            number_of_coupon: 10,
            number_of_used_coupon: 15,
            products: [
                {
                    id: '1',
                    url: '',
                },
            ],
            status: 'active',
            expiration_date: new Date(),
            creation_date: new Date(),
        },
        {
            id: 9,
            title: 'Winter Sale',
            code: 'WINTER15',
            image: 'http://s3.amazonaws.com/redqteam.com/Mahdi Fashion/gift-card-1.png',
            discountInPercent: 15,
            number_of_coupon: 10,
            number_of_used_coupon: 15,
            products: [
                {
                    id: '1',
                    url: '',
                },
            ],
            status: 'active',
            expiration_date: new Date(),
            creation_date: new Date(),
        },
        {
            id: 10,
            title: 'Halloween Sale',
            code: 'HALLOWEEN20',
            image: 'http://s3.amazonaws.com/redqteam.com/Mahdi Fashion/gift-card-1.png',
            discountInPercent: 20,
            number_of_coupon: 10,
            number_of_used_coupon: 15,
            products: [
                {
                    id: '1',
                    url: '',
                },
            ],
            status: 'active',
            expiration_date: new Date(),
            creation_date: new Date(),
        },
    ]);
};
exports.default = loadCoupons;
//# sourceMappingURL=coupon.sample.js.map