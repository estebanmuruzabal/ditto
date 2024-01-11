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
exports.shopsResolvers = void 0;
const mongodb_1 = require("mongodb");
const utils_1 = require("../../../lib/utils");
const image_store_1 = require("../../../lib/utils/image-store");
exports.shopsResolvers = {
    Query: {
        shops: (_root, {}, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            let shops = yield db.shops.find({}).toArray();
            shops = shops.filter((shop) => !!shop.shopIsOnline);
            return {
                items: shops,
                totalCount: shops.length,
                hasMore: false,
            };
        }),
        // productsBetweenBounds: async (
        //     _root: undefined,
        //     {}: IProductsArgs,
        //     {db, req}: { db: Database, req: Request }
        // ): Promise<ICommonPaginationReturnType> => {
        //     let shops = await db.shops.find({}).toArray();
        //     shops = shops.filter((shop) => !!shop.shopIsOnline);
        //     return {
        //         items: shops,
        //         totalCount: shops.length,
        //         hasMore: false,
        //     }
        // },
        // productsByShopId:
        // shopsBetweenBounds
        // productsBetweenBounds
        // unsused @delete bellow method
        getAvailableProducts: (_root, { type, category, limit, offset, searchText }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            let products = yield db.products.find({}).toArray();
            products = products.filter((product) => product.product_quantity > 0);
            return products;
        }),
        getProduct: (_root, { slug }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            const product = yield db.products.findOne({ slug: slug });
            if (!product) {
                throw new Error("Resource not found.");
            }
            return product;
        })
    },
    Mutation: {
        createProduct: (_root, { input }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const imagesPath = [];
            const imagesData = JSON.parse(input.images_data);
            const existsData = yield db.products.findOne({ slug: input.slug });
            if (existsData) {
                throw new Error("Resource already exits with this slug name.");
            }
            if (imagesData.length) {
                for (let i = 0; i < input.images.length; i++) {
                    imagesPath.push((0, image_store_1.storeImage)(input.images[i], imagesData[i].name));
                }
            }
            else {
                imagesPath.push('images/grocery-default-image.png');
            }
            const insertData = {
                _id: new mongodb_1.ObjectId(),
                type: input.type,
                categories: JSON.parse(input.categories),
                name: input.name,
                slug: input.slug,
                description: input.description,
                packagePrice: input.packagePrice,
                images: imagesPath,
                unit: input.unit,
                price: input.price,
                sale_price: input.sale_price,
                discount_in_percent: input.discount_in_percent,
                product_quantity: input.product_quantity,
                meta_title: input.meta_title,
                meta_keyword: input.meta_keyword,
                meta_description: input.meta_description,
                is_featured: input.is_featured ? input.is_featured : false,
                is_online: input.is_online ? input.is_online : false,
                created_at: new Date().toUTCString(),
            };
            const insertResult = yield db.products.insertOne(insertData);
            return insertResult.ops[0];
        }),
        updateProduct: (_root, { id, input }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            let imagesPath = [];
            const imagesData = input.images_data ? JSON.parse(input.images_data) : [];
            const existsData = yield db.products.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!existsData) {
                throw new Error("Resource not found.");
            }
            if (imagesData.length) {
                for (let i = 0; i < input.images.length; i++) {
                    imagesPath.push((0, image_store_1.storeImage)(input.images[i], imagesData[i].name));
                }
            }
            else {
                imagesPath = input.images;
            }
            const updateData = {
                type: input.type,
                categories: JSON.parse(input.categories),
                name: input.name,
                slug: input.slug,
                description: input.description,
                images: imagesPath,
                unit: input.unit,
                packagePrice: input.packagePrice,
                price: input.price,
                sale_price: input.sale_price,
                discount_in_percent: input.discount_in_percent,
                product_quantity: input.product_quantity,
                meta_title: input.meta_title,
                meta_keyword: input.meta_keyword,
                meta_description: input.meta_description,
                is_featured: input.is_featured ? input.is_featured : false,
                is_online: input.is_online ? input.is_online : false,
                updated_at: new Date().toUTCString(),
            };
            yield db.products.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: updateData });
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return yield db.products.findOne({ _id: new mongodb_1.ObjectId(id) });
        }),
        deleteProduct: (__root, { id }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const deleteResult = yield db.products.findOneAndDelete({
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
    Product: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        id: (product) => product._id.toString(),
    }
};
