import {ObjectId} from 'mongodb';
import {IResolvers} from 'apollo-server-express';
import {Request} from "express";
import {Database, ICommonMessageReturnType, ICommonPaginationReturnType, IProduct} from "../../../lib/types";
import {authorize} from "../../../lib/utils";
import {IProductInput, IProductsArgs, IUpdateProductInputArgs} from "./types";
import {search} from "../../../lib/utils/search";
import {storeImage} from "../../../lib/utils/image-store";

export const shopsResolvers: IResolvers = {
    Query: {
        shops: async (
            _root: undefined,
            {}: IProductsArgs,
            {db, req}: { db: Database, req: Request }
        ): Promise<ICommonPaginationReturnType> => {
            let shops = await db.shops.find({}).toArray();

            shops = shops.filter((shop) => !!shop.shopIsOnline);

            return {
                items: shops,
                totalCount: shops.length,
                hasMore: false,
            }
        },
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
        getAvailableProducts: async (
            _root: undefined,
            {type, category, limit, offset, searchText}: IProductsArgs,
            {db, req}: { db: Database, req: Request }
        ): Promise<IProduct[]> => {
            let products = await db.products.find({}).toArray();

            products = products.filter((product) =>  product.product_quantity > 0);

            return products;
        },
        getProduct: async (
            _root: undefined,
            {slug}: { slug: string },
            {db, req}: { db: Database, req: Request }
        ): Promise<IProduct> => {
            const product = await db.products.findOne({slug: slug});

            if (!product) {
                throw new Error("Resource not found.");
            }

            return product;
        }
    },

    Mutation: {
        createProduct: async (
            _root: undefined,
            {input}: {input: IProductInput},
            {db, req}: { db: Database, req: Request }
        ): Promise<IProduct> => {
            await authorize(req, db);
            const imagesPath = [];
            const imagesData = JSON.parse(input.images_data);
            const existsData = await db.products.findOne({slug: input.slug});

            if (existsData) {
                throw new Error("Resource already exits with this slug name.");
            }

            if (imagesData.length) {
                for (let i = 0; i < input.images.length; i++) {
                    imagesPath.push(storeImage(input.images[i], imagesData[i].name));
                }
            } else {
                imagesPath.push('images/grocery-default-image.png');
            }


            const insertData: IProduct = {
                _id: new ObjectId(),
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

            const insertResult = await db.products.insertOne(insertData);
            return insertResult.ops[0];
        },

        updateProduct: async (
            _root: undefined,
            {id, input}: IUpdateProductInputArgs,
            {db, req}: { db: Database, req: Request }
        ): Promise<IProduct> => {
            await authorize(req, db);
            let imagesPath = [];
            const imagesData = input.images_data ? JSON.parse(input.images_data) : [];
            const existsData = await db.products.findOne({_id: new ObjectId(id)});
            if (!existsData) {
                throw new Error("Resource not found.");
            }

            if (imagesData.length) {
                for (let i = 0; i < input.images.length; i++) {
                    imagesPath.push(storeImage(input.images[i], imagesData[i].name));
                }
            } else {
                imagesPath = input.images;
            }

            const updateData: IProduct = {
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

            await db.products.updateOne(
                {_id: new ObjectId(id)},
                {$set: updateData}
            );

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return await db.products.findOne({_id: new ObjectId(id)});
        },

        deleteProduct: async (
            __root: undefined,
            {id}: { id: string },
            {db, req}: { db: Database, req: Request }
        ): Promise<ICommonMessageReturnType> => {
            await authorize(req, db);

            const deleteResult = await db.products.findOneAndDelete({
                _id: new ObjectId(id)
            });

            if (!deleteResult.value) {
                throw new Error("Failed to delete resource.")
            }

            return {
                message: 'Resource successfully deleted.',
                status: true
            };
        },
    },

    Product: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        id: (product: IProduct): string => product._id.toString(),
    }
}