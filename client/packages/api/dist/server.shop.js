"use strict";
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
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const user_resolver_1 = require("./shop/services/user/user.resolver");
const types_resolver_1 = require("./shop/services/types/types.resolver");
const product_resolver_1 = require("./shop/services/product/product.resolver");
const payment_resolver_1 = require("./shop/services/payment/payment.resolver");
const order_resolver_1 = require("./shop/services/order/order.resolver");
const coupon_resolver_1 = require("./shop/services/coupon/coupon.resolver");
const category_resolver_1 = require("./shop/services/category/category.resolver");
const vendors_resolver_1 = require("./shop/services/vendors/vendors.resolver");
const app = express_1.default();
const path = '/shop/graphql';
const PORT = 8000;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const schema = yield type_graphql_1.buildSchema({
        resolvers: [
            user_resolver_1.UserResolver,
            product_resolver_1.ProductResolver,
            payment_resolver_1.PaymentResolver,
            order_resolver_1.OrderResolver,
            types_resolver_1.TypesResolver,
            coupon_resolver_1.CouponResolver,
            category_resolver_1.CategoryResolver,
            vendors_resolver_1.VendorResolver,
        ],
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema,
        introspection: true,
        playground: true,
        tracing: true,
    });
    apolloServer.applyMiddleware({ app, path });
    app.listen(PORT, () => {
        console.log(`🚀 started http://localhost:${PORT}${path}`);
    });
});
main();
//# sourceMappingURL=server.shop.js.map