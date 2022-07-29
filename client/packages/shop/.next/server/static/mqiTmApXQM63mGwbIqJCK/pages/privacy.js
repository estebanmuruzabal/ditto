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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Zpsu");


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

/***/ "I/1N":
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "Zpsu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-stickynode"
var external_react_stickynode_ = __webpack_require__("isz7");
var external_react_stickynode_default = /*#__PURE__*/__webpack_require__.n(external_react_stickynode_);

// EXTERNAL MODULE: ./src/features/terms-and-services/terms-and-services.tsx
var terms_and_services = __webpack_require__("bl2F");

// EXTERNAL MODULE: ./src/components/heading/heading.tsx
var heading = __webpack_require__("aptK");

// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__("I/1N");

// EXTERNAL MODULE: ./src/components/seo.tsx
var seo = __webpack_require__("H8eV");

// EXTERNAL MODULE: ./src/utils/use-media.ts
var use_media = __webpack_require__("ft+Y");

// CONCATENATED MODULE: ./src/site-settings/site-privacy-policy.ts
const sitePrivacyPolicy = {
  title: 'Privacy Policy',
  date: '01/01/2020',
  content: [{
    id: '1',
    title: 'Purpose',
    description: '<p>Little &amp; Big is committed to protecting your privacy because we are committed to valuing people. Our Privacy Policy below sets out how your personal information is collected, used and protected. The&nbsp;<a href="http://demo">Demo Country Privacy Principles</a>&nbsp;also apply to us.</p><p>This Privacy Policy describes our policies and procedures on the collection, holding, use and disclosure of your personal information and should be read together with our&nbsp;Terms and Conditions. By providing your personal information you consent to our collection, use and disclosure of that information in accordance with this Privacy Policy.</p>'
  }, {
    id: '2',
    title: 'What is Personal Data?',
    description: '<p>When used in this Policy, "personal information" has the meaning given in the Privacy Act. Generally, it means any information or an opinion that could be used to identify you.</p>'
  }, {
    id: '3',
    title: 'Personal Data Collected',
    description: '<p>Personal Data collected for the following purposes and using the following services:</p><ol><li>Google Analytics: Cookies; Usage Data</li><li>Contact form: email address; first name; phone number</li><li>Mailing list or newsletter: email address; first name</li></ol>'
  }, {
    id: '4',
    title: 'Accessing your Personal Data',
    description: '<p>You may request access to your personal information collected by us, and ask that we correct that personal information. You can ask for access or correction by contacting us and we will usually respond within 30 days. If we refuse to give you access to, or correct, your personal information, we will notify you in writing setting out the reasons.</p>'
  }, {
    id: '5',
    title: 'Complaints',
    description: '<p>If you believe your privacy has been breached or you have a complaint about how we have handled your personal information, please contact us in writing.  We will respond within a reasonable period (usually within 30 days).</p>'
  }, {
    id: '6',
    title: 'Owner and Data Controller',
    description: '<p>The Commons<br>20-40 demo St,<br>Jon doe NSW 2008<br>Country<br><br>Email: demo@demo.com</p>'
  }]
};
// CONCATENATED MODULE: ./src/pages/privacy.tsx

var __jsx = external_react_default.a.createElement;








const PrivacyPage = () => {
  const {
    title,
    date,
    content
  } = sitePrivacyPolicy;
  const mobile = Object(use_media["a" /* useMedia */])('(max-width: 580px)');
  const menuItems = [];
  content.forEach(item => {
    menuItems.push(item.title);
  });
  return __jsx(external_react_default.a.Fragment, null, __jsx(seo["a" /* SEO */], {
    title: title,
    description: "Ditto privacy page"
  }), __jsx(terms_and_services["a" /* StyledContainer */], null, __jsx(heading["a" /* Heading */], {
    title: title,
    subtitle: `Last update: ${date}`
  }), __jsx(terms_and_services["b" /* StyledContent */], null, __jsx(terms_and_services["d" /* StyledLeftContent */], null, __jsx(external_react_stickynode_default.a, {
    top: mobile ? 68 : 150,
    innerZ: "1"
  }, __jsx(terms_and_services["e" /* StyledLeftInnerContent */], null, menuItems.map(item => __jsx(terms_and_services["f" /* StyledLink */], {
    key: item,
    activeClass: "active",
    to: item,
    spy: true,
    smooth: true,
    offset: -276,
    duration: 500
  }, item))))), __jsx(terms_and_services["g" /* StyledRightContent */], null, content.map((item, idx) => {
    return __jsx(external_react_scroll_["Element"], {
      name: item.title,
      style: {
        paddingBottom: 40
      },
      key: idx
    }, __jsx(terms_and_services["c" /* StyledContentHeading */], null, item.title), __jsx("div", {
      className: "html-content",
      dangerouslySetInnerHTML: {
        __html: item.description
      }
    }));
  })))));
};

/* harmony default export */ var privacy = __webpack_exports__["default"] = (PrivacyPage);

/***/ }),

/***/ "aptK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Heading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ExBD");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Heading = ({
  title,
  subtitle,
  backdrop,
  bgColor
}) => {
  return __jsx(StyledBox, {
    style: {
      backgroundColor: bgColor
    }
  }, __jsx(StyledH2, null, title), subtitle && __jsx(StyledP, null, subtitle));
};
const StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "heading__StyledBox",
  componentId: "sc-1c0mctp-0"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_2___default()({
  py: [30, 50],
  px: ['1rem', 0]
}), {
  width: '100%'
});
const StyledH2 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "heading__StyledH2",
  componentId: "sc-1c0mctp-1"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_2___default()({
  fontSize: 'xl',
  fontWeight: 700,
  color: 'primary.regular',
  marginBottom: '1.5rem'
}));
const StyledP = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.p.withConfig({
  displayName: "heading__StyledP",
  componentId: "sc-1c0mctp-2"
})({
  fontSize: 14,
  color: 'text.medium'
});

/***/ }),

/***/ "bl2F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyledContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StyledContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return StyledContentHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return StyledLeftContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return StyledLeftInnerContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return StyledRightContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return StyledLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ExBD");
/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("I/1N");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);



const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "terms-and-services__StyledContainer",
  componentId: "vekb8k-0"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  width: ['100%', '90vw']
}), {
  margin: 'auto',
  paddingTop: 100,
  paddingBottom: 150
});
const StyledContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "terms-and-services__StyledContent",
  componentId: "vekb8k-1"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  flexDirection: ['column', 'row']
}), {
  display: 'flex'
});
const StyledContentHeading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "terms-and-services__StyledContentHeading",
  componentId: "vekb8k-2"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  px: ['1rem', 0],
  fontSize: 'xl',
  color: 'text.bold'
}), {
  marginBottom: 20
});
const StyledLeftContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "terms-and-services__StyledLeftContent",
  componentId: "vekb8k-3"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  flexDirection: ['column', 'row'],
  width: ['100%', '25%']
}), {
  flex: '0 0 auto'
});
const StyledLeftInnerContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "terms-and-services__StyledLeftInnerContent",
  componentId: "vekb8k-4"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  backgroundColor: ['#fff', 'transparent'],
  padding: ['1rem', 0]
}));
const StyledRightContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "terms-and-services__StyledRightContent",
  componentId: "vekb8k-5"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  p: {
    fontSize: 'base',
    color: 'text.medium',
    marginBottom: 20,
    padding: ['1rem', 0]
  },
  lineHeight: 1.8
}));
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"]).withConfig({
  displayName: "terms-and-services__StyledLink",
  componentId: "vekb8k-6"
})(_styled_system_css__WEBPACK_IMPORTED_MODULE_1___default()({
  '&.active, :hover': {
    color: 'primary.regular'
  }
}), {
  fontSize: 14,
  textDecoration: 'none',
  padding: '10px 0',
  display: 'block',
  textTransform: 'uppercase',
  transition: 'all 0.3s ease'
});

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "isz7":
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });