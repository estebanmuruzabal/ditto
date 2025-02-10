import merge from "lodash.merge";
import {usersResolvers} from "./User";
import {typesResolvers} from "./Type";
import {categoriesResolvers} from "./Category";
import {productsResolvers} from "./Product";
import {deliveryMethodsResolvers} from "./DeliveryMethod";
import {staffMethodsResolvers} from "./Staff";
import {paymentOptionsResolvers} from "./PaymentOption";
import {ordersResolvers} from "./Orders";
import {settingsResolvers} from "./Setting";
import {couponsResolvers} from "./Coupon";
import {homeCardsResolvers} from "./HomeCard";
import {shopsResolvers} from "./Shop";

export const resolvers = merge(
    usersResolvers,
    typesResolvers,
    categoriesResolvers,
    productsResolvers,
    shopsResolvers,
    deliveryMethodsResolvers,
    paymentOptionsResolvers,
    ordersResolvers,
    settingsResolvers,
    couponsResolvers,
    homeCardsResolvers,
    staffMethodsResolvers
);