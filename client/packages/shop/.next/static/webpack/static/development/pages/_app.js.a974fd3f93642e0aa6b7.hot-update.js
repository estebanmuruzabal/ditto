webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/layouts/header/menu/left-menu/left-menu.tsx":
/*!*********************************************************!*\
  !*** ./src/layouts/header/menu/left-menu/left-menu.tsx ***!
  \*********************************************************/
/*! exports provided: LeftMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LeftMenu\", function() { return LeftMenu; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"../../node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"../../node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ \"../../node_modules/react-intl/lib/index.js\");\n/* harmony import */ var components_popover_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/popover/popover */ \"./src/components/popover/popover.tsx\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/react-hooks */ \"../../node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var layouts_logo_logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! layouts/logo/logo */ \"./src/layouts/logo/logo.tsx\");\n/* harmony import */ var assets_icons_MenuDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/icons/MenuDown */ \"./src/assets/icons/MenuDown.tsx\");\n/* harmony import */ var site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! site-settings/site-navigation */ \"./src/site-settings/site-navigation.ts\");\n/* harmony import */ var graphql_query_type_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql/query/type.query */ \"./src/graphql/query/type.query.ts\");\n/* harmony import */ var components_error_message_error_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/error-message/error-message */ \"./src/components/error-message/error-message.tsx\");\n/* harmony import */ var assets_icons_category_menu_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/icons/category-menu-icons */ \"./src/assets/icons/category-menu-icons.ts\");\n/* harmony import */ var _left_menu_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./left-menu.style */ \"./src/layouts/header/menu/left-menu/left-menu.style.tsx\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/estebanmuruzabal/work/Mahdi-Fashion/client/packages/shop/src/layouts/header/menu/left-menu/left-menu.tsx\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar CategoryIcon = function CategoryIcon(_ref) {\n  var name = _ref.name;\n  var TagName = assets_icons_category_menu_icons__WEBPACK_IMPORTED_MODULE_12__[name];\n  return !!TagName ? __jsx(TagName, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 22\n    }\n  }) : __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 36\n    }\n  }, \" \");\n};\n\n_c = CategoryIcon;\n\nvar CategoryMenu = function CategoryMenu(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      typeMenu = _useState[0],\n      setTypeMenu = _useState[1];\n\n  var handleOnClick = function handleOnClick(item) {\n    if (item.dynamic) {\n      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/[type]', \"\".concat(item.href));\n      props.onClick(item);\n      return;\n    }\n\n    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push(\"\".concat(item.href));\n    props.onClick(item);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    Object(site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_9__[\"CATEGORY_MENU\"])().then(function (res) {\n      setTypeMenu(res);\n    });\n    return;\n  }, []);\n  return __jsx(\"div\", {\n    style: {\n      display: 'flex',\n      flexDirection: 'column'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  }, typeMenu.map(function (item) {\n    return __jsx(_left_menu_style__WEBPACK_IMPORTED_MODULE_13__[\"MenuItem\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n      key: item.id\n    }, props, {\n      onClick: function onClick() {\n        return handleOnClick(item);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }\n    }), __jsx(CategoryIcon, {\n      name: item.icon,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 11\n      }\n    }), __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__[\"FormattedMessage\"], {\n      id: item.id,\n      defaultMessage: item.defaultMessage,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 11\n      }\n    }));\n  }));\n};\n\n_s(CategoryMenu, \"B/jbiVKWN9EeXSIR55ciyFmhYn0=\");\n\n_c2 = CategoryMenu;\nvar LeftMenu = function LeftMenu(_ref2) {\n  _s2();\n\n  var logo = _ref2.logo;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__[\"useQuery\"])(graphql_query_type_query__WEBPACK_IMPORTED_MODULE_10__[\"GET_TYPE\"], {\n    variables: {\n      searchText: ''\n    }\n  }),\n      data = _useQuery.data,\n      error = _useQuery.error,\n      loading = _useQuery.loading;\n\n  if (loading) {\n    return __jsx(components_error_message_error_message__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      message: 'Loading...',\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 12\n      }\n    });\n  }\n\n  ;\n\n  if (error) {\n    return __jsx(components_error_message_error_message__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      message: error.message,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 7\n      }\n    });\n  }\n\n  ;\n  var typeMenu = data.types.items.map(function (item) {\n    return {\n      id: item.id,\n      href: \"/\".concat(item.slug),\n      defaultMessage: item.name,\n      icon: item.icon,\n      dynamic: true\n    };\n  });\n  var initialMenu = router.asPath == '/' ? typeMenu[1] : typeMenu.find(function (item) {\n    return item.href == router.asPath;\n  });\n\n  if (initialMenu) {\n    if (localStorage.getItem('myMenu')) {\n      localStorage.removeItem('myMenu');\n    }\n\n    localStorage.setItem('myMenu', JSON.stringify(initialMenu));\n  }\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(initialMenu !== null && initialMenu !== void 0 ? initialMenu : site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_9__[\"CATEGORY_MENU_ITEMS\"][0]),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      activeMenu = _React$useState2[0],\n      setActiveMenu = _React$useState2[1];\n\n  return __jsx(_left_menu_style__WEBPACK_IMPORTED_MODULE_13__[\"LeftMenuBox\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 5\n    }\n  }, __jsx(layouts_logo_logo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    imageUrl: logo,\n    alt: 'Shop Logo',\n    onClick: initialMenu ? initialMenu : JSON.parse(localStorage.getItem('myMenu')),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }\n  }), __jsx(_left_menu_style__WEBPACK_IMPORTED_MODULE_13__[\"MainMenu\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }\n  }, __jsx(components_popover_popover__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: \"right\",\n    handler: __jsx(_left_menu_style__WEBPACK_IMPORTED_MODULE_13__[\"SelectedItem\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 13\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 15\n      }\n    }, __jsx(_left_menu_style__WEBPACK_IMPORTED_MODULE_13__[\"Icon\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 17\n      }\n    }, __jsx(CategoryIcon, {\n      name: activeMenu === null || activeMenu === void 0 ? void 0 : activeMenu.icon,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 19\n      }\n    })), __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 17\n      }\n    }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__[\"FormattedMessage\"], {\n      id: activeMenu === null || activeMenu === void 0 ? void 0 : activeMenu.id,\n      defaultMessage: activeMenu === null || activeMenu === void 0 ? void 0 : activeMenu.defaultMessage,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 19\n      }\n    }))), __jsx(_left_menu_style__WEBPACK_IMPORTED_MODULE_13__[\"Arrow\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 129,\n        columnNumber: 15\n      }\n    }, __jsx(assets_icons_MenuDown__WEBPACK_IMPORTED_MODULE_8__[\"MenuDown\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 130,\n        columnNumber: 17\n      }\n    }))),\n    content: __jsx(CategoryMenu, {\n      onClick: setActiveMenu,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 20\n      }\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 9\n    }\n  })));\n}; // import React, { useState, useEffect } from 'react';\n// import Router, { useRouter } from 'next/router';\n// import { FormattedMessage } from 'react-intl';\n// import Popover from 'components/popover/popover';\n// import { useQuery } from '@apollo/react-hooks';\n// import Logo from 'layouts/logo/logo';\n// import { MenuDown } from 'assets/icons/MenuDown';\n// import { CATEGORY_MENU_ITEMS,CATEGORY_MENU } from 'site-settings/site-navigation';\n// import { GET_TYPE } from 'graphql/query/type.query';\n// import ErrorMessage from 'components/error-message/error-message';\n// import * as categoryMenuIcons from 'assets/icons/category-menu-icons';\n// import {\n//   MainMenu,\n//   MenuItem,\n//   SelectedItem,\n//   Icon,\n//   Arrow,\n//   LeftMenuBox,\n// } from './left-menu.style';\n// const CategoryIcon = ({ name }) => {\n//   const TagName = categoryMenuIcons[name];\n//   return !!TagName ? <TagName /> : <p> </p>;\n// };\n// const CategoryMenu = (props: any) => {\n//   const [typeMenu, setTypeMenu] = useState([]);\n//   const handleOnClick = (item) => {\n//     if (item.dynamic) {\n//       Router.push('/[type]', `${item.href}`);\n//       props.onClick(item);\n//       return;\n//     }\n//     Router.push(`${item.href}`);\n//     props.onClick(item);\n//   };\n//   useEffect(() => {\n//     CATEGORY_MENU().then((res) => {\n//       setTypeMenu(res);\n//     })\n//     return;\n//   }, []);\n//   return (\n//     <div style={{ display: 'flex', flexDirection: 'column' }}>\n//       {typeMenu.map((item) => {\n//         return(\n//         <MenuItem key={item.id} {...props} onClick={() => handleOnClick(item)}>\n//           <CategoryIcon name={item.icon} />\n//           <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />\n//         </MenuItem>\n//       )})}\n//     </div>\n//   );\n// };\n// type Props = {\n//   logo: string;\n// };\n// export const LeftMenu: React.FC<Props> = ({ logo }) => {\n//   const router = useRouter();\n//   const { data, error, loading } = useQuery(\n//     GET_TYPE,\n//     {\n//       variables: {\n//         searchText: ''\n//       }\n//     }\n//   );\n//   if (loading) {\n//     return <ErrorMessage message={'Loading...'} />\n//   };\n//   if (error) {\n//     return (\n//       <ErrorMessage message={error.message} />\n//     );\n//   };\n//   const typeMenu = data.types.items.map((item) => {\n//     return({\n//       id: item.id,\n//       href: `/${item.slug}`,\n//       defaultMessage: item.name,\n//       icon: item.icon,\n//       dynamic: true,\n//     })\n//   })\n//   const initialMenu = router.asPath == '/' ? typeMenu[0] : typeMenu.find((item) => item.href == router.asPath);\n//   if(initialMenu){\n//     if(localStorage.getItem('myMenu')){\n//       localStorage.removeItem('myMenu');\n//     }\n//     localStorage.setItem('myMenu', JSON.stringify(initialMenu));\n//   }\n//   const [activeMenu, setActiveMenu] = React.useState(\n//     initialMenu ?? JSON.parse(localStorage.getItem('myMenu'))\n//   );\n//   return(\n//     <LeftMenuBox>\n//       <Logo\n//         imageUrl={logo}\n//         alt={'Shop Logo'}\n//         onClick={initialMenu ? initialMenu: JSON.parse(localStorage.getItem('myMenu'))}\n//       />\n//       <MainMenu>\n//         <Popover\n//           className=\"right\"\n//           handler={\n//             <SelectedItem>\n//               <span>\n//                 <Icon>\n//                   <CategoryIcon name={activeMenu?.icon} />\n//                 </Icon>\n//                 <span>\n//                   <FormattedMessage\n//                     id={activeMenu?.id}\n//                     defaultMessage={activeMenu?.defaultMessage}\n//                   />\n//                 </span>\n//               </span>\n//               <Arrow>\n//                 <MenuDown />\n//               </Arrow>\n//             </SelectedItem>\n//           }\n//           content={<CategoryMenu onClick={setActiveMenu} />}\n//         />\n//       </MainMenu>\n//     </LeftMenuBox>\n//   );\n// };\n\n_s2(LeftMenu, \"N+VJG2F6Pr/wSYxuzs37TpYWZA4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__[\"useQuery\"]];\n});\n\n_c3 = LeftMenu;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CategoryIcon\");\n$RefreshReg$(_c2, \"CategoryMenu\");\n$RefreshReg$(_c3, \"LeftMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9oZWFkZXIvbWVudS9sZWZ0LW1lbnUvbGVmdC1tZW51LnRzeD85OTY1Il0sIm5hbWVzIjpbIkNhdGVnb3J5SWNvbiIsIm5hbWUiLCJUYWdOYW1lIiwiY2F0ZWdvcnlNZW51SWNvbnMiLCJDYXRlZ29yeU1lbnUiLCJwcm9wcyIsInVzZVN0YXRlIiwidHlwZU1lbnUiLCJzZXRUeXBlTWVudSIsImhhbmRsZU9uQ2xpY2siLCJpdGVtIiwiZHluYW1pYyIsIlJvdXRlciIsInB1c2giLCJocmVmIiwib25DbGljayIsInVzZUVmZmVjdCIsIkNBVEVHT1JZX01FTlUiLCJ0aGVuIiwicmVzIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtYXAiLCJpZCIsImljb24iLCJkZWZhdWx0TWVzc2FnZSIsIkxlZnRNZW51IiwibG9nbyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVF1ZXJ5IiwiR0VUX1RZUEUiLCJ2YXJpYWJsZXMiLCJzZWFyY2hUZXh0IiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsIm1lc3NhZ2UiLCJ0eXBlcyIsIml0ZW1zIiwic2x1ZyIsImluaXRpYWxNZW51IiwiYXNQYXRoIiwiZmluZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJSZWFjdCIsIkNBVEVHT1JZX01FTlVfSVRFTVMiLCJhY3RpdmVNZW51Iiwic2V0QWN0aXZlTWVudSIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBU0EsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUNqQyxNQUFNQyxPQUFPLEdBQUdDLDhEQUFpQixDQUFDRixJQUFELENBQWpD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RSxNQUFDLFlBQUQ7QUFBYyxhQUFPLEVBQUU0QixhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BcEJYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQU5GLENBREY7QUFpQ0QsQ0EzRU0sQyxDQStFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBdk5hM0IsUTtVQUNJRyxxRCxFQUNrQkMsNEQ7OztNQUZ0QkosUSIsImZpbGUiOiIuL3NyYy9sYXlvdXRzL2hlYWRlci9tZW51L2xlZnQtbWVudS9sZWZ0LW1lbnUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBQb3BvdmVyIGZyb20gJ2NvbXBvbmVudHMvcG9wb3Zlci9wb3BvdmVyJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XG5pbXBvcnQgTG9nbyBmcm9tICdsYXlvdXRzL2xvZ28vbG9nbyc7XG5pbXBvcnQgeyBNZW51RG93biB9IGZyb20gJ2Fzc2V0cy9pY29ucy9NZW51RG93bic7XG5pbXBvcnQgeyBDQVRFR09SWV9NRU5VX0lURU1TLENBVEVHT1JZX01FTlUgfSBmcm9tICdzaXRlLXNldHRpbmdzL3NpdGUtbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBHRVRfVFlQRSB9IGZyb20gJ2dyYXBocWwvcXVlcnkvdHlwZS5xdWVyeSc7XG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJ2NvbXBvbmVudHMvZXJyb3ItbWVzc2FnZS9lcnJvci1tZXNzYWdlJztcbmltcG9ydCAqIGFzIGNhdGVnb3J5TWVudUljb25zIGZyb20gJ2Fzc2V0cy9pY29ucy9jYXRlZ29yeS1tZW51LWljb25zJztcbmltcG9ydCB7XG4gIE1haW5NZW51LFxuICBNZW51SXRlbSxcbiAgU2VsZWN0ZWRJdGVtLFxuICBJY29uLFxuICBBcnJvdyxcbiAgTGVmdE1lbnVCb3gsXG59IGZyb20gJy4vbGVmdC1tZW51LnN0eWxlJztcblxuY29uc3QgQ2F0ZWdvcnlJY29uID0gKHsgbmFtZSB9KSA9PiB7XG4gIGNvbnN0IFRhZ05hbWUgPSBjYXRlZ29yeU1lbnVJY29uc1tuYW1lXTtcbiAgcmV0dXJuICEhVGFnTmFtZSA/IDxUYWdOYW1lIC8+IDogPHA+IDwvcD47XG59O1xuXG5jb25zdCBDYXRlZ29yeU1lbnUgPSAocHJvcHM6IGFueSkgPT4ge1xuXG4gIGNvbnN0IFt0eXBlTWVudSwgc2V0VHlwZU1lbnVdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGhhbmRsZU9uQ2xpY2sgPSAoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtLmR5bmFtaWMpIHtcbiAgICAgIFJvdXRlci5wdXNoKCcvW3R5cGVdJywgYCR7aXRlbS5ocmVmfWApO1xuICAgICAgcHJvcHMub25DbGljayhpdGVtKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgUm91dGVyLnB1c2goYCR7aXRlbS5ocmVmfWApO1xuICAgIHByb3BzLm9uQ2xpY2soaXRlbSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBDQVRFR09SWV9NRU5VKCkudGhlbigocmVzKSA9PiB7XG4gICAgICBzZXRUeXBlTWVudShyZXMpO1xuICAgIH0pXG4gICAgcmV0dXJuO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0+XG4gICAgICB7dHlwZU1lbnUubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgPE1lbnVJdGVtIGtleT17aXRlbS5pZH0gey4uLnByb3BzfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPbkNsaWNrKGl0ZW0pfT5cbiAgICAgICAgICA8Q2F0ZWdvcnlJY29uIG5hbWU9e2l0ZW0uaWNvbn0gLz5cbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17aXRlbS5pZH0gZGVmYXVsdE1lc3NhZ2U9e2l0ZW0uZGVmYXVsdE1lc3NhZ2V9IC8+XG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICApfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG50eXBlIFByb3BzID0ge1xuICBsb2dvOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgTGVmdE1lbnU6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGxvZ28gfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoXG4gICAgR0VUX1RZUEUsXG4gICAge1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIHNlYXJjaFRleHQ6ICcnXG4gICAgICB9XG4gICAgfVxuICApO1xuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8RXJyb3JNZXNzYWdlIG1lc3NhZ2U9eydMb2FkaW5nLi4uJ30gLz5cbiAgfTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEVycm9yTWVzc2FnZSBtZXNzYWdlPXtlcnJvci5tZXNzYWdlfSAvPlxuICAgICk7XG4gIH07XG4gIGNvbnN0IHR5cGVNZW51ID0gZGF0YS50eXBlcy5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4oe1xuICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICBocmVmOiBgLyR7aXRlbS5zbHVnfWAsXG4gICAgICBkZWZhdWx0TWVzc2FnZTogaXRlbS5uYW1lLFxuICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgZHluYW1pYzogdHJ1ZSxcbiAgICB9KVxuICB9KVxuICBcbiAgY29uc3QgaW5pdGlhbE1lbnUgPSByb3V0ZXIuYXNQYXRoID09ICcvJyA/IHR5cGVNZW51WzFdIDogdHlwZU1lbnUuZmluZCgoaXRlbSkgPT4gaXRlbS5ocmVmID09IHJvdXRlci5hc1BhdGgpO1xuICBcbiAgaWYoaW5pdGlhbE1lbnUpe1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteU1lbnUnKSl7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbXlNZW51Jyk7XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteU1lbnUnLCBKU09OLnN0cmluZ2lmeShpbml0aWFsTWVudSkpO1xuICB9XG5cbiAgY29uc3QgW2FjdGl2ZU1lbnUsIHNldEFjdGl2ZU1lbnVdID0gUmVhY3QudXNlU3RhdGUoXG4gICAgaW5pdGlhbE1lbnUgPz8gQ0FURUdPUllfTUVOVV9JVEVNU1swXVxuICApO1xuXG4gIHJldHVybihcbiAgICA8TGVmdE1lbnVCb3g+XG4gICAgICA8TG9nb1xuICAgICAgICBpbWFnZVVybD17bG9nb31cbiAgICAgICAgYWx0PXsnU2hvcCBMb2dvJ31cbiAgICAgICAgb25DbGljaz17aW5pdGlhbE1lbnUgPyBpbml0aWFsTWVudTogSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlNZW51JykpfVxuICAgICAgLz5cbiAgICAgIDxNYWluTWVudT5cbiAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyaWdodFwiXG4gICAgICAgICAgaGFuZGxlcj17XG4gICAgICAgICAgICA8U2VsZWN0ZWRJdGVtPlxuICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICA8SWNvbj5cbiAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeUljb24gbmFtZT17YWN0aXZlTWVudT8uaWNvbn0gLz5cbiAgICAgICAgICAgICAgICA8L0ljb24+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICBpZD17YWN0aXZlTWVudT8uaWR9XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPXthY3RpdmVNZW51Py5kZWZhdWx0TWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxBcnJvdz5cbiAgICAgICAgICAgICAgICA8TWVudURvd24gLz5cbiAgICAgICAgICAgICAgPC9BcnJvdz5cbiAgICAgICAgICAgIDwvU2VsZWN0ZWRJdGVtPlxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250ZW50PXs8Q2F0ZWdvcnlNZW51IG9uQ2xpY2s9e3NldEFjdGl2ZU1lbnV9IC8+fVxuICAgICAgICAvPlxuICAgICAgPC9NYWluTWVudT5cbiAgICA8L0xlZnRNZW51Qm94PlxuICApO1xufTtcblxuXG5cbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG4vLyBpbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCc7XG4vLyBpbXBvcnQgUG9wb3ZlciBmcm9tICdjb21wb25lbnRzL3BvcG92ZXIvcG9wb3Zlcic7XG4vLyBpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xuLy8gaW1wb3J0IExvZ28gZnJvbSAnbGF5b3V0cy9sb2dvL2xvZ28nO1xuLy8gaW1wb3J0IHsgTWVudURvd24gfSBmcm9tICdhc3NldHMvaWNvbnMvTWVudURvd24nO1xuLy8gaW1wb3J0IHsgQ0FURUdPUllfTUVOVV9JVEVNUyxDQVRFR09SWV9NRU5VIH0gZnJvbSAnc2l0ZS1zZXR0aW5ncy9zaXRlLW5hdmlnYXRpb24nO1xuLy8gaW1wb3J0IHsgR0VUX1RZUEUgfSBmcm9tICdncmFwaHFsL3F1ZXJ5L3R5cGUucXVlcnknO1xuLy8gaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICdjb21wb25lbnRzL2Vycm9yLW1lc3NhZ2UvZXJyb3ItbWVzc2FnZSc7XG4vLyBpbXBvcnQgKiBhcyBjYXRlZ29yeU1lbnVJY29ucyBmcm9tICdhc3NldHMvaWNvbnMvY2F0ZWdvcnktbWVudS1pY29ucyc7XG4vLyBpbXBvcnQge1xuLy8gICBNYWluTWVudSxcbi8vICAgTWVudUl0ZW0sXG4vLyAgIFNlbGVjdGVkSXRlbSxcbi8vICAgSWNvbixcbi8vICAgQXJyb3csXG4vLyAgIExlZnRNZW51Qm94LFxuLy8gfSBmcm9tICcuL2xlZnQtbWVudS5zdHlsZSc7XG5cbi8vIGNvbnN0IENhdGVnb3J5SWNvbiA9ICh7IG5hbWUgfSkgPT4ge1xuLy8gICBjb25zdCBUYWdOYW1lID0gY2F0ZWdvcnlNZW51SWNvbnNbbmFtZV07XG4vLyAgIHJldHVybiAhIVRhZ05hbWUgPyA8VGFnTmFtZSAvPiA6IDxwPiA8L3A+O1xuLy8gfTtcblxuLy8gY29uc3QgQ2F0ZWdvcnlNZW51ID0gKHByb3BzOiBhbnkpID0+IHtcblxuLy8gICBjb25zdCBbdHlwZU1lbnUsIHNldFR5cGVNZW51XSA9IHVzZVN0YXRlKFtdKTtcblxuLy8gICBjb25zdCBoYW5kbGVPbkNsaWNrID0gKGl0ZW0pID0+IHtcbi8vICAgICBpZiAoaXRlbS5keW5hbWljKSB7XG4vLyAgICAgICBSb3V0ZXIucHVzaCgnL1t0eXBlXScsIGAke2l0ZW0uaHJlZn1gKTtcbi8vICAgICAgIHByb3BzLm9uQ2xpY2soaXRlbSk7XG4vLyAgICAgICByZXR1cm47XG4vLyAgICAgfVxuLy8gICAgIFJvdXRlci5wdXNoKGAke2l0ZW0uaHJlZn1gKTtcbi8vICAgICBwcm9wcy5vbkNsaWNrKGl0ZW0pO1xuLy8gICB9O1xuXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgQ0FURUdPUllfTUVOVSgpLnRoZW4oKHJlcykgPT4ge1xuLy8gICAgICAgc2V0VHlwZU1lbnUocmVzKTtcbi8vICAgICB9KVxuLy8gICAgIHJldHVybjtcbi8vICAgfSwgW10pO1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxuLy8gICAgICAge3R5cGVNZW51Lm1hcCgoaXRlbSkgPT4ge1xuLy8gICAgICAgICByZXR1cm4oXG4vLyAgICAgICAgIDxNZW51SXRlbSBrZXk9e2l0ZW0uaWR9IHsuLi5wcm9wc30gb25DbGljaz17KCkgPT4gaGFuZGxlT25DbGljayhpdGVtKX0+XG4vLyAgICAgICAgICAgPENhdGVnb3J5SWNvbiBuYW1lPXtpdGVtLmljb259IC8+XG4vLyAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e2l0ZW0uaWR9IGRlZmF1bHRNZXNzYWdlPXtpdGVtLmRlZmF1bHRNZXNzYWdlfSAvPlxuLy8gICAgICAgICA8L01lbnVJdGVtPlxuLy8gICAgICAgKX0pfVxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfTtcblxuLy8gdHlwZSBQcm9wcyA9IHtcbi8vICAgbG9nbzogc3RyaW5nO1xuLy8gfTtcblxuLy8gZXhwb3J0IGNvbnN0IExlZnRNZW51OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBsb2dvIH0pID0+IHtcbi8vICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4vLyAgIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KFxuLy8gICAgIEdFVF9UWVBFLFxuLy8gICAgIHtcbi8vICAgICAgIHZhcmlhYmxlczoge1xuLy8gICAgICAgICBzZWFyY2hUZXh0OiAnJ1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgKTtcbi8vICAgaWYgKGxvYWRpbmcpIHtcbi8vICAgICByZXR1cm4gPEVycm9yTWVzc2FnZSBtZXNzYWdlPXsnTG9hZGluZy4uLid9IC8+XG4vLyAgIH07XG5cbi8vICAgaWYgKGVycm9yKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxFcnJvck1lc3NhZ2UgbWVzc2FnZT17ZXJyb3IubWVzc2FnZX0gLz5cbi8vICAgICApO1xuLy8gICB9O1xuLy8gICBjb25zdCB0eXBlTWVudSA9IGRhdGEudHlwZXMuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4vLyAgICAgcmV0dXJuKHtcbi8vICAgICAgIGlkOiBpdGVtLmlkLFxuLy8gICAgICAgaHJlZjogYC8ke2l0ZW0uc2x1Z31gLFxuLy8gICAgICAgZGVmYXVsdE1lc3NhZ2U6IGl0ZW0ubmFtZSxcbi8vICAgICAgIGljb246IGl0ZW0uaWNvbixcbi8vICAgICAgIGR5bmFtaWM6IHRydWUsXG4vLyAgICAgfSlcbi8vICAgfSlcbi8vICAgY29uc3QgaW5pdGlhbE1lbnUgPSByb3V0ZXIuYXNQYXRoID09ICcvJyA/IHR5cGVNZW51WzBdIDogdHlwZU1lbnUuZmluZCgoaXRlbSkgPT4gaXRlbS5ocmVmID09IHJvdXRlci5hc1BhdGgpO1xuLy8gICBpZihpbml0aWFsTWVudSl7XG4vLyAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215TWVudScpKXtcbi8vICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdteU1lbnUnKTtcbi8vICAgICB9XG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215TWVudScsIEpTT04uc3RyaW5naWZ5KGluaXRpYWxNZW51KSk7XG4vLyAgIH1cblxuLy8gICBjb25zdCBbYWN0aXZlTWVudSwgc2V0QWN0aXZlTWVudV0gPSBSZWFjdC51c2VTdGF0ZShcbi8vICAgICBpbml0aWFsTWVudSA/PyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteU1lbnUnKSlcbi8vICAgKTtcbiAgXG4vLyAgIHJldHVybihcbi8vICAgICA8TGVmdE1lbnVCb3g+XG4vLyAgICAgICA8TG9nb1xuLy8gICAgICAgICBpbWFnZVVybD17bG9nb31cbi8vICAgICAgICAgYWx0PXsnU2hvcCBMb2dvJ31cbi8vICAgICAgICAgb25DbGljaz17aW5pdGlhbE1lbnUgPyBpbml0aWFsTWVudTogSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlNZW51JykpfVxuLy8gICAgICAgLz5cbi8vICAgICAgIDxNYWluTWVudT5cbi8vICAgICAgICAgPFBvcG92ZXJcbi8vICAgICAgICAgICBjbGFzc05hbWU9XCJyaWdodFwiXG4vLyAgICAgICAgICAgaGFuZGxlcj17XG4vLyAgICAgICAgICAgICA8U2VsZWN0ZWRJdGVtPlxuLy8gICAgICAgICAgICAgICA8c3Bhbj5cbi8vICAgICAgICAgICAgICAgICA8SWNvbj5cbi8vICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeUljb24gbmFtZT17YWN0aXZlTWVudT8uaWNvbn0gLz5cbi8vICAgICAgICAgICAgICAgICA8L0ljb24+XG4vLyAgICAgICAgICAgICAgICAgPHNwYW4+XG4vLyAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuLy8gICAgICAgICAgICAgICAgICAgICBpZD17YWN0aXZlTWVudT8uaWR9XG4vLyAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRNZXNzYWdlPXthY3RpdmVNZW51Py5kZWZhdWx0TWVzc2FnZX1cbi8vICAgICAgICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgICAgICAgPC9zcGFuPlxuLy8gICAgICAgICAgICAgICA8L3NwYW4+XG4vLyAgICAgICAgICAgICAgIDxBcnJvdz5cbi8vICAgICAgICAgICAgICAgICA8TWVudURvd24gLz5cbi8vICAgICAgICAgICAgICAgPC9BcnJvdz5cbi8vICAgICAgICAgICAgIDwvU2VsZWN0ZWRJdGVtPlxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgICBjb250ZW50PXs8Q2F0ZWdvcnlNZW51IG9uQ2xpY2s9e3NldEFjdGl2ZU1lbnV9IC8+fVxuLy8gICAgICAgICAvPlxuLy8gICAgICAgPC9NYWluTWVudT5cbi8vICAgICA8L0xlZnRNZW51Qm94PlxuLy8gICApO1xuLy8gfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layouts/header/menu/left-menu/left-menu.tsx\n");

/***/ })

})