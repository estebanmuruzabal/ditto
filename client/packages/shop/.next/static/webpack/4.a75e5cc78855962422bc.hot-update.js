webpackHotUpdate(4,{

/***/ "./src/contexts/cart/use-cart.tsx":
/*!****************************************!*\
  !*** ./src/contexts/cart/use-cart.tsx ***!
  \****************************************/
/*! exports provided: CartProvider, useCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartProvider\", function() { return CartProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useCart\", function() { return useCart; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"../../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _cart_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.reducer */ \"./src/contexts/cart/cart.reducer.tsx\");\n/* harmony import */ var utils_use_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/use-storage */ \"./src/utils/use-storage.ts\");\n\n\nvar _s = $RefreshSig$(),\n    _this = undefined,\n    _jsxFileName = \"/Users/estebanmuruzabal/work/Mahdi-Fashion/client/packages/shop/src/contexts/cart/use-cart.tsx\",\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar CartContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nvar INITIAL_STATE = {\n  isOpen: false,\n  items: [],\n  isRestaurant: false,\n  coupon: null,\n  noMoreStock: false\n};\n\nvar useCartActions = function useCartActions() {\n  _s();\n\n  var _state$items3;\n\n  var initialCart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useReducer\"])(_cart_reducer__WEBPACK_IMPORTED_MODULE_2__[\"reducer\"], initialCart),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  var addItemHandler = function addItemHandler(item) {\n    var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n    var product = state.items.map(function (cartItem) {\n      console.log(cartItem.id === item.id);\n    });\n\n    if (product.quantity === product.product_quantity) {\n      dispatch({\n        type: 'NO_MORE_STOCK'\n      });\n    } else {\n      dispatch({\n        type: 'ADD_ITEM',\n        payload: _objectSpread(_objectSpread({}, item), {}, {\n          quantity: quantity\n        })\n      });\n    }\n  };\n\n  var resetNoMoreStockHandler = function resetNoMoreStockHandler() {\n    dispatch({\n      type: 'RESET_NO_MORE_STOCK'\n    });\n  };\n\n  var removeItemHandler = function removeItemHandler(item) {\n    var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n    dispatch({\n      type: 'REMOVE_ITEM',\n      payload: _objectSpread(_objectSpread({}, item), {}, {\n        quantity: quantity\n      })\n    });\n  };\n\n  var clearItemFromCartHandler = function clearItemFromCartHandler(item) {\n    dispatch({\n      type: 'CLEAR_ITEM_FROM_CART',\n      payload: item\n    });\n  };\n\n  var clearCartHandler = function clearCartHandler() {\n    dispatch({\n      type: 'CLEAR_CART'\n    });\n  };\n\n  var toggleCartHandler = function toggleCartHandler() {\n    dispatch({\n      type: 'TOGGLE_CART'\n    });\n  };\n\n  var couponHandler = function couponHandler(coupon) {\n    dispatch({\n      type: 'APPLY_COUPON',\n      payload: coupon\n    });\n  };\n\n  var removeCouponHandler = function removeCouponHandler() {\n    dispatch({\n      type: 'REMOVE_COUPON'\n    });\n  };\n\n  var rehydrateLocalState = function rehydrateLocalState(payload) {\n    dispatch({\n      type: 'REHYDRATE',\n      payload: payload\n    });\n  };\n\n  var toggleRestaurant = function toggleRestaurant() {\n    dispatch({\n      type: 'TOGGLE_RESTAURANT'\n    });\n  };\n\n  var isInCartHandler = function isInCartHandler(id) {\n    var _state$items;\n\n    return (_state$items = state.items) === null || _state$items === void 0 ? void 0 : _state$items.some(function (item) {\n      return item.id === id;\n    });\n  };\n\n  var getItemHandler = function getItemHandler(id) {\n    var _state$items2;\n\n    return (_state$items2 = state.items) === null || _state$items2 === void 0 ? void 0 : _state$items2.find(function (item) {\n      return item.id === id;\n    });\n  };\n\n  var getCartItemsPrice = function getCartItemsPrice() {\n    return Object(_cart_reducer__WEBPACK_IMPORTED_MODULE_2__[\"cartItemsTotalPrice\"])(state.items).toFixed(2);\n  };\n\n  var getCartItemsTotalPrice = function getCartItemsTotalPrice() {\n    return Object(_cart_reducer__WEBPACK_IMPORTED_MODULE_2__[\"cartItemsTotalPrice\"])(state.items, state.coupon).toFixed(2);\n  };\n\n  var getDiscount = function getDiscount() {\n    return Object(_cart_reducer__WEBPACK_IMPORTED_MODULE_2__[\"cartDiscountAmount\"])(state.items, state.coupon).toFixed(2);\n  };\n\n  var getItemsCount = (_state$items3 = state.items) === null || _state$items3 === void 0 ? void 0 : _state$items3.reduce(function (acc, item) {\n    return acc + item.quantity;\n  }, 0);\n  return {\n    state: state,\n    getItemsCount: getItemsCount,\n    rehydrateLocalState: rehydrateLocalState,\n    addItemHandler: addItemHandler,\n    removeItemHandler: removeItemHandler,\n    resetNoMoreStockHandler: resetNoMoreStockHandler,\n    clearItemFromCartHandler: clearItemFromCartHandler,\n    clearCartHandler: clearCartHandler,\n    isInCartHandler: isInCartHandler,\n    getItemHandler: getItemHandler,\n    toggleCartHandler: toggleCartHandler,\n    getCartItemsTotalPrice: getCartItemsTotalPrice,\n    getCartItemsPrice: getCartItemsPrice,\n    couponHandler: couponHandler,\n    removeCouponHandler: removeCouponHandler,\n    getDiscount: getDiscount,\n    toggleRestaurant: toggleRestaurant\n  };\n};\n\n_s(useCartActions, \"eanL7CPucd3H18vMQ/enxq1/NMY=\");\n\nvar CartProvider = function CartProvider(_ref) {\n  _s2();\n\n  var _state$items4;\n\n  var children = _ref.children;\n\n  var _useCartActions = useCartActions(),\n      state = _useCartActions.state,\n      rehydrateLocalState = _useCartActions.rehydrateLocalState,\n      getItemsCount = _useCartActions.getItemsCount,\n      addItemHandler = _useCartActions.addItemHandler,\n      resetNoMoreStockHandler = _useCartActions.resetNoMoreStockHandler,\n      removeItemHandler = _useCartActions.removeItemHandler,\n      clearItemFromCartHandler = _useCartActions.clearItemFromCartHandler,\n      clearCartHandler = _useCartActions.clearCartHandler,\n      isInCartHandler = _useCartActions.isInCartHandler,\n      getItemHandler = _useCartActions.getItemHandler,\n      toggleCartHandler = _useCartActions.toggleCartHandler,\n      getCartItemsTotalPrice = _useCartActions.getCartItemsTotalPrice,\n      couponHandler = _useCartActions.couponHandler,\n      removeCouponHandler = _useCartActions.removeCouponHandler,\n      getCartItemsPrice = _useCartActions.getCartItemsPrice,\n      getDiscount = _useCartActions.getDiscount,\n      toggleRestaurant = _useCartActions.toggleRestaurant;\n\n  var _useStorage = Object(utils_use_storage__WEBPACK_IMPORTED_MODULE_3__[\"useStorage\"])(state, rehydrateLocalState),\n      rehydrated = _useStorage.rehydrated,\n      error = _useStorage.error;\n\n  return __jsx(CartContext.Provider, {\n    value: {\n      isOpen: state.isOpen,\n      noMoreStock: state.noMoreStock,\n      items: state.items,\n      coupon: state.coupon,\n      isRestaurant: state.isRestaurant,\n      cartItemsCount: (_state$items4 = state.items) === null || _state$items4 === void 0 ? void 0 : _state$items4.length,\n      itemsCount: getItemsCount,\n      addItem: addItemHandler,\n      removeItem: removeItemHandler,\n      removeItemFromCart: clearItemFromCartHandler,\n      clearCart: clearCartHandler,\n      isInCart: isInCartHandler,\n      getItem: getItemHandler,\n      toggleCart: toggleCartHandler,\n      calculatePrice: getCartItemsTotalPrice,\n      calculateSubTotalPrice: getCartItemsPrice,\n      applyCoupon: couponHandler,\n      removeCoupon: removeCouponHandler,\n      calculateDiscount: getDiscount,\n      toggleRestaurant: toggleRestaurant\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n_s2(CartProvider, \"o1yUFlwVttwjw7tTFkdXNuaE8aI=\", false, function () {\n  return [useCartActions, utils_use_storage__WEBPACK_IMPORTED_MODULE_3__[\"useStorage\"]];\n});\n\n_c = CartProvider;\nvar useCart = function useCart() {\n  _s3();\n\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(CartContext);\n};\n\n_s3(useCart, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"CartProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvY2FydC91c2UtY2FydC50c3g/YjQ1MSJdLCJuYW1lcyI6WyJDYXJ0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJJTklUSUFMX1NUQVRFIiwiaXNPcGVuIiwiaXRlbXMiLCJpc1Jlc3RhdXJhbnQiLCJjb3Vwb24iLCJub01vcmVTdG9jayIsInVzZUNhcnRBY3Rpb25zIiwiaW5pdGlhbENhcnQiLCJ1c2VSZWR1Y2VyIiwicmVkdWNlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJhZGRJdGVtSGFuZGxlciIsIml0ZW0iLCJxdWFudGl0eSIsInByb2R1Y3QiLCJtYXAiLCJjYXJ0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInByb2R1Y3RfcXVhbnRpdHkiLCJ0eXBlIiwicGF5bG9hZCIsInJlc2V0Tm9Nb3JlU3RvY2tIYW5kbGVyIiwicmVtb3ZlSXRlbUhhbmRsZXIiLCJjbGVhckl0ZW1Gcm9tQ2FydEhhbmRsZXIiLCJjbGVhckNhcnRIYW5kbGVyIiwidG9nZ2xlQ2FydEhhbmRsZXIiLCJjb3Vwb25IYW5kbGVyIiwicmVtb3ZlQ291cG9uSGFuZGxlciIsInJlaHlkcmF0ZUxvY2FsU3RhdGUiLCJ0b2dnbGVSZXN0YXVyYW50IiwiaXNJbkNhcnRIYW5kbGVyIiwic29tZSIsImdldEl0ZW1IYW5kbGVyIiwiZmluZCIsImdldENhcnRJdGVtc1ByaWNlIiwiY2FydEl0ZW1zVG90YWxQcmljZSIsInRvRml4ZWQiLCJnZXRDYXJ0SXRlbXNUb3RhbFByaWNlIiwiZ2V0RGlzY291bnQiLCJjYXJ0RGlzY291bnRBbW91bnQiLCJnZXRJdGVtc0NvdW50IiwicmVkdWNlIiwiYWNjIiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdG9yYWdlIiwicmVoeWRyYXRlZCIsImVycm9yIiwiY2FydEl0ZW1zQ291bnQiLCJsZW5ndGgiLCJpdGVtc0NvdW50IiwiYWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJyZW1vdmVJdGVtRnJvbUNhcnQiLCJjbGVhckNhcnQiLCJpc0luQ2FydCIsImdldEl0ZW0iLCJ0b2dnbGVDYXJ0IiwiY2FsY3VsYXRlUHJpY2UiLCJjYWxjdWxhdGVTdWJUb3RhbFByaWNlIiwiYXBwbHlDb3Vwb24iLCJyZW1vdmVDb3Vwb24iLCJjYWxjdWxhdGVEaXNjb3VudCIsInVzZUNhcnQiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsV0FBVyxHQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBakM7QUFDQSxJQUFNQyxhQUFhLEdBQUc7QUFDcEJDLFFBQU0sRUFBRSxLQURZO0FBRXBCQyxPQUFLLEVBQUUsRUFGYTtBQUdwQkMsY0FBWSxFQUFFLEtBSE07QUFJcEJDLFFBQU0sRUFBRSxJQUpZO0FBS3BCQyxhQUFXLEVBQUU7QUFMTyxDQUF0Qjs7QUFRQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQWlDO0FBQUE7O0FBQUE7O0FBQUEsTUFBaENDLFdBQWdDLHVFQUFsQlAsYUFBa0I7O0FBQUEsb0JBQzVCUSx3REFBVSxDQUFDQyxxREFBRCxFQUFVRixXQUFWLENBRGtCO0FBQUEsTUFDL0NHLEtBRCtDO0FBQUEsTUFDeENDLFFBRHdDOztBQUd0RCxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLElBQUQsRUFBd0I7QUFBQSxRQUFqQkMsUUFBaUIsdUVBQU4sQ0FBTTtBQUU3QyxRQUFNQyxPQUFPLEdBQUdMLEtBQUssQ0FBQ1IsS0FBTixDQUFZYyxHQUFaLENBQWdCLFVBQUNDLFFBQUQsRUFBYztBQUM1Q0MsYUFBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVEsQ0FBQ0csRUFBVCxLQUFnQlAsSUFBSSxDQUFDTyxFQUFqQztBQUNELEtBRmUsQ0FBaEI7O0FBSUEsUUFBSUwsT0FBTyxDQUFDRCxRQUFSLEtBQXFCQyxPQUFPLENBQUNNLGdCQUFqQyxFQUFtRDtBQUNqRFYsY0FBUSxDQUFDO0FBQUVXLFlBQUksRUFBRTtBQUFS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TEgsV0FBSyxFQUFFUSxLQUFLLENBQUNSLEtBSFI7QUFJTEUsWUFBTSxFQUFFTSxLQUFLLENBQUNOLE1BSlQ7QUFLTEQsa0JBQVksRUFBRU8sS0FBSyxDQUFDUCxZQUxmO0FBTUxnRCxvQkFBYyxtQkFBRXpDLEtBQUssQ0FBQ1IsS0FBUixrREFBRSxjQUFha0QsTUFOeEI7QUFPTEMsZ0JBQVUsRUFBRVYsYUFQUDtBQVFMVyxhQUFPLEVBQUUxQyxjQVJKO0FBU0wyQyxnQkFBVSxFQUFFOUIsaUJBVFA7QUFVTCtCLHdCQUFrQixFQUFFOUIsd0JBVmY7QUFXTCtCLGVBQVMsRUFBRTlCLGdCQVhOO0FBWUwrQixjQUFRLEVBQUV6QixlQVpMO0FBYUwwQixhQUFPLEVBQUV4QixjQWJKO0FBY0x5QixnQkFBVSxFQUFFaEMsaUJBZFA7QUFlTGlDLG9CQUFjLEVBQUVyQixzQkFmWDtBQWdCTHNCLDRCQUFzQixFQUFFekIsaUJBaEJuQjtBQWlCTDBCLGlCQUFXLEVBQUVsQyxhQWpCUjtBQWtCTG1DLGtCQUFZLEVBQUVsQyxtQkFsQlQ7QUFtQkxtQyx1QkFBaUIsRUFBRXhCLFdBbkJkO0FBb0JMVCxzQkFBZ0IsRUFBaEJBO0FBcEJLLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXdCR2UsUUF4QkgsQ0FERjtBQTRCRCxDQWpETTs7SUFBTUQsWTtVQW1CUHhDLGMsRUFDMEIwQyw0RDs7O0tBcEJuQkYsWTtBQW1ETixJQUFNb0IsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQTs7QUFBQSxTQUFNQyx3REFBVSxDQUFDckUsV0FBRCxDQUFoQjtBQUFBLENBQWhCOztJQUFNb0UsTyIsImZpbGUiOiIuL3NyYy9jb250ZXh0cy9jYXJ0L3VzZS1jYXJ0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyLCB1c2VDb250ZXh0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVkdWNlciwgY2FydEl0ZW1zVG90YWxQcmljZSwgY2FydERpc2NvdW50QW1vdW50IH0gZnJvbSAnLi9jYXJ0LnJlZHVjZXInO1xuaW1wb3J0IHsgdXNlU3RvcmFnZSB9IGZyb20gJ3V0aWxzL3VzZS1zdG9yYWdlJztcbmNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBhbnkpO1xuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgaXNPcGVuOiBmYWxzZSxcbiAgaXRlbXM6IFtdLFxuICBpc1Jlc3RhdXJhbnQ6IGZhbHNlLFxuICBjb3Vwb246IG51bGwsXG4gIG5vTW9yZVN0b2NrOiBmYWxzZVxufTtcblxuY29uc3QgdXNlQ2FydEFjdGlvbnMgPSAoaW5pdGlhbENhcnQgPSBJTklUSUFMX1NUQVRFKSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsQ2FydCk7XG5cbiAgY29uc3QgYWRkSXRlbUhhbmRsZXIgPSAoaXRlbSwgcXVhbnRpdHkgPSAxKSA9PiB7XG5cbiAgICBjb25zdCBwcm9kdWN0ID0gc3RhdGUuaXRlbXMubWFwKChjYXJ0SXRlbSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coY2FydEl0ZW0uaWQgPT09IGl0ZW0uaWQpXG4gICAgfSlcbiAgICBcbiAgICBpZiAocHJvZHVjdC5xdWFudGl0eSA9PT0gcHJvZHVjdC5wcm9kdWN0X3F1YW50aXR5KSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdOT19NT1JFX1NUT0NLJyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQUREX0lURU0nLCBwYXlsb2FkOiB7IC4uLml0ZW0sIHF1YW50aXR5IH0gfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlc2V0Tm9Nb3JlU3RvY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFU0VUX05PX01PUkVfU1RPQ0snIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUl0ZW1IYW5kbGVyID0gKGl0ZW0sIHF1YW50aXR5ID0gMSkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFTU9WRV9JVEVNJywgcGF5bG9hZDogeyAuLi5pdGVtLCBxdWFudGl0eSB9IH0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFySXRlbUZyb21DYXJ0SGFuZGxlciA9IChpdGVtKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnQ0xFQVJfSVRFTV9GUk9NX0NBUlQnLCBwYXlsb2FkOiBpdGVtIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyQ2FydEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnQ0xFQVJfQ0FSVCcgfSk7XG4gIH07XG4gIGNvbnN0IHRvZ2dsZUNhcnRIYW5kbGVyID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1RPR0dMRV9DQVJUJyB9KTtcbiAgfTtcbiAgY29uc3QgY291cG9uSGFuZGxlciA9IChjb3Vwb24pID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdBUFBMWV9DT1VQT04nLCBwYXlsb2FkOiBjb3Vwb24gfSk7XG4gIH07XG4gIGNvbnN0IHJlbW92ZUNvdXBvbkhhbmRsZXIgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnUkVNT1ZFX0NPVVBPTicgfSk7XG4gIH07XG4gIGNvbnN0IHJlaHlkcmF0ZUxvY2FsU3RhdGUgPSAocGF5bG9hZCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ1JFSFlEUkFURScsIHBheWxvYWQgfSk7XG4gIH07XG4gIGNvbnN0IHRvZ2dsZVJlc3RhdXJhbnQgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiAnVE9HR0xFX1JFU1RBVVJBTlQnIH0pO1xuICB9O1xuICBjb25zdCBpc0luQ2FydEhhbmRsZXIgPSAoaWQpID0+IHtcbiAgICByZXR1cm4gc3RhdGUuaXRlbXM/LnNvbWUoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKTtcbiAgfTtcbiAgY29uc3QgZ2V0SXRlbUhhbmRsZXIgPSAoaWQpID0+IHtcbiAgICByZXR1cm4gc3RhdGUuaXRlbXM/LmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKTtcbiAgfTtcbiAgY29uc3QgZ2V0Q2FydEl0ZW1zUHJpY2UgPSAoKSA9PiBjYXJ0SXRlbXNUb3RhbFByaWNlKHN0YXRlLml0ZW1zKS50b0ZpeGVkKDIpO1xuXG4gIGNvbnN0IGdldENhcnRJdGVtc1RvdGFsUHJpY2UgPSAoKSA9PlxuICAgIGNhcnRJdGVtc1RvdGFsUHJpY2Uoc3RhdGUuaXRlbXMsIHN0YXRlLmNvdXBvbikudG9GaXhlZCgyKTtcblxuICBjb25zdCBnZXREaXNjb3VudCA9ICgpID0+IGNhcnREaXNjb3VudEFtb3VudChzdGF0ZS5pdGVtcywgc3RhdGUuY291cG9uKS50b0ZpeGVkKDIpO1xuXG4gIGNvbnN0IGdldEl0ZW1zQ291bnQgPSBzdGF0ZS5pdGVtcz8ucmVkdWNlKFxuICAgIChhY2MsIGl0ZW0pID0+IGFjYyArIGl0ZW0ucXVhbnRpdHksXG4gICAgMFxuICApO1xuICByZXR1cm4ge1xuICAgIHN0YXRlLFxuICAgIGdldEl0ZW1zQ291bnQsXG4gICAgcmVoeWRyYXRlTG9jYWxTdGF0ZSxcbiAgICBhZGRJdGVtSGFuZGxlcixcbiAgICByZW1vdmVJdGVtSGFuZGxlcixcbiAgICByZXNldE5vTW9yZVN0b2NrSGFuZGxlcixcbiAgICBjbGVhckl0ZW1Gcm9tQ2FydEhhbmRsZXIsXG4gICAgY2xlYXJDYXJ0SGFuZGxlcixcbiAgICBpc0luQ2FydEhhbmRsZXIsXG4gICAgZ2V0SXRlbUhhbmRsZXIsXG4gICAgdG9nZ2xlQ2FydEhhbmRsZXIsXG4gICAgZ2V0Q2FydEl0ZW1zVG90YWxQcmljZSxcbiAgICBnZXRDYXJ0SXRlbXNQcmljZSxcbiAgICBjb3Vwb25IYW5kbGVyLFxuICAgIHJlbW92ZUNvdXBvbkhhbmRsZXIsXG4gICAgZ2V0RGlzY291bnQsXG4gICAgdG9nZ2xlUmVzdGF1cmFudCxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBDYXJ0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBzdGF0ZSxcbiAgICByZWh5ZHJhdGVMb2NhbFN0YXRlLFxuICAgIGdldEl0ZW1zQ291bnQsXG4gICAgYWRkSXRlbUhhbmRsZXIsXG4gICAgcmVzZXROb01vcmVTdG9ja0hhbmRsZXIsXG4gICAgcmVtb3ZlSXRlbUhhbmRsZXIsXG4gICAgY2xlYXJJdGVtRnJvbUNhcnRIYW5kbGVyLFxuICAgIGNsZWFyQ2FydEhhbmRsZXIsXG4gICAgaXNJbkNhcnRIYW5kbGVyLFxuICAgIGdldEl0ZW1IYW5kbGVyLFxuICAgIHRvZ2dsZUNhcnRIYW5kbGVyLFxuICAgIGdldENhcnRJdGVtc1RvdGFsUHJpY2UsXG4gICAgY291cG9uSGFuZGxlcixcbiAgICByZW1vdmVDb3Vwb25IYW5kbGVyLFxuICAgIGdldENhcnRJdGVtc1ByaWNlLFxuICAgIGdldERpc2NvdW50LFxuICAgIHRvZ2dsZVJlc3RhdXJhbnQsXG4gIH0gPSB1c2VDYXJ0QWN0aW9ucygpO1xuICBjb25zdCB7IHJlaHlkcmF0ZWQsIGVycm9yIH0gPSB1c2VTdG9yYWdlKHN0YXRlLCByZWh5ZHJhdGVMb2NhbFN0YXRlKTtcbiAgcmV0dXJuIChcbiAgICA8Q2FydENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGlzT3Blbjogc3RhdGUuaXNPcGVuLFxuICAgICAgICBub01vcmVTdG9jazogc3RhdGUubm9Nb3JlU3RvY2ssXG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcyxcbiAgICAgICAgY291cG9uOiBzdGF0ZS5jb3Vwb24sXG4gICAgICAgIGlzUmVzdGF1cmFudDogc3RhdGUuaXNSZXN0YXVyYW50LFxuICAgICAgICBjYXJ0SXRlbXNDb3VudDogc3RhdGUuaXRlbXM/Lmxlbmd0aCxcbiAgICAgICAgaXRlbXNDb3VudDogZ2V0SXRlbXNDb3VudCxcbiAgICAgICAgYWRkSXRlbTogYWRkSXRlbUhhbmRsZXIsXG4gICAgICAgIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW1IYW5kbGVyLFxuICAgICAgICByZW1vdmVJdGVtRnJvbUNhcnQ6IGNsZWFySXRlbUZyb21DYXJ0SGFuZGxlcixcbiAgICAgICAgY2xlYXJDYXJ0OiBjbGVhckNhcnRIYW5kbGVyLFxuICAgICAgICBpc0luQ2FydDogaXNJbkNhcnRIYW5kbGVyLFxuICAgICAgICBnZXRJdGVtOiBnZXRJdGVtSGFuZGxlcixcbiAgICAgICAgdG9nZ2xlQ2FydDogdG9nZ2xlQ2FydEhhbmRsZXIsXG4gICAgICAgIGNhbGN1bGF0ZVByaWNlOiBnZXRDYXJ0SXRlbXNUb3RhbFByaWNlLFxuICAgICAgICBjYWxjdWxhdGVTdWJUb3RhbFByaWNlOiBnZXRDYXJ0SXRlbXNQcmljZSxcbiAgICAgICAgYXBwbHlDb3Vwb246IGNvdXBvbkhhbmRsZXIsXG4gICAgICAgIHJlbW92ZUNvdXBvbjogcmVtb3ZlQ291cG9uSGFuZGxlcixcbiAgICAgICAgY2FsY3VsYXRlRGlzY291bnQ6IGdldERpc2NvdW50LFxuICAgICAgICB0b2dnbGVSZXN0YXVyYW50LFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VDYXJ0ID0gKCkgPT4gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/cart/use-cart.tsx\n");

/***/ })

})