// **************** ROUTE CONSTANT START **************************
// General Page Section
export const DASHBOARD = '/';
export const TYPES = '/types';
export const USERS = '/users';
export const PRODUCTS = '/products';
export const CATEGORY = '/categories';
export const PAYMENT_OPTIONS = '/payment-options';
export const DELIVERY_METHODS = '/delivery-methods';
export const LOGIN = '/login';
export const LOGOUT = '/logout';
export const ORDERS = '/orders';
export const CUSTOMERS = '/customers';
export const COUPONS = '/coupons';
export const HOMECARDS = '/home-cards';
export const SETTINGS = '/settings';
export const STAFF_MEMBERS = '/staff-members';
export const SITE_SETTINGS = '/site-settings';
// **************** ROUTE CONSTANT END **************************

export const CURRENCY = '$';

// **************** Roles CONSTANT Start **************************
export enum Roles {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
    MEMBER = 'MEMBER',
    DELIVERY_BOY = 'DELIVERY_BOY',
    CLIENT = 'CLIENT',
    STAFF = 'STAFF',
    GROWER = 'GROWER'
}
export const roleSelectOptions = [
    { value: Roles.ADMIN, label: 'Admin' },
    { value: Roles.MANAGER, label: 'Manager' },
    { value: Roles.MEMBER, label: 'Member' },
    { value: Roles.DELIVERY_BOY, label: 'Delivery boy' },
    { value: Roles.CLIENT, label: 'Client' },
    { value: Roles.GROWER, label: 'Grower' },
    { value: Roles.STAFF, label: 'Staff' },
  ];
// **************** Roles CONSTANT End **************************

// **************** Coupon Status CONSTANT START **************************
export const CREATED = 'created';
export const RUNNING = 'running';
export const EXPIRED = 'expired';
export const DELETED = 'deleted';
// **************** Coupon Status CONSTANT End **************************