exports.ids = [26];
exports.modules = {

/***/ "0THn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Counter; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/assets/icons/PlusMinus.tsx
var PlusMinus = __webpack_require__("OeMJ");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/css"
var css_ = __webpack_require__("ExBD");
var css_default = /*#__PURE__*/__webpack_require__.n(css_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./src/components/counter/counter.style.tsx



const CounterBox = external_styled_components_default.a.div.withConfig({
  displayName: "counterstyle__CounterBox",
  componentId: "sc-1k7tor9-0"
})(css_default()({
  display: 'flex',
  backgroundColor: 'primary.regular',
  color: 'white',
  fontSize: 'base',
  fontWeight: 'bold'
}), {
  borderRadius: 200,
  justifyContent: 'space-between',
  alignItems: 'center',
  overflow: 'hidden',
  flexShrink: 0,
  '&:focus': {
    outline: 'none'
  }
}, Object(external_styled_system_["variant"])({
  variants: {
    horizontal: {
      width: 104,
      height: 36
    },
    vertical: {
      width: 30,
      height: 90,
      flexDirection: 'column-reverse'
    },
    lightHorizontal: {
      width: 104,
      height: 36,
      backgroundColor: 'gray.200',
      color: 'text.bold'
    },
    lightVertical: {
      width: 30,
      height: 90,
      flexDirection: 'column-reverse',
      backgroundColor: 'gray.200',
      color: 'text.bold'
    }
  }
}));
const CounterButton = external_styled_components_default.a.button.withConfig({
  displayName: "counterstyle__CounterButton",
  componentId: "sc-1k7tor9-1"
})({
  border: 'none',
  backgroundColor: 'transparent',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: 10,
  cursor: 'pointer',
  '&:hover, &:focus': {
    outline: 'none'
  }
}, Object(external_styled_system_["variant"])({
  variants: {
    lightHorizontal: {
      color: 'text.regular'
    },
    lightVertical: {
      color: 'text.regular'
    }
  }
}));
const CounterValue = external_styled_components_default.a.span.withConfig({
  displayName: "counterstyle__CounterValue",
  componentId: "sc-1k7tor9-2"
})({
  pointerEvents: 'none'
});
CounterValue.displayName = 'CounterValue';
CounterButton.displayName = 'CounterButton';
CounterBox.displayName = 'CounterBox';
CounterBox.defaultProps = {
  variant: 'horizontal'
};
// CONCATENATED MODULE: ./src/components/counter/counter.tsx
var __jsx = external_react_default.a.createElement;



const Counter = ({
  onDecrement,
  onIncrement,
  value,
  variant,
  className,
  shouldDisabledOnOne
}) => {
  return __jsx(CounterBox, {
    variant: variant,
    className: className
  }, __jsx(CounterButton, {
    disabled: value === 1 && shouldDisabledOnOne,
    onClick: onDecrement,
    variant: variant
  }, __jsx(PlusMinus["a" /* Minus */], null)), __jsx(CounterValue, null, value), __jsx(CounterButton, {
    onClick: onIncrement,
    variant: variant
  }, __jsx(PlusMinus["b" /* Plus */], null)));
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

/***/ "3ec5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ReadMore = ({
  children,
  more,
  less,
  character
}) => {
  const {
    0: expanded,
    1: setExpanded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggleLines = event => {
    event.preventDefault();
    setExpanded(!expanded);
  };

  if (!children) return null;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children && children.length < character || expanded ? children : children.substring(0, character), children && children.length > character && !expanded && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("br", null), __jsx("span", null, __jsx("a", {
    href: "#",
    onClick: toggleLines,
    style: {
      color: '#009e7f',
      fontWeight: 700
    }
  }, more))), children && children.length > character && expanded && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("br", null), __jsx("span", null, __jsx("a", {
    href: "#",
    onClick: toggleLines,
    style: {
      color: '#009e7f',
      fontWeight: 700
    }
  }, less))));
};

ReadMore.defaultProps = {
  character: 150,
  more: 'Read more',
  less: 'less'
};
/* harmony default export */ __webpack_exports__["a"] = (ReadMore);

/***/ }),

/***/ "F5TP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/features/quick-view/quick-view.style.tsx


const QuickViewWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "quick-viewstyle__QuickViewWrapper",
  componentId: "i29htq-0"
})(["max-width:1020px;"]);
const ProductDetailsWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "quick-viewstyle__ProductDetailsWrapper",
  componentId: "i29htq-1"
})(["background-color:", ";position:relative;display:flex;flex-wrap:wrap;align-items:stretch;min-height:100%;border-radius:", ";overflow:hidden;box-sizing:border-box;box-shadow:0 10px 40px rgba(0,0,0,0.16);*{box-sizing:border-box;}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('radii.base', '6px'));
const ProductPreview = external_styled_components_default.a.div.withConfig({
  displayName: "quick-viewstyle__ProductPreview",
  componentId: "i29htq-2"
})(["flex:0 0 50%;max-width:50%;padding:30px 60px;display:flex;align-items:center;justify-content:center;position:relative;@media (max-width:767px){flex:0 0 100%;max-width:100%;padding:30px 47px 40px 30px;order:0;}img{width:100%;@media (max-width:767px){min-width:auto !important;}}"]);
const SaleTag = external_styled_components_default.a.span.withConfig({
  displayName: "quick-viewstyle__SaleTag",
  componentId: "i29htq-3"
})(["font-size:", "px;font-weight:", ";color:", ";background-color:", ";padding:0 10px;line-height:24px;border-radius:", ";display:inline-block;position:absolute;top:40px;right:30px;"], Object(theme_get_["themeGet"])('fontSizes.xs', '12'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.yellow.hover', '#FBB979'), Object(theme_get_["themeGet"])('radii.medium', '12px'));
const DiscountPercent = external_styled_components_default.a.span.withConfig({
  displayName: "quick-viewstyle__DiscountPercent",
  componentId: "i29htq-4"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:24px;background-color:", ";padding-left:10px;padding-right:10px;position:relative;display:inline-block;position:absolute;top:30px;right:30px;border-radius:", ";-webkit-transform:translate3d(0,0,1px);transform:translate3d(0,0,1px);"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.yellow.hover', '#FBB979'), Object(theme_get_["themeGet"])('radii.medium', '12px'));
const ProductInfoWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "quick-viewstyle__ProductInfoWrapper",
  componentId: "i29htq-5"
})(["flex:0 0 50%;max-width:50%;border-left:1px solid ", ";@media (max-width:767px){flex:0 0 100%;max-width:100%;padding:10px 0 30px;order:1;}"], Object(theme_get_["themeGet"])('colors.lightMediumColor', '#f3f3f3'));
const ProductInfo = external_styled_components_default.a.div.withConfig({
  displayName: "quick-viewstyle__ProductInfo",
  componentId: "i29htq-6"
})(["padding:50px;@media (max-width:767px){padding:0px 30px 30px 30px;}"]);
const ProductTitlePriceWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "quick-viewstyle__ProductTitlePriceWrapper",
  componentId: "i29htq-7"
})(["width:100%;display:flex;align-items:flex-start;justify-content:flex-start;margin-bottom:10px;"]);
const ProductTitle = external_styled_components_default.a.h1.withConfig({
  displayName: "quick-viewstyle__ProductTitle",
  componentId: "i29htq-8"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.5;display:flex;@media (max-width:767px){word-break:break-word;}"], Object(theme_get_["themeGet"])('fonts.heading', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.lg', '21'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const ProductPriceWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "quick-viewstyle__ProductPriceWrapper",
  componentId: "i29htq-9"
})(["display:flex;align-items:center;flex-shrink:0;margin-left:25px;line-height:31px;@media (max-width:767px){margin-left:15px;}"]);
const ProductPrice = external_styled_components_default.a.div.withConfig({
  displayName: "quick-viewstyle__ProductPrice",
  componentId: "i29htq-10"
})(["font-family:", ";font-size:calc(", "px + 1px);font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const SalePrice = external_styled_components_default.a.span.withConfig({
  displayName: "quick-viewstyle__SalePrice",
  componentId: "i29htq-11"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";font-style:italic;padding:0 5px;overflow:hidden;position:relative;margin-right:10px;&:before{content:'';width:100%;height:1px;display:inline-block;background-color:", ";position:absolute;top:50%;left:0;}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.yellow.hover', '#FBB979'), Object(theme_get_["themeGet"])('colors.yellow.hover', '#FBB979'));
const ProductWeight = external_styled_components_default.a.div.withConfig({
  displayName: "quick-viewstyle__ProductWeight",
  componentId: "i29htq-12"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const ProductDescription = external_styled_components_default.a.p.withConfig({
  displayName: "quick-viewstyle__ProductDescription",
  componentId: "i29htq-13"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:2;margin-top:30px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.medium', '#424561'));
const ProductCartBtn = external_styled_components_default.a.div.withConfig({
  displayName: "quick-viewstyle__ProductCartBtn",
  componentId: "i29htq-14"
})(["margin-top:60px;@media (max-width:767px){margin-top:40px;}.cart-button{.btn-icon{margin-right:5px;}svg{@media (max-width:767px){margin-right:0;}}&:hover{color:", ";background-color:", ";border-color:", ";}}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const ButtonText = external_styled_components_default.a.span.withConfig({
  displayName: "quick-viewstyle__ButtonText",
  componentId: "i29htq-15"
})(["@media (max-width:767px){display:none;}"]);
const ProductCartWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "quick-viewstyle__ProductCartWrapper",
  componentId: "i29htq-16"
})(["display:flex;flex-direction:column;"]);
const ProductMeta = external_styled_components_default.a.div.withConfig({
  displayName: "quick-viewstyle__ProductMeta",
  componentId: "i29htq-17"
})(["margin-top:30px;"]);
const MetaSingle = external_styled_components_default.a.div.withConfig({
  displayName: "quick-viewstyle__MetaSingle",
  componentId: "i29htq-18"
})(["display:flex;flex-wrap:wrap;align-items:center;margin-bottom:10px;&:last-child{margin-bottom:0;}"]);
const MetaItem = external_styled_components_default.a.span.withConfig({
  displayName: "quick-viewstyle__MetaItem",
  componentId: "i29htq-19"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-right:10px;margin-bottom:10px;background-color:", ";padding:0 15px;border-radius:", ";cursor:pointer;height:30px;display:flex;align-items:center;justify-content:center;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'), Object(theme_get_["themeGet"])('radii.base', '6px'));
const ModalClose = external_styled_components_default.a.button.withConfig({
  displayName: "quick-viewstyle__ModalClose",
  componentId: "i29htq-20"
})(["position:fixed;top:20px;right:15px;padding:10px 15px;z-index:1;cursor:pointer;display:block;color:rgba(0,0,0,0.5);background:transparent;border:0;outline:none;display:inline-block;svg{width:12px;height:12px;}@media (max-width:767px){top:5px;right:0;}"]);
// EXTERNAL MODULE: ./src/assets/icons/CloseIcon.tsx
var CloseIcon = __webpack_require__("2nMb");

// EXTERNAL MODULE: ./src/assets/icons/CartIcon.tsx
var CartIcon = __webpack_require__("VlNk");

// EXTERNAL MODULE: ./src/utils/constant.ts
var constant = __webpack_require__("f/wd");

// EXTERNAL MODULE: ./src/components/truncate/truncate.tsx
var truncate = __webpack_require__("3ec5");

// EXTERNAL MODULE: external "react-multi-carousel"
var external_react_multi_carousel_ = __webpack_require__("99J/");
var external_react_multi_carousel_default = /*#__PURE__*/__webpack_require__.n(external_react_multi_carousel_);

// CONCATENATED MODULE: ./src/components/multi-carousel/multi-carousel.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const SingleItem = external_styled_components_default.a.li.withConfig({
  displayName: "multi-carousel__SingleItem",
  componentId: "o76yeh-0"
})(["border:1px solid ", ";border-radius:", ";margin-right:20px;padding:0;outline:none;width:70px;height:auto;overflow:hidden;&:last-child{margin-right:0;}&.custom-dot--active{border:2px solid ", ";}"], Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'));
const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 1
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 200
    },
    items: 1
  }
};

const CarouselWithCustomDots = (_ref) => {
  let {
    items = [],
    deviceType: {
      mobile,
      tablet,
      desktop
    },
    title
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["items", "deviceType", "title"]);

  const children = items.slice(0, 6).map((item, index) => __jsx("img", {
    src: item.url,
    key: index,
    alt: title,
    style: {
      minWidth: 'auto',
      height: 'auto',
      position: 'relative',
      margin: 'auto'
    },
    className: "product-image"
  }));
  const images = items.map((item, index) => __jsx("img", {
    src: item.url,
    key: index,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      position: 'relative'
    }
  }));

  const CustomDot = ({
    index,
    onClick,
    active,
    carouselState: {
      currentSlide,
      deviceType
    }
  }) => {
    return __jsx(SingleItem, {
      "data-index": index,
      key: index,
      onClick: () => onClick(),
      className: `custom-dot ${active && 'custom-dot--active'}`
    }, external_react_default.a.Children.toArray(images)[index]);
  };

  let deviceType = 'desktop';

  if (mobile) {
    deviceType = 'mobile';
  }

  if (tablet) {
    deviceType = 'tablet';
  }

  return __jsx(external_react_multi_carousel_default.a, _extends({
    showDots: true,
    ssr: true,
    infinite: true,
    slidesToSlide: 1,
    containerClass: "carousel-with-custom-dots",
    responsive: responsive,
    deviceType: deviceType,
    autoPlay: false,
    arrows: false,
    customDot: __jsx(CustomDot, null)
  }, rest), children);
};

/* harmony default export */ var multi_carousel = (CarouselWithCustomDots);
// EXTERNAL MODULE: ./src/contexts/language/language.provider.tsx + 2 modules
var language_provider = __webpack_require__("uiyz");

// EXTERNAL MODULE: ./src/contexts/cart/use-cart.tsx + 2 modules
var use_cart = __webpack_require__("tFEG");

// EXTERNAL MODULE: ./src/components/counter/counter.tsx + 1 modules
var counter = __webpack_require__("0THn");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// CONCATENATED MODULE: ./src/features/quick-view/quick-view.tsx
var quick_view_jsx = external_react_default.a.createElement;















const QuickView = ({
  modalProps,
  deviceType,
  onModalClose
}) => {
  const {
    addItem,
    removeItem,
    isInCart,
    getItem
  } = Object(use_cart["b" /* useCart */])();
  const {
    id,
    type,
    title,
    unit,
    price,
    discountInPercent,
    salePrice,
    description,
    gallery,
    categories
  } = modalProps;
  const {
    isRtl
  } = Object(language_provider["b" /* useLocale */])();

  const handleAddClick = e => {
    e.stopPropagation();
    addItem(modalProps);
  };

  const handleRemoveClick = e => {
    e.stopPropagation();
    removeItem(modalProps);
  };

  function onCategoryClick(slug) {
    router_default.a.push({
      pathname: `/${type.toLowerCase()}`,
      query: {
        category: slug
      }
    }).then(() => window.scrollTo(0, 0));
    Object(reuse_modal_["closeModal"])();
  }

  return quick_view_jsx(external_react_default.a.Fragment, null, quick_view_jsx(ModalClose, {
    onClick: onModalClose
  }, quick_view_jsx(CloseIcon["a" /* CloseIcon */], null)), quick_view_jsx(QuickViewWrapper, null, quick_view_jsx(ProductDetailsWrapper, {
    className: "product-card",
    dir: "ltr"
  }, !isRtl && quick_view_jsx(ProductPreview, null, quick_view_jsx(multi_carousel, {
    items: gallery,
    deviceType: deviceType
  }), !!discountInPercent && quick_view_jsx(external_react_default.a.Fragment, null, quick_view_jsx(DiscountPercent, null, discountInPercent, "%"))), quick_view_jsx(ProductInfoWrapper, {
    dir: isRtl ? 'rtl' : 'ltr'
  }, quick_view_jsx(ProductInfo, null, quick_view_jsx(ProductTitlePriceWrapper, null, quick_view_jsx(ProductTitle, null, title), quick_view_jsx(ProductPriceWrapper, null, discountInPercent ? quick_view_jsx(SalePrice, null, constant["a" /* CURRENCY */], price) : '', quick_view_jsx(ProductPrice, null, constant["a" /* CURRENCY */], salePrice ? salePrice : price))), quick_view_jsx(ProductWeight, null, unit), quick_view_jsx(ProductDescription, null, quick_view_jsx(truncate["a" /* default */], {
    character: 600
  }, description)), quick_view_jsx(ProductCartWrapper, null, quick_view_jsx(ProductCartBtn, null, !isInCart(id) ? quick_view_jsx(button_button["a" /* Button */], {
    className: "cart-button",
    variant: "secondary",
    borderRadius: 100,
    onClick: handleAddClick
  }, quick_view_jsx(CartIcon["a" /* CartIcon */], null), quick_view_jsx(ButtonText, null, quick_view_jsx(external_react_intl_["FormattedMessage"], {
    id: "addEcoToCartButton",
    defaultMessage: "Cart"
  }))) : quick_view_jsx(counter["a" /* Counter */], {
    value: getItem(id).quantity,
    onDecrement: handleRemoveClick,
    onIncrement: handleAddClick
  }))), quick_view_jsx(ProductMeta, null, quick_view_jsx(MetaSingle, null, categories ? categories.map(item => quick_view_jsx(MetaItem, {
    onClick: () => onCategoryClick(item.slug),
    key: item.id
  }, item.title)) : '')))), isRtl && quick_view_jsx(ProductPreview, null, quick_view_jsx(multi_carousel, {
    items: gallery,
    deviceType: deviceType
  }), !!discountInPercent && quick_view_jsx(external_react_default.a.Fragment, null, quick_view_jsx(DiscountPercent, null, discountInPercent, "%"))))));
};

/* harmony default export */ var quick_view = __webpack_exports__["default"] = (QuickView);

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

/***/ "VlNk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const CartIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 14.4 12"
  }, __jsx("g", {
    "data-name": "Group 120",
    transform: "translate(-288 -413.89)"
  }, __jsx("path", {
    "data-name": "Path 154",
    fill: color,
    d: "M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0"
  })));
};

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

// EXTERNAL MODULE: ./src/utils/constant.ts
var constant = __webpack_require__("f/wd");

// CONCATENATED MODULE: ./src/contexts/language/language.provider.tsx
var __jsx = external_react_default.a.createElement;







const LanguageContext = external_react_default.a.createContext({}); // import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const LanguageProvider = ({
  children,
  messages
}) => {
  const [locale, setLocale] = external_react_default.a.useState('en');
  const OPEN_CAGE_KEY = process.env.OPEN_CAGE_KEY;
  const [location, setLocation] = external_react_default.a.useState('');

  const changeLanguage = newLocale => {
    setLocale(newLocale);
    document.documentElement.lang = newLocale;
    external_js_cookie_default.a.set('locale', newLocale);
  };

  external_react_default.a.useEffect(() => {
    setLocateBasedOnLocation();
  }, [locale, location]);

  const setLocateBasedOnLocation = () => {
    const isUs = location.toLowerCase().includes('united states');
    const isAr = location.toLowerCase().includes('argentina');

    if (isUs && locale !== constant["g" /* Locales */].EN) {
      changeLanguage(constant["g" /* Locales */].EN);
    } else if (isAr && locale !== constant["g" /* Locales */].ES) {
      changeLanguage(constant["g" /* Locales */].ES);
    }
  }; // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: 'AIzaSyBfOLWnTDHvAxu7eftvpbiGT54bcOZgwS0',
  // });
  // console.log('isLoaded',isLoaded)


  external_react_default.a.useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions.query({
        name: "geolocation"
      }).then(function (result) {
        // console.log(result);
        if (result.state === "granted") {
          //If granted then you can directly call your function here
          navigator.geolocation.getCurrentPosition(success, errors, options);
        } else if (result.state === "prompt") {
          //If prompt then the user will be asked to give permission
          navigator.geolocation.getCurrentPosition(success, errors, options);
        } else if (result.state === "denied") {//If denied then you have to show instructions to enable location
        }
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  function getLocationInfo(latitude, longitude) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=9224762c77b8486bb04d32f036690d2f`;
    fetch(url).then(response => response.json()).then(data => {
      if (data.status.code === 200) {
        // console.log("results:", data.results);
        setLocation(data.results[0].formatted);
      } else {
        console.log("Reverse geolocation request failed.");
      }
    }).catch(error => console.error(error));
  }

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    var crd = pos.coords; // console.log("Your current position is:");
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);
    // console.log(`More or less ${crd.accuracy} meters.`);

    getLocationInfo(crd.latitude, crd.longitude);
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

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
      isRtl,
      location
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

/***/ })

};;