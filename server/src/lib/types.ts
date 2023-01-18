import {Collection, ObjectId} from 'mongodb';
import { IOrderInput, IOrderInputArgs } from '../graphql/resolvers/Orders/types';

export interface Plant {
    id?: string;
    controllerId: number;
    name?: string;
    soilHumidity: number;
    airHumidity: number;
    tempeture: number;
    isRelayOneOn: string;
    isRelayTwoOn: string;
    isRelayThirdOn: string;
    isRelayFourthOn: string;
}

export interface Phone {
    id: string
    number: string,
    status?: boolean,
    is_primary?: boolean
}

export interface Logs {
    logDescription: string,
    timestamp: string
}

export interface Task {
    taskId: string,
    description: string,
    startDate: string,
    finishDate: string,
    plannedDate: string,
    isRepetitived: boolean,
    completationTimes: string,
    workedHours: string,
    isDone: boolean
}

export interface Address {
    id: string
    title: string,
    address: string,
    location?: string,
    instructions?: string,
    is_primary?: boolean
}

export interface IListings {
    _id?: ObjectId;
    title?: string;
    image?: string;
    address?: string;
    price?: number;
    numOfGuests?: number;
    numOfBeds?: number;
    numOfBaths?: number;
    rating?: number;
}

export interface IPlant {
    _id?: ObjectId;
    name: string;
    created_at: string;
    logs: Array<Logs>;
}

export interface IUser {
    _id?: ObjectId;
    name: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    password: string;
    phones?: Array<Phone>;
    plants: Array<Plant>;
    delivery_address?: Array<Address>;
    otp?: string;
    role?: Roles;
    shoppingCart?: IOrderInput;
    chatHistory: IChat[];
    created_at: string;
    workInfo: IWorkInfo;
    tasks: Array<Task>;
    logs: Array<Logs>;
}

export interface IChat {
    _id?: ObjectId;
    message: string;
    trigger?: string;
    datetime: string;
}

export enum Roles {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    MEMBER = 'MEMBER',
    DELIVERY_BOY = 'DELIVERY_BOY',
    CLIENT = 'CLIENT',
    STAFF = 'STAFF'
}

export enum TriggerStaffSteps {
    STAFF_ALL_CATEGORIES = 'STEP_1',
    ALL_CATEGORIES_ANSWER = 'STEP_2',
}

export enum TriggerSteps {
    INITIAL_UNAUTHENTICATED_USER = 'STEP_0',
    USER_SHOULD_INPUT_HIS_NAME = 'STEP_0_1',
    INITIAL_UNAUTHENTICATED_USER_AGAIN = 'STEP_0_2',
    AUTHENTICATED_USER_ALL_CATEGORIES = 'STEP_0_3',
    ALL_CATEGORIES = 'STEP_1',
    SELECT_CATEGORY = 'select_category',
    GET_PRODUCTS_LIST_STEP = 'STEP_2',
    GET_PRODUCTS_INFO_STEP = 'STEP_3',
    ADD_PRODUCT_TO_CART = 'STEP_4',
    SELECT_QUANTITY_OF_PRODUCT = 'STEP_5',
    ADD_MORE_PRODUCTS_STEP = 'STEP_6',
    DELIVERY_OR_PICKUP_OPT_SELECTED = 'STEP_7',
    PICKUP_OPT_SELECTED = 'STEP_8',
    DELIVERY_OPT_SELECTED = 'STEP_9',
    SELECT_PAYMENT_METHOD = 'STEP_10',
    ORDER_CHECK_CONFIRMATION = 'STEP_11',
    // other types
    RESET_CHAT_HISTORY_AND_SHOPPING_CART = 'delete_chat_history',
    UNKNOWN_ERROR_STEP = 'STEP_100',
    BLOCK_CHAT = 'block_chat',
    UNBLOCK_CHAT = 'unblock_chat',
    END_CONVERSATION_AND_RESET_CHAT = 'end_conversation'

}

export interface IWorkInfo {
    stoppedWorkTime: string | null;
    startedWorkTime: string | null;
    ratePerHour: number | null;
    totalWorkingMinutesPerWeek: number;
    totalSalaryToPayWeekly: number;
    advancedSalaryPaid: number | null;
    isWorking: boolean;
    taskRelated: string | null;
}

export interface IUserAuth {
    user: IUser;
    access_token: string;
}

export interface IType {
    _id?: ObjectId;
    name: string;
    slug?: string;
    image: string;
    icon: string;
    home_title: string;
    home_subtitle: string;
    meta_title?: string;
    meta_keyword?: string;
    meta_description?: string;
    created_at?: string;
    updated_at?: string;
}

export interface ICategoryChildren {
    id: string;
    type_id: string;
    name: string;
    slug: string;
    banner: string;
    icon: string;
}
export interface ICategory {
    _id?: ObjectId;
    type_id: string;
    parent_id?: string | null;
    name: string;
    slug: string;
    banner?: string;
    icon: string;
    children?: Array<ICategoryChildren>
    meta_title?: string;
    meta_keyword?: string;
    meta_description?: string;
    created_at?: string;
    updated_at?: string;
}
export interface ICoupon {
    _id?: ObjectId;
    title: string;
    code: string;
    percentage: number;
    maximum_discount_amount: number;
    expiration_date?: string;
    created_at?: string;
    updated_at?: string;
    status: string;
    valid?: boolean;
}

export interface ICouponValid {
    valid: boolean
}

export interface IProductCategory {
    id: string;
    name: string;
    slug: string;
}
export interface IProductType {
    id: string;
    name: string;
    slug: string;
}
export interface IProduct {
    _id?: ObjectId;
    type: IProductType;
    categories: Array<IProductCategory>;
    name: string;
    slug?: string;
    packagePrice?: number;
    description?: string;
    images: Array<string>;
    unit?: string;
    price: number;
    sale_price?: number;
    discount_in_percent?: number;
    product_quantity: number;
    recicledQuantity?: number;
    meta_title?: string;
    meta_keyword?: string;
    meta_description?: string;
    is_featured?: boolean;
    is_online?: boolean;
    created_at?: string;
    updated_at?: string;
}

export interface IDeliveryMethod {
    _id?: ObjectId;
    name: string;
    details: string;
    isPickUp: boolean;
    pickUpAddress: string;
    created_at?: string;
    updated_at?: string;
}

export interface IPaymentOption {
    _id?: ObjectId;
    name: string;
    type: string;
    image: string;
    details?: string;
    created_at?: string;
    updated_at?: string;
}

export interface IRoles {
    
}



const roleSelectOptions = [
    { value: 'admin', label: 'Admin' },
    { value: 'manager', label: 'Manager' },
    { value: 'member', label: 'Member' },
    { value: 'delivery boy', label: 'Delivery boy' },
    { value: 'client', label: 'Client' },
  ];

export interface ICommonPaginationArgs {
    limit: number;
    offset: number;
    searchText?: string;
}

export interface ICommonPaginationReturnType {
    items: Array<any>;
    totalCount: number;
    hasMore: boolean;
}

export interface IOrderTracker {
    status: string;
    ordering: number;
    is_current: boolean;
    step_competed: boolean;
}

export interface OrderProducts {
    product_id: string;
    name?: string;
    image?: string;
    quantity: number;
    unit?: string;
    price: number;
    sale_price?: number;
}

export interface IOrder {
    _id?: ObjectId;
    order_code: string;
    customer_id: string;
    contact_number: string;
    payment_option_id: string;
    datetime: string;
    delivery_method_id?: string;
    delivery_address: string;
    sub_total: number;
    total: number;
    coupon_code?: string;
    discount_amount?: number;
    payment_id?: string;
    payment_method: string;
    payment_status: string;
    status?: string;
    order_tracking: Array<IOrderTracker>;
    order_products: Array<OrderProducts>;
    created_at?: string;
    updated_at?: string;
    customer_name: string;
    delivery_method_name: string;
    delivery_pickup_date: string;
}

export interface ICommonMessageReturnType {
    message: string;
    status: boolean;
    access_token?: string;
}

export interface IPlantReturnType {
    isRelayOneOn: string;
    isRelayTwoOn: string;
    isRelayThirdOn: string;
    isRelayFourthOn: string;
}

export interface ISetting {
    _id?: ObjectId;
    key: string;
    value: any;
}

export interface IGetCouponReturnType {
    coupon?: ICoupon;
    message?: ICommonMessageReturnType;
}

export interface IHomeCard {
    _id?: ObjectId;
    name: string;
    url?: string;
    types: Array<IProductCategory>;
    image: string;
    status?: boolean;
    created_at?: string;
    updated_at?: string;
}

export interface Database {
    users: Collection<IUser>;
    types: Collection<IType>;
    categories: Collection<ICategory>;
    products: Collection<IProduct>;
    delivery_methods: Collection<IDeliveryMethod>;
    payment_options: Collection<IPaymentOption>;
    orders: Collection<IOrder>;
    settings: Collection<ISetting>;
    coupons: Collection<ICoupon>;
    home_cards: Collection<IHomeCard>;
    listings: Collection<IListings>;
}