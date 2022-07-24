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
const customer_type_1 = __importDefault(require("./customer.type"));
const customer_data_1 = __importDefault(require("../../data/customer.data"));
const search_1 = __importDefault(require("../../helpers/search"));
const sorts_1 = require("../../helpers/sorts");
let CustomerResolver = class CustomerResolver {
    constructor() {
        this.customersCollection = customer_data_1.default();
    }
    customers(searchBy, sortBy, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            let customers = this.customersCollection;
            if (sortBy === "highestToLowest") {
                customers = yield sorts_1.sortByHighestNumber(customers, "total_order_amount");
            }
            if (sortBy === "lowestToHighest") {
                customers = yield sorts_1.sortByLowestNumber(customers, "total_order_amount");
            }
            return yield search_1.default(customers, ["name", "creation_date"], searchBy);
        });
    }
    customer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id, "customer_id");
            return yield this.customersCollection.find(customer => customer.id === id);
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [customer_type_1.default]),
    __param(0, type_graphql_1.Arg("searchBy", type => String, { nullable: true })),
    __param(1, type_graphql_1.Arg("sortBy", type => String, { defaultValue: null })),
    __param(2, type_graphql_1.Arg("limit", type => type_graphql_1.Int, { defaultValue: 7 })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], CustomerResolver.prototype, "customers", null);
__decorate([
    type_graphql_1.Query(() => customer_type_1.default),
    __param(0, type_graphql_1.Arg("id", type => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CustomerResolver.prototype, "customer", null);
CustomerResolver = __decorate([
    type_graphql_1.Resolver()
], CustomerResolver);
exports.default = CustomerResolver;
//# sourceMappingURL=customer.resolver.js.map