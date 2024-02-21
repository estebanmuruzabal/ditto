/************ CONSTANTS ***********/
export const CURRENCY = '$';

// ditto bot personal variables (change in front and back):


export const PICKUP_GUEMES_DELIVERY_METHOD = 'Lo busco en el centro';
export const PICKUP_GRANJA_DELIVERY_METHOD = 'Lo busco en la granja';
export const CUSTOMER_ADDRESS_DELIVERY_METHOD = 'Enviámelo a casa. ($300)';

export const CASH_PAYMENT_OPTION = 'cash';
export const CC_PAYMENT_OPTION = 'cc';
export const BANK_TRANSFER_PAYMENT_OPTION = 'bank_transfer';

export const BANK_TRANSFER_ALIAS = 'dittofarm';
export const BANK_TRANSFER_CBU = '0000003100030458924685';
export const COMPANY_EMAIL = 'dittofarmresistencia@gmail.com';

export const deliveryMethodCookieKeyName = 'deliveryMethodSaved';

// **************** Delivery CONSTANT Start **************************
export enum DeliveryMethodsConstants {
    PICKUP = 'PICKUP',
    DELIVERY = 'DELIVERY',
}

export const deliverySelectOptions = [
    { value: DeliveryMethodsConstants.PICKUP, label: 'Pickup' },
    { value: DeliveryMethodsConstants.DELIVERY, label: 'Delivery' },
  ];


// **************** Roles CONSTANT Start **************************
export enum Roles {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    MEMBER = 'MEMBER',
    DELIVERY_BOY = 'DELIVERY_BOY',
    CLIENT = 'CLIENT',
    STAFF = 'STAFF',
    GROWER = 'GROWER'
}
export const roleSelectOptions = [
    { value: Roles.ADMIN, label: 'Admin' },
    { value: Roles.MANAGER, label: 'Manager' },
    { value: Roles.MEMBER, label: 'Member' },
    { value: Roles.DELIVERY_BOY, label: 'Delivery boy' },
    { value: Roles.CLIENT, label: 'Client' },
    { value: Roles.GROWER, label: 'Grower' },
    { value: Roles.STAFF, label: 'Staff' },
  ];

  // this should be part of delivery option MODEL, and come from API
  const deliveryAreaPolygon = [
    { lat: 3.1336599385978805, lng: 101.31866455078125 },
    { lat: 3.3091633559540123, lng: 101.66198730468757 },
    { lat: 3.091150714460597,  lng: 101.92977905273438 },
    { lat: 3.1336599385978805, lng: 101.31866455078125 } // last point has to be same as first point
  ];

export enum SensorsTypes {
    SOIL_HUMIDITY = 'SOIL_HUMIDITY',
    LIGHT = 'LIGHT',
    DISTANCE = 'DISTANCE',
    PLUG = 'PLUG',
    HUMIDITY_TEMPETURE = 'HUMIDITY_TEMPETURE',
}
export enum Locales {
    ES = 'es',
    EN = 'en',
}
export const timezones = [
    'America/Argentina/Buenos_Aires',
    'America/Port_of_Spain',
    'America/Eirunepe',
    'America/Rio_Branco',
    'America/Nassau',
    'America/Belize',
    'America/New_York',
    'America/Detroit',
    'America/North_Dakota/Center',
    'America/North_Dakota/New_Salem',
    'America/North_Dakota/Beulah',
    'America/Denver',
    'America/Boise',
    'America/Phoenix',
    'America/Los_Angeles',
] 

export enum RelaysIds {
    RELAY_ONE = 'isRelayOneOn',
    RELAY_TWO = 'isRelayTwoOn',
    RELAY_THIRD = 'isRelayThirdOn',
    RELAY_FOURTH = 'isRelayFourthOn',
}

export enum HumiditySensorMode {
    IRRIGATE_ON_DEMAND = 'IRRIGATE_ON_DEMAND',
    IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND = 'IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND',
    IRRIGATE_SPECIFICT_AMOUNT_WITH_DOUBLE_ACTION = 'IRRIGATE_SPECIFICT_AMOUNT_WITH_DOUBLE_ACTION',
    SEEDS_POOL_IRRIGATION = 'SEEDS_POOL_IRRIGATION',
    MANUAL = 'HUMIDITY_MANUAL',
    SCHEDULE = 'HUMIDITY_SCHEDULE',
    SCHEDULE_DOUBLE_ACTION = 'HUMIDITY_SCHEDULE_DOUBLE_ACTION',
    NONE = 'NONE'
}


// - Accion vacio custom: avisa cuando esta vacio y activa relay asociado x cantidad de tiempo
// - Accion vacio automatico: avisa cuando esta vacio y activa relay asociado hasta llegar al maximo
// - Accion lleno custom: avisa cuando esta lleno y activa relay asociado x cantidad de tiempo
// - Accion lleno automatico: avisa cuando esta lleno y activa relay asociado hasta llegar al minimo
// - Aviso vacio: avisa cuando esta vacio.
// - Aviso lleno: avisa cuando esta lleno.
export enum DistanceMode {
    WHEN_EMPTY_ACTION_CUSTOM = 'WHEN_EMPTY_ACTION_CUSTOM',
    WHEN_EMPTY_ACTION_AUTOMATED = 'WHEN_EMPTY_ACTION_AUTOMATED',
    WHEN_FULL_ACTION_CUSTOM = 'WHEN_FULL_ACTION_CUSTOM',
    WHEN_FULL_ACTION_AUTOMATED = 'WHEN_FULL_ACTION_AUTOMATED',
    MIN_WARNING = 'MIN_WARNING',
    MAX_WARNING = 'MAX_WARNING',
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

export enum LightSensorMode {
    MANUAL = 'LIGHT_MANUAL',
    SCHEDULE = 'LIGHT_SCHEDULE',
    NONE = 'NONE'
}
export const WeekDays = [0, 1, 2, 3, 4, 5, 6];

    // - Accion vacio custom: activa relay asociado x cantidad de tiempo
    // - Accion vacio automatico: avisa cuando esta vacio y activa relay asociado hasta llegar al maximo
    // - Accion lleno custom: avisa cuando esta lleno y activa relay asociado x cantidad de tiempo
    // - Accion lleno automatico: avisa cuando esta lleno y activa relay asociado hasta llegar al minimo
    // - Aviso vacio: avisa cuando esta vacio.
    // - Aviso lleno: avisa cuando esta lleno.
  
export const distanceModeOptions = [
    { value: DistanceMode.WHEN_EMPTY_ACTION_CUSTOM, label: 'Acción custom en mínimos' },
    { value: DistanceMode.WHEN_EMPTY_ACTION_AUTOMATED, label: 'Acción automatico en mínimos' },
    { value: DistanceMode.WHEN_FULL_ACTION_CUSTOM, label: 'Acción custom en máximos' },
    { value: DistanceMode.WHEN_FULL_ACTION_AUTOMATED, label: 'Acción automatico en máximos' },
    { value: DistanceMode.MIN_WARNING, label: 'Aviso en mínimos' },
    { value: DistanceMode.MAX_WARNING, label: 'Aviso en máximos' },
    { value: DistanceMode.NONE, label: 'Ninguno' }
];

export const humidityModeOptions = [
    { value: HumiditySensorMode.SEEDS_POOL_IRRIGATION, label: 'Riego por inmersión' },
    { value: HumiditySensorMode.MANUAL, label: 'Manual' },
    { value: HumiditySensorMode.IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND, label: 'A demanda cant. exacta' },
    { value: HumiditySensorMode.IRRIGATE_SPECIFICT_AMOUNT_WITH_DOUBLE_ACTION, label: 'A demanda cant. exacta, doble acción' },
    { value: HumiditySensorMode.IRRIGATE_ON_DEMAND, label: 'A demanda' },
    { value: HumiditySensorMode.SCHEDULE, label: 'Calendario de riego' },
    { value: HumiditySensorMode.SCHEDULE_DOUBLE_ACTION, label: 'Calendario de riego, doble acción' },
    { value: HumiditySensorMode.NONE, label: 'Ninguno' }
];

export const lightModeOptions = [
    { value: LightSensorMode.MANUAL, label: 'Manual' },
    { value: LightSensorMode.SCHEDULE, label: 'Calendario' },
    { value: LightSensorMode.NONE, label: 'Ninguno' }
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
    { value: '', label: 'Ninguno' }
];

export const eightRelaysOptions = [
    { value: RelaysIds.RELAY_ONE, label: 'Enchufe 1' },
    { value: RelaysIds.RELAY_TWO, label: 'Enchufe 2' },
    { value: RelaysIds.RELAY_THIRD, label: 'Enchufe 3' },
    { value: RelaysIds.RELAY_FOURTH, label: 'Enchufe 4' },
    { value: '', label: 'Ninguno' }
];