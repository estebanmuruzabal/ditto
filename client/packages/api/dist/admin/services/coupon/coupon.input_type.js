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
const product_input_type_1 = __importDefault(require("../product/product.input_type"));
let AddCouponInput = class AddCouponInput {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID),
    __metadata("design:type", String)
], AddCouponInput.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AddCouponInput.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int),
    __metadata("design:type", Number)
], AddCouponInput.prototype, "number_of_coupon", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int),
    __metadata("design:type", Number)
], AddCouponInput.prototype, "discount_in_percent", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AddCouponInput.prototype, "category", void 0);
__decorate([
    type_graphql_1.Field(type => [product_input_type_1.default], { nullable: true }),
    __metadata("design:type", Array)
], AddCouponInput.prototype, "products", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AddCouponInput.prototype, "code", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { defaultValue: 0 }),
    __metadata("design:type", Number)
], AddCouponInput.prototype, "minimum_amount", void 0);
__decorate([
    type_graphql_1.Field({ defaultValue: 'active' }),
    __metadata("design:type", String)
], AddCouponInput.prototype, "status", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Date)
], AddCouponInput.prototype, "expiration_date", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], AddCouponInput.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], AddCouponInput.prototype, "creation_date", void 0);
AddCouponInput = __decorate([
    type_graphql_1.InputType({ description: 'New coupon data' })
], AddCouponInput);
exports.default = AddCouponInput;
//# sourceMappingURL=coupon.input_type.js.map