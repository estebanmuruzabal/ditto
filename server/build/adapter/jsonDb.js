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
const Path = require('path');
const StormDB = require("stormdb");
const date = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });
const ExcelJS = require('exceljs');
const fs = require('fs');
const saveMessageJson = (message, trigger = null, number) => new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pathExcel = `${__dirname}/../controllers/chats/${number}.xlsx`;
        // console.log('pathExcel', pathExcel)
        // console.log('exists?:', fs.existsSync(pathExcel), pathExcel)
        let workbook = new ExcelJS.Workbook();
        let worksheet;
        if (fs.existsSync(pathExcel)) {
            workbook.xlsx.readFile(pathExcel)
                .then(() => __awaiter(void 0, void 0, void 0, function* () {
                var worksheet = workbook.getWorksheet("My Sheet");
                worksheet.addRow({ message, date, trigger });
                yield workbook.xlsx.writeFile(pathExcel);
                console.log('Updated doc with:', message, date, 'STEP_0_3');
                resolve('Saved');
            }));
        }
        else {
            worksheet = workbook.addWorksheet("My Sheet");
            worksheet.columns = [
                { header: 'Message', key: 'message' },
                { header: 'Date', key: 'date' },
                { header: 'Trigger', key: 'trigger' }
            ];
            worksheet.addRow({ message, date, trigger: 'STEP_0_3' });
            yield workbook.xlsx.writeFile(pathExcel);
            console.log('Created new doc with:', message, date, 'STEP_0_3');
            resolve('Saved');
        }
        // const engine = new StormDB.localFileEngine( Path.join(__dirname, `/../controllers/chats/${number}.json`) );
        // const db = new StormDB(engine);
        // // set default db value if db is empty
        // db.default({ messages: [] });
        // // add new users entry
        // db.get("messages").push({ message, date, trigger });
        // db.save();
        // resolve('Saved')
    }
    catch (error) {
        console.log(error);
        reject(error);
    }
}));
module.exports = { saveMessageJson };
