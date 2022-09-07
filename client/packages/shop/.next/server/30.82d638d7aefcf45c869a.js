exports.ids = [30];
exports.modules = {

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

/***/ "UTRa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: external "react-custom-scrollbars"
var external_react_custom_scrollbars_ = __webpack_require__("qC9r");

// EXTERNAL MODULE: external "rc-drawer"
var external_rc_drawer_ = __webpack_require__("ik7d");
var external_rc_drawer_default = /*#__PURE__*/__webpack_require__.n(external_rc_drawer_);

// CONCATENATED MODULE: ./src/components/drawer/drawer.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Drawer = (_ref) => {
  let {
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open,
    width,
    placement
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open", "width", "placement"]);

  return __jsx(external_react_["Fragment"], null, __jsx(external_rc_drawer_default.a, _extends({
    open: open,
    onClose: toggleHandler,
    className: `drawer ${className ? className : ''}`.trim(),
    width: width,
    placement: placement,
    handler: false,
    level: null,
    duration: ".4s"
  }, props), closeButton && __jsx("div", {
    className: "drawer__close",
    onClick: toggleHandler,
    style: closeButtonStyle
  }, closeButton), children), __jsx("div", {
    className: "drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler
  }, drawerHandler));
};

Drawer.defaultProps = {
  width: '300px',
  placement: 'left'
};
/* harmony default export */ var drawer = (Drawer);
// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// EXTERNAL MODULE: ./src/components/nav-link/nav-link.tsx
var nav_link = __webpack_require__("Ek28");

// EXTERNAL MODULE: ./src/assets/icons/CloseIcon.tsx
var CloseIcon = __webpack_require__("2nMb");

// EXTERNAL MODULE: ./src/contexts/auth/auth.context.tsx
var auth_context = __webpack_require__("QfjN");

// EXTERNAL MODULE: ./src/features/authentication-form/index.tsx + 7 modules
var authentication_form = __webpack_require__("kp67");

// EXTERNAL MODULE: ./src/layouts/header/header.style.tsx
var header_style = __webpack_require__("HPEz");

// EXTERNAL MODULE: ./src/assets/images/user.png
var user = __webpack_require__("upeG");
var user_default = /*#__PURE__*/__webpack_require__.n(user);

// EXTERNAL MODULE: ./src/site-settings/site-navigation.ts
var site_navigation = __webpack_require__("5l48");

// EXTERNAL MODULE: ./src/contexts/app/app.provider.ts + 1 modules
var app_provider = __webpack_require__("xZKy");

// EXTERNAL MODULE: ./src/contexts/profile/profile.context.tsx
var profile_context = __webpack_require__("p2kv");

// CONCATENATED MODULE: ./src/layouts/header/mobile-drawer.tsx
var mobile_drawer_jsx = external_react_default.a.createElement;

















const MobileDrawer = () => {
  const isDrawerOpen = Object(app_provider["c" /* useAppState */])('isDrawerOpen');
  const dispatch = Object(app_provider["b" /* useAppDispatch */])();
  const {
    authState: {
      isAuthenticated
    },
    authDispatch
  } = Object(external_react_["useContext"])(auth_context["a" /* AuthContext */]);
  const {
    state
  } = Object(external_react_["useContext"])(profile_context["a" /* ProfileContext */]);
  console.log(state);

  if (state) {
    const {
      name,
      phone
    } = state;
  } // Toggle drawer


  const toggleHandler = external_react_default.a.useCallback(() => {
    dispatch({
      type: 'TOGGLE_DRAWER'
    });
  }, [dispatch]);

  const handleLogout = () => {
    if (false) {}
  };

  const signInOutForm = () => {
    dispatch({
      type: 'TOGGLE_DRAWER'
    });
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

  return mobile_drawer_jsx(drawer, {
    width: "316px",
    drawerHandler: mobile_drawer_jsx(header_style["g" /* HamburgerIcon */], null, mobile_drawer_jsx("span", null), mobile_drawer_jsx("span", null), mobile_drawer_jsx("span", null)),
    open: isDrawerOpen,
    toggleHandler: toggleHandler,
    closeButton: mobile_drawer_jsx(header_style["a" /* DrawerClose */], null, mobile_drawer_jsx(CloseIcon["a" /* CloseIcon */], null))
  }, mobile_drawer_jsx(external_react_custom_scrollbars_["Scrollbars"], {
    autoHide: true
  }, mobile_drawer_jsx(header_style["b" /* DrawerContentWrapper */], null, mobile_drawer_jsx(header_style["e" /* DrawerProfile */], null, isAuthenticated ? mobile_drawer_jsx(header_style["h" /* LoginView */], null, mobile_drawer_jsx(header_style["p" /* UserAvatar */], null, mobile_drawer_jsx("img", {
    src: user_default.a,
    alt: "user_avatar"
  })), mobile_drawer_jsx(header_style["q" /* UserDetails */], null)) : mobile_drawer_jsx(header_style["j" /* LogoutView */], null, mobile_drawer_jsx(button_button["a" /* Button */], {
    variant: "primary",
    onClick: signInOutForm
  }, mobile_drawer_jsx(external_react_intl_["FormattedMessage"], {
    id: "mobileSignInButtonText",
    defaultMessage: "join"
  })))), mobile_drawer_jsx(header_style["c" /* DrawerMenu */], null, site_navigation["m" /* MOBILE_DRAWER_MENU */].map(item => mobile_drawer_jsx(header_style["d" /* DrawerMenuItem */], {
    key: item.id
  }, mobile_drawer_jsx(nav_link["a" /* default */], {
    onClick: toggleHandler,
    href: item.href,
    label: item.defaultMessage,
    intlId: item.id,
    className: "drawer_menu_item"
  }))), isAuthenticated && site_navigation["a" /* AUTHORIZED_MENU_ITEMS */].map((item, idx) => mobile_drawer_jsx(header_style["d" /* DrawerMenuItem */], {
    key: item.id
  }, mobile_drawer_jsx(nav_link["a" /* default */], {
    onClick: toggleHandler,
    href: item.href,
    label: item.defaultMessage,
    intlId: item.id,
    className: "drawer_menu_item"
  })))), isAuthenticated && mobile_drawer_jsx(header_style["r" /* UserOptionMenu */], null, mobile_drawer_jsx(header_style["d" /* DrawerMenuItem */], null, mobile_drawer_jsx("div", {
    onClick: handleLogout,
    className: "drawer_menu_item"
  }, mobile_drawer_jsx("span", {
    className: "logoutBtn"
  }, mobile_drawer_jsx(external_react_intl_["FormattedMessage"], {
    id: "navlinkLogout",
    defaultMessage: "Logout"
  }))))))));
};

/* harmony default export */ var mobile_drawer = (MobileDrawer);
// EXTERNAL MODULE: ./src/features/search/search.tsx + 4 modules
var search = __webpack_require__("Td6B");

// EXTERNAL MODULE: ./src/assets/images/logo.svg
var logo = __webpack_require__("40cp");
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: ./src/assets/icons/SearchIcon.tsx
var SearchIcon = __webpack_require__("J7Kp");

// EXTERNAL MODULE: ./src/assets/icons/LongArrowLeft.tsx
var LongArrowLeft = __webpack_require__("iAPg");

// EXTERNAL MODULE: ./src/layouts/logo/logo.tsx + 2 modules
var logo_logo = __webpack_require__("9T+x");

// EXTERNAL MODULE: ./src/layouts/header/menu/language-switcher/language-switcher.tsx + 2 modules
var language_switcher = __webpack_require__("PsoQ");

// EXTERNAL MODULE: ./src/layouts/is-home-page.ts
var is_home_page = __webpack_require__("hp67");

// EXTERNAL MODULE: ./src/utils/useComponentSize.js + 1 modules
var useComponentSize = __webpack_require__("uRCu");

// EXTERNAL MODULE: ./src/graphql/query/type.query.ts
var type_query = __webpack_require__("IGqs");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// CONCATENATED MODULE: ./src/layouts/header/mobile-header.tsx
var mobile_header_jsx = external_react_default.a.createElement;

















const SearchModal = () => {
  const onSubmit = () => {
    Object(reuse_modal_["closeModal"])();
  };

  return mobile_header_jsx(header_style["n" /* SearchModalWrapper */], null, mobile_header_jsx(header_style["m" /* SearchModalClose */], {
    type: "submit",
    onClick: () => Object(reuse_modal_["closeModal"])()
  }, mobile_header_jsx(LongArrowLeft["a" /* LongArrowLeft */], null)), mobile_header_jsx(search["a" /* default */], {
    className: "header-modal-search",
    showButtonText: false,
    onSubmit: onSubmit
  }));
};

const MobileHeader = ({
  className
}) => {
  const {
    pathname,
    query
  } = Object(router_["useRouter"])();
  const [mobileHeaderRef, dimensions] = Object(useComponentSize["a" /* default */])();
  const router = Object(router_["useRouter"])();
  const {
    data,
    error,
    loading
  } = Object(react_hooks_["useQuery"])(type_query["a" /* GET_TYPE */], {
    variables: {
      searchText: ''
    }
  });

  const handleSearchModal = () => {
    Object(reuse_modal_["openModal"])({
      show: true,
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'search-modal-mobile',
        width: '100%',
        height: '100%'
      },
      closeOnClickOutside: false,
      component: SearchModal,
      closeComponent: () => mobile_header_jsx("div", null)
    });
  };

  const type = pathname === '/restaurant' ? 'restaurant' : query.type;
  const isHomePage = Object(is_home_page["a" /* isCategoryPage */])(type);
  const typeMenu = data.types.items.map(item => {
    return {
      id: item.id,
      href: `/${item.slug}`,
      defaultMessage: item.name,
      icon: item.icon,
      dynamic: true
    };
  });
  const initialMenu = router.asPath == '/' ? typeMenu[0] : typeMenu.find(item => item.href == router.asPath);

  if (initialMenu) {
    if (localStorage.getItem('myMenu')) {
      localStorage.removeItem('myMenu');
    }

    localStorage.setItem('myMenu', JSON.stringify(initialMenu));
  }

  const [activeMenu, setActiveMenu] = external_react_default.a.useState(initialMenu !== null && initialMenu !== void 0 ? initialMenu : site_navigation["e" /* CATEGORY_MENU_ITEMS */][0]);
  return mobile_header_jsx(header_style["l" /* MobileHeaderWrapper */], null, mobile_header_jsx(header_style["k" /* MobileHeaderInnerWrapper */], {
    className: className,
    ref: mobileHeaderRef
  }, mobile_header_jsx(header_style["f" /* DrawerWrapper */], null, mobile_header_jsx(mobile_drawer, null)), mobile_header_jsx(header_style["i" /* LogoWrapper */], null, mobile_header_jsx(logo_logo["a" /* default */], {
    imageUrl: logo_default.a,
    alt: "shop logo",
    onClick: initialMenu ? initialMenu : JSON.parse(localStorage.getItem('myMenu'))
  })), mobile_header_jsx(language_switcher["a" /* default */], null), mobile_header_jsx(header_style["o" /* SearchWrapper */], {
    onClick: handleSearchModal,
    className: "searchIconWrapper"
  }, mobile_header_jsx(SearchIcon["a" /* SearchIcon */], null))));
};

/* harmony default export */ var mobile_header = __webpack_exports__["default"] = (MobileHeader);

/***/ }),

/***/ "p2kv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ProfileContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

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

/***/ })

};;