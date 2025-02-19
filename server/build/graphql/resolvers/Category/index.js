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
exports.categoriesResolvers = void 0;
const mongodb_1 = require("mongodb");
const utils_1 = require("../../../lib/utils");
const slugify_1 = require("../../../lib/utils/slugify");
const search_1 = require("../../../lib/utils/search");
const image_store_1 = require("../../../lib/utils/image-store");
exports.categoriesResolvers = {
    Query: {
        categories: (_root, { type, limit, offset, searchText }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            let categories = yield db.categories.find({}).sort({ _id: -1 }).toArray();
            let visibleCategories = [];
            if (type) {
                categories = categories.filter((category) => {
                    return category.type_id === type;
                });
            }
            categories.map((category) => {
                if (category.visible) {
                    visibleCategories.push(category);
                }
            });
            visibleCategories = (0, search_1.search)(visibleCategories, ['name', 'slug'], searchText);
            const hasMore = visibleCategories.length > offset + limit;
            return {
                items: limit == 0 ? visibleCategories : visibleCategories.slice(offset, offset + limit),
                totalCount: visibleCategories.length,
                hasMore,
            };
        }),
        shopCategories: (_root, { type, limit, offset, searchText }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            let categories = yield db.categories.find({ parent_id: null }).sort({ _id: -1 }).toArray();
            if (type) {
                const typeResult = yield db.types.findOne({ slug: type });
                categories = categories.filter((category) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    return category.type_id === typeResult._id.toString();
                });
            }
            categories = (0, search_1.search)(categories, ['name', 'slug'], searchText);
            const hasMore = categories.length > offset + limit;
            return {
                items: limit == 0 ? categories : categories.slice(offset, offset + limit),
                totalCount: categories.length,
                hasMore,
            };
        })
    },
    Mutation: {
        createCategory: (_root, { input }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            let bannerImagePath = '';
            const existsData = yield db.categories.findOne({ slug: (0, slugify_1.slugify)(input.name) });
            if (existsData) {
                throw new Error("Resource already exits.");
            }
            if (input.banner_data) {
                bannerImagePath = (0, image_store_1.storeImage)(input.banner, input.banner_data.name);
            }
            else {
                bannerImagePath = 'images/grocery-default-image.png';
            }
            const insertData = {
                _id: new mongodb_1.ObjectId(),
                type_id: input.type_id,
                parent_id: input.parent_id ? input.parent_id : null,
                name: input.name,
                visible: input.visible,
                slug: (0, slugify_1.slugify)(input.name),
                banner: bannerImagePath,
                icon: input.icon,
                meta_title: input.meta_title,
                meta_keyword: input.meta_keyword,
                meta_description: input.meta_description,
                created_at: new Date().toUTCString(),
            };
            const insertResult = yield db.categories.insertOne(insertData);
            return insertResult.ops[0];
        }),
        updateCategory: (_root, { id, input }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            let bannerImagePath = '';
            const existsData = yield db.categories.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!existsData) {
                throw new Error("Resource not found.");
            }
            if (input.banner_data) {
                bannerImagePath = (0, image_store_1.storeImage)(input.banner, input.banner_data.name);
            }
            else {
                bannerImagePath = input.banner;
            }
            const updateData = {
                type_id: input.type_id,
                parent_id: input.parent_id ? input.parent_id : null,
                name: input.name,
                slug: (0, slugify_1.slugify)(input.name),
                banner: bannerImagePath,
                visible: input.visible,
                icon: input.icon,
                meta_title: input.meta_title,
                meta_keyword: input.meta_keyword,
                meta_description: input.meta_description,
                updated_at: new Date().toUTCString(),
            };
            yield db.categories.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: updateData });
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return yield db.categories.findOne({ _id: new mongodb_1.ObjectId(id) });
        }),
        deleteCategory: (__root, { id }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const deleteResult = yield db.categories.findOneAndDelete({
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
    Category: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        id: (category) => category._id.toString(),
        // eslint-disable-next-line @typescript-eslint/ban-types
        children: (category, _args, { db }) => __awaiter(void 0, void 0, void 0, function* () {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const categories = yield db.categories.find({ parent_id: category._id.toString() }).sort({ _id: -1 }).toArray();
            const convertedCategories = [];
            for (let i = 0; i < categories.length; i++) {
                const categoryItem = categories[i];
                convertedCategories.push({
                    id: categoryItem._id ? categoryItem._id.toString() : null,
                    type_id: categoryItem.type_id,
                    name: categoryItem.name,
                    slug: categoryItem.slug,
                    banner: categoryItem.banner,
                    icon: categoryItem.icon
                });
            }
            return convertedCategories;
        }),
    }
};
