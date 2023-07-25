import { RelaysIds, SensorsTypes } from "./constant";

export const getSettingTypeText = (settingType: SensorsTypes) => {
    switch (settingType) {
        case `${SensorsTypes.SOIL_HUMIDITY}_1`:
        case `${SensorsTypes.SOIL_HUMIDITY}_2`:
        case `${SensorsTypes.SOIL_HUMIDITY}_3`:
            return 'SENSOR HUMEDAD EN TIERRA'
        case `${SensorsTypes.LIGHT}_1`:
        case `${SensorsTypes.LIGHT}_2`:
            return 'SENSOR DE LUZ';
        case `${SensorsTypes.PLUG}_1`:
        case `${SensorsTypes.PLUG}_2`:
        case `${SensorsTypes.PLUG}_3`:
            return 'ENCHUFE INTELIGENTE';
        case `${SensorsTypes.DISTANCE}_1`:
        case `${SensorsTypes.DISTANCE}_2`:
        case `${SensorsTypes.DISTANCE}_3`:
             return 'SENSOR DE DISTANCIA';
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