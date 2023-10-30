import { RelaysIds, SensorsTypes } from "./constant";

export const getSettingTypeText = (settingType: SensorsTypes) => {
    switch (settingType) {
        case `${SensorsTypes.SOIL_HUMIDITY}_1`: return 'MODULE HUMEDAD EN TIERRA 1';
        case `${SensorsTypes.SOIL_HUMIDITY}_2`: return 'MODULE HUMEDAD EN TIERRA 2';
        case `${SensorsTypes.SOIL_HUMIDITY}_3`: return 'MODULE HUMEDAD EN TIERRA 3';
        case `${SensorsTypes.LIGHT}_1`: return 'MODULE DE LUZ 1';
        case `${SensorsTypes.LIGHT}_2`: return 'MODULE DE LUZ 2';
        case `${SensorsTypes.PLUG}_1`: return 'ENCHUFE INTELIGENTE 1';
        case `${SensorsTypes.PLUG}_2`: return 'ENCHUFE INTELIGENTE 2';
        case `${SensorsTypes.PLUG}_3`: return 'ENCHUFE INTELIGENTE 3';
        case `${SensorsTypes.PLUG}_4`: return 'ENCHUFE INTELIGENTE 4';
        case `${SensorsTypes.DISTANCE}_1`: return 'MODULE DE DISTANCIA 1';
        case `${SensorsTypes.DISTANCE}_2`: return 'MODULE DE DISTANCIA 2';
        case `${SensorsTypes.DISTANCE}_3`: return 'MODULE DE DISTANCIA 3';
        default:
            break;
    }
}

export const getRelayNameText = (relay: RelaysIds) => {
    switch (relay) {
        case RelaysIds.RELAY_ONE: return 'Enchufe 1';
        case RelaysIds.RELAY_TWO: return 'Enchufe 2';
        case RelaysIds.RELAY_THIRD: return 'Enchufe 3';
        case RelaysIds.RELAY_FOURTH: return 'Enchufe 4';
        default:
            break;
    }
}


export const getDayShortName = (day: number) => {
    switch (day) {
        case 1: return 'LUN';
        case 2: return 'MAR';
        case 3: return 'MIE';
        case 4: return 'JUE';
        case 5: return 'VIE';
        case 6: return 'SAB';
        case 0: return 'DOM';
        default:
            break;
    }
}