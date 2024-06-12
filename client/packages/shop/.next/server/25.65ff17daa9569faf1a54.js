exports.ids = [25];
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

/***/ "AmvX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: /Users/estebanmuruzabal/work/ditto/client/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./src/features/carts/cart.style.tsx
var cart_style = __webpack_require__("fofi");

// EXTERNAL MODULE: ./src/assets/icons/CloseIcon.tsx
var CloseIcon = __webpack_require__("2nMb");

// EXTERNAL MODULE: ./src/assets/icons/ShoppingBagLarge.tsx
var ShoppingBagLarge = __webpack_require__("AuPN");

// EXTERNAL MODULE: ./src/assets/icons/NoCartBag.tsx
var NoCartBag = __webpack_require__("MXV/");

// EXTERNAL MODULE: ./src/utils/constant.ts
var constant = __webpack_require__("f/wd");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./src/contexts/language/language.provider.tsx + 2 modules
var language_provider = __webpack_require__("uiyz");

// EXTERNAL MODULE: external "react-custom-scrollbars"
var external_react_custom_scrollbars_ = __webpack_require__("qC9r");

// EXTERNAL MODULE: ./src/contexts/cart/use-cart.tsx + 2 modules
var use_cart = __webpack_require__("tFEG");

// EXTERNAL MODULE: ./src/components/counter/counter.tsx + 1 modules
var counter = __webpack_require__("0THn");

// EXTERNAL MODULE: ./src/utils/images-path.ts
var images_path = __webpack_require__("W1nP");

// EXTERNAL MODULE: ./src/utils/use-media.ts
var use_media = __webpack_require__("ft+Y");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/css"
var css_ = __webpack_require__("ExBD");
var css_default = /*#__PURE__*/__webpack_require__.n(css_);

// CONCATENATED MODULE: ./src/components/cart-item/cart-item.style.tsx


const ItemBox = external_styled_components_default.a.div.withConfig({
  displayName: "cart-itemstyle__ItemBox",
  componentId: "kbjfen-0"
})(css_default()({
  fontSize: 'base',
  fontWeight: 'bold',
  py: 15,
  px: 25,
  borderBottom: `1px solid`,
  borderBottomColor: 'gray.200'
}), {
  display: 'flex',
  alignItems: 'center'
});
const Information = external_styled_components_default.a.div.withConfig({
  displayName: "cart-itemstyle__Information",
  componentId: "kbjfen-1"
})({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '15px'
});
const Image = external_styled_components_default.a.img.withConfig({
  displayName: "cart-itemstyle__Image",
  componentId: "kbjfen-2"
})({
  width: 60,
  height: 60,
  objectFit: 'cover',
  margin: '0 15px'
});
const Name = external_styled_components_default.a.span.withConfig({
  displayName: "cart-itemstyle__Name",
  componentId: "kbjfen-3"
})(css_default()({
  fontWeight: 'md',
  color: 'text.bold',
  mb: '0px',
  lineHeight: 1.5
}));
const Price = external_styled_components_default.a.span.withConfig({
  displayName: "cart-itemstyle__Price",
  componentId: "kbjfen-4"
})(css_default()({
  color: 'primary.regular',
  mt: '10px',
  mb: '10px'
}));
const Weight = external_styled_components_default.a.span.withConfig({
  displayName: "cart-itemstyle__Weight",
  componentId: "kbjfen-5"
})(css_default()({
  fontSize: 'sm',
  fontWeight: 'regular',
  color: 'text.regular',
  mb: '5px'
}));
const Total = external_styled_components_default.a.span.withConfig({
  displayName: "cart-itemstyle__Total",
  componentId: "kbjfen-6"
})(css_default()({
  color: 'text.bold',
  ml: 'auto'
}));
const RemoveButton = external_styled_components_default.a.button.withConfig({
  displayName: "cart-itemstyle__RemoveButton",
  componentId: "kbjfen-7"
})({
  padding: '5px',
  border: 0,
  outline: 0,
  marginLeft: '15px',
  cursor: 'pointer',
  color: 'rgba(0, 0, 0, 0.25)',
  transition: 'all 0.4s ease',
  backgroundColor: 'transparent',
  '&:hover': {
    color: 'red'
  }
});
// CONCATENATED MODULE: ./src/components/cart-item/cart-item.tsx
var __jsx = external_react_default.a.createElement;







const CartItem = ({
  data,
  onDecrement,
  onIncrement,
  onRemove
}) => {
  const mobile = Object(use_media["a" /* useMedia */])('(max-width: 580px)');
  const {
    name,
    images,
    price,
    salePrice,
    unit,
    quantity = 0,
    recicledQuantity = 0,
    packagePrice
  } = data;
  const recicledPrice = price - packagePrice;
  const totalQuantity = quantity + recicledQuantity;
  const displayPrice = salePrice || price;
  const nonRecicledTotalPrice = displayPrice * quantity;
  const recicledTotalPrice = recicledPrice * recicledQuantity || 0;
  const totalPrice = nonRecicledTotalPrice + recicledTotalPrice;
  return __jsx(ItemBox, null, recicledQuantity < 1 && __jsx(counter["a" /* Counter */], {
    value: totalQuantity,
    onDecrement: onDecrement,
    onIncrement: onIncrement,
    variant: "lightVertical"
  }), !mobile && __jsx(Image, {
    src: images_path["a" /* SHOP_IMAGE_HOST */] + images[0]
  }), __jsx(Information, null, __jsx(Name, null, name), recicledQuantity > 0 && __jsx(Weight, null, recicledQuantity, " X ", constant["d" /* CURRENCY */], recicledPrice), quantity > 0 && __jsx(Weight, null, quantity, " X ", constant["d" /* CURRENCY */], price)), __jsx(Total, null, constant["d" /* CURRENCY */], totalPrice.toFixed(2)), __jsx(RemoveButton, {
    onClick: onRemove
  }, __jsx(CloseIcon["a" /* CloseIcon */], null)));
};
// CONCATENATED MODULE: ./src/features/carts/cart.tsx
var cart_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const Cart = ({
  style,
  className,
  onCloseBtnClick,
  scrollbarHeight
}) => {
  const {
    items,
    coupon,
    addItem,
    removeItem,
    removeItemFromCart,
    cartItemsCount,
    calculatePrice,
    applyCoupon
  } = Object(use_cart["b" /* useCart */])();
  const {
    0: couponText,
    1: setCoupon
  } = Object(external_react_["useState"])('');
  const {
    0: displayCoupon,
    1: showCoupon
  } = Object(external_react_["useState"])(false);
  const {
    0: showProductQuantityExceededMsg,
    1: setShowProductQuantityExceededMsg
  } = Object(external_react_["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])('');
  const {
    isRtl
  } = Object(language_provider["b" /* useLocale */])();
  const totalPrice = calculatePrice();

  const handleChange = e => {
    setCoupon(e.currentTarget.value);
  };

  const showProductQuantityExceededMsgFor5Sec = () => {
    setShowProductQuantityExceededMsg(true);
    setTimeout(() => {
      setShowProductQuantityExceededMsg(false);
    }, 1500);
  };

  const addOneMore = item => {
    item.quantity < item.product_quantity ? addItem(item) : showProductQuantityExceededMsgFor5Sec();
  };

  const toggleCoupon = () => {
    showCoupon(true);
  };

  return cart_jsx(cart_style["a" /* CartPopupBody */], {
    className: className,
    style: style
  }, cart_jsx(cart_style["j" /* PopupHeader */], null, cart_jsx(cart_style["k" /* PopupItemCount */], null, cart_jsx(ShoppingBagLarge["a" /* ShoppingBagLarge */], {
    width: "19px",
    height: "24px"
  }), cart_jsx("span", null, cartItemsCount, "\xA0", cartItemsCount > 1 ? cart_jsx(external_react_intl_["FormattedMessage"], {
    id: "cartItems",
    defaultMessage: "items"
  }) : cart_jsx(external_react_intl_["FormattedMessage"], {
    id: "cartItem",
    defaultMessage: "item"
  }))), cart_jsx(cart_style["e" /* CloseButton */], {
    onClick: onCloseBtnClick
  }, cart_jsx(CloseIcon["a" /* CloseIcon */], null))), cart_jsx(external_react_custom_scrollbars_["Scrollbars"], {
    universal: true,
    autoHide: true,
    autoHeight: true,
    autoHeightMax: scrollbarHeight,
    renderView: props => cart_jsx("div", _extends({}, props, {
      style: _objectSpread(_objectSpread({}, props.style), {}, {
        marginLeft: isRtl ? props.style.marginRight : 0,
        marginRight: isRtl ? 0 : props.style.marginRight
      })
    }))
  }, cart_jsx(cart_style["f" /* ItemWrapper */], {
    className: "items-wrapper"
  }, showProductQuantityExceededMsg && cart_jsx(cart_style["m" /* ProductQuantityExceededMsg */], null, cart_jsx(external_react_intl_["FormattedMessage"], {
    id: "productStockLimit",
    defaultMessage: "There is no more availability of this product"
  })), !!cartItemsCount ? items.map(item => {
    return cart_jsx(CartItem, {
      key: `cartItem-${item.id}`,
      onIncrement: () => addItem(item),
      onDecrement: () => item.quantity === 1 ? removeItemFromCart(item) : removeItem(item),
      onRemove: () => removeItemFromCart(item),
      data: item
    });
  }) : cart_jsx(external_react_default.a.Fragment, null, cart_jsx(cart_style["h" /* NoProductImg */], null, cart_jsx(NoCartBag["a" /* NoCartBag */], null)), cart_jsx(cart_style["i" /* NoProductMsg */], null, cart_jsx(external_react_intl_["FormattedMessage"], {
    id: "noProductFound",
    defaultMessage: "No products found"
  }))))), cart_jsx(cart_style["d" /* CheckoutButtonWrapper */], null, cartItemsCount !== 0 ? cart_jsx(external_react_default.a.Fragment, null, totalPrice > 10 ? cart_jsx(link_default.a, {
    href: "/checkout"
  }, cart_jsx(cart_style["c" /* CheckoutButton */], {
    onClick: onCloseBtnClick
  }, cart_jsx(external_react_default.a.Fragment, null, cart_jsx(cart_style["n" /* Title */], null, cart_jsx(external_react_intl_["FormattedMessage"], {
    id: "navlinkCheckout",
    defaultMessage: "Checkout"
  })), cart_jsx(cart_style["l" /* PriceBox */], null, constant["d" /* CURRENCY */], totalPrice)))) : cart_jsx(external_react_default.a.Fragment, null, cart_jsx(cart_style["g" /* MinOrderText */], null, `Add at least $${Number(10 - totalPrice).toFixed(2)} to reach the order minimum of $10.00`), cart_jsx(cart_style["c" /* CheckoutButton */], {
    onClick: onCloseBtnClick
  }, cart_jsx(external_react_default.a.Fragment, null, cart_jsx(cart_style["n" /* Title */], null, cart_jsx(external_react_intl_["FormattedMessage"], {
    id: "navlinkChecko",
    defaultMessage: "Continue shopping"
  })), cart_jsx(cart_style["l" /* PriceBox */], null, constant["d" /* CURRENCY */], totalPrice))))) : cart_jsx(cart_style["c" /* CheckoutButton */], null, cart_jsx(external_react_default.a.Fragment, null, cart_jsx(cart_style["o" /* TitleDisabled */], null, cart_jsx(external_react_intl_["FormattedMessage"], {
    id: "navlinkCheckout",
    defaultMessage: "Checkout"
  })), cart_jsx(cart_style["l" /* PriceBox */], null, constant["d" /* CURRENCY */], totalPrice)))));
};

/* harmony default export */ var cart = __webpack_exports__["a"] = (Cart);

/***/ }),

/***/ "AuPN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingBagLarge; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ShoppingBagLarge = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 23.786 30"
  }, __jsx("g", {
    "data-name": "shopping-bag (3)",
    transform: "translate(-53.023)"
  }, __jsx("g", {
    "data-name": "Group 2704"
  }, __jsx("g", {
    "data-name": "Group 17",
    transform: "translate(53.023 5.918)"
  }, __jsx("g", {
    "data-name": "Group 16"
  }, __jsx("path", {
    "data-name": "Path 3",
    d: "M76.8,119.826l-1.34-16.881A2.109,2.109,0,0,0,73.362,101H70.716v3.921a.879.879,0,1,1-1.757,0V101H60.875v3.921a.879.879,0,1,1-1.757,0V101H56.472a2.109,2.109,0,0,0-2.094,1.937l-1.34,16.886a4.885,4.885,0,0,0,4.87,5.259H71.926a4.884,4.884,0,0,0,4.87-5.261Zm-7.92-8.6-4.544,4.544a.878.878,0,0,1-1.243,0l-2.13-2.13A.878.878,0,0,1,62.2,112.4l1.509,1.508,3.923-3.923a.879.879,0,1,1,1.242,1.243Z",
    transform: "translate(-53.023 -101.005)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 19",
    transform: "translate(59.118)"
  }, __jsx("g", {
    "data-name": "Group 18"
  }, __jsx("path", {
    "data-name": "Path 4",
    d: "M162.838,0a5.806,5.806,0,0,0-5.8,5.8v.119H158.8V5.8a4.042,4.042,0,1,1,8.083,0v.119h1.757V5.8A5.806,5.806,0,0,0,162.838,0Z",
    transform: "translate(-157.039)",
    fill: color
  }))))));
};

/***/ }),

/***/ "H/+S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ BoxedCartButton; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ BoxedCartButtonV2; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/components/cart-popup/cart-popup.style.tsx


const CartPopupButtonStyled = external_styled_components_default()('button').withConfig({
  displayName: "cart-popupstyle__CartPopupButtonStyled",
  componentId: "sc-16h7ejr-0"
})(["height:60px;width:auto;display:flex;align-items:center;background-color:", ";padding:0;padding-left:30px;border-radius:60px;box-shadow:", ";border:0;outline:0;cursor:pointer;position:fixed;bottom:50px;right:50px;z-index:999;@media (max-width:767px){width:calc(100% - 60px);height:45px;padding:2px 2px 2px 30px;bottom:30px;right:30px;}@media (min-width:581px){&:not(.fixedCartPopup){display:none;}}"], Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'), Object(theme_get_["themeGet"])('shadows.big', '0 21px 36px rgba(0, 0, 0, 0.16)'));
const ButtonImgBox = external_styled_components_default()('span').withConfig({
  displayName: "cart-popupstyle__ButtonImgBox",
  componentId: "sc-16h7ejr-1"
})(["color:", ";"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
const ItemCount = external_styled_components_default()('span').withConfig({
  displayName: "cart-popupstyle__ItemCount",
  componentId: "sc-16h7ejr-2"
})(["font-family:", ";font-size:12px;font-weight:", ";color:", ";padding-left:5px;padding-right:10px;"], Object(theme_get_["themeGet"])('fonts.body', 'sans-serif'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
const PriceBox = external_styled_components_default()('span').withConfig({
  displayName: "cart-popupstyle__PriceBox",
  componentId: "sc-16h7ejr-3"
})(["width:56px;height:56px;overflow:hidden;border-radius:28px;display:inline-flex;align-items:center;justify-content:center;background-color:", ";font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-right:2px;@media (max-width:767px){width:90px;height:100%;height:41px;margin-left:auto;margin-right:0;padding:0px 3px;}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('fonts.body', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.xs', '12'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'));
const CartPopupBoxButton = external_styled_components_default()('button').withConfig({
  displayName: "cart-popupstyle__CartPopupBoxButton",
  componentId: "sc-16h7ejr-4"
})(["height:auto;width:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:", ";padding:0;border-radius:", " 0 0 ", ";box-shadow:", ";border:0;outline:0;cursor:pointer;position:fixed;right:0;top:50%;margin-top:-46px;z-index:99;@media (max-width:580px){display:none;}"], Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'), Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('shadows.big', '0 21px 36px rgba(0, 0, 0, 0.16)'));
const CartPopupBoxButtonV2 = external_styled_components_default()('button').withConfig({
  displayName: "cart-popupstyle__CartPopupBoxButtonV2",
  componentId: "sc-16h7ejr-5"
})(["height:fit-content;width:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:", ";padding:0;border-radius:45px;border:0;outline:0;cursor:pointer;position:relative;width:130px;z-index:99;color:#fff;font-size:18px;margin:0 15px;padding:8px 0px;@media (max-width:580px){display:none;}"], Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'));
const TotalItems = external_styled_components_default()('span').withConfig({
  displayName: "cart-popupstyle__TotalItems",
  componentId: "sc-16h7ejr-6"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";padding-left:5px;padding-right:10px;display:flex;align-items:center;justify-content:center;padding:15px 10px;svg{margin-right:10px;}"], Object(theme_get_["themeGet"])('fonts.body', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
const PriceBoxAlt = external_styled_components_default()('span').withConfig({
  displayName: "cart-popupstyle__PriceBoxAlt",
  componentId: "sc-16h7ejr-7"
})(["width:auto;height:35px;min-width:80px;overflow:hidden;border-radius:", ";display:inline-flex;align-items:center;justify-content:center;background-color:", ";font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin:0 10px 10px;padding:0px 3px;"], Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('fonts.body', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009E7F'));

// EXTERNAL MODULE: ./src/assets/icons/ShoppingBag.tsx
var ShoppingBag = __webpack_require__("MkjF");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// CONCATENATED MODULE: ./src/components/cart-popup/cart-popup-button.tsx
var __jsx = external_react_default.a.createElement;





const CartPopupButton = ({
  itemCount,
  itemPostfix = 'items',
  price,
  pricePrefix = '$',
  style,
  onClick,
  className
}) => __jsx(CartPopupButtonStyled, {
  style: style,
  onClick: onClick,
  className: className
}, __jsx(ButtonImgBox, null, __jsx(ShoppingBag["a" /* ShoppingBag */], null)), __jsx(ItemCount, null, itemCount, " ", itemPostfix), __jsx(PriceBox, null, Object(external_react_intl_["useIntl"])().formatMessage({
  id: 'payStaticCard',
  defaultMessage: 'Pay: '
}), pricePrefix, parseFloat(`${price}`).toFixed(2)));

const BoxedCartButton = ({
  itemCount,
  itemPostfix = 'items',
  price,
  pricePrefix = '$',
  style,
  onClick,
  className
}) => __jsx(CartPopupBoxButton, {
  style: style,
  onClick: onClick,
  className: className
}, __jsx(TotalItems, null, __jsx(ShoppingBag["a" /* ShoppingBag */], null), itemCount, " ", itemPostfix), __jsx(PriceBoxAlt, null, Object(external_react_intl_["useIntl"])().formatMessage({
  id: 'payStaticCard',
  defaultMessage: 'Pay: '
}), pricePrefix, parseFloat(`${price}`).toFixed(2)));
const BoxedCartButtonV2 = ({
  itemCount,
  itemPostfix = 'items',
  price,
  pricePrefix = '$',
  style,
  onClick,
  className,
  btnText
}) => __jsx(CartPopupBoxButtonV2, {
  style: style,
  onClick: onClick,
  className: className
}, btnText);
/* harmony default export */ var cart_popup_button = __webpack_exports__["c"] = (CartPopupButton);

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

/***/ "MkjF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingBag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ShoppingBag = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("span", null, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12.686 16"
  }, __jsx("g", {
    "data-name": "Group 2704",
    transform: "translate(-27.023 -2)"
  }, __jsx("g", {
    "data-name": "Group 17",
    transform: "translate(27.023 5.156)"
  }, __jsx("g", {
    "data-name": "Group 16"
  }, __jsx("path", {
    "data-name": "Path 3",
    d: "M65.7,111.043l-.714-9A1.125,1.125,0,0,0,63.871,101H62.459V103.1a.469.469,0,1,1-.937,0V101H57.211V103.1a.469.469,0,1,1-.937,0V101H54.862a1.125,1.125,0,0,0-1.117,1.033l-.715,9.006a2.605,2.605,0,0,0,2.6,2.8H63.1a2.605,2.605,0,0,0,2.6-2.806Zm-4.224-4.585-2.424,2.424a.468.468,0,0,1-.663,0l-1.136-1.136a.469.469,0,0,1,.663-.663l.8.8,2.092-2.092a.469.469,0,1,1,.663.663Z",
    transform: "translate(-53.023 -101.005)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 19",
    transform: "translate(30.274 2)"
  }, __jsx("g", {
    "data-name": "Group 18"
  }, __jsx("path", {
    "data-name": "Path 4",
    d: "M160.132,0a3.1,3.1,0,0,0-3.093,3.093v.063h.937V3.093a2.155,2.155,0,1,1,4.311,0v.063h.937V3.093A3.1,3.1,0,0,0,160.132,0Z",
    transform: "translate(-157.039)",
    fill: color
  }))))));
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

/***/ "f/wd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CURRENCY; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return timeZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return timezones; });
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
const CURRENCY = '$'; // ditto bot personal variables (change in front and back):

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

/***/ "fofi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return NoProductImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CartSlidePopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPopupBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return PopupHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return PopupItemCount; });
/* unused harmony export PromoCode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CloseButton; });
/* unused harmony export ItemCards */
/* unused harmony export ItemImgWrapper */
/* unused harmony export ItemDetails */
/* unused harmony export ItemTitle */
/* unused harmony export ItemPrice */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return TitleDisabled; });
/* unused harmony export ItemWeight */
/* unused harmony export TotalPrice */
/* unused harmony export DeleteButton */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CheckoutButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CheckoutButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return PriceBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return NoProductMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ItemWrapper; });
/* unused harmony export CouponBoxWrapper */
/* unused harmony export CouponCode */
/* unused harmony export ErrorMsg */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ProductQuantityExceededMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return MinOrderText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const CartPopupBody = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "cartstyle__CartPopupBody",
  componentId: "sc-1fct04g-0"
})(["height:auto;width:385px;display:flex;flex-direction:column;border-radius:", ";background-color:", ";box-sizing:content-box;@media (max-width:767px){width:100%;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'));
const PopupHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "cartstyle__PopupHeader",
  componentId: "sc-1fct04g-1"
})(["padding:15px 25px;background-color:", ";display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid ", ";@media (max-width:766px){justify-content:center;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1'));
const PopupItemCount = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "cartstyle__PopupItemCount",
  componentId: "sc-1fct04g-2"
})(["display:inline-flex;align-items:center;color:", ";span{font-family:", ";font-size:", "px;font-weight:", ";color:", ";padding-left:10px;@media (max-width:767px){font-size:", "px;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13'));
const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "cartstyle__CloseButton",
  componentId: "sc-1fct04g-3"
})(["width:14px;height:14px;display:inline-flex;align-items:center;justify-content:center;padding:0;border:0;outline:0;flex-shrink:0;cursor:pointer;color:rgba(0,0,0,0.25);transition:all 0.4s ease;background-color:transparent;&:hover{color:", ";}@media (max-width:767px){position:absolute;top:-45px;background-color:", ";width:35px;height:35px;border-radius:50%;color:rgba(0,0,0,0.5);}&.fixedCartClose{@media (min-width:991px){display:none;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.red', '#ea4d4a'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'));
const ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "cartstyle__ItemWrapper",
  componentId: "sc-1fct04g-4"
})(["width:100%;height:auto;"]);
const ItemCards = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "cartstyle__ItemCards",
  componentId: "sc-1fct04g-5"
})(["width:100%;padding:15px 25px;display:inline-flex;align-items:center;background-color:", ";margin-bottom:1px;box-sizing:border-box;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'));
const ItemImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "cartstyle__ItemImgWrapper",
  componentId: "sc-1fct04g-6"
})(["width:60px;height:60px;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;margin-right:15px;flex-shrink:0;img{width:100%;height:100%;object-fit:cover;}"]);
const ItemDetails = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "cartstyle__ItemDetails",
  componentId: "sc-1fct04g-7"
})(["display:inline-flex;flex-direction:column;width:100%;"]);
const ItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "cartstyle__ItemTitle",
  componentId: "sc-1fct04g-8"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-bottom:10px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'));
const ItemPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "cartstyle__ItemPrice",
  componentId: "sc-1fct04g-9"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-bottom:10px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'));
const ItemWeight = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "cartstyle__ItemWeight",
  componentId: "sc-1fct04g-10"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c'));
const TotalPrice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "cartstyle__TotalPrice",
  componentId: "sc-1fct04g-11"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";flex-shrink:0;margin-left:auto;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'));
const DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "cartstyle__DeleteButton",
  componentId: "sc-1fct04g-12"
})(["width:10px;height:10px;display:inline-flex;align-items:center;justify-content:center;padding:0;border:0;outline:0;margin-left:15px;flex-shrink:0;cursor:pointer;color:rgba(0,0,0,0.25);transition:all 0.4s ease;background-color:transparent;&:hover{color:#ea4d4a;}"]);
const PromoCode = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "cartstyle__PromoCode",
  componentId: "sc-1fct04g-13"
})(["margin:20px 0;display:flex;justify-content:center;> button{border:0;outline:0;box-shadow:none;background-color:transparent;display:inline-flex;cursor:pointer;font-family:", ";font-size:", "px;font-weight:", ";color:", ";transition:color 0.35s ease;&:hover{color:", ";}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.hover', '#019376'));
const MinOrderText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "cartstyle__MinOrderText",
  componentId: "sc-1fct04g-14"
})(["display:flex;justify-content:center;"]);
const CheckoutButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "cartstyle__CheckoutButton",
  componentId: "sc-1fct04g-15"
})(["height:48px;width:calc(100% - 30px);display:flex;color:white;align-items:center;justify-content:space-between;background-color:", ";padding:0;border-radius:48px;box-shadow:", ";border:0;outline:0;cursor:pointer;margin-bottom:15px;margin-left:15px;@media (max-width:767px){height:45px;}> a{width:100%;display:flex;align-items:center;justify-content:space-between;padding-left:30px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.base', '0 3px 6px rgba(0, 0, 0, 0.16)'));
const CheckoutButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "cartstyle__CheckoutButtonWrapper",
  componentId: "sc-1fct04g-16"
})(["width:100%;display:flex;flex-direction:column;margin-top:auto;.disabled{pointer-events:none}"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "cartstyle__Title",
  componentId: "sc-1fct04g-17"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";padding-left:5px;padding-right:10px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'));
const TitleDisabled = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "cartstyle__TitleDisabled",
  componentId: "sc-1fct04g-18"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";padding-left:5px;padding-right:10px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#f7f7f7'));
const PriceBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "cartstyle__PriceBox",
  componentId: "sc-1fct04g-19"
})(["width:auto;height:44px;padding:0 30px;overflow:hidden;border-radius:28px;display:inline-flex;align-items:center;justify-content:center;background-color:", ";font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin-right:2px;@media (max-width:767px){height:41px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'));
const NoProductMsg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "cartstyle__NoProductMsg",
  componentId: "sc-1fct04g-20"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";display:block;width:100%;padding:40px 0;text-align:center;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c'));
const ProductQuantityExceededMsg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "cartstyle__ProductQuantityExceededMsg",
  componentId: "sc-1fct04g-21"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";display:block;width:100%;padding:40px 0;text-align:center;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c'));
const NoProductImg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "cartstyle__NoProductImg",
  componentId: "sc-1fct04g-22"
})(["display:flex;align-items:center;justify-content:center;margin-bottom:20px;margin-top:50px;@media (max-width:580px){margin-top:20px;}svg{width:140px;height:auto;@media (max-width:580px){width:110px;}}"]);
const CouponBoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "cartstyle__CouponBoxWrapper",
  componentId: "sc-1fct04g-23"
})(["width:100%;padding:0 15px;flex-direction:column;padding-right:22px;"]);
const CouponCode = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "cartstyle__CouponCode",
  componentId: "sc-1fct04g-24"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";width:100%;display:flex;justify-content:center;span{font-weight:", ";color:", ";margin-left:5px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.medium', '500'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'));
const ErrorMsg = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "cartstyle__ErrorMsg",
  componentId: "sc-1fct04g-25"
})(["font-family:", ";font-size:calc(", "px - 1px);font-weight:", ";color:", ";padding-top:10px;display:flex;justify-content:center;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondary.hover', '#FF282F'));
const CartSlidePopup = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "cartstyle__CartSlidePopup",
  componentId: "sc-1fct04g-26"
})(["height:100vh;background-color:", ";position:fixed;bottom:0;right:-450px;z-index:1010;box-shadow:", ";transition:all 0.35s ease-in-out;@media (max-width:580px){width:100%;display:none;}@media (min-width:581px){display:block;}&.cartPopupFixed{right:0;}", "{height:100%;width:100%;}", "{max-height:calc(100vh - 245px);background-color:", ";}", "{border-bottom:1px solid ", ";margin-bottom:0;}@media (max-width:767px){", "{justify-content:space-between;}", "{top:auto;position:relative;background-color:transparent;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.big', '0 21px 36px rgba(0, 0, 0, 0.16)'), CartPopupBody, ItemWrapper, Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), ItemCards, Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#f7f7f7'), PopupHeader, CloseButton);


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

/***/ "gZAk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("qbum");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AmvX");
/* harmony import */ var components_cart_popup_cart_popup_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("H/+S");
/* harmony import */ var utils_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("f/wd");
/* harmony import */ var _cart_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("fofi");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var contexts_cart_use_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("tFEG");
/* harmony import */ var utils_use_media__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("ft+Y");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const CartPopupStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"]`
  .cartPopup{
    top: auto !important;
    left: auto !important;
    bottom: 50px !important;
    right: 50px !important;
    box-shadow: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('shadows.big', '0 21px 36px rgba(0, 0, 0, 0.16)')};
    transform-origin: bottom right;

    @media (max-width: 580px) {
      max-width: none!important;
      width: 100% !important;
      bottom: 0 !important;
      left: 0!important;
      background: ${Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff')};
      overflow: initial !important;
      transform-origin: bottom center;
    }
  }
`;

const CartPopUp = ({
  deviceType: {
    tablet,
    desktop
  }
}) => {
  const {
    isOpen,
    cartItemsCount,
    toggleCart,
    calculatePrice
  } = Object(contexts_cart_use_cart__WEBPACK_IMPORTED_MODULE_9__[/* useCart */ "b"])();
  const mobile = Object(utils_use_media__WEBPACK_IMPORTED_MODULE_10__[/* useMedia */ "a"])('(max-width: 580px)');
  const intl = Object(react_intl__WEBPACK_IMPORTED_MODULE_8__["useIntl"])();

  const handleModal = () => {
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["openModal"])({
      show: true,
      config: {
        className: 'cartPopup',
        width: 'auto',
        height: 'auto',
        enableResizing: false,
        disableDragging: true,
        transition: {
          tension: 360,
          friction: 40
        }
      },
      closeOnClickOutside: true,
      component: _cart__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
      closeComponent: () => __jsx("div", null),
      componentProps: {
        onCloseBtnClick: _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["closeModal"],
        scrollbarHeight: 330
      }
    });
  };

  let cartSliderClass = isOpen === true ? 'cartPopupFixed' : '';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, mobile ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(CartPopupStyle, null), __jsx(components_cart_popup_cart_popup_button__WEBPACK_IMPORTED_MODULE_5__[/* default */ "c"], {
    className: "product-cart",
    btnText: intl.formatMessage({
      id: 'buyNowId',
      defaultMessage: 'Buy now'
    }),
    itemCount: cartItemsCount,
    itemPostfix: cartItemsCount > 1 ? __jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
      id: "cartItems",
      defaultMessage: "items"
    }) : __jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
      id: "cartItem",
      defaultMessage: "item"
    }),
    price: calculatePrice(),
    pricePrefix: "$",
    onClick: handleModal
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_cart_style__WEBPACK_IMPORTED_MODULE_7__[/* CartSlidePopup */ "b"], {
    className: cartSliderClass
  }, isOpen && __jsx(_cart__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    onCloseBtnClick: toggleCart,
    scrollbarHeight: "100vh"
  })), __jsx(components_cart_popup_cart_popup_button__WEBPACK_IMPORTED_MODULE_5__[/* BoxedCartButton */ "a"], {
    className: "product-cart",
    itemCount: cartItemsCount,
    btnText: intl.formatMessage({
      id: 'buyNowId',
      defaultMessage: 'Buy now'
    }),
    itemPostfix: cartItemsCount > 1 ? __jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
      id: "cartItems",
      defaultMessage: "items"
    }) : __jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
      id: "cartItem",
      defaultMessage: "item"
    }),
    price: calculatePrice(),
    pricePrefix: utils_constant__WEBPACK_IMPORTED_MODULE_6__[/* CURRENCY */ "d"],
    onClick: toggleCart
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CartPopUp);

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

/***/ "jvFD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KeDb")


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