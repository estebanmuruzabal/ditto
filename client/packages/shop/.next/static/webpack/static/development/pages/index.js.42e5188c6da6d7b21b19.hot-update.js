webpackHotUpdate("static/development/pages/index.js",{

/***/ "../../node_modules/native-url/dist/index.js":
false,

/***/ "../../node_modules/next/dist/client/router.js":
false,

/***/ "../../node_modules/next/dist/client/with-router.js":
false,

/***/ "../../node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "../../node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "../../node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "../../node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "../../node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "../../node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "../../node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "../../node_modules/querystring-es3/decode.js":
false,

/***/ "../../node_modules/querystring-es3/encode.js":
false,

/***/ "../../node_modules/querystring-es3/index.js":
false,

/***/ "../../node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"../../node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ \"../../node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var graphql_query_type_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql/query/type.query */ \"./src/graphql/query/type.query.ts\");\n/* harmony import */ var components_error_message_error_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/error-message/error-message */ \"./src/components/error-message/error-message.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/estebanmuruzabal/work/Mahdi-Fashion/client/packages/shop/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* import { useEffect } from 'react';\nimport Head from 'next/head';\nimport Router from 'next/router';\n\n// the redirect will only happen on the client-side. This is by design,\nconst IndexPage: React.FC<{}> = () => {\n  useEffect(() => {\n    Router.replace('/[type]', '/grocery');\n  });\n  return (\n    <Head>\n      <meta name=\"robots\" content=\"noindex, nofollow\" />\n    </Head>\n  );\n};\n\nexport default IndexPage;\n\n\n */\n\n\n\n // the redirect will only happen on the client-side. This is by design,\n\nvar IndexPage = function IndexPage() {\n  _s();\n\n  var selectedMenu = null;\n  var defaultMenu = null;\n\n  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(graphql_query_type_query__WEBPACK_IMPORTED_MODULE_3__[\"GET_TYPE\"], {\n    variables: {\n      searchText: ''\n    }\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  if (loading) {\n    return __jsx(components_error_message_error_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      message: 'Loading...',\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 12\n      }\n    });\n  }\n\n  ;\n\n  if (error) {\n    return __jsx(components_error_message_error_message__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      message: 'Error occured for only domain routing',\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 7\n      }\n    });\n  }\n\n  ;\n  var typeMenu = data.types.items.map(function (item) {\n    return {\n      id: item.id,\n      href: \"/\".concat(item.slug)\n    };\n  }); // if error here, is because you have to add at least one type from admin\n\n  defaultMenu = typeMenu[0].href;\n\n  if (localStorage.getItem('myMenu')) {\n    selectedMenu = JSON.parse(localStorage.getItem('myMenu'));\n    selectedMenu = selectedMenu.href;\n  } // useEffect(() => {\n  //   Router.replace('/[type]', selectedMenu !== null ? selectedMenu : defaultMenu);\n  // });\n\n\n  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }\n  }, __jsx(\"meta\", {\n    name: \"robots\",\n    content: \"noindex, nofollow\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(IndexPage, \"eE+cqeCo2lkI//dPlCsO1rICVGU=\", false, function () {\n  return [_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"]];\n});\n\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSW5kZXhQYWdlIiwic2VsZWN0ZWRNZW51IiwiZGVmYXVsdE1lbnUiLCJ1c2VRdWVyeSIsIkdFVF9UWVBFIiwidmFyaWFibGVzIiwic2VhcmNoVGV4dCIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJ0eXBlTWVudSIsInR5cGVzIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaWQiLCJocmVmIiwic2x1ZyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTtBQUVBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxTQUF1QixHQUFHLFNBQTFCQSxTQUEwQixHQUFNO0FBQUE7O0FBQ3BDLE1BQUlDLFlBQVksR0FBRyxJQUFuQjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxJQUFsQjs7QUFGb0Msa0JBR0hDLG9FQUFRLENBQ3ZDQyxpRUFEdUMsRUFFdkM7QUFDRUMsYUFBUyxFQUFFO0FBQ1RDLGdCQUFVLEVBQUU7QUFESDtBQURiLEdBRnVDLENBSEw7QUFBQSxNQUc1QkMsSUFINEIsYUFHNUJBLElBSDRCO0FBQUEsTUFHdEJDLEtBSHNCLGFBR3RCQSxLQUhzQjtBQUFBLE1BR2ZDLE9BSGUsYUFHZkEsT0FIZTs7QUFXcEMsTUFBSUEsT0FBSixFQUFhO0FBQ1gsV0FBTyxNQUFDLDhFQUFEO0FBQWMsYUFBTyxFQUFFLFlBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNEOztBQUFBOztBQUVELE1BQUlELEtBQUosRUFBVztBQUNULFdBQ0UsTUFBQyw4RUFBRDtBQUFjLGFBQU8sRUFBRSx1Q0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBR0Q7O0FBQUE7QUFFRCxNQUFNRSxRQUFRLEdBQUdILElBQUksQ0FBQ0ksS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxHQUFqQixDQUFxQixVQUFDQyxJQUFELEVBQVU7QUFDOUMsV0FBTztBQUNMQyxRQUFFLEVBQUVELElBQUksQ0FBQ0MsRUFESjtBQUVMQyxVQUFJLGFBQU1GLElBQUksQ0FBQ0csSUFBWDtBQUZDLEtBQVA7QUFJRCxHQUxnQixDQUFqQixDQXJCb0MsQ0EyQnBDOztBQUNBZixhQUFXLEdBQUdRLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWU0sSUFBMUI7O0FBQ0EsTUFBR0UsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFFBQXJCLENBQUgsRUFBa0M7QUFDaENsQixnQkFBWSxHQUFHbUIsSUFBSSxDQUFDQyxLQUFMLENBQVdILFlBQVksQ0FBQ0MsT0FBYixDQUFxQixRQUFyQixDQUFYLENBQWY7QUFDQWxCLGdCQUFZLEdBQUdBLFlBQVksQ0FBQ2UsSUFBNUI7QUFDRCxHQWhDbUMsQ0FrQ3BDO0FBQ0E7QUFDQTs7O0FBQ0EsU0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQW9CLFdBQU8sRUFBQyxtQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFLRCxDQTFDRDs7R0FBTWhCLFM7VUFHNkJHLDREOzs7S0FIN0JILFM7QUE0Q1NBLHdFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuLy8gdGhlIHJlZGlyZWN0IHdpbGwgb25seSBoYXBwZW4gb24gdGhlIGNsaWVudC1zaWRlLiBUaGlzIGlzIGJ5IGRlc2lnbixcbmNvbnN0IEluZGV4UGFnZTogUmVhY3QuRkM8e30+ID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFJvdXRlci5yZXBsYWNlKCcvW3R5cGVdJywgJy9ncm9jZXJ5Jyk7XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4LCBub2ZvbGxvd1wiIC8+XG4gICAgPC9IZWFkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xuXG5cbiAqL1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJztcbmltcG9ydCB7IEdFVF9UWVBFIH0gZnJvbSAnZ3JhcGhxbC9xdWVyeS90eXBlLnF1ZXJ5JztcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnY29tcG9uZW50cy9lcnJvci1tZXNzYWdlL2Vycm9yLW1lc3NhZ2UnO1xuXG4vLyB0aGUgcmVkaXJlY3Qgd2lsbCBvbmx5IGhhcHBlbiBvbiB0aGUgY2xpZW50LXNpZGUuIFRoaXMgaXMgYnkgZGVzaWduLFxuY29uc3QgSW5kZXhQYWdlOiBSZWFjdC5GQzx7fT4gPSAoKSA9PiB7XG4gIGxldCBzZWxlY3RlZE1lbnUgPSBudWxsO1xuICBsZXQgZGVmYXVsdE1lbnUgPSBudWxsO1xuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShcbiAgICBHRVRfVFlQRSxcbiAgICB7XG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgc2VhcmNoVGV4dDogJydcbiAgICAgIH1cbiAgICB9XG4gICk7XG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxFcnJvck1lc3NhZ2UgbWVzc2FnZT17J0xvYWRpbmcuLi4nfSAvPlxuICB9O1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiAoXG4gICAgICA8RXJyb3JNZXNzYWdlIG1lc3NhZ2U9eydFcnJvciBvY2N1cmVkIGZvciBvbmx5IGRvbWFpbiByb3V0aW5nJ30gLz5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHR5cGVNZW51ID0gZGF0YS50eXBlcy5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4oe1xuICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICBocmVmOiBgLyR7aXRlbS5zbHVnfWBcbiAgICB9KVxuICB9KVxuICAvLyBpZiBlcnJvciBoZXJlLCBpcyBiZWNhdXNlIHlvdSBoYXZlIHRvIGFkZCBhdCBsZWFzdCBvbmUgdHlwZSBmcm9tIGFkbWluXG4gIGRlZmF1bHRNZW51ID0gdHlwZU1lbnVbMF0uaHJlZjtcbiAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215TWVudScpKXtcbiAgICBzZWxlY3RlZE1lbnUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteU1lbnUnKSk7XG4gICAgc2VsZWN0ZWRNZW51ID0gc2VsZWN0ZWRNZW51LmhyZWY7XG4gIH1cblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIFJvdXRlci5yZXBsYWNlKCcvW3R5cGVdJywgc2VsZWN0ZWRNZW51ICE9PSBudWxsID8gc2VsZWN0ZWRNZW51IDogZGVmYXVsdE1lbnUpO1xuICAvLyB9KTtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleCwgbm9mb2xsb3dcIiAvPlxuICAgIDwvSGVhZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})