module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/error-message/error-message.tsx":
/*!********************************************************!*\
  !*** ./src/components/error-message/error-message.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ErrorMessage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/estebanmuruzabal/work/Mahdi-Fashion/client/packages/shop/src/components/error-message/error-message.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ErrorMessage({\n  message\n}) {\n  return __jsx(StyledAside, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 10\n    }\n  }, message);\n}\nconst StyledAside = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({\n  displayName: \"error-message__StyledAside\",\n  componentId: \"sc-5jhwvi-0\"\n})({\n  display: 'flex',\n  justifyContent: 'center',\n  alignItems: 'center',\n  height: '100vh',\n  padding: '1.5rem',\n  fontSize: '22px',\n  color: '000',\n  backgroundColor: '#fff'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lcnJvci1tZXNzYWdlL2Vycm9yLW1lc3NhZ2UudHN4P2FhZTMiXSwibmFtZXMiOlsiRXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsIlN0eWxlZEFzaWRlIiwic3R5bGVkIiwiYXNpZGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwicGFkZGluZyIsImZvbnRTaXplIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ2UsU0FBU0EsWUFBVCxDQUFzQjtBQUFFQztBQUFGLENBQXRCLEVBQW1DO0FBQ2hELFNBQU8sTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBY0EsT0FBZCxDQUFQO0FBQ0Q7QUFFRCxNQUFNQyxXQUFXLEdBQUdDLHdEQUFNLENBQUNDLEtBQVY7QUFBQTtBQUFBO0FBQUEsR0FBZ0I7QUFDL0JDLFNBQU8sRUFBRSxNQURzQjtBQUUvQkMsZ0JBQWMsRUFBRSxRQUZlO0FBRy9CQyxZQUFVLEVBQUUsUUFIbUI7QUFJL0JDLFFBQU0sRUFBRSxPQUp1QjtBQUsvQkMsU0FBTyxFQUFFLFFBTHNCO0FBTS9CQyxVQUFRLEVBQUUsTUFOcUI7QUFPL0JDLE9BQUssRUFBRSxLQVB3QjtBQVEvQkMsaUJBQWUsRUFBRTtBQVJjLENBQWhCLENBQWpCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvZXJyb3ItbWVzc2FnZS9lcnJvci1tZXNzYWdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJyb3JNZXNzYWdlKHsgbWVzc2FnZSB9KSB7XG4gIHJldHVybiA8U3R5bGVkQXNpZGU+e21lc3NhZ2V9PC9TdHlsZWRBc2lkZT47XG59XG5cbmNvbnN0IFN0eWxlZEFzaWRlID0gc3R5bGVkLmFzaWRlKHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBoZWlnaHQ6ICcxMDB2aCcsXG4gIHBhZGRpbmc6ICcxLjVyZW0nLFxuICBmb250U2l6ZTogJzIycHgnLFxuICBjb2xvcjogJzAwMCcsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/error-message/error-message.tsx\n");

/***/ }),

/***/ "./src/graphql/query/type.query.ts":
/*!*****************************************!*\
  !*** ./src/graphql/query/type.query.ts ***!
  \*****************************************/
/*! exports provided: GET_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_TYPE\", function() { return GET_TYPE; });\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);\n\n/* query getCategories($searchText: String, $offset: Int) {\n  categories(searchText: $searchText, offset: $offset) {\n{limit, offset, searchText}: ICommonPaginationArgs,\n */\n\nconst GET_TYPE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`\n  query Types {\n    types {\n      totalCount\n        items{\n          id\n          name\n          slug\n          image\n          icon\n          home_title\n          home_subtitle\n          meta_title\n          meta_keyword\n          meta_description\n        }\n    }\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhxbC9xdWVyeS90eXBlLnF1ZXJ5LnRzPzIwNmEiXSwibmFtZXMiOlsiR0VUX1RZUEUiLCJncWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7Ozs7QUFJTyxNQUFNQSxRQUFRLEdBQUVDLGtEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBcEIiLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC9xdWVyeS90eXBlLnF1ZXJ5LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5cbi8qIHF1ZXJ5IGdldENhdGVnb3JpZXMoJHNlYXJjaFRleHQ6IFN0cmluZywgJG9mZnNldDogSW50KSB7XG4gIGNhdGVnb3JpZXMoc2VhcmNoVGV4dDogJHNlYXJjaFRleHQsIG9mZnNldDogJG9mZnNldCkge1xue2xpbWl0LCBvZmZzZXQsIHNlYXJjaFRleHR9OiBJQ29tbW9uUGFnaW5hdGlvbkFyZ3MsXG4gKi9cbmV4cG9ydCBjb25zdCBHRVRfVFlQRT0gZ3FsYFxuICBxdWVyeSBUeXBlcyB7XG4gICAgdHlwZXMge1xuICAgICAgdG90YWxDb3VudFxuICAgICAgICBpdGVtc3tcbiAgICAgICAgICBpZFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBzbHVnXG4gICAgICAgICAgaW1hZ2VcbiAgICAgICAgICBpY29uXG4gICAgICAgICAgaG9tZV90aXRsZVxuICAgICAgICAgIGhvbWVfc3VidGl0bGVcbiAgICAgICAgICBtZXRhX3RpdGxlXG4gICAgICAgICAgbWV0YV9rZXl3b3JkXG4gICAgICAgICAgbWV0YV9kZXNjcmlwdGlvblxuICAgICAgICB9XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/graphql/query/type.query.ts\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ \"@apollo/react-hooks\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphql_query_type_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql/query/type.query */ \"./src/graphql/query/type.query.ts\");\n/* harmony import */ var components_error_message_error_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/error-message/error-message */ \"./src/components/error-message/error-message.tsx\");\nvar _jsxFileName = \"/Users/estebanmuruzabal/work/Mahdi-Fashion/client/packages/shop/src/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/* import { useEffect } from 'react';\nimport Head from 'next/head';\nimport Router from 'next/router';\n\n// the redirect will only happen on the client-side. This is by design,\nconst IndexPage: React.FC<{}> = () => {\n  useEffect(() => {\n    Router.replace('/[type]', '/grocery');\n  });\n  return (\n    <Head>\n      <meta name=\"robots\" content=\"noindex, nofollow\" />\n    </Head>\n  );\n};\n\nexport default IndexPage;\n\n\n */\n\n\n\n\n\n // the redirect will only happen on the client-side. This is by design,\n\nconst IndexPage = () => {\n  let selectedMenu = null;\n  let defaultMenu = null;\n  const {\n    data,\n    error,\n    loading\n  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__[\"useQuery\"])(graphql_query_type_query__WEBPACK_IMPORTED_MODULE_4__[\"GET_TYPE\"], {\n    variables: {\n      searchText: ''\n    }\n  });\n\n  if (loading) {\n    return __jsx(components_error_message_error_message__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      message: 'Loading...',\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 12\n      }\n    });\n  }\n\n  ;\n\n  if (error) {\n    return __jsx(components_error_message_error_message__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      message: 'Error occured for only domain routing',\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 7\n      }\n    });\n  }\n\n  ;\n  const typeMenu = data.types.items.map(item => {\n    return {\n      id: item.id,\n      href: `/${item.slug}`\n    };\n  }); // if error here, is because you have to add at least one type from admin\n\n  defaultMenu = typeMenu[0].href;\n\n  if (localStorage.getItem('myMenu')) {\n    selectedMenu = JSON.parse(localStorage.getItem('myMenu'));\n    selectedMenu = selectedMenu.href;\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace('/[type]', selectedMenu !== null ? selectedMenu : defaultMenu);\n  });\n  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }\n  }, __jsx(\"meta\", {\n    name: \"robots\",\n    content: \"noindex, nofollow\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSW5kZXhQYWdlIiwic2VsZWN0ZWRNZW51IiwiZGVmYXVsdE1lbnUiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwidXNlUXVlcnkiLCJHRVRfVFlQRSIsInZhcmlhYmxlcyIsInNlYXJjaFRleHQiLCJ0eXBlTWVudSIsInR5cGVzIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwiaWQiLCJocmVmIiwic2x1ZyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLE1BQU1BLFNBQXVCLEdBQUcsTUFBTTtBQUNwQyxNQUFJQyxZQUFZLEdBQUcsSUFBbkI7QUFDQSxNQUFJQyxXQUFXLEdBQUcsSUFBbEI7QUFDQSxRQUFNO0FBQUVDLFFBQUY7QUFBUUMsU0FBUjtBQUFlQztBQUFmLE1BQTJCQyxvRUFBUSxDQUN2Q0MsaUVBRHVDLEVBRXZDO0FBQ0VDLGFBQVMsRUFBRTtBQUNUQyxnQkFBVSxFQUFFO0FBREg7QUFEYixHQUZ1QyxDQUF6Qzs7QUFRQSxNQUFJSixPQUFKLEVBQWE7QUFDWCxXQUFPLE1BQUMsOEVBQUQ7QUFBYyxhQUFPLEVBQUUsWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0Q7O0FBQUE7O0FBRUQsTUFBSUQsS0FBSixFQUFXO0FBQ1QsV0FDRSxNQUFDLDhFQUFEO0FBQWMsYUFBTyxFQUFFLHVDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFHRDs7QUFBQTtBQUVELFFBQU1NLFFBQVEsR0FBR1AsSUFBSSxDQUFDUSxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXNCQyxJQUFELElBQVU7QUFDOUMsV0FBTztBQUNMQyxRQUFFLEVBQUVELElBQUksQ0FBQ0MsRUFESjtBQUVMQyxVQUFJLEVBQUcsSUFBR0YsSUFBSSxDQUFDRyxJQUFLO0FBRmYsS0FBUDtBQUlELEdBTGdCLENBQWpCLENBckJvQyxDQTJCcEM7O0FBQ0FmLGFBQVcsR0FBR1EsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZTSxJQUExQjs7QUFDQSxNQUFHRSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckIsQ0FBSCxFQUFrQztBQUNoQ2xCLGdCQUFZLEdBQUdtQixJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFFBQXJCLENBQVgsQ0FBZjtBQUNBbEIsZ0JBQVksR0FBR0EsWUFBWSxDQUFDZSxJQUE1QjtBQUNEOztBQUVETSx5REFBUyxDQUFDLE1BQU07QUFDZEMsc0RBQU0sQ0FBQ0MsT0FBUCxDQUFlLFNBQWYsRUFBMEJ2QixZQUFZLEtBQUssSUFBakIsR0FBd0JBLFlBQXhCLEdBQXVDQyxXQUFqRTtBQUNELEdBRlEsQ0FBVDtBQUdBLFNBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFvQixXQUFPLEVBQUMsbUJBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBS0QsQ0ExQ0Q7O0FBNENlRix3RUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbi8vIHRoZSByZWRpcmVjdCB3aWxsIG9ubHkgaGFwcGVuIG9uIHRoZSBjbGllbnQtc2lkZS4gVGhpcyBpcyBieSBkZXNpZ24sXG5jb25zdCBJbmRleFBhZ2U6IFJlYWN0LkZDPHt9PiA9ICgpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBSb3V0ZXIucmVwbGFjZSgnL1t0eXBlXScsICcvZ3JvY2VyeScpO1xuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9pbmRleCwgbm9mb2xsb3dcIiAvPlxuICAgIDwvSGVhZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcblxuXG4gKi9cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XG5pbXBvcnQgeyBHRVRfVFlQRSB9IGZyb20gJ2dyYXBocWwvcXVlcnkvdHlwZS5xdWVyeSc7XG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJ2NvbXBvbmVudHMvZXJyb3ItbWVzc2FnZS9lcnJvci1tZXNzYWdlJztcblxuLy8gdGhlIHJlZGlyZWN0IHdpbGwgb25seSBoYXBwZW4gb24gdGhlIGNsaWVudC1zaWRlLiBUaGlzIGlzIGJ5IGRlc2lnbixcbmNvbnN0IEluZGV4UGFnZTogUmVhY3QuRkM8e30+ID0gKCkgPT4ge1xuICBsZXQgc2VsZWN0ZWRNZW51ID0gbnVsbDtcbiAgbGV0IGRlZmF1bHRNZW51ID0gbnVsbDtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoXG4gICAgR0VUX1RZUEUsXG4gICAge1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIHNlYXJjaFRleHQ6ICcnXG4gICAgICB9XG4gICAgfVxuICApO1xuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8RXJyb3JNZXNzYWdlIG1lc3NhZ2U9eydMb2FkaW5nLi4uJ30gLz5cbiAgfTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEVycm9yTWVzc2FnZSBtZXNzYWdlPXsnRXJyb3Igb2NjdXJlZCBmb3Igb25seSBkb21haW4gcm91dGluZyd9IC8+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCB0eXBlTWVudSA9IGRhdGEudHlwZXMuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgcmV0dXJuKHtcbiAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgaHJlZjogYC8ke2l0ZW0uc2x1Z31gXG4gICAgfSlcbiAgfSlcbiAgLy8gaWYgZXJyb3IgaGVyZSwgaXMgYmVjYXVzZSB5b3UgaGF2ZSB0byBhZGQgYXQgbGVhc3Qgb25lIHR5cGUgZnJvbSBhZG1pblxuICBkZWZhdWx0TWVudSA9IHR5cGVNZW51WzBdLmhyZWY7XG4gIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteU1lbnUnKSl7XG4gICAgc2VsZWN0ZWRNZW51ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlNZW51JykpO1xuICAgIHNlbGVjdGVkTWVudSA9IHNlbGVjdGVkTWVudS5ocmVmO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBSb3V0ZXIucmVwbGFjZSgnL1t0eXBlXScsIHNlbGVjdGVkTWVudSAhPT0gbnVsbCA/IHNlbGVjdGVkTWVudSA6IGRlZmF1bHRNZW51KTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cIm5vaW5kZXgsIG5vZm9sbG93XCIgLz5cbiAgICA8L0hlYWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/estebanmuruzabal/work/Mahdi-Fashion/client/packages/shop/src/pages/index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/react-hooks\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCI/NWE5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAYXBvbGxvL3JlYWN0LWhvb2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9yZWFjdC1ob29rc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/react-hooks\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });