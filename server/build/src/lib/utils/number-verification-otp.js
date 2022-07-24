"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendOtp = void 0;
const axios_1 = __importDefault(require("axios"));
const fromNumber = process.env.OTP_FROM_NUMBER;
const apiToken = process.env.OTP_API_TOKEN;
exports.sendOtp = (sendToNumber, otpCode) => {
    const postData = {
        from: fromNumber,
        to: [sendToNumber],
        body: `Verification code: ${otpCode}`,
    };
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiToken}`,
        },
    };
    return axios_1.default.post("https://sms.api.sinch.com/xms/v1/240c4a432e32458fa8312a71ffddbb52/batches", postData, axiosConfig);
};
