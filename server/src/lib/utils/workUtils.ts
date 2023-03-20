import moment from "moment";
import { updateUserWorkInfoMutation } from "../../api";
import { IUser, Plant, TriggerGrowerSteps, TriggerStaffSteps } from "../types";
import { getButtons, getListButtons, getSectionWith } from "./whatsAppUtils";

export const getGrowerSensorList = (resData: any, user: IUser, plant: Plant, trigger: TriggerGrowerSteps, title: string, buttonText: string) => {
    
//     lectura: (desconectado/20% humedad)
// sestear minima/maxima (warn whatsapp),
//         Asociar relay: (“nombre del relay asociado”/ “no hay relay asociado, asocial uno“)
    
    
    const menuRows: any = [{
            title: 'Configurar alerta maxima',
            description: 'Recibis un whatsapp cuando sobrepase este limite. Code: 1A',
        }, {
            title: 'Configurar alerta minima',
            description: 'Recibis un whatsapp cuando baje de este limite. Code: 1B',
        }, {
            title: 'Asociar relay',
            description: '. Code: 1C',
        }, {
            title: 'Prender relay',
            description: 'Recibis un whatsapp cuando sobrepase este limite. Code: 1D',
        }, {
            title: 'Apagar relay',
            description: 'Recibis un whatsapp cuando sobrepase este limite. Code: 1E',
        }];

    const listSections = getSectionWith('Configuracion', menuRows);
 

     resData.replyMessage = getListButtons(
         `Humedad del suelo: ${plant.soilHumidity1}
Relay 1 is: ${plant.isRelayOneOn ? 'ON' : 'OFF'}
Relay 2 is: ${plant.isRelayTwoOn ? 'ON' : 'OFF'}
Relay 3 is: ${plant.isRelayThirdOn ? 'ON' : 'OFF'}
Relay 4 is: ${plant.isRelayFourthOn ? 'ON' : 'OFF'}
Modo: ${plant.soilHumiditySettings1.mode || 'Ninguno'}
Relay asociado: ${plant.soilHumiditySettings1.relayOneIdRelated || 'Ninguno' }
RelayOneWorking : ${plant.soilHumiditySettings1.relayOneWorking ? 'ON' : 'OFF' }
Relay One Automated Started Time: ${plant.soilHumiditySettings1.relayOneAutomatedStartedTime || 'Undefined'}
Relay Two Automated Started Time: ${plant.soilHumiditySettings1.relayTwoAutomatedStartedTime || 'Undefined'}
Relay One Automated Time To Run: ${plant.soilHumiditySettings1.relayOneAutomatedTimeToRun || 'Undefined'}
Relay Two Automated Time To Run: ${plant.soilHumiditySettings1.relayTwoAutomatedTimeToRun || 'Undefined'}
    `,
        'Editar configuracion',
        listSections,
        title,
         '');

    resData.trigger = trigger;

    return resData;
};

export const getGrowerMainMenuButtons = (resData: any, user: IUser, plant: Plant, trigger: TriggerGrowerSteps, title: string, buttonText: string) => {
    const buttons: any = [{ body: '1 - Editar configuración' }, { body: '2 - Agregar sensor' }];

    const bodyContent =
        `Controller ID: ${plant.controllerId}
Humedad del suelo: ${plant.soilHumidity1}
Humedad del aire: ${plant.airHumidity}
Temperatura: ${plant.tempeture}
Relay 1: ${plant.isRelayOneOn}
Relay 2: ${plant.isRelayTwoOn}
Relay 3: ${plant.isRelayThirdOn}
Relay 4: ${plant.isRelayFourthOn}
        `;

        resData.replyMessage = getButtons(
        bodyContent,
        buttons,
        `Detalles de su ${plant.name}`,
        ''
    );

    resData.trigger = trigger;

    return resData;
};

const getPlantsRowsFrom = (items: any) => items.map((item: any, idx: number) => {
    return {
        title: idx + 1 + ' - ' + item.name,
        description: item.meta_description,
        id: item.id
    }
});


export const getStuffMainMenuButtons = (resData: any, user: IUser) => {
    
    const buttons: any = user.workInfo.isWorking
        ? [{ body: '1 - Terminar de trabajar ⛔️🙅‍♂️⛔️' }]
        : [{ body: '1 - Empezar a trabajar  🟢🧰⚒' }];

    const h = user.workInfo?.totalWorkingMinutesPerWeek / 60 | 0;
    const m = user.workInfo?.totalWorkingMinutesPerWeek % 60 | 0;
    const subtotalSalario = Number(user.workInfo?.totalWorkingMinutesPerWeek) / 60 * Number(user.workInfo?.ratePerHour);
    // const pendingTasks = user?.tasks?.filter((task: any) => (task.startDate.length === 0 && task.finishDate.length === 0 && task.isDone === false) || task.isRepetitived)
    // const inProgressTasks = user?.tasks?.filter((task: any) => (task.startDate.length > 1 && task.finishDate.length === 0));
    
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
