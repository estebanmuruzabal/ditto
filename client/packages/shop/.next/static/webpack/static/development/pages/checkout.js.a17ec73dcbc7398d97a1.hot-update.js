webpackHotUpdate("static/development/pages/checkout.js",{

/***/ "./src/graphql/mutation/address.ts":
/*!*****************************************!*\
  !*** ./src/graphql/mutation/address.ts ***!
  \*****************************************/
/*! exports provided: ADD_ADDRESS, UPDATE_ADDRESS, SETPRIMARY_ADDRESS, DELETE_ADDRESS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_ADDRESS\", function() { return ADD_ADDRESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPDATE_ADDRESS\", function() { return UPDATE_ADDRESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SETPRIMARY_ADDRESS\", function() { return SETPRIMARY_ADDRESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DELETE_ADDRESS\", function() { return DELETE_ADDRESS; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"../../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ \"../../node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  mutation DeleteDeliveryAddress( \\n    $id: ID!, \\n    $addressId: String!\\n    ) {\\n    deleteDeliveryAddress(\\n      id: $id,\\n      addressId: $addressId,\\n    ) {\\n     status\\n      message\\n    }\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  mutation SetDeliveryAddressPrimary (\\n      $id: ID!, \\n      $addressId: String!\\n     ){\\n      setDeliveryAddressPrimary (\\n        id: $id, \\n        addressId: $addressId\\n    ){\\n      message\\n      status\\n    }\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  mutation UpdateDeliveryAddress (\\n      $id: ID!, \\n      $addressId: String!\\n      $title: String!,\\n      $address: String!,\\n      $division: String,\\n      $district: String,\\n      $region: String\\n     ){\\n      updateDeliveryAddress (\\n        id: $id, \\n        addressId: $addressId,\\n        title: $title, \\n        address: $address, \\n        division: $division,\\n        district: $district,\\n        region: $region\\n    ){\\n      id\\n      title\\n      address\\n      division\\n      district\\n      region\\n      is_primary\\n    }\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\nmutation AddDeliveryAddress(\\n  $id: ID!, \\n  $title: String!,\\n  $address: String!,\\n  $location: String,\\n  $instructions: String,\\n) {\\n  addDeliveryAddress(\\n    id: $id, \\n    title: $title, \\n    address: $address, \\n    location: $location,\\n    district: $district,\\n    instructions: $instructions\\n  ) {\\n    id\\n    title\\n    address\\n    division\\n    instructions\\n    is_primary\\n  }\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar ADD_ADDRESS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());\nvar UPDATE_ADDRESS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2());\nvar SETPRIMARY_ADDRESS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject3());\nvar DELETE_ADDRESS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject4());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhxbC9tdXRhdGlvbi9hZGRyZXNzLnRzPzZkMDYiXSwibmFtZXMiOlsiQUREX0FERFJFU1MiLCJncWwiLCJVUERBVEVfQUREUkVTUyIsIlNFVFBSSU1BUllfQUREUkVTUyIsIkRFTEVURV9BRERSRVNTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsV0FBVyxHQUFHQyxrREFBSCxtQkFBakI7QUEyQkEsSUFBTUMsY0FBYyxHQUFHRCxrREFBSCxvQkFBcEI7QUE4QkEsSUFBTUUsa0JBQWtCLEdBQUdGLGtEQUFILG9CQUF4QjtBQWdCQSxJQUFNRyxjQUFjLEdBQUdILGtEQUFILG9CQUFwQiIsImZpbGUiOiIuL3NyYy9ncmFwaHFsL211dGF0aW9uL2FkZHJlc3MudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuZXhwb3J0IGNvbnN0IEFERF9BRERSRVNTID0gZ3FsYFxubXV0YXRpb24gQWRkRGVsaXZlcnlBZGRyZXNzKFxuICAkaWQ6IElEISwgXG4gICR0aXRsZTogU3RyaW5nISxcbiAgJGFkZHJlc3M6IFN0cmluZyEsXG4gICRsb2NhdGlvbjogU3RyaW5nLFxuICAkaW5zdHJ1Y3Rpb25zOiBTdHJpbmcsXG4pIHtcbiAgYWRkRGVsaXZlcnlBZGRyZXNzKFxuICAgIGlkOiAkaWQsIFxuICAgIHRpdGxlOiAkdGl0bGUsIFxuICAgIGFkZHJlc3M6ICRhZGRyZXNzLCBcbiAgICBsb2NhdGlvbjogJGxvY2F0aW9uLFxuICAgIGRpc3RyaWN0OiAkZGlzdHJpY3QsXG4gICAgaW5zdHJ1Y3Rpb25zOiAkaW5zdHJ1Y3Rpb25zXG4gICkge1xuICAgIGlkXG4gICAgdGl0bGVcbiAgICBhZGRyZXNzXG4gICAgZGl2aXNpb25cbiAgICBpbnN0cnVjdGlvbnNcbiAgICBpc19wcmltYXJ5XG4gIH1cbn1cbmA7XG5cblxuZXhwb3J0IGNvbnN0IFVQREFURV9BRERSRVNTID0gZ3FsYFxuICBtdXRhdGlvbiBVcGRhdGVEZWxpdmVyeUFkZHJlc3MgKFxuICAgICAgJGlkOiBJRCEsIFxuICAgICAgJGFkZHJlc3NJZDogU3RyaW5nIVxuICAgICAgJHRpdGxlOiBTdHJpbmchLFxuICAgICAgJGFkZHJlc3M6IFN0cmluZyEsXG4gICAgICAkZGl2aXNpb246IFN0cmluZyxcbiAgICAgICRkaXN0cmljdDogU3RyaW5nLFxuICAgICAgJHJlZ2lvbjogU3RyaW5nXG4gICAgICl7XG4gICAgICB1cGRhdGVEZWxpdmVyeUFkZHJlc3MgKFxuICAgICAgICBpZDogJGlkLCBcbiAgICAgICAgYWRkcmVzc0lkOiAkYWRkcmVzc0lkLFxuICAgICAgICB0aXRsZTogJHRpdGxlLCBcbiAgICAgICAgYWRkcmVzczogJGFkZHJlc3MsIFxuICAgICAgICBkaXZpc2lvbjogJGRpdmlzaW9uLFxuICAgICAgICBkaXN0cmljdDogJGRpc3RyaWN0LFxuICAgICAgICByZWdpb246ICRyZWdpb25cbiAgICApe1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBhZGRyZXNzXG4gICAgICBkaXZpc2lvblxuICAgICAgZGlzdHJpY3RcbiAgICAgIHJlZ2lvblxuICAgICAgaXNfcHJpbWFyeVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFNFVFBSSU1BUllfQUREUkVTUyA9IGdxbGBcbiAgbXV0YXRpb24gU2V0RGVsaXZlcnlBZGRyZXNzUHJpbWFyeSAoXG4gICAgICAkaWQ6IElEISwgXG4gICAgICAkYWRkcmVzc0lkOiBTdHJpbmchXG4gICAgICl7XG4gICAgICBzZXREZWxpdmVyeUFkZHJlc3NQcmltYXJ5IChcbiAgICAgICAgaWQ6ICRpZCwgXG4gICAgICAgIGFkZHJlc3NJZDogJGFkZHJlc3NJZFxuICAgICl7XG4gICAgICBtZXNzYWdlXG4gICAgICBzdGF0dXNcbiAgICB9XG4gIH1cbmA7XG5cblxuZXhwb3J0IGNvbnN0IERFTEVURV9BRERSRVNTID0gZ3FsYFxuICBtdXRhdGlvbiBEZWxldGVEZWxpdmVyeUFkZHJlc3MoIFxuICAgICRpZDogSUQhLCBcbiAgICAkYWRkcmVzc0lkOiBTdHJpbmchXG4gICAgKSB7XG4gICAgZGVsZXRlRGVsaXZlcnlBZGRyZXNzKFxuICAgICAgaWQ6ICRpZCxcbiAgICAgIGFkZHJlc3NJZDogJGFkZHJlc3NJZCxcbiAgICApIHtcbiAgICAgc3RhdHVzXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/graphql/mutation/address.ts\n");

/***/ })

})