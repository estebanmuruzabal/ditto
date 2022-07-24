"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const orderProduct_type_1 = __importDefault(require("./orderProduct.type"));
let Order = class Order {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], Order.prototype, "userId", void 0);
__decorate([
    type_graphql_1.Field(type => [orderProduct_type_1.default]),
    __metadata("design:type", Array)
], Order.prototype, "products", void 0);
__decorate([
    type_graphql_1.Field(type => String),
    __metadata("design:type", Number)
], Order.prototype, "status", void 0);
__decorate([
    type_graphql_1.Field(type => String),
    __metadata("design:type", String)
], Order.prototype, "deliveryTime", void 0);
__decorate([
    type_graphql_1.Field(type => String),
    __metadata("design:type", Number)
], Order.prototype, "amount", void 0);
__decorate([
    type_graphql_1.Field(type => String),
    __metadata("design:type", Number)
], Order.prototype, "subtotal", void 0);
__decorate([
    type_graphql_1.Field(type => String),
    __metadata("design:type", Number)
], Order.prototype, "discount", void 0);
__decorate([
    type_graphql_1.Field(type => String),
    __metadata("design:type", Number)
], Order.prototype, "deliveryFee", void 0);
__decorate([
    type_graphql_1.Field(type => String),
    __metadata("design:type", String)
], Order.prototype, "deliveryAddress", void 0);
__decorate([
    type_graphql_1.Field(type => String),
    __metadata("design:type", String)
], Order.prototype, "date", void 0);
Order = __decorate([
    type_graphql_1.ObjectType()
], Order);
exports.default = Order;
//# sourceMappingURL=order.type.js.map