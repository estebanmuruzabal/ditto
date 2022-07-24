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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const staff_type_1 = __importDefault(require("./staff.type"));
const staff_data_1 = __importDefault(require("../../data/staff.data"));
const staff_input_type_1 = __importDefault(require("./staff.input_type"));
const search_1 = __importDefault(require("../../helpers/search"));
let StaffResolver = class StaffResolver {
    constructor() {
        this.staffsCollection = staff_data_1.default();
    }
    staffs(role, searchBy) {
        return __awaiter(this, void 0, void 0, function* () {
            let staffs = this.staffsCollection;
            if (role) {
                staffs = staffs.filter((staff) => staff.role.toLowerCase() === role.toLowerCase());
            }
            return yield search_1.default(staffs, ['name'], searchBy);
        });
    }
    staff(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id, 'staff_id');
            return yield this.staffsCollection.find((staff) => staff.id === id);
        });
    }
    createStaff(staff) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(staff, 'Staff');
            return staff;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [staff_type_1.default]),
    __param(0, type_graphql_1.Arg('role', { nullable: true })),
    __param(1, type_graphql_1.Arg('searchBy', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], StaffResolver.prototype, "staffs", null);
__decorate([
    type_graphql_1.Query(() => staff_type_1.default),
    __param(0, type_graphql_1.Arg('id', (type) => type_graphql_1.ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StaffResolver.prototype, "staff", null);
__decorate([
    type_graphql_1.Mutation(() => staff_type_1.default, { description: 'Create Staff' }),
    __param(0, type_graphql_1.Arg('staff')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [staff_input_type_1.default]),
    __metadata("design:returntype", Promise)
], StaffResolver.prototype, "createStaff", null);
StaffResolver = __decorate([
    type_graphql_1.Resolver()
], StaffResolver);
exports.default = StaffResolver;
//# sourceMappingURL=staff.resolver.js.map