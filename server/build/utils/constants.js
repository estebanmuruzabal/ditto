"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnglishOrderStatus = exports.SpanishOrderStatus = exports.SpanishPaymentStatus = exports.EnglishPaymentStatus = exports.WeekDays = void 0;
var WeekDays;
(function (WeekDays) {
    WeekDays["MONDAY"] = "MONDAY";
    WeekDays["TUESDAY"] = "TUESDAY";
    WeekDays["WEDNESDAY"] = "WEDNESDAY";
    WeekDays["THURSDAY"] = "THURSDAY";
    WeekDays["FRIDAY"] = "FRIDAY";
    WeekDays["SATURDAY"] = "SATURDAY";
    WeekDays["SUNDAY"] = "SUNDAY";
})(WeekDays || (exports.WeekDays = WeekDays = {}));
var EnglishPaymentStatus;
(function (EnglishPaymentStatus) {
    EnglishPaymentStatus["UNPAID"] = "Unpaid";
})(EnglishPaymentStatus || (exports.EnglishPaymentStatus = EnglishPaymentStatus = {}));
var SpanishPaymentStatus;
(function (SpanishPaymentStatus) {
    SpanishPaymentStatus["UNPAID"] = "Sin pagar";
})(SpanishPaymentStatus || (exports.SpanishPaymentStatus = SpanishPaymentStatus = {}));
var SpanishOrderStatus;
(function (SpanishOrderStatus) {
    SpanishOrderStatus["PENDING"] = "Pendiente";
})(SpanishOrderStatus || (exports.SpanishOrderStatus = SpanishOrderStatus = {}));
var EnglishOrderStatus;
(function (EnglishOrderStatus) {
    EnglishOrderStatus["PENDING"] = "Pending";
})(EnglishOrderStatus || (exports.EnglishOrderStatus = EnglishOrderStatus = {}));
