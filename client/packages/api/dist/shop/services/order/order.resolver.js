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
exports.OrderResolver = void 0;
const type_graphql_1 = require("type-graphql");
const order_sample_1 = __importDefault(require("./order.sample"));
const order_type_1 = __importDefault(require("./order.type"));
const filter_1 = require("../../helpers/filter");
let OrderResolver = class OrderResolver {
    constructor() {
        this.items = order_sample_1.default();
    }
    orders(user, text, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield filter_1.filterOrder(this.items, user, limit, text);
        });
    }
    order(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.items.find(item => item.id === id);
        });
    }
    addOrder(orderInput) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(orderInput, 'orderinput');
            return yield this.items[0];
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [order_type_1.default], { description: 'Get all the Orders' }),
    __param(0, type_graphql_1.Arg('user', type => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg('text', type => String, { nullable: true })),
    __param(2, type_graphql_1.Arg('limit', type => type_graphql_1.Int, { defaultValue: 7 })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "orders", null);
__decorate([
    type_graphql_1.Query(() => order_type_1.default, { description: 'Get single order' }),
    __param(0, type_graphql_1.Arg('id', type => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "order", null);
__decorate([
    type_graphql_1.Mutation(() => order_type_1.default, { description: 'Add an Order' }),
    __param(0, type_graphql_1.Arg('orderInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "addOrder", null);
OrderResolver = __decorate([
    type_graphql_1.Resolver()
], OrderResolver);
exports.OrderResolver = OrderResolver;
//# sourceMappingURL=order.resolver.js.map