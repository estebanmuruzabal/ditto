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
const product_resolver_1 = __importDefault(require("./admin/services/product/product.resolver"));
const category_resolver_1 = __importDefault(require("./admin/services/category/category.resolver"));
const customer_resolver_1 = __importDefault(require("./admin/services/customer/customer.resolver"));
const coupon_resolver_1 = __importDefault(require("./admin/services/coupon/coupon.resolver"));
const order_resolver_1 = __importDefault(require("./admin/services/order/order.resolver"));
const staff_resolver_1 = __importDefault(require("./admin/services/staff/staff.resolver"));
const app = express_1.default();
const path = '/admin/graphql';
const PORT = 4000;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const schema = yield type_graphql_1.buildSchema({
        resolvers: [
            product_resolver_1.default,
            category_resolver_1.default,
            customer_resolver_1.default,
            order_resolver_1.default,
            coupon_resolver_1.default,
            staff_resolver_1.default,
        ],
        validate: false,
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
//# sourceMappingURL=server.admin.js.map