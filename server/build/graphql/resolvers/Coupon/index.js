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
exports.couponsResolvers = void 0;
const mongodb_1 = require("mongodb");
const utils_1 = require("../../../lib/utils");
const search_1 = require("../../../lib/utils/search");
const constant_1 = require("../../../lib/utils/constant");
const checkCouponDateNotExpired = function (coupon) {
    const expireDate = new Date(coupon.expiration_date ? coupon.expiration_date : new Date);
    const today = new Date();
    return (expireDate > today);
};
const checkCouponRunningStatus = function (coupon) {
    return (coupon.status == constant_1.RUNNING);
};
const checkCouponValidity = function (coupon) {
    if (!checkCouponDateNotExpired(coupon))
        throw new Error("Sorry ! This Coupon is Expired.");
    if (!checkCouponRunningStatus)
        throw new Error("Sorry ! This Coupon is Disabled.");
    return true;
};
exports.couponsResolvers = {
    Query: {
        coupons: (_root, { limit, offset, searchText }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            let coupons = yield db.coupons.find({}).sort({ _id: -1 }).toArray();
            coupons = coupons.map(coupon => (Object.assign(Object.assign({}, coupon), { valid: (checkCouponDateNotExpired(coupon) && checkCouponRunningStatus(coupon)) })));
            coupons = (0, search_1.search)(coupons, ['title', 'code'], searchText);
            const hasMore = coupons.length > offset + limit;
            return {
                items: limit == 0 ? coupons : coupons.slice(offset, offset + limit),
                totalCount: coupons.length,
                hasMore,
            };
        }),
        validateCoupon: (_root, { code }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const coupon = yield db.coupons.findOne({ code: code });
                if (!coupon)
                    throw new Error("Resource not found.");
                const validity = checkCouponValidity(coupon);
                return { valid: validity };
            }
            catch (error) {
                console.log(error.message);
                throw error;
            }
        }),
    },
    Mutation: {
        createCoupon: (_root, { input }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const existsData = yield db.coupons.findOne({ code: input.code });
            if (existsData) {
                throw new Error("This Code already exits.");
            }
            const insertData = {
                _id: new mongodb_1.ObjectId(),
                title: input.title,
                code: input.code,
                percentage: input.percentage,
                maximum_discount_amount: input.maximum_discount_amount,
                expiration_date: input.expiration_date,
                status: input.status ? input.status : constant_1.RUNNING,
                created_at: new Date().toUTCString(),
                updated_at: '',
            };
            const insertResult = yield db.coupons.insertOne(insertData);
            return insertResult.ops[0];
        }),
        updateCoupon: (_root, { id, input }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            // await authorize(req, db);
            const couponExists = yield db.coupons.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!couponExists) {
                throw new Error("Resource not found.");
            }
            const updateData = {
                title: input.title,
                code: input.code,
                percentage: input.percentage,
                maximum_discount_amount: input.maximum_discount_amount,
                expiration_date: input.expiration_date,
                status: input.status,
                updated_at: new Date().toUTCString(),
            };
            yield db.coupons.updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: updateData });
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return yield db.coupons.findOne({ _id: new mongodb_1.ObjectId(id) });
        }),
        deleteCoupon: (__root, { id }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, utils_1.authorize)(req, db);
            const deleteResult = yield db.coupons.findOneAndDelete({
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
        getCoupon: (_root, { code }, { db, req }) => __awaiter(void 0, void 0, void 0, function* () {
            let coupon = yield db.coupons.findOne({ code: code });
            let message;
            if (!coupon) {
                message = {
                    status: false,
                    message: "Coupon invalid."
                };
            }
            if (coupon && !checkCouponDateNotExpired(coupon)) {
                message = {
                    status: false,
                    message: "Coupon invalid."
                };
            }
            if (coupon && coupon.status !== constant_1.RUNNING) {
                message = {
                    status: false,
                    message: "Coupon invalid."
                };
            }
            if (message && !message.status) {
                coupon = null;
            }
            return {
                coupon: coupon ? coupon : undefined,
                message: message ? message : undefined,
            };
        }),
    },
    Coupon: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        id: (coupon) => coupon._id.toString(),
    }
};
