"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAddressToUser = exports.createOrder = exports.updateUserShoppingCart = exports.getUserShoppingCart = exports.getAvailableProducts = exports.getDeliveryMethods = exports.getPaymentMethods = exports.getProducts = exports.getCategories = exports.saveUserChatHistory = exports.updateUserNameAndEmail = exports.updateUserWorkInfoMutation = exports.signUpUser = exports.fetchCustomerAndToken = exports.getSettings = void 0;
const handle_1 = require("../controllers/handle");
const queries_1 = require("./queries");
const { createApolloFetch } = require('apollo-fetch');
const uri = 'http://52.67.194.237/api';
// const uri = 'http://localhost:7000/api';
const apolloFetch = createApolloFetch({ uri });
const getSettings = () => new Promise((resolve, reject) => {
    apolloFetch({
        query: queries_1.GET_SETTINGS
    }).then((res) => {
        // console.log('[getSettings]:',res);
        resolve(res);
    }).catch((err) => {
        console.log('[getSettings error]:', err);
        resolve(err);
    });
});
exports.getSettings = getSettings;
const fetchCustomerAndToken = (phone) => new Promise((resolve, reject) => {
    apolloFetch({
        query: queries_1.getCustomerQuery,
        variables: { phone },
    }).then((res) => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (((_a = res === null || res === void 0 ? void 0 : res.errors) === null || _a === void 0 ? void 0 : _a.length) > 0 && ((_d = (_c = (_b = res === null || res === void 0 ? void 0 : res.errors) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.message) === null || _d === void 0 ? void 0 : _d.length)) {
            console.log('[fetchCustomer]', (_f = (_e = res === null || res === void 0 ? void 0 : res.errors) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.message);
        }
        else if ((_h = (_g = res === null || res === void 0 ? void 0 : res.data) === null || _g === void 0 ? void 0 : _g.getCustomer) === null || _h === void 0 ? void 0 : _h.user) {
            console.log('[fetchCustomer] User Fetched.');
        }
        else {
            console.log('fetchCustomer response:', res);
        }
        resolve(res);
    }).catch((err) => {
        console.log('fetchCustomer error:', err);
        resolve(err);
    });
});
exports.fetchCustomerAndToken = fetchCustomerAndToken;
const signUpUser = (name, phone, password) => new Promise((resolve, reject) => {
    apolloFetch({
        query: queries_1.signUpQuery,
        variables: { phone, password, name },
    }).then((res) => {
        var _a, _b, _c;
        if (((_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.signUp) === null || _b === void 0 ? void 0 : _b.status) === true) {
            console.log('[signUpUser] User Created Succesfully.', phone);
        }
        else if (((_c = res === null || res === void 0 ? void 0 : res.errors) === null || _c === void 0 ? void 0 : _c.length) > 0 && (res === null || res === void 0 ? void 0 : res.errors[0].message.length)) {
            console.log('[signUpUser] ', res === null || res === void 0 ? void 0 : res.errors[0].message);
        }
        else {
            console.log('SignUp response:', res);
        }
        resolve(res);
    }).catch((err) => {
        console.log('Signup error:', err);
        resolve(err);
    });
});
exports.signUpUser = signUpUser;
// export const updateSoilHumiditySettings1 = (user: any, plant: Plant, fieldName: string, fieldValue: any) => new Promise((resolve, reject) => {
//     apolloFetch({
//         query: UPDATE_HUMIDITY_SETTINGS_1,
//         variables: {
//             id: user.id,
//             [fieldName]: fieldValue,
//             ...plant
//         }
//     }).then((res: ICategory[]) => {
//         console.log('[updateSoilHumiditySettings1]:', res);
//         resolve(res);
//     }).catch((err: any) => {
//         console.log('[updateSoilHumiditySettings1 error]:', err);
//         resolve(err);
//     });
// });
// export const updateSoilHumiditySettings2 = (user: any, plant: Plant, fieldName: string, fieldValue: any) => new Promise((resolve, reject) => {
//     apolloFetch({
//         query: UPDATE_HUMIDITY_SETTINGS_2,
//         variables: {
//             id: user.id,
//             [fieldName]: fieldValue,
//             ...plant
//         }
//     }).then((res: ICategory[]) => {
//         console.log('[updateSoilHumiditySettings2]:', res);
//         resolve(res);
//     }).catch((err: any) => {
//         console.log('[updateSoilHumiditySettings2 error]:', err);
//         resolve(err);
//     });
// });
const updateUserWorkInfoMutation = (user, logDescription) => new Promise((resolve, reject) => {
    console.log(user, logDescription);
    apolloFetch({
        query: queries_1.UPDATE_USER_WORK_INFO,
        variables: {
            id: user.id,
            isWorking: user.workInfo.isWorking,
            startedWorkTime: user.workInfo.startedWorkTime,
            stoppedWorkTime: user.workInfo.stoppedWorkTime,
            ratePerHour: user.workInfo.ratePerHour,
            logDescription,
            totalWorkingMinutesPerWeek: Math.round(user.workInfo.totalWorkingMinutesPerWeek),
            totalSalaryToPayWeekly: Math.round(user.workInfo.totalSalaryToPayWeekly),
            advancedSalaryPaid: Math.round(user.workInfo.advancedSalaryPaid),
            taskRelated: user.workInfo.taskRelated,
            role: user.role
        }
    }).then((res) => {
        console.log('[updateUserWorkInfoMutation]:', res);
        resolve(res);
    }).catch((err) => {
        console.log('[updateUserWorkInfoMutation error]:', err);
        resolve(err);
    });
});
exports.updateUserWorkInfoMutation = updateUserWorkInfoMutation;
const updateUserNameAndEmail = (id, name, email, token) => new Promise((resolve, reject) => {
    // @ts-ignore
    // apolloFetch.use(({ options }, next: any) => { options.headers = { 'x-access-token': token }; next(); });
    apolloFetch({
        query: queries_1.updateUserNameAndEmailQuery,
        variables: { id, name, email },
    }).then((res) => {
        var _a, _b;
        if (((_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.updateUserNameAndEmail) === null || _b === void 0 ? void 0 : _b.status) === true) {
            console.log('updateUserNameAndEmail. Updated name Succesfully.', name);
        }
        else {
            console.log('updateUserNameAndEmail response:', res);
        }
        resolve(res);
    }).catch((err) => {
        console.log('updateUserNameAndEmail error:', err);
        resolve(err);
    });
});
exports.updateUserNameAndEmail = updateUserNameAndEmail;
const saveUserChatHistory = (message, number, trigger, token) => new Promise((resolve, reject) => {
    // @ts-ignore
    apolloFetch.use(({ options }, next) => { options.headers = { 'x-access-token': token }; next(); });
    if (number.includes('@'))
        number = (0, handle_1.cleanNumber)(number);
    if (number.includes('@'))
        console.log('Error: number with wrong char ', number);
    apolloFetch({
        query: queries_1.updateUserChatQuery,
        variables: { message, number, trigger },
    }).then((res) => {
        var _a, _b, _c;
        if (((_b = (_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.updateUserChat) === null || _b === void 0 ? void 0 : _b.status) === true) {
            console.log('[updateUserChatQuery]. Updated chat History');
        }
        else if (((_c = res === null || res === void 0 ? void 0 : res.errors) === null || _c === void 0 ? void 0 : _c.length) > 0 && (res === null || res === void 0 ? void 0 : res.errors[0].message.length)) {
            console.log('[updateUserChatQuery] Error:', res === null || res === void 0 ? void 0 : res.errors[0].message);
        }
        else {
            console.log('updateUserChatQuery Error:', res);
        }
        resolve(res);
    }).catch((err) => {
        console.log('updateUserChatQuery error:', err);
        resolve(err);
    });
});
exports.saveUserChatHistory = saveUserChatHistory;
const getCategories = () => new Promise((resolve, reject) => {
    apolloFetch({
        query: queries_1.GET_CATEGORIES
    }).then((res) => {
        console.log('[getCategories]:', res);
        resolve(res);
    }).catch((err) => {
        console.log('[getCategories error]:', err);
        resolve(err);
    });
});
exports.getCategories = getCategories;
const getProducts = (category) => new Promise((resolve, reject) => {
    apolloFetch({
        query: queries_1.GET_PRODUCTS,
        variables: {
            type: '',
            category,
            limit: 20,
            offset: 0,
            searchText: '',
            filterUnstockProducts: true
        }
    }).then((res) => {
        console.log('[getProducts]:', res);
        resolve(res);
    }).catch((err) => {
        console.log('[getProducts error]:', err);
        resolve(err);
    });
});
exports.getProducts = getProducts;
const getPaymentMethods = () => new Promise((resolve, reject) => {
    apolloFetch({
        query: queries_1.getPaymentMethodsQuery
    }).then((res) => {
        console.log('[getPaymentMethods]:', res);
        resolve(res);
    }).catch((err) => {
        console.log('[getPaymentMethods error]:', err);
        resolve(err);
    });
});
exports.getPaymentMethods = getPaymentMethods;
const getDeliveryMethods = () => new Promise((resolve, reject) => {
    apolloFetch({
        query: queries_1.getDeliveryMethodsQuery
    }).then((res) => {
        console.log('[getDeliveryMethods]:', res);
        resolve(res);
    }).catch((err) => {
        console.log('[getDeliveryMethods error]:', err);
        resolve(err);
    });
});
exports.getDeliveryMethods = getDeliveryMethods;
const getAvailableProducts = () => new Promise((resolve, reject) => {
    apolloFetch({
        query: queries_1.getAvailableProductsQuery
    }).then((res) => {
        console.log('[getAvailableProducts fetch]: OK');
        resolve(res);
    }).catch((err) => {
        console.log('[getAvailableProducts error]', err);
        resolve(err);
    });
});
exports.getAvailableProducts = getAvailableProducts;
const getUserShoppingCart = () => new Promise((resolve, reject) => {
    apolloFetch({
        query: queries_1.getUserShoppingCartsQuery
    }).then((res) => {
        console.log('[getUserShoppingCart]:', res);
        resolve(res);
    }).catch((err) => {
        console.log('[getUserShoppingCart error]:', err);
        resolve(err);
    });
});
exports.getUserShoppingCart = getUserShoppingCart;
const updateUserShoppingCart = (input) => new Promise((resolve, reject) => {
    console.log('input', input);
    apolloFetch({
        query: queries_1.updateUserShoppingCartQuery,
        variables: {
            input: {
                customer_id: input.customer_id,
                contact_number: input.contact_number,
                payment_option_id: input.payment_option_id,
                delivery_method_id: input.delivery_method_id,
                selectedCategorySlug: input.selectedCategorySlug,
                payment_option_type: input.payment_option_type,
                payment_method_name: input.payment_method_name,
                ccCharge: input.ccCharge,
                deliveryFee: input.deliveryFee,
                delivery_date: input.delivery_date,
                delivery_method_name: input.delivery_method_name,
                delivery_address: input.delivery_address,
                sub_total: input.sub_total,
                total: input.total,
                coupon_code: input.coupon_code,
                discount_amount: input.discount_amount,
                products: input.products
            }
        }
    }).then((res) => {
        console.log('[updateUserShoppingCart]:', res);
        resolve(res);
    }).catch((err) => {
        console.log('[updateUserShoppingCart error]:', err);
        resolve(err);
    });
});
exports.updateUserShoppingCart = updateUserShoppingCart;
const createOrder = (input) => new Promise((resolve, reject) => {
    apolloFetch({
        query: queries_1.createOrderQuery,
        variables: {
            input: {
                customer_id: input.customer_id,
                contact_number: input.contact_number,
                payment_option_id: input.payment_option_id,
                delivery_method_id: input.delivery_method_id,
                payment_option_type: input.payment_option_type,
                delivery_date: input.delivery_date,
                isWhatsappPurchase: true,
                delivery_address: input.delivery_address,
                sub_total: input.sub_total,
                total: input.total,
                coupon_code: input.coupon_code,
                discount_amount: input.discount_amount,
                products: input.products
            }
        }
    }).then((res) => {
        console.log('[createOrder]:', res);
        resolve(res);
    }).catch((err) => {
        console.log('[createOrder error]:', err.response);
        resolve(err);
    });
});
exports.createOrder = createOrder;
const addAddressToUser = (id, address, title, location, instructions, isPrimary) => new Promise((resolve, reject) => {
    apolloFetch({
        query: queries_1.ADD_ADDRESS,
        variables: {
            id,
            title,
            address,
            location,
            instructions,
            isPrimary
        },
    }).then((res) => {
        console.log('[addAddress]:', res);
        resolve(res);
    }).catch((err) => {
        console.log('[addAddress error]:', err.response);
        resolve(err);
    });
});
exports.addAddressToUser = addAddressToUser;
