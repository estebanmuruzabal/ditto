webpackHotUpdate("static/development/pages/your-plants.js",{

/***/ "./src/utils/sensorUtils.ts":
/*!**********************************!*\
  !*** ./src/utils/sensorUtils.ts ***!
  \**********************************/
/*! exports provided: getSettingTypeText, getRelayText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSettingTypeText\", function() { return getSettingTypeText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRelayText\", function() { return getRelayText; });\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ \"./src/utils/constant.ts\");\n\nvar getSettingTypeText = function getSettingTypeText(settingType) {\n  switch (settingType) {\n    case \"\".concat(_constant__WEBPACK_IMPORTED_MODULE_0__[\"SensorsTypes\"].SOIL_HUMIDITY, \"_1\"):\n    case \"\".concat(_constant__WEBPACK_IMPORTED_MODULE_0__[\"SensorsTypes\"].SOIL_HUMIDITY, \"_2\"):\n    case \"\".concat(_constant__WEBPACK_IMPORTED_MODULE_0__[\"SensorsTypes\"].SOIL_HUMIDITY, \"_3\"):\n      return 'SENSOR HUMEDAD EN TIERRA';\n\n    case _constant__WEBPACK_IMPORTED_MODULE_0__[\"SensorsTypes\"].LIGHT_SETTING:\n      return 'SENSOR DE LUZ';\n\n    case \"\".concat(_constant__WEBPACK_IMPORTED_MODULE_0__[\"SensorsTypes\"].PLUG, \"_1\"):\n    case \"\".concat(_constant__WEBPACK_IMPORTED_MODULE_0__[\"SensorsTypes\"].PLUG, \"_2\"):\n    case \"\".concat(_constant__WEBPACK_IMPORTED_MODULE_0__[\"SensorsTypes\"].PLUG, \"_3\"):\n      return 'ENCHUFE INTELIGENTE';\n\n    case \"\".concat(_constant__WEBPACK_IMPORTED_MODULE_0__[\"SensorsTypes\"].DISTANCE, \"_1\"):\n    case \"\".concat(_constant__WEBPACK_IMPORTED_MODULE_0__[\"SensorsTypes\"].DISTANCE, \"_2\"):\n    case \"\".concat(_constant__WEBPACK_IMPORTED_MODULE_0__[\"SensorsTypes\"].DISTANCE, \"_3\"):\n      return 'SENSOR DE DISTANCIA';\n\n    default:\n      break;\n  }\n};\nvar getRelayText = function getRelayText(settingType) {\n  switch (settingType) {\n    case \"\".concat(_constant__WEBPACK_IMPORTED_MODULE_0__[\"SensorsTypes\"].SOIL_HUMIDITY, \"_1\"):\n    case \"\".concat(_constant__WEBPACK_IMPORTED_MODULE_0__[\"SensorsTypes\"].SOIL_HUMIDITY, \"_2\"):\n    case \"\".concat(_constant__WEBPACK_IMPORTED_MODULE_0__[\"SensorsTypes\"].SOIL_HUMIDITY, \"_3\"):\n      return 'SENSOR HUMEDAD EN TIERRA';\n\n    case _constant__WEBPACK_IMPORTED_MODULE_0__[\"SensorsTypes\"].LIGHT_SETTING:\n      return 'SENSOR DE LUZ';\n\n    case \"\".concat(_constant__WEBPACK_IMPORTED_MODULE_0__[\"SensorsTypes\"].PLUG, \"_1\"):\n    case \"\".concat(_constant__WEBPACK_IMPORTED_MODULE_0__[\"SensorsTypes\"].PLUG, \"_2\"):\n    case \"\".concat(_constant__WEBPACK_IMPORTED_MODULE_0__[\"SensorsTypes\"].PLUG, \"_3\"):\n      return 'ENCHUFE INTELIGENTE';\n\n    case \"\".concat(_constant__WEBPACK_IMPORTED_MODULE_0__[\"SensorsTypes\"].DISTANCE, \"_1\"):\n    case \"\".concat(_constant__WEBPACK_IMPORTED_MODULE_0__[\"SensorsTypes\"].DISTANCE, \"_2\"):\n    case \"\".concat(_constant__WEBPACK_IMPORTED_MODULE_0__[\"SensorsTypes\"].DISTANCE, \"_3\"):\n      return 'SENSOR DE DISTANCIA';\n\n    default:\n      break;\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2Vuc29yVXRpbHMudHM/ZDg4MyJdLCJuYW1lcyI6WyJnZXRTZXR0aW5nVHlwZVRleHQiLCJzZXR0aW5nVHlwZSIsIlNlbnNvcnNUeXBlcyIsIlNPSUxfSFVNSURJVFkiLCJMSUdIVF9TRVRUSU5HIiwiUExVRyIsIkRJU1RBTkNFIiwiZ2V0UmVsYXlUZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxXQUFELEVBQStCO0FBQzdELFVBQVFBLFdBQVI7QUFDSSxtQkFBUUMsc0RBQVksQ0FBQ0MsYUFBckI7QUFDQSxtQkFBUUQsc0RBQVksQ0FBQ0MsYUFBckI7QUFDQSxtQkFBUUQsc0RBQVksQ0FBQ0MsYUFBckI7QUFDSSxhQUFPLDBCQUFQOztBQUNKLFNBQUtELHNEQUFZLENBQUNFLGFBQWxCO0FBQWlDLGFBQU8sZUFBUDs7QUFDakMsbUJBQVFGLHNEQUFZLENBQUNHLElBQXJCO0FBQ0EsbUJBQVFILHNEQUFZLENBQUNHLElBQXJCO0FBQ0EsbUJBQVFILHNEQUFZLENBQUNHLElBQXJCO0FBQ0ksYUFBTyxxQkFBUDs7QUFDSixtQkFBUUgsc0RBQVksQ0FBQ0ksUUFBckI7QUFDQSxtQkFBUUosc0RBQVksQ0FBQ0ksUUFBckI7QUFDQSxtQkFBUUosc0RBQVksQ0FBQ0ksUUFBckI7QUFDSyxhQUFPLHFCQUFQOztBQUNMO0FBQ0k7QUFmUjtBQWlCSCxDQWxCTTtBQW9CQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDTixXQUFELEVBQStCO0FBQ3ZELFVBQVFBLFdBQVI7QUFDSSxtQkFBUUMsc0RBQVksQ0FBQ0MsYUFBckI7QUFDQSxtQkFBUUQsc0RBQVksQ0FBQ0MsYUFBckI7QUFDQSxtQkFBUUQsc0RBQVksQ0FBQ0MsYUFBckI7QUFDSSxhQUFPLDBCQUFQOztBQUNKLFNBQUtELHNEQUFZLENBQUNFLGFBQWxCO0FBQWlDLGFBQU8sZUFBUDs7QUFDakMsbUJBQVFGLHNEQUFZLENBQUNHLElBQXJCO0FBQ0EsbUJBQVFILHNEQUFZLENBQUNHLElBQXJCO0FBQ0EsbUJBQVFILHNEQUFZLENBQUNHLElBQXJCO0FBQ0ksYUFBTyxxQkFBUDs7QUFDSixtQkFBUUgsc0RBQVksQ0FBQ0ksUUFBckI7QUFDQSxtQkFBUUosc0RBQVksQ0FBQ0ksUUFBckI7QUFDQSxtQkFBUUosc0RBQVksQ0FBQ0ksUUFBckI7QUFDSyxhQUFPLHFCQUFQOztBQUNMO0FBQ0k7QUFmUjtBQWlCSCxDQWxCTSIsImZpbGUiOiIuL3NyYy91dGlscy9zZW5zb3JVdGlscy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlbnNvcnNUeXBlcyB9IGZyb20gXCIuL2NvbnN0YW50XCI7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXR0aW5nVHlwZVRleHQgPSAoc2V0dGluZ1R5cGU6IFNlbnNvcnNUeXBlcykgPT4ge1xuICAgIHN3aXRjaCAoc2V0dGluZ1R5cGUpIHtcbiAgICAgICAgY2FzZSBgJHtTZW5zb3JzVHlwZXMuU09JTF9IVU1JRElUWX1fMWA6XG4gICAgICAgIGNhc2UgYCR7U2Vuc29yc1R5cGVzLlNPSUxfSFVNSURJVFl9XzJgOlxuICAgICAgICBjYXNlIGAke1NlbnNvcnNUeXBlcy5TT0lMX0hVTUlESVRZfV8zYDpcbiAgICAgICAgICAgIHJldHVybiAnU0VOU09SIEhVTUVEQUQgRU4gVElFUlJBJ1xuICAgICAgICBjYXNlIFNlbnNvcnNUeXBlcy5MSUdIVF9TRVRUSU5HOiByZXR1cm4gJ1NFTlNPUiBERSBMVVonO1xuICAgICAgICBjYXNlIGAke1NlbnNvcnNUeXBlcy5QTFVHfV8xYDpcbiAgICAgICAgY2FzZSBgJHtTZW5zb3JzVHlwZXMuUExVR31fMmA6XG4gICAgICAgIGNhc2UgYCR7U2Vuc29yc1R5cGVzLlBMVUd9XzNgOlxuICAgICAgICAgICAgcmV0dXJuICdFTkNIVUZFIElOVEVMSUdFTlRFJztcbiAgICAgICAgY2FzZSBgJHtTZW5zb3JzVHlwZXMuRElTVEFOQ0V9XzFgOlxuICAgICAgICBjYXNlIGAke1NlbnNvcnNUeXBlcy5ESVNUQU5DRX1fMmA6XG4gICAgICAgIGNhc2UgYCR7U2Vuc29yc1R5cGVzLkRJU1RBTkNFfV8zYDpcbiAgICAgICAgICAgICByZXR1cm4gJ1NFTlNPUiBERSBESVNUQU5DSUEnO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0UmVsYXlUZXh0ID0gKHNldHRpbmdUeXBlOiBTZW5zb3JzVHlwZXMpID0+IHtcbiAgICBzd2l0Y2ggKHNldHRpbmdUeXBlKSB7XG4gICAgICAgIGNhc2UgYCR7U2Vuc29yc1R5cGVzLlNPSUxfSFVNSURJVFl9XzFgOlxuICAgICAgICBjYXNlIGAke1NlbnNvcnNUeXBlcy5TT0lMX0hVTUlESVRZfV8yYDpcbiAgICAgICAgY2FzZSBgJHtTZW5zb3JzVHlwZXMuU09JTF9IVU1JRElUWX1fM2A6XG4gICAgICAgICAgICByZXR1cm4gJ1NFTlNPUiBIVU1FREFEIEVOIFRJRVJSQSdcbiAgICAgICAgY2FzZSBTZW5zb3JzVHlwZXMuTElHSFRfU0VUVElORzogcmV0dXJuICdTRU5TT1IgREUgTFVaJztcbiAgICAgICAgY2FzZSBgJHtTZW5zb3JzVHlwZXMuUExVR31fMWA6XG4gICAgICAgIGNhc2UgYCR7U2Vuc29yc1R5cGVzLlBMVUd9XzJgOlxuICAgICAgICBjYXNlIGAke1NlbnNvcnNUeXBlcy5QTFVHfV8zYDpcbiAgICAgICAgICAgIHJldHVybiAnRU5DSFVGRSBJTlRFTElHRU5URSc7XG4gICAgICAgIGNhc2UgYCR7U2Vuc29yc1R5cGVzLkRJU1RBTkNFfV8xYDpcbiAgICAgICAgY2FzZSBgJHtTZW5zb3JzVHlwZXMuRElTVEFOQ0V9XzJgOlxuICAgICAgICBjYXNlIGAke1NlbnNvcnNUeXBlcy5ESVNUQU5DRX1fM2A6XG4gICAgICAgICAgICAgcmV0dXJuICdTRU5TT1IgREUgRElTVEFOQ0lBJztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/sensorUtils.ts\n");

/***/ })

})