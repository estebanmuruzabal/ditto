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
const product_type_1 = __importDefault(require("../product/product.type"));
let Coupon = class Coupon {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID),
    __metadata("design:type", String)
], Coupon.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Coupon.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int),
    __metadata("design:type", Number)
], Coupon.prototype, "number_of_coupon", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { defaultValue: 0 }),
    __metadata("design:type", Number)
], Coupon.prototype, "number_of_used_coupon", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int),
    __metadata("design:type", Number)
], Coupon.prototype, "discount_in_percent", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Coupon.prototype, "category", void 0);
__decorate([
    type_graphql_1.Field(type => [product_type_1.default], { nullable: true }),
    __metadata("design:type", Array)
], Coupon.prototype, "products", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Coupon.prototype, "code", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { defaultValue: 0 }),
    __metadata("design:type", Number)
], Coupon.prototype, "minimum_amount", void 0);
__decorate([
    type_graphql_1.Field({ defaultValue: 'active' }),
    __metadata("design:type", String)
], Coupon.prototype, "status", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], Coupon.prototype, "expiration_date", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Coupon.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], Coupon.prototype, "creation_date", void 0);
Coupon = __decorate([
    type_graphql_1.ObjectType()
], Coupon);
exports.default = Coupon;
//# sourceMappingURL=coupon.type.js.map