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
exports.takeNineOutIfItHasIt = exports.authorize = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const mongodb_1 = require("mongodb");
const authorize = (req, db) => __awaiter(void 0, void 0, void 0, function* () {
    //Get the jwt token from the head
    const token = req.headers["x-access-token"];
    const secret = process.env.JWT_SECRET;
    if (!token) {
        throw new Error("no token sent!");
    }
    // try {
    //     jwt.verify(token, secret);
    // } catch(err) {
    //     throw new Error("El token de tu sesión ha expirado! Por favor ingrese nuevamente a su cuenta")
    // }
    const { UserId, exp } = jwt.verify(token, secret);
    // if (exp < Date.now().valueOf() / 1000) {
    //     throw new Error("El token de tu sesión ha expirado! Por favor ingrese nuevamente a su cuenta")
    // }
    const user = yield db.users.findOne({ _id: new mongodb_1.ObjectId(UserId) });
    if (!user) {
        throw new Error("No user found!");
    }
    return user;
});
exports.authorize = authorize;
const takeNineOutIfItHasIt = (phone) => {
    if (phone.startsWith('549')) {
        return '54' + phone.substring(3, phone.length);
    }
    return phone;
};
exports.takeNineOutIfItHasIt = takeNineOutIfItHasIt;
