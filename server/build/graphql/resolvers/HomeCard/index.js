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
exports.homeCardsResolvers = void 0;
const mongodb_1 = require("mongodb");
const utils_1 = require("../../../lib/utils");
const search_1 = require("../../../lib/utils/search");
const image_store_1 = require("../../../lib/utils/image-store");
exports.homeCardsResolvers = {
    Query: {
        homeCards: (_root, { limit, offset, searchText }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            let data = yield db.home_cards.find({}).sort({ _id: -1 }).toArray();
            data = (0, search_1.search)(data, ['name', 'url'], searchText);
            const hasMore = data.length > offset + limit;
            return {
                items: limit == 0 ? data : data.slice(offset, offset + limit),
                totalCount: data.length,
                hasMore,
            };
        }),
        getHomeCards: (_root, { type }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            let data = yield db.home_cards.find({ status: true }).sort({ _id: -1 }).toArray();
            if (type) {
                data = data.filter((card) => card.types.find((item) => item.slug === type));
            }
            return data;
        })
    },
    Mutation: {
        createHomeCard: (_root, { name, url, image, image_data, status, types }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            let imagePath = '';
            imagePath = (0, image_store_1.storeImage)(image, image_data.name);
            const data = {
                _id: new mongodb_1.ObjectId(),
                name: name,
                url: url,
                image: imagePath,
                status: status,
                types: JSON.parse(types),
                created_at: new Date().toUTCString(),
            };
            const insertResult = yield db.home_cards.insertOne(data);
            return insertResult.ops[0];
        }),
        updateHomeCard: (_root, { id, name, url, image, image_data, status, types }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            let imagePath = '';
            if (image_data) {
                imagePath = (0, image_store_1.storeImage)(image, image_data.name);
            }
            else {
                imagePath = image;
            }
            const data = {
                name: name,
                url: url,
                image: imagePath,
                status: status,
                types: JSON.parse(types),
                updated_at: new Date().toUTCString(),
            };
            yield db.home_cards.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: data });
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return yield db.home_cards.findOne({ _id: new mongodb_1.ObjectId(id) });
        }),
        deleteHomeCard: (__root, { id }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const deleteResult = yield db.home_cards.findOneAndDelete({
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
    HomeCard: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        id: (card) => card._id.toString(),
    }
};
