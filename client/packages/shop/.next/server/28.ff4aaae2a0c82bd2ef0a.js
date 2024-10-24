exports.ids = [28];
exports.modules = {

/***/ "7JO8":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/no-result-a242b3bc908f26b79710c3d30f5230ac.svg";

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

// CONCATENATED MODULE: ./src/components/product-grid/product-list/product-list.tsx
var product_list_jsx = external_react_default.a.createElement;















const ErrorMessage = dynamic_default()(() => __webpack_require__.e(/* import() */ 32).then(__webpack_require__.bind(null, "quMH")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("quMH")],
    modules: ['components/error-message/error-message']
  }
});
const QuickView = dynamic_default()(() => __webpack_require__.e(/* import() */ 26).then(__webpack_require__.bind(null, "F5TP")), {
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
}); // const BookCard = dynamic(
//   import('components/product-card/product-card-two/product-card-two')
// );
// const FurnitureCard = dynamic(
//   import('components/product-card/product-card-three/product-card-three')
// );
// const MedicineCard = dynamic(
//   import('components/product-card/product-card-five/product-card-five')
// );

const Products = ({
  deviceType,
  fetchLimit = 20,
  loadMore = true,
  type
}) => {
  var _data$products$items;

  const router = Object(router_["useRouter"])();
  const {
    data,
    error,
    loading,
    fetchMore,
    networkStatus
  } = Object(react_hooks_["useQuery"])(products_query["a" /* GET_PRODUCTS */], {
    variables: {
      type: router.query.type,
      text: router.query.text,
      category: router.query.category,
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
  return product_list_jsx(external_react_default.a.Fragment, null, product_list_jsx(ProductsRow, null, onlineProducts === null || onlineProducts === void 0 ? void 0 : onlineProducts.map((item, index) => product_list_jsx(ProductsCol, {
    key: index,
    style: type === 'book' ? {
      paddingLeft: 0,
      paddingRight: 1
    } : {}
  }, product_list_jsx(ProductCardWrapper, null, product_list_jsx(Fade_default.a, {
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

/***/ "f/wd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CURRENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return resistenciaZipCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return plazadoceDeOctubrePolygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return plazaBelgranoPolygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return plazaEspañaPolygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return plazaNueveDeJulioPolygon; });
/* unused harmony export PICKUP_GUEMES_DELIVERY_METHOD */
/* unused harmony export PICKUP_GRANJA_DELIVERY_METHOD */
/* unused harmony export CUSTOMER_ADDRESS_DELIVERY_METHOD */
/* unused harmony export CASH_PAYMENT_OPTION */
/* unused harmony export CC_PAYMENT_OPTION */
/* unused harmony export BANK_TRANSFER_PAYMENT_OPTION */
/* unused harmony export BANK_TRANSFER_ALIAS */
/* unused harmony export BANK_TRANSFER_CBU */
/* unused harmony export COMPANY_EMAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return deliveryMethodCookieKeyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DeliveryMethodsConstants; });
/* unused harmony export deliverySelectOptions */
/* unused harmony export DeliveryCarryMethodsConstants */
/* unused harmony export deliveryCarrySelectOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return Roles; });
/* unused harmony export roleSelectOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return currentLng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SensorsTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Locales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return timeZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return timezones; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return distanceModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return humidityModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return airHumiditySensorModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return c02SensorModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return airTemperatureSensorModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return lightModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return manualModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return fourRelaysOptions; });
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
const deliveryMethodCookieKeyName = 'deliveryMethodSaved'; // **************** Delivery CONSTANT Start **************************

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

/***/ })

};;