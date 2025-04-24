import {Collection, ObjectId} from 'mongodb';
import { IOrderInput, IOrderInputArgs } from '../graphql/resolvers/Orders/types';
import { IScheduleInput } from '../graphql/resolvers/User/types';
import { Locale } from 'moment';
import { Locales } from './utils/constant';

export interface Plant {
    id?: string;
    plantId: number;
    name?: string;
    soil_humidity_1: number;
    soil_humidity_2: number;
    distance_cm: number;
    humidity_1: number;
    tempeture_1: number;
    light: number;
    alarm: boolean;
    alarm_timestamp: string;
    sensors: [ISensorSetting];
    isRelayOneOn: boolean;
    isRelayTwoOn: boolean;
    isRelayThirdOn: boolean;
    isRelayFourthOn: boolean;
    timestamp: string;
    offline_notification: boolean;
    timeZone: string;
}

export interface Shop {
    id?: string;
    shopPublicName: string;
    shopUrl: string;
    address: string;
    latitude: number;
    longitude: number;
    shopIsOnline: boolean;
}

export interface Phone {
    id: string
    number: string,
    status?: boolean,
    is_primary?: boolean
}

export interface ISensorSetting {
    reading: number;
    name: string;
    minWarning: string;
    maxWarning: string;
    mode: string;
    relayOneAutomatedTimeToRun: string;
    relayOneAutomatedStartedTime: string;
    relayTwoAutomatedStartedTime: string;
    relayOneIdRelated: string;
    relayOneWorking: boolean;
    relayTwoAutomatedTimeToRun: string;
    relayTwoIdRelated: string;
    relayTwoWorking: boolean;
    logs: Array<ILogs>;
    scheduledOnTimes?: Array<IScheduleInput>;
    whatsappWarningsOn: boolean;
    settingType: string;
}

export interface ILogs {
    reading: number;
    timestamp: string;
    started?: boolean;
    finished?: boolean;
}

export interface Logs {
    logDescription: string;
    timestamp: string;
}

export interface Task {
    taskId: string;
    description: string;
    startDate: string;
    finishDate: string;
    plannedDate: string;
    isRepetitived: boolean;
    completationTimes: string;
    workedHours: string;
    isDone: boolean;
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

export interface IUser {
    _id?: ObjectId;
    name: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    password: string;
    phones?: Array<Phone>;
    shop?: Shop | null;
    plants: Array<Plant>;
    delivery_address?: Array<Address>;
    otp?: string;
    role: Roles;
    shoppingCart?: IOrderInput;
    chatHistory: IChat[];
    created_at: string;
    workInfo: IWorkInfo;
    tasks: Array<Task>;
    logs: Array<Logs>;

    // testing the dittomarket model
    types?: Collection<IType>;
    categories?: Collection<ICategory>;
    products?: Collection<IProduct>;
    shops?: Collection<IShop>;
    delivery_methods?: Collection<IDeliveryMethod>;
    payment_options?: Collection<IPaymentOption>;
    orders?: Collection<IOrder | IQuickOrder>;
    settings?: Collection<ISetting>;
    coupons?: Collection<ICoupon>;
    home_cards?: Collection<IHomeCard>;
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
    STAFF = 'STAFF',
    GROWER = 'GROWER'
}

export enum HumiditySensorMode {
    IRRIGATE_ON_DEMAND = 'IRRIGATE_ON_DEMAND',
    INTERMITTENT_IRRIGATION = 'INTERMITTENT_IRRIGATION',
    IRRIGATE_SPECIFICT_AMOUNT_WITH_DOUBLE_ACTION = 'IRRIGATE_SPECIFICT_AMOUNT_WITH_DOUBLE_ACTION',
    IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND = 'IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND',
    SEEDS_POOL_IRRIGATION = 'SEEDS_POOL_IRRIGATION',
    MANUAL = 'HUMIDITY_MANUAL',
    SCHEDULE = 'HUMIDITY_SCHEDULE',
    MIN_WARNING = 'HUMIDITY_MIN_WARNING',
    MAX_WARNING = 'HUMIDITY_MAX_WARNING',
    SCHEDULE_DOUBLE_ACTION = 'HUMIDITY_SCHEDULE_DOUBLE_ACTION',
    NONE = 'NONE'
}

export enum LightSensorMode {
    MANUAL = 'LIGHT_MANUAL',
    SCHEDULE = 'LIGHT_SCHEDULE',
    NONE = 'NONE'
}

// THIS SHOULD MATCH FRONTEND 
export enum DistanceSensorMode {
    WHEN_EMPTY_ACTION_CUSTOM = 'WHEN_EMPTY_ACTION_CUSTOM',
    WHEN_EMPTY_ACTION_AUTOMATED = 'WHEN_EMPTY_ACTION_AUTOMATED',
    WHEN_FULL_ACTION_CUSTOM = 'WHEN_FULL_ACTION_CUSTOM',
    WHEN_FULL_ACTION_AUTOMATED = 'WHEN_FULL_ACTION_AUTOMATED',
    MIN_WARNING = 'MIN_WARNING',
    MAX_WARNING = 'MAX_WARNING',
    NONE = 'NONE'
}

export enum AirHumiditySensorMode {
    MANUAL = 'AIR_HUM_MANUAL',
    SCHEDULE = 'AIR_HUM_SCHEDULE',
    WHEN_MIN_ACTION_AUTOMATED = 'AIR_HUM_WHEN_MIN_ACTION_AUTOMATED',
    WHEN_MAX_ACTION_AUTOMATED = 'AIR_HUM_WHEN_MAX_ACTION_AUTOMATED',
    NONE = 'NONE'
}

export enum C02SensorMode {
    MANUAL = 'C02_MANUAL',
    SCHEDULE = 'C02_SCHEDULE',
    WHEN_MIN_ACTION_AUTOMATED = 'C02_WHEN_MIN_ACTION_AUTOMATED',
    WHEN_MAX_ACTION_AUTOMATED = 'C02_WHEN_MAX_ACTION_AUTOMATED',
    NONE = 'NONE'
}

export enum AirTemperatureSensorMode {
    MANUAL = 'AIR_TEMP_MANUAL',
    SCHEDULE = 'AIR_TEMP_SCHEDULE',
    WHEN_MIN_ACTION_AUTOMATED = 'AIR_TEMP_WHEN_MIN_ACTION_AUTOMATED',
    WHEN_MAX_ACTION_AUTOMATED = 'AIR_TEMP_WHEN_MAX_ACTION_AUTOMATED',
    NONE = 'NONE'
}
// END THIS SHOULD MATCH FRONTEND
export enum TriggerGrowerSteps {
    SHOW_ALL_PLANTS = 'SHOW_ALL_PLANTS',
    PLANT_DETAILS = 'PLANT_DETAILS',
    CONFIGURATION_CHANGE_TRIGGER = 'CONFIGURATION_CHANGE_TRIGGER',
    CHANGE_MIN_HUMIDITY = 'CHANGE_MIN_HUMIDITY',
    CHANGE_MAX_HUMIDITY = 'CHANGE_MAX_HUMIDITY'
}

export enum TriggerStaffSteps {
    STAFF_ALL_CATEGORIES = 'STAFF_ALL_CATEGORIES',
    ALL_CATEGORIES_ANSWER = 'ALL_CATEGORIES_ANSWER',
    CHANGE_WORKING_STATE = 1,
    SEE_PRODUCTS_TO_UPDATE_STOCK = 2,
    SEE_STAFF_INFO = 3,
    SEE_PRODUCTS_TO_QUICK_SALE = 4,
    CHOOSE_AMOUNT_UNITS_TO_SALE = 'CHOOSE_AMOUNT_UNITS_TO_SALE',
    CHOOSE_PRODUCT_TO_SALE = 'CHOOSE_PRODUCT_TO_SALE',
    CHOOSE_PRODUCT_TO_UPDATE_STOCK = 'CHOOSE_PRODUCT_TO_UPDATE_STOCK',
    INTRODUCE_PRODUCT_NEW_STOCK = 'INTRODUCE_PRODUCT_NEW_STOCK',
    SUCCESS_SALE_AND_MAIN_MENU = 'SUCCESS_SALE_AND_MAIN_MENU',
    END_CONVERSATION_AND_RESET_CHAT = 'END_CONVERSATION_AND_RESET_CHAT'
}

export enum TriggerSteps {
    ORDER_USER_NAME = 'ORDER_USER_NAME',
    INTODUCE_NEW_USER_NAME = 'INTODUCE_NEW_USER_NAME',
    INITIAL_UNAUTHENTICATED_USER = 'INITIAL_UNAUTHENTICATED_USER',
    USER_SHOULD_INPUT_HIS_NAME = 'USER_SHOULD_INPUT_HIS_NAME',
    INITIAL_UNAUTHENTICATED_USER_AGAIN = 'INITIAL_UNAUTHENTICATED_USER_AGAIN',
    AUTHENTICATED_USER_ALL_CATEGORIES = 'AUTHENTICATED_USER_ALL_CATEGORIES',
    SIGN_UP_USER_BEFORE_PURCHASE = 'SIGN_UP_USER_BEFORE_PURCHASE',
    ASK_USER_NAME_TO_SIGN_UP_USER_BEFORE_PURCHASE = 'ASK_USER_NAME_TO_SIGN_UP_USER_BEFORE_PURCHASE',
    ALL_CATEGORIES = 'ALL_CATEGORIES',
    SELECT_CATEGORY = 'SELECT_CATEGORY',
    GET_PRODUCTS_LIST_STEP = 'GET_PRODUCTS_LIST_STEP',
    GET_PRODUCTS_INFO_STEP = 'GET_PRODUCTS_INFO_STEP',
    ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
    SELECT_QUANTITY_OF_PRODUCT = 'SELECT_QUANTITY_OF_PRODUCT',
    ADD_MORE_PRODUCTS_STEP = 'ADD_MORE_PRODUCTS_STEP',
    DELIVERY_OR_PICKUP_OPT_SELECTED = 'DELIVERY_OR_PICKUP_OPT_SELECTED',
    PICKUP_OPT_SELECTED = 'PICKUP_OPT_SELECTED',
    DELIVERY_OPT_SELECTED = 'DELIVERY_OPT_SELECTED',
    SELECT_PAYMENT_METHOD = 'SELECT_PAYMENT_METHOD',
    ORDER_CHECK_CONFIRMATION = 'ORDER_CHECK_CONFIRMATION',
    // other types
    ADD_PRODUCT_OR_DELIVERY_PICKUP_OPT = 'ADD_PRODUCT_OR_DELIVERY_PICKUP_OPT/delivery',
    RESET_CHAT_HISTORY_AND_SHOPPING_CART = 'RESET_CHAT_HISTORY_AND_SHOPPING_CART',
    UNKNOWN_ERROR_STEP = 'UNKNOWN_ERROR_STEP',
    BLOCK_CHAT = 'BLOCK_CHAT',
    UNBLOCK_CHAT = 'UNBLOCK_CHAT',
    END_CONVERSATION_AND_RESET_CHAT = 'END_CONVERSATION_AND_RESET_CHAT'

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
    visible?: boolean;
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

export interface IShop {
    userId: ObjectId;
    shopPublicName: string;
    shopUrl: string;
    address: string;
    latitude: number;
    longitude: number;
    shopIsOnline: boolean;
}

export interface IProduct {
    _id?: ObjectId;
    type: IProductType;
    categories: Array<IProductCategory>;
    name: string;
    slug?: string;
    user_owner_id?: string;
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
    visible?: boolean;
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
    contact_number?: string;
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
    lenguageLocale: Locales;
}

export interface IQuickOrder {
    _id?: ObjectId;
    order_code: string;
    customer_id: string;
    contact_number?: string;
    payment_option_id?: string;
    datetime: string;
    delivery_method_id?: string;
    delivery_address?: string;
    sub_total?: number;
    total: number;
    coupon_code?: string;
    discount_amount?: number;
    payment_id?: string;
    payment_method?: string;
    payment_status?: string;
    status?: string;
    order_tracking: Array<IOrderTracker>;
    order_products: Array<OrderProducts>;
    created_at?: string;
    updated_at?: string;
    customer_name: string;
    delivery_method_name?: string;
    delivery_pickup_date?: string;
    lenguageLocale: Locales;
}

export interface ICommonMessageReturnType {
    message: string;
    status: boolean;
    access_token?: string;
}

export interface ShopInput {
    shopPublicName: string;
    shopUrl: string;
    address: string;
    latitude: number;
    longitude: number;
    shopIsOnline: boolean;
}

export interface IShopInputArgs {
    id?: string;
    input: ShopInput;
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
    shops: Collection<IShop>;
    delivery_methods: Collection<IDeliveryMethod>;
    payment_options: Collection<IPaymentOption>;
    orders: Collection<IOrder | IQuickOrder>;
    settings: Collection<ISetting>;
    coupons: Collection<ICoupon>;
    home_cards: Collection<IHomeCard>;
    listings: Collection<IListings>;
}