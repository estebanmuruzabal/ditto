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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResponse = exports.Author = exports.Social = exports.Meta = void 0;
const type_graphql_1 = require("type-graphql");
const product_enum_1 = require("./product.enum");
const category_type_1 = __importDefault(require("../category/category.type"));
const gallery_type_1 = __importDefault(require("./gallery.type"));
const paginated_response_1 = __importDefault(require("../../helpers/paginated-response"));
let Meta = class Meta {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Meta.prototype, "publisher", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Meta.prototype, "isbn", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Meta.prototype, "edition", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Meta.prototype, "country", void 0);
__decorate([
    type_graphql_1.Field(() => [String]),
    __metadata("design:type", Array)
], Meta.prototype, "languages", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Meta.prototype, "numberOfReader", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Meta.prototype, "numberOfPage", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Meta.prototype, "samplePDF", void 0);
Meta = __decorate([
    type_graphql_1.ObjectType()
], Meta);
exports.Meta = Meta;
let Social = class Social {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], Social.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Social.prototype, "media", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Social.prototype, "profileLink", void 0);
Social = __decorate([
    type_graphql_1.ObjectType()
], Social);
exports.Social = Social;
let Author = class Author {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], Author.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Author.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Author.prototype, "avatar", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Author.prototype, "bio", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Author.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Author.prototype, "website", void 0);
__decorate([
    type_graphql_1.Field(() => [Social]),
    __metadata("design:type", Array)
], Author.prototype, "socials", void 0);
Author = __decorate([
    type_graphql_1.ObjectType()
], Author);
exports.Author = Author;
let Product = class Product {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Product.prototype, "slug", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(() => product_enum_1.ProductType),
    __metadata("design:type", String)
], Product.prototype, "type", void 0);
__decorate([
    type_graphql_1.Field(() => [category_type_1.default]),
    __metadata("design:type", Array)
], Product.prototype, "categories", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Product.prototype, "unit", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Product.prototype, "image", void 0);
__decorate([
    type_graphql_1.Field(() => [gallery_type_1.default]),
    __metadata("design:type", Array)
], Product.prototype, "gallery", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], Product.prototype, "salePrice", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], Product.prototype, "discountInPercent", void 0);
__decorate([
    type_graphql_1.Field(() => Author, { nullable: true }),
    __metadata("design:type", Author)
], Product.prototype, "author", void 0);
__decorate([
    type_graphql_1.Field(() => Meta, { nullable: true }),
    __metadata("design:type", Meta)
], Product.prototype, "meta", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
Product = __decorate([
    type_graphql_1.ObjectType()
], Product);
exports.default = Product;
let ProductResponse = class ProductResponse extends paginated_response_1.default(Product) {
    constructor(productResponse) {
        super();
        Object.assign(this, productResponse);
    }
};
ProductResponse = __decorate([
    type_graphql_1.ObjectType(),
    __metadata("design:paramtypes", [ProductResponse])
], ProductResponse);
exports.ProductResponse = ProductResponse;
//# sourceMappingURL=product.type.js.map