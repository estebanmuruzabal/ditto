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
exports.CouponResolver = void 0;
const type_graphql_1 = require("type-graphql");
const coupon_sample_1 = __importDefault(require("./coupon.sample"));
const coupon_type_1 = __importDefault(require("./coupon.type"));
let CouponResolver = class CouponResolver {
    constructor() {
        this.items = coupon_sample_1.default();
    }
    coupons() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.items;
        });
    }
    applyCoupon(code) {
        return __awaiter(this, void 0, void 0, function* () {
            const coupon = yield this.items.find(item => item.code.toLowerCase() === code.toLowerCase());
            if (coupon) {
                return coupon;
            }
            return {
                id: 0,
                code: 'DEFAULT_COUPON',
                discountInPercent: 0,
            };
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [coupon_type_1.default], { description: 'Get all the Coupons' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CouponResolver.prototype, "coupons", null);
__decorate([
    type_graphql_1.Mutation(() => coupon_type_1.default),
    __param(0, type_graphql_1.Arg('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CouponResolver.prototype, "applyCoupon", null);
CouponResolver = __decorate([
    type_graphql_1.Resolver()
], CouponResolver);
exports.CouponResolver = CouponResolver;
//# sourceMappingURL=coupon.resolver.js.map