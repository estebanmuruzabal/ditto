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
const category_input_type_1 = __importDefault(require("../category/category.input_type"));
let AddProductInput = class AddProductInput {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID),
    __metadata("design:type", String)
], AddProductInput.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AddProductInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AddProductInput.prototype, "slug", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AddProductInput.prototype, "image", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AddProductInput.prototype, "type", void 0);
__decorate([
    type_graphql_1.Field({ defaultValue: '1' }),
    __metadata("design:type", String)
], AddProductInput.prototype, "unit", void 0);
__decorate([
    type_graphql_1.Field(type => [category_input_type_1.default], { nullable: true }),
    __metadata("design:type", Array)
], AddProductInput.prototype, "categories", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int),
    __metadata("design:type", Number)
], AddProductInput.prototype, "price", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Float, { nullable: true }),
    __metadata("design:type", Number)
], AddProductInput.prototype, "salePrice", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { defaultValue: 0 }),
    __metadata("design:type", Number)
], AddProductInput.prototype, "discountInPercent", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int, { defaultValue: 1 }),
    __metadata("design:type", Number)
], AddProductInput.prototype, "per_unit", void 0);
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int),
    __metadata("design:type", Number)
], AddProductInput.prototype, "quantity", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], AddProductInput.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], AddProductInput.prototype, "creation_date", void 0);
AddProductInput = __decorate([
    type_graphql_1.InputType({ description: 'New recipe data' })
], AddProductInput);
exports.default = AddProductInput;
//# sourceMappingURL=product.input_type.js.map