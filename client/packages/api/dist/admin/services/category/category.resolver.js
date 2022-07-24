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
const category_data_1 = __importDefault(require("../../data/category.data"));
const category_type_1 = __importDefault(require("./category.type"));
const category_input_type_1 = __importDefault(require("./category.input_type"));
const search_1 = __importDefault(require("../../helpers/search"));
let CategoryResolver = class CategoryResolver {
    constructor() {
        this.categoriesCollection = category_data_1.default();
    }
    categories(type, searchBy) {
        return __awaiter(this, void 0, void 0, function* () {
            let categories = this.categoriesCollection;
            if (type) {
                categories = yield categories.filter(category => category.type === type);
            }
            return yield search_1.default(categories, ['name'], searchBy);
        });
    }
    category(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoriesCollection.find(category => category.id === id);
        });
    }
    createCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(category, 'category');
            return yield category;
        });
    }
};
__decorate([
    type_graphql_1.Query(returns => [category_type_1.default], { description: 'Get all the categories' }),
    __param(0, type_graphql_1.Arg('type', { nullable: true })),
    __param(1, type_graphql_1.Arg('searchBy', { defaultValue: '' })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "categories", null);
__decorate([
    type_graphql_1.Query(returns => category_type_1.default),
    __param(0, type_graphql_1.Arg('id', type => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "category", null);
__decorate([
    type_graphql_1.Mutation(() => category_type_1.default, { description: 'Create Category' }),
    __param(0, type_graphql_1.Arg('category')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_input_type_1.default]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "createCategory", null);
CategoryResolver = __decorate([
    type_graphql_1.Resolver()
], CategoryResolver);
exports.default = CategoryResolver;
//# sourceMappingURL=category.resolver.js.map