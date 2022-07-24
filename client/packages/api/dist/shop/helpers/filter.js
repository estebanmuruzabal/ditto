"use strict";
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
exports.getRelatedItems = exports.filterOrder = exports.filterItems = void 0;
const fuse_js_1 = __importDefault(require("fuse.js"));
const lodash_1 = require("lodash");
exports.filterItems = (items, limit = 10, offset = 0, text, type, category) => {
    let filteredItems = items;
    const fuse = new fuse_js_1.default(items, {
        threshold: 0.3,
        minMatchCharLength: 2,
        keys: ['title'],
    });
    if (text && text !== '') {
        filteredItems = fuse.search(text).map((r) => r.item);
    }
    if (type) {
        filteredItems = filteredItems.filter((item) => item.type === type);
    }
    if (category && category.split(',').length) {
        filteredItems = filteredItems.filter((item) => {
            const isAvailable = item.categories.find((cat) => category.split(',').includes(`${cat.slug}`));
            if (isAvailable) {
                return true;
            }
            return false;
        });
    }
    const hasMore = offset + limit < filteredItems.length;
    filteredItems = filteredItems.slice(offset, offset + limit);
    return { items: filteredItems, hasMore };
};
exports.filterOrder = (items, user, limit = 7, text) => __awaiter(void 0, void 0, void 0, function* () {
    let filteredItems = items;
    const fuse = new fuse_js_1.default(items, {
        keys: ['id', 'products.title'],
    });
    if (text && text !== '') {
        filteredItems = fuse.search(text).map((r) => r.item);
    }
    if (user) {
        filteredItems = filteredItems.filter((item) => item.userId === user);
    }
    filteredItems = lodash_1.take(filteredItems, limit);
    return yield filteredItems;
});
exports.getRelatedItems = (type, slug, items) => __awaiter(void 0, void 0, void 0, function* () {
    let filteredItems = items;
    const findRelated = lodash_1.take(yield filteredItems.filter((item) => item.type === type && item.slug !== slug), 10);
    return findRelated;
});
//# sourceMappingURL=filter.js.map