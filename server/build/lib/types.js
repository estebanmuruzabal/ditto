"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerSteps = exports.TriggerStaffSteps = exports.TriggerGrowerSteps = exports.DistanceSensorMode = exports.HumiditySensorMode = exports.Roles = void 0;
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
    HumiditySensorMode["SEEDS_POOL_IRRIGATION"] = "SEEDS_POOL_IRRIGATION";
    HumiditySensorMode["MANUAL"] = "MANUAL";
    HumiditySensorMode["SCHEDULE"] = "SCHEDULE";
})(HumiditySensorMode || (exports.HumiditySensorMode = HumiditySensorMode = {}));
var DistanceSensorMode;
(function (DistanceSensorMode) {
    DistanceSensorMode["SISTEMA_AGUA_A_TRATAR"] = "SISTEMA_AGUA_A_TRATAR";
})(DistanceSensorMode || (exports.DistanceSensorMode = DistanceSensorMode = {}));
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
})(TriggerStaffSteps || (exports.TriggerStaffSteps = TriggerStaffSteps = {}));
var TriggerSteps;
(function (TriggerSteps) {
    TriggerSteps["ORDER_USER_NAME"] = "ORDER_USER_NAME";
    TriggerSteps["INTODUCE_NEW_USER_NAME"] = "INTODUCE_NEW_USER_NAME";
    TriggerSteps["INITIAL_UNAUTHENTICATED_USER"] = "INITIAL_UNAUTHENTICATED_USER";
    TriggerSteps["USER_SHOULD_INPUT_HIS_NAME"] = "USER_SHOULD_INPUT_HIS_NAME";
    TriggerSteps["INITIAL_UNAUTHENTICATED_USER_AGAIN"] = "INITIAL_UNAUTHENTICATED_USER_AGAIN";
    TriggerSteps["AUTHENTICATED_USER_ALL_CATEGORIES"] = "AUTHENTICATED_USER_ALL_CATEGORIES";
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
