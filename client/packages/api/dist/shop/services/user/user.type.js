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
const address_type_1 = __importDefault(require("./address.type"));
const contact_type_1 = __importDefault(require("./contact.type"));
const card_type_1 = __importDefault(require("./card.type"));
let User = class User {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.Int),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(type => [address_type_1.default]),
    __metadata("design:type", Array)
], User.prototype, "address", void 0);
__decorate([
    type_graphql_1.Field(type => [contact_type_1.default]),
    __metadata("design:type", Array)
], User.prototype, "contact", void 0);
__decorate([
    type_graphql_1.Field(type => [card_type_1.default]),
    __metadata("design:type", Array)
], User.prototype, "card", void 0);
User = __decorate([
    type_graphql_1.ObjectType()
], User);
exports.default = User;
//# sourceMappingURL=user.type.js.map