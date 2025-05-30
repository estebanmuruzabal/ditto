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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersResolvers = exports.generateOTPCode = exports.authChecker = exports.accessToken = exports.validatePassword = exports.hashPassword = void 0;
const mongodb_1 = require("mongodb");
const types_1 = require("../../../lib/types");
const bcrypt = __importStar(require("bcrypt"));
const jwt = __importStar(require("jsonwebtoken"));
const utils_1 = require("../../../lib/utils");
const shortid_1 = __importDefault(require("shortid"));
const number_verification_otp_1 = require("../../../lib/utils/number-verification-otp");
const Orders_1 = require("../Orders");
const plants_1 = require("../../../controllers/plants");
const constant_1 = require("../../../lib/utils/constant");
const hashPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt.hash(password, 10);
});
exports.hashPassword = hashPassword;
const validatePassword = (plainPassword, hashPassword) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt.compare(plainPassword, hashPassword);
});
exports.validatePassword = validatePassword;
const accessToken = (id) => {
    const secret = process.env.JWT_SECRET;
    return jwt.sign({ UserId: id }, secret);
};
exports.accessToken = accessToken;
const authChecker = (token, secret) => {
    if (!token) {
        return false;
    }
    // try {
    //     jwt.verify(token, secret);
    // } catch(err) {
    //     return false;
    // }
    // const {UserId, exp} = <any>jwt.verify(token, secret);
    // if (exp < Date.now().valueOf() / 1000) {
    //     return false;
    // }
    return true;
};
exports.authChecker = authChecker;
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
exports.generateOTPCode = generateOTPCode;
exports.usersResolvers = {
    Query: {
        getUsers: (_root, _args, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            return yield db.users.find({}).toArray();
        }),
        getUser: (_root, { id }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return yield (0, utils_1.authorize)(req, db);
        }),
        // updateShop: async (
        //     _root: undefined,
        //     {id, input}: IShopInputArgs,
        //     {db, req}: { db: Database, req: Request }
        // ): Promise<ICommonMessageReturnType> => {
        //     // await authorize(req, db);
        //     const userResult: any = await db.users.findOne({_id: new ObjectId(id)});
        //     if (!userResult) {
        //         throw new Error("User does not exits.");
        //     }
        //     const shop = {
        //         id: id || shortid.generate(),
        //         shopPublicName: input.shopPublicName,
        //         shopUrl: input.shopUrl,
        //         shopIsOnline: input.shopIsOnline,
        //         address: input.address,
        //         latitude: input.latitude,
        //         longitude: input.longitude,
        //     }
        //     await db.users.updateOne(
        //         {_id: new ObjectId(id)},
        //         {$set: {shop}}
        //     );
        //     return {
        //         status: true,
        //         message: `Updated ${input.shopPublicName} successfully`
        //     };
        // },
        // deleteShop: async (
        //     _root: undefined,
        //     {id}: deleteShopArgs,
        //     {db, req}: { db: Database, req: Request }
        // ): Promise<ICommonMessageReturnType> => {
        //     // await authorize(req, db);
        //     const userResult: any = await db.users.findOne({_id: new ObjectId(id)});
        //     if (!userResult) {
        //         throw new Error("User does not exits.");
        //     }
        //     const shop = null;
        //     await db.users.updateOne(
        //         {_id: new ObjectId(id)},
        //         {$set: {shop}}
        //     );
        //     return {
        //         status: true,
        //         message: `${id} deleted successfully`
        //     };
        // },
        getCustomer: (_root, { phone }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            // when comming from whatsapp, numbers has 9, like 549blabla, so we take it off to match web signups users.
            const phoneFormatted = (0, utils_1.takeNineOutIfItHasIt)(phone);
            const userResult = yield db.users.findOne({ "phones.number": phoneFormatted });
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            const token = (0, exports.accessToken)(userResult._id);
            return {
                user: userResult,
                access_token: token
            };
        }),
        userAuthCheck: (_root, _args, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            const token = req.headers["x-access-token"];
            const secret = process.env.JWT_SECRET;
            if ((0, exports.authChecker)(token, secret)) {
                return {
                    status: true,
                    message: "Authenticate user is valid."
                };
            }
            return {
                status: false,
                message: "User dose not valid."
            };
        }),
    },
    Mutation: {
        updateUserChat: (_root, { message, number, trigger }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            // await authorize(req, db);
            const phoneFormatted = (0, utils_1.takeNineOutIfItHasIt)(number);
            const userResult = yield db.users.findOne({ "phones.number": phoneFormatted });
            if (!userResult)
                throw new Error("User not found");
            const datetime = new Date().toLocaleString('en-US', { timeZone: constant_1.timeZone });
            let chatHistory = ((_a = userResult.chatHistory) === null || _a === void 0 ? void 0 : _a.length) > 0 ? userResult.chatHistory : [];
            let shoppingCart = undefined;
            chatHistory.push({ message, trigger, datetime });
            shoppingCart = userResult === null || userResult === void 0 ? void 0 : userResult.shoppingCart;
            if (trigger === types_1.TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART || trigger === types_1.TriggerSteps.END_CONVERSATION_AND_RESET_CHAT) {
                shoppingCart = null;
                const latestMsg = chatHistory[chatHistory.length - 1];
                chatHistory = [latestMsg];
            }
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(userResult._id) }, { $set: { chatHistory, shoppingCart } });
            return {
                status: true,
                message: "Successfully saved chat history."
            };
        }),
        signUp: (_root, { phone, password, name }, { db }) => __awaiter(void 0, void 0, void 0, function* () {
            const phoneFormatted = (0, utils_1.takeNineOutIfItHasIt)(phone);
            const userResult = yield db.users.findOne({ "phones.number": phoneFormatted });
            if (userResult) {
                throw new Error("User already registered.");
            }
            if (!phone || !password || !name) {
                throw new Error("Every field is required");
            }
            if (password.length < 6) {
                throw new Error("Incorrect length");
            }
            const otp = (0, exports.generateOTPCode)();
            const user = {
                _id: new mongodb_1.ObjectId(),
                name,
                email: "",
                password: yield (0, exports.hashPassword)(password),
                phones: [{ id: shortid_1.default.generate(), number: phoneFormatted, status: false, is_primary: true }],
                otp: otp,
                role: types_1.Roles.CLIENT,
                created_at: new Date().toString(),
                workInfo: {
                    stoppedWorkTime: "",
                    startedWorkTime: "",
                    ratePerHour: 0,
                    totalWorkingMinutesPerWeek: 0,
                    totalSalaryToPayWeekly: 0,
                    advancedSalaryPaid: 0,
                    isWorking: false,
                    taskRelated: ""
                },
                tasks: [],
                chatHistory: [],
                shoppingCart: undefined,
                plants: [],
                logs: []
            };
            yield db.users.insertOne(user);
            // const {data, status} = await sendOtp(phone, otp);
            // const {data, status} = await sendMailVerification('estebanmuruzabal@gmail.com');
            // if (status != 201) {
            //     throw new Error("Something went wrong! Please try again.");
            // }
            return {
                status: true,
                message: "Successfully send otp to your number.",
                access_token: (0, exports.accessToken)(user._id),
            };
        }),
        login: (_root, { phone, password }, { db }) => __awaiter(void 0, void 0, void 0, function* () {
            const userResult = yield db.users.findOne({ "phones.number": phone });
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            const validatePass = yield (0, exports.validatePassword)(password, userResult.password);
            if (!validatePass) {
                throw new Error("Password dose not match.");
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const phoneObject = userResult.phones.filter(userPhone => {
                if (userPhone.number == phone) {
                    return userPhone;
                }
            });
            /* if (!phoneObject[0].status) {
                throw new Error("Phone number dose not verified. Please verify your phone number.")
            } */
            return {
                user: userResult,
                access_token: (0, exports.accessToken)(userResult._id),
            };
        }),
        phoneVerification: (_root, { phone }, { db }) => __awaiter(void 0, void 0, void 0, function* () {
            const userResult = yield db.users.findOne({ "phones.number": phone });
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const phoneObject = userResult.phones.filter(userPhone => {
                if (userPhone.number == phone) {
                    return userPhone;
                }
            });
            const otp = (0, exports.generateOTPCode)();
            yield db.users.updateOne({ _id: userResult._id, "phones.id": phoneObject[0].id }, { $set: { otp: otp } });
            const { data, status } = yield (0, number_verification_otp_1.sendOtp)(phone, otp);
            if (status != 201) {
                throw new Error("Something went wrong! Please try again.");
            }
            return {
                status: true,
                message: "Successfully send otp to your number."
            };
        }),
        phoneVerificationCheck: (_root, { phone, verification_code }, { db }) => __awaiter(void 0, void 0, void 0, function* () {
            const userResult = yield db.users.findOne({ "phones.number": phone });
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            // if (userResult.otp != verification_code) {
            //     throw new Error("Verification code dose not match.");
            // }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const phoneObject = userResult.phones.filter(userPhone => {
                if (userPhone.number == phone) {
                    return userPhone;
                }
            });
            yield db.users.updateOne({ _id: userResult._id, "phones.id": phoneObject[0].id }, { $set: { "phones.$.status": true, otp: "" } });
            return {
                user: userResult,
                access_token: (0, exports.accessToken)(userResult._id),
            };
        }),
        updateUserNameEmailAndLenguage: (_root, { id, name, email, lenguage }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const re = /\S+@\S+\.\S+/;
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            if (re.test(email)) {
                yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { name: name, email: email, lenguage: lenguage } });
            }
            else {
                yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { name: name, lenguage: lenguage } });
            }
            return {
                status: true,
                message: "Updated successfully."
            };
        }),
        // updateUserTimeZone: async (
        //     _root: undefined,
        //     {id, name, email}: { id: string, name: string, email: string },
        //     {db, req}: { db: Database, req: Request }
        // ): Promise<ICommonMessageReturnType> => {
        //     await authorize(req, db);
        //     const re = /\S+@\S+\.\S+/;
        //     const userResult = await db.users.findOne({_id: new ObjectId(id)});
        //     if (!userResult) {
        //         throw new Error("User does not exits.");
        //     }
        //     await db.users.updateOne(
        //         {_id: new ObjectId(id)},
        //         {$set: {timeZone: timeZone}}
        //     );
        //     return {
        //         status: true,
        //         message: "Updated successfully."
        //     };
        // },
        updateUserShoppingCart: (_root, { input }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            // await authorize(req, db);
            // const products: Array<IProduct> = await db.products.find({ _id: { $in: makeObjectIds(input.products) } }).toArray();
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(input.customer_id) });
            if (!userResult)
                throw new Error("User does not exits.");
            const products = yield db.products.find({ _id: { $in: (0, Orders_1.makeObjectIds)(input.products) } }).toArray();
            for (let i = 0; i < input.products.length; i++) {
                // @ts-ignore
                const dbProduct = yield db.products.findOne({ _id: new mongodb_1.ObjectId(input.products[i].product_id) });
                const purchasedQuantity = input.products[i].quantity + input.products[i].recicledQuantity;
                if (dbProduct.product_quantity < purchasedQuantity) {
                    throw new Error(`'${input.products[i].name}', No hay suficiente cantidad de este producto. Cantidad disponible: ${products[i].product_quantity}`);
                }
            }
            const shoppingCart = {
                customer_id: input.customer_id,
                contact_number: input.contact_number,
                payment_option_id: input.payment_option_id,
                delivery_method_id: input.delivery_method_id,
                delivery_method_name: input.delivery_method_name,
                ccCharge: input.ccCharge,
                deliveryFee: input.deliveryFee,
                selectedCategorySlug: input.selectedCategorySlug,
                payment_option_type: input.payment_option_type,
                payment_method_name: input.payment_method_name,
                isWhatsappPurchase: input.isWhatsappPurchase,
                delivery_date: input.delivery_date,
                delivery_address: input.delivery_address,
                sub_total: input.sub_total,
                total: input.total,
                coupon_code: input.coupon_code,
                discount_amount: input.discount_amount,
                products: input.products,
                lenguageLocale: input.lenguageLocale
            };
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(input.customer_id) }, { $set: { shoppingCart } });
            return {
                status: true,
                message: "updated successfully."
            };
        }),
        addPlant: (_root, { id, name, plantId, timeZone }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            var _b;
            // await authorize(req, db);
            // we use this very same method to update the ditto bot name!
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            const index = (_b = userResult.plants) === null || _b === void 0 ? void 0 : _b.findIndex((plant) => (plant.plantId == plantId));
            if (index < 0) {
                if (userResult.plants.length === 3)
                    throw new Error("Already added three plants. You are not allowed to add more than three.");
                const plantObject = {
                    id: shortid_1.default.generate(),
                    name,
                    plantId,
                    soil_humidity_1: 0,
                    soil_humidity_2: 0,
                    humidity_1: 0,
                    tempeture_1: 0,
                    distance_cm: 0,
                    light_1: 0,
                    isRelayOneOn: false,
                    isRelayTwoOn: false,
                    isRelayThirdOn: false,
                    isRelayFourthOn: false,
                    timestamp: null,
                    timeZone,
                    sensors: []
                };
                yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, 
                // @ts-ignore
                { $push: { plants: plantObject } });
            }
            else {
                const plants = userResult.plants;
                plants[index].name = name;
                if (timeZone)
                    plants[index].timeZone = timeZone;
                yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { plants } });
            }
            return {
                status: true,
                message: "Created plant successfully."
            };
        }),
        updatePlant: (_root, { id, contrId, hum1, airHum, temp, dist, hum2, light, isRelayOneOn, isRelayTwoOn, isRelayThirdOn, isRelayFourthOn }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            // await authorize(req, db);
            var _c, _d, _e, _f;
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            const plants = userResult.plants;
            const index = (_c = userResult.plants) === null || _c === void 0 ? void 0 : _c.findIndex((plant) => (plant.plantId == contrId));
            if (index < 0) {
                throw new Error(`Controller id does not exists: ${contrId})`);
            }
            else {
                plants[index].soil_humidity_1 = hum1;
                plants[index].soil_humidity_2 = hum2;
                plants[index].humidity_1 = airHum;
                plants[index].tempeture_1 = temp;
                plants[index].distance_1 = dist;
                plants[index].light_1 = light;
                plants[index].isRelayOneOn = isRelayOneOn;
                plants[index].isRelayTwoOn = isRelayTwoOn;
                plants[index].isRelayThirdOn = isRelayThirdOn;
                plants[index].isRelayFourthOn = isRelayFourthOn;
                plants[index].timestamp = new Date().toLocaleString('en-US', { timeZone: plants[index].timeZone });
            }
            // const a = {"operationName": "UpdatePlant","variables":{"id": "64558a8356b560e1c8172407", "contrId": 30, "hum1": 109, "airHum": 0, "temp": 0, "dist": 1, "hum2": 85, "light": 0, "isRelayOneOn": false, "isRelayTwoOn": false, "isRelayThirdOn": false, "isRelayFourthOn": false},"query":"mutation UpdatePlant($id: ID!, $contrId: Int!, $hum1: Int, $airHum: Int, $temp: Int, $dist: Int, $hum2: Int, $light: Int, $isRelayOneOn: Boolean, $isRelayTwoOn: Boolean, $isRelayThirdOn: Boolean, $isRelayFourthOn: Boolean) { updatePlant(id: $id, contrId: $contrId, hum1: $hum1, airHum: $airHum, temp: $temp, dist: $dist, hum2: $hum2, light: $light, isRelayOneOn: $isRelayOneOn, isRelayTwoOn: $isRelayTwoOn, isRelayThirdOn: $isRelayThirdOn, isRelayFourthOn: $isRelayFourthOn) { isRelayOneOn, isRelayTwoOn, isRelayThirdOn, isRelayFourthOn }}"}
            // console.log(`Relays BF: ${plants[index].isRelayOneOn ? '1:ON' : '1:OFF'} ${plants[index].isRelayTwoOn ? '2:ON' : '2:OFF'} ${plants[index].isRelayThirdOn ? '3:ON' : '3:OFF'} ${plants[index].isRelayFourthOn ? '4:ON' : '4:OFF'}`)
            (_d = plants[index].sensors) === null || _d === void 0 ? void 0 : _d.map((module, i) => __awaiter(void 0, void 0, void 0, function* () {
                var _g;
                plants[index] = yield (0, plants_1.checkSensor)(plants[index], i, (_g = userResult === null || userResult === void 0 ? void 0 : userResult.phones[0]) === null || _g === void 0 ? void 0 : _g.number, plants[index].timeZone);
            }));
            // console.log(`Relays AF: ${plants[index].isRelayOneOn ? '1:ON' : '1:OFF'} ${plants[index].isRelayTwoOn ? '2:ON' : '2:OFF'} ${plants[index].isRelayThirdOn ? '3:ON' : '3:OFF'} ${plants[index].isRelayFourthOn ? '4:ON' : '4:OFF'}`)
            if (((_e = plants[index].isRelayOneOn) === null || _e === void 0 ? void 0 : _e.length) > 0) {
                console.log('isRelayOneOn', plants[index].isRelayOneOn, plants[index].timestamp, plants[index].humidity_1);
            }
            if (((_f = plants[index].isRelayTwoOn) === null || _f === void 0 ? void 0 : _f.length) > 0) {
                console.log('isRelayTwoOn', plants[index].isRelayTwoOn, plants[index].timestamp, plants[index].distance_1);
            }
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { plants } });
            return {
                isRelayOneOn: plants[index].isRelayOneOn ? "ON" : "OF",
                isRelayTwoOn: plants[index].isRelayTwoOn ? "ON" : "OF",
                isRelayThirdOn: plants[index].isRelayThirdOn ? "ON" : "OF",
                isRelayFourthOn: plants[index].isRelayFourthOn ? "ON" : "OF",
            };
        }),
        updateSetting: (_root, { id, plantId, input }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            // await authorize(req, db);
            var _h, _j;
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            const plants = userResult.plants;
            const index = (_h = userResult.plants) === null || _h === void 0 ? void 0 : _h.findIndex((plant) => (plant.plantId == plantId));
            const replaceIndex = (_j = plants[index].sensors) === null || _j === void 0 ? void 0 : _j.findIndex((plant) => (plant.settingType == input.settingType));
            if (index < 0) {
                throw new Error("plant Id not found.");
            }
            if (replaceIndex >= 0) {
                plants[index].sensors[replaceIndex] = {
                    settingType: input.settingType,
                    name: input.name,
                    whatsappWarningsOn: input.whatsappWarningsOn,
                    maxWarning: input.maxWarning,
                    minWarning: input.minWarning,
                    reading: input.reading,
                    mode: input.mode,
                    relayOneAutomatedTimeToRun: input.relayOneAutomatedTimeToRun,
                    relayTwoAutomatedStartedTime: input.relayTwoAutomatedStartedTime,
                    relayOneAutomatedStartedTime: input.relayOneAutomatedStartedTime,
                    relayOneIdRelated: input.relayOneIdRelated,
                    relayOneWorking: input.relayOneWorking,
                    relayTwoAutomatedTimeToRun: input.relayTwoAutomatedTimeToRun,
                    relayTwoIdRelated: input.relayTwoIdRelated,
                    relayTwoWorking: input.relayTwoWorking,
                    logs: input.logs,
                    scheduledOnTimes: input.scheduledOnTimes
                };
            }
            else {
                plants[index].sensors.push({
                    settingType: input.settingType,
                    name: input.name,
                    whatsappWarningsOn: input.whatsappWarningsOn,
                    maxWarning: input.maxWarning,
                    minWarning: input.minWarning,
                    mode: input.mode,
                    reading: input.reading,
                    relayOneAutomatedTimeToRun: input.relayOneAutomatedTimeToRun,
                    relayTwoAutomatedStartedTime: input.relayTwoAutomatedStartedTime,
                    relayOneAutomatedStartedTime: input.relayOneAutomatedStartedTime,
                    relayOneIdRelated: input.relayOneIdRelated,
                    relayOneWorking: input.relayOneWorking,
                    relayTwoAutomatedTimeToRun: input.relayTwoAutomatedTimeToRun,
                    relayTwoIdRelated: input.relayTwoIdRelated,
                    relayTwoWorking: input.relayTwoWorking,
                    logs: input.logs,
                    scheduledOnTimes: input.scheduledOnTimes
                });
            }
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { plants } });
            return {
                status: true,
                message: `Updated ${input.settingType} successfully`
            };
        }),
        deleteSetting: (_root, { id, plantId, settingName }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            // await authorize(req, db);
            var _k;
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            const plants = userResult.plants;
            const index = (_k = userResult.plants) === null || _k === void 0 ? void 0 : _k.findIndex((plant) => (plant.plantId == plantId));
            if (index < 0) {
                throw new Error("plant Id not found.");
            }
            const settingIndex = plants[index].sensors.findIndex((module) => module.settingType === settingName);
            plants[index].sensors.splice(settingIndex, 1);
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { plants } });
            return {
                status: true,
                message: `${settingName} deleted successfully`
            };
        }),
        addPhoneNumber: (_root, { id, number }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (userResult.phones.length == 2) {
                throw new Error("Already added two phone numbers. You are not allowed to add more than two numbers.");
            }
            const phoneObject = {
                id: shortid_1.default.generate(),
                number: number,
                status: false,
                is_primary: false
            };
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $push: { phones: phoneObject } });
            return phoneObject;
        }),
        updatePhoneNumber: (_root, { id, phoneId, number }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id), "phones.id": phoneId }, { $set: { "phones.$.number": number } });
            const user = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const phoneObject = user.phones.filter(phone => {
                if (phone.id == phoneId) {
                    return phone;
                }
            });
            return phoneObject[0];
        }),
        setPhoneNumberPrimary: (_root, { id, phoneId }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const numbers = userResult.phones.map(phone => {
                if (phone.id == phoneId) {
                    return {
                        id: phone.id,
                        number: phone.number,
                        status: phone.status,
                        is_primary: true
                    };
                }
                else {
                    return {
                        id: phone.id,
                        number: phone.number,
                        status: phone.status,
                        is_primary: false
                    };
                }
            });
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { phones: numbers } });
            return {
                status: true,
                message: "Set successfully."
            };
        }),
        deletePhoneNumber: (_root, { id, phoneId }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (userResult.phones.length == 1) {
                throw new Error("You are not allowed to delete your number.");
            }
            const numbers = [];
            const userPhones = userResult.phones;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            for (let i = 0; i < userPhones.length; i++) {
                if (userPhones && userPhones[i].id != phoneId) {
                    numbers.push({
                        id: userPhones[i].id,
                        number: userPhones[i].number,
                        status: userPhones[i].status,
                        is_primary: true
                    });
                }
            }
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { phones: numbers } });
            return {
                status: true,
                message: "Deleted successfully."
            };
        }),
        addDeliveryAddress: (_root, { id, title, address, location, instructions, isPrimary }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (userResult.delivery_address && userResult.delivery_address.length == 3) {
                throw new Error("Already added three address. You are not allowed to add more than three address.");
            }
            const newAddress = {
                id: shortid_1.default.generate(),
                title: title,
                address: address,
                location: location,
                instructions: instructions,
                is_primary: true,
            };
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $push: { delivery_address: newAddress } });
            return newAddress;
        }),
        updateDeliveryAddress: (_root, { id, addressId, title, address, location, instructions }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const matchedAddress = userResult.delivery_address.filter(address => { return address.id == addressId; });
            const { id: id1, title: title1, address: address1, location: location1, instructions: instructions1, is_primary } = matchedAddress[0];
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id), "delivery_address.id": addressId }, {
                $set: {
                    "delivery_address.$.id": id1,
                    "delivery_address.$.title": title ? title : title1,
                    "delivery_address.$.address": address ? address : address1,
                    "delivery_address.$.location": location ? location : location1,
                    "delivery_address.$.instructions": instructions ? instructions : instructions1,
                    "delivery_address.$.is_primary": is_primary,
                }
            });
            const user = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const updatedAddress = user.delivery_address.filter(address => { return address.id == addressId; });
            return updatedAddress[0];
        }),
        setDeliveryAddressPrimary: (_root, { id, addressId }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const addresses = userResult.delivery_address.map(address => {
                if (address.id == addressId) {
                    return {
                        id: address.id,
                        title: address.title,
                        address: address.address,
                        location: address.location,
                        instructions: address.instructions,
                        is_primary: true
                    };
                }
                else {
                    return {
                        id: address.id,
                        title: address.title,
                        address: address.address,
                        location: address.location,
                        instructions: address.instructions,
                        is_primary: false
                    };
                }
            });
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { delivery_address: addresses } });
            return {
                status: true,
                message: "Set successfully."
            };
        }),
        deleteDeliveryAddress: (_root, { id, addressId }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (userResult.delivery_address.length == 1) {
                throw new Error("You are not allowed to delete your address.");
            }
            const addresses = [];
            const userAddresses = userResult.delivery_address;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            for (let i = 0; i < userAddresses.length; i++) {
                if (userAddresses && userAddresses[i].id != addressId) {
                    if (userAddresses) {
                        addresses.push({
                            id: userAddresses[i].id,
                            title: userAddresses[i].title,
                            address: userAddresses[i].address,
                            location: userAddresses[i].location,
                            instructions: userAddresses[i].instructions,
                            is_primary: userAddresses[i].is_primary
                        });
                    }
                }
            }
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { delivery_address: addresses } });
            return {
                status: true,
                message: "Deleted successfully."
            };
        }),
        changePassword: (_root, { id, old_password, new_password, confirm_password }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            const validatePass = yield (0, exports.validatePassword)(old_password, userResult.password);
            if (!validatePass || new_password != confirm_password) {
                throw new Error("Password dose not match.");
            }
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { password: yield (0, exports.hashPassword)(new_password) } });
            return {
                status: true,
                message: "Changed successfully."
            };
        }),
    },
    User: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        id: (user) => {
            var _a, _b, _c;
            // @ts-ignore
            return ((_b = (_a = user === null || user === void 0 ? void 0 : user.user) === null || _a === void 0 ? void 0 : _a._id) === null || _b === void 0 ? void 0 : _b.toString()) || ((_c = user === null || user === void 0 ? void 0 : user._id) === null || _c === void 0 ? void 0 : _c.toString());
        }
    }
};
