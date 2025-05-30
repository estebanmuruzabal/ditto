exports.ids = [23,30];
exports.modules = {

/***/ "/z7V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdobeIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AdobeIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 20.309 18.116"
  }, __jsx("g", {
    id: "adobe-reader-symbol",
    transform: "translate(0 -2.031)"
  }, __jsx("path", {
    id: "Path_3",
    "data-name": "Path 3",
    d: "M20.138,15.811c-.723-1.305-3.888-2.137-6.683-2.294q-.379-.406-.772-.854c-2.4-2.747-3.375-6.738-3.738-8.852-.043-.448-.091-.821-.131-1.1-.032-.221-.1-.681-.579-.681a.547.547,0,0,0-.406.183.736.736,0,0,0-.115.646c.034.277.085.649.158,1.073.2,2.147.3,6.234-1.351,9.481q-.258.508-.514.973c-3.092.9-5.587,2.5-5.953,3.833a1.314,1.314,0,0,0,.324,1.3,1.883,1.883,0,0,0,1.4.626c1.463,0,3.13-1.629,4.956-4.84a15.678,15.678,0,0,1,2.4-.442c.3-.031.8-.1,1.1-.141a15.048,15.048,0,0,1,2.744-.148c2.241,2.33,4.074,3.511,5.447,3.511a1.913,1.913,0,0,0,1.718-1.012A1.253,1.253,0,0,0,20.138,15.811ZM1.773,19.067a.822.822,0,0,1-.616-.293.239.239,0,0,1-.063-.267c.188-.685,1.771-1.859,4.084-2.711C3.872,17.858,2.621,19.067,1.773,19.067Zm8.289-5.409c-.287.044-.754.1-1.042.135a15.8,15.8,0,0,0-1.606.246l.068-.134a15.362,15.362,0,0,0,1.5-5.689,15.89,15.89,0,0,0,2.89,5.157c.035.04.071.08.105.121A14.952,14.952,0,0,0,10.062,13.658ZM19.2,16.544a.844.844,0,0,1-.8.465h0c-.858,0-2.178-.812-3.758-2.3,2.445.307,4.236,1.047,4.557,1.628A.177.177,0,0,1,19.2,16.544Z",
    fill: color
  })));
};

/***/ }),

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

/***/ "3yRL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/virginiamuruzabal/work/ditto/client/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/components/product-details/product-details-two/product-details-two.style.tsx


const ProductDetailsWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "product-details-twostyle__ProductDetailsWrapper",
  componentId: "sc-17lq0v-0"
})(["background-color:", ";position:relative;display:flex;flex-wrap:wrap;align-items:stretch;box-sizing:border-box;*{box-sizing:border-box;}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
const ProductPreview = external_styled_components_default.a.div.withConfig({
  displayName: "product-details-twostyle__ProductPreview",
  componentId: "sc-17lq0v-1"
})(["width:50%;padding:60px;display:flex;align-items:center;justify-content:center;position:relative;img{display:block;max-width:100%;height:auto;}@media (max-width:990px){padding:30px 40px 60px;}@media (max-width:767px){flex:0 0 100%;max-width:100%;padding:30px 25px 60px;}"]);
const BackButton = external_styled_components_default.a.div.withConfig({
  displayName: "product-details-twostyle__BackButton",
  componentId: "sc-17lq0v-2"
})(["position:absolute;top:60px;left:60px;z-index:999;@media (max-width:990px){top:20px;left:25px;}.reusecore__button{font-family:", ";font-size:", "px;font-weight:", ";color:", ";height:30px;.btn-icon{margin-right:5px;}.btn-text{padding:0;}}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798C'));
const ProductInfo = external_styled_components_default.a.div.withConfig({
  displayName: "product-details-twostyle__ProductInfo",
  componentId: "sc-17lq0v-3"
})(["width:50%;border-left:1px solid ", ";padding:55px 60px;@media (max-width:990px){padding:30px 40px;}@media (max-width:767px){flex:0 0 100%;max-width:100%;padding:30px 25px;border:0;}"], Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'));
const SaleTag = external_styled_components_default.a.span.withConfig({
  displayName: "product-details-twostyle__SaleTag",
  componentId: "sc-17lq0v-4"
})(["font-size:", "px;font-weight:", ";color:", ";background-color:", ";padding:0 10px;line-height:24px;border-radius:", ";display:inline-block;position:absolute;top:20px;right:20px;"], Object(theme_get_["themeGet"])('fontSizes.xs', '12'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.yellow.alternate', '#f4c243'), Object(theme_get_["themeGet"])('radii.medium', '12px'));
const DiscountPercent = external_styled_components_default.a.span.withConfig({
  displayName: "product-details-twostyle__DiscountPercent",
  componentId: "sc-17lq0v-5"
})(["font-size:", "px;font-weight:", ";color:", ";line-height:24px;background-color:", ";padding-left:20px;padding-right:15px;position:relative;display:inline-block;position:absolute;bottom:180px;right:-60px;&:before{content:'';position:absolute;left:-8px;top:0;width:0;height:0;border-style:solid;border-width:0 8px 12px 0;border-color:transparent ", " transparent transparent;}&:after{content:'';position:absolute;left:-8px;bottom:0;width:0;height:0;border-style:solid;border-width:0 0 12px 8px;border-color:transparent transparent ", " transparent;}"], Object(theme_get_["themeGet"])('fontSizes.xs', '12'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.secondary.alternate', '#fc5c63'), Object(theme_get_["themeGet"])('colors.secondary.alternate', '#fc5c63'), Object(theme_get_["themeGet"])('colors.secondary.alternate', '#fc5c63'));
const BookTitle = external_styled_components_default.a.h1.withConfig({
  displayName: "product-details-twostyle__BookTitle",
  componentId: "sc-17lq0v-6"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.2;margin-bottom:15px;"], Object(theme_get_["themeGet"])('fonts.heading', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.lg', '21'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const AuthorName = external_styled_components_default.a.div.withConfig({
  displayName: "product-details-twostyle__AuthorName",
  componentId: "sc-17lq0v-7"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";display:flex;align-items:center;svg{margin-right:10px;}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const BookDescriptionWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "product-details-twostyle__BookDescriptionWrapper",
  componentId: "sc-17lq0v-8"
})(["display:flex;flex-direction:column;"]);
const BookDescription = external_styled_components_default.a.p.withConfig({
  displayName: "product-details-twostyle__BookDescription",
  componentId: "sc-17lq0v-9"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:2;margin-top:30px;margin-bottom:40px;display:flex;flex-direction:column;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.medium', '#424561'));
const BookMetaTable = external_styled_components_default.a.div.withConfig({
  displayName: "product-details-twostyle__BookMetaTable",
  componentId: "sc-17lq0v-10"
})(["display:flex;flex-direction:column;margin-bottom:40px;"]);
const BookMetaTableRow = external_styled_components_default.a.div.withConfig({
  displayName: "product-details-twostyle__BookMetaTableRow",
  componentId: "sc-17lq0v-11"
})(["display:flex;align-items:center;margin-bottom:15px;&:last-child{margin-bottom:0;}"]);
const BookMetaItem = external_styled_components_default.a.span.withConfig({
  displayName: "product-details-twostyle__BookMetaItem",
  componentId: "sc-17lq0v-12"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";&:first-child{width:200px;flex-shrink:0;}&:last-child{width:100%;}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.medium', '#424561'));
const ProductCartWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "product-details-twostyle__ProductCartWrapper",
  componentId: "sc-17lq0v-13"
})(["display:flex;flex-direction:column;"]);
const ProductPriceWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "product-details-twostyle__ProductPriceWrapper",
  componentId: "sc-17lq0v-14"
})(["display:flex;align-items:center;"]);
const ProductPrice = external_styled_components_default.a.div.withConfig({
  displayName: "product-details-twostyle__ProductPrice",
  componentId: "sc-17lq0v-15"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.md', '19'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'));
const SalePrice = external_styled_components_default.a.span.withConfig({
  displayName: "product-details-twostyle__SalePrice",
  componentId: "sc-17lq0v-16"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";font-style:italic;padding:0 5px;overflow:hidden;margin-right:15px;position:relative;display:flex;&:before{content:'';width:100%;height:1px;display:inline-block;background-color:", ";position:absolute;top:50%;left:0;}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.yellow.hover', '#FBB979'), Object(theme_get_["themeGet"])('colors.yellow.hover', '#FBB979'));
const ProductCartBtn = external_styled_components_default.a.div.withConfig({
  displayName: "product-details-twostyle__ProductCartBtn",
  componentId: "sc-17lq0v-17"
})(["margin-top:30px;display:flex;align-items:center;.cart-button{border-radius:20px;padding-left:20px;padding-right:20px;.btn-icon{margin-right:5px;svg{width:14px;height:auto;@media (max-width:990px){width:14px;}}}&.outline-button{margin-left:20px;.btn-icon{svg{width:16px;}}&:hover{color:", ";svg{color:", ";}}}}.quantity{width:115px;height:38px;}"], Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'));
const ButtonText = external_styled_components_default.a.span.withConfig({
  displayName: "product-details-twostyle__ButtonText",
  componentId: "sc-17lq0v-18"
})(["@media (max-width:767px){display:none;}"]);
const ProductMeta = external_styled_components_default.a.div.withConfig({
  displayName: "product-details-twostyle__ProductMeta",
  componentId: "sc-17lq0v-19"
})(["margin-top:60px;"]);
const MetaSingle = external_styled_components_default.a.div.withConfig({
  displayName: "product-details-twostyle__MetaSingle",
  componentId: "sc-17lq0v-20"
})(["display:flex;flex-wrap:wrap;"]);
const MetaItem = external_styled_components_default.a.span.withConfig({
  displayName: "product-details-twostyle__MetaItem",
  componentId: "sc-17lq0v-21"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-right:10px;background-color:", ";padding:0 15px;border-radius:", ";cursor:pointer;height:30px;display:flex;align-items:center;justify-content:center;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'), Object(theme_get_["themeGet"])('radii.base', '6px'));
const DetailsWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "product-details-twostyle__DetailsWrapper",
  componentId: "sc-17lq0v-22"
})(["background-color:", ";position:relative;display:flex;flex-direction:column;padding:60px 70px 0px;box-sizing:border-box;*{box-sizing:border-box;}", "{margin-bottom:20px;}@media (max-width:990px){padding:60px 30px 0px;}"], Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'), AuthorName);
const DetailsTitle = external_styled_components_default.a.h3.withConfig({
  displayName: "product-details-twostyle__DetailsTitle",
  componentId: "sc-17lq0v-23"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.2;margin-bottom:20px;"], Object(theme_get_["themeGet"])('fonts.heading', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.lg', '21'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const Description = external_styled_components_default.a.p.withConfig({
  displayName: "product-details-twostyle__Description",
  componentId: "sc-17lq0v-24"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:2;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.medium', '#424561'));
const Avatar = external_styled_components_default.a.div.withConfig({
  displayName: "product-details-twostyle__Avatar",
  componentId: "sc-17lq0v-25"
})(["width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;overflow:hidden;margin-right:20px;img{width:100%;height:auto;}"]);
const SocialNetworks = external_styled_components_default.a.div.withConfig({
  displayName: "product-details-twostyle__SocialNetworks",
  componentId: "sc-17lq0v-26"
})(["display:flex;align-items:center;margin-top:20px;"]);
const SocialIcon = external_styled_components_default.a.span.withConfig({
  displayName: "product-details-twostyle__SocialIcon",
  componentId: "sc-17lq0v-27"
})(["width:auto;height:16px;display:flex;align-items:center;justify-content:center;margin-right:10px;a{height:100%;}svg{width:auto;height:100%;}&:last-child{margin-right:0;}"]);
const RelatedItems = external_styled_components_default.a.div.withConfig({
  displayName: "product-details-twostyle__RelatedItems",
  componentId: "sc-17lq0v-28"
})(["margin-top:70px;margin-left:55px;margin-right:55px;@media (max-width:990px){margin-top:50px;margin-left:15px;margin-right:15px;}> h2{font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.2;margin-left:15px;margin-bottom:30px;@media (max-width:767px){margin-left:0;margin-bottom:25px;}}> div > div{flex:0 0 20%;max-width:20%;padding-left:15px;padding-right:15px;margin-bottom:30px;@media (max-width:1500px){flex:0 0 20%;max-width:20%;}@media (max-width:1400px){flex:0 0 25%;max-width:25%;}@media (max-width:1060px){flex:0 0 33.3333333%;max-width:33.3333333%;}@media (max-width:1199px) and (min-width:991px){padding-left:10px;padding-right:10px;}@media (max-width:768px){padding-left:7.5px;padding-right:7.5px;margin-bottom:15px;}@media (max-width:767px){flex:0 0 50%;max-width:50%;}}"], Object(theme_get_["themeGet"])('fonts.heading', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.lg', '21'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
// EXTERNAL MODULE: ./src/assets/icons/LongArrowLeft.tsx
var LongArrowLeft = __webpack_require__("iAPg");

// EXTERNAL MODULE: ./src/assets/icons/CartIcon.tsx
var CartIcon = __webpack_require__("VlNk");

// EXTERNAL MODULE: ./src/assets/icons/InkPen.tsx
var InkPen = __webpack_require__("cER5");

// EXTERNAL MODULE: ./src/assets/icons/AdobeIcon.tsx
var AdobeIcon = __webpack_require__("/z7V");

// EXTERNAL MODULE: ./src/assets/icons/Facebook.tsx
var Facebook = __webpack_require__("lJ4R");

// EXTERNAL MODULE: ./src/assets/icons/GooglePlus.tsx
var GooglePlus = __webpack_require__("j+XB");

// EXTERNAL MODULE: ./src/assets/icons/Twitter.tsx
var Twitter = __webpack_require__("DFQe");

// EXTERNAL MODULE: ./src/assets/icons/Linkedin.tsx
var Linkedin = __webpack_require__("QArJ");

// EXTERNAL MODULE: ./src/utils/constant.ts
var constant = __webpack_require__("f/wd");

// EXTERNAL MODULE: ./src/components/product-grid/product-list/product-list.tsx + 3 modules
var product_list = __webpack_require__("SZ6D");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./src/contexts/cart/use-cart.tsx + 2 modules
var use_cart = __webpack_require__("tFEG");

// EXTERNAL MODULE: ./src/components/counter/counter.tsx + 1 modules
var counter = __webpack_require__("0THn");

// CONCATENATED MODULE: ./src/components/product-details/product-details-two/product-details-two.tsx
var __jsx = external_react_default.a.createElement;



















const ProductDetails = ({
  product,
  deviceType
}) => {
  var _product$gallery$, _product$author, _product$author2, _product$author3, _product$author4, _product$author5;

  const {
    addItem,
    removeItem,
    getItem,
    isInCart
  } = Object(use_cart["b" /* useCart */])();
  const data = product;
  const scrollRef = Object(external_react_["useRef"])(null);

  const scrollToDiv = e => {
    e.preventDefault();
    window.scrollTo({
      top: scrollRef.current.getBoundingClientRect().top + window.pageYOffset - 65,
      behavior: 'smooth'
    });
  };

  const handleAddClick = e => {
    e.stopPropagation();
    addItem(data);
  };

  const handleRemoveClick = e => {
    e.stopPropagation();
    removeItem(data);
  };

  Object(external_react_["useEffect"])(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, []);
  return __jsx(external_react_default.a.Fragment, null, __jsx(ProductDetailsWrapper, {
    className: "product-card"
  }, __jsx(ProductPreview, null, __jsx(BackButton, null, __jsx(button_button["a" /* Button */], {
    type: "button",
    size: "small",
    style: {
      backgroundColor: '#ffffff',
      border: '1px solid #f1f1f1',
      color: '#77798c'
    },
    onClick: router_default.a.back
  }, __jsx(LongArrowLeft["a" /* LongArrowLeft */], null), __jsx(external_react_intl_["FormattedMessage"], {
    id: "backBtn",
    defaultMessage: "Back"
  }))), __jsx("img", {
    src: (product === null || product === void 0 ? void 0 : product.gallery) && (product === null || product === void 0 ? void 0 : (_product$gallery$ = product.gallery[0]) === null || _product$gallery$ === void 0 ? void 0 : _product$gallery$.url),
    alt: product === null || product === void 0 ? void 0 : product.title,
    className: "product-image"
  })), __jsx(ProductInfo, null, __jsx(BookTitle, null, product === null || product === void 0 ? void 0 : product.title), __jsx(AuthorName, null, __jsx(InkPen["a" /* InkPen */], null), " ", product === null || product === void 0 ? void 0 : (_product$author = product.author) === null || _product$author === void 0 ? void 0 : _product$author.name), __jsx(BookDescriptionWrapper, null, __jsx(BookDescription, null, product === null || product === void 0 ? void 0 : product.description.substring(0, 600), __jsx("a", {
    href: "#",
    onClick: scrollToDiv,
    style: {
      color: '#009e7f',
      fontWeight: 700
    }
  }, "Read More")), __jsx(BookMetaTable, null, (product === null || product === void 0 ? void 0 : product.meta) ? Object.entries(product === null || product === void 0 ? void 0 : product.meta).map(([item], i, arr) => i !== arr.length - 1 && i !== arr.length - 2 ? __jsx(BookMetaTableRow, {
    key: i
  }, __jsx(BookMetaItem, null, item.replace(/^[a-z]|[A-Z]/g, function (v, i) {
    return i === 0 ? v.toUpperCase() : ' ' + v.toLowerCase();
  })), __jsx(BookMetaItem, null, item === 'languages' ? product === null || product === void 0 ? void 0 : product.meta[item].map((lang, i, arr) => lang.charAt(0).toUpperCase() + lang.slice(1) + (i !== arr.length - 1 ? ', ' : '')) : product === null || product === void 0 ? void 0 : product.meta[item])) : '') : '')), __jsx(ProductCartWrapper, null, __jsx(ProductPriceWrapper, null, (product === null || product === void 0 ? void 0 : product.discountInPercent) ? __jsx(SalePrice, null, constant["d" /* CURRENCY */], product === null || product === void 0 ? void 0 : product.price) : null, __jsx(ProductPrice, null, constant["d" /* CURRENCY */], (product === null || product === void 0 ? void 0 : product.salePrice) ? product === null || product === void 0 ? void 0 : product.salePrice : product === null || product === void 0 ? void 0 : product.price)), __jsx(ProductCartBtn, null, !isInCart(data.id) ? __jsx(button_button["a" /* Button */], {
    className: "cart-button",
    variant: "secondary",
    borderRadius: 100,
    onClick: handleAddClick
  }, __jsx(CartIcon["a" /* CartIcon */], null), __jsx(ButtonText, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "addToCartButton",
    defaultMessage: "Cart"
  }))) : __jsx(counter["a" /* Counter */], {
    value: getItem(data.id).quantity,
    onDecrement: handleRemoveClick,
    onIncrement: handleAddClick
  }), (product === null || product === void 0 ? void 0 : product.meta) && (product === null || product === void 0 ? void 0 : product.meta.samplePDF.length) !== 0 ? __jsx(button_button["a" /* Button */], {
    title: "Read Free Sample",
    intlButtonId: "readFreeSampleButton",
    iconPosition: "left",
    size: "small",
    variant: "outlined",
    className: "outline-button",
    icon: __jsx(AdobeIcon["a" /* AdobeIcon */], null)
  }) : null)), __jsx(ProductMeta, null, __jsx(MetaSingle, null, (product === null || product === void 0 ? void 0 : product.categories) ? product === null || product === void 0 ? void 0 : product.categories.map(item => __jsx(link_default.a, {
    href: `/${product.type}?category=${item.slug}`,
    key: `link-${item.id}`
  }, __jsx("a", null, __jsx(MetaItem, null, item.title)))) : '')))), __jsx(DetailsWrapper, {
    ref: scrollRef
  }, __jsx(DetailsTitle, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "bookSectionTitle",
    defaultMessage: "About The Book"
  })), __jsx(Description, null, product === null || product === void 0 ? void 0 : product.description)), __jsx(DetailsWrapper, null, __jsx(DetailsTitle, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "authorSectionTitle",
    defaultMessage: "About The Author"
  })), __jsx(AuthorName, null, (product === null || product === void 0 ? void 0 : (_product$author2 = product.author) === null || _product$author2 === void 0 ? void 0 : _product$author2.avatar) && (product === null || product === void 0 ? void 0 : product.author.avatar.length) !== 0 ? __jsx(Avatar, null, __jsx("img", {
    src: product === null || product === void 0 ? void 0 : product.author.avatar,
    alt: product === null || product === void 0 ? void 0 : (_product$author3 = product.author) === null || _product$author3 === void 0 ? void 0 : _product$author3.name
  })) : __jsx(InkPen["a" /* InkPen */], null), product === null || product === void 0 ? void 0 : (_product$author4 = product.author) === null || _product$author4 === void 0 ? void 0 : _product$author4.name), __jsx(Description, null, product === null || product === void 0 ? void 0 : (_product$author5 = product.author) === null || _product$author5 === void 0 ? void 0 : _product$author5.bio), __jsx(SocialNetworks, null, (product === null || product === void 0 ? void 0 : product.author) && (product === null || product === void 0 ? void 0 : product.author.socials.map(item => item.profileLink.length !== 0 ? __jsx(SocialIcon, null, __jsx("a", {
    key: item.id,
    href: item.profileLink,
    target: "_blank"
  }, item.media === 'facebook' ? __jsx(Facebook["a" /* Facebook */], {
    color: "#3b5999"
  }) : item.media === 'twitter' ? __jsx(Twitter["a" /* Twitter */], {
    color: "#55acee"
  }) : item.media === 'google' ? __jsx(GooglePlus["a" /* GooglePlus */], {
    color: "#dd4b39"
  }) : item.media === 'linkedin' ? __jsx(Linkedin["a" /* Linkedin */], {
    color: "#0077B5"
  }) : '')) : '')))), __jsx(RelatedItems, null, __jsx("h2", null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "intlReletedItems",
    defaultMessage: "Related Items"
  })), __jsx(product_list["default"], {
    type: product === null || product === void 0 ? void 0 : product.type // type={product?.type?.toLowerCase()}
    ,
    deviceType: deviceType,
    loadMore: false,
    fetchLimit: 10
  })));
};

/* harmony default export */ var product_details_two = __webpack_exports__["default"] = (ProductDetails);

/***/ }),

/***/ "7JO8":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/no-result-a242b3bc908f26b79710c3d30f5230ac.svg";

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

/***/ "DFQe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Twitter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Twitter = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 29.915 24.313"
  }, __jsx("path", {
    id: "twitter_2_",
    "data-name": "twitter (2)",
    d: "M9.408,24.812c11.289,0,17.463-9.353,17.463-17.463q0-.4-.017-.793a12.488,12.488,0,0,0,3.062-3.178,12.243,12.243,0,0,1-3.525.966,6.159,6.159,0,0,0,2.7-3.395,12.313,12.313,0,0,1-3.9,1.49,6.143,6.143,0,0,0-10.459,5.6A17.426,17.426,0,0,1,2.082,1.624a6.143,6.143,0,0,0,1.9,8.194A6.091,6.091,0,0,1,1.2,9.05c0,.026,0,.051,0,.078a6.139,6.139,0,0,0,4.924,6.017,6.129,6.129,0,0,1-2.772.105,6.144,6.144,0,0,0,5.734,4.263A12.313,12.313,0,0,1,1.464,22.14,12.514,12.514,0,0,1,0,22.055a17.375,17.375,0,0,0,9.408,2.757",
    transform: "translate(0 -0.5)",
    fill: color
  }));
};

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

/***/ "QArJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Linkedin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Linkedin = ({
  width = '18px',
  height = '18px',
  color = 'currentColor'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 60.046 60.046"
  }, __jsx("g", {
    id: "Group_3542",
    "data-name": "Group 3542",
    transform: "translate(-167 -582)"
  }, __jsx("g", {
    id: "linkedin",
    transform: "translate(167 582)"
  }, __jsx("circle", {
    id: "Ellipse_46",
    "data-name": "Ellipse 46",
    cx: "30.023",
    cy: "30.023",
    r: "30.023",
    transform: "translate(0 0)",
    fill: color
  }), __jsx("g", {
    id: "Group_3541",
    "data-name": "Group 3541",
    transform: "translate(14.486 12.828)"
  }, __jsx("path", {
    id: "Path_6184",
    "data-name": "Path 6184",
    d: "M60.543,43.579V55.957H53.366V44.409c0-2.9-1.036-4.88-3.634-4.88a3.925,3.925,0,0,0-3.681,2.624,4.912,4.912,0,0,0-.238,1.749V55.956H38.637s.1-19.559,0-21.583h7.177v3.059c-.014.024-.035.048-.048.071h.048v-.071a7.125,7.125,0,0,1,6.468-3.565c4.721,0,8.261,3.085,8.261,9.713ZM31.129,23.969a3.74,3.74,0,1,0-.094,7.459h.047a3.741,3.741,0,1,0,.048-7.459ZM27.495,55.957h7.174V34.373H27.495Z",
    transform: "translate(-27.068 -23.969)",
    fill: "#f1f2f2"
  })))));
};

/***/ }),

/***/ "SZ6D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Products", function() { return /* binding */ Products; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/components/product-grid/product-list/product-list.style.tsx


const ProductsRow = external_styled_components_default.a.div.withConfig({
  displayName: "product-liststyle__ProductsRow",
  componentId: "sc-131y40d-0"
})(["display:flex;flex-wrap:wrap;margin-top:25px;background-color:", ";position:relative;z-index:1;margin:0 -15px;@media (max-width:768px){margin-left:-7.5px;margin-right:-7.5px;margin-top:15px;}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
const ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "product-liststyle__ButtonWrapper",
  componentId: "sc-131y40d-1"
})(["display:flex;justify-content:center;margin-top:30px;"]);
const ProductsCol = external_styled_components_default.a.div.withConfig({
  displayName: "product-liststyle__ProductsCol",
  componentId: "sc-131y40d-2"
})(["flex:0 0 20%;max-width:20%;padding-left:15px;padding-right:15px;margin-bottom:30px;.book-card{border-radius:0;}&.food-col{flex:0 0 25%;max-width:25%;}@media (min-width:1501px){&:nth-child(5n + 1){.book-card{border-radius:6px 0 0 6px;}}&:nth-child(5n){.book-card{border-radius:0 6px 6px 0;}}}@media (min-width:1301px) and (max-width:1500px){flex:0 0 25%;max-width:25%;&.food-col{flex:0 0 33.333%;max-width:33.333%;}&:nth-child(4n + 1){.book-card{border-radius:6px 0 0 6px;}}&:nth-child(4n){.book-card{border-radius:0 6px 6px 0;}}}@media (min-width:768px) and (max-width:1300px){flex:0 0 33.3333333%;max-width:33.3333333%;&.food-col{flex:0 0 33.3333333%;max-width:33.3333333%;padding-left:7.5px;padding-right:7.5px;margin-bottom:15px;}&:nth-child(3n + 1){.book-card{border-radius:6px 0 0 6px;}}&:nth-child(3n){.book-card{border-radius:0 6px 6px 0;}}}@media (max-width:1199px) and (min-width:991px){padding-left:10px;padding-right:10px;margin-bottom:20px;&.food-col{flex:0 0 50%;max-width:50%;}}@media (max-width:768px){padding-left:7.5px;padding-right:7.5px;margin-bottom:15px;}@media (max-width:767px){flex:0 0 50%;max-width:50%;&.food-col{flex:0 0 50%;max-width:50%;}&:nth-child(2n + 1){.book-card{border-radius:6px 0 0 6px;}}&:nth-child(2n){.book-card{border-radius:0 6px 6px 0;}}}"]);
const MedicineCol = external_styled_components_default.a.div.withConfig({
  displayName: "product-liststyle__MedicineCol",
  componentId: "sc-131y40d-3"
})(["flex:0 0 20%;max-width:20%;padding-left:15px;padding-right:15px;margin-bottom:30px;@media (max-width:1300px){flex:0 0 25%;max-width:25%;padding-left:10px;padding-right:10px;}@media (max-width:1099px) and (min-width:1025px){flex:0 0 33.333%;max-width:33.333%;}@media (max-width:767px){flex:0 0 33.333%;max-width:33.333%;padding-left:10px;padding-right:10px;margin-bottom:30px;}@media (max-width:560px){flex:0 0 50%;max-width:50%;padding-left:7.5px;padding-right:7.5px;margin-bottom:20px;}"]);
const NoResult = external_styled_components_default.a.div.withConfig({
  displayName: "product-liststyle__NoResult",
  componentId: "sc-131y40d-4"
})(["width:100%;padding:100px 30px;display:flex;justify-content:center;align-items:center;font-family:", ";font-size:", "px;font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.lg', '21'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const LoaderWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "product-liststyle__LoaderWrapper",
  componentId: "sc-131y40d-5"
})(["width:100%;height:100vh;display:flex;flex-wrap:wrap;"]);
const LoaderItem = external_styled_components_default.a.div.withConfig({
  displayName: "product-liststyle__LoaderItem",
  componentId: "sc-131y40d-6"
})(["width:25%;padding:0 15px;margin-bottom:30px;"]);
const ProductCardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "product-liststyle__ProductCardWrapper",
  componentId: "sc-131y40d-7"
})(["height:100%;> div{height:100%;}"]);
// EXTERNAL MODULE: ./src/utils/constant.ts
var constant = __webpack_require__("f/wd");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "apollo-client"
var external_apollo_client_ = __webpack_require__("Oyez");

// EXTERNAL MODULE: ./src/components/placeholder/placeholder.tsx
var placeholder = __webpack_require__("Sagj");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: ./src/components/no-result/no-result.svg
var no_result = __webpack_require__("7JO8");
var no_result_default = /*#__PURE__*/__webpack_require__.n(no_result);

// CONCATENATED MODULE: ./src/components/no-result/no-result.style.tsx


const NoResultWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "no-resultstyle__NoResultWrapper",
  componentId: "x1mg82-0"
})(["width:100%;display:flex;flex-direction:column;align-items:center;padding:50px 20px;h3{font-size:", "px;font-weight:", ";color:", ";margin:0 0 15px;}p{font-size:calc(", "px + 1px);font-weight:", ";color:", ";margin:0;}"], Object(theme_get_["themeGet"])('fontSizes.xl', '24'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798C'));
const ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "no-resultstyle__ImageWrapper",
  componentId: "x1mg82-1"
})(["margin-top:50px;width:100%;max-width:600px;display:flex;align-items:center;justify-content:center;img{max-width:100%;}"]);
const no_result_style_ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "no-resultstyle__ButtonWrapper",
  componentId: "x1mg82-2"
})(["width:100%;display:flex;justify-content:center;margin-top:70px;"]);
const Button = external_styled_components_default.a.button.withConfig({
  displayName: "no-resultstyle__Button",
  componentId: "x1mg82-3"
})(["cursor:pointer;display:inline-flex;align-items:center;justify-content:center;color:", ";background-color:", ";height:50px;border-radius:", ";font-family:", ";font-size:calc(", "px + 1px);font-weight:", ";text-decoration:none;text-transform:capitalize;padding:0 30px;border:0;transition:all 0.3s ease;"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('fonts.body', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'));
// EXTERNAL MODULE: ./src/assets/icons/ArrowPrev.tsx
var ArrowPrev = __webpack_require__("KclG");

// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// CONCATENATED MODULE: ./src/components/no-result/no-result.tsx
var __jsx = external_react_default.a.createElement;





 // import { SearchContext } from 'contexts/search/search.context';



const NoResultFound = ({
  id
}) => {
  const router = Object(router_["useRouter"])(); // const { dispatch } = React.useContext(SearchContext);

  function onClickButton() {
    // dispatch({
    //   type: 'RESET',
    // });
    const href = router.pathname;
    router.push(href, href, {
      shallow: true
    });
  }

  return __jsx(NoResultWrapper, {
    id: id
  }, __jsx("h3", null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "noResultFound",
    defaultMessage: "Sorry, No result found :("
  })), __jsx(ImageWrapper, null, __jsx("img", {
    src: no_result_default.a,
    alt: "No Result"
  })), __jsx(no_result_style_ButtonWrapper, null, __jsx("div", {
    onClick: onClickButton
  }, __jsx(button_button["a" /* Button */], null, __jsx(ArrowPrev["a" /* ArrowPrev */], null), " Go Back"))));
};

/* harmony default export */ var no_result_no_result = (NoResultFound);
// EXTERNAL MODULE: ./src/graphql/query/products.query.ts
var products_query = __webpack_require__("33lg");

// EXTERNAL MODULE: ./src/utils/images-path.ts
var images_path = __webpack_require__("W1nP");

// EXTERNAL MODULE: ./src/utils/use-media.ts
var use_media = __webpack_require__("ft+Y");

// CONCATENATED MODULE: ./src/components/product-grid/product-list/product-list.tsx
var product_list_jsx = external_react_default.a.createElement;
















const ErrorMessage = dynamic_default()(() => __webpack_require__.e(/* import() */ 35).then(__webpack_require__.bind(null, "quMH")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("quMH")],
    modules: ['components/error-message/error-message']
  }
});
const QuickView = dynamic_default()(() => __webpack_require__.e(/* import() */ 27).then(__webpack_require__.bind(null, "F5TP")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("F5TP")],
    modules: ['features/quick-view/quick-view']
  }
});
const GeneralCard = dynamic_default()(() => __webpack_require__.e(/* import() */ 29).then(__webpack_require__.bind(null, "MuUD")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("MuUD")],
    modules: ['components/product-card/product-card-one/product-card-one']
  }
});
const OneLineCard = dynamic_default()(() => __webpack_require__.e(/* import() */ 31).then(__webpack_require__.bind(null, "Op80")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("Op80")],
    modules: ['components/product-card/product-card-six/product-card-six']
  }
});
const BookCard = dynamic_default()(() => __webpack_require__.e(/* import() */ 32).then(__webpack_require__.bind(null, "7i2D")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("7i2D")],
    modules: ['components/product-card/product-card-two/product-card-two']
  }
}); // const FurnitureCard = dynamic(
//   import('components/product-card/product-card-three/product-card-three')
// );
// const MedicineCard = dynamic(
//   import('components/product-card/product-card-five/product-card-five')
// );

const Products = ({
  deviceType,
  fetchLimit = 20,
  category = 'frutas-y-verduras',
  loadMore = true,
  type
}) => {
  var _data$products$items;

  const router = Object(router_["useRouter"])();
  const isMobile = Object(use_media["a" /* useMedia */])('(max-width: 580px)');
  const {
    data,
    error,
    loading,
    fetchMore,
    networkStatus
  } = Object(react_hooks_["useQuery"])(products_query["a" /* GET_PRODUCTS */], {
    variables: {
      type: router.query.type,
      category: 'frutas-y-verduras',
      text: router.query.text,
      offset: 0,
      limit: fetchLimit
    },
    notifyOnNetworkStatusChange: true
  });
  const loadingMore = networkStatus === external_apollo_client_["NetworkStatus"].fetchMore; // Quick View Modal

  const handleModalClose = () => {
    const {
      pathname,
      query,
      asPath
    } = router;
    const as = asPath;
    router.push({
      pathname,
      query
    }, as, {
      shallow: true
    });
    Object(reuse_modal_["closeModal"])();
  };

  const handleQuickViewModal = (modalProps, deviceType, onModalClose) => {
    const {
      pathname,
      query
    } = router;
    const as = `/product/${modalProps.slug}`;

    if (pathname === '/product/[slug]') {
      router.push(pathname, as);
      return;
    }

    Object(reuse_modal_["openModal"])({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: false,
      component: QuickView,
      componentProps: {
        modalProps,
        deviceType,
        onModalClose
      },
      closeComponent: 'div',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 900,
        y: 30,
        height: 'auto',
        transition: {
          mass: 1,
          tension: 0,
          friction: 0
        }
      }
    });
    router.push({
      pathname,
      query
    }, {
      pathname: as
    }, {
      shallow: true
    });
  };

  if (error) return product_list_jsx(ErrorMessage, {
    message: error.message
  });

  if (loading && !loadingMore) {
    return product_list_jsx(LoaderWrapper, null, product_list_jsx(LoaderItem, null, product_list_jsx(placeholder["c" /* default */], {
      uniqueKey: "1"
    })), product_list_jsx(LoaderItem, null, product_list_jsx(placeholder["c" /* default */], {
      uniqueKey: "2"
    })), product_list_jsx(LoaderItem, null, product_list_jsx(placeholder["c" /* default */], {
      uniqueKey: "3"
    })));
  }

  if (!data || !data.products || data.products.items.length === 0) {
    return product_list_jsx(no_result_no_result, null);
  }

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        offset: Number(data.products.items.length),
        limit: fetchLimit
      },
      updateQuery: (previousResult, {
        fetchMoreResult
      }) => {
        if (!fetchMoreResult) {
          return previousResult;
        }

        return {
          products: {
            __typename: previousResult.products.__typename,
            items: [...previousResult.products.items, ...fetchMoreResult.products.items],
            hasMore: fetchMoreResult.products.hasMore
          }
        };
      }
    });
  };

  const renderCard = (productType, props) => {
    switch (productType) {
      // case 'book':
      //   return (
      //     <BookCard
      //       title={props.title}
      //       image={props.image}
      //       name={props?.author?.name}
      //       data={props}
      //       deviceType={deviceType}
      //       onClick={() =>
      //         router.push('/product/[slug]', `/product/${props.slug}`)
      //       }
      //     />
      //   );
      // case 'medicine':
      //   return (
      //     <MedicineCard
      //       title={props.name}
      //       currency={CURRENCY}
      //       image={SHOP_IMAGE_HOST+props.images[0]}
      //       price={props.price}
      //       weight={props.unit}
      //       data={props}
      //     />
      //   );
      // case 'furniture':
      //   return (
      //     <FurnitureCard
      //       title={props.name}
      //       image={SHOP_IMAGE_HOST+props.images[0]}
      //       discountInPercent={props.discount_in_percent}
      //       onClick={() =>
      //         handleQuickViewModal(props, deviceType, handleModalClose)
      //       }
      //     />
      //   );
      default:
        return product_list_jsx(GeneralCard, {
          title: props.name,
          description: props.description,
          image: images_path["a" /* SHOP_IMAGE_HOST */] + props.images[0],
          weight: props.unit,
          currency: constant["d" /* CURRENCY */],
          price: props.price,
          salePrice: props.sale_price,
          discountInPercent: props.discount_in_percent,
          data: props,
          deviceType: deviceType,
          onClick: () => router.push('/product/[slug]', `/product/${props.slug}`)
        });
    }
  };

  const onlineProducts = (_data$products$items = data.products.items) === null || _data$products$items === void 0 ? void 0 : _data$products$items.filter(product => (product === null || product === void 0 ? void 0 : product.is_online) === true);
  return product_list_jsx(external_react_default.a.Fragment, null, product_list_jsx(ProductsRow, {
    style: {
      display: isMobile ? 'block' : 'flex'
    }
  }, onlineProducts === null || onlineProducts === void 0 ? void 0 : onlineProducts.sort((a, b) => a.name.localeCompare(b.name)).map((item, index) => product_list_jsx(ProductsCol, {
    key: index,
    style: isMobile ? {
      maxWidth: '100%',
      paddingRight: 1
    } : {}
  }, product_list_jsx(ProductCardWrapper, {
    style: isMobile ? {
      display: 'flex'
    } : {}
  }, product_list_jsx(Fade_default.a, {
    duration: 800,
    delay: index * 10,
    style: {
      height: '100%'
    }
  }, renderCard(type, item)))))), loadMore && data.products.hasMore && product_list_jsx(ButtonWrapper, null, product_list_jsx(button_button["a" /* Button */], {
    onClick: handleLoadMore,
    loading: loadingMore,
    variant: "secondary",
    style: {
      fontSize: 14
    },
    border: "1px solid #f1f1f1"
  }, product_list_jsx(external_react_intl_["FormattedMessage"], {
    id: "loadMoreButton",
    defaultMessage: "Load More"
  }))));
};
/* harmony default export */ var product_list = __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "Sagj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarMobileLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarLoader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EGWi");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const PostLoader = props => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
  height: 350,
  width: 245,
  speed: 2,
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb"
}, props), __jsx("rect", {
  x: "2",
  y: "2",
  rx: "0",
  ry: "0",
  width: "240",
  height: "197"
}), __jsx("rect", {
  x: "15",
  y: "220",
  rx: "0",
  ry: "0",
  width: "140",
  height: "25"
}), __jsx("rect", {
  x: "15",
  y: "254",
  rx: "0",
  ry: "0",
  width: "65",
  height: "15"
}), __jsx("rect", {
  x: "15",
  y: "300",
  rx: "0",
  ry: "0",
  width: "67",
  height: "20"
}), __jsx("rect", {
  x: "170",
  y: "300",
  rx: "0",
  ry: "0",
  width: "60",
  height: "20"
}));

const SidebarMobileLoader = () => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, {
  height: 46,
  width: 400,
  speed: 2,
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb"
}, __jsx("rect", {
  x: "58",
  y: "10",
  rx: "0",
  ry: "0",
  width: "287",
  height: "26"
}), __jsx("rect", {
  x: "364",
  y: "10",
  rx: "0",
  ry: "0",
  width: "26",
  height: "26"
}), __jsx("rect", {
  x: "16",
  y: "10",
  rx: "0",
  ry: "0",
  width: "26",
  height: "26"
}));
const SidebarLoader = props => __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
  height: 400,
  width: "calc(100% - 30px)",
  speed: 2,
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb"
}, props), __jsx("rect", {
  x: "376",
  y: "22",
  rx: "0",
  ry: "0",
  width: "0",
  height: "0"
}), __jsx("rect", {
  x: "27",
  y: "50",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "50",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}), __jsx("rect", {
  x: "27",
  y: "89",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "89",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}), __jsx("rect", {
  x: "27",
  y: "128",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "128",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}), __jsx("rect", {
  x: "27",
  y: "167",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "167",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}), __jsx("rect", {
  x: "27",
  y: "206",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "206",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}), __jsx("rect", {
  x: "27",
  y: "245",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "245",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}), __jsx("rect", {
  x: "27",
  y: "284",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "284",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}), __jsx("rect", {
  x: "27",
  y: "323",
  rx: "0",
  ry: "0",
  width: "24",
  height: "24"
}), __jsx("rect", {
  x: "69",
  y: "323",
  rx: "0",
  ry: "0",
  width: "260",
  height: "24"
}));
/* harmony default export */ __webpack_exports__["c"] = (PostLoader);

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

/***/ "W1nP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADMIN_IMAGE_HOST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHOP_IMAGE_HOST; });
const ADMIN_IMAGE_HOST = process.env.REACT_APP_IMAGE_URL;
const SHOP_IMAGE_HOST = "http://3.134.177.166/";

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

/***/ "cER5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InkPen; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const InkPen = ({
  width = '18px',
  height = '18px',
  color = 'currentColor'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12.768 20.005"
  }, __jsx("defs", null, __jsx("clipPath", {
    id: "clip-path"
  }, __jsx("path", {
    id: "Path_2913",
    "data-name": "Path 2913",
    d: "M10.761-507.144a1.069,1.069,0,0,0,.831-.6,13.713,13.713,0,0,1,1.545-3.142.7.7,0,0,0-.013-.832.7.7,0,0,0-.791-.25,10.984,10.984,0,0,0-5.81,4.315,12.482,12.482,0,0,0-1.877,4.63A3.873,3.873,0,0,0,5-500.563l.872,1.724a12.331,12.331,0,0,0-.137,1.327H4.3a1,1,0,0,0-1,1,1,1,0,0,0,.886.993,2.5,2.5,0,0,1-.858.266,1.557,1.557,0,0,0-1.323,1.513s0,.005,0,.008v.006c0,.005,0,.011,0,.016v.935H.891a.391.391,0,0,0-.391.391A.391.391,0,0,0,.891-492H12.1a.391.391,0,0,0,.391-.391.391.391,0,0,0-.391-.391H10.659v-.935c0-.005,0-.011,0-.016v-.006s0-.006,0-.009a1.557,1.557,0,0,0-1.323-1.513,2.5,2.5,0,0,1-.858-.266,1,1,0,0,0,.886-.993,1,1,0,0,0-1-1H6.512A10.775,10.775,0,0,1,6.62-498.6l2-1.412a2.721,2.721,0,0,0,1.011-1.37c.317-.97.813-2.545,1.378-4.539a.913.913,0,0,0-.352-.945,1.03,1.03,0,0,1-.164-.187v0a1.636,1.636,0,0,1,.267-.091ZM2.79-492.777v-.7H9.878v.7Zm6.864-1.483H3.014a.788.788,0,0,1,.439-.223,2.453,2.453,0,0,0,1.6-.755,1.206,1.206,0,0,0,.165-.276H7.452a1.209,1.209,0,0,0,.165.276,2.453,2.453,0,0,0,1.6.755A.788.788,0,0,1,9.653-494.26Zm-1.071-2.254a.218.218,0,0,1-.218.218H4.3a.218.218,0,0,1-.218-.218.218.218,0,0,1,.218-.218H8.365A.218.218,0,0,1,8.582-496.513Zm1.523-9.794a1.212,1.212,0,0,1,.153.17v0c-.563,1.985-1.056,3.551-1.371,4.516a1.935,1.935,0,0,1-.719.974l-1.36.96a22.335,22.335,0,0,1,1.081-3.756.391.391,0,0,0-.218-.508.391.391,0,0,0-.508.218A22.616,22.616,0,0,0,6.1-500.114l-.406-.8a3.09,3.09,0,0,1-.279-1.956,11.7,11.7,0,0,1,1.757-4.337,10.181,10.181,0,0,1,5.2-3.942,14.966,14.966,0,0,0-1.517,3.142,1.258,1.258,0,0,1-.31.114c-.282.08-.667.189-.788.573A.933.933,0,0,0,10.106-506.307Z",
    transform: "translate(-0.5 512)",
    fill: color
  }))), __jsx("g", {
    id: "Group_3369",
    "data-name": "Group 3369",
    clipPath: "url(#clip-path)"
  }, __jsx("path", {
    id: "Path_2912",
    "data-name": "Path 2912",
    d: "M-4.5-496.6H8.659V-517H-4.5Z",
    transform: "translate(4.305 516.804)",
    fill: color
  })));
};

/***/ }),

/***/ "f/wd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CURRENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return resistenciaZipCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return plazadoceDeOctubrePolygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return plazaBelgranoPolygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return plazaEspañaPolygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return plazaNueveDeJulioPolygon; });
/* unused harmony export PICKUP_GUEMES_DELIVERY_METHOD */
/* unused harmony export PICKUP_GRANJA_DELIVERY_METHOD */
/* unused harmony export CUSTOMER_ADDRESS_DELIVERY_METHOD */
/* unused harmony export CASH_PAYMENT_OPTION */
/* unused harmony export CC_PAYMENT_OPTION */
/* unused harmony export BANK_TRANSFER_PAYMENT_OPTION */
/* unused harmony export BANK_TRANSFER_ALIAS */
/* unused harmony export BANK_TRANSFER_CBU */
/* unused harmony export COMPANY_EMAIL */
/* unused harmony export deliveryMethodCookieKeyName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DeliveryMethodsConstants; });
/* unused harmony export deliverySelectOptions */
/* unused harmony export DeliveryCarryMethodsConstants */
/* unused harmony export deliveryCarrySelectOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return Roles; });
/* unused harmony export roleSelectOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return currentLng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SensorsTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Locales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return timeZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return timezones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return RelaysIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return HumiditySensorMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return DistanceMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return PlugMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AirHumiditySensorMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return C02SensorMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AirTemperatureSensorMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CommonMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LightSensorMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return WeekDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return distanceModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return humidityModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return airHumiditySensorModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return c02SensorModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return airTemperatureSensorModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return lightModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return manualModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return fourRelaysOptions; });
/* unused harmony export eightRelaysOptions */
/************ CONSTANTS ***********/
const CURRENCY = '$';
const resistenciaZipCode = '3500';
const plazadoceDeOctubrePolygon = [[-27.438348, -58.972117], [-27.451195, -58.986501], [-27.441537, -58.997427], [27.428763, -58.983112]];
const plazaBelgranoPolygon = [[-27.4481, -58.96074], [-27.43829, -58.9722], [-27.45114, -58.98647], [-27.46134, -58.97495]];
const plazaEspañaPolygon = [[-27.45114, -58.98647], [-27.46134, -58.97495], [-27.47423, -58.98923], [-27.46392, -59.00075]];
const plazaNueveDeJulioPolygon = [[-27.46392, -59.00075], [-27.451147, -58.986537], [-27.44148, -58.99731], [-27.45442, -59.01161]]; // ditto bot personal variables (change in front and back):

const PICKUP_GUEMES_DELIVERY_METHOD = 'Lo busco en el centro';
const PICKUP_GRANJA_DELIVERY_METHOD = 'Lo busco en la granja';
const CUSTOMER_ADDRESS_DELIVERY_METHOD = 'Enviámelo a casa. ($300)';
const CASH_PAYMENT_OPTION = 'cash';
const CC_PAYMENT_OPTION = 'cc';
const BANK_TRANSFER_PAYMENT_OPTION = 'bank_transfer';
const BANK_TRANSFER_ALIAS = 'dittofarm';
const BANK_TRANSFER_CBU = '0000003100030458924685';
const COMPANY_EMAIL = 'dittofarmresistencia@gmail.com';
const deliveryMethodCookieKeyName = 'deliveryMethodSelected'; // **************** Delivery CONSTANT Start **************************

let DeliveryMethodsConstants;

(function (DeliveryMethodsConstants) {
  DeliveryMethodsConstants["PICKUP"] = "PICKUP";
  DeliveryMethodsConstants["DELIVERY"] = "DELIVERY";
})(DeliveryMethodsConstants || (DeliveryMethodsConstants = {}));

const deliverySelectOptions = [{
  value: DeliveryMethodsConstants.PICKUP,
  label: 'Pickup'
}, {
  value: DeliveryMethodsConstants.DELIVERY,
  label: 'Delivery'
}];
let DeliveryCarryMethodsConstants;

(function (DeliveryCarryMethodsConstants) {
  DeliveryCarryMethodsConstants["OWN_BAG"] = "OWN_BAG";
  DeliveryCarryMethodsConstants["CARTOON_BOX"] = "CARTOON_BOX";
  DeliveryCarryMethodsConstants["WOODEN_BOX"] = "WOODEN_BOX";
})(DeliveryCarryMethodsConstants || (DeliveryCarryMethodsConstants = {}));

const deliveryCarrySelectOptions = [{
  value: DeliveryCarryMethodsConstants.OWN_BAG,
  label: 'I have my own bag'
}, {
  value: DeliveryCarryMethodsConstants.CARTOON_BOX,
  label: 'I want a box'
}, {
  value: DeliveryCarryMethodsConstants.WOODEN_BOX,
  label: 'I want to signup for exchangeble wooden box'
}]; // **************** Roles CONSTANT Start **************************

let Roles;

(function (Roles) {
  Roles["ADMIN"] = "ADMIN";
  Roles["MANAGER"] = "MANAGER";
  Roles["MEMBER"] = "MEMBER";
  Roles["DELIVERY_BOY"] = "DELIVERY_BOY";
  Roles["CLIENT"] = "CLIENT";
  Roles["STAFF"] = "STAFF";
  Roles["GROWER"] = "GROWER";
})(Roles || (Roles = {}));

const roleSelectOptions = [{
  value: Roles.ADMIN,
  label: 'Admin'
}, {
  value: Roles.MANAGER,
  label: 'Manager'
}, {
  value: Roles.MEMBER,
  label: 'Member'
}, {
  value: Roles.DELIVERY_BOY,
  label: 'Delivery boy'
}, {
  value: Roles.CLIENT,
  label: 'Client'
}, {
  value: Roles.GROWER,
  label: 'Grower'
}, {
  value: Roles.STAFF,
  label: 'Staff'
}]; // this should be part of delivery option MODEL, and come from API

const deliveryAreaPolygon = [{
  lat: 3.1336599385978805,
  lng: 101.31866455078125
}, {
  lat: 3.3091633559540123,
  lng: 101.66198730468757
}, {
  lat: 3.091150714460597,
  lng: 101.92977905273438
}, {
  lat: 3.1336599385978805,
  lng: 101.31866455078125
} // last point has to be same as first point
];
const currentLng = 'ar';
let SensorsTypes;

(function (SensorsTypes) {
  SensorsTypes["SOIL_HUMIDITY"] = "SOIL_HUMIDITY";
  SensorsTypes["LIGHT"] = "LIGHT";
  SensorsTypes["DISTANCE"] = "DISTANCE";
  SensorsTypes["PLUG"] = "PLUG";
  SensorsTypes["C02"] = "C02";
  SensorsTypes["HUMIDITY"] = "HUMIDITY";
  SensorsTypes["TEMPETURE"] = "TEMPETURE";
})(SensorsTypes || (SensorsTypes = {}));

let Locales;

(function (Locales) {
  Locales["ES"] = "es";
  Locales["EN"] = "en";
})(Locales || (Locales = {}));

const timeZone = 'America/Argentina/Buenos_Aires';
const timezones = ['America/Argentina/Buenos_Aires', 'America/Port_of_Spain', 'America/Eirunepe', 'America/Rio_Branco', 'America/Nassau', 'America/Belize', 'America/New_York', 'America/Detroit', 'America/North_Dakota/Center', 'America/North_Dakota/New_Salem', 'America/North_Dakota/Beulah', 'America/Denver', 'America/Boise', 'America/Phoenix', 'America/Los_Angeles'];
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
  HumiditySensorMode["INTERMITTENT_IRRIGATION"] = "INTERMITTENT_IRRIGATION";
  HumiditySensorMode["IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND"] = "IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND";
  HumiditySensorMode["IRRIGATE_SPECIFICT_AMOUNT_WITH_DOUBLE_ACTION"] = "IRRIGATE_SPECIFICT_AMOUNT_WITH_DOUBLE_ACTION";
  HumiditySensorMode["SEEDS_POOL_IRRIGATION"] = "SEEDS_POOL_IRRIGATION";
  HumiditySensorMode["MANUAL"] = "HUMIDITY_MANUAL";
  HumiditySensorMode["MIN_WARNING"] = "HUMIDITY_MIN_WARNING";
  HumiditySensorMode["MAX_WARNING"] = "HUMIDITY_MAX_WARNING";
  HumiditySensorMode["SCHEDULE"] = "HUMIDITY_SCHEDULE";
  HumiditySensorMode["SCHEDULE_DOUBLE_ACTION"] = "HUMIDITY_SCHEDULE_DOUBLE_ACTION";
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

let AirHumiditySensorMode;

(function (AirHumiditySensorMode) {
  AirHumiditySensorMode["MANUAL"] = "AIR_HUM_MANUAL";
  AirHumiditySensorMode["SCHEDULE"] = "AIR_HUM_SCHEDULE";
  AirHumiditySensorMode["WHEN_MIN_ACTION_AUTOMATED"] = "AIR_HUM_WHEN_MIN_ACTION_AUTOMATED";
  AirHumiditySensorMode["WHEN_MAX_ACTION_AUTOMATED"] = "AIR_HUM_WHEN_MAX_ACTION_AUTOMATED";
  AirHumiditySensorMode["NONE"] = "NONE";
})(AirHumiditySensorMode || (AirHumiditySensorMode = {}));

let C02SensorMode;

(function (C02SensorMode) {
  C02SensorMode["MANUAL"] = "C02_MANUAL";
  C02SensorMode["SCHEDULE"] = "C02_SCHEDULE";
  C02SensorMode["WHEN_MIN_ACTION_AUTOMATED"] = "C02_WHEN_MIN_ACTION_AUTOMATED";
  C02SensorMode["WHEN_MAX_ACTION_AUTOMATED"] = "C02_WHEN_MAX_ACTION_AUTOMATED";
  C02SensorMode["NONE"] = "NONE";
})(C02SensorMode || (C02SensorMode = {}));

let AirTemperatureSensorMode;

(function (AirTemperatureSensorMode) {
  AirTemperatureSensorMode["MANUAL"] = "AIR_TEMP_MANUAL";
  AirTemperatureSensorMode["SCHEDULE"] = "AIR_TEMP_SCHEDULE";
  AirTemperatureSensorMode["WHEN_MIN_ACTION_AUTOMATED"] = "AIR_TEMP_WHEN_MIN_ACTION_AUTOMATED";
  AirTemperatureSensorMode["WHEN_MAX_ACTION_AUTOMATED"] = "AIR_TEMP_WHEN_MAX_ACTION_AUTOMATED";
  AirTemperatureSensorMode["NONE"] = "NONE";
})(AirTemperatureSensorMode || (AirTemperatureSensorMode = {}));

let CommonMode;

(function (CommonMode) {
  CommonMode["NONE"] = "NONE";
})(CommonMode || (CommonMode = {}));

let LightSensorMode;

(function (LightSensorMode) {
  LightSensorMode["MANUAL"] = "LIGHT_MANUAL";
  LightSensorMode["SCHEDULE"] = "LIGHT_SCHEDULE";
  LightSensorMode["NONE"] = "NONE";
})(LightSensorMode || (LightSensorMode = {}));

const WeekDays = [0, 1, 2, 3, 4, 5, 6]; // - Accion vacio custom: activa relay asociado x cantidad de tiempo
// - Accion vacio automatico: avisa cuando esta vacio y activa relay asociado hasta llegar al maximo
// - Accion lleno custom: avisa cuando esta lleno y activa relay asociado x cantidad de tiempo
// - Accion lleno automatico: avisa cuando esta lleno y activa relay asociado hasta llegar al minimo
// - Aviso vacio: avisa cuando esta vacio.
// - Aviso lleno: avisa cuando esta lleno.

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
  value: HumiditySensorMode.INTERMITTENT_IRRIGATION,
  label: 'Riego intermitente'
}, {
  value: HumiditySensorMode.MIN_WARNING,
  label: 'Aviso en mínimos'
}, {
  value: HumiditySensorMode.MAX_WARNING,
  label: 'Aviso en máximos'
}, {
  value: HumiditySensorMode.MANUAL,
  label: 'Manual'
}, {
  value: HumiditySensorMode.IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND,
  label: 'A demanda cant. exacta'
}, {
  value: HumiditySensorMode.IRRIGATE_SPECIFICT_AMOUNT_WITH_DOUBLE_ACTION,
  label: 'A demanda cant. exacta, doble acción'
}, {
  value: HumiditySensorMode.IRRIGATE_ON_DEMAND,
  label: 'A demanda'
}, {
  value: HumiditySensorMode.SCHEDULE,
  label: 'Calendario'
}, {
  value: HumiditySensorMode.SCHEDULE_DOUBLE_ACTION,
  label: 'Calendario, doble acción'
}, {
  value: HumiditySensorMode.NONE,
  label: 'Ninguno'
}];
const airHumiditySensorModeOptions = [{
  value: AirHumiditySensorMode.MANUAL,
  label: 'Manual'
}, {
  value: AirHumiditySensorMode.SCHEDULE,
  label: 'Calendario'
}, {
  value: AirHumiditySensorMode.WHEN_MIN_ACTION_AUTOMATED,
  label: 'Acción < de mín.'
}, {
  value: AirHumiditySensorMode.WHEN_MAX_ACTION_AUTOMATED,
  label: 'Acción > de máx.'
}, {
  value: AirHumiditySensorMode.NONE,
  label: 'Ninguno'
}];
const c02SensorModeOptions = [{
  value: C02SensorMode.MANUAL,
  label: 'Manual'
}, {
  value: C02SensorMode.SCHEDULE,
  label: 'Calendario'
}, {
  value: C02SensorMode.WHEN_MIN_ACTION_AUTOMATED,
  label: 'Acción < de mín.'
}, {
  value: C02SensorMode.WHEN_MAX_ACTION_AUTOMATED,
  label: 'Acción > de máx.'
}, {
  value: C02SensorMode.NONE,
  label: 'Ninguno'
}];
const airTemperatureSensorModeOptions = [{
  value: AirTemperatureSensorMode.MANUAL,
  label: 'Manual'
}, {
  value: AirTemperatureSensorMode.SCHEDULE,
  label: 'Calendario'
}, {
  value: AirTemperatureSensorMode.WHEN_MIN_ACTION_AUTOMATED,
  label: 'Acción < de mín.'
}, {
  value: AirTemperatureSensorMode.WHEN_MAX_ACTION_AUTOMATED,
  label: 'Acción > de máx.'
}, {
  value: AirTemperatureSensorMode.NONE,
  label: 'Ninguno'
}];
const lightModeOptions = [{
  value: LightSensorMode.MANUAL,
  label: 'Manual'
}, {
  value: LightSensorMode.SCHEDULE,
  label: 'Calendario'
}, {
  value: LightSensorMode.NONE,
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

/***/ "ft+Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useMedia; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const isClient = false;
const useMedia = (query, defaultState = false) => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isClient ? () => window.matchMedia(query).matches : defaultState);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let mounted = true;
    const mql = window.matchMedia(query);

    const onChange = () => {
      if (!mounted) {
        return;
      }

      setState(!!mql.matches);
    };

    mql.addListener(onChange);
    setState(mql.matches);
    return () => {
      mounted = false;
      mql.removeListener(onChange);
    };
  }, [query]);
  return state;
};

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

/***/ "iAPg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LongArrowLeft; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const LongArrowLeft = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 8.003"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_ios-arrow-round-back (2)",
    d: "M116.447,160.177a.545.545,0,0,1,0,.767l-2.53,2.538h9.641a.542.542,0,0,1,0,1.084h-9.641l2.534,2.538a.549.549,0,0,1,0,.767.54.54,0,0,1-.763,0l-3.435-3.46a.608.608,0,0,1-.113-.171.517.517,0,0,1-.042-.208.543.543,0,0,1,.154-.379l3.435-3.46A.531.531,0,0,1,116.447,160.177Z",
    transform: "translate(-112.1 -160.023)",
    fill: color
  }));
};

/***/ }),

/***/ "j+XB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GooglePlus; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const GooglePlus = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    id: "google-hangouts",
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 17.239 11.111"
  }, __jsx("path", {
    id: "Path_1",
    "data-name": "Path 1",
    d: "M5.589,2.02A3.559,3.559,0,0,1,8.417,3.444L9.852,2a5.552,5.552,0,1,0,1.081,5.071,5.385,5.385,0,0,0,.212-1.515V5.05H6.094V7.07H8.771A3.514,3.514,0,0,1,5.589,9.091,3.568,3.568,0,0,1,2.02,5.555,3.568,3.568,0,0,1,5.589,2.02Zm0,0",
    fill: color
  }), __jsx("path", {
    id: "Path_2",
    "data-name": "Path 2",
    d: "M364.535,90h-2.02v1.515H361v2.02h1.515V95.05h2.02V93.535h1.549v-2.02h-1.549Zm0,0",
    transform: "translate(-348.845 -86.97)",
    fill: color
  }));
};

/***/ }),

/***/ "jvFD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KeDb")


/***/ }),

/***/ "lJ4R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Facebook; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Facebook = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 17 17"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_logo-facebook (1)",
    d: "M80.061,64H64.939a.939.939,0,0,0-.939.939V80.061a.939.939,0,0,0,.939.939H72.5V74.271H70.468V71.792H72.5V69.959a3.23,3.23,0,0,1,3.484-3.391c.939,0,1.948.071,2.183.1v2.293H76.6c-1.067,0-1.271.5-1.271,1.248v1.58h2.541l-.332,2.479H75.333V81h4.728A.939.939,0,0,0,81,80.061V64.939A.939.939,0,0,0,80.061,64Z",
    transform: "translate(-64 -64)",
    fill: color
  }));
};

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

  const getItemsCount = ((_state$items3 = state.items) === null || _state$items3 === void 0 ? void 0 : _state$items3.reduce((acc, item) => acc + (item.quantity || 0), 0)) || 0;
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
      addRecicledItemHandler,
      removeRecicledItemHandler,
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

/***/ })

};;