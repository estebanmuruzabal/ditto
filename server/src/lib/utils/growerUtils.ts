import { IUser, Plant, TriggerGrowerSteps } from "../types";
import { getButtons, getListButtons, getSectionWith } from './whatsAppUtils';

export const getGrowerSensorList = (resData: any, user: IUser, plant: Plant, trigger: TriggerGrowerSteps, title: string, buttonText: string) => {
    
//     lectura: (desconectado/20% humedad)
// sestear minima/maxima (warn whatsapp),
//         Asociar relay: (“nombre del relay asociado”/ “no hay relay asociado, asocial uno“) 
    
    
    const menuRows = [{
            title: '1 - Configurar alerta maxima',
            description: 'Recibis un whatsapp cuando sobrepase este limite',
        }, {
            title: '2 - Configurar alerta minima',
            description: 'Recibis un whatsapp cuando baje de este limite',
        }, {
            title: '3 - Asociar relay',
            description: '',
        }, {
            title: '4 - Prender relay',
            description: 'Recibis un whatsapp cuando sobrepase este limite',
        }, {
            title: '5 - Apagar relay',
            description: 'Recibis un whatsapp cuando sobrepase este limite',
        }];
        
    const listSections = getSectionWith('Configuracion', menuRows);
 
    const bodyContent = `Humedad del suelo: ${plant.soilHumidity}
    Alertas: ${plant.soilHumiditySettings.manual === "true" ? 'OFF' : 'ON' }
    Relay asociado: ${plant.soilHumiditySettings.relayIdRelated || 'Ninguno' }
    
    `;

     resData.replyMessage = getListButtons(
            'bodyContent',
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
Humedad del suelo: ${plant.soilHumidity}
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
