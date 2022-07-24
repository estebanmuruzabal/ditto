"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortByLowestNumber = exports.sortByHighestNumber = void 0;
exports.sortByHighestNumber = (arrOfObj, key) => {
    return arrOfObj.sort(function (a, b) {
        return b[key] - a[key];
    });
};
exports.sortByLowestNumber = (arrOfObj, key) => {
    return arrOfObj.sort(function (a, b) {
        return a[key] - b[key];
    });
};
//# sourceMappingURL=sorts.js.map