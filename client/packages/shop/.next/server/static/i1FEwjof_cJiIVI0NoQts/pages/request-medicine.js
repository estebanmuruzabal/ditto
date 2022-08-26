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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/JeY":
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("AzIi");


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

/***/ "6Bdc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: ./src/components/forms/text-field.tsx
var text_field = __webpack_require__("fWan");

// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./src/graphql/mutation/address.ts
var address = __webpack_require__("bQa+");

// EXTERNAL MODULE: ./src/components/address-card/address-card.style.tsx
var address_card_style = __webpack_require__("ViYO");

// EXTERNAL MODULE: ./src/contexts/profile/profile.context.tsx
var profile_context = __webpack_require__("p2kv");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/components/loader/loader.tsx
var __jsx = external_react_default.a.createElement;



const rotate = Object(external_styled_components_["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
const Spinner = external_styled_components_default.a.div.withConfig({
  displayName: "loader__Spinner",
  componentId: "phzp1h-0"
})(["width:24px;height:24px;border:4px solid ", ";border-top:3px solid ", ";border-radius:50%;transition-property:transform;animation-name:", ";animation-duration:1.2s;animation-iteration-count:infinite;animation-timing-function:linear;"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), props => props.color ? props.color : Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), rotate);

const Loader = color => {
  return __jsx(Spinner, color);
};

/* harmony default export */ var loader = (Loader);
// CONCATENATED MODULE: ./src/components/address-card/address-card.tsx
var address_card_jsx = external_react_default.a.createElement;











 // Shape of form values

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

const UpdateAddress = props => {
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
  const addressValue = {
    id: values.id,
    type: 'secondary',
    name: values.name,
    info: values.info
  };
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(profile_context["a" /* ProfileContext */]);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const [addressMutation, {
    data
  }] = Object(react_hooks_["useMutation"])(address["d" /* UPDATE_ADDRESS */]);
  const intl = Object(external_react_intl_["useIntl"])();

  const handleSubmit = async () => {
    if (isValid) {
      const addressData = await addressMutation({
        variables: {
          addressInput: JSON.stringify(addressValue)
        }
      });
      setLoading(true);
      dispatch({
        type: 'ADD_OR_UPDATE_ADDRESS',
        payload: addressValue
      });
      Object(reuse_modal_["closeModal"])();
      setLoading(false);
    }
  };

  return address_card_jsx(external_formik_["Form"], null, address_card_jsx(address_card_style["b" /* Heading */], null, address_card_jsx(address_card_style["b" /* Heading */], null, intl.formatMessage({
    id: (item === null || item === void 0 ? void 0 : item.id) ? 'editAddressId' : 'addNewAddressId',
    defaultMessage: 'Address name'
  }))), address_card_jsx(address_card_style["a" /* FieldWrapper */], null, address_card_jsx(text_field["a" /* default */], {
    id: "name",
    type: "text",
    placeholder: intl.formatMessage({
      id: 'addressRefId',
      defaultMessage: 'Address name'
    }),
    error: touched.name && errors.name,
    value: values.name,
    onChange: handleChange,
    onBlur: handleBlur
  })), address_card_jsx(address_card_style["a" /* FieldWrapper */], null, address_card_jsx(text_field["a" /* default */], {
    id: "info",
    as: "textarea",
    placeholder: "Enter Address",
    error: touched.info && errors.info,
    value: values.info,
    onChange: handleChange,
    onBlur: handleBlur
  })), address_card_jsx(button_button["a" /* Button */], {
    onClick: handleSubmit,
    type: "submit",
    style: {
      width: '100%',
      height: '44px'
    },
    loader: address_card_jsx(loader, null),
    isDisabled: loading,
    isLoading: loading
  }, address_card_jsx(external_react_intl_["FormattedMessage"], {
    id: "savedAddressId",
    defaultMessage: "Save Address"
  })));
};

/* harmony default export */ var address_card = __webpack_exports__["a"] = (FormEnhancer(UpdateAddress));

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

/***/ "AzIi":
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

// EXTERNAL MODULE: ./src/components/seo.tsx
var seo = __webpack_require__("H8eV");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// EXTERNAL MODULE: ./src/components/radio-card/radio-card.tsx
var radio_card = __webpack_require__("B3Fo");

// EXTERNAL MODULE: ./src/components/radio-group/radio-group.tsx
var radio_group = __webpack_require__("YBd4");

// EXTERNAL MODULE: ./src/components/forms/input.tsx
var input = __webpack_require__("VnWI");

// EXTERNAL MODULE: ./src/components/forms/label.tsx
var label = __webpack_require__("IdAm");

// EXTERNAL MODULE: external "react-dropzone"
var external_react_dropzone_ = __webpack_require__("aNEW");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/components/upload/upload.style.tsx


const Text = external_styled_components_default.a.span.withConfig({
  displayName: "uploadstyle__Text",
  componentId: "ruonmg-0"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-top:15px;text-align:center;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.label', '#909090'));
const TextHighlighted = external_styled_components_default.a.span.withConfig({
  displayName: "uploadstyle__TextHighlighted",
  componentId: "ruonmg-1"
})(["color:", ";"], Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const Container = external_styled_components_default.a.div.withConfig({
  displayName: "uploadstyle__Container",
  componentId: "ruonmg-2"
})(["width:100%;display:flex;flex-direction:column;align-items:center;padding:50px 30px;border:2px dashed ", ";background-color:", ";color:", ";outline:none;cursor:pointer;"], Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.gray.900', '#bdbdbd'));
const ThumbsContainer = external_styled_components_default.a.aside.withConfig({
  displayName: "uploadstyle__ThumbsContainer",
  componentId: "ruonmg-3"
})(["display:flex;flex-direction:row;flex-wrap:wrap;margin-top:16px;"]);
const Thumb = external_styled_components_default.a.div.withConfig({
  displayName: "uploadstyle__Thumb",
  componentId: "ruonmg-4"
})(["border:1px solid ", ";display:inline-flex;border-radius:2px;margin-bottom:8px;margin-right:8px;width:100px;height:100px;padding:4px;box-sizing:border-box;"], Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'));
const ThumbInner = external_styled_components_default.a.div.withConfig({
  displayName: "uploadstyle__ThumbInner",
  componentId: "ruonmg-5"
})(["display:flex;min-width:0;overflow:hidden;"]);
const Img = external_styled_components_default.a.img.withConfig({
  displayName: "uploadstyle__Img",
  componentId: "ruonmg-6"
})(["display:block;width:auto;height:100%;"]);
// EXTERNAL MODULE: ./src/assets/icons/UploadIcon.tsx
var UploadIcon = __webpack_require__("KKLf");

// CONCATENATED MODULE: ./src/components/upload/upload.tsx
var __jsx = external_react_default.a.createElement;






const Uploader = ({
  onChange,
  imageURL,
  intlUploadText
}) => {
  const {
    0: files,
    1: setFiles
  } = Object(external_react_["useState"])(imageURL ? [{
    name: 'demo',
    preview: imageURL
  }] : []);
  const {
    getRootProps,
    getInputProps
  } = Object(external_react_dropzone_["useDropzone"])({
    accept: 'image/*',
    multiple: false,
    onDrop: Object(external_react_["useCallback"])(acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      onChange(acceptedFiles);
    }, [onChange])
  });
  const thumbs = files.map(file => __jsx(Thumb, {
    key: file.name
  }, __jsx(ThumbInner, null, __jsx(Img, {
    src: file.preview,
    alt: file.name
  }))));
  Object(external_react_["useEffect"])(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);
  return __jsx("section", {
    className: "container uploader"
  }, __jsx(Container, getRootProps(), __jsx("input", getInputProps()), __jsx(UploadIcon["a" /* UploadIcon */], null), __jsx(Text, null, intlUploadText ? __jsx(external_react_intl_["FormattedMessage"], {
    id: intlUploadText
  }) : __jsx(external_react_default.a.Fragment, null, __jsx(TextHighlighted, null, "Drag/Upload"), " your file here"))), thumbs && __jsx(ThumbsContainer, null, thumbs));
};

/* harmony default export */ var upload = (Uploader);
// EXTERNAL MODULE: ./src/components/address-card/address-card.tsx + 1 modules
var address_card = __webpack_require__("6Bdc");

// EXTERNAL MODULE: ./src/components/contact-card/contact-card.tsx + 1 modules
var contact_card = __webpack_require__("6zwy");

// EXTERNAL MODULE: ./src/graphql/mutation/address.ts
var mutation_address = __webpack_require__("bQa+");

// EXTERNAL MODULE: ./src/graphql/mutation/card.ts
var card = __webpack_require__("4Jh2");

// EXTERNAL MODULE: ./src/graphql/mutation/contact.ts
var mutation_contact = __webpack_require__("fDRB");

// EXTERNAL MODULE: external "react-styled-flexboxgrid"
var external_react_styled_flexboxgrid_ = __webpack_require__("4a4h");

// CONCATENATED MODULE: ./src/features/request-product/request-product.style.tsx



const FormWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "request-productstyle__FormWrapper",
  componentId: "yc7v0b-0"
})(["background-color:", ";position:relative;padding:130px 0 60px 0;@media (max-width:990px){padding:0;padding-top:60px;}"], Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'));
const request_product_style_Container = external_styled_components_default.a.div.withConfig({
  displayName: "request-productstyle__Container",
  componentId: "yc7v0b-1"
})(["background-color:", ";border:1px solid ", ";padding:60px;border-radius:", ";overflow:hidden;position:relative;@media (min-width:990px){width:870px;margin-left:auto;margin-right:auto;}@media (max-width:480px){padding:30px;}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('radii.base', '6px'));
const FormTitleWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "request-productstyle__FormTitleWrapper",
  componentId: "yc7v0b-2"
})(["width:100%;display:flex;align-items:center;justify-content:center;margin-bottom:50px;"]);
const FormTitle = external_styled_components_default.a.h3.withConfig({
  displayName: "request-productstyle__FormTitle",
  componentId: "yc7v0b-3"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.2;margin:0px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.lg', '21'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const NoteText = external_styled_components_default.a.span.withConfig({
  displayName: "request-productstyle__NoteText",
  componentId: "yc7v0b-4"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.5;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const Heading = external_styled_components_default.a.h3.withConfig({
  displayName: "request-productstyle__Heading",
  componentId: "yc7v0b-5"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.2;margin-bottom:20px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const Col = external_styled_components_default()(external_react_styled_flexboxgrid_["Col"]).withConfig({
  displayName: "request-productstyle__Col",
  componentId: "yc7v0b-6"
})(["@media only screen and (min-width:0em) and (max-width:47.99em){margin-bottom:50px;&:last-child{margin-bottom:0;}}"]);
const Row = external_styled_components_default()(external_react_styled_flexboxgrid_["Row"]).withConfig({
  displayName: "request-productstyle__Row",
  componentId: "yc7v0b-7"
})(["margin-top:50px;@media only screen and (min-width:0em) and (max-width:47.99em){margin-bottom:30px;}"]);
const DeliverySchedule = external_styled_components_default.a.div.withConfig({
  displayName: "request-productstyle__DeliverySchedule",
  componentId: "yc7v0b-8"
})(["margin-top:60px;.radioGroup{justify-content:space-between;> label{margin-right:0;flex:calc(33.3333333333% - 10px);max-width:calc(33.3333333333% - 10px);padding:11px 15px;@media (max-width:700px){flex:calc(50% - 10px);max-width:calc(50% - 10px);}@media (max-width:480px){flex:100%;max-width:100%;margin-right:0;}}}"]);
const DeliveryAddress = external_styled_components_default.a.div.withConfig({
  displayName: "request-productstyle__DeliveryAddress",
  componentId: "yc7v0b-9"
})(["margin-top:30px;"]);
const ButtonGroup = external_styled_components_default.a.div.withConfig({
  displayName: "request-productstyle__ButtonGroup",
  componentId: "yc7v0b-10"
})(["display:flex;flex-direction:column;.radioGroup{flex-grow:1;justify-content:space-between;label{margin-top:0;flex:calc(33.333333333% - 10px);max-width:calc(33.333333333% - 10px);margin-bottom:15px;&:nth-child(3n){margin-right:0;}@media (max-width:700px){flex:calc(50% - 10px);max-width:calc(50% - 10px);&:nth-child(3n){margin-right:15px;}&:nth-child(2n){margin-right:0;}}@media (max-width:480px){flex:100%;max-width:100%;margin-right:0;&:nth-child(3n){margin-right:0;}&:nth-child(2n){margin-right:0;}}}}.add-button{flex:calc(33.3333333333% - 10px);max-width:calc(33.3333333333% - 10px);flex-shrink:0;height:auto;min-height:77px;border:1px dashed ", ";margin-bottom:15px;margin-left:0;margin-right:auto;&:hover{border-color:", ";}@media (max-width:700px){flex:calc(50% - 10px);max-width:calc(50% - 10px);}@media (max-width:480px){flex:100%;max-width:100%;}}"], Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const Contact = external_styled_components_default.a.div.withConfig({
  displayName: "request-productstyle__Contact",
  componentId: "yc7v0b-11"
})(["margin-top:30px;"]);
const PaymentOption = external_styled_components_default.a.div.withConfig({
  displayName: "request-productstyle__PaymentOption",
  componentId: "yc7v0b-12"
})(["margin-top:60px;padding-top:60px;position:relative;&:before{content:'';position:absolute;width:150%;height:1px;top:0;left:50%;transform:translateX(-50%);display:block;background:", ";}"], Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'));
const PaymentCardList = external_styled_components_default.a.div.withConfig({
  displayName: "request-productstyle__PaymentCardList",
  componentId: "yc7v0b-13"
})(["display:flex;align-items:stretch;justify-content:space-between;margin-top:15px;.payment-card-radio{display:block;cursor:pointer;position:relative;> input{position:absolute;top:0;left:0;opacity:0;&:checked{& ~ .payment-card{border-color:", ";}}}.payment-card{pointer-events:none;}}"], Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const SavedCard = external_styled_components_default.a.div.withConfig({
  displayName: "request-productstyle__SavedCard",
  componentId: "yc7v0b-14"
})(["flex:calc(100% - 120px);max-width:calc(100% - 120px);.saved-card-title{font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-bottom:10px;display:block;}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const AddCard = external_styled_components_default.a.div.withConfig({
  displayName: "request-productstyle__AddCard",
  componentId: "yc7v0b-15"
})(["flex:105px;max-width:105px;flex-shrink:0;display:flex;flex-direction:column;.reusecore__button{flex-grow:1;height:auto;border:1px dashed ", ";border-radius:", ";padding:0 5px;flex-direction:column;svg{width:18px;height:auto;}.btn-icon{margin-bottom:5px;}&:hover{border-color:", ";}}.safe-label{font-family:", ";font-size:", "px;font-weight:", ";color:", ";display:flex;align-items:center;justify-content:flex-end;margin-bottom:10px;> svg{fill:currentColor;margin-right:4px;}}"], Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const OtherPayOption = external_styled_components_default.a.div.withConfig({
  displayName: "request-productstyle__OtherPayOption",
  componentId: "yc7v0b-16"
})(["margin-top:15px;display:flex;align-items:stretch;.other-pay-radio{flex-grow:1;span{display:block;border-radius:", ";background-color:", ";border:1px solid ", ";text-align:center;padding:12px 20px;cursor:pointer;color:", ";font-family:", ";font-size:", "px;font-weight:", ";line-height:24px;-webkit-transition:all 0.25s ease;transition:all 0.25s ease;}input{position:absolute;top:0;left:0;opacity:0;&:checked{& ~ span{border-color:", ";background-color:", ";}}}&.cash-on-delivery{flex:320px;max-width:230px;margin-left:15px;}}"], Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'), Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
const SubmitBtnWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "request-productstyle__SubmitBtnWrapper",
  componentId: "yc7v0b-17"
})(["margin-top:60px;.reusecore__button{width:100%;}"]);
const PaymentGroupWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "request-productstyle__PaymentGroupWrapper",
  componentId: "yc7v0b-18"
})([""]);
const AddAddressWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "request-productstyle__AddAddressWrapper",
  componentId: "yc7v0b-19"
})(["textarea{font-family:lato;}.field-wrapper{margin-bottom:30px;}"]);
const AddcontactWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "request-productstyle__AddcontactWrapper",
  componentId: "yc7v0b-20"
})(["textarea{font-family:lato;}.field-wrapper,.button_outline{margin-bottom:30px;}.button_outline{border:1px dashed ", ";.btn-icon{margin-right:5px;}&:hover{border-color:", ";}}"], Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const AuthenticationOverlay = external_styled_components_default.a.div.withConfig({
  displayName: "request-productstyle__AuthenticationOverlay",
  componentId: "yc7v0b-21"
})(["width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;background-color:rgba(255,255,255,0.9);position:absolute;top:0;left:0;bottom:0;right:0;padding-top:300px;z-index:100;button{box-shadow:0 0 36px rgba(0,0,0,0.16);}"]);
const InfoText = external_styled_components_default.a.span.withConfig({
  displayName: "request-productstyle__InfoText",
  componentId: "yc7v0b-22"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-bottom:15px;margin-top:15px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const OrderSummary = external_styled_components_default.a.div.withConfig({
  displayName: "request-productstyle__OrderSummary",
  componentId: "yc7v0b-23"
})(["width:100%;display:flex;flex-direction:column;padding:60px;border-radius:", ";background-color:", ";@media (max-width:767px){padding:30px;}"], Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'));
const OrderLabel = external_styled_components_default.a.span.withConfig({
  displayName: "request-productstyle__OrderLabel",
  componentId: "yc7v0b-24"
})(["color:", ";font-family:", ";font-size:", "px;font-weight:", ";line-height:24px;"], Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'));
const OrderAmount = external_styled_components_default.a.span.withConfig({
  displayName: "request-productstyle__OrderAmount",
  componentId: "yc7v0b-25"
})(["font-family:", ";font-size:", "px;color:", ";line-height:24px;font-weight:", ";"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'));
const OrderSummaryItem = external_styled_components_default.a.div.withConfig({
  displayName: "request-productstyle__OrderSummaryItem",
  componentId: "yc7v0b-26"
})(["width:100%;display:flex;align-items:center;justify-content:space-between;position:relative;&.voucherWrapper{@media (max-width:630px){flex-direction:column;align-items:flex-start;", "{margin-bottom:10px;}}}.couponDisplayBox{width:50%;@media (max-width:767px){width:60%;}@media (max-width:630px){width:100%;}}"], OrderLabel);
const CouponBoxWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "request-productstyle__CouponBoxWrapper",
  componentId: "yc7v0b-27"
})(["position:relative;display:flex;align-items:center;width:50%;@media (max-width:767px){width:60%;}@media (max-width:630px){width:100%;}.couponCodeText{margin-right:auto;}"]);
const CouponCode = external_styled_components_default.a.p.withConfig({
  displayName: "request-productstyle__CouponCode",
  componentId: "yc7v0b-28"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";width:100%;display:flex;justify-content:center;span{font-weight:", ";color:", ";margin-left:5px;}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const ErrorMsg = external_styled_components_default()('span').withConfig({
  displayName: "request-productstyle__ErrorMsg",
  componentId: "yc7v0b-29"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";padding-top:10px;display:flex;justify-content:center;position:absolute;left:20px;bottom:-25px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.secondary.hover', '#FF282F'));
/* harmony default export */ var request_product_style = (FormWrapper);
// EXTERNAL MODULE: ./src/contexts/profile/profile.context.tsx
var profile_context = __webpack_require__("p2kv");

// CONCATENATED MODULE: ./src/features/request-product/request-product.tsx
var request_product_jsx = external_react_default.a.createElement;



















const Checkout = () => {
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(profile_context["a" /* ProfileContext */]);
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: isValid,
    1: setIsValid
  } = Object(external_react_["useState"])(false);
  const {
    address,
    contact
  } = state;
  const {
    0: medicineNameOne,
    1: setMedicineNameOne
  } = Object(external_react_["useState"])('');
  const {
    0: quantityOne,
    1: setQuantityOne
  } = Object(external_react_["useState"])('');
  const {
    0: medicineNameTwo,
    1: setMedicineNameTwo
  } = Object(external_react_["useState"])('');
  const {
    0: quantityTwo,
    1: setQuantityTwo
  } = Object(external_react_["useState"])('');
  const [deleteContactMutation] = Object(react_hooks_["useMutation"])(mutation_contact["a" /* DELETE_CONTACT */]);
  const [deleteAddressMutation] = Object(react_hooks_["useMutation"])(mutation_address["b" /* DELETE_ADDRESS */]);
  const [deletePaymentCardMutation] = Object(react_hooks_["useMutation"])(card["a" /* DELETE_CARD */]);

  const handleSubmit = async () => {
    setLoading(true);
    router_default.a.push('/medicine');
    setLoading(false);
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

  const handleEditDelete = async (item, type, name) => {
    if (type === 'edit') {
      const modalComponent = name === 'address' ? address_card["a" /* default */] : contact_card["a" /* default */];
      handleModal(modalComponent, item);
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
          dispatch({
            type: 'DELETE_CONTACT',
            payload: item.id
          });
          return await deleteContactMutation({
            variables: {
              contactId: JSON.stringify(item.id)
            }
          });

        case 'address':
          dispatch({
            type: 'DELETE_ADDRESS',
            payload: item.id
          });
          return await deleteAddressMutation({
            variables: {
              addressId: JSON.stringify(item.id)
            }
          });

        default:
          return false;
      }
    }
  };

  return request_product_jsx("form", null, request_product_jsx(request_product_style, null, request_product_jsx(request_product_style_Container, null, request_product_jsx(FormTitleWrapper, null, request_product_jsx(FormTitle, null, request_product_jsx(external_react_intl_["FormattedMessage"], {
    id: "reqMedicine",
    defaultMessage: "Request Medicine"
  }))), request_product_jsx(Heading, null, request_product_jsx(external_react_intl_["FormattedMessage"], {
    id: "noteHead",
    defaultMessage: "Note"
  })), request_product_jsx(NoteText, null, request_product_jsx(external_react_intl_["FormattedMessage"], {
    id: "noteDescription",
    defaultMessage: "Product availability & price will confirm over phone. Delivery Charge inside the city ${inside} & outside the city ${outside}.",
    values: {
      inside: 5,
      outside: 10
    }
  })), request_product_jsx(Row, null, request_product_jsx(Col, {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 6
  }, request_product_jsx(label["a" /* Label */], null, request_product_jsx(external_react_intl_["FormattedMessage"], {
    id: "rmMedicineName"
  })), request_product_jsx(input["a" /* Input */], {
    type: "text",
    label: "Medicine Name",
    name: "medicine-Name",
    placeholder: "Enter medicine name",
    value: medicineNameOne,
    onChange: e => setMedicineNameOne(e.target.value),
    backgroundColor: "#F7F7F7",
    height: "48px"
  })), request_product_jsx(Col, {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 6
  }, request_product_jsx(label["a" /* Label */], null, request_product_jsx(external_react_intl_["FormattedMessage"], {
    id: "rmMedicineQuantity"
  })), request_product_jsx(input["a" /* Input */], {
    type: "text",
    label: "Quantity",
    name: "quantity",
    placeholder: "Enter quantity",
    value: quantityOne,
    onChange: e => setQuantityOne(e.target.value),
    backgroundColor: "#F7F7F7",
    height: "48px"
  }))), request_product_jsx(Row, null, request_product_jsx(Col, {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 6
  }, request_product_jsx(label["a" /* Label */], null, request_product_jsx(external_react_intl_["FormattedMessage"], {
    id: "rmMedicineName"
  })), request_product_jsx(input["a" /* Input */], {
    type: "text",
    label: "Medicine Name",
    name: "medicine-Name",
    placeholder: "Enter medicine name",
    value: medicineNameTwo,
    onChange: e => setMedicineNameTwo(e.target.value),
    backgroundColor: "#F7F7F7",
    height: "48px"
  })), request_product_jsx(Col, {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 6
  }, request_product_jsx(label["a" /* Label */], null, request_product_jsx(external_react_intl_["FormattedMessage"], {
    id: "rmMedicineQuantity"
  })), request_product_jsx(input["a" /* Input */], {
    type: "text",
    label: "Quantity",
    name: "quantity",
    placeholder: "Enter quantity",
    value: quantityTwo,
    onChange: e => setQuantityTwo(e.target.value),
    backgroundColor: "#F7F7F7",
    height: "48px"
  }))), request_product_jsx(Row, null, request_product_jsx(Col, {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12
  }, request_product_jsx(Heading, null, request_product_jsx(external_react_intl_["FormattedMessage"], {
    id: "rmPrescripttionUpload",
    defaultMessage: "Upload your prescription"
  }))), request_product_jsx(Col, {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12
  }, request_product_jsx(upload, {
    onChange: "",
    intlUploadText: "rmUploadText"
  }))), request_product_jsx(DeliveryAddress, null, request_product_jsx(Heading, null, request_product_jsx(external_react_intl_["FormattedMessage"], {
    id: "checkoutDeliveryAddress",
    defaultMessage: "Select Your Delivery Address"
  })), request_product_jsx(ButtonGroup, null, request_product_jsx(radio_group["a" /* default */], {
    items: address,
    component: item => request_product_jsx(radio_card["a" /* default */], {
      id: item.id,
      key: item.id,
      title: item.name,
      content: item.info,
      name: "address",
      checked: item.type === 'primary',
      onChange: () => dispatch({
        type: 'SET_PRIMARY_ADDRESS',
        payload: item.id.toString()
      }),
      onEdit: () => handleEditDelete(item, 'edit', 'address'),
      onDelete: () => handleEditDelete(item, 'delete', 'address')
    }),
    secondaryComponent: request_product_jsx(button_button["a" /* Button */], {
      size: "big",
      variant: "outlined",
      type: "button",
      className: "add-button",
      onClick: () => handleModal(address_card["a" /* default */], 'add-address-modal')
    }, request_product_jsx(external_react_intl_["FormattedMessage"], {
      id: "addAddressBtn",
      defaultMessage: "Add Adderss"
    }))
  }))), request_product_jsx(Contact, null, request_product_jsx(Heading, null, request_product_jsx(external_react_intl_["FormattedMessage"], {
    id: "contactNumberText",
    defaultMessage: "Select Your Contact Number"
  })), request_product_jsx(ButtonGroup, null, request_product_jsx(radio_group["a" /* default */], {
    items: contact,
    component: item => request_product_jsx(radio_card["a" /* default */], {
      id: item.id,
      key: item.id,
      title: item.type,
      content: item.number,
      checked: item.type === 'primary',
      onChange: () => dispatch({
        type: 'SET_PRIMARY_CONTACT',
        payload: item.id.toString()
      }),
      name: "contact",
      onEdit: () => handleEditDelete(item, 'edit', 'contact'),
      onDelete: () => handleEditDelete(item, 'delete', 'contact')
    }),
    secondaryComponent: request_product_jsx(button_button["a" /* Button */], {
      size: "big",
      variant: "outlined",
      type: "button",
      className: "add-button",
      onClick: () => handleModal(contact_card["a" /* default */], {}, 'add-contact-modal')
    }, request_product_jsx(external_react_intl_["FormattedMessage"], {
      id: "addContactBtn",
      defaultMessage: "Add Contact"
    }))
  }))), request_product_jsx(SubmitBtnWrapper, null, request_product_jsx(button_button["a" /* Button */], {
    type: "button",
    onClick: handleSubmit,
    size: "big",
    loading: loading,
    style: {
      width: '100%'
    }
  }, request_product_jsx(external_react_intl_["FormattedMessage"], {
    id: "submitRequest",
    defaultMessage: "Submit Request"
  }))))));
};

/* harmony default export */ var request_product = (Checkout);
// EXTERNAL MODULE: ./src/graphql/query/customer.query.ts
var customer_query = __webpack_require__("yR3f");

// EXTERNAL MODULE: ./src/contexts/profile/profile.provider.tsx
var profile_provider = __webpack_require__("4HXp");

// EXTERNAL MODULE: ./src/components/error-message/error-message.tsx
var error_message = __webpack_require__("quMH");

// CONCATENATED MODULE: ./src/pages/request-medicine.tsx
var request_medicine_jsx = external_react_default.a.createElement;









const RequestMedicinePage = ({
  deviceType
}) => {
  const {
    data,
    error,
    loading
  } = Object(react_hooks_["useQuery"])(customer_query["a" /* GET_LOGGED_IN_USER */]);

  if (loading) {
    return request_medicine_jsx("div", null, "loading...");
  }

  if (error) return request_medicine_jsx(error_message["default"], {
    message: error.message
  });
  const token = true;
  return request_medicine_jsx(external_react_default.a.Fragment, null, request_medicine_jsx(seo["a" /* SEO */], {
    title: "Request Medicine - Ditto",
    description: "Request Medicine Details"
  }), request_medicine_jsx(profile_provider["a" /* ProfileProvider */], {
    initData: data.me
  }, request_medicine_jsx(reuse_modal_["Modal"], null, request_medicine_jsx(request_product, {
    token: token,
    deviceType: deviceType
  }))));
};

/* harmony default export */ var request_medicine = __webpack_exports__["default"] = (RequestMedicinePage);

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





const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label.withConfig({
  displayName: "radio-card__CardWrapper",
  componentId: "sc-1vglpr2-0"
})(["display:inline-flex;align-items:center;border-radius:", ";background-color:", ";border:1px solid ", ";text-align:center;padding:15px 20px;margin-bottom:15px;margin-right:15px;position:relative;font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:24px;max-width:240px;cursor:pointer;width:100%;transition:all 0.25s ease;&.active{border:1px solid ", ";background-color:", ";}&.disabled{cursor:not-allowed;opacity:0.6;}&.item-has-title{flex-direction:column;text-align:left;align-items:flex-start;padding:15px;}&:last-child{margin-right:0;}input[type='radio']{opacity:0;visibility:hidden;position:absolute;top:0;left:0;}&:hover{.button-wrapper{opacity:1;visibility:visible;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('radii.base', '6px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.200', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.gray.200', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary.regular', '#009E7F'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'));
const CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "radio-card__CardTitle",
  componentId: "sc-1vglpr2-1"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.2;margin-bottom:5px;text-transform:capitalize;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.bold', '#0D1136'));
const CardContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "radio-card__CardContent",
  componentId: "sc-1vglpr2-2"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.text.medium', '#424561'));
const CardButtons = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "radio-card__CardButtons",
  componentId: "sc-1vglpr2-3"
})(["display:block;position:absolute;top:10px;right:10px;display:flex;align-items:center;opacity:0;visibility:hidden;transition:0.2s ease-in-out;"]);
const ActionButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "radio-card__ActionButton",
  componentId: "sc-1vglpr2-4"
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
  }), title && __jsx(CardTitle, null, title), content && __jsx(CardContent, null, content), withActionButtons && __jsx(CardButtons, {
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

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

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

/***/ "I6Cj":
/***/ (function(module, exports) {

module.exports = require("react-text-mask");

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

/***/ "KKLf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const UploadIcon = ({
  color = 'currentColor',
  width = '41px',
  height = '30px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 40.909 30"
  }, __jsx("g", {
    transform: "translate(0 -73.091)"
  }, __jsx("path", {
    "data-name": "Path 2125",
    d: "M39.129,89.827A8.064,8.064,0,0,0,34.58,86.94,5.446,5.446,0,0,0,30,78.546a5.207,5.207,0,0,0-3.537,1.321,10.921,10.921,0,0,0-10.1-6.776,10.511,10.511,0,0,0-7.713,3.2A10.508,10.508,0,0,0,5.454,84q0,.277.043.916A9.528,9.528,0,0,0,0,93.546a9.193,9.193,0,0,0,2.8,6.743,9.191,9.191,0,0,0,6.744,2.8H32.728a8.172,8.172,0,0,0,6.4-13.264Zm-12.06-.575a.656.656,0,0,1-.479.2H21.818v7.5a.691.691,0,0,1-.681.681H17.045a.691.691,0,0,1-.682-.681v-7.5H11.59a.655.655,0,0,1-.681-.681.8.8,0,0,1,.213-.512L18.6,80.783a.722.722,0,0,1,.98,0l7.5,7.5a.663.663,0,0,1,.191.49A.656.656,0,0,1,27.07,89.252Z",
    transform: "translate(0)",
    fill: "#e6e6e6"
  })));
};

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

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

/***/ "YBd4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const RadioGroupWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "radio-group__RadioGroupWrapper",
  componentId: "sc-1o1amfx-0"
})(["display:flex;flex-wrap:wrap;"]);

const RadioGroup = ({
  items = [],
  component,
  containerClassName,
  secondaryComponent
}) => {
  return __jsx(RadioGroupWrapper, {
    className: `radioGroup ${containerClassName}`.trim()
  }, items === null || items === void 0 ? void 0 : items.map((item, index) => component && component(item, index)), secondaryComponent && secondaryComponent);
};

/* harmony default export */ __webpack_exports__["a"] = (RadioGroup);

/***/ }),

/***/ "aNEW":
/***/ (function(module, exports) {

module.exports = require("react-dropzone");

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
  $division: String,
  $district: String,
  $region: String
) {
  addDeliveryAddress(
    id: $id, 
    title: $title, 
    address: $address, 
    division: $division,
    district: $district,
    region: $region
  ) {
    id
    title
    address
    division
    district
    region
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
      $division: String,
      $district: String,
      $region: String
     ){
      updateDeliveryAddress (
        id: $id, 
        addressId: $addressId,
        title: $title, 
        address: $address, 
        division: $division,
        district: $district,
        region: $region
    ){
      id
      title
      address
      division
      district
      region
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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

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

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

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
    delivery_address{
      id
      title
      address
      division
      district
      region
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
      id
      startDate
      finishDate
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