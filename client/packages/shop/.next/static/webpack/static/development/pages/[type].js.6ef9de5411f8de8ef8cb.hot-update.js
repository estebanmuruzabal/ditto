webpackHotUpdate("static/development/pages/[type].js",{

/***/ "./src/components/banner/banner.tsx":
/*!******************************************!*\
  !*** ./src/components/banner/banner.tsx ***!
  \******************************************/
/*! exports provided: Banner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Banner\", function() { return Banner; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ \"../../node_modules/react-intl/lib/index.js\");\n/* harmony import */ var _banner_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner.style */ \"./src/components/banner/banner.style.tsx\");\n/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-waypoint */ \"../../node_modules/react-waypoint/es/index.js\");\n/* harmony import */ var contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! contexts/app/app.provider */ \"./src/contexts/app/app.provider.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/estebanmuruzabal/work/ditto/client/packages/shop/src/components/banner/banner.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Banner = function Banner(_ref) {\n  _s();\n\n  var imageUrl = _ref.imageUrl,\n      intlTitleId = _ref.intlTitleId,\n      intlDescriptionId = _ref.intlDescriptionId;\n  var dispatch = Object(contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_4__[\"useAppDispatch\"])();\n  var setSticky = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    return dispatch({\n      type: 'SET_STICKY'\n    });\n  }, [dispatch]);\n  var removeSticky = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    return dispatch({\n      type: 'REMOVE_STICKY'\n    });\n  }, [dispatch]);\n\n  var onWaypointPositionChange = function onWaypointPositionChange(_ref2) {\n    var currentPosition = _ref2.currentPosition;\n\n    if (!currentPosition || currentPosition === 'above') {\n      setSticky();\n    }\n  };\n\n  return __jsx(_banner_style__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(_banner_style__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n    backgroundImage: \"url(\".concat(imageUrl, \")\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }), __jsx(_banner_style__WEBPACK_IMPORTED_MODULE_2__[\"Content\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, __jsx(_banner_style__WEBPACK_IMPORTED_MODULE_2__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__[\"FormattedMessage\"], {\n    id: \"englis\",\n    defaultMessage: intlTitleId // values={{ minute: 90 }}\n    ,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  })), __jsx(_banner_style__WEBPACK_IMPORTED_MODULE_2__[\"Description\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__[\"FormattedMessage\"], {\n    id: \"set your description through Language File in the Admin UI\",\n    defaultMessage: intlDescriptionId,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  })), __jsx(react_waypoint__WEBPACK_IMPORTED_MODULE_3__[\"Waypoint\"], {\n    onEnter: removeSticky,\n    onLeave: setSticky,\n    onPositionChange: onWaypointPositionChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(Banner, \"dmzfuLFBOTkvE2ir+ZIqa/fqjjY=\", false, function () {\n  return [contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_4__[\"useAppDispatch\"]];\n});\n\n_c = Banner;\n\nvar _c;\n\n$RefreshReg$(_c, \"Banner\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLnRzeD8yMmVmIl0sIm5hbWVzIjpbIkJhbm5lciIsImltYWdlVXJsIiwiaW50bFRpdGxlSWQiLCJpbnRsRGVzY3JpcHRpb25JZCIsImRpc3BhdGNoIiwidXNlQXBwRGlzcGF0Y2giLCJzZXRTdGlja3kiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJyZW1vdmVTdGlja3kiLCJvbldheXBvaW50UG9zaXRpb25DaGFuZ2UiLCJjdXJyZW50UG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBUU8sSUFBTUEsTUFBdUIsR0FBRyxTQUExQkEsTUFBMEIsT0FJakM7QUFBQTs7QUFBQSxNQUhKQyxRQUdJLFFBSEpBLFFBR0k7QUFBQSxNQUZKQyxXQUVJLFFBRkpBLFdBRUk7QUFBQSxNQURKQyxpQkFDSSxRQURKQSxpQkFDSTtBQUNKLE1BQU1DLFFBQVEsR0FBR0MsZ0ZBQWMsRUFBL0I7QUFDQSxNQUFNQyxTQUFTLEdBQUdDLHlEQUFXLENBQUM7QUFBQSxXQUFNSCxRQUFRLENBQUM7QUFBRUksVUFBSSxFQUFFO0FBQVIsS0FBRCxDQUFkO0FBQUEsR0FBRCxFQUF5QyxDQUNwRUosUUFEb0UsQ0FBekMsQ0FBN0I7QUFHQSxNQUFNSyxZQUFZLEdBQUdGLHlEQUFXLENBQUM7QUFBQSxXQUFNSCxRQUFRLENBQUM7QUFBRUksVUFBSSxFQUFFO0FBQVIsS0FBRCxDQUFkO0FBQUEsR0FBRCxFQUE0QyxDQUMxRUosUUFEMEUsQ0FBNUMsQ0FBaEM7O0FBR0EsTUFBTU0sd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixRQUF5QjtBQUFBLFFBQXRCQyxlQUFzQixTQUF0QkEsZUFBc0I7O0FBQ3hELFFBQUksQ0FBQ0EsZUFBRCxJQUFvQkEsZUFBZSxLQUFLLE9BQTVDLEVBQXFEO0FBQ25ETCxlQUFTO0FBQ1Y7QUFDRixHQUpEOztBQUtBLFNBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFPLG1CQUFlLGdCQUFTTCxRQUFULE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFDRSxNQUFFLEVBQUMsUUFETDtBQUVFLGtCQUFjLEVBQUVDLFdBRmxCLENBR0U7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQVFFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFDRyxNQUFFLEVBQUMsNERBRE47QUFFRSxrQkFBYyxFQUFFQyxpQkFGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUkYsRUFjRSxNQUFDLHVEQUFEO0FBQ0UsV0FBTyxFQUFFTSxZQURYO0FBRUUsV0FBTyxFQUFFSCxTQUZYO0FBR0Usb0JBQWdCLEVBQUVJLHdCQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsQ0FGRixDQURGO0FBeUJELENBMUNNOztHQUFNVixNO1VBS01LLHdFOzs7S0FMTkwsTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2Jhbm5lci9iYW5uZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybWF0dGVkTWVzc2FnZSB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHtcbiAgQm94LFxuICBJbWFnZSxcbiAgQ29udGVudCxcbiAgVGl0bGUsXG4gIERlc2NyaXB0aW9uXG59IGZyb20gJy4vYmFubmVyLnN0eWxlJztcblxuaW1wb3J0IHsgV2F5cG9pbnQgfSBmcm9tICdyZWFjdC13YXlwb2ludCc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJ2NvbnRleHRzL2FwcC9hcHAucHJvdmlkZXInO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpbWFnZVVybDogc3RyaW5nO1xuICBpbnRsVGl0bGVJZDogc3RyaW5nO1xuICBpbnRsRGVzY3JpcHRpb25JZDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQmFubmVyOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBpbWFnZVVybCxcbiAgaW50bFRpdGxlSWQsXG4gIGludGxEZXNjcmlwdGlvbklkLFxufSkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gIGNvbnN0IHNldFN0aWNreSA9IHVzZUNhbGxiYWNrKCgpID0+IGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9TVElDS1knIH0pLCBbXG4gICAgZGlzcGF0Y2gsXG4gIF0pO1xuICBjb25zdCByZW1vdmVTdGlja3kgPSB1c2VDYWxsYmFjaygoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdSRU1PVkVfU1RJQ0tZJyB9KSwgW1xuICAgIGRpc3BhdGNoLFxuICBdKTtcbiAgY29uc3Qgb25XYXlwb2ludFBvc2l0aW9uQ2hhbmdlID0gKHsgY3VycmVudFBvc2l0aW9uIH0pID0+IHtcbiAgICBpZiAoIWN1cnJlbnRQb3NpdGlvbiB8fCBjdXJyZW50UG9zaXRpb24gPT09ICdhYm92ZScpIHtcbiAgICAgIHNldFN0aWNreSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPEltYWdlIGJhY2tncm91bmRJbWFnZT17YHVybCgke2ltYWdlVXJsfSlgfSAvPlxuICAgICAgPENvbnRlbnQ+XG4gICAgICAgIDxUaXRsZT5cbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgaWQ9XCJlbmdsaXNcIlxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9e2ludGxUaXRsZUlkfVxuICAgICAgICAgICAgLy8gdmFsdWVzPXt7IG1pbnV0ZTogOTAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1RpdGxlPlxuICAgICAgICA8RGVzY3JpcHRpb24+XG4gICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgICBpZD1cInNldCB5b3VyIGRlc2NyaXB0aW9uIHRocm91Z2ggTGFuZ3VhZ2UgRmlsZSBpbiB0aGUgQWRtaW4gVUlcIlxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9e2ludGxEZXNjcmlwdGlvbklkfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRGVzY3JpcHRpb24+XG4gICAgICAgIDxXYXlwb2ludFxuICAgICAgICAgIG9uRW50ZXI9e3JlbW92ZVN0aWNreX1cbiAgICAgICAgICBvbkxlYXZlPXtzZXRTdGlja3l9XG4gICAgICAgICAgb25Qb3NpdGlvbkNoYW5nZT17b25XYXlwb2ludFBvc2l0aW9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9Db250ZW50PlxuICAgIDwvQm94PlxuICApO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/banner/banner.tsx\n");

/***/ })

})