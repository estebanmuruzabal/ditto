module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/product/[slug].js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/router-context.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCI/NDEyNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/router-context\n");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dist/next-server/lib/utils.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCI/MzI2ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../next-server/lib/utils\n");

/***/ }),

/***/ "./src/assets/styles/product-single.style.tsx":
/*!****************************************************!*\
  !*** ./src/assets/styles/product-single.style.tsx ***!
  \****************************************************/
/*! exports provided: ProductSingleContainer, RelatedItemContainer, RealatedItemCol, Loading, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductSingleContainer\", function() { return ProductSingleContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RelatedItemContainer\", function() { return RelatedItemContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RealatedItemCol\", function() { return RealatedItemCol; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Loading\", function() { return Loading; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ \"@styled-system/theme-get\");\n/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ProductSingleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"product-singlestyle__ProductSingleWrapper\",\n  componentId: \"sc-1xg2qws-0\"\n})([\"padding:78px 0 60px 0;position:relative;background-color:\", \";@media (min-width:1600px){padding-top:89px;}@media (max-width:990px){padding-top:60px;}\"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__[\"themeGet\"])('colors.gray.200', '#f7f7f7'));\nconst ProductSingleContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"product-singlestyle__ProductSingleContainer\",\n  componentId: \"sc-1xg2qws-1\"\n})([\"width:100%;\"]);\nconst RelatedItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"product-singlestyle__RelatedItemContainer\",\n  componentId: \"sc-1xg2qws-2\"\n})([\"display:flex;flex-wrap:wrap;margin-left:-15px;margin-right:-15px;@media (max-width:1199px) and (min-width:990px){margin-left:-10px;margin-right:-10px;}@media (max-width:768px){margin-left:-7.5px;margin-right:-7.5px;}\"]);\nconst RealatedItemCol = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"product-singlestyle__RealatedItemCol\",\n  componentId: \"sc-1xg2qws-3\"\n})([\"flex:0 0 20%;max-width:20%;padding-left:15px;padding-right:15px;margin-bottom:30px;@media (max-width:1500px){flex:0 0 20%;max-width:20%;}@media (max-width:1200px){flex:0 0 33.3333333%;max-width:33.3333333%;}@media (max-width:1199px) and (min-width:991px){padding-left:10px;padding-right:10px;}@media (max-width:768px){padding-left:7.5px;padding-right:7.5px;margin-bottom:15px;}@media (max-width:767px){flex:0 0 50%;max-width:50%;}\"]);\nconst Loading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"product-singlestyle__Loading\",\n  componentId: \"sc-1xg2qws-4\"\n})([\"width:100%;padding:10px;display:flex;align-items:center;justify-content:center;font-size:calc(\", \" - 1px);color:#222222;\"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__[\"themeGet\"])('fontSizes.base', '15px'));\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductSingleWrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N0eWxlcy9wcm9kdWN0LXNpbmdsZS5zdHlsZS50c3g/OGMyNSJdLCJuYW1lcyI6WyJQcm9kdWN0U2luZ2xlV3JhcHBlciIsInN0eWxlZCIsImRpdiIsInRoZW1lR2V0IiwiUHJvZHVjdFNpbmdsZUNvbnRhaW5lciIsIlJlbGF0ZWRJdGVtQ29udGFpbmVyIiwiUmVhbGF0ZWRJdGVtQ29sIiwiTG9hZGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLE1BQU1BLG9CQUFvQixHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhKQUdKQyx5RUFBUSxDQUFDLGlCQUFELEVBQW9CLFNBQXBCLENBSEosQ0FBMUI7QUFjTyxNQUFNQyxzQkFBc0IsR0FBR0gsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtQkFBNUI7QUFJQSxNQUFNRyxvQkFBb0IsR0FBR0osd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnT0FBMUI7QUFpQkEsTUFBTUksZUFBZSxHQUFHTCx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNiQUFyQjtBQThCQSxNQUFNSyxPQUFPLEdBQUdOLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaUlBTUFDLHlFQUFRLENBQUMsZ0JBQUQsRUFBbUIsTUFBbkIsQ0FOUixDQUFiO0FBVVFILG1GQUFmIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zdHlsZXMvcHJvZHVjdC1zaW5nbGUuc3R5bGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XG5cbmNvbnN0IFByb2R1Y3RTaW5nbGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogNzhweCAwIDYwcHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMuZ3JheS4yMDAnLCAnI2Y3ZjdmNycpfTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gICAgcGFkZGluZy10b3A6IDg5cHg7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogOTkwcHgpIHtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFByb2R1Y3RTaW5nbGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbmA7XG5cbmV4cG9ydCBjb25zdCBSZWxhdGVkSXRlbUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIGFuZCAobWluLXdpZHRoOiA5OTBweCkge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IC03LjVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC03LjVweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFJlYWxhdGVkSXRlbUNvbCA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDAgMCAyMCU7XG4gIG1heC13aWR0aDogMjAlO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkge1xuICAgIGZsZXg6IDAgMCAyMCU7XG4gICAgbWF4LXdpZHRoOiAyMCU7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAgIGZsZXg6IDAgMCAzMy4zMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMlO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIGFuZCAobWluLXdpZHRoOiA5OTFweCkge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHBhZGRpbmctbGVmdDogNy41cHg7XG4gICAgcGFkZGluZy1yaWdodDogNy41cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBmbGV4OiAwIDAgNTAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTG9hZGluZyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiBjYWxjKCR7dGhlbWVHZXQoJ2ZvbnRTaXplcy5iYXNlJywgJzE1cHgnKX0gLSAxcHgpO1xuICBjb2xvcjogIzIyMjIyMjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RTaW5nbGVXcmFwcGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/styles/product-single.style.tsx\n");

/***/ }),

/***/ "./src/components/seo.tsx":
/*!********************************!*\
  !*** ./src/components/seo.tsx ***!
  \********************************/
/*! exports provided: SEO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SEO\", function() { return SEO; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/estebanmuruzabal/work/Mahdi-Fashion/client/packages/shop/src/components/seo.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst SEO = ({\n  title,\n  description,\n  canonical,\n  css,\n  js,\n  image\n}) => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 3\n  }\n}, __jsx(\"title\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }\n}, title), __jsx(\"meta\", {\n  name: \"description\",\n  content: description,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }\n}), __jsx(\"meta\", {\n  name: \"viewport\",\n  content: \"width=device-width,minimum-scale=1,initial-scale=1\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }\n}), __jsx(\"meta\", {\n  property: \"og:type\",\n  content: \"website\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }\n}), __jsx(\"meta\", {\n  name: \"og:title\",\n  property: \"og:title\",\n  content: title,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }\n}), __jsx(\"meta\", {\n  name: \"og:description\",\n  property: \"og:description\",\n  content: description,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }\n}), __jsx(\"meta\", {\n  property: \"og:site_name\",\n  content: \"Proper Noun\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }\n}), __jsx(\"meta\", {\n  property: \"og:url\",\n  content: `${canonical}`,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }\n}), __jsx(\"meta\", {\n  name: \"twitter:card\",\n  content: \"summary\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }\n}), __jsx(\"meta\", {\n  name: \"twitter:title\",\n  content: title,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }\n}), __jsx(\"meta\", {\n  name: \"twitter:description\",\n  content: description,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }\n}), __jsx(\"meta\", {\n  name: \"twitter:site\",\n  content: \"@propernounco\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }\n}), __jsx(\"meta\", {\n  name: \"twitter:creator\",\n  content: \"@propernounco\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }\n}), css && __jsx(\"link\", {\n  rel: \"stylesheet\",\n  href: `${css}`,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 13\n  }\n}), image ? __jsx(\"meta\", {\n  property: \"og:image\",\n  content: `${image}`,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 7\n  }\n}) : __jsx(\"meta\", {\n  property: \"og:image\",\n  content: \"https://www.propernoun.co/static/images/proper-noun-social.png\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 7\n  }\n}), image && __jsx(\"meta\", {\n  name: \"twitter:image\",\n  content: `${image}`,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 15\n  }\n}), canonical && __jsx(\"link\", {\n  rel: \"canonical\",\n  href: `${canonical}`,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 19\n  }\n}), js && __jsx(\"script\", {\n  type: \"text/javascript\",\n  src: `${js}`,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 12\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZW8udHN4PzFmYzciXSwibmFtZXMiOlsiU0VPIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhbm9uaWNhbCIsImNzcyIsImpzIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQVdPLE1BQU1BLEdBQXVCLEdBQUcsQ0FBQztBQUN0Q0MsT0FEc0M7QUFFdENDLGFBRnNDO0FBR3RDQyxXQUhzQztBQUl0Q0MsS0FKc0M7QUFLdENDLElBTHNDO0FBTXRDQztBQU5zQyxDQUFELEtBUXJDLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBUUwsS0FBUixDQURGLEVBRUU7QUFBTSxNQUFJLEVBQUMsYUFBWDtBQUF5QixTQUFPLEVBQUVDLFdBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixFQUdFO0FBQ0UsTUFBSSxFQUFDLFVBRFA7QUFFRSxTQUFPLEVBQUMsb0RBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUhGLEVBT0U7QUFBTSxVQUFRLEVBQUMsU0FBZjtBQUF5QixTQUFPLEVBQUMsU0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVBGLEVBUUU7QUFBTSxNQUFJLEVBQUMsVUFBWDtBQUFzQixVQUFRLEVBQUMsVUFBL0I7QUFBMEMsU0FBTyxFQUFFRCxLQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUkYsRUFTRTtBQUNFLE1BQUksRUFBQyxnQkFEUDtBQUVFLFVBQVEsRUFBQyxnQkFGWDtBQUdFLFNBQU8sRUFBRUMsV0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBVEYsRUFjRTtBQUFNLFVBQVEsRUFBQyxjQUFmO0FBQThCLFNBQU8sRUFBQyxhQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBZEYsRUFlRTtBQUFNLFVBQVEsRUFBQyxRQUFmO0FBQXdCLFNBQU8sRUFBRyxHQUFFQyxTQUFVLEVBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFmRixFQWdCRTtBQUFNLE1BQUksRUFBQyxjQUFYO0FBQTBCLFNBQU8sRUFBQyxTQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBaEJGLEVBaUJFO0FBQU0sTUFBSSxFQUFDLGVBQVg7QUFBMkIsU0FBTyxFQUFFRixLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBakJGLEVBa0JFO0FBQU0sTUFBSSxFQUFDLHFCQUFYO0FBQWlDLFNBQU8sRUFBRUMsV0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWxCRixFQW1CRTtBQUFNLE1BQUksRUFBQyxjQUFYO0FBQTBCLFNBQU8sRUFBQyxlQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBbkJGLEVBb0JFO0FBQU0sTUFBSSxFQUFDLGlCQUFYO0FBQTZCLFNBQU8sRUFBQyxlQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBcEJGLEVBcUJHRSxHQUFHLElBQUk7QUFBTSxLQUFHLEVBQUMsWUFBVjtBQUF1QixNQUFJLEVBQUcsR0FBRUEsR0FBSSxFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBckJWLEVBc0JHRSxLQUFLLEdBQ0o7QUFBTSxVQUFRLEVBQUMsVUFBZjtBQUEwQixTQUFPLEVBQUcsR0FBRUEsS0FBTSxFQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREksR0FHSjtBQUNFLFVBQVEsRUFBQyxVQURYO0FBRUUsU0FBTyxFQUFDLGdFQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUF6QkosRUE4QkdBLEtBQUssSUFBSTtBQUFNLE1BQUksRUFBQyxlQUFYO0FBQTJCLFNBQU8sRUFBRyxHQUFFQSxLQUFNLEVBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUE5QlosRUErQkdILFNBQVMsSUFBSTtBQUFNLEtBQUcsRUFBQyxXQUFWO0FBQXNCLE1BQUksRUFBRyxHQUFFQSxTQUFVLEVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUEvQmhCLEVBZ0NHRSxFQUFFLElBQUk7QUFBUSxNQUFJLEVBQUMsaUJBQWI7QUFBK0IsS0FBRyxFQUFHLEdBQUVBLEVBQUcsRUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWhDVCxDQVJLIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvc2VvLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG50eXBlIFNlb1Byb3BzID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjYW5vbmljYWw/OiBzdHJpbmc7XG4gIGNzcz86IHN0cmluZztcbiAganM/OiBzdHJpbmc7XG4gIGltYWdlPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IFNFTzogUmVhY3QuRkM8U2VvUHJvcHM+ID0gKHtcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBjYW5vbmljYWwsXG4gIGNzcyxcbiAganMsXG4gIGltYWdlLFxufSkgPT4gKFxuICA8SGVhZD5cbiAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgPG1ldGFcbiAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLG1pbmltdW0tc2NhbGU9MSxpbml0aWFsLXNjYWxlPTFcIlxuICAgIC8+XG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICA8bWV0YVxuICAgICAgbmFtZT1cIm9nOmRlc2NyaXB0aW9uXCJcbiAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxuICAgICAgY29udGVudD17ZGVzY3JpcHRpb259XG4gICAgLz5cbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJQcm9wZXIgTm91blwiIC8+XG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgJHtjYW5vbmljYWx9YH0gLz5cbiAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlcIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XG4gICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkBwcm9wZXJub3VuY29cIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiQHByb3Blcm5vdW5jb1wiIC8+XG4gICAge2NzcyAmJiA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj17YCR7Y3NzfWB9IC8+fVxuICAgIHtpbWFnZSA/IChcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtgJHtpbWFnZX1gfSAvPlxuICAgICkgOiAoXG4gICAgICA8bWV0YVxuICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcbiAgICAgICAgY29udGVudD1cImh0dHBzOi8vd3d3LnByb3Blcm5vdW4uY28vc3RhdGljL2ltYWdlcy9wcm9wZXItbm91bi1zb2NpYWwucG5nXCJcbiAgICAgIC8+XG4gICAgKX1cbiAgICB7aW1hZ2UgJiYgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXtgJHtpbWFnZX1gfSAvPn1cbiAgICB7Y2Fub25pY2FsICYmIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2Ake2Nhbm9uaWNhbH1gfSAvPn1cbiAgICB7anMgJiYgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPXtgJHtqc31gfT48L3NjcmlwdD59XG4gIDwvSGVhZD5cbik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/seo.tsx\n");

/***/ }),

/***/ "./src/graphql/query/product.query.ts":
/*!********************************************!*\
  !*** ./src/graphql/query/product.query.ts ***!
  \********************************************/
/*! exports provided: GET_PRODUCT_WITH_RELATED_PRODUCTS, GET_RELATED_PRODUCTS, GET_PRODUCT, GET_PRODUCT_DETAILS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PRODUCT_WITH_RELATED_PRODUCTS\", function() { return GET_PRODUCT_WITH_RELATED_PRODUCTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_RELATED_PRODUCTS\", function() { return GET_RELATED_PRODUCTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PRODUCT\", function() { return GET_PRODUCT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PRODUCT_DETAILS\", function() { return GET_PRODUCT_DETAILS; });\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GET_PRODUCT_WITH_RELATED_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n  query getProductWithRelatedProducts($slug: String!, $type: String!) {\n    product(slug: $slug) {\n      id\n      title\n      weight\n      slug\n      price\n      type\n      image\n      categories {\n        id\n        slug\n        title\n      }\n    }\n    relatedProducts(slug: $slug, type: $type) {\n      id\n      title\n      slug\n      weight\n      price\n      type\n      image\n    }\n  }\n`;\nconst GET_RELATED_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n  query getRelatedProducts($type: String!, $slug: String!) {\n    relatedProducts(type: $type, slug: $slug) {\n      id\n      title\n      slug\n      weight\n      price\n      type\n      image\n    }\n  }\n`;\nconst GET_PRODUCT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n  query getProduct($slug: String!) {\n    product(slug: $slug) {\n      id\n      title\n      weight\n      slug\n      price\n      packagePrice\n      discountInPercent\n      type\n      gallery {\n        url\n      }\n      image\n      categories {\n        id\n        slug\n        title\n      }\n    }\n  }\n`;\nconst GET_PRODUCT_DETAILS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n  query GetProduct($slug: String!) {\n    getProduct(slug: $slug) {\n       id\n          type {\n            id\n            slug\n            name\n          }\n          categories {\n            id\n            slug\n            name\n          }\n          name\n          slug\n          description\n          images\n          unit\n          price\n          sale_price\n          packagePrice\n          discount_in_percent\n          product_quantity\n          is_featured\n          meta_title\n          meta_keyword\n          meta_description\n    }\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhxbC9xdWVyeS9wcm9kdWN0LnF1ZXJ5LnRzP2M4Y2UiXSwibmFtZXMiOlsiR0VUX1BST0RVQ1RfV0lUSF9SRUxBVEVEX1BST0RVQ1RTIiwiZ3FsIiwiR0VUX1JFTEFURURfUFJPRFVDVFMiLCJHRVRfUFJPRFVDVCIsIkdFVF9QUk9EVUNUX0RFVEFJTFMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxpQ0FBaUMsR0FBR0Msa0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQTlDO0FBNEJBLE1BQU1DLG9CQUFvQixHQUFHRCxrREFBSTs7Ozs7Ozs7Ozs7O0NBQWpDO0FBY0EsTUFBTUUsV0FBVyxHQUFHRixrREFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUF4QjtBQXVCQSxNQUFNRyxtQkFBbUIsR0FBR0gsa0RBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFoQyIsImZpbGUiOiIuL3NyYy9ncmFwaHFsL3F1ZXJ5L3Byb2R1Y3QucXVlcnkudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUX1dJVEhfUkVMQVRFRF9QUk9EVUNUUyA9IGdxbGBcbiAgcXVlcnkgZ2V0UHJvZHVjdFdpdGhSZWxhdGVkUHJvZHVjdHMoJHNsdWc6IFN0cmluZyEsICR0eXBlOiBTdHJpbmchKSB7XG4gICAgcHJvZHVjdChzbHVnOiAkc2x1Zykge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICB3ZWlnaHRcbiAgICAgIHNsdWdcbiAgICAgIHByaWNlXG4gICAgICB0eXBlXG4gICAgICBpbWFnZVxuICAgICAgY2F0ZWdvcmllcyB7XG4gICAgICAgIGlkXG4gICAgICAgIHNsdWdcbiAgICAgICAgdGl0bGVcbiAgICAgIH1cbiAgICB9XG4gICAgcmVsYXRlZFByb2R1Y3RzKHNsdWc6ICRzbHVnLCB0eXBlOiAkdHlwZSkge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBzbHVnXG4gICAgICB3ZWlnaHRcbiAgICAgIHByaWNlXG4gICAgICB0eXBlXG4gICAgICBpbWFnZVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEdFVF9SRUxBVEVEX1BST0RVQ1RTID0gZ3FsYFxuICBxdWVyeSBnZXRSZWxhdGVkUHJvZHVjdHMoJHR5cGU6IFN0cmluZyEsICRzbHVnOiBTdHJpbmchKSB7XG4gICAgcmVsYXRlZFByb2R1Y3RzKHR5cGU6ICR0eXBlLCBzbHVnOiAkc2x1Zykge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICBzbHVnXG4gICAgICB3ZWlnaHRcbiAgICAgIHByaWNlXG4gICAgICB0eXBlXG4gICAgICBpbWFnZVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEdFVF9QUk9EVUNUID0gZ3FsYFxuICBxdWVyeSBnZXRQcm9kdWN0KCRzbHVnOiBTdHJpbmchKSB7XG4gICAgcHJvZHVjdChzbHVnOiAkc2x1Zykge1xuICAgICAgaWRcbiAgICAgIHRpdGxlXG4gICAgICB3ZWlnaHRcbiAgICAgIHNsdWdcbiAgICAgIHByaWNlXG4gICAgICBwYWNrYWdlUHJpY2VcbiAgICAgIGRpc2NvdW50SW5QZXJjZW50XG4gICAgICB0eXBlXG4gICAgICBnYWxsZXJ5IHtcbiAgICAgICAgdXJsXG4gICAgICB9XG4gICAgICBpbWFnZVxuICAgICAgY2F0ZWdvcmllcyB7XG4gICAgICAgIGlkXG4gICAgICAgIHNsdWdcbiAgICAgICAgdGl0bGVcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgR0VUX1BST0RVQ1RfREVUQUlMUyA9IGdxbGBcbiAgcXVlcnkgR2V0UHJvZHVjdCgkc2x1ZzogU3RyaW5nISkge1xuICAgIGdldFByb2R1Y3Qoc2x1ZzogJHNsdWcpIHtcbiAgICAgICBpZFxuICAgICAgICAgIHR5cGUge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9XG4gICAgICAgICAgY2F0ZWdvcmllcyB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgc2x1Z1xuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgc2x1Z1xuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgaW1hZ2VzXG4gICAgICAgICAgdW5pdFxuICAgICAgICAgIHByaWNlXG4gICAgICAgICAgc2FsZV9wcmljZVxuICAgICAgICAgIHBhY2thZ2VQcmljZVxuICAgICAgICAgIGRpc2NvdW50X2luX3BlcmNlbnRcbiAgICAgICAgICBwcm9kdWN0X3F1YW50aXR5XG4gICAgICAgICAgaXNfZmVhdHVyZWRcbiAgICAgICAgICBtZXRhX3RpdGxlXG4gICAgICAgICAgbWV0YV9rZXl3b3JkXG4gICAgICAgICAgbWV0YV9kZXNjcmlwdGlvblxuICAgIH1cbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/graphql/query/product.query.ts\n");

/***/ }),

/***/ "./src/pages/product/[slug].tsx":
/*!**************************************!*\
  !*** ./src/pages/product/[slug].tsx ***!
  \**************************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/seo */ \"./src/components/seo.tsx\");\n/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redq/reuse-modal */ \"@redq/reuse-modal\");\n/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var assets_styles_product_single_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/styles/product-single.style */ \"./src/assets/styles/product-single.style.tsx\");\n/* harmony import */ var graphql_query_product_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql/query/product.query */ \"./src/graphql/query/product.query.ts\");\n/* harmony import */ var utils_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/apollo */ \"./src/utils/apollo.js\");\nvar _jsxFileName = \"/Users/estebanmuruzabal/work/Mahdi-Fashion/client/packages/shop/src/pages/product/[slug].tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst ProductDetails = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! components/product-details/product-details-one/product-details-one */ \"./src/components/product-details/product-details-one/product-details-one.tsx\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! components/product-details/product-details-one/product-details-one */ \"./src/components/product-details/product-details-one/product-details-one.tsx\")],\n    modules: ['components/product-details/product-details-one/product-details-one']\n  }\n});\nconst ProductDetailsBook = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! components/product-details/product-details-two/product-details-two */ \"./src/components/product-details/product-details-two/product-details-two.tsx\")), {\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! components/product-details/product-details-two/product-details-two */ \"./src/components/product-details/product-details-two/product-details-two.tsx\")],\n    modules: ['components/product-details/product-details-two/product-details-two']\n  }\n});\nconst CartPopUp = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! features/carts/cart-popup */ \"./src/features/carts/cart-popup.tsx\")), {\n  ssr: false,\n  loadableGenerated: {\n    webpack: () => [/*require.resolve*/(/*! features/carts/cart-popup */ \"./src/features/carts/cart-popup.tsx\")],\n    modules: ['features/carts/cart-popup']\n  }\n});\n\nconst ProductPage = ({\n  data,\n  deviceType\n}) => {\n  const SingleProduct = data.getProduct;\n\n  let content = __jsx(ProductDetails, {\n    product: SingleProduct,\n    deviceType: deviceType,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  });\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_seo__WEBPACK_IMPORTED_MODULE_2__[\"SEO\"], {\n    title: `${SingleProduct.name} - Ditto`,\n    description: `${SingleProduct.name} Details`,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }), __jsx(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__[\"Modal\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(assets_styles_product_single_style__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(assets_styles_product_single_style__WEBPACK_IMPORTED_MODULE_4__[\"ProductSingleContainer\"], {\n    style: {\n      marginTop: \"50px\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, content))));\n};\n\nasync function getServerSideProps({\n  params\n}) {\n  const apolloClient = Object(utils_apollo__WEBPACK_IMPORTED_MODULE_6__[\"initializeApollo\"])();\n  const {\n    data\n  } = await apolloClient.query({\n    query: graphql_query_product_query__WEBPACK_IMPORTED_MODULE_5__[\"GET_PRODUCT_DETAILS\"],\n    variables: {\n      slug: params.slug\n    }\n  });\n  return {\n    props: {\n      data\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcHJvZHVjdC9bc2x1Z10udHN4P2RiNDUiXSwibmFtZXMiOlsiUHJvZHVjdERldGFpbHMiLCJkeW5hbWljIiwiUHJvZHVjdERldGFpbHNCb29rIiwiQ2FydFBvcFVwIiwic3NyIiwiUHJvZHVjdFBhZ2UiLCJkYXRhIiwiZGV2aWNlVHlwZSIsIlNpbmdsZVByb2R1Y3QiLCJnZXRQcm9kdWN0IiwiY29udGVudCIsIm5hbWUiLCJtYXJnaW5Ub3AiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwYXJhbXMiLCJhcG9sbG9DbGllbnQiLCJpbml0aWFsaXplQXBvbGxvIiwicXVlcnkiLCJHRVRfUFJPRFVDVF9ERVRBSUxTIiwidmFyaWFibGVzIiwic2x1ZyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUEsTUFBTUEsY0FBYyxHQUFHQyxtREFBTyxDQUFDLE1BQzdCLHdPQUQ0QjtBQUFBO0FBQUEsd0NBQ3JCLHdKQURxQjtBQUFBLGNBQ3JCLG9FQURxQjtBQUFBO0FBQUEsRUFBOUI7QUFHQSxNQUFNQyxrQkFBa0IsR0FBR0QsbURBQU8sQ0FBQyxNQUNqQyx3T0FEZ0M7QUFBQTtBQUFBLHdDQUN6Qix3SkFEeUI7QUFBQSxjQUN6QixvRUFEeUI7QUFBQTtBQUFBLEVBQWxDO0FBR0EsTUFBTUUsU0FBUyxHQUFHRixtREFBTyxDQUFDLE1BQU0sc0pBQVAsRUFBNEM7QUFDbkVHLEtBQUcsRUFBRSxLQUQ4RDtBQUFBO0FBQUEsd0NBQTlCLHNFQUE4QjtBQUFBLGNBQTlCLDJCQUE4QjtBQUFBO0FBQUEsQ0FBNUMsQ0FBekI7O0FBY0EsTUFBTUMsV0FBNEIsR0FBRyxDQUFDO0FBQUVDLE1BQUY7QUFBUUM7QUFBUixDQUFELEtBQTBCO0FBQzdELFFBQU1DLGFBQWEsR0FBR0YsSUFBSSxDQUFDRyxVQUEzQjs7QUFDQSxNQUFJQyxPQUFPLEdBQ1QsTUFBQyxjQUFEO0FBQWdCLFdBQU8sRUFBRUYsYUFBekI7QUFBd0MsY0FBVSxFQUFFRCxVQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7O0FBS0EsU0FDRSxtRUFDRSxNQUFDLGtEQUFEO0FBQ0UsU0FBSyxFQUFHLEdBQUVDLGFBQWEsQ0FBQ0csSUFBSyxVQUQvQjtBQUVFLGVBQVcsRUFBRyxHQUFFSCxhQUFhLENBQUNHLElBQUssVUFGckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUUsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5RkFBRDtBQUNBLFNBQUssRUFBRTtBQUNMQyxlQUFTLEVBQUU7QUFETixLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR0YsT0FMSCxDQURGLENBREYsQ0FORixDQURGO0FBb0JELENBM0JEOztBQTRCTyxlQUFlRyxrQkFBZixDQUFrQztBQUFFQztBQUFGLENBQWxDLEVBQThDO0FBQ25ELFFBQU1DLFlBQVksR0FBR0MscUVBQWdCLEVBQXJDO0FBRUEsUUFBTTtBQUFFVjtBQUFGLE1BQVcsTUFBTVMsWUFBWSxDQUFDRSxLQUFiLENBQW1CO0FBQ3hDQSxTQUFLLEVBQUVDLCtFQURpQztBQUV4Q0MsYUFBUyxFQUFFO0FBQ1RDLFVBQUksRUFBRU4sTUFBTSxDQUFDTTtBQURKO0FBRjZCLEdBQW5CLENBQXZCO0FBTUEsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTGY7QUFESztBQURGLEdBQVA7QUFLRDtBQUNjRCwwRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9wcm9kdWN0L1tzbHVnXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQgeyBTRU8gfSBmcm9tICdjb21wb25lbnRzL3Nlbyc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ0ByZWRxL3JldXNlLW1vZGFsJztcbmltcG9ydCBQcm9kdWN0U2luZ2xlV3JhcHBlciwge1xuICBQcm9kdWN0U2luZ2xlQ29udGFpbmVyLFxufSBmcm9tICdhc3NldHMvc3R5bGVzL3Byb2R1Y3Qtc2luZ2xlLnN0eWxlJztcbmltcG9ydCB7IEdFVF9QUk9EVUNUX0RFVEFJTFMgfSBmcm9tICdncmFwaHFsL3F1ZXJ5L3Byb2R1Y3QucXVlcnknO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsbyB9IGZyb20gJ3V0aWxzL2Fwb2xsbyc7XG5cbmNvbnN0IFByb2R1Y3REZXRhaWxzID0gZHluYW1pYygoKSA9PlxuICBpbXBvcnQoJ2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy1vbmUvcHJvZHVjdC1kZXRhaWxzLW9uZScpXG4pO1xuY29uc3QgUHJvZHVjdERldGFpbHNCb29rID0gZHluYW1pYygoKSA9PlxuICBpbXBvcnQoJ2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy10d28vcHJvZHVjdC1kZXRhaWxzLXR3bycpXG4pO1xuY29uc3QgQ2FydFBvcFVwID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ2ZlYXR1cmVzL2NhcnRzL2NhcnQtcG9wdXAnKSwge1xuICBzc3I6IGZhbHNlLFxufSk7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGRldmljZVR5cGU/OiB7XG4gICAgbW9iaWxlOiBib29sZWFuO1xuICAgIHRhYmxldDogYm9vbGVhbjtcbiAgICBkZXNrdG9wOiBib29sZWFuO1xuICB9O1xuICBkYXRhOiBhbnk7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn07XG5cbmNvbnN0IFByb2R1Y3RQYWdlOiBOZXh0UGFnZTxQcm9wcz4gPSAoeyBkYXRhLCBkZXZpY2VUeXBlIH0pID0+IHtcbiAgY29uc3QgU2luZ2xlUHJvZHVjdCA9IGRhdGEuZ2V0UHJvZHVjdDtcbiAgbGV0IGNvbnRlbnQgPSAoXG4gICAgPFByb2R1Y3REZXRhaWxzIHByb2R1Y3Q9e1NpbmdsZVByb2R1Y3R9IGRldmljZVR5cGU9e2RldmljZVR5cGV9IC8+XG4gICk7XG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U0VPXG4gICAgICAgIHRpdGxlPXtgJHtTaW5nbGVQcm9kdWN0Lm5hbWV9IC0gRGl0dG9gfVxuICAgICAgICBkZXNjcmlwdGlvbj17YCR7U2luZ2xlUHJvZHVjdC5uYW1lfSBEZXRhaWxzYH1cbiAgICAgIC8+XG5cbiAgICAgIDxNb2RhbD5cbiAgICAgICAgPFByb2R1Y3RTaW5nbGVXcmFwcGVyPlxuICAgICAgICAgIDxQcm9kdWN0U2luZ2xlQ29udGFpbmVyXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpblRvcDogXCI1MHB4XCJcbiAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgIDwvUHJvZHVjdFNpbmdsZUNvbnRhaW5lcj5cbiAgICAgICAgPC9Qcm9kdWN0U2luZ2xlV3JhcHBlcj5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG8oKTtcblxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwb2xsb0NsaWVudC5xdWVyeSh7XG4gICAgcXVlcnk6IEdFVF9QUk9EVUNUX0RFVEFJTFMsXG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBzbHVnOiBwYXJhbXMuc2x1ZyxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YSxcbiAgICB9LFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/product/[slug].tsx\n");

/***/ }),

/***/ "./src/utils/apollo.js":
/*!*****************************!*\
  !*** ./src/utils/apollo.js ***!
  \*****************************/
/*! exports provided: initializeApollo, useApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeApollo\", function() { return initializeApollo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useApollo\", function() { return useApollo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ \"apollo-boost\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);\n/* import { useMemo } from 'react'; */\n//import { ApolloClient } from 'apollo-client';\n//import { InMemoryCache } from 'apollo-cache-inmemory';\n//import { HttpLink, createHttpLink } from 'apollo-link-http';\n//import { setContext } from 'apollo-link-context';\n\n/* \nimport {\n  ApolloClient,\n  HttpLink,\n  ApolloLink,\n  InMemoryCache,\n  concat,\n} from '@apollo/client';\n\nlet apolloClient;\n\nconst httpLink = new HttpLink({\n  uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT,\n  onError: ({ networkError, graphQLErrors }) => {\n    console.log('graphQLErrors', graphQLErrors);\n    console.log('networkError', networkError);\n  },\n});\n\nconst authMiddleware = new ApolloLink((operation, forward) => {\n  // add the authorization to the headers\n  let token = null;\n  if (typeof window !== 'undefined') {\n    token = localStorage.getItem('access_token');\n  }\n  operation.setContext({\n    headers: {\n      'x-access-token': token ? token : '',\n    },\n  });\n\n  return forward(operation);\n});\n\nconst client = new ApolloClient({\n  link: authMiddleware.concat(httpLink),\n  cache: new InMemoryCache(),\n}); */\n\n/*\nconsole.log(process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT);\nfunction createApolloClient() {\n  let token = null;\n  if (typeof window !== 'undefined') {\n    token = localStorage.getItem('access_token');\n  }\n  return new ApolloClient({\n    ssrMode: typeof window === 'undefined',\n    link: new HttpLink({\n      uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT, // Server URL (must be absolute)\n      credentials: 'same-origin', // Additional fetch() options like `credentials`\n      headers: {\n        'x-access-token': token ? token : '',\n      }, // Additional fetch() options like `headers`\n      onError: ({ networkError, graphQLErrors }) => {\n        console.log('graphQLErrors', graphQLErrors);\n        console.log('networkError', networkError);\n      },\n    }),\n    cache: new InMemoryCache(),\n  });\n}*/\n\n/* export function initializeApollo(initialState = null) {\n  const _apolloClient = apolloClient ?? client;\n\n  // If your page has Next.js data fetching methods that use Apollo Client, the initial state\n  // gets hydrated here\n  if (initialState) {\n    _apolloClient.cache.restore(initialState);\n  }\n  // For SSG and SSR always create a new Apollo Client\n  if (typeof window === 'undefined') return _apolloClient;\n  // Create the Apollo Client once in the client\n  if (!apolloClient) apolloClient = _apolloClient;\n\n  return _apolloClient;\n}\n\nexport function useApollo(initialState) {\n  const store = useMemo(() => initializeApollo(initialState), [initialState]);\n  return store;\n} */\n\n\nconst httpLink = new apollo_boost__WEBPACK_IMPORTED_MODULE_1__[\"HttpLink\"]({\n  uri: 'http://localhost:7000/api',\n  // Server URL (must be absolute)\n  credentials: 'same-origin',\n  // Additional fetch() options like `credentials`\n  onError: ({\n    networkError,\n    graphQLErrors\n  }) => {\n    console.log('graphQLErrors', graphQLErrors);\n    console.log('networkError', networkError);\n  }\n});\nconst authLink = new apollo_boost__WEBPACK_IMPORTED_MODULE_1__[\"ApolloLink\"]((operation, forward) => {\n  // Retrieve the authorization token from local storage.\n  let token = null;\n\n  if (false) {} // Use the setContext method to set the HTTP headers.\n\n\n  operation.setContext({\n    headers: {\n      'x-access-token': token ? token : ''\n    }\n  }); // Call the next link in the middleware chain.\n\n  return forward(operation);\n});\nlet apolloClient;\n\nfunction createApolloClient() {\n  return new apollo_boost__WEBPACK_IMPORTED_MODULE_1__[\"ApolloClient\"]({\n    ssrMode: true,\n    link: authLink.concat(httpLink),\n    cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_1__[\"InMemoryCache\"]()\n  });\n}\n\nfunction initializeApollo(initialState = null) {\n  var _apolloClient2;\n\n  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(); // If your page has Next.js data fetching methods that use Apollo Client, the initial state\n  // gets hydrated here\n\n\n  if (initialState) {\n    _apolloClient.cache.restore(initialState);\n  } // For SSG and SSR always create a new Apollo Client\n\n\n  if (true) return _apolloClient; // Create the Apollo Client once in the client\n\n  if (!apolloClient) apolloClient = _apolloClient;\n  return _apolloClient;\n}\nfunction useApollo(initialState) {\n  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => initializeApollo(initialState), [initialState]);\n  return store;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvYXBvbGxvLmpzPzZjY2UiXSwibmFtZXMiOlsiaHR0cExpbmsiLCJIdHRwTGluayIsInVyaSIsImNyZWRlbnRpYWxzIiwib25FcnJvciIsIm5ldHdvcmtFcnJvciIsImdyYXBoUUxFcnJvcnMiLCJjb25zb2xlIiwibG9nIiwiYXV0aExpbmsiLCJBcG9sbG9MaW5rIiwib3BlcmF0aW9uIiwiZm9yd2FyZCIsInRva2VuIiwic2V0Q29udGV4dCIsImhlYWRlcnMiLCJhcG9sbG9DbGllbnQiLCJjcmVhdGVBcG9sbG9DbGllbnQiLCJBcG9sbG9DbGllbnQiLCJzc3JNb2RlIiwibGluayIsImNvbmNhdCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImluaXRpYWxpemVBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwicmVzdG9yZSIsInVzZUFwb2xsbyIsInN0b3JlIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBLE1BQU1BLFFBQVEsR0FBRyxJQUFJQyxxREFBSixDQUFhO0FBQzVCQyxLQUFHLEVBQUUsMkJBRHVCO0FBQ007QUFDbENDLGFBQVcsRUFBRSxhQUZlO0FBRUE7QUFDNUJDLFNBQU8sRUFBRSxDQUFDO0FBQUVDLGdCQUFGO0FBQWdCQztBQUFoQixHQUFELEtBQXFDO0FBQzVDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCRixhQUE3QjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCSCxZQUE1QjtBQUNEO0FBTjJCLENBQWIsQ0FBakI7QUFRQSxNQUFNSSxRQUFRLEdBQUcsSUFBSUMsdURBQUosQ0FBZSxDQUFDQyxTQUFELEVBQVlDLE9BQVosS0FBd0I7QUFDdEQ7QUFDQSxNQUFJQyxLQUFLLEdBQUcsSUFBWjs7QUFDQSxhQUFtQyxFQUhtQixDQU10RDs7O0FBQ0FGLFdBQVMsQ0FBQ0csVUFBVixDQUFxQjtBQUNuQkMsV0FBTyxFQUFFO0FBQ1Asd0JBQWtCRixLQUFLLEdBQUdBLEtBQUgsR0FBVztBQUQzQjtBQURVLEdBQXJCLEVBUHNELENBYXREOztBQUNBLFNBQU9ELE9BQU8sQ0FBQ0QsU0FBRCxDQUFkO0FBQ0QsQ0FmZ0IsQ0FBakI7QUFpQkEsSUFBSUssWUFBSjs7QUFDQSxTQUFTQyxrQkFBVCxHQUE4QjtBQUM1QixTQUFPLElBQUlDLHlEQUFKLENBQWlCO0FBQ3RCQyxXQUFPLE1BRGU7QUFFdEJDLFFBQUksRUFBRVgsUUFBUSxDQUFDWSxNQUFULENBQWdCckIsUUFBaEIsQ0FGZ0I7QUFHdEJzQixTQUFLLEVBQUUsSUFBSUMsMERBQUo7QUFIZSxHQUFqQixDQUFQO0FBS0Q7O0FBRU0sU0FBU0MsZ0JBQVQsQ0FBMEJDLFlBQVksR0FBRyxJQUF6QyxFQUErQztBQUFBOztBQUNwRCxRQUFNQyxhQUFhLHFCQUFHVixZQUFILDJEQUFtQkMsa0JBQWtCLEVBQXhELENBRG9ELENBR3BEO0FBQ0E7OztBQUNBLE1BQUlRLFlBQUosRUFBa0I7QUFDaEJDLGlCQUFhLENBQUNKLEtBQWQsQ0FBb0JLLE9BQXBCLENBQTRCRixZQUE1QjtBQUNELEdBUG1ELENBUXBEOzs7QUFDQSxZQUFtQyxPQUFPQyxhQUFQLENBVGlCLENBVXBEOztBQUNBLE1BQUksQ0FBQ1YsWUFBTCxFQUFtQkEsWUFBWSxHQUFHVSxhQUFmO0FBRW5CLFNBQU9BLGFBQVA7QUFDRDtBQUVNLFNBQVNFLFNBQVQsQ0FBbUJILFlBQW5CLEVBQWlDO0FBQ3RDLFFBQU1JLEtBQUssR0FBR0MscURBQU8sQ0FBQyxNQUFNTixnQkFBZ0IsQ0FBQ0MsWUFBRCxDQUF2QixFQUF1QyxDQUFDQSxZQUFELENBQXZDLENBQXJCO0FBQ0EsU0FBT0ksS0FBUDtBQUNEIiwiZmlsZSI6Ii4vc3JjL3V0aWxzL2Fwb2xsby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7ICovXG4vL2ltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuLy9pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5Jztcbi8vaW1wb3J0IHsgSHR0cExpbmssIGNyZWF0ZUh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XG4vL2ltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tICdhcG9sbG8tbGluay1jb250ZXh0Jztcbi8qIFxuaW1wb3J0IHtcbiAgQXBvbGxvQ2xpZW50LFxuICBIdHRwTGluayxcbiAgQXBvbGxvTGluayxcbiAgSW5NZW1vcnlDYWNoZSxcbiAgY29uY2F0LFxufSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbmxldCBhcG9sbG9DbGllbnQ7XG5cbmNvbnN0IGh0dHBMaW5rID0gbmV3IEh0dHBMaW5rKHtcbiAgdXJpOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HUkFQSFFMX0FQSV9FTkRQT0lOVCxcbiAgb25FcnJvcjogKHsgbmV0d29ya0Vycm9yLCBncmFwaFFMRXJyb3JzIH0pID0+IHtcbiAgICBjb25zb2xlLmxvZygnZ3JhcGhRTEVycm9ycycsIGdyYXBoUUxFcnJvcnMpO1xuICAgIGNvbnNvbGUubG9nKCduZXR3b3JrRXJyb3InLCBuZXR3b3JrRXJyb3IpO1xuICB9LFxufSk7XG5cbmNvbnN0IGF1dGhNaWRkbGV3YXJlID0gbmV3IEFwb2xsb0xpbmsoKG9wZXJhdGlvbiwgZm9yd2FyZCkgPT4ge1xuICAvLyBhZGQgdGhlIGF1dGhvcml6YXRpb24gdG8gdGhlIGhlYWRlcnNcbiAgbGV0IHRva2VuID0gbnVsbDtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJyk7XG4gIH1cbiAgb3BlcmF0aW9uLnNldENvbnRleHQoe1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICd4LWFjY2Vzcy10b2tlbic6IHRva2VuID8gdG9rZW4gOiAnJyxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gZm9yd2FyZChvcGVyYXRpb24pO1xufSk7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICBsaW5rOiBhdXRoTWlkZGxld2FyZS5jb25jYXQoaHR0cExpbmspLFxuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbn0pOyAqL1xuXG4vKlxuY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR1JBUEhRTF9BUElfRU5EUE9JTlQpO1xuZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KCkge1xuICBsZXQgdG9rZW4gPSBudWxsO1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKTtcbiAgfVxuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgc3NyTW9kZTogdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcsXG4gICAgbGluazogbmV3IEh0dHBMaW5rKHtcbiAgICAgIHVyaTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR1JBUEhRTF9BUElfRU5EUE9JTlQsIC8vIFNlcnZlciBVUkwgKG11c3QgYmUgYWJzb2x1dGUpXG4gICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJywgLy8gQWRkaXRpb25hbCBmZXRjaCgpIG9wdGlvbnMgbGlrZSBgY3JlZGVudGlhbHNgXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IHRva2VuID8gdG9rZW4gOiAnJyxcbiAgICAgIH0sIC8vIEFkZGl0aW9uYWwgZmV0Y2goKSBvcHRpb25zIGxpa2UgYGhlYWRlcnNgXG4gICAgICBvbkVycm9yOiAoeyBuZXR3b3JrRXJyb3IsIGdyYXBoUUxFcnJvcnMgfSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZ3JhcGhRTEVycm9ycycsIGdyYXBoUUxFcnJvcnMpO1xuICAgICAgICBjb25zb2xlLmxvZygnbmV0d29ya0Vycm9yJywgbmV0d29ya0Vycm9yKTtcbiAgICAgIH0sXG4gICAgfSksXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG4gIH0pO1xufSovXG5cbi8qIGV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSA9IG51bGwpIHtcbiAgY29uc3QgX2Fwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudCA/PyBjbGllbnQ7XG5cbiAgLy8gSWYgeW91ciBwYWdlIGhhcyBOZXh0LmpzIGRhdGEgZmV0Y2hpbmcgbWV0aG9kcyB0aGF0IHVzZSBBcG9sbG8gQ2xpZW50LCB0aGUgaW5pdGlhbCBzdGF0ZVxuICAvLyBnZXRzIGh5ZHJhdGVkIGhlcmVcbiAgaWYgKGluaXRpYWxTdGF0ZSkge1xuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZShpbml0aWFsU3RhdGUpO1xuICB9XG4gIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IEFwb2xsbyBDbGllbnRcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX2Fwb2xsb0NsaWVudDtcbiAgLy8gQ3JlYXRlIHRoZSBBcG9sbG8gQ2xpZW50IG9uY2UgaW4gdGhlIGNsaWVudFxuICBpZiAoIWFwb2xsb0NsaWVudCkgYXBvbGxvQ2xpZW50ID0gX2Fwb2xsb0NsaWVudDtcblxuICByZXR1cm4gX2Fwb2xsb0NsaWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwb2xsbyhpbml0aWFsU3RhdGUpIHtcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pO1xuICByZXR1cm4gc3RvcmU7XG59ICovXG5cblxuXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtBcG9sbG9DbGllbnQsIEFwb2xsb0xpbmssIEh0dHBMaW5rLCBJbk1lbW9yeUNhY2hlfSBmcm9tICdhcG9sbG8tYm9vc3QnO1xuY29uc3QgaHR0cExpbmsgPSBuZXcgSHR0cExpbmsoe1xuICB1cmk6ICdodHRwOi8vbG9jYWxob3N0OjcwMDAvYXBpJywgLy8gU2VydmVyIFVSTCAobXVzdCBiZSBhYnNvbHV0ZSlcbiAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsIC8vIEFkZGl0aW9uYWwgZmV0Y2goKSBvcHRpb25zIGxpa2UgYGNyZWRlbnRpYWxzYFxuICBvbkVycm9yOiAoeyBuZXR3b3JrRXJyb3IsIGdyYXBoUUxFcnJvcnMgfSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdncmFwaFFMRXJyb3JzJywgZ3JhcGhRTEVycm9ycyk7XG4gICAgY29uc29sZS5sb2coJ25ldHdvcmtFcnJvcicsIG5ldHdvcmtFcnJvcik7XG4gIH0sXG59KTtcbmNvbnN0IGF1dGhMaW5rID0gbmV3IEFwb2xsb0xpbmsoKG9wZXJhdGlvbiwgZm9yd2FyZCkgPT4ge1xuICAvLyBSZXRyaWV2ZSB0aGUgYXV0aG9yaXphdGlvbiB0b2tlbiBmcm9tIGxvY2FsIHN0b3JhZ2UuXG4gIGxldCB0b2tlbiA9IG51bGw7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpO1xuICB9XG4gIC8vIFVzZSB0aGUgc2V0Q29udGV4dCBtZXRob2QgdG8gc2V0IHRoZSBIVFRQIGhlYWRlcnMuXG4gIG9wZXJhdGlvbi5zZXRDb250ZXh0KHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAneC1hY2Nlc3MtdG9rZW4nOiB0b2tlbiA/IHRva2VuIDogJydcbiAgICB9XG4gIH0pO1xuXG4gIC8vIENhbGwgdGhlIG5leHQgbGluayBpbiB0aGUgbWlkZGxld2FyZSBjaGFpbi5cbiAgcmV0dXJuIGZvcndhcmQob3BlcmF0aW9uKTtcbn0pO1xuXG5sZXQgYXBvbGxvQ2xpZW50O1xuZnVuY3Rpb24gY3JlYXRlQXBvbGxvQ2xpZW50KCkge1xuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgc3NyTW9kZTogdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcsXG4gICAgbGluazogYXV0aExpbmsuY29uY2F0KGh0dHBMaW5rKSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSA9IG51bGwpIHtcbiAgY29uc3QgX2Fwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudCA/PyBjcmVhdGVBcG9sbG9DbGllbnQoKTtcblxuICAvLyBJZiB5b3VyIHBhZ2UgaGFzIE5leHQuanMgZGF0YSBmZXRjaGluZyBtZXRob2RzIHRoYXQgdXNlIEFwb2xsbyBDbGllbnQsIHRoZSBpbml0aWFsIHN0YXRlXG4gIC8vIGdldHMgaHlkcmF0ZWQgaGVyZVxuICBpZiAoaW5pdGlhbFN0YXRlKSB7XG4gICAgX2Fwb2xsb0NsaWVudC5jYWNoZS5yZXN0b3JlKGluaXRpYWxTdGF0ZSk7XG4gIH1cbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgQXBvbGxvIENsaWVudFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfYXBvbGxvQ2xpZW50O1xuICAvLyBDcmVhdGUgdGhlIEFwb2xsbyBDbGllbnQgb25jZSBpbiB0aGUgY2xpZW50XG4gIGlmICghYXBvbGxvQ2xpZW50KSBhcG9sbG9DbGllbnQgPSBfYXBvbGxvQ2xpZW50O1xuXG4gIHJldHVybiBfYXBvbGxvQ2xpZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBvbGxvKGluaXRpYWxTdGF0ZSkge1xuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZUFwb2xsbyhpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSk7XG4gIHJldHVybiBzdG9yZTtcbn1cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/apollo.js\n");

/***/ }),

/***/ 7:
/*!********************************************!*\
  !*** multi ./src/pages/product/[slug].tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/estebanmuruzabal/work/Mahdi-Fashion/client/packages/shop/src/pages/product/[slug].tsx */"./src/pages/product/[slug].tsx");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-hooks\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI/NWE5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXBvbGxvL3JlYWN0LWhvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-hooks\n");

/***/ }),

/***/ "@redq/reuse-modal":
/*!************************************!*\
  !*** external "@redq/reuse-modal" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@redq/reuse-modal\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkcS9yZXVzZS1tb2RhbFwiP2Q1YjAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHJlZHEvcmV1c2UtbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkcS9yZXVzZS1tb2RhbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@redq/reuse-modal\n");

/***/ }),

/***/ "@styled-system/css":
/*!*************************************!*\
  !*** external "@styled-system/css" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@styled-system/css\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3R5bGVkLXN5c3RlbS9jc3NcIj9kZTJlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBzdHlsZWQtc3lzdGVtL2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtc3lzdGVtL2Nzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@styled-system/css\n");

/***/ }),

/***/ "@styled-system/theme-get":
/*!*******************************************!*\
  !*** external "@styled-system/theme-get" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@styled-system/theme-get\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3R5bGVkLXN5c3RlbS90aGVtZS1nZXRcIj84NDZlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBzdHlsZWQtc3lzdGVtL3RoZW1lLWdldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHlsZWQtc3lzdGVtL3RoZW1lLWdldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@styled-system/theme-get\n");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-boost\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tYm9vc3RcIj8wNTlmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImFwb2xsby1ib29zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1ib29zdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-boost\n");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tY2xpZW50XCI/NDI3NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWNsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-client\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIj8wM2MxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpzLWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-cookie\n");

/***/ }),

/***/ "localforage":
/*!******************************!*\
  !*** external "localforage" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"localforage\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2NhbGZvcmFnZVwiPzJmNmYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibG9jYWxmb3JhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2NhbGZvcmFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///localforage\n");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dynamic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types-exact\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCI/OGUxYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLWV4YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types-exact\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-content-loader":
/*!***************************************!*\
  !*** external "react-content-loader" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-content-loader\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jb250ZW50LWxvYWRlclwiP2MyYzciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtY29udGVudC1sb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jb250ZW50LWxvYWRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-content-loader\n");

/***/ }),

/***/ "react-custom-scrollbars":
/*!******************************************!*\
  !*** external "react-custom-scrollbars" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-custom-scrollbars\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jdXN0b20tc2Nyb2xsYmFyc1wiPzY2MjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jdXN0b20tc2Nyb2xsYmFyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-custom-scrollbars\n");

/***/ }),

/***/ "react-image":
/*!******************************!*\
  !*** external "react-image" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-image\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pbWFnZVwiPzY5ZWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pbWFnZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-image\n");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-intl\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pbnRsXCI/ODYwZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1pbnRsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW50bFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-intl\n");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-is\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiPzBkMzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-is\n");

/***/ }),

/***/ "react-magnifier":
/*!**********************************!*\
  !*** external "react-magnifier" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-magnifier\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYWduaWZpZXJcIj9kOGI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LW1hZ25pZmllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1hZ25pZmllclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-magnifier\n");

/***/ }),

/***/ "react-multi-carousel":
/*!***************************************!*\
  !*** external "react-multi-carousel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-multi-carousel\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiP2FiODAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtbXVsdGktY2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-multi-carousel\n");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-reveal/Fade\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZXZlYWwvRmFkZVwiP2E0ZmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmV2ZWFsL0ZhZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZXZlYWwvRmFkZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-reveal/Fade\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-system\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtc3lzdGVtXCI/YjRiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtc3lzdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLXN5c3RlbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-system\n");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIj82MWU4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InVybC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///url\n");

/***/ })

/******/ });