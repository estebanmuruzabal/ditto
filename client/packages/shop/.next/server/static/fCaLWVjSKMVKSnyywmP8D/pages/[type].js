module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		2: 0,
/******/ 		30: 0
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
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"19":"b0ac3ac78017f88bbfab","22":"18fcddc31da2d8c776f2","24":"f9495fc475cdfd009591","25":"3e3328dfc1d7ac760a28","27":"5cdd9f0fc74d787ab7be"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+M2j":
/***/ (function(module, exports) {

module.exports = require("omit-deep-lodash");

/***/ }),

/***/ "/JeY":
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/twb":
/***/ (function(module, exports) {

module.exports = require("react-waypoint");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("roL4");


/***/ }),

/***/ "0zej":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrowNext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ArrowNext = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: width,
    height: height
  }, __jsx("path", {
    d: "M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z",
    fill: color,
    stroke: color
  }));
};

/***/ }),

/***/ "33lg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_PRODUCTS; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GET_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
query GetProducts(
  $type: String
  $category: String
  $searchText: String
  $offset: Int,
  $limit: Int
) {
  products(
    type: $type
    category: $category
    searchText: $searchText
    offset: $offset,
    limit: $limit
  ) {
    items {
      id
      type {
        id
        slug
      }
      categories {
        id
        slug
      }
      name
      slug
      description
      packagePrice
      images
      unit
      price
      sale_price
      discount_in_percent
      product_quantity
      is_featured
      is_online
      meta_title
      meta_keyword
      meta_description
    }
    totalCount
    hasMore
  }

}

`;

/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "99J/":
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "AaBP":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/makeup-d35970108639dd1b5ea1af732250c450.png";

/***/ }),

/***/ "BMAw":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cloths-bc740630f228713e4bb0de8a7bffce22.png";

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EGWi":
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

/***/ }),

/***/ "Ej6a":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/furniture-1653225bd210688946d20a4b28cf8b0e.png";

/***/ }),

/***/ "ExBD":
/***/ (function(module, exports) {

module.exports = require("@styled-system/css");

/***/ }),

/***/ "H8eV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SEO; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SEO = ({
  title,
  description,
  canonical,
  css,
  js,
  image
}) => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, title), __jsx("meta", {
  name: "description",
  content: description
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width,minimum-scale=1,initial-scale=1"
}), __jsx("meta", {
  property: "og:type",
  content: "website"
}), __jsx("meta", {
  name: "og:title",
  property: "og:title",
  content: title
}), __jsx("meta", {
  name: "og:description",
  property: "og:description",
  content: description
}), __jsx("meta", {
  property: "og:site_name",
  content: "Proper Noun"
}), __jsx("meta", {
  property: "og:url",
  content: `${canonical}`
}), __jsx("meta", {
  name: "twitter:card",
  content: "summary"
}), __jsx("meta", {
  name: "twitter:title",
  content: title
}), __jsx("meta", {
  name: "twitter:description",
  content: description
}), __jsx("meta", {
  name: "twitter:site",
  content: "@propernounco"
}), __jsx("meta", {
  name: "twitter:creator",
  content: "@propernounco"
}), css && __jsx("link", {
  rel: "stylesheet",
  href: `${css}`
}), image ? __jsx("meta", {
  property: "og:image",
  content: `${image}`
}) : __jsx("meta", {
  property: "og:image",
  content: "https://www.propernoun.co/static/images/proper-noun-social.png"
}), image && __jsx("meta", {
  name: "twitter:image",
  content: `${image}`
}), canonical && __jsx("link", {
  rel: "canonical",
  href: `${canonical}`
}), js && __jsx("script", {
  type: "text/javascript",
  src: `${js}`
}));

/***/ }),

/***/ "IGqs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_TYPE; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

/* query getCategories($searchText: String, $offset: Int) {
  categories(searchText: $searchText, offset: $offset) {
{limit, offset, searchText}: ICommonPaginationArgs,
 */

const GET_TYPE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query Types {
    types {
      totalCount
        items{
          id
          name
          slug
          image
          icon
          home_title
          home_subtitle
          meta_title
          meta_keyword
          meta_description
        }
    }
  }
`;

/***/ }),

/***/ "IrP5":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "KclG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrowPrev; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ArrowPrev = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: width,
    height: height
  }, __jsx("path", {
    d: "M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z",
    fill: color,
    stroke: color
  }));
};

/***/ }),

/***/ "KwCx":
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "OT+S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_CATEGORIES; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GET_CATEGORIES = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
query GetCategories(
  $type: String
){
	shopCategories(
    type: $type
  ) {
    items {
        id
        parent_id
        name
        slug
        banner
        icon
        children {
          id
          name
          slug
          banner
          icon
        }
      }
      totalCount
      hasMore
    }
  }
`;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "PQXp":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/books-f5200ba7535257ce70a563fc9ff56f35.png";

/***/ }),

/***/ "R4SK":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/grocery-f1565ac25de02b9295dccc2da13004ab.png";

/***/ }),

/***/ "W1nP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADMIN_IMAGE_HOST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHOP_IMAGE_HOST; });
const ADMIN_IMAGE_HOST = process.env.REACT_APP_IMAGE_URL;
const SHOP_IMAGE_HOST = "http://52.67.194.237/";

/***/ }),

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "bM43":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initializeApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useApollo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YvTO");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);
// import { useMemo } from 'react';
// import {
//   ApolloClient,
//   HttpLink,
//   ApolloLink,
//   InMemoryCache,
//   concat,
// } from '@apollo/client';
// let apolloClient;
// const httpLink = new HttpLink({
//   uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT,
//   onError: ({ networkError, graphQLErrors }) => {
//     console.log('graphQLErrors', graphQLErrors);
//     console.log('networkError', networkError);
//   },
// });
// const authMiddleware = new ApolloLink((operation, forward) => {
//   // add the authorization to the headers
//   let token = null;
//   if (typeof window !== 'undefined') {
//     token = localStorage.getItem('access_token');
//   }
//   operation.setContext({
//     headers: {
//       'x-access-token': token ? token : '',
//     },
//   });
//   return forward(operation);
// });
// const client = new ApolloClient({
//   link: authMiddleware.concat(httpLink),
//   cache: new InMemoryCache(),
// });
// console.log(process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT);
// function createApolloClient() {
//   let token = null;
//   if (typeof window !== 'undefined') {
//     token = localStorage.getItem('access_token');
//   }
//   return new ApolloClient({
//     ssrMode: typeof window === 'undefined',
//     link: new HttpLink({
//       uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT, // Server URL (must be absolute)
//       credentials: 'same-origin', // Additional fetch() options like `credentials`
//       headers: {
//         'x-access-token': token ? token : '',
//       }, // Additional fetch() options like `headers`
//       onError: ({ networkError, graphQLErrors }) => {
//         console.log('graphQLErrors', graphQLErrors);
//         console.log('networkError', networkError);
//       },
//     }),
//     cache: new InMemoryCache(),
//   });
// }
// export function initializeApollo(initialState = null) {
//   const _apolloClient = apolloClient ?? client;
//   // If your page has Next.js data fetching methods that use Apollo Client, the initial state
//   // gets hydrated here
//   if (initialState) {
//     _apolloClient.cache.restore(initialState);
//   }
//   // For SSG and SSR always create a new Apollo Client
//   if (typeof window === 'undefined') return _apolloClient;
//   // Create the Apollo Client once in the client
//   if (!apolloClient) apolloClient = _apolloClient;
//   return _apolloClient;
// }
// export function useApollo(initialState) {
//   const store = useMemo(() => initializeApollo(initialState), [initialState]);
//   return store;
// }



const omitDeep = __webpack_require__("+M2j");

const httpLink = new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["HttpLink"]({
  uri: "http://52.67.194.237/api",
  // Server URL (must be absolute)
  credentials: 'same-origin',
  // Additional fetch() options like `credentials`
  onError: ({
    networkError,
    graphQLErrors
  }) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
});
const authLink = new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"]((operation, forward) => {
  // Retrieve the authorization token from local storage.
  let token = null;

  if (false) {} // Use the setContext method to set the HTTP headers.


  operation.setContext({
    headers: {
      'x-access-token': token ? token : ''
    }
  }); // Call the next link in the middleware chain.
  // return forward(operation);

  if (operation.variables) {
    operation.variables = omitDeep(operation.variables, '__typename');
  }

  return forward(operation).map(data => {
    return data;
  });
});
let apolloClient;

function createApolloClient() {
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
    ssrMode: true,
    link: authLink.concat(httpLink),
    cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]()
  });
}

function initializeApollo(initialState = null) {
  var _apolloClient2;

  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(); // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here


  if (initialState) {
    _apolloClient.cache.restore(initialState);
  } // For SSG and SSR always create a new Apollo Client


  if (true) return _apolloClient; // Create the Apollo Client once in the client

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}
function useApollo(initialState) {
  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => initializeApollo(initialState), [initialState]);
  return store;
}

/***/ }),

/***/ "bYH+":
/***/ (function(module, exports) {

module.exports = require("react-image");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hzYQ":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bags-ac02ab6ebb5355d936d3577015f180c8.png";

/***/ }),

/***/ "isz7":
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "jbEd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InjectRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ExBD");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import { themeGet } from '@styled-system/theme-get';
// const TIMEOUT = 400;
// export const themed = (key) => (props) =>
//   css(get(props.theme, `customs.${key}`))(props.theme);
// export const themeGet = (path, fallback = null) => (props) =>
//   get(props.theme, path, fallback);

const InjectRTL = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "globalstyle__InjectRTL",
  componentId: "wru6fi-0"
})(["", ""], ({
  lang
}) => (lang === 'ar' || lang === 'he') && `
    font-family: 'Cairo', sans-serif;
    `); // const heading = {
//   color: 'text',
//   fontFamily: 'heading',
//   lineHeight: 'heading',
//   fontWeight: 'heading',
// };
// export const GlobalStyle = createGlobalStyle`
//   html {
//     box-sizing: border-box;
//   }
//   *, *:before, *:after {
//     box-sizing: inherit;
//   }
//   body{
//     margin: 0;
//     font-family: ${themeGet('fontFamily.0', 'sans-serif')};
//   }
//   h1,h2,h3,h4,h5,h6  {
//     font-family: ${themeGet('fontFamily.1', 'sans-serif')};
//     margin: 0;
//   }
//   p,a,span,button,li,div  {
//     font-family: ${themeGet('fontFamily.0', 'sans-serif')};
//     margin: 0;
//   }
//   ul{
//     margin: 0;
//     padding: 0;
//   }
//   li{
//     list-style: none;
//   }
//   a{
//     text-decoration: none;
//   }
//   .quick-view-overlay{
//     background-color: rgba(0,0,0,.5)
//   }
//   .add-address-modal,
//   .add-contact-modal{
//     box-shadow: 0 10px 40px rgba(0,0,0,0.16);
//     border-radius: 3px !important;
//     .innerRndComponent{
//       width: 100%;
//       padding: 30px;
//       height: auto;
//       background-color: #f7f8f9;
//       border: 0;
//       box-sizing: border-box;
//     }
//   }
//   .search-modal-mobile{
//     transform: none!important;
//     max-width: none!important;
//     max-height: none!important;
//     top: 0!important;
//     left: 0!important;
//     background: transparent!important;;
//     border-radius: 0!important;
//   }
//   .reuseModalCloseBtn{
//     right: 10px!important;
//     background-color: #ffffff!important;
//     color: #222222!important;
//     border-radius: 15px!important;
//     padding: 0 9px!important;
//     box-shadow: 0 2px 8px rgba(0,0,0,0.4);
//   }
//   .page-transition-enter {
//     opacity: 0;
//     transform: translate3d(0, 20px, 0);
//   }
//   .page-transition-enter-active {
//     opacity: 1;
//     transform: translate3d(0, 0, 0);
//     transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
//   }
//   .page-transition-exit {
//     opacity: 1;
//   }
//   .page-transition-exit-active {
//     opacity: 0;
//     transition: opacity ${TIMEOUT}ms;
//   }
//   .loading-indicator-appear,
//   .loading-indicator-enter {
//     opacity: 0;
//   }
//   .loading-indicator-appear-active,
//   .loading-indicator-enter-active {
//     opacity: 1;
//     transition: opacity ${TIMEOUT}ms;
//   }
//   .image-item{
//     padding: 0 15px;
//   }
//   @media (max-width: 1199px) and (min-width: 991px) {
//     .image-item{
//       padding-left: 10px;
//       padding-right: 10px;
//     }
//   }
//   @media (max-width: 768px) {
//     .image-item{
//       padding-left: 7.5px;
//       padding-right: 7.5px;
//     }
//   }
//   .rc-table-fixed-header .rc-table-scroll .rc-table-header{
//     margin-bottom: 0 !important;
//     padding-bottom: 0 !important;
//     th {
//       padding: 8px 20px;
//       }
//   }
//   .drawer-content-wrapper{
//     *:focus {
//       outline: none;
//     }
//   }
//   .rc-table-content{
//     border: 0;
//   }
// `;

const GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(({
  theme
}) => _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default()(_objectSpread({
  '*, *::before, *::after': {
    boxSizing: 'border-box'
  },
  body: {
    margin: 0,
    fontFamily: 'body',
    fontWeight: 'regular',
    fontSize: 'base',
    lineHeight: '1.5',
    backgroundColor: 'white',
    transition: Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["get"])(theme, 'customs.transition')
  },
  h1: {
    fontFamily: 'heading',
    fontSize: '5xl',
    margin: 0
  },
  h2: {
    fontFamily: 'heading',
    fontSize: '3xl',
    margin: 0
  },
  h3: {
    fontFamily: 'heading',
    fontSize: '2xl',
    margin: 0
  },
  h4: {
    fontFamily: 'heading',
    fontSize: 'xl',
    margin: 0
  },
  h5: {
    fontFamily: 'heading',
    fontSize: 'md',
    margin: 0
  },
  h6: {
    fontFamily: 'heading',
    fontSize: 'base',
    margin: 0
  },
  'p,span,button,li,div': {
    fontFamily: 'body',
    margin: 0
  },
  a: {
    fontFamily: 'body',
    textDecoration: 'none'
  },
  ul: {
    margin: 0,
    padding: 0
  },
  li: {
    listStyle: 'none'
  },
  pre: {
    fontFamily: 'monospace',
    overflowX: 'auto',
    code: {
      color: 'inherit'
    }
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 'inherit'
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0
  },
  th: {
    textAlign: 'left',
    borderBottomStyle: 'solid'
  },
  td: {
    textAlign: 'left',
    borderBottomStyle: 'solid'
  },
  img: {
    maxWidth: '100%'
  },
  '.quick-view-overlay': {
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  '.add-address-modal,.add-contact-modal,.add-time-schedule-modal': {
    boxShadow: '0 10px 40px rgba(0,0,0,0.16)',
    borderRadius: '3px !important',
    '.innerRndComponent': {
      width: '100%',
      padding: '30px',
      height: 'auto',
      backgroundColor: '#f7f8f9',
      border: 0,
      boxSizing: 'border-box'
    }
  },
  '.add-time-schedule-modal': {
    boxShadow: '0 10px 40px rgba(0,0,0,0.16)',
    borderRadius: '3px !important',
    '.innerRndComponent': {
      width: '100%',
      padding: '10px',
      height: 'auto',
      backgroundColor: '#f7f8f9',
      border: 0,
      boxSizing: 'border-box'
    }
  },
  '.search-modal-mobile': {
    transform: 'none!important',
    maxWidth: 'none!important',
    maxHeight: 'none!important',
    top: '0!important',
    left: '0!important',
    background: 'transparent!important',
    borderRadius: '0!important'
  },
  '.reuseModalCloseBtn': {
    right: '10px!important',
    backgroundColor: '#ffffff!important',
    color: '#222222!important',
    borderRadius: '15px!important',
    padding: '0 9px!important',
    boxShadow: '0 2px 8px rgba(0,0,0,0.4)'
  },
  '.image-item': {
    padding: '0 15px'
  },
  '@media (max-width: 1199px) and (min-width: 991px)': {
    '.image-item': {
      paddingLeft: '10px',
      paddingRight: '10px'
    }
  },
  '@media (max-width: 768px)': {
    '.image-item': {
      paddingLeft: '7.5px',
      paddingRight: '7.5px'
    }
  },
  '.rc-table-fixed-header .rc-table-scroll .rc-table-header': {
    marginBottom: '0 !important',
    paddingBottom: '0 !important',
    th: {
      padding: '8px 20px'
    }
  },
  '.drawer-content-wrapper': {
    '*:focus': {
      outline: 'none'
    }
  },
  '.rc-table-content': {
    border: 0
  }
}, theme.globals)));

/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "ocwR":
/***/ (function(module, exports) {

module.exports = require("resize-observer-polyfill");

/***/ }),

/***/ "qC9r":
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "qbum":
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ }),

/***/ "quMH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorMessage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ErrorMessage({
  message
}) {
  return __jsx(StyledAside, null, message);
}
const StyledAside = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.aside.withConfig({
  displayName: "error-message__StyledAside",
  componentId: "spyukh-0"
})({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  padding: '1.5rem',
  fontSize: '15px',
  color: '000',
  backgroundColor: '#fff'
});

/***/ }),

/***/ "roL4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "react-multi-carousel"
var external_react_multi_carousel_ = __webpack_require__("99J/");
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// EXTERNAL MODULE: ./src/assets/icons/ArrowNext.tsx
var ArrowNext = __webpack_require__("0zej");

// EXTERNAL MODULE: ./src/assets/icons/ArrowPrev.tsx
var ArrowPrev = __webpack_require__("KclG");

// EXTERNAL MODULE: ./src/contexts/language/language.provider.tsx + 2 modules
var language_provider = __webpack_require__("uiyz");

// EXTERNAL MODULE: ./src/utils/images-path.ts
var images_path = __webpack_require__("W1nP");

// CONCATENATED MODULE: ./src/components/carousel/homecards-carousel.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const ButtonPrev = external_styled_components_default()('button').withConfig({
  displayName: "homecards-carousel__ButtonPrev",
  componentId: "sc-84fpr-0"
})(["height:40px;width:40px;display:flex;align-items:center;justify-content:center;background-color:", ";color:", ";padding:0;border-radius:20px;box-shadow:", ";border:0;outline:0;cursor:pointer;position:absolute;top:50%;left:40px;margin-top:-20px;z-index:99;"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'), Object(theme_get_["themeGet"])('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)'));
const ButtonNext = external_styled_components_default()('button').withConfig({
  displayName: "homecards-carousel__ButtonNext",
  componentId: "sc-84fpr-1"
})(["height:40px;width:40px;display:flex;align-items:center;justify-content:center;background-color:#ffffff;color:", ";padding:0;border-radius:20px;box-shadow:", ";border:0;outline:0;cursor:pointer;position:absolute;top:50%;right:40px;margin-top:-20px;z-index:99;"], Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'), Object(theme_get_["themeGet"])('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)'));
const ButtonGroupWrapper = external_styled_components_default()('div').withConfig({
  displayName: "homecards-carousel__ButtonGroupWrapper",
  componentId: "sc-84fpr-2"
})([""]);

const PrevButton = ({
  onClick,
  children
}) => {
  return __jsx(ButtonPrev, {
    onClick: e => {
      e.preventDefault();
      onClick();
    },
    className: "prevButton"
  }, children);
};

const NextButton = ({
  onClick,
  children
}) => {
  return __jsx(ButtonNext, {
    onClick: e => {
      e.preventDefault();
      onClick();
    },
    className: "nextButton"
  }, children);
};

const ButtonGroup = ({
  next,
  previous
}) => {
  const {
    isRtl
  } = Object(language_provider["b" /* useLocale */])();
  return __jsx(ButtonGroupWrapper, null, isRtl ? __jsx(external_react_default.a.Fragment, null, __jsx(NextButton, {
    onClick: () => next(),
    className: "rtl"
  }, __jsx(ArrowPrev["a" /* ArrowPrev */], null)), __jsx(PrevButton, {
    onClick: () => previous()
  }, __jsx(ArrowNext["a" /* ArrowNext */], null))) : __jsx(external_react_default.a.Fragment, null, __jsx(PrevButton, {
    onClick: () => previous()
  }, __jsx(ArrowPrev["a" /* ArrowPrev */], null)), __jsx(NextButton, {
    onClick: () => next()
  }, __jsx(ArrowNext["a" /* ArrowNext */], null))));
};

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1
  }
};
function HomeCardsCarousel(_ref) {
  let {
    data,
    deviceType: {
      mobile,
      tablet,
      desktop
    },
    component,
    autoPlay = false,
    infinite = true,
    customLeftArrow,
    customRightArrow,
    itemClass,
    isRtl
  } = _ref,
      props = _objectWithoutProperties(_ref, ["data", "deviceType", "component", "autoPlay", "infinite", "customLeftArrow", "customRightArrow", "itemClass", "isRtl"]);

  return __jsx("div", {
    dir: "ltr"
  }, __jsx(external_react_multi_carousel_default.a, _extends({
    arrows: false,
    responsive: responsive,
    showDots: false,
    slidesToSlide: 1,
    infinite: infinite,
    containerClass: "container-with-dots",
    itemClass: itemClass,
    autoPlay: autoPlay,
    autoPlaySpeed: 3000,
    renderButtonGroupOutside: true,
    additionalTransfrom: 0,
    customButtonGroup: __jsx(ButtonGroup, null)
  }, props), data.map((item, index) => {
    if (component) return component(item);
    return __jsx("div", {
      style: {
        padding: '0 15px',
        overflow: 'hidden'
      },
      key: index
    }, __jsx("a", {
      href: item.url,
      target: "_blank",
      style: {
        display: 'flex',
        cursor: 'pointer'
      }
    }, __jsx("img", {
      key: item.id,
      src: images_path["a" /* SHOP_IMAGE_HOST */] + item.image,
      alt: item.name,
      style: {
        width: '100%',
        height: '100%',
        display: 'block',
        position: 'relative'
      }
    })));
  })));
}
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: external "@styled-system/css"
var css_ = __webpack_require__("ExBD");
var css_default = /*#__PURE__*/__webpack_require__.n(css_);

// CONCATENATED MODULE: ./src/components/banner/banner.style.tsx



const Box = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__Box",
  componentId: "sc-1ii4we-0"
})(css_default()({
  height: [200, '100vh']
}), {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  position: 'relative'
});
const Image = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__Image",
  componentId: "sc-1ii4we-1"
})(css_default()({
  backgroundSize: ['cover']
}), {
  width: '100%',
  height: '100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: 0,
  left: 0,
  '@media (max-width: 990px) ': {// backgroundPosition: 'unset',
  }
}, external_styled_system_["background"]);
const Content = external_styled_components_default.a.div.withConfig({
  displayName: "bannerstyle__Content",
  componentId: "sc-1ii4we-2"
})(css_default()({
  px: ['15px'],
  pt: [40, 0]
}), {
  position: 'relative',
  zIndex: 2
});
const Title = external_styled_components_default.a.h2.withConfig({
  displayName: "bannerstyle__Title",
  componentId: "sc-1ii4we-3"
})(css_default()({
  fontSize: [17, '2xl', 38],
  color: 'text.bold',
  fontWeight: 'bold',
  backgroundColor: '#89b4f787',
  '@media (max-width: 990px) ': {
    fontSize: [12, '2xl', 38]
  }
}), {
  marginBottom: 15,
  textAlign: 'center'
});
const Description = external_styled_components_default.a.p.withConfig({
  displayName: "bannerstyle__Description",
  componentId: "sc-1ii4we-4"
})(css_default()({
  fontWeight: 'bold',
  backgroundColor: '#89b4f787',
  fontSize: ['base', 'md'],
  color: 'text.bold',
  marginBottom: [null, 60],
  display: ['none', 'block'],
  lineHeight: 'body'
}), {
  textAlign: 'center'
});
// EXTERNAL MODULE: external "react-waypoint"
var external_react_waypoint_ = __webpack_require__("/twb");

// EXTERNAL MODULE: ./src/contexts/app/app.provider.ts + 1 modules
var app_provider = __webpack_require__("xZKy");

// CONCATENATED MODULE: ./src/components/banner/banner.tsx
var banner_jsx = external_react_default.a.createElement;





const Banner = ({
  imageUrl,
  intlTitleId,
  intlDescriptionId
}) => {
  const dispatch = Object(app_provider["b" /* useAppDispatch */])();
  const setSticky = Object(external_react_["useCallback"])(() => dispatch({
    type: 'SET_STICKY'
  }), [dispatch]);
  const removeSticky = Object(external_react_["useCallback"])(() => dispatch({
    type: 'REMOVE_STICKY'
  }), [dispatch]);

  const onWaypointPositionChange = ({
    currentPosition
  }) => {
    if (!currentPosition || currentPosition === 'above') {
      setSticky();
    }
  };

  return banner_jsx(Box, null, banner_jsx(Image, {
    backgroundImage: `url(${imageUrl})`
  }), banner_jsx(Content, null, banner_jsx(Title, null, banner_jsx(external_react_intl_["FormattedMessage"]
  /* istanbul ignore next line */
  , {
    id: "set your Title through Language File in the Admin UI",
    defaultMessage: intlTitleId,
    values: {
      minute: 90
    }
  })), banner_jsx(Description, null, banner_jsx(external_react_intl_["FormattedMessage"]
  /* istanbul ignore next line */
  , {
    id: "set your description through Language File in the Admin UI",
    defaultMessage: intlDescriptionId
  })), banner_jsx(external_react_waypoint_["Waypoint"], {
    onEnter: removeSticky,
    onLeave: setSticky,
    onPositionChange: onWaypointPositionChange
  })));
};
// CONCATENATED MODULE: ./src/assets/styles/pages.style.tsx


const MobileCarouselDropdown = external_styled_components_default.a.div.withConfig({
  displayName: "pagesstyle__MobileCarouselDropdown",
  componentId: "sc-1ql4zqj-0"
})(["@media (min-width:990px){display:none;}"]);
const OfferPageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "pagesstyle__OfferPageWrapper",
  componentId: "sc-1ql4zqj-1"
})(["width:100%;height:auto;min-height:100vh;display:flex;flex-direction:column;background-color:", ";position:relative;padding:100px 60px 60px;justify-content:space-between;@media (max-width:768px){padding:100px 30px 60px;}@media (max-width:1199px){padding:100px 30px 60px;}"], Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'));
const HeaderSection = external_styled_components_default.a.div.withConfig({
  displayName: "pagesstyle__HeaderSection",
  componentId: "sc-1ql4zqj-2"
})(["display:flex;flex-wrap:wrap;width:100%;min-height:400px;background-color:", ";"], Object(theme_get_["themeGet"])('colors.gray.300', '#f4f4f4'));
const MainContentArea = external_styled_components_default.a.main.withConfig({
  displayName: "pagesstyle__MainContentArea",
  componentId: "sc-1ql4zqj-3"
})(["width:100%;display:flex;flex-wrap:wrap;background-color:", ";padding-right:0;transition:padding-right 0.35s ease-in-out;"], Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'));
const SidebarSection = external_styled_components_default.a.div.withConfig({
  displayName: "pagesstyle__SidebarSection",
  componentId: "sc-1ql4zqj-4"
})(["background-color:", ";width:280px;@media (max-width:990px){display:none;}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
const ContentSection = external_styled_components_default.a.div.withConfig({
  displayName: "pagesstyle__ContentSection",
  componentId: "sc-1ql4zqj-5"
})(["width:calc(100% - 280px);height:auto;min-height:100vh;padding:30px 30px 50px;@media (max-width:768px){padding:30px 7.5px 100px;}@media (max-width:1199px) and (min-width:991px){padding:15px 30px 50px;}@media (max-width:1367px) and (min-width:1200px){padding:15px 30px 50px;}@media (max-width:990px){width:100%;}@media (max-width:768px){padding-top:15px;min-height:auto;}.offer-slider{padding:0 0 30px 30px;}"]);
const OfferSection = external_styled_components_default.a.div.withConfig({
  displayName: "pagesstyle__OfferSection",
  componentId: "sc-1ql4zqj-6"
})(["width:100%;display:block;padding:60px;background-color:", ";position:relative;border-bottom:1px solid ", ";@media (max-width:1199px) and (min-width:991px){padding:20px 15px;.prevButton{left:0;}.nextButton{right:0;}}@media (max-width:990px){padding:15px;.prevButton{left:5px;}.nextButton{right:5px;}}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'));
const Heading = external_styled_components_default.a.h2.withConfig({
  displayName: "pagesstyle__Heading",
  componentId: "sc-1ql4zqj-7"
})(["font-size:", "px;font-weight:", ";color:", ";padding:0px 20px 20px;margin:50px 10px 20px;border-bottom:2px solid ", ";width:auto;display:inline-block;"], Object(theme_get_["themeGet"])('fontSizes.xl', '24'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const ProductsRow = external_styled_components_default.a.div.withConfig({
  displayName: "pagesstyle__ProductsRow",
  componentId: "sc-1ql4zqj-8"
})(["display:flex;flex-wrap:wrap;margin-top:30px;background-color:", ";@media (max-width:768px){margin-left:-7.5px;margin-right:-7.5px;margin-top:15px;}"], Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'));
const ProductsCol = external_styled_components_default.a.div.withConfig({
  displayName: "pagesstyle__ProductsCol",
  componentId: "sc-1ql4zqj-9"
})(["flex:0 0 20%;max-width:20%;padding-left:15px;padding-right:15px;margin-bottom:30px;@media (max-width:1650px){flex:0 0 25%;max-width:25%;}@media (max-width:1300px){flex:0 0 33.3333333%;max-width:33.3333333%;}@media (max-width:1199px) and (min-width:900px){padding-left:10px;padding-right:10px;margin-bottom:20px;}@media (max-width:899px) and (min-width:769px){flex:0 0 50%;max-width:50%;}@media (max-width:768px){padding-left:7.5px;padding-right:7.5px;margin-bottom:15px;flex:0 0 50%;max-width:50%;}@media (max-width:490px){flex:0 0 100%;max-width:100%;}"]);

// EXTERNAL MODULE: ./src/assets/images/banner/grocery.png
var grocery = __webpack_require__("R4SK");
var grocery_default = /*#__PURE__*/__webpack_require__.n(grocery);

// EXTERNAL MODULE: ./src/assets/images/banner/makeup.png
var makeup = __webpack_require__("AaBP");
var makeup_default = /*#__PURE__*/__webpack_require__.n(makeup);

// EXTERNAL MODULE: ./src/assets/images/banner/bags.png
var bags = __webpack_require__("hzYQ");
var bags_default = /*#__PURE__*/__webpack_require__.n(bags);

// EXTERNAL MODULE: ./src/assets/images/banner/cloths.png
var cloths = __webpack_require__("BMAw");
var cloths_default = /*#__PURE__*/__webpack_require__.n(cloths);

// EXTERNAL MODULE: ./src/assets/images/banner/books.png
var books = __webpack_require__("PQXp");
var books_default = /*#__PURE__*/__webpack_require__.n(books);

// EXTERNAL MODULE: ./src/assets/images/banner/furniture.png
var furniture = __webpack_require__("Ej6a");
var furniture_default = /*#__PURE__*/__webpack_require__.n(furniture);

// EXTERNAL MODULE: ./src/assets/images/banner/medicine.png
var medicine = __webpack_require__("tfq8");
var medicine_default = /*#__PURE__*/__webpack_require__.n(medicine);

// CONCATENATED MODULE: ./src/site-settings/site-pages.ts







const sitePages = {
  grocery: {
    page_title: 'Grocery - Ditto',
    page_description: 'Grocery Details',
    banner_title_id: 'groceriesTitle',
    banner_description_id: 'groceriesSubTitle',
    banner_image_url: grocery_default.a
  },
  makeup: {
    page_title: 'Makeup - Ditto',
    page_description: 'Makeup Details',
    banner_title_id: 'makeupTitle',
    banner_description_id: 'makeupSubTitle',
    banner_image_url: makeup_default.a
  },
  bags: {
    page_title: 'Bags - Ditto',
    page_description: 'Bags Details',
    banner_title_id: 'bagsTitle',
    banner_description_id: 'bagsSubTitle',
    banner_image_url: bags_default.a
  },
  clothing: {
    page_title: 'Clothing - Ditto',
    page_description: 'Clothing Details',
    banner_title_id: 'womenClothsTitle',
    banner_description_id: 'womenClothsSubTitle',
    banner_image_url: cloths_default.a
  },
  furniture: {
    page_title: 'Furniture - Ditto',
    page_description: 'Furniture Details',
    banner_title_id: 'furnitureTitle',
    banner_description_id: 'furnitureSubTitle',
    banner_image_url: furniture_default.a
  },
  book: {
    page_title: 'Book - Ditto',
    page_description: 'Book Details',
    banner_title_id: 'booksTitle',
    banner_description_id: 'booksSubTitle',
    banner_image_url: books_default.a
  },
  medicine: {
    page_title: 'Medicine - Ditto',
    page_description: 'Medicine Details',
    banner_title_id: 'medicineTitle',
    banner_description_id: 'medicineSubTitle',
    banner_image_url: medicine_default.a
  }
};
// EXTERNAL MODULE: ./src/components/seo.tsx
var seo = __webpack_require__("H8eV");

// CONCATENATED MODULE: ./src/utils/use-is-client.ts
const isClient = !!( false && false);
const useIsClient = () => isClient;
// CONCATENATED MODULE: ./src/utils/use-ref-scroll.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



let ScrollDirections;

(function (ScrollDirections) {
  ScrollDirections[ScrollDirections["Horizontal"] = 0] = "Horizontal";
  ScrollDirections[ScrollDirections["Vertical"] = 1] = "Vertical";
})(ScrollDirections || (ScrollDirections = {}));

function scrollToPercent(el, {
  container,
  percentOfElement,
  offsetPX,
  direction,
  percentOfContainer
}) {
  const rect = el.current.getClientRects()[0];
  const isVertical = direction === ScrollDirections.Vertical;
  const refSize = isVertical ? rect.height : rect.width;
  const elemScroll = isVertical ? rect.y : rect.x;
  const scrollSize = container === window ? isVertical ? container.innerHeight : container.innerWidth : isVertical ? container.scrollHeight : container.scrollWidth;
  let addOffset = refSize * percentOfElement / 100;

  if (offsetPX) {
    addOffset += offsetPX;
  }

  const containerScroll = isVertical ? container.scrollY : container.scrollX;
  const newScroll = containerScroll + elemScroll + (scrollSize * percentOfContainer / 100 + addOffset);
  const scrollObj = isVertical ? {
    top: newScroll
  } : {
    left: newScroll
  };
  window.scrollTo(_objectSpread(_objectSpread({}, scrollObj), {}, {
    behavior: 'smooth'
  }));
}

function useRefScroll({
  percentOfElement = 50,
  offsetPX = 0,
  onMount = false,
  container = isClient ? window : null,
  percentOfContainer = 50,
  direction = ScrollDirections.Vertical
}) {
  const elRef = Object(external_react_["useRef"])(null);
  const scroll = Object(external_react_["useCallback"])(() => {
    if (elRef.current) {
      scrollToPercent(elRef, {
        percentOfElement,
        offsetPX,
        container,
        percentOfContainer,
        direction
      });
    }
  }, [elRef.current]);
  Object(external_react_["useEffect"])(() => {
    if (onMount) {
      scroll();
    }
  }, []);
  return {
    elRef,
    scroll
  };
} // function MyComponent() {
//   // using the hook without arguments will scroll the element to the center of the
//   // window's viewport
//   // alias elRef to myDiv for easier usage if having multiple elements
//   // in the same component
//   const { elRef: myDiv, scroll } = useRefScroller();
//   return (
//     <div>
//       <button onClick={scroll}>Scroll</button>
//       <div ref={myDiv}>
//         `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur, massa vitae consectetur egestas, justo magna
//         facilisis arcu, non accumsan lacus ipsum sit amet nisl.`
//       </div>
//     </div>
//   );
// }
// EXTERNAL MODULE: ./src/utils/apollo.js
var apollo = __webpack_require__("bM43");

// EXTERNAL MODULE: ./src/graphql/query/products.query.ts
var products_query = __webpack_require__("33lg");

// EXTERNAL MODULE: ./src/graphql/query/category.query.ts
var category_query = __webpack_require__("OT+S");

// EXTERNAL MODULE: ./src/graphql/query/type.query.ts
var type_query = __webpack_require__("IGqs");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./src/graphql/query/type.homecards.query.ts

const GET_TYPE_HOMECARDS = external_graphql_tag_default.a`
  query GetHomeCards($type: String!) {
      getHomeCards(type: $type) {
          id
          name
          url
          image
      }
  }
`;
// EXTERNAL MODULE: ./src/components/error-message/error-message.tsx
var error_message = __webpack_require__("quMH");

// CONCATENATED MODULE: ./src/pages/[type].tsx
var _type_jsx = external_react_default.a.createElement;







 // Static Data Import Here











const Sidebar = dynamic_default()(() => __webpack_require__.e(/* import() */ 19).then(__webpack_require__.bind(null, "8XX/")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("8XX/")],
    modules: ['layouts/sidebar/sidebar']
  }
});
const Products = dynamic_default()(() => __webpack_require__.e(/* import() */ 27).then(__webpack_require__.bind(null, "SZ6D")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("SZ6D")],
    modules: ['components/product-grid/product-list/product-list']
  }
});
const CartPopUp = dynamic_default()(() => __webpack_require__.e(/* import() */ 24).then(__webpack_require__.bind(null, "gZAk")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("gZAk")],
    modules: ['features/carts/cart-popup']
  }
});

const CategoryPage = ({
  deviceType
}) => {
  const {
    query
  } = Object(router_["useRouter"])();
  const router = Object(router_["useRouter"])();
  const {
    data: categoriesData,
    loading: categoriesLoading
  } = Object(react_hooks_["useQuery"])(category_query["a" /* GET_CATEGORIES */], {
    variables: {
      type: router.query.type
    }
  });
  const {
    elRef: targetRef,
    scroll
  } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -110
  });
  external_react_default.a.useEffect(() => {
    if (query.text || query.category) {
      scroll();
    }
  }, [query.text, query.category]);
  const PAGE_TYPE = query.type;
  const page = sitePages[PAGE_TYPE];
  const {
    data: homeCardsData,
    loading: homeCardsLoading,
    error: homeCardsError
  } = Object(react_hooks_["useQuery"])(GET_TYPE_HOMECARDS, {
    variables: {
      type: PAGE_TYPE
    }
  });
  const {
    data,
    loading,
    error
  } = Object(react_hooks_["useQuery"])(type_query["a" /* GET_TYPE */], {
    variables: {
      searchText: PAGE_TYPE
    }
  });

  if (loading || homeCardsLoading) {
    return _type_jsx(error_message["default"], {
      message: 'Cargando...'
    });
  }

  ;

  if (error || homeCardsError) {
    return error ? _type_jsx(error_message["default"], {
      message: error.message
    }) : _type_jsx(error_message["default"], {
      message: homeCardsError.message
    });
  }

  ;
  const {
    home_title,
    home_subtitle,
    image
  } = data.types.items.find(item => item.slug === router.query.type);
  return _type_jsx(external_react_default.a.Fragment, null, _type_jsx(seo["a" /* SEO */], {
    title: home_title,
    description: home_subtitle
  }), _type_jsx(reuse_modal_["Modal"], null, _type_jsx(Banner, {
    intlTitleId: home_title,
    intlDescriptionId: home_subtitle,
    imageUrl: images_path["a" /* SHOP_IMAGE_HOST */] + image
  }), _type_jsx(MobileCarouselDropdown, null, _type_jsx(Sidebar, {
    type: PAGE_TYPE,
    deviceType: deviceType
  })), homeCardsData.getHomeCards.length > 0 ? _type_jsx(OfferSection, null, _type_jsx("div", {
    style: {
      margin: '0 -10px'
    }
  }, _type_jsx(HomeCardsCarousel, {
    deviceType: deviceType,
    data: homeCardsData.getHomeCards
  }))) : _type_jsx("div", null), _type_jsx(MainContentArea, null, _type_jsx(SidebarSection, null, _type_jsx(Sidebar, {
    type: PAGE_TYPE,
    deviceType: deviceType
  })), _type_jsx(ContentSection, null, _type_jsx("div", {
    ref: targetRef
  }, _type_jsx(Products, {
    type: PAGE_TYPE,
    deviceType: deviceType,
    fetchLimit: 25
  })))), _type_jsx(CartPopUp, {
    deviceType: deviceType
  })));
};

const getStaticProps = async ({
  params
}) => {
  const apolloClient = Object(apollo["a" /* initializeApollo */])();
  await apolloClient.query({
    query: products_query["a" /* GET_PRODUCTS */],
    variables: {
      type: params.type,
      offset: 0,
      limit: 20
    }
  });
  await apolloClient.query({
    query: category_query["a" /* GET_CATEGORIES */],
    variables: {
      type: params.type
    }
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    unstable_revalidate: 1
  };
};
async function getStaticPaths() {
  const apolloClient = Object(apollo["a" /* initializeApollo */])();
  const res = await apolloClient.query({
    query: type_query["a" /* GET_TYPE */],
    variables: {
      searchText: ''
    }
  });
  const paths = res.data.types.items.map(item => {
    return {
      params: {
        type: item.slug
      }
    };
  });
  return {
    paths,
    fallback: false
  };
}
/* harmony default export */ var _type_ = __webpack_exports__["default"] = (CategoryPage);

/***/ }),

/***/ "sDBz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appReducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  searchTerm: '',
  isSticky: false,
  isSidebarSticky: true,
  isDrawerOpen: false
};
function appReducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return _objectSpread(_objectSpread({}, state), {}, {
        searchTerm: action.payload
      });

    case 'SET_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSticky: true
      });

    case 'REMOVE_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSticky: false
      });

    case 'SET_SIDEBAR_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSidebarSticky: true
      });

    case 'REMOVE_SIDEBAR_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSidebarSticky: false
      });

    case 'TOGGLE_DRAWER':
      return _objectSpread(_objectSpread({}, state), {}, {
        isDrawerOpen: !state.isDrawerOpen
      });

    default:
      {
        throw new Error(`Unsupported action type at App Reducer`);
      }
  }
}

/***/ }),

/***/ "tfq8":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/medicine-6e8ebb087020b94d3aeae59c5c51744f.png";

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "uiyz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ LanguageProvider; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useLocale; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./src/assets/styles/global.style.tsx
var global_style = __webpack_require__("jbEd");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./src/contexts/language/language.config.ts
const defaultLocale = 'en';
const locales = ['en', 'ar', 'es', 'de', 'zh', 'he'];
const rtlLocales = ['ar', 'he']; // need to customize later

const languageNames = {
  en: 'English',
  fr: 'français',
  pl: 'polski'
};
// CONCATENATED MODULE: ./src/contexts/language/language.utils.ts


function isLocale(tested) {
  return locales.some(locale => locale === tested);
}
function isRTL(tested) {
  return rtlLocales.some(locale => locale === tested);
}
function getInitialLocale() {
  // preference from the previous session
  const localSetting = external_js_cookie_default.a.get('locale');

  if (localSetting && isLocale(localSetting)) {
    return localSetting;
  } // the language setting of the browser
  // const [browserSetting] = navigator.language.split('-');
  // if (isLocale(browserSetting)) {
  //   return browserSetting;
  // }


  return defaultLocale;
}
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// CONCATENATED MODULE: ./src/contexts/language/language.provider.tsx
var __jsx = external_react_default.a.createElement;






const LanguageContext = external_react_default.a.createContext({});
const LanguageProvider = ({
  children,
  messages
}) => {
  const [locale, setLocale] = external_react_default.a.useState('es');

  const changeLanguage = newLocale => {
    setLocale(newLocale);
    document.documentElement.lang = newLocale;
    external_js_cookie_default.a.set('locale', newLocale);
  };

  external_react_default.a.useEffect(() => {
    const localSetting = external_js_cookie_default.a.get('locale');

    if (localSetting && isLocale(localSetting)) {
      document.documentElement.lang = localSetting;
      setLocale(localSetting);
    }
  }, [locale]);
  let isRtl = isRTL(locale);
  return __jsx(LanguageContext.Provider, {
    value: {
      locale,
      changeLanguage,
      isRtl
    }
  }, __jsx(external_react_intl_["IntlProvider"], {
    locale: locale,
    messages: messages[locale]
  }, __jsx(global_style["b" /* InjectRTL */], {
    lang: locale,
    dir: isRtl ? 'rtl' : 'ltr'
  }, __jsx(external_styled_components_["StyleSheetManager"], {
    stylisPlugins: []
  }, children))));
};
const useLocale = () => external_react_default.a.useContext(LanguageContext);

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "wiMN":
/***/ (function(module, exports) {

module.exports = require("localforage");

/***/ }),

/***/ "xZKy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ useAppState; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useAppDispatch; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ AppProvider; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/contexts/create-context.tsx
var __jsx = external_react_default.a.createElement;

function useCreateContext(reducer, initialState) {
  const defaultDispatch = () => initialState;

  const stateCtx = Object(external_react_["createContext"])(initialState);
  const dispatchCtx = Object(external_react_["createContext"])(defaultDispatch);

  function useStateCtx(property) {
    const state = Object(external_react_["useContext"])(stateCtx);
    return state[property]; // only one depth selector for comparison
  }

  function useDispatchCtx() {
    return Object(external_react_["useContext"])(dispatchCtx);
  }

  function Provider(props) {
    const [state, dispatch] = external_react_default.a.useReducer(reducer, initialState);
    return __jsx(dispatchCtx.Provider, {
      value: dispatch
    }, __jsx(stateCtx.Provider, {
      value: state
    }, props.children));
  }

  return [useStateCtx, useDispatchCtx, Provider];
} // const [useTextState, useTextDispatch, TextProvider] = useCreateContext(initialState, reducer);
// export const TextContext = ctx;
// export function App() {
//   return (
//     <TextProvider>
//       <Component />
//     </TextProvider>
//   )
// }
// export function Component() {
//   const state = useTextState('state')
//   const dispatch = useTextDispatch()
// const increment = useCallback(() => dispatch({ type: 'increment' }), [dispatch]);
//   return (
//     <div>
//       {state}
//       <button onClick={increment}>Toggle</button>
//     </div>
//   )
// }
// EXTERNAL MODULE: ./src/contexts/app/app.reducer.ts
var app_reducer = __webpack_require__("sDBz");

// CONCATENATED MODULE: ./src/contexts/app/app.provider.ts


const [app_provider_state, app_provider_dispatch, provider] = useCreateContext(app_reducer["a" /* appReducer */], app_reducer["b" /* initialState */]);
const useAppState = app_provider_state;
const useAppDispatch = app_provider_dispatch;
const AppProvider = provider;

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });