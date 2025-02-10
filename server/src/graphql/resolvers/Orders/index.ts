import {ObjectId} from 'mongodb';
import {IResolvers} from 'apollo-server-express';
import {Request} from "express";
import {
    Database,
    ICommonPaginationArgs,
    ICommonPaginationReturnType,
    IOrder,
    IOrderTracker,
    IProduct,
    IQuickOrder,
    TriggerSteps
} from "../../../lib/types";
import {authorize} from "../../../lib/utils";
import {IOrderInputArgs, IOrderProductInput, IOrderQuickInput, IOrderQuickInputArgs} from "./types";
import {search} from "../../../lib/utils/search";
import shortid from "shortid";
import { sendCompanyConfirmationMail, sendClientConfirmationMail, sendSellerConfirmationMail } from '../../../lib/utils/number-verification-otp';
// import { client } from '../../../index';
import { sendMessage } from '../../../controllers/send';
import { orderDeliveredAndFeedBack } from '../../../messages/customersMessages';
import { COMPANY_EMAIL, Locales, timeZone } from '../../../lib/utils/constant';
import { getOrderConfirmationMsgText, getCleanNumber } from '../../../lib/utils/shoppingUtils';
import { englishOrderTracker, spanishOrderTracker } from '../../../lib/utils/localesTexts';
import { EnglishOrderStatus, EnglishPaymentStatus, SpanishOrderStatus, SpanishPaymentStatus } from '../../../utils/constants';


export const makeObjectIds =  (productsInput: IOrderProductInput[]) =>  {
    const objIds: Array<ObjectId> = [];

    productsInput.forEach(item => {
       objIds.push(new ObjectId(item.product_id))
    });

    return objIds;
}

const generateOrderCode = () => {
    shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
    return 'OC_'+shortid.generate();
}

export const ordersResolvers: IResolvers = {
    Query: {
        allOrders: async (
            _root: undefined,
            _args: undefined,
            {db, req}: { db: Database, req: Request }
        ): Promise<IOrder[] | IQuickOrder[]> => {
            return await db.orders.find().sort({_id: -1}).toArray();
        },
        orders: async (
            _root: undefined,
            {status, limit, offset, searchText}: {
                status: string,
                limit: ICommonPaginationArgs["limit"],
                offset: ICommonPaginationArgs["offset"],
                searchText: ICommonPaginationArgs["searchText"]
            },
            {db, req}: { db: Database, req: Request }
        ): Promise<ICommonPaginationReturnType> => {
            await authorize(req, db);

            let data = await db.orders.find({}).sort({_id: -1}).toArray();

            if (status) {
                data = data.filter((item) => {
                    return item.status === status;
                });
            }

            data = search(data, [
                'order_code',
                'customer_id',
                'contact_number',
                'payment_method',
                'payment_status',
                'delivery_address',
                'datetime',
                'amount'
            ], searchText);
            const hasMore = data.length > offset + limit;

            return {
                items: limit == 0 ? data : data.slice(offset, offset + limit),
                totalCount: data.length,
                hasMore,
            }
        },
        getUserOrders: async (
            _root: undefined,
            _args: undefined,
            {db, req}: { db: Database, req: Request }
        ): Promise<IOrder[] | IQuickOrder[]> => {
            const user = await authorize(req, db);

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return await db.orders.find({customer_id: user._id.toString()}).sort({_id: -1}).toArray();
        }
    },

    Mutation: {
        createOrder: async (
            _root: undefined,
            {input}: IOrderInputArgs,
            {db, req}: { db: Database, req: Request }
        )/*: Promise<IOrder>*/ => {
            // await authorize(req, db);
            const token = <string>req.headers["x-access-token"];
            const paymentOption = await db.payment_options.findOne({ _id: new ObjectId(input.payment_option_id) });
            const products: Array<IProduct> = await db.products.find({ _id: { $in: makeObjectIds(input.products) } }).toArray();
            // @ts-ignore
            const { name: paymentOptionName, type: paymentOptionType } = paymentOption;
            const deliveryMethod = await db.delivery_methods.findOne({ _id: new ObjectId(input.delivery_method_id) });
            // @ts-ignore
            const { name: deliveryMethodName } = deliveryMethod;
            const customer = await db.users.findOne({ _id: new ObjectId(input.customer_id) });
            if (!customer) throw new Error('Customer not found');
            const { name: customerName, email: customerEmail } = customer;
            const purchasedDate = new Date().toLocaleString('en-US', { timeZone });
            
            // Products quantity substation
            for (let i = 0; i < input.products.length; i++) {
                // @ts-ignore
                const dbProduct: IProduct = await db.products.findOne({_id: new ObjectId(input.products[i].product_id)});
                if (!dbProduct) {
                    throw new Error("Something went wrong! Product not found. Please contact support to resolve this problem.");
                }
                const purchasedQuantity = input.products[i].quantity + input.products[i].recicledQuantity;
                if (dbProduct.product_quantity < purchasedQuantity) {
                    throw new Error(`'${input.products[i].name}', This product do not have enough product quantity. Available quantity: ${products[i].product_quantity}`);
                }
            }

            /*let paymentStatus = "";
            if (paymentType.toLowerCase() == 'cod' || paymentType.toLowerCase() == 'cash on delivery') {
                paymentStatus = "Unpaid";
            } else {
                paymentStatus = "Paid";
            }*/
            let orderTracker;
            let payment_status;
            let status;
            let lenguageLocale: Locales;
            console.log('token',token)
            switch (input?.lenguageLocale) {
                case Locales.ES: { orderTracker = spanishOrderTracker; payment_status = SpanishPaymentStatus.UNPAID; status = SpanishOrderStatus.PENDING; lenguageLocale = Locales.ES } break;
                case Locales.EN: { orderTracker = englishOrderTracker; payment_status = EnglishPaymentStatus.UNPAID; status = EnglishOrderStatus.PENDING; lenguageLocale = Locales.EN } break;
                default: { console.log('createOrder. no locale found ', input?.lenguageLocale); orderTracker = englishOrderTracker; payment_status = EnglishPaymentStatus.UNPAID; status = EnglishOrderStatus.PENDING; lenguageLocale = Locales.EN } break;
            }

            const insertData: IOrder = {
                _id: new ObjectId(),
                order_code: generateOrderCode(),
                customer_id: input.customer_id,
                contact_number: input.contact_number,
                customer_name: customerName,
                delivery_method_name: deliveryMethodName,
                delivery_pickup_date: input.delivery_date,
                payment_option_id: input.payment_option_id,
                delivery_method_id: input.delivery_method_id,
                datetime: purchasedDate,
                delivery_address: input.delivery_address,
                sub_total: input.sub_total,
                total: input.total,
                coupon_code: input.coupon_code,
                discount_amount: input.discount_amount,
                payment_id: input.payment_id,
                payment_method: paymentOptionName,
                payment_status,
                status,
                order_tracking: orderTracker,
                order_products: input.products,
                created_at: purchasedDate,
                lenguageLocale
            };

            const insertResult = await db.orders.insertOne(insertData);

            if (insertResult.ops[0]) {
                for (let i = 0; i < products.length; i++) {
                    // @ts-ignore
                    const dbProduct: IProduct = await db.products.findOne({_id: new ObjectId(input.products[i].product_id)});
                    const purchasedQuantity = input.products[i].quantity + input.products[i].recicledQuantity;
                    const total = dbProduct.product_quantity - purchasedQuantity;

                    // sending seller email
                    const seller = await db.users.findOne({ _id: new ObjectId(input.products[i].seller_id) });

                    if (seller?.email?.length) await sendSellerConfirmationMail(seller.email, customer, input, deliveryMethodName, paymentOptionName, input.lenguageLocale);
                    await db.products.updateOne(
                        {_id: products[i]._id},
                        {$set: {product_quantity: total }}
                    )
                }
            }
            
            try {
                // EMAIL NOTIFICATION AND WHATSAPP CONFIRMATION
                // await sendCompanyConfirmationMail(COMPANY_EMAIL, customer, input, deliveryMethodName, paymentOptionName, input.lenguageLocale);
                await sendCompanyConfirmationMail(COMPANY_EMAIL, customer, input, deliveryMethodName, paymentOptionName, input.lenguageLocale);

                if (customerEmail?.length) await sendClientConfirmationMail(customerEmail, customer, input, deliveryMethodName, paymentOptionName, input?.lenguageLocale);

                // Whatsapp orders are handled at server/src/adapter/shopBot.ts. Here we send it to web purchases curstomers only
                if (!input.isWhatsappPurchase) {
                    const input2 = { delivery_method_name: deliveryMethodName, payment_option_type: paymentOptionType, delivery_address: input.delivery_address, payment_method_name: paymentOptionName, products: input.products, delivery_date: input.delivery_date, total: input.total }
                    const message: any = getOrderConfirmationMsgText(input2, customer, input.lenguageLocale);

                    sendMessage(input.contact_number, message, TriggerSteps.RESET_CHAT_HISTORY_AND_SHOPPING_CART, token);
                }

            } catch (error) {
                console.log('error in sending mail/whatsapp', error)
            }

            return insertResult.ops[0];
        },
        createQuickOrder: async (
            _root: undefined,
            {input}: IOrderQuickInputArgs,
            {db, req}: { db: Database, req: Request }
        )/*: Promise<IOrder>*/ => {
            // await authorize(req, db);
            // const paymentOption = await db.payment_options.findOne({ _id: new ObjectId(input.payment_option_id) });
            const products: Array<IProduct> = await db.products.find({ _id: { $in: makeObjectIds(input.products) } }).toArray();
            // @ts-ignore
            const { name: paymentOptionName, type: paymentOptionType } = paymentOption;
            // const deliveryMethod = await db.delivery_methods.findOne({ _id: new ObjectId(input.delivery_method_id) });
            // @ts-ignore
            const { name: deliveryMethodName } = deliveryMethod;
            const customer = await db.users.findOne({ _id: new ObjectId(input.customer_id) });
            if (!customer) throw new Error('Customer not found');
            const { name: customerName, email: customerEmail } = customer;
            const purchasedDate = new Date().toLocaleString('en-US', { timeZone });
            
            // Products quantity substation
            for (let i = 0; i < input.products.length; i++) {
                // @ts-ignore
                const dbProduct: IProduct = await db.products.findOne({_id: new ObjectId(input.products[i].product_id)});
                if (!dbProduct) {
                    throw new Error("Something went wrong! Product not found. Please contact support to resolve this problem.");
                }
                const purchasedQuantity = input.products[i].quantity + input.products[i].recicledQuantity;
                if (dbProduct.product_quantity < purchasedQuantity) {
                    throw new Error(`'${input.products[i].name}', This product do not have enough product quantity. Available quantity: ${products[i].product_quantity}`);
                }
            }

            /*let paymentStatus = "";
            if (paymentType.toLowerCase() == 'cod' || paymentType.toLowerCase() == 'cash on delivery') {
                paymentStatus = "Unpaid";
            } else {
                paymentStatus = "Paid";
            }*/

            const insertData: IQuickOrder = {
                _id: new ObjectId(),
                order_code: generateOrderCode(),
                customer_id: input.customer_id,
                customer_name: customerName,
                delivery_method_id: input.delivery_method_id,
                datetime: purchasedDate,
                delivery_address: input.delivery_address,
                total: input.total,
                coupon_code: input.coupon_code,
                discount_amount: input.discount_amount,
                payment_id: input.payment_id,
                payment_status: "Pagado",
                status: "Pendiente",
                order_tracking: englishOrderTracker,
                order_products: input.products,
                created_at: purchasedDate,
                lenguageLocale: input.lenguageLocale
            };

            const insertResult = await db.orders.insertOne(insertData);

            if (insertResult.ops[0]) {
                for (let i = 0; i < products.length; i++) {
                    // @ts-ignore
                    const dbProduct: IProduct = await db.products.findOne({_id: new ObjectId(input.products[i].product_id)});
                    const purchasedQuantity = input.products[i].quantity + input.products[i].recicledQuantity;
                    const total = dbProduct.product_quantity - purchasedQuantity;

                    await db.products.updateOne(
                        {_id: products[i]._id},
                        {$set: {product_quantity: total }}
                    )
                }
            }
            
            try {
                // EMAIL NOTIFICATION AND WHATSAPP CONFIRMATION
                await sendCompanyConfirmationMail(COMPANY_EMAIL, customer, input, '', '', input.lenguageLocale);
                if (customerEmail?.length) await sendClientConfirmationMail(customerEmail, customer, input, deliveryMethodName, paymentOptionName, input.lenguageLocale);

                // whatsapp confirmation whatsapp is handled in another logic
                // if (!input.isWhatsappPurchase) {
                //     const input2 = { delivery_method_name: deliveryMethodName, payment_option_type: paymentOptionType, delivery_address: input.delivery_address, payment_method_name: paymentOptionName, products: input.products, delivery_date: input.delivery_date, total: input.total }
                //     const message = getOrderConfirmationMsgText(input2, customer);
                //     // @ts-ignore
                //     sendMessage(client, input.contact_number, message, null);
                // }

            } catch (error) {
                console.log('error in sending mail/whatsapp', error)
            }

            return insertResult.ops[0];
        },
        updateOrderStatus: async (
            _root: undefined,
            {id, orderingPosition}: { id: string, orderingPosition: number},
            {db, req}: { db: Database, req: Request }
        ): Promise<IOrder> => {
            await authorize(req, db);

            const orderResult = await db.orders.findOne({_id: new ObjectId(id)});
            if (!orderResult) {
                throw new Error("Order does not exits.");
            }
            let statuses = [];
            const { contact_number, customer_name } = orderResult;
            statuses = orderResult.order_tracking.map(item => {
               if (item.ordering == orderingPosition) {
                   return  {
                       status: item.status,
                       ordering: item.ordering,
                       is_current: true,
                       step_competed: item.step_competed,
                   }
               } else  {
                   return  {
                       status: item.status,
                       ordering: item.ordering,
                       is_current: false,
                       step_competed: item.step_competed,
                   }
               }
            });

            statuses = statuses.map(item => {
                if (item.ordering <= orderingPosition) {
                    return  {
                        status: item.status,
                        ordering: item.ordering,
                        is_current: item.is_current,
                        step_competed: true,
                    }
                } else {
                    return  {
                        status: item.status,
                        ordering: item.ordering,
                        is_current: item.is_current,
                        step_competed: false,
                    }
                }
            });

            if (orderingPosition == 6 || orderingPosition == 7) {
                statuses = statuses.map(item => {
                    return  {
                        status: item.status,
                        ordering: item.ordering,
                        is_current: item.is_current,
                        step_competed: false,
                    }
                });
            }

            const currentStatus = statuses.filter(item => {
                if (item.ordering == orderingPosition) return item;
            })[0];

            if (currentStatus.status === 'Entregado') {

                // const message: string = orderDeliveredAndFeedBack(customer_name);

                // sendMessage(client, contact_number, message, null);
            }

            await db.orders.updateOne(
                {_id: new ObjectId(id)},
                {$set: {"order_tracking": statuses, "status": currentStatus.status}}
            );

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return await db.orders.findOne({_id: new ObjectId(id)});
        },
    },

    Order: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        id: (order: IOrder): string => order._id.toString(),
        // eslint-disable-next-line @typescript-eslint/ban-types
        // delivery_method_id: async (order: IOrder, _args: {}, { db }: { db: Database }) => {
        //     return await db.delivery_methods.findOne({_id: new ObjectId(order.delivery_method_id)})
        // }
    }
}