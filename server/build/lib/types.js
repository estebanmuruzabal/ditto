"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = void 0;
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "ADMIN";
    Roles["MANAGER"] = "MANAGER";
    Roles["MEMBER"] = "MEMBER";
    Roles["DELIVERY_BOY"] = "DELIVERY_BOY";
    Roles["CLIENT"] = "CLIENT";
    Roles["STAFF"] = "STAFF";
})(Roles = exports.Roles || (exports.Roles = {}));
const roleSelectOptions = [
    { value: 'admin', label: 'Admin' },
    { value: 'manager', label: 'Manager' },
    { value: 'member', label: 'Member' },
    { value: 'delivery boy', label: 'Delivery boy' },
    { value: 'client', label: 'Client' },
];
