webpackHotUpdate(7,{

/***/ "./src/contexts/cart/cart.reducer.tsx":
/*!********************************************!*\
  !*** ./src/contexts/cart/cart.reducer.tsx ***!
  \********************************************/
/*! exports provided: cartItemsTotalPrice, cartDiscountAmount, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cartItemsTotalPrice\", function() { return cartItemsTotalPrice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cartDiscountAmount\", function() { return cartDiscountAmount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return reducer; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"../../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// export const cartItemsTotalPrice = (items, { discountInPercent = 0 } = {}) => {\nfunction getDiscountAmount(totalPrice, coupon) {\n  var discount = totalPrice * Number(coupon.percentage) / 100;\n  discount = discount >= (coupon === null || coupon === void 0 ? void 0 : coupon.maximum_discount_amount) ? coupon === null || coupon === void 0 ? void 0 : coupon.maximum_discount_amount : discount;\n  return discount;\n}\n\nfunction getTotalItemPrice(items) {\n  return items.reduce(function (total, item) {\n    if (item.salePrice) {\n      return total + item.salePrice * item.quantity;\n    }\n\n    return total + item.price * item.quantity;\n  }, 0);\n}\n\nvar cartItemsTotalPrice = function cartItemsTotalPrice(items) {\n  var coupon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  if (items === null || items.length === 0) return 0;\n  var itemCost = getTotalItemPrice(items);\n  var discount = coupon ? getDiscountAmount(itemCost, coupon) : 0;\n  return itemCost - discount;\n};\nvar cartDiscountAmount = function cartDiscountAmount(items) {\n  var coupon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  if (items === null || items.length === 0) return 0;\n  var itemCost = getTotalItemPrice(items);\n  return coupon ? getDiscountAmount(itemCost, coupon) : 0;\n}; // cartItems, cartItemToAdd\n\nvar addItemToCart = function addItemToCart(state, action) {\n  var existingCartItemIndex = state.items.findIndex(function (item) {\n    return item.id === action.payload.id;\n  });\n\n  if (existingCartItemIndex > -1) {\n    var newState = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state.items);\n\n    newState[existingCartItemIndex].quantity += action.payload.quantity;\n    return newState;\n  }\n\n  return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state.items), [action.payload]);\n}; // cartItems, cartItemToRemove\n\n\nvar removeItemFromCart = function removeItemFromCart(state, action) {\n  return state.items.reduce(function (acc, item) {\n    if (item.id === action.payload.id) {\n      var newQuantity = item.quantity - action.payload.quantity;\n      return newQuantity > 0 ? [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(acc), [_objectSpread(_objectSpread({}, item), {}, {\n        quantity: newQuantity\n      })]) : Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(acc);\n    }\n\n    return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(acc), [item]);\n  }, []);\n};\n\nvar clearItemFromCart = function clearItemFromCart(state, action) {\n  return state.items.filter(function (item) {\n    return item.id !== action.payload.id;\n  });\n};\n\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case 'REHYDRATE':\n      return _objectSpread(_objectSpread({}, state), action.payload);\n\n    case 'TOGGLE_CART':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isOpen: !state.isOpen\n      });\n\n    case 'ADD_ITEM':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        items: addItemToCart(state, action)\n      });\n\n    case 'REMOVE_ITEM':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        items: removeItemFromCart(state, action)\n      });\n\n    case 'CLEAR_ITEM_FROM_CART':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        items: clearItemFromCart(state, action)\n      });\n\n    case 'CLEAR_CART':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        items: []\n      });\n\n    case 'NO_MORE_STOCK':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        noMoreStock: true\n      });\n\n    case 'RESET_NO_MORE_STOCK':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        noMoreStock: false\n      });\n\n    case 'APPLY_COUPON':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        coupon: action.payload\n      });\n\n    case 'REMOVE_COUPON':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        coupon: null\n      });\n\n    case 'TOGGLE_RESTAURANT':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isRestaurant: !state.isRestaurant\n      });\n\n    default:\n      throw new Error(\"Unknown action: \".concat(action.type));\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvY2FydC9jYXJ0LnJlZHVjZXIudHN4P2Y1Y2EiXSwibmFtZXMiOlsiZ2V0RGlzY291bnRBbW91bnQiLCJ0b3RhbFByaWNlIiwiY291cG9uIiwiZGlzY291bnQiLCJOdW1iZXIiLCJwZXJjZW50YWdlIiwibWF4aW11bV9kaXNjb3VudF9hbW91bnQiLCJnZXRUb3RhbEl0ZW1QcmljZSIsIml0ZW1zIiwicmVkdWNlIiwidG90YWwiLCJpdGVtIiwic2FsZVByaWNlIiwicXVhbnRpdHkiLCJwcmljZSIsImNhcnRJdGVtc1RvdGFsUHJpY2UiLCJsZW5ndGgiLCJpdGVtQ29zdCIsImNhcnREaXNjb3VudEFtb3VudCIsImFkZEl0ZW1Ub0NhcnQiLCJzdGF0ZSIsImFjdGlvbiIsImV4aXN0aW5nQ2FydEl0ZW1JbmRleCIsImZpbmRJbmRleCIsImlkIiwicGF5bG9hZCIsIm5ld1N0YXRlIiwicmVtb3ZlSXRlbUZyb21DYXJ0IiwiYWNjIiwibmV3UXVhbnRpdHkiLCJjbGVhckl0ZW1Gcm9tQ2FydCIsImZpbHRlciIsInJlZHVjZXIiLCJ0eXBlIiwiaXNPcGVuIiwibm9Nb3JlU3RvY2siLCJpc1Jlc3RhdXJhbnQiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0EsU0FBU0EsaUJBQVQsQ0FBMkJDLFVBQTNCLEVBQXVDQyxNQUF2QyxFQUErQztBQUM3QyxNQUFJQyxRQUFRLEdBQUlGLFVBQVUsR0FBR0csTUFBTSxDQUFDRixNQUFNLENBQUNHLFVBQVIsQ0FBcEIsR0FBMkMsR0FBMUQ7QUFDQUYsVUFBUSxHQUFHQSxRQUFRLEtBQUlELE1BQUosYUFBSUEsTUFBSix1QkFBSUEsTUFBTSxDQUFFSSx1QkFBWixDQUFSLEdBQThDSixNQUE5QyxhQUE4Q0EsTUFBOUMsdUJBQThDQSxNQUFNLENBQUVJLHVCQUF0RCxHQUFnRkgsUUFBM0Y7QUFDQSxTQUFPQSxRQUFQO0FBQ0Q7O0FBRUQsU0FBU0ksaUJBQVQs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LDZDQUFZZixLQUFaO0FBQW1CbEIsY0FBTSxFQUFFbUIsTUFBTSxDQUFDSTtBQUFsQzs7QUFDRixTQUFLLGVBQUw7QUFDRSw2Q0FBWUwsS0FBWjtBQUFtQmxCLGNBQU0sRUFBRTtBQUEzQjs7QUFDRixTQUFLLG1CQUFMO0FBQ0UsNkNBQVlrQixLQUFaO0FBQW1CZ0Isb0JBQVksRUFBRSxDQUFDaEIsS0FBSyxDQUFDZ0I7QUFBeEM7O0FBQ0Y7QUFDRSxZQUFNLElBQUlDLEtBQUosMkJBQTZCaEIsTUFBTSxDQUFDWSxJQUFwQyxFQUFOO0FBeEJKO0FBMEJELENBM0JNIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL2NhcnQvY2FydC5yZWR1Y2VyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cG9ydCBjb25zdCBjYXJ0SXRlbXNUb3RhbFByaWNlID0gKGl0ZW1zLCB7IGRpc2NvdW50SW5QZXJjZW50ID0gMCB9ID0ge30pID0+IHtcblxuXG5mdW5jdGlvbiBnZXREaXNjb3VudEFtb3VudCh0b3RhbFByaWNlLCBjb3Vwb24pIHtcbiAgbGV0IGRpc2NvdW50ID0gKHRvdGFsUHJpY2UgKiBOdW1iZXIoY291cG9uLnBlcmNlbnRhZ2UpKSAvIDEwMDtcbiAgZGlzY291bnQgPSBkaXNjb3VudCA+PSBjb3Vwb24/Lm1heGltdW1fZGlzY291bnRfYW1vdW50ID8gY291cG9uPy5tYXhpbXVtX2Rpc2NvdW50X2Ftb3VudCA6IGRpc2NvdW50O1xuICByZXR1cm4gZGlzY291bnQ7XG59XG5cbmZ1bmN0aW9uIGdldFRvdGFsSXRlbVByaWNlKGl0ZW1zKSB7XG4gIHJldHVybiBpdGVtcy5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uc2FsZVByaWNlKSB7XG4gICAgICByZXR1cm4gdG90YWwgKyBpdGVtLnNhbGVQcmljZSAqIGl0ZW0ucXVhbnRpdHk7XG4gICAgfVxuICAgIHJldHVybiB0b3RhbCArIGl0ZW0ucHJpY2UgKiBpdGVtLnF1YW50aXR5O1xuICB9LCAwKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNhcnRJdGVtc1RvdGFsUHJpY2UgPSAoaXRlbXMsIGNvdXBvbiA9IG51bGwpID0+IHtcbiAgaWYgKGl0ZW1zID09PSBudWxsIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XG5cbiAgY29uc3QgaXRlbUNvc3QgPSBnZXRUb3RhbEl0ZW1QcmljZShpdGVtcyk7XG5cbiAgbGV0IGRpc2NvdW50ID0gY291cG9uID8gZ2V0RGlzY291bnRBbW91bnQoaXRlbUNvc3QsIGNvdXBvbikgOiAwO1xuXG4gIHJldHVybiBpdGVtQ29zdCAtIGRpc2NvdW50O1xufTtcblxuZXhwb3J0IGNvbnN0IGNhcnREaXNjb3VudEFtb3VudCA9IChpdGVtcywgY291cG9uID0gbnVsbCkgPT4ge1xuICBpZiAoaXRlbXMgPT09IG51bGwgfHwgaXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcblxuICBjb25zdCBpdGVtQ29zdCA9IGdldFRvdGFsSXRlbVByaWNlKGl0ZW1zKTtcblxuICByZXR1cm4gY291cG9uID8gZ2V0RGlzY291bnRBbW91bnQoaXRlbUNvc3QsIGNvdXBvbikgOiAwO1xufTtcblxuXG4vLyBjYXJ0SXRlbXMsIGNhcnRJdGVtVG9BZGRcbmNvbnN0IGFkZEl0ZW1Ub0NhcnQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCBleGlzdGluZ0NhcnRJdGVtSW5kZXggPSBzdGF0ZS5pdGVtcy5maW5kSW5kZXgoXG4gICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXG4gICk7XG5cbiAgaWYgKGV4aXN0aW5nQ2FydEl0ZW1JbmRleCA+IC0xKSB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSBbLi4uc3RhdGUuaXRlbXNdO1xuICAgIG5ld1N0YXRlW2V4aXN0aW5nQ2FydEl0ZW1JbmRleF0ucXVhbnRpdHkgKz0gYWN0aW9uLnBheWxvYWQucXVhbnRpdHk7XG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuICB9XG4gIHJldHVybiBbLi4uc3RhdGUuaXRlbXMsIGFjdGlvbi5wYXlsb2FkXTtcbn07XG5cbi8vIGNhcnRJdGVtcywgY2FydEl0ZW1Ub1JlbW92ZVxuY29uc3QgcmVtb3ZlSXRlbUZyb21DYXJ0ID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHN0YXRlLml0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKSB7XG4gICAgICBjb25zdCBuZXdRdWFudGl0eSA9IGl0ZW0ucXVhbnRpdHkgLSBhY3Rpb24ucGF5bG9hZC5xdWFudGl0eTtcblxuICAgICAgcmV0dXJuIG5ld1F1YW50aXR5ID4gMFxuICAgICAgICA/IFsuLi5hY2MsIHsgLi4uaXRlbSwgcXVhbnRpdHk6IG5ld1F1YW50aXR5IH1dXG4gICAgICAgIDogWy4uLmFjY107XG4gICAgfVxuICAgIHJldHVybiBbLi4uYWNjLCBpdGVtXTtcbiAgfSwgW10pO1xufTtcblxuY29uc3QgY2xlYXJJdGVtRnJvbUNhcnQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICByZXR1cm4gc3RhdGUuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBhY3Rpb24ucGF5bG9hZC5pZCk7XG59O1xuXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdSRUhZRFJBVEUnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSAnVE9HR0xFX0NBUlQnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzT3BlbjogIXN0YXRlLmlzT3BlbiB9O1xuICAgIGNhc2UgJ0FERF9JVEVNJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpdGVtczogYWRkSXRlbVRvQ2FydChzdGF0ZSwgYWN0aW9uKSB9O1xuICAgIGNhc2UgJ1JFTU9WRV9JVEVNJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpdGVtczogcmVtb3ZlSXRlbUZyb21DYXJ0KHN0YXRlLCBhY3Rpb24pIH07XG4gICAgY2FzZSAnQ0xFQVJfSVRFTV9GUk9NX0NBUlQnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGl0ZW1zOiBjbGVhckl0ZW1Gcm9tQ2FydChzdGF0ZSwgYWN0aW9uKSB9O1xuICAgIGNhc2UgJ0NMRUFSX0NBUlQnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGl0ZW1zOiBbXSB9O1xuICAgIGNhc2UgJ05PX01PUkVfU1RPQ0snOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIG5vTW9yZVN0b2NrOiB0cnVlIH07XG4gICAgY2FzZSAnUkVTRVRfTk9fTU9SRV9TVE9DSyc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbm9Nb3JlU3RvY2s6IGZhbHNlIH07XG4gICAgY2FzZSAnQVBQTFlfQ09VUE9OJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjb3Vwb246IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSAnUkVNT1ZFX0NPVVBPTic6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY291cG9uOiBudWxsIH07XG4gICAgY2FzZSAnVE9HR0xFX1JFU1RBVVJBTlQnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzUmVzdGF1cmFudDogIXN0YXRlLmlzUmVzdGF1cmFudCB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gYWN0aW9uOiAke2FjdGlvbi50eXBlfWApO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/cart/cart.reducer.tsx\n");

/***/ })

})