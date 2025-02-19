"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerSteps = exports.TriggerStaffSteps = exports.TriggerGrowerSteps = exports.AirTemperatureSensorMode = exports.C02SensorMode = exports.AirHumiditySensorMode = exports.DistanceSensorMode = exports.LightSensorMode = exports.HumiditySensorMode = exports.Roles = void 0;
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "ADMIN";
    Roles["MANAGER"] = "MANAGER";
    Roles["MEMBER"] = "MEMBER";
    Roles["DELIVERY_BOY"] = "DELIVERY_BOY";
    Roles["CLIENT"] = "CLIENT";
    Roles["STAFF"] = "STAFF";
    Roles["GROWER"] = "GROWER";
})(Roles || (exports.Roles = Roles = {}));
var HumiditySensorMode;
(function (HumiditySensorMode) {
    HumiditySensorMode["IRRIGATE_ON_DEMAND"] = "IRRIGATE_ON_DEMAND";
    HumiditySensorMode["INTERMITTENT_IRRIGATION"] = "INTERMITTENT_IRRIGATION";
    HumiditySensorMode["IRRIGATE_SPECIFICT_AMOUNT_WITH_DOUBLE_ACTION"] = "IRRIGATE_SPECIFICT_AMOUNT_WITH_DOUBLE_ACTION";
    HumiditySensorMode["IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND"] = "IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND";
    HumiditySensorMode["SEEDS_POOL_IRRIGATION"] = "SEEDS_POOL_IRRIGATION";
    HumiditySensorMode["MANUAL"] = "HUMIDITY_MANUAL";
    HumiditySensorMode["SCHEDULE"] = "HUMIDITY_SCHEDULE";
    HumiditySensorMode["MIN_WARNING"] = "HUMIDITY_MIN_WARNING";
    HumiditySensorMode["MAX_WARNING"] = "HUMIDITY_MAX_WARNING";
    HumiditySensorMode["SCHEDULE_DOUBLE_ACTION"] = "HUMIDITY_SCHEDULE_DOUBLE_ACTION";
    HumiditySensorMode["NONE"] = "NONE";
})(HumiditySensorMode || (exports.HumiditySensorMode = HumiditySensorMode = {}));
var LightSensorMode;
(function (LightSensorMode) {
    LightSensorMode["MANUAL"] = "LIGHT_MANUAL";
    LightSensorMode["SCHEDULE"] = "LIGHT_SCHEDULE";
    LightSensorMode["NONE"] = "NONE";
})(LightSensorMode || (exports.LightSensorMode = LightSensorMode = {}));
// THIS SHOULD MATCH FRONTEND 
var DistanceSensorMode;
(function (DistanceSensorMode) {
    DistanceSensorMode["WHEN_EMPTY_ACTION_CUSTOM"] = "WHEN_EMPTY_ACTION_CUSTOM";
    DistanceSensorMode["WHEN_EMPTY_ACTION_AUTOMATED"] = "WHEN_EMPTY_ACTION_AUTOMATED";
    DistanceSensorMode["WHEN_FULL_ACTION_CUSTOM"] = "WHEN_FULL_ACTION_CUSTOM";
    DistanceSensorMode["WHEN_FULL_ACTION_AUTOMATED"] = "WHEN_FULL_ACTION_AUTOMATED";
    DistanceSensorMode["MIN_WARNING"] = "MIN_WARNING";
    DistanceSensorMode["MAX_WARNING"] = "MAX_WARNING";
    DistanceSensorMode["NONE"] = "NONE";
})(DistanceSensorMode || (exports.DistanceSensorMode = DistanceSensorMode = {}));
var AirHumiditySensorMode;
(function (AirHumiditySensorMode) {
    AirHumiditySensorMode["MANUAL"] = "AIR_HUM_MANUAL";
    AirHumiditySensorMode["SCHEDULE"] = "AIR_HUM_SCHEDULE";
    AirHumiditySensorMode["WHEN_MIN_ACTION_AUTOMATED"] = "AIR_HUM_WHEN_MIN_ACTION_AUTOMATED";
    AirHumiditySensorMode["WHEN_MAX_ACTION_AUTOMATED"] = "AIR_HUM_WHEN_MAX_ACTION_AUTOMATED";
    AirHumiditySensorMode["NONE"] = "NONE";
})(AirHumiditySensorMode || (exports.AirHumiditySensorMode = AirHumiditySensorMode = {}));
var C02SensorMode;
(function (C02SensorMode) {
    C02SensorMode["MANUAL"] = "C02_MANUAL";
    C02SensorMode["SCHEDULE"] = "C02_SCHEDULE";
    C02SensorMode["WHEN_MIN_ACTION_AUTOMATED"] = "C02_WHEN_MIN_ACTION_AUTOMATED";
    C02SensorMode["WHEN_MAX_ACTION_AUTOMATED"] = "C02_WHEN_MAX_ACTION_AUTOMATED";
    C02SensorMode["NONE"] = "NONE";
})(C02SensorMode || (exports.C02SensorMode = C02SensorMode = {}));
var AirTemperatureSensorMode;
(function (AirTemperatureSensorMode) {
    AirTemperatureSensorMode["MANUAL"] = "AIR_TEMP_MANUAL";
    AirTemperatureSensorMode["SCHEDULE"] = "AIR_TEMP_SCHEDULE";
    AirTemperatureSensorMode["WHEN_MIN_ACTION_AUTOMATED"] = "AIR_TEMP_WHEN_MIN_ACTION_AUTOMATED";
    AirTemperatureSensorMode["WHEN_MAX_ACTION_AUTOMATED"] = "AIR_TEMP_WHEN_MAX_ACTION_AUTOMATED";
    AirTemperatureSensorMode["NONE"] = "NONE";
})(AirTemperatureSensorMode || (exports.AirTemperatureSensorMode = AirTemperatureSensorMode = {}));
// END THIS SHOULD MATCH FRONTEND
var TriggerGrowerSteps;
(function (TriggerGrowerSteps) {
    TriggerGrowerSteps["SHOW_ALL_PLANTS"] = "SHOW_ALL_PLANTS";
    TriggerGrowerSteps["PLANT_DETAILS"] = "PLANT_DETAILS";
    TriggerGrowerSteps["CONFIGURATION_CHANGE_TRIGGER"] = "CONFIGURATION_CHANGE_TRIGGER";
    TriggerGrowerSteps["CHANGE_MIN_HUMIDITY"] = "CHANGE_MIN_HUMIDITY";
    TriggerGrowerSteps["CHANGE_MAX_HUMIDITY"] = "CHANGE_MAX_HUMIDITY";
})(TriggerGrowerSteps || (exports.TriggerGrowerSteps = TriggerGrowerSteps = {}));
var TriggerStaffSteps;
(function (TriggerStaffSteps) {
    TriggerStaffSteps["STAFF_ALL_CATEGORIES"] = "STAFF_ALL_CATEGORIES";
    TriggerStaffSteps["ALL_CATEGORIES_ANSWER"] = "ALL_CATEGORIES_ANSWER";
    TriggerStaffSteps[TriggerStaffSteps["CHANGE_WORKING_STATE"] = 1] = "CHANGE_WORKING_STATE";
    TriggerStaffSteps[TriggerStaffSteps["SEE_PRODUCTS_TO_UPDATE_STOCK"] = 2] = "SEE_PRODUCTS_TO_UPDATE_STOCK";
    TriggerStaffSteps[TriggerStaffSteps["SEE_STAFF_INFO"] = 3] = "SEE_STAFF_INFO";
    TriggerStaffSteps[TriggerStaffSteps["SEE_PRODUCTS_TO_QUICK_SALE"] = 4] = "SEE_PRODUCTS_TO_QUICK_SALE";
    TriggerStaffSteps["CHOOSE_AMOUNT_UNITS_TO_SALE"] = "CHOOSE_AMOUNT_UNITS_TO_SALE";
    TriggerStaffSteps["CHOOSE_PRODUCT_TO_SALE"] = "CHOOSE_PRODUCT_TO_SALE";
    TriggerStaffSteps["CHOOSE_PRODUCT_TO_UPDATE_STOCK"] = "CHOOSE_PRODUCT_TO_UPDATE_STOCK";
    TriggerStaffSteps["INTRODUCE_PRODUCT_NEW_STOCK"] = "INTRODUCE_PRODUCT_NEW_STOCK";
    TriggerStaffSteps["SUCCESS_SALE_AND_MAIN_MENU"] = "SUCCESS_SALE_AND_MAIN_MENU";
    TriggerStaffSteps["END_CONVERSATION_AND_RESET_CHAT"] = "END_CONVERSATION_AND_RESET_CHAT";
})(TriggerStaffSteps || (exports.TriggerStaffSteps = TriggerStaffSteps = {}));
var TriggerSteps;
(function (TriggerSteps) {
    TriggerSteps["ORDER_USER_NAME"] = "ORDER_USER_NAME";
    TriggerSteps["INTODUCE_NEW_USER_NAME"] = "INTODUCE_NEW_USER_NAME";
    TriggerSteps["INITIAL_UNAUTHENTICATED_USER"] = "INITIAL_UNAUTHENTICATED_USER";
    TriggerSteps["USER_SHOULD_INPUT_HIS_NAME"] = "USER_SHOULD_INPUT_HIS_NAME";
    TriggerSteps["INITIAL_UNAUTHENTICATED_USER_AGAIN"] = "INITIAL_UNAUTHENTICATED_USER_AGAIN";
    TriggerSteps["AUTHENTICATED_USER_ALL_CATEGORIES"] = "AUTHENTICATED_USER_ALL_CATEGORIES";
    TriggerSteps["SIGN_UP_USER_BEFORE_PURCHASE"] = "SIGN_UP_USER_BEFORE_PURCHASE";
    TriggerSteps["ASK_USER_NAME_TO_SIGN_UP_USER_BEFORE_PURCHASE"] = "ASK_USER_NAME_TO_SIGN_UP_USER_BEFORE_PURCHASE";
    TriggerSteps["ALL_CATEGORIES"] = "ALL_CATEGORIES";
    TriggerSteps["SELECT_CATEGORY"] = "SELECT_CATEGORY";
    TriggerSteps["GET_PRODUCTS_LIST_STEP"] = "GET_PRODUCTS_LIST_STEP";
    TriggerSteps["GET_PRODUCTS_INFO_STEP"] = "GET_PRODUCTS_INFO_STEP";
    TriggerSteps["ADD_PRODUCT_TO_CART"] = "ADD_PRODUCT_TO_CART";
    TriggerSteps["SELECT_QUANTITY_OF_PRODUCT"] = "SELECT_QUANTITY_OF_PRODUCT";
    TriggerSteps["ADD_MORE_PRODUCTS_STEP"] = "ADD_MORE_PRODUCTS_STEP";
    TriggerSteps["DELIVERY_OR_PICKUP_OPT_SELECTED"] = "DELIVERY_OR_PICKUP_OPT_SELECTED";
    TriggerSteps["PICKUP_OPT_SELECTED"] = "PICKUP_OPT_SELECTED";
    TriggerSteps["DELIVERY_OPT_SELECTED"] = "DELIVERY_OPT_SELECTED";
    TriggerSteps["SELECT_PAYMENT_METHOD"] = "SELECT_PAYMENT_METHOD";
    TriggerSteps["ORDER_CHECK_CONFIRMATION"] = "ORDER_CHECK_CONFIRMATION";
    // other types
    TriggerSteps["ADD_PRODUCT_OR_DELIVERY_PICKUP_OPT"] = "ADD_PRODUCT_OR_DELIVERY_PICKUP_OPT/delivery";
    TriggerSteps["RESET_CHAT_HISTORY_AND_SHOPPING_CART"] = "RESET_CHAT_HISTORY_AND_SHOPPING_CART";
    TriggerSteps["UNKNOWN_ERROR_STEP"] = "UNKNOWN_ERROR_STEP";
    TriggerSteps["BLOCK_CHAT"] = "BLOCK_CHAT";
    TriggerSteps["UNBLOCK_CHAT"] = "UNBLOCK_CHAT";
    TriggerSteps["END_CONVERSATION_AND_RESET_CHAT"] = "END_CONVERSATION_AND_RESET_CHAT";
})(TriggerSteps || (exports.TriggerSteps = TriggerSteps = {}));
const roleSelectOptions = [
    { value: 'admin', label: 'Admin' },
    { value: 'manager', label: 'Manager' },
    { value: 'member', label: 'Member' },
    { value: 'delivery boy', label: 'Delivery boy' },
    { value: 'client', label: 'Client' },
];
