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

/***/ "+KJp":
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

// EXTERNAL MODULE: ./src/components/address-card/address-card.tsx + 1 modules
var address_card = __webpack_require__("6Bdc");

// EXTERNAL MODULE: ./src/components/contact-card/contact-card.tsx + 1 modules
var contact_card = __webpack_require__("6zwy");

// EXTERNAL MODULE: ./src/graphql/mutation/address.ts
var mutation_address = __webpack_require__("bQa+");

// EXTERNAL MODULE: ./src/graphql/mutation/card.ts
var mutation_card = __webpack_require__("4Jh2");

// EXTERNAL MODULE: ./src/graphql/mutation/contact.ts
var mutation_contact = __webpack_require__("fDRB");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/features/checkouts/checkout-one/checkout-one.style.tsx


const CheckoutWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-onestyle__CheckoutWrapper",
  componentId: "r8mxhu-0"
})(["background-color:", ";position:relative;padding:130px 0 60px 0;@media (max-width:990px){padding:0;padding-top:60px;}"], Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'));
const CheckoutContainer = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-onestyle__CheckoutContainer",
  componentId: "r8mxhu-1"
})(["background-color:", ";border:1px solid ", ";padding:60px;border-radius:", ";overflow:hidden;position:relative;@media (min-width:990px){width:870px;margin-left:auto;margin-right:auto;}@media (max-width:480px){padding:30px;}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('radii.base', '6px'));
const Heading = external_styled_components_default.a.h3.withConfig({
  displayName: "checkout-onestyle__Heading",
  componentId: "r8mxhu-2"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.2;margin-bottom:25px;"], Object(theme_get_["themeGet"])('fonts.heading', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const CheckoutHead = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-onestyle__CheckoutHead",
  componentId: "r8mxhu-3"
})(["display:flex;align-items:center;position:relative;&:before{content:'';position:absolute;width:1px;height:100%;display:block;background-color:", ";top:0;left:50%;}span{font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-bottom:15px;}h3{display:block;font-family:", ";font-size:", "px;font-weight:", ";color:", ";}"], Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fonts.heading', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const TotalProduct = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-onestyle__TotalProduct",
  componentId: "r8mxhu-4"
})(["flex-grow:1;text-align:right;padding-right:60px;"]);
const TotalPrice = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-onestyle__TotalPrice",
  componentId: "r8mxhu-5"
})(["flex-grow:1;text-align:left;padding-left:60px;"]);
const DeliverySchedule = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-onestyle__DeliverySchedule",
  componentId: "r8mxhu-6"
})(["margin-top:60px;.radioGroup{justify-content:space-between;> label{margin-right:0;flex:calc(33.3333333333% - 10px);max-width:calc(33.3333333333% - 10px);padding:11px 15px;@media (max-width:700px){flex:calc(50% - 10px);max-width:calc(50% - 10px);}@media (max-width:480px){flex:100%;max-width:100%;margin-right:0;}}}"]);
const DeliveryAddress = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-onestyle__DeliveryAddress",
  componentId: "r8mxhu-7"
})(["margin-top:30px;"]);
const ButtonGroup = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-onestyle__ButtonGroup",
  componentId: "r8mxhu-8"
})(["display:flex;flex-direction:column;.radioGroup{flex-grow:1;justify-content:space-between;label{margin-top:0;flex:calc(33.333333333% - 10px);max-width:calc(33.333333333% - 10px);margin-bottom:15px;&:nth-child(3n){margin-right:0;}@media (max-width:700px){flex:calc(50% - 10px);max-width:calc(50% - 10px);&:nth-child(3n){margin-right:15px;}&:nth-child(2n){margin-right:0;}}@media (max-width:480px){flex:100%;max-width:100%;margin-right:0;&:nth-child(3n){margin-right:0;}&:nth-child(2n){margin-right:0;}}}}.add-button{flex:calc(33.3333333333% - 10px);max-width:calc(33.3333333333% - 10px);flex-shrink:0;height:auto;min-height:77px;border:1px dashed ", ";margin-bottom:15px;margin-left:0;margin-right:auto;&:hover{border-color:", ";}@media (max-width:700px){flex:calc(50% - 10px);max-width:calc(50% - 10px);}@media (max-width:480px){flex:100%;max-width:100%;}}"], Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const Contact = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-onestyle__Contact",
  componentId: "r8mxhu-9"
})(["margin-top:30px;"]);
const PaymentOption = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-onestyle__PaymentOption",
  componentId: "r8mxhu-10"
})(["margin-top:60px;padding-top:60px;position:relative;&:before{content:'';position:absolute;width:150%;height:1px;top:0;left:50%;transform:translateX(-50%);display:block;background:", ";}"], Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'));
const PaymentCardList = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-onestyle__PaymentCardList",
  componentId: "r8mxhu-11"
})(["display:flex;align-items:stretch;justify-content:space-between;margin-top:15px;.payment-card-radio{display:block;cursor:pointer;position:relative;> input{position:absolute;top:0;left:0;opacity:0;&:checked{& ~ .payment-card{border-color:", ";}}}.payment-card{pointer-events:none;}}"], Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const SavedCard = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-onestyle__SavedCard",
  componentId: "r8mxhu-12"
})(["flex:calc(100% - 120px);max-width:calc(100% - 120px);.saved-card-title{font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-bottom:10px;display:block;}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const AddCard = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-onestyle__AddCard",
  componentId: "r8mxhu-13"
})(["flex:105px;max-width:105px;flex-shrink:0;display:flex;flex-direction:column;.reusecore__button{flex-grow:1;height:auto;border:1px dashed ", ";border-radius:", ";padding:0 5px;flex-direction:column;svg{width:18px;height:auto;}.btn-icon{margin-bottom:5px;}&:hover{border-color:", ";}}.safe-label{font-family:", ";font-size:", "px;font-weight:", ";color:", ";display:flex;align-items:center;justify-content:flex-end;margin-bottom:10px;> svg{fill:currentColor;margin-right:4px;}}"], Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const OtherPayOption = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-onestyle__OtherPayOption",
  componentId: "r8mxhu-14"
})(["margin-top:15px;display:flex;align-items:stretch;.other-pay-radio{flex-grow:1;span{display:block;border-radius:", ";background-color:", ";border:1px solid ", ";text-align:center;padding:12px 20px;cursor:pointer;color:", ";font-family:", ";font-size:", "px;font-weight:", ";line-height:24px;-webkit-transition:all 0.25s ease;transition:all 0.25s ease;}input{position:absolute;top:0;left:0;opacity:0;&:checked{& ~ span{border-color:", ";background-color:", ";}}}&.cash-on-delivery{flex:320px;max-width:230px;margin-left:15px;}}"], Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'), Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
const CheckoutSubmit = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-onestyle__CheckoutSubmit",
  componentId: "r8mxhu-15"
})(["margin-top:60px;.reusecore__button{width:100%;}"]);
const PaymentGroupWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-onestyle__PaymentGroupWrapper",
  componentId: "r8mxhu-16"
})([""]);
const AddAddressWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-onestyle__AddAddressWrapper",
  componentId: "r8mxhu-17"
})(["textarea{font-family:", ";}.field-wrapper{margin-bottom:30px;}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'));
const AddcontactWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-onestyle__AddcontactWrapper",
  componentId: "r8mxhu-18"
})(["textarea{font-family:", ";}.field-wrapper,.button_outline{margin-bottom:30px;}.button_outline{border:1px dashed ", ";.btn-icon{margin-right:5px;}&:hover{border-color:", ";}}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const AuthenticationOverlay = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-onestyle__AuthenticationOverlay",
  componentId: "r8mxhu-19"
})(["width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;background-color:rgba(255,255,255,0.9);position:absolute;top:0;left:0;bottom:0;right:0;padding-top:300px;z-index:100;button{box-shadow:0 0 36px rgba(0,0,0,0.16);}"]);
const InfoText = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-onestyle__InfoText",
  componentId: "r8mxhu-20"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-bottom:15px;margin-top:15px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const OrderSummary = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-onestyle__OrderSummary",
  componentId: "r8mxhu-21"
})(["width:100%;display:flex;flex-direction:column;padding:60px;border-radius:", ";background-color:", ";@media (max-width:767px){padding:30px;}"], Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'));
const OrderLabel = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-onestyle__OrderLabel",
  componentId: "r8mxhu-22"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:24px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const OrderAmount = external_styled_components_default.a.span.withConfig({
  displayName: "checkout-onestyle__OrderAmount",
  componentId: "r8mxhu-23"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:24px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const OrderSummaryItem = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-onestyle__OrderSummaryItem",
  componentId: "r8mxhu-24"
})(["width:100%;display:flex;align-items:center;justify-content:space-between;position:relative;&.voucherWrapper{@media (max-width:630px){flex-direction:column;align-items:flex-start;", "{margin-bottom:10px;}}}.couponDisplayBox{width:50%;@media (max-width:767px){width:60%;}@media (max-width:630px){width:100%;}}"], OrderLabel);
const CouponBoxWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "checkout-onestyle__CouponBoxWrapper",
  componentId: "r8mxhu-25"
})(["position:relative;display:flex;align-items:center;width:50%;@media (max-width:767px){width:60%;}@media (max-width:630px){width:100%;}.couponCodeText{margin-right:auto;}"]);
const CouponCode = external_styled_components_default.a.p.withConfig({
  displayName: "checkout-onestyle__CouponCode",
  componentId: "r8mxhu-26"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";width:100%;display:flex;justify-content:center;span{font-weight:", ";color:", ";margin-left:5px;}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const ErrorMsg = external_styled_components_default()('span').withConfig({
  displayName: "checkout-onestyle__ErrorMsg",
  componentId: "r8mxhu-27"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";padding-top:10px;display:flex;justify-content:center;position:absolute;left:20px;bottom:-25px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.secondary.hover', '#FF282F'));
/* harmony default export */ var checkout_one_style = (CheckoutWrapper);
// EXTERNAL MODULE: ./src/components/coupon-box/coupon-box.tsx + 1 modules
var coupon_box = __webpack_require__("rWEH");

// EXTERNAL MODULE: ./src/contexts/profile/profile.context.tsx
var profile_context = __webpack_require__("p2kv");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./src/contexts/cart/use-cart.tsx + 2 modules
var use_cart = __webpack_require__("tFEG");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./src/graphql/mutation/coupon.ts

const APPLY_COUPON = external_graphql_tag_default.a`
  mutation applyCoupon($code: String!) {
    applyCoupon(code: $code) {
      id
      code
      discountInPercent
    }
  }
`;
// CONCATENATED MODULE: ./src/features/checkouts/checkout-one/checkout-one.tsx
var __jsx = external_react_default.a.createElement;

















 // The type of props Checkout Form receives

const Checkout = ({
  token,
  deviceType
}) => {
  const {
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
  const {
    0: couponCode,
    1: setCouponCode
  } = Object(external_react_["useState"])('');
  const {
    0: couponError,
    1: setError
  } = Object(external_react_["useState"])('');
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
    contact,
    card,
    schedules
  } = state;
  const [deleteContactMutation] = Object(react_hooks_["useMutation"])(mutation_contact["a" /* DELETE_CONTACT */]);
  const [deleteAddressMutation] = Object(react_hooks_["useMutation"])(mutation_address["b" /* DELETE_ADDRESS */]);
  const [deletePaymentCardMutation] = Object(react_hooks_["useMutation"])(mutation_card["a" /* DELETE_CARD */]);
  const [appliedCoupon] = Object(react_hooks_["useMutation"])(APPLY_COUPON);

  const handleSubmit = async () => {
    setLoading(true);

    if (isValid) {
      clearCart();
      router_default.a.push('/order-received');
    }

    setLoading(false);
  };

  Object(external_react_["useEffect"])(() => {
    if (calculatePrice() > 0 && cartItemsCount > 0 && address.length && contact.length && card.length && schedules.length) {
      setIsValid(true);
    }
  }, [state]);
  Object(external_react_["useEffect"])(() => {
    return () => {
      if (isRestaurant) {
        toggleRestaurant();
        clearCart();
      }
    };
  }, []); // Add or edit modal

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

  const handleApplyCoupon = async () => {
    const {
      data
    } = await appliedCoupon({
      variables: {
        code: couponCode
      }
    });

    if (data.applyCoupon && data.applyCoupon.discountInPercent) {
      applyCoupon(data.applyCoupon);
      setCouponCode('');
    } else {
      setError('Invalid Coupon');
    }
  };

  const handleOnUpdate = e => {
    setCouponCode(e.currentTarget.value);
  };

  return __jsx("form", null, __jsx(checkout_one_style, null, __jsx(CheckoutContainer, null, __jsx(OrderSummary, null, __jsx(OrderSummaryItem, {
    style: {
      marginBottom: 15
    }
  }, __jsx(OrderLabel, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "subTotal",
    defaultMessage: "Subtotal"
  }), " (", cartItemsCount, ' ', __jsx(external_react_intl_["FormattedMessage"], {
    id: "itemsText",
    defaultMessage: "items"
  }), ")"), __jsx(OrderAmount, null, "$", calculateSubTotalPrice())), __jsx(OrderSummaryItem, {
    style: {
      marginBottom: 30
    }
  }, __jsx(OrderLabel, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "shippingFeeText",
    defaultMessage: "Shipping Fee"
  })), __jsx(OrderAmount, null, "$0.00")), __jsx(OrderSummaryItem, {
    style: {
      marginBottom: 30
    },
    className: "voucherWrapper"
  }, __jsx(OrderLabel, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "voucherText",
    defaultMessage: "Voucher"
  })), coupon ? __jsx(coupon_box["a" /* CouponDisplay */], {
    code: coupon.code,
    sign: "-",
    currency: "$",
    price: calculateDiscount(),
    onClick: e => {
      e.preventDefault();
      removeCoupon();
    }
  }) : __jsx(external_react_default.a.Fragment, null, __jsx(CouponBoxWrapper, null, __jsx(coupon_box["b" /* default */], {
    onClick: handleApplyCoupon,
    value: couponCode,
    onChange: handleOnUpdate,
    style: {
      maxWidth: 350,
      height: 50
    }
  }), couponError && __jsx(ErrorMsg, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "couponError",
    defaultMessage: couponError
  }))))), __jsx(OrderSummaryItem, null, __jsx(OrderLabel, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "totalText",
    defaultMessage: "Total"
  })), __jsx(OrderAmount, null, "$", calculatePrice()))), __jsx(DeliverySchedule, null, __jsx(Heading, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "deliverySchedule",
    defaultMessage: "Select Your Delivery Schedule"
  })), __jsx(radio_group["a" /* default */], {
    items: schedules,
    component: item => __jsx(radio_card["a" /* default */], {
      id: item.id,
      key: item.id,
      title: item.title,
      content: item.time_slot,
      name: "schedule",
      checked: item.type === 'primary',
      withActionButtons: false,
      onChange: () => dispatch({
        type: 'SET_PRIMARY_SCHEDULE',
        payload: item.id.toString()
      })
    })
  })), __jsx(DeliveryAddress, null, __jsx(Heading, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "checkoutDeliveryAddress",
    defaultMessage: "Select Your Delivery Address"
  })), __jsx(ButtonGroup, null, __jsx(radio_group["a" /* default */], {
    items: address,
    component: item => __jsx(radio_card["a" /* default */], {
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
    secondaryComponent: // <Button
    //   title="Add Address"
    //   iconPosition="right"
    //   colors="primary"
    //   size="small"
    //   variant="outlined"
    //   type="button"
    //   intlButtonId="addAddressBtn"
    //   onClick={() =>
    //     handleModal(UpdateAddress, 'add-address-modal')
    //   }
    // />
    __jsx(button_button["a" /* Button */], {
      size: "big",
      variant: "outlined",
      type: "button",
      className: "add-button",
      onClick: () => handleModal(address_card["a" /* default */], 'add-address-modal'),
      style: {
        borderStyle: 'dashed'
      }
    }, __jsx(external_react_intl_["FormattedMessage"], {
      id: "addAddressBtn",
      defaultMessage: "Add Address"
    }))
  }))), __jsx(Contact, null, __jsx(Heading, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "contactNumberText",
    defaultMessage: "Select Your Contact Number"
  })), __jsx(ButtonGroup, null, __jsx(radio_group["a" /* default */], {
    items: contact,
    component: item => __jsx(radio_card["a" /* default */], {
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
    secondaryComponent: // <Button
    //   title='Add Contact'
    //   iconPosition='right'
    //   colors='primary'
    //   size='small'
    //   variant='outlined'
    //   type='button'
    //   intlButtonId='addContactBtn'
    //   onClick={() =>
    //     handleModal(UpdateContact, 'add-contact-modal')
    //   }
    // />
    __jsx(button_button["a" /* Button */], {
      size: "big",
      variant: "outlined",
      type: "button",
      className: "add-button",
      onClick: () => handleModal(contact_card["a" /* default */], 'add-contact-modal'),
      style: {
        borderStyle: 'dashed'
      }
    }, __jsx(external_react_intl_["FormattedMessage"], {
      id: "addContactBtn",
      defaultMessage: "Add Contact"
    }))
  }))), __jsx(PaymentOption, null, __jsx(Heading, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "selectPaymentText",
    defaultMessage: "Select Payment Option"
  }))), __jsx(CheckoutSubmit, null, __jsx(button_button["a" /* Button */], {
    type: "button",
    onClick: handleSubmit,
    disabled: !isValid,
    size: "big",
    loading: loading,
    width: "100%"
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "processCheckout",
    defaultMessage: "Proceed to Checkout"
  }))))));
};

/* harmony default export */ var checkout_one = (Checkout);
// EXTERNAL MODULE: ./src/graphql/query/customer.query.ts
var customer_query = __webpack_require__("yR3f");

// EXTERNAL MODULE: ./src/contexts/profile/profile.provider.tsx
var profile_provider = __webpack_require__("4HXp");

// EXTERNAL MODULE: ./src/components/error-message/error-message.tsx
var error_message = __webpack_require__("quMH");

// CONCATENATED MODULE: ./src/pages/checkout-alternative.tsx
var checkout_alternative_jsx = external_react_default.a.createElement;









const CheckoutPage = ({
  deviceType
}) => {
  const {
    data,
    error,
    loading
  } = Object(react_hooks_["useQuery"])(customer_query["a" /* GET_LOGGED_IN_USER */]);

  if (loading) {
    return checkout_alternative_jsx("div", null, "loading...");
  }

  if (error) return checkout_alternative_jsx(error_message["default"], {
    message: error.message
  });
  const token = 'true';
  return checkout_alternative_jsx(external_react_default.a.Fragment, null, checkout_alternative_jsx(seo["a" /* SEO */], {
    title: "Checkout Alternative - Ditto",
    description: "Checkout Details"
  }), checkout_alternative_jsx(profile_provider["a" /* ProfileProvider */], {
    initData: data.me
  }, checkout_alternative_jsx(reuse_modal_["Modal"], null, checkout_alternative_jsx(checkout_one, {
    token: token,
    deviceType: deviceType
  }))));
};

/* harmony default export */ var checkout_alternative = __webpack_exports__["default"] = (CheckoutPage);

/***/ }),

/***/ "/JeY":
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("+KJp");


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
    prefetch: false,
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
  return items.reduce((total, item) => {
    if (item.salePrice) {
      return total + item.salePrice * item.quantity;
    }

    return total + item.price * item.quantity;
  }, 0);
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
    newState[existingCartItemIndex].quantity += action.payload.quantity;
    return newState;
  }

  return [...state.items, action.payload];
}; // cartItems, cartItemToRemove


const removeItemFromCart = (state, action) => {
  return state.items.reduce((acc, item) => {
    if (item.id === action.payload.id) {
      const newQuantity = item.quantity - action.payload.quantity;
      return newQuantity > 0 ? [...acc, _objectSpread(_objectSpread({}, item), {}, {
        quantity: newQuantity
      })] : [...acc];
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

/***/ "wiMN":
/***/ (function(module, exports) {

module.exports = require("localforage");

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