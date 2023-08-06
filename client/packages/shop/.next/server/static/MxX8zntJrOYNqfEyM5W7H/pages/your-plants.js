module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		19: 0,
/******/ 		31: 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+M2j":
/***/ (function(module, exports) {

module.exports = require("omit-deep-lodash");

/***/ }),

/***/ "/GVc":
/***/ (function(module, exports) {

module.exports = require("baseui");

/***/ }),

/***/ "/JeY":
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("rBbI");


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

/***/ "1vYv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SettingsForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HeadingSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SettingsFormContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SuccessMsg; });
/* unused harmony export ErrorMsg */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return InputUpper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4a4h");
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ExBD");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_4__);

 // import Inputs from 'components/input/input';




const SettingsForm = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "settingsstyle__SettingsForm",
  componentId: "sc-9xbk1w-0"
})(["width:100%;display:flex;flex-direction:column;"]);
const HeadingSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "settingsstyle__HeadingSection",
  componentId: "sc-9xbk1w-1"
})(["width:100%;display:flex;align-items:center;justify-content:space-between;margin-bottom:25px;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "settingsstyle__Title",
  componentId: "sc-9xbk1w-2"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.heading', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.lg', '21'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'));
const SettingsFormContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "settingsstyle__SettingsFormContent",
  componentId: "sc-9xbk1w-3"
})(["margin-bottom:50px;&:last-child{margin-bottom:0;}"]); // const Input = styled(Inputs)`
//   @media only screen and (min-width: 0em) and (max-width: 47.99em) {
//     margin-bottom: 30px;
//   }
// `;

const Row = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_2__["Row"]).withConfig({
  displayName: "settingsstyle__Row",
  componentId: "sc-9xbk1w-4"
})(["margin-bottom:40px;@media only screen and (min-width:0em) and (max-width:47.99em){margin-bottom:30px;}"]);
const ButtonGroup = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "settingsstyle__ButtonGroup",
  componentId: "sc-9xbk1w-5"
})(["display:flex;flex-direction:column;.radioGroup{flex-grow:1;justify-content:space-between;label{margin-top:0;flex:calc(33.333333333% - 10px);max-width:calc(33.333333333% - 10px);margin-bottom:15px;&:nth-child(3n){margin-right:0;}@media (max-width:700px){flex:calc(50% - 10px);max-width:calc(50% - 10px);&:nth-child(3n){margin-right:15px;}&:nth-child(2n){margin-right:0;}}@media (max-width:480px){flex:100%;max-width:100%;margin-right:0;&:nth-child(3n){margin-right:0;}&:nth-child(2n){margin-right:0;}}}}.add-button{flex:calc(33.3333333333% - 10px);max-width:calc(33.3333333333% - 10px);flex-shrink:0;height:auto;min-height:77px;border:1px dashed ", ";margin-bottom:15px;margin-left:0;margin-right:auto;&:hover{border-color:", ";}@media (max-width:700px){flex:calc(50% - 10px);max-width:calc(50% - 10px);}@media (max-width:480px){flex:100%;max-width:100%;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'));
const SuccessMsg = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('span').withConfig({
  displayName: "settingsstyle__SuccessMsg",
  componentId: "sc-9xbk1w-6"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:#51b96b;padding-top:10px;display:flex;margin-left:20px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.xs', '12'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'));
const ErrorMsg = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('span').withConfig({
  displayName: "settingsstyle__ErrorMsg",
  componentId: "sc-9xbk1w-7"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";padding-top:10px;display:flex;margin-left:20px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.xs', '12'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondary.hover', '#FF282F'));
const InputUpper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "settingsstyle__InputUpper",
  componentId: "sc-9xbk1w-8"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_3___default()({
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
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_4__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_4__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_4__["space"], styled_system__WEBPACK_IMPORTED_MODULE_4__["color"], styled_system__WEBPACK_IMPORTED_MODULE_4__["border"]));
const Input = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "settingsstyle__Input",
  componentId: "sc-9xbk1w-9"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_3___default()({
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
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_4__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_4__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_4__["space"], styled_system__WEBPACK_IMPORTED_MODULE_4__["color"], styled_system__WEBPACK_IMPORTED_MODULE_4__["border"]));


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

    case 'ADD_SENSOR':
      state.plants[action.payload.plantIndex].sensors.push(action.payload.setting);
      return _objectSpread({}, state);

    case 'UPDATE_SENSOR':
      const plantIndex = state.plants.findIndex(plant => plant.plantId === action.payload.plantId);
      state.plants[plantIndex].sensors[action.payload.settingIndex] = action.payload.setting;
      return _objectSpread({}, state);

    case 'DELETE_SENSOR':
      state.plants[action.payload.plantIndex].sensors.splice(action.payload.settingIndex, 1);
      return _objectSpread({}, state);

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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4a4h":
/***/ (function(module, exports) {

module.exports = require("react-styled-flexboxgrid");

/***/ }),

/***/ "5joJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return PlantPageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return InputUpper; });
/* unused harmony export NumberInput */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ButtonText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return PlantsPageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return SidebarSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ContentBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return PlantsWrapper; });
/* unused harmony export Column */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return PlantsSensorContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return PlantsPageContainer; });
/* unused harmony export OrderInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return Row; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return OrderDetails; });
/* unused harmony export TotalAmount */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BlockTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CardButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActionsButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return TextSpaced; });
/* unused harmony export InfoBlockWrapper */
/* unused harmony export InfoBlock */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ListTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ListDes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return Porcentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ErrorMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return WeekContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return ScheduleTimeContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return Row1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Column1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return ScheduleTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DayContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4a4h");
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ExBD");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_4__);





const OrderReceivedWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "your-plantsstyle__OrderReceivedWrapper",
  componentId: "sc-7xgehg-0"
})(["background-color:", ";position:relative;padding:100px 0 60px 0;min-height:100vh;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.200', '#f7f7f7'));
const PlantPageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "your-plantsstyle__PlantPageWrapper",
  componentId: "sc-7xgehg-1"
})(["background-color:", ";position:relative;min-height:100vh;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.200', '#f7f7f7'));
const InputUpper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "your-plantsstyle__InputUpper",
  componentId: "sc-7xgehg-2"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_4___default()({
  display: 'block',
  width: '100%',
  textTransform: 'capitalize',
  p: '0 12px',
  appearance: 'none',
  fontFamily: 'body',
  fontSize: 'base',
  lineHeight: 'inherit',
  border: '1px solid',
  borderColor: 'gray.500',
  borderRadius: 'base',
  backgroundColor: 'white',
  color: 'text.bold',
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
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_3__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_3__["space"], styled_system__WEBPACK_IMPORTED_MODULE_3__["color"], styled_system__WEBPACK_IMPORTED_MODULE_3__["border"]));
const NumberInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "your-plantsstyle__NumberInput",
  componentId: "sc-7xgehg-3"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_4___default()({
  display: 'block',
  width: '45px',
  textTransform: 'capitalize',
  p: '0 12px',
  appearance: 'none',
  fontFamily: 'body',
  fontSize: 'base',
  lineHeight: 'inherit',
  border: '1px solid',
  borderColor: 'gray.500',
  borderRadius: 'base',
  backgroundColor: 'white',
  color: 'text.bold',
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
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_3__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_3__["space"], styled_system__WEBPACK_IMPORTED_MODULE_3__["color"], styled_system__WEBPACK_IMPORTED_MODULE_3__["border"]));
const ButtonText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "your-plantsstyle__ButtonText",
  componentId: "sc-7xgehg-4"
})([""]);
const PlantsPageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "your-plantsstyle__PlantsPageWrapper",
  componentId: "sc-7xgehg-5"
})(["width:100%;height:auto;min-height:100vh;display:flex;flex-wrap:wrap;background-color:", ";padding:70px 0px 0px;@media only screen and (min-width:991px) and (max-width:1280px){padding:130px 15px 60px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'));
const SidebarSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "your-plantsstyle__SidebarSection",
  componentId: "sc-7xgehg-6"
})(["width:300px;flex-shrink:0;margin-right:30px;@media only screen and (max-width:1199px){display:none;}"]);
const ContentBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "your-plantsstyle__ContentBox",
  componentId: "sc-7xgehg-7"
})(["width:calc(100% - 330px);height:auto;min-height:200px;display:flex;flex-direction:column;padding:60px 50px 20px;border:1px solid ", ";@media only screen and (max-width:1199px){width:100%;border:0;padding:0px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.700', '#c3b2b2'));
const PlantsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "your-plantsstyle__PlantsWrapper",
  componentId: "sc-7xgehg-8"
})(["width:100%;padding-left:5px;height:auto;display:flex;flex-direction:column;flex-shrink:0;overflow:hidden;border:1px solid ", ";border-radius:5px;box-shadow:0.5px 0.5px;margin:5px;padding:10px;@media only screen and (max-width:1199px){margin-right:20px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.900', '#c3b2b2'));
const Column = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "your-plantsstyle__Column",
  componentId: "sc-7xgehg-9"
})(["border:1px solid ", ";width:100%;padding:10px;height:auto;display:flex;flex-direction:column;flex-shrink:0;margin-right:30px;overflow:hidden;@media only screen and (max-width:1199px){margin-right:20px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.500', '#f1f1f1'));
const PlantsSensorContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "your-plantsstyle__PlantsSensorContainer",
  componentId: "sc-7xgehg-10"
})(["background-color:#f7ecec;cursor:pointer;border:1px solid ", ";border-radius:", ";overflow:hidden;position:relative;margin:5px;width:fit-content;padding:10px 5px;box-shaddow:0.5px 0.5px;.delete-setting-btn{color:", ";border-color:", ";margin-left:10px;margin-top:20px;.btn-icon{margin-right:5px;}svg{@media (max-width:767px){margin-right:0;}}&:hover{color:", ";background-color:", ";border-color:", ";}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.500', '#f1f1f1'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('radii.base', '6px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.red', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.light_red', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.red', '#c50707'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.red', '#009e7f'));
const PlantsPageContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "your-plantsstyle__PlantsPageContainer",
  componentId: "sc-7xgehg-11"
})(["background-color:", ";border:1px solid ", ";padding:60px;border-radius:", ";overflow:hidden;position:relative;margin:3px 0px;width:fit-content;@media (max-width:990px){padding:50px 45px;}@media (max-width:767px){padding:10px 5px;}.home-btn{display:inline-flex;align-items:center;justify-content:center;font-family:", ";font-size:", "px;font-weight:", ";color:", ";padding:5px 15px;height:36px;border:1px solid ", ";border-radius:", ";position:absolute;top:15px;right:15px;transition:0.15s ease-in-out;@media (max-width:767px){font-size:", "px;height:34px;padding:5px 12px;}&:hover{background-color:", ";border-color:", ";color:", ";}}.print-btn{display:inline-flex;align-items:center;justify-content:center;font-family:", ";font-size:", "px;font-weight:", ";color:", ";padding:5px 15px;height:36px;border:1px solid ", ";border-radius:", ";position:absolute;top:15px;right:165px;cursor:pointer;transition:0.15s ease-in-out;@media (max-width:767px){font-size:", "px;height:34px;padding:5px 12px;}&:hover{background-color:", ";border-color:", ";color:", ";}}@media print{.print-btn,.home-btn{display:none;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.500', '#f1f1f1'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('radii.base', '6px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.regular', '#77798c'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.700', '#c3b2b2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('radii.base', '6px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.regular', '#77798c'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.700', '#c3b2b2'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('radii.base', '6px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'));
const OrderInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "your-plantsstyle__OrderInfo",
  componentId: "sc-7xgehg-12"
})(["margin-bottom:60px;@media (max-width:767px){margin-bottom:30px;}"]);
const Row = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_1__["Row"]).withConfig({
  displayName: "your-plantsstyle__Row",
  componentId: "sc-7xgehg-13"
})(["margin-left:0px;"]);
const OrderDetails = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "your-plantsstyle__OrderDetails",
  componentId: "sc-7xgehg-14"
})(["margin-bottom:60px;@media (max-width:767px){margin-top:50px;margin-bottom:50px;}"]);
const TotalAmount = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "your-plantsstyle__TotalAmount",
  componentId: "sc-7xgehg-15"
})([""]);
const BlockTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "your-plantsstyle__BlockTitle",
  componentId: "sc-7xgehg-16"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1;margin-bottom:32px;@media (max-width:767px){font-size:calc(", "px + 1px);margin-bottom:25px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.heading', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.lg', '21'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'));
const CardButtons = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "your-plantsstyle__CardButtons",
  componentId: "sc-7xgehg-17"
})(["display:flex;width:330px;margin-left:100px;align-items:center;transition:0.2s ease-in-out;"]);
const ActionsButtons = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "your-plantsstyle__ActionsButtons",
  componentId: "sc-7xgehg-18"
})(["display:flex;align-items:center;transition:0.2s ease-in-out;"]);
const Type = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "your-plantsstyle__Type",
  componentId: "sc-7xgehg-19"
})(["font-family:", ";font-size:10px;color:", ";width:160px;font-weight:", ";line-height:1.2;display:block;margin:0;&:last-child{color:", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.bold', '#0D1136'), props => props.bold ? Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.bold', '700') : Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.medium', '#424561'));
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "your-plantsstyle__Text",
  componentId: "sc-7xgehg-20"
})(["font-family:", ";font-size:", "px;color:", ";font-weight:", ";line-height:1.2;display:block;margin:0;&:last-child{color:", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.bold', '#0D1136'), props => props.bold ? Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.bold', '700') : Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.medium', '#424561'));
const TextSpaced = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "your-plantsstyle__TextSpaced",
  componentId: "sc-7xgehg-21"
})(["font-family:", ";font-size:", "px;font-weight:", ";line-height:1.2;display:block;margin-right:10px;&:last-child{color:", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), props => props.bold ? Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.bold', '700') : Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.medium', '#424561'));
const InfoBlockWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "your-plantsstyle__InfoBlockWrapper",
  componentId: "sc-7xgehg-22"
})(["display:flex;align-items:center;justify-content:space-between;margin-top:30px;@media (max-width:767px){flex-wrap:wrap;}"]);
const InfoBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "your-plantsstyle__InfoBlock",
  componentId: "sc-7xgehg-23"
})(["flex-grow:1;padding:0 15px;border-left:1px solid ", ";@media (max-width:767px){max-width:100%;flex:0 0 100%;margin-bottom:20px;padding:0;border:0;}&:first-child{padding-left:0;border-left:0;}&:last-child{padding-right:0;}.title{margin-bottom:10px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.500', '#f1f1f1'));
const ListItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "your-plantsstyle__ListItem",
  componentId: "sc-7xgehg-24"
})(["display:flex;margin-bottom:10px;align-items:center;justify-content:'flex-start';margin-left:10px;&:last-child{margin-bottom:20;}max-width:330px;"]);
const ListTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "your-plantsstyle__ListTitle",
  componentId: "sc-7xgehg-25"
})(["flex-basis:140px;width:197px;flex-shrink:0;position:relative;text-align:left;&:after{position:absolute;top:-1px;right:-2px;line-height:1;}"]);
const ListDes = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "your-plantsstyle__ListDes",
  componentId: "sc-7xgehg-26"
})([""]);
const Porcentage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "your-plantsstyle__Porcentage",
  componentId: "sc-7xgehg-27"
})(["display:flex;align-items:center;justify-content:center;padding-left:5px;"]);
const ErrorMsg = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('span').withConfig({
  displayName: "your-plantsstyle__ErrorMsg",
  componentId: "sc-7xgehg-28"
})(["font-family:", ";font-size:12px;font-weight:", ";display:flex;justify-content:flex-start;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.regular', '400'));
const WeekContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "your-plantsstyle__WeekContainer",
  componentId: "sc-7xgehg-29"
})(["display:flex;flex-direction:column;border:1px solid #bba3a3;padding:10px;margin:10px;border-radius:5px;width:fit-content;"]);
const ScheduleTimeContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "your-plantsstyle__ScheduleTimeContainer",
  componentId: "sc-7xgehg-30"
})(["display:flex;flex-direction:row;"]);
const Row1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "your-plantsstyle__Row1",
  componentId: "sc-7xgehg-31"
})(["display:flex;flex-direction:row;"]);
const Column1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "your-plantsstyle__Column1",
  componentId: "sc-7xgehg-32"
})(["display:flex;flex-direction:column;"]);
const ScheduleTime = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "your-plantsstyle__ScheduleTime",
  componentId: "sc-7xgehg-33"
})(["display:flex;flex-direction:row;padding:10px 10px;margin:10px 10px;"]);
const Status = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "your-plantsstyle__Status",
  componentId: "sc-7xgehg-34"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1;background-color:rgba(46,112,250,0.1);padding:10px;border-radius:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.black', '#2e70fa'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('radii.base', '6px'));
const ActionButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "your-plantsstyle__ActionButton",
  componentId: "sc-7xgehg-35"
})(["display:flex;align-items:center;justify-content:center;border:0;width:20px;height:20px;margin-right:10px;border-radius:50%;overflow:hidden;margin-left:5px;cursor:pointer;outline:0;padding:0;color:", ";&.edit-btn{background-color:", ";}&.delete-btn{background-color:", ";}svg{display:block;width:8px;height:auto;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.secondary.regular', '#ff5b60'));
const DayContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "your-plantsstyle__DayContainer",
  componentId: "sc-7xgehg-36"
})(["display:flex;align-items:center;justify-content:center;margin-right:3px;width:30px;height:30px;border:1px solid #c3b2b2;border-radius:5px;fontFamily:$theme.typography.primaryFontFamily,color:$theme.colors.red400,cursor:pointer;"]);
/* unused harmony default export */ var _unused_webpack_default_export = (OrderReceivedWrapper);

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
const PROFILE_SIDEBAR_TOP_MENU = [ORDER_MENU_ITEM, PLANTS_MENU_ITEM];
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
  padding: '0px 8px',
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

/***/ "XIyH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const rotate = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
const Spinner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "loader__Spinner",
  componentId: "phzp1h-0"
})(["width:24px;height:24px;border:4px solid ", ";border-top:3px solid ", ";border-radius:50%;transition-property:transform;animation-name:", ";animation-duration:1.2s;animation-iteration-count:infinite;animation-timing-function:linear;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), props => props.color ? props.color : Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009e7f'), rotate);

const Loader = color => {
  return __jsx(Spinner, color);
};

/* harmony default export */ __webpack_exports__["a"] = (Loader);

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SensorsTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return RelaysIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return HumiditySensorMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DistanceMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PlugMode; });
/* unused harmony export PlugSensorMode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CommonMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LightSensorModes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return WeekDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return distanceModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return humidityModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return lightModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return manualModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return fourRelaysOptions; });
/* unused harmony export eightRelaysOptions */
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
let SensorsTypes;

(function (SensorsTypes) {
  SensorsTypes["SOIL_HUMIDITY"] = "SOIL_HUMIDITY";
  SensorsTypes["LIGHT"] = "LIGHT";
  SensorsTypes["DISTANCE"] = "DISTANCE";
  SensorsTypes["PLUG"] = "PLUG";
  SensorsTypes["HUMIDITY_TEMPETURE"] = "HUMIDITY_TEMPETURE";
})(SensorsTypes || (SensorsTypes = {}));

let RelaysIds;

(function (RelaysIds) {
  RelaysIds["RELAY_ONE"] = "isRelayOneOn";
  RelaysIds["RELAY_TWO"] = "isRelayTwoOn";
  RelaysIds["RELAY_THIRD"] = "isRelayThirdOn";
  RelaysIds["RELAY_FOURTH"] = "isRelayFourthOn";
})(RelaysIds || (RelaysIds = {}));

let HumiditySensorMode; // - Accion vacio custom: avisa cuando esta vacio y activa relay asociado x cantidad de tiempo
// - Accion vacio automatico: avisa cuando esta vacio y activa relay asociado hasta llegar al maximo
// - Accion lleno custom: avisa cuando esta lleno y activa relay asociado x cantidad de tiempo
// - Accion lleno automatico: avisa cuando esta lleno y activa relay asociado hasta llegar al minimo
// - Aviso vacio: avisa cuando esta vacio.
// - Aviso lleno: avisa cuando esta lleno.

(function (HumiditySensorMode) {
  HumiditySensorMode["IRRIGATE_ON_DEMAND"] = "IRRIGATE_ON_DEMAND";
  HumiditySensorMode["IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND"] = "IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND";
  HumiditySensorMode["SEEDS_POOL_IRRIGATION"] = "SEEDS_POOL_IRRIGATION";
  HumiditySensorMode["MANUAL"] = "MANUAL";
  HumiditySensorMode["SCHEDULE"] = "SCHEDULE";
  HumiditySensorMode["NONE"] = "NONE";
})(HumiditySensorMode || (HumiditySensorMode = {}));

let DistanceMode;

(function (DistanceMode) {
  DistanceMode["WHEN_EMPTY_ACTION_CUSTOM"] = "WHEN_EMPTY_ACTION_CUSTOM";
  DistanceMode["WHEN_EMPTY_ACTION_AUTOMATED"] = "WHEN_EMPTY_ACTION_AUTOMATED";
  DistanceMode["WHEN_FULL_ACTION_CUSTOM"] = "WHEN_FULL_ACTION_CUSTOM";
  DistanceMode["WHEN_FULL_ACTION_AUTOMATED"] = "WHEN_FULL_ACTION_AUTOMATED";
  DistanceMode["MIN_WARNING"] = "MIN_WARNING";
  DistanceMode["MAX_WARNING"] = "MAX_WARNING";
  DistanceMode["NONE"] = "NONE";
})(DistanceMode || (DistanceMode = {}));

let PlugMode;

(function (PlugMode) {
  PlugMode["CALENDAR"] = "CALENDAR";
  PlugMode["MANUAL"] = "MANUAL";
  PlugMode["NONE"] = "NONE";
})(PlugMode || (PlugMode = {}));

let PlugSensorMode;

(function (PlugSensorMode) {
  PlugSensorMode["MANUAL"] = "MANUAL";
  PlugSensorMode["SCHEDULE"] = "SCHEDULE";
  PlugSensorMode["ASSOCIATED"] = "ASSOCIATED";
  PlugSensorMode["NONE"] = "NONE";
})(PlugSensorMode || (PlugSensorMode = {}));

let CommonMode;

(function (CommonMode) {
  CommonMode["NONE"] = "NONE";
})(CommonMode || (CommonMode = {}));

let LightSensorModes;

(function (LightSensorModes) {
  LightSensorModes["MANUAL"] = "MANUAL";
  LightSensorModes["SCHEDULE"] = "SCHEDULE";
  LightSensorModes["SMART_SCHEDULE"] = "SMART_SCHEDULE";
  LightSensorModes["NONE"] = "NONE";
})(LightSensorModes || (LightSensorModes = {}));

let WeekDays; // - Accion vacio custom: activa relay asociado x cantidad de tiempo
// - Accion vacio automatico: avisa cuando esta vacio y activa relay asociado hasta llegar al maximo
// - Accion lleno custom: avisa cuando esta lleno y activa relay asociado x cantidad de tiempo
// - Accion lleno automatico: avisa cuando esta lleno y activa relay asociado hasta llegar al minimo
// - Aviso vacio: avisa cuando esta vacio.
// - Aviso lleno: avisa cuando esta lleno.

(function (WeekDays) {
  WeekDays["MONDAY"] = "LUNES";
  WeekDays["TUESDAY"] = "MARTES";
  WeekDays["WEDNESDAY"] = "MIERCOLES";
  WeekDays["THURSDAY"] = "JUEVES";
  WeekDays["FRIDAY"] = "VIERNES";
  WeekDays["SATURDAY"] = "SABADO";
  WeekDays["SUNDAY"] = "DOMINGO";
})(WeekDays || (WeekDays = {}));

const distanceModeOptions = [{
  value: DistanceMode.WHEN_EMPTY_ACTION_CUSTOM,
  label: 'Acción custom en mínimos'
}, {
  value: DistanceMode.WHEN_EMPTY_ACTION_AUTOMATED,
  label: 'Acción automatico en mínimos'
}, {
  value: DistanceMode.WHEN_FULL_ACTION_CUSTOM,
  label: 'Acción custom en máximos'
}, {
  value: DistanceMode.WHEN_FULL_ACTION_AUTOMATED,
  label: 'Acción automatico en máximos'
}, {
  value: DistanceMode.MIN_WARNING,
  label: 'Aviso en mínimos'
}, {
  value: DistanceMode.MAX_WARNING,
  label: 'Aviso en máximos'
}, {
  value: DistanceMode.NONE,
  label: 'Ninguno'
}];
const humidityModeOptions = [{
  value: HumiditySensorMode.SEEDS_POOL_IRRIGATION,
  label: 'Riego por inmersión'
}, {
  value: HumiditySensorMode.MANUAL,
  label: 'Manual'
}, {
  value: HumiditySensorMode.IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND,
  label: 'A demanda cant. exacta'
}, {
  value: HumiditySensorMode.IRRIGATE_ON_DEMAND,
  label: 'A demanda'
}, {
  value: HumiditySensorMode.SCHEDULE,
  label: 'Calendario de riego'
}, {
  value: HumiditySensorMode.NONE,
  label: 'Ninguno'
}];
const lightModeOptions = [{
  value: LightSensorModes.MANUAL,
  label: 'Manual'
}, {
  value: LightSensorModes.SCHEDULE,
  label: 'Calendario'
}, {
  value: LightSensorModes.SMART_SCHEDULE,
  label: 'Calendario inteligente'
}, {
  value: LightSensorModes.NONE,
  label: 'Ninguno'
}];
const manualModeOptions = [{
  value: true,
  label: 'Prendido'
}, {
  value: false,
  label: 'Apagado'
}];
const fourRelaysOptions = [{
  value: RelaysIds.RELAY_ONE,
  label: 'Enchufe 1'
}, {
  value: RelaysIds.RELAY_TWO,
  label: 'Enchufe 2'
}, {
  value: RelaysIds.RELAY_THIRD,
  label: 'Enchufe 3'
}, {
  value: RelaysIds.RELAY_FOURTH,
  label: 'Enchufe 4'
}, {
  value: '',
  label: 'Ninguno'
}];
const eightRelaysOptions = [{
  value: RelaysIds.RELAY_ONE,
  label: 'Enchufe 1'
}, {
  value: RelaysIds.RELAY_TWO,
  label: 'Enchufe 2'
}, {
  value: RelaysIds.RELAY_THIRD,
  label: 'Enchufe 3'
}, {
  value: RelaysIds.RELAY_FOURTH,
  label: 'Enchufe 4'
}, {
  value: '',
  label: 'Ninguno'
}];

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

/***/ "kn2/":
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

// CONCATENATED MODULE: ./src/components/switch/switch.style.tsx


const SwitchStyle = external_styled_components_default.a.div.withConfig({
  displayName: "switchstyle__SwitchStyle",
  componentId: "sc-14hweo8-0"
})(["display:inline-flex;color:", ";font-size:calc(", "px + 1px);font-weight:", ";> label .field-label{color:inherit;font-size:inherit;font-weight:inherit;}&.label_left{label{display:flex;align-items:center;.field-label{margin-right:10px;}}}&.label_right{label{display:flex;flex-direction:row-reverse;align-items:center;.field-label{margin-left:10px;}}}&.label_top{label{.field-label{display:flex;margin-bottom:8px;}}}&.label_bottom{label{.field-label{display:flex;margin-top:8px;}}}input[type='checkbox']{&.switch{opacity:0;position:absolute;margin:0;z-index:-1;width:0;height:0;overflow:hidden;left:0;pointer-events:none;&:checked + div{width:36px;background-position:0 0;background-color:", ";> div{background-color:", ";left:calc(38px / 2);}}}+ div{vertical-align:middle;width:36px;height:18px;border-radius:50px;background-color:", ";transition-duration:0.4s;transition-property:background-color,box-shadow;cursor:pointer;box-sizing:border-box;position:relative;flex-shrink:0;> div{float:left;width:16px;height:16px;border-radius:50%;pointer-events:none;top:1px;left:1px;position:absolute;background-color:", ";transition:all 0.25s ease;}}}"], Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.medium', '500'), Object(theme_get_["themeGet"])('colors.primary.alternate', '#028489'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.gray.700', '#e6e6e6'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
SwitchStyle.displayName = 'SwitchStyle';
/* harmony default export */ var switch_style = (SwitchStyle);
// CONCATENATED MODULE: ./src/components/switch/switch.tsx
var __jsx = external_react_default.a.createElement;



const Switch = ({
  label,
  disabled,
  className,
  labelPosition,
  onUpdate,
  checked,
  style
}) => {
  // Switch State
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])(false); // OnChange Function

  const handleOnChange = () => {
    setState(!state);
    onUpdate(!state);
  }; // Label Field


  const LabelField = label && __jsx("span", {
    className: "field-label"
  }, label); // Label Position


  const position = labelPosition || 'top';
  return __jsx(switch_style, {
    className: `switch label_${position} ${className}`.trim(),
    style: style
  }, __jsx("label", null, (position === 'left' || position === 'right' || position === 'top') && LabelField, __jsx("input", {
    checked: checked,
    className: "switch",
    type: "checkbox",
    disabled: disabled,
    onChange: handleOnChange
  }), __jsx("div", null, __jsx("div", null)), position === 'bottom' && LabelField));
};

/* harmony default export */ var switch_switch = __webpack_exports__["a"] = (Switch);

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

/***/ "qJ3r":
/***/ (function(module, exports) {

module.exports = require("react-apexcharts");

/***/ }),

/***/ "qbum":
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ }),

/***/ "qiIp":
/***/ (function(module, exports) {

module.exports = require("react-time-picker");

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
  // height: '100vh',
  padding: '1.5rem',
  fontSize: '15px',
  color: '000',
  backgroundColor: '#fff'
});

/***/ }),

/***/ "rBbI":
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

// EXTERNAL MODULE: ./src/features/user-profile/sidebar/sidebar.tsx + 1 modules
var sidebar = __webpack_require__("jh0t");

// EXTERNAL MODULE: ./src/components/seo.tsx
var seo = __webpack_require__("H8eV");

// EXTERNAL MODULE: ./src/components/error-message/error-message.tsx
var error_message = __webpack_require__("quMH");

// EXTERNAL MODULE: /Users/estebanmuruzabal/work/ditto/client/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./src/utils/constant.ts
var constant = __webpack_require__("f/wd");

// EXTERNAL MODULE: ./src/features/your-plants/your-plants.style.tsx
var your_plants_style = __webpack_require__("5joJ");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./src/graphql/query/plants.query.ts

const ADD_PLANT = external_graphql_tag_default.a`
mutation AddPlant($id: ID!, $name: String!, $plantId: Int!) {
  addPlant(
    id: $id,
    name: $name,
    plantId: $plantId
  ) {
    message
    status
  }
}
`;
const UPDATE_SETTING = external_graphql_tag_default.a`
    mutation updateSetting($id: ID!, $plantId: Int!, $input: InputSettings!) {
      updateSetting(id: $id, plantId: $plantId, input: $input) {
        message
        status
      }
    }
`;
const DELETE_SETTING = external_graphql_tag_default.a`
    mutation DeleteSetting($id: ID!, $plantId: Int!, $settingName: String!) {
      deleteSetting(id: $id, plantId: $plantId, settingName: $settingName) {
        message
        status
      }
    }
`;
// EXTERNAL MODULE: ./src/components/forms/input.tsx
var input = __webpack_require__("VnWI");

// EXTERNAL MODULE: ./src/contexts/profile/profile.context.tsx
var profile_context = __webpack_require__("p2kv");

// EXTERNAL MODULE: ./src/features/user-profile/settings/settings.style.tsx
var settings_style = __webpack_require__("1vYv");

// EXTERNAL MODULE: ./src/assets/icons/CloseIcon.tsx
var CloseIcon = __webpack_require__("2nMb");

// EXTERNAL MODULE: ./src/assets/icons/PencilIcon.tsx
var PencilIcon = __webpack_require__("1Zbg");

// EXTERNAL MODULE: ./src/components/switch/switch.tsx + 1 modules
var switch_switch = __webpack_require__("kn2/");

// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__("vtRj");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/features/your-plants/humidity-logs-graph/humidity-logs-graph.style.tsx


const hideSearch = Object(external_styled_components_["keyframes"])(["from{display:none;}to{display:flex;}"]);
const SearchWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "humidity-logs-graphstyle__SearchWrapper",
  componentId: "sc-1nl52dj-0"
})(["position:relative;"]);
const SearchResultWrap = external_styled_components_default.a.div.withConfig({
  displayName: "humidity-logs-graphstyle__SearchResultWrap",
  componentId: "sc-1nl52dj-1"
})(["display:flex;align-items:center;justify-content:flex-start;min-width:450px;min-height:100px;position:absolute;left:0;right:0;top:50px;width:100%;margin:0 auto;padding:15px;border-radius:6px;background-color:", ";box-shadow:", ";&.hidden{animation:", " 0.3s ease;display:none;}&.show{animation:", " 0.3s ease;display:flex;}li{padding:8px 15px;cursor:pointer;color:#77798C;}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)'), hideSearch, hideSearch);
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./src/components/box.tsx


const Box = external_styled_components_default.a.div.withConfig({
  displayName: "box__Box",
  componentId: "sc-1nzavnx-0"
})({
  boxSizing: 'border-box',
  minWidth: 0,
  margin: 0
}, Object(external_styled_system_["compose"])(external_styled_system_["space"], external_styled_system_["color"], external_styled_system_["layout"]));
// EXTERNAL MODULE: external "baseui"
var external_baseui_ = __webpack_require__("/GVc");

// CONCATENATED MODULE: ./src/components/box/Box.style.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const TitleWrapper = Object(external_baseui_["styled"])("div", () => ({
  padding: "30px",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-betwween"
}));
const BoxHeading = Object(external_baseui_["styled"])("h3", ({
  $theme
}) => _objectSpread(_objectSpread({}, $theme.typography.fontBold16), {}, {
  fontFamily: $theme.typography.primaryFontFamily,
  color: $theme.colors.textDark,
  lineHeight: "1.3",
  margin: 0,
  "@media only screen and (max-width: 767px)": {
    display: "block"
  }
}));
const BoxWrapper = Object(external_baseui_["styled"])("div", () => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#ffffff",
  borderRadius: "3px",
  boxShadow: "0 21px 36px rgba(0, 0, 0, 0.03)",
  overflow: "hidden"
}));
const BoxContentWrapper = Object(external_baseui_["styled"])("div", () => ({
  width: "100%",
  display: "flex",
  flexWrap: "wrap"
}));
/* harmony default export */ var Box_style = (BoxWrapper);
// CONCATENATED MODULE: ./src/components/box/box.tsx
var __jsx = external_react_default.a.createElement;


const BoxTitleWrapper = ({
  children,
  style
}) => {
  return __jsx(TitleWrapper, {
    style: style
  }, children);
};
const BoxTitle = ({
  title
}) => {
  return __jsx(BoxHeading, null, title);
};
const box_Box = ({
  children
}) => {
  return __jsx(Box_style, null, children);
};
const BoxContent = ({
  children,
  style
}) => {
  return __jsx(BoxContentWrapper, {
    style: style
  }, children);
};
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// CONCATENATED MODULE: ./src/components/charts/chart.tsx
var chart_jsx = external_react_default.a.createElement;


const Chart = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "qJ3r", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("qJ3r")],
    modules: ['react-apexcharts']
  }
});

const Charts = (_ref) => {
  let props = Object.assign({}, _ref);
  return chart_jsx(Chart, props);
};

/* harmony default export */ var chart = (Charts); // import { ClientOnly } from 'components/client-only/client-only';
// import React from 'react';
// import ApexChart from 'react-apexcharts';
// const Charts = ({ ...props }) => {
//   return (
//     <ClientOnly>
//       <ApexChart {...props} />
//     </ClientOnly>
//   )
// };
// export default Charts;
// CONCATENATED MODULE: ./src/components/graph-chart/graph-chart.tsx
var graph_chart_jsx = external_react_default.a.createElement;





const GrpahChart = ({
  widgetTitle,
  series,
  icon,
  labels,
  prefix,
  colors
}) => {
  const options = {
    options: {
      chart: {
        zoom: {
          enabled: true
        },
        toolbar: {
          show: false
        }
      },
      colors: colors,
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'solid'
      },
      stroke: {
        show: false,
        curve: 'smooth'
      },
      legend: {
        show: true
      },
      xaxis: {
        type: 'datetime',
        categories: labels,
        labels: {
          show: true,
          offsetX: -25,
          style: {
            colors: '#161F6A',
            fontSize: '10px',
            fontFamily: "'Lato', sans-serif"
          } // format: 'HH:mm'
          // formatter: function(value, timestamp, index) {
          //   return moment(new Date(timestamp)).format("DD/MM hh:mm")
          // }
          // datetimeFormatter: {
          //   // month: 'MMM \'yy',
          //   // day: 'dd MMM',
          //   hour: 'HH:mm'
          // }

        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          show: true,
          width: 1,
          tickWidth: 0,
          position: 'back',
          opacity: 1,
          stroke: {
            color: 'transparent',
            width: 0,
            dashArray: 0
          },
          fill: {
            type: 'solid',
            color: '#F2F3FC'
          }
        },
        tooltip: {
          enabled: false
        }
      },
      yaxis: {
        show: true,
        min: 0,
        max: 100,
        labels: {
          show: true,
          style: {
            color: '#161F6A',
            fontSize: '14px',
            fontFamily: "'Lato', sans-serif"
          }
        }
      },
      grid: {
        borderColor: '#F7F7F7',
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      markers: {
        size: 0,
        opacity: 1,
        colors: colors,
        strokeColor: '#fff',
        strokeWidth: 4,
        hover: {
          size: 8
        }
      }
    },
    series: [{
      name: '',
      data: series
    }]
  };
  return graph_chart_jsx(Box, null, graph_chart_jsx(BoxTitleWrapper, null, graph_chart_jsx(BoxTitle, {
    title: widgetTitle
  })), graph_chart_jsx(BoxContent, {
    style: {
      display: 'block',
      width: '100%'
    }
  }, graph_chart_jsx(chart, {
    options: options.options,
    series: options.series,
    width: "100%",
    height: "300px",
    type: "area"
  })));
};

/* harmony default export */ var graph_chart = (GrpahChart);
// CONCATENATED MODULE: ./src/features/your-plants/humidity-logs-graph/humidity-logs-graph.tsx
var humidity_logs_graph_jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const HumidityLogsGraph = (_ref) => {
  let {
    data
  } = _ref,
      props = _objectWithoutProperties(_ref, ["data"]);

  // console.log(data)
  JSON.stringify(data);
  let humidities = [];
  let times = [];
  Object.keys(data).forEach(function (key, index) {
    if (data[key].reading >= 0 || data[key].reading <= 100) {
      humidities.push(data[key].reading);
      times.push(data[key].timestamp);
    } // let trimed = data[key]?.timestamp?.substring(0, data[key].timestamp.length - 6);

  });
  console.log('times', times);
  console.log('humidities', humidities);
  return humidity_logs_graph_jsx(SearchWrapper, null, humidity_logs_graph_jsx(graph_chart // widgetTitle='Humidity history'
  , {
    colors: ['#6571f0'],
    series: humidities,
    labels: times
  }));
};

/* harmony default export */ var humidity_logs_graph = (HumidityLogsGraph);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// CONCATENATED MODULE: ./src/components/add-time-schedule/add-schedule-card.style.tsx


const FieldWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "add-schedule-cardstyle__FieldWrapper",
  componentId: "sc-12au15p-0"
})(["width:100%;display:flex;flex-direction:column;margin-bottom:15px;"]);
const Heading = external_styled_components_default.a.div.withConfig({
  displayName: "add-schedule-cardstyle__Heading",
  componentId: "sc-12au15p-1"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-bottom:15px;"], Object(theme_get_["themeGet"])('fontFamily.heading', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.md', '19'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const ButtonsContainer = external_styled_components_default.a.div.withConfig({
  displayName: "add-schedule-cardstyle__ButtonsContainer",
  componentId: "sc-12au15p-2"
})(["width:100%;display:flex;flex-direction:row;margin-top:30px;"]);
const WeekContainer = external_styled_components_default.a.div.withConfig({
  displayName: "add-schedule-cardstyle__WeekContainer",
  componentId: "sc-12au15p-3"
})(["display:flex;flex-direction:row;"]);
const DayContainer = external_styled_components_default.a.button.withConfig({
  displayName: "add-schedule-cardstyle__DayContainer",
  componentId: "sc-12au15p-4"
})(["display:flex;align-items:center;justify-content:center;margin-right:3px;width:50px;height:30px;border:1px solid ", ";border-radius:5px;fontFamily:$theme.typography.primaryFontFamily,color:$theme.colors.red400,cursor:pointer;"], Object(theme_get_["themeGet"])('colors.gray.700', '#c3b2b2'));
const PlantsSensorContainer = external_styled_components_default.a.div.withConfig({
  displayName: "add-schedule-cardstyle__PlantsSensorContainer",
  componentId: "sc-12au15p-5"
})(["background-color:", ";border:1px solid ", ";border-radius:", ";overflow:hidden;position:relative;margin:5px 0px;padding:10px 5px;"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('radii.base', '6px'));
const ListItem = external_styled_components_default.a.div.withConfig({
  displayName: "add-schedule-cardstyle__ListItem",
  componentId: "sc-12au15p-6"
})(["display:flex;margin-bottom:10px;align-items:center;&:last-child{margin-bottom:20;}justify-content:space-between;max-width:300px;"]);
const ListTitle = external_styled_components_default.a.div.withConfig({
  displayName: "add-schedule-cardstyle__ListTitle",
  componentId: "sc-12au15p-7"
})(["flex-basis:140px;flex-shrink:0;position:relative;&:after{position:absolute;top:-1px;right:-2px;line-height:1;}"]);
const ListDes = external_styled_components_default.a.div.withConfig({
  displayName: "add-schedule-cardstyle__ListDes",
  componentId: "sc-12au15p-8"
})([""]);
const Text = external_styled_components_default.a.p.withConfig({
  displayName: "add-schedule-cardstyle__Text",
  componentId: "sc-12au15p-9"
})(["font-family:", ";font-size:", "px;color:", ";font-weight:", ";line-height:1.2;display:block;margin:0;&:last-child{color:", ";}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), props => props.bold ? Object(theme_get_["themeGet"])('fontWeights.bold', '700') : Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.medium', '#424561'));

// EXTERNAL MODULE: ./src/components/loader/loader.tsx
var loader = __webpack_require__("XIyH");

// EXTERNAL MODULE: external "react-time-picker"
var external_react_time_picker_ = __webpack_require__("qiIp");
var external_react_time_picker_default = /*#__PURE__*/__webpack_require__.n(external_react_time_picker_);

// CONCATENATED MODULE: ./src/components/add-time-schedule/add-schedule-card.tsx
var add_schedule_card_jsx = external_react_default.a.createElement;

function add_schedule_card_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function add_schedule_card_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { add_schedule_card_ownKeys(Object(source), true).forEach(function (key) { add_schedule_card_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { add_schedule_card_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function add_schedule_card_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














// Wrap our form with the using withFormik HoC
const FormEnhancer = Object(external_formik_["withFormik"])({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      id: props.item.id || null,
      name: props.item.name || '',
      info: props.item.info || ''
    };
  },
  validationSchema: external_yup_["object"]().shape({
    name: external_yup_["string"]().required('Required!'),
    info: external_yup_["string"]().required('Required')
  }),
  handleSubmit: values => {// do submitting things
  }
});

const AddTimeSchedule = props => {
  var _currentSchedule$star, _currentSchedule$endT, _currentSchedule$days;

  const {
    item,
    values
  } = props;
  const addressValue = {
    id: values.id,
    type: 'secondary',
    name: values.name,
    info: values.info
  };
  const settingIndex = item.plant.sensors.findIndex(sensor => sensor.settingType === item.settingType);
  const currentSchedule = item.plant.sensors[settingIndex].scheduledOnTimes[item === null || item === void 0 ? void 0 : item.schedulePosition];
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(profile_context["a" /* ProfileContext */]);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: isSmartLightingOn,
    1: isSmartLighting
  } = Object(external_react_["useState"])(false);
  const {
    0: startTime,
    1: startTimeChange
  } = Object(external_react_["useState"])((currentSchedule === null || currentSchedule === void 0 ? void 0 : (_currentSchedule$star = currentSchedule.startTime) === null || _currentSchedule$star === void 0 ? void 0 : _currentSchedule$star.length) > 0 ? currentSchedule.startTime : '00:00');
  const {
    0: endTime,
    1: endTimeChange
  } = Object(external_react_["useState"])((currentSchedule === null || currentSchedule === void 0 ? void 0 : (_currentSchedule$endT = currentSchedule.endTime) === null || _currentSchedule$endT === void 0 ? void 0 : _currentSchedule$endT.length) > 0 ? currentSchedule.endTime : '23:59');
  const {
    0: daysSelected,
    1: setDaysSelected
  } = Object(external_react_["useState"])((currentSchedule === null || currentSchedule === void 0 ? void 0 : (_currentSchedule$days = currentSchedule.daysToRepeat) === null || _currentSchedule$days === void 0 ? void 0 : _currentSchedule$days.length) >= 0 ? currentSchedule.daysToRepeat : []);
  const [updateSetting] = Object(react_hooks_["useMutation"])(UPDATE_SETTING);
  const intl = Object(external_react_intl_["useIntl"])();

  const dispatchSettingSave = (plant, sensorSetting, settingType) => {
    updateSetting({
      variables: {
        id: item.id,
        plantId: plant.plantId,
        input: add_schedule_card_objectSpread(add_schedule_card_objectSpread({}, sensorSetting), {}, {
          settingType: settingType
        })
      }
    });
  };

  const handleSubmit = async () => {
    const newSchedule = {
      daysToRepeat: daysSelected,
      startTime,
      endTime,
      enabled: true,
      smartLight: isSmartLightingOn
    };
    setLoading(true); // here we just check and make it an array in case its not

    const settingIndex = item.plant.sensors.findIndex(sensor => sensor.settingType === item.settingType);
    const setting = item.plant.sensors[settingIndex]; // setting.scheduledOnTimes = setting?.scheduledOnTimes?.length >= 0 ? setting?.scheduledOnTimes : [];

    if (currentSchedule && (item === null || item === void 0 ? void 0 : item.schedulePosition) >= 0) {
      setting.scheduledOnTimes[item === null || item === void 0 ? void 0 : item.schedulePosition] = newSchedule;
    } else {
      setting.scheduledOnTimes.push(newSchedule);
    }

    dispatch({
      type: 'UPDATE_SENSOR',
      payload: {
        setting,
        plantId: item.plant.plantId,
        settingIndex
      }
    });
    dispatchSettingSave(item.plant, setting, item.settingType);
    Object(reuse_modal_["closeModal"])();
    setLoading(false);
  };

  const handleDaysAddition = day => {
    const dayIndex = daysSelected.indexOf(day);
    let newDaysSelectedArray = daysSelected;
    dayIndex >= 0 ? newDaysSelectedArray.splice(dayIndex, 1) : newDaysSelectedArray.push(day);
    setDaysSelected(newDaysSelectedArray);
  };

  return add_schedule_card_jsx(external_formik_["Form"], null, add_schedule_card_jsx(PlantsSensorContainer, null, add_schedule_card_jsx(Heading, null, add_schedule_card_jsx(Heading, null, intl.formatMessage({
    id: currentSchedule ? 'editTimeScheduleId' : 'addTimeScheduleId',
    defaultMessage: 'addTimeScheduleId'
  }))), add_schedule_card_jsx(ListItem, null, add_schedule_card_jsx(ListTitle, null, add_schedule_card_jsx(Text, {
    bold: true
  }, add_schedule_card_jsx(external_react_intl_["FormattedMessage"], {
    id: "startTimeId",
    defaultMessage: "startTimeId"
  }))), add_schedule_card_jsx(ListDes, null, add_schedule_card_jsx(external_react_time_picker_default.a, {
    onChange: e => startTimeChange(e),
    value: startTime,
    disableClock: true
  }))), add_schedule_card_jsx(ListItem, null, add_schedule_card_jsx(ListTitle, null, add_schedule_card_jsx(Text, {
    bold: true
  }, add_schedule_card_jsx(external_react_intl_["FormattedMessage"], {
    id: "endTimeId",
    defaultMessage: "endTimeId"
  }))), add_schedule_card_jsx(ListDes, null, add_schedule_card_jsx(external_react_time_picker_default.a, {
    onChange: e => endTimeChange(e),
    value: endTime,
    disableClock: true
  }))), add_schedule_card_jsx(WeekContainer, null, Object.keys(constant["i" /* WeekDays */]).map((day, i) => {
    return add_schedule_card_jsx(DayContainer, {
      key: i + '-day-container',
      style: {
        backgroundColor: daysSelected.indexOf(day) >= 0 ? '#b99c9c' : 'transparent'
      },
      onClick: () => handleDaysAddition(day)
    }, day.substring(0, 3));
  })), add_schedule_card_jsx(ButtonsContainer, null, add_schedule_card_jsx(button_button["a" /* Button */], {
    onClick: handleSubmit,
    type: "submit" // style={{ width: '100%', height: '44px', marginTop: '200px' }}
    ,
    loader: add_schedule_card_jsx(loader["a" /* default */], null),
    isDisabled: loading,
    isLoading: loading
  }, add_schedule_card_jsx(external_react_intl_["FormattedMessage"], {
    id: currentSchedule ? "editTimeFrameId" : "addTimeFrameId",
    defaultMessage: "addTimeFrameId"
  })), add_schedule_card_jsx(button_button["a" /* Button */], {
    onClick: () => Object(reuse_modal_["closeModal"])(),
    style: {
      marginLeft: '20px'
    },
    loader: add_schedule_card_jsx(loader["a" /* default */], null),
    isDisabled: loading,
    isLoading: loading
  }, add_schedule_card_jsx(external_react_intl_["FormattedMessage"], {
    id: "cancelTimeFrameId",
    defaultMessage: "cancelTimeFrameId"
  })))));
};

/* harmony default export */ var add_schedule_card = (FormEnhancer(AddTimeSchedule));
// EXTERNAL MODULE: ./src/assets/icons/CheckMark.tsx
var CheckMark = __webpack_require__("EsHW");

// CONCATENATED MODULE: ./src/utils/sensorUtils.ts

const getSettingTypeText = settingType => {
  switch (settingType) {
    case `${constant["h" /* SensorsTypes */].SOIL_HUMIDITY}_1`:
      return 'SENSOR HUMEDAD EN TIERRA 1';

    case `${constant["h" /* SensorsTypes */].SOIL_HUMIDITY}_2`:
      return 'SENSOR HUMEDAD EN TIERRA 2';

    case `${constant["h" /* SensorsTypes */].SOIL_HUMIDITY}_3`:
      return 'SENSOR HUMEDAD EN TIERRA 3';

    case `${constant["h" /* SensorsTypes */].LIGHT}_1`:
      return 'SENSOR DE LUZ 1';

    case `${constant["h" /* SensorsTypes */].LIGHT}_2`:
      return 'SENSOR DE LUZ 2';

    case `${constant["h" /* SensorsTypes */].PLUG}_1`:
      return 'ENCHUFE INTELIGENTE 1';

    case `${constant["h" /* SensorsTypes */].PLUG}_2`:
      return 'ENCHUFE INTELIGENTE 2';

    case `${constant["h" /* SensorsTypes */].PLUG}_3`:
      return 'ENCHUFE INTELIGENTE 3';

    case `${constant["h" /* SensorsTypes */].PLUG}_4`:
      return 'ENCHUFE INTELIGENTE 4';

    case `${constant["h" /* SensorsTypes */].DISTANCE}_1`:
      return 'SENSOR DE DISTANCIA 1';

    case `${constant["h" /* SensorsTypes */].DISTANCE}_2`:
      return 'SENSOR DE DISTANCIA 2';

    case `${constant["h" /* SensorsTypes */].DISTANCE}_3`:
      return 'SENSOR DE DISTANCIA 3';

    default:
      break;
  }
};
const getRelayNameText = relay => {
  switch (relay) {
    case constant["g" /* RelaysIds */].RELAY_ONE:
      return 'Enchufe 1';

    case constant["g" /* RelaysIds */].RELAY_TWO:
      return 'Enchufe 2';

    case constant["g" /* RelaysIds */].RELAY_THIRD:
      return 'Enchufe 3';

    case constant["g" /* RelaysIds */].RELAY_FOURTH:
      return 'Enchufe 4';

    default:
      break;
  }
};
// CONCATENATED MODULE: ./src/features/your-plants/sensors/SoilHumiditySensor.tsx
var SoilHumiditySensor_jsx = external_react_default.a.createElement;

function SoilHumiditySensor_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SoilHumiditySensor_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SoilHumiditySensor_ownKeys(Object(source), true).forEach(function (key) { SoilHumiditySensor_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SoilHumiditySensor_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SoilHumiditySensor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const SoilHumiditySensor = ({
  errorId,
  plant,
  settingType,
  handleSettingsChange,
  onDeleteSchedule,
  data,
  openTab,
  setOpenTab,
  handleDeleteSensor
}) => {
  var _setting$relayTwoAuto, _setting$scheduledOnT, _setting$logs;

  const setting = plant.sensors.find(sensor => sensor.settingType === settingType);
  const intl = Object(external_react_intl_["useIntl"])();
  const {
    0: editIsOn,
    1: setEditIsOn
  } = Object(external_react_["useState"])(false);
  const selectedMode = constant["l" /* humidityModeOptions */].find(option => option.value === setting.mode);
  const selectedManualState = constant["n" /* manualModeOptions */].find(option => option.value === setting.relayOneWorking);
  const relayOneSelected = constant["k" /* fourRelaysOptions */].find(option => option.value === setting.relayOneIdRelated);
  const relayTwoSelected = constant["k" /* fourRelaysOptions */].find(option => option.value === setting.relayTwoIdRelated);
  const selectStyle = {
    control: styles => SoilHumiditySensor_objectSpread(SoilHumiditySensor_objectSpread({}, styles), {}, {
      width: '179.88px',
      textAlign: 'left'
    })
  }; // const tabIsOpen = openTab === settingType;

  const tabIsOpen = true;

  const handleModal = (modalComponent, modalProps = {}, className = 'add-time-schedule-modal') => {
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

  const reading = (setting === null || setting === void 0 ? void 0 : setting.reading) >= -5 && (setting === null || setting === void 0 ? void 0 : setting.reading) < 0 ? 0 + ' % 💧' : (setting === null || setting === void 0 ? void 0 : setting.reading) >= 0 && (setting === null || setting === void 0 ? void 0 : setting.reading) <= 100 ? (setting === null || setting === void 0 ? void 0 : setting.reading) + ' %' : 'Disconected';
  return SoilHumiditySensor_jsx(your_plants_style["r" /* PlantsSensorContainer */], {
    style: {
      height: tabIsOpen ? '100%' : '82px'
    },
    onClick: () => setOpenTab(tabIsOpen ? '' : settingType)
  }, SoilHumiditySensor_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, SoilHumiditySensor_jsx(your_plants_style["m" /* ListTitle */], null, SoilHumiditySensor_jsx(your_plants_style["C" /* Type */], {
    bold: true
  }, getSettingTypeText(setting === null || setting === void 0 ? void 0 : setting.settingType))), SoilHumiditySensor_jsx(your_plants_style["k" /* ListDes */], null, SoilHumiditySensor_jsx(your_plants_style["e" /* CardButtons */], {
    className: "button-wrapper"
  }, editIsOn ? SoilHumiditySensor_jsx(your_plants_style["a" /* ActionButton */], {
    onClick: () => setEditIsOn(!editIsOn),
    className: "edit-btn"
  }, SoilHumiditySensor_jsx(CheckMark["a" /* CheckMark */], null)) : SoilHumiditySensor_jsx(your_plants_style["a" /* ActionButton */], {
    onClick: () => setEditIsOn(!editIsOn),
    className: "edit-btn"
  }, SoilHumiditySensor_jsx(PencilIcon["a" /* PencilIcon */], null)), SoilHumiditySensor_jsx(your_plants_style["a" /* ActionButton */], {
    onClick: () => handleDeleteSensor(plant, settingType),
    className: "delete-btn"
  }, SoilHumiditySensor_jsx(CloseIcon["a" /* CloseIcon */], null))))), (setting === null || setting === void 0 ? void 0 : setting.mode) === constant["d" /* HumiditySensorMode */].NONE && !!openTab && SoilHumiditySensor_jsx(your_plants_style["l" /* ListItem */], null, SoilHumiditySensor_jsx(your_plants_style["z" /* Status */], null, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "modoRequiredWarningText",
    defaultMessage: "modoRequiredWarningText"
  }))), SoilHumiditySensor_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, SoilHumiditySensor_jsx(your_plants_style["m" /* ListTitle */], null, SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], null, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "soilHumidityId",
    defaultMessage: "soilHumidityId"
  }))), SoilHumiditySensor_jsx(your_plants_style["k" /* ListDes */], null, SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, reading, " "))), SoilHumiditySensor_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, SoilHumiditySensor_jsx(your_plants_style["m" /* ListTitle */], null, SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], null, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "plantName",
    defaultMessage: "plantName"
  }))), SoilHumiditySensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? SoilHumiditySensor_jsx(input["a" /* Input */], {
    type: "text",
    name: "name",
    value: setting.name,
    placeholder: intl.formatMessage({
      id: 'plantNameRequiredNameId',
      defaultMessage: 'plantNameRequiredNameId'
    }),
    onChange: e => handleSettingsChange(plant, 'name', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px" // intlInputLabelId="profileEmailField"

  }) : SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, setting === null || setting === void 0 ? void 0 : setting.name))), SoilHumiditySensor_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, SoilHumiditySensor_jsx(your_plants_style["m" /* ListTitle */], null, SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], null, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "humidityModeId",
    defaultMessage: "humidityModeId"
  }))), SoilHumiditySensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? SoilHumiditySensor_jsx(external_react_select_default.a, {
    onChange: e => handleSettingsChange(plant, 'mode', e.value, settingType),
    value: selectedMode,
    options: constant["l" /* humidityModeOptions */],
    styles: selectStyle,
    menuPosition: 'fixed'
  }) : SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, selectedMode.value.length > 1 ? selectedMode.label : '-'))), (setting === null || setting === void 0 ? void 0 : setting.mode) !== constant["d" /* HumiditySensorMode */].NONE && SoilHumiditySensor_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, SoilHumiditySensor_jsx(your_plants_style["m" /* ListTitle */], null, SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], null, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "notifyChangesId",
    defaultMessage: "notifyChangesId"
  }))), SoilHumiditySensor_jsx(your_plants_style["k" /* ListDes */], null, SoilHumiditySensor_jsx(switch_switch["a" /* default */], {
    disabled: false,
    checked: setting.whatsappWarningsOn,
    labelPosition: 'right' // className,
    ,
    onUpdate: () => handleSettingsChange(plant, 'whatsappWarningsOn', !setting.whatsappWarningsOn, settingType)
  }))), setting.mode === constant["d" /* HumiditySensorMode */].IRRIGATE_ON_DEMAND && SoilHumiditySensor_jsx(external_react_default.a.Fragment, null, SoilHumiditySensor_jsx(your_plants_style["l" /* ListItem */], null, SoilHumiditySensor_jsx(your_plants_style["m" /* ListTitle */], null, SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], null, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "minHumidityId",
    defaultMessage: "minHumidityId"
  }))), SoilHumiditySensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? SoilHumiditySensor_jsx(your_plants_style["u" /* Row */], null, SoilHumiditySensor_jsx(input["a" /* Input */], {
    type: "number",
    name: "minWarning",
    value: setting.minWarning,
    onChange: e => handleSettingsChange(plant, 'minWarning', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px",
    width: "45px"
  }), SoilHumiditySensor_jsx(your_plants_style["t" /* Porcentage */], null, "%")) : SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, setting.minWarning >= 0 && setting.minWarning <= 100 ? setting === null || setting === void 0 ? void 0 : setting.minWarning : '-', " %"), errorId === 'minWarning' && SoilHumiditySensor_jsx(your_plants_style["i" /* ErrorMsg */], null, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "minMaxWarningId",
    defaultMessage: "minMaxWarningId"
  })))), SoilHumiditySensor_jsx(your_plants_style["l" /* ListItem */], null, SoilHumiditySensor_jsx(your_plants_style["m" /* ListTitle */], null, SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], null, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "asociateCalendarRelayOneId",
    defaultMessage: "asociateCalendarRelayOneId"
  }))), SoilHumiditySensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? SoilHumiditySensor_jsx(external_react_select_default.a, {
    onChange: e => handleSettingsChange(plant, 'relayOneIdRelated', e.value, settingType),
    value: relayOneSelected,
    options: constant["k" /* fourRelaysOptions */],
    styles: selectStyle,
    menuPosition: 'fixed'
  }) : SoilHumiditySensor_jsx(external_react_default.a.Fragment, null, SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, (setting === null || setting === void 0 ? void 0 : setting.relayOneIdRelated.length) > 1 ? getRelayNameText(setting === null || setting === void 0 ? void 0 : setting.relayOneIdRelated) : '-'), SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, (setting === null || setting === void 0 ? void 0 : setting.relayOneWorking) ? 'Prendido' : 'Apagado'))))), setting.mode === constant["d" /* HumiditySensorMode */].SEEDS_POOL_IRRIGATION && SoilHumiditySensor_jsx(external_react_default.a.Fragment, null, SoilHumiditySensor_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, SoilHumiditySensor_jsx(your_plants_style["m" /* ListTitle */], null, SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], null, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "maxHumidityId",
    defaultMessage: "maxHumidityId"
  }))), SoilHumiditySensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? SoilHumiditySensor_jsx(your_plants_style["u" /* Row */], null, SoilHumiditySensor_jsx(input["a" /* Input */], {
    type: "number",
    name: "maxWarning",
    value: setting.maxWarning,
    onChange: e => handleSettingsChange(plant, 'maxWarning', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px",
    width: "45px"
  }), SoilHumiditySensor_jsx(your_plants_style["t" /* Porcentage */], null, "%"), errorId === 'maxWarning' && SoilHumiditySensor_jsx(your_plants_style["i" /* ErrorMsg */], null, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "minMaxWarningId",
    defaultMessage: "minMaxWarningId"
  }))) : SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, setting.maxWarning >= 0 && setting.maxWarning <= 100 ? setting === null || setting === void 0 ? void 0 : setting.maxWarning : '-', " %"))), SoilHumiditySensor_jsx(your_plants_style["l" /* ListItem */], null, SoilHumiditySensor_jsx(your_plants_style["m" /* ListTitle */], null, SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], null, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "minHumidityId",
    defaultMessage: "minHumidityId"
  }))), SoilHumiditySensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? SoilHumiditySensor_jsx(your_plants_style["u" /* Row */], null, SoilHumiditySensor_jsx(input["a" /* Input */], {
    type: "number",
    name: "minWarning",
    value: setting.minWarning,
    onChange: e => handleSettingsChange(plant, 'minWarning', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px",
    width: "45px"
  }), SoilHumiditySensor_jsx(your_plants_style["t" /* Porcentage */], null, "%"), "/>", SoilHumiditySensor_jsx(your_plants_style["t" /* Porcentage */], null, "%"), errorId === 'minWarning' && SoilHumiditySensor_jsx(your_plants_style["i" /* ErrorMsg */], null, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "minMaxWarningId",
    defaultMessage: "minMaxWarningId"
  }))) : SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, setting.minWarning >= 0 && setting.minWarning <= 100 ? setting === null || setting === void 0 ? void 0 : setting.minWarning : '-', " %"))), SoilHumiditySensor_jsx(your_plants_style["l" /* ListItem */], null, SoilHumiditySensor_jsx(your_plants_style["m" /* ListTitle */], null, SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], null, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "asociateRelayOneId",
    defaultMessage: "asociateRelayOneId"
  }))), SoilHumiditySensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? SoilHumiditySensor_jsx(external_react_select_default.a, {
    onChange: e => handleSettingsChange(plant, 'relayOneIdRelated', e.value, settingType),
    value: relayOneSelected,
    options: constant["k" /* fourRelaysOptions */],
    styles: selectStyle,
    menuPosition: 'fixed'
  }) : SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, (setting === null || setting === void 0 ? void 0 : setting.relayOneIdRelated.length) > 1 ? getRelayNameText(setting === null || setting === void 0 ? void 0 : setting.relayOneIdRelated) : '-'))), SoilHumiditySensor_jsx(your_plants_style["l" /* ListItem */], null, SoilHumiditySensor_jsx(your_plants_style["m" /* ListTitle */], null, SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], null, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "asociateRelayTwoId",
    defaultMessage: "asociateRelayTwoId"
  }))), SoilHumiditySensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? SoilHumiditySensor_jsx(external_react_select_default.a, {
    onChange: e => handleSettingsChange(plant, 'relayTwoIdRelated', e.value, settingType),
    value: relayTwoSelected,
    options: constant["k" /* fourRelaysOptions */],
    styles: selectStyle,
    menuPosition: 'fixed'
  }) : SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, (setting === null || setting === void 0 ? void 0 : setting.relayTwoIdRelated.length) > 1 ? getRelayNameText(setting === null || setting === void 0 ? void 0 : setting.relayTwoIdRelated) : '-'))), SoilHumiditySensor_jsx(your_plants_style["l" /* ListItem */], null, SoilHumiditySensor_jsx(your_plants_style["m" /* ListTitle */], null, SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], null, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "irrigationTimeId",
    defaultMessage: "irrigationTimeId"
  }))), SoilHumiditySensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? SoilHumiditySensor_jsx(input["a" /* Input */], {
    type: "number",
    name: "relayOneAutomatedTimeToRun",
    value: setting.relayOneAutomatedTimeToRun,
    onChange: e => handleSettingsChange(plant, 'relayOneAutomatedTimeToRun', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px"
  }) : SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, (setting === null || setting === void 0 ? void 0 : setting.relayOneAutomatedTimeToRun) >= 0 ? setting.relayOneAutomatedTimeToRun + ' mins' : '-'))), SoilHumiditySensor_jsx(your_plants_style["l" /* ListItem */], null, SoilHumiditySensor_jsx(your_plants_style["m" /* ListTitle */], null, SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], null, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "irrigationEvacuationTimeId",
    defaultMessage: "irrigationEvacuationTimeId"
  }))), SoilHumiditySensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? SoilHumiditySensor_jsx(input["a" /* Input */], {
    type: "number",
    name: "relayTwoAutomatedTimeToRun",
    value: setting.relayTwoAutomatedTimeToRun,
    onChange: e => handleSettingsChange(plant, 'relayTwoAutomatedTimeToRun', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px"
  }) : SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, (setting === null || setting === void 0 ? void 0 : (_setting$relayTwoAuto = setting.relayTwoAutomatedTimeToRun) === null || _setting$relayTwoAuto === void 0 ? void 0 : _setting$relayTwoAuto.length) > 1 ? setting.relayTwoAutomatedTimeToRun + ' mins' : '-')))), setting.mode === constant["d" /* HumiditySensorMode */].IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND && SoilHumiditySensor_jsx(external_react_default.a.Fragment, null, SoilHumiditySensor_jsx(your_plants_style["l" /* ListItem */], null, SoilHumiditySensor_jsx(your_plants_style["m" /* ListTitle */], null, SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], null, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "minHumidityId",
    defaultMessage: "minHumidityId"
  }))), SoilHumiditySensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? SoilHumiditySensor_jsx(your_plants_style["u" /* Row */], null, SoilHumiditySensor_jsx(input["a" /* Input */], {
    type: "number",
    name: "minWarning",
    value: setting.minWarning,
    onChange: e => handleSettingsChange(plant, 'minWarning', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px",
    width: "45px"
  }), SoilHumiditySensor_jsx(your_plants_style["t" /* Porcentage */], null, "%")) : SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, setting.minWarning >= 0 && setting.minWarning <= 100 ? setting === null || setting === void 0 ? void 0 : setting.minWarning : '-', " %"), errorId === 'minWarning' && SoilHumiditySensor_jsx(your_plants_style["i" /* ErrorMsg */], null, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "minMaxWarningId",
    defaultMessage: "minMaxWarningId"
  })))), SoilHumiditySensor_jsx(your_plants_style["l" /* ListItem */], null, SoilHumiditySensor_jsx(your_plants_style["m" /* ListTitle */], null, SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], null, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "asociateRelayOneId",
    defaultMessage: "asociateRelayOneId"
  }))), SoilHumiditySensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? SoilHumiditySensor_jsx(external_react_select_default.a, {
    onChange: e => handleSettingsChange(plant, 'relayOneIdRelated', e.value, settingType),
    value: relayOneSelected,
    options: constant["k" /* fourRelaysOptions */],
    styles: selectStyle,
    menuPosition: 'fixed'
  }) : SoilHumiditySensor_jsx(external_react_default.a.Fragment, null, SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, (setting === null || setting === void 0 ? void 0 : setting.relayOneIdRelated.length) > 1 ? getRelayNameText(setting === null || setting === void 0 ? void 0 : setting.relayOneIdRelated) : '-'), SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, (setting === null || setting === void 0 ? void 0 : setting.relayOneWorking) ? 'Prendido' : 'Apagado')))), SoilHumiditySensor_jsx(your_plants_style["l" /* ListItem */], null, SoilHumiditySensor_jsx(your_plants_style["m" /* ListTitle */], null, SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], null, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "irrigationTimeId",
    defaultMessage: "irrigationTimeId"
  }))), SoilHumiditySensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? SoilHumiditySensor_jsx(input["a" /* Input */], {
    type: "number",
    name: "relayOneAutomatedTimeToRun",
    value: setting.relayOneAutomatedTimeToRun,
    onChange: e => handleSettingsChange(plant, 'relayOneAutomatedTimeToRun', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px"
  }) : SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, (setting === null || setting === void 0 ? void 0 : setting.relayOneAutomatedTimeToRun) >= 0 ? setting.relayOneAutomatedTimeToRun + ' mins' : '-')))), setting.mode === constant["d" /* HumiditySensorMode */].SCHEDULE && SoilHumiditySensor_jsx(external_react_default.a.Fragment, null, SoilHumiditySensor_jsx(your_plants_style["l" /* ListItem */], null, SoilHumiditySensor_jsx(your_plants_style["m" /* ListTitle */], null, SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], null, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "asociateCalendarRelayOneId",
    defaultMessage: "asociateCalendarRelayOneId"
  }))), SoilHumiditySensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? SoilHumiditySensor_jsx(external_react_select_default.a, {
    onChange: e => handleSettingsChange(plant, 'relayOneIdRelated', e.value, settingType),
    value: relayOneSelected,
    options: constant["k" /* fourRelaysOptions */],
    styles: selectStyle,
    menuPosition: 'fixed'
  }) : SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, (setting === null || setting === void 0 ? void 0 : setting.relayOneIdRelated.length) > 1 ? getRelayNameText(setting === null || setting === void 0 ? void 0 : setting.relayOneIdRelated) : '-'))), setting === null || setting === void 0 ? void 0 : (_setting$scheduledOnT = setting.scheduledOnTimes) === null || _setting$scheduledOnT === void 0 ? void 0 : _setting$scheduledOnT.map((schedule, i) => {
    return SoilHumiditySensor_jsx(your_plants_style["D" /* WeekContainer */], null, SoilHumiditySensor_jsx(your_plants_style["k" /* ListDes */], {
      style: {
        flexDirection: 'row',
        display: 'flex',
        paddingBottom: '10px'
      }
    }, Object.keys(constant["i" /* WeekDays */]).map((day, i) => {
      return SoilHumiditySensor_jsx(your_plants_style["h" /* DayContainer */], {
        key: i + '-day--humidity-1container',
        style: {
          backgroundColor: schedule.daysToRepeat.includes(day) ? '#c2b0b0' : 'transparent'
        } // onClick={() => setDay(day)}

      }, day.substring(0, 2));
    })), SoilHumiditySensor_jsx(your_plants_style["x" /* ScheduleTimeContainer */], null, SoilHumiditySensor_jsx(your_plants_style["B" /* TextSpaced */], null, " ", SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
      id: "desdeId",
      defaultMessage: "desdeId"
    }), " "), SoilHumiditySensor_jsx(your_plants_style["B" /* TextSpaced */], {
      bold: true
    }, schedule.startTime), SoilHumiditySensor_jsx(your_plants_style["B" /* TextSpaced */], null, " ", SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
      id: "aId",
      defaultMessage: "aId"
    }), " "), SoilHumiditySensor_jsx(your_plants_style["B" /* TextSpaced */], {
      bold: true
    }, schedule.endTime), SoilHumiditySensor_jsx(your_plants_style["b" /* ActionsButtons */], {
      className: "button-wrapper"
    }, SoilHumiditySensor_jsx(your_plants_style["a" /* ActionButton */], {
      onClick: () => {
        var _data$getUser;

        return handleModal(add_schedule_card, {
          settingType: settingType,
          plant,
          id: data === null || data === void 0 ? void 0 : (_data$getUser = data.getUser) === null || _data$getUser === void 0 ? void 0 : _data$getUser.id,
          schedulePosition: i
        });
      },
      className: "edit-btn"
    }, SoilHumiditySensor_jsx(PencilIcon["a" /* PencilIcon */], null)), SoilHumiditySensor_jsx(your_plants_style["a" /* ActionButton */], {
      onClick: () => onDeleteSchedule(plant, settingType, i),
      className: "delete-btn"
    }, SoilHumiditySensor_jsx(CloseIcon["a" /* CloseIcon */], null)))));
  }), SoilHumiditySensor_jsx(button_button["a" /* Button */], {
    size: "small",
    variant: "outlined",
    type: "button",
    className: "add-button",
    onClick: () => {
      var _data$getUser2;

      return handleModal(add_schedule_card, {
        name: 'add-humidity-1-schedule',
        plant,
        id: data === null || data === void 0 ? void 0 : (_data$getUser2 = data.getUser) === null || _data$getUser2 === void 0 ? void 0 : _data$getUser2.id,
        settingType
      });
    }
  }, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "addTimeScheduleId",
    defaultMessage: "addTimeScheduleId"
  }))), setting.mode === constant["d" /* HumiditySensorMode */].MANUAL && SoilHumiditySensor_jsx(external_react_default.a.Fragment, null, SoilHumiditySensor_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, SoilHumiditySensor_jsx(your_plants_style["m" /* ListTitle */], null, SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], null, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "manualModeStateId",
    defaultMessage: "manualModeStateId"
  }))), SoilHumiditySensor_jsx(your_plants_style["k" /* ListDes */], null, SoilHumiditySensor_jsx(switch_switch["a" /* default */], {
    disabled: false,
    checked: setting.relayOneWorking,
    labelPosition: 'right',
    label: (setting === null || setting === void 0 ? void 0 : setting.relayOneWorking) ? 'Prendido' : 'Apagado' // className,
    ,
    onUpdate: () => handleSettingsChange(plant, 'relayOneWorking', !setting.relayOneWorking, settingType)
  }))), SoilHumiditySensor_jsx(your_plants_style["l" /* ListItem */], null, SoilHumiditySensor_jsx(your_plants_style["m" /* ListTitle */], null, SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], null, SoilHumiditySensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "asociateCalendarRelayOneId",
    defaultMessage: "asociateCalendarRelayOneId"
  }))), SoilHumiditySensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? SoilHumiditySensor_jsx(external_react_select_default.a, {
    onChange: e => handleSettingsChange(plant, 'relayOneIdRelated', e.value, settingType),
    value: relayOneSelected,
    options: constant["k" /* fourRelaysOptions */],
    styles: selectStyle,
    menuPosition: 'fixed'
  }) : SoilHumiditySensor_jsx(external_react_default.a.Fragment, null, SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, (setting === null || setting === void 0 ? void 0 : setting.relayOneIdRelated.length) > 1 ? getRelayNameText(setting === null || setting === void 0 ? void 0 : setting.relayOneIdRelated) : '-'), SoilHumiditySensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, (setting === null || setting === void 0 ? void 0 : setting.relayOneWorking) ? 'Prendido' : 'Apagado'))))), (setting === null || setting === void 0 ? void 0 : (_setting$logs = setting.logs) === null || _setting$logs === void 0 ? void 0 : _setting$logs.length) > 0 && SoilHumiditySensor_jsx(humidity_logs_graph, {
    data: setting.logs
  }));
};

/* harmony default export */ var sensors_SoilHumiditySensor = (SoilHumiditySensor);
// CONCATENATED MODULE: ./src/features/your-plants/sensors/LightSensor.tsx
var LightSensor_jsx = external_react_default.a.createElement;

function LightSensor_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function LightSensor_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { LightSensor_ownKeys(Object(source), true).forEach(function (key) { LightSensor_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { LightSensor_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function LightSensor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const LightSensor = ({
  plant,
  settingType,
  handleSettingsChange,
  onDeleteSchedule,
  data,
  openTab,
  setOpenTab,
  handleDeleteSensor
}) => {
  var _setting$relayOneIdRe, _setting$relayOneIdRe2, _setting$scheduledOnT, _setting$logs;

  const setting = plant.sensors.find(sensor => sensor.settingType === settingType);
  const {
    0: daySelected,
    1: setDay
  } = Object(external_react_["useState"])('');
  const {
    0: editIsOn,
    1: setEditIsOn
  } = Object(external_react_["useState"])(false);
  const intl = Object(external_react_intl_["useIntl"])();
  const selectedMode = constant["m" /* lightModeOptions */].find(option => option.value === setting.mode);
  const selectedManualState = constant["n" /* manualModeOptions */].find(option => option.value === setting.relayOneWorking);
  const relayOneSelected = constant["k" /* fourRelaysOptions */].find(option => option.value === setting.relayOneIdRelated);
  const relayTwoSelected = constant["k" /* fourRelaysOptions */].find(option => option.value === setting.relayTwoIdRelated);
  const selectStyle = {
    control: styles => LightSensor_objectSpread(LightSensor_objectSpread({}, styles), {}, {
      width: '160px',
      textAlign: 'left'
    })
  }; // const tabIsOpen = openTab === settingType;

  const tabIsOpen = true;

  const handleModal = (modalComponent, modalProps = {}, className = 'add-time-schedule-modal') => {
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

  return LightSensor_jsx(your_plants_style["r" /* PlantsSensorContainer */], {
    style: {
      height: tabIsOpen ? '100%' : '66px'
    },
    onClick: () => setOpenTab(tabIsOpen ? '' : settingType)
  }, LightSensor_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, LightSensor_jsx(your_plants_style["m" /* ListTitle */], null, LightSensor_jsx(your_plants_style["C" /* Type */], {
    bold: true
  }, getSettingTypeText(setting === null || setting === void 0 ? void 0 : setting.settingType))), LightSensor_jsx(your_plants_style["k" /* ListDes */], {
    style: {
      marginLeft: '-10px'
    }
  }, LightSensor_jsx(your_plants_style["e" /* CardButtons */], {
    className: "button-wrapper"
  }, editIsOn ? LightSensor_jsx(your_plants_style["a" /* ActionButton */], {
    onClick: () => setEditIsOn(!editIsOn),
    className: "edit-btn"
  }, LightSensor_jsx(CheckMark["a" /* CheckMark */], null)) : LightSensor_jsx(your_plants_style["a" /* ActionButton */], {
    onClick: () => setEditIsOn(!editIsOn),
    className: "edit-btn"
  }, LightSensor_jsx(PencilIcon["a" /* PencilIcon */], null)), LightSensor_jsx(your_plants_style["a" /* ActionButton */], {
    onClick: () => handleDeleteSensor(plant, settingType),
    className: "delete-btn"
  }, LightSensor_jsx(CloseIcon["a" /* CloseIcon */], null))))), (setting === null || setting === void 0 ? void 0 : setting.mode) === constant["d" /* HumiditySensorMode */].NONE && !!openTab && LightSensor_jsx(your_plants_style["l" /* ListItem */], null, LightSensor_jsx(your_plants_style["z" /* Status */], null, LightSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "modoRequiredWarningText",
    defaultMessage: "modoRequiredWarningText"
  }), " ")), LightSensor_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, LightSensor_jsx(your_plants_style["m" /* ListTitle */], null, LightSensor_jsx(your_plants_style["A" /* Text */], null, LightSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "lightId",
    defaultMessage: "lightId"
  }))), LightSensor_jsx(your_plants_style["k" /* ListDes */], null, LightSensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, plant === null || plant === void 0 ? void 0 : plant.light, " % ", (plant === null || plant === void 0 ? void 0 : plant.light) < 40 ? '🌙' : '💡'))), LightSensor_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, LightSensor_jsx(your_plants_style["m" /* ListTitle */], null, LightSensor_jsx(your_plants_style["A" /* Text */], null, LightSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "plantName",
    defaultMessage: "plantName"
  }))), LightSensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? LightSensor_jsx(input["a" /* Input */], {
    type: "text",
    name: "name",
    value: setting.name,
    placeholder: intl.formatMessage({
      id: 'plantNameRequiredNameId',
      defaultMessage: 'plantNameRequiredNameId'
    }),
    onChange: e => handleSettingsChange(plant, 'name', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px" // intlInputLabelId="profileEmailField"

  }) : LightSensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, setting === null || setting === void 0 ? void 0 : setting.name))), LightSensor_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, LightSensor_jsx(your_plants_style["m" /* ListTitle */], null, LightSensor_jsx(your_plants_style["A" /* Text */], null, LightSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "lightModeId",
    defaultMessage: "lightModeId"
  }))), LightSensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? LightSensor_jsx(external_react_select_default.a, {
    onChange: e => handleSettingsChange(plant, 'mode', e.value, settingType),
    value: selectedMode,
    options: constant["m" /* lightModeOptions */],
    styles: selectStyle,
    menuPosition: 'fixed'
  }) : LightSensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, selectedMode.value.length > 1 ? selectedMode.label : '-'))), ((setting === null || setting === void 0 ? void 0 : setting.mode) === constant["e" /* LightSensorModes */].MANUAL || (setting === null || setting === void 0 ? void 0 : setting.mode) === constant["e" /* LightSensorModes */].SCHEDULE || (setting === null || setting === void 0 ? void 0 : setting.mode) === constant["e" /* LightSensorModes */].SMART_SCHEDULE) && LightSensor_jsx(your_plants_style["l" /* ListItem */], null, LightSensor_jsx(your_plants_style["m" /* ListTitle */], null, LightSensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, LightSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: ((_setting$relayOneIdRe = setting.relayOneIdRelated) === null || _setting$relayOneIdRe === void 0 ? void 0 : _setting$relayOneIdRe.length) ? 'asociatedRelayId' : 'asociateRelayId',
    defaultMessage: ((_setting$relayOneIdRe2 = setting.relayOneIdRelated) === null || _setting$relayOneIdRe2 === void 0 ? void 0 : _setting$relayOneIdRe2.length) ? 'asociatedRelayId' : 'asociateRelayId'
  }))), LightSensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? LightSensor_jsx(external_react_select_default.a, {
    onChange: e => handleSettingsChange(plant, 'relayOneIdRelated', e.value, settingType),
    value: relayOneSelected,
    options: constant["k" /* fourRelaysOptions */],
    styles: selectStyle,
    menuPosition: 'fixed'
  }) : LightSensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, (setting === null || setting === void 0 ? void 0 : setting.relayOneIdRelated.length) > 1 ? getRelayNameText(setting === null || setting === void 0 ? void 0 : setting.relayOneIdRelated) : '-'))), setting.mode === constant["e" /* LightSensorModes */].MANUAL && LightSensor_jsx(external_react_default.a.Fragment, null, LightSensor_jsx(your_plants_style["l" /* ListItem */], null, LightSensor_jsx(your_plants_style["m" /* ListTitle */], null, LightSensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, LightSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "manualModeStateId",
    defaultMessage: "manualModeStateId"
  }))), LightSensor_jsx(your_plants_style["k" /* ListDes */], null, LightSensor_jsx(external_react_select_default.a, {
    onChange: e => handleSettingsChange(plant, 'relayOneWorking', e.value, settingType),
    value: selectedManualState,
    options: constant["n" /* manualModeOptions */],
    styles: selectStyle,
    menuPosition: 'fixed'
  })))), (setting.mode === constant["e" /* LightSensorModes */].SCHEDULE || setting.mode === constant["e" /* LightSensorModes */].SMART_SCHEDULE) && LightSensor_jsx(external_react_default.a.Fragment, null, LightSensor_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, LightSensor_jsx(your_plants_style["m" /* ListTitle */], null, LightSensor_jsx(your_plants_style["A" /* Text */], null, LightSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "manualModeStateId",
    defaultMessage: "manualModeStateId"
  }))), LightSensor_jsx(your_plants_style["k" /* ListDes */], null, LightSensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, LightSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: setting.relayOneWorking ? 'manualModeStateOnId' : 'manualModeStateOffId',
    defaultMessage: "noDefaultOnOffMsg"
  })))), LightSensor_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, LightSensor_jsx(your_plants_style["m" /* ListTitle */], null, LightSensor_jsx(your_plants_style["A" /* Text */], null, LightSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "notifyChangesId",
    defaultMessage: "notifyChangesId"
  }))), LightSensor_jsx(your_plants_style["k" /* ListDes */], null, LightSensor_jsx(switch_switch["a" /* default */], {
    disabled: false,
    checked: setting.whatsappWarningsOn,
    labelPosition: 'right' // className,
    ,
    onUpdate: () => handleSettingsChange(plant, 'whatsappWarningsOn', !setting.whatsappWarningsOn, settingType)
  }))), setting === null || setting === void 0 ? void 0 : (_setting$scheduledOnT = setting.scheduledOnTimes) === null || _setting$scheduledOnT === void 0 ? void 0 : _setting$scheduledOnT.map((schedule, i) => {
    return LightSensor_jsx(your_plants_style["D" /* WeekContainer */], null, LightSensor_jsx(your_plants_style["k" /* ListDes */], {
      style: {
        flexDirection: 'row',
        display: 'flex',
        paddingBottom: '10px'
      }
    }, Object.keys(constant["i" /* WeekDays */]).map((day, i) => {
      return LightSensor_jsx(your_plants_style["h" /* DayContainer */], {
        key: i + '-day-light-1-container',
        style: {
          backgroundColor: schedule.daysToRepeat.includes(day) ? '#c2b0b0' : 'transparent'
        } // onClick={() => setDay(day)}

      }, day.substring(0, 2));
    })), LightSensor_jsx(your_plants_style["x" /* ScheduleTimeContainer */], null, LightSensor_jsx(your_plants_style["B" /* TextSpaced */], null, " ", LightSensor_jsx(external_react_intl_["FormattedMessage"], {
      id: "desdeId",
      defaultMessage: "desdeId"
    }), " "), LightSensor_jsx(your_plants_style["B" /* TextSpaced */], {
      bold: true
    }, schedule.startTime), LightSensor_jsx(your_plants_style["B" /* TextSpaced */], null, " ", LightSensor_jsx(external_react_intl_["FormattedMessage"], {
      id: "aId",
      defaultMessage: "aId"
    }), " "), LightSensor_jsx(your_plants_style["B" /* TextSpaced */], {
      bold: true
    }, schedule.endTime), LightSensor_jsx(your_plants_style["b" /* ActionsButtons */], {
      className: "button-wrapper"
    }, LightSensor_jsx(your_plants_style["a" /* ActionButton */], {
      onClick: () => {
        var _data$getUser;

        return handleModal(add_schedule_card, {
          settingType: settingType,
          plant,
          id: data === null || data === void 0 ? void 0 : (_data$getUser = data.getUser) === null || _data$getUser === void 0 ? void 0 : _data$getUser.id,
          schedulePosition: i
        });
      },
      className: "edit-btn"
    }, LightSensor_jsx(PencilIcon["a" /* PencilIcon */], null)), LightSensor_jsx(your_plants_style["a" /* ActionButton */], {
      onClick: () => onDeleteSchedule(plant, settingType, i),
      className: "delete-btn"
    }, LightSensor_jsx(CloseIcon["a" /* CloseIcon */], null)))));
  }), LightSensor_jsx(button_button["a" /* Button */], {
    size: "small",
    variant: "outlined",
    type: "button",
    className: "add-button",
    onClick: () => {
      var _data$getUser2;

      return handleModal(add_schedule_card, {
        name: 'add-humidity-1-schedule',
        plant,
        id: data === null || data === void 0 ? void 0 : (_data$getUser2 = data.getUser) === null || _data$getUser2 === void 0 ? void 0 : _data$getUser2.id,
        settingType
      });
    }
  }, LightSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "addTimeScheduleId",
    defaultMessage: "addTimeScheduleId"
  }))), (setting === null || setting === void 0 ? void 0 : (_setting$logs = setting.logs) === null || _setting$logs === void 0 ? void 0 : _setting$logs.length) > 0 && LightSensor_jsx(humidity_logs_graph, {
    data: setting.logs
  }));
};

/* harmony default export */ var sensors_LightSensor = (LightSensor);
// CONCATENATED MODULE: ./src/features/your-plants/sensors/Plug.tsx
var Plug_jsx = external_react_default.a.createElement;

function Plug_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Plug_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Plug_ownKeys(Object(source), true).forEach(function (key) { Plug_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Plug_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Plug_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const Plug = ({
  plant,
  settingType,
  handleSettingsChange,
  onDeleteSchedule,
  data,
  openTab,
  setOpenTab,
  handleDeleteSensor
}) => {
  var _setting$scheduledOnT, _setting$relayOneIdRe, _setting$relayOneIdRe2, _setting$logs;

  const setting = plant.sensors.find(sensor => sensor.settingType === settingType);
  const intl = Object(external_react_intl_["useIntl"])();
  const {
    0: daySelected,
    1: setDay
  } = Object(external_react_["useState"])('');
  const {
    0: editIsOn,
    1: setEditIsOn
  } = Object(external_react_["useState"])(false);
  const selectedMode = constant["j" /* distanceModeOptions */].find(option => option.value === setting.mode);
  const selectedManualState = constant["n" /* manualModeOptions */].find(option => option.value === setting.relayOneWorking);
  const relayOneSelected = constant["k" /* fourRelaysOptions */].find(option => option.value === setting.relayOneIdRelated);
  const relayTwoSelected = constant["k" /* fourRelaysOptions */].find(option => option.value === setting.relayTwoIdRelated);
  const selectStyle = {
    control: styles => Plug_objectSpread(Plug_objectSpread({}, styles), {}, {
      width: '160px',
      textAlign: 'left'
    })
  }; // const tabIsOpen = openTab === settingType;

  const tabIsOpen = true;

  const handleModal = (modalComponent, modalProps = {}, className = 'add-time-schedule-modal') => {
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

  return Plug_jsx(your_plants_style["r" /* PlantsSensorContainer */], {
    style: {
      height: tabIsOpen ? '100%' : '82px'
    },
    onClick: () => setOpenTab(tabIsOpen ? '' : settingType)
  }, Plug_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, Plug_jsx(your_plants_style["m" /* ListTitle */], null, Plug_jsx(your_plants_style["C" /* Type */], {
    bold: true
  }, getSettingTypeText(setting === null || setting === void 0 ? void 0 : setting.settingType))), Plug_jsx(your_plants_style["k" /* ListDes */], {
    style: {
      marginLeft: '-10px'
    }
  }, Plug_jsx(your_plants_style["e" /* CardButtons */], {
    className: "button-wrapper"
  }, editIsOn ? Plug_jsx(your_plants_style["a" /* ActionButton */], {
    onClick: () => setEditIsOn(!editIsOn),
    className: "edit-btn"
  }, Plug_jsx(CheckMark["a" /* CheckMark */], null)) : Plug_jsx(your_plants_style["a" /* ActionButton */], {
    onClick: () => setEditIsOn(!editIsOn),
    className: "edit-btn"
  }, Plug_jsx(PencilIcon["a" /* PencilIcon */], null)), Plug_jsx(your_plants_style["a" /* ActionButton */], {
    onClick: () => handleDeleteSensor(plant, settingType),
    className: "delete-btn"
  }, Plug_jsx(CloseIcon["a" /* CloseIcon */], null))))), (setting === null || setting === void 0 ? void 0 : setting.mode) === constant["f" /* PlugMode */].NONE && !!openTab && Plug_jsx(your_plants_style["l" /* ListItem */], null, Plug_jsx(your_plants_style["z" /* Status */], null, Plug_jsx(external_react_intl_["FormattedMessage"], {
    id: "modoRequiredWarningText",
    defaultMessage: "modoRequiredWarningText"
  }))), Plug_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, Plug_jsx(your_plants_style["m" /* ListTitle */], null, Plug_jsx(your_plants_style["A" /* Text */], null, Plug_jsx(external_react_intl_["FormattedMessage"], {
    id: "distanceId",
    defaultMessage: "distanceId"
  }))), Plug_jsx(your_plants_style["k" /* ListDes */], null, Plug_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, (setting === null || setting === void 0 ? void 0 : setting.reading) > 0 && (setting === null || setting === void 0 ? void 0 : setting.reading) < 100 ? (setting === null || setting === void 0 ? void 0 : setting.reading) + 'cm.' : '-', " "))), Plug_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, Plug_jsx(your_plants_style["m" /* ListTitle */], null, Plug_jsx(your_plants_style["A" /* Text */], null, Plug_jsx(external_react_intl_["FormattedMessage"], {
    id: "plantName",
    defaultMessage: "plantName"
  }))), Plug_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? Plug_jsx(input["a" /* Input */], {
    type: "text",
    name: "name",
    value: setting.name,
    placeholder: intl.formatMessage({
      id: 'plantNameRequiredNameId',
      defaultMessage: 'plantNameRequiredNameId'
    }),
    onChange: e => handleSettingsChange(plant, 'name', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px" // intlInputLabelId="profileEmailField"

  }) : Plug_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, setting === null || setting === void 0 ? void 0 : setting.name))), Plug_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, Plug_jsx(your_plants_style["m" /* ListTitle */], null, Plug_jsx(your_plants_style["A" /* Text */], null, Plug_jsx(external_react_intl_["FormattedMessage"], {
    id: "distanceModeId",
    defaultMessage: "distanceModeId"
  }))), Plug_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? Plug_jsx(external_react_select_default.a, {
    onChange: e => handleSettingsChange(plant, 'mode', e.value, settingType),
    value: selectedMode // placeholder={'asdsad'}
    ,
    options: constant["j" /* distanceModeOptions */],
    styles: selectStyle,
    menuPosition: 'fixed'
  }) : Plug_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, selectedMode.value.length > 1 ? selectedMode.label : '-'))), (setting === null || setting === void 0 ? void 0 : setting.mode) !== constant["f" /* PlugMode */].NONE && Plug_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, Plug_jsx(your_plants_style["m" /* ListTitle */], null, Plug_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, Plug_jsx(external_react_intl_["FormattedMessage"], {
    id: "notifyChangesId",
    defaultMessage: "notifyChangesId"
  }))), Plug_jsx(your_plants_style["k" /* ListDes */], null, Plug_jsx(switch_switch["a" /* default */], {
    disabled: false,
    checked: setting.whatsappWarningsOn,
    labelPosition: 'right' // className,
    ,
    onUpdate: () => handleSettingsChange(plant, 'whatsappWarningsOn', !setting.whatsappWarningsOn, settingType)
  }))), setting.mode === constant["f" /* PlugMode */].CALENDAR && Plug_jsx(external_react_default.a.Fragment, null, Plug_jsx(your_plants_style["l" /* ListItem */], null, Plug_jsx(your_plants_style["m" /* ListTitle */], null, Plug_jsx(your_plants_style["A" /* Text */], null, Plug_jsx(external_react_intl_["FormattedMessage"], {
    id: "maxDistanceId",
    defaultMessage: "maxDistanceId"
  }))), Plug_jsx(your_plants_style["u" /* Row */], null, editIsOn ? Plug_jsx(external_react_default.a.Fragment, null, Plug_jsx(input["a" /* Input */], {
    type: "number",
    name: "maxWarning",
    value: setting.maxWarning,
    onChange: e => handleSettingsChange(plant, 'maxWarning', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px",
    width: "45px"
  }), Plug_jsx(your_plants_style["t" /* Porcentage */], null, "%")) : Plug_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, setting.maxWarning))), Plug_jsx(your_plants_style["l" /* ListItem */], null, Plug_jsx(your_plants_style["m" /* ListTitle */], null, Plug_jsx(your_plants_style["A" /* Text */], null, Plug_jsx(external_react_intl_["FormattedMessage"], {
    id: "minDistanceId",
    defaultMessage: "minDistanceId"
  }))), Plug_jsx(your_plants_style["u" /* Row */], null, editIsOn ? Plug_jsx(external_react_default.a.Fragment, null, Plug_jsx(your_plants_style["j" /* InputUpper */], {
    type: "number",
    name: "minWarning",
    value: setting.minWarning,
    onChange: e => handleSettingsChange(plant, 'minWarning', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px",
    width: "45px"
  }), Plug_jsx(your_plants_style["t" /* Porcentage */], null, "%")) : Plug_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, setting.minWarning))), Plug_jsx(your_plants_style["l" /* ListItem */], null, Plug_jsx(your_plants_style["m" /* ListTitle */], null, Plug_jsx(your_plants_style["A" /* Text */], null, Plug_jsx(external_react_intl_["FormattedMessage"], {
    id: "asociateRelayOneId",
    defaultMessage: "asociateRelayOneId"
  }))), Plug_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? Plug_jsx(external_react_select_default.a, {
    onChange: e => handleSettingsChange(plant, 'relayOneIdRelated', e.value, settingType),
    value: relayOneSelected,
    options: constant["k" /* fourRelaysOptions */],
    styles: selectStyle,
    menuPosition: 'fixed'
  }) : Plug_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, (setting === null || setting === void 0 ? void 0 : setting.relayOneIdRelated.length) > 1 ? getRelayNameText(setting === null || setting === void 0 ? void 0 : setting.relayOneIdRelated) : '-'))), Plug_jsx(your_plants_style["l" /* ListItem */], null, Plug_jsx(your_plants_style["m" /* ListTitle */], null, Plug_jsx(your_plants_style["A" /* Text */], null, Plug_jsx(external_react_intl_["FormattedMessage"], {
    id: "asociateRelayTwoId",
    defaultMessage: "asociateRelayTwoId"
  }))), Plug_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? Plug_jsx(external_react_select_default.a, {
    onChange: e => handleSettingsChange(plant, 'relayTwoIdRelated', e.value, settingType),
    value: relayTwoSelected,
    options: constant["k" /* fourRelaysOptions */],
    styles: selectStyle,
    menuPosition: 'fixed'
  }) : Plug_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, (setting === null || setting === void 0 ? void 0 : setting.relayTwoIdRelated.length) > 1 ? getRelayNameText(setting === null || setting === void 0 ? void 0 : setting.relayTwoIdRelated) : '-')))), setting.mode === constant["d" /* HumiditySensorMode */].SCHEDULE && Plug_jsx(external_react_default.a.Fragment, null, Plug_jsx(your_plants_style["D" /* WeekContainer */], null, Object.keys(constant["i" /* WeekDays */]).map((day, i) => {
    return Plug_jsx(your_plants_style["h" /* DayContainer */], {
      key: i + '-day--humidity-1container',
      style: {
        backgroundColor: daySelected === day ? '#c2b0b0' : 'transparent'
      },
      onClick: () => setDay(day)
    }, day.substring(0, 3));
  })), setting === null || setting === void 0 ? void 0 : (_setting$scheduledOnT = setting.scheduledOnTimes) === null || _setting$scheduledOnT === void 0 ? void 0 : _setting$scheduledOnT.map((schedule, i) => {
    return Plug_jsx(your_plants_style["D" /* WeekContainer */], null, schedule.daysToRepeat.includes(daySelected) ? Plug_jsx(your_plants_style["w" /* ScheduleTime */], null, Plug_jsx(your_plants_style["B" /* TextSpaced */], null, Plug_jsx(external_react_intl_["FormattedMessage"], {
      id: "startTimeId",
      defaultMessage: "startTimeId"
    })), " ", Plug_jsx(your_plants_style["B" /* TextSpaced */], null, schedule.startTime), Plug_jsx(your_plants_style["B" /* TextSpaced */], null, Plug_jsx(external_react_intl_["FormattedMessage"], {
      id: "endTimeId",
      defaultMessage: "endTimeId"
    })), " ", Plug_jsx(your_plants_style["B" /* TextSpaced */], null, schedule.endTime), Plug_jsx(your_plants_style["e" /* CardButtons */], {
      className: "button-wrapper"
    }, Plug_jsx(your_plants_style["a" /* ActionButton */], {
      onClick: () => {
        var _data$getUser;

        return handleModal(add_schedule_card, {
          settingType: settingType,
          plant,
          id: data === null || data === void 0 ? void 0 : (_data$getUser = data.getUser) === null || _data$getUser === void 0 ? void 0 : _data$getUser.id
        });
      },
      className: "edit-btn"
    }, Plug_jsx(PencilIcon["a" /* PencilIcon */], null)), Plug_jsx(your_plants_style["a" /* ActionButton */], {
      onClick: () => onDeleteSchedule(plant, settingType, i),
      className: "delete-btn"
    }, Plug_jsx(CloseIcon["a" /* CloseIcon */], null)))) : Plug_jsx(your_plants_style["w" /* ScheduleTime */], {
      style: {
        border: '0px',
        height: '42px'
      }
    }));
  }), Plug_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, Plug_jsx(your_plants_style["m" /* ListTitle */], null, Plug_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, Plug_jsx(external_react_intl_["FormattedMessage"], {
    id: "notifyChangesId",
    defaultMessage: "notifyChangesId"
  }))), Plug_jsx(your_plants_style["k" /* ListDes */], null, Plug_jsx(switch_switch["a" /* default */], {
    disabled: false,
    checked: setting.whatsappWarningsOn,
    labelPosition: 'right' // className,
    ,
    onUpdate: () => handleSettingsChange(plant, 'whatsappWarningsOn', !setting.whatsappWarningsOn, settingType)
  }))), Plug_jsx(button_button["a" /* Button */], {
    size: "small",
    variant: "outlined",
    type: "button",
    className: "add-button",
    onClick: () => {
      var _data$getUser2;

      return handleModal(add_schedule_card, {
        name: 'add-humidity-1-schedule',
        plant,
        id: data === null || data === void 0 ? void 0 : (_data$getUser2 = data.getUser) === null || _data$getUser2 === void 0 ? void 0 : _data$getUser2.id
      });
    }
  }, Plug_jsx(external_react_intl_["FormattedMessage"], {
    id: "addTimeScheduleId",
    defaultMessage: "addTimeScheduleId"
  }))), setting.mode === constant["d" /* HumiditySensorMode */].MANUAL && Plug_jsx(external_react_default.a.Fragment, null, Plug_jsx(your_plants_style["l" /* ListItem */], null, Plug_jsx(your_plants_style["m" /* ListTitle */], null, Plug_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, Plug_jsx(external_react_intl_["FormattedMessage"], {
    id: "manualModeStateId",
    defaultMessage: "manualModeStateId"
  }))), Plug_jsx(your_plants_style["k" /* ListDes */], null, Plug_jsx(external_react_select_default.a, {
    onChange: e => handleSettingsChange(plant, 'relayOneWorking', e.value, settingType),
    value: selectedManualState,
    options: constant["n" /* manualModeOptions */],
    styles: selectStyle,
    menuPosition: 'fixed'
  }))), Plug_jsx(your_plants_style["l" /* ListItem */], null, Plug_jsx(your_plants_style["m" /* ListTitle */], null, Plug_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, Plug_jsx(external_react_intl_["FormattedMessage"], {
    id: ((_setting$relayOneIdRe = setting.relayOneIdRelated) === null || _setting$relayOneIdRe === void 0 ? void 0 : _setting$relayOneIdRe.length) ? 'asociateRelayId' : 'asociatedRelayId',
    defaultMessage: ((_setting$relayOneIdRe2 = setting.relayOneIdRelated) === null || _setting$relayOneIdRe2 === void 0 ? void 0 : _setting$relayOneIdRe2.length) ? 'asociateRelayId' : 'asociatedRelayId'
  }))), Plug_jsx(your_plants_style["k" /* ListDes */], null, Plug_jsx(external_react_select_default.a, {
    onChange: e => handleSettingsChange(plant, 'relayOneIdRelated', e.value, settingType),
    value: relayOneSelected,
    options: constant["k" /* fourRelaysOptions */],
    styles: selectStyle,
    menuPosition: 'fixed'
  })))), setting.mode === constant["d" /* HumiditySensorMode */].SEEDS_POOL_IRRIGATION && Plug_jsx(external_react_default.a.Fragment, null, Plug_jsx(your_plants_style["l" /* ListItem */], null, Plug_jsx(your_plants_style["m" /* ListTitle */], null, Plug_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, Plug_jsx(external_react_intl_["FormattedMessage"], {
    id: "irrigationTimeId",
    defaultMessage: "irrigationTimeId"
  }))), Plug_jsx(your_plants_style["k" /* ListDes */], null, Plug_jsx(input["a" /* Input */], {
    type: "number",
    name: "relayOneAutomatedTimeToRun",
    value: setting.relayOneAutomatedTimeToRun,
    onChange: e => handleSettingsChange(plant, 'relayOneAutomatedTimeToRun', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px"
  }))), Plug_jsx(your_plants_style["l" /* ListItem */], null, Plug_jsx(your_plants_style["m" /* ListTitle */], null, Plug_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, Plug_jsx(external_react_intl_["FormattedMessage"], {
    id: "irrigationEvacuationTimeId",
    defaultMessage: "irrigationEvacuationTimeId"
  }))), Plug_jsx(your_plants_style["k" /* ListDes */], null, Plug_jsx(input["a" /* Input */], {
    type: "number",
    name: "relayTwoAutomatedTimeToRun",
    value: setting.relayTwoAutomatedTimeToRun,
    onChange: e => handleSettingsChange(plant, 'relayTwoAutomatedTimeToRun', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px"
  })))), (setting === null || setting === void 0 ? void 0 : (_setting$logs = setting.logs) === null || _setting$logs === void 0 ? void 0 : _setting$logs.length) > 0 && Plug_jsx(humidity_logs_graph, {
    data: setting.logs
  }));
};

/* harmony default export */ var sensors_Plug = (Plug);
// CONCATENATED MODULE: ./src/features/your-plants/sensors/DistanceSensor.tsx
var DistanceSensor_jsx = external_react_default.a.createElement;

function DistanceSensor_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function DistanceSensor_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { DistanceSensor_ownKeys(Object(source), true).forEach(function (key) { DistanceSensor_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { DistanceSensor_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function DistanceSensor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const DistanceSensor = ({
  plant,
  settingType,
  handleSettingsChange,
  onDeleteSchedule,
  data,
  openTab,
  setOpenTab,
  handleDeleteSensor,
  errorId
}) => {
  var _setting$logs;

  const setting = plant.sensors.find(sensor => sensor.settingType === settingType);
  const intl = Object(external_react_intl_["useIntl"])();
  const {
    0: daySelected,
    1: setDay
  } = Object(external_react_["useState"])('');
  const {
    0: editIsOn,
    1: setEditIsOn
  } = Object(external_react_["useState"])(false);
  const selectedMode = constant["j" /* distanceModeOptions */].find(option => option.value === setting.mode);
  const selectedManualState = constant["n" /* manualModeOptions */].find(option => option.value === setting.relayOneWorking);
  const relayOneSelected = constant["k" /* fourRelaysOptions */].find(option => option.value === setting.relayOneIdRelated);
  const relayTwoSelected = constant["k" /* fourRelaysOptions */].find(option => option.value === setting.relayTwoIdRelated);
  const selectStyle = {
    control: styles => DistanceSensor_objectSpread(DistanceSensor_objectSpread({}, styles), {}, {
      width: '179.88px',
      textAlign: 'left'
    })
  }; // const tabIsOpen = openTab === settingType;

  const tabIsOpen = true;

  const handleModal = (modalComponent, modalProps = {}, className = 'add-time-schedule-modal') => {
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

  return DistanceSensor_jsx(your_plants_style["r" /* PlantsSensorContainer */], {
    style: {
      height: tabIsOpen ? '100%' : '82px'
    },
    onClick: () => setOpenTab(tabIsOpen ? '' : settingType)
  }, DistanceSensor_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, DistanceSensor_jsx(your_plants_style["m" /* ListTitle */], null, DistanceSensor_jsx(your_plants_style["C" /* Type */], {
    bold: true
  }, getSettingTypeText(setting === null || setting === void 0 ? void 0 : setting.settingType))), DistanceSensor_jsx(your_plants_style["k" /* ListDes */], {
    style: {
      marginLeft: '-10px'
    }
  }, DistanceSensor_jsx(your_plants_style["e" /* CardButtons */], {
    className: "button-wrapper"
  }, editIsOn ? DistanceSensor_jsx(your_plants_style["a" /* ActionButton */], {
    onClick: () => setEditIsOn(!editIsOn),
    className: "edit-btn"
  }, DistanceSensor_jsx(CheckMark["a" /* CheckMark */], null)) : DistanceSensor_jsx(your_plants_style["a" /* ActionButton */], {
    onClick: () => setEditIsOn(!editIsOn),
    className: "edit-btn"
  }, DistanceSensor_jsx(PencilIcon["a" /* PencilIcon */], null)), DistanceSensor_jsx(your_plants_style["a" /* ActionButton */], {
    onClick: () => handleDeleteSensor(plant, settingType),
    className: "delete-btn"
  }, DistanceSensor_jsx(CloseIcon["a" /* CloseIcon */], null))))), (setting === null || setting === void 0 ? void 0 : setting.mode) === constant["c" /* DistanceMode */].NONE && !!openTab && DistanceSensor_jsx(your_plants_style["l" /* ListItem */], null, DistanceSensor_jsx(your_plants_style["z" /* Status */], null, DistanceSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "modoRequiredWarningText",
    defaultMessage: "modoRequiredWarningText"
  }))), DistanceSensor_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, DistanceSensor_jsx(your_plants_style["m" /* ListTitle */], null, DistanceSensor_jsx(your_plants_style["A" /* Text */], null, DistanceSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "distanceId",
    defaultMessage: "distanceId"
  }))), DistanceSensor_jsx(your_plants_style["k" /* ListDes */], null, DistanceSensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, (setting === null || setting === void 0 ? void 0 : setting.reading) > 0 && (setting === null || setting === void 0 ? void 0 : setting.reading) < 100 ? (setting === null || setting === void 0 ? void 0 : setting.reading) + 'cm.' : '-', " "))), DistanceSensor_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, DistanceSensor_jsx(your_plants_style["m" /* ListTitle */], null, DistanceSensor_jsx(your_plants_style["A" /* Text */], null, DistanceSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "plantName",
    defaultMessage: "plantName"
  }))), DistanceSensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? DistanceSensor_jsx(input["a" /* Input */], {
    type: "text",
    name: "name",
    value: setting.name,
    placeholder: intl.formatMessage({
      id: 'plantNameRequiredNameId',
      defaultMessage: 'plantNameRequiredNameId'
    }),
    onChange: e => handleSettingsChange(plant, 'name', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px" // intlInputLabelId="profileEmailField"

  }) : DistanceSensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, setting === null || setting === void 0 ? void 0 : setting.name))), DistanceSensor_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, DistanceSensor_jsx(your_plants_style["m" /* ListTitle */], null, DistanceSensor_jsx(your_plants_style["A" /* Text */], null, DistanceSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "distanceModeId",
    defaultMessage: "distanceModeId"
  }))), DistanceSensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? DistanceSensor_jsx(external_react_select_default.a, {
    onChange: e => handleSettingsChange(plant, 'mode', e.value, settingType),
    value: selectedMode // placeholder={'asdsad'}
    ,
    options: constant["j" /* distanceModeOptions */],
    styles: selectStyle,
    menuPosition: 'fixed'
  }) : DistanceSensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, selectedMode.value.length > 1 ? selectedMode.label : '-'))), (setting === null || setting === void 0 ? void 0 : setting.mode) !== constant["c" /* DistanceMode */].NONE && DistanceSensor_jsx(your_plants_style["l" /* ListItem */], {
    style: {
      justifyContent: 'flex-start'
    }
  }, DistanceSensor_jsx(your_plants_style["m" /* ListTitle */], null, DistanceSensor_jsx(your_plants_style["A" /* Text */], null, DistanceSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "notifyChangesId",
    defaultMessage: "notifyChangesId"
  }))), DistanceSensor_jsx(your_plants_style["k" /* ListDes */], null, DistanceSensor_jsx(switch_switch["a" /* default */], {
    disabled: (setting === null || setting === void 0 ? void 0 : setting.mode) === constant["c" /* DistanceMode */].MIN_WARNING || (setting === null || setting === void 0 ? void 0 : setting.mode) === constant["c" /* DistanceMode */].MAX_WARNING ? true : false,
    checked: setting.whatsappWarningsOn || (setting === null || setting === void 0 ? void 0 : setting.mode) === constant["c" /* DistanceMode */].MIN_WARNING || (setting === null || setting === void 0 ? void 0 : setting.mode) === constant["c" /* DistanceMode */].MAX_WARNING,
    labelPosition: 'right' // className,
    ,
    onUpdate: () => handleSettingsChange(plant, 'whatsappWarningsOn', !setting.whatsappWarningsOn, settingType)
  }))), (setting === null || setting === void 0 ? void 0 : setting.mode) === constant["c" /* DistanceMode */].MIN_WARNING && DistanceSensor_jsx(your_plants_style["l" /* ListItem */], null, DistanceSensor_jsx(your_plants_style["m" /* ListTitle */], null, DistanceSensor_jsx(your_plants_style["A" /* Text */], null, DistanceSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "minDistanceId",
    defaultMessage: "minDistanceId"
  }))), DistanceSensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? DistanceSensor_jsx(your_plants_style["u" /* Row */], null, DistanceSensor_jsx(input["a" /* Input */], {
    type: "number",
    name: "minWarning",
    value: setting.minWarning,
    onChange: e => handleSettingsChange(plant, 'minWarning', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px",
    width: "45px"
  }), DistanceSensor_jsx(your_plants_style["t" /* Porcentage */], null, "%")) : DistanceSensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, setting.minWarning)), errorId === 'minWarning' && DistanceSensor_jsx(your_plants_style["i" /* ErrorMsg */], null, DistanceSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "minMaxWarningId",
    defaultMessage: "minMaxWarningId"
  }))), (setting === null || setting === void 0 ? void 0 : setting.mode) === constant["c" /* DistanceMode */].MAX_WARNING && DistanceSensor_jsx(your_plants_style["l" /* ListItem */], null, DistanceSensor_jsx(your_plants_style["m" /* ListTitle */], null, DistanceSensor_jsx(your_plants_style["A" /* Text */], null, DistanceSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "maxDistanceId",
    defaultMessage: "maxDistanceId"
  }))), DistanceSensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? DistanceSensor_jsx(your_plants_style["u" /* Row */], null, DistanceSensor_jsx(input["a" /* Input */], {
    type: "number",
    name: "maxWarning",
    value: setting.maxWarning,
    onChange: e => handleSettingsChange(plant, 'maxWarning', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px",
    width: "45px"
  }), DistanceSensor_jsx(your_plants_style["t" /* Porcentage */], null, "%")) : DistanceSensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, setting.maxWarning), errorId === 'maxWarning' && DistanceSensor_jsx(your_plants_style["i" /* ErrorMsg */], null, DistanceSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "minMaxWarningId",
    defaultMessage: "minMaxWarningId"
  })))), ((setting === null || setting === void 0 ? void 0 : setting.mode) === constant["c" /* DistanceMode */].MIN_WARNING || (setting === null || setting === void 0 ? void 0 : setting.mode) === constant["c" /* DistanceMode */].MAX_WARNING) && DistanceSensor_jsx(your_plants_style["l" /* ListItem */], null, DistanceSensor_jsx(your_plants_style["m" /* ListTitle */], null, DistanceSensor_jsx(your_plants_style["A" /* Text */], null, DistanceSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "timeWithoutNotice",
    defaultMessage: "timeWithoutNotice"
  }))), DistanceSensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? DistanceSensor_jsx(your_plants_style["u" /* Row */], null, DistanceSensor_jsx(input["a" /* Input */], {
    type: "number",
    name: "relayTwoAutomatedStartedTime",
    value: setting.relayTwoAutomatedStartedTime,
    onChange: e => handleSettingsChange(plant, 'relayTwoAutomatedStartedTime', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px",
    width: "45px"
  }), DistanceSensor_jsx(your_plants_style["t" /* Porcentage */], null, "mins")) : DistanceSensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, setting.relayTwoAutomatedStartedTime))), [constant["c" /* DistanceMode */].WHEN_FULL_ACTION_CUSTOM, constant["c" /* DistanceMode */].WHEN_FULL_ACTION_AUTOMATED].indexOf(setting.mode) >= 0 && DistanceSensor_jsx(external_react_default.a.Fragment, null, (setting === null || setting === void 0 ? void 0 : setting.mode) === constant["c" /* DistanceMode */].WHEN_FULL_ACTION_AUTOMATED && DistanceSensor_jsx(your_plants_style["l" /* ListItem */], null, DistanceSensor_jsx(your_plants_style["m" /* ListTitle */], null, DistanceSensor_jsx(your_plants_style["A" /* Text */], null, DistanceSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "minDistanceId",
    defaultMessage: "minDistanceId"
  }))), DistanceSensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? DistanceSensor_jsx(your_plants_style["u" /* Row */], null, DistanceSensor_jsx(input["a" /* Input */], {
    type: "number",
    name: "minWarning",
    value: setting.minWarning,
    onChange: e => handleSettingsChange(plant, 'minWarning', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px",
    width: "45px"
  }), DistanceSensor_jsx(your_plants_style["t" /* Porcentage */], null, "%")) : DistanceSensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, setting.minWarning)), errorId === 'minWarning' && DistanceSensor_jsx(your_plants_style["i" /* ErrorMsg */], null, DistanceSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "minMaxWarningId",
    defaultMessage: "minMaxWarningId"
  }))), DistanceSensor_jsx(your_plants_style["l" /* ListItem */], null, DistanceSensor_jsx(your_plants_style["m" /* ListTitle */], null, DistanceSensor_jsx(your_plants_style["A" /* Text */], null, DistanceSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "maxDistanceId",
    defaultMessage: "maxDistanceId"
  }))), DistanceSensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? DistanceSensor_jsx(your_plants_style["u" /* Row */], null, DistanceSensor_jsx(input["a" /* Input */], {
    type: "number",
    name: "maxWarning",
    value: setting.maxWarning,
    onChange: e => handleSettingsChange(plant, 'maxWarning', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px",
    width: "45px"
  }), DistanceSensor_jsx(your_plants_style["t" /* Porcentage */], null, "%")) : DistanceSensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, setting.maxWarning), errorId === 'maxWarning' && DistanceSensor_jsx(your_plants_style["i" /* ErrorMsg */], null, DistanceSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "minMaxWarningId",
    defaultMessage: "minMaxWarningId"
  })))), (setting === null || setting === void 0 ? void 0 : setting.mode) === constant["c" /* DistanceMode */].WHEN_FULL_ACTION_CUSTOM && DistanceSensor_jsx(your_plants_style["l" /* ListItem */], null, DistanceSensor_jsx(your_plants_style["m" /* ListTitle */], null, DistanceSensor_jsx(your_plants_style["A" /* Text */], null, DistanceSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "runingMinMaxWarningTimeId",
    defaultMessage: "runingMinMaxWarningTimeId"
  }))), DistanceSensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? DistanceSensor_jsx(your_plants_style["u" /* Row */], null, DistanceSensor_jsx(input["a" /* Input */], {
    type: "number",
    name: "relayOneAutomatedTimeToRun",
    value: setting.relayOneAutomatedTimeToRun,
    onChange: e => handleSettingsChange(plant, 'relayOneAutomatedTimeToRun', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px",
    width: "45px"
  }), DistanceSensor_jsx(your_plants_style["t" /* Porcentage */], null, "mins.")) : DistanceSensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, setting.relayOneAutomatedTimeToRun))), DistanceSensor_jsx(your_plants_style["l" /* ListItem */], null, DistanceSensor_jsx(your_plants_style["m" /* ListTitle */], null, DistanceSensor_jsx(your_plants_style["A" /* Text */], null, DistanceSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "asociateRelayTwoId",
    defaultMessage: "asociateRelayTwoId"
  }))), DistanceSensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? DistanceSensor_jsx(external_react_select_default.a, {
    onChange: e => handleSettingsChange(plant, 'relayTwoIdRelated', e.value, settingType),
    value: relayTwoSelected,
    options: constant["k" /* fourRelaysOptions */],
    styles: selectStyle,
    menuPosition: 'fixed'
  }) : DistanceSensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, (setting === null || setting === void 0 ? void 0 : setting.relayTwoIdRelated.length) > 1 ? getRelayNameText(setting === null || setting === void 0 ? void 0 : setting.relayTwoIdRelated) : '-')))), [constant["c" /* DistanceMode */].WHEN_EMPTY_ACTION_CUSTOM, constant["c" /* DistanceMode */].WHEN_EMPTY_ACTION_AUTOMATED].indexOf(setting.mode) >= 0 && DistanceSensor_jsx(external_react_default.a.Fragment, null, DistanceSensor_jsx(your_plants_style["l" /* ListItem */], null, DistanceSensor_jsx(your_plants_style["m" /* ListTitle */], null, DistanceSensor_jsx(your_plants_style["A" /* Text */], null, DistanceSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "minDistanceId",
    defaultMessage: "minDistanceId"
  }))), DistanceSensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? DistanceSensor_jsx(your_plants_style["u" /* Row */], null, DistanceSensor_jsx(input["a" /* Input */], {
    type: "number",
    name: "minWarning",
    value: setting.minWarning,
    onChange: e => handleSettingsChange(plant, 'minWarning', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px",
    width: "45px"
  }), DistanceSensor_jsx(your_plants_style["t" /* Porcentage */], null, "%")) : DistanceSensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, setting.minWarning)), errorId === 'minWarning' && DistanceSensor_jsx(your_plants_style["i" /* ErrorMsg */], null, DistanceSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "minMaxWarningId",
    defaultMessage: "minMaxWarningId"
  }))), (setting === null || setting === void 0 ? void 0 : setting.mode) === constant["c" /* DistanceMode */].WHEN_EMPTY_ACTION_AUTOMATED && DistanceSensor_jsx(your_plants_style["l" /* ListItem */], null, DistanceSensor_jsx(your_plants_style["m" /* ListTitle */], null, DistanceSensor_jsx(your_plants_style["A" /* Text */], null, DistanceSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "maxDistanceId",
    defaultMessage: "maxDistanceId"
  }))), DistanceSensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? DistanceSensor_jsx(your_plants_style["u" /* Row */], null, DistanceSensor_jsx(input["a" /* Input */], {
    type: "number",
    name: "maxWarning",
    value: setting.maxWarning,
    onChange: e => handleSettingsChange(plant, 'maxWarning', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px",
    width: "45px"
  }), DistanceSensor_jsx(your_plants_style["t" /* Porcentage */], null, "%")) : DistanceSensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, setting.maxWarning), errorId === 'maxWarning' && DistanceSensor_jsx(your_plants_style["i" /* ErrorMsg */], null, DistanceSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "minMaxWarningId",
    defaultMessage: "minMaxWarningId"
  })))), (setting === null || setting === void 0 ? void 0 : setting.mode) === constant["c" /* DistanceMode */].WHEN_EMPTY_ACTION_CUSTOM && DistanceSensor_jsx(your_plants_style["l" /* ListItem */], null, DistanceSensor_jsx(your_plants_style["m" /* ListTitle */], null, DistanceSensor_jsx(your_plants_style["A" /* Text */], null, DistanceSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "runingMinMaxWarningTimeId",
    defaultMessage: "runingMinMaxWarningTimeId"
  }))), DistanceSensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? DistanceSensor_jsx(your_plants_style["u" /* Row */], null, DistanceSensor_jsx(input["a" /* Input */], {
    type: "number",
    name: "relayOneAutomatedTimeToRun",
    value: setting.relayOneAutomatedTimeToRun,
    onChange: e => handleSettingsChange(plant, 'relayOneAutomatedTimeToRun', e.target.value, settingType),
    backgroundColor: "#F7F7F7",
    height: "34.5px",
    width: "45px"
  }), DistanceSensor_jsx(your_plants_style["t" /* Porcentage */], null, "mins.")) : DistanceSensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, setting.relayOneAutomatedTimeToRun))), DistanceSensor_jsx(your_plants_style["l" /* ListItem */], null, DistanceSensor_jsx(your_plants_style["m" /* ListTitle */], null, DistanceSensor_jsx(your_plants_style["A" /* Text */], null, DistanceSensor_jsx(external_react_intl_["FormattedMessage"], {
    id: "asociateRelayOneId",
    defaultMessage: "asociateRelayOneId"
  }))), DistanceSensor_jsx(your_plants_style["k" /* ListDes */], null, editIsOn ? DistanceSensor_jsx(external_react_select_default.a, {
    onChange: e => handleSettingsChange(plant, 'relayOneIdRelated', e.value, settingType),
    value: relayOneSelected,
    options: constant["k" /* fourRelaysOptions */],
    styles: selectStyle,
    menuPosition: 'fixed'
  }) : DistanceSensor_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, (setting === null || setting === void 0 ? void 0 : setting.relayOneIdRelated.length) > 1 ? getRelayNameText(setting === null || setting === void 0 ? void 0 : setting.relayOneIdRelated) : '-')))), (setting === null || setting === void 0 ? void 0 : (_setting$logs = setting.logs) === null || _setting$logs === void 0 ? void 0 : _setting$logs.length) > 0 && DistanceSensor_jsx(humidity_logs_graph, {
    data: setting.logs
  }));
};

/* harmony default export */ var sensors_DistanceSensor = (DistanceSensor);
// EXTERNAL MODULE: ./src/contexts/auth/auth.context.tsx
var auth_context = __webpack_require__("QfjN");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./src/utils/ditto-bot.ts

const getSensorWithoutNumber = settingType => {
  if (!isNaN(Number(settingType[settingType.length - 1]))) {
    return settingType.substring(0, settingType.length - 2);
  }

  console.log('didnt work');
};
const getLastNumOfSensor = settingType => {
  if (!isNaN(Number(settingType[settingType.length - 1]))) {
    return Number(settingType.substring(settingType.length, settingType.length - 1));
  }

  console.log('didnt work 2');
};
const hasDittoBotUpdatedInLastMinute = lastTimeStamp => {
  const currentTimeMoment = external_moment_default()(new Date().toLocaleString('en-US', {
    timeZone: 'America/Argentina/Buenos_Aires'
  }));
  const lastTimeStampMoment = external_moment_default()(new Date(lastTimeStamp));
  const lastTimestampInMins = currentTimeMoment === null || currentTimeMoment === void 0 ? void 0 : currentTimeMoment.diff(lastTimeStampMoment, 'minutes'); // we are updating acutally every 5 seconds, but just in case we check if in the last minute there was any conection

  return lastTimestampInMins < 1;
};
// CONCATENATED MODULE: ./src/features/your-plants/your-plants.tsx
var your_plants_jsx = external_react_default.a.createElement;

function your_plants_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function your_plants_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { your_plants_ownKeys(Object(source), true).forEach(function (key) { your_plants_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { your_plants_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function your_plants_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























const YourPlants = ({
  deviceType,
  userRefetch
}) => {
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(profile_context["a" /* ProfileContext */]);
  const {
    authDispatch
  } = Object(external_react_["useContext"])(auth_context["a" /* AuthContext */]);
  const {
    loading,
    error,
    data = {}
  } = Object(react_hooks_["useQuery"])(customer_query["a" /* GET_LOGGED_IN_USER */], {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "no-cache" // pollInterval: 5000,

  }); // const router = useRouter();

  const intl = Object(external_react_intl_["useIntl"])();
  const {
    0: name,
    1: setPlantName
  } = Object(external_react_["useState"])('');
  const {
    0: openTab,
    1: setOpenTab
  } = Object(external_react_["useState"])('');
  const {
    0: errorId,
    1: setErrorId
  } = Object(external_react_["useState"])('');
  const {
    0: plantId,
    1: setControllerID
  } = Object(external_react_["useState"])('');
  const {
    0: userinfoMsg,
    1: setUserinfoMsg
  } = Object(external_react_["useState"])('');
  const {
    0: sensorSelected,
    1: setSensor
  } = Object(external_react_["useState"])('');
  const [addPlant] = Object(react_hooks_["useMutation"])(ADD_PLANT);
  const [updateSetting] = Object(react_hooks_["useMutation"])(UPDATE_SETTING);
  const [deleteSetting] = Object(react_hooks_["useMutation"])(DELETE_SETTING);
  const {
    plants
  } = state;

  if (loading) {
    return your_plants_jsx(error_message["default"], {
      message: 'Cargando...'
    });
  }

  ;

  if (error) {
    return your_plants_jsx(error_message["default"], {
      message: error.message
    });
  }

  ;

  const isRelayIdAlreadyAssigend = (plant, field, value) => {
    const relayOneIdRelated = 'relayOneIdRelated';
    const relayTwoIdRelated = 'relayTwoIdRelated';
    if (field !== relayOneIdRelated && field !== relayTwoIdRelated) return false;
    let relayAlreadyAssigned = false;
    plant.sensors.map(sensor => {
      if ((sensor[relayOneIdRelated] === value || sensor[relayTwoIdRelated] === value) && value !== '') {
        const texto1 = intl.formatMessage({
          id: 'relayAlreadyAssinged',
          defaultMessage: 'Relay already assigned in '
        });
        const texto2 = intl.formatMessage({
          id: 'relayAlreadyAssinged2',
          defaultMessage: 'desigagned  '
        });
        alert(texto1 + sensor.name + texto2);
        relayAlreadyAssigned = true;
      }
    });
    return relayAlreadyAssigned;
  };

  const defaultSettingValuesIfModeChanges = (plant, field, value, settingType) => {
    const mode = 'mode';
    const relayOneIdRelated = 'relayOneIdRelated';
    const relayTwoIdRelated = 'relayTwoIdRelated';
    if (field !== mode) return plant; // if (value !== CommonMode.NONE) return plant;

    const settingIndex = plant.sensors.findIndex(sensor => sensor.settingType === settingType);
    plant.sensors[settingIndex] = getDefaultSetting(settingType, plant.sensors[settingIndex].name, plant.sensors[settingIndex].logs);
    return plant;
  };

  const isClean = (plant, field, value) => {
    // min max checks
    const minWarning = 'minWarning';
    const maxWarning = 'maxWarning';
    if (field !== minWarning && field !== maxWarning) return true;

    if (Number(value) < 0 || Number(value) > 100) {
      setErrorId(field);
      setTimeout(() => {
        setErrorId('');
      }, 2000);
      return false;
    }

    setErrorId(''); // add more checks

    return true;
  };

  const handleSettingsChange = (plant, field, value, settingType) => {
    if (isRelayIdAlreadyAssigend(plant, field, value)) return;
    plant = defaultSettingValuesIfModeChanges(plant, field, value, settingType);
    dispatch({
      type: settingType,
      payload: {
        plant,
        value,
        field
      }
    });
    isClean(plant, field, value) && dispatchSettingSave(plant, field, value, settingType);
    setUserinfoMsg('Update user info successfully');
    setTimeout(function () {
      setUserinfoMsg('');
    }, 8000);
  };

  const handleAddDittoBotClick = () => {
    var _data$getUser;

    addPlant({
      variables: {
        id: data === null || data === void 0 ? void 0 : (_data$getUser = data.getUser) === null || _data$getUser === void 0 ? void 0 : _data$getUser.id,
        name,
        plantId: Number(plantId)
      }
    });
    setUserinfoMsg('added plany successfully');
    setTimeout(function () {
      setUserinfoMsg('');
    }, 2000);
  };

  const handleUpdateDittoControllerName = (plant, name) => {
    setTimeout(function () {
      var _data$getUser2;

      addPlant({
        variables: {
          id: data === null || data === void 0 ? void 0 : (_data$getUser2 = data.getUser) === null || _data$getUser2 === void 0 ? void 0 : _data$getUser2.id,
          name,
          plantId: plant.plantId
        }
      });
    }, 2000);
    setUserinfoMsg('added plany successfully');
    setTimeout(function () {
      setUserinfoMsg('');
    }, 2000);
  };

  const handleDeleteSensor = (plantSelected, settingType) => {
    var _data$getUser3;

    deleteSetting({
      variables: {
        id: data === null || data === void 0 ? void 0 : (_data$getUser3 = data.getUser) === null || _data$getUser3 === void 0 ? void 0 : _data$getUser3.id,
        plantId: plantSelected.plantId,
        settingName: settingType
      }
    });
    const plantIndex = plants.findIndex(plant => plant.plantId === plantSelected.plantId);
    const settingIndex = plants[plantIndex].sensors.findIndex(sensor => sensor.settingType === settingType);
    dispatch({
      type: 'DELETE_SENSOR',
      payload: {
        plantIndex,
        settingIndex
      }
    });
    setUserinfoMsg('deleted setting successfully');
    setTimeout(function () {
      setUserinfoMsg('');
    }, 2000);
  };

  const onDeleteSchedule = (plant, settingType, scheduleIndex) => {
    var _plant$sensors$settin, _data$getUser4;

    const settingIndex = plant.sensors.findIndex(sensor => sensor.settingType === settingType);
    (_plant$sensors$settin = plant.sensors[settingIndex]) === null || _plant$sensors$settin === void 0 ? void 0 : _plant$sensors$settin.scheduledOnTimes.splice(scheduleIndex, 1);
    updateSetting({
      variables: {
        id: data === null || data === void 0 ? void 0 : (_data$getUser4 = data.getUser) === null || _data$getUser4 === void 0 ? void 0 : _data$getUser4.id,
        plantId: plant.plantId,
        input: your_plants_objectSpread(your_plants_objectSpread({}, plant.sensors[settingIndex]), {}, {
          settingType: settingType
        })
      }
    });
    setUserinfoMsg('deleted schedule successfully');
    setTimeout(function () {
      setUserinfoMsg('');
    }, 2000);
  };

  const getDefaultSetting = (settingTypeName, name, logs) => {
    return {
      name: name || '',
      whatsappWarningsOn: false,
      maxWarning: '',
      minWarning: '',
      mode: constant["b" /* CommonMode */].NONE,
      relayOneAutomatedTimeToRun: '',
      relayTwoAutomatedStartedTime: '',
      relayOneAutomatedStartedTime: '',
      relayOneIdRelated: '',
      relayOneWorking: false,
      relayTwoAutomatedTimeToRun: '',
      relayTwoIdRelated: '',
      relayTwoWorking: false,
      logs: logs || [],
      scheduledOnTimes: [],
      settingType: settingTypeName
    };
  };

  const dispatchSettingSave = (plant, fieldName, fieldValue, settingType) => {
    var _data$getUser5;

    const settingIndex = plant.sensors.findIndex(sensor => sensor.settingType === settingType);
    plant.sensors[settingIndex][fieldName] = fieldValue;
    updateSetting({
      variables: {
        id: data === null || data === void 0 ? void 0 : (_data$getUser5 = data.getUser) === null || _data$getUser5 === void 0 ? void 0 : _data$getUser5.id,
        plantId: plant.plantId,
        input: plant.sensors[settingIndex]
      }
    });
  };

  const getSensorCompleteName = (plant, settingType) => {
    var _plant$sensors;

    let sensorNewNumber = 1;
    plant === null || plant === void 0 ? void 0 : (_plant$sensors = plant.sensors) === null || _plant$sensors === void 0 ? void 0 : _plant$sensors.map(sensor => {
      let lastSensorNum = getLastNumOfSensor(sensor.settingType);
      const rawSensorTypeName = getSensorWithoutNumber(sensor === null || sensor === void 0 ? void 0 : sensor.settingType);

      if (!isNaN(lastSensorNum) && rawSensorTypeName === settingType) {
        sensorNewNumber = lastSensorNum + 1;
      }
    });
    return `${settingType}_${sensorNewNumber}`;
  };

  const dispatchNewSettingSave = (plant, settingType, plantIndex) => {
    var _data$getUser6;

    const completeSensorTypeName = getSensorCompleteName(plant, settingType);
    updateSetting({
      variables: {
        id: data === null || data === void 0 ? void 0 : (_data$getUser6 = data.getUser) === null || _data$getUser6 === void 0 ? void 0 : _data$getUser6.id,
        plantId: plant.plantId,
        input: getDefaultSetting(completeSensorTypeName)
      }
    });
    dispatch({
      type: 'ADD_SENSOR',
      payload: {
        plantIndex,
        setting: getDefaultSetting(completeSensorTypeName)
      }
    });
  };

  const selectStyle = {
    control: styles => your_plants_objectSpread(your_plants_objectSpread({}, styles), {}, {
      width: '197px',
      textAlign: 'left'
    })
  };
  const sensorsOptions = [{
    value: constant["h" /* SensorsTypes */].DISTANCE,
    label: intl.formatMessage({
      id: 'distanceId',
      defaultMessage: 'distanceId'
    })
  }, {
    value: constant["h" /* SensorsTypes */].SOIL_HUMIDITY,
    label: intl.formatMessage({
      id: 'moistHumidityId',
      defaultMessage: 'moistHumidityId'
    })
  }, {
    value: constant["h" /* SensorsTypes */].HUMIDITY_TEMPETURE,
    label: intl.formatMessage({
      id: 'airHumidityAndTempetureId',
      defaultMessage: 'airHumidityAndTempetureId'
    })
  }, {
    value: constant["h" /* SensorsTypes */].LIGHT,
    label: intl.formatMessage({
      id: 'lightSensorId',
      defaultMessage: 'lightSensorId'
    })
  }, {
    value: constant["h" /* SensorsTypes */].PLUG,
    label: intl.formatMessage({
      id: 'intelligentPlugId',
      defaultMessage: 'intelligentPlugId'
    })
  }];
  return your_plants_jsx(your_plants_style["o" /* PlantPageWrapper */], null, your_plants_jsx(your_plants_style["p" /* PlantsPageContainer */], {
    style: {
      width: '100%'
    }
  }, your_plants_jsx(link_default.a, {
    href: "/profile"
  }, your_plants_jsx("a", {
    className: "home-btn"
  }, your_plants_jsx(external_react_intl_["FormattedMessage"], {
    id: "backProfileBtn",
    defaultMessage: "Back to Profile"
  }))), your_plants_jsx(your_plants_style["n" /* OrderDetails */], null, your_plants_jsx(your_plants_style["c" /* BlockTitle */], null, your_plants_jsx(external_react_intl_["FormattedMessage"], {
    id: "dittoBotsIds",
    defaultMessage: "dittoBotsIds"
  })), (plants === null || plants === void 0 ? void 0 : plants.length) < 1 && your_plants_jsx(your_plants_style["A" /* Text */], null, intl.formatMessage({
    id: 'noDittoBotsTextId',
    defaultMessage: 'noDittoBotsTextId'
  })), plants === null || plants === void 0 ? void 0 : plants.map((plant, i) => {
    const {
      sensors
    } = plant;
    console.log('plant.timestamp:::', plant.timestamp);
    return your_plants_jsx(your_plants_style["s" /* PlantsWrapper */], {
      key: i + '-orderList'
    }, your_plants_jsx(your_plants_style["v" /* Row1 */], null, your_plants_jsx(your_plants_style["f" /* Column1 */], null, your_plants_jsx(your_plants_style["l" /* ListItem */], null, your_plants_jsx(your_plants_style["m" /* ListTitle */], null, your_plants_jsx(your_plants_style["A" /* Text */], {
      bold: true
    }, your_plants_jsx(external_react_intl_["FormattedMessage"], {
      id: "controllerNameId",
      defaultMessage: "controllerNameId"
    }))), your_plants_jsx(your_plants_style["k" /* ListDes */], null, your_plants_jsx(input["a" /* Input */], {
      type: "text",
      name: "name",
      disabled: true,
      value: plant === null || plant === void 0 ? void 0 : plant.name // we have to change the onChange because the is no one for the controller name actualy
      ,
      onChange: e => handleUpdateDittoControllerName(plant, e.target.value),
      backgroundColor: "#F7F7F7",
      width: "197px",
      height: "34.5px"
    }))), your_plants_jsx(your_plants_style["l" /* ListItem */], null, your_plants_jsx(your_plants_style["m" /* ListTitle */], null, your_plants_jsx(your_plants_style["A" /* Text */], {
      bold: true
    }, your_plants_jsx(external_react_intl_["FormattedMessage"], {
      id: "statusId",
      defaultMessage: "statusId"
    }))), your_plants_jsx(your_plants_style["k" /* ListDes */], null, your_plants_jsx(your_plants_style["A" /* Text */], null, external_moment_default()(plant.timestamp).format('hh:mm A - DD MMM'), " ", hasDittoBotUpdatedInLastMinute(plant.timestamp) ? '[ONLINE]' : '[OFFLINE]'))), your_plants_jsx(your_plants_style["l" /* ListItem */], {
      style: {
        justifyContent: 'flex-start'
      }
    }, your_plants_jsx(your_plants_style["m" /* ListTitle */], null, your_plants_jsx(your_plants_style["A" /* Text */], {
      bold: true
    }, your_plants_jsx(external_react_intl_["FormattedMessage"], {
      id: "addSensorId",
      defaultMessage: "addSensorId"
    }))), your_plants_jsx(your_plants_style["k" /* ListDes */], null, your_plants_jsx(external_react_select_default.a, {
      onChange: e => dispatchNewSettingSave(plant, e.value, i),
      value: sensorSelected // @ts-ignore
      ,
      options: sensorsOptions,
      styles: selectStyle,
      menuPosition: 'fixed'
    }))))), sensors === null || sensors === void 0 ? void 0 : sensors.map(sensor => {
      switch (sensor === null || sensor === void 0 ? void 0 : sensor.settingType) {
        case `${constant["h" /* SensorsTypes */].SOIL_HUMIDITY}_1`:
        case `${constant["h" /* SensorsTypes */].SOIL_HUMIDITY}_2`:
        case `${constant["h" /* SensorsTypes */].SOIL_HUMIDITY}_3`:
          // check the number of same setting to send
          return your_plants_jsx(sensors_SoilHumiditySensor, {
            key: i + sensor.settingType,
            data: data,
            plant: plant,
            errorId: errorId,
            openTab: openTab,
            handleDeleteSensor: handleDeleteSensor,
            setOpenTab: setOpenTab,
            settingType: sensor.settingType,
            handleSettingsChange: handleSettingsChange,
            onDeleteSchedule: onDeleteSchedule
          });

        case `${constant["h" /* SensorsTypes */].LIGHT}_1`:
          return your_plants_jsx(sensors_LightSensor, {
            key: i + sensor.settingType,
            data: data,
            plant: plant,
            handleDeleteSensor: handleDeleteSensor,
            openTab: openTab,
            setOpenTab: setOpenTab,
            settingType: sensor.settingType,
            handleSettingsChange: handleSettingsChange,
            onDeleteSchedule: onDeleteSchedule
          });

        case `${constant["h" /* SensorsTypes */].DISTANCE}_1`:
          return your_plants_jsx(sensors_DistanceSensor, {
            key: i + sensor.settingType,
            data: data,
            plant: plant,
            errorId: errorId,
            handleDeleteSensor: handleDeleteSensor,
            openTab: openTab,
            setOpenTab: setOpenTab,
            settingType: sensor.settingType,
            handleSettingsChange: handleSettingsChange,
            onDeleteSchedule: onDeleteSchedule
          });

        case `${constant["h" /* SensorsTypes */].PLUG}_1`:
          return your_plants_jsx(sensors_Plug, {
            key: i + sensor.settingType,
            data: data,
            plant: plant,
            handleDeleteSensor: handleDeleteSensor,
            openTab: openTab,
            setOpenTab: setOpenTab,
            settingType: sensor.settingType,
            handleSettingsChange: handleSettingsChange,
            onDeleteSchedule: onDeleteSchedule
          });

        default:
          break;
      }
    }));
  }), userinfoMsg && your_plants_jsx(settings_style["h" /* SuccessMsg */], null, your_plants_jsx(external_react_intl_["FormattedMessage"], {
    id: "userInfoSuccess",
    defaultMessage: userinfoMsg
  })))), your_plants_jsx(your_plants_style["p" /* PlantsPageContainer */], {
    style: {
      width: '100%'
    }
  }, your_plants_jsx(your_plants_style["c" /* BlockTitle */], null, your_plants_jsx(external_react_intl_["FormattedMessage"], {
    id: "addController",
    defaultMessage: "Your Plants"
  })), your_plants_jsx(your_plants_style["l" /* ListItem */], null, your_plants_jsx(your_plants_style["m" /* ListTitle */], null, your_plants_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, your_plants_jsx(external_react_intl_["FormattedMessage"], {
    id: "plantNameField",
    defaultMessage: "Name of the plant"
  }))), your_plants_jsx(your_plants_style["k" /* ListDes */], null, your_plants_jsx(input["a" /* Input */], {
    type: "text",
    name: "name",
    value: name,
    onChange: e => setPlantName(e.target.value),
    placeholder: intl.formatMessage({
      id: 'plantNamePlaceholderId',
      defaultMessage: 'Balcony plants'
    }),
    backgroundColor: "#F7F7F7",
    width: "197px"
  }))), your_plants_jsx(your_plants_style["l" /* ListItem */], null, your_plants_jsx(your_plants_style["m" /* ListTitle */], null, your_plants_jsx(your_plants_style["A" /* Text */], {
    bold: true
  }, your_plants_jsx(external_react_intl_["FormattedMessage"], {
    id: "plantIdField",
    defaultMessage: "ID of the controller"
  }))), your_plants_jsx(your_plants_style["k" /* ListDes */], null, your_plants_jsx(input["a" /* Input */], {
    type: "number",
    name: "plantId",
    value: plantId,
    onChange: e => setControllerID(e.target.value),
    placeholder: intl.formatMessage({
      id: 'serialNumberPlaceholderId',
      defaultMessage: 'Look behind Ditto Bot'
    }),
    backgroundColor: "#F7F7F7",
    width: "197px"
  }))), your_plants_jsx(button_button["a" /* Button */], {
    className: "cart-button",
    variant: "secondary",
    borderRadius: 100,
    onClick: handleAddDittoBotClick
  }, your_plants_jsx(your_plants_style["d" /* ButtonText */], null, your_plants_jsx(external_react_intl_["FormattedMessage"], {
    id: "addDittoBotButton",
    defaultMessage: "Add plant"
  })))));
};

/* harmony default export */ var your_plants = (YourPlants);
// CONCATENATED MODULE: ./src/pages/your-plants.tsx

var pages_your_plants_jsx = external_react_default.a.createElement;










const YourPlantsPage = ({
  deviceType
}) => {
  const {
    loading,
    error,
    data = {},
    refetch: userRefetch
  } = Object(react_hooks_["useQuery"])(customer_query["a" /* GET_LOGGED_IN_USER */], {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "no-cache"
  });

  if (!data || loading) {
    return pages_your_plants_jsx("div", null, "loading...");
  }

  if (error) return pages_your_plants_jsx(error_message["default"], {
    message: error.message
  });
  return pages_your_plants_jsx(external_react_default.a.Fragment, null, pages_your_plants_jsx(seo["a" /* SEO */], {
    title: "Plants controller - Ditto",
    description: "Your plants"
  }), pages_your_plants_jsx(profile_provider["a" /* ProfileProvider */], {
    initData: data.getUser
  }, pages_your_plants_jsx(reuse_modal_["Modal"], null, pages_your_plants_jsx(your_plants_style["q" /* PlantsPageWrapper */], null, pages_your_plants_jsx(your_plants_style["y" /* SidebarSection */], null, pages_your_plants_jsx(sidebar["a" /* default */], null)), pages_your_plants_jsx(your_plants_style["g" /* ContentBox */], null, pages_your_plants_jsx(your_plants, {
    userRefetch: userRefetch,
    deviceType: deviceType
  }))))));
};

/* harmony default export */ var pages_your_plants = __webpack_exports__["default"] = (YourPlantsPage);

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

/***/ "vtRj":
/***/ (function(module, exports) {

module.exports = require("react-select");

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
      plantId
      name
      soil_humidity_1
      soil_humidity_2
      light
      airHumidity
      tempeture
      isRelayOneOn
      isRelayTwoOn
      isRelayThirdOn
      isRelayFourthOn
      timestamp
      sensors {
        reading
        name
        whatsappWarningsOn
        minWarning
        maxWarning
        reading
        mode
        relayOneAutomatedStartedTime
        relayOneAutomatedTimeToRun
        relayTwoAutomatedStartedTime
        relayTwoAutomatedTimeToRun
        relayOneIdRelated
        relayOneWorking
        relayTwoIdRelated
        relayTwoWorking
        settingType
        logs {
          timestamp
          reading
          started
          finished
        }
        scheduledOnTimes {
          daysToRepeat
          startTime
          endTime
          enabled
          smartLight
        }
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
      timestamp
    }
  }
}
`;

/***/ })

/******/ });