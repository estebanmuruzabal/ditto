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
const type_graphql_1 = require("type-graphql");
const order_data_1 = __importDefault(require("../../data/order.data"));
const order_type_1 = __importDefault(require("./order.type"));
const search_1 = __importDefault(require("../../helpers/search"));
let OrderResolver = class OrderResolver {
    constructor() {
        this.ordersCollection = order_data_1.default();
    }
    orders(status, limit, searchText) {
        return __awaiter(this, void 0, void 0, function* () {
            let orders = this.ordersCollection;
            if (status) {
                orders = yield orders.filter(order => order.status === status);
            }
            return yield search_1.default(orders.slice(0, limit), ["delivery_address"], searchText);
        });
    }
    order(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.ordersCollection.find(item => item.id === id);
        });
    }
};
__decorate([
    type_graphql_1.Query(returns => [order_type_1.default], { description: "Get all the Orders" }),
    __param(0, type_graphql_1.Arg("status", type => String, { nullable: true })),
    __param(1, type_graphql_1.Arg("limit", type => type_graphql_1.Int, { defaultValue: 50 })),
    __param(2, type_graphql_1.Arg("searchText", type => String, { defaultValue: "" })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "orders", null);
__decorate([
    type_graphql_1.Query(returns => order_type_1.default, { description: "Get single order" }),
    __param(0, type_graphql_1.Arg("id", type => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "order", null);
OrderResolver = __decorate([
    type_graphql_1.Resolver()
], OrderResolver);
exports.default = OrderResolver;
//# sourceMappingURL=order.resolver.js.map