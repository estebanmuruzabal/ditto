const Path = require('path')
const StormDB = require("stormdb");
const date = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });
const ExcelJS = require('exceljs');
const fs = require('fs');

const saveMessageJson = (message: string, trigger = null, number: string) => new Promise( async(resolve,reject) =>{
    try {
        const pathExcel = `${__dirname}/../controllers/chats/${number}.xlsx`;
        // console.log('pathExcel', pathExcel)
        // console.log('exists?:', fs.existsSync(pathExcel), pathExcel)
        let workbook = new ExcelJS.Workbook();
        let worksheet: any;
        if (fs.existsSync(pathExcel)) {

            workbook.xlsx.readFile(pathExcel)
                .then(async () => {
                    
                    var worksheet = workbook.getWorksheet("My Sheet");
                    worksheet.addRow({ message, date, trigger });
                    await workbook.xlsx.writeFile(pathExcel);
                    console.log('Updated doc with:', message, date, 'STEP_0_3')
                    resolve('Saved')
                })
        } else {
            worksheet = workbook.addWorksheet("My Sheet");

            worksheet.columns = [
                {header: 'Message', key: 'message'},
                {header: 'Date', key: 'date'}, 
                {header: 'Trigger', key: 'trigger'}
                ];

            worksheet.addRow({ message, date, trigger: 'STEP_0_3' });
            await workbook.xlsx.writeFile(pathExcel);
            console.log('Created new doc with:', message, date, 'STEP_0_3')
            resolve('Saved')
        }

        // const engine = new StormDB.localFileEngine( Path.join(__dirname, `/../controllers/chats/${number}.json`) );
        // const db = new StormDB(engine);
        // // set default db value if db is empty
        // db.default({ messages: [] });
        // // add new users entry
        // db.get("messages").push({ message, date, trigger });
        // db.save();
        // resolve('Saved')
    } catch (error) {
        console.log(error)
        reject(error)
    }
})

export = { saveMessageJson };