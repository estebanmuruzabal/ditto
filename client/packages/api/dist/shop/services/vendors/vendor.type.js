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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vendor = void 0;
const type_graphql_1 = require("type-graphql");
const product_type_1 = require("./product.type");
let DeliveryDetails = class DeliveryDetails {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], DeliveryDetails.prototype, "charge", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], DeliveryDetails.prototype, "maximumDistance", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], DeliveryDetails.prototype, "minimumOrder", void 0);
__decorate([
    type_graphql_1.Field({ defaultValue: true }),
    __metadata("design:type", Boolean)
], DeliveryDetails.prototype, "isFree", void 0);
DeliveryDetails = __decorate([
    type_graphql_1.ObjectType()
], DeliveryDetails);
let Vendor = class Vendor {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    __metadata("design:type", String)
], Vendor.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Vendor.prototype, "slug", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Vendor.prototype, "type", void 0);
__decorate([
    type_graphql_1.Field(() => [String]),
    __metadata("design:type", Array)
], Vendor.prototype, "categories", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Vendor.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Vendor.prototype, "logoUrl", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Vendor.prototype, "thumbnailUrl", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Vendor.prototype, "previewUrl", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Vendor.prototype, "slogan", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Vendor.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Vendor.prototype, "address", void 0);
__decorate([
    type_graphql_1.Field(() => DeliveryDetails),
    __metadata("design:type", DeliveryDetails)
], Vendor.prototype, "deliveryDetails", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Vendor.prototype, "promotion", void 0);
__decorate([
    type_graphql_1.Field(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], Vendor.prototype, "owners", void 0);
__decorate([
    type_graphql_1.Field(() => [product_type_1.VendorProduct], { nullable: true }),
    __metadata("design:type", Array)
], Vendor.prototype, "products", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], Vendor.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], Vendor.prototype, "updatedAt", void 0);
Vendor = __decorate([
    type_graphql_1.ObjectType()
], Vendor);
exports.Vendor = Vendor;
//# sourceMappingURL=vendor.type.js.map