"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeImage = void 0;
const fs_1 = require("fs");
const shortid_1 = __importDefault(require("shortid"));
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Readable = require('stream').Readable;
const storeImage = (imageBase64Value, filename) => {
    (0, fs_1.mkdir)("images", { recursive: true }, (err) => {
        if (err)
            throw err;
    });
    const id = shortid_1.default.generate();
    const base64Image = imageBase64Value.split(';base64,').pop();
    const uploadDir = 'images';
    const path = `${uploadDir}/${id}-${filename}`;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const imgBuffer = Buffer.from(base64Image, 'base64');
    const readable = new Readable();
    readable.push(imgBuffer);
    readable.push(null);
    readable.pipe((0, fs_1.createWriteStream)(path));
    return path;
};
exports.storeImage = storeImage;
