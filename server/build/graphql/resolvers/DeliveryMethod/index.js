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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliveryMethodsResolvers = void 0;
const mongodb_1 = require("mongodb");
const utils_1 = require("../../../lib/utils");
const search_1 = require("../../../lib/utils/search");
exports.deliveryMethodsResolvers = {
    Query: {
        deliveryMethods: (_root, { limit, offset, searchText }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            let data = yield db.delivery_methods.find({}).sort({ _id: -1 }).toArray();
            let visibleDeliveryMethods = [];
            console.log('1', visibleDeliveryMethods);
            data.map((deliMethod) => {
                if (deliMethod === null || deliMethod === void 0 ? void 0 : deliMethod.visible) {
                    visibleDeliveryMethods.push(deliMethod);
                    console.log(deliMethod === null || deliMethod === void 0 ? void 0 : deliMethod.visible);
                }
            });
            console.log('2', visibleDeliveryMethods);
            visibleDeliveryMethods = (0, search_1.search)(data, ['name', 'details'], searchText);
            const hasMore = visibleDeliveryMethods.length > offset + limit;
            return {
                items: limit == 0 ? visibleDeliveryMethods : visibleDeliveryMethods.slice(offset, offset + limit),
                totalCount: visibleDeliveryMethods.length,
                hasMore,
            };
        })
    },
    Mutation: {
        createDeliveryMethod: (_root, { name, details, isPickUp, pickUpAddress }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const existsData = yield db.delivery_methods.findOne({ name: name });
            if (existsData) {
                throw new Error("Resource already exits.");
            }
            const insertData = {
                _id: new mongodb_1.ObjectId(),
                name: name,
                details: details,
                isPickUp,
                pickUpAddress,
                created_at: new Date().toUTCString(),
            };
            const insertResult = yield db.delivery_methods.insertOne(insertData);
            return insertResult.ops[0];
        }),
        updateDeliveryMethod: (_root, { id, name, details, isPickUp, pickUpAddress }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const existsData = yield db.delivery_methods.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!existsData) {
                throw new Error("Resource not found.");
            }
            const updateData = {
                name: name,
                details: details,
                isPickUp,
                pickUpAddress,
                updated_at: new Date().toUTCString(),
            };
            yield db.delivery_methods.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: updateData });
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return yield db.delivery_methods.findOne({ _id: new mongodb_1.ObjectId(id) });
        }),
        deleteDeliveryMethod: (__root, { id }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const deleteResult = yield db.delivery_methods.findOneAndDelete({
                _id: new mongodb_1.ObjectId(id)
            });
            if (!deleteResult.value) {
                throw new Error("Failed to delete resource.");
            }
            return {
                message: 'Resource successfully deleted.',
                status: true
            };
        }),
    },
    DeliveryMethod: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        id: (type) => type._id.toString(),
    }
};
