"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductType = void 0;
const type_graphql_1 = require("type-graphql");
var ProductType;
(function (ProductType) {
    ProductType["BOOK"] = "book";
    ProductType["BAGS"] = "bags";
    ProductType["GROCERY"] = "grocery";
    ProductType["MEDICINE"] = "medicine";
    ProductType["CLOTH"] = "cloth";
    ProductType["CLOTHING"] = "clothing";
    ProductType["FURNITURE"] = "furniture";
    ProductType["MAKEUP"] = "makeup";
})(ProductType = exports.ProductType || (exports.ProductType = {}));
type_graphql_1.registerEnumType(ProductType, {
    name: 'ProductType',
    description: 'The basic product types',
});
//# sourceMappingURL=product.enum.js.map