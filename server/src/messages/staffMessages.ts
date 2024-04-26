import moment from "moment";
import { IUser, TriggerStaffSteps } from "../lib/types";
import { updateUserWorkInfoMutation } from "../api";
import { getEmojiNumber } from "../lib/utils/whatsAppUtils";
import { timeZone } from "../lib/utils/constant";
const isEnglish = true;
export const getStuffMainMenuOptions = (resData: any, user: IUser, showSuccessChanged?: boolean) => {    
    if (isEnglish) {
        resData.replyMessage = showSuccessChanged ?
        `Venta exitosa!
        
        ${user.workInfo.isWorking ? '1️⃣ - Terminar de trabajar ⛔️🙅‍♂️⛔️' : '1️⃣ - Empezar a trabajar  🟢🧰⚒'}
        2️⃣ - Actualizar stock
        3️⃣ - Ver su informacion
        4️⃣ - Venta rapida`
        :
        `Hola ${user?.name} 🙋🏻, bienvenido al pokemenú de Ditto Farm
        
        ${user.workInfo.isWorking ? '1️⃣ - Terminar de trabajar ⛔️🙅‍♂️⛔️' : '1️⃣ - Empezar a trabajar  🟢🧰⚒'}
        2️⃣ - Actualizar stock
        3️⃣ - Ver su informacion
        4️⃣ - Venta rapida`;
    } else {
        resData.replyMessage = showSuccessChanged ?
        `Venta exitosa!

        ${user.workInfo.isWorking ? '1️⃣ - Terminar de trabajar ⛔️🙅‍♂️⛔️' : '1️⃣ - Empezar a trabajar  🟢🧰⚒'}
        2️⃣ - Actualizar stock
        3️⃣ - Ver su informacion
        4️⃣ - Venta rapida`
        :
        `Hola ${user?.name} 🙋🏻, bienvenido al pokemenú de Ditto Farm
        
        ${user.workInfo.isWorking ? '1️⃣ - Terminar de trabajar ⛔️🙅‍♂️⛔️' : '1️⃣ - Empezar a trabajar  🟢🧰⚒'}
        2️⃣ - Actualizar stock
        3️⃣ - Ver su informacion
        4️⃣ - Venta rapida`;
    }

    resData.trigger = TriggerStaffSteps.ALL_CATEGORIES_ANSWER;
    return resData;
};


export const listAvailableProductsToUpdate = (products: any) =>  
`*Selecciona el producto que desea actualizar el stock:*

${products.map((product: any, i: number) => (`${getEmojiNumber(i + 1)} - ${getProductName(product.name)}\n`)).join('')}
`;

export const listAvailableProductsToSale = (products: any) =>  
`*Selecciona el producto que desea vender:*

${products.map((product: any, i: number) => (`${getEmojiNumber(i + 1)} - ${getProductName(product.name)}\n`)).join('')}
`;
// *Por favor ingresá un número entre el 1 y el ${products.length} para actualizar su stock*

export const listAvailableProductsToUpdateAsInvalid = (products: any) =>  
`*Numero incorrecto! Apreta el boton del producto a actualizar:*

${products.map((product: any, i: number) => (`${getEmojiNumber(i + 1)} - ${getProductName(product.name)}\n`)).join('')}
`;
// *Por favor ingresá un número entre el 1 y el ${products.length} para actualizar su stock*

export const getNewStockOfProduct = (productName: string) =>  `Ingrese la cantidad nueva de ${productName}`;

export const noOptionFound = () =>  `No encontramos la opción ingresada, intente nuevamente`;

export const getAmountOfProductToSell = (productName: string) =>  `Ingrese la cantidad a vender de ${productName}`;

export const getProductName = (productName: string) => {
    // 🍅🍆🥦🥕🥬🫑🧄🧅🪺   🔁❌ 💲💳
    if (productName.toLocaleLowerCase().includes('frutilla')) {
        return `🍓 ${productName}`
    } else if (productName.toLocaleLowerCase().includes('maple')) {
        return `🥚 ${productName}`
    } else if (productName.toLocaleLowerCase().includes('6 huevos')) {
        return `🥚 ${productName}`
    }

    return productName;
};

// export const getChangeWorkingState = async (resData: any, user: IUser) => {
   

//     return resData;
// };


export const getStuffWorkingInfo = (resData: any, user: IUser) => {
    
    const h = user.workInfo?.totalWorkingMinutesPerWeek / 60 | 0;
    const m = user.workInfo?.totalWorkingMinutesPerWeek % 60 | 0;
    const subtotalSalario = Number(user.workInfo?.totalWorkingMinutesPerWeek) / 60 * Number(user.workInfo?.ratePerHour);
    // const pendingTasks = user?.tasks?.filter((task: any) => (task.startDate.length === 0 && task.finishDate.length === 0 && task.isDone === false) || task.isRepetitived)
    // const inProgressTasks = user?.tasks?.filter((task: any) => (task.startDate.length > 1 && task.finishDate.length === 0));
    
    resData.replyMessage = 
`Usted se encuentra: ${user.workInfo?.isWorking ? '*Chambeando*' : '*Vagando*'}
💵🕝Salario por hora $${user.workInfo?.ratePerHour?.toFixed(2)}
Salario subtotal: $${subtotalSalario}
Salario adelantado: $${user.workInfo?.advancedSalaryPaid}
💵Salario final: $${user.workInfo?.totalSalaryToPayWeekly?.toFixed(2)}
⌛️Horas trabajadas: ${h}:${Number(m) >= 9 ? m : '0' + m} hs.`;

    resData.trigger = TriggerStaffSteps.STAFF_ALL_CATEGORIES;
    return resData;
};

export const stopWorking = async (user: any) => {

    user.workInfo.isWorking = false;
    user.workInfo.stoppedWorkTime = new Date().toLocaleString('en-US', { timeZone });

    const startedWorkTime = moment(new Date(user.workInfo.startedWorkTime));
    const stoppedWorkTime = moment(new Date(user.workInfo.stoppedWorkTime));

    const workedInMinutes = stoppedWorkTime.diff(startedWorkTime, 'minutes');
    const ratePerMinute = user.workInfo.ratePerHour / 60;

    user.workInfo.totalWorkingMinutesPerWeek += workedInMinutes;
    user.workInfo.totalSalaryToPayWeekly = Number(user.workInfo.totalWorkingMinutesPerWeek) * Number(ratePerMinute) - Number(user.workInfo.advancedSalaryPaid);
    await updateUserWorkInfoMutation(user, `finished working.`);
    };

  export const startWorking = async (user: IUser) => {
      if (!user.workInfo) user.workInfo = {
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
    user.workInfo.startedWorkTime = new Date().toLocaleString('en-US', { timeZone });
    user.workInfo.stoppedWorkTime = null;

    await updateUserWorkInfoMutation(user, `started working.`);
  };
