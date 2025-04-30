module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		15: 0
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
/******/ 			var chunk = require("../../../../" + ({}[chunkId]||chunkId) + "." + {"22":"55a6ded6116c944c1d59","23":"c4aa21b328889932e5ba","24":"60ab9c27b2026f7b8fca","26":"b18f29b3622a24423903","27":"94a1d5ffb22b9febcffb","29":"bd54f8dfb6fac5f5defe","32":"36ccca74222b0e0e5298"}[chunkId] + ".js");
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("20XJ");


/***/ }),

/***/ "20XJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: ./src/components/seo.tsx
var seo = __webpack_require__("H8eV");

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/assets/styles/product-single.style.tsx


const ProductSingleWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "product-singlestyle__ProductSingleWrapper",
  componentId: "sc-1xg2qws-0"
})(["padding:1px 0 60px 0;position:relative;background-color:", ";@media (min-width:1600px){padding-top:89px;}@media (max-width:990px){padding-top:60px;}"], Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'));
const ProductSingleContainer = external_styled_components_default.a.div.withConfig({
  displayName: "product-singlestyle__ProductSingleContainer",
  componentId: "sc-1xg2qws-1"
})(["width:100%;"]);
const RelatedItemContainer = external_styled_components_default.a.div.withConfig({
  displayName: "product-singlestyle__RelatedItemContainer",
  componentId: "sc-1xg2qws-2"
})(["display:flex;flex-wrap:wrap;margin-left:-15px;margin-right:-15px;@media (max-width:1199px) and (min-width:990px){margin-left:-10px;margin-right:-10px;}@media (max-width:768px){margin-left:-7.5px;margin-right:-7.5px;}"]);
const RealatedItemCol = external_styled_components_default.a.div.withConfig({
  displayName: "product-singlestyle__RealatedItemCol",
  componentId: "sc-1xg2qws-3"
})(["flex:0 0 20%;max-width:20%;padding-left:15px;padding-right:15px;margin-bottom:30px;@media (max-width:1500px){flex:0 0 20%;max-width:20%;}@media (max-width:1200px){flex:0 0 33.3333333%;max-width:33.3333333%;}@media (max-width:1199px) and (min-width:991px){padding-left:10px;padding-right:10px;}@media (max-width:768px){padding-left:7.5px;padding-right:7.5px;margin-bottom:15px;}@media (max-width:767px){flex:0 0 50%;max-width:50%;}"]);
const Loading = external_styled_components_default.a.div.withConfig({
  displayName: "product-singlestyle__Loading",
  componentId: "sc-1xg2qws-4"
})(["width:100%;padding:10px;display:flex;align-items:center;justify-content:center;font-size:calc(", " - 1px);color:#222222;"], Object(theme_get_["themeGet"])('fontSizes.base', '15px'));
/* harmony default export */ var product_single_style = (ProductSingleWrapper);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./src/graphql/query/product.query.ts

const GET_PRODUCT_WITH_RELATED_PRODUCTS = external_graphql_tag_default.a`
  query getProductWithRelatedProducts($slug: String!, $type: String!) {
    product(slug: $slug) {
      id
      title
      weight
      slug
      price
      type
      image
      categories {
        id
        slug
        title
      }
    }
    relatedProducts(slug: $slug, type: $type) {
      id
      title
      slug
      weight
      price
      type
      image
    }
  }
`;
const GET_RELATED_PRODUCTS = external_graphql_tag_default.a`
  query getRelatedProducts($type: String!, $slug: String!) {
    relatedProducts(type: $type, slug: $slug) {
      id
      title
      slug
      weight
      price
      type
      image
    }
  }
`;
const GET_PRODUCT = external_graphql_tag_default.a`
  query getProduct($slug: String!) {
    product(slug: $slug) {
      id
      title
      weight
      slug
      price
      packagePrice
      discountInPercent
      type
      gallery {
        url
      }
      image
      categories {
        id
        slug
        title
      }
    }
  }
`;
const GET_PRODUCT_DETAILS = external_graphql_tag_default.a`
  query GetProduct($slug: String!) {
    getProduct(slug: $slug) {
       id
          type {
            id
            slug
            name
          }
          categories {
            id
            slug
            name
          }
          name
          slug
          description
          images
          unit
          price
          sale_price
          packagePrice
          discount_in_percent
          product_quantity
          is_featured
          is_online
          meta_title
          meta_keyword
          meta_description
    }
  }
`;
// EXTERNAL MODULE: ./src/utils/apollo.js
var apollo = __webpack_require__("bM43");

// CONCATENATED MODULE: ./src/pages/product/[slug].tsx
var __jsx = external_react_default.a.createElement;







const ProductDetails = dynamic_default()(() => __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(null, "amd9")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("amd9")],
    modules: ['components/product-details/product-details-one/product-details-one']
  }
});
const ProductDetailsBook = dynamic_default()(() => __webpack_require__.e(/* import() */ 22).then(__webpack_require__.bind(null, "3yRL")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("3yRL")],
    modules: ['components/product-details/product-details-two/product-details-two']
  }
});
const CartPopUp = dynamic_default()(() => __webpack_require__.e(/* import() */ 24).then(__webpack_require__.bind(null, "gZAk")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("gZAk")],
    modules: ['features/carts/cart-popup']
  }
});

const ProductPage = ({
  data,
  deviceType
}) => {
  const SingleProduct = data.getProduct;

  let content = __jsx(ProductDetails, {
    product: SingleProduct,
    deviceType: deviceType
  });

  return __jsx(external_react_default.a.Fragment, null, __jsx(seo["a" /* SEO */], {
    title: `${SingleProduct.name} - Ditto`,
    description: `${SingleProduct.name} Details`
  }), __jsx(reuse_modal_["Modal"], null, __jsx(product_single_style, null, __jsx(ProductSingleContainer, null, content)), __jsx(CartPopUp, {
    deviceType: deviceType
  })));
};

async function getServerSideProps({
  params
}) {
  const apolloClient = Object(apollo["a" /* initializeApollo */])();
  const {
    data
  } = await apolloClient.query({
    query: GET_PRODUCT_DETAILS,
    variables: {
      slug: params.slug
    }
  });
  return {
    props: {
      data
    }
  };
}
/* harmony default export */ var _slug_ = __webpack_exports__["default"] = (ProductPage);

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

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EGWi":
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

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
  content: "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
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

/***/ "IrP5":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

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
  uri: "http://3.134.177.166/api",
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

/***/ "hCvD":
/***/ (function(module, exports) {

module.exports = require("react-magnifier");

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

/***/ "qC9r":
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "qbum":
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "wiMN":
/***/ (function(module, exports) {

module.exports = require("localforage");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });