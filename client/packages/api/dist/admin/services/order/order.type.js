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
const ordered_product_type_1 = __importDefault(require("./ordered_product.type"));
let Order = class Order {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID),
    __metadata("design:type", String)
], Order.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID),
    __metadata("design:type", String)
], Order.prototype, "customer_id", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Float),
    __metadata("design:type", Number)
], Order.prototype, "amount", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Order.prototype, "payment_method", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Order.prototype, "contact_number", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Order.prototype, "delivery_address", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    type_graphql_1.Field(type => [ordered_product_type_1.default]),
    __metadata("design:type", Array)
], Order.prototype, "products", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Order.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], Order.prototype, "discount", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int),
    __metadata("design:type", Number)
], Order.prototype, "delivery_fee", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], Order.prototype, "creation_date", void 0);
Order = __decorate([
    type_graphql_1.ObjectType()
], Order);
exports.default = Order;
//# sourceMappingURL=order.type.js.map