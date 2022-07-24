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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const user_type_1 = __importDefault(require("./user.type"));
const user_sample_1 = __importDefault(require("./user.sample"));
let UserResolver = class UserResolver {
    constructor() {
        this.items = user_sample_1.default();
    }
    me(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id, 'user_id');
            return yield this.items[0];
        });
    }
    updateMe(meInput) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(meInput, 'meInput');
            return yield this.items[0];
        });
    }
    updateAddress(addressInput) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(addressInput, 'addressinput');
            return yield this.items[0];
        });
    }
    updateContact(contactInput) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(contactInput, 'contactinput');
            return yield this.items[0];
        });
    }
    deleteAddress(addressId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(addressId, 'address_id');
            return yield this.items[0];
        });
    }
    deleteContact(contactId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(contactId, 'contact_id');
            return yield this.items[0];
        });
    }
    addPaymentCard(cardInput) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(cardInput, 'cardInput');
            return yield this.items[0];
        });
    }
    deletePaymentCard(cardId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(cardId, 'card_id');
            return yield this.items[0];
        });
    }
};
__decorate([
    type_graphql_1.Query(() => user_type_1.default),
    __param(0, type_graphql_1.Arg('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "me", null);
__decorate([
    type_graphql_1.Mutation(() => user_type_1.default, { description: 'Update User' }),
    __param(0, type_graphql_1.Arg('meInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateMe", null);
__decorate([
    type_graphql_1.Mutation(() => user_type_1.default, { description: 'Add or Edit Address' }),
    __param(0, type_graphql_1.Arg('addressInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateAddress", null);
__decorate([
    type_graphql_1.Mutation(() => user_type_1.default, { description: 'Add or Edit Contact' }),
    __param(0, type_graphql_1.Arg('contactInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateContact", null);
__decorate([
    type_graphql_1.Mutation(() => user_type_1.default, { description: 'Delete Address' }),
    __param(0, type_graphql_1.Arg('addressId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteAddress", null);
__decorate([
    type_graphql_1.Mutation(() => user_type_1.default, { description: 'Delete Contact' }),
    __param(0, type_graphql_1.Arg('contactId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteContact", null);
__decorate([
    type_graphql_1.Mutation(() => user_type_1.default, { description: 'Add Payment Card' }),
    __param(0, type_graphql_1.Arg('cardInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "addPaymentCard", null);
__decorate([
    type_graphql_1.Mutation(() => user_type_1.default, { description: 'Delete Payment Card' }),
    __param(0, type_graphql_1.Arg('cardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deletePaymentCard", null);
UserResolver = __decorate([
    type_graphql_1.Resolver()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map