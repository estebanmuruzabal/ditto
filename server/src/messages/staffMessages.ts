import moment from "moment";
import { IUser, TriggerStaffSteps } from "../lib/types";
import { updateUserWorkInfoMutation } from "../api";

export const getStuffMainMenuOptions = (resData: any, user: IUser) => {
    
    resData.replyMessage = 
    `Hola ${user?.name} 🙋🏻, bienvenido al pokemenú de Ditto Farm,
    
    Seleccione una opcion:

    ${user.workInfo.isWorking ?  '1 - Terminar de trabajar ⛔️🙅‍♂️⛔️' : '1 - Empezar a trabajar  🟢🧰⚒'}
    2 - Actualizar stock
    3 - Ver su informacion
    `
        // empezar a trabajar/terminar de trabajar
        //  agregar stock de verduras (kg de frutilla p/ venta y no venta, cantidad de huevos p/venta y no venta) (que reciba whatsapp con audio pidiendo cantidades)
    resData.trigger = TriggerStaffSteps.ALL_CATEGORIES_ANSWER;
    return resData;
};

export const listAvailableProductsToUpdate = (products: any) =>  
`*Apreta el boton del producto a actualizar:*

${products.map((product: any, i: number) => (`${i+1} - ${getProductName(product.name)}\n`)).join('')}
*Por favor ingresá un número entre el 1 y el ${products.length} para actualizar su stock*
`;

export const listAvailableProductsToUpdateAsInvalid = (products: any) =>  
`*Numero incorrecto! Apreta el boton del producto a actualizar:*

${products.map((product: any, i: number) => (`${i+1} - ${getProductName(product.name)}\n`)).join('')}
*Por favor ingresá un número entre el 1 y el ${products.length} para actualizar su stock*
`;

export const getNewStockOfProduct = (productName: string) =>  
`Ingrese la cantidad nueva de ${productName}`;

export const getProductName = (productName: string) => {
    if (productName.toLocaleLowerCase().includes('frutilla') && productName.toLocaleLowerCase().includes('1/4')) {
        return `Icono frutilla ${productName}`
    } else if (productName.toLocaleLowerCase().includes('frutilla') && productName.toLocaleLowerCase().includes('1 kg')) {
        return `Icono frutilla ${productName}`
    } else if (productName.toLocaleLowerCase().includes('maple')) {
        return `Icono maple huevo ${productName}`
    } else if (productName.toLocaleLowerCase().includes('6 huevos')) {
        return `Icono 6 huevos ${productName}`
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
    user.workInfo.stoppedWorkTime = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });

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
    user.workInfo.startedWorkTime = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });
    user.workInfo.stoppedWorkTime = null;

    user.workInfo.ratePerHour = 375;
    await updateUserWorkInfoMutation(user, `started working.`);
  };
