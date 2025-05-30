import { RelaysIds, SensorsTypes } from "./constant";

export const getSettingTypeText = (settingType: SensorsTypes) => {
    switch (settingType) {
        case `${SensorsTypes.SOIL_HUMIDITY}_1`: return 'HUMEDAD TIERRA 1';
        case `${SensorsTypes.SOIL_HUMIDITY}_2`: return 'HUMEDAD TIERRA 2';
        case `${SensorsTypes.SOIL_HUMIDITY}_3`: return 'HUMEDAD TIERRA 3';
        case `${SensorsTypes.SOIL_HUMIDITY}_4`: return 'HUMEDAD TIERRA 4';
        case `${SensorsTypes.LIGHT}_1`: return 'LUZ 1';
        case `${SensorsTypes.LIGHT}_2`: return 'LUZ 2';
        case `${SensorsTypes.LIGHT}_3`: return 'LUZ 3';
        case `${SensorsTypes.LIGHT}_4`: return 'LUZ 4';
        case `${SensorsTypes.C02}_1`: return 'CO2';
        case `${SensorsTypes.C02}_2`: return 'CO2 1';
        case `${SensorsTypes.PLUG}_1`: return 'ENCHUFE 1';
        case `${SensorsTypes.PLUG}_2`: return 'ENCHUFE 2';
        case `${SensorsTypes.PLUG}_3`: return 'ENCHUFE 3';
        case `${SensorsTypes.PLUG}_4`: return 'ENCHUFE 4';
        case `${SensorsTypes.DISTANCE}_1`: return 'DISTANCIA';
        case `${SensorsTypes.DISTANCE}_2`: return 'DISTANCIA 2';
        case `${SensorsTypes.DISTANCE}_3`: return 'DISTANCIA 3';
        case `${SensorsTypes.TEMPETURE}_1`: return 'TEMPERATURA AIRE';
        case `${SensorsTypes.HUMIDITY}_1`: return 'HUMEDAD AIRE';
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
        case 1: return 'L';
        case 2: return 'M';
        case 3: return 'M';
        case 4: return 'J';
        case 5: return 'V';
        case 6: return 'S';
        case 0: return 'D';
        default:
            break;
    }
}