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
exports.paymentOptionsResolvers = void 0;
const mongodb_1 = require("mongodb");
const utils_1 = require("../../../lib/utils");
const search_1 = require("../../../lib/utils/search");
const image_store_1 = require("../../../lib/utils/image-store");
exports.paymentOptionsResolvers = {
    Query: {
        paymentOptions: (_root, { limit, offset, searchText }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            let data = yield db.payment_options.find({}).sort({ _id: -1 }).toArray();
            data = (0, search_1.search)(data, ['name', 'details'], searchText);
            const hasMore = data.length > offset + limit;
            return {
                items: limit == 0 ? data : data.slice(offset, offset + limit),
                totalCount: data.length,
                hasMore,
            };
        })
    },
    Mutation: {
        createPaymentOption: (_root, { name, type, image, image_data, details }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            image_data = JSON.parse(image_data);
            let imagePath = '';
            const existsData = yield db.payment_options.findOne({ name: name });
            if (existsData) {
                throw new Error("Resource already exits.");
            }
            if (image_data) {
                imagePath = (0, image_store_1.storeImage)(image, image_data.name);
            }
            const insertData = {
                _id: new mongodb_1.ObjectId(),
                name: name,
                type: type,
                image: imagePath,
                details: details,
                created_at: new Date().toUTCString(),
            };
            const insertResult = yield db.payment_options.insertOne(insertData);
            return insertResult.ops[0];
        }),
        updatePaymentOption: (_root, { id, name, type, image, image_data, details }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const existsData = yield db.payment_options.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!existsData) {
                throw new Error("Resource not found.");
            }
            // image_data = JSON.parse(image_data);
            let imagePath = '';
            // disabling new photo update so that the frontend doesnt have to do the inverse process of creating the image_data property
            // if (image_data) {
            //     imagePath = storeImage(image, image_data.name);
            // } else {
            imagePath = image;
            // }
            const updateData = {
                name: name,
                type: type,
                image: imagePath,
                details: details ? details : existsData.details,
                updated_at: new Date().toUTCString(),
            };
            yield db.payment_options.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: updateData });
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return yield db.payment_options.findOne({ _id: new mongodb_1.ObjectId(id) });
        }),
        deletePaymentOption: (__root, { id }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const deleteResult = yield db.payment_options.findOneAndDelete({
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
    PaymentOption: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        id: (type) => type._id.toString(),
    }
};
