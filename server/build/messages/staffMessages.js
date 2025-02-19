"use strict";
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
exports.startWorking = exports.stopWorking = exports.getStuffWorkingInfo = exports.getProductName = exports.getAmountOfProductToSell = exports.noOptionFound = exports.getNewStockOfProduct = exports.listAvailableProductsToUpdateAsInvalid = exports.listAvailableProductsToSale = exports.listAvailableProductsToUpdate = exports.getStuffMainMenuOptions = void 0;
const moment_1 = __importDefault(require("moment"));
const types_1 = require("../lib/types");
const api_1 = require("../api");
const whatsAppUtils_1 = require("../lib/utils/whatsAppUtils");
const constant_1 = require("../lib/utils/constant");
const isEnglish = true;
const getStuffMainMenuOptions = (resData, user, showSuccessChanged) => {
    if (isEnglish) {
        resData.replyMessage = showSuccessChanged ?
            `Venta exitosa!
        
        ${user.workInfo.isWorking ? '1️⃣ - Terminar de trabajar ⛔️🙅‍♂️⛔️' : '1️⃣ - Empezar a trabajar  🟢🧰⚒'}
        2️⃣ - Actualizar stock
        3️⃣ - Ver su informacion
        4️⃣ - Venta rapida`
            :
                `Hola ${user === null || user === void 0 ? void 0 : user.name} 🙋🏻, bienvenido al pokemenú de Ditto Farm
        
        ${user.workInfo.isWorking ? '1️⃣ - Terminar de trabajar ⛔️🙅‍♂️⛔️' : '1️⃣ - Empezar a trabajar  🟢🧰⚒'}
        2️⃣ - Actualizar stock
        3️⃣ - Ver su informacion
        4️⃣ - Venta rapida`;
    }
    else {
        resData.replyMessage = showSuccessChanged ?
            `Venta exitosa!

        ${user.workInfo.isWorking ? '1️⃣ - Terminar de trabajar ⛔️🙅‍♂️⛔️' : '1️⃣ - Empezar a trabajar  🟢🧰⚒'}
        2️⃣ - Actualizar stock
        3️⃣ - Ver su informacion
        4️⃣ - Venta rapida`
            :
                `Hola ${user === null || user === void 0 ? void 0 : user.name} 🙋🏻, bienvenido al pokemenú de Ditto Farm
        
        ${user.workInfo.isWorking ? '1️⃣ - Terminar de trabajar ⛔️🙅‍♂️⛔️' : '1️⃣ - Empezar a trabajar  🟢🧰⚒'}
        2️⃣ - Actualizar stock
        3️⃣ - Ver su informacion
        4️⃣ - Venta rapida`;
    }
    resData.trigger = types_1.TriggerStaffSteps.ALL_CATEGORIES_ANSWER;
    return resData;
};
exports.getStuffMainMenuOptions = getStuffMainMenuOptions;
const listAvailableProductsToUpdate = (products) => `*Selecciona el producto que desea actualizar el stock:*

${products.map((product, i) => (`${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} - ${(0, exports.getProductName)(product.name)}\n`)).join('')}
`;
exports.listAvailableProductsToUpdate = listAvailableProductsToUpdate;
const listAvailableProductsToSale = (products) => `*Selecciona el producto que desea vender:*

${products.map((product, i) => (`${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} - ${(0, exports.getProductName)(product.name)}\n`)).join('')}
`;
exports.listAvailableProductsToSale = listAvailableProductsToSale;
// *Por favor ingresá un número entre el 1 y el ${products.length} para actualizar su stock*
const listAvailableProductsToUpdateAsInvalid = (products) => `*Numero incorrecto! Apreta el boton del producto a actualizar:*

${products.map((product, i) => (`${(0, whatsAppUtils_1.getEmojiNumber)(i + 1)} - ${(0, exports.getProductName)(product.name)}\n`)).join('')}
`;
exports.listAvailableProductsToUpdateAsInvalid = listAvailableProductsToUpdateAsInvalid;
// *Por favor ingresá un número entre el 1 y el ${products.length} para actualizar su stock*
const getNewStockOfProduct = (productName) => `Ingrese la cantidad nueva de ${productName}`;
exports.getNewStockOfProduct = getNewStockOfProduct;
const noOptionFound = () => `No encontramos la opción ingresada, intente nuevamente`;
exports.noOptionFound = noOptionFound;
const getAmountOfProductToSell = (productName) => `Ingrese la cantidad a vender de ${productName}`;
exports.getAmountOfProductToSell = getAmountOfProductToSell;
const getProductName = (productName) => {
    // 🍅🍆🥦🥕🥬🫑🧄🧅🪺   🔁❌ 💲💳
    if (productName.toLocaleLowerCase().includes('frutilla')) {
        return `🍓 ${productName}`;
    }
    else if (productName.toLocaleLowerCase().includes('maple')) {
        return `🥚 ${productName}`;
    }
    else if (productName.toLocaleLowerCase().includes('6 huevos')) {
        return `🥚 ${productName}`;
    }
    return productName;
};
exports.getProductName = getProductName;
// export const getChangeWorkingState = async (resData: any, user: IUser) => {
//     return resData;
// };
const getStuffWorkingInfo = (resData, user) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const h = ((_a = user.workInfo) === null || _a === void 0 ? void 0 : _a.totalWorkingMinutesPerWeek) / 60 | 0;
    const m = ((_b = user.workInfo) === null || _b === void 0 ? void 0 : _b.totalWorkingMinutesPerWeek) % 60 | 0;
    const subtotalSalario = Number((_c = user.workInfo) === null || _c === void 0 ? void 0 : _c.totalWorkingMinutesPerWeek) / 60 * Number((_d = user.workInfo) === null || _d === void 0 ? void 0 : _d.ratePerHour);
    // const pendingTasks = user?.tasks?.filter((task: any) => (task.startDate.length === 0 && task.finishDate.length === 0 && task.isDone === false) || task.isRepetitived)
    // const inProgressTasks = user?.tasks?.filter((task: any) => (task.startDate.length > 1 && task.finishDate.length === 0));
    resData.replyMessage =
        `Usted se encuentra: ${((_e = user.workInfo) === null || _e === void 0 ? void 0 : _e.isWorking) ? '*Chambeando*' : '*Vagando*'}
💵🕝Salario por hora $${(_g = (_f = user.workInfo) === null || _f === void 0 ? void 0 : _f.ratePerHour) === null || _g === void 0 ? void 0 : _g.toFixed(2)}
Salario subtotal: $${subtotalSalario}
Salario adelantado: $${(_h = user.workInfo) === null || _h === void 0 ? void 0 : _h.advancedSalaryPaid}
💵Salario final: $${(_k = (_j = user.workInfo) === null || _j === void 0 ? void 0 : _j.totalSalaryToPayWeekly) === null || _k === void 0 ? void 0 : _k.toFixed(2)}
⌛️Horas trabajadas: ${h}:${Number(m) >= 9 ? m : '0' + m} hs.`;
    resData.trigger = types_1.TriggerStaffSteps.STAFF_ALL_CATEGORIES;
    return resData;
};
exports.getStuffWorkingInfo = getStuffWorkingInfo;
const stopWorking = (user) => __awaiter(void 0, void 0, void 0, function* () {
    user.workInfo.isWorking = false;
    user.workInfo.stoppedWorkTime = new Date().toLocaleString('en-US', { timeZone: constant_1.timeZone });
    const startedWorkTime = (0, moment_1.default)(new Date(user.workInfo.startedWorkTime));
    const stoppedWorkTime = (0, moment_1.default)(new Date(user.workInfo.stoppedWorkTime));
    const workedInMinutes = stoppedWorkTime.diff(startedWorkTime, 'minutes');
    const ratePerMinute = user.workInfo.ratePerHour / 60;
    user.workInfo.totalWorkingMinutesPerWeek += workedInMinutes;
    user.workInfo.totalSalaryToPayWeekly = Number(user.workInfo.totalWorkingMinutesPerWeek) * Number(ratePerMinute) - Number(user.workInfo.advancedSalaryPaid);
    yield (0, api_1.updateUserWorkInfoMutation)(user, `finished working.`);
});
exports.stopWorking = stopWorking;
const startWorking = (user) => __awaiter(void 0, void 0, void 0, function* () {
    if (!user.workInfo)
        user.workInfo = {
            stoppedWorkTime: '',
            startedWorkTime: '',
            ratePerHour: 0,
            totalWorkingMinutesPerWeek: 0,
            totalSalaryToPayWeekly: 0,
            advancedSalaryPaid: 0,
            isWorking: false,
            taskRelated: null
        };
    user.workInfo.isWorking = true;
    user.workInfo.startedWorkTime = new Date().toLocaleString('en-US', { timeZone: constant_1.timeZone });
    user.workInfo.stoppedWorkTime = null;
    yield (0, api_1.updateUserWorkInfoMutation)(user, `started working.`);
});
exports.startWorking = startWorking;
