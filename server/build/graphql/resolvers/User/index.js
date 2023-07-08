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
            const datetime = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });
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
        updateUserNameAndEmail: (_root, { id, name, email }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const re = /\S+@\S+\.\S+/;
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            if (re.test(email)) {
                yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { name: name, email: email } });
            }
            else {
                yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { name: name } });
            }
            return {
                status: true,
                message: "Updated successfully."
            };
        }),
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
                products: input.products
            };
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(input.customer_id) }, { $set: { shoppingCart } });
            return {
                status: true,
                message: "updated successfully."
            };
        }),
        addPlant: (_root, { id, name, controllerId }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            // await authorize(req, db);
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            if (userResult.plants.length === 3) {
                throw new Error("Already added three plants. You are not allowed to add more than three.");
            }
            const plantObject = {
                id: shortid_1.default.generate(),
                name,
                controllerId,
                soilHumidity1: 0,
                soilHumidity2: 0,
                airHumidity: 0,
                tempeture: 0,
                distance_cm: 0,
                light: 0,
                isRelayOneOn: false,
                isRelayTwoOn: false,
                isRelayThirdOn: false,
                isRelayFourthOn: false,
                distanceSensorSettings: {
                    minWarning: "",
                    maxWarning: "",
                    mode: types_1.DistanceSensorMode.NONE,
                    relayOneAutomatedTimeToRun: "",
                    relayOneAutomatedStartedTime: "",
                    relayTwoAutomatedStartedTime: "",
                    relayOneIdRelated: "",
                    relayOneWorking: false,
                    relayTwoAutomatedTimeToRun: "",
                    relayTwoIdRelated: "",
                    relayTwoWorking: false,
                    logs: [],
                },
                soilHumiditySettings1: {
                    minWarning: "",
                    maxWarning: "",
                    mode: types_1.HumiditySensorMode.NONE,
                    relayOneAutomatedTimeToRun: "",
                    relayOneAutomatedStartedTime: "",
                    relayTwoAutomatedStartedTime: "",
                    relayOneIdRelated: "",
                    relayOneWorking: false,
                    relayTwoAutomatedTimeToRun: "",
                    relayTwoIdRelated: "",
                    relayTwoWorking: false,
                    logs: [],
                    scheduledOnTimes: []
                },
                soilHumiditySettings2: {
                    minWarning: "",
                    maxWarning: "",
                    mode: types_1.DistanceSensorMode.NONE,
                    relayOneAutomatedTimeToRun: "",
                    relayOneAutomatedStartedTime: "",
                    relayTwoAutomatedStartedTime: "",
                    relayOneIdRelated: "",
                    relayOneWorking: false,
                    relayTwoAutomatedTimeToRun: "",
                    relayTwoIdRelated: "",
                    relayTwoWorking: false,
                    logs: [],
                    scheduledOnTimes: []
                },
                lightSettings: {
                    minWarning: "",
                    maxWarning: "",
                    mode: types_1.DistanceSensorMode.NONE,
                    relayOneAutomatedTimeToRun: "",
                    relayOneAutomatedStartedTime: "",
                    relayTwoAutomatedStartedTime: "",
                    relayOneIdRelated: "",
                    relayOneWorking: false,
                    relayTwoAutomatedTimeToRun: "",
                    relayTwoIdRelated: "",
                    relayTwoWorking: false,
                    logs: [],
                    scheduledOnTimes: []
                }
            };
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $push: { plants: plantObject } });
            return {
                status: true,
                message: "Created plant successfully."
            };
        }),
        updatePlant: (_root, { id, contrId, hum1, airHum, temp, dist, hum2, light, isRelayOneOn, isRelayTwoOn, isRelayThirdOn, isRelayFourthOn }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            // await authorize(req, db);
            var _b, _c, _d, _e;
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            const plants = userResult.plants;
            const index = (_b = userResult.plants) === null || _b === void 0 ? void 0 : _b.findIndex((plant) => (plant.controllerId == contrId));
            if (index < 0) {
                throw new Error(`Controller id does not exists: ${contrId})`);
            }
            else {
                plants[index].soilHumidity1 = hum1;
                plants[index].soilHumidity2 = hum2;
                plants[index].airHumidity = airHum;
                plants[index].tempeture = temp;
                plants[index].distance_cm = dist;
                plants[index].light = light;
                plants[index].isRelayOneOn = isRelayOneOn;
                plants[index].isRelayTwoOn = isRelayTwoOn;
                plants[index].isRelayThirdOn = isRelayThirdOn;
                plants[index].isRelayFourthOn = isRelayFourthOn;
            }
            console.log('Humedad sensor 1', plants[index].soilHumidity1);
            console.log('Humedad sensor 2', plants[index].soilHumidity2);
            console.log(`Relays BF: ${plants[index].isRelayOneOn ? '1:ON' : '1:OFF'} ${plants[index].isRelayTwoOn ? '2:ON' : '2:OFF'} ${plants[index].isRelayThirdOn ? '3:ON' : '3:OFF'} ${plants[index].isRelayFourthOn ? '4:ON' : '4:OFF'}`);
            plants[index] = yield (0, plants_1.checkSoilWarnings)(plants[index], plants[index].soilHumiditySettings1, (_c = userResult === null || userResult === void 0 ? void 0 : userResult.phones[0]) === null || _c === void 0 ? void 0 : _c.number, Number(plants[index].soilHumidity1));
            plants[index] = yield (0, plants_1.checkSoilWarnings)(plants[index], plants[index].soilHumiditySettings2, (_d = userResult === null || userResult === void 0 ? void 0 : userResult.phones[0]) === null || _d === void 0 ? void 0 : _d.number, Number(plants[index].soilHumidity2));
            // plants[index] = await checkAirHumidityAndTempeture(plants[index], userResult?.phones[0]?.number);
            plants[index] = yield (0, plants_1.checkLightSensor)(plants[index], plants[index].lightSettings, (_e = userResult === null || userResult === void 0 ? void 0 : userResult.phones[0]) === null || _e === void 0 ? void 0 : _e.number, Number(plants[index].light));
            console.log(`Relays AF: ${plants[index].isRelayOneOn ? '1:ON' : '1:OFF'} ${plants[index].isRelayTwoOn ? '2:ON' : '2:OFF'} ${plants[index].isRelayThirdOn ? '3:ON' : '3:OFF'} ${plants[index].isRelayFourthOn ? '4:ON' : '4:OFF'}`);
            // plants[index] = await checkSensors(plants[index], userResult?.phones[0]?.number);
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { plants } });
            return {
                isRelayOneOn: plants[index].isRelayOneOn ? "ON" : "OF",
                isRelayTwoOn: plants[index].isRelayTwoOn ? "ON" : "OF",
                isRelayThirdOn: plants[index].isRelayThirdOn ? "ON" : "OF",
                isRelayFourthOn: plants[index].isRelayFourthOn ? "ON" : "OF",
            };
        }),
        updateSetting: (_root, { id, controllerId, input }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            // await authorize(req, db);
            var _f;
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User does not exits.");
            }
            const plants = userResult.plants;
            const index = (_f = userResult.plants) === null || _f === void 0 ? void 0 : _f.findIndex((plant) => (plant.controllerId == controllerId));
            if (index < 0) {
                throw new Error(`Controller id does not exists: ${controllerId})`);
            }
            else {
                plants[index][input.settingName].name = input.name;
                plants[index][input.settingName].sendWhatsappWarnings = input.sendWhatsappWarnings;
                plants[index][input.settingName].maxWarning = input.maxWarning;
                plants[index][input.settingName].minWarning = input.minWarning;
                plants[index][input.settingName].mode = input.mode;
                plants[index][input.settingName].relayOneAutomatedTimeToRun = input.relayOneAutomatedTimeToRun;
                plants[index][input.settingName].relayTwoAutomatedStartedTime = input.relayTwoAutomatedStartedTime;
                plants[index][input.settingName].relayOneAutomatedStartedTime = input.relayOneAutomatedStartedTime;
                plants[index][input.settingName].relayOneIdRelated = input.relayOneIdRelated;
                plants[index][input.settingName].relayOneWorking = input.relayOneWorking;
                plants[index][input.settingName].relayTwoAutomatedTimeToRun = input.relayTwoAutomatedTimeToRun;
                plants[index][input.settingName].relayTwoIdRelated = input.relayTwoIdRelated;
                plants[index][input.settingName].relayTwoWorking = input.relayTwoWorking;
                plants[index][input.settingName].logs = input.logs;
                plants[index][input.settingName].scheduledOnTimes = input.scheduledOnTimes;
            }
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { plants } });
            return {
                status: true,
                message: `Updated ${input.settingName} successfully`
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
