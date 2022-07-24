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
exports.VendorResolver = void 0;
const type_graphql_1 = require("type-graphql");
const vendors_sample_1 = require("./vendors.sample");
const vendor_type_1 = require("./vendor.type");
const vendors_type_1 = require("./vendors.type");
const get_vendors_args_1 = require("./get-vendors.args");
const search_1 = __importDefault(require("../../helpers/search"));
let VendorResolver = class VendorResolver {
    constructor() {
        this.vendorCollection = vendors_sample_1.vendorSamples;
    }
    vendors({ offset, limit, text, type, category }) {
        return __awaiter(this, void 0, void 0, function* () {
            let items = this.vendorCollection;
            if (category) {
                items = items.filter((item) => item.categories.includes(category));
            }
            items = yield search_1.default(items, ['name'], text);
            const total = this.vendorCollection.length;
            const hasMore = this.vendorCollection.length > offset + limit;
            return {
                items: items.slice(offset, offset + limit),
                totalCount: total,
                hasMore,
            };
        });
    }
    vendor(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.vendorCollection.find((item) => item.slug === slug);
        });
    }
};
__decorate([
    type_graphql_1.Query(() => vendors_type_1.Vendors, { description: 'Get all the vendors' }),
    __param(0, type_graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_vendors_args_1.GetVendorsArgs]),
    __metadata("design:returntype", Promise)
], VendorResolver.prototype, "vendors", null);
__decorate([
    type_graphql_1.Query(() => vendor_type_1.Vendor),
    __param(0, type_graphql_1.Arg('slug', (type) => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VendorResolver.prototype, "vendor", null);
VendorResolver = __decorate([
    type_graphql_1.Resolver()
], VendorResolver);
exports.VendorResolver = VendorResolver;
//# sourceMappingURL=vendors.resolver.js.map