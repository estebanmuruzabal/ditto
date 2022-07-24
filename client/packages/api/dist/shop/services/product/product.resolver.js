"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResolver = void 0;
const type_graphql_1 = require("type-graphql");
const product_sample_1 = require("./product.sample");
const product_type_1 = __importStar(require("./product.type"));
const filter_1 = require("../../helpers/filter");
let ProductResolver = class ProductResolver {
    constructor() {
        this.items = product_sample_1.createProductSamples();
    }
    products(limit, offset, type, text, category) {
        const total = this.items.length;
        const filteredData = filter_1.filterItems(this.items, limit, offset, text, type, category);
        return new product_type_1.ProductResponse(Object.assign({ total: total }, filteredData));
    }
    product(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.items.find((item) => item.slug === slug);
        });
    }
    relatedProducts(slug, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const relatedItem = yield filter_1.getRelatedItems(type, slug, this.items);
            return relatedItem;
        });
    }
};
__decorate([
    type_graphql_1.Query({ description: 'Get all the products' }),
    __param(0, type_graphql_1.Arg('limit', (type) => type_graphql_1.Int, { defaultValue: 10 })),
    __param(1, type_graphql_1.Arg('offset', (type) => type_graphql_1.Int, { defaultValue: 0 })),
    __param(2, type_graphql_1.Arg('type', { nullable: true })),
    __param(3, type_graphql_1.Arg('text', { nullable: true })),
    __param(4, type_graphql_1.Arg('category', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String, String]),
    __metadata("design:returntype", product_type_1.ProductResponse)
], ProductResolver.prototype, "products", null);
__decorate([
    type_graphql_1.Query(() => product_type_1.default),
    __param(0, type_graphql_1.Arg('slug', (type) => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "product", null);
__decorate([
    type_graphql_1.Query(() => [product_type_1.default], { description: 'Get the Related products' }),
    __param(0, type_graphql_1.Arg('slug', (slug) => String)),
    __param(1, type_graphql_1.Arg('type', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "relatedProducts", null);
ProductResolver = __decorate([
    type_graphql_1.Resolver()
], ProductResolver);
exports.ProductResolver = ProductResolver;
//# sourceMappingURL=product.resolver.js.map