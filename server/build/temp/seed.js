"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
require("dotenv").config();
const bcrypt = __importStar(require("bcrypt"));
const mongodb_1 = require("mongodb");
const database_1 = require("../database");
const types_1 = require("../lib/types");
const slugify_1 = require("../lib/utils/slugify");
const hashPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt.hash(password, 10);
});
const seed = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('[seed]: running...');
        const db = yield (0, database_1.connectDatabase)();
        const listings = [
            {
                _id: new mongodb_1.ObjectId(),
                title: "Clean and fully furnished apartment. 5 min away from CN Tower",
                image: "https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-1_exv0tf.jpg",
                address: "3210 Scotchmere Dr W, Toronto, ON, CA",
                price: 10000,
                numOfGuests: 2,
                numOfBeds: 1,
                numOfBaths: 2,
                rating: 5
            },
            {
                _id: new mongodb_1.ObjectId(),
                title: "Luxurious home with private pool",
                image: "https://res.cloudinary.com/tiny-house/image/upload/v1560645376/mock/Los%20Angeles/los-angeles-listing-1_aikhx7.jpg",
                address: "100 Hollywood Hills Dr, Los Angeles, California",
                price: 15000,
                numOfGuests: 2,
                numOfBeds: 1,
                numOfBaths: 1,
                rating: 4
            },
            {
                _id: new mongodb_1.ObjectId(),
                title: "Single bedroom located in the heart of downtown San Fransisco",
                image: "https://res.cloudinary.com/tiny-house/image/upload/v1560646219/mock/San%20Fransisco/san-fransisco-listing-1_qzntl4.jpg",
                address: "200 Sunnyside Rd, San Fransisco, California",
                price: 25000,
                numOfGuests: 3,
                numOfBeds: 2,
                numOfBaths: 2,
                rating: 3
            }
        ];
        const generateOTPCode = () => {
            const digits = '0123456789';
            const otpLength = 6;
            let otp = '';
            for (let i = 1; i <= otpLength; i++) {
                const index = Math.floor(Math.random() * (digits.length));
                otp = otp + digits[index];
            }
            return otp;
        };
        const otp = generateOTPCode();
        const user = {
            _id: new mongodb_1.ObjectId(),
            name: 'Esteban Muruzabal',
            email: 'estebanmuruzabal@gmail.com',
            password: yield hashPassword('123456'),
            phones: [{
                    id: new Date().toUTCString(),
                    number: '+17863847064',
                    status: true,
                    is_primary: true
                }],
            delivery_address: [{
                    id: 'string',
                    title: 'string',
                    address: 'string',
                    location: 'string',
                    instructions: 'string',
                    is_primary: true
                }],
            otp: otp,
            role: types_1.Roles.ADMIN,
            created_at: new Date().toString(),
            workInfo: {
                stoppedWorkTime: null,
                startedWorkTime: null,
                ratePerHour: 0,
                totalWorkingMinutesPerWeek: 0,
                totalSalaryToPayWeekly: 0,
                advancedSalaryPaid: 0,
                isWorking: false,
                taskRelated: null,
            },
            tasks: [],
            logs: [],
            plants: [],
            chatHistory: []
        };
        const typeData = {
            _id: new mongodb_1.ObjectId(),
            name: 'grocery',
            slug: (0, slugify_1.slugify)('grocery'),
            image: '',
            icon: '',
            home_title: '',
            home_subtitle: '',
            meta_title: '',
            meta_keyword: '',
            meta_description: '',
            created_at: new Date().toUTCString(),
        };
        const insertResult = yield db.types.insertOne(typeData);
        // for (const listing of listings) {
        //     await db.listings.insertOne(listing);
        // }
        yield db.users.insertOne(user);
        console.log('[seed]: success');
    }
    catch (_a) {
        throw new Error('Failed to seed mock data.');
    }
});
// seed();
