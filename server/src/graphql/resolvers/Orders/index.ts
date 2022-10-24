import {ObjectId} from 'mongodb';
import {IResolvers} from 'apollo-server-express';
import {Request} from "express";
import {
    Database,
    ICommonPaginationArgs,
    ICommonPaginationReturnType,
    IOrder,
    IOrderTracker,
    IProduct
} from "../../../lib/types";
import {authorize} from "../../../lib/utils";
import {IOrderInputArgs, IOrderProductInput} from "./types";
import {search} from "../../../lib/utils/search";
import shortid from "shortid";
import { sendConfirmationMail, sendClientConfirmationMail } from '../../../lib/utils/number-verification-otp';

const getDeliverySchedule = (details: string) => {
if (!details) return '';
const word = 'Horario';

const index = details.indexOf(word);   // 8
const length = word.length;			// 7

return details.slice(index + length);
}


const oderTracker: Array<IOrderTracker> = [
    {
        status: "Pendiente",
        ordering: 1,
        is_current: true,
        step_competed: true,
    },
    {
        status: "Recibido",
        ordering: 2,
        is_current: false,
        step_competed: false,
    },
    {
        status: "Procesando",
        ordering: 3,
        is_current: false,
        step_competed: false,
    },
    {
        status: "EnTransito",
        ordering: 4,
        is_current: false,
        step_competed: false,
    },
    {
        status: "Entregado",
        ordering: 5,
        is_current: false,
        step_competed: false,
    },
    {
        status: "Cancelado",
        ordering: 6,
        is_current: false,
        step_competed: false,
    },
    {
        status: "Fallado",
        ordering: 7,
        is_current: false,
        step_competed: false,
    }
];


const makeObjectIds =  (productsInput: IOrderProductInput[]) =>  {
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
        ): Promise<IOrder[]> => {
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
            await authorize(req, db);

            const paymentOption = await db.payment_options.findOne({_id: new ObjectId(input.payment_option_id)});

            // Products quantity substation
            const products: Array<IProduct> = await db.products.find({ _id: {$in: makeObjectIds(input.products)}}).toArray();
            
            for (let i = 0; i < input.products.length; i++) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
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


            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const {name: PaymentName, type: paymentType} = paymentOption;
            /*let paymentStatus = "";
            if (paymentType.toLowerCase() == 'cod' || paymentType.toLowerCase() == 'cash on delivery') {
                paymentStatus = "Unpaid";
            } else {
                paymentStatus = "Paid";
            }*/

            // name
            //     isPickUp
            //     pickUpAddress
            //     details
            //     delivery_date

            const insertData: IOrder = {
                _id: new ObjectId(),
                order_code: generateOrderCode(),
                customer_id: input.customer_id,
                contact_number: input.contact_number,
                payment_option_id: input.payment_option_id,
                delivery_method_id: input.delivery_method_id,
                delivery_date: input.delivery_date,
                datetime: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }),
                delivery_address: input.delivery_address,
                sub_total: input.sub_total,
                total: input.total,
                coupon_code: input.coupon_code,
                discount_amount: input.discount_amount,
                payment_id: input.payment_id,
                payment_method: PaymentName,
                payment_status: "Sin pagar",
                status: "Pendiente",
                order_tracking: oderTracker,
                order_products: input.products,
                created_at: new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }),
            };

            const insertResult = await db.orders.insertOne(insertData);
            // let productsList = [];
            if (insertResult.ops[0]) {
                for (let i = 0; i < products.length; i++) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    const dbProduct: IProduct = await db.products.findOne({_id: new ObjectId(input.products[i].product_id)});
                    const purchasedQuantity = input.products[i].quantity + input.products[i].recicledQuantity;
                    const total = dbProduct.product_quantity - purchasedQuantity;

                    // productsList.push({ productName: dbProduct.name }, { purchasedQuantity: purchasedQuantity, quantityLeft: total })

                    await db.products.updateOne(
                        {_id: products[i]._id},
                        {$set: {product_quantity: total }}
                    )
                }
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const deliveryMethod = await db.delivery_methods.findOne({ _id: new ObjectId(input.delivery_method_id) });
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // const deliveryDateAndTime = `${getDeliverySchedule(deliveryMethod?.details)} - ${moment(deliveryDate).format('DD MMM')}`;
            const customer = await db.users.findOne({_id: new ObjectId(input.customer_id)});
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const { data, status } = await sendConfirmationMail('estebanmuruzabal@gmail.com', customer, input, deliveryMethod.name, paymentOption?.name);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (customer?.email?.length > 0) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
                const { data: data1, status: status1 } = await sendClientConfirmationMail(customer?.email, customer, input, deliveryMethod.name, paymentOption?.name);
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
                throw new Error("Order dose not exits.");
            }
            let statuses = [];

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