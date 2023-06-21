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
exports.ordersResolvers = exports.makeObjectIds = void 0;
const mongodb_1 = require("mongodb");
const utils_1 = require("../../../lib/utils");
const search_1 = require("../../../lib/utils/search");
const shortid_1 = __importDefault(require("shortid"));
const number_verification_otp_1 = require("../../../lib/utils/number-verification-otp");
const index_1 = require("../../../index");
const send_1 = require("../../../controllers/send");
const customersMessages_1 = require("../../../messages/customersMessages");
const constant_1 = require("../../../lib/utils/constant");
const shoppingUtils_1 = require("../../../lib/utils/shoppingUtils");
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
exports.makeObjectIds = makeObjectIds;
const generateOrderCode = () => {
    shortid_1.default.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
    return 'OC_' + shortid_1.default.generate();
};
exports.ordersResolvers = {
    Query: {
        allOrders: (_root, _args, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield db.orders.find().sort({ _id: -1 }).toArray();
        }),
        orders: (_root, { status, limit, offset, searchText }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            let data = yield db.orders.find({}).sort({ _id: -1 }).toArray();
            if (status) {
                data = data.filter((item) => {
                    return item.status === status;
                });
            }
            data = (0, search_1.search)(data, [
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
            const user = yield (0, utils_1.authorize)(req, db);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return yield db.orders.find({ customer_id: user._id.toString() }).sort({ _id: -1 }).toArray();
        })
    },
    Mutation: {
        createOrder: (_root, { input }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            // await authorize(req, db);
            const paymentOption = yield db.payment_options.findOne({ _id: new mongodb_1.ObjectId(input.payment_option_id) });
            const products = yield db.products.find({ _id: { $in: (0, exports.makeObjectIds)(input.products) } }).toArray();
            // @ts-ignore
            const { name: paymentOptionName, type: paymentOptionType } = paymentOption;
            const deliveryMethod = yield db.delivery_methods.findOne({ _id: new mongodb_1.ObjectId(input.delivery_method_id) });
            // @ts-ignore
            const { name: deliveryMethodName } = deliveryMethod;
            const customer = yield db.users.findOne({ _id: new mongodb_1.ObjectId(input.customer_id) });
            if (!customer)
                throw new Error('Customer not found');
            const { name: customerName, email: customerEmail } = customer;
            const purchasedDate = new Date().toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' });
            // Products quantity substation
            for (let i = 0; i < input.products.length; i++) {
                // @ts-ignore
                const dbProduct = yield db.products.findOne({ _id: new mongodb_1.ObjectId(input.products[i].product_id) });
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
            const insertData = {
                _id: new mongodb_1.ObjectId(),
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
                payment_status: "Sin pagar",
                status: "Pendiente",
                order_tracking: oderTracker,
                order_products: input.products,
                created_at: purchasedDate,
            };
            const insertResult = yield db.orders.insertOne(insertData);
            if (insertResult.ops[0]) {
                for (let i = 0; i < products.length; i++) {
                    // @ts-ignore
                    const dbProduct = yield db.products.findOne({ _id: new mongodb_1.ObjectId(input.products[i].product_id) });
                    const purchasedQuantity = input.products[i].quantity + input.products[i].recicledQuantity;
                    const total = dbProduct.product_quantity - purchasedQuantity;
                    yield db.products.updateOne({ _id: products[i]._id }, { $set: { product_quantity: total } });
                }
            }
            try {
                // EMAIL NOTIFICATION AND WHATSAPP CONFIRMATION
                yield (0, number_verification_otp_1.sendCompanyConfirmationMail)(constant_1.COMPANY_EMAIL, customer, input, deliveryMethodName, paymentOptionName);
                if (customerEmail === null || customerEmail === void 0 ? void 0 : customerEmail.length)
                    yield (0, number_verification_otp_1.sendClientConfirmationMail)(customerEmail, customer, input, deliveryMethodName, paymentOptionName);
                // whatsapp confirmation whatsapp is handled in another logic
                if (!input.isWhatsappPurchase) {
                    const input2 = { delivery_method_name: deliveryMethodName, payment_option_type: paymentOptionType, delivery_address: input.delivery_address, payment_method_name: paymentOptionName, products: input.products, delivery_date: input.delivery_date, total: input.total };
                    const message = (0, shoppingUtils_1.getOrderConfirmationMsgText)(input2, customer);
                    // @ts-ignore
                    (0, send_1.sendMessage)(index_1.client, input.contact_number, message, null);
                }
            }
            catch (error) {
                console.log('error in sending mail/whatsapp', error);
            }
            return insertResult.ops[0];
        }),
        updateOrderStatus: (_root, { id, orderingPosition }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const orderResult = yield db.orders.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!orderResult) {
                throw new Error("Order does not exits.");
            }
            let statuses = [];
            const { contact_number, customer_name } = orderResult;
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
            if (currentStatus.status === 'Entregado') {
                const message = (0, customersMessages_1.orderDeliveredAndFeedBack)(customer_name);
                // @ts-ignore
                (0, send_1.sendMessage)(index_1.client, contact_number, message, null);
            }
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
        // delivery_method_id: async (order: IOrder, _args: {}, { db }: { db: Database }) => {
        //     return await db.delivery_methods.findOne({_id: new ObjectId(order.delivery_method_id)})
        // }
    }
};
