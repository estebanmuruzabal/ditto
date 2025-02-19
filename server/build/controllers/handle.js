"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidNumber = exports.cleanNumber = exports.checkIsUrl = exports.saveExternalFile = void 0;
// const { Client, LegacySessionAuth, LocalAuth } = require('whatsapp-web.js');
const http = require('http'); // or 'https' for https:// URLs
const https = require('https'); // or 'https' for https:// URLs
const fs = require('fs');
// const qr = require('qr-image')
const MULTI_DEVICE = process.env.MULTI_DEVICE || 'true';
const cleanNumber = (number) => {
    number = number.replace('@c.us', '');
    number = number.replace('@c.us', '');
    return number;
};
exports.cleanNumber = cleanNumber;
const saveExternalFile = (url) => new Promise((resolve, reject) => {
    const ext = url.split('.').pop();
    const checkProtocol = url.split('/').includes('https:');
    const handleHttp = checkProtocol ? https : http;
    const name = `${Date.now()}.${ext}`;
    const file = fs.createWriteStream(`${__dirname}/../mediaSend/${name}`);
    console.log(url);
    handleHttp.get(url, function (response) {
        response.pipe(file);
        file.on('finish', function () {
            file.close(); // close() is async, call cb after close completes.
            resolve(name);
        });
        file.on('error', function () {
            console.log('errro');
            file.close(); // close() is async, call cb after close completes.
            resolve(null);
        });
    });
});
exports.saveExternalFile = saveExternalFile;
const checkIsUrl = (path) => {
    try {
        const regex = /^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i;
        let match = path.match(regex);
        return (match === null || match === void 0 ? void 0 : match.length) ? match[0] : null;
    }
    catch (e) {
        return null;
    }
};
exports.checkIsUrl = checkIsUrl;
// const generateImage = (base64, cb = () => {}) => {
//     let qr_svg = qr.image(base64, { type: 'svg', margin: 4 });
//     qr_svg.pipe(require('fs').createWriteStream('./mediaSend/qr-code.svg'));
//     console.log(`⚡ Recuerda que el QR se actualiza cada minuto ⚡'`);
//     console.log(`⚡ Actualiza F5 el navegador para mantener el mejor QR⚡`);
//     cb()
// }
const checkEnvFile = () => {
    const pathEnv = `${__dirname}/../.env`;
    const isExist = fs.existsSync(pathEnv);
    if (!isExist) {
        console.log(`🆗 ATENCION! 🆗 te falta crear tu archivo .env de lo contrario no funcionara`);
    }
};
/**
 *
 * @param {*} session
 * @param {*} cb
 */
// const createClient =  () => {
//     client = new Client({
//         authStrategy: new LocalAuth(
//             {dataPath: './sessions/',
//             clientId: 'bot'}),
//         puppeteer: { headless: false }
//     });
// }
const isValidNumber = (rawNumber) => {
    const regexGroup = /\@g.us\b/gm;
    const regexCGroup = /\@c.us\b/gm;
    const exist = rawNumber.match(regexGroup) || rawNumber.match(regexCGroup);
    return !exist;
};
exports.isValidNumber = isValidNumber;
