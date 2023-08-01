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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/JeY":
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("tMoA");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

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

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

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

/***/ "ZLcN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DELIVERY_METHOD; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const DELIVERY_METHOD = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
query GetDeliveryMethods {
    deliveryMethods(limit: 0) {
      items {
        id
        name
        details
        created_at
        isPickUp
        pickUpAddress
      }
      totalCount
      hasMore
    }
  }
`;

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "f/wd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENCY; });
/* unused harmony export PICKUP_GUEMES_DELIVERY_METHOD */
/* unused harmony export PICKUP_GRANJA_DELIVERY_METHOD */
/* unused harmony export CUSTOMER_ADDRESS_DELIVERY_METHOD */
/* unused harmony export CASH_PAYMENT_OPTION */
/* unused harmony export CC_PAYMENT_OPTION */
/* unused harmony export BANK_TRANSFER_PAYMENT_OPTION */
/* unused harmony export BANK_TRANSFER_ALIAS */
/* unused harmony export BANK_TRANSFER_CBU */
/* unused harmony export COMPANY_EMAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SensorsTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return RelaysIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return HumiditySensorMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DistanceMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PlugMode; });
/* unused harmony export PlugSensorMode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CommonMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LightSensorModes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return WeekDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return distanceModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return humidityModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return lightModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return manualModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return fourRelaysOptions; });
/* unused harmony export eightRelaysOptions */
/************ CONSTANTS ***********/
const CURRENCY = '$';
const PICKUP_GUEMES_DELIVERY_METHOD = 'Lo busco en el centro';
const PICKUP_GRANJA_DELIVERY_METHOD = 'Lo busco en la granja';
const CUSTOMER_ADDRESS_DELIVERY_METHOD = 'Enviámelo a casa. ($300)';
const CASH_PAYMENT_OPTION = 'cash';
const CC_PAYMENT_OPTION = 'cc';
const BANK_TRANSFER_PAYMENT_OPTION = 'bank_transfer';
const BANK_TRANSFER_ALIAS = 'dittofarm';
const BANK_TRANSFER_CBU = '0000003100030458924685';
const COMPANY_EMAIL = 'dittofarmresistencia@gmail.com';
let SensorsTypes;

(function (SensorsTypes) {
  SensorsTypes["SOIL_HUMIDITY"] = "SOIL_HUMIDITY";
  SensorsTypes["LIGHT"] = "LIGHT";
  SensorsTypes["DISTANCE"] = "DISTANCE";
  SensorsTypes["PLUG"] = "PLUG";
  SensorsTypes["HUMIDITY_TEMPETURE"] = "HUMIDITY_TEMPETURE";
})(SensorsTypes || (SensorsTypes = {}));

let RelaysIds;

(function (RelaysIds) {
  RelaysIds["RELAY_ONE"] = "isRelayOneOn";
  RelaysIds["RELAY_TWO"] = "isRelayTwoOn";
  RelaysIds["RELAY_THIRD"] = "isRelayThirdOn";
  RelaysIds["RELAY_FOURTH"] = "isRelayFourthOn";
})(RelaysIds || (RelaysIds = {}));

let HumiditySensorMode;

(function (HumiditySensorMode) {
  HumiditySensorMode["IRRIGATE_ON_DEMAND"] = "IRRIGATE_ON_DEMAND";
  HumiditySensorMode["IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND"] = "IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND";
  HumiditySensorMode["SEEDS_POOL_IRRIGATION"] = "SEEDS_POOL_IRRIGATION";
  HumiditySensorMode["MANUAL"] = "MANUAL";
  HumiditySensorMode["SCHEDULE"] = "SCHEDULE";
  HumiditySensorMode["NONE"] = "NONE";
})(HumiditySensorMode || (HumiditySensorMode = {}));

let DistanceMode;

(function (DistanceMode) {
  DistanceMode["ASSOCIATED_MIN_MAX"] = "ASSOCIATED_MIN_MAX";
  DistanceMode["NONE"] = "NONE";
})(DistanceMode || (DistanceMode = {}));

let PlugMode;

(function (PlugMode) {
  PlugMode["CALENDAR"] = "CALENDAR";
  PlugMode["MANUAL"] = "MANUAL";
  PlugMode["NONE"] = "NONE";
})(PlugMode || (PlugMode = {}));

let PlugSensorMode;

(function (PlugSensorMode) {
  PlugSensorMode["MANUAL"] = "MANUAL";
  PlugSensorMode["SCHEDULE"] = "SCHEDULE";
  PlugSensorMode["ASSOCIATED"] = "ASSOCIATED";
  PlugSensorMode["NONE"] = "NONE";
})(PlugSensorMode || (PlugSensorMode = {}));

let CommonMode;

(function (CommonMode) {
  CommonMode["NONE"] = "NONE";
})(CommonMode || (CommonMode = {}));

let LightSensorModes;

(function (LightSensorModes) {
  LightSensorModes["MANUAL"] = "MANUAL";
  LightSensorModes["SCHEDULE"] = "SCHEDULE";
  LightSensorModes["SMART_SCHEDULE"] = "SMART_SCHEDULE";
  LightSensorModes["NONE"] = "NONE";
})(LightSensorModes || (LightSensorModes = {}));

let WeekDays;

(function (WeekDays) {
  WeekDays["MONDAY"] = "LUNES";
  WeekDays["TUESDAY"] = "MARTES";
  WeekDays["WEDNESDAY"] = "MIERCOLES";
  WeekDays["THURSDAY"] = "JUEVES";
  WeekDays["FRIDAY"] = "VIERNES";
  WeekDays["SATURDAY"] = "SABADO";
  WeekDays["SUNDAY"] = "DOMINGO";
})(WeekDays || (WeekDays = {}));

const distanceModeOptions = [{
  value: DistanceMode.ASSOCIATED_MIN_MAX,
  label: 'Maximos'
}, {
  value: DistanceMode.NONE,
  label: 'Ninguno'
}];
const humidityModeOptions = [{
  value: HumiditySensorMode.SEEDS_POOL_IRRIGATION,
  label: 'Riego por inmersión'
}, {
  value: HumiditySensorMode.MANUAL,
  label: 'Manual'
}, {
  value: HumiditySensorMode.IRRIGATE_SPECIFICT_AMOUNT_ON_DEMAND,
  label: 'A demanda cant. exacta'
}, {
  value: HumiditySensorMode.IRRIGATE_ON_DEMAND,
  label: 'A demanda'
}, {
  value: HumiditySensorMode.SCHEDULE,
  label: 'Calendario de riego'
}, {
  value: HumiditySensorMode.NONE,
  label: 'Ninguno'
}];
const lightModeOptions = [{
  value: LightSensorModes.MANUAL,
  label: 'Manual'
}, {
  value: LightSensorModes.SCHEDULE,
  label: 'Calendario'
}, {
  value: LightSensorModes.SMART_SCHEDULE,
  label: 'Calendario inteligente'
}, {
  value: LightSensorModes.NONE,
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

/***/ "jvFD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KeDb")


/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "pFUA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_ORDERS; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GET_ORDERS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query GetUserOrders {
    getUserOrders {
      id
      order_code
      customer_id
      contact_number
      datetime
      delivery_address
      payment_method
      payment_status
      delivery_method_id
      status
      discount_amount
      sub_total
      total
      delivery_pickup_date
      order_tracking {
        status
        ordering
        is_current
        step_competed
      }
      order_products {
        product_id
        image
        quantity
        recicledQuantity
        unit
        name
        price
      }
    }
  }
`;

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
  // height: '100vh',
  padding: '1.5rem',
  fontSize: '15px',
  color: '000',
  backgroundColor: '#fff'
});

/***/ }),

/***/ "tMoA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/seo.tsx
var seo = __webpack_require__("H8eV");

// EXTERNAL MODULE: /Users/estebanmuruzabal/work/ditto/client/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./src/graphql/query/order.query.ts
var order_query = __webpack_require__("pFUA");

// EXTERNAL MODULE: ./src/utils/constant.ts
var constant = __webpack_require__("f/wd");

// EXTERNAL MODULE: ./src/components/error-message/error-message.tsx
var error_message = __webpack_require__("quMH");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/features/order-received/order-received.style.tsx


const OrderReceivedWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "order-receivedstyle__OrderReceivedWrapper",
  componentId: "ksjt95-0"
})(["background-color:", ";position:relative;padding:100px 0 60px 0;min-height:100vh;"], Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'));
const LinkPickUp = external_styled_components_default.a.a.withConfig({
  displayName: "order-receivedstyle__LinkPickUp",
  componentId: "ksjt95-1"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.blue', '#ea4d4a'));
const OrderTable = external_styled_components_default()('table').withConfig({
  displayName: "order-receivedstyle__OrderTable",
  componentId: "ksjt95-2"
})(["&&{border-collapse:collapse;thead{th{padding:8px 20px;font-family:", ";font-size:", "px;font-weight:", ";color:", ";border:none;&:first-child{padding-left:110px;text-align:left;}}}tr{&:hover{background-color:inherit;}td{padding:20px;font-family:", ";font-size:", "px;font-weight:", ";color:", ";border-bottom:0;border:none;}}}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'));
const OrderTableWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "order-receivedstyle__OrderTableWrapper",
  componentId: "ksjt95-3"
})([".rc-table-content{border:0;}"]);
const OrderReceivedContainer = external_styled_components_default.a.div.withConfig({
  displayName: "order-receivedstyle__OrderReceivedContainer",
  componentId: "ksjt95-4"
})(["background-color:", ";border:1px solid ", ";padding:60px;border-radius:", ";overflow:hidden;position:relative;width:calc(100% - 30px);margin-left:auto;margin-right:auto;@media (min-width:991px){width:870px;}@media (max-width:990px){padding:50px 45px;}@media (max-width:767px){padding:50px 25px;}.home-btn{display:inline-flex;align-items:center;justify-content:center;font-family:", ";font-size:", "px;font-weight:", ";color:", ";padding:5px 15px;height:36px;border:1px solid ", ";border-radius:", ";position:absolute;top:15px;right:15px;transition:0.15s ease-in-out;@media (max-width:767px){font-size:", "px;height:34px;padding:5px 12px;}&:hover{background-color:", ";border-color:", ";color:", ";}}.print-btn{display:inline-flex;align-items:center;justify-content:center;font-family:", ";font-size:", "px;font-weight:", ";color:", ";padding:5px 15px;height:36px;border:1px solid ", ";border-radius:", ";position:absolute;top:15px;right:125px;cursor:pointer;transition:0.15s ease-in-out;@media (max-width:767px){font-size:", "px;height:34px;padding:5px 12px;}&:hover{background-color:", ";border-color:", ";color:", ";}}@media print{.print-btn,.home-btn{display:none;}}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'), Object(theme_get_["themeGet"])('colors.gray.700', '#e6e6e6'), Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'), Object(theme_get_["themeGet"])('colors.gray.700', '#e6e6e6'), Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('fontSizes.sm', '13'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
const OrderInfo = external_styled_components_default.a.div.withConfig({
  displayName: "order-receivedstyle__OrderInfo",
  componentId: "ksjt95-5"
})(["margin-bottom:60px;@media (max-width:767px){margin-bottom:30px;}"]);
const OrderDetails = external_styled_components_default.a.div.withConfig({
  displayName: "order-receivedstyle__OrderDetails",
  componentId: "ksjt95-6"
})(["margin-bottom:60px;@media (max-width:767px){margin-bottom:50px;}"]);
const TotalAmount = external_styled_components_default.a.div.withConfig({
  displayName: "order-receivedstyle__TotalAmount",
  componentId: "ksjt95-7"
})([""]);
const BlockTitle = external_styled_components_default.a.h2.withConfig({
  displayName: "order-receivedstyle__BlockTitle",
  componentId: "ksjt95-8"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1;margin-bottom:32px;margin-top:5px;@media (max-width:767px){font-size:calc(", "px + 1px);margin-bottom:25px;}"], Object(theme_get_["themeGet"])('fonts.heading', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.lg', '21'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fontSizes.base', '15'));
const Text = external_styled_components_default.a.p.withConfig({
  displayName: "order-receivedstyle__Text",
  componentId: "ksjt95-9"
})(["font-family:", ";font-size:", "px;color:", ";font-weight:", ";line-height:1.2;display:block;margin:0;min-width:140px;&:last-child{color:", ";}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), props => props.bold ? Object(theme_get_["themeGet"])('fontWeights.bold', '700') : Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.medium', '#424561'));
const InfoBlockWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "order-receivedstyle__InfoBlockWrapper",
  componentId: "ksjt95-10"
})(["display:flex;align-items:center;justify-content:space-between;margin-top:30px;@media (max-width:767px){flex-wrap:wrap;}"]);
const InfoBlock = external_styled_components_default.a.div.withConfig({
  displayName: "order-receivedstyle__InfoBlock",
  componentId: "ksjt95-11"
})(["flex-grow:1;padding:0 15px;border-left:1px solid ", ";@media (max-width:767px){max-width:100%;flex:0 0 100%;margin-bottom:20px;padding:0;border:0;}&:first-child{padding-left:0;border-left:0;}&:last-child{padding-right:0;}.title{margin-bottom:10px;}"], Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'));
const ListItem = external_styled_components_default.a.div.withConfig({
  displayName: "order-receivedstyle__ListItem",
  componentId: "ksjt95-12"
})(["display:flex;margin-bottom:20px;&:last-child{margin-bottom:0;}"]);
const ListTitle = external_styled_components_default.a.div.withConfig({
  displayName: "order-receivedstyle__ListTitle",
  componentId: "ksjt95-13"
})(["flex-shrink:0;position:relative;&:after{content:'';position:absolute;top:-1px;right:-2px;line-height:1;}"]);
const ListDes = external_styled_components_default.a.div.withConfig({
  displayName: "order-receivedstyle__ListDes",
  componentId: "ksjt95-14"
})(["padding-left:20px;@media (max-width:767px){padding-left:20px;}"]);
/* harmony default export */ var order_received_style = (OrderReceivedWrapper);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./src/graphql/query/delivery.ts
var delivery = __webpack_require__("ZLcN");

// CONCATENATED MODULE: ./src/features/order-received/order-received.tsx
var __jsx = external_react_default.a.createElement;












const OrderReceived = props => {
  var _deliverData$delivery, _myOrder$order_produc;

  const router = Object(router_["useRouter"])();
  const intl = Object(external_react_intl_["useIntl"])();
  const {
    data,
    error,
    loading
  } = Object(react_hooks_["useQuery"])(order_query["a" /* GET_ORDERS */]);
  const {
    data: deliverData,
    error: deliveryError,
    loading: deliveryLoading,
    refetch: deliveryRefetch
  } = Object(react_hooks_["useQuery"])(delivery["a" /* DELIVERY_METHOD */]);

  if (loading) {
    return __jsx(error_message["default"], {
      message: 'Cargando...'
    });
  }

  ;
  const components = {
    table: OrderTable
  };

  if (error) {
    return __jsx(error_message["default"], {
      message: error.message
    });
  }

  ;
  const ids = data.getUserOrders.map(el => el.id);
  const index = ids.indexOf(router.query.itemId); // if we dont get an itemId we suppose that the latest order is the one to show!

  const myOrder = data.getUserOrders[index >= 0 ? index : 0];

  const printHandler = () => {
    if (false) {}
  };

  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getDeliverySchedule = details => {
    if (!details) return '';
    const word = 'Horario: ';
    const index = details.indexOf(word); // 8

    const length = word.length; // 7

    return details.slice(index + length);
  };

  const dateAndTime = `${external_moment_default()(myOrder === null || myOrder === void 0 ? void 0 : myOrder.datetime).format('MM/DD/YY')}, ${external_moment_default()(myOrder === null || myOrder === void 0 ? void 0 : myOrder.datetime).format('hh:mm A')}`;
  const deliveryMethods = deliverData === null || deliverData === void 0 ? void 0 : (_deliverData$delivery = deliverData.deliveryMethods) === null || _deliverData$delivery === void 0 ? void 0 : _deliverData$delivery.items;
  const orderDeliveryMethod = deliveryMethods === null || deliveryMethods === void 0 ? void 0 : deliveryMethods.filter(method => method.id === (myOrder === null || myOrder === void 0 ? void 0 : myOrder.delivery_method_id))[0];
  const deliveryDateAndTime = `${myOrder === null || myOrder === void 0 ? void 0 : myOrder.delivery_pickup_date} ${getDeliverySchedule(orderDeliveryMethod === null || orderDeliveryMethod === void 0 ? void 0 : orderDeliveryMethod.details)}`;
  return __jsx(order_received_style, null, __jsx(OrderReceivedContainer, null, __jsx(link_default.a, {
    href: "/profile"
  }, __jsx("a", {
    className: "home-btn"
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "backProfileBtn",
    defaultMessage: "Back to Profile"
  }))), __jsx("span", {
    onClick: printHandler,
    className: "print-btn"
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "printInvoiceBtn",
    defaultMessage: "Print Invoice"
  })), __jsx(OrderInfo, null, __jsx(BlockTitle, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "orderReceivedSuccess",
    defaultMessage: "Order"
  })), __jsx(InfoBlockWrapper, null, __jsx(InfoBlock, null, __jsx(Text, {
    bold: true,
    className: "title"
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "orderNumberText",
    defaultMessage: "Order Number"
  })), __jsx(Text, null, myOrder === null || myOrder === void 0 ? void 0 : myOrder.order_code)), __jsx(InfoBlock, null, __jsx(Text, {
    bold: true,
    className: "title"
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "orderDateText",
    defaultMessage: "Date"
  })), __jsx(Text, null, dateAndTime)), __jsx(InfoBlock, null, __jsx(Text, {
    bold: true,
    className: "title"
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "totalText",
    defaultMessage: "Total"
  })), __jsx(Text, null, constant["a" /* CURRENCY */], myOrder === null || myOrder === void 0 ? void 0 : myOrder.total)), __jsx(InfoBlock, null, __jsx(Text, {
    bold: true,
    className: "title"
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "paymenMethodText",
    defaultMessage: "Payment Method"
  })), __jsx(Text, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "paymentMethodName",
    defaultMessage: myOrder === null || myOrder === void 0 ? void 0 : myOrder.payment_method
  }))))), __jsx(OrderDetails, null, __jsx(BlockTitle, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "orderDetailsText",
    defaultMessage: "Order Details"
  })), __jsx(ListItem, null, __jsx(ListTitle, null, __jsx(Text, {
    bold: true
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "totalItemText",
    defaultMessage: "Total Item"
  }))), __jsx(ListDes, null, __jsx(Text, null, myOrder === null || myOrder === void 0 ? void 0 : (_myOrder$order_produc = myOrder.order_products) === null || _myOrder$order_produc === void 0 ? void 0 : _myOrder$order_produc.length, " "))), __jsx(ListItem, null, __jsx(ListTitle, null, __jsx(Text, {
    bold: true
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "deliveryMethodTitle",
    defaultMessage: "Order Method"
  }))), __jsx(ListDes, null, __jsx(Text, null, orderDeliveryMethod === null || orderDeliveryMethod === void 0 ? void 0 : orderDeliveryMethod.name))), (orderDeliveryMethod === null || orderDeliveryMethod === void 0 ? void 0 : orderDeliveryMethod.isPickUp) ? __jsx(external_react_default.a.Fragment, null, __jsx(ListItem, null, __jsx(ListTitle, null, __jsx(Text, {
    bold: true
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "deliveryTime",
    defaultMessage: "Delivery Time"
  }))), __jsx(ListDes, null, __jsx(Text, null, capitalizeFirstLetter(deliveryDateAndTime)))), __jsx(ListItem, null, __jsx(ListTitle, null, __jsx(Text, {
    bold: true
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "deliveryLocationText",
    defaultMessage: "Delivery Location"
  }))), __jsx(ListDes, null, (orderDeliveryMethod === null || orderDeliveryMethod === void 0 ? void 0 : orderDeliveryMethod.pickUpAddress.includes('http')) ? __jsx(LinkPickUp, {
    href: orderDeliveryMethod === null || orderDeliveryMethod === void 0 ? void 0 : orderDeliveryMethod.pickUpAddress,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Click/toque aqu\xED") : __jsx(Text, null, orderDeliveryMethod === null || orderDeliveryMethod === void 0 ? void 0 : orderDeliveryMethod.pickUpAddress)))) : __jsx(external_react_default.a.Fragment, null, __jsx(ListItem, null, __jsx(ListTitle, null, __jsx(Text, {
    bold: true
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "deliveryDateTitle",
    defaultMessage: "Delivery Date"
  }))), __jsx(ListDes, null, __jsx(Text, null, __jsx(Text, null, capitalizeFirstLetter(deliveryDateAndTime))))), __jsx(ListItem, null, __jsx(ListTitle, null, __jsx(Text, {
    bold: true
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "deliveryAddress",
    defaultMessage: "Delivery Address"
  }))), __jsx(ListDes, null, __jsx(Text, null, myOrder === null || myOrder === void 0 ? void 0 : myOrder.delivery_address))))), __jsx(TotalAmount, null, __jsx(BlockTitle, null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "totalAmountText",
    defaultMessage: "Total Amount"
  })), __jsx(ListItem, null, __jsx(ListTitle, null, __jsx(Text, {
    bold: true
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "subTotal",
    defaultMessage: "Sub total"
  }))), __jsx(ListDes, null, __jsx(Text, null, constant["a" /* CURRENCY */], myOrder === null || myOrder === void 0 ? void 0 : myOrder.sub_total))), __jsx(ListItem, null, __jsx(ListTitle, null, __jsx(Text, {
    bold: true
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "paymenMethodText",
    defaultMessage: "Payment Method"
  }))), __jsx(ListDes, null, __jsx(Text, null, myOrder === null || myOrder === void 0 ? void 0 : myOrder.payment_method))), __jsx(ListItem, null, __jsx(ListTitle, null, __jsx(Text, {
    bold: true
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "totalText",
    defaultMessage: "Total"
  }))), __jsx(ListDes, null, __jsx(Text, null, constant["a" /* CURRENCY */], myOrder === null || myOrder === void 0 ? void 0 : myOrder.total))))));
};

/* harmony default export */ var order_received = (OrderReceived);
// CONCATENATED MODULE: ./src/pages/order-received.tsx
var order_received_jsx = external_react_default.a.createElement;




const OrderReceivedPage = () => {
  return order_received_jsx(external_react_default.a.Fragment, null, order_received_jsx(seo["a" /* SEO */], {
    title: "Invoice - Ditto",
    description: "Invoice Details"
  }), order_received_jsx(order_received, null));
};

/* harmony default export */ var pages_order_received = __webpack_exports__["default"] = (OrderReceivedPage);

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

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

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });