webpackHotUpdate("static/development/pages/your-plants.js",{

/***/ "./src/components/checkbox/checkbox.tsx":
/*!**********************************************!*\
  !*** ./src/components/checkbox/checkbox.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"../../node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _checkbox_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkbox.style */ \"./src/components/checkbox/checkbox.style.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/estebanmuruzabal/work/ditto/client/packages/shop/src/components/checkbox/checkbox.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar CheckBox = function CheckBox(_ref) {\n  _s();\n\n  var className = _ref.className,\n      _ref$isChecked = _ref.isChecked,\n      isChecked = _ref$isChecked === void 0 ? false : _ref$isChecked,\n      labelText = _ref.labelText,\n      id = _ref.id,\n      _ref$labelPosition = _ref.labelPosition,\n      labelPosition = _ref$labelPosition === void 0 ? 'right' : _ref$labelPosition,\n      _ref$disabled = _ref.disabled,\n      disabled = _ref$disabled === void 0 ? false : _ref$disabled,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"className\", \"isChecked\", \"labelText\", \"id\", \"labelPosition\", \"disabled\"]);\n\n  // use toggle hooks\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(isChecked),\n      checked = _useState[0],\n      setChecked = _useState[1];\n\n  return __jsx(_checkbox_style__WEBPACK_IMPORTED_MODULE_3__[\"StyledCheckBox\"], {\n    className: \"MahdiFashion__checkbox\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(_checkbox_style__WEBPACK_IMPORTED_MODULE_3__[\"StyledCheckBoxLabel\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(_checkbox_style__WEBPACK_IMPORTED_MODULE_3__[\"StyledCheckBoxInput\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    type: \"checkbox\",\n    className: \"checkbox-input\",\n    checked: checked,\n    onChange: function onChange() {\n      return setChecked(function (prev) {\n        return !prev;\n      });\n    },\n    disabled: disabled\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  })), __jsx(_checkbox_style__WEBPACK_IMPORTED_MODULE_3__[\"StyledCheckBoxInputIndicator\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(CheckBox, \"RJ6/NouK62cz+YZqxaIa5zUFCSk=\");\n\n_c = CheckBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckBox);\n\nvar _c;\n\n$RefreshReg$(_c, \"CheckBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC50c3g/ZDQ4OSJdLCJuYW1lcyI6WyJDaGVja0JveCIsImNsYXNzTmFtZSIsImlzQ2hlY2tlZCIsImxhYmVsVGV4dCIsImlkIiwibGFiZWxQb3NpdGlvbiIsImRpc2FibGVkIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNoZWNrZWQiLCJzZXRDaGVja2VkIiwicHJldiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQWtCQSxJQUFNQSxRQUFpQyxHQUFHLFNBQXBDQSxRQUFvQyxPQVFwQztBQUFBOztBQUFBLE1BUEpDLFNBT0ksUUFQSkEsU0FPSTtBQUFBLDRCQU5KQyxTQU1JO0FBQUEsTUFOSkEsU0FNSSwrQkFOUSxLQU1SO0FBQUEsTUFMSkMsU0FLSSxRQUxKQSxTQUtJO0FBQUEsTUFKSkMsRUFJSSxRQUpKQSxFQUlJO0FBQUEsZ0NBSEpDLGFBR0k7QUFBQSxNQUhKQSxhQUdJLG1DQUhZLE9BR1o7QUFBQSwyQkFGSkMsUUFFSTtBQUFBLE1BRkpBLFFBRUksOEJBRk8sS0FFUDtBQUFBLE1BRERDLEtBQ0M7O0FBQ0o7QUFESSxrQkFFMEJDLHNEQUFRLENBQUNOLFNBQUQsQ0FGbEM7QUFBQSxNQUVHTyxPQUZIO0FBQUEsTUFFWUMsVUFGWjs7QUFJSixTQUNFLE1BQUMsOERBQUQ7QUFBZ0IsYUFBUywwQkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsbUVBQUQ7QUFDRSxRQUFJLEVBQUMsVUFEUDtBQUVFLGFBQVMsRUFBQyxnQkFGWjtBQUlFLFdBQU8sRUFBRUQsT0FKWDtBQUtFLFlBQVEsRUFBRTtBQUFBLGFBQU1DLFVBQVUsQ0FBQyxVQUFDQyxJQUFEO0FBQUEsZUFBVSxDQUFDQSxJQUFYO0FBQUEsT0FBRCxDQUFoQjtBQUFBLEtBTFo7QUFNRSxZQUFRLEVBQUVMO0FBTlosS0FPTUMsS0FQTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRkYsRUFXRSxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQURGLENBREY7QUFpQkQsQ0E3QkQ7O0dBQU1QLFE7O0tBQUFBLFE7QUErQlNBLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgU3R5bGVkQ2hlY2tCb3gsXG4gIFN0eWxlZENoZWNrQm94TGFiZWwsXG4gIFN0eWxlZENoZWNrQm94TGFiZWxUZXh0LFxuICBTdHlsZWRDaGVja0JveElucHV0LFxuICBTdHlsZWRDaGVja0JveElucHV0SW5kaWNhdG9yLFxufSBmcm9tICcuL2NoZWNrYm94LnN0eWxlJztcblxudHlwZSBDaGVja0JveFByb3BzID0ge1xuICBpZDogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGlzQ2hlY2tlZD86IGJvb2xlYW47XG4gIGxhYmVsVGV4dDogc3RyaW5nO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIGxhYmVsUG9zaXRpb24/OiAnbGVmdCcgfCAncmlnaHQnO1xuICBba2V5OiBzdHJpbmddOiB1bmtub3duO1xufTtcblxuY29uc3QgQ2hlY2tCb3g6IFJlYWN0LkZDPENoZWNrQm94UHJvcHM+ID0gKHtcbiAgY2xhc3NOYW1lLFxuICBpc0NoZWNrZWQgPSBmYWxzZSxcbiAgbGFiZWxUZXh0LFxuICBpZCxcbiAgbGFiZWxQb3NpdGlvbiA9ICdyaWdodCcsXG4gIGRpc2FibGVkID0gZmFsc2UsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIC8vIHVzZSB0b2dnbGUgaG9va3NcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUoaXNDaGVja2VkKTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRDaGVja0JveCBjbGFzc05hbWU9e2BNYWhkaUZhc2hpb25fX2NoZWNrYm94YH0+XG4gICAgICA8U3R5bGVkQ2hlY2tCb3hMYWJlbCA+XG4gICAgICBcbiAgICAgICAgPFN0eWxlZENoZWNrQm94SW5wdXRcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrYm94LWlucHV0XCJcbiAgICAgICAgICBcbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZXRDaGVja2VkKChwcmV2KSA9PiAhcHJldil9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgLz5cbiAgICAgICAgPFN0eWxlZENoZWNrQm94SW5wdXRJbmRpY2F0b3IgLz5cbiAgICAgIDwvU3R5bGVkQ2hlY2tCb3hMYWJlbD5cbiAgICA8L1N0eWxlZENoZWNrQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tCb3g7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/checkbox/checkbox.tsx\n");

/***/ })

})