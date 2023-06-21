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
exports.typesResolvers = void 0;
const mongodb_1 = require("mongodb");
const utils_1 = require("../../../lib/utils");
const slugify_1 = require("../../../lib/utils/slugify");
const search_1 = require("../../../lib/utils/search");
const image_store_1 = require("../../../lib/utils/image-store");
exports.typesResolvers = {
    Query: {
        types: (_root, { limit, offset, searchText }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            let types = yield db.types.find({}).sort({ _id: -1 }).toArray();
            types = (0, search_1.search)(types, ['name', 'slug'], searchText);
            const hasMore = types.length > offset + limit;
            return {
                items: limit == 0 ? types : types.slice(offset, offset + limit),
                totalCount: types.length,
                hasMore,
            };
        })
    },
    Mutation: {
        createType: (_root, { input }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            let imagePath = '';
            const typeResult = yield db.types.findOne({ slug: (0, slugify_1.slugify)(input.name) });
            if (typeResult) {
                throw new Error("Type already exits.");
            }
            if (input.image_data) {
                imagePath = (0, image_store_1.storeImage)(input.image, input.image_data.name);
            }
            else {
                imagePath = 'images/grocery-default-image.png';
            }
            const typeData = {
                _id: new mongodb_1.ObjectId(),
                name: input.name,
                slug: (0, slugify_1.slugify)(input.name),
                image: imagePath,
                icon: input.icon,
                home_title: input.home_title,
                home_subtitle: input.home_subtitle,
                meta_title: input.meta_title,
                meta_keyword: input.meta_keyword,
                meta_description: input.meta_description,
                created_at: new Date().toUTCString(),
            };
            const insertResult = yield db.types.insertOne(typeData);
            return insertResult.ops[0];
        }),
        updateType: (_root, { id, input }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            let imagePath = '';
            if (input.image_data) {
                imagePath = (0, image_store_1.storeImage)(input.image, input.image_data.name);
            }
            else {
                imagePath = input.image;
            }
            const typeData = {
                name: input.name,
                slug: (0, slugify_1.slugify)(input.name),
                image: imagePath,
                icon: input.icon,
                home_title: input.home_title,
                home_subtitle: input.home_subtitle,
                meta_title: input.meta_title,
                meta_keyword: input.meta_keyword,
                meta_description: input.meta_description,
                updated_at: new Date().toUTCString(),
            };
            yield db.types.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: typeData });
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return yield db.types.findOne({ _id: new mongodb_1.ObjectId(id) });
        }),
        deleteType: (__root, { id }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const deleteResult = yield db.types.findOneAndDelete({
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
    MainType: {
        // @ts-ignore
        id: (type) => type._id.toString(),
    }
};
