import { cleanNumber } from "../controllers/handle";
import { IOrderInput } from "../graphql/resolvers/Orders/types";
import { ICategory, IPaymentOption, IProduct, IUser } from "../lib/types";
import { ADD_ADDRESS, createOrderQuery, getAvailableProductsQuery, getCustomerQuery, getDeliveryMethodsQuery, getPaymentMethodsQuery, getUserShoppingCartsQuery, GET_CATEGORIES, GET_PRODUCTS, signUpQuery, updateUserChatQuery, updateUserNameAndEmailQuery, updateUserShoppingCartQuery } from "./queries";

const { createApolloFetch } = require('apollo-fetch');


const uri = 'http://localhost:7000/api';
const apolloFetch = createApolloFetch({ uri });

export const fetchCustomerAndToken = (phone: string) => new Promise((resolve, reject) => {
    apolloFetch({
        query: getCustomerQuery,
        variables: { phone },
    }).then((res: any) => {
        if (res?.errors?.length > 0 && res?.errors?.[0]?.message?.length) {
            console.log('[fetchCustomer]', res?.errors?.[0]?.message);
        } else if (res?.data?.getCustomer?.user) {
            console.log('[fetchCustomer] User Fetched.');
        } else {
            console.log('fetchCustomer response:',res);
        }
        resolve(res);
    }).catch((err: any) => {
        console.log('fetchCustomer error:', err);
        resolve(err);
    });
});

export const signUpUser = (name: string, phone: string, password: string) => new Promise((resolve, reject) => {
    apolloFetch({
        query: signUpQuery,
        variables: { phone, password, name },
    }).then((res: any) => {
        if (res?.data?.signUp?.status === true) {
            console.log('[signUpUser] User Created Succesfully.', phone);
        }else if (res?.errors?.length > 0 && res?.errors[0].message.length) {
            console.log('[signUpUser] ', res?.errors[0].message);
        } else {
            console.log('SignUp response:', res);
        }
        resolve(res);
    }).catch((err: any) => {
        console.log('Signup error:', err);
        resolve(err);
    });
});

export const updateUserNameAndEmail = (id: string, name: string, email: string, token: string) => new Promise((resolve, reject) => {
// @ts-ignore
    // apolloFetch.use(({ options }, next: any) => { options.headers = { 'x-access-token': token }; next(); });

    apolloFetch({
        query: updateUserNameAndEmailQuery,
        variables: { id, name, email },
    }).then((res: any) => {
        if (res?.data?.updateUserNameAndEmail?.status === true) {
            console.log('updateUserNameAndEmail. Updated name Succesfully.', name);
        } else {
            console.log('updateUserNameAndEmail response:', res);
        }
        resolve(res);
    }).catch((err: any) => {
        console.log('updateUserNameAndEmail error:', err);
        resolve(err);
    });
});

export const saveUserChatHistory = (message: string, number: string, trigger: string, token: string) => new Promise((resolve, reject) => {
    // @ts-ignore
    apolloFetch.use(({ options }, next: any) => { options.headers = { 'x-access-token': token }; next(); });
    if (number.includes('@')) number = cleanNumber(number);
    if (number.includes('@')) console.log('Error: number with wrong char ', number);
    apolloFetch({
        query: updateUserChatQuery,
        variables: { message, number, trigger },
    }).then((res: any) => {
        if (res?.data?.updateUserChat?.status === true) {
            console.log('[updateUserChatQuery]. Updated chat History');
        } else if (res?.errors?.length > 0 && res?.errors[0].message.length) {
            console.log('[updateUserChatQuery] Error:', res?.errors[0].message);
        } else {
            console.log('updateUserChatQuery Error:', res);
        }
        resolve(res);
    }).catch((err: any) => {
        console.log('updateUserChatQuery error:', err);
        resolve(err);
    });
});

export const getCategories  = () => new Promise((resolve, reject) => {
    apolloFetch({
        query: GET_CATEGORIES
    }).then((res: ICategory[]) => {
        console.log('[getCategories]:',res);
        resolve(res);
    }).catch((err: any) => {
        console.log('[getCategories error]:', err);
        resolve(err);
    });
});

export const getProducts  = (category: string) => new Promise((resolve, reject) => {
    apolloFetch({
        query: GET_PRODUCTS,
        variables: { 
            type: '',
            category,
            limit: 20,
            offset: 0,
            searchText: ''
        }
    }).then((res: ICategory[]) => {
        console.log('[getProducts]:',res);
        resolve(res);
    }).catch((err: any) => {
        console.log('[getProducts error]:', err);
        resolve(err);
    });
});

export const getPaymentMethods = () => new Promise((resolve, reject) => {
    apolloFetch({
        query: getPaymentMethodsQuery
    }).then((res: IPaymentOption[]) => {
        console.log('[getPaymentMethods]:',res);
        resolve(res);
    }).catch((err: any) => {
        console.log('[getPaymentMethods error]:', err);
        resolve(err);
    });
});

export const getDeliveryMethods = () => new Promise((resolve, reject) => {
    apolloFetch({
        query: getDeliveryMethodsQuery
    }).then((res: IPaymentOption[]) => {
        console.log('[getDeliveryMethods]:',res);
        resolve(res);
    }).catch((err: any) => {
        console.log('[getDeliveryMethods error]:', err);
        resolve(err);
    });
});

export const getAvailableProducts = () => new Promise((resolve, reject) => {
    apolloFetch({
        query: getAvailableProductsQuery
    }).then((res: IPaymentOption[]) => {
        console.log('[getAvailableProducts fetch]: OK');
        resolve(res);
    }).catch((err: any) => {
        console.log('[getAvailableProducts error]', err);
        resolve(err);
    });
});

export const getUserShoppingCart = () => new Promise((resolve, reject) => {
    apolloFetch({
        query: getUserShoppingCartsQuery
    }).then((res: IPaymentOption[]) => {
        console.log('[getUserShoppingCart]:',res);
        resolve(res);
    }).catch((err: any) => {
        console.log('[getUserShoppingCart error]:', err);
        resolve(err);
    });
});

export const updateUserShoppingCart = (input: IOrderInput) => new Promise((resolve, reject) => {
    console.log('input',input)
    apolloFetch({
        query: updateUserShoppingCartQuery,
        variables: {
            input: {
                customer_id: input.customer_id,
                contact_number: input.contact_number,
                payment_option_id: input.payment_option_id,
                delivery_method_id: input.delivery_method_id,
                selectedCategorySlug: input.selectedCategorySlug,
                payment_option_type: input.payment_option_type,
                payment_method_name: input.payment_method_name,
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
    }).then((res: IUser) => {
        console.log('[updateUserShoppingCart]:',res);
        resolve(res);
    }).catch((err: any) => {
        console.log('[updateUserShoppingCart error]:', err);
        resolve(err);
    });
});

export const createOrder = (input: IOrderInput) => new Promise((resolve, reject) => {
    apolloFetch({
        query: createOrderQuery,
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
    }).then((res: any) => {
        console.log('[createOrder]:',res);
        resolve(res);
    }).catch((err: any) => {
        console.log('[createOrder error]:', err.response);
        resolve(err);
    });
});

export const addAddressToUser = (id: string, address: string, title: string, location: string, instructions: string, isPrimary: boolean) => new Promise((resolve, reject) => {
    apolloFetch({
        query: ADD_ADDRESS,
        variables: { 
            id,
            title,
            address, 
            location,
            instructions,
            isPrimary
        },
    }).then((res: any) => {
        console.log('[addAddress]:',res);
        resolve(res);
    }).catch((err: any) => {
        console.log('[addAddress error]:', err.response);
        resolve(err);
    });
});