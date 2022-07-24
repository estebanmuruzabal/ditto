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
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const product_enum_1 = require("./product.enum");
let ProductSearchInput = class ProductSearchInput {
};
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", Number)
], ProductSearchInput.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ProductSearchInput.prototype, "type", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], ProductSearchInput.prototype, "category", void 0);
__decorate([
    type_graphql_1.Field({ defaultValue: 0 }),
    __metadata("design:type", Number)
], ProductSearchInput.prototype, "offset", void 0);
__decorate([
    type_graphql_1.Field({ defaultValue: 10 }),
    __metadata("design:type", Number)
], ProductSearchInput.prototype, "limit", void 0);
ProductSearchInput = __decorate([
    type_graphql_1.InputType()
], ProductSearchInput);
exports.default = ProductSearchInput;
//# sourceMappingURL=product.input.js.map