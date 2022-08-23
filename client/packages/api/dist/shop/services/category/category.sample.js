"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_type_1 = __importDefault(require("./category.type"));
const class_transformer_1 = require("class-transformer");
const loadCategories = () => {
    return class_transformer_1.plainToClass(category_type_1.default, []);
};
exports.default = loadCategories;
//# sourceMappingURL=category.sample.js.map