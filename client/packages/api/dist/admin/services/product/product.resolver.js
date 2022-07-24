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
const product_data_1 = __importDefault(require("../../data/product.data"));
const product_type_1 = __importDefault(require("./product.type"));
const products_type_1 = __importDefault(require("./products.type"));
const product_args_type_1 = __importDefault(require("./product.args_type"));
const product_input_type_1 = __importDefault(require("./product.input_type"));
const search_1 = __importDefault(require("../../helpers/search"));
const shuffle_1 = __importDefault(require("../../helpers/shuffle"));
const sorts_1 = require("../../helpers/sorts");
let ProductResolver = class ProductResolver {
    constructor() {
        this.productsCollection = product_data_1.default();
    }
    products({ limit, offset, sortByPrice, type, searchText, category }) {
        return __awaiter(this, void 0, void 0, function* () {
            let products = this.productsCollection;
            if (category) {
                products = products.filter((product) => product.categories.find((category_item) => category_item.slug === category));
            }
            if (type) {
                products = products.filter((product) => product.type === type);
            }
            if (sortByPrice) {
                if (sortByPrice === 'highestToLowest') {
                    products = sorts_1.sortByHighestNumber(products, 'price');
                }
                if (sortByPrice === 'lowestToHighest') {
                    products = sorts_1.sortByLowestNumber(products, 'price');
                }
            }
            else {
                products = shuffle_1.default(products);
            }
            products = yield search_1.default(products, ['name'], searchText);
            const hasMore = products.length > offset + limit;
            return {
                items: products.slice(offset, offset + limit),
                totalCount: this.productsCollection.length,
                hasMore,
            };
        });
    }
    product(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.productsCollection.find((item) => item.slug === slug);
        });
    }
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(product, 'product');
            return product;
        });
    }
};
__decorate([
    type_graphql_1.Query((returns) => products_type_1.default, { description: 'Get all the products' }),
    __param(0, type_graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_args_type_1.default]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "products", null);
__decorate([
    type_graphql_1.Query(() => product_type_1.default),
    __param(0, type_graphql_1.Arg('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "product", null);
__decorate([
    type_graphql_1.Mutation(() => product_type_1.default, { description: 'Create Category' }),
    __param(0, type_graphql_1.Arg('product')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_input_type_1.default]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "createProduct", null);
ProductResolver = __decorate([
    type_graphql_1.Resolver()
], ProductResolver);
exports.default = ProductResolver;
//# sourceMappingURL=product.resolver.js.map