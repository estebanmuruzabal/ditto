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
exports.ordersResolvers = void 0;
const mongodb_1 = require("mongodb");
const utils_1 = require("../../../lib/utils");
const search_1 = require("../../../lib/utils/search");
const shortid_1 = __importDefault(require("shortid"));
const oderTracker = [
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
const makeObjectIds = (productsInput) => {
    const objIds = [];
    productsInput.forEach(item => {
        objIds.push(new mongodb_1.ObjectId(item.product_id));
    });
    return objIds;
};
const generateOrderCode = () => {
    shortid_1.default.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
    return 'OC_' + shortid_1.default.generate();
};
exports.ordersResolvers = {
    Query: {
        orders: (_root, { status, limit, offset, searchText }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield utils_1.authorize(req, db);
            let data = yield db.orders.find({}).sort({ _id: -1 }).toArray();
            if (status) {
                data = data.filter((item) => {
                    return item.status === status;
                });
            }
            data = search_1.search(data, [
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
            };
        }),
        getUserOrders: (_root, _args, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield utils_1.authorize(req, db);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return yield db.orders.find({ customer_id: user._id.toString() }).sort({ _id: -1 }).toArray();
        })
    },
    Mutation: {
        createOrder: (_root, { input }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield utils_1.authorize(req, db);
            const paymentOption = yield db.payment_options.findOne({ _id: new mongodb_1.ObjectId(input.payment_option_id) });
            // Products quantity substation
            const products = yield db.products.find({ _id: { $in: makeObjectIds(input.products) } }).toArray();
            console.log('db products', products);
            console.log('---');
            console.log('input.products', input.products);
            for (let i = 0; i < products.length; i++) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                if (products[i]._id.toString() != input.products[i].product_id) {
                    throw new Error("Something went wrong! Please contact support to resolve this problem.");
                }
                if (products[i].product_quantity < input.products[i].quantity) {
                    throw new Error(`'${input.products[i].name}', This product do not have enough product quantity. Available quantity: ${products[i].product_quantity}`);
                }
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const { name: PaymentName, type: paymentType } = paymentOption;
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
            const insertData = {
                _id: new mongodb_1.ObjectId(),
                order_code: generateOrderCode(),
                customer_id: input.customer_id,
                contact_number: input.contact_number,
                payment_option_id: input.payment_option_id,
                delivery_method: input.delivery_method_id,
                delivery_date: input.delivery_date,
                datetime: new Date().toUTCString(),
                delivery_address: input.delivery_address,
                sub_total: input.sub_total,
                total: input.total,
                coupon_code: input.coupon_code,
                discount_amount: input.discount_amount,
                payment_id: input.payment_id,
                payment_method: PaymentName,
                payment_status: "Unpaid",
                status: "Pendiente",
                order_tracking: oderTracker,
                order_products: input.products,
                created_at: new Date().toUTCString(),
            };
            const insertResult = yield db.orders.insertOne(insertData);
            if (insertResult.ops[0]) {
                for (let i = 0; i < products.length; i++) {
                    yield db.products.updateOne({ _id: products[i]._id }, { $set: { product_quantity: products[i].product_quantity - (input.products[i].quantity + input.products[i].recicledQuantity) } });
                }
            }
            return insertResult.ops[0];
        }),
        updateOrderStatus: (_root, { id, orderingPosition }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield utils_1.authorize(req, db);
            const orderResult = yield db.orders.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!orderResult) {
                throw new Error("Order dose not exits.");
            }
            let statuses = [];
            statuses = orderResult.order_tracking.map(item => {
                if (item.ordering == orderingPosition) {
                    return {
                        status: item.status,
                        ordering: item.ordering,
                        is_current: true,
                        step_competed: item.step_competed,
                    };
                }
                else {
                    return {
                        status: item.status,
                        ordering: item.ordering,
                        is_current: false,
                        step_competed: item.step_competed,
                    };
                }
            });
            statuses = statuses.map(item => {
                if (item.ordering <= orderingPosition) {
                    return {
                        status: item.status,
                        ordering: item.ordering,
                        is_current: item.is_current,
                        step_competed: true,
                    };
                }
                else {
                    return {
                        status: item.status,
                        ordering: item.ordering,
                        is_current: item.is_current,
                        step_competed: false,
                    };
                }
            });
            if (orderingPosition == 6 || orderingPosition == 7) {
                statuses = statuses.map(item => {
                    return {
                        status: item.status,
                        ordering: item.ordering,
                        is_current: item.is_current,
                        step_competed: false,
                    };
                });
            }
            const currentStatus = statuses.filter(item => {
                if (item.ordering == orderingPosition)
                    return item;
            })[0];
            yield db.orders.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: { "order_tracking": statuses, "status": currentStatus.status } });
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return yield db.orders.findOne({ _id: new mongodb_1.ObjectId(id) });
        }),
    },
    Order: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        id: (order) => order._id.toString(),
        // eslint-disable-next-line @typescript-eslint/ban-types
        delivery_method: (order, _args, { db }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield db.delivery_methods.findOne({ _id: new mongodb_1.ObjectId(order.delivery_method) });
        })
    }
};
