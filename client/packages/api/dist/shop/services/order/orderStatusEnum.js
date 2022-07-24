"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatusEnum = void 0;
const type_graphql_1 = require("type-graphql");
var OrderStatusEnum;
(function (OrderStatusEnum) {
    OrderStatusEnum["RECEIVED"] = "Received";
    OrderStatusEnum["PROCESSING"] = "Processing";
    OrderStatusEnum["ON_THE_WAY"] = "On the way";
    OrderStatusEnum["DELIVERED"] = "Delivered";
})(OrderStatusEnum = exports.OrderStatusEnum || (exports.OrderStatusEnum = {}));
type_graphql_1.registerEnumType(OrderStatusEnum, {
    name: 'Product Type',
    description: 'These are the supported enums for order status',
});
//# sourceMappingURL=orderStatusEnum.js.map