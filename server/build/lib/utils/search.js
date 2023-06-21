"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const fuse_js_1 = __importDefault(require("fuse.js"));
const search = (dataToSearch, basedOnOptionsKey, searchByValue = '') => {
    if (searchByValue.trim()) {
        let fuse = new fuse_js_1.default(dataToSearch, {
            shouldSort: true,
            threshold: 0.3,
            location: 0,
            distance: 100,
            //maxPatternLength: 32,
            minMatchCharLength: 2,
            keys: basedOnOptionsKey,
        });
        let result = fuse.search(searchByValue).map((r) => r.item);
        return result;
    }
    return dataToSearch;
};
exports.search = search;
