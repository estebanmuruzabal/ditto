exports.ids = [33];
exports.modules = {

/***/ "63jn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/components/popover/useOnClickOutside.js

function useOnClickOutside(ref, handler) {
  Object(external_react_["useEffect"])(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, // Add ref and handler to effect dependencies
  // It's worth noting that because passed in handler is a new ...
  // ... function on every render that will cause this effect ...
  // ... callback/cleanup to run every render. It's not a big deal ...
  // ... but to optimize you can wrap handler in useCallback before ...
  // ... passing it into this hook.
  [ref, handler]);
}
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/components/popover/popover.style.tsx


const PopoverWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "popoverstyle__PopoverWrapper",
  componentId: "j4k8fw-0"
})(["position:relative;cursor:pointer;.popover-handler{display:inline-block;cursor:pointer;}.popover-content{left:0px;top:calc(100% + 15px);display:block;min-width:200px;padding:15px 20px;position:absolute;border-radius:", ";background-color:", ";box-shadow:0 3px 20px rgba(142,142,142,0.14);z-index:99;&:before{content:'';position:absolute;width:0;height:0;border-style:solid;border-width:0 8px 9px 8px;border-color:transparent transparent ", " transparent;top:-8px;left:15px;box-shadow:-4px -4px 8px -3px rgba(142,142,142,0.14);pointer-events:none;}}&.right{.popover-content{left:auto;right:0px;&:before{left:auto;right:15px;}}}"], Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
/* harmony default export */ var popover_style = (PopoverWrapper);
// CONCATENATED MODULE: ./src/components/popover/popover.tsx
var __jsx = external_react_default.a.createElement;




const Popover = ({
  className,
  handler,
  content,
  direction
}) => {
  // Popover State
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])(false); // Ref

  const ref = Object(external_react_["useRef"])(); // Add all classs to an array

  const addAllClasses = ['popover-wrapper']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // Add direction class on popover content


  if (direction) {
    addAllClasses.push(direction);
  } // Toggle Popover content


  const handleToggle = e => {
    e.stopPropagation();
    setState(state => !state);
  }; // Handle document click


  const handleDocumentClick = e => {
    e.stopPropagation();

    if (state) {
      handleToggle(e);
    }
  }; // Handle window event listener


  Object(external_react_["useEffect"])(() => {
    window.addEventListener('click', handleDocumentClick);
    return () => {
      window.removeEventListener('click', handleDocumentClick);
    };
  }); // Close popover on click outside

  useOnClickOutside(ref, () => setState(state => false));
  return __jsx(popover_style, {
    className: addAllClasses.join(' '),
    ref: ref
  }, __jsx("div", {
    className: "popover-handler",
    onClick: handleToggle
  }, handler), state && __jsx("div", {
    className: "popover-content"
  }, content && __jsx("div", {
    className: "inner-wrap",
    onClick: handleToggle
  }, content)));
};

/* harmony default export */ var popover = __webpack_exports__["a"] = (Popover);

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

/***/ "IQ03":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./src/components/popover/popover.tsx + 2 modules
var popover = __webpack_require__("63jn");

// EXTERNAL MODULE: ./src/components/nav-link/nav-link.tsx
var nav_link = __webpack_require__("Ek28");

// EXTERNAL MODULE: ./src/site-settings/site-navigation.ts
var site_navigation = __webpack_require__("5l48");

// CONCATENATED MODULE: ./src/layouts/header/menu/authorized-menu.tsx
var __jsx = external_react_default.a.createElement;




const AuthorizedMenu = ({
  onLogout,
  isStaff,
  isGrower
}) => {
  const menuItems = isGrower ? site_navigation["i" /* GROWER_MENU_ITEMS */] : isStaff ? site_navigation["s" /* STAFF_MENU_ITEMS */] : site_navigation["a" /* AUTHORIZED_MENU_ITEMS */];
  return __jsx(external_react_default.a.Fragment, null, menuItems === null || menuItems === void 0 ? void 0 : menuItems.map((item, idx) => __jsx(nav_link["a" /* default */], {
    key: idx,
    className: "menu-item",
    href: item.href,
    label: item.defaultMessage,
    intlId: item.id
  })), __jsx("div", {
    className: "menu-item",
    onClick: onLogout
  }, __jsx("a", null, __jsx("span", null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "navlinkLogout",
    defaultMessage: "Logout"
  })))));
};
// CONCATENATED MODULE: ./src/layouts/header/menu/auth-menu.tsx
var auth_menu_jsx = external_react_default.a.createElement;






const AuthMenu = ({
  isAuthenticated,
  onJoin,
  onLogout,
  avatar,
  isStaff,
  isGrower
}) => {
  return !isAuthenticated ? auth_menu_jsx(button_button["a" /* Button */], {
    variant: "primary",
    onClick: onJoin
  }, auth_menu_jsx(external_react_intl_["FormattedMessage"], {
    id: "joinButton",
    defaultMessage: "join"
  })) : auth_menu_jsx(popover["a" /* default */], {
    direction: "right",
    className: "user-pages-dropdown",
    handler: auth_menu_jsx("img", {
      src: avatar,
      alt: "user"
    }),
    content: auth_menu_jsx(AuthorizedMenu, {
      isStaff: isStaff,
      isGrower: isGrower,
      onLogout: onLogout
    })
  });
};

/* harmony default export */ var auth_menu = __webpack_exports__["default"] = (AuthMenu);

/***/ })

};;