"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
let Staff = class Staff {
    get name() {
        return `${this.first_name} ${this.last_name}`;
    }
};
__decorate([
    type_graphql_1.Field((type) => type_graphql_1.ID),
    __metadata("design:type", String)
], Staff.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Staff.prototype, "first_name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Staff.prototype, "last_name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Staff.prototype, "contact_number", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Staff.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Staff.prototype, "role", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Staff.prototype, "name", null);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], Staff.prototype, "creation_date", void 0);
Staff = __decorate([
    type_graphql_1.ObjectType()
], Staff);
exports.default = Staff;
//# sourceMappingURL=staff.type.js.map