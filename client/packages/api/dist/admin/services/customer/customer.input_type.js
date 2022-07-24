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
const address_input_type_1 = __importDefault(require("../user/address/address.input_type"));
const card_input_type_1 = __importDefault(require("../user/card/card.input_type"));
const contact_input_type_1 = __importDefault(require("../user/contact/contact.input_type"));
let AddCustomerInput = class AddCustomerInput {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID),
    __metadata("design:type", String)
], AddCustomerInput.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AddCustomerInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AddCustomerInput.prototype, "image", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AddCustomerInput.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(type => [address_input_type_1.default]),
    __metadata("design:type", Array)
], AddCustomerInput.prototype, "address", void 0);
__decorate([
    type_graphql_1.Field(type => [contact_input_type_1.default]),
    __metadata("design:type", Array)
], AddCustomerInput.prototype, "contact", void 0);
__decorate([
    type_graphql_1.Field(type => [card_input_type_1.default]),
    __metadata("design:type", Array)
], AddCustomerInput.prototype, "card", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], AddCustomerInput.prototype, "creation_date", void 0);
__decorate([
    type_graphql_1.Field({ defaultValue: false }),
    __metadata("design:type", Boolean)
], AddCustomerInput.prototype, "has_blocked", void 0);
__decorate([
    type_graphql_1.Field({ defaultValue: 'silver' }),
    __metadata("design:type", String)
], AddCustomerInput.prototype, "rank", void 0);
AddCustomerInput = __decorate([
    type_graphql_1.InputType({ description: 'New recipe data' })
], AddCustomerInput);
exports.default = AddCustomerInput;
//# sourceMappingURL=customer.input_type.js.map