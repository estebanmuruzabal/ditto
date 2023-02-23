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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/JeY":
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6A1X");


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

/***/ "6A1X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "LoginMessageDiv", function() { return /* binding */ LoginMessageDiv; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: ./src/components/seo.tsx
var seo = __webpack_require__("H8eV");

// EXTERNAL MODULE: /Users/estebanmuruzabal/work/Mahdi-Fashion/client/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// EXTERNAL MODULE: ./src/components/radio-card/radio-card.tsx
var radio_card = __webpack_require__("B3Fo");

// EXTERNAL MODULE: ./src/components/radio-group/radio-group-two.tsx
var radio_group_two = __webpack_require__("agtI");

// EXTERNAL MODULE: ./src/components/radio-group/radio-group-three.tsx
var radio_group_three = __webpack_require__("FTk/");

// EXTERNAL MODULE: ./src/components/radio-card/radio-card-two.tsx
var radio_card_two = __webpack_require__("IE2q");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

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

// CONCATENATED MODULE: ./src/components/carousel/carousel-two.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const ButtonPrev = external_styled_components_default()('button').withConfig({
  displayName: "carousel-two__ButtonPrev",
  componentId: "wld9q3-0"
})(["height:40px;width:40px;display:flex;align-items:center;justify-content:center;background-color:", ";color:", ";padding:0;border-radius:20px;box-shadow:", ";border:0;outline:0;cursor:pointer;position:absolute;top:50%;left:40px;margin-top:-20px;z-index:99;"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'), Object(theme_get_["themeGet"])('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)'));
const ButtonNext = external_styled_components_default()('button').withConfig({
  displayName: "carousel-two__ButtonNext",
  componentId: "wld9q3-1"
})(["height:40px;width:40px;display:flex;align-items:center;justify-content:center;background-color:#ffffff;color:", ";padding:0;border-radius:20px;box-shadow:", ";border:0;outline:0;cursor:pointer;position:absolute;top:50%;right:40px;margin-top:-20px;z-index:99;"], Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'), Object(theme_get_["themeGet"])('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)'));
const CardTitle = external_styled_components_default.a.span.withConfig({
  displayName: "carousel-two__CardTitle",
  componentId: "wld9q3-2"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.2;margin-bottom:5px;text-transform:capitalize;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const CardContent = external_styled_components_default.a.span.withConfig({
  displayName: "carousel-two__CardContent",
  componentId: "wld9q3-3"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.medium', '#424561'));
const ButtonGroupWrapper = external_styled_components_default()('div').withConfig({
  displayName: "carousel-two__ButtonGroupWrapper",
  componentId: "wld9q3-4"
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
function CustomCarousel(_ref) {
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
    additionalTransfrom: 0
  }, props), data.map((item, index) => {
    if (component) return component(item);
    return __jsx("div", {
      style: {
        padding: '0 15px',
        overflow: 'hidden'
      },
      key: index
    }, __jsx("img", {
      key: item.id,
      src: images_path["a" /* SHOP_IMAGE_HOST */] + item.image,
      alt: item.details,
      style: {
        width: '100%',
        height: '100%',
        display: 'block',
        position: 'relative'
      }
    }));
  })));
}
// EXTERNAL MODULE: ./src/components/payment-card/image/master-card.png
var master_card = __webpack_require__("BU0q");
var master_card_default = /*#__PURE__*/__webpack_require__.n(master_card);

// EXTERNAL MODULE: ./src/components/payment-card/image/paypal.png
var paypal = __webpack_require__("AmGK");
var paypal_default = /*#__PURE__*/__webpack_require__.n(paypal);

// EXTERNAL MODULE: ./src/components/payment-card/image/visa.png
var visa = __webpack_require__("CWtZ");
var visa_default = /*#__PURE__*/__webpack_require__.n(visa);

// CONCATENATED MODULE: ./src/components/payment-card/payment-card.style.tsx


const Wrapper = external_styled_components_default.a.label.withConfig({
  displayName: "payment-cardstyle__Wrapper",
  componentId: "icu2b-0"
})(["cursor:pointer;position:relative;display:flex;padding:0 10px;width:100%;> input{position:absolute;top:0;left:0;opacity:0;&:checked{& ~ .payment-card{border-color:", ";}}}&:hover{.card-remove-btn{opacity:1;}}"], Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const PaymentCardWrapper = external_styled_components_default.a.span.withConfig({
  displayName: "payment-cardstyle__PaymentCardWrapper",
  componentId: "icu2b-1"
})(["display:flex;width:100%;flex-direction:column;position:relative;background-color:", ";padding:15px 20px;border-radius:", ";border-width:2px;margin-bottom:10px;border-style:solid;border-color:", ";"], props => props.color || '#e4f4fc', Object(theme_get_["themeGet"])('radii.base', '6px'), props => props.color || '#e4f4fc');
const CardLogo = external_styled_components_default.a.span.withConfig({
  displayName: "payment-cardstyle__CardLogo",
  componentId: "icu2b-2"
})(["margin-bottom:17px;display:block;img{max-width:100%;height:14px;display:block;}"]);
const CardNumber = external_styled_components_default.a.span.withConfig({
  displayName: "payment-cardstyle__CardNumber",
  componentId: "icu2b-3"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:9px;span{font-size:calc(", "px - 1px);font-weight:", ";color:", ";line-height:1.25;&.card-number{font-size:", "px;}}"], Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fontSizes.xs', '12'));
const CardNumTitle = external_styled_components_default.a.span.withConfig({
  displayName: "payment-cardstyle__CardNumTitle",
  componentId: "icu2b-4"
})(["font-size:calc(", "px - 5px);font-weight:", ";color:", ";display:block;margin-bottom:11px;"], Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798C'));
const Name = external_styled_components_default.a.span.withConfig({
  displayName: "payment-cardstyle__Name",
  componentId: "icu2b-5"
})(["font-size:", "px;font-weight:", ";color:", ";display:block;"], Object(theme_get_["themeGet"])('fontSizes.xs', '12'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const DeleteButton = external_styled_components_default.a.span.withConfig({
  displayName: "payment-cardstyle__DeleteButton",
  componentId: "icu2b-6"
})(["display:flex;align-items:center;justify-content:center;border:0;width:18px;height:18px;border-radius:50%;overflow:hidden;cursor:pointer;outline:0;padding:0;color:#fff;background-color:", ";position:absolute;top:10px;right:20px;z-index:9;opacity:0;transition:0.2s ease-in-out;svg{display:block;width:8px;height:auto;}"], Object(theme_get_["themeGet"])('colors.secondary.regular', '#ff5b60'));
const payment_card_style_CardTitle = external_styled_components_default.a.span.withConfig({
  displayName: "payment-cardstyle__CardTitle",
  componentId: "icu2b-7"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.2;margin-bottom:5px;text-transform:capitalize;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const payment_card_style_CardContent = external_styled_components_default.a.span.withConfig({
  displayName: "payment-cardstyle__CardContent",
  componentId: "icu2b-8"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.medium', '#424561'));
// CONCATENATED MODULE: ./src/components/payment-card/card.tsx
var card_jsx = external_react_default.a.createElement;






const Card = ({
  id,
  name,
  cardType,
  lastFourDigit,
  color,
  image,
  details
}) => {
  const logo = cardType === 'paypal' && paypal_default.a || cardType === 'master' && master_card_default.a || cardType === 'visa' && visa_default.a;
  return card_jsx(PaymentCardWrapper, {
    className: "payment-card",
    color: color
  }, card_jsx(payment_card_style_CardTitle, null, name), card_jsx(payment_card_style_CardContent, null, details));
};

/* harmony default export */ var card = (Card);
// CONCATENATED MODULE: ./src/components/payment-card/payment-card.tsx
var payment_card_jsx = external_react_default.a.createElement;




const PaymentCard = ({
  className,
  onChange,
  onDelete,
  onClick,
  name,
  id,
  cardType,
  lastFourDigit,
  color,
  type,
  image,
  details
}) => {
  function handleChange() {
    onChange();
  }

  function handleDelete() {
    onDelete();
  }

  function handleClick() {
    onClick();
  }

  return payment_card_jsx(Wrapper, {
    htmlFor: `payment-card-${id}`,
    className: `payment-card-radio ${className ? className : ''}`
  }, payment_card_jsx("input", {
    type: "radio",
    id: `payment-card-${id}`,
    name: name,
    value: `payment-card-${id}`,
    onChange: handleChange,
    onClick: handleClick,
    checked: type === 'primary'
  }), payment_card_jsx(card, {
    id: `card-${id}`,
    cardType: cardType,
    lastFourDigit: lastFourDigit,
    color: color,
    name: name,
    image: image,
    details: details
  }));
};

/* harmony default export */ var payment_card = (PaymentCard);
// CONCATENATED MODULE: ./src/components/payment-group/payment-group.style.tsx


const Header = external_styled_components_default.a.header.withConfig({
  displayName: "payment-groupstyle__Header",
  componentId: "sc-1dzn6wm-0"
})(["display:flex;justify-content:space-between;align-items:center;margin-top:-15px;.addCard{font-family:", ";font-size:", "px;font-weight:", ";color:", ";}"], Object(theme_get_["themeGet"])('fonts.body', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const PaymentCardList = external_styled_components_default.a.div.withConfig({
  displayName: "payment-groupstyle__PaymentCardList",
  componentId: "sc-1dzn6wm-1"
})(["margin-top:15px;margin-left:-10px;margin-right:-10px;position:relative;@media (max-width:500px){flex-direction:column;}.prevButton{left:-10px;}.nextButton{right:-10px;}@media (max-width:500px){.prevButton{left:-10px;}.nextButton{right:-10px;}}"]);
const IconWrapper = external_styled_components_default.a.span.withConfig({
  displayName: "payment-groupstyle__IconWrapper",
  componentId: "sc-1dzn6wm-2"
})(["margin-right:6px;"]);
const SavedCard = external_styled_components_default.a.span.withConfig({
  displayName: "payment-groupstyle__SavedCard",
  componentId: "sc-1dzn6wm-3"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";display:block;"], Object(theme_get_["themeGet"])('fonts.body', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const Arrow = external_styled_components_default.a.button.withConfig({
  displayName: "payment-groupstyle__Arrow",
  componentId: "sc-1dzn6wm-4"
})(["width:30px;height:30px;background-color:rgba(0,0,0,0.25);border:0;outline:0;box-shadow:none;display:flex;align-items:center;justify-content:center;color:", ";position:absolute;top:50%;margin-top:-15px;padding:0;border-radius:50%;&.arrowLeft{left:10px;}&.arrowRight{right:10px;}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
const AddCard = external_styled_components_default.a.div.withConfig({
  displayName: "payment-groupstyle__AddCard",
  componentId: "sc-1dzn6wm-5"
})(["flex:105px;max-width:105px;flex-shrink:0;display:flex;flex-direction:column;@media (max-width:500px){margin-top:15px;}.reusecore__button{flex-grow:1;height:auto;border:1px dashed ", ";border-radius:", ";padding:0 5px;flex-direction:column;svg{width:18px;height:auto;}.btn-icon{margin-bottom:5px;}&:hover{border-color:", ";}}.safe-label{font-family:", ";font-size:", "px;font-weight:", ";color:", ";display:flex;align-items:center;justify-content:flex-end;margin-bottom:10px;> svg{fill:currentColor;margin-right:4px;}}"], Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('fonts.body', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798C'));
const OtherPayOption = external_styled_components_default.a.div.withConfig({
  displayName: "payment-groupstyle__OtherPayOption",
  componentId: "sc-1dzn6wm-6"
})(["margin-top:15px;display:flex;align-items:stretch;.other-pay-radio{flex-grow:1;flex:50%;max-width:50%;span{display:block;border-radius:", ";background-color:", ";border:1px solid ", ";text-align:center;padding:12px 20px;cursor:pointer;color:", ";font-size:calc(", "px - 1px);line-height:24px;font-weight:", ";-webkit-transition:all 0.25s ease;transition:all 0.25s ease;}input{position:absolute;top:0;left:0;opacity:0;&:checked{& ~ span{border-color:", ";background-color:", ";}}}&.cash-on-delivery{margin-left:15px;}}"], Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.gray.200', '#F7F7F7'), Object(theme_get_["themeGet"])('colors.gray.200', '#F7F7F7'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
const payment_group_style_DeleteButton = external_styled_components_default.a.button.withConfig({
  displayName: "payment-groupstyle__DeleteButton",
  componentId: "sc-1dzn6wm-7"
})(["display:flex;align-items:center;justify-content:center;border:0;width:20px;height:20px;border-radius:50%;overflow:hidden;cursor:pointer;outline:0;padding:0;color:", ";background-color:", ";position:absolute;top:10px;right:10px;z-index:9;opacity:0;transition:0.2s ease-in-out;svg{display:block;width:8px;height:auto;}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.secondary.regular', '#ff5b60'));
// CONCATENATED MODULE: ./src/components/payment-group/payment-group.tsx
var payment_group_jsx = external_react_default.a.createElement;

function payment_group_extends() { payment_group_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return payment_group_extends.apply(this, arguments); }







const PaymentGroup = ({
  items,
  deviceType,
  className,
  name,
  onChange,
  onClick,
  onEditDeleteField,
  handleAddNewCard
}) => {
  // RadioGroup State
  // Handle onChange Func
  const handleChange = item => {
    onChange(item);
  };

  const handleClick = item => {
    onClick(item);
  };

  if (items.length == 0) {
    return payment_group_jsx(Header, null, payment_group_jsx(SavedCard, null, payment_group_jsx(external_react_intl_["FormattedMessage"], {
      id: "noPaymentMethodsAddedId",
      defaultMessage: "There is no payment methods added"
    })));
  }

  return payment_group_jsx(external_react_default.a.Fragment, null, payment_group_jsx(Header, null, items.length !== 0 && payment_group_jsx(SavedCard, null, payment_group_jsx(external_react_intl_["FormattedMessage"], {
    id: "savedCardsId2",
    defaultMessage: "Saved Payment Methods"
  }))), payment_group_jsx(PaymentCardList, null, payment_group_jsx(CustomCarousel, {
    deviceType: deviceType,
    autoPlay: false,
    infinite: false,
    data: items,
    component: item => payment_group_jsx(payment_card, payment_group_extends({
      key: item.id,
      onChange: () => handleChange(item),
      onDelete: () => onEditDeleteField(item, 'delete'),
      onClick: () => handleClick(item)
    }, item))
  })));
};

/* harmony default export */ var payment_group = (PaymentGroup);
// EXTERNAL MODULE: ./src/components/contact-card/contact-card.tsx + 1 modules
var contact_card = __webpack_require__("6zwy");

// EXTERNAL MODULE: ./src/graphql/mutation/address.ts
var address = __webpack_require__("bQa+");

// EXTERNAL MODULE: ./src/graphql/mutation/phone.ts
var phone = __webpack_require__("6/p4");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./src/graphql/mutation/order.ts

const CREAT_ORDER = external_graphql_tag_default.a`
  mutation CreateOrder($input: OrderInput!) {
      createOrder(
        input: $input
      ) 
    {
      customer_id
      contact_number
      payment_status
      status
    }
  }
`;
const GET_PAYMENT = external_graphql_tag_default.a`
  mutation($paymentInput: String!) {
    charge(paymentInput: $paymentInput) {
      status
    }
  }
`;
// CONCATENATED MODULE: ./src/graphql/query/coupon.ts

const GET_COUPON = external_graphql_tag_default.a`
mutation GetCoupon( $code: String! ){
    getCoupon( code: $code ) {
        coupon {
            id
            title
            code
            percentage
            maximum_discount_amount
            expiration_date
            status
        }
        message {
            message
            status
        }
    }
  }
`;
// EXTERNAL MODULE: ./src/graphql/mutation/card.ts
var mutation_card = __webpack_require__("4Jh2");

// EXTERNAL MODULE: ./src/graphql/mutation/contact.ts
var mutation_contact = __webpack_require__("fDRB");

// EXTERNAL MODULE: ./src/utils/constant.ts
var constant = __webpack_require__("f/wd");

// EXTERNAL MODULE: external "react-custom-scrollbars"
var external_react_custom_scrollbars_ = __webpack_require__("qC9r");

// CONCATENATED MODULE: ./src/features/checkouts/checkout-two/checkout-two.style.tsx


const CheckoutWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CheckoutWrapper",
  componentId: "ltxbrz-0"
})(["width:100%;display:flex;padding:130px 60px 60px;position:relative;@media (max-width:1100px){padding-left:0;padding-right:0;}@media (max-width:990px){padding-top:60px;}"]);
const CheckoutContainer = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CheckoutContainer",
  componentId: "ltxbrz-1"
})(["width:100%;display:flex;counter-reset:section-counter;@media (min-width:990px){width:970px;margin-left:auto;margin-right:auto;}@media (max-width:767px){flex-direction:column;}"]);
const CheckoutInformation = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CheckoutInformation",
  componentId: "ltxbrz-2"
})(["position:relative;width:100%;overflow:hidden;display:flex;flex-direction:column;margin-right:20px;padding:20px;@media (max-width:990px){margin-right:10px;}@media (max-width:767px){order:1;margin-right:0;}"]);
const Heading = external_styled_components_default.a.h3.withConfig({
  displayName: "checkout-twostyle__Heading",
  componentId: "ltxbrz-3"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.4;margin-bottom:35px;position:relative;width:calc(100% - 100px);display:flex;align-items:center;@media (max-width:600px){font-size:", "px;}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.lg', '21'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fontSizes.md', '19'));
const HeadingWider = external_styled_components_default.a.h3.withConfig({
  displayName: "checkout-twostyle__HeadingWider",
  componentId: "ltxbrz-4"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.4;margin-bottom:35px;position:relative;display:flex;align-items:center;@media (max-width:600px){font-size:", "px;}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.lg', '21'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fontSizes.md', '19'));
const InformationBox = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__InformationBox",
  componentId: "ltxbrz-5"
})(["background-color:", ";padding:30px;padding-bottom:20px;position:relative;margin-bottom:20px;box-shadow:0 2px 16px 0 rgba(0,0,0,0.08);@media (max-width:767px){padding:20px;}&.paymentBox{.reusecore__button{@media (max-width:600px){padding-right:0;}}}", "{:before{counter-increment:section-counter;content:counter(section-counter);font-family:", ";font-size:calc(", "px + 1px);font-weight:", ";color:", ";width:35px;height:35px;border-radius:50%;display:flex;align-items:center;justify-content:center;background-color:", ";margin-right:15px;@media (max-width:600px){width:30px;height:30px;font-size:calc(", "px - 1px);}}}", "{:before{counter-increment:section-counter;content:counter(section-counter);font-family:", ";font-size:calc(", "px + 1px);font-weight:", ";color:", ";width:35px;height:35px;border-radius:50%;display:flex;align-items:center;justify-content:center;background-color:", ";margin-right:15px;@media (max-width:600px){width:30px;height:30px;font-size:calc(", "px - 1px);}}}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Heading, Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), HeadingWider, Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('fontSizes.base', '15'));
const TotalProduct = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__TotalProduct",
  componentId: "ltxbrz-6"
})(["flex-grow:1;text-align:right;padding-right:60px;"]);
const TotalPrice = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__TotalPrice",
  componentId: "ltxbrz-7"
})(["flex-grow:1;text-align:left;padding-left:60px;"]);
const DeliverySchedule = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__DeliverySchedule",
  componentId: "ltxbrz-8"
})([".radioGroup{justify-content:space-between;> label{margin-right:0;flex:calc(33.3333333333% - 10px);max-width:calc(33.3333333333% - 10px);padding:11px 15px;@media (max-width:900px) and (min-width:768px){flex:calc(50% - 10px);max-width:calc(50% - 10px);}@media (max-width:480px){flex:100%;max-width:100%;margin-right:0;}}}"]);
const checkout_two_style_ButtonGroup = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__ButtonGroup",
  componentId: "ltxbrz-9"
})(["display:flex;flex-direction:column;.radioGroup{display:flex;flex-wrap:wrap;justify-content:flex-start;label{margin-top:0;width:calc(33.333333333% - 10px);max-width:calc(33.333333333% - 10px);margin-bottom:15px;&:nth-child(3n){margin-right:0;}@media (max-width:900px) and (min-width:768px){flex:calc(50% - 10px);max-width:calc(50% - 10px);&:nth-child(3n){margin-right:15px;}&:nth-child(2n){margin-right:0;}}@media (max-width:480px){flex:100%;max-width:100%;margin-right:0;&:nth-child(3n){margin-right:0;}&:nth-child(2n){margin-right:0;}}}.addButton{width:auto;height:auto;display:flex;align-items:center;background-color:transparent;border:0;outline:0;border-radius:0;padding:0;font-family:", ";font-size:", "px;font-weight:", ";color:", ";position:absolute;top:40px;right:30px;@media (max-width:600px){top:27px;right:20px;}}}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const CheckoutSubmit = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CheckoutSubmit",
  componentId: "ltxbrz-10"
})(["margin-top:25px;.reusecore__button{width:100%;}"]);
const InfoText = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__InfoText",
  componentId: "ltxbrz-11"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-bottom:15px;margin-top:15px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const CouponBoxWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CouponBoxWrapper",
  componentId: "ltxbrz-12"
})(["position:relative;display:flex;flex-direction:column;align-items:flex-start;width:100%;margin-top:50px;.couponCodeText{margin-right:auto;}"]);
const CouponCode = external_styled_components_default.a.p.withConfig({
  displayName: "checkout-twostyle__CouponCode",
  componentId: "ltxbrz-13"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";width:100%;display:flex;justify-content:flex-start;align-items:baseline;span{font-weight:", ";color:", ";margin-left:10px;}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const RemoveCoupon = external_styled_components_default.a.button.withConfig({
  displayName: "checkout-twostyle__RemoveCoupon",
  componentId: "ltxbrz-14"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";width:auto;height:auto;display:inline-block;border:0;outline:0;box-shadow:none;background-color:transparent;padding:0;cursor:pointer;margin-left:5px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.xs', '12'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.secondary.regular', '#ff5b60'));
const CouponInputBox = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CouponInputBox",
  componentId: "ltxbrz-15"
})(["width:100%;display:flex;align-items:center;@media (max-width:600px){.reusecore__button{padding-right:30px !important;flex-shrink:0;}}"]);
const HaveCoupon = external_styled_components_default.a.button.withConfig({
  displayName: "checkout-twostyle__HaveCoupon",
  componentId: "ltxbrz-16"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";width:auto;height:auto;display:inline-block;border:0;outline:0;box-shadow:none;background-color:transparent;padding:0;cursor:pointer;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const ErrorMsg = external_styled_components_default()('span').withConfig({
  displayName: "checkout-twostyle__ErrorMsg",
  componentId: "ltxbrz-17"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";padding-top:10px;display:flex;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.smm', '16'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.secondary.hover', '#FF282F'));
const TermConditionText = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__TermConditionText",
  componentId: "ltxbrz-18"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.5;margin-top:30px;display:block;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.smm', '13'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const TermConditionLink = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__TermConditionLink",
  componentId: "ltxbrz-19"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-left:5px;cursor:pointer;line-height:1.5;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.smm', '13'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.secondary.regular', '#ff5b60'));
const CartWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CartWrapper",
  componentId: "ltxbrz-20"
})(["width:270px;flex-shrink:0;padding-top:20px;@media (min-width:768px) and (max-width:1200px){width:260px;}@media (max-width:767px){order:0;width:100%;padding-left:15px;padding-right:15px;padding-top:40px;padding-bottom:30px;position:relative !important;}"]);
const OrderInfo = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__OrderInfo",
  componentId: "ltxbrz-21"
})(["width:100%;display:flex;flex-direction:column;@media (min-width:768px) and (max-width:990px){padding-right:15px;}"]);
const Title = external_styled_components_default.a.h3.withConfig({
  displayName: "checkout-twostyle__Title",
  componentId: "ltxbrz-22"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";text-align:center;margin-bottom:40px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const ItemsWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__ItemsWrapper",
  componentId: "ltxbrz-23"
})(["display:flex;flex-direction:column;padding-left:15px;"]);
const CalculationWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__CalculationWrapper",
  componentId: "ltxbrz-24"
})(["border-top:1px solid ", ";padding:20px 15px 0;margin-top:20px;"], Object(theme_get_["themeGet"])('colors.gray.700', '#e6e6e6'));
const Items = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__Items",
  componentId: "ltxbrz-25"
})(["display:flex;width:100%;align-items:flex-start;justify-content:flex-start;margin-bottom:25px;&:last-child{margin-bottom:0;}"]);
const Quantity = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__Quantity",
  componentId: "ltxbrz-26"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const Multiplier = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__Multiplier",
  componentId: "ltxbrz-27"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";margin:0 12px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const ItemInfo = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__ItemInfo",
  componentId: "ltxbrz-28"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";margin-right:15px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const Price = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__Price",
  componentId: "ltxbrz-29"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";margin-left:auto;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const TextWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__TextWrapper",
  componentId: "ltxbrz-30"
})(["display:flex;width:100%;justify-content:space-between;margin-bottom:10px;"]);
const Text = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__Text",
  componentId: "ltxbrz-31"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const Bold = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__Bold",
  componentId: "ltxbrz-32"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const Small = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__Small",
  componentId: "ltxbrz-33"
})(["font-family:", ";font-size:11px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'));
const NoProductMsg = external_styled_components_default.a.h3.withConfig({
  displayName: "checkout-twostyle__NoProductMsg",
  componentId: "ltxbrz-34"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";line-height:1.2;position:relative;width:100%;display:flex;justify-content:center;margin-bottom:10px;align-items:center;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const NoProductImg = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-twostyle__NoProductImg",
  componentId: "ltxbrz-35"
})(["display:flex;align-items:center;justify-content:center;margin-bottom:20px;svg{width:140px;height:auto;}"]);
const checkout_two_style_IconWrapper = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-twostyle__IconWrapper",
  componentId: "ltxbrz-36"
})(["margin-right:6px;"]);
/* harmony default export */ var checkout_two_style = (CheckoutWrapper);
// EXTERNAL MODULE: ./src/components/coupon-box/coupon-box.tsx + 1 modules
var coupon_box = __webpack_require__("rWEH");

// EXTERNAL MODULE: ./src/assets/icons/PlusMinus.tsx
var PlusMinus = __webpack_require__("OeMJ");

// EXTERNAL MODULE: ./src/assets/icons/NoCartBag.tsx
var NoCartBag = __webpack_require__("MXV/");

// EXTERNAL MODULE: external "react-stickynode"
var external_react_stickynode_ = __webpack_require__("isz7");
var external_react_stickynode_default = /*#__PURE__*/__webpack_require__.n(external_react_stickynode_);

// EXTERNAL MODULE: ./src/contexts/profile/profile.context.tsx
var profile_context = __webpack_require__("p2kv");

// EXTERNAL MODULE: ./src/contexts/cart/use-cart.tsx + 2 modules
var use_cart = __webpack_require__("tFEG");

// CONCATENATED MODULE: ./src/utils/useWindowSize.ts

const useWindowSize = () => {
  const isClient =  false && false;

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const {
    0: windowSize,
    1: setWindowSize
  } = Object(external_react_["useState"])(getSize);
  Object(external_react_["useEffect"])(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};
// EXTERNAL MODULE: ./src/components/address-card/address-card-two.tsx
var address_card_two = __webpack_require__("GyXf");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./src/features/checkouts/checkout-two/checkout-two.tsx
var checkout_two_jsx = external_react_default.a.createElement;

function checkout_two_extends() { checkout_two_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return checkout_two_extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
































 // The type of props Checkout Form receives

const getDeliverySchedule = details => {
  if (!details) return '';
  const word = 'Horario';
  const index = details.indexOf(word); // 8

  const length = word.length; // 7

  return details.slice(index + length);
};

const OrderItem = ({
  product
}) => {
  const {
    name,
    images,
    price,
    salePrice,
    unit,
    quantity = 0,
    recicledQuantity = 0,
    packagePrice,
    id
  } = product;
  const recicledPrice = price - packagePrice;
  const totalQuantity = quantity + recicledQuantity;
  const displayPrice = salePrice || price;
  const nonRecicledTotalPrice = displayPrice * quantity;
  const recicledTotalPrice = recicledPrice * recicledQuantity;
  const totalPrice = nonRecicledTotalPrice + recicledTotalPrice;
  const intl = Object(external_react_intl_["useIntl"])();
  return checkout_two_jsx(Items, {
    key: id
  }, checkout_two_jsx(ItemInfo, null, recicledQuantity > 0 && checkout_two_jsx(external_react_default.a.Fragment, null, checkout_two_jsx(Quantity, null, name), checkout_two_jsx("br", null), recicledQuantity, " X ", constant["a" /* CURRENCY */], recicledPrice, checkout_two_jsx("br", null)), quantity > 0 && checkout_two_jsx(external_react_default.a.Fragment, null, checkout_two_jsx(Quantity, null, name), checkout_two_jsx("br", null), quantity, " X ", constant["a" /* CURRENCY */], price)), checkout_two_jsx(Price, null, constant["a" /* CURRENCY */], totalPrice.toFixed(2)));
};

const CheckoutWithSidebar = ({
  token,
  deviceType
}) => {
  var _deliveryMethods$find;

  const {
    0: hasCoupon,
    1: setHasCoupon
  } = Object(external_react_["useState"])(false);
  const {
    0: couponCode,
    1: setCouponCode
  } = Object(external_react_["useState"])('');
  const {
    0: couponError,
    1: setError
  } = Object(external_react_["useState"])('');
  const {
    0: orderError,
    1: setOrderError
  } = Object(external_react_["useState"])('');
  const {
    0: checkoutError,
    1: setCheckoutError
  } = Object(external_react_["useState"])('');
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(profile_context["a" /* ProfileContext */]);
  const {
    isRtl
  } = Object(language_provider["b" /* useLocale */])();
  const {
    items,
    removeCoupon,
    coupon,
    applyCoupon,
    clearCart,
    cartItemsCount,
    calculatePrice,
    calculateDiscount,
    calculateSubTotalPrice,
    isRestaurant,
    toggleRestaurant
  } = Object(use_cart["b" /* useCart */])();
  const intl = Object(external_react_intl_["useIntl"])();
  let cartProduct = null;
  let contains = false;

  if (items.length > 0) {
    cartProduct = items.map((item, index) => ({
      product_id: item.id,
      unit: item.unit,
      quantity: Number(item.quantity) || 0,
      recicledQuantity: Number(item.recicledQuantity) || 0,
      sale_price: item.sale_price,
      // price: (Number(item.quantity || 0) * item.price) + (Number(item.recicledQuantity || 0) * (item.price - (item.packagePrice || 0))),
      price: item.price,
      image: item.images[0],
      name: item.name
    }));
  }

  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: isValid,
    1: setIsValid
  } = Object(external_react_["useState"])(false);
  const {
    0: submitResult,
    1: setSubmitResult
  } = Object(external_react_["useState"])({
    contact_number: '',
    payment_option_id: '',
    payment_option_type: '',
    delivery_method_id: '',
    coupon_code: '',
    delivery_address: null,
    products: null
  });
  const {
    delivery_address,
    contact,
    paymentMethods,
    phones,
    name,
    email,
    id,
    deliveryMethods
  } = state; //set mututions

  const [setprimaryAddressMutation] = Object(react_hooks_["useMutation"])(address["c" /* SETPRIMARY_ADDRESS */]);
  const [deleteAddressMutation] = Object(react_hooks_["useMutation"])(address["b" /* DELETE_ADDRESS */]);
  const [setprimaryPhoneNumberMutation] = Object(react_hooks_["useMutation"])(phone["c" /* SETPRIMARY_PHONENUMBER */]);
  const [deletePhoneNumberMutation] = Object(react_hooks_["useMutation"])(phone["b" /* DELETE_PHONENUMBER */]);
  const [setOrderMutation] = Object(react_hooks_["useMutation"])(CREAT_ORDER);
  const [deleteContactMutation] = Object(react_hooks_["useMutation"])(mutation_contact["a" /* DELETE_CONTACT */]);
  const [deletePaymentCardMutation] = Object(react_hooks_["useMutation"])(mutation_card["a" /* DELETE_CARD */]);
  const size = useWindowSize();
  const [appliedCoupon] = Object(react_hooks_["useMutation"])(GET_COUPON);
  let deliveryCharge = 0;
  const selectedAddress = delivery_address && delivery_address.find(item => item.is_primary === true);
  const selectedContact = phones.find(item => item.is_primary === true);
  const pickUpAddress = (_deliveryMethods$find = deliveryMethods.find(deliveryMethod => {
    return submitResult.delivery_method_id === deliveryMethod.id;
  })) === null || _deliveryMethods$find === void 0 ? void 0 : _deliveryMethods$find.pickUpAddress;

  const calculateDeliveryCharge = () => {
    var _deliveryTitle$name, _charge;

    const deliveryTitle = deliveryMethods.find(deliveryMethod => {
      return submitResult.delivery_method_id === deliveryMethod.id;
    });
    if (!deliveryTitle) return 0;
    const charge = deliveryTitle === null || deliveryTitle === void 0 ? void 0 : (_deliveryTitle$name = deliveryTitle.name) === null || _deliveryTitle$name === void 0 ? void 0 : _deliveryTitle$name.split("$");
    const chargeFormatted = (_charge = charge[(charge === null || charge === void 0 ? void 0 : charge.length) - 1]) === null || _charge === void 0 ? void 0 : _charge.replace(/\D/g, '');
    return Number(chargeFormatted);
  };

  const calculateCCCharge = () => {
    var _paymentOptionSelecte;

    const paymentOptionSelected = paymentMethods.find(paymentMethod => {
      return (submitResult === null || submitResult === void 0 ? void 0 : submitResult.payment_option_id) === (paymentMethod === null || paymentMethod === void 0 ? void 0 : paymentMethod.id);
    });
    const total = Number(calculateSubTotalPrice());

    if (paymentOptionSelected === null || paymentOptionSelected === void 0 ? void 0 : (_paymentOptionSelecte = paymentOptionSelected.name) === null || _paymentOptionSelecte === void 0 ? void 0 : _paymentOptionSelecte.toLowerCase().includes('tarjeta')) {
      var _paymentOptionSelecte2;

      const ccCharge = paymentOptionSelected === null || paymentOptionSelected === void 0 ? void 0 : (_paymentOptionSelecte2 = paymentOptionSelected.name) === null || _paymentOptionSelecte2 === void 0 ? void 0 : _paymentOptionSelecte2.replace(/\D/g, '');
      return total * (ccCharge / 100);
    }

    return 0;
  };

  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const selectedAddressText = (selectedAddress === null || selectedAddress === void 0 ? void 0 : selectedAddress.address) ? `${selectedAddress && capitalizeFirstLetter(selectedAddress.title)} - ${selectedAddress && capitalizeFirstLetter(selectedAddress.address)}, ${selectedAddress && selectedAddress.instructions}` : null;
  Object(external_react_["useEffect"])(() => {
    removeCoupon();
    setHasCoupon(false);
    deliveryCharge = calculateDeliveryCharge();
    const deliveryAddress = pickUpOptionSelected ? pickUpAddress : deliveryOptionSelected ? selectedAddressText : ''; //     if (router.query.shouldRefresh) {
    //         userRefetch();
    //     }

    setSubmitResult(_objectSpread(_objectSpread({}, submitResult), {}, {
      delivery_address: deliveryAddress,
      products: cartProduct,
      contact_number: selectedContact.number
    }));

    if (calculatePrice() > 0 && cartItemsCount > 0 && ((submitResult === null || submitResult === void 0 ? void 0 : submitResult.delivery_method_id) || pickUpAddress) && phones.length && deliveryMethods.length) {
      setIsValid(true);
    }
  }, [state]); // Add or edit modal

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
        /* case 'payment':
           dispatch({ type: 'DELETE_CARD', payload: item.id });
           return await deletePaymentCardMutation({
             variables: { cardId: JSON.stringify(item.id) },
           });
         */
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

  const handleApplyCoupon = async () => {
    if (!couponCode) {
      setError('Invalid Coupon');
      return null;
    }

    const {
      data,
      errors
    } = await appliedCoupon({
      variables: {
        code: couponCode
      }
    });

    if (!data.getCoupon.coupon && data.getCoupon.message && !data.getCoupon.message.status) {
      setError('Invalid Coupon');
      return null;
    }

    if (errors) {
      setError('Invalid Coupon');
      return null;
    }

    if (data.getCoupon.coupon && data.getCoupon.coupon.percentage) {
      applyCoupon(data.getCoupon.coupon);
      setSubmitResult(_objectSpread(_objectSpread({}, submitResult), {}, {
        coupon_code: couponCode,
        products: cartProduct
      }));
      setCouponCode('');
    } else {
      setError('Invalid Coupon');
    }
  };

  const handleOnUpdate = e => {
    setCouponCode(e.currentTarget.value);
  };

  const setErrorFor5Sec = messageId => {
    const error = intl.formatMessage({
      id: messageId,
      defaultMessage: 'Please check the form'
    });
    setCheckoutError(error);
    setTimeout(() => setCheckoutError(null), 3500);
    return null;
  };

  const getDeliveryDate = () => {
    external_moment_default.a.locale('es');
    let orderDay = external_moment_default()(new Date(), 'MM/D/YYYY').day();
    const orderHour = external_moment_default()(new Date(), 'MM/D/YYYY').hour();
    let deliveryDate = external_moment_default()(new Date());
    const lunes = 1;
    const martes = 2;
    const miercoles = 3;
    const jueves = 4;
    const viernes = 5;
    const sabado = 6;
    const domingo = 7;
    const lastOrderTime = 12;

    switch (orderDay) {
      case viernes:
      case sabado:
      case domingo:
      case lunes:
        deliveryDate.add(1, 'days');
        break;

      case martes:
        if (orderHour >= lastOrderTime) {
          deliveryDate.add(2, 'days');
        }

        break;

      case miercoles:
        // deliveryDate.add(1, 'days');
        break;

      case jueves:
        if (orderHour >= lastOrderTime) {
          deliveryDate.add(5, 'days');
        }

        break;

      default:
        break;
    }

    return external_moment_default()(deliveryDate).format('dddd DD MMM');
  };

  const handleSubmit = async () => {
    var _deliveryOptionSelect;

    const deliveryCharge = calculateDeliveryCharge();
    const ccCharge = calculateCCCharge();
    const otherSubmitResult = {
      customer_id: id,
      sub_total: Number(calculateSubTotalPrice()),
      total: Number(calculatePrice(deliveryCharge + ccCharge)),
      discount_amount: Number(calculateDiscount())
    };
    const {
      contact_number,
      payment_option_id,
      payment_option_type,
      delivery_method_id,
      delivery_address,
      coupon_code,
      products
    } = submitResult;
    const {
      customer_id,
      sub_total,
      total,
      discount_amount
    } = otherSubmitResult;

    if (deliveryOptionSelected && !delivery_address) {
      setErrorFor5Sec('checkoutDeliveryAddressInvalid');
      return;
    }

    if (!delivery_method_id) {
      setErrorFor5Sec('checkoutDeliveryMethodInvalid');
      return;
    }

    if (!contact_number) {
      setErrorFor5Sec('checkoutContactNumberInvalid');
      return;
    }

    if (!payment_option_id) {
      setErrorFor5Sec(pickUpAddress ? 'checkoutPaymentMethodInvalidOption3' : 'checkoutPaymentMethodInvalidOption4');
      return;
    }

    if (!customer_id || !products) {
      setCheckoutError('Please place a valid order!');
      return null;
    }

    setLoading(true);
    const delivery_date = deliveryOptionSelected === null || deliveryOptionSelected === void 0 ? void 0 : (_deliveryOptionSelect = deliveryOptionSelected.details.split("|")[1]) === null || _deliveryOptionSelect === void 0 ? void 0 : _deliveryOptionSelect.trim(); // const deliveryDateAndTime = `${getDeliverySchedule(deliveryOptionSelected?.details)} - ${moment(deliveryDate).format('DD MMM')}`;
    // if (confirm('Are you sure? You want to place this order?')) {

    try {
      const {
        errors: orderCreateError
      } = await setOrderMutation({
        variables: {
          input: {
            customer_id,
            contact_number,
            payment_option_id,
            delivery_method_id,
            delivery_date,
            delivery_address,
            sub_total,
            total,
            coupon_code,
            discount_amount,
            products,
            payment_option_type,
            isWhatsappPurchase: false
          }
        }
      });

      if (!orderCreateError) {
        if (isValid) {
          clearCart();
          removeCoupon();
          setHasCoupon(false);
          router_default.a.push({
            pathname: '/order-received',
            query: {
              itemId: id
            }
          });
        }

        setLoading(false);
        setIsValid(false);
      }

      if (orderCreateError) {
        var _orderCreateError$;

        setOrderError(((_orderCreateError$ = orderCreateError[0]) === null || _orderCreateError$ === void 0 ? void 0 : _orderCreateError$.message) || 'Somehting whent wrong');
        setLoading(false);
      }
    } catch (error) {
      console.log(error);

      if (confirm('Algo salió mal! Te pedimos disculpas y que por favor, comiences de vuelta tu compra.', error)) {
        console.log(error);
        setLoading(false);
        startAllOver();
      }
    }

    setLoading(false); // }
  };

  const startAllOver = () => {
    clearCart();
    removeCoupon();
    setHasCoupon(false);
    router_default.a.push({
      pathname: '/'
    });
  };

  const pickedUpOptionIds = deliveryMethods.map(deliveryMethod => {
    return deliveryMethod.isPickUp ? deliveryMethod.id : null;
  });
  const deliveryOptionIds = deliveryMethods.map(deliveryMethod => {
    return !deliveryMethod.isPickUp ? deliveryMethod.id : null;
  });
  const pickUpOptionSelected = pickedUpOptionIds.includes(submitResult.delivery_method_id);
  const deliveryOptionSelected = deliveryMethods.find(deliveryMethod => {
    return deliveryMethod.id === submitResult.delivery_method_id;
  });
  return checkout_two_jsx("form", null, checkout_two_jsx(checkout_two_style, null, checkout_two_jsx(CheckoutContainer, null, checkout_two_jsx(CheckoutInformation, null, checkout_two_jsx(InformationBox, null, checkout_two_jsx(DeliverySchedule, null, checkout_two_jsx(HeadingWider, null, checkout_two_jsx(external_react_intl_["FormattedMessage"], {
    id: "deliverySchedule",
    defaultMessage: "Select Your Delivery Schedule"
  })), (deliveryMethods === null || deliveryMethods === void 0 ? void 0 : deliveryMethods.length) ? checkout_two_jsx(radio_group_two["a" /* default */], {
    items: deliveryMethods,
    component: (item, index) => checkout_two_jsx(radio_card["a" /* default */], {
      id: item.id,
      key: item.id,
      title: item.name,
      content: item.details,
      clickableText: item.isPickUp && item.pickUpAddress ? item.pickUpAddress : null,
      name: "schedule",
      checked: item.type === 'primary',
      withActionButtons: false,
      onClick: () => setSubmitResult(_objectSpread(_objectSpread({}, submitResult), {}, {
        delivery_method_id: item.id,
        products: cartProduct
      })),
      onChange: () => {
        return dispatch({
          type: 'SET_PRIMARY_SCHEDULE',
          payload: item.id.toString()
        });
      }
    })
  }) : checkout_two_jsx(external_react_intl_["FormattedMessage"], {
    id: "noDeliveryOptionsDefinedId",
    defaultMessage: "No hay m\xE9todos de envios por el momento"
  }))), !pickUpOptionSelected && checkout_two_jsx(InformationBox, null, checkout_two_jsx(Heading, null, checkout_two_jsx(external_react_intl_["FormattedMessage"], {
    id: "checkoutDeliveryAddress",
    defaultMessage: "Delivery Address"
  })), checkout_two_jsx(checkout_two_style_ButtonGroup, null, checkout_two_jsx(radio_group_two["a" /* default */], {
    items: delivery_address,
    component: (item, index) => checkout_two_jsx(radio_card_two["a" /* default */], {
      id: index,
      key: index,
      address: item.address,
      location: item.location,
      instructions: item.instructions,
      title: item.title,
      name: "address",
      isChecked: item.is_primary === true,
      onClick: () => setSubmitResult(_objectSpread(_objectSpread({}, submitResult), {}, {
        delivery_address: `${item.title} -
                          ${item.address}, ${item.location}, ${item.instructions}
                          `,
        products: cartProduct
      })),
      onChange: () => handlePrimary(item, 'address'),
      onEdit: () => handleEditDelete(item, index, 'edit', 'address'),
      onDelete: () => handleEditDelete(item, index, 'delete', 'address')
    }),
    secondaryComponent: checkout_two_jsx(button_button["a" /* Button */], {
      className: "addButton",
      variant: "text",
      type: "button",
      onClick: () => handleModal(address_card_two["a" /* default */], {
        item: {},
        id
      }, 'add-address-modal')
    }, checkout_two_jsx(checkout_two_style_IconWrapper, null, checkout_two_jsx(PlusMinus["b" /* Plus */], {
      width: "10px"
    })), checkout_two_jsx(external_react_intl_["FormattedMessage"], {
      id: "addNew",
      defaultMessage: "Add New"
    }))
  }))), checkout_two_jsx(InformationBox, null, checkout_two_jsx(Heading, null, checkout_two_jsx(external_react_intl_["FormattedMessage"], {
    id: "contactNumberText",
    defaultMessage: "Select Your Contact Number"
  })), checkout_two_jsx(checkout_two_style_ButtonGroup, null, checkout_two_jsx(radio_group_three["a" /* default */], {
    items: phones,
    component: (item, index) => checkout_two_jsx(radio_card["a" /* default */], {
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
      onClick: () => setSubmitResult(_objectSpread(_objectSpread({}, submitResult), {}, {
        contact_number: item.number,
        products: cartProduct
      })),
      name: "contact",
      onEdit: () => handleEditDelete(item, index, 'edit', 'contact'),
      onDelete: () => handleEditDelete(item, index, 'delete', 'contact')
    }),
    secondaryComponent: checkout_two_jsx(button_button["a" /* Button */], {
      className: "addButton",
      variant: "text",
      type: "button",
      onClick: () => handleModal(contact_card["a" /* default */], {
        item: {},
        id
      }, 'add-contact-modal')
    }, checkout_two_jsx(checkout_two_style_IconWrapper, null, checkout_two_jsx(PlusMinus["b" /* Plus */], {
      width: "10px"
    })), checkout_two_jsx(external_react_intl_["FormattedMessage"], {
      id: "addContactBtn",
      defaultMessage: "Add Contact"
    }))
  }))), checkout_two_jsx(InformationBox, {
    className: "paymentBox",
    style: {
      paddingBottom: 30
    }
  }, checkout_two_jsx(Heading, null, checkout_two_jsx(external_react_intl_["FormattedMessage"], {
    id: "selectPaymentText",
    defaultMessage: "Select Payment Option"
  })), checkout_two_jsx(payment_group, {
    name: "payment",
    deviceType: deviceType,
    items: paymentMethods,
    onEditDeleteField: (item, type) => null,
    onClick: item => {
      setSubmitResult(_objectSpread(_objectSpread({}, submitResult), {}, {
        payment_option_id: item.id,
        payment_option_type: item.type,
        products: cartProduct
      }));
      return null;
    },
    onChange: item => {
      return dispatch({
        type: 'SET_PRIMARY_CARD',
        payload: item.id.toString()
      });
    },
    handleAddNewCard: () => null
  }), coupon ? checkout_two_jsx(CouponBoxWrapper, null, checkout_two_jsx(CouponCode, null, checkout_two_jsx(external_react_intl_["FormattedMessage"], {
    id: "couponApplied"
  }), checkout_two_jsx("span", null, coupon.code), checkout_two_jsx(RemoveCoupon, {
    onClick: e => {
      e.preventDefault();
      removeCoupon();
      setHasCoupon(false);
    }
  }, checkout_two_jsx(external_react_intl_["FormattedMessage"], {
    id: "removeCoupon"
  })))) : checkout_two_jsx(CouponBoxWrapper, null, !hasCoupon ? checkout_two_jsx(HaveCoupon, {
    onClick: () => setHasCoupon(prev => !prev)
  }, checkout_two_jsx(external_react_intl_["FormattedMessage"], {
    id: "specialCode",
    defaultMessage: "Have a special code?"
  })) : checkout_two_jsx(external_react_default.a.Fragment, null, checkout_two_jsx(CouponInputBox, null, checkout_two_jsx(coupon_box["b" /* default */], {
    onClick: handleApplyCoupon,
    value: couponCode,
    onChange: handleOnUpdate,
    className: "normalCoupon"
  })), couponError && checkout_two_jsx(ErrorMsg, null, checkout_two_jsx(external_react_intl_["FormattedMessage"], {
    id: "couponError",
    defaultMessage: couponError
  })))), checkout_two_jsx(TermConditionText, null, checkout_two_jsx(external_react_intl_["FormattedMessage"], {
    id: "termAndConditionHelper",
    defaultMessage: "By making this purchase you agree to our"
  }), checkout_two_jsx(link_default.a, {
    href: "#"
  }, checkout_two_jsx(TermConditionLink, null, checkout_two_jsx(external_react_intl_["FormattedMessage"], {
    id: "termAndCondition",
    defaultMessage: "terms and conditions."
  })))), checkoutError && checkout_two_jsx(ErrorMsg, null, checkout_two_jsx(external_react_intl_["FormattedMessage"], {
    id: "checkoutError",
    defaultMessage: checkoutError
  })), checkout_two_jsx(CheckoutSubmit, null, checkout_two_jsx(button_button["a" /* Button */], {
    type: "button",
    onClick: handleSubmit,
    disabled: loading,
    size: "big",
    loading: loading,
    style: {
      width: '100%'
    }
  }, checkout_two_jsx(external_react_intl_["FormattedMessage"], {
    id: loading ? 'processesingCheckout' : 'processCheckout',
    defaultMessage: "Proceed to Checkout"
  }), ". (", constant["a" /* CURRENCY */], calculatePrice(calculateDeliveryCharge() + calculateCCCharge()), ")")), checkout_two_jsx("div", null, orderError && checkout_two_jsx(ErrorMsg, null, checkout_two_jsx("p", null, orderError))))), checkout_two_jsx(CartWrapper, null, checkout_two_jsx(external_react_stickynode_default.a, {
    enabled: size.width >= 768 ? true : false,
    top: 120,
    innerZ: 999
  }, checkout_two_jsx(OrderInfo, null, checkout_two_jsx(Title, null, checkout_two_jsx(external_react_intl_["FormattedMessage"], {
    id: "cartTitle",
    defaultMessage: "Your Orderdfd"
  })), checkout_two_jsx(external_react_custom_scrollbars_["Scrollbars"], {
    universal: true,
    autoHide: true,
    autoHeight: true,
    autoHeightMax: "390px",
    renderView: props => checkout_two_jsx("div", checkout_two_extends({}, props, {
      style: _objectSpread(_objectSpread({}, props.style), {}, {
        marginLeft: isRtl ? props.style.marginRight : 0,
        marginRight: isRtl ? 0 : props.style.marginRight,
        paddingLeft: isRtl ? 15 : 0,
        paddingRight: isRtl ? 0 : 15
      })
    }))
  }, checkout_two_jsx(ItemsWrapper, null, cartItemsCount > 0 ? items.map(item => checkout_two_jsx(OrderItem, {
    key: `cartItem-${item.id}`,
    product: item
  })) : checkout_two_jsx(external_react_default.a.Fragment, null, checkout_two_jsx(NoProductImg, null, checkout_two_jsx(NoCartBag["a" /* NoCartBag */], null)), checkout_two_jsx(NoProductMsg, null, checkout_two_jsx(external_react_intl_["FormattedMessage"], {
    id: "noProductFound",
    defaultMessage: "No products found"
  }))))), checkout_two_jsx(CalculationWrapper, null, checkout_two_jsx(TextWrapper, null, checkout_two_jsx(Text, null, checkout_two_jsx(external_react_intl_["FormattedMessage"], {
    id: "subTotal",
    defaultMessage: "Subtotal"
  })), checkout_two_jsx(Text, null, constant["a" /* CURRENCY */], " ", calculateSubTotalPrice())), checkout_two_jsx(TextWrapper, null, checkout_two_jsx(Text, null, checkout_two_jsx(external_react_intl_["FormattedMessage"], {
    id: "discountText",
    defaultMessage: "Discount"
  })), checkout_two_jsx(Text, null, constant["a" /* CURRENCY */], " ", calculateDiscount())), calculateCCCharge() > 0 && checkout_two_jsx(TextWrapper, null, checkout_two_jsx(Text, null, checkout_two_jsx(external_react_intl_["FormattedMessage"], {
    id: "ccrChargeText",
    defaultMessage: "Card charge"
  })), checkout_two_jsx(Text, null, constant["a" /* CURRENCY */], " ", calculateCCCharge())), checkout_two_jsx(TextWrapper, null, checkout_two_jsx(Text, null, checkout_two_jsx(external_react_intl_["FormattedMessage"], {
    id: "deliveryChargeText",
    defaultMessage: "Delivery charge"
  })), checkout_two_jsx(Text, null, constant["a" /* CURRENCY */], " ", calculateDeliveryCharge())), checkout_two_jsx(TextWrapper, {
    style: {
      marginTop: 20
    }
  }, checkout_two_jsx(Bold, null, checkout_two_jsx(external_react_intl_["FormattedMessage"], {
    id: "totalText",
    defaultMessage: "Total"
  }), ' '), checkout_two_jsx(Bold, null, constant["a" /* CURRENCY */], " ", calculatePrice(calculateDeliveryCharge() + calculateCCCharge()))))))))));
};

/* harmony default export */ var checkout_two = (CheckoutWithSidebar);
// EXTERNAL MODULE: ./src/graphql/query/customer.query.ts
var customer_query = __webpack_require__("yR3f");

// EXTERNAL MODULE: ./src/graphql/query/delivery.ts
var delivery = __webpack_require__("ZLcN");

// CONCATENATED MODULE: ./src/graphql/query/paymentoption.ts

const PAYMENT_OPTION = external_graphql_tag_default.a`
    query GetPaymentOptions{
    paymentOptions(limit: 0) {
      items {
        id
        name
        type
        image
        details
        created_at
      }
      totalCount
      hasMore
    }
  }
`;
// EXTERNAL MODULE: ./src/contexts/profile/profile.provider.tsx
var profile_provider = __webpack_require__("4HXp");

// EXTERNAL MODULE: ./src/components/error-message/error-message.tsx
var error_message = __webpack_require__("quMH");

// CONCATENATED MODULE: ./src/components/error-message/error-message-two.tsx

var error_message_two_jsx = external_react_default.a.createElement;

function ErrorMessageTwo({
  message
}) {
  return error_message_two_jsx(StyledAside, null, message);
}
const StyledAside = external_styled_components_default.a.aside.withConfig({
  displayName: "error-message-two__StyledAside",
  componentId: "sc-42creb-0"
})({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '60vh',
  padding: '80px 1.5rem 0',
  fontSize: '22px',
  color: '#c60505',
  backgroundColor: '#fff'
});
// EXTERNAL MODULE: ./src/contexts/auth/auth.context.tsx
var auth_context = __webpack_require__("QfjN");

// EXTERNAL MODULE: ./src/features/authentication-form/index.tsx + 7 modules
var authentication_form = __webpack_require__("kp67");

// EXTERNAL MODULE: ./src/features/authentication-form/authentication-form.style.tsx
var authentication_form_style = __webpack_require__("cTCn");

// CONCATENATED MODULE: ./src/pages/checkout.tsx
var checkout_jsx = external_react_default.a.createElement;

function checkout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function checkout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { checkout_ownKeys(Object(source), true).forEach(function (key) { checkout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { checkout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function checkout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















const LoginMessageDiv = external_styled_components_default.a.aside.withConfig({
  displayName: "checkout__LoginMessageDiv",
  componentId: "ca89yr-0"
})({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '15vh',
  padding: '0 1.5rem 1.5rem',
  fontSize: '22px',
  backgroundColor: '#fff'
});

const CheckoutPage = ({
  deviceType
}) => {
  var _error$toString;

  const {
    data: deliverData,
    error: deliveryError,
    loading: deliveryLoading,
    refetch: deliveryRefetch
  } = Object(react_hooks_["useQuery"])(delivery["a" /* DELIVERY_METHOD */]);
  const {
    data: paymentData,
    error: paymentError,
    loading: paymentLoading,
    refetch: paymentRefetch
  } = Object(react_hooks_["useQuery"])(PAYMENT_OPTION);
  const {
    data,
    error,
    loading,
    refetch: userRefetch
  } = Object(react_hooks_["useQuery"])(customer_query["a" /* GET_LOGGED_IN_USER */]);
  const intl = Object(external_react_intl_["useIntl"])();
  const router = Object(router_["useRouter"])(); // React.useEffect(() => {
  //     if (router.query.shouldRefresh) {
  //         userRefetch();
  //     }
  //   }, []);

  const {
    authDispatch
  } = Object(external_react_["useContext"])(auth_context["a" /* AuthContext */]);

  const toggleSignUpForm = () => {
    authDispatch({
      type: 'SIGNUP'
    });
    Object(reuse_modal_["openModal"])({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: authentication_form["a" /* default */],
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto'
      }
    });
  };

  const toggleSignInForm = () => {
    authDispatch({
      type: 'SIGNIN'
    });
    Object(reuse_modal_["openModal"])({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: authentication_form["a" /* default */],
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto'
      }
    });
  };

  if (router.query.shouldRefresh) {
    userRefetch();
  }

  if (loading || deliveryLoading || paymentLoading) {
    return checkout_jsx(error_message["default"], {
      message: 'Cargando...'
    });
  }

  if (error === null || error === void 0 ? void 0 : (_error$toString = error.toString()) === null || _error$toString === void 0 ? void 0 : _error$toString.includes('no token sent')) {
    // @ts-ignore
    return checkout_jsx(external_react_default.a.Fragment, null, checkout_jsx(ErrorMessageTwo, {
      message: intl.formatMessage({
        id: 'notAuth',
        defaultMessage: 'notAuth'
      })
    }), checkout_jsx(LoginMessageDiv, null, checkout_jsx(reuse_modal_["Modal"], null, checkout_jsx(button_button["a" /* Button */], {
      type: "button",
      onClick: toggleSignInForm,
      size: "big",
      style: {
        width: '200px'
      }
    }, intl.formatMessage({
      id: 'loginBtnText',
      defaultMessage: 'loginBtnText'
    })), checkout_jsx(authentication_form_style["g" /* Offer */], {
      style: {
        padding: '20px 20px',
        fontSize: '20px'
      }
    }, checkout_jsx(external_react_intl_["FormattedMessage"], {
      id: "dontHaveAccount",
      defaultMessage: "Don't have any account?"
    }), ' ', checkout_jsx(authentication_form_style["f" /* LinkButton */], {
      onClick: toggleSignUpForm
    }, checkout_jsx(external_react_intl_["FormattedMessage"], {
      id: "signUpBtnText",
      defaultMessage: "Sign Up"
    }))))));
  } else if (error || deliveryError || paymentError) {
    // @ts-ignore
    const err = error || deliveryError || paymentError;
    return checkout_jsx(external_react_default.a.Fragment, null, checkout_jsx(ErrorMessageTwo, {
      message: intl.formatMessage({
        id: 'somethingWentWrongAuth',
        defaultMessage: err.toString()
      })
    }), checkout_jsx(LoginMessageDiv, null, checkout_jsx(reuse_modal_["Modal"], null, checkout_jsx(button_button["a" /* Button */], {
      type: "button",
      onClick: toggleSignInForm,
      size: "big",
      style: {
        width: '200px'
      }
    }, intl.formatMessage({
      id: 'loginBtnText',
      defaultMessage: 'loginBtnText'
    })), checkout_jsx(authentication_form_style["g" /* Offer */], {
      style: {
        padding: '20px 20px',
        fontSize: '20px'
      }
    }, checkout_jsx(external_react_intl_["FormattedMessage"], {
      id: "dontHaveAccount",
      defaultMessage: "Don't have any account?"
    }), ' ', checkout_jsx(authentication_form_style["f" /* LinkButton */], {
      onClick: toggleSignUpForm
    }, checkout_jsx(external_react_intl_["FormattedMessage"], {
      id: "signUpBtnText",
      defaultMessage: "Sign Up"
    }))))));
  }

  const token = 'true';
  deliveryRefetch();
  paymentRefetch();
  console.dir(deliverData.deliveryMethods);
  console.dir(paymentData.paymentOptions);

  const checkoutData = checkout_objectSpread(checkout_objectSpread({}, data.getUser), {}, {
    deliveryMethods: [],
    paymentMethods: []
  });

  console.dir(deliverData);
  console.dir(paymentData);

  if (checkoutData.deliveryMethods.length == 0 && (deliverData || deliverData.deliveryMethods)) {
    checkoutData.deliveryMethods = [...deliverData.deliveryMethods.items];
  }

  if (checkoutData.paymentMethods.length == 0 && (paymentData || paymentData.paymentOptions)) {
    checkoutData.paymentMethods = [...paymentData.paymentOptions.items];
  }

  return checkout_jsx(external_react_default.a.Fragment, null, checkout_jsx(seo["a" /* SEO */], {
    title: "Checkout - Ditto",
    description: "Checkout Details"
  }), checkout_jsx(profile_provider["a" /* ProfileProvider */], {
    initData: checkoutData
  }, checkout_jsx(reuse_modal_["Modal"], null, checkout_jsx(checkout_two, {
    token: token,
    deviceType: deviceType
  }))));
};

/* harmony default export */ var checkout = __webpack_exports__["default"] = (CheckoutPage);

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

/***/ "99J/":
/***/ (function(module, exports) {

module.exports = require("react-multi-carousel");

/***/ }),

/***/ "AmGK":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAOCAYAAAB+UA+TAAAEhklEQVRIidWVXWxUVRSFv3XntkBpYUZqKQ0tqVgpPyp/wohEkBBMNKJGQ3wwhF8fTIQHxCCUONopiJEYNTFRQw3+oOIT6pORiDxACzEoodCIRmyLEIl2qKPT6cy924e5tLRTEI01cSf35uass9de69xz9hHAiLmx8cMU+kbSdQwIg04ZL3Y21W0biP2fwgEowJk/mEkAQQTREI42rPhvpf274eRezuS/nCn/riFXM4ThAsih16jTk8LJ9uRNzIwpvZmYOcTkD0YUjtbvk7S0/6h91tnl3UdLLJ/wWuPt8yPJZM4hSi7jbUF6h5WVO66a23huCmRfwzjiBIlTLmFOJo3jZfKedE3NDKra41filFgEYNhRsJZgdElklPvYPzYJkMneEphMAV8Cp0FTMZ5nd8dNV0/OzgQWICt2YG/IUG2vYN/Lm+6HXFIzbgVTdDC6klmxUlAxQKLLW9R5eOs0M44DmFlOzKxY0eg58dksjLl/y6j8nDbjKKsqF+LTpyHjlwPw1s/lNP40k71W2D/ZAl9qdUvmfDdREMqNG8L6m5RD4p57obAQ4JfBtLiuG4ix87TEktyxo0R+TxiETK2RufHHTfaSRGG42z1DNP65xBrM6nxU5IjNZrySaKpbDxCJ1r+BtNawlxMondNKKwAhm4opVzhUcpxdbfuwdO7I/NZ+isb2TmAePjUYtQgwa3VD8vsakZc1b0SRAMwJkQ1H6Fq8GBsTCRaIg4MZ9aVaBwNRHI7WH8DLjEOqwkiRzX5KofsjpgzGCxKVwBoAHzttpjbEZsFDwPrwvPidGGsx2hN/DN+C2R4kMO6msf0AxrSg7CEs+TTSUrAzmHaDlgDzABg1vo1key0ICtxWV/Q1ouyY0ubOZQ8Muj3Bvsfx3hwMERZwqFhigUHa4KD59qwKQg0CTPZE4vDW1wHC0fhEiTmeEzqZPLTlRCQab0dUhm9rmI5vuw3zfdMyjm/8HT0yOSgyAZiA8SvifTw9RchvwUjjFNzFqnFnaDy7C/w2zH4APIwbwdIsr2hzzbHJIrcVsmPLUvn+7BzSftzCDSwv776C0VoQ5vNcornumcux8O3xnQCGjgGMnr89QtabYOAlD9WcCgjeAzbJ9feBqnzTtq7muib2Wohkxw0AOKHZrKj4qpe48WwlaBTiAiPL23Na/WkIkE7R1VGNo2EYxyB3vfT+Ua+8rOgyg0+yumrnYMby1kKqFeBLTfkgXyOmO9iecLT+XTzvfomxZnwLyzwA8/wPFHI2gaqAExeHZ3OLlTw/CQhhlu5nEkA9FzA3BVxPsuMjGjtaMFsfoCdxVEvuOLUCODImXcrNlpWW9RG5X1yLycBMNUbK8zLHBkK+shswPpSpAvEoPh8HUEtfurrMzAfrzmbsYQ7EsrlkrzoQ05xXc2V1N2YbAQ94ELNZiE9yhGrB/ODqsZMAikTrtxgUmOOkLq5e3oCCDpwcP5x1QccbylgYc8Pp0BGhGWa2LtG09dWhKKPer11tFUgdgDA6WF1ZORQFB0ZkbnwTDtsN9icO1y0eqjp/Anh31Sy27YKTAAAAAElFTkSuQmCC"

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
})(["display:inline-flex;align-items:center;border-radius:", ";background-color:", ";border:1px solid ", ";text-align:center;padding:15px 20px;margin-bottom:15px;margin-right:15px;position:relative;font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:24px;max-width:240px;cursor:pointer;width:100%;transition:all 0.25s ease;&.active{border:2px solid ", ";background-color:", ";}&.disabled{cursor:not-allowed;opacity:0.6;}&.item-has-title{flex-direction:column;text-align:left;align-items:flex-start;padding:15px;}&:last-child{margin-right:0;}input[type='radio']{opacity:0;visibility:hidden;position:absolute;top:0;left:0;}&:hover{.button-wrapper{opacity:1;visibility:visible;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('radii.base', '6px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.200', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.200', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'));
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
  onChange,
  clickableText
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
  }, clickableText || 'Click aquí'), withActionButtons && __jsx(CardButtons, {
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

/***/ "BU0q":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAOCAYAAAA1+Nx+AAAC2ElEQVQ4jYWUX2jbVRTHP+f+fvn9mqxJk9WmjemaNmQtKzrZmCDIVBjbQHBsCrKHUhUfHGPDwUBBQX0Yw4FPwqz4MvBhMnwQKfggE/tQ2Biyzf2nm2lX2y7d1ibt0qVNfr8cH3SlapMeuA/33u/3w7n3nnuEFXEH4jjmqIpsQ3ULIjHQnConQ+XqQDvM6E+4lZmmt8C8L9CL8hj4XYTLljAgffmrK5myDHfYq5hTiERZJVS1GN4mh5sPhD8Vkc7VNKA+6AnbnftE3sQHMAAjAesdFeuHWnAAEWk0MXtg8ZpXAw4gFpiPKouxb5dXstDqO2YMkYbaRmjuc7OBNpOWoOCm7HrSv8HKHrs/P2j7jjmyFhxLZxcueOkn08jOKqEtTl2LwgfAoAFem/nmex7t3gc/n8Pu7vmXcK57M+x4xW/osXgyvHnlUuwE954/C+s6/ge/vvQS91v6X9RT0ag9bkV6Nu18malIE5HuDOe37sb9+Eu8mzdo2/4Ckxevo+lky1JHO+JVeDgyykQJepqauPXd29zoeIPGrh04xavEkr3M+zHWhSNURr4QHDrN/fRmP/fHBNFUkumxKTa+/iqJriSlwjwbMu2EkglyQ8M81RKFcpnGjRlmhn5lffU2zyTm6HhuF60bUpSCvfx24Qpu4Ryjd7LEqxfBk6qdezqzIINnXd/zWZ9JEd+U4eF0ActxGf7lEq56OKUi5cUlHgwNs5BIkRkZxE4dZfRBkeaGKLnJHLOzBdzpH5nsOkY4YhGYzilB7sptx3yOyId1K8LW8dYjoeXLtqKGQJtV95FRhgP9+e0yBomKY7JrVZIV5XEgboUwEH8viAmbunyRyn67r3jGdMI9Rd6tnw54Bf3TTZtH8YOhNeGqnLb7imfgn5/cXfZPi/r7UM3XdtFeznqfSZDROmgfqscDDfn+5ZOs3F6t2Sk6hfJ1qFz96j/N7pDAs0AJ5XKtZvcX+dwJtfbM5ZQAAAAASUVORK5CYII="

/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "CWtZ":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAMCAYAAAAOCs/+AAADWklEQVQ4jXWUb2iVdRTHP+e5d14ns0V0zdHS+6cXNfpDtC6LCiIkQwxK0DLYeC7UC0NIYq0XvVkSIVr2orBC825IEHdkUSBrU1SoILFiyC5i995tTJxzgWW7G07vc3rx/J7n97jN8+r8+53v95zf+f1EB9gFbEaJY6VMhh3Szo3Qk+7rxtHNAHgygOq3xPgGAJUpqu52AFqLjayo5RHpRDUN0oRwHjhFxe22ECpk+/eBthvHGSr5niAqAHqUNdTZgfIeQoOJbZStDPlqMUa2NgWSNKceos69OPzkYzBE1d3I/ccSeFd+RgjAIqK/Usk/FZqZwmuIfB2Jz1DJrwksB0C2cEW28v6GQ+8MXp1bddnEHrdF5l4ISan+RtkdRbQtglryY9M9lpReAj4A/RTlLMq5W4nKW4vsJNnD9wVW9Po4UW47tm7P/hcvdL/7V8vqfy0xocvqzufGZ4mplkzwOevjY6rufpaT9f2PIZozeeMIKV93csAkmImFckOGZxdWkt27NzU9e0czAMliE+jLJuMakgz2yhJzpBSC2GY+JFPYRWuxcQmxmL5t86Q3EsmFJW85MOlWQCfnbyYa3IE3MlqkmabadpBg7w5S3nTdAD8anru2agSAurMb9D+DmEDkE1bMlUgfsbmth+5CeNVvREe43lgEbpqaTyxPzJdBgMELD2ce/GhPByJdZhoKsS8AWH+kBWgy/ilmts0CMNE1hhd/Bhi1EyGF1E+RKqwFIBF/k3CFnAIXt82j+qep1XF7Yh7DgXr+77UvITztW3qcSmcZgFh96eIHMtY5QmX8EdAelHlD7k4c5xU4GUd1pyXtTZAqPAty1eQ1su5w2/LElGF/OoDweqTzA1aPvEgxi3/3V6ttkV6PSn4fcMLW9eZIT2xB5B6bJ98Rk5MIz4euBsnBolcJwHj+HzJ9vwPtYVy5THXiBwsibf4PCKiZWLPzI819CdBzKJdAsqCbCBLr+gtx+XIJ3mJRyQF9S4n5nRyP/MggegB6vUhC5KuQUsSXBOkISQeKstuY/lqoTlN1W0D8m6HXIZOqIaxEuM3EADz5npj3ZGjXObgoYwb0NAALzigUY1D7A2UDQgxYAL2IMorKZ4y5Q6T7d4LnnxE5akmB33ShH3gAZQHgf/VSJw5mgGMuAAAAAElFTkSuQmCC"

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

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
    instructions: values.instructions,
    is_primary: true
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
})(["display:inline-flex;align-items:center;border-radius:", ";background-color:", ";border:1px solid ", ";text-align:center;padding:15px 20px;margin-bottom:15px;margin-right:15px;position:relative;font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:24px;max-width:240px;cursor:pointer;width:100%;transition:all 0.25s ease;&.active{border:2px solid ", ";background-color:", ";}&.disabled{cursor:not-allowed;opacity:0.6;}&.item-has-title{flex-direction:column;text-align:left;align-items:flex-start;padding:15px;}&:last-child{margin-right:0;}input[type='radio']{opacity:0;visibility:hidden;position:absolute;top:0;left:0;}&:hover{.button-wrapper{opacity:1;visibility:visible;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('radii.base', '6px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.200', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.200', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'));
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

/***/ "MXV/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoCartBag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const NoCartBag = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 231.91 292"
  }, __jsx("defs", null, __jsx("linearGradient", {
    id: "linear-gradient",
    x1: "1",
    y1: "0.439",
    x2: "0.369",
    y2: "1",
    gradientUnits: "objectBoundingBox"
  }, __jsx("stop", {
    offset: "0",
    stopColor: "#029477"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#009e7f"
  }))), __jsx("g", {
    id: "no_cart_in_bag_2",
    "data-name": "no cart in bag 2",
    transform: "translate(-1388 -351)"
  }, __jsx("ellipse", {
    id: "Ellipse_2873",
    "data-name": "Ellipse 2873",
    cx: "115.955",
    cy: "27.366",
    rx: "115.955",
    ry: "27.366",
    transform: "translate(1388 588.268)",
    fill: "#ddd",
    opacity: "0.25"
  }), __jsx("path", {
    id: "Path_18691",
    "data-name": "Path 18691",
    d: "M29.632,0H170.368A29.828,29.828,0,0,1,200,30.021V209.979A29.828,29.828,0,0,1,170.368,240H29.632A29.828,29.828,0,0,1,0,209.979V30.021A29.828,29.828,0,0,1,29.632,0Z",
    transform: "translate(1403 381)",
    fill: "#009e7f"
  }), __jsx("path", {
    id: "Rectangle_1852",
    "data-name": "Rectangle 1852",
    d: "M30,0H170a30,30,0,0,1,30,30v0a30,30,0,0,1-30,30H12.857A12.857,12.857,0,0,1,0,47.143V30A30,30,0,0,1,30,0Z",
    transform: "translate(1403 381)",
    fill: "#006854"
  }), __jsx("path", {
    id: "Rectangle_1853",
    "data-name": "Rectangle 1853",
    d: "M42,0H158a42,42,0,0,1,42,42v0a18,18,0,0,1-18,18H18A18,18,0,0,1,0,42v0A42,42,0,0,1,42,0Z",
    transform: "translate(1403 381)",
    fill: "#006854"
  }), __jsx("path", {
    id: "Path_18685",
    "data-name": "Path 18685",
    d: "M446.31,246.056a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,246.056Zm0-53.294A23.3,23.3,0,1,0,469.9,216.056,23.471,23.471,0,0,0,446.31,192.762Z",
    transform: "translate(1056.69 164.944)",
    fill: "#006854"
  }), __jsx("path", {
    id: "Path_18686",
    "data-name": "Path 18686",
    d: "M446.31,375.181a30,30,0,1,1,30-30A30.034,30.034,0,0,1,446.31,375.181Zm0-53.294A23.3,23.3,0,1,0,469.9,345.181,23.471,23.471,0,0,0,446.31,321.887Z",
    transform: "translate(1057.793 95.684)",
    fill: "#009e7f"
  }), __jsx("circle", {
    id: "Ellipse_2874",
    "data-name": "Ellipse 2874",
    cx: "28.689",
    cy: "28.689",
    r: "28.689",
    transform: "translate(1473.823 511.046)",
    fill: "#006854"
  }), __jsx("circle", {
    id: "Ellipse_2875",
    "data-name": "Ellipse 2875",
    cx: "15.046",
    cy: "15.046",
    r: "15.046",
    transform: "translate(1481.401 547.854) rotate(-45)",
    fill: "#009e7f"
  }), __jsx("path", {
    id: "Path_18687",
    "data-name": "Path 18687",
    d: "M399.71,531.27a71.755,71.755,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.392,78.392,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z",
    transform: "translate(1060.579 -35.703)",
    fill: "#006854"
  }), __jsx("path", {
    id: "Path_18688",
    "data-name": "Path 18688",
    d: "M412.913,527.786a78.419,78.419,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.785,71.785,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z",
    transform: "translate(1060.566 -35.704)",
    fill: "#006854"
  }), __jsx("path", {
    id: "Path_18689",
    "data-name": "Path 18689",
    d: "M583.278,527.786a78.417,78.417,0,0,0-13.73-15c-3.38-2.843-8.289,2.017-4.882,4.882a71.768,71.768,0,0,1,12.65,13.6c2.535,3.609,8.525.162,5.962-3.485Z",
    transform: "translate(970.304 -35.704)",
    fill: "#006854"
  }), __jsx("path", {
    id: "Path_18690",
    "data-name": "Path 18690",
    d: "M570.075,531.27a71.77,71.77,0,0,1,12.65-13.6c3.4-2.863-1.5-7.726-4.882-4.882a78.407,78.407,0,0,0-13.73,15c-2.56,3.644,3.424,7.1,5.962,3.485Z",
    transform: "translate(970.318 -35.703)",
    fill: "#006854"
  }), __jsx("path", {
    id: "Path_18692",
    "data-name": "Path 18692",
    d: "M301.243,287.464a19.115,19.115,0,0,1,8.071,9.077,19.637,19.637,0,0,1,1.6,7.88v26.085a19.349,19.349,0,0,1-9.672,16.957c-10.048-6.858-16.544-17.742-16.544-30S291.2,294.322,301.243,287.464Z",
    transform: "translate(1292.301 101.536)",
    fill: "url(#linear-gradient)"
  }), __jsx("path", {
    id: "Path_18693",
    "data-name": "Path 18693",
    d: "M294.371,287.464a19.115,19.115,0,0,0-8.071,9.077,19.637,19.637,0,0,0-1.6,7.88v26.085a19.349,19.349,0,0,0,9.672,16.957c10.048-6.858,16.544-17.742,16.544-30S304.419,294.322,294.371,287.464Z",
    transform: "translate(1118.301 101.536)",
    fill: "url(#linear-gradient)"
  })));
};

/***/ }),

/***/ "OeMJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Plus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Minus; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // SVG plus icon

const Plus = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 12"
  }, __jsx("g", {
    id: "Group_3351",
    "data-name": "Group 3351",
    transform: "translate(-1367 -190)"
  }, __jsx("rect", {
    "data-name": "Rectangle 520",
    width: "12",
    height: "2",
    rx: "1",
    transform: "translate(1367 195)",
    fill: color
  }), __jsx("rect", {
    "data-name": "Rectangle 521",
    width: "12",
    height: "2",
    rx: "1",
    transform: "translate(1374 190) rotate(90)",
    fill: color
  })));
}; // SVG minus icon

const Minus = ({
  color = 'currentColor',
  width = '12px',
  height = '2px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 2"
  }, __jsx("rect", {
    "data-name": "Rectangle 522",
    width: "12",
    height: "2",
    rx: "1",
    fill: color
  }));
};

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

/***/ "W1nP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADMIN_IMAGE_HOST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHOP_IMAGE_HOST; });
const ADMIN_IMAGE_HOST = process.env.REACT_APP_IMAGE_URL;
const SHOP_IMAGE_HOST = "http://54.232.137.175/";

/***/ }),

/***/ "XYff":
/***/ (function(module) {

module.exports = JSON.parse("{\"af\":\"Afganistán\",\"al\":\"Albania\",\"de\":\"Alemania\",\"ad\":\"Andorra\",\"ao\":\"Angola\",\"ai\":\"Anguila\",\"aq\":\"Antártida\",\"ag\":\"Antigua y Barbuda\",\"sa\":\"Arabia Saudí\",\"dz\":\"Argelia\",\"ar\":\"Argentina\",\"am\":\"Armenia\",\"aw\":\"Aruba\",\"au\":\"Australia\",\"at\":\"Austria\",\"az\":\"Azerbaiyán\",\"bs\":\"Bahamas\",\"bd\":\"Bangladés\",\"bb\":\"Barbados\",\"bh\":\"Baréin\",\"be\":\"Bélgica\",\"bz\":\"Belice\",\"bj\":\"Benín\",\"bm\":\"Bermudas\",\"by\":\"Bielorrusia\",\"bo\":\"Bolivia\",\"ba\":\"Bosnia y Herzegovina\",\"bw\":\"Botsuana\",\"br\":\"Brasil\",\"bn\":\"Brunéi\",\"bg\":\"Bulgaria\",\"bf\":\"Burkina Faso\",\"bi\":\"Burundi\",\"bt\":\"Bután\",\"cv\":\"Cabo Verde\",\"kh\":\"Camboya\",\"cm\":\"Camerún\",\"ca\":\"Canadá\",\"ic\":\"Canarias\",\"bq\":\"Caribe neerlandés\",\"qa\":\"Catar\",\"ea\":\"Ceuta y Melilla\",\"td\":\"Chad\",\"cz\":\"Chequia\",\"cl\":\"Chile\",\"cn\":\"China\",\"cy\":\"Chipre\",\"va\":\"Ciudad del Vaticano\",\"co\":\"Colombia\",\"km\":\"Comoras\",\"cg\":\"Congo\",\"kp\":\"Corea del Norte\",\"kr\":\"Corea del Sur\",\"cr\":\"Costa Rica\",\"ci\":\"Côte d’Ivoire\",\"hr\":\"Croacia\",\"cu\":\"Cuba\",\"cw\":\"Curazao\",\"dg\":\"Diego García\",\"dk\":\"Dinamarca\",\"dm\":\"Dominica\",\"ec\":\"Ecuador\",\"eg\":\"Egipto\",\"sv\":\"El Salvador\",\"ae\":\"Emiratos Árabes Unidos\",\"er\":\"Eritrea\",\"sk\":\"Eslovaquia\",\"si\":\"Eslovenia\",\"es\":\"España\",\"us\":\"Estados Unidos\",\"ee\":\"Estonia\",\"sz\":\"Esuatini\",\"et\":\"Etiopía\",\"ph\":\"Filipinas\",\"fi\":\"Finlandia\",\"fj\":\"Fiyi\",\"fr\":\"Francia\",\"ga\":\"Gabón\",\"gm\":\"Gambia\",\"ge\":\"Georgia\",\"gh\":\"Ghana\",\"gi\":\"Gibraltar\",\"gd\":\"Granada\",\"gr\":\"Grecia\",\"gl\":\"Groenlandia\",\"gp\":\"Guadalupe\",\"gu\":\"Guam\",\"gt\":\"Guatemala\",\"gf\":\"Guayana Francesa\",\"gg\":\"Guernsey\",\"gn\":\"Guinea\",\"gq\":\"Guinea Ecuatorial\",\"gw\":\"Guinea-Bisáu\",\"gy\":\"Guyana\",\"ht\":\"Haití\",\"hn\":\"Honduras\",\"hu\":\"Hungría\",\"in\":\"India\",\"id\":\"Indonesia\",\"iq\":\"Irak\",\"ir\":\"Irán\",\"ie\":\"Irlanda\",\"ac\":\"Isla de la Ascensión\",\"im\":\"Isla de Man\",\"cx\":\"Isla de Navidad\",\"nf\":\"Isla Norfolk\",\"is\":\"Islandia\",\"ax\":\"Islas Åland\",\"ky\":\"Islas Caimán\",\"cc\":\"Islas Cocos\",\"ck\":\"Islas Cook\",\"fo\":\"Islas Feroe\",\"gs\":\"Islas Georgia del Sur y Sandwich del Sur\",\"fk\":\"Islas Malvinas\",\"mp\":\"Islas Marianas del Norte\",\"mh\":\"Islas Marshall\",\"um\":\"Islas menores alejadas de EE. UU.\",\"pn\":\"Islas Pitcairn\",\"sb\":\"Islas Salomón\",\"tc\":\"Islas Turcas y Caicos\",\"vg\":\"Islas Vírgenes Británicas\",\"vi\":\"Islas Vírgenes de EE. UU.\",\"il\":\"Israel\",\"it\":\"Italia\",\"jm\":\"Jamaica\",\"jp\":\"Japón\",\"je\":\"Jersey\",\"jo\":\"Jordania\",\"kz\":\"Kazajistán\",\"ke\":\"Kenia\",\"kg\":\"Kirguistán\",\"ki\":\"Kiribati\",\"xk\":\"Kosovo\",\"kw\":\"Kuwait\",\"la\":\"Laos\",\"ls\":\"Lesoto\",\"lv\":\"Letonia\",\"lb\":\"Líbano\",\"lr\":\"Liberia\",\"ly\":\"Libia\",\"li\":\"Liechtenstein\",\"lt\":\"Lituania\",\"lu\":\"Luxemburgo\",\"mk\":\"Macedonia\",\"mg\":\"Madagascar\",\"my\":\"Malasia\",\"mw\":\"Malaui\",\"mv\":\"Maldivas\",\"ml\":\"Mali\",\"mt\":\"Malta\",\"ma\":\"Marruecos\",\"mq\":\"Martinica\",\"mu\":\"Mauricio\",\"mr\":\"Mauritania\",\"yt\":\"Mayotte\",\"mx\":\"México\",\"fm\":\"Micronesia\",\"md\":\"Moldavia\",\"mc\":\"Mónaco\",\"mn\":\"Mongolia\",\"me\":\"Montenegro\",\"ms\":\"Montserrat\",\"mz\":\"Mozambique\",\"mm\":\"Myanmar\",\"na\":\"Namibia\",\"nr\":\"Nauru\",\"np\":\"Nepal\",\"ni\":\"Nicaragua\",\"ne\":\"Níger\",\"ng\":\"Nigeria\",\"nu\":\"Niue\",\"no\":\"Noruega\",\"nc\":\"Nueva Caledonia\",\"nz\":\"Nueva Zelanda\",\"om\":\"Omán\",\"nl\":\"Países Bajos\",\"pk\":\"Pakistán\",\"pw\":\"Palaos\",\"pa\":\"Panamá\",\"pg\":\"Papúa Nueva Guinea\",\"py\":\"Paraguay\",\"pe\":\"Perú\",\"pf\":\"Polinesia Francesa\",\"pl\":\"Polonia\",\"pt\":\"Portugal\",\"pr\":\"Puerto Rico\",\"hk\":\"RAE de Hong Kong\",\"mo\":\"RAE de Macao\",\"gb\":\"Reino Unido\",\"cf\":\"República Centroafricana\",\"cd\":\"República Democrática del Congo\",\"do\":\"República Dominicana\",\"re\":\"Reunión\",\"rw\":\"Ruanda\",\"ro\":\"Rumanía\",\"ru\":\"Rusia\",\"eh\":\"Sáhara Occidental\",\"ws\":\"Samoa\",\"as\":\"Samoa Americana\",\"bl\":\"San Bartolomé\",\"kn\":\"San Cristóbal y Nieves\",\"sm\":\"San Marino\",\"mf\":\"San Martín\",\"pm\":\"San Pedro y Miquelón\",\"vc\":\"San Vicente y las Granadinas\",\"sh\":\"Santa Elena\",\"lc\":\"Santa Lucía\",\"st\":\"Santo Tomé y Príncipe\",\"sn\":\"Senegal\",\"rs\":\"Serbia\",\"sc\":\"Seychelles\",\"sl\":\"Sierra Leona\",\"sg\":\"Singapur\",\"sx\":\"Sint Maarten\",\"sy\":\"Siria\",\"so\":\"Somalia\",\"lk\":\"Sri Lanka\",\"za\":\"Sudáfrica\",\"sd\":\"Sudán\",\"ss\":\"Sudán del Sur\",\"se\":\"Suecia\",\"ch\":\"Suiza\",\"sr\":\"Surinam\",\"sj\":\"Svalbard y Jan Mayen\",\"th\":\"Tailandia\",\"tw\":\"Taiwán\",\"tz\":\"Tanzania\",\"tj\":\"Tayikistán\",\"io\":\"Territorio Británico del Océano Índico\",\"tf\":\"Territorios Australes Franceses\",\"ps\":\"Territorios Palestinos\",\"tl\":\"Timor-Leste\",\"tg\":\"Togo\",\"tk\":\"Tokelau\",\"to\":\"Tonga\",\"tt\":\"Trinidad y Tobago\",\"ta\":\"Tristán de Acuña\",\"tn\":\"Túnez\",\"tm\":\"Turkmenistán\",\"tr\":\"Turquía\",\"tv\":\"Tuvalu\",\"ua\":\"Ucrania\",\"ug\":\"Uganda\",\"uy\":\"Uruguay\",\"uz\":\"Uzbekistán\",\"vu\":\"Vanuatu\",\"ve\":\"Venezuela\",\"vn\":\"Vietnam\",\"wf\":\"Wallis y Futuna\",\"ye\":\"Yemen\",\"dj\":\"Yibuti\",\"zm\":\"Zambia\",\"zw\":\"Zimbabue\"}");

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

/***/ "ZpXP":
/***/ (function(module, exports) {

module.exports = require("react-phone-input-2");

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

/***/ "cTCn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IconWrapper */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Container; });
/* unused harmony export LogoWrapper */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SubHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return OfferSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Offer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SubrequirementContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Requirement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return HelperText; });
/* unused harmony export Divider */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LinkButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("B68Z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return components_button_button__WEBPACK_IMPORTED_MODULE_2__["a"]; });





const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "authentication-formstyle__IconWrapper",
  componentId: "sc-19mebf4-0"
})(["display:flex;margin-right:6px;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "authentication-formstyle__Wrapper",
  componentId: "sc-19mebf4-1"
})(["text-align:center;background-color:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'));
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "authentication-formstyle__Container",
  componentId: "sc-19mebf4-2"
})(["padding:40px 60px 0;@media (max-width:768px){padding:40px 30px 0;}"]);
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "authentication-formstyle__LogoWrapper",
  componentId: "sc-19mebf4-3"
})(["margin-bottom:30px;img{max-width:160px;}"]);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "authentication-formstyle__Heading",
  componentId: "sc-19mebf4-4"
})(["margin-bottom:10px;font-family:", ";font-size:", "px;font-weight:", ";color:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.heading', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.lg', '21'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'));
const SubHeading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "authentication-formstyle__SubHeading",
  componentId: "sc-19mebf4-5"
})(["margin-bottom:30px;font-family:", ";font-size:", "px;font-weight:", ";color:", ";display:block;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c'));
const OfferSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "authentication-formstyle__OfferSection",
  componentId: "sc-19mebf4-6"
})(["padding:20px;background-color:", ";color:", ";display:flex;justify-content:center;align-items:center;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'));
const Offer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "authentication-formstyle__Offer",
  componentId: "sc-19mebf4-7"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin:0;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c'));
const Dot = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "authentication-formstyle__Dot",
  componentId: "sc-19mebf4-8"
})(["background-color:", ";border-radius:2,width:4,height:4,align-self:'center'"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#F7F7F7'));
const SubrequirementContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "authentication-formstyle__SubrequirementContainer",
  componentId: "sc-19mebf4-9"
})(["flex-direction:'row',align-items:'center',margin-top:5,margin-left:15"]);
const Requirement = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "authentication-formstyle__Requirement",
  componentId: "sc-19mebf4-10"
})(["margin-left:10,font-size:10,font-family:", ";color:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#F7F7F7'));
const HelperText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "authentication-formstyle__HelperText",
  componentId: "sc-19mebf4-11"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin:0;text-align:center;width:100%;a{font-weight:", ";color:", ";text-decoration:underline;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.blue.link', '#4285f4')); // export const Input = styled.input`
//   width: 100%;
//   height: 48px;
//   border-radius: ${themeGet('radii.base', '6px')};
//   background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
//   border: 1px solid ${themeGet('colors.gray.700', '#e6e6e6')};
//   font-family: ${themeGet('fonts.body', 'Lato')};
//   font-size: ${themeGet('fontSizes.base', '15')}px;
//   font-weight: ${themeGet('fontWeights.regular', '400')};
//   color: ${themeGet('colors.text.bold', '#0D1136')};
//   line-height: 19px;
//   padding: 0 18px;
//   box-sizing: border-box;
//   transition: border-color 0.25s ease;
//   margin-bottom: 10px;
//   &:hover,
//   &:focus {
//     outline: 0;
//   }
//   &:focus {
//     border-color: ${themeGet('colors.primary.regular', '#009e7f')};
//   }
//   &::placeholder {
//     color: ${themeGet('colors.text.regular', '#77798c')};
//     font-size: calc(${themeGet('fontSizes.base', '15')}px + 1px);
//   }
//   &::-webkit-inner-spin-button,
//   &::-webkit-outer-spin-button {
//     -webkit-appearance: none;
//     margin: 0;
//   }
//   &.disabled {
//     .inner-wrap {
//       cursor: not-allowed;
//       opacity: 0.6;
//     }
//   }
// `;

const Divider = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "authentication-formstyle__Divider",
  componentId: "sc-19mebf4-12"
})(["padding:15px 0;width:100%;display:flex;justify-content:center;align-items:center;position:relative;span{font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1;background-color:", ";z-index:1;position:relative;padding:0 10px;}&::before{content:'';width:100%;height:1px;background-color:", ";position:absolute;top:50%;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1'));
const LinkButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "authentication-formstyle__LinkButton",
  componentId: "sc-19mebf4-13"
})(["background-color:transparent;border:0;outline:0;box-shadow:none;padding:0;font-size:17px;font-weight:", ";color:", ";text-decoration:underline;cursor:pointer;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'));

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

/***/ "fDRB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UPDATE_CONTACT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DELETE_CONTACT; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const UPDATE_CONTACT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation($contactInput: String!) {
    updateContact(contactInput: $contactInput) {
      id
      name
      contact {
        id
        type
        number
      }
    }
  }
`;
const DELETE_CONTACT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation($contactId: String!) {
    deleteContact(contactId: $contactId) {
      id
      name
      contact {
        id
        type
        number
      }
    }
  }
`;

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
  '.add-address-modal,.add-contact-modal': {
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

/***/ "kp67":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ AuthenticationForm; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/features/authentication-form/authentication-form.style.tsx
var authentication_form_style = __webpack_require__("cTCn");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./src/contexts/auth/auth.context.tsx
var auth_context = __webpack_require__("QfjN");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: ./src/components/forms/input.tsx
var input = __webpack_require__("VnWI");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./src/graphql/mutation/signin.ts

const SIGNIN_MUTATION = external_graphql_tag_default.a`
mutation Login($phone: String!, $password: String!) {
    login(phone: $phone, password: $password) {
        user {
            id
            role
            phones{
                number
            }
        }
        access_token
    }
}
`;
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-phone-input-2"
var external_react_phone_input_2_ = __webpack_require__("ZpXP");
var external_react_phone_input_2_default = /*#__PURE__*/__webpack_require__.n(external_react_phone_input_2_);

// EXTERNAL MODULE: /Users/estebanmuruzabal/work/Mahdi-Fashion/client/node_modules/react-phone-input-2/lang/es.json
var es = __webpack_require__("XYff");

// CONCATENATED MODULE: ./src/features/authentication-form/login.tsx
var __jsx = external_react_default.a.createElement;











function SignInModal() {
  var _error$toString, _error$toString2;

  const router = Object(router_["useRouter"])();
  const intl = Object(external_react_intl_["useIntl"])();
  const {
    authDispatch
  } = Object(external_react_["useContext"])(auth_context["a" /* AuthContext */]);
  const [phone, setPhone] = external_react_default.a.useState('');
  const [password, setPassword] = external_react_default.a.useState('');

  const toggleSignUpForm = () => {
    authDispatch({
      type: 'SIGNUP'
    });
  };

  const toggleForgotPassForm = () => {
    authDispatch({
      type: 'FORGOTPASS'
    });
  };

  const togglePhoneVerificationForm = () => {
    authDispatch({
      type: 'PHONE_VERIFICATION'
    });
  };

  const [signinMeMutation, {
    loading,
    error,
    data
  }] = Object(react_hooks_["useMutation"])(SIGNIN_MUTATION, {
    onCompleted: data => {
      const {
        access_token,
        user
      } = data.login;

      if (false) {}
    },
    onError: error => {
      setPhone('54');
      setPassword('');
    }
  });

  const handlePhoneChange = (value, data, event, formattedValue) => {
    setPhone(value);
  };

  const authError = (error === null || error === void 0 ? void 0 : (_error$toString = error.toString()) === null || _error$toString === void 0 ? void 0 : _error$toString.includes("User dose not exits.")) || (error === null || error === void 0 ? void 0 : (_error$toString2 = error.toString()) === null || _error$toString2 === void 0 ? void 0 : _error$toString2.includes("Password dose not match"));
  return __jsx(authentication_form_style["l" /* Wrapper */], null, __jsx(authentication_form_style["b" /* Container */], null, __jsx(authentication_form_style["d" /* Heading */], null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "welcomeBack",
    defaultMessage: "Welcome Back"
  })), __jsx(authentication_form_style["j" /* SubHeading */], null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "loginText",
    defaultMessage: "Login with your phone number & password"
  })), __jsx("form", {
    onSubmit: async e => {
      e.preventDefault();
      await signinMeMutation({
        variables: {
          phone,
          password
        }
      });
    }
  }, __jsx(external_react_phone_input_2_default.a, {
    inputProps: {
      name: 'phone',
      required: true,
      autoFocus: false
    },
    containerStyle: {
      textAlign: "left"
    },
    inputStyle: {
      backgroundColor: "#F7F7F7",
      height: "48px",
      marginBottom: "10px",
      width: "100%"
    },
    onlyCountries: ['ar'],
    localization: es,
    country: 'ar',
    masks: {
      ar: '(...) ...-....'
    },
    value: phone,
    onChange: handlePhoneChange
  }), __jsx(input["a" /* Input */], {
    type: "password",
    placeholder: intl.formatMessage({
      id: 'passwordPlaceholder',
      defaultMessage: 'Password (min 6 characters)'
    }),
    value: password,
    onChange: e => setPassword(e.target.value),
    required: true,
    height: "48px",
    backgroundColor: "#F7F7F7",
    mb: "10px"
  }), __jsx(authentication_form_style["a" /* Button */], {
    variant: "primary",
    size: "big",
    style: {
      width: '100%'
    },
    type: "submit"
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "continueBtn",
    defaultMessage: "Continue"
  }))), loading && __jsx("p", {
    style: {
      marginTop: "15px"
    }
  }, "Cargando..."), authError && __jsx("p", {
    style: {
      marginTop: "15px",
      fontSize: '16px'
    }
  }, " ", intl.formatMessage({
    id: 'userNotFound',
    defaultMessage: 'Invalid user/password'
  })), error && !authError && __jsx("p", {
    style: {
      marginTop: "15px",
      fontSize: '16px'
    }
  }, " ", `${(error === null || error === void 0 ? void 0 : error.message) || error}. Please try again`), __jsx(authentication_form_style["g" /* Offer */], {
    style: {
      padding: '20px 0',
      fontSize: '20px'
    }
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "dontHaveAccount",
    defaultMessage: "Don't have any account?"
  }), ' ', __jsx(authentication_form_style["f" /* LinkButton */], {
    onClick: toggleSignUpForm
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "signUpBtnText",
    defaultMessage: "Sign Up"
  })))), __jsx(authentication_form_style["h" /* OfferSection */], null, __jsx(authentication_form_style["g" /* Offer */], null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "phoneVerifyText",
    defaultMessage: "Phone number not verified?"
  }), ' ', __jsx(authentication_form_style["f" /* LinkButton */], {
    onClick: togglePhoneVerificationForm
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "verifyNowText",
    defaultMessage: "Verify Now"
  })))));
}
// EXTERNAL MODULE: /Users/estebanmuruzabal/work/Mahdi-Fashion/client/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./src/graphql/mutation/signup.ts

const SIGNUP_MUTATION = external_graphql_tag_default.a`
mutation SignUp($phone: String!, $password: String!, $name: String!) {
  signUp(phone: $phone, password: $password, name: $name) {
    status
    message
  }
}
`;
const PHONE_VERIFICATION_MUTATION = external_graphql_tag_default.a`
mutation phoneVerification($phone: String!) {
    phoneVerification(phone: $phone) {
    status
    message
  }
}
`;
const PHONE_VERIFICATION_CHECK_MUTATION = external_graphql_tag_default.a`
mutation phoneVerificationCheck($phone: String!, $verification_code: String!) {
    phoneVerificationCheck(phone: $phone, verification_code: $verification_code) {
        user {
            id
            phones{
                number
            }
        }
        access_token
  }
}
`;
// CONCATENATED MODULE: ./src/features/authentication-form/register.tsx
var register_jsx = external_react_default.a.createElement;










function SignOutModal() {
  const intl = Object(external_react_intl_["useIntl"])();
  const {
    authState,
    authDispatch
  } = Object(external_react_["useContext"])(auth_context["a" /* AuthContext */]);

  const toggleSignInForm = () => {
    authDispatch({
      type: 'SIGNIN'
    });
  };

  const toggleOtpForm = () => {
    authDispatch({
      type: 'OTP_VERIFICATION'
    });
  }; //signup


  const [phone, setPhone] = external_react_default.a.useState('');
  const [password, setPassword] = external_react_default.a.useState('');
  const [name, setName] = external_react_default.a.useState('');
  const [email, setEmail] = external_react_default.a.useState('');
  const [repeatPassword, setRepeatPassword] = external_react_default.a.useState('');
  const [errorMessage, setErrorMessage] = external_react_default.a.useState(null);
  const [signupMeMutation, {
    loading,
    error
  }] = Object(react_hooks_["useMutation"])(SIGNUP_MUTATION, {
    onCompleted: data => {
      if (false) {}

      setErrorMessage(null);
    },
    onError: error => {
      setPassword('');
      setRepeatPassword('');
      if ((error === null || error === void 0 ? void 0 : error.toString()) && (error === null || error === void 0 ? void 0 : error.toString().includes('User already registered'))) setErrorMessage(intl.formatMessage({
        id: 'userAlreadyRegistered',
        defaultMessage: 'User already registered'
      }));else if ((error === null || error === void 0 ? void 0 : error.toString()) && (error === null || error === void 0 ? void 0 : error.toString().includes('Incorrect length'))) setErrorMessage(intl.formatMessage({
        id: 'atLeast6Char',
        defaultMessage: 'Mínimo 6 caracteres'
      }));else setErrorMessage(error === null || error === void 0 ? void 0 : error.toString());
    }
  });

  const handlePhoneChange = (value, data, event, formattedValue) => {
    setPhone(value);
  };

  const hasMinLength = () => {
    return password.length >= 6;
  };

  const passwordsAreEqual = () => {
    return password === repeatPassword;
  }; // private hasSecurity() {
  //   let securityChecks = 0;
  //   // @ts-ignore
  //   securityChecks += this.hasLowerCase() + this.hasUpperCase() + this.hasDigit() + this.hasSpecialChar();
  //   return securityChecks >= 3;
  // }
  // private hasLowerCase() {
  //   return !!this.state.password.match(new RegExp('[a-z]'));
  // }
  // private hasUpperCase() {
  //   return !!this.state.password.match(new RegExp('[A-Z]'));
  // }
  // private hasDigit() {
  //   return !!this.state.password.match(new RegExp('[0-9]'));
  // }
  // private hasSpecialChar() {
  //   return !!this.state.password.match(/[\~\`\!\@\#\$\%\^\&\*\(\)\+\=\_\-\{\}\[\]\\|\:\;\"\'\?\/\<\>\,\.]/);
  // }


  const upperCaseEverything = str => {
    var splitStr = str.toLowerCase().split(' ');

    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    } // Directly return the joined string


    return splitStr.join(' ');
  };

  const setErrorFor5Sec = messageId => {
    const error = intl.formatMessage({
      id: messageId,
      defaultMessage: 'Please check the form'
    });
    setErrorMessage(error);
    setTimeout(() => setErrorMessage(null), 1500);
    return null;
  };

  return register_jsx(authentication_form_style["l" /* Wrapper */], null, register_jsx(authentication_form_style["b" /* Container */], null, register_jsx(authentication_form_style["d" /* Heading */], null, register_jsx(external_react_intl_["FormattedMessage"], {
    id: "signUpBtnText",
    defaultMessage: "Sign Up"
  })), register_jsx(authentication_form_style["j" /* SubHeading */], null), register_jsx("form", {
    method: "post",
    onSubmit: async e => {
      e.preventDefault();

      if (!passwordsAreEqual()) {
        setErrorFor5Sec('passShouldBeEqual');
        return;
      }

      await signupMeMutation({
        variables: {
          phone,
          password,
          name
        }
      });
    }
  }, register_jsx(input["a" /* Input */], {
    type: "text",
    name: "name",
    value: upperCaseEverything(name),
    onChange: e => setName(upperCaseEverything(e.target.value)),
    placeholder: intl.formatMessage({
      id: 'namePlaceholder',
      defaultMessage: 'Complete name'
    }),
    oninvalid: "this.setCustomValidity('Please Enter valid email')",
    oninput: "setCustomValidity('')",
    height: "48px",
    backgroundColor: "#F7F7F7",
    mb: "10px",
    required: true
  }), register_jsx(input["a" /* Input */], {
    type: "email",
    name: "email",
    placeholder: intl.formatMessage({
      id: 'emailSignUpPlaceholder',
      defaultMessage: 'Email address'
    }),
    value: email,
    onChange: e => setEmail(e.target.value),
    backgroundColor: "#F7F7F7",
    marginBottom: "10px" // intlInputLabelId="profileEmailField"

  }), register_jsx(external_react_phone_input_2_default.a, {
    inputProps: {
      name: 'Numero de telefono',
      required: true,
      autoFocus: false
    },
    containerStyle: {
      textAlign: "left"
    },
    inputStyle: {
      backgroundColor: "#F7F7F7",
      height: "48px",
      marginBottom: "10px",
      width: "100%"
    },
    onlyCountries: ['ar'],
    localization: es,
    country: 'ar',
    masks: {
      ar: '(...) ...-....'
    },
    value: phone,
    onChange: handlePhoneChange
  }), register_jsx(input["a" /* Input */], {
    type: "text",
    name: "password",
    value: password,
    onChange: e => setPassword(e.target.value),
    placeholder: intl.formatMessage({
      id: 'passwordPlaceholder',
      defaultMessage: 'Password (min 6 characters)'
    }),
    height: "48px",
    backgroundColor: "#F7F7F7",
    mb: "10px",
    required: true
  }), register_jsx(input["a" /* Input */], {
    type: "text",
    name: "password",
    value: repeatPassword,
    onChange: e => setRepeatPassword(e.target.value),
    placeholder: intl.formatMessage({
      id: 'passwordRepeatPlaceholder',
      defaultMessage: 'Password (min 6 characters)'
    }),
    height: "48px",
    backgroundColor: "#F7F7F7",
    mb: "10px",
    required: true
  }), !hasMinLength && register_jsx(authentication_form_style["k" /* SubrequirementContainer */], null, register_jsx(authentication_form_style["c" /* Dot */], null), register_jsx(authentication_form_style["i" /* Requirement */], null, intl.formatMessage({
    id: 'atLeast6Char',
    defaultMessage: 'At least 6 characters'
  }))), !passwordsAreEqual && register_jsx(authentication_form_style["k" /* SubrequirementContainer */], null, register_jsx(authentication_form_style["c" /* Dot */], null), register_jsx(authentication_form_style["i" /* Requirement */], null, intl.formatMessage({
    id: 'passShouldBeEqual',
    defaultMessage: 'Passwords does not match'
  }))), register_jsx(authentication_form_style["e" /* HelperText */], {
    style: {
      padding: '20px 0 30px'
    }
  }, register_jsx(external_react_intl_["FormattedMessage"], {
    id: "tramsText",
    defaultMessage: "By signing up, you agree to Ditto's"
  }), "\xA0", register_jsx(link_default.a, {
    href: "/"
  }, register_jsx("a", null, register_jsx(external_react_intl_["FormattedMessage"], {
    id: "termsConditionText",
    defaultMessage: "Terms & Condition"
  })))), register_jsx(authentication_form_style["a" /* Button */], {
    variant: "primary",
    size: "big",
    width: "100%",
    type: "submit"
  }, register_jsx(external_react_intl_["FormattedMessage"], {
    id: "registerBtn",
    defaultMessage: "Continue"
  }))), loading && register_jsx("p", {
    style: {
      marginTop: "15px"
    }
  }, "Cargando..."), (error || errorMessage) && register_jsx("p", {
    style: {
      marginTop: "15px",
      color: "red"
    }
  }, errorMessage), register_jsx(authentication_form_style["g" /* Offer */], {
    style: {
      padding: '20px 0'
    }
  }, register_jsx(external_react_intl_["FormattedMessage"], {
    id: "alreadyHaveAccount",
    defaultMessage: "Already have an account?"
  }), ' ', register_jsx(authentication_form_style["f" /* LinkButton */], {
    onClick: toggleSignInForm
  }, register_jsx(external_react_intl_["FormattedMessage"], {
    id: "loginBtnText",
    defaultMessage: "Login"
  })))));
}
// CONCATENATED MODULE: ./src/features/authentication-form/forgot-password.tsx
var forgot_password_jsx = external_react_default.a.createElement;





function ForgotPasswordModal() {
  const {
    authDispatch
  } = Object(external_react_["useContext"])(auth_context["a" /* AuthContext */]);
  const intl = Object(external_react_intl_["useIntl"])();

  const toggleSignInForm = () => {
    authDispatch({
      type: 'SIGNIN'
    });
  };

  return forgot_password_jsx(authentication_form_style["l" /* Wrapper */], null, forgot_password_jsx(authentication_form_style["b" /* Container */], {
    style: {
      paddingBottom: 30
    }
  }, forgot_password_jsx(authentication_form_style["d" /* Heading */], null, forgot_password_jsx(external_react_intl_["FormattedMessage"], {
    id: "forgotPassText",
    defaultMessage: "Forgot Password"
  })), forgot_password_jsx(authentication_form_style["j" /* SubHeading */], null, forgot_password_jsx(external_react_intl_["FormattedMessage"], {
    id: "sendResetPassText",
    defaultMessage: "We'll send you a link to reset your password"
  })), forgot_password_jsx(input["a" /* Input */], {
    type: "text",
    placeholder: intl.formatMessage({
      id: 'emailAddressPlaceholder',
      defaultMessage: 'Email Address or Contact No.'
    }),
    height: "48px",
    backgroundColor: "#F7F7F7",
    mb: "10px"
  }), forgot_password_jsx(authentication_form_style["a" /* Button */], {
    variant: "primary",
    size: "big",
    style: {
      width: '100%'
    },
    type: "submit"
  }, forgot_password_jsx(external_react_intl_["FormattedMessage"], {
    id: "resetPasswordBtn",
    defaultMessage: "Reset Password"
  })), forgot_password_jsx(authentication_form_style["g" /* Offer */], {
    style: {
      padding: '20px 0 0'
    }
  }, forgot_password_jsx(external_react_intl_["FormattedMessage"], {
    id: "backToSign",
    defaultMessage: "Back to"
  }), ' ', forgot_password_jsx(authentication_form_style["f" /* LinkButton */], {
    onClick: toggleSignInForm
  }, forgot_password_jsx(external_react_intl_["FormattedMessage"], {
    id: "loginBtnText",
    defaultMessage: "Login"
  })))));
}
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/features/authentication-form/otpForm.tsx
var otpForm_jsx = external_react_default.a.createElement;









const Container = external_styled_components_default.a.div.withConfig({
  displayName: "otpForm__Container",
  componentId: "riqlfd-0"
})(["padding:40px 60px;@media (max-width:768px){padding:40px 30px;}"]);
function OtpModal() {
  const router = Object(router_["useRouter"])();
  const intl = Object(external_react_intl_["useIntl"])();
  const {
    authDispatch
  } = Object(external_react_["useContext"])(auth_context["a" /* AuthContext */]);
  const [otp, setOtp] = external_react_default.a.useState('');
  const [signinMeMutation, {
    loading,
    error,
    data
  }] = Object(react_hooks_["useMutation"])(PHONE_VERIFICATION_CHECK_MUTATION, {
    onCompleted: data => {
      const {
        access_token,
        user
      } = data.phoneVerificationCheck;

      if (false) {}
    },
    onError: error => {
      setOtp('');
    }
  });

  const submitForm = async e => {
    e.preventDefault();
    await signinMeMutation({
      variables: {
        verification_code: otp,
        phone: localStorage.getItem('phone_number')
      }
    });
  };

  return otpForm_jsx(authentication_form_style["l" /* Wrapper */], null, otpForm_jsx(Container, null, otpForm_jsx(authentication_form_style["d" /* Heading */], null, otpForm_jsx(external_react_intl_["FormattedMessage"], {
    id: "otpForm",
    defaultMessage: "Verify Phone Number"
  })), otpForm_jsx(authentication_form_style["j" /* SubHeading */], null, otpForm_jsx(external_react_intl_["FormattedMessage"], {
    id: "otpSubText",
    defaultMessage: "Login with your phone number & password"
  })), otpForm_jsx("form", {
    onSubmit: submitForm
  }, otpForm_jsx(authentication_form_style["a" /* Button */], {
    variant: "primary",
    size: "big",
    style: {
      width: '100%'
    },
    type: "submit"
  }, "Continuar")), loading && otpForm_jsx("p", {
    style: {
      marginTop: "15px"
    }
  }, "Cargando..."), error && otpForm_jsx("p", {
    style: {
      marginTop: "15px",
      color: "red"
    }
  }, " ", error.message)));
}
// CONCATENATED MODULE: ./src/features/authentication-form/phone-verification.tsx
var phone_verification_jsx = external_react_default.a.createElement;







function PhoneVerificationModal() {
  const {
    authDispatch
  } = Object(external_react_["useContext"])(auth_context["a" /* AuthContext */]);
  const [phone, setPhone] = external_react_default.a.useState('');

  const toggleSignInForm = () => {
    authDispatch({
      type: 'SIGNIN'
    });
  };

  const toggleOtpForm = () => {
    authDispatch({
      type: 'OTP_VERIFICATION'
    });
  };

  const [phoneVerificationMutation, {
    loading,
    error
  }] = Object(react_hooks_["useMutation"])(PHONE_VERIFICATION_MUTATION, {
    onCompleted: data => {
      if (false) {}
    },
    onError: error => {
      setPhone('');
      console.log(error);
    }
  });

  const handlePhoneChange = (value, data, event, formattedValue) => {
    setPhone(value);
  };

  return phone_verification_jsx(authentication_form_style["l" /* Wrapper */], null, phone_verification_jsx(authentication_form_style["b" /* Container */], {
    style: {
      paddingBottom: 30
    }
  }, phone_verification_jsx(authentication_form_style["d" /* Heading */], null, phone_verification_jsx(external_react_intl_["FormattedMessage"], {
    id: "phoneVerificationText",
    defaultMessage: "Phone Verification"
  })), phone_verification_jsx(authentication_form_style["j" /* SubHeading */], null, phone_verification_jsx(external_react_intl_["FormattedMessage"], {
    id: "sendPhoneVerifyText",
    defaultMessage: "We'll send you a verification code to verify your phone number"
  })), phone_verification_jsx("form", {
    method: "post",
    onSubmit: async e => {
      e.preventDefault();
      await phoneVerificationMutation({
        variables: {
          phone
        }
      });
    }
  }, phone_verification_jsx(external_react_phone_input_2_default.a, {
    inputProps: {
      name: 'phone',
      required: true,
      autoFocus: true
    },
    containerStyle: {
      textAlign: "left"
    },
    inputStyle: {
      backgroundColor: "#F7F7F7",
      height: "48px",
      marginBottom: "10px",
      width: "100%"
    },
    country: 'bd',
    value: phone,
    onChange: handlePhoneChange
  }), phone_verification_jsx(authentication_form_style["a" /* Button */], {
    variant: "primary",
    size: "big",
    style: {
      width: '100%'
    },
    type: "submit"
  }, "Send Code")), loading && phone_verification_jsx("p", {
    style: {
      marginTop: "15px"
    }
  }, "Cargando..."), error && phone_verification_jsx("p", {
    style: {
      marginTop: "15px",
      color: "red"
    }
  }, "Please try again!"), phone_verification_jsx(authentication_form_style["g" /* Offer */], {
    style: {
      padding: '20px 0'
    }
  }, phone_verification_jsx(external_react_intl_["FormattedMessage"], {
    id: "backToSign",
    defaultMessage: "Back to"
  }), ' ', phone_verification_jsx(authentication_form_style["f" /* LinkButton */], {
    onClick: toggleSignInForm
  }, phone_verification_jsx(external_react_intl_["FormattedMessage"], {
    id: "loginBtnText",
    defaultMessage: "Login"
  })))));
}
// CONCATENATED MODULE: ./src/features/authentication-form/index.tsx
var authentication_form_jsx = external_react_default.a.createElement;







function AuthenticationForm() {
  const {
    authState
  } = Object(external_react_["useContext"])(auth_context["a" /* AuthContext */]);
  let RenderForm;

  if (authState.currentForm === 'signIn') {
    RenderForm = SignInModal;
  }

  if (authState.currentForm === 'signUp') {
    RenderForm = SignOutModal;
  }

  if (authState.currentForm === 'forgotPass') {
    RenderForm = ForgotPasswordModal;
  }

  if (authState.currentForm === 'otpVerification') {
    RenderForm = OtpModal;
  }

  if (authState.currentForm === 'phoneVerification') {
    RenderForm = PhoneVerificationModal;
  }

  return authentication_form_jsx(RenderForm, null);
}

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

/***/ "rWEH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CouponDisplay; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/components/coupon-box/coupon-box.style.tsx


const CouponBoxWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "coupon-boxstyle__CouponBoxWrapper",
  componentId: "sc-1pix1i9-0"
})(["&.boxedCoupon{display:flex;flex-direction:row;align-items:center;width:100%;height:50px;padding-right:5px;border-radius:", ";background-color:", ";overflow:hidden;border:1px solid ", ";}input{height:100%;flex-grow:1;font-size:calc(", "px - 1px);color:", ";border:none;border-radius:0;padding:0 20px;background-color:transparent;margin-right:0;&:focus{outline:0;}&::-webkit-input-placeholder{font-size:calc(", "px - 1px);color:", ";}&:-moz-placeholder{font-size:calc(", "px - 1px);color:", ";}&::-moz-placeholder{font-size:calc(", "px - 1px);color:", ";}&:-ms-input-placeholder{font-size:calc(", "px - 1px);color:", ";}}&.normalCoupon{width:100%;display:flex;align-items:center;input{width:50%;height:48px;margin-right:20px;border:1px solid ", " !important;background-color:", ";flex-grow:unset;border-radius:", ";@media (max-width:600px){width:100%;}}button{height:48px;}}"], Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.gray.600', '#ededed'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798C'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('colors.text.label', '#767676'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('colors.text.label', '#767676'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('colors.text.label', '#767676'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('colors.text.label', '#767676'), Object(theme_get_["themeGet"])('colors.lightDarkColor', '#e6e6e6'), Object(theme_get_["themeGet"])('colors.lightColor', '#f7f7f7'), Object(theme_get_["themeGet"])('radii.base', '6px'));
const Display = external_styled_components_default.a.div.withConfig({
  displayName: "coupon-boxstyle__Display",
  componentId: "sc-1pix1i9-1"
})(["width:100%;display:flex;align-items:center;justify-content:space-between;position:relative;"]);
const CouponCode = external_styled_components_default.a.span.withConfig({
  displayName: "coupon-boxstyle__CouponCode",
  componentId: "sc-1pix1i9-2"
})(["font-size:calc(", "px - 1px);color:", ";font-weight:", ";text-transform:uppercase;"], Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'));
const DiscountPrice = external_styled_components_default.a.span.withConfig({
  displayName: "coupon-boxstyle__DiscountPrice",
  componentId: "sc-1pix1i9-3"
})(["font-size:calc(", "px - 1px);color:", ";font-weight:", ";margin-left:auto;"], Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'));
const CancelBtn = external_styled_components_default.a.button.withConfig({
  displayName: "coupon-boxstyle__CancelBtn",
  componentId: "sc-1pix1i9-4"
})(["color:", ";width:20px;height:20px;display:flex;align-items:center;justify-content:center;background-color:transparent;border:0;outline:0;padding:0;margin:0;position:absolute;top:0;right:-30px;cursor:pointer;"], Object(theme_get_["themeGet"])('colors.secondary.regular', '#ff5b60'));
// EXTERNAL MODULE: ./src/assets/icons/CloseIcon.tsx
var CloseIcon = __webpack_require__("2nMb");

// EXTERNAL MODULE: ./src/components/forms/input.tsx
var input = __webpack_require__("VnWI");

// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// CONCATENATED MODULE: ./src/components/coupon-box/coupon-box.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const CouponBox = (_ref) => {
  let {
    onChange,
    value,
    onClick,
    disabled,
    className,
    style
  } = _ref,
      props = _objectWithoutProperties(_ref, ["onChange", "value", "onClick", "disabled", "className", "style"]);

  const intl = Object(external_react_intl_["useIntl"])();
  return __jsx(CouponBoxWrapper, {
    className: className ? className : 'boxedCoupon',
    style: style
  }, __jsx(input["a" /* Input */], _extends({
    onChange: onChange,
    value: value,
    placeholder: intl.formatMessage({
      id: 'couponPlaceholder',
      defaultMessage: 'Enter Coupon Here'
    })
  }, props)), __jsx(button_button["a" /* Button */], {
    type: "button",
    onClick: onClick,
    disabled: disabled,
    padding: "0 30px"
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "voucherApply",
    defaultMessage: "Apply"
  })));
};

const CouponDisplay = ({
  code,
  currency,
  price,
  sign,
  onClick,
  style,
  btnStyle
}) => {
  return __jsx(Display, {
    style: style,
    className: "couponDisplayBox"
  }, __jsx(CouponCode, {
    className: "couponCodeText"
  }, code), __jsx(DiscountPrice, {
    className: "discountedPrice"
  }, sign, currency, price), __jsx(CancelBtn, {
    onClick: onClick,
    style: btnStyle
  }, __jsx(CloseIcon["a" /* CloseIcon */], null)));
};
/* harmony default export */ var coupon_box = __webpack_exports__["b"] = (CouponBox);

/***/ }),

/***/ "tFEG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CartProvider; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useCart; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/contexts/cart/cart.reducer.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// export const cartItemsTotalPrice = (items, { discountInPercent = 0 } = {}) => {
function getDiscountAmount(totalPrice, coupon) {
  let discount = totalPrice * Number(coupon.percentage) / 100;
  discount = discount >= (coupon === null || coupon === void 0 ? void 0 : coupon.maximum_discount_amount) ? coupon === null || coupon === void 0 ? void 0 : coupon.maximum_discount_amount : discount;
  return discount;
}

function getTotalItemPrice(items) {
  const tot = items.reduce((total, item) => {
    const {
      price,
      salePrice,
      quantity = 0,
      recicledQuantity = 0,
      packagePrice
    } = item;
    const recicledPrice = price - packagePrice;
    const displayPrice = salePrice || price;
    const nonRecicledTotalPrice = displayPrice * quantity;
    const recicledTotalPrice = recicledPrice * recicledQuantity;
    const totalPrice = nonRecicledTotalPrice + recicledTotalPrice;
    return total + totalPrice;
  }, 0);
  return tot;
}

const cartItemsTotalPrice = (items, coupon = null, deliveryCharge = 0) => {
  if (items === null || items.length === 0) return 0;
  const itemCost = getTotalItemPrice(items);
  let discount = coupon ? getDiscountAmount(itemCost, coupon) : 0;
  return itemCost - discount + deliveryCharge;
};
const cartDiscountAmount = (items, coupon = null) => {
  if (items === null || items.length === 0) return 0;
  const itemCost = getTotalItemPrice(items);
  return coupon ? getDiscountAmount(itemCost, coupon) : 0;
}; // cartItems, cartItemToAdd

const addItemToCart = (state, action) => {
  const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload.id);

  if (existingCartItemIndex > -1) {
    const newState = [...state.items];
    newState[existingCartItemIndex].quantity = newState[existingCartItemIndex].quantity || 0;
    newState[existingCartItemIndex].quantity += action.payload.quantity;
    return newState;
  }

  return [...state.items, action.payload];
};

const addRecicledItemToCart = (state, action) => {
  const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload.id);

  if (existingCartItemIndex > -1) {
    const newState = [...state.items];
    newState[existingCartItemIndex].recicledQuantity = newState[existingCartItemIndex].recicledQuantity || 0;
    newState[existingCartItemIndex].recicledQuantity += action.payload.recicledQuantity;
    return newState;
  }

  return [...state.items, action.payload];
}; // cartItems, cartItemToRemove


const removeRecicledItemFromCart = (state, action) => {
  return state.items.reduce((acc, item) => {
    if (item.id === action.payload.id) {
      const newQuantity = item.recicledQuantity - action.payload.recicledQuantity;
      return [...acc, _objectSpread(_objectSpread({}, item), {}, {
        recicledQuantity: newQuantity
      })]; // return newQuantity > 0
      //   ? [...acc, { ...item, recicledQuantity: newQuantity }]
      //   : [...acc]x;
    }

    return [...acc, item];
  }, []);
};

const removeItemFromCart = (state, action) => {
  return state.items.reduce((acc, item) => {
    if (item.id === action.payload.id) {
      const newQuantity = item.quantity - action.payload.quantity;
      return [...acc, _objectSpread(_objectSpread({}, item), {}, {
        quantity: newQuantity
      })]; // return newQuantity > 0
      //   ? [...acc, { ...item, quantity: newQuantity }]
      //   : [...acc];
    }

    return [...acc, item];
  }, []);
};

const clearItemFromCart = (state, action) => {
  return state.items.filter(item => item.id !== action.payload.id);
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'REHYDRATE':
      return _objectSpread(_objectSpread({}, state), action.payload);

    case 'TOGGLE_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: !state.isOpen
      });

    case 'ADD_ITEM':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: addItemToCart(state, action)
      });

    case 'ADD_ITEM_RECICLED':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: addRecicledItemToCart(state, action)
      });

    case 'REMOVE_ITEM_RECICLED':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: removeRecicledItemFromCart(state, action)
      });

    case 'REMOVE_ITEM':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: removeItemFromCart(state, action)
      });

    case 'CLEAR_ITEM_FROM_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: clearItemFromCart(state, action)
      });

    case 'CLEAR_CART':
      return _objectSpread(_objectSpread({}, state), {}, {
        items: []
      });

    case 'APPLY_COUPON':
      return _objectSpread(_objectSpread({}, state), {}, {
        coupon: action.payload
      });

    case 'REMOVE_COUPON':
      return _objectSpread(_objectSpread({}, state), {}, {
        coupon: null
      });

    case 'TOGGLE_RESTAURANT':
      return _objectSpread(_objectSpread({}, state), {}, {
        isRestaurant: !state.isRestaurant
      });

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};
// EXTERNAL MODULE: external "localforage"
var external_localforage_ = __webpack_require__("wiMN");
var external_localforage_default = /*#__PURE__*/__webpack_require__.n(external_localforage_);

// CONCATENATED MODULE: ./src/utils/use-storage.ts
function use_storage_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function use_storage_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { use_storage_ownKeys(Object(source), true).forEach(function (key) { use_storage_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { use_storage_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function use_storage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const isObjectLiked = value => value.constructor.name === 'Array' || value.constructor.name === 'Object';

const rehydrate = (value, defaultValue) => {
  if (!value) return defaultValue; // if (value === 'false') str = false;
  // if (value === 'true') str = true;
  // if (!isObjectLiked(value)) {
  //   return value;
  // }

  try {
    const parse = JSON.parse(value);
    return parse;
  } catch (err) {
    return defaultValue;
  }
};

const hydrate = value => {
  if (!isObjectLiked(value)) {
    return value;
  }

  return JSON.stringify(value);
};

const createMigration = (opts, data) => {
  return new Promise((resolve, reject) => {
    const key = `${opts.key}-version`;
    external_localforage_default.a.getItem(key, (err, version) => {
      if (version !== opts.version) {
        data = opts.migrate(data);
        external_localforage_default.a.setItem(opts.key, rehydrate(data), err => {
          if (err) return reject(err);
          external_localforage_default.a.setItem(key, opts.version, err => {
            if (err) return reject(err);
            return resolve(data);
          });
        });
      } else {
        resolve(data);
      }
    });
  });
};

const config = {
  key: '@session',
  version: 1,
  migrate: state => {
    return use_storage_objectSpread({}, state);
  }
};
const useStorage = (state, setState) => {
  const {
    0: rehydrated,
    1: setRehydrated
  } = Object(external_react_["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    async function init() {
      await external_localforage_default.a.getItem(config.key, (err, value) => {
        if (err) {
          setRehydrated(true);
          return setError(err);
        } // Migrate persisted data


        const restoredValue = rehydrate(value);

        if (typeof config.migrate === 'function') {
          createMigration(config, restoredValue).then(data => setState(data)).then(() => setRehydrated(true));
        } else {
          setState(restoredValue);
          setRehydrated(true);
        }
      });
    }

    init();
  }, []);
  Object(external_react_["useEffect"])(() => {
    // if (isNil(state) || isEmpty(state)) {
    //   localForage.removeItem(config.key);
    // }
    external_localforage_default.a.setItem(config.key, hydrate(state));
  }, [state]);
  return {
    rehydrated,
    error
  };
};
// CONCATENATED MODULE: ./src/contexts/cart/use-cart.tsx
var __jsx = external_react_default.a.createElement;

function use_cart_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function use_cart_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { use_cart_ownKeys(Object(source), true).forEach(function (key) { use_cart_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { use_cart_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function use_cart_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const CartContext = Object(external_react_["createContext"])({});
const INITIAL_STATE = {
  isOpen: false,
  items: [],
  isRestaurant: false,
  coupon: null
};

const useCartActions = (initialCart = INITIAL_STATE) => {
  var _state$items3;

  const {
    0: state,
    1: dispatch
  } = Object(external_react_["useReducer"])(reducer, initialCart);

  const addItemHandler = (item, quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: use_cart_objectSpread(use_cart_objectSpread({}, item), {}, {
        quantity
      })
    });
  };

  const addRecicledItemHandler = (item, recicledQuantity = 1) => {
    dispatch({
      type: 'ADD_ITEM_RECICLED',
      payload: use_cart_objectSpread(use_cart_objectSpread({}, item), {}, {
        recicledQuantity
      })
    });
  };

  const removeRecicledItemHandler = (item, recicledQuantity = 1) => {
    dispatch({
      type: 'REMOVE_ITEM_RECICLED',
      payload: use_cart_objectSpread(use_cart_objectSpread({}, item), {}, {
        recicledQuantity
      })
    });
  };

  const removeItemHandler = (item, quantity = 1) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: use_cart_objectSpread(use_cart_objectSpread({}, item), {}, {
        quantity
      })
    });
  };

  const clearItemFromCartHandler = item => {
    dispatch({
      type: 'CLEAR_ITEM_FROM_CART',
      payload: item
    });
  };

  const clearCartHandler = () => {
    dispatch({
      type: 'CLEAR_CART'
    });
  };

  const toggleCartHandler = () => {
    dispatch({
      type: 'TOGGLE_CART'
    });
  };

  const couponHandler = coupon => {
    dispatch({
      type: 'APPLY_COUPON',
      payload: coupon
    });
  };

  const removeCouponHandler = () => {
    dispatch({
      type: 'REMOVE_COUPON'
    });
  };

  const rehydrateLocalState = payload => {
    dispatch({
      type: 'REHYDRATE',
      payload
    });
  };

  const toggleRestaurant = () => {
    dispatch({
      type: 'TOGGLE_RESTAURANT'
    });
  };

  const isInCartHandler = id => {
    var _state$items;

    return (_state$items = state.items) === null || _state$items === void 0 ? void 0 : _state$items.some(item => item.id === id);
  };

  const getItemHandler = id => {
    var _state$items2;

    return (_state$items2 = state.items) === null || _state$items2 === void 0 ? void 0 : _state$items2.find(item => item.id === id);
  };

  const getCartItemsPrice = () => cartItemsTotalPrice(state.items).toFixed(2);

  const getCartItemsTotalPrice = deliveryCharge => cartItemsTotalPrice(state.items, state.coupon, deliveryCharge).toFixed(2);

  const getDiscount = () => cartDiscountAmount(state.items, state.coupon).toFixed(2);

  const getItemsCount = (_state$items3 = state.items) === null || _state$items3 === void 0 ? void 0 : _state$items3.reduce((acc, item) => acc + item.quantity, 0);
  return {
    state,
    getItemsCount,
    rehydrateLocalState,
    addItemHandler,
    addRecicledItemHandler,
    removeRecicledItemHandler,
    removeItemHandler,
    clearItemFromCartHandler,
    clearCartHandler,
    isInCartHandler,
    getItemHandler,
    toggleCartHandler,
    getCartItemsTotalPrice,
    getCartItemsPrice,
    couponHandler,
    removeCouponHandler,
    getDiscount,
    toggleRestaurant
  };
};

const CartProvider = ({
  children
}) => {
  var _state$items4;

  const {
    state,
    rehydrateLocalState,
    getItemsCount,
    addItemHandler,
    addRecicledItemHandler,
    removeRecicledItemHandler,
    removeItemHandler,
    clearItemFromCartHandler,
    clearCartHandler,
    isInCartHandler,
    getItemHandler,
    toggleCartHandler,
    getCartItemsTotalPrice,
    couponHandler,
    removeCouponHandler,
    getCartItemsPrice,
    getDiscount,
    toggleRestaurant
  } = useCartActions();
  const {
    rehydrated,
    error
  } = useStorage(state, rehydrateLocalState);
  return __jsx(CartContext.Provider, {
    value: {
      isOpen: state.isOpen,
      items: state.items,
      coupon: state.coupon,
      isRestaurant: state.isRestaurant,
      cartItemsCount: (_state$items4 = state.items) === null || _state$items4 === void 0 ? void 0 : _state$items4.length,
      itemsCount: getItemsCount,
      addItem: addItemHandler,
      addRecicledItemHandler: addRecicledItemHandler,
      removeRecicledItemHandler: removeRecicledItemHandler,
      removeItem: removeItemHandler,
      removeItemFromCart: clearItemFromCartHandler,
      clearCart: clearCartHandler,
      isInCart: isInCartHandler,
      getItem: getItemHandler,
      toggleCart: toggleCartHandler,
      calculatePrice: getCartItemsTotalPrice,
      calculateSubTotalPrice: getCartItemsPrice,
      applyCoupon: couponHandler,
      removeCoupon: removeCouponHandler,
      calculateDiscount: getDiscount,
      toggleRestaurant
    }
  }, children);
};
const useCart = () => Object(external_react_["useContext"])(CartContext);

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

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

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
    plants {
        controllerId
        name
        soilHumidity1
        soilHumidity2
        airHumidity
        tempeture
        isRelayOneOn
        isRelayTwoOn
        isRelayThirdOn
        isRelayFourthOn
        soilHumiditySettings1 {
            minWarning
            maxWarning
            mode
            relayOneAutomatedOnTime
            relayOneIdRelated
            relayOneWorking
            relayTwoAutomatedOnTime
            relayTwoIdRelated
            relayTwoWorking
        }
        soilHumiditySettings2 {
            minWarning
            maxWarning
            mode
            relayOneAutomatedOnTime
            relayOneIdRelated
            relayOneWorking
            relayTwoAutomatedOnTime
            relayTwoIdRelated
            relayTwoWorking
        }
    }
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