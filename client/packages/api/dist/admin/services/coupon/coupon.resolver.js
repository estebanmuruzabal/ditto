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
const coupon_data_1 = __importDefault(require("../../data/coupon.data"));
const coupon_type_1 = __importDefault(require("./coupon.type"));
const coupon_input_type_1 = __importDefault(require("./coupon.input_type"));
const search_1 = __importDefault(require("../../helpers/search"));
let CouponResolver = class CouponResolver {
    constructor() {
        this.couponsCollection = coupon_data_1.default();
    }
    coupons(status, searchBy) {
        return __awaiter(this, void 0, void 0, function* () {
            let coupons = this.couponsCollection;
            if (status) {
                coupons = coupons.filter(coupon => coupon.status === status);
            }
            return yield search_1.default(coupons, ['title', 'code'], searchBy);
        });
    }
    createCoupon(coupon) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(coupon, 'coupon');
            return yield coupon;
        });
    }
};
__decorate([
    type_graphql_1.Query(returns => [coupon_type_1.default], { description: 'Get All Coupons' }),
    __param(0, type_graphql_1.Arg('status', { nullable: true })),
    __param(1, type_graphql_1.Arg('searchBy', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CouponResolver.prototype, "coupons", null);
__decorate([
    type_graphql_1.Mutation(returns => coupon_type_1.default),
    __param(0, type_graphql_1.Arg('coupon')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [coupon_input_type_1.default]),
    __metadata("design:returntype", Promise)
], CouponResolver.prototype, "createCoupon", null);
CouponResolver = __decorate([
    type_graphql_1.Resolver()
], CouponResolver);
exports.default = CouponResolver;
//# sourceMappingURL=coupon.resolver.js.map