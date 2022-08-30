"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
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
exports.hashPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt.hash(password, 10);
});
exports.validatePassword = (plainPassword, hashPassword) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt.compare(plainPassword, hashPassword);
});
exports.accessToken = (id) => {
    const secret = process.env.JWT_SECRET;
    return jwt.sign({ UserId: id }, secret, { expiresIn: "1d" });
};
exports.authChecker = (token, secret) => {
    if (!token) {
        return false;
    }
    try {
        jwt.verify(token, secret);
    }
    catch (err) {
        return false;
    }
    const { UserId, exp } = jwt.verify(token, secret);
    if (exp < Date.now().valueOf() / 1000) {
        return false;
    }
    return true;
};
exports.generateOTPCode = () => {
    const digits = '0123456789';
    const otpLength = 6;
    let otp = '';
    for (let i = 1; i <= otpLength; i++) {
        const index = Math.floor(Math.random() * (digits.length));
        otp = otp + digits[index];
    }
    return otp;
};
exports.usersResolvers = {
    Query: {
        users: (_root, _args, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield utils_1.authorize(req, db);
            return yield db.users.find({}).toArray();
        }),
        getUser: (_root, { id }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return yield utils_1.authorize(req, db);
        }),
        userAuthCheck: (_root, _args, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            const token = req.headers["x-access-token"];
            const secret = process.env.JWT_SECRET;
            if (exports.authChecker(token, secret)) {
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
        signUp: (_root, { phone, password }, { db }) => __awaiter(void 0, void 0, void 0, function* () {
            const userResult = yield db.users.findOne({ "phones.number": phone });
            if (userResult) {
                throw new Error("User already registered.");
            }
            if (!phone || !password) {
                throw new Error("Every field is required");
            }
            if (password.length < 6) {
                throw new Error("Incorrect length");
            }
            const otp = exports.generateOTPCode();
            const user = {
                _id: new mongodb_1.ObjectId(),
                name: "",
                email: "",
                password: yield exports.hashPassword(password),
                phones: [{ id: shortid_1.default.generate(), number: phone, status: false, is_primary: true }],
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
                tasks: [
                    {
                        taskId: Math.random().toString(),
                        description: '',
                        startDate: '',
                        finishDate: '',
                        plannedDate: '',
                        isRepetitived: false,
                        completationTimes: '',
                        workedHours: '',
                        isDone: false
                    }
                ],
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
                message: "Successfully send otp to your number."
            };
        }),
        login: (_root, { phone, password }, { db }) => __awaiter(void 0, void 0, void 0, function* () {
            const userResult = yield db.users.findOne({ "phones.number": phone });
            if (!userResult) {
                throw new Error("User dose not exits.");
            }
            const validatePass = yield exports.validatePassword(password, userResult.password);
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
                access_token: exports.accessToken(userResult._id),
            };
        }),
        phoneVerification: (_root, { phone }, { db }) => __awaiter(void 0, void 0, void 0, function* () {
            const userResult = yield db.users.findOne({ "phones.number": phone });
            if (!userResult) {
                throw new Error("User dose not exits.");
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const phoneObject = userResult.phones.filter(userPhone => {
                if (userPhone.number == phone) {
                    return userPhone;
                }
            });
            const otp = exports.generateOTPCode();
            yield db.users.updateOne({ _id: userResult._id, "phones.id": phoneObject[0].id }, { $set: { otp: otp } });
            const { data, status } = yield number_verification_otp_1.sendOtp(phone, otp);
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
                throw new Error("User dose not exits.");
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
                access_token: exports.accessToken(userResult._id),
            };
        }),
        updateUserNameAndEmail: (_root, { id, name, email }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield utils_1.authorize(req, db);
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User dose not exits.");
            }
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { name: name, email: email } });
            return {
                status: true,
                message: "Updated successfully."
            };
        }),
        addPhoneNumber: (_root, { id, number }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield utils_1.authorize(req, db);
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User dose not exits.");
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
            yield utils_1.authorize(req, db);
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User dose not exits.");
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
            yield utils_1.authorize(req, db);
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User dose not exits.");
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
            yield utils_1.authorize(req, db);
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User dose not exits.");
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
        addDeliveryAddress: (_root, { id, title, address, division, district, region }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield utils_1.authorize(req, db);
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User dose not exits.");
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
                division: division,
                district: district,
                region: region,
                is_primary: false,
            };
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $push: { delivery_address: newAddress } });
            return newAddress;
        }),
        updateDeliveryAddress: (_root, { id, addressId, title, address, division, district, region }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield utils_1.authorize(req, db);
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User dose not exits.");
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const matchedAddress = userResult.delivery_address.filter(address => { return address.id == addressId; });
            const { id: id1, title: title1, address: address1, division: division1, district: district1, region: region1, is_primary } = matchedAddress[0];
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id), "delivery_address.id": addressId }, {
                $set: {
                    "delivery_address.$.id": id1,
                    "delivery_address.$.title": title ? title : title1,
                    "delivery_address.$.address": address ? address : address1,
                    "delivery_address.$.division": division ? division : division1,
                    "delivery_address.$.district": district ? district : district1,
                    "delivery_address.$.region": region ? region : region1,
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
            yield utils_1.authorize(req, db);
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User dose not exits.");
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const addresses = userResult.delivery_address.map(address => {
                if (address.id == addressId) {
                    return {
                        id: address.id,
                        title: address.title,
                        address: address.address,
                        division: address.division,
                        district: address.district,
                        region: address.region,
                        is_primary: true
                    };
                }
                else {
                    return {
                        id: address.id,
                        title: address.title,
                        address: address.address,
                        division: address.division,
                        district: address.district,
                        region: address.region,
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
            yield utils_1.authorize(req, db);
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User dose not exits.");
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
                            division: userAddresses[i].division,
                            district: userAddresses[i].district,
                            region: userAddresses[i].region,
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
            yield utils_1.authorize(req, db);
            const userResult = yield db.users.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!userResult) {
                throw new Error("User dose not exits.");
            }
            const validatePass = yield exports.validatePassword(old_password, userResult.password);
            if (!validatePass || new_password != confirm_password) {
                throw new Error("Password dose not match.");
            }
            yield db.users.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { password: yield exports.hashPassword(new_password) } });
            return {
                status: true,
                message: "Changed successfully."
            };
        }),
    },
    User: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        id: (user) => user._id.toString(),
    }
};
