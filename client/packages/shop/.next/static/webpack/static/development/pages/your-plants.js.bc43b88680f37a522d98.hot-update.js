webpackHotUpdate("static/development/pages/your-plants.js",{

/***/ "./src/contexts/profile/profile.provider.tsx":
/*!***************************************************!*\
  !*** ./src/contexts/profile/profile.provider.tsx ***!
  \***************************************************/
/*! exports provided: ProfileProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProfileProvider\", function() { return ProfileProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"../../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _profile_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.context */ \"./src/contexts/profile/profile.context.tsx\");\n/* harmony import */ var utils_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/constant */ \"./src/utils/constant.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/estebanmuruzabal/work/ditto/client/packages/shop/src/contexts/profile/profile.provider.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'HANDLE_ON_INPUT_CHANGE':\n      return _objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, action.payload.field, action.payload.value));\n    // case SensorsTypes.SOIL_HUMIDITY_SETTING_1:\n    //   state.plants[0][SensorsTypes.SOIL_HUMIDITY_SETTING_1][action.payload.field] = action.payload.value;\n    //   return { ...state};\n    // case SensorsTypes.SOIL_HUMIDITY_SETTING_2:\n    //   state.plants[0][SensorsTypes.SOIL_HUMIDITY_SETTING_2][action.payload.field] = action.payload.value;\n    //   return { ...state};\n\n    case 'HANDLE_ADD_PLANT':\n      state.plants[0][action.payload.field] = action.payload.value;\n      return _objectSpread({}, state);\n\n    case utils_constant__WEBPACK_IMPORTED_MODULE_4__[\"SensorsTypes\"].LIGHT_SETTING:\n      state.plants[0][utils_constant__WEBPACK_IMPORTED_MODULE_4__[\"SensorsTypes\"].LIGHT_SETTING][action.payload.field] = action.payload.value;\n      return _objectSpread({}, state);\n\n    case 'ADD_CONTACT':\n      var newContact = _objectSpread({}, action.payload.values);\n\n      return _objectSpread(_objectSpread({}, state), {}, {\n        phones: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.phones), [newContact])\n      });\n\n    case 'UPDATE_CONTACT':\n      if (action.payload.id !== null) {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          phones: state.phones.map(function (item) {\n            return item.id == action.payload.id ? _objectSpread(_objectSpread({}, item), action.payload.values) : item;\n          })\n        });\n      }\n\n    case 'DELETE_CONTACT':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        phones: state.phones.filter(function (item) {\n          return item.id !== action.payload;\n        })\n      });\n\n    case 'ADD_ADDRESS':\n      var newAdress = _objectSpread({}, action.payload);\n\n      if (state.delivery_address == null) {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          delivery_address: [newAdress]\n        });\n      } else {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          delivery_address: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.delivery_address), [newAdress])\n        });\n      }\n\n    case 'UPDATE_ADDRESS':\n      if (action.payload.id) {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          delivery_address: state.delivery_address.map(function (item, index) {\n            return item.id === action.payload.id ? _objectSpread(_objectSpread({}, item), action.payload.value) : item;\n          })\n        });\n      }\n\n    case 'DELETE_ADDRESS':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        delivery_address: state.delivery_address.filter(function (item, index) {\n          return item.id !== action.payload;\n        })\n      });\n\n    case 'ADD_CARD':\n      var newCard = {\n        id: action.payload.id,\n        type: state.card.length === '0' ? 'primary' : 'secondary',\n        cardType: action.payload.brand.toLowerCase(),\n        name: state.name,\n        lastFourDigit: action.payload.last4\n      };\n      return _objectSpread(_objectSpread({}, state), {}, {\n        card: [newCard].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.card))\n      });\n\n    case 'DELETE_CARD':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        card: state.card.filter(function (item) {\n          return item.id !== action.payload;\n        })\n      });\n\n    case 'SET_PRIMARY_CONTACT':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        phones: state.phones.map(function (item) {\n          return item.id === action.payload ? _objectSpread(_objectSpread({}, item), {}, {\n            is_primary: true,\n            type: 'primary'\n          }) : _objectSpread(_objectSpread({}, item), {}, {\n            is_primary: false,\n            type: 'secondary'\n          });\n        })\n      });\n\n    case 'SET_PRIMARY_ADDRESS':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        delivery_address: state.delivery_address.map(function (item, index) {\n          return item.id == action.payload ? _objectSpread(_objectSpread({}, item), {}, {\n            is_primary: true\n          }) : _objectSpread(_objectSpread({}, item), {}, {\n            is_primary: false\n          });\n        })\n      });\n\n    case 'SET_PRIMARY_SCHEDULE':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        deliveryMethods: state.deliveryMethods.map(function (item) {\n          return item.id === action.payload ? _objectSpread(_objectSpread({}, item), {}, {\n            type: 'primary'\n          }) : _objectSpread(_objectSpread({}, item), {}, {\n            type: 'secondary'\n          });\n        })\n      });\n\n    case 'SET_PRIMARY_CARD':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        paymentMethods: state.paymentMethods.map(function (item) {\n          return item.id === action.payload ? _objectSpread(_objectSpread({}, item), {}, {\n            type: 'primary'\n          }) : _objectSpread(_objectSpread({}, item), {}, {\n            type: 'secondary'\n          });\n        })\n      });\n\n    default:\n      return state;\n  }\n}\n\nvar ProfileProvider = function ProfileProvider(_ref) {\n  _s();\n\n  var children = _ref.children,\n      initData = _ref.initData;\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useReducer\"])(reducer, _objectSpread({}, initData)),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  return __jsx(_profile_context__WEBPACK_IMPORTED_MODULE_3__[\"ProfileContext\"].Provider, {\n    value: {\n      state: state,\n      dispatch: dispatch\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 181,\n      columnNumber: 5\n    }\n  }, children);\n};\n\n_s(ProfileProvider, \"5VC8NG+g73NQ4DJHKnzMVrRTO14=\");\n\n_c = ProfileProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProfileProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvcHJvZmlsZS9wcm9maWxlLnByb3ZpZGVyLnRzeD9lMDc1Il0sIm5hbWVzIjpbInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiZmllbGQiLCJ2YWx1ZSIsInBsYW50cyIsIlNlbnNvcnNUeXBlcyIsIkxJR0hUX1NFVFRJTkciLCJuZXdDb250YWN0IiwidmFsdWVzIiwicGhvbmVzIiwiaWQiLCJtYXAiLCJpdGVtIiwiZmlsdGVyIiwibmV3QWRyZXNzIiwiZGVsaXZlcnlfYWRkcmVzcyIsImluZGV4IiwibmV3Q2FyZCIsImNhcmQiLCJsZW5ndGgiLCJjYXJkVHlwZSIsImJyYW5kIiwidG9Mb3dlckNhc2UiLCJuYW1lIiwibGFzdEZvdXJEaWdpdCIsImxhc3Q0IiwiaXNfcHJpbWFyeSIsImRlbGl2ZXJ5TWV0aG9kcyIsInBheW1lbnRNZXRob2RzIiwiUHJvZmlsZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJpbml0RGF0YSIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQXFCQSxTQUFTQSxPQUFULENBQWlCQyxLQUFqQixFQUE2QkMsTUFBN0IsRUFBa0Q7QUFDaEQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBSyx3QkFBTDtBQUNFLDZDQUFZRixLQUFaLHFHQUFvQkMsTUFBTSxDQUFDRSxPQUFQLENBQWVDLEtBQW5DLEVBQTJDSCxNQUFNLENBQUNFLE9BQVAsQ0FBZUUsS0FBMUQ7QUFFRjtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7O0FBRUEsU0FBSyxrQkFBTDtBQUNFTCxXQUFLLENBQUNNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCTCxNQUFNLENBQUNFLE9BQVAsQ0FBZUMsS0FBL0IsSUFBd0NILE1BQU0sQ0FBQ0UsT0FBUCxDQUFlRSxLQUF2RDtBQUVBLCtCQUFZTCxLQUFaOztBQUVGLFNB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QUEwQixVQUFDQyxJQUFELEVBQWM7QUFDeEQsaUJBQVFBLElBQUksQ0FBQ0YsRUFBTCxLQUFZWCxNQUFNLENBQUNFLE9BQW5CLG1DQUNBVyxJQURBO0FBQ01aLGdCQUFJLEVBQUU7QUFEWiwrQ0FFQVksSUFGQTtBQUVNWixnQkFBSSxFQUFFO0FBRlosWUFBUjtBQUdHLFNBSmE7QUFGbkI7O0FBU0YsU0FBSyxrQkFBTDtBQUNFLDZDQUNLRixLQURMO0FBRUU4QixzQkFBYyxFQUFFOUIsS0FBSyxDQUFDOEIsY0FBTixDQUFxQmpCLEdBQXJCLENBQXlCLFVBQUNDLElBQUQ7QUFBQSxpQkFDdkNBLElBQUksQ0FBQ0YsRUFBTCxLQUFZWCxNQUFNLENBQUNFLE9BQW5CLG1DQUNTVyxJQURUO0FBQ2VaLGdCQUFJLEVBQUU7QUFEckIsK0NBRVNZLElBRlQ7QUFFZVosZ0JBQUksRUFBRTtBQUZyQixZQUR1QztBQUFBLFNBQXpCO0FBRmxCOztBQVFGO0FBQ0UsYUFBT0YsS0FBUDtBQTVJSjtBQThJRDs7QUFNTSxJQUFNK0IsZUFBK0QsR0FBSyxTQUFwRUEsZUFBb0UsT0FHMUU7QUFBQTs7QUFBQSxNQUZMQyxRQUVLLFFBRkxBLFFBRUs7QUFBQSxNQURMQyxRQUNLLFFBRExBLFFBQ0s7O0FBQUEsb0JBRXFCQyx3REFBVSxDQUFDbkMsT0FBRCxvQkFBZWtDLFFBQWYsRUFGL0I7QUFBQSxNQUVFakMsS0FGRjtBQUFBLE1BRVNtQyxRQUZUOztBQUlMLFNBQ0UsTUFBQywrREFBRCxDQUFnQixRQUFoQjtBQUF5QixTQUFLLEVBQUU7QUFBRW5DLFdBQUssRUFBTEEsS0FBRjtBQUFTbUMsY0FBUSxFQUFSQTtBQUFULEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsUUFESCxDQURGO0FBS0QsQ0FaTTs7R0FBTUQsZTs7S0FBQUEsZSIsImZpbGUiOiIuL3NyYy9jb250ZXh0cy9wcm9maWxlL3Byb2ZpbGUucHJvdmlkZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9maWxlQ29udGV4dCB9IGZyb20gJy4vcHJvZmlsZS5jb250ZXh0JztcbmltcG9ydCB7IFNlbnNvcnNUeXBlcyB9IGZyb20gJ3V0aWxzL2NvbnN0YW50JztcblxudHlwZSBBY3Rpb24gPVxuICB8IHsgdHlwZTogJ0hBTkRMRV9PTl9JTlBVVF9DSEFOR0UnOyBwYXlsb2FkOiBhbnkgfVxuICB8IHsgdHlwZTogU2Vuc29yc1R5cGVzLlNPSUxfSFVNSURJVFlfU0VUVElOR18xOyBwYXlsb2FkOiBhbnkgfVxuICB8IHsgdHlwZTogU2Vuc29yc1R5cGVzLlNPSUxfSFVNSURJVFlfU0VUVElOR18yOyBwYXlsb2FkOiBhbnkgfVxuICB8IHsgdHlwZTogJ0hBTkRMRV9BRERfUExBTlQnOyBwYXlsb2FkOiBhbnkgfVxuICB8IHsgdHlwZTogU2Vuc29yc1R5cGVzLkxJR0hUX1NFVFRJTkc7IHBheWxvYWQ6IGFueSB9XG4gIHwgeyB0eXBlOiAnSEFORExFX1BBU1NXT1JEX0NMRUFSJzsgcGF5bG9hZDogYW55IH1cbiAgfCB7IHR5cGU6ICdBRERfQ09OVEFDVCc7IHBheWxvYWQ6IGFueSB9XG4gIHwgeyB0eXBlOiAnVVBEQVRFX0NPTlRBQ1QnOyBwYXlsb2FkOiBhbnkgfVxuICB8IHsgdHlwZTogJ0RFTEVURV9DT05UQUNUJzsgcGF5bG9hZDogYW55IH1cbiAgfCB7IHR5cGU6ICdBRERfQUREUkVTUyc7IHBheWxvYWQ6IGFueSB9XG4gIHwgeyB0eXBlOiAnVVBEQVRFX0FERFJFU1MnOyBwYXlsb2FkOiBhbnkgfVxuICB8IHsgdHlwZTogJ0RFTEVURV9BRERSRVNTJzsgcGF5bG9hZDogYW55IH1cbiAgfCB7IHR5cGU6ICdBRERfQ0FSRCc7IHBheWxvYWQ6IGFueSB9XG4gIHwgeyB0eXBlOiAnREVMRVRFX0NBUkQnOyBwYXlsb2FkOiBhbnkgfVxuICB8IHsgdHlwZTogJ1NFVF9QUklNQVJZX0NPTlRBQ1QnOyBwYXlsb2FkOiBhbnkgfVxuICB8IHsgdHlwZTogJ1NFVF9QUklNQVJZX0FERFJFU1MnOyBwYXlsb2FkOiBhbnkgfVxuICB8IHsgdHlwZTogJ1NFVF9QUklNQVJZX1NDSEVEVUxFJzsgcGF5bG9hZDogYW55IH1cbiAgfCB7IHR5cGU6ICdTRVRfUFJJTUFSWV9DQVJEJzsgcGF5bG9hZDogYW55IH07XG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlOiBhbnksIGFjdGlvbjogQWN0aW9uKTogYW55IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0hBTkRMRV9PTl9JTlBVVF9DSEFOR0UnOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIFthY3Rpb24ucGF5bG9hZC5maWVsZF06IGFjdGlvbi5wYXlsb2FkLnZhbHVlIH07XG4gICAgXG4gICAgLy8gY2FzZSBTZW5zb3JzVHlwZXMuU09JTF9IVU1JRElUWV9TRVRUSU5HXzE6XG4gICAgLy8gICBzdGF0ZS5wbGFudHNbMF1bU2Vuc29yc1R5cGVzLlNPSUxfSFVNSURJVFlfU0VUVElOR18xXVthY3Rpb24ucGF5bG9hZC5maWVsZF0gPSBhY3Rpb24ucGF5bG9hZC52YWx1ZTtcblxuICAgIC8vICAgcmV0dXJuIHsgLi4uc3RhdGV9O1xuICAgIFxuICAgIC8vIGNhc2UgU2Vuc29yc1R5cGVzLlNPSUxfSFVNSURJVFlfU0VUVElOR18yOlxuICAgIC8vICAgc3RhdGUucGxhbnRzWzBdW1NlbnNvcnNUeXBlcy5TT0lMX0hVTUlESVRZX1NFVFRJTkdfMl1bYWN0aW9uLnBheWxvYWQuZmllbGRdID0gYWN0aW9uLnBheWxvYWQudmFsdWU7XG4gICAgXG4gICAgLy8gICByZXR1cm4geyAuLi5zdGF0ZX07XG4gICAgXG4gICAgY2FzZSAnSEFORExFX0FERF9QTEFOVCc6XG4gICAgICBzdGF0ZS5wbGFudHNbMF1bYWN0aW9uLnBheWxvYWQuZmllbGRdID0gYWN0aW9uLnBheWxvYWQudmFsdWU7XG4gICAgXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZX07XG4gIFxuICAgIGNhc2UgU2Vuc29yc1R5cGVzLkxJR0hUX1NFVFRJTkc6XG4gICAgICAgIHN0YXRlLnBsYW50c1swXVtTZW5zb3JzVHlwZXMuTElHSFRfU0VUVElOR11bYWN0aW9uLnBheWxvYWQuZmllbGRdID0gYWN0aW9uLnBheWxvYWQudmFsdWU7XG4gICAgICBcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGV9O1xuICAgIGNhc2UgJ0FERF9DT05UQUNUJzpcbiAgICAgIGNvbnN0IG5ld0NvbnRhY3QgPSB7XG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLnZhbHVlcyxcbiAgICAgIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcGhvbmVzOiBbLi4uc3RhdGUucGhvbmVzLCBuZXdDb250YWN0XSxcbiAgICAgIH07XG4gICAgXG4gICAgY2FzZSAnVVBEQVRFX0NPTlRBQ1QnOlxuICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLmlkICE9PSBudWxsICkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIHBob25lczogc3RhdGUucGhvbmVzLm1hcCgoaXRlbTogYW55KSA9PlxuICAgICAgICAgICAgaXRlbS5pZCA9PSBhY3Rpb24ucGF5bG9hZC5pZFxuICAgICAgICAgICAgICA/IHsgLi4uaXRlbSwgLi4uYWN0aW9uLnBheWxvYWQudmFsdWVzIH1cbiAgICAgICAgICAgICAgOiBpdGVtXG4gICAgICAgICAgKSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgICAgXG4gICAgY2FzZSAnREVMRVRFX0NPTlRBQ1QnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBob25lczogc3RhdGUucGhvbmVzLmZpbHRlcihcbiAgICAgICAgICAoaXRlbTogYW55KSA9PiBpdGVtLmlkICE9PSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICApLFxuICAgICAgfTtcbiAgICBcbiAgICBjYXNlICdBRERfQUREUkVTUyc6XG4gICAgICBjb25zdCBuZXdBZHJlc3MgPSB7XG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkXG4gICAgICB9O1xuICAgICAgaWYoc3RhdGUuZGVsaXZlcnlfYWRkcmVzcyA9PSBudWxsKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBkZWxpdmVyeV9hZGRyZXNzOiBbbmV3QWRyZXNzXSxcbiAgICAgICAgfTtcbiAgICAgIH1lbHNle1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGRlbGl2ZXJ5X2FkZHJlc3M6IFsuLi5zdGF0ZS5kZWxpdmVyeV9hZGRyZXNzLCBuZXdBZHJlc3NdLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIGNhc2UgJ1VQREFURV9BRERSRVNTJzpcbiAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkLmlkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgZGVsaXZlcnlfYWRkcmVzczogc3RhdGUuZGVsaXZlcnlfYWRkcmVzcy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IGFueSkgPT5cbiAgICAgICAgICAgICAgaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWRcbiAgICAgICAgICAgICAgICA/IHsgLi4uaXRlbSwgLi4uYWN0aW9uLnBheWxvYWQudmFsdWUgfVxuICAgICAgICAgICAgICAgIDogaXRlbVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgY2FzZSAnREVMRVRFX0FERFJFU1MnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRlbGl2ZXJ5X2FkZHJlc3M6IHN0YXRlLmRlbGl2ZXJ5X2FkZHJlc3MuZmlsdGVyKFxuICAgICAgICAgIChpdGVtOiBhbnksIGluZGV4OiBhbnkpID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICksXG4gICAgICB9O1xuICAgIGNhc2UgJ0FERF9DQVJEJzpcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSB7XG4gICAgICAgIGlkOiBhY3Rpb24ucGF5bG9hZC5pZCxcbiAgICAgICAgdHlwZTogc3RhdGUuY2FyZC5sZW5ndGggPT09ICcwJyA/ICdwcmltYXJ5JyA6ICdzZWNvbmRhcnknLFxuICAgICAgICBjYXJkVHlwZTogYWN0aW9uLnBheWxvYWQuYnJhbmQudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgbmFtZTogc3RhdGUubmFtZSxcbiAgICAgICAgbGFzdEZvdXJEaWdpdDogYWN0aW9uLnBheWxvYWQubGFzdDQsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcmQ6IFtuZXdDYXJkLCAuLi5zdGF0ZS5jYXJkXSxcbiAgICAgIH07XG4gICAgY2FzZSAnREVMRVRFX0NBUkQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcmQ6IHN0YXRlLmNhcmQuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkKSxcbiAgICAgIH07XG4gICAgY2FzZSAnU0VUX1BSSU1BUllfQ09OVEFDVCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcGhvbmVzOiBzdGF0ZS5waG9uZXMubWFwKChpdGVtOiBhbnkpID0+XG4gICAgICAgICAgaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgID8geyAuLi5pdGVtLCBpc19wcmltYXJ5OiB0cnVlLCB0eXBlOiAncHJpbWFyeScgfVxuICAgICAgICAgICAgOiB7IC4uLml0ZW0sIGlzX3ByaW1hcnk6IGZhbHNlLCB0eXBlOiAnc2Vjb25kYXJ5JyB9XG4gICAgICAgICksXG4gICAgICB9O1xuICAgIGNhc2UgJ1NFVF9QUklNQVJZX0FERFJFU1MnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRlbGl2ZXJ5X2FkZHJlc3M6IHN0YXRlLmRlbGl2ZXJ5X2FkZHJlc3MubWFwKChpdGVtOiBhbnksIGluZGV4OiBhbnkpID0+XG4gICAgICAgICAgaXRlbS5pZCA9PSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgPyB7IC4uLml0ZW0sIGlzX3ByaW1hcnk6IHRydWUgfVxuICAgICAgICAgICAgOiB7IC4uLml0ZW0sIGlzX3ByaW1hcnk6IGZhbHNlIH1cbiAgICAgICAgKSxcbiAgICAgIH07XG4gICAgY2FzZSAnU0VUX1BSSU1BUllfU0NIRURVTEUnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRlbGl2ZXJ5TWV0aG9kczogc3RhdGUuZGVsaXZlcnlNZXRob2RzLm1hcCgoaXRlbTogYW55KSA9PntcbiAgICAgICAgIHJldHVybiggaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICA/IHsgLi4uaXRlbSwgdHlwZTogJ3ByaW1hcnknIH1cbiAgICAgICAgICA6IHsgLi4uaXRlbSwgdHlwZTogJ3NlY29uZGFyeScgfVxuICAgICAgICAgICl9XG4gICAgICAgICksXG4gICAgICB9O1xuICAgIGNhc2UgJ1NFVF9QUklNQVJZX0NBUkQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBheW1lbnRNZXRob2RzOiBzdGF0ZS5wYXltZW50TWV0aG9kcy5tYXAoKGl0ZW06IGFueSkgPT5cbiAgICAgICAgICBpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgPyB7IC4uLml0ZW0sIHR5cGU6ICdwcmltYXJ5JyB9XG4gICAgICAgICAgICA6IHsgLi4uaXRlbSwgdHlwZTogJ3NlY29uZGFyeScgfVxuICAgICAgICApLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbnR5cGUgUHJvZmlsZVByb3ZpZGVyUHJvcHMgPSB7XG4gIGluaXREYXRhOiBhbnk7XG59O1xuXG5leHBvcnQgY29uc3QgUHJvZmlsZVByb3ZpZGVyOiAgUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvZmlsZVByb3ZpZGVyUHJvcHM+ICA9ICAoe1xuICBjaGlsZHJlbixcbiAgaW5pdERhdGEsXG59KSA9PiAge1xuXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCB7IC4uLmluaXREYXRhIH0pO1xuIFxuICByZXR1cm4gKFxuICAgIDxQcm9maWxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Qcm9maWxlQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/profile/profile.provider.tsx\n");

/***/ })

})