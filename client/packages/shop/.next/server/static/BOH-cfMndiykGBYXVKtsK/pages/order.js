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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/JeY":
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "2MIm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("Y3ZS");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("7xIC");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5l48":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return HOME_PAGE; });
/* unused harmony export WORK_PAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GROCERY_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MAKEUP_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CLOTHING_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BAGS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BOOK_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FURNITURE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return MEDICINE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return RESTAURANT_PAGE; });
/* unused harmony export REQUEST_MEDICINE_PAGE */
/* unused harmony export CHECKOUT_PAGE */
/* unused harmony export CHECKOUT_PAGE_TWO */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return PROFILE_PAGE; });
/* unused harmony export YOUR_ORDER_PAGE */
/* unused harmony export YOUR_PLANTS */
/* unused harmony export ORDER_RECEIVED_PAGE */
/* unused harmony export OFFER_PAGE */
/* unused harmony export HELP_PAGE */
/* unused harmony export TERMS_AND_SERVICES_PAGE */
/* unused harmony export PRIVACY_POLICY_PAGE */
/* unused harmony export HOME_MENU_ITEM */
/* unused harmony export WORK_PAGE_ITEM */
/* unused harmony export HELP_MENU_ITEM */
/* unused harmony export OFFER_MENU_ITEM */
/* unused harmony export ORDER_MENU_ITEM */
/* unused harmony export PLANTS_MENU_ITEM */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return REQUEST_MEDICINE_MENU_ITEM; });
/* unused harmony export PROFILE_MENU_ITEM */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return STAFF_MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTHORIZED_MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CATEGORY_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CATEGORY_MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return MOBILE_DRAWER_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return PROFILE_SIDEBAR_TOP_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return PROFILE_SIDEBAR_BOTTOM_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LANGUAGE_MENU; });
/* harmony import */ var utils_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bM43");
/* harmony import */ var graphql_query_type_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IGqs");


const HOME_PAGE = '/';
const WORK_PAGE = '/work';
const GROCERY_PAGE = '/grocery';
const MAKEUP_PAGE = '/makeup';
const CLOTHING_PAGE = '/clothing';
const BAGS_PAGE = '/bags';
const BOOK_PAGE = '/book';
const FURNITURE_PAGE = '/furniture';
const MEDICINE_PAGE = '/medicine';
const RESTAURANT_PAGE = '/restaurant';
const REQUEST_MEDICINE_PAGE = '/request-medicine';
const CHECKOUT_PAGE = '/checkout';
const CHECKOUT_PAGE_TWO = '/checkout-alternative';
const PROFILE_PAGE = '/profile';
const YOUR_ORDER_PAGE = '/order';
const YOUR_PLANTS = '/your-plants';
const ORDER_RECEIVED_PAGE = '/order-received';
const OFFER_PAGE = '/offer';
const HELP_PAGE = '/help';
const TERMS_AND_SERVICES_PAGE = '/terms';
const PRIVACY_POLICY_PAGE = '/privacy'; // Mobile Drawer Menus

const HOME_MENU_ITEM = {
  id: 'nav.home',
  defaultMessage: 'Home',
  href: HOME_PAGE
};
const WORK_PAGE_ITEM = {
  id: 'nav.work',
  defaultMessage: 'Trabajo',
  href: WORK_PAGE
};
const HELP_MENU_ITEM = {
  id: 'nav.help',
  defaultMessage: 'Help',
  href: HELP_PAGE
};
const OFFER_MENU_ITEM = {
  id: 'nav.offer',
  defaultMessage: 'Offer',
  href: OFFER_PAGE
};
const ORDER_MENU_ITEM = {
  id: 'nav.order',
  href: YOUR_ORDER_PAGE,
  defaultMessage: 'Order'
};
const PLANTS_MENU_ITEM = {
  id: 'nav.plants',
  href: YOUR_PLANTS,
  defaultMessage: 'Plants'
};
const REQUEST_MEDICINE_MENU_ITEM = {
  id: 'nav.request_medicine',
  defaultMessage: 'Request Medicine',
  href: REQUEST_MEDICINE_PAGE
};
const PROFILE_MENU_ITEM = {
  id: 'nav.profile',
  defaultMessage: 'Profile',
  href: PROFILE_PAGE
};
const STAFF_MENU_ITEMS = [PROFILE_MENU_ITEM, ORDER_MENU_ITEM, WORK_PAGE_ITEM, PLANTS_MENU_ITEM];
const AUTHORIZED_MENU_ITEMS = [PROFILE_MENU_ITEM, ORDER_MENU_ITEM, PLANTS_MENU_ITEM // REQUEST_MEDICINE_MENU_ITEM,
// CHECKOUT_PAGE_TWO,
// {
//   id: 'nav.checkout_two',
//   href: CHECKOUT_PAGE_TWO,
//   defaultMessage: 'Checkout Alternative',
// },

/*{
  id: 'nav.checkout',
  defaultMessage: 'Checkout',
  href: CHECKOUT_PAGE,
},
{
  id: 'nav.checkout_two',
  href: CHECKOUT_PAGE_TWO,
  defaultMessage: 'Checkout Alternative',
},
ORDER_MENU_ITEM,
{
  id: 'nav.order_received',
  href: ORDER_RECEIVED_PAGE,
  defaultMessage: 'Order invoice',
},
{
  id: 'nav.terms_and_services',
  defaultMessage: 'Terms and Services',
  href: TERMS_AND_SERVICES_PAGE,
},
{
  id: 'nav.privacy_policy',
  defaultMessage: 'Privacy Policy',
  href: PRIVACY_POLICY_PAGE,
},*/
];
async function CATEGORY_MENU() {
  const apolloClient = Object(utils_apollo__WEBPACK_IMPORTED_MODULE_0__[/* initializeApollo */ "a"])();
  const res = await apolloClient.query({
    query: graphql_query_type_query__WEBPACK_IMPORTED_MODULE_1__[/* GET_TYPE */ "a"],
    variables: {
      searchText: ''
    }
  });
  const paths = await res.data.types.items.map(item => {
    return {
      id: item.id,
      href: `/${item.slug}`,
      defaultMessage: item.name,
      icon: item.icon,
      dynamic: true
    };
  });
  return paths;
} // category menu items for header navigation

const CATEGORY_MENU_ITEMS = [{
  id: 'nav.grocery',
  href: GROCERY_PAGE,
  defaultMessage: 'Grocery',
  icon: 'FruitsVegetable',
  dynamic: true
}, {
  id: 'nav.makeup',
  defaultMessage: 'Makeup',
  href: MAKEUP_PAGE,
  icon: 'FacialCare',
  dynamic: true
}, {
  id: 'nav.bags',
  defaultMessage: 'Bags',
  href: BAGS_PAGE,
  icon: 'Handbag',
  dynamic: true
}, {
  id: 'nav.clothing',
  defaultMessage: 'Clothing',
  href: CLOTHING_PAGE,
  icon: 'DressIcon',
  dynamic: true
}, {
  id: 'nav.furniture',
  defaultMessage: 'Furniture',
  href: FURNITURE_PAGE,
  icon: 'FurnitureIcon',
  dynamic: true
}, {
  id: 'nav.book',
  defaultMessage: 'Book',
  href: BOOK_PAGE,
  icon: 'BookIcon',
  dynamic: true
}, {
  id: 'nav.medicine',
  defaultMessage: 'Medicine',
  href: MEDICINE_PAGE,
  icon: 'MedicineIcon',
  dynamic: true
}, {
  id: 'nav.foods',
  defaultMessage: 'Foods',
  href: RESTAURANT_PAGE,
  icon: 'Restaurant'
}];
const MOBILE_DRAWER_MENU = [HOME_MENU_ITEM // HELP_MENU_ITEM,
// OFFER_MENU_ITEM,
];
const PROFILE_SIDEBAR_TOP_MENU = [ORDER_MENU_ITEM];
const PROFILE_SIDEBAR_BOTTOM_MENU = [PROFILE_MENU_ITEM];
const LANGUAGE_MENU = [// {
//   id: 'ar',
//   defaultMessage: 'Arabic',
//   icon: 'SAFlag',
// },
// {
//   id: 'zh',
//   defaultMessage: 'Chinese',
//   icon: 'CNFlag',
// },
{
  id: 'es',
  defaultMessage: 'Spanish',
  icon: 'ESFlag'
}, {
  id: 'en',
  defaultMessage: 'English',
  icon: 'USFlag'
} // {
//   id: 'de',
//   defaultMessage: 'German',
//   icon: 'DEFlag',
// },
// {
//   id: 'he',
//   defaultMessage: 'Hebrew',
//   icon: 'ILFlag',
// },
];

/***/ }),

/***/ "7xIC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("pONU");

var _interopRequireDefault = __webpack_require__("Y3ZS");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("L9lV"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("2MIm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TcVw");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Ek28":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("jvFD");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Icon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "nav-link__Icon",
  componentId: "sc-1n22cqh-0"
})(["min-width:16px;margin-right:10px;display:flex;align-items:center;justify-content:center;"]);

const NavLink = ({
  href,
  label,
  intlId,
  router,
  icon,
  className,
  onClick,
  iconClass,
  dynamic
}) => {
  const isCurrentPath = router.pathname === href || router.asPath === href;
  return __jsx("div", {
    onClick: onClick,
    className: className ? className : ''
  }, dynamic ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '/[type]',
    as: href
  }, __jsx("a", {
    className: isCurrentPath ? ' current-page' : '',
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, icon ? __jsx(Icon, {
    className: iconClass
  }, icon) : '', __jsx("span", {
    className: "label"
  }, intlId ? __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: intlId ? intlId : 'defaultNavLinkId',
    defaultMessage: label
  }) : label))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href
  }, __jsx("a", {
    className: isCurrentPath ? ' current-page' : '',
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, icon ? __jsx(Icon, {
    className: iconClass
  }, icon) : '', __jsx("span", {
    className: "label"
  }, intlId ? __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: intlId ? intlId : 'defaultNavLinkId',
    defaultMessage: label
  }) : label))));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(NavLink));

/***/ }),

/***/ "EsHW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckMark; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const CheckMark = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 20.894 16"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_ios-checkmark (3)",
    d: "M169.184,175.473l-1.708-1.756a.367.367,0,0,0-.272-.116.352.352,0,0,0-.272.116l-11.837,11.925-4.308-4.308a.375.375,0,0,0-.543,0l-1.727,1.727a.387.387,0,0,0,0,.553l5.434,5.434a1.718,1.718,0,0,0,1.135.553,1.8,1.8,0,0,0,1.126-.534h.01l12.973-13.041A.415.415,0,0,0,169.184,175.473Z",
    transform: "translate(-148.4 -173.6)",
    fill: color
  }));
};

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

/***/ "KeDb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("Y3ZS");

var _interopRequireWildcard = __webpack_require__("pONU");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("7xIC"));

var _router2 = __webpack_require__("L9lV");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "L9lV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__("bzos");

var _mitt = _interopRequireDefault(__webpack_require__("YBsB"));

var _utils = __webpack_require__("fvxO");

var _isDynamic = __webpack_require__("Lko9");

var _routeMatcher = __webpack_require__("TBBy");

var _routeRegex = __webpack_require__("uChv");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "Lko9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QfjN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

/***/ }),

/***/ "TBBy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "TcVw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/seo.tsx
var seo = __webpack_require__("H8eV");

// EXTERNAL MODULE: external "react-custom-scrollbars"
var external_react_custom_scrollbars_ = __webpack_require__("qC9r");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./src/graphql/query/order.query.ts
var order_query = __webpack_require__("pFUA");

// EXTERNAL MODULE: ./src/components/error-message/error-message.tsx
var error_message = __webpack_require__("quMH");

// EXTERNAL MODULE: ./src/features/user-profile/order/order.style.tsx
var order_style = __webpack_require__("rQ82");

// EXTERNAL MODULE: external "rc-table"
var external_rc_table_ = __webpack_require__("hs73");
var external_rc_table_default = /*#__PURE__*/__webpack_require__.n(external_rc_table_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/features/user-profile/order/order-details/order-details.style.tsx


const OrderDetailsWrapper = external_styled_components_default()('div').withConfig({
  displayName: "order-detailsstyle__OrderDetailsWrapper",
  componentId: "sc-4g8t0m-0"
})(["width:100%;display:flex;flex-direction:column;background-color:", ";"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
const DeliveryInfo = external_styled_components_default.a.div.withConfig({
  displayName: "order-detailsstyle__DeliveryInfo",
  componentId: "sc-4g8t0m-1"
})(["width:100%;display:flex;border-top:1px solid ", ";border-bottom:1px solid ", ";"], Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'));
const DeliveryAddress = external_styled_components_default.a.div.withConfig({
  displayName: "order-detailsstyle__DeliveryAddress",
  componentId: "sc-4g8t0m-2"
})(["width:100%;display:flex;flex-direction:column;border-right:1px solid ", ";padding:20px;h3{font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-bottom:10px;}"], Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const Address = external_styled_components_default.a.span.withConfig({
  displayName: "order-detailsstyle__Address",
  componentId: "sc-4g8t0m-3"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.5;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const Contact = external_styled_components_default.a.span.withConfig({
  displayName: "order-detailsstyle__Contact",
  componentId: "sc-4g8t0m-4"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.5;margin-bottom:15px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const CostCalculation = external_styled_components_default.a.div.withConfig({
  displayName: "order-detailsstyle__CostCalculation",
  componentId: "sc-4g8t0m-5"
})(["width:235px;display:flex;flex-direction:column;flex-shrink:0;padding:20px;@media only screen and (min-width:768px) and (max-width:990px){width:220px;}"]);
const PriceRow = external_styled_components_default.a.div.withConfig({
  displayName: "order-detailsstyle__PriceRow",
  componentId: "sc-4g8t0m-6"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-bottom:15px;width:100%;display:flex;align-items:center;justify-content:space-between;&:last-child{margin-bottom:0;}&.grandTotal{font-weight:", ";color:", ";}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const Price = external_styled_components_default.a.div.withConfig({
  displayName: "order-detailsstyle__Price",
  componentId: "sc-4g8t0m-7"
})(["color:", ";"], Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const HeadingSection = external_styled_components_default()('div').withConfig({
  displayName: "order-detailsstyle__HeadingSection",
  componentId: "sc-4g8t0m-8"
})(["width:100%;display:flex;align-items:center;justify-content:center;margin-bottom:40px;"]);
const Title = external_styled_components_default()('h3').withConfig({
  displayName: "order-detailsstyle__Title",
  componentId: "sc-4g8t0m-9"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fonts.heading', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.lg', '21'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const ProgressSection = external_styled_components_default()('div').withConfig({
  displayName: "order-detailsstyle__ProgressSection",
  componentId: "sc-4g8t0m-10"
})(["width:100%;display:flex;flex-direction:column;padding:60px 0;&:last-child{margin-bottom:0;}"]);
const ProgressWrapper = external_styled_components_default()('div').withConfig({
  displayName: "order-detailsstyle__ProgressWrapper",
  componentId: "sc-4g8t0m-11"
})(["width:100%;display:flex;padding:30px 25px;border-bottom:1px solid ", ";"], Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'));
const OrderTable = external_styled_components_default()('table').withConfig({
  displayName: "order-detailsstyle__OrderTable",
  componentId: "sc-4g8t0m-12"
})(["&&{border-collapse:collapse;thead{th{padding:8px 20px;font-family:", ";font-size:", "px;font-weight:", ";color:", ";border:none;&:first-child{padding-left:110px;text-align:left;}}}tr{&:hover{background-color:inherit;}td{padding:20px;font-family:", ";font-size:", "px;font-weight:", ";color:", ";border-bottom:0;border:none;}}}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const OrderTableWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "order-detailsstyle__OrderTableWrapper",
  componentId: "sc-4g8t0m-13"
})([".rc-table-content{border:0;}"]);
const StyledLink = external_styled_components_default.a.span.withConfig({
  displayName: "order-detailsstyle__StyledLink",
  componentId: "sc-4g8t0m-14"
})(["display:inline-flex;align-items:center;justify-content:center;font-family:", ";font-size:", "px;font-weight:", ";color:", ";padding:5px 15px;height:36px;background-color:#009e7f;border:2px solid #009e7f;color:#fff;border-radius:", ";position:relative;width:150px;margin:15px;transition:0.15s ease-in-out;cursor:pointer;@media (max-width:767px){font-size:", "px;height:34px;padding:5px 12px;}&:hover{background-color:#fff;border-color:", ";color:#009e7f;}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'), Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
// CONCATENATED MODULE: ./src/components/progress-box/progress-box.style.tsx


const ProgressBar = external_styled_components_default()('div').withConfig({
  displayName: "progress-boxstyle__ProgressBar",
  componentId: "sc-1kok821-0"
})(["width:100%;height:4px;background-color:", ";position:absolute;top:50%;left:0;margin-top:-2px;@media (max-width:767px){width:3px;height:200%;left:50%;top:-50%;margin-top:0;margin-left:-1px;}"], Object(theme_get_["themeGet"])('colors.gray.700', '#E6E6E6'));
const StatusBox = external_styled_components_default()('div').withConfig({
  displayName: "progress-boxstyle__StatusBox",
  componentId: "sc-1kok821-1"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:50%;background-color:", ";z-index:1;border:1px dashed ", ";"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'));
const CheckMarkWrapper = external_styled_components_default.a.span.withConfig({
  displayName: "progress-boxstyle__CheckMarkWrapper",
  componentId: "sc-1kok821-2"
})(["width:13px;height:17px;svg{width:100%;}"]);
const StatusDetails = external_styled_components_default()('div').withConfig({
  displayName: "progress-boxstyle__StatusDetails",
  componentId: "sc-1kok821-3"
})(["display:flex;flex-direction:column;align-items:center;@media (max-width:767px){width:100%;align-items:flex-start;margin-left:20px;}"]);
const StatusTitle = external_styled_components_default()('span').withConfig({
  displayName: "progress-boxstyle__StatusTitle",
  componentId: "sc-1kok821-4"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";text-align:center;padding:0 8px;@media (max-width:767px){padding:0;}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const StatusNote = external_styled_components_default()('span').withConfig({
  displayName: "progress-boxstyle__StatusNote",
  componentId: "sc-1kok821-5"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-top:8px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798C'));
const ProgressBarWrapper = external_styled_components_default()('div').withConfig({
  displayName: "progress-boxstyle__ProgressBarWrapper",
  componentId: "sc-1kok821-6"
})(["position:relative;width:100%;display:flex;align-items:center;justify-content:center;margin-bottom:15px;@media (max-width:767px){width:auto;margin-bottom:0;}&.checked{", "{background-color:", ";}", "{background-color:", ";color:#ffffff;}}"], ProgressBar, Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'), StatusBox, Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'));
const ProgressStep = external_styled_components_default()('div').withConfig({
  displayName: "progress-boxstyle__ProgressStep",
  componentId: "sc-1kok821-7"
})(["display:flex;flex:1;flex-direction:column;align-items:center;@media (max-width:767px){flex-direction:row;margin-bottom:30px;&:last-child{margin-bottom:0;}}&:first-child{", "{width:50%;left:50%;@media (max-width:767px){width:3px;height:100%;top:50%;}}}&:last-child{", "{width:50%;@media (max-width:767px){width:3px;height:100%;top:-50%;}}}"], ProgressBar, ProgressBar);

// EXTERNAL MODULE: ./src/assets/icons/CheckMark.tsx
var CheckMark = __webpack_require__("EsHW");

// CONCATENATED MODULE: ./src/components/progress-box/progress-box.tsx
var __jsx = external_react_default.a.createElement;




const ProgressBox = ({
  status,
  data
}) => {
  return __jsx(external_react_default.a.Fragment, null, data.map((item, index) => __jsx(ProgressStep, {
    key: index
  }, __jsx(ProgressBarWrapper, {
    className: item.step_competed && item.ordering >= index + 1 ? 'checked' : ''
  }, __jsx(StatusBox, null, status >= index + 1 ? __jsx(CheckMarkWrapper, null, __jsx(CheckMark["a" /* CheckMark */], null)) : index + 1), __jsx(ProgressBar, null)), __jsx(StatusDetails, null, item ? __jsx(StatusTitle, null, item.status) : ''))));
};

/* harmony default export */ var progress_box = (ProgressBox);
// EXTERNAL MODULE: ./src/utils/constant.ts
var constant = __webpack_require__("f/wd");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./src/features/user-profile/order/order-details/order-details.tsx
var order_details_jsx = external_react_default.a.createElement;









const components = {
  table: OrderTable
};

const OrderDetails = ({
  tableData,
  columns,
  address,
  number,
  id,
  progressStatus,
  deliveryDate,
  progressData,
  subtotal,
  discount,
  grandTotal,
  deliveryMethod,
  ref
}) => {
  const intl = Object(external_react_intl_["useIntl"])();

  const handleInvocie = () => {
    router_default.a.push({
      pathname: '/order-received',
      query: {
        itemId: id
      }
    });
    return false;
  };

  const calculateDeliveryCharge = () => {
    var _deliveryMethod$name, _charge;

    if (!(deliveryMethod === null || deliveryMethod === void 0 ? void 0 : deliveryMethod.name)) return 0;
    const charge = deliveryMethod === null || deliveryMethod === void 0 ? void 0 : (_deliveryMethod$name = deliveryMethod.name) === null || _deliveryMethod$name === void 0 ? void 0 : _deliveryMethod$name.split("$");
    const chargeFormatted = (_charge = charge[(charge === null || charge === void 0 ? void 0 : charge.length) - 1]) === null || _charge === void 0 ? void 0 : _charge.replace(/\D/g, '');
    return Number(chargeFormatted);
  };

  const getDeliverySchedule = details => {
    if (!details) return '';
    const word = 'Horario';
    const index = details.indexOf(word); // 8

    const length = word.length; // 7

    return details.slice(index + length);
  };

  const deliveryDateAndTime = `${getDeliverySchedule(deliveryMethod === null || deliveryMethod === void 0 ? void 0 : deliveryMethod.details)} - ${external_moment_default()(deliveryDate).format('DD MMM')}`;
  return order_details_jsx(external_react_default.a.Fragment, null, order_details_jsx(DeliveryInfo, null, order_details_jsx(DeliveryAddress, null, order_details_jsx("h3", null, order_details_jsx(external_react_intl_["FormattedMessage"], {
    id: "deliveryMethodTitle",
    defaultMessage: "Delivery Method"
  })), order_details_jsx(Contact, null, deliveryMethod === null || deliveryMethod === void 0 ? void 0 : deliveryMethod.name), order_details_jsx("h3", null, order_details_jsx(external_react_intl_["FormattedMessage"], {
    id: "contactNumberTitle",
    defaultMessage: "Contact Number"
  })), order_details_jsx(Contact, null, number), (deliveryMethod === null || deliveryMethod === void 0 ? void 0 : deliveryMethod.isPickUp) ? order_details_jsx(external_react_default.a.Fragment, null, order_details_jsx("h3", null, order_details_jsx(external_react_intl_["FormattedMessage"], {
    id: "pickUpDateTitle",
    defaultMessage: "Pickup Date"
  })), order_details_jsx(Contact, null, deliveryDateAndTime || '-'), order_details_jsx("h3", null, order_details_jsx(external_react_intl_["FormattedMessage"], {
    id: "deliveryAddressTitle",
    defaultMessage: "Delivery Address"
  })), order_details_jsx(Address, null, address)) : order_details_jsx(external_react_default.a.Fragment, null, order_details_jsx("h3", null, order_details_jsx(external_react_intl_["FormattedMessage"], {
    id: "deliveryDateTitle",
    defaultMessage: "Delivery Date"
  })), order_details_jsx(Contact, null, deliveryDateAndTime || '-'), order_details_jsx("h3", null, order_details_jsx(external_react_intl_["FormattedMessage"], {
    id: "deliveryAddressTitle",
    defaultMessage: "Delivery Address"
  })), order_details_jsx(Address, null, address))), order_details_jsx(CostCalculation, null, order_details_jsx(PriceRow, null, order_details_jsx(external_react_intl_["FormattedMessage"], {
    id: "subTotal",
    defaultMessage: "Sub total"
  }), order_details_jsx(Price, null, constant["a" /* CURRENCY */], subtotal)), order_details_jsx(PriceRow, null, order_details_jsx(external_react_intl_["FormattedMessage"], {
    id: "intlOrderDetailsDiscount",
    defaultMessage: "Discount"
  }), order_details_jsx(Price, null, constant["a" /* CURRENCY */], discount !== null ? discount : 0)), order_details_jsx(PriceRow, null, order_details_jsx(external_react_intl_["FormattedMessage"], {
    id: "deliveryChargeText",
    defaultMessage: "Delivery charge"
  }), order_details_jsx(Price, null, constant["a" /* CURRENCY */], calculateDeliveryCharge())), order_details_jsx(PriceRow, {
    className: "grandTotal"
  }, order_details_jsx(external_react_intl_["FormattedMessage"], {
    id: "totalText",
    defaultMessage: "Total"
  }), order_details_jsx(Price, null, constant["a" /* CURRENCY */], grandTotal)))), order_details_jsx(order_style["m" /* Title */], {
    style: {
      padding: '0 20px'
    }
  }, order_details_jsx(external_react_intl_["FormattedMessage"], {
    id: "orderTrackingText",
    defaultMessage: "Order Tracking"
  })), order_details_jsx(ProgressWrapper, null, order_details_jsx(progress_box, {
    data: progressData,
    status: progressStatus
  })), order_details_jsx(OrderTableWrapper, null, order_details_jsx(external_rc_table_default.a, {
    columns: columns,
    data: tableData,
    rowKey: record => record.id,
    components: components,
    className: "orderDetailsTable" // scroll={{ y: 350 }}

  })), order_details_jsx(StyledLink, {
    onClick: handleInvocie
  }, intl.formatMessage({
    id: 'getInvoiceId',
    defaultMessage: 'Get invoice'
  })));
};

/* harmony default export */ var order_details = (OrderDetails);
// CONCATENATED MODULE: ./src/features/user-profile/order/order-card/order-card.style.tsx



const order_card_style_Address = external_styled_components_default()(Address).withConfig({
  displayName: "order-cardstyle__Address",
  componentId: "vpsc5e-0"
})([""]);
const order_card_style_Contact = external_styled_components_default()(Contact).withConfig({
  displayName: "order-cardstyle__Contact",
  componentId: "vpsc5e-1"
})([""]);
const order_card_style_PriceRow = external_styled_components_default()(PriceRow).withConfig({
  displayName: "order-cardstyle__PriceRow",
  componentId: "vpsc5e-2"
})([""]);
const order_card_style_Price = external_styled_components_default()(Price).withConfig({
  displayName: "order-cardstyle__Price",
  componentId: "vpsc5e-3"
})([""]);
const order_card_style_OrderTable = external_styled_components_default()(OrderTable).withConfig({
  displayName: "order-cardstyle__OrderTable",
  componentId: "vpsc5e-4"
})([""]);
const order_card_style_DeliveryInfo = external_styled_components_default()(DeliveryInfo).withConfig({
  displayName: "order-cardstyle__DeliveryInfo",
  componentId: "vpsc5e-5"
})(["flex-direction:column;"]);
const Text = external_styled_components_default.a.p.withConfig({
  displayName: "order-cardstyle__Text",
  componentId: "vpsc5e-6"
})(["font-family:", ";font-size:", "px;color:", ";font-weight:", ";line-height:1.2;display:block;margin:0;min-width:140px;&:last-child{color:", ";}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), props => props.bold ? Object(theme_get_["themeGet"])('fontWeights.bold', '700') : Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.medium', '#424561'));
const LinkPickUp = external_styled_components_default.a.a.withConfig({
  displayName: "order-cardstyle__LinkPickUp",
  componentId: "vpsc5e-7"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.blue', '#ea4d4a'));
const order_card_style_DeliveryAddress = external_styled_components_default()(DeliveryAddress).withConfig({
  displayName: "order-cardstyle__DeliveryAddress",
  componentId: "vpsc5e-8"
})(["border-bottom:1px solid ", ";border-right:0;"], Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'));
const order_card_style_CostCalculation = external_styled_components_default()(CostCalculation).withConfig({
  displayName: "order-cardstyle__CostCalculation",
  componentId: "vpsc5e-9"
})(["width:100%;"]);
const order_card_style_ProgressWrapper = external_styled_components_default()(ProgressWrapper).withConfig({
  displayName: "order-cardstyle__ProgressWrapper",
  componentId: "vpsc5e-10"
})(["@media (max-width:767px){flex-direction:column;}"]);
const OrderListHeader = external_styled_components_default.a.div.withConfig({
  displayName: "order-cardstyle__OrderListHeader",
  componentId: "vpsc5e-11"
})(["padding:15px 20px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid ", ";"], Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'));
const TrackID = external_styled_components_default.a.span.withConfig({
  displayName: "order-cardstyle__TrackID",
  componentId: "vpsc5e-12"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";span{font-weight:", ";}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'));
const Status = external_styled_components_default.a.span.withConfig({
  displayName: "order-cardstyle__Status",
  componentId: "vpsc5e-13"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1;background-color:rgba(46,112,250,0.1);padding:10px;border-radius:", ";"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.blue.regular', '#2e70fa'), Object(theme_get_["themeGet"])('radii.base', '6px'));
const OrderMeta = external_styled_components_default.a.div.withConfig({
  displayName: "order-cardstyle__OrderMeta",
  componentId: "vpsc5e-14"
})(["display:flex;flex-direction:column;padding:20px;"]);
const Meta = external_styled_components_default.a.div.withConfig({
  displayName: "order-cardstyle__Meta",
  componentId: "vpsc5e-15"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";display:flex;justify-content:space-between;align-items:center;width:100%;margin-bottom:15px;@media (max-width:767px){font-size:", "px;}&:last-child{margin-bottom:0;}&.price{font-weight:", ";}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700')); // for mobile

const OrderDetail = external_styled_components_default.a.div.withConfig({
  displayName: "order-cardstyle__OrderDetail",
  componentId: "vpsc5e-16"
})(["display:flex;flex-direction:column;width:100%;"]);
const CardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "order-cardstyle__CardWrapper",
  componentId: "vpsc5e-17"
})(["width:100%;"]);
const SingleOrderList = external_styled_components_default.a.div.withConfig({
  displayName: "order-cardstyle__SingleOrderList",
  componentId: "vpsc5e-18"
})(["background-color:", ";border-radius:", ";overflow:hidden;margin-bottom:15px;display:flex;flex-direction:column;cursor:pointer;flex-shrink:0;border:2px solid transparent;&:last-child{margin-bottom:0;}&.active{border:2px solid ", ";}"], Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'), Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const OrderTableMobile = external_styled_components_default.a.div.withConfig({
  displayName: "order-cardstyle__OrderTableMobile",
  componentId: "vpsc5e-19"
})([".rc-table-header,.rc-table-body,.rc-table th,.rc-table td{border:0;}.rc-table-content{border:0;}"]);
// CONCATENATED MODULE: ./src/features/user-profile/order/order-card/order-card.tsx
var order_card_jsx = external_react_default.a.createElement;






const OrderCard = ({
  orderId,
  onClick,
  className,
  status,
  date,
  deliveryTime,
  amount
}) => {
  return order_card_jsx(external_react_default.a.Fragment, null, order_card_jsx(SingleOrderList, {
    onClick: onClick,
    className: className
  }, order_card_jsx(OrderListHeader, null, order_card_jsx(TrackID, null, order_card_jsx(external_react_intl_["FormattedMessage"], {
    id: "intlOrderCardTitleText",
    defaultMessage: "Order"
  }), order_card_jsx("span", null, "#", orderId)), order_card_jsx(Status, null, status)), order_card_jsx(OrderMeta, null, order_card_jsx(Meta, null, order_card_jsx(external_react_intl_["FormattedMessage"], {
    id: "intlOrderCardDateText",
    defaultMessage: "Order Date"
  }), ": ", order_card_jsx("span", null, external_moment_default()(date).format('hh:mm A - DD MMM'))), order_card_jsx(Meta, {
    className: "price"
  }, order_card_jsx(external_react_intl_["FormattedMessage"], {
    id: "intlOrderCardTotalText",
    defaultMessage: "Total Price"
  }), ":", order_card_jsx("span", null, constant["a" /* CURRENCY */], amount)))));
};

/* harmony default export */ var order_card = (OrderCard);
// EXTERNAL MODULE: external "rc-collapse"
var external_rc_collapse_ = __webpack_require__("VxuB");
var external_rc_collapse_default = /*#__PURE__*/__webpack_require__.n(external_rc_collapse_);

// EXTERNAL MODULE: ./src/graphql/query/delivery.ts
var delivery = __webpack_require__("ZLcN");

// CONCATENATED MODULE: ./src/features/user-profile/order/order-card/order-card-mobile.tsx
var order_card_mobile_jsx = external_react_default.a.createElement;







const order_card_mobile_components = {
  table: order_card_style_OrderTable
};

const order_card_mobile_OrderCard = ({
  onClick,
  className,
  columns,
  progressData,
  orders
}) => {
  var _deliverData$delivery;

  //   const displayDetail = className === 'active' ? '100%' : '0';
  const addAllClasses = ['accordion'];
  const {
    data: deliverData,
    error: deliveryError,
    loading: deliveryLoading,
    refetch: deliveryRefetch
  } = Object(react_hooks_["useQuery"])(delivery["a" /* DELIVERY_METHOD */]);
  const intl = Object(external_react_intl_["useIntl"])();

  if (className) {
    addAllClasses.push(className);
  }

  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getDeliverySchedule = details => {
    if (!details) return '';
    const word = 'Horario: ';
    const index = details.indexOf(word); // 8

    const length = word.length; // 7

    return details.slice(index + length);
  };

  const deliveryMethods = deliverData === null || deliverData === void 0 ? void 0 : (_deliverData$delivery = deliverData.deliveryMethods) === null || _deliverData$delivery === void 0 ? void 0 : _deliverData$delivery.items;
  return order_card_mobile_jsx(external_react_default.a.Fragment, null, order_card_mobile_jsx(external_rc_collapse_default.a, {
    accordion: true,
    className: addAllClasses.join(' '),
    defaultActiveKey: "active",
    expandIcon: () => {}
  }, orders.map(order => {
    const orderDeliveryMethod = deliveryMethods === null || deliveryMethods === void 0 ? void 0 : deliveryMethods.filter(method => method.id === (order === null || order === void 0 ? void 0 : order.delivery_method_id))[0];
    const deliveryDateAndTime = `${order === null || order === void 0 ? void 0 : order.delivery_date} ${getDeliverySchedule(orderDeliveryMethod === null || orderDeliveryMethod === void 0 ? void 0 : orderDeliveryMethod.details)}`;
    return order_card_mobile_jsx(external_rc_collapse_["Panel"], {
      header: order_card_mobile_jsx(CardWrapper, {
        onClick: onClick
      }, order_card_mobile_jsx(OrderListHeader, null, order_card_mobile_jsx(TrackID, null, intl.formatMessage({
        id: 'order',
        defaultMessage: 'Order'
      }), " ", order_card_mobile_jsx("span", null, "  #", order === null || order === void 0 ? void 0 : order.id.slice((order === null || order === void 0 ? void 0 : order.id.length) - 4, order === null || order === void 0 ? void 0 : order.id.length))), order_card_mobile_jsx(Status, null, order.status)), order_card_mobile_jsx(OrderMeta, null, order_card_mobile_jsx(Meta, null, intl.formatMessage({
        id: 'deliveryMethodTitle',
        defaultMessage: 'Delivery Method:'
      }), " ", order_card_mobile_jsx("span", null, orderDeliveryMethod === null || orderDeliveryMethod === void 0 ? void 0 : orderDeliveryMethod.name)), (orderDeliveryMethod === null || orderDeliveryMethod === void 0 ? void 0 : orderDeliveryMethod.isPickUp) ? order_card_mobile_jsx(external_react_default.a.Fragment, null, order_card_mobile_jsx(Meta, null, intl.formatMessage({
        id: 'deliveryTime',
        defaultMessage: 'Delivery Time'
      }), order_card_mobile_jsx("span", null, capitalizeFirstLetter(deliveryDateAndTime))), order_card_mobile_jsx(Meta, null, intl.formatMessage({
        id: 'deliveryLocationText',
        defaultMessage: 'Delivery Location:'
      }), order_card_mobile_jsx("span", null, (orderDeliveryMethod === null || orderDeliveryMethod === void 0 ? void 0 : orderDeliveryMethod.pickUpAddress.includes('http')) ? order_card_mobile_jsx(LinkPickUp, {
        href: orderDeliveryMethod === null || orderDeliveryMethod === void 0 ? void 0 : orderDeliveryMethod.pickUpAddress,
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Click/toque aqu\xED") : order_card_mobile_jsx(Text, null, orderDeliveryMethod === null || orderDeliveryMethod === void 0 ? void 0 : orderDeliveryMethod.pickUpAddress)))) : order_card_mobile_jsx(external_react_default.a.Fragment, null, order_card_mobile_jsx(Meta, null, intl.formatMessage({
        id: 'deliveryDateTitle',
        defaultMessage: 'Delivery Date:'
      }), order_card_mobile_jsx("span", null, capitalizeFirstLetter(deliveryDateAndTime))), order_card_mobile_jsx(Meta, null, intl.formatMessage({
        id: 'deliveryAddress',
        defaultMessage: 'Delivery Address:'
      }), " ", order_card_mobile_jsx("span", null, order === null || order === void 0 ? void 0 : order.delivery_address))), order_card_mobile_jsx(Meta, {
        className: "price"
      }, intl.formatMessage({
        id: 'totalPrice',
        defaultMessage: 'Total Price:'
      }), order_card_mobile_jsx("span", null, constant["a" /* CURRENCY */], order.total)))),
      headerClass: "accordion-title",
      key: order.id
    }, order_card_mobile_jsx(OrderDetail, null, order_card_mobile_jsx(order_card_style_DeliveryInfo, null, order_card_mobile_jsx(order_card_style_DeliveryAddress, null, order_card_mobile_jsx("h3", null, intl.formatMessage({
      id: 'productInfoDetailed',
      defaultMessage: 'Purchased products details can be checked on a Desktop browser'
    }))), order_card_mobile_jsx(order_card_style_DeliveryAddress, null, order_card_mobile_jsx("h3", null, intl.formatMessage({
      id: 'contactNumber',
      defaultMessage: 'Contact Number'
    })), order_card_mobile_jsx(order_card_style_Contact, null, order.contact_number)), order_card_mobile_jsx(order_card_style_DeliveryAddress, null, order_card_mobile_jsx("h3", null, intl.formatMessage({
      id: 'deliveryAddress',
      defaultMessage: 'Delivery Address'
    })), order_card_mobile_jsx(order_card_style_Address, null, order.delivery_address)), order_card_mobile_jsx(order_card_style_CostCalculation, null, order_card_mobile_jsx(order_card_style_PriceRow, null, "Subtotal", order_card_mobile_jsx(order_card_style_Price, null, constant["a" /* CURRENCY */], order.sub_total)), order_card_mobile_jsx(order_card_style_PriceRow, null, intl.formatMessage({
      id: 'discount',
      defaultMessage: 'Discount'
    }), order_card_mobile_jsx(order_card_style_Price, null, constant["a" /* CURRENCY */], order.discount || '0')), order_card_mobile_jsx(order_card_style_PriceRow, {
      className: "grandTotal"
    }, "Total", order_card_mobile_jsx(order_card_style_Price, null, constant["a" /* CURRENCY */], order.total))))));
  })));
};

/* harmony default export */ var order_card_mobile = (order_card_mobile_OrderCard);
// EXTERNAL MODULE: ./src/utils/useComponentSize.js + 1 modules
var useComponentSize = __webpack_require__("uRCu");

// CONCATENATED MODULE: ./src/features/user-profile/order/order.tsx
var order_jsx = external_react_default.a.createElement;












const order_progressData = ['Recibido', 'EnTransito ', 'Entregado'];
const orderTableColumns = [{
  title: order_jsx(external_react_intl_["FormattedMessage"], {
    id: "cartItems",
    defaultMessage: "Items"
  }),
  dataIndex: '',
  key: 'items',
  width: 250,
  ellipsis: true,
  render: (text, record) => {
    return order_jsx(order_style["f" /* ItemWrapper */], null, order_jsx(order_style["b" /* ItemDetails */], null, order_jsx(order_style["c" /* ItemName */], null, record.name), order_jsx(order_style["d" /* ItemPrice */], null, "$", record.price), record.sale_price ? order_jsx(order_style["e" /* ItemSalePrice */], null, "$", record.sale_price) : ""));
  }
}, {
  title: order_jsx(external_react_intl_["FormattedMessage"], {
    id: "intlTableColTitle2",
    defaultMessage: "Quantity"
  }),
  dataIndex: 'quantity',
  key: 'quantity',
  align: 'center',
  width: 100
}, {
  title: order_jsx(external_react_intl_["FormattedMessage"], {
    id: "intlTableColTitle4",
    defaultMessage: "Quantity"
  }),
  dataIndex: 'recicledQuantity',
  key: 'recicledQuantity',
  align: 'center',
  width: 100
}, {
  title: order_jsx(external_react_intl_["FormattedMessage"], {
    id: "intlTableColTitle3",
    defaultMessage: "Price"
  }),
  dataIndex: '',
  key: 'price',
  align: 'right',
  width: 100,
  render: (text, record) => {
    return order_jsx("p", null, "$", record.price * record.quantity);
  }
}];

const OrdersContent = () => {
  const {
    0: order,
    1: setOrder
  } = Object(external_react_["useState"])(null);
  const {
    0: active,
    1: setActive
  } = Object(external_react_["useState"])('');
  const [targetRef, size] = Object(useComponentSize["a" /* default */])();
  const orderListHeight = size.height - 79;
  const {
    data: deliverData
  } = Object(react_hooks_["useQuery"])(delivery["a" /* DELIVERY_METHOD */]);
  const {
    data,
    error,
    loading
  } = Object(react_hooks_["useQuery"])(order_query["a" /* GET_ORDERS */]);
  Object(external_react_["useEffect"])(() => {
    if (data && data.getUserOrders.length !== 0) {
      setOrder(data.getUserOrders[0]);
      setActive(data.getUserOrders[0].id);
    }
  }, [data]);

  if (loading) {
    return order_jsx(error_message["default"], {
      message: 'Cargando...'
    });
  }

  ;

  if (error) {
    return order_jsx(error_message["default"], {
      message: error.message
    });
  }

  ;
  const myOrder = data.getUserOrders;

  const handleClick = order => {
    setOrder(order);
    setActive(order.id);
  }; // const pickedUpOptionIds = deliverData.deliveryMethods.map(deliveryMethod => {
  //   return deliveryMethod.isPickUp ? deliveryMethod.id : null;
  // });
  // // const deliveryOptionIds = deliveryMethods.map(deliveryMethod => {
  // //   return !deliveryMethod.isPickUp ? deliveryMethod.id : null;
  // // });
  // const pickUpOptionSelected = pickedUpOptionIds.includes(order.delivery_method_id)


  return order_jsx(order_style["i" /* OrderBox */], null, order_jsx(order_style["a" /* DesktopView */], null, order_jsx(order_style["l" /* OrderListWrapper */], {
    style: {
      height: size.height
    }
  }, order_jsx(order_style["m" /* Title */], {
    style: {
      padding: '0 20px'
    }
  }, order_jsx(external_react_intl_["FormattedMessage"], {
    id: "intlOrderPageTitle",
    defaultMessage: "My Order"
  })), order_jsx(external_react_custom_scrollbars_["Scrollbars"], {
    universal: true,
    autoHide: true,
    autoHeight: true,
    autoHeightMin: 420,
    autoHeightMax: isNaN(orderListHeight) ? 500 : orderListHeight
  }, order_jsx(order_style["k" /* OrderList */], null, myOrder.length !== 0 ? myOrder.map((current, index) => order_jsx(order_card, {
    key: index,
    orderId: current.order_code,
    className: current.id === active ? 'active' : '',
    status: current.status,
    date: current.datetime.split('2020').shift(),
    amount: current.total,
    onClick: () => {
      handleClick(current);
    }
  })) : order_jsx(order_style["h" /* NoOrderFound */], null, order_jsx(external_react_intl_["FormattedMessage"], {
    id: "intlNoOrderFound",
    defaultMessage: "No order found"
  }))))), order_jsx(order_style["j" /* OrderDetailsWrapper */], {
    ref: targetRef
  }, order_jsx(order_style["m" /* Title */], {
    style: {
      padding: '0 20px'
    }
  }, order_jsx(external_react_intl_["FormattedMessage"], {
    id: "orderDetailsText",
    defaultMessage: "Order Details"
  })), order ? order_jsx(order_details, {
    id: order.id,
    progressStatus: order.status,
    progressData: order.order_tracking,
    number: order.contact_number,
    address: order.delivery_address,
    deliveryDate: order.delivery_date,
    subtotal: order.sub_total,
    discount: order.discount_amount,
    grandTotal: order.total,
    tableData: order.order_products,
    columns: orderTableColumns,
    deliveryMethod: order.delivery_method
  }) : order_jsx(order_style["h" /* NoOrderFound */], null, order_jsx(external_react_intl_["FormattedMessage"], {
    id: "intlNoOrderFound",
    defaultMessage: "No order found"
  })))), order ? order_jsx(order_style["g" /* MobileView */], null, order_jsx(order_style["k" /* OrderList */], null, order_jsx(order_card_mobile, {
    orders: myOrder,
    className: order && order.id === active ? 'active' : '',
    progressData: order_progressData,
    columns: orderTableColumns,
    onClick: () => {
      handleClick(order);
    }
  }))) : order_jsx(order_style["h" /* NoOrderFound */], null, order_jsx(external_react_intl_["FormattedMessage"], {
    id: "intlNoOrderFound",
    defaultMessage: "No order found"
  })));
};

/* harmony default export */ var order_order = (OrdersContent);
// EXTERNAL MODULE: ./src/features/user-profile/user-profile.style.tsx
var user_profile_style = __webpack_require__("r0LQ");

// EXTERNAL MODULE: ./src/features/user-profile/sidebar/sidebar.tsx + 1 modules
var sidebar = __webpack_require__("jh0t");

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// CONCATENATED MODULE: ./src/pages/order.tsx
var pages_order_jsx = external_react_default.a.createElement;







const OrderPage = () => {
  return pages_order_jsx(external_react_default.a.Fragment, null, pages_order_jsx(seo["a" /* SEO */], {
    title: "Order - Ditto",
    description: "Order Details"
  }), pages_order_jsx(reuse_modal_["Modal"], null, pages_order_jsx(user_profile_style["b" /* PageWrapper */], null, pages_order_jsx(user_profile_style["c" /* SidebarSection */], null, pages_order_jsx(sidebar["a" /* default */], null)), pages_order_jsx(order_order, null))));
};

/* harmony default export */ var pages_order = __webpack_exports__["default"] = (OrderPage);

/***/ }),

/***/ "VxuB":
/***/ (function(module, exports) {

module.exports = require("rc-collapse");

/***/ }),

/***/ "Y3ZS":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "YBsB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "ZLcN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DELIVERY_METHOD; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const DELIVERY_METHOD = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
query GetDeliveryMethods {
    deliveryMethods(limit: 0) {
      items {
        id
        name
        details
        created_at
        isPickUp
        pickUpAddress
      }
      totalCount
      hasMore
    }
  }
`;

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


const httpLink = new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["HttpLink"]({
  uri: "http://54.232.137.175/api",
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

  return forward(operation);
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

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "f/wd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENCY; });
/* unused harmony export PICKUP_GUEMES_DELIVERY_METHOD */
/* unused harmony export PICKUP_GRANJA_DELIVERY_METHOD */
/* unused harmony export CUSTOMER_ADDRESS_DELIVERY_METHOD */
/* unused harmony export CASH_PAYMENT_OPTION */
/* unused harmony export CC_PAYMENT_OPTION */
/* unused harmony export BANK_TRANSFER_PAYMENT_OPTION */
/* unused harmony export BANK_TRANSFER_ALIAS */
/* unused harmony export BANK_TRANSFER_CBU */
/* unused harmony export COMPANY_EMAIL */
/************ CONSTANTS ***********/
const CURRENCY = '$';
const PICKUP_GUEMES_DELIVERY_METHOD = 'Lo busco en el centro';
const PICKUP_GRANJA_DELIVERY_METHOD = 'Lo busco en la granja';
const CUSTOMER_ADDRESS_DELIVERY_METHOD = 'Enviámelo a casa. ($300)';
const CASH_PAYMENT_OPTION = 'cash';
const CC_PAYMENT_OPTION = 'cc';
const BANK_TRANSFER_PAYMENT_OPTION = 'bank_transfer';
const BANK_TRANSFER_ALIAS = 'dittofarm';
const BANK_TRANSFER_CBU = '0000003100030458924685';
const COMPANY_EMAIL = 'dittofarmresistencia@gmail.com';

/***/ }),

/***/ "fvxO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__("bzos");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (false) {}

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "hs73":
/***/ (function(module, exports) {

module.exports = require("rc-table");

/***/ }),

/***/ "i2RQ":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "jh0t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./src/contexts/auth/auth.context.tsx
var auth_context = __webpack_require__("QfjN");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// EXTERNAL MODULE: ./src/components/nav-link/nav-link.tsx
var nav_link = __webpack_require__("Ek28");

// CONCATENATED MODULE: ./src/features/user-profile/sidebar/sidebar.style.tsx



const SidebarWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "sidebarstyle__SidebarWrapper",
  componentId: "mcjg6e-0"
})(["width:100%;height:auto;display:flex;flex-direction:column;flex-shrink:0;background-color:", ";box-shadow:0 0 6px rgba(0,0,0,0.16);"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
const SidebarTop = external_styled_components_default.a.div.withConfig({
  displayName: "sidebarstyle__SidebarTop",
  componentId: "mcjg6e-1"
})(["display:flex;flex-direction:column;width:100%;padding:40px 0;"]);
const SidebarBottom = external_styled_components_default.a.div.withConfig({
  displayName: "sidebarstyle__SidebarBottom",
  componentId: "mcjg6e-2"
})(["display:flex;flex-direction:column;width:100%;padding:40px 0;background-color:", ";"], Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'));
const SidebarMenu = external_styled_components_default()(nav_link["a" /* default */]).withConfig({
  displayName: "sidebarstyle__SidebarMenu",
  componentId: "mcjg6e-3"
})(["display:flex;a{font-family:", ";font-size:", "px;font-weight:", ";color:", ";transition:color 0.35s ease;padding:15px 60px;&.current-page{color:", ";border-left:5px solid ", ";padding-left:55px;}&:hover{color:", ";}&:last-child{margin-bottom:0;}}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const LogoutButton = external_styled_components_default.a.button.withConfig({
  displayName: "sidebarstyle__LogoutButton",
  componentId: "mcjg6e-4"
})(["border:none;background-color:transparent;text-align:left;cursor:pointer;font-family:", ";font-size:", "px;font-weight:", ";color:", ";transition:color 0.35s ease;padding:15px 60px;outline:0;&:hover{color:", ";}&:focus{box-shadow:none;}margin-bottom:0;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./src/site-settings/site-navigation.ts
var site_navigation = __webpack_require__("5l48");

// CONCATENATED MODULE: ./src/features/user-profile/sidebar/sidebar.tsx
var __jsx = external_react_default.a.createElement;







const SidebarCategory = () => {
  const {
    authDispatch
  } = Object(external_react_["useContext"])(auth_context["a" /* AuthContext */]);

  const handleLogout = () => {
    if (false) {}
  };

  return __jsx(external_react_default.a.Fragment, null, __jsx(SidebarWrapper, null, __jsx(SidebarTop, null, site_navigation["p" /* PROFILE_SIDEBAR_TOP_MENU */].map((item, index) => __jsx(SidebarMenu, {
    href: item.href,
    key: index,
    intlId: item.id
  }))), __jsx(SidebarBottom, null, site_navigation["o" /* PROFILE_SIDEBAR_BOTTOM_MENU */].map((item, index) => __jsx(SidebarMenu, {
    href: item.href,
    key: index,
    intlId: item.id
  })), __jsx(LogoutButton, {
    type: "button",
    onClick: handleLogout
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "nav.logout",
    defaultMessage: "Logout"
  })))));
};

/* harmony default export */ var sidebar = __webpack_exports__["a"] = (SidebarCategory);

/***/ }),

/***/ "jvFD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KeDb")


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

/***/ "pFUA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_ORDERS; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GET_ORDERS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query GetUserOrders {
    getUserOrders {
      id
      order_code
      customer_id
      contact_number
      datetime
      delivery_address
      payment_method
      payment_status
      delivery_method_id
      status
      discount_amount
      sub_total
      total
      delivery_pickup_date
      order_tracking {
        status
        ordering
        is_current
        step_competed
      }
      order_products {
        product_id
        image
        quantity
        recicledQuantity
        unit
        name
        price
      }
    }
  }
`;

/***/ }),

/***/ "pONU":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("i2RQ");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

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

/***/ "r0LQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SidebarSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentBox; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "user-profilestyle__PageWrapper",
  componentId: "sc-13927y3-0"
})(["width:100%;height:auto;min-height:100vh;display:flex;flex-wrap:wrap;background-color:", ";padding:140px 70px 40px;@media only screen and (max-width:990px){padding:100px 0 60px;}@media only screen and (min-width:991px) and (max-width:1280px){padding:130px 15px 60px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'));
const SidebarSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "user-profilestyle__SidebarSection",
  componentId: "sc-13927y3-1"
})(["width:300px;flex-shrink:0;margin-right:30px;@media only screen and (max-width:1199px){display:none;}"]);
const ContentBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "user-profilestyle__ContentBox",
  componentId: "sc-13927y3-2"
})(["width:calc(100% - 330px);height:auto;min-height:200px;display:flex;flex-direction:column;padding:60px 50px 20px;border:1px solid ", ";@media only screen and (max-width:1199px){width:100%;border:0;padding:20px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.700', '#e6e6e6'));


/***/ }),

/***/ "rQ82":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return MobileView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return OrderBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return OrderListWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return OrderList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return OrderDetailsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return Title; });
/* unused harmony export ImageWrapper */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ItemDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ItemName; });
/* unused harmony export ItemSize */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ItemSalePrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ItemPrice; });
/* unused harmony export TotalPrice */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return NoOrderFound; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const DesktopView = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "orderstyle__DesktopView",
  componentId: "sc-1xonknv-0"
})(["display:none;@media only screen and (min-width:990px){display:flex;}"]);
const MobileView = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "orderstyle__MobileView",
  componentId: "sc-1xonknv-1"
})(["display:none;@media only screen and (max-width:989px){width:100%;display:flex;}"]);
const OrderBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "orderstyle__OrderBox",
  componentId: "sc-1xonknv-2"
})(["width:calc(100% - 330px);display:flex;align-items:flex-start;@media only screen and (max-width:1199px){width:100%;padding:0 20px;}"]);
const OrderListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "orderstyle__OrderListWrapper",
  componentId: "sc-1xonknv-3"
})(["height:auto;display:flex;flex-direction:column;border:1px solid ", ";flex-shrink:0;margin-right:30px;overflow:hidden;padding:20px 10px;@media only screen and (max-width:1199px){width:310px;margin-right:20px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1'));
const OrderList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "orderstyle__OrderList",
  componentId: "sc-1xonknv-4"
})(["width:100%;padding:0 20px 20px;@media (max-width:767px){padding:0;}.rc-collapse{background-color:transparent;border-radius:0;border:0;> .rc-collapse-item{margin-bottom:15px;background-color:", ";border-radius:", ";overflow:hidden;margin-bottom:15px;display:flex;flex-direction:column;cursor:pointer;flex-shrink:0;border:1px solid transparent;&.rc-collapse-item-active{background-color:", ";border:1px solid ", ";}> .rc-collapse-header{padding:0;outline:0;}.rc-collapse-content{padding:0px;> .rc-collapse-content-box{box-sizing:border-box;padding:0px;margin:0;}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#f7f7f7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1'));
const OrderDetailsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "orderstyle__OrderDetailsWrapper",
  componentId: "sc-1xonknv-5"
})(["width:100%;min-height:calc(100vh - 190px);display:flex;flex-direction:column;border:1px solid ", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1'));
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "orderstyle__Title",
  componentId: "sc-1xonknv-6"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin:25px 0;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.heading', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.lg', '21'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136')); // Invoice Table design

const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "orderstyle__ImageWrapper",
  componentId: "sc-1xonknv-7"
})(["width:75px;height:75px;display:flex;flex-shrink:0;img{width:100%;height:100%;object-fit:cover;}"]);
const ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "orderstyle__ItemWrapper",
  componentId: "sc-1xonknv-8"
})(["display:flex;align-items:center;"]);
const ItemDetails = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "orderstyle__ItemDetails",
  componentId: "sc-1xonknv-9"
})(["display:flex;flex-direction:column;margin-left:15px;overflow:hidden;"]);
const ItemName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "orderstyle__ItemName",
  componentId: "sc-1xonknv-10"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-bottom:5px;text-overflow:ellipsis;overflow:hidden;display:inline-block;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'));
const ItemSize = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('span').withConfig({
  displayName: "orderstyle__ItemSize",
  componentId: "sc-1xonknv-11"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-bottom:5px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c'));
const ItemSalePrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('span').withConfig({
  displayName: "orderstyle__ItemSalePrice",
  componentId: "sc-1xonknv-12"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-bottom:5px;text-decoration:line-through;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c'));
const ItemPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('span').withConfig({
  displayName: "orderstyle__ItemPrice",
  componentId: "sc-1xonknv-13"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'));
const TotalPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "orderstyle__TotalPrice",
  componentId: "sc-1xonknv-14"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'));
const NoOrderFound = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "orderstyle__NoOrderFound",
  componentId: "sc-1xonknv-15"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";padding:50px 0;display:flex;align-items:center;justify-content:center;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c'));


/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "uChv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "uRCu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./src/utils/debounce.ts
function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction(...args) {
    const context = this;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/* harmony default export */ var utils_debounce = (debounce);
// CONCATENATED MODULE: ./src/utils/useComponentSize.js

 // maybe use a hook instead?

function useDimensions(liveMeasure = true, delay = 250, initialDimensions = {}) {
  const {
    0: dimensions,
    1: setDimensions
  } = Object(external_react_["useState"])(initialDimensions);
  const {
    0: node,
    1: setNode
  } = Object(external_react_["useState"])(null);
  const ref = Object(external_react_["useCallback"])(newNode => {
    setNode(newNode);
  }, []);
  Object(external_react_["useEffect"])(() => {
    // need ref to continue
    if (!node) {
      return;
    }

    const measure = () => {
      window.requestAnimationFrame(() => {
        const newDimensions = node.getBoundingClientRect();
        setDimensions(newDimensions);
      });
    }; // invoke measure right away


    measure();

    if (liveMeasure) {
      const debounceMeasure = utils_debounce(measure, delay);

      if ('ResizeObserver' in window) {
        const resizeObserver = new ResizeObserver(debounceMeasure);
        resizeObserver.observe(node);
        window.addEventListener('scroll', debounceMeasure);
        return () => {
          resizeObserver.disconnect();
          window.removeEventListener('scroll', debounceMeasure);
        };
      }

      window.addEventListener('resize', debounceMeasure);
      window.addEventListener('scroll', debounceMeasure);
      return () => {
        window.removeEventListener('resize', debounceMeasure);
        window.removeEventListener('scroll', debounceMeasure);
      };
    }
  }, [node, liveMeasure, delay]);
  return [ref, dimensions, node];
}

/* harmony default export */ var useComponentSize = __webpack_exports__["a"] = (useDimensions); // Usage
// function App() {
//   const [wrapperRef, dimensions] = useDimensions();
//   return (
//     <div ref={wrapperRef}>
//       height: {dimensions.height}
//       width: {dimensions.width}
//     </div>
//   );
// }

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });