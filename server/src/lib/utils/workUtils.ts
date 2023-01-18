import moment from "moment";
import { updateUserWorkInfoMutation } from "../../api";
import { IUser, TriggerStaffSteps } from "../types";
import { getButtons } from "./shoppingUtils";

export const getStuffMainMenuButtons = (resData: any, user: IUser) => {
    
    const buttons: any = user.workInfo.isWorking
        ? [{ body: '1 - Terminar de trabajar ⛔️🙅‍♂️⛔️' }]
        : [{ body: '1 - Empezar a trabajar  🟢🧰⚒' }];

    const h = user.workInfo?.totalWorkingMinutesPerWeek / 60 | 0;
    const m = user.workInfo?.totalWorkingMinutesPerWeek % 60 | 0;
    const subtotalSalario = Number(user.workInfo?.totalWorkingMinutesPerWeek) / 60 * Number(user.workInfo?.ratePerHour);
    const pendingTasks = user?.tasks?.filter((task: any) => (task.startDate.length === 0 && task.finishDate.length === 0 && task.isDone === false) || task.isRepetitived)
    const inProgressTasks = user?.tasks?.filter((task: any) => (task.startDate.length > 1 && task.finishDate.length === 0));
    
    resData.replyMessage = getButtons(
        `Usted se encuentra: ${user.workInfo?.isWorking ? '*Chambeando*' : '*Vagando*'}
💵🕝Salario por hora $${user.workInfo?.ratePerHour?.toFixed(2)}
Salario subtotal: $${subtotalSalario}
Salario adelantado: $${user.workInfo?.advancedSalaryPaid}
💵Salario final: $${user.workInfo?.totalSalaryToPayWeekly?.toFixed(2)}
⌛️Horas trabajadas: ${h}:${Number(m) >= 9 ? m : '0' + m} hs.`,
        buttons,
        `Hola ${user?.name} 🙋🏻, bienvenido al pokemenú de Ditto Farm`,
        'Seleccione una opción:'
    );

    resData.trigger = TriggerStaffSteps.ALL_CATEGORIES_ANSWER;
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
    console.log('user stop work:::', user)
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
    console.log('user start work:::', user)
    await updateUserWorkInfoMutation(user, `started working.`);
  };
