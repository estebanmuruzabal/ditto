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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/JeY":
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "/ql5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGE_PASSWORD; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const CHANGE_PASSWORD = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
mutation ChangePassword (
  $id: ID!, 
  $old_password: String!,
  $new_password: String!
  $confirm_password: String!
) {
    changePassword(
    id: $id, 
    old_password: $old_password,
    new_password: $new_password,
    confirm_password: $confirm_password
  ) {
   status
    message
  }
}
`;

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("huF4");


/***/ }),

/***/ "1Zbg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PencilIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const PencilIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 7.2 7.2",
    width: width,
    height: height
  }, __jsx("path", {
    d: "M64,69.7v1.5h1.5l4.42-4.42-1.5-1.5Zm7.08-4.08a.387.387,0,0,0,0-.56l-.94-.94a.387.387,0,0,0-.56,0l-.74.74,1.5,1.5Z",
    transform: "translate(-64 -63.999)",
    fill: color
  }));
};

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

/***/ "2nMb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloseIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const CloseIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 10.003 10",
    width: width,
    height: height
  }, __jsx("path", {
    "data-name": "_ionicons_svg_ios-close (5)",
    d: "M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z",
    transform: "translate(-160.5 -160.55)",
    fill: color
  }));
};

/***/ }),

/***/ "4HXp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _profile_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("p2kv");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function reducer(state, action) {
  switch (action.type) {
    case 'HANDLE_ON_INPUT_CHANGE':
      return _objectSpread(_objectSpread({}, state), {}, {
        [action.payload.field]: action.payload.value
      });

    case 'ADD_CONTACT':
      const newContact = _objectSpread({}, action.payload.values);

      return _objectSpread(_objectSpread({}, state), {}, {
        phones: [...state.phones, newContact]
      });

    case 'UPDATE_CONTACT':
      if (action.payload.id !== null) {
        return _objectSpread(_objectSpread({}, state), {}, {
          phones: state.phones.map(item => item.id == action.payload.id ? _objectSpread(_objectSpread({}, item), action.payload.values) : item)
        });
      }

    case 'DELETE_CONTACT':
      return _objectSpread(_objectSpread({}, state), {}, {
        phones: state.phones.filter(item => item.id !== action.payload)
      });

    case 'ADD_ADDRESS':
      const newAdress = _objectSpread({}, action.payload);

      if (state.delivery_address == null) {
        return _objectSpread(_objectSpread({}, state), {}, {
          delivery_address: [newAdress]
        });
      } else {
        return _objectSpread(_objectSpread({}, state), {}, {
          delivery_address: [...state.delivery_address, newAdress]
        });
      }

    case 'UPDATE_ADDRESS':
      if (action.payload.id) {
        return _objectSpread(_objectSpread({}, state), {}, {
          delivery_address: state.delivery_address.map((item, index) => item.id === action.payload.id ? _objectSpread(_objectSpread({}, item), action.payload.value) : item)
        });
      }

    case 'DELETE_ADDRESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        delivery_address: state.delivery_address.filter((item, index) => item.id !== action.payload)
      });

    case 'ADD_CARD':
      const newCard = {
        id: action.payload.id,
        type: state.card.length === '0' ? 'primary' : 'secondary',
        cardType: action.payload.brand.toLowerCase(),
        name: state.name,
        lastFourDigit: action.payload.last4
      };
      return _objectSpread(_objectSpread({}, state), {}, {
        card: [newCard, ...state.card]
      });

    case 'DELETE_CARD':
      return _objectSpread(_objectSpread({}, state), {}, {
        card: state.card.filter(item => item.id !== action.payload)
      });

    case 'SET_PRIMARY_CONTACT':
      return _objectSpread(_objectSpread({}, state), {}, {
        phones: state.phones.map(item => item.id === action.payload ? _objectSpread(_objectSpread({}, item), {}, {
          is_primary: true,
          type: 'primary'
        }) : _objectSpread(_objectSpread({}, item), {}, {
          is_primary: false,
          type: 'secondary'
        }))
      });

    case 'SET_PRIMARY_ADDRESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        delivery_address: state.delivery_address.map((item, index) => item.id == action.payload ? _objectSpread(_objectSpread({}, item), {}, {
          is_primary: true
        }) : _objectSpread(_objectSpread({}, item), {}, {
          is_primary: false
        }))
      });

    case 'SET_PRIMARY_SCHEDULE':
      return _objectSpread(_objectSpread({}, state), {}, {
        deliveryMethods: state.deliveryMethods.map(item => {
          return item.id === action.payload ? _objectSpread(_objectSpread({}, item), {}, {
            type: 'primary'
          }) : _objectSpread(_objectSpread({}, item), {}, {
            type: 'secondary'
          });
        })
      });

    case 'SET_PRIMARY_CARD':
      return _objectSpread(_objectSpread({}, state), {}, {
        paymentMethods: state.paymentMethods.map(item => item.id === action.payload ? _objectSpread(_objectSpread({}, item), {}, {
          type: 'primary'
        }) : _objectSpread(_objectSpread({}, item), {}, {
          type: 'secondary'
        }))
      });

    default:
      return state;
  }
}

const ProfileProvider = ({
  children,
  initData
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, _objectSpread({}, initData));
  return __jsx(_profile_context__WEBPACK_IMPORTED_MODULE_1__[/* ProfileContext */ "a"].Provider, {
    value: {
      state,
      dispatch
    }
  }, children);
};

/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "4Jh2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADD_CARD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DELETE_CARD; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const ADD_CARD = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation($addressInput: String!) {
    updateAddress(addressInput: $addressInput) {
      id
      name
      address {
        id
        name
        info
      }
    }
  }
`;
const DELETE_CARD = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation($cardId: String!) {
    deletePaymentCard(cardId: $cardId) {
      id
      name
      address {
        id
        name
        info
      }
    }
  }
`;

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4a4h":
/***/ (function(module, exports) {

module.exports = require("react-styled-flexboxgrid");

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
const STAFF_MENU_ITEMS = [PROFILE_MENU_ITEM, ORDER_MENU_ITEM, WORK_PAGE_ITEM];
const AUTHORIZED_MENU_ITEMS = [PROFILE_MENU_ITEM, ORDER_MENU_ITEM // REQUEST_MEDICINE_MENU_ITEM,
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
const MOBILE_DRAWER_MENU = [HOME_MENU_ITEM, HELP_MENU_ITEM, OFFER_MENU_ITEM];
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

/***/ "6/p4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_PHONENUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UPDATE_PHONENUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SETPRIMARY_PHONENUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DELETE_PHONENUMBER; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const ADD_PHONENUMBER = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation AddPhoneNumber ( $id: ID!, $number:  String!) {
    addPhoneNumber(
      id: $id,
      number: $number,
    ) {
      id
      number
      status
      is_primary
    }
  }
`;
const UPDATE_PHONENUMBER = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation UpdatePhoneNumber ( $id: ID!, $phoneId: String!, $number:  String!) {
    updatePhoneNumber(
      id: $id,
      phoneId: $phoneId,
      number: $number,
    ) {
      id
      number
      status
      is_primary
    }
  }
`;
const SETPRIMARY_PHONENUMBER = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation SetPhoneNumberPrimary  ( $id: ID!, $phoneId: String!) {
    setPhoneNumberPrimary(
      id: $id,
      phoneId: $phoneId
    ) {
     status
      message
    }
  }
`;
const DELETE_PHONENUMBER = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation DeletePhoneNumber ( $id: ID!, $phoneId: String!) {
    deletePhoneNumber (
      id: $id,
      phoneId: $phoneId
    ) {
     status
      message
    }
  }
`;

/***/ }),

/***/ "6zwy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "react-text-mask"
var external_react_text_mask_ = __webpack_require__("I6Cj");
var external_react_text_mask_default = /*#__PURE__*/__webpack_require__.n(external_react_text_mask_);

// EXTERNAL MODULE: ./src/contexts/profile/profile.context.tsx
var profile_context = __webpack_require__("p2kv");

// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// EXTERNAL MODULE: ./src/graphql/mutation/phone.ts
var phone = __webpack_require__("6/p4");

// CONCATENATED MODULE: ./src/components/contact-card/contact-card.style.tsx


const FieldWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "contact-cardstyle__FieldWrapper",
  componentId: "sc-39aefu-0"
})(["width:100%;display:flex;flex-direction:column;margin-bottom:15px;"]);
const Heading = external_styled_components_default.a.div.withConfig({
  displayName: "contact-cardstyle__Heading",
  componentId: "sc-39aefu-1"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-bottom:15px;"], Object(theme_get_["themeGet"])('fontFamily.heading', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.md', '19'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// CONCATENATED MODULE: ./src/components/contact-card/contact-card.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }














const ContactValidationSchema = external_yup_["object"]().shape({
  number: external_yup_["string"]().required('Number is required')
});

const CreateOrUpdateContact = ({
  item
}) => {
  const ContactItem = item.item;
  const ID = item.id;
  let newContactid = null;
  const initialValues = {
    id: ContactItem.id || null,
    type: ContactItem.type || 'secondary',
    number: ContactItem.number || ''
  };
  const [addPhoneMutation] = Object(react_hooks_["useMutation"])(phone["a" /* ADD_PHONENUMBER */]);
  const [updatePhoneMutation] = Object(react_hooks_["useMutation"])(phone["d" /* UPDATE_PHONENUMBER */]);
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(profile_context["a" /* ProfileContext */]);

  const handleSubmit = async values => {
    if (Object.keys(ContactItem).length === 0) {
      const {
        data
      } = await addPhoneMutation({
        variables: {
          id: ID,
          number: values.number
        }
      });
      newContactid = data.addPhoneNumber.id;
      values.id = newContactid;
      dispatch({
        type: 'ADD_CONTACT',
        payload: {
          values: values
        }
      });
      Object(reuse_modal_["closeModal"])();
      /*if (typeof window !== 'undefined') {
        window.location.reload(false);
      }*/
    } else {
      const updatePhone = await updatePhoneMutation({
        variables: {
          id: ID,
          phoneId: ContactItem.id ? ContactItem.id : newContactid,
          number: values.number
        }
      });
      dispatch({
        type: 'UPDATE_CONTACT',
        payload: {
          values: values,
          id: ContactItem.id ? ContactItem.id : newContactid
        }
      });
      Object(reuse_modal_["closeModal"])();
    }
  };

  return __jsx(external_formik_["Formik"], {
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: ContactValidationSchema
  }, ({
    values,
    handleChange,
    handleBlur
  }) => __jsx(external_formik_["Form"], null, __jsx(Heading, null, ContactItem ? __jsx(external_react_intl_["FormattedMessage"], {
    id: "editContactId",
    defaultMessage: ""
  }) : __jsx(external_react_intl_["FormattedMessage"], {
    id: "addNewContactId",
    defaultMessage: ""
  })), __jsx(FieldWrapper, null, __jsx(external_react_text_mask_default.a, {
    mask: [/[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
    className: "form-control",
    placeholder: "Enter a phone number",
    guide: false,
    id: "my-input-id",
    value: values.number,
    onChange: handleChange,
    onBlur: handleBlur,
    name: "number",
    render: (ref, props) => __jsx(StyledInput, _extends({
      ref: ref
    }, props))
  })), __jsx(external_formik_["ErrorMessage"], {
    name: "number",
    component: StyledError
  }), __jsx(button_button["a" /* Button */], {
    type: "submit",
    style: {
      width: '100%',
      height: '44px'
    }
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "savedContactId",
    defaultMessage: "Save Contact"
  }))));
};

/* harmony default export */ var contact_card = __webpack_exports__["a"] = (CreateOrUpdateContact);
const StyledInput = external_styled_components_default.a.input.withConfig({
  displayName: "contact-card__StyledInput",
  componentId: "sc-7lusqt-0"
})(["width:100%;height:54px;border-radius:", ";font-family:", ";border:1px solid ", ";color:", ";font-size:16px;line-height:19px;font-weight:", ";padding:0 18px;box-sizing:border-box;transition:border-color 0.25s ease;&:hover,&:focus{outline:0;}&:focus{border-color:", ";}&::placeholder{color:", ";}"], Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('fonts.body', 'Lato, sans-serif'), Object(theme_get_["themeGet"])('colors.gray.700', '#e6e6e6'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798C'));
const StyledError = external_styled_components_default.a.div.withConfig({
  displayName: "contact-card__StyledError",
  componentId: "sc-7lusqt-1"
})(["color:red;padding-bottom:10px;margin-top:-5px;"]);

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

/***/ "B3Fo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2nMb");
/* harmony import */ var assets_icons_PencilIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("1Zbg");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Link = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "radio-card__Link",
  componentId: "sc-1vglpr2-0"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.blue.dark', '#161F6A'));
const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label.withConfig({
  displayName: "radio-card__CardWrapper",
  componentId: "sc-1vglpr2-1"
})(["display:inline-flex;align-items:center;border-radius:", ";background-color:", ";border:1px solid ", ";text-align:center;padding:15px 20px;margin-bottom:15px;margin-right:15px;position:relative;font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:24px;max-width:240px;cursor:pointer;width:100%;transition:all 0.25s ease;&.active{border:1px solid ", ";background-color:", ";}&.disabled{cursor:not-allowed;opacity:0.6;}&.item-has-title{flex-direction:column;text-align:left;align-items:flex-start;padding:15px;}&:last-child{margin-right:0;}input[type='radio']{opacity:0;visibility:hidden;position:absolute;top:0;left:0;}&:hover{.button-wrapper{opacity:1;visibility:visible;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('radii.base', '6px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.200', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.200', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'));
const CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "radio-card__CardTitle",
  componentId: "sc-1vglpr2-2"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.2;margin-bottom:5px;text-transform:capitalize;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.bold', '#0D1136'));
const CardContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "radio-card__CardContent",
  componentId: "sc-1vglpr2-3"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.medium', '#424561'));
const CardButtons = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "radio-card__CardButtons",
  componentId: "sc-1vglpr2-4"
})(["display:block;position:absolute;top:10px;right:10px;display:flex;align-items:center;opacity:0;visibility:hidden;transition:0.2s ease-in-out;"]);
const ActionButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "radio-card__ActionButton",
  componentId: "sc-1vglpr2-5"
})(["display:flex;align-items:center;justify-content:center;border:0;width:20px;height:20px;border-radius:50%;overflow:hidden;margin-left:5px;cursor:pointer;outline:0;padding:0;color:", ";&.edit-btn{background-color:", ";}&.delete-btn{background-color:", ";}svg{display:block;width:8px;height:auto;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.secondary.regular', '#ff5b60'));

const RadioCard = ({
  id,
  name,
  title,
  content,
  editIcon,
  deleteIcon,
  withActionButtons,
  onEdit,
  onDelete,
  onClick,
  hasEdit,
  hasDelete,
  disabled,
  checked,
  onChange
}) => {
  var _content;

  const getLinkOnly = text => {
    if (!text) return;
    const word = 'https';
    const index = text.indexOf(word); // 8

    const length = word.length; // 7

    return text.slice(index + length - 5);
  };

  const contentDivided = (_content = content) === null || _content === void 0 ? void 0 : _content.split(' | ');
  const linkContent = contentDivided === null || contentDivided === void 0 ? void 0 : contentDivided.find(part => part.includes('http'));
  const linkOnly = getLinkOnly(linkContent);
  const preLinkText = linkContent === null || linkContent === void 0 ? void 0 : linkContent.substring(0, linkContent.indexOf('http'));
  content = linkOnly ? `${contentDivided[1] && contentDivided[1]} ${contentDivided[2] && contentDivided[2]}` : content;
  return __jsx(CardWrapper, {
    htmlFor: `${name}-${id}`,
    className: `label ${title ? 'item-has-title' : 'no_title'}
      ${checked ? 'active' : 'not_active'}`
  }, __jsx("input", {
    type: "radio",
    id: `${name}-${id}`,
    name: name,
    value: content,
    disabled: disabled,
    checked: checked,
    onChange: onChange,
    onClick: onClick
  }), title && __jsx(CardTitle, null, title), content && __jsx(CardContent, null, content), preLinkText && __jsx(CardContent, null, preLinkText), linkOnly && __jsx(Link, {
    href: linkOnly,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Click aqu\xED"), withActionButtons && __jsx(CardButtons, {
    className: "button-wrapper"
  }, hasEdit && __jsx(ActionButton, {
    onClick: onEdit,
    className: "edit-btn"
  }, editIcon), hasDelete && __jsx(ActionButton, {
    onClick: onDelete,
    className: "delete-btn"
  }, deleteIcon)));
};

RadioCard.defaultProps = {
  title: '',
  content: '',
  editIcon: __jsx(assets_icons_PencilIcon__WEBPACK_IMPORTED_MODULE_4__[/* PencilIcon */ "a"], null),
  deleteIcon: __jsx(assets_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_3__[/* CloseIcon */ "a"], null),
  withActionButtons: true,
  hasEdit: true,
  hasDelete: true
};
/* harmony default export */ __webpack_exports__["a"] = (RadioCard);

/***/ }),

/***/ "B68Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StyledButton */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ExBD");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "button__StyledButton",
  componentId: "pqqkhb-0"
})(props => _styled_system_css__WEBPACK_IMPORTED_MODULE_3___default()({
  px: '15px',
  py: 0,
  fontSize: ['base'],
  fontWeight: 'bold',
  cursor: props.disabled ? 'not-allowed' : 'pointer',
  color: props.disabled ? 'text.light' : 'white',
  bg: props.disabled ? 'gray.500' : 'primary.regular',
  transition: 'all 0.3s ease',
  borderRadius: 'base',
  '&:hover': {
    color: props.disabled ? 'text.light' : 'white',
    bg: props.disabled ? 'gray.500' : 'primary.hover'
  }
}), {
  appearance: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  textAlign: 'center',
  height: '38px',
  textDecoration: 'none',
  fontFamily: 'inherit',
  border: 0,
  '&:focus': {
    outline: 'none'
  }
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_4__["variant"])({
  variants: {
    outlined: {
      color: 'primary.regular',
      bg: 'white',
      border: '1px solid',
      borderColor: 'gray.500',
      '&:hover': {
        borderColor: 'primary.regular',
        color: 'primary.regular',
        bg: 'white'
      }
    },
    primary: {
      color: 'white',
      bg: 'primary.regular',
      '&:hover': {
        bg: 'primary.hover'
      }
    },
    secondary: {
      color: 'primary.regular',
      bg: 'white',
      border: '2px solid',
      borderColor: 'gray.500',
      '&:hover': {
        color: 'white',
        bg: 'primary.regular',
        borderColor: 'primary.regular'
      }
    },
    text: {
      color: 'primary.regular',
      bg: 'transparent',
      '&:hover': {
        bg: 'transparent',
        color: 'primary.hover'
      }
    },
    select: {
      width: 26,
      height: 26,
      lineHeight: 1,
      flexShrink: 0,
      border: '1px solid',
      borderColor: 'text.regular',
      borderRadius: 13,
      padding: 0,
      color: 'text.bold',
      bg: 'transparent',
      '&.selected': {
        bg: 'primary.regular',
        color: 'white',
        borderColor: 'primary.regular'
      },
      '&:hover:not(.selected)': {
        bg: 'transparent',
        color: 'primary.regular',
        borderColor: 'primary.regular'
      }
    }
  }
}), Object(styled_system__WEBPACK_IMPORTED_MODULE_4__["variant"])({
  prop: 'size',
  variants: {
    big: {
      height: '48px',
      px: 30
    },
    small: {
      height: '30px',
      fontSize: 14
    }
  }
}), Object(styled_system__WEBPACK_IMPORTED_MODULE_4__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_4__["border"], styled_system__WEBPACK_IMPORTED_MODULE_4__["space"], styled_system__WEBPACK_IMPORTED_MODULE_4__["layout"]));
const rotate = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
const Spinner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "button__Spinner",
  componentId: "pqqkhb-1"
})(["width:18px;height:18px;margin-left:10px;border:3px solid #ffffff;border-top:3px solid ", ";border-radius:50%;transition-property:transform;animation-name:", ";animation-duration:1.2s;animation-iteration-count:infinite;animation-timing-function:linear;"], props => props.color ? props.color : Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('primary.regular', '#009E7F'), rotate); // const Spinner = styled.div((props) =>
//   css({
//     width: 18,
//     height: 18,
//     marginLeft: 10,
//     border: '3px solid white',
//     borderTop: `3px solid ${props.color ? props.color : 'primary.regular'}`,
//     borderRadius: '50%',
//     transitionProperty: 'transform',
//     animationName: `${rotate}`,
//     animationDuration: '1.2s',
//     animationIterationCount: 'infinite',
//     animationTimingFunction: 'linear',
//   })
// );

const Button = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((_ref, ref) => {
  let {
    children,
    disabled,
    loading = false
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "disabled", "loading"]);

  return __jsx(StyledButton, _extends({
    ref: ref
  }, props, {
    disabled: disabled
  }), children, loading && __jsx(Spinner, null));
});

/***/ }),

/***/ "C+de":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UPDATE_ME; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const UPDATE_ME = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation($meInput: String!) {
    updateMe(meInput: $meInput) {
      id
      name
      email
    }
  }
`;

/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

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

/***/ "ExBD":
/***/ (function(module, exports) {

module.exports = require("@styled-system/css");

/***/ }),

/***/ "FTk/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const RadioGroupWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "radio-group-three__RadioGroupWrapper",
  componentId: "pj1932-0"
})(["display:flex;flex-wrap:wrap;justify-content:start !important;"]);

const RadioGroupThree = ({
  items = [],
  component,
  containerClassName,
  secondaryComponent
}) => {
  return __jsx(RadioGroupWrapper, {
    className: `radioGroup ${containerClassName}`.trim()
  }, items.map((item, index) => component && component(item, index)), items.length < 2 && secondaryComponent);
};

/* harmony default export */ __webpack_exports__["a"] = (RadioGroupThree);

/***/ }),

/***/ "GyXf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("C8TP");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("qbum");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_forms_text_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("fWan");
/* harmony import */ var components_button_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("B68Z");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var graphql_mutation_address__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("bQa+");
/* harmony import */ var _address_card_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ViYO");
/* harmony import */ var contexts_profile_profile_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("p2kv");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_10__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










 // Shape of form values

// Wrap our form with the using withFormik HoC
const FormEnhancer = Object(formik__WEBPACK_IMPORTED_MODULE_2__["withFormik"])({
  // Transform outer props into form values
  mapPropsToValues: props => {
    const ID = props.item.id;
    const addressItem = props.item.item;
    return {
      id: ID || null,
      addressId: addressItem.id || null,
      title: addressItem.title || '',
      address: addressItem.address || '',
      instructions: addressItem.instructions || '',
      location: addressItem.location || ''
    };
  },
  validationSchema: yup__WEBPACK_IMPORTED_MODULE_1__["object"]().shape({
    title: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().required('Required!'),
    address: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().required('Required'),
    location: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().required('Required')
  }),
  handleSubmit: values => {// do submitting things
  }
});

const UpdateAddressTwo = props => {
  const {
    isValid,
    item,
    values,
    touched,
    errors,
    dirty,
    handleChange,
    handleBlur,
    handleReset,
    isSubmitting
  } = props;
  const ID = item.id;
  let newAddressid = null;
  const addressItem = item.item;
  const addressValue = {
    id: ID,
    addressId: addressItem.id,
    title: values.title,
    address: values.address,
    location: values.location,
    instructions: values.instructions
  };
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_profile_profile_context__WEBPACK_IMPORTED_MODULE_9__[/* ProfileContext */ "a"]);
  const intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_10__["useIntl"])();
  const [updateAddressMutation] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(graphql_mutation_address__WEBPACK_IMPORTED_MODULE_7__[/* UPDATE_ADDRESS */ "d"]);
  const [addAddressMutation] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(graphql_mutation_address__WEBPACK_IMPORTED_MODULE_7__[/* ADD_ADDRESS */ "a"]);

  const handleSubmit = async () => {
    if (isValid) {
      const {
        id,
        addressId,
        title,
        address,
        location,
        instructions
      } = addressValue;

      if (Object.keys(addressItem).length === 0) {
        const {
          data
        } = await addAddressMutation({
          variables: {
            id,
            title,
            address,
            location,
            instructions
          }
        });
        newAddressid = data.addDeliveryAddress.id;
        addressValue.id = data.addDeliveryAddress.id;
        dispatch({
          type: 'ADD_ADDRESS',
          payload: addressValue
        });
        Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["closeModal"])();
      } else {
        const updateAddressData = await updateAddressMutation({
          variables: {
            id,
            addressId,
            title,
            address,
            location,
            instructions
          }
        });
        dispatch({
          type: 'UPDATE_ADDRESS',
          payload: {
            value: addressValue,
            id: addressItem.id
          }
        });
        Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["closeModal"])();
      }
    }
  };

  return __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], null, __jsx(_address_card_style__WEBPACK_IMPORTED_MODULE_8__[/* Heading */ "b"], null, intl.formatMessage({
    id: (addressItem === null || addressItem === void 0 ? void 0 : addressItem.id) ? 'editAddressId' : 'addNewAddressId',
    defaultMessage: 'Address name'
  })), __jsx(_address_card_style__WEBPACK_IMPORTED_MODULE_8__[/* FieldWrapper */ "a"], null, __jsx(components_forms_text_field__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    id: "title",
    type: "text",
    placeholder: intl.formatMessage({
      id: 'addressRefId',
      defaultMessage: 'Address name'
    }),
    error: touched.title && errors.title,
    value: values.title,
    onChange: handleChange,
    onBlur: handleBlur
  })), __jsx(_address_card_style__WEBPACK_IMPORTED_MODULE_8__[/* FieldWrapper */ "a"], null, __jsx(components_forms_text_field__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    id: "address",
    type: "text",
    placeholder: intl.formatMessage({
      id: 'addressId',
      defaultMessage: 'Address'
    }),
    error: touched.address && errors.address,
    value: values.address,
    onChange: handleChange,
    onBlur: handleBlur
  })), __jsx(_address_card_style__WEBPACK_IMPORTED_MODULE_8__[/* FieldWrapper */ "a"], null, __jsx(components_forms_text_field__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    id: "location",
    type: "text",
    placeholder: intl.formatMessage({
      id: 'locationId',
      defaultMessage: 'Localidad'
    }),
    error: touched.location && errors.location,
    value: values.location,
    onChange: handleChange,
    onBlur: handleBlur
  })), __jsx(_address_card_style__WEBPACK_IMPORTED_MODULE_8__[/* FieldWrapper */ "a"], null, __jsx(components_forms_text_field__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    id: "instructions",
    as: "textarea",
    placeholder: intl.formatMessage({
      id: 'instructionsId',
      defaultMessage: 'Delivery instructions'
    }),
    error: touched.instructions && errors.instructions,
    value: values.instructions,
    onChange: handleChange,
    onBlur: handleBlur
  })), __jsx(components_button_button__WEBPACK_IMPORTED_MODULE_5__[/* Button */ "a"], {
    onClick: handleSubmit,
    type: "submit",
    style: {
      width: '100%',
      height: '44px'
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
    id: "savedAddressId",
    defaultMessage: "Save Address"
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (FormEnhancer(UpdateAddressTwo));

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

/***/ "I6Cj":
/***/ (function(module, exports) {

module.exports = require("react-text-mask");

/***/ }),

/***/ "IE2q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2nMb");
/* harmony import */ var assets_icons_PencilIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("1Zbg");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label.withConfig({
  displayName: "radio-card-two__CardWrapper",
  componentId: "s59df7-0"
})(["display:inline-flex;align-items:center;border-radius:", ";background-color:", ";border:1px solid ", ";text-align:center;padding:15px 20px;margin-bottom:15px;margin-right:15px;position:relative;font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:24px;max-width:240px;cursor:pointer;width:100%;transition:all 0.25s ease;&.active{border:1px solid ", ";background-color:", ";}&.disabled{cursor:not-allowed;opacity:0.6;}&.item-has-title{flex-direction:column;text-align:left;align-items:flex-start;padding:15px;}&:last-child{margin-right:0;}input[type='radio']{opacity:0;visibility:hidden;position:absolute;top:0;left:0;}&:hover{.button-wrapper{opacity:1;visibility:visible;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('radii.base', '6px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.200', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.200', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'));
const CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "radio-card-two__CardTitle",
  componentId: "s59df7-1"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.2;margin-bottom:5px;text-transform:capitalize;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.bold', '#0D1136'));
const CardContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "radio-card-two__CardContent",
  componentId: "s59df7-2"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.medium', '#424561'));
const CardButtons = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "radio-card-two__CardButtons",
  componentId: "s59df7-3"
})(["display:block;position:absolute;top:10px;right:10px;display:flex;align-items:center;opacity:0;visibility:hidden;transition:0.2s ease-in-out;"]);
const ActionButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "radio-card-two__ActionButton",
  componentId: "s59df7-4"
})(["display:flex;align-items:center;justify-content:center;border:0;width:20px;height:20px;border-radius:50%;overflow:hidden;margin-left:5px;cursor:pointer;outline:0;padding:0;color:", ";&.edit-btn{background-color:", ";}&.delete-btn{background-color:", ";}svg{display:block;width:8px;height:auto;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.secondary.regular', '#ff5b60'));

const RadioCardTWO = ({
  id,
  name,
  title,
  address,
  location,
  instructions,
  editIcon,
  deleteIcon,
  withActionButtons,
  onEdit,
  onDelete,
  onClick,
  hasEdit,
  hasDelete,
  disabled,
  isChecked,
  checked,
  onChange
}) => {
  const intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["useIntl"])();
  return __jsx(CardWrapper, {
    htmlFor: `${name}-${id}`,
    className: `label ${title ? 'item-has-title' : 'no_title'}
      ${isChecked ? 'active' : 'not_active'}`
  }, __jsx("input", {
    type: "radio",
    id: `${name}-${id}`,
    name: name,
    value: address,
    disabled: disabled,
    checked: isChecked,
    onChange: onChange,
    onClick: onClick
  }), title && __jsx(CardTitle, null, title), address && __jsx(CardContent, null, intl.formatMessage({
    id: 'addressTitleId',
    defaultMessage: 'Address:'
  }), " ", address), location && __jsx(CardContent, null, intl.formatMessage({
    id: 'localidadTitleId',
    defaultMessage: 'Location:'
  }), " ", location), instructions && __jsx(CardContent, null, intl.formatMessage({
    id: 'instructionsTitleId',
    defaultMessage: 'Instructions:'
  }), " ", instructions), withActionButtons && __jsx(CardButtons, {
    className: "button-wrapper"
  }, hasEdit && __jsx(ActionButton, {
    onClick: onEdit,
    className: "edit-btn"
  }, editIcon), hasDelete && __jsx(ActionButton, {
    onClick: onDelete,
    className: "delete-btn"
  }, deleteIcon)));
};

RadioCardTWO.defaultProps = {
  title: '',
  address: '',
  editIcon: __jsx(assets_icons_PencilIcon__WEBPACK_IMPORTED_MODULE_4__[/* PencilIcon */ "a"], null),
  deleteIcon: __jsx(assets_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_3__[/* CloseIcon */ "a"], null),
  withActionButtons: true,
  hasEdit: true,
  hasDelete: true
};
/* harmony default export */ __webpack_exports__["a"] = (RadioCardTWO);

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

/***/ "IdAm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Label; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ExBD");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);



const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label.withConfig({
  displayName: "label__Label",
  componentId: "sc-1tfscfg-0"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  fontSize: 'base',
  fontWeight: 'bold',
  color: 'text.bold',
  lineHeight: '19px',
  mb: '15px',
  display: 'flex'
}), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["layout"]));

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

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

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

/***/ "ViYO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Heading; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const FieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "address-cardstyle__FieldWrapper",
  componentId: "sc-1ro3neg-0"
})(["width:100%;display:flex;flex-direction:column;margin-bottom:15px;"]);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "address-cardstyle__Heading",
  componentId: "sc-1ro3neg-1"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-bottom:15px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontFamily.heading', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.md', '19'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'));


/***/ }),

/***/ "VnWI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ExBD");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);



const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "input__Input",
  componentId: "sc-1fl5iu3-0"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  display: 'block',
  width: '100%',
  p: '0 18px',
  appearance: 'none',
  fontFamily: 'body',
  fontSize: 'base',
  lineHeight: 'inherit',
  border: '1px solid',
  borderColor: 'gray.500',
  borderRadius: 'base',
  backgroundColor: 'white',
  color: 'text.bold',
  height: '48px',
  transition: 'all 0.25s ease',
  // mb: 3,
  '&:focus': {
    borderColor: 'primary.regular'
  }
}), {
  '&:hover,&:focus': {
    outline: 0
  },
  '&::placeholder': {
    color: ''
  },
  '&::-webkit-inner-spin-button,&::-webkit-outer-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0
  },
  '&.disabled': {
    cursor: 'not-allowed',
    opacity: 0.6
  }
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_2__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["border"]));

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

/***/ "agtI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const RadioGroupWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "radio-group-two__RadioGroupWrapper",
  componentId: "sc-137q150-0"
})(["display:flex;flex-wrap:wrap;"]);

const RadioGroupTwo = ({
  items = [],
  component,
  containerClassName,
  secondaryComponent
}) => {
  if (items) {
    return __jsx(RadioGroupWrapper, {
      className: `radioGroup ${containerClassName}`.trim()
    }, items.map((item, index) => component && component(item, index)), items.length < 3 && secondaryComponent);
  } else {
    return __jsx(RadioGroupWrapper, {
      className: `radioGroup ${containerClassName}`.trim()
    }, secondaryComponent && secondaryComponent);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (RadioGroupTwo);

/***/ }),

/***/ "b6eG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UPDATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UPDATE_USER_WORK_INFO; });
/* unused harmony export UPDATE_USER_LOGS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UPDATE_USER_TODO_TASKS; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const UPDATE_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation UpdateUser(
    $id: ID!, 
    $name: String!,
    $email: String!,
  ) { updateUserNameAndEmail(
      id: $id, 
      name: $name,
      email: $email,
    ) {
    status
      message
    }
  }
`;
const UPDATE_USER_WORK_INFO = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation UpdateUserWorkInfo(
    $id: ID!, 
    $isWorking: Boolean,
    $startedWorkTime: String,
    $stoppedWorkTime: String,
    $ratePerHour: Int,
    $logDescription: String,
    $totalWorkingMinutesPerWeek: Int,
    $totalSalaryToPayWeekly: Int,
    $advancedSalaryPaid: Int,
    $taskRelated: String,
    $role: String
  ) { updateUserWorkInfo(
      id: $id, 
      isWorking: $isWorking,
      startedWorkTime: $startedWorkTime,
      stoppedWorkTime: $stoppedWorkTime,
      ratePerHour: $ratePerHour,
      logDescription: $logDescription,
      totalWorkingMinutesPerWeek: $totalWorkingMinutesPerWeek,
      totalSalaryToPayWeekly: $totalSalaryToPayWeekly,
      advancedSalaryPaid: $advancedSalaryPaid,
      taskRelated: $taskRelated,
      role: $role
    ) {
    status
      message
    }
  }
`;
const UPDATE_USER_LOGS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation UpdateUserLogs(
    $id: ID!, 
    $logs: any,
  ) { updateUserLogs(
      id: $id, 
      logs: $logs,
    ) {
    status
      message
    }
  }
`;
const UPDATE_USER_TODO_TASKS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation UpdateUserTasks(
    $id: ID!, 
    $taskId: String,
    $description: String,
    $startDate: String,
    $finishDate: String,
    $plannedDate: String,
    $isRepetitived: Boolean,
    $completationTimes: String,
    $workedHours: String,
    $isDone: Boolean
  ) { updateUserTasks(
      id: $id, 
      taskId: $taskId,
      description: $description,
      startDate: $startDate,
      finishDate: $finishDate,
      plannedDate: $plannedDate,
      isRepetitived: $isRepetitived,
      completationTimes: $completationTimes,
      workedHours: $workedHours,
      isDone: $isDone
    ) {
    status
      message
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
/* import { useMemo } from 'react'; */
//import { ApolloClient } from 'apollo-client';
//import { InMemoryCache } from 'apollo-cache-inmemory';
//import { HttpLink, createHttpLink } from 'apollo-link-http';
//import { setContext } from 'apollo-link-context';

/* 
import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
} from '@apollo/client';

let apolloClient;

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT,
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  },
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  let token = null;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('access_token');
  }
  operation.setContext({
    headers: {
      'x-access-token': token ? token : '',
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: authMiddleware.concat(httpLink),
  cache: new InMemoryCache(),
}); */

/*
console.log(process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT);
function createApolloClient() {
  let token = null;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('access_token');
  }
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT, // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials`
      headers: {
        'x-access-token': token ? token : '',
      }, // Additional fetch() options like `headers`
      onError: ({ networkError, graphQLErrors }) => {
        console.log('graphQLErrors', graphQLErrors);
        console.log('networkError', networkError);
      },
    }),
    cache: new InMemoryCache(),
  });
}*/

/* export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? client;

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
} */


const httpLink = new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["HttpLink"]({
  uri: 'http://54.232.137.175/api',
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

/***/ "bQa+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UPDATE_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SETPRIMARY_ADDRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DELETE_ADDRESS; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const ADD_ADDRESS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
mutation AddDeliveryAddress(
  $id: ID!, 
  $title: String!,
  $address: String!,
  $location: String,
  $instructions: String,
) {
  addDeliveryAddress(
    id: $id, 
    title: $title, 
    address: $address, 
    location: $location,
    instructions: $instructions
  ) {
    id
    title
    address
    location
    instructions
    is_primary
  }
}
`;
const UPDATE_ADDRESS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation UpdateDeliveryAddress (
      $id: ID!, 
      $addressId: String!
      $title: String!,
      $address: String!,
      $location: String,
      $instructions: String
     ){
      updateDeliveryAddress (
        id: $id, 
        addressId: $addressId,
        title: $title, 
        address: $address, 
        location: $location,
        instructions: $instructions
    ){
      id
      title
      address
      location
      instructions
      is_primary
    }
  }
`;
const SETPRIMARY_ADDRESS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation SetDeliveryAddressPrimary (
      $id: ID!, 
      $addressId: String!
     ){
      setDeliveryAddressPrimary (
        id: $id, 
        addressId: $addressId
    ){
      message
      status
    }
  }
`;
const DELETE_ADDRESS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation DeleteDeliveryAddress( 
    $id: ID!, 
    $addressId: String!
    ) {
    deleteDeliveryAddress(
      id: $id,
      addressId: $addressId,
    ) {
     status
      message
    }
  }
`;

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fWan":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_forms_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("VnWI");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const FieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "text-field__FieldWrapper",
  componentId: "sc-1x5xpgo-0"
})(["textarea{height:auto;min-height:171px;padding-top:15px;resize:none;}"]);
const InputFeedback = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "text-field__InputFeedback",
  componentId: "sc-1x5xpgo-1"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";padding-top:10px;display:flex;justify-content:flex-end;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.secondary.hover', '#FF282F')); // const Input = styled.input`
//   width: 100%;
//   height: 54px;
//   border-radius: 6px;
//   font-family: ${themeGet('fontFamily.0', 'Lato, sans-serif')};
//   border: 1px solid ${themeGet('colors.gray.700', '#e6e6e6')};
//   color: ${themeGet('colors.text.bold', '#0D1136')};
//   font-size: ${themeGet('fontSizes.base', '15')}px;
//   font-weight: ${themeGet('fontWeights.regular', '400')};
//   line-height: 19px;
//   padding: 0 18px;
//   box-sizing: border-box;
//   transition: border-color 0.25s ease;
//   &:hover,
//   &:focus {
//     outline: 0;
//   }
//   &:focus {
//     border-color: ${themeGet('colors.primary', '#009e7f')};
//   }
//   &::placeholder {
//     color: ${themeGet('colors.text.regular', '#77798C')};
//   }
// `;

const TextField = (_ref) => {
  let {
    type,
    id,
    label,
    error,
    value,
    onChange,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["type", "id", "label", "error", "value", "onChange", "className"]);

  return __jsx(FieldWrapper, null, label && __jsx("label", {
    className: "label",
    htmlFor: id
  }, label), __jsx(components_forms_input__WEBPACK_IMPORTED_MODULE_3__[/* Input */ "a"], _extends({
    id: id,
    type: type,
    value: value,
    onChange: onChange
  }, props)), error && __jsx(InputFeedback, null, error));
};

/* harmony default export */ __webpack_exports__["a"] = (TextField);

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

/***/ "huF4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: ./src/graphql/query/customer.query.ts
var customer_query = __webpack_require__("yR3f");

// EXTERNAL MODULE: ./src/contexts/profile/profile.provider.tsx
var profile_provider = __webpack_require__("4HXp");

// EXTERNAL MODULE: external "react-styled-flexboxgrid"
var external_react_styled_flexboxgrid_ = __webpack_require__("4a4h");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./src/components/radio-card/radio-card-two.tsx
var radio_card_two = __webpack_require__("IE2q");

// EXTERNAL MODULE: ./src/components/radio-card/radio-card.tsx
var radio_card = __webpack_require__("B3Fo");

// EXTERNAL MODULE: ./src/contexts/profile/profile.context.tsx
var profile_context = __webpack_require__("p2kv");

// EXTERNAL MODULE: ./src/contexts/auth/auth.context.tsx
var auth_context = __webpack_require__("QfjN");

// EXTERNAL MODULE: ./src/graphql/mutation/address.ts
var address = __webpack_require__("bQa+");

// EXTERNAL MODULE: ./src/graphql/mutation/user.ts
var user = __webpack_require__("b6eG");

// EXTERNAL MODULE: ./src/graphql/mutation/changePassword.ts
var changePassword = __webpack_require__("/ql5");

// EXTERNAL MODULE: ./src/graphql/mutation/card.ts
var mutation_card = __webpack_require__("4Jh2");

// EXTERNAL MODULE: ./src/graphql/mutation/phone.ts
var phone = __webpack_require__("6/p4");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// EXTERNAL MODULE: external "@styled-system/css"
var css_ = __webpack_require__("ExBD");
var css_default = /*#__PURE__*/__webpack_require__.n(css_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./src/features/user-profile/settings/settings.style.tsx

 // import Inputs from 'components/input/input';




const SettingsForm = external_styled_components_default.a.div.withConfig({
  displayName: "settingsstyle__SettingsForm",
  componentId: "sc-9xbk1w-0"
})(["width:100%;display:flex;flex-direction:column;"]);
const HeadingSection = external_styled_components_default.a.div.withConfig({
  displayName: "settingsstyle__HeadingSection",
  componentId: "sc-9xbk1w-1"
})(["width:100%;display:flex;align-items:center;justify-content:space-between;margin-bottom:25px;"]);
const Title = external_styled_components_default.a.h3.withConfig({
  displayName: "settingsstyle__Title",
  componentId: "sc-9xbk1w-2"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fonts.heading', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.lg', '21'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const SettingsFormContent = external_styled_components_default.a.div.withConfig({
  displayName: "settingsstyle__SettingsFormContent",
  componentId: "sc-9xbk1w-3"
})(["margin-bottom:50px;&:last-child{margin-bottom:0;}"]); // const Input = styled(Inputs)`
//   @media only screen and (min-width: 0em) and (max-width: 47.99em) {
//     margin-bottom: 30px;
//   }
// `;

const Row = external_styled_components_default()(external_react_styled_flexboxgrid_["Row"]).withConfig({
  displayName: "settingsstyle__Row",
  componentId: "sc-9xbk1w-4"
})(["margin-bottom:40px;@media only screen and (min-width:0em) and (max-width:47.99em){margin-bottom:30px;}"]);
const ButtonGroup = external_styled_components_default.a.div.withConfig({
  displayName: "settingsstyle__ButtonGroup",
  componentId: "sc-9xbk1w-5"
})(["display:flex;flex-direction:column;.radioGroup{flex-grow:1;justify-content:space-between;label{margin-top:0;flex:calc(33.333333333% - 10px);max-width:calc(33.333333333% - 10px);margin-bottom:15px;&:nth-child(3n){margin-right:0;}@media (max-width:700px){flex:calc(50% - 10px);max-width:calc(50% - 10px);&:nth-child(3n){margin-right:15px;}&:nth-child(2n){margin-right:0;}}@media (max-width:480px){flex:100%;max-width:100%;margin-right:0;&:nth-child(3n){margin-right:0;}&:nth-child(2n){margin-right:0;}}}}.add-button{flex:calc(33.3333333333% - 10px);max-width:calc(33.3333333333% - 10px);flex-shrink:0;height:auto;min-height:77px;border:1px dashed ", ";margin-bottom:15px;margin-left:0;margin-right:auto;&:hover{border-color:", ";}@media (max-width:700px){flex:calc(50% - 10px);max-width:calc(50% - 10px);}@media (max-width:480px){flex:100%;max-width:100%;}}"], Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const SuccessMsg = external_styled_components_default()('span').withConfig({
  displayName: "settingsstyle__SuccessMsg",
  componentId: "sc-9xbk1w-6"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:#51b96b;padding-top:10px;display:flex;margin-left:20px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.xs', '12'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'));
const ErrorMsg = external_styled_components_default()('span').withConfig({
  displayName: "settingsstyle__ErrorMsg",
  componentId: "sc-9xbk1w-7"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";padding-top:10px;display:flex;margin-left:20px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.xs', '12'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.secondary.hover', '#FF282F'));
const InputUpper = external_styled_components_default.a.input.withConfig({
  displayName: "settingsstyle__InputUpper",
  componentId: "sc-9xbk1w-8"
})(css_default()({
  display: 'block',
  width: '100%',
  textTransform: 'capitalize',
  p: '0 18px',
  appearance: 'none',
  fontFamily: 'body',
  fontSize: 'base',
  lineHeight: 'inherit',
  border: '1px solid',
  borderColor: 'gray.500',
  borderRadius: 'base',
  backgroundColor: 'white',
  color: 'text.bold',
  height: '48px',
  transition: 'all 0.25s ease',
  // mb: 3,
  '&:focus': {
    borderColor: 'primary.regular'
  }
}), {
  '&:hover,&:focus': {
    outline: 0
  },
  '&::placeholder': {
    color: ''
  },
  '&::-webkit-inner-spin-button,&::-webkit-outer-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0
  },
  '&.disabled': {
    cursor: 'not-allowed',
    opacity: 0.6
  }
}, Object(external_styled_system_["compose"])(external_styled_system_["layout"], external_styled_system_["space"], external_styled_system_["color"], external_styled_system_["border"]));
const Input = external_styled_components_default.a.input.withConfig({
  displayName: "settingsstyle__Input",
  componentId: "sc-9xbk1w-9"
})(css_default()({
  display: 'block',
  width: '100%',
  p: '0 18px',
  appearance: 'none',
  fontFamily: 'body',
  fontSize: 'base',
  lineHeight: 'inherit',
  border: '1px solid',
  borderColor: 'gray.500',
  borderRadius: 'base',
  backgroundColor: 'white',
  color: 'text.bold',
  height: '48px',
  transition: 'all 0.25s ease',
  // mb: 3,
  '&:focus': {
    borderColor: 'primary.regular'
  }
}), {
  '&:hover,&:focus': {
    outline: 0
  },
  '&::placeholder': {
    color: ''
  },
  '&::-webkit-inner-spin-button,&::-webkit-outer-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0
  },
  '&.disabled': {
    cursor: 'not-allowed',
    opacity: 0.6
  }
}, Object(external_styled_system_["compose"])(external_styled_system_["layout"], external_styled_system_["space"], external_styled_system_["color"], external_styled_system_["border"]));

// EXTERNAL MODULE: ./src/components/radio-group/radio-group-two.tsx
var radio_group_two = __webpack_require__("agtI");

// EXTERNAL MODULE: ./src/components/radio-group/radio-group-three.tsx
var radio_group_three = __webpack_require__("FTk/");

// EXTERNAL MODULE: ./src/components/address-card/address-card-two.tsx
var address_card_two = __webpack_require__("GyXf");

// EXTERNAL MODULE: ./src/components/contact-card/contact-card.tsx + 1 modules
var contact_card = __webpack_require__("6zwy");

// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// EXTERNAL MODULE: ./src/graphql/mutation/me.ts
var me = __webpack_require__("C+de");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./src/components/forms/label.tsx
var label = __webpack_require__("IdAm");

// CONCATENATED MODULE: ./src/features/user-profile/settings/settings.tsx
var __jsx = external_react_default.a.createElement;
























const SettingsContent = ({
  deviceType
}) => {
  var _state$oldPassword, _state$newPassword, _state$confirmPasswor;

  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(profile_context["a" /* ProfileContext */]);
  const {
    0: userinfoMsg,
    1: setUserinfoMsg
  } = Object(external_react_["useState"])('');
  const {
    0: passwordChangeMsg,
    1: setPasswordChangeMsg
  } = Object(external_react_["useState"])('');
  const {
    authState: {
      isAuthenticated
    },
    authDispatch
  } = external_react_default.a.useContext(auth_context["a" /* AuthContext */]);
  const [updateMeMutation] = Object(react_hooks_["useMutation"])(me["a" /* UPDATE_ME */]);
  const [deletePaymentCardMutation] = Object(react_hooks_["useMutation"])(mutation_card["a" /* DELETE_CARD */]);
  const [updateUserMutation] = Object(react_hooks_["useMutation"])(user["a" /* UPDATE_USER */]);
  const [changePasswordMutation] = Object(react_hooks_["useMutation"])(changePassword["a" /* CHANGE_PASSWORD */]);
  const [deletePhoneNumberMutation] = Object(react_hooks_["useMutation"])(phone["b" /* DELETE_PHONENUMBER */]);
  const [setprimaryPhoneNumberMutation] = Object(react_hooks_["useMutation"])(phone["c" /* SETPRIMARY_PHONENUMBER */]);
  const [setprimaryAddressMutation] = Object(react_hooks_["useMutation"])(address["c" /* SETPRIMARY_ADDRESS */]);
  const [deleteAddressMutation] = Object(react_hooks_["useMutation"])(address["b" /* DELETE_ADDRESS */]);
  const intl = Object(external_react_intl_["useIntl"])();
  const passwordEmptyFields = intl.formatMessage({
    id: 'passwordEmptyFields',
    defaultMessage: 'passwordEmptyFields'
  });
  const {
    delivery_address,
    card,
    name,
    email,
    id,
    phones
  } = state;

  const handleChange = e => {
    const {
      value,
      name
    } = e.target;
    dispatch({
      type: 'HANDLE_ON_INPUT_CHANGE',
      payload: {
        value,
        field: name
      }
    });
  }; // Add or edit modal


  const handleModal = (modalComponent, modalProps = {}, className = 'add-address-modal') => {
    Object(reuse_modal_["openModal"])({
      show: true,
      config: {
        width: 360,
        height: 'auto',
        enableResizing: false,
        disableDragging: true,
        className: className
      },
      closeOnClickOutside: true,
      component: modalComponent,
      componentProps: {
        item: modalProps
      }
    });
  };

  const handleEditDelete = async (item, index, type, name) => {
    if (type === 'edit') {
      const modalComponent = name === 'address' ? address_card_two["a" /* default */] : contact_card["a" /* default */];
      handleModal(modalComponent, {
        item,
        id
      });
    } else {
      switch (name) {
        case 'payment':
          dispatch({
            type: 'DELETE_CARD',
            payload: item.id
          });
          return await deletePaymentCardMutation({
            variables: {
              cardId: JSON.stringify(item.id)
            }
          });

        case 'contact':
          if (phones.length > 1) {
            dispatch({
              type: 'DELETE_CONTACT',
              payload: item.id
            });
            return await deletePhoneNumberMutation({
              variables: {
                id,
                phoneId: item.id
              }
            });
          } else {
            return null;
          }

        case 'address':
          if (delivery_address.length > 1) {
            dispatch({
              type: 'DELETE_ADDRESS',
              payload: item.id
            });
            return await deleteAddressMutation({
              variables: {
                id,
                addressId: item.id
              }
            });
          } else {
            return null;
          }

        default:
          return false;
      }
    }
  };

  const handlePrimary = async (item, name) => {
    switch (name) {
      case 'contact':
        dispatch({
          type: 'SET_PRIMARY_CONTACT',
          payload: item.id
        });
        return await setprimaryPhoneNumberMutation({
          variables: {
            id,
            phoneId: item.id
          }
        });

      case 'address':
        dispatch({
          type: 'SET_PRIMARY_ADDRESS',
          payload: item.id
        });
        return await setprimaryAddressMutation({
          variables: {
            id,
            addressId: item.id
          }
        });

      default:
        return false;
    }
  };

  const handleSave = async () => {
    const {
      name,
      email
    } = state;
    await updateUserMutation({
      variables: {
        id,
        name,
        email
      }
    });
    setUserinfoMsg('Update user info successfully');
    setTimeout(function () {
      setUserinfoMsg('');
    }, 8000);
  };

  const handleSavePassord = async () => {
    const {
      oldPassword,
      newPassword,
      confirmPassword
    } = state;
    const hasEmptyFields = !oldPassword || !newPassword || !confirmPassword;

    if (hasEmptyFields) {
      setPasswordChangeMsg(passwordEmptyFields);
      return;
    } else {
      setPasswordChangeMsg('');
    }

    await changePasswordMutation({
      variables: {
        id,
        old_password: oldPassword,
        new_password: newPassword,
        confirm_password: confirmPassword
      }
    });

    if (false) {}

    setPasswordChangeMsg('Loadding...');
  };

  const hasEmptyFields = ((_state$oldPassword = state.oldPassword) === null || _state$oldPassword === void 0 ? void 0 : _state$oldPassword.length) === 0 || ((_state$newPassword = state.newPassword) === null || _state$newPassword === void 0 ? void 0 : _state$newPassword.length) === 0 || ((_state$confirmPasswor = state.confirmPassword) === null || _state$confirmPasswor === void 0 ? void 0 : _state$confirmPasswor.length) === 0;
  return __jsx(SettingsForm, null, __jsx(SettingsFormContent, null, __jsx(HeadingSection, null, __jsx(Title, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "profilePageTitle",
    defaultMessage: "Your Profile"
  }))), __jsx(Row, {
    style: {
      alignItems: 'flex-end',
      marginBottom: '50px'
    }
  }, __jsx(external_react_styled_flexboxgrid_["Col"], {
    xs: 12,
    sm: 5,
    md: 5,
    lg: 5
  }, __jsx(label["a" /* Label */], null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "profileNameField",
    defaultMessage: "Your Name"
  })), __jsx(InputUpper, {
    type: "text",
    label: "Name",
    name: "name",
    value: name,
    onChange: handleChange,
    backgroundColor: "#F7F7F7",
    height: "48px",
    marginBottom: "10px" // intlInputLabelId="profileNameField"

  })), __jsx(external_react_styled_flexboxgrid_["Col"], {
    xs: 12,
    sm: 5,
    md: 5,
    lg: 5
  }, __jsx(label["a" /* Label */], null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "profileEmailField",
    defaultMessage: "Your Email"
  })), __jsx(Input, {
    type: "email",
    name: "email",
    label: "Email Address",
    value: email,
    onChange: handleChange,
    backgroundColor: "#F7F7F7",
    marginBottom: "10px" // intlInputLabelId="profileEmailField"

  })), __jsx(external_react_styled_flexboxgrid_["Col"], {
    xs: 12,
    sm: 2,
    md: 2,
    lg: 2
  }, __jsx(button_button["a" /* Button */], {
    size: "big",
    style: {
      width: '100%',
      marginBottom: '10px'
    },
    onClick: handleSave
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "profileSaveBtn",
    defaultMessage: "Save"
  }))), userinfoMsg && __jsx(SuccessMsg, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "userInfoSuccess",
    defaultMessage: userinfoMsg
  }))), __jsx(Row, null, __jsx(external_react_styled_flexboxgrid_["Col"], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12
  }, __jsx(SettingsFormContent, null, __jsx(HeadingSection, null, __jsx(Title, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "contactNumberTItle",
    defaultMessage: "Contact Numbers"
  }))), __jsx(ButtonGroup, null, __jsx(radio_group_three["a" /* default */], {
    items: phones,
    component: (item, index) => __jsx(radio_card["a" /* default */], {
      id: index,
      key: index,
      title: item.is_primary ? intl.formatMessage({
        id: 'primaryId',
        defaultMessage: 'Primary'
      }) : intl.formatMessage({
        id: 'secundaryId',
        defaultMessage: 'Secondary'
      }),
      content: item.number,
      checked: item.is_primary === true,
      onChange: () => handlePrimary(item, 'contact'),
      name: "contact",
      onEdit: () => handleEditDelete(item, index, 'edit', 'contact'),
      onDelete: () => handleEditDelete(item, index, 'delete', 'contact')
    }),
    secondaryComponent: __jsx(button_button["a" /* Button */], {
      size: "big",
      variant: "outlined",
      type: "button",
      className: "add-button",
      onClick: () => handleModal(contact_card["a" /* default */], {
        item: {},
        id
      }, 'add-contact-modal')
    }, __jsx(external_react_intl_["FormattedMessage"], {
      id: "addContactBtn",
      defaultMessage: "Add Contact"
    }))
  }))))), __jsx(Row, null, __jsx(external_react_styled_flexboxgrid_["Col"], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    style: {
      position: 'relative'
    }
  }, __jsx(SettingsFormContent, null, __jsx(HeadingSection, null, __jsx(Title, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "deliveryAddresTitle",
    defaultMessage: "Delivery Address"
  }))), __jsx(ButtonGroup, null, __jsx(radio_group_two["a" /* default */], {
    items: delivery_address,
    component: (item, index) => __jsx(radio_card_two["a" /* default */], {
      id: index,
      key: index,
      address: item.address,
      instructions: item.instructions,
      location: item.location,
      title: item.title,
      name: "address",
      isChecked: item.is_primary === true,
      onChange: () => handlePrimary(item, 'address'),
      onEdit: () => handleEditDelete(item, index, 'edit', 'address'),
      onDelete: () => handleEditDelete(item, index, 'delete', 'address')
    }),
    secondaryComponent: __jsx(button_button["a" /* Button */], {
      size: "big",
      variant: "outlined",
      type: "button",
      className: "add-button",
      onClick: () => handleModal(address_card_two["a" /* default */], {
        item: {},
        id
      }, 'add-address-modal')
    }, __jsx(external_react_intl_["FormattedMessage"], {
      id: (delivery_address === null || delivery_address === void 0 ? void 0 : delivery_address.length) === 3 ? "fullDeliveryAddressesMsg" : "addAddressBtn",
      defaultMessage: "Add Address"
    }))
  }))))), __jsx(Row, {
    style: {
      alignItems: 'flex-end',
      marginBottom: '50px'
    }
  }, __jsx(external_react_styled_flexboxgrid_["Col"], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12
  }, __jsx(SettingsFormContent, null, __jsx(HeadingSection, null, __jsx(Title, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "changePasswordTitle",
    defaultMessage: "Change Password"
  }))))), __jsx(external_react_styled_flexboxgrid_["Col"], {
    xs: 12,
    sm: 2,
    md: 2,
    lg: 3
  }, __jsx(Input, {
    type: "password"
    /* label='Old Password' */
    ,
    placeholder: intl.formatMessage({
      id: 'oldPasswordId',
      defaultMessage: 'Old password'
    }),
    name: "oldPassword",
    value: state.oldPassword || '',
    onChange: handleChange,
    backgroundColor: "#F7F7F7",
    height: "48px",
    marginBottom: "10px"
    /* intlInputLabelId="profileNameField" */

  })), __jsx(external_react_styled_flexboxgrid_["Col"], {
    xs: 12,
    sm: 2,
    md: 2,
    lg: 3
  }, __jsx(Input, {
    type: "password",
    label: "New Password",
    placeholder: intl.formatMessage({
      id: 'newPasswordId',
      defaultMessage: 'New password'
    }),
    name: "newPassword",
    value: state.newPassword || '',
    onChange: handleChange,
    backgroundColor: "#F7F7F7",
    height: "48px",
    marginBottom: "10px" // intlInputLabelId="profileNameField"

  })), __jsx(external_react_styled_flexboxgrid_["Col"], {
    xs: 12,
    sm: 2,
    md: 2,
    lg: 3
  }, __jsx(Input, {
    type: "password",
    name: "confirmPassword",
    placeholder: intl.formatMessage({
      id: 'confirmPasswordId',
      defaultMessage: 'Confirm password'
    }),
    value: state.confirmPassword || '',
    onChange: handleChange,
    backgroundColor: "#F7F7F7",
    marginBottom: "10px" // intlInputLabelId="profileEmailField"

  })), __jsx(external_react_styled_flexboxgrid_["Col"], {
    xs: 12,
    sm: 2,
    md: 2,
    lg: 3
  }, passwordChangeMsg === passwordEmptyFields && __jsx(SuccessMsg, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "passwordEmptyFields",
    defaultMessage: passwordEmptyFields
  })), !passwordChangeMsg && __jsx(button_button["a" /* Button */], {
    size: "big",
    style: {
      width: '100%',
      marginBottom: '10px'
    },
    onClick: handleSavePassord
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "profileSaveBtn",
    defaultMessage: "Save"
  })), passwordChangeMsg && __jsx(button_button["a" /* Button */], {
    size: "big",
    style: {
      width: '100%'
    },
    onClick: handleSavePassord
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "profileSaveBtn",
    defaultMessage: "Loading.."
  }))))));
};

/* harmony default export */ var settings = (SettingsContent);
// EXTERNAL MODULE: ./src/features/user-profile/user-profile.style.tsx
var user_profile_style = __webpack_require__("r0LQ");

// EXTERNAL MODULE: ./src/features/user-profile/sidebar/sidebar.tsx + 1 modules
var sidebar = __webpack_require__("jh0t");

// EXTERNAL MODULE: ./src/components/seo.tsx
var seo = __webpack_require__("H8eV");

// EXTERNAL MODULE: ./src/components/error-message/error-message.tsx
var error_message = __webpack_require__("quMH");

// CONCATENATED MODULE: ./src/pages/profile.tsx

var profile_jsx = external_react_default.a.createElement;










const ProfilePage = ({
  deviceType
}) => {
  const {
    data,
    error,
    loading
  } = Object(react_hooks_["useQuery"])(customer_query["a" /* GET_LOGGED_IN_USER */]);

  if (!data || loading) {
    return profile_jsx("div", null, "loading...");
  }

  if (error) return profile_jsx(error_message["default"], {
    message: error.message
  });
  return profile_jsx(external_react_default.a.Fragment, null, profile_jsx(seo["a" /* SEO */], {
    title: "Profile - Ditto",
    description: "Profile Details"
  }), profile_jsx(profile_provider["a" /* ProfileProvider */], {
    initData: data.getUser
  }, profile_jsx(reuse_modal_["Modal"], null, profile_jsx(user_profile_style["b" /* PageWrapper */], null, profile_jsx(user_profile_style["c" /* SidebarSection */], null, profile_jsx(sidebar["a" /* default */], null)), profile_jsx(user_profile_style["a" /* ContentBox */], null, profile_jsx(settings, {
    deviceType: deviceType
  }))))));
};

/* harmony default export */ var profile = __webpack_exports__["default"] = (ProfilePage);

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

/***/ "p2kv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ProfileContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

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
  fontSize: '22px',
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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yR3f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_LOGGED_IN_USER; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GET_LOGGED_IN_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
query GetUser{
  getUser{
    id
    name
    email
    created_at
    role
    delivery_address{
      id
      title
      address
      location
      instructions
      is_primary
    }
    phones{
      number
      id
      is_primary
    }
    workInfo{
        stoppedWorkTime
        startedWorkTime
        ratePerHour
        totalWorkingMinutesPerWeek
        totalSalaryToPayWeekly
        advancedSalaryPaid
        isWorking
        taskRelated
    }
    tasks{
      taskId
      startDate
      finishDate
      plannedDate
      isRepetitived
      completationTimes
      isDone
      description
      workedHours
    }
    logs{
      logDescription
      timestamp
    }
  }
}
`;

/***/ })

/******/ });