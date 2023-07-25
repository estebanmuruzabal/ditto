/************ CONSTANTS ***********/
export const CURRENCY = '$';


export const PICKUP_GUEMES_DELIVERY_METHOD = 'Lo busco en el centro';
export const PICKUP_GRANJA_DELIVERY_METHOD = 'Lo busco en la granja';
export const CUSTOMER_ADDRESS_DELIVERY_METHOD = 'Enviámelo a casa. ($300)';

export const CASH_PAYMENT_OPTION = 'cash';
export const CC_PAYMENT_OPTION = 'cc';
export const BANK_TRANSFER_PAYMENT_OPTION = 'bank_transfer';

export const BANK_TRANSFER_ALIAS = 'dittofarm';
export const BANK_TRANSFER_CBU = '0000003100030458924685';
export const COMPANY_EMAIL = 'dittofarmresistencia@gmail.com';

export enum SensorsTypes {
    SOIL_HUMIDITY = 'SOIL_HUMIDITY',
    LIGHT = 'LIGHT',
    DISTANCE = 'DISTANCE',
    PLUG = 'PLUG',
    HUMIDITY_TEMPETURE = 'HUMIDITY_TEMPETURE',
}

export enum RelaysIds {
    RELAY_ONE = 'isRelayOneOn',
    RELAY_TWO = 'isRelayTwoOn',
    RELAY_THIRD = 'isRelayThirdOn',
    RELAY_FOURTH = 'isRelayFourthOn',
}

export enum HumiditySensorMode {
    IRRIGATE_ON_DEMAND = 'IRRIGATE_ON_DEMAND',
    IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND = 'IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND',
    SEEDS_POOL_IRRIGATION = 'SEEDS_POOL_IRRIGATION',
    MANUAL = 'MANUAL',
    SCHEDULE = 'SCHEDULE',
    NONE = 'NONE'
}

export enum DistanceMode {
    ASSOCIATED_MIN_MAX = 'ASSOCIATED_MIN_MAX',
    NONE = 'NONE'
}

export enum PlugMode {
    CALENDAR = 'CALENDAR',
    MANUAL = 'MANUAL',
    NONE = 'NONE'
}

export enum PlugSensorMode {
    MANUAL = 'MANUAL',
    SCHEDULE = 'SCHEDULE',
    ASSOCIATED = 'ASSOCIATED',
    NONE = 'NONE'
}

export enum CommonMode {
    NONE = 'NONE'
}

export enum LightSensorModes {
    MANUAL = 'MANUAL',
    SCHEDULE = 'SCHEDULE',
    SMART_SCHEDULE = 'SMART_SCHEDULE',
    NONE = 'NONE'
}

export enum WeekDays {
    MONDAY = 'LUNES',
    TUESDAY = 'MARTES',
    WEDNESDAY = 'MIERCOLES',
    THURSDAY = 'JUEVES',
    FRIDAY = 'VIERNES',
    SATURDAY = 'SABADO',
    SUNDAY = 'DOMINGO'
}

export const distanceModeOptions = [
    { value: DistanceMode.ASSOCIATED_MIN_MAX, label: 'Maximos' },
    { value: DistanceMode.NONE, label: 'Ninguno' }
];

export const humidityModeOptions = [
    { value: HumiditySensorMode.SEEDS_POOL_IRRIGATION, label: 'Riego por inmersión' },
    { value: HumiditySensorMode.MANUAL, label: 'Manual' },
    { value: HumiditySensorMode.IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND, label: 'Semi-automático' },
    { value: HumiditySensorMode.IRRIGATE_ON_DEMAND, label: 'Automático' },
    { value: HumiditySensorMode.SCHEDULE, label: 'Calendario de riego' },
    { value: HumiditySensorMode.NONE, label: 'Ninguno' }
];

export const lightModeOptions = [
    { value: LightSensorModes.MANUAL, label: 'Manual' },
    { value: LightSensorModes.SCHEDULE, label: 'Calendario' },
    { value: LightSensorModes.SMART_SCHEDULE, label: 'Calendario inteligente' },
    { value: LightSensorModes.NONE, label: 'Ninguno' }
];

export const manualModeOptions = [
    { value: true, label: 'Prendido' },
    { value: false, label: 'Apagado' }
];

export const fourRelaysOptions = [
    { value: RelaysIds.RELAY_ONE, label: 'Enchufe 1' },
    { value: RelaysIds.RELAY_TWO, label: 'Enchufe 2' },
    { value: RelaysIds.RELAY_THIRD, label: 'Enchufe 3' },
    { value: RelaysIds.RELAY_FOURTH, label: 'Enchufe 4' },
    { value: '', label: 'Desasociar enchufe' }
];

export const eightRelaysOptions = [
    { value: RelaysIds.RELAY_ONE, label: 'Enchufe 1' },
    { value: RelaysIds.RELAY_TWO, label: 'Enchufe 2' },
    { value: RelaysIds.RELAY_THIRD, label: 'Enchufe 3' },
    { value: RelaysIds.RELAY_FOURTH, label: 'Enchufe 4' },
    { value: '', label: 'Desasociar enchufe' }
];