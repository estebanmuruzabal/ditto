webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/features/search/search.tsx":
/*!****************************************!*\
  !*** ./src/features/search/search.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"../../node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"../../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ \"../../node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var components_search_box_search_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/search-box/search-box */ \"./src/components/search-box/search-box.tsx\");\n/* harmony import */ var contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! contexts/app/app.provider */ \"./src/contexts/app/app.provider.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"../../node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ \"../../node_modules/react-intl/lib/index.js\");\n/* harmony import */ var _search_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search.style */ \"./src/features/search/search.style.tsx\");\n/* harmony import */ var components_error_message_error_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/error-message/error-message */ \"./src/components/error-message/error-message.tsx\");\n/* harmony import */ var graphql_query_products_search_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! graphql/query/products.search.query */ \"./src/graphql/query/products.search.query.ts\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/estebanmuruzabal/work/Mahdi-Fashion/client/packages/shop/src/features/search/search.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\nvar Search = function Search(_ref) {\n  _s();\n\n  var onSubmit = _ref.onSubmit,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"onSubmit\"]);\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])();\n  var container = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n  var pathname = router.pathname,\n      query = router.query;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      filteredSearchData = _useState[0],\n      setFilteredSearchData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      isShow = _useState2[0],\n      setShow = _useState2[1];\n\n  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"])(graphql_query_products_search_query__WEBPACK_IMPORTED_MODULE_11__[\"GET_PRODUCTS_SEARCH\"], {\n    variables: {\n      type: query.type || 'definatipos',\n      offset: 0,\n      limit: 20\n    }\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  if (!data || loading) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 12\n      }\n    }, \"loading...\");\n  }\n\n  if (error) return __jsx(components_error_message_error_message__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    message: error.message,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 21\n    }\n  });\n  var searchData = data.products.items;\n  var searchTerm = Object(contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_6__[\"useAppState\"])('searchTerm');\n  var dispatch = Object(contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_6__[\"useAppDispatch\"])();\n  var intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_8__[\"useIntl\"])();\n\n  var handleOnChange = function handleOnChange(e) {\n    var value = e.target.value;\n    var result = searchData.filter(function (item) {\n      return item.name.toLowerCase().startsWith(value);\n    });\n    setFilteredSearchData(result);\n    filteredSearchData.length > 0 ? setShow(true) : setShow(false);\n    dispatch({\n      type: 'SET_SEARCH_TERM',\n      payload: value\n    });\n  };\n\n  var onSearch = function onSearch(e) {\n    e.preventDefault();\n\n    var type = query.type,\n        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(query, [\"type\"]);\n\n    if (type) {\n      router.push({\n        pathname: pathname,\n        query: _objectSpread(_objectSpread({}, rest), {}, {\n          text: searchTerm\n        })\n      }, {\n        pathname: \"/\".concat(type),\n        query: _objectSpread(_objectSpread({}, rest), {}, {\n          text: searchTerm\n        })\n      });\n    } else {\n      router.push({\n        pathname: pathname,\n        query: _objectSpread(_objectSpread({}, rest), {}, {\n          text: searchTerm\n        })\n      });\n    }\n\n    dispatch({\n      type: 'SET_SEARCH_TERM',\n      payload: ''\n    });\n\n    if (onSubmit) {\n      onSubmit();\n    }\n  };\n\n  var myhandleClick = function myhandleClick(e) {\n    if (container.current.contains(e.target)) {\n      return;\n    }\n\n    setShow(false);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    document.addEventListener(\"mousedown\", myhandleClick);\n    return function () {\n      document.removeEventListener(\"mousedown\", myhandleClick);\n    };\n  }, []);\n  return __jsx(_search_style__WEBPACK_IMPORTED_MODULE_9__[\"SearchWrapper\"], {\n    className: props.minimal ? 'minimal-wrap' : 'modern-wrap',\n    ref: container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 5\n    }\n  }, __jsx(components_search_box_search_box__WEBPACK_IMPORTED_MODULE_5__[\"SearchBox\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    onEnter: onSearch,\n    onChange: handleOnChange,\n    value: searchTerm,\n    name: \"search\",\n    placeholder: intl.formatMessage({\n      id: 'searchPlaceholder',\n      defaultMessage: 'Search'\n    }),\n    categoryType: query.type || 'definatipos',\n    buttonText: intl.formatMessage({\n      id: 'searchButtonText',\n      defaultMessage: 'Search'\n    })\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }\n  })), isShow && __jsx(_search_style__WEBPACK_IMPORTED_MODULE_9__[\"SearchResultWrap\"], {\n    className: \"searchResultWrap\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 20\n    }\n  }, __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 13\n    }\n  }, filteredSearchData.map(function (item, index) {\n    return __jsx(\"li\", {\n      onClick: function onClick() {\n        return router.push('/product/[slug]', \"/product/\".concat(item.slug));\n      },\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 19\n      }\n    }, item.name);\n  }))));\n};\n\n_s(Search, \"tzVNR4cDWShkXXwvf1uxpoOOF3Q=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__[\"useQuery\"], contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_6__[\"useAppState\"], contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_6__[\"useAppDispatch\"], react_intl__WEBPACK_IMPORTED_MODULE_8__[\"useIntl\"]];\n});\n\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvc2VhcmNoL3NlYXJjaC50c3g/NGRkZSJdLCJuYW1lcyI6WyJTZWFyY2giLCJvblN1Ym1pdCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29udGFpbmVyIiwidXNlUmVmIiwicGF0aG5hbWUiLCJxdWVyeSIsInVzZVN0YXRlIiwiZmlsdGVyZWRTZWFyY2hEYXRhIiwic2V0RmlsdGVyZWRTZWFyY2hEYXRhIiwiaXNTaG93Iiwic2V0U2hvdyIsInVzZVF1ZXJ5IiwiR0VUX1BST0RVQ1RTX1NFQVJDSCIsInZhcmlhYmxlcyIsInR5cGUiLCJvZmZzZXQiLCJsaW1pdCIsImRhdGEiLCJlcnJvciIsImxvYWRpbmciLCJtZXNzYWdlIiwic2VhcmNoRGF0YSIsInByb2R1Y3RzIiwiaXRlbXMiLCJzZWFyY2hUZXJtIiwidXNlQXBwU3RhdGUiLCJkaXNwYXRjaCIsInVzZUFwcERpc3BhdGNoIiwiaW50bCIsInVzZUludGwiLCJoYW5kbGVPbkNoYW5nZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInJlc3VsdCIsImZpbHRlciIsIml0ZW0iLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJzdGFydHNXaXRoIiwibGVuZ3RoIiwicGF5bG9hZCIsIm9uU2VhcmNoIiwicHJldmVudERlZmF1bHQiLCJyZXN0IiwicHVzaCIsInRleHQiLCJteWhhbmRsZUNsaWNrIiwiY3VycmVudCIsImNvbnRhaW5zIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1pbmltYWwiLCJmb3JtYXRNZXNzYWdlIiwiaWQiLCJkZWZhdWx0TWVzc2FnZSIsIm1hcCIsImluZGV4Iiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBZUEsSUFBTUEsTUFBdUIsR0FB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YUFBTCxDQUFtQjtBQUM5QkMsUUFBRSxFQUFFLG1CQUQwQjtBQUU5QkMsb0JBQWMsRUFBRTtBQUZjLEtBQW5CLENBTmY7QUFVRSxnQkFBWSxFQUFFcEQsS0FBSyxDQUFDUyxJQUFOLElBQWMsYUFWOUI7QUFXRSxjQUFVLEVBQ1JjLElBQUksQ0FBQzJCLGFBQUwsQ0FBbUI7QUFDakJDLFFBQUUsRUFBRSxrQkFEYTtBQUVqQkMsb0JBQWMsRUFBRTtBQUZDLEtBQW5CO0FBWkosS0FpQk0xRCxLQWpCTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRkYsRUFxQktVLE1BQU0sSUFBSSxNQUFDLDhEQUFEO0FBQWtCLGFBQVMsRUFBQyxrQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0Ysa0JBQWtCLENBQUNtRCxHQUFuQixDQUF1QixVQUFDdEIsSUFBRCxFQUFNdUIsS0FBTjtBQUFBLFdBQ3BCO0FBQ0EsYUFBTyxFQUFFO0FBQUEsZUFDUDNELE1BQU0sQ0FBQzZDLElBQVAsQ0FBWSxpQkFBWixxQkFBMkNULElBQUksQ0FBQ3dCLElBQWhELEVBRE87QUFBQSxPQURUO0FBSUEsU0FBRyxFQUFFRCxLQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FLR3ZCLElBQUksQ0FBQ0MsSUFMUixDQURvQjtBQUFBLEdBQXZCLENBREgsQ0FETyxDQXJCZixDQURGO0FBdUNELENBdkhEOztHQUFNeEMsTTtVQUNXSSxxRCxFQU1rQlUsNEQsRUFrQmRjLHFFLEVBQ0ZFLHdFLEVBRUpFLGtEOzs7S0E1QlRoQyxNO0FBeUhTQSxxRUFBZiIsImZpbGUiOiIuL3NyYy9mZWF0dXJlcy9zZWFyY2gvc2VhcmNoLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xuaW1wb3J0IHsgU2VhcmNoQm94IH0gZnJvbSAnY29tcG9uZW50cy9zZWFyY2gtYm94L3NlYXJjaC1ib3gnO1xuaW1wb3J0IHsgdXNlQXBwU3RhdGUsIHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnY29udGV4dHMvYXBwL2FwcC5wcm92aWRlcic7XG5pbXBvcnQgUm91dGVyLHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlSW50bCB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHtTZWFyY2hXcmFwcGVyLCBTZWFyY2hSZXN1bHRXcmFwfSBmcm9tICcuL3NlYXJjaC5zdHlsZSc7XG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJ2NvbXBvbmVudHMvZXJyb3ItbWVzc2FnZS9lcnJvci1tZXNzYWdlJztcbmltcG9ydCB7IEdFVF9QUk9EVUNUU19TRUFSQ0ggfSBmcm9tICdncmFwaHFsL3F1ZXJ5L3Byb2R1Y3RzLnNlYXJjaC5xdWVyeSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIG1pbmltYWw/OiBib29sZWFuO1xuICBzaG93QnV0dG9uVGV4dD86IGJvb2xlYW47XG4gIG9uU3VibWl0PzogKCkgPT4gdm9pZDtcbiAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIHJlZj86IGFueTtcbiAgY29udGFpbnM/OiBhbnk7XG4gIGNvbnRhaW5lcj86IGFueTtcbiAgY3VycmVudD86IGFueTtcbiAgTXV0YWJsZVJlZk9iamVjdD86IGFueTtcbn1cblxuY29uc3QgU2VhcmNoOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBvblN1Ym1pdCwgLi4ucHJvcHMgIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHJvdXRlcjtcbiAgY29uc3QgW2ZpbHRlcmVkU2VhcmNoRGF0YSwgc2V0RmlsdGVyZWRTZWFyY2hEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzU2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIFxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShHRVRfUFJPRFVDVFNfU0VBUkNILFxuICAgICAge1xuICAgICAgICB2YXJpYWJsZXM6IHsgXG4gICAgICAgICAgdHlwZTogcXVlcnkudHlwZSB8fCAnZGVmaW5hdGlwb3MnLFxuICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICBsaW1pdDogMjBcbiAgICAgICAgfVxuICAgICAgfVxuICApO1xuXG4gIGlmICghZGF0YSB8fCBsb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxkaXY+bG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuICBpZiAoZXJyb3IpIHJldHVybiA8RXJyb3JNZXNzYWdlIG1lc3NhZ2U9e2Vycm9yLm1lc3NhZ2V9IC8+O1xuXG4gIGNvbnN0IHNlYXJjaERhdGEgPSBkYXRhLnByb2R1Y3RzLml0ZW1zXG5cblxuICBjb25zdCBzZWFyY2hUZXJtID0gdXNlQXBwU3RhdGUoJ3NlYXJjaFRlcm0nKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICBcbiAgY29uc3QgaW50bCA9IHVzZUludGwoKTtcblxuICBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgcmVzdWx0ID0gc2VhcmNoRGF0YS5maWx0ZXIoXG4gICAgICBpdGVtID0+IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgodmFsdWUpXG4gICAgKTtcbiAgICBzZXRGaWx0ZXJlZFNlYXJjaERhdGEocmVzdWx0KTtcbiAgICBmaWx0ZXJlZFNlYXJjaERhdGEubGVuZ3RoID4gMCA/IHNldFNob3codHJ1ZSkgOiBzZXRTaG93KGZhbHNlKTtcbiAgICBcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfU0VBUkNIX1RFUk0nLCBwYXlsb2FkOiB2YWx1ZSB9KTtcbiAgfTtcbiAgXG4gIGNvbnN0IG9uU2VhcmNoID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyB0eXBlLCAuLi5yZXN0IH0gPSBxdWVyeTtcbiAgICBpZiAodHlwZSkge1xuICAgICAgcm91dGVyLnB1c2goXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeTogeyAuLi5yZXN0LCB0ZXh0OiBzZWFyY2hUZXJtIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRobmFtZTogYC8ke3R5cGV9YCxcbiAgICAgICAgICBxdWVyeTogeyAuLi5yZXN0LCB0ZXh0OiBzZWFyY2hUZXJtIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5OiB7IC4uLnJlc3QsIHRleHQ6IHNlYXJjaFRlcm0gfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfU0VBUkNIX1RFUk0nLCBwYXlsb2FkOiAnJyB9KTtcbiAgICBpZiAob25TdWJtaXQpIHtcbiAgICAgIG9uU3VibWl0KCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBteWhhbmRsZUNsaWNrID0gZSA9PiB7XG4gICAgaWYgKGNvbnRhaW5lci5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRTaG93KGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbXloYW5kbGVDbGljayk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgbXloYW5kbGVDbGljayk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFNlYXJjaFdyYXBwZXIgY2xhc3NOYW1lPXtwcm9wcy5taW5pbWFsID8gJ21pbmltYWwtd3JhcCcgOiAnbW9kZXJuLXdyYXAnfSBcbiAgICAgIHJlZj17IGNvbnRhaW5lciB9ID5cbiAgICAgIDxTZWFyY2hCb3hcbiAgICAgICAgb25FbnRlcj17b25TZWFyY2h9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XG4gICAgICAgIG5hbWU9XCJzZWFyY2hcIlxuICAgICAgICBcbiAgICAgICAgcGxhY2Vob2xkZXI9e2ludGwuZm9ybWF0TWVzc2FnZSh7XG4gICAgICAgICAgaWQ6ICdzZWFyY2hQbGFjZWhvbGRlcicsXG4gICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6ICdTZWFyY2gnLFxuICAgICAgICB9KX1cbiAgICAgICAgY2F0ZWdvcnlUeXBlPXtxdWVyeS50eXBlIHx8ICdkZWZpbmF0aXBvcyd9XG4gICAgICAgIGJ1dHRvblRleHQ9e1xuICAgICAgICAgIGludGwuZm9ybWF0TWVzc2FnZSh7XG4gICAgICAgICAgICBpZDogJ3NlYXJjaEJ1dHRvblRleHQnLFxuICAgICAgICAgICAgZGVmYXVsdE1lc3NhZ2U6ICdTZWFyY2gnLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICAgICAge2lzU2hvdyAmJiA8U2VhcmNoUmVzdWx0V3JhcCBjbGFzc05hbWU9XCJzZWFyY2hSZXN1bHRXcmFwXCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHtmaWx0ZXJlZFNlYXJjaERhdGEubWFwKChpdGVtLGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkgXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2R1Y3QvW3NsdWddJywgYC9wcm9kdWN0LyR7aXRlbS5zbHVnfWApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9TZWFyY2hSZXN1bHRXcmFwPlxuICAgICAgICB9XG4gICAgPC9TZWFyY2hXcmFwcGVyPlxuICApO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/features/search/search.tsx\n");

/***/ })

})