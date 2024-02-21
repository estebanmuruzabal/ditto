module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		3: 0,
/******/ 		32: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"30":"de1fe2770a6495e6ed2e","31":"44033e1c2d77c7a2c937"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+M2j":
/***/ (function(module, exports) {

module.exports = require("omit-deep-lodash");

/***/ }),

/***/ "/JeY":
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "/Q/Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicineIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const MedicineIcon = ({
  width = '18px',
  height = '18px',
  color = 'currentColor'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 16 16.001"
  }, __jsx("g", {
    "data-name": "Group 175",
    transform: "translate(553.392 -314.288)"
  }, __jsx("path", {
    "data-name": "Path 178",
    d: "M-541.294,317.863a3.621,3.621,0,0,1-1.017,2.627c-1.62,1.639-3.24,3.28-4.891,4.888a3.655,3.655,0,0,1-6.033-1.643,3.5,3.5,0,0,1,.907-3.579q2.366-2.417,4.782-4.784a3.491,3.491,0,0,1,3.662-.9,3.536,3.536,0,0,1,2.514,2.77A4.929,4.929,0,0,1-541.294,317.863Zm-4.4,3.7c.791-.786,1.6-1.527,2.329-2.336a1.853,1.853,0,0,0,.293-2.017,2.042,2.042,0,0,0-3.36-.669q-2.632,2.617-5.252,5.247a1.289,1.289,0,0,0-.09.1.594.594,0,0,0,.321.955.622.622,0,0,0,.625-.21q1.47-1.474,2.944-2.945c.048-.048.1-.094.166-.158Z",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 179",
    d: "M-408.46,467.03l1.364-.817a3.95,3.95,0,0,0,4.856,2.139,3.856,3.856,0,0,0,2.756-3.015h-6.746c.067-.075.1-.12.145-.162.444-.445.884-.893,1.336-1.329a.464.464,0,0,1,.292-.12c1.533-.007,3.066-.005,4.6-.005h.367a4.05,4.05,0,0,0-2.268-2.837l.83-1.383a5.562,5.562,0,0,1,3.106,5.582,5.621,5.621,0,0,1-4.764,5.019A5.6,5.6,0,0,1-408.46,467.03Z",
    transform: "translate(-139.595 -139.873)",
    fill: color
  })));
};

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/h3U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BathOil; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const BathOil = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 27",
    fill: color
  }, __jsx("path", {
    "data-name": "Path 67",
    d: "M3.866 16.077a2.481 2.481 0 001.645-1.613h-.42q-.269 0-.531-.012a1.23 1.23 0 01-.87.755.724.724 0 10.175.863z"
  }), __jsx("path", {
    "data-name": "Path 68",
    d: "M15.172 16.479a.725.725 0 10-.432-1.309 1.458 1.458 0 01-.78-.77 4.085 4.085 0 01-.686.062h-.315a2.318 2.318 0 001.543 1.579.725.725 0 00.67.438z"
  }), __jsx("path", {
    "data-name": "Path 69",
    d: "M13.988 2.638l-1.482-1.482a5.015 5.015 0 00-1.356.863l1.972 1.972a4.972 4.972 0 00.866-1.353z"
  }), __jsx("path", {
    "data-name": "Path 70",
    d: "M11.173 3.19a.148.148 0 00.108-.043l.208-.208a.147.147 0 00-.164-.237.15.15 0 00-.044.029l-.209.208a.148.148 0 00.108.252z"
  }), __jsx("path", {
    "data-name": "Path 71",
    d: "M10.547 3.819a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z"
  }), __jsx("path", {
    "data-name": "Path 72",
    d: "M9.92 4.445a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z"
  }), __jsx("path", {
    "data-name": "Path 73",
    d: "M11.932 3.313a.146.146 0 00-.193-.193.15.15 0 00-.044.029l-.208.209a.148.148 0 00.209.208l.208-.209a.144.144 0 00.028-.044z"
  }), __jsx("path", {
    "data-name": "Path 74",
    d: "M11.277 3.775a.148.148 0 00-.208 0l-.208.208a.148.148 0 00.209.208l.208-.208a.148.148 0 000-.208z"
  }), __jsx("path", {
    "data-name": "Path 75",
    d: "M10.652 4.402a.148.148 0 00-.208 0l-.208.209a.148.148 0 00.209.208l.208-.209a.148.148 0 000-.208z"
  }), __jsx("path", {
    "data-name": "Path 76",
    d: "M12.007 4.028a.148.148 0 00.108-.043l.208-.208a.143.143 0 00.029-.044.148.148 0 00-.238-.164l-.208.208a.148.148 0 000 .208.146.146 0 00.101.043z"
  }), __jsx("path", {
    "data-name": "Path 77",
    d: "M11.38 4.654a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z"
  }), __jsx("path", {
    "data-name": "Path 78",
    d: "M10.756 5.28a.148.148 0 00.108-.043l.208-.208a.148.148 0 00-.208-.208l-.208.208a.148.148 0 00.108.251z"
  }), __jsx("path", {
    "data-name": "Path 79",
    d: "M17.414 7.083h-.886V.295a.295.295 0 00-.3-.3h-1.277a.3.3 0 00-.2.078l-1.061.976a1.175 1.175 0 00-.69.096l1.013 1.014a1.187 1.187 0 00.083-.68l.966-.888h.872v6.493H.59a.59.59 0 00-.59.591v.59a.59.59 0 00.59.59h.367c.045.229.108.491.176.794l.413 1.98a2.9 2.9 0 003.138 2.53c.134 0 .27.006.408.006h8.191a3.876 3.876 0 00.565-.041 3.157 3.157 0 002.637-2.342l.671-2.929h.3A.588.588 0 0018 8.265v-.59a.59.59 0 00-.586-.592zm-4.7 6.168a.035.035 0 000 .005v-.005z"
  })));
};

/***/ }),

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

/***/ "05h5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const NotificationIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 15.898 18"
  }, __jsx("path", {
    "data-name": "Path 2062",
    d: "M3756.814,4042.745c-.321,1.887-1.279,2.844-2.816,2.832-1.495-.011-2.448-.987-2.74-2.8-.834-.14-1.684-.218-2.494-.44a7.131,7.131,0,0,1-1.956-.838,1.354,1.354,0,0,1-.333-2.139,7.716,7.716,0,0,0,1.7-4.647,16.446,16.446,0,0,1,.793-3.939,4.785,4.785,0,0,1,4.625-3.188,8.258,8.258,0,0,1,2.4.256,4.649,4.649,0,0,1,3.432,3.795c.3,1.292.441,2.62.646,3.934a7.247,7.247,0,0,0,.836,2.789,6.2,6.2,0,0,0,.573.74,1.577,1.577,0,0,1-.41,2.6,7.794,7.794,0,0,1-2.977.89C3757.661,4042.654,3757.234,4042.695,3756.814,4042.745Zm3.407-2.482a8.64,8.64,0,0,1-1.888-5.015c-.139-1.1-.309-2.195-.547-3.274a3.019,3.019,0,0,0-2.075-2.482,5.458,5.458,0,0,0-1.612-.264c-2.086.031-3.318.688-3.815,2.928-.259,1.167-.388,2.365-.561,3.55a7.6,7.6,0,0,1-1.781,4.458c-.022.023-.019.071-.026.1C3749.689,4041.453,3758.313,4041.456,3760.221,4040.263Zm-4.717,2.583h-2.94a1.47,1.47,0,1,0,2.94,0Z",
    transform: "translate(-3746.087 -4027.577)",
    fill: color
  }));
};

/***/ }),

/***/ "0AHN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wallet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Wallet = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 9"
  }, __jsx("g", {
    "data-name": "Group 8"
  }, __jsx("path", {
    "data-name": "Path 42",
    d: "M12.362 1.129a1.415 1.415 0 00-1.672-1.1L1.428 1.942h11.1z",
    fill: color
  })), __jsx("path", {
    "data-name": "Path 43",
    d: "M11.579 11.242v-2.2a1.822 1.822 0 011.82-1.82h2.784v-2.78a1.415 1.415 0 00-1.415-1.415H1.415A1.415 1.415 0 000 4.442v11.4a1.415 1.415 0 001.415 1.415h13.354a1.415 1.415 0 001.415-1.415v-2.776h-2.785a1.822 1.822 0 01-1.82-1.82z",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 44",
    d: "M16.989 8.03h-3.59a1.011 1.011 0 00-1.01 1.01v2.2a1.012 1.012 0 001.01 1.01h3.59a1.012 1.012 0 001.01-1.01v-2.2a1.012 1.012 0 00-1.01-1.01zm-2.8 3.128a1.006 1.006 0 111.006-1.006 1.006 1.006 0 01-1.006 1.006z",
    fill: color
  })));
};

/***/ }),

/***/ "0zej":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrowNext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ArrowNext = ({
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
    d: "M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z",
    fill: color,
    stroke: color
  }));
};

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hUgY");


/***/ }),

/***/ "17+d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacialCare; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const FacialCare = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("path", {
    d: "M14.651 1.933a3.534 3.534 0 00-3.5 6.1h.1a1.285 1.285 0 011.033.527 3.549 3.549 0 002.37-.206 3.213 3.213 0 110-6.425z",
    fill: color
  }), __jsx("path", {
    "data-name": "Shape",
    d: "M12.86 0a5.147 5.147 0 00-4.247 8.037h1.555a4.176 4.176 0 014.755-6.693.643.643 0 01-.244 1.226 2.57 2.57 0 000 5.14.643.643 0 01.248 1.23 4.207 4.207 0 01-2.261.349c-.173-.021-.125-.045-.125.032v.958A5.143 5.143 0 0012.862 0zM1.284 16.715h4.5a.322.322 0 110 .643H1.915a2.362 2.362 0 001.606.643h6.457a2.19 2.19 0 001.113-.292 5.568 5.568 0 002.365-4.533H.046a6.639 6.639 0 001.238 3.534zm5.792 0a.321.321 0 11-.321.321.321.321 0 01.321-.321zM12.77 11.253H.731a.743.743 0 00-.731.75c0 .176 0 .3.007.535h13.486c.007-.244.007-.373.007-.535a.743.743 0 00-.73-.75z",
    fill: color
  }), __jsx("path", {
    "data-name": "Shape",
    d: "M1.607 9.322v1.285h10.288V9.322a.643.643 0 00-.642-.642h-9a.643.643 0 00-.646.642z",
    fill: color
  }));
};

/***/ }),

/***/ "1S32":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertDotIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AlertDotIcon = ({
  color = 'currentColor',
  width = '10px',
  height = '10px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 10 10"
  }, __jsx("g", {
    "data-name": "Group 2830",
    transform: "translate(-1598 -32)"
  }, __jsx("g", {
    "data-name": "Ellipse 73",
    transform: "translate(1598 32)",
    fill: "#ffffff",
    stroke: "currentColor",
    strokeWidth: "0.3"
  }, __jsx("circle", {
    cx: "5",
    cy: "5",
    r: "5",
    stroke: "none"
  }), __jsx("circle", {
    cx: "5",
    cy: "5",
    r: "4.85",
    fill: "none"
  })), __jsx("path", {
    "data-name": "Path 2700",
    d: "M2,0A2,2,0,1,1,0,2,2,2,0,0,1,2,0Z",
    transform: "translate(1601 35)",
    fill: color
  })));
};

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

/***/ "2/GM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cooking; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Cooking = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    fill: color
  }, __jsx("path", {
    "data-name": "Path 22",
    d: "M13.68 6.482H9.835a.63.63 0 100-1.259H8.268a.63.63 0 000 1.259H4.417a2.327 2.327 0 00-2.127 1.98h13.52a2.328 2.328 0 00-2.13-1.98z"
  }), __jsx("path", {
    "data-name": "Path 23",
    d: "M15.84 9.544v-.18H0v.9h2.256v5.578a2.16 2.16 0 002.16 2.16h9.264a2.16 2.16 0 002.16-2.16v-5.398H18v-.9z"
  }), __jsx("path", {
    "data-name": "Path 24",
    d: "M5.743 2.166a3.089 3.089 0 00.2.237l.175.175c.112.112.213.224.294.321a1.464 1.464 0 01.1.137.266.266 0 01.051.112.269.269 0 01-.068.178 1.08 1.08 0 01-.2.188.636.636 0 00.309.036.544.544 0 00.336-.167.655.655 0 00.165-.4 1.1 1.1 0 00-.043-.375 1.972 1.972 0 00-.279-.572 3.125 3.125 0 00-.173-.224 1.837 1.837 0 01-.135-.176 1.679 1.679 0 01-.336-.69 1.736 1.736 0 01.157-.945 1.162 1.162 0 00-.858.873 1.4 1.4 0 00.017.7 1.888 1.888 0 00.289.6z"
  }), __jsx("path", {
    "data-name": "Path 25",
    d: "M8.077 2.166c.063.083.13.162.2.237l.173.175c.112.112.213.224.3.321.039.05.073.1.1.137a.243.243 0 01.05.112.264.264 0 01-.067.178 1.041 1.041 0 01-.2.188.642.642 0 00.31.036.543.543 0 00.336-.167.653.653 0 00.165-.4 1.1 1.1 0 00-.041-.375 2 2 0 00-.28-.572c-.055-.082-.124-.165-.173-.224a1.837 1.837 0 01-.135-.176 1.679 1.679 0 01-.336-.694A1.736 1.736 0 018.63 0a1.161 1.161 0 00-.857.873 1.4 1.4 0 00.016.7 1.884 1.884 0 00.289.6z"
  }), __jsx("path", {
    "data-name": "Path 26",
    d: "M10.204 2.166a2.971 2.971 0 00.2.237l.175.175c.112.112.212.224.294.321a1.465 1.465 0 01.1.137.28.28 0 01.051.112.266.266 0 01-.068.178 1.041 1.041 0 01-.2.188.64.64 0 00.309.036.547.547 0 00.336-.167.654.654 0 00.163-.4 1.086 1.086 0 00-.041-.375 1.96 1.96 0 00-.279-.572 3.125 3.125 0 00-.173-.224 1.672 1.672 0 01-.135-.176 1.679 1.679 0 01-.33-.694 1.738 1.738 0 01.151-.941A1.16 1.16 0 009.9.874a1.4 1.4 0 00.017.7 1.857 1.857 0 00.29.6z"
  })));
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

/***/ "2SF0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const CustomerIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12.489 13"
  }, __jsx("g", {
    "data-name": "group (1)",
    transform: "translate(0)"
  }, __jsx("path", {
    "data-name": "Path 327",
    d: "M43.356,2.708a.328.328,0,0,0,.459-.062,5.053,5.053,0,0,1,8.04,0,.328.328,0,1,0,.521-.4,5.708,5.708,0,0,0-9.081,0A.328.328,0,0,0,43.356,2.708Z",
    transform: "translate(-41.591)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 328",
    d: "M228.037,79.44a1.023,1.023,0,1,0,1.023-1.023A1.024,1.024,0,0,0,228.037,79.44Z",
    transform: "translate(-218.311 -74.985)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 329",
    d: "M214.438,130.872l-.26-.08a.306.306,0,0,0-.273.048l-.514.385-.514-.385a.306.306,0,0,0-.273-.048l-.26.08a1.013,1.013,0,0,0-.693.962v1.546a.3.3,0,0,0,.05.168l.519.789v2.073a.306.306,0,0,0,.306.306h1.731a.306.306,0,0,0,.306-.306v-2.073l.519-.789a.305.305,0,0,0,.05-.168v-1.546A1.013,1.013,0,0,0,214.438,130.872Z",
    transform: "translate(-202.642 -125.054)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 330",
    d: "M23.247,80.463a1.023,1.023,0,1,0-1.023-1.023A1.024,1.024,0,0,0,23.247,80.463Z",
    transform: "translate(-21.507 -74.985)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 331",
    d: "M8.626,130.872l-.26-.08a.306.306,0,0,0-.273.048l-.514.385-.514-.385a.306.306,0,0,0-.273-.048l-.26.08a1.013,1.013,0,0,0-.693.962v1.546a.3.3,0,0,0,.05.168l.519.789v2.073a.306.306,0,0,0,.306.306H8.445a.306.306,0,0,0,.306-.306v-2.073l.519-.789a.305.305,0,0,0,.05-.168v-1.546A1.013,1.013,0,0,0,8.626,130.872Z",
    transform: "translate(-5.839 -125.054)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 332",
    d: "M121,40.028a1.319,1.319,0,1,0-1.319,1.319A1.321,1.321,0,0,0,121,40.028Z",
    transform: "translate(-113.433 -37.015)",
    fill: "currentColor"
  }), __jsx("path", {
    "data-name": "Path 333",
    d: "M100.82,110.947h0l-.377-.116a.117.117,0,0,0-.144.072l-.792,2.173a.143.143,0,0,1-.269,0l-.792-2.173a.117.117,0,0,0-.11-.077c-.011,0-.411.121-.411.121a1.169,1.169,0,0,0-.8,1.11v2.3a.117.117,0,0,0,.019.064l.826,1.257v3.181a.117.117,0,0,0,.117.117h2.573a.117.117,0,0,0,.117-.117v-3.181l.826-1.257a.117.117,0,0,0,.019-.064v-2.3A1.161,1.161,0,0,0,100.82,110.947Z",
    transform: "translate(-93.126 -105.975)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 334",
    d: "M141.079,111.386a.174.174,0,0,0-.129-.054h-.361a.174.174,0,0,0-.129.054.167.167,0,0,0-.022.2l.193.291-.09.762.178.473a.054.054,0,0,0,.1,0l.178-.473-.09-.762.193-.291A.167.167,0,0,0,141.079,111.386Z",
    transform: "translate(-134.525 -106.459)",
    fill: color
  })));
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

/***/ "2p10":
/***/ (function(module, exports) {



/***/ }),

/***/ "3NfG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const DeliveryIcon = ({
  width = '48px',
  height = '48px',
  color = 'currentColor'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 48 48"
  }, __jsx("g", {
    "data-name": "Group 2996",
    transform: "translate(-1787 -804)"
  }, __jsx("rect", {
    "data-name": "Rectangle 541",
    width: "48",
    height: "48",
    rx: "20",
    transform: "translate(1787 804)",
    fill: "#f8dac2"
  }), __jsx("path", {
    "data-name": "delivery-truck (1)",
    d: "M19.621,630.473a2.216,2.216,0,0,0-1.564.645,2.171,2.171,0,0,0,0,3.108,2.225,2.225,0,0,0,1.564.645,2.2,2.2,0,0,0,0-4.4Zm0,3.421a1.222,1.222,0,1,1,0-2.443,1.222,1.222,0,0,1,0,2.443Zm.567-10.747a.475.475,0,0,0-.327-.127H17.354a.49.49,0,0,0-.489.489v4.007a.49.49,0,0,0,.489.489h3.978a.49.49,0,0,0,.489-.489v-2.683a.489.489,0,0,0-.161-.362Zm.655,3.88h-3v-3.035H19.67l1.173,1.056ZM7.687,630.473a2.216,2.216,0,0,0-1.564.645,2.171,2.171,0,0,0,0,3.108,2.225,2.225,0,0,0,1.564.645,2.2,2.2,0,0,0,0-4.4Zm0,3.421a1.222,1.222,0,1,1,0-2.443,1.222,1.222,0,0,1,0,2.443Zm-3.26-2.82H3.445v-1.3a.489.489,0,0,0-.977,0v1.789a.49.49,0,0,0,.489.489H4.428a.489.489,0,0,0,0-.977Zm2.478-2.663a.49.49,0,0,0-.489-.489H.489a.489.489,0,0,0,0,.977H6.417A.487.487,0,0,0,6.905,628.411Zm-5.425-1.764,5.928.034A.493.493,0,0,0,7.9,626.2a.484.484,0,0,0-.484-.494l-5.928-.034h0a.489.489,0,0,0,0,.977Zm1-2.219H8.406a.489.489,0,1,0,0-.977H2.478a.489.489,0,1,0,0,.977Zm21.341-.66h0l-3.5-2.9a.481.481,0,0,0-.313-.112H15.892V619a.49.49,0,0,0-.489-.489H2.957a.49.49,0,0,0-.489.489v3.577a.489.489,0,0,0,.977,0v-3.089H14.92v11.587H10.913a.489.489,0,0,0,0,.977H16.88a.489.489,0,0,0,0-.977H15.9v-9.339h3.939l3.186,2.639-.034,6.69H22.48a.489.489,0,0,0,0,.977h.992a.486.486,0,0,0,.489-.484L24,624.15A.516.516,0,0,0,23.819,623.768Z",
    transform: "translate(1799 201.49)",
    fill: "#ff811d"
  })));
};

/***/ }),

/***/ "3RdR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrowDropDown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ArrowDropDown = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 10 5"
  }, __jsx("path", {
    "data-name": "Path 2030",
    d: "M0,63.75l5,5,5-5Z",
    transform: "translate(0 -63.75)",
    fill: color
  }));
};

/***/ }),

/***/ "3i/4":
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "40cp":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDkuMTI0IiBoZWlnaHQ9IjE4Ij48ZyBkYXRhLW5hbWU9Ikdyb3VwIDI4MjkiPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjkwIiBkPSJNMCAuNjUybDIuMDcyLjAyNkMzLjgxNC42OTkgNS41NjMuNjI3IDcuMjk2Ljc2M2E1LjIgNS4yIDAgMDE0LjggNC4xNjEgNS4yMjIgNS4yMjIgMCAwMS00LjQyMyA2LjQ4NCAyMS42NjIgMjEuNjYyIDAgMDEtMy40MjIuMTE3Yy0uMzkzIDAtLjQ4Ni4xMjQtLjQ4Mi41LjAxOSAxLjcuMDA4IDMuNDA2LjAwOCA1LjEwOXYuNTM0SDB6bTMuODMyIDcuNjY5Yy40NyAwIC45LjAxNyAxLjMxOCAwYTEwLjQ0OSAxMC40NDkgMCAwMDEuNzgxLS4xNTMgMS45NDQgMS45NDQgMCAwMDEuNTI3LTEuOTUgMS45NzQgMS45NzQgMCAwMC0xLjI5My0yLjA0IDEwLjc0OCAxMC43NDggMCAwMC0zLjMzMi0uMjI5eiIgZmlsbD0iIzBkMTEzNiIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjkxIiBkPSJNMTA5LjEyNCA5LjM2YTQuMjY5IDQuMjY5IDAgMDAtMi4wMTMtLjAxOSAyLjUyMSAyLjUyMSAwIDAwLTEuOSAyLjQzMWMtLjA2OSAxLjc0MS0uMDQ3IDMuNDg1LS4wNjMgNS4yMjd2LjYyN2gtMy41ODFWNS44MDRoMy40NjZ2MS40MjVhMy4yNjYgMy4yNjYgMCAwMTIuMzQ5LTEuNDc3IDEwLjk0NiAxMC45NDYgMCAwMTEuNzQuMDEzeiIgZmlsbD0iIzAwOGQ3MSIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjkyIiBkPSJNNDguODIzLjY3OGguNTE2YzIuMjM2LjAyIDQuNDc4LS4wNjQgNi43LjA4OWE0LjQxMiA0LjQxMiAwIDAxNC4yODMgMy41ODUgMy44NzYgMy44NzYgMCAwMS0yLjE4MiA0LjQyNS40LjQgMCAwMC0uMDg5LjA2IDExLjAyOCAxMS4wMjggMCAwMTEuNTE1LjkyOSA0LjMzOSA0LjMzOSAwIDAxLjc2NCA1LjQzMSA0Ljc2MSA0Ljc2MSAwIDAxLTQuMTk1IDIuNDI1Yy0yLjM5My4wODQtNC43OTEuMDI3LTcuMTg3LjAzYS41NDYuNTQ2IDAgMDEtLjEzLS4wMzh6bTMuNjYzIDEzLjloMi4xYTcuMDgzIDcuMDgzIDAgMDAuOC0uMDMzIDEuOTMyIDEuOTMyIDAgMDAxLjgxLTEuOCAxLjgxNiAxLjgxNiAwIDAwLTEuNDA2LTJjLTEuMDc4LS4xNjQtMi4xODQtLjE1NS0zLjMwNS0uMjIyem0wLTcuMWMuNzU5IDAgMS40ODguMDE5IDIuMjE2LS4wMDlhMy4xMTkgMy4xMTkgMCAwMC45My0uMTkzIDEuNjUgMS42NSAwIDAwMS4wOTItMS42ODUgMS41NjcgMS41NjcgMCAwMC0xLjIxLTEuNjM0Yy0uOTg3LS4xNi0yLS4xNTktMy4wMjgtLjIyOXoiIGZpbGw9IiMwMDhkNzEiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggMjY5MyIgZD0iTTM4LjQ1OCA5LjY4NmMuODQ4LS45MzUgMS43NjEtMS44MiAyLjUyNS0yLjgxOWEyLjU0OCAyLjU0OCAwIDAxMi41LTEuMTE0YzEuMDI1LjEgMi4wNjYuMDIxIDMuMjA4LjAyMWwtNC42MzQgNC45ODIgNC43MzQgNi45Yy0xLjMgMC0yLjUxOS0uMDMtMy43MzcuMDE0YTEuMDY5IDEuMDY5IDAgMDEtMS4wOC0uNTc3Yy0uNzY0LTEuMjE0LTEuNTgzLTIuMzkzLTIuNDE2LTMuNjM5LS40LjQzNi0uNzgxLjgzNi0xLjEzOCAxLjI1OC0uMDcxLjA4NC0uMDU4LjI1Mi0uMDU5LjM4MnYyLjUzNmgtMy41NjdWLjM1OGgzLjU1NHY5LjN6IiBmaWxsPSIjMGQxMTM2Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI2OTQiIGQ9Ik03My40OTMgMTcuNjQ0aC0zLjE5NWwtLjEyNi0xLjE3NGExMi40MyAxMi40MyAwIDAxLTEuMTg1Ljk2OGMtMS40MS45LTQuNDU5Ljg3My01Ljc1Ny0xLjIzNWEzLjQ0NSAzLjQ0NSAwIDAxMi4zMjktNS4yMjhjMS4wNjktLjI1OCAyLjE3MS0uMzg0IDMuMjU3LS41Ny4wOTItLjAxNi4xODMtLjAzMy4yNzUtLjA0N2EuODA5LjgwOSAwIDAwLjc3MS0uNTg3IDEuMDE4IDEuMDE4IDAgMDAtLjI5NS0xLjAyMyAyLjA3MyAyLjA3MyAwIDAwLTIuMDg1LS40MjggMS44MTEgMS44MTEgMCAwMC0xLjMzOCAxLjM0NWMtLjAxNi4wNS0uMDEzLjEwNi0uMDI2LjE1N2ExLjE0MiAxLjE0MiAwIDAxLS4wNjMuMTQzbC0xLjU0Ny0uM2MtLjUxNy0uMS0xLjAxMS0uMjA5LTEuNTQ2LS4zMjFhMy42OSAzLjY5IDAgMDEuODU5LTIuMDc1IDQuNzg5IDQuNzg5IDAgMDEyLjgyMy0xLjY3OCA3LjIzIDcuMjMgMCAwMTQuMTIyLjI2NCAzLjkgMy45IDAgMDEyLjYyOSAzLjc4MWMuMDU5IDEuNjQ4LjAxIDMuMy4wMjQgNC45NS4wMSAxLjAwNy4wNDggMi4wMTYuMDc0IDMuMDU4em0tMy42MS01LjE3NmMtLjQyMy4wNjMtLjgyLjEtMS4yMDcuMTg1YTE0LjY4OCAxNC42ODggMCAwMC0xLjgzNy40NjhjLS40NDkuMTYxLS41NTcuNi0uNTQ4IDEuMDU5YTEuMTMxIDEuMTMxIDAgMDAuNTg1IDEuMDIxIDIuMjM1IDIuMjM1IDAgMDAyLjY1OC0uNzE5IDMuMTc4IDMuMTc4IDAgMDAuMzQ5LTIuMDEzeiIgZmlsbD0iIzAwOGQ3MSIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjk1IiBkPSJNOTguNTA5IDE3LjYzOWgtMy4ybC0uMTI1LTEuMjI4YS44NjIuODYyIDAgMDAtLjE1NC4xMjljLTEuMzQ1IDEuOTM0LTQuOTE4IDEuODY5LTYuNDE3LjE1OGEzLjQyMyAzLjQyMyAwIDAxMS40NTctNS41NTQgMjkuNzI0IDI5LjcyNCAwIDAxMy4yMzYtLjY1NmMuMjc0LS4wNTMuNTUzLS4wODEuODI2LS4xMzhhLjg4OC44ODggMCAwMC40OS0xLjU2MyAyLjAyNiAyLjAyNiAwIDAwLTIuMDMxLS40ODYgMS44IDEuOCAwIDAwLTEuNDExIDEuMzE2Yy0uMDM0LjEtLjA1LjItLjA4Ni4zNTlsLTMuMTIzLS42MjlhMy45MzEgMy45MzEgMCAwMTEuOTU0LTMuMDM1IDYuNTI3IDYuNTI3IDAgMDE2LjM0My0uMjI0QTMuNjc1IDMuNjc1IDAgMDE5OC40IDkuNDk3Yy4wNjQgMS41ODEuMDIxIDMuMTY3LjAzNyA0Ljc1MS4wMTYgMS4xMTIuMDQ4IDIuMjMuMDcyIDMuMzkxem0tMy41NDUtNS4xODJjLS44LjEyNS0xLjUuMjEzLTIuMTg3LjM0OWEzLjU2MSAzLjU2MSAwIDAwLS45NjYuMzQgMS4wNDcgMS4wNDcgMCAwMC0uNSAxLjA5MiAxLjExNCAxLjExNCAwIDAwLjYzNS45OSAyLjEgMi4xIDAgMDAyLjg1My0xLjMgMTAuNzgyIDEwLjc4MiAwIDAwLjE2NS0xLjQ2OHoiIGZpbGw9IiMwMDhkNzEiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggMjY5NiIgZD0iTTMyLjM2NyA5LjU0NGwtMy4wNTguOTE4YTcuMDIzIDcuMDIzIDAgMDAtMS4wMDctMS4yMjcgMi42NTMgMi42NTMgMCAwMC00LjE0NyAxLjU3OCA0LjY0OSA0LjY0OSAwIDAwLS4wMDYgMS43NzMgMi41NjEgMi41NjEgMCAwMDIuMjIyIDIuMDUyIDIuNSAyLjUgMCAwMDIuODMtMS40NDRjLjA1My0uMS4yNDMtLjIyNi4zMy0uMi45NjkuMjc2IDEuOTMxLjU3OSAyLjk1Ni44OTRhNy43NzMgNy43NzMgMCAwMS0uMjguNzkyQTUuNTc2IDUuNTc2IDAgMDEyNi45NTQgMThhNi4yODcgNi4yODcgMCAxMS0uMTYzLTEyLjU2OSA1Ljc1MyA1Ljc1MyAwIDAxNC42MzggMi4wODUgNC42MjUgNC42MjUgMCAwMS45MzggMi4wMjh6IiBmaWxsPSIjMGQxMTM2Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI2OTciIGQ9Ik03NS45NDcgNS43OTJoOS42NzRjLjAwNi4xMjYuMDE4LjI1Mi4wMTguMzc5IDAgLjYzOS0uMDM4IDEuMjgxLjAxMyAxLjkxNmExLjQyNCAxLjQyNCAwIDAxLS40ODMgMS4xODVjLTEuNTcyIDEuNjI3LTMuMTIzIDMuMjc0LTQuNjgxIDQuOTE0LS4wODguMDkzLS4xNjkuMTkyLS4zMDcuMzUxSDg1Ljd2My4xaC05LjljLS4wMS0uMTUtLjAyNi0uMjkxLS4wMjYtLjQzMiAwLS43MzIuMDIyLTEuNDY1LS4wMS0yLjJhMS4yNDEgMS4yNDEgMCAwMS40LS45ODNjMS41MjYtMS42IDMuMDM2LTMuMjA5IDQuNTUxLTQuODE3LjA4LS4wODUuMTU1LS4xNzUuMjc5LS4zMTdoLTUuMDUzeiIgZmlsbD0iIzAwOGQ3MSIvPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAyNjk4IiBkPSJNMTQuNDg1IDE3LjYyNlY1LjgwNWgzLjU2N3YxMS44MjF6IiBmaWxsPSIjMGQxMTM2Ii8+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDI2OTkiIGQ9Ik0xOC4zODYgMi4xMzhhMi4xIDIuMSAwIDAxLTIuMTQ4IDIuMSAyLjEzOSAyLjEzOSAwIDAxLTIuMDc4LTIuMTRBMi4xNDEgMi4xNDEgMCAwMTE2LjI4Ni4wMDVhMi4wODIgMi4wODIgMCAwMTIuMSAyLjEzM3oiIGZpbGw9IiMwMDhkNzEiLz48L2c+PC9zdmc+"

/***/ }),

/***/ "4FEu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WomenDress; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const WomenDress = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("defs", null, __jsx("clipPath", {
    id: "a"
  }, __jsx("path", {
    "data-name": "Rectangle 20",
    transform: "translate(226 1073)",
    fill: "#ebe7e7",
    d: "M0 0h18v18H0z"
  }))), __jsx("g", {
    "data-name": "Women Dress",
    transform: "translate(-226 -1073)",
    clipPath: "url(#a)"
  }, __jsx("g", {
    "data-name": "Group 28",
    transform: "translate(230.461 1073)",
    fill: color
  }, __jsx("path", {
    "data-name": "Path 80",
    d: "M8.236 12.619c-.12-.6-.384-3.422-1.008-4.358a1.446 1.446 0 01-.19-.8.039.039 0 000-.007c.02-.29.052-.6.073-.762a.493.493 0 01.01-.076c.016-.1.036-.192.057-.289a16.065 16.065 0 00.515-2.746c0-1.429-.733-1.849-.733-1.849.251-1.069.434-1.647.434-1.647L7.179 0A10.558 10.558 0 006.7 1.717a2.911 2.911 0 01-2.161.694 2.913 2.913 0 01-2.161-.694A10.578 10.578 0 001.897 0l-.216.087s.18.577.434 1.647c0 0-.733.421-.733 1.849a14.672 14.672 0 00.491 2.631.1.1 0 000 .039.2.2 0 00.01.035l.007.028c.03.123.074.347.081.347.014.087.029.243.043.4.006.055.01.109.014.163l.016.207h-.007a1.462 1.462 0 01-.191.826c-.624.936-.889 3.758-1.008 4.358s-.408 2.81-.552 3.459-.288 1.537-.288 1.537a3.7 3.7 0 001.2.144s-.087.252.649.18a14.433 14.433 0 011.969-.06c.5.024.153.12.72.12s.216-.1.72-.12a14.388 14.388 0 011.969.06c.733.072.649-.18.649-.18a3.708 3.708 0 001.2-.144s-.144-.889-.289-1.537-.428-2.857-.549-3.457zM6.955 6.468c-.056.077-.106.2-.041.251-.017.115-.027.231-.039.347-.065-.075-.274-.006-.274-.006-.155-.068.137.335.254.181-.005.065-.007.13-.01.2-.142-.01-.284-.02-.427-.028a.66.66 0 00-.068-.149c.016-.108-.108.016-.15.137a25.847 25.847 0 00-.925-.02C5.211 7.304 5 7.373 5 7.373c-.031-.014-.044-.008-.044.009h-.032a.147.147 0 00.016-.067.152.152 0 00-.3 0 .149.149 0 00.017.067c-.406 0-.812.013-1.214.023a.791.791 0 00-.042-.077c.014-.092-.074-.017-.126.081l-.207.005a.491.491 0 00.112-.2c.154-.1-.434-.074-.271.151a.2.2 0 00.051.051h-.173a.087.087 0 000-.122c-.136-.2-.238.094-.25.127l-.3.006a.43.43 0 00-.005-.081c.073-.011.315-.308.087-.354a.173.173 0 00-.109.005 4.818 4.818 0 00-.048-.385.674.674 0 00.059-.135c.067-.042-.005-.062-.1-.051a2.26 2.26 0 00-.039-.147h.224a.152.152 0 10.292.057.148.148 0 00-.014-.062l1.04-.019a.1.1 0 000 .132c.143.2.244-.072.266-.137l.479-.005c.075.095.22.2.277.043a.207.207 0 00.009-.046h.7a.15.15 0 00-.034.092.152.152 0 10.3 0 .149.149 0 00-.033-.087c.384.007.766.024 1.148.048-.116.015-.254.077-.166.2.161.225.271-.151.271-.151.029-.018.032-.032.018-.042l.1.007a.042.042 0 00.009.008c-.007.052-.016.1-.026.153z"
  }), __jsx("path", {
    "data-name": "Path 81",
    d: "M4.951 7.161c-.144.087.4.076.252-.134s-.252.134-.252.134z"
  }), __jsx("path", {
    "data-name": "Path 82",
    d: "M4.286 7.052c-.1.235.249.14.249.14.15.075-.149-.375-.249-.14z"
  }), __jsx("path", {
    "data-name": "Path 83",
    d: "M4.768 6.721c-.284-.057-.1.31-.1.31-.049.19.384-.249.1-.31z"
  }), __jsx("path", {
    "data-name": "Path 84",
    d: "M5.973 6.533c.095-.26-.277-.138-.277-.138-.167-.073.183.398.277.138z"
  }), __jsx("path", {
    "data-name": "Path 85",
    d: "M5.382 6.898c.276.023.061-.3.061-.3.027-.184-.34.279-.061.3z"
  }), __jsx("path", {
    "data-name": "Path 86",
    d: "M4.985 6.632c.161.225.271-.151.271-.151.154-.097-.433-.076-.271.151z"
  }), __jsx("circle", {
    "data-name": "Ellipse 3",
    cx: ".152",
    cy: ".152",
    r: ".152",
    transform: "translate(3.253 6.916)"
  }), __jsx("path", {
    "data-name": "Path 87",
    d: "M3.851 6.782c-.144-.21-.252.134-.252.134-.144.086.396.076.252-.134z"
  }), __jsx("path", {
    "data-name": "Path 88",
    d: "M3.649 7.126c-.167-.073.183.4.277.138s-.277-.138-.277-.138z"
  }), __jsx("path", {
    "data-name": "Path 89",
    d: "M2.903 6.808c-.1.235.249.14.249.14.151.075-.149-.374-.249-.14z"
  }), __jsx("path", {
    "data-name": "Path 90",
    d: "M3.384 6.48c-.284-.057-.1.31-.1.31-.046.185.385-.256.1-.31z"
  }), __jsx("path", {
    "data-name": "Path 91",
    d: "M6.359 6.852a.152.152 0 11-.152.152.152.152 0 01.152-.152z"
  }), __jsx("path", {
    "data-name": "Path 92",
    d: "M6.553 6.853c-.144.087.4.076.252-.134s-.252.134-.252.134z"
  }), __jsx("path", {
    "data-name": "Path 93",
    d: "M5.861 7.3c.161.225.271-.151.271-.151.152-.1-.435-.074-.271.151z"
  }), __jsx("path", {
    "data-name": "Path 94",
    d: "M5.856 6.744c-.1.235.249.14.249.14.15.075-.15-.375-.249-.14z"
  }), __jsx("path", {
    "data-name": "Path 95",
    d: "M6.338 6.413c-.284-.057-.1.31-.1.31-.049.187.385-.25.1-.31z"
  }), __jsx("path", {
    "data-name": "Path 96",
    d: "M4.064 6.654c.276.023.061-.3.061-.3.027-.184-.339.276-.061.3z"
  }), __jsx("path", {
    "data-name": "Path 97",
    d: "M2.972 6.533c.094-.26-.277-.138-.277-.138-.168-.073.182.398.277.138z"
  }), __jsx("path", {
    "data-name": "Path 98",
    d: "M2.381 6.898c.276.023.061-.3.061-.3.026-.184-.336.279-.061.3z"
  }))));
};

/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "4PR6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrowUp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ArrowUp = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 11.996 12"
  }, __jsx("path", {
    "data-name": "Path 2462",
    d: "M18.276,12.1,12.7,6.524a.424.424,0,0,0-.6,0L6.524,12.1a.424.424,0,0,0,0,.6.424.424,0,0,0,.6,0l4.854-4.854V17.977a.423.423,0,1,0,.847,0V7.846L17.677,12.7a.424.424,0,0,0,.6,0A.434.434,0,0,0,18.276,12.1Z",
    transform: "translate(-6.4 -6.4)",
    fill: color
  }));
};

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4g4/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./src/utils/constant.ts
var constant = __webpack_require__("f/wd");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./src/graphql/query/delivery.ts
var delivery = __webpack_require__("ZLcN");

// EXTERNAL MODULE: ./src/assets/icons/GiftBox.tsx
var GiftBox = __webpack_require__("g+f/");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/css"
var css_ = __webpack_require__("ExBD");
var css_default = /*#__PURE__*/__webpack_require__.n(css_);

// CONCATENATED MODULE: ./src/components/checkbox/checkbox.style.tsx
 // import { themeGet } from '@styled-system/theme-get';


const StyledCheckBox = external_styled_components_default.a.div.withConfig({
  displayName: "checkboxstyle__StyledCheckBox",
  componentId: "sc-1j5jfso-0"
})({
  display: 'inline-flex'
});
const StyledCheckBoxInputIndicator = external_styled_components_default.a.div.withConfig({
  displayName: "checkboxstyle__StyledCheckBoxInputIndicator",
  componentId: "sc-1j5jfso-1"
})(css_default()({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 14,
  height: 14,
  borderRadius: 'base',
  borderWidth: 1,
  borderColor: 'text.regular',
  position: 'relative',
  transition: 'all 0.3s ease',
  '&::after': {
    content: ' ',
    width: 2,
    height: 6,
    transform: 'rotate(45deg) scale(0.8)',
    borderBottom: '2px solid',
    borderRight: '2px solid',
    borderColor: 'text.regular',
    position: 'absolute',
    top: 1,
    opacity: 0,
    visibility: 'hidden',
    transitionProperty: 'opacity, visibility',
    transitionDuration: '0.3s'
  }
}));
const StyledCheckBoxInput = external_styled_components_default.a.input.withConfig({
  displayName: "checkboxstyle__StyledCheckBoxInput",
  componentId: "sc-1j5jfso-2"
})(css_default()({
  display: 'flex',
  alignItems: 'center'
}));
const StyledCheckBoxLabel = external_styled_components_default.a.label.withConfig({
  displayName: "checkboxstyle__StyledCheckBoxLabel",
  componentId: "sc-1j5jfso-3"
})(css_default()({
  display: 'flex',
  alignItems: 'center',
  color: 'text.regular',
  fontSize: 'base',
  fontWeight: 'regular'
}), ({
  position
}) => ({
  flexDirection: position === 'right' ? 'row-reverse' : 'row'
}));
const StyledCheckBoxLabelText = external_styled_components_default.a.span.withConfig({
  displayName: "checkboxstyle__StyledCheckBoxLabelText",
  componentId: "sc-1j5jfso-4"
})(props => props.position === 'left' ? {
  marginRight: 10
} : {
  marginLeft: 10
}); // const CheckBoxStyle = styled.div`

/* display: inline-flex; */

/* Switch label default style */

/* .Mahdi Fashion__field-label { */

/* color: ${themeGet('colors.text.regular', '#77798C')};
    font-size: ${themeGet('fontSizes.2', '14')}px;
    font-weight: 400; */

/* } */

/* Switch label style when labelPosition on left */

/* &.label_left {
    label { */

/* display: flex; */

/* align-items: center; */

/* .Mahdi Fashion__field-label {
        margin-right: 10px;
      } */

/* }
  } */

/* Switch label style when labelPosition on right */

/* &.label_right {
    label { */

/* display: flex;
      flex-direction: row-reverse;
      align-items: center; */

/* .Mahdi Fashion__field-label {
        margin-left: 10px;
      } */
// }
// }

/* Checkbox default style */

/* input[type='checkbox'] {
    &.checkbox { */

/* opacity: 0;
      position: absolute;
      margin: 0;
      z-index: -1;
      width: 0;
      height: 0;
      overflow: hidden;
      pointer-events: none;

      &:checked + div {
        border-color: ${themeGet('colorsdarkRegular', '#77798C')};
        background-color: #ffffff;
        &::after {
          opacity: 1;
          visibility: visible;
          transform: rotate(45deg) scale(1);
        }
      } */

/* }
    + div { */

/* display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 14px;
      height: 14px;
      border-radius: 6px;
      border: 1px solid ${themeGet('colorsdarkRegular', '#77798C')};
      position: relative;
      transition: all 0.3s ease;
      &::after {
        content: '';
        width: 2px;
        height: 6px;
        transform: rotate(45deg) scale(0.8);
        border-bottom: 2px solid ${themeGet('colorsdarkRegular', '#77798C')};
        border-right: 2px solid ${themeGet('colorsdarkRegular', '#77798C')};
        position: absolute;
        top: 1px;
        opacity: 0;
        visibility: hidden;
        transition-property: opacity, visibility;
        transition-duration: 0.3s;
      }
    } */

/* }
`; */
// CheckBoxStyle.displayName = 'CheckBoxStyle';
// export default CheckBoxStyle;
// CONCATENATED MODULE: ./src/components/checkbox/checkbox.tsx
var __jsx = external_react_default.a.createElement;



const CheckBox = ({
  className,
  isChecked,
  labelText,
  keyName,
  id,
  labelPosition = 'right',
  disabled = false,
  onChange
}) => {
  console.log('keyName,', keyName);
  return __jsx(StyledCheckBox, {
    key: keyName,
    className: `Mahdi Fashion__checkbox ${keyName}`.trim()
  }, __jsx(StyledCheckBoxLabel, {
    htmlFor: id,
    position: labelPosition
  }, labelText && __jsx(StyledCheckBoxLabelText, {
    position: labelPosition
  }, labelText), __jsx(StyledCheckBoxInput, {
    type: "checkbox",
    className: "checkbox-input",
    checked: isChecked,
    onChange: onChange,
    disabled: disabled
  })));
};

/* harmony default export */ var checkbox_checkbox = (CheckBox);
// EXTERNAL MODULE: ./src/utils/session.ts
var session = __webpack_require__("XHU+");

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// CONCATENATED MODULE: ./src/features/delivery-selection/delivery-selection.style.tsx



const hideSearch = Object(external_styled_components_["keyframes"])(["from{display:none;}to{display:flex;}"]);
const positionAnim = Object(external_styled_components_["keyframes"])(["from{position:fixed;opacity:1;}to{opacity:0;transition:all 0.3s ease;}"]);
const SubHeaderWrapper = external_styled_components_default.a.header.withConfig({
  displayName: "delivery-selectionstyle__SubHeaderWrapper",
  componentId: "ti0gjw-0"
})(["position:absolute;background-color:transparent;box-shadow:none;border-bottom:1px solid ", ";border-top:1px solid ", ";padding:0px 10px;top:60px;display:flex;align-items:center;justify-content:space-between;left:0;width:100%;background-color:", ";box-shadow:", ";transition:all 0.3s ease;&.home{}@media (min-width:1600px){padding:0px 40px;}.headerSearch{@media only screen and (min-width:991px) and (max-width:1200px){input{width:80%;}.buttonText{display:none;}}}&.unSticky{animation:", " 0.3s ease;.minimal-wrap,.headerSearch{animation:", " 0.3s ease;display:none;}.banner-search{width:650px;}@media (max-width:1366px){.headerSearc,.banner-search{margin:0 5%;}}}&.sticky{background-color:", ";position:fixed;box-shadow:", ";.modern-wrap,.banner-search{animation:", " 0.3s ease;display:none;}.minimal-wrap{animation:", " 0.3s ease;display:flex;width:75%;}@media (max-width:1366px){.minimal-wrap{margin:0 5%;}}.headerSearch{display:flex;svg{height:30px;width:30px;padding-left:15px;}form{background-color:", ";input{background-color:", ";}}@media only screen and (min-width:991px) and (max-width:1200px){.buttonText{display:none;}}}}.popover-wrapper{.popover-content{padding:20px 0;.menu-item{a{margin:0;padding:12px 30px;border-bottom:1px solid ", ";cursor:pointer;white-space:nowrap;&:last-child{border-bottom:0;}&:hover{color:", ";}&.current-page{color:", ";}.menu-item-icon{margin-right:15px;}}}}}.headerSearch{input{@media (max-width:1400px){padding:0 15px;font-size:", "px;}@media only screen and (min-width:991px) and (max-width:1200px){}}button{@media (max-width:1400px){padding:0 15px;font-size:", "px;}}}"], Object(theme_get_["themeGet"])('colors.primary.regular', '#dbe9e5'), Object(theme_get_["themeGet"])('colors.primary.regular', '#dbe9e5'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)'), positionAnim, hideSearch, Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)'), hideSearch, hideSearch, Object(theme_get_["themeGet"])('colors.gray.400', '#F3F3F3'), Object(theme_get_["themeGet"])('colors.gray.400', '#F3F3F3'), Object(theme_get_["themeGet"])('colors.gray.200', '#F7F7F7'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontSizes.base', '15'));
const BannerText = external_styled_components_default.a.div.withConfig({
  displayName: "delivery-selectionstyle__BannerText",
  componentId: "ti0gjw-1"
})(["font-family:'Poppins';color:black;margin-left:4px;margin-top:2px;"]);
const DeliveryText = external_styled_components_default.a.div.withConfig({
  displayName: "delivery-selectionstyle__DeliveryText",
  componentId: "ti0gjw-2"
})(["font-family:'Poppins';color:black;margin:0px 5px;"]);
const LocationContent = external_styled_components_default.a.div.withConfig({
  displayName: "delivery-selectionstyle__LocationContent",
  componentId: "ti0gjw-3"
})(["display:flex;align-items:center;justify-content:space-between;"]);
const DeliveryMethods = external_styled_components_default.a.div.withConfig({
  displayName: "delivery-selectionstyle__DeliveryMethods",
  componentId: "ti0gjw-4"
})(["display:flex;flex-direction:column;"]);
const Options = external_styled_components_default.a.div.withConfig({
  displayName: "delivery-selectionstyle__Options",
  componentId: "ti0gjw-5"
})(["display:flex;flex-direction:row;justify-content:space-around;padding:0px 20px;"]);
const CardWrapper = external_styled_components_default.a.span.withConfig({
  displayName: "delivery-selectionstyle__CardWrapper",
  componentId: "ti0gjw-6"
})(["display:flex;width:100px;flex-direction:column;position:relative;cursor:pointer;background-color:#ffffff;padding:5px 8px;border-radius:", ";border-width:2px;margin-bottom:10px;border-style:solid;border-color:", ";text-align:center;"], Object(theme_get_["themeGet"])('radii.base', '2px'), props => props.color || '#e4f4fc');
const MethodOption = external_styled_components_default.a.div.withConfig({
  displayName: "delivery-selectionstyle__MethodOption",
  componentId: "ti0gjw-7"
})(["display:flex;align-items:center;justify-content:space-between;width:60px;height:30px;"]);
const BannerIcon = external_styled_components_default.a.span.withConfig({
  displayName: "delivery-selectionstyle__BannerIcon",
  componentId: "ti0gjw-8"
})(["line-height:0;img{height:18px;line-height:0;-webkit-filter:invert(100%);filter:invert(100%);}"]);
const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "delivery-selectionstyle__Wrapper",
  componentId: "ti0gjw-9"
})(["text-align:center;background-color:", ";"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
const Container = external_styled_components_default.a.div.withConfig({
  displayName: "delivery-selectionstyle__Container",
  componentId: "ti0gjw-10"
})(["padding:10px 20px;@media (max-width:768px){padding:10px 20px;}"]);
const LogoWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "delivery-selectionstyle__LogoWrapper",
  componentId: "ti0gjw-11"
})(["margin-bottom:30px;img{max-width:160px;}"]);
const Heading = external_styled_components_default.a.h4.withConfig({
  displayName: "delivery-selectionstyle__Heading",
  componentId: "ti0gjw-12"
})(["color:black;margin-bottom:10px;font-family:", ";font-size:", "px;font-weight:", ";"], Object(theme_get_["themeGet"])('fonts.heading', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.base', '17'), Object(theme_get_["themeGet"])('fontWeights.medium', '500'));
const SubHeading = external_styled_components_default.a.span.withConfig({
  displayName: "delivery-selectionstyle__SubHeading",
  componentId: "ti0gjw-13"
})(["margin-bottom:30px;font-family:", ";font-size:", "px;font-weight:", ";color:", ";display:block;line-height:1.5;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const OfferSection = external_styled_components_default.a.div.withConfig({
  displayName: "delivery-selectionstyle__OfferSection",
  componentId: "ti0gjw-14"
})(["padding:20px;background-color:", ";color:", ";display:flex;justify-content:center;align-items:center;"], Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const Offer = external_styled_components_default.a.p.withConfig({
  displayName: "delivery-selectionstyle__Offer",
  componentId: "ti0gjw-15"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin:0;margin-left:10px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const Input = external_styled_components_default.a.input.withConfig({
  displayName: "delivery-selectionstyle__Input",
  componentId: "ti0gjw-16"
})(["width:100%;height:48px;cursor:pointer;border-radius:", ";background-color:", ";border:1px solid ", ";font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:19px;padding:0 18px;box-sizing:border-box;transition:border-color 0.25s ease;margin-bottom:20px;text-align:center;&:hover,&:focus{outline:0;}&:focus{border-color:", ";}&::placeholder{color:", ";}&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}&.disabled{.inner-wrap{cursor:not-allowed;opacity:0.6;}}"], Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'), Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'), Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c')); // export const Button = styled(Buttons)`
//   border-radius: ${themeGet('radii.base', '6px')};
// `;


// CONCATENATED MODULE: ./src/features/delivery-selection/delivery-selection.tsx
var delivery_selection_jsx = external_react_default.a.createElement;










const DeliverySelection = (_ref) => {
  var _deliverData$delivery;

  let props = Object.assign({}, _ref);
  const [deliveryMethodTypeSelected, setDeliveryMethodType] = external_react_default.a.useState();
  const [deliveryMethodSelected, setDeliveryMethod] = external_react_default.a.useState(undefined);
  const {
    data: deliverData
  } = Object(react_hooks_["useQuery"])(delivery["a" /* DELIVERY_METHOD */]);
  const deliveryMethods = deliverData === null || deliverData === void 0 ? void 0 : (_deliverData$delivery = deliverData.deliveryMethods) === null || _deliverData$delivery === void 0 ? void 0 : _deliverData$delivery.items; // const [address, setDeliveryAddress] = useState("");

  const [zipCode, setZipCode] = external_react_default.a.useState('');
  const [searchResult, setSearchResult] = external_react_default.a.useState([]); // useEffect(() => {
  //   if (getCookie(deliveryMethodCookieKeyName) && !props.deliveryMethodSaved) {
  //     const deliveryMethodSaved = JSON.parse(getCookie(deliveryMethodCookieKeyName));
  //     props.setDeliveryMethodSaved(deliveryMethodSaved)
  //   }
  // }, [props.deliveryMethodSaved]);

  const setDeliveryMethodAndSaveCookie = deli => {
    setDeliveryMethod(deli);
    props.setDeliveryMethodSaved(deli); // if (getCookie('first_visit')) {

    Object(session["b" /* setCookie */])(constant["m" /* deliveryMethodCookieKeyName */], deli); // }
  };

  const searchDeliveryZipCode = (e, deli) => {
    handleOnFocus(e);
    setZipCode(deli);
    const deliveryOptionsMethods = deliveryMethods === null || deliveryMethods === void 0 ? void 0 : deliveryMethods.filter(deliveryMethod => {
      return !deliveryMethod.isPickUp;
    });
    const methodFound = deliveryOptionsMethods.filter(method => method.name.includes(zipCode));
    e.stopPropagation();
    setSearchResult(deli ? methodFound : null);
  };

  const searchPickupZipCode = (e, deli) => {
    handleOnFocus(e);
    setZipCode(deli);
    const pickUpOptionsMethods = deliveryMethods === null || deliveryMethods === void 0 ? void 0 : deliveryMethods.filter(deliveryMethod => {
      return deliveryMethod.isPickUp === true;
    });
    const methodFound = pickUpOptionsMethods.filter(method => method.details.includes(zipCode));
    e.stopPropagation();
    setSearchResult(deli ? methodFound : null);
  };

  const setDelivery = (e, deli) => {
    e.stopPropagation();
    setDeliveryMethodType(deli);
    setSearchResult(null);
    setZipCode('');
  };

  const handleOnFocus = event => {
    event.preventDefault();
    event.stopPropagation();
  }; // deliveryMethodSelected


  const isPickUpSelected = deliveryMethodTypeSelected === constant["c" /* DeliveryMethodsConstants */].PICKUP;
  const isDeliverySelected = deliveryMethodTypeSelected === constant["c" /* DeliveryMethodsConstants */].DELIVERY;
  return delivery_selection_jsx(DeliveryMethods, null, delivery_selection_jsx(Options, null, delivery_selection_jsx(CardWrapper, {
    color: isPickUpSelected ? '#009E7F' : '#e4f4fc',
    onClick: e => setDelivery(e, constant["c" /* DeliveryMethodsConstants */].PICKUP)
  }, "Pickup"), delivery_selection_jsx(CardWrapper, {
    color: isDeliverySelected ? '#009E7F' : '#e4f4fc',
    onClick: e => setDelivery(e, constant["c" /* DeliveryMethodsConstants */].DELIVERY)
  }, "Delivery")), delivery_selection_jsx(Wrapper, null, !!deliveryMethodTypeSelected && delivery_selection_jsx(Container, null, delivery_selection_jsx(Heading, {
    onClick: e => handleOnFocus(e)
  }, isPickUpSelected ? delivery_selection_jsx(external_react_intl_["FormattedMessage"], {
    id: "pickupModalheading",
    defaultMessage: "Select Your Location"
  }) : delivery_selection_jsx(external_react_intl_["FormattedMessage"], {
    id: "deliveryModalheading",
    defaultMessage: "Select Your Location"
  })), delivery_selection_jsx("div", {
    onClick: e => handleOnFocus(e)
  }, delivery_selection_jsx(Input, {
    type: "text",
    name: "name",
    onFocus: e => handleOnFocus(e),
    placeholder: "ZIP Code",
    value: zipCode // we have to change the onChange because the is no one for the controller name actualy
    ,
    onChange: e => isPickUpSelected ? searchPickupZipCode(e, e.target.value) : searchDeliveryZipCode(e, e.target.value),
    width: "197px",
    height: "34.5px"
  })), (searchResult === null || searchResult === void 0 ? void 0 : searchResult.length) === 0 && zipCode.length > 4 && delivery_selection_jsx(DeliveryText, null, deliveryMethodTypeSelected === constant["c" /* DeliveryMethodsConstants */].PICKUP ? 'No Dittos Pickup Locations found, yet, sorry' : 'Sorry, we dont deliver there, yet..'), (searchResult === null || searchResult === void 0 ? void 0 : searchResult.length) ? searchResult.map((result, i) => {
    return delivery_selection_jsx(checkbox_checkbox, {
      keyName: `${i}-results`,
      isChecked: (deliveryMethodSelected === null || deliveryMethodSelected === void 0 ? void 0 : deliveryMethodSelected.id) === result.id,
      labelText: `${result.name} - ${result.details}`,
      id: `result-${i}`,
      onChange: e => {
        setDeliveryMethodAndSaveCookie((deliveryMethodSelected === null || deliveryMethodSelected === void 0 ? void 0 : deliveryMethodSelected.id) === result.id ? null : result);
      }
    });
  }) : ''), delivery_selection_jsx(OfferSection, null, delivery_selection_jsx(GiftBox["a" /* GiftBox */], null), delivery_selection_jsx(Offer, null, delivery_selection_jsx(external_react_intl_["FormattedMessage"], {
    id: "locationModalFooter",
    defaultMessage: "Free Delivery For 1st Order",
    values: {
      number: 1
    }
  })))));
};

/* harmony default export */ var delivery_selection = __webpack_exports__["a"] = (DeliverySelection);

/***/ }),

/***/ "5kWH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CNFlag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const CNFlag = ({
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480",
    width: width,
    height: height
  }, __jsx("defs", null, __jsx("path", {
    id: "a",
    fill: "#ffde00",
    d: "M-.6.8L0-1 .6.8-1-.3h2z"
  })), __jsx("path", {
    fill: "#de2910",
    d: "M0 0h640v480H0z"
  }), __jsx("use", {
    width: "30",
    height: "20",
    transform: "matrix(71.9991 0 0 72 120 120)",
    xlinkHref: "#a"
  }), __jsx("use", {
    width: "30",
    height: "20",
    transform: "matrix(-12.33562 -20.5871 20.58684 -12.33577 240.3 48)",
    xlinkHref: "#a"
  }), __jsx("use", {
    width: "30",
    height: "20",
    transform: "matrix(-3.38573 -23.75998 23.75968 -3.38578 288 95.8)",
    xlinkHref: "#a"
  }), __jsx("use", {
    width: "30",
    height: "20",
    transform: "matrix(6.5991 -23.0749 23.0746 6.59919 288 168)",
    xlinkHref: "#a"
  }), __jsx("use", {
    width: "30",
    height: "20",
    transform: "matrix(14.9991 -18.73557 18.73533 14.99929 240 216)",
    xlinkHref: "#a"
  }));
};

/***/ }),

/***/ "5l48":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return HOME_PAGE; });
/* unused harmony export WORK_PAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GROCERY_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MAKEUP_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CLOTHING_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BAGS_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BOOK_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FURNITURE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return MEDICINE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return RESTAURANT_PAGE; });
/* unused harmony export REQUEST_MEDICINE_PAGE */
/* unused harmony export CHECKOUT_PAGE */
/* unused harmony export CHECKOUT_PAGE_TWO */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return PROFILE_PAGE; });
/* unused harmony export YOUR_ORDER_PAGE */
/* unused harmony export YOUR_PLANTS */
/* unused harmony export ORDER_RECEIVED_PAGE */
/* unused harmony export OFFER_PAGE */
/* unused harmony export HELP_PAGE */
/* unused harmony export TERMS_AND_SERVICES_PAGE */
/* unused harmony export PRIVACY_POLICY_PAGE */
/* unused harmony export HOME_MENU_ITEM */
/* unused harmony export WORK_PAGE_ITEM */
/* unused harmony export HELP_MENU_ITEM */
/* unused harmony export OFFER_MENU_ITEM */
/* unused harmony export ORDER_MENU_ITEM */
/* unused harmony export PLANTS_MENU_ITEM */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return REQUEST_MEDICINE_MENU_ITEM; });
/* unused harmony export PROFILE_MENU_ITEM */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return STAFF_MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTHORIZED_MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CATEGORY_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CATEGORY_MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return MOBILE_DRAWER_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return PROFILE_SIDEBAR_TOP_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return PROFILE_SIDEBAR_BOTTOM_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LANGUAGE_MENU; });
/* harmony import */ var utils_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bM43");
/* harmony import */ var graphql_query_type_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("IGqs");
/* harmony import */ var utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("f/wd");



const HOME_PAGE = '/';
const WORK_PAGE = '/work';
const GROCERY_PAGE = '/grocery';
const MAKEUP_PAGE = '/makeup';
const CLOTHING_PAGE = '/clothing';
const BAGS_PAGE = '/bags';
const BOOK_PAGE = '/book';
const FURNITURE_PAGE = '/furniture';
const MEDICINE_PAGE = '/medicine';
const RESTAURANT_PAGE = '/restaurant';
const REQUEST_MEDICINE_PAGE = '/request-medicine';
const CHECKOUT_PAGE = '/checkout';
const CHECKOUT_PAGE_TWO = '/checkout-alternative';
const PROFILE_PAGE = '/profile';
const YOUR_ORDER_PAGE = '/order';
const YOUR_PLANTS = '/your-plants';
const ORDER_RECEIVED_PAGE = '/order-received';
const OFFER_PAGE = '/offer';
const HELP_PAGE = '/help';
const TERMS_AND_SERVICES_PAGE = '/terms';
const PRIVACY_POLICY_PAGE = '/privacy'; // Mobile Drawer Menus

const HOME_MENU_ITEM = {
  id: 'nav.home',
  defaultMessage: 'Home',
  href: HOME_PAGE
};
const WORK_PAGE_ITEM = {
  id: 'nav.work',
  defaultMessage: 'Trabajo',
  href: WORK_PAGE
};
const HELP_MENU_ITEM = {
  id: 'nav.help',
  defaultMessage: 'Help',
  href: HELP_PAGE
};
const OFFER_MENU_ITEM = {
  id: 'nav.offer',
  defaultMessage: 'Offer',
  href: OFFER_PAGE
};
const ORDER_MENU_ITEM = {
  id: 'nav.order',
  href: YOUR_ORDER_PAGE,
  defaultMessage: 'Order'
};
const PLANTS_MENU_ITEM = {
  id: 'nav.plants',
  href: YOUR_PLANTS,
  defaultMessage: 'Plants'
};
const REQUEST_MEDICINE_MENU_ITEM = {
  id: 'nav.request_medicine',
  defaultMessage: 'Request Medicine',
  href: REQUEST_MEDICINE_PAGE
};
const PROFILE_MENU_ITEM = {
  id: 'nav.profile',
  defaultMessage: 'Profile',
  href: PROFILE_PAGE
};
const STAFF_MENU_ITEMS = [PROFILE_MENU_ITEM, ORDER_MENU_ITEM, WORK_PAGE_ITEM, PLANTS_MENU_ITEM];
const AUTHORIZED_MENU_ITEMS = [PROFILE_MENU_ITEM, ORDER_MENU_ITEM // REQUEST_MEDICINE_MENU_ITEM,
// CHECKOUT_PAGE_TWO,
// {
//   id: 'nav.checkout_two',
//   href: CHECKOUT_PAGE_TWO,
//   defaultMessage: 'Checkout Alternative',
// },

/*{
  id: 'nav.checkout',
  defaultMessage: 'Checkout',
  href: CHECKOUT_PAGE,
},
{
  id: 'nav.checkout_two',
  href: CHECKOUT_PAGE_TWO,
  defaultMessage: 'Checkout Alternative',
},
ORDER_MENU_ITEM,
{
  id: 'nav.order_received',
  href: ORDER_RECEIVED_PAGE,
  defaultMessage: 'Order invoice',
},
{
  id: 'nav.terms_and_services',
  defaultMessage: 'Terms and Services',
  href: TERMS_AND_SERVICES_PAGE,
},
{
  id: 'nav.privacy_policy',
  defaultMessage: 'Privacy Policy',
  href: PRIVACY_POLICY_PAGE,
},*/
];
async function CATEGORY_MENU() {
  const apolloClient = Object(utils_apollo__WEBPACK_IMPORTED_MODULE_0__[/* initializeApollo */ "a"])();
  const res = await apolloClient.query({
    query: graphql_query_type_query__WEBPACK_IMPORTED_MODULE_1__[/* GET_TYPE */ "a"],
    variables: {
      searchText: ''
    }
  });
  const paths = await res.data.types.items.map(item => {
    return {
      id: item.id,
      href: `/${item.slug}`,
      defaultMessage: item.name,
      icon: item.icon,
      dynamic: true
    };
  });
  return paths;
} // category menu items for header navigation

const CATEGORY_MENU_ITEMS = [{
  id: 'nav.grocery',
  href: GROCERY_PAGE,
  defaultMessage: 'Grocery',
  icon: 'FruitsVegetable',
  dynamic: true
}, {
  id: 'nav.makeup',
  defaultMessage: 'Makeup',
  href: MAKEUP_PAGE,
  icon: 'FacialCare',
  dynamic: true
}, {
  id: 'nav.bags',
  defaultMessage: 'Bags',
  href: BAGS_PAGE,
  icon: 'Handbag',
  dynamic: true
}, {
  id: 'nav.clothing',
  defaultMessage: 'Clothing',
  href: CLOTHING_PAGE,
  icon: 'DressIcon',
  dynamic: true
}, {
  id: 'nav.furniture',
  defaultMessage: 'Furniture',
  href: FURNITURE_PAGE,
  icon: 'FurnitureIcon',
  dynamic: true
}, {
  id: 'nav.book',
  defaultMessage: 'Book',
  href: BOOK_PAGE,
  icon: 'BookIcon',
  dynamic: true
}, {
  id: 'nav.medicine',
  defaultMessage: 'Medicine',
  href: MEDICINE_PAGE,
  icon: 'MedicineIcon',
  dynamic: true
}, {
  id: 'nav.foods',
  defaultMessage: 'Foods',
  href: RESTAURANT_PAGE,
  icon: 'Restaurant'
}];
const MOBILE_DRAWER_MENU = [HOME_MENU_ITEM // HELP_MENU_ITEM,
// OFFER_MENU_ITEM,
];
const PROFILE_SIDEBAR_TOP_MENU = [ORDER_MENU_ITEM, PLANTS_MENU_ITEM];
const PROFILE_SIDEBAR_BOTTOM_MENU = [PROFILE_MENU_ITEM];
const LANGUAGE_MENU = [// {
//   id: 'ar',
//   defaultMessage: 'Arabic',
//   icon: 'SAFlag',
// },
// {
//   id: 'zh',
//   defaultMessage: 'Chinese',
//   icon: 'CNFlag',
// },
{
  id: utils_constant__WEBPACK_IMPORTED_MODULE_2__[/* Locales */ "g"].EN,
  defaultMessage: 'English',
  icon: 'USFlag'
}, {
  id: utils_constant__WEBPACK_IMPORTED_MODULE_2__[/* Locales */ "g"].ES,
  defaultMessage: 'Spanish',
  icon: 'ESFlag'
} // {
//   id: 'de',
//   defaultMessage: 'German',
//   icon: 'DEFlag',
// },
// {
//   id: 'he',
//   defaultMessage: 'Hebrew',
//   icon: 'ILFlag',
// },
];

/***/ }),

/***/ "5sXw":
/***/ (function(module, exports) {



/***/ }),

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

/***/ "6I9l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrowLeftRound; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ArrowLeftRound = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 14.4"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_ios-arrow-round-back (2)",
    d: "M119.925,160.3a.98.98,0,0,1,.007,1.38l-4.554,4.567h13.754a.975.975,0,0,1,0,1.95H115.379l4.562,4.567a.987.987,0,0,1-.008,1.38.972.972,0,0,1-1.373-.008l-6.182-6.225a1.1,1.1,0,0,1-.2-.307.93.93,0,0,1-.075-.375.977.977,0,0,1,.278-.682l6.182-6.225A.956.956,0,0,1,119.925,160.3Z",
    transform: "translate(-112.1 -160.024)",
    fill: color
  }));
};

/***/ }),

/***/ "6nhp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ProductIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 15.6 13"
  }, __jsx("path", {
    "data-name": "Path 154",
    d: "M299.593,418.656l-3.148-4.494a.9.9,0,0,0-.572-.272.658.658,0,0,0-.573.272l-3.148,4.494h-3.435a.66.66,0,0,0-.716.677v.207l1.789,6.327a1.448,1.448,0,0,0,1.36,1.023h9.3a1.366,1.366,0,0,0,1.359-1.023l1.789-6.327v-.207a.659.659,0,0,0-.716-.677Zm-5.87,0,2.149-3,2.145,3Zm2.149,5.443a1.362,1.362,0,1,1,1.428-1.363,1.4,1.4,0,0,1-1.428,1.363Zm0,0",
    transform: "translate(-288 -413.89)",
    fill: color
  }));
};

/***/ }),

/***/ "6pqc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeautyHealth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const BeautyHealth = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 12"
  }, __jsx("g", {
    "data-name": "Group 11",
    fill: color
  }, __jsx("path", {
    "data-name": "Path 31",
    d: "M2.662 15.865a.612.612 0 00.611.611H4.82a.612.612 0 00.611-.611v-1.368H2.662z"
  }), __jsx("path", {
    "data-name": "Path 32",
    d: "M1.435 13.195a.793.793 0 00.791.791h3.64a.793.793 0 00.791-.791l1.015-8.766-6.614 5.507z"
  }), __jsx("path", {
    "data-name": "Path 33",
    d: "M7.3 0H.791A.791.791 0 000 .79l.917 7.919 6.927-5.768L8.093.79a.791.791 0 00-.792-.791z"
  }), __jsx("path", {
    "data-name": "Path 34",
    d: "M15.238 7.065a.769.769 0 00-.769-.769h-1.9a.769.769 0 00-.769.769v1.742h3.443z"
  }), __jsx("path", {
    "data-name": "Path 35",
    d: "M16.269 9.343a2.021 2.021 0 00-.275-.02h-4.956a2.006 2.006 0 00-2 2v3.661a2 2 0 002 2h4.956a2 2 0 002.005-2v-3.66a2 2 0 00-1.731-1.985zm-2.753 5.4a1.582 1.582 0 111.582-1.582 1.582 1.582 0 01-1.582 1.582z"
  }))));
};

/***/ }),

/***/ "6tF6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandBags; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const HandBags = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 11"
  }, __jsx("g", {
    "data-name": "Group 10",
    fill: color,
    stroke: "#fff",
    strokeMiterlimit: "10",
    strokeWidth: ".091"
  }, __jsx("path", {
    "data-name": "Path 45",
    d: "M17.954 7.253v8.585a1.791 1.791 0 01-1.791 1.791H1.836a1.791 1.791 0 01-1.791-1.791V7.253c0-.988 17.909-.988 17.909 0z"
  }), __jsx("path", {
    "data-name": "Rectangle 36",
    d: "M.102 8.77h17.795v.913H.102z"
  }), __jsx("path", {
    "data-name": "Path 46",
    d: "M4.793 7.253C4.976 4.061 7.113.614 9 .614c2.41 0 4.049 3.84 4.207 6.639h.572C13.618 4.168 11.791.044 8.999.044c-1.131 0-2.338.922-3.312 2.529a10.463 10.463 0 00-1.466 4.68z"
  }))));
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

/***/ "8ekf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchIconSmall; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SearchIconSmall = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 14.01 14.01"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_ios-search (5)",
    d: "M77.845,76.9l-3.9-3.932a5.553,5.553,0,1,0-.843.854l3.871,3.906a.6.6,0,0,0,.846.022A.6.6,0,0,0,77.845,76.9Zm-8.26-3.031a4.384,4.384,0,1,1,3.1-1.284A4.358,4.358,0,0,1,69.586,73.865Z",
    transform: "translate(-64 -63.9)",
    fill: color
  }));
};

/***/ }),

/***/ "940+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ESFlag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ESFlag = ({
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "flag-icon-css-es",
    viewBox: "0 0 640 480",
    width: width,
    height: height
  }, __jsx("path", {
    fill: "#AA151B",
    d: "M0 0h640v480H0z"
  }), __jsx("path", {
    fill: "#F1BF00",
    d: "M0 120h640v240H0z"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M127.3 213.3l-.8-.1-1-1-.7-.4-.6-.8s-.7-1.1-.4-2c.3-.9.9-1.2 1.4-1.5a12 12 0 011.5-.5l1-.4 1.3-.3.5-.3c.2 0 .7 0 1-.2l1-.2 1.6.1h4.8c.4 0 1.2.3 1.4.4a35 35 0 002 .7c.5.1 1.6.3 2.2.6.5.3.9.7 1.1 1l.5 1v1.1l-.5.8-.6 1-.8.6s-.5.5-1 .4c-.4 0-4.8-.8-7.6-.8s-7.3.9-7.3.9"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M127.3 213.3l-.8-.1-1-1-.7-.4-.6-.8s-.7-1.1-.4-2c.3-.9.9-1.2 1.4-1.5a12 12 0 011.5-.5l1-.4 1.3-.3.5-.3c.2 0 .7 0 1-.2l1-.2 1.6.1h4.8c.4 0 1.2.3 1.4.4a35 35 0 002 .7c.5.1 1.6.3 2.2.6.5.3.9.7 1.1 1l.5 1v1.1l-.5.8-.6 1-.8.6s-.5.5-1 .4c-.4 0-4.8-.8-7.6-.8s-7.3.9-7.3.9z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M133.3 207c0-1.3.6-2.3 1.3-2.3.8 0 1.4 1 1.4 2.4 0 1.3-.6 2.4-1.4 2.4s-1.3-1.1-1.3-2.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M133.3 207c0-1.3.6-2.3 1.3-2.3.8 0 1.4 1 1.4 2.4 0 1.3-.6 2.4-1.4 2.4s-1.3-1.1-1.3-2.5z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M134 207c0-1.2.3-2.1.7-2.1.3 0 .6 1 .6 2.1 0 1.3-.3 2.2-.6 2.2-.4 0-.6-1-.6-2.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134 207c0-1.2.3-2.1.7-2.1.3 0 .6 1 .6 2.1 0 1.3-.3 2.2-.6 2.2-.4 0-.6-1-.6-2.2z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M133.8 204.5c0-.4.4-.8.8-.8s1 .4 1 .8c0 .5-.5.9-1 .9s-.8-.4-.8-.9"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M135.3 204.2v.6h-1.4v-.6h.5V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M135.3 204.2v.6h-1.4v-.6h.5V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h.4"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M135.9 204.2v.6h-2.5v-.6h1V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M135.9 204.2v.6h-2.5v-.6h1V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.9 203.7c.4.1.6.4.6.8 0 .5-.4.9-.8.9s-1-.4-1-.9c0-.4.3-.7.7-.8"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M134.7 213.2H130v-1.1l-.3-1.2-.2-1.5c-1.3-1.7-2.5-2.8-2.9-2.5.1-.3.2-.6.5-.7 1.1-.7 3.5 1 5.2 3.6l.5.7h3.8l.4-.7c1.8-2.7 4.1-4.3 5.2-3.6.3.1.4.4.5.7-.4-.3-1.6.8-2.9 2.5l-.2 1.5-.2 1.2-.1 1.1h-4.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.7 213.2H130v-1.1l-.3-1.2-.2-1.5c-1.3-1.7-2.5-2.8-2.9-2.5.1-.3.2-.6.5-.7 1.1-.7 3.5 1 5.2 3.6l.5.7h3.8l.4-.7c1.8-2.7 4.1-4.3 5.2-3.6.3.1.4.4.5.7-.4-.3-1.6.8-2.9 2.5l-.2 1.5-.2 1.2-.1 1.1h-4.7z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M126.8 206.8c1-.5 3 1.1 4.6 3.6m11-3.6c-.8-.5-2.8 1.1-4.5 3.6"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M127.8 215.3l-.5-1a27.3 27.3 0 0114.7 0l-.5.8a5.7 5.7 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.5.8l-.3-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M127.8 215.3l-.5-1a27.3 27.3 0 0114.7 0l-.5.8a5.7 5.7 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.5.8l-.3-.6"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M134.6 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4-1.4-.5-4-.8-6.5-.8s-5 .3-6.4.8c-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.6 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4-1.4-.5-4-.8-6.5-.8s-5 .3-6.4.8c-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M142.1 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.4.6-1.1.7-1.4-.6-1.4-.6-.5.7-1 1c-.5 0-1.2-.4-1.2-.4l-.2.5-.3.1.2.5a27 27 0 017.2-.9c3 0 5.5.4 7.4 1l.2-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M142.1 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.4.6-1.1.7-1.4-.6-1.4-.6-.5.7-1 1c-.5 0-1.2-.4-1.2-.4l-.2.5-.3.1.2.5a27 27 0 017.2-.9c3 0 5.5.4 7.4 1l.2-.6z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M134.7 210.7h.2a1 1 0 000 .4c0 .6.4 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1v-.1l.4-.4.2.5a.9.9 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4l.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6-.2.2-.4.2-.7.2-.6 0-1.2-.3-1.4-.8-.3.3-.7.5-1.1.5a1.6 1.6 0 01-1.2-.6 1.6 1.6 0 01-1 .4 1.6 1.6 0 01-1.3-.6 1.6 1.6 0 01-2.4.2 1.6 1.6 0 01-1.2.6 1.5 1.5 0 01-1.1-.5c-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2l-1-1 .1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 .9.9 0 000-.4v-.5l.4.4a.7.7 0 000 .1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.7 0 1.1-.4 1.1-1a1 1 0 000-.3h.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.7 210.7h.2a1 1 0 000 .4c0 .6.4 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1v-.1l.4-.4.2.5a.9.9 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4l.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6-.2.2-.4.2-.7.2-.6 0-1.2-.3-1.4-.8-.3.3-.7.5-1.1.5a1.6 1.6 0 01-1.2-.6 1.6 1.6 0 01-1 .4 1.6 1.6 0 01-1.3-.6 1.6 1.6 0 01-2.4.2 1.6 1.6 0 01-1.2.6 1.5 1.5 0 01-1.1-.5c-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2l-1-1 .1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 .9.9 0 000-.4v-.5l.4.4a.7.7 0 000 .1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.7 0 1.1-.4 1.1-1a1 1 0 000-.3h.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M134.6 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3a27 27 0 017.5-1c3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27.3 27.3 0 00-7.4-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M134.6 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3a27 27 0 017.5-1c3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27.3 27.3 0 00-7.4-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M131.8 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M131.8 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M134.7 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.7 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
  }), __jsx("path", {
    fill: "#058e6e",
    d: "M130 214.9h-.7c-.1 0-.3 0-.3-.2a.3.3 0 01.2-.3l.7-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M130 214.9h-.7c-.1 0-.3 0-.3-.2a.3.3 0 01.2-.3l.7-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M127.3 215.3l.3-.4h.7l-.4.6-.6-.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M127.3 215.3l.3-.4h.7l-.4.6-.6-.2"
  }), __jsx("path", {
    fill: "#fff",
    d: "M136.6 214.4c0-.3.2-.4.4-.4a.4.4 0 01.5.4.4.4 0 01-.5.4.4.4 0 01-.4-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M136.6 214.4c0-.3.2-.4.4-.4a.4.4 0 01.5.4.4.4 0 01-.5.4.4.4 0 01-.4-.4z"
  }), __jsx("path", {
    fill: "#058e6e",
    d: "M139.3 214.9h.6a.3.3 0 00.4-.2.3.3 0 00-.3-.3l-.6-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M139.3 214.9h.6a.3.3 0 00.4-.2.3.3 0 00-.3-.3l-.6-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M142 215.4l-.3-.5h-.7l.3.6.6-.1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M142 215.4l-.3-.5h-.7l.3.6.6-.1"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M134.6 217.1a25 25 0 01-6-.6 25.5 25.5 0 0112.1 0c-1.6.4-3.7.6-6 .6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M134.6 217.1a25 25 0 01-6-.6 25.5 25.5 0 0112.1 0c-1.6.4-3.7.6-6 .6z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M142 212l-.1-.3c-.2 0-.3 0-.4.2 0 .2 0 .4.2.4 0 0 .2 0 .3-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M142 212l-.1-.3c-.2 0-.3 0-.4.2 0 .2 0 .4.2.4 0 0 .2 0 .3-.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M137.3 211.2c0-.2 0-.4-.2-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M137.3 211.2c0-.2 0-.4-.2-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M132 211.2l.1-.4c.2 0 .3.1.3.3 0 .2 0 .4-.2.4l-.2-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M132 211.2l.1-.4c.2 0 .3.1.3.3 0 .2 0 .4-.2.4l-.2-.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M127.3 212l.1-.3c.2 0 .3 0 .4.2 0 .2 0 .4-.2.4 0 0-.2 0-.3-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M127.3 212l.1-.3c.2 0 .3 0 .4.2 0 .2 0 .4-.2.4 0 0-.2 0-.3-.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M134.6 208.5l-.8.5.6 1.3.2.1.2-.1.7-1.3-.9-.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.6 208.5l-.8.5.6 1.3.2.1.2-.1.7-1.3-.9-.5"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M132.8 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M132.8 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M136.4 210.5l-.3.5-1.3-.4-.2-.2.2-.2 1.3-.3.3.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M136.4 210.5l-.3.5-1.3-.4-.2-.2.2-.2 1.3-.3.3.6"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M129.3 209l-.7.7.9 1 .2.1.1-.1.3-1.3-.8-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M129.3 209l-.7.7.9 1 .2.1.1-.1.3-1.3-.8-.3"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M128 211.2l.4.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M128 211.2l.4.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M131.5 210.5l-.3.6H130l-.2-.2.1-.3 1.2-.6.5.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M131.5 210.5l-.3.6H130l-.2-.2.1-.3 1.2-.6.5.5"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M126.6 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M126.6 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M129.2 210.9c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 01-.5.4.5.5 0 01-.5-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M129.2 210.9c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 01-.5.4.5.5 0 01-.5-.4z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M140 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M140 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M141.4 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M141.4 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M137.8 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M137.8 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M142.5 211.4l.1.6 1.3.2.2-.1v-.2l-1-.9-.6.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M142.5 211.4l.1.6 1.3.2.2-.1v-.2l-1-.9-.6.4"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M134.2 210.4a.5.5 0 01.4-.4c.3 0 .5.2.5.4a.5.5 0 01-.5.5.5.5 0 01-.4-.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M134.2 210.4a.5.5 0 01.4-.4c.3 0 .5.2.5.4a.5.5 0 01-.5.5.5.5 0 01-.4-.5z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M139.1 210.9c0-.3.3-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M139.1 210.9c0-.3.3-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M124.8 212.2l-.6-.7c-.2-.2-.7-.3-.7-.3 0-.1.3-.3.6-.3a.5.5 0 01.4.2v-.2s.3 0 .4.3v1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M124.8 212.2l-.6-.7c-.2-.2-.7-.3-.7-.3 0-.1.3-.3.6-.3a.5.5 0 01.4.2v-.2s.3 0 .4.3v1z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M124.8 212c.1-.2.4-.2.5 0 .2.1.3.3.2.5l-.5-.1c-.2-.1-.3-.4-.2-.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M124.8 212c.1-.2.4-.2.5 0 .2.1.3.3.2.5l-.5-.1c-.2-.1-.3-.4-.2-.5z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M144.3 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M144.3 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M144.3 212c0-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M144.3 212c0-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M124 223h21.4v-5.5H124v5.6z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M124 223h21.4v-5.5H124v5.6z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M126.2 226.8a1 1 0 01.4 0h16.5a1.4 1.4 0 01-1-1.2c0-.6.5-1.1 1-1.3a1.7 1.7 0 01-.4 0h-16a1.4 1.4 0 01-.5 0c.6.2 1 .7 1 1.3a1.3 1.3 0 01-1 1.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M126.2 226.8a1 1 0 01.4 0h16.5a1.4 1.4 0 01-1-1.2c0-.6.5-1.1 1-1.3a1.7 1.7 0 01-.4 0h-16a1.4 1.4 0 01-.5 0c.6.2 1 .7 1 1.3a1.3 1.3 0 01-1 1.2z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M126.6 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.5 0-1-.4-1-.8s.5-.8 1-.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M126.6 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.5 0-1-.4-1-.8s.5-.8 1-.8z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M126.6 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.5 0-1-.2-1-.6 0-.3.5-.6 1-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M126.6 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.5 0-1-.2-1-.6 0-.3.5-.6 1-.6z"
  }), __jsx("path", {
    fill: "#005bbf",
    d: "M149.6 317.4c-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8a8.3 8.3 0 01-3.8.8c-1.5 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8 8.3 8.3 0 01-3.8.8v2.4c1.5 0 2.8-.4 3.8-.9a8.2 8.2 0 013.7-.8c1.4 0 2.7.3 3.7.8s2.2.9 3.7.9a8.4 8.4 0 003.8-.9c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.9 3.7.9v-2.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 317.4c-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8a8.3 8.3 0 01-3.8.8c-1.5 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8 8.3 8.3 0 01-3.8.8v2.4c1.5 0 2.8-.4 3.8-.9a8.2 8.2 0 013.7-.8c1.4 0 2.7.3 3.7.8s2.2.9 3.7.9a8.4 8.4 0 003.8-.9c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.9 3.7.9v-2.4z"
  }), __jsx("path", {
    fill: "#ccc",
    d: "M149.6 319.8a8 8 0 01-3.7-.9 8.3 8.3 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8s-2.3.9-3.8.9-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8.2 8.2 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.4 3.8-.9a8.1 8.1 0 013.7-.7c1.4 0 2.7.2 3.7.7a8.3 8.3 0 007.5 0 8.5 8.5 0 017.5.1 8.1 8.1 0 003.7.8v-2.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 319.8a8 8 0 01-3.7-.9 8.3 8.3 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8s-2.3.9-3.8.9-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8.2 8.2 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.4 3.8-.9a8.1 8.1 0 013.7-.7c1.4 0 2.7.2 3.7.7a8.3 8.3 0 007.5 0 8.5 8.5 0 017.5.1 8.1 8.1 0 003.7.8v-2.3"
  }), __jsx("path", {
    fill: "#005bbf",
    d: "M149.6 322a7 7 0 01-3.7-.8 8.3 8.3 0 00-3.8-.7c-1.4 0-2.7.2-3.7.7-1 .6-2.3.9-3.8.9s-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.3 3.8-.9a10.2 10.2 0 017.4 0 7 7 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.8 3.7.8V322"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 322a7 7 0 01-3.7-.8 8.3 8.3 0 00-3.8-.7c-1.4 0-2.7.2-3.7.7-1 .6-2.3.9-3.8.9s-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.3 3.8-.9a10.2 10.2 0 017.4 0 7 7 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.8 3.7.8V322"
  }), __jsx("path", {
    fill: "#ccc",
    d: "M149.6 326.7a8 8 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.9 10.2 10.2 0 017.4 0 8 8 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.8-.8 1.4 0 2.7.3 3.7.8s2.3.8 3.7.8v2.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 326.7a8 8 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.9 10.2 10.2 0 017.4 0 8 8 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.8-.8 1.4 0 2.7.3 3.7.8s2.3.8 3.7.8v2.3"
  }), __jsx("path", {
    fill: "#005bbf",
    d: "M149.6 329a8.1 8.1 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.7.3 3.7.7a8.4 8.4 0 007.5 0c1-.4 2.3-.7 3.8-.7 1.4 0 2.7.3 3.7.8s2.2.8 3.7.8v2.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M149.6 329a8.1 8.1 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.7.3 3.7.7a8.4 8.4 0 007.5 0c1-.4 2.3-.7 3.8-.7 1.4 0 2.7.3 3.7.8s2.2.8 3.7.8v2.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M126.2 308l.2.5c0 1.5-1.3 2.6-2.7 2.6h22a2.7 2.7 0 01-2.7-2.6v-.5a1.3 1.3 0 01-.3 0h-16a1.4 1.4 0 01-.5 0"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M126.2 308l.2.5c0 1.5-1.3 2.6-2.7 2.6h22a2.7 2.7 0 01-2.7-2.6v-.5a1.3 1.3 0 01-.3 0h-16a1.4 1.4 0 01-.5 0z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M126.6 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.5 0-1-.3-1-.8 0-.4.5-.7 1-.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M126.6 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.5 0-1-.3-1-.8 0-.4.5-.7 1-.7z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M123.7 316.7h22V311h-22v5.6z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M123.7 316.7h22V311h-22v5.6z"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M122 286.7c-2.2 1.2-3.7 2.5-3.4 3.2 0 .6.8 1 1.8 1.6 1.5 1.1 2.5 3 1.7 4a5.5 5.5 0 00-.1-8.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M122 286.7c-2.2 1.2-3.7 2.5-3.4 3.2 0 .6.8 1 1.8 1.6 1.5 1.1 2.5 3 1.7 4a5.5 5.5 0 00-.1-8.8z"
  }), __jsx("path", {
    fill: "#ccc",
    d: "M126.8 305.6h15.6V229h-15.6v76.5z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M138 229.2v76.3m1.7-76.3v76.3m-12.9 0h15.6v-76.4h-15.6v76.5z"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M158.4 257.7a49.6 49.6 0 00-23.3-2c-9.4 1.6-16.5 5.3-15.9 8.4v.2l-3.5-8.2c-.6-3.3 7.2-7.5 17.6-9.2a43 43 0 019.2-.7c6.6 0 12.4.8 15.8 2.1v9.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M158.4 257.7a49.6 49.6 0 00-23.3-2c-9.4 1.6-16.5 5.3-15.9 8.4v.2l-3.5-8.2c-.6-3.3 7.2-7.5 17.6-9.2a43 43 0 019.2-.7c6.6 0 12.4.8 15.8 2.1v9.4"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M126.8 267.3c-4.3-.3-7.3-1.4-7.6-3.2-.3-1.5 1.2-3 3.8-4.5 1.2.1 2.5.3 3.8.3v7.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M126.8 267.3c-4.3-.3-7.3-1.4-7.6-3.2-.3-1.5 1.2-3 3.8-4.5 1.2.1 2.5.3 3.8.3v7.4"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M142.5 261.5c2.7.4 4.7 1 5.7 1.9l.1.2c.5 1-1.9 3-5.9 5.4v-7.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M142.5 261.5c2.7.4 4.7 1 5.7 1.9l.1.2c.5 1-1.9 3-5.9 5.4v-7.5"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M117.1 282c-.4-1.2 3.8-3.6 9.8-5.8l7.8-3.2c8.3-3.7 14.4-7.9 13.6-9.4v-.2c.4.4 1 8 1 8 .8 1.3-4.8 5.5-12.4 9.1-2.5 1.2-7.6 3-10 4-4.4 1.4-8.7 4.3-8.3 5.3l-1.5-7.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M117.1 282c-.4-1.2 3.8-3.6 9.8-5.8l7.8-3.2c8.3-3.7 14.4-7.9 13.6-9.4v-.2c.4.4 1 8 1 8 .8 1.3-4.8 5.5-12.4 9.1-2.5 1.2-7.6 3-10 4-4.4 1.4-8.7 4.3-8.3 5.3l-1.5-7.7z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M125.8 254c1.9-.6 3.1-1.5 2.5-3-.4-1-1.4-1-2.8-.6l-2.6 1 2.3 5.8.8-.3.8-.3-1-2.5zm-1.2-2.7l.7-.3c.5-.2 1.2.1 1.4.8.2.5.2 1-.5 1.5a4.4 4.4 0 01-.6.3l-1-2.3m7.3-2.5l-.9.3h-.8l1.3 6.1 4.3-.8-.2-.4v-.4l-2.5.6-1.2-5.3m8.4 5.2c.8-2.2 1.7-4.3 2.7-6.4a5.3 5.3 0 01-1 0 54.8 54.8 0 01-1.8 4.6l-2.4-4.3-1 .1h-1a131.4 131.4 0 013.5 6h1m8.8-4.7l.4-.9a3.4 3.4 0 00-1.7-.6c-1.7-.1-2.7.6-2.8 1.7-.2 2.1 3.2 2 3 3.4 0 .6-.7.9-1.4.8-.8 0-1.4-.5-1.4-1.2h-.3a7.3 7.3 0 01-.4 1.1 4 4 0 001.8.6c1.7.2 3-.5 3.2-1.7.2-2-3.3-2.1-3.1-3.4 0-.5.4-.8 1.3-.7.7 0 1 .4 1.2.9h.2"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M277.9 211.6s-.7.8-1.3.9c-.5 0-1.1-.5-1.1-.5s-.5.5-1 .6c-.6.1-1.4-.6-1.4-.6l-1 1c-.6 0-1.1-.3-1.1-.3s-.3.4-.7.6h-.4l-.6-.4-.7-.7-.5-.3-.4-1v-.5c-.1-.6.8-1.4 2.2-1.7a3.9 3.9 0 012 0c.5-.5 1.7-.8 3-.8s2.4.3 3 .7a5.5 5.5 0 012.9-.7c1.3 0 2.5.3 3 .8.5-.2 1.2-.2 2 0 1.4.3 2.3 1 2.2 1.7v.5l-.4 1-.6.3-.6.7-.6.3s-.3.2-.4 0c-.4-.1-.7-.5-.7-.5s-.6.4-1 .2c-.5-.2-1-1-1-1s-.9.8-1.4.7c-.6-.1-1-.6-1-.6s-.7.6-1.2.5c-.5-.1-1.2-.9-1.2-.9"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.9 211.6s-.7.8-1.3.9c-.5 0-1.1-.5-1.1-.5s-.5.5-1 .6c-.6.1-1.4-.6-1.4-.6l-1 1c-.6 0-1.1-.3-1.1-.3s-.3.4-.7.6h-.4l-.6-.4-.7-.7-.5-.3-.4-1v-.5c-.1-.6.8-1.4 2.2-1.7a3.9 3.9 0 012 0c.5-.5 1.7-.8 3-.8s2.4.3 3 .7a5.5 5.5 0 012.9-.7c1.3 0 2.5.3 3 .8.5-.2 1.2-.2 2 0 1.4.3 2.3 1 2.2 1.7v.5l-.4 1-.6.3-.6.7-.6.3s-.3.2-.4 0c-.4-.1-.7-.5-.7-.5s-.6.4-1 .2c-.5-.2-1-1-1-1s-.9.8-1.4.7c-.6-.1-1-.6-1-.6s-.7.6-1.2.5c-.5-.1-1.2-.9-1.2-.9z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M276.5 207.6c0-1 .6-2 1.3-2 .8 0 1.3 1 1.3 2s-.5 1.8-1.3 1.8c-.7 0-1.3-.8-1.3-1.9"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M276.5 207.6c0-1 .6-2 1.3-2 .8 0 1.3 1 1.3 2s-.5 1.8-1.3 1.8c-.7 0-1.3-.8-1.3-1.9z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M277.3 207.6c0-1 .2-1.8.5-1.8.4 0 .7.8.7 1.8s-.3 1.7-.6 1.7c-.4 0-.6-.8-.6-1.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.3 207.6c0-1 .2-1.8.5-1.8.4 0 .7.8.7 1.8s-.3 1.7-.6 1.7c-.4 0-.6-.8-.6-1.8z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M271 215.3a4.5 4.5 0 00-.5-1 27.4 27.4 0 0114.8 0l-.6.8a5.2 5.2 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.6.8l-.2-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M271 215.3a4.5 4.5 0 00-.5-1 27.4 27.4 0 0114.8 0l-.6.8a5.2 5.2 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.6.8l-.2-.6"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M277.8 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4a24.1 24.1 0 00-6.5-.8c-2.5 0-5 .3-6.4.8-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.8 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4a24.1 24.1 0 00-6.5-.8c-2.5 0-5 .3-6.4.8-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M283.5 208.4c0-.2.2-.4.4-.4s.5.2.5.4-.2.4-.5.4a.4.4 0 01-.4-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M283.5 208.4c0-.2.2-.4.4-.4s.5.2.5.4-.2.4-.5.4a.4.4 0 01-.4-.4zm-.2-1.4a.4.4 0 01.4-.4c.2 0 .4.1.4.4s-.2.4-.4.4a.4.4 0 01-.4-.4zm-1.1-1c0-.2.2-.3.4-.3s.4.1.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.4-.5zm-1.4-.4c0-.2.2-.4.4-.4.3 0 .5.2.5.4s-.2.4-.4.4-.5-.2-.5-.4zm-1.4 0c0-.2.2-.3.5-.3s.4.1.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: ".3",
    d: "M287.8 211.2l.2-1a2.7 2.7 0 00-2.7-2.8c-.5 0-1 .1-1.3.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M283 209.2l.2-.8c0-1.1-1.1-2-2.5-2-.6 0-1.2.2-1.6.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M288.2 210c0-.3.2-.5.4-.5s.4.2.4.4c0 .3-.2.4-.4.4s-.4-.1-.4-.4zm-.2-1.6c0-.2.2-.4.4-.4a.4.4 0 01.5.4c0 .2-.2.4-.4.4-.3 0-.5-.2-.5-.4zm-1-1.1a.4.4 0 01.5-.4c.2 0 .4.1.4.4a.4.4 0 01-.4.4.4.4 0 01-.5-.4zm-1.3-.7c0-.2.2-.4.5-.4s.4.2.4.4c0 .3-.2.5-.4.5a.4.4 0 01-.5-.5zm-1.4.1c0-.2.2-.4.5-.4s.4.2.4.4-.2.4-.4.4-.5-.2-.5-.4z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M285.3 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.3.6-1.1.7-1.4-.6-1.4-.6-.4.7-1 1c-.5 0-1.2-.4-1.2-.4l-.1.5-.3.1.1.5a27 27 0 017.3-.9c2.8 0 5.4.4 7.3 1l.2-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M285.3 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.3.6-1.1.7-1.4-.6-1.4-.6-.4.7-1 1c-.5 0-1.2-.4-1.2-.4l-.1.5-.3.1.1.5a27 27 0 017.3-.9c2.8 0 5.4.4 7.3 1l.2-.6z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M271.3 208.4c0-.2.2-.4.4-.4s.4.2.4.4a.4.4 0 01-.4.4.4.4 0 01-.4-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M271.3 208.4c0-.2.2-.4.4-.4s.4.2.4.4a.4.4 0 01-.4.4.4.4 0 01-.4-.4zm.2-1.4c0-.3.2-.4.4-.4s.5.1.5.4-.2.4-.5.4a.4.4 0 01-.4-.4zm1-1c0-.2.3-.3.5-.3s.5.1.5.4c0 .2-.2.4-.5.4a.4.4 0 01-.4-.5zm1.4-.4c0-.2.2-.4.5-.4s.4.2.4.4-.2.4-.4.4-.5-.2-.5-.4zm1.4 0c0-.2.2-.3.5-.3.2 0 .4.1.4.4 0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeWidth: ".3",
    d: "M267.8 211.2a2.8 2.8 0 01-.2-1 2.7 2.7 0 012.7-2.8c.5 0 1 .1 1.4.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M272.7 209.2a1.7 1.7 0 01-.3-.8c0-1 1.2-2 2.6-2a3 3 0 011.5.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M266.6 210c0-.3.2-.5.4-.5.3 0 .4.2.4.4a.4.4 0 01-.4.4c-.2 0-.4-.1-.4-.4zm.1-1.6c0-.2.3-.4.5-.4s.4.2.4.4-.2.4-.4.4-.4-.2-.4-.4zm1-1.1c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4.4.4 0 01-.5-.4zm1.3-.7c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.4.4 0 01-.5-.5zm1.4.1c0-.2.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M277.9 210.7h.2a1 1 0 000 .4c0 .6.5 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1a.7.7 0 000-.1l.4-.4.2.5a1 1 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4s.7-.7.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6a1.5 1.5 0 01-.7.2c-.6 0-1.2-.3-1.4-.8a1.5 1.5 0 01-1.1.5c-.5 0-1-.2-1.2-.6a1.5 1.5 0 01-1 .4c-.6 0-1-.2-1.4-.6-.2.4-.7.6-1.2.6-.4 0-.8-.1-1-.4a1.6 1.6 0 01-1.3.6c-.4 0-.8-.2-1.1-.5-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2a4.2 4.2 0 01-1-1l.1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 1 1 0 000-.4v-.5l.4.4v.1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.6 0 1.1-.4 1.1-1a1 1 0 000-.3h.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.9 210.7h.2a1 1 0 000 .4c0 .6.5 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1a.7.7 0 000-.1l.4-.4.2.5a1 1 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4s.7-.7.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6a1.5 1.5 0 01-.7.2c-.6 0-1.2-.3-1.4-.8a1.5 1.5 0 01-1.1.5c-.5 0-1-.2-1.2-.6a1.5 1.5 0 01-1 .4c-.6 0-1-.2-1.4-.6-.2.4-.7.6-1.2.6-.4 0-.8-.1-1-.4a1.6 1.6 0 01-1.3.6c-.4 0-.8-.2-1.1-.5-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2a4.2 4.2 0 01-1-1l.1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 1 1 0 000-.4v-.5l.4.4v.1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.6 0 1.1-.4 1.1-1a1 1 0 000-.3h.2z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M277.8 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3c2-.6 4.6-1 7.5-1 3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27 27 0 00-7.4-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.8 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3c2-.6 4.6-1 7.5-1 3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27 27 0 00-7.4-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M275 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M275 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4z"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M277.9 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.9 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
  }), __jsx("path", {
    fill: "#058e6e",
    d: "M273.2 214.9h-.6a.3.3 0 01-.4-.2.3.3 0 01.3-.3l.6-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M273.2 214.9h-.6a.3.3 0 01-.4-.2.3.3 0 01.3-.3l.6-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M270.5 215.3l.3-.4h.7l-.4.6-.6-.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M270.5 215.3l.3-.4h.7l-.4.6-.6-.2"
  }), __jsx("path", {
    fill: "#fff",
    d: "M279.8 214.4c0-.3.2-.4.4-.4.3 0 .5.1.5.4 0 .2-.2.4-.5.4a.4.4 0 01-.4-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M279.8 214.4c0-.3.2-.4.4-.4.3 0 .5.1.5.4 0 .2-.2.4-.5.4a.4.4 0 01-.4-.4z"
  }), __jsx("path", {
    fill: "#058e6e",
    d: "M282.5 214.9h.7a.3.3 0 00.3-.2.3.3 0 00-.2-.3l-.7-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M282.5 214.9h.7a.3.3 0 00.3-.2.3.3 0 00-.2-.3l-.7-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M285.1 215.4l-.2-.5h-.7l.3.6.6-.1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M285.1 215.4l-.2-.5h-.7l.3.6.6-.1"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M277.8 217.1a25 25 0 01-6-.6 25.4 25.4 0 016-.7c2.4 0 4.5.3 6.1.7-1.6.4-3.7.6-6 .6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M277.8 217.1a25 25 0 01-6-.6 25.4 25.4 0 016-.7c2.4 0 4.5.3 6.1.7-1.6.4-3.7.6-6 .6z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M285.2 212l-.1-.3c-.2 0-.3 0-.4.2l.1.4c.2 0 .3 0 .4-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M285.2 212l-.1-.3c-.2 0-.3 0-.4.2l.1.4c.2 0 .3 0 .4-.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M280.6 211.2c0-.2-.1-.4-.3-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M280.6 211.2c0-.2-.1-.4-.3-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M275.2 211.2c0-.2 0-.4.2-.4l.3.3-.2.4c-.2 0-.3-.2-.3-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M275.2 211.2c0-.2 0-.4.2-.4l.3.3-.2.4c-.2 0-.3-.2-.3-.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M270.5 212l.1-.3c.2 0 .3 0 .4.2l-.1.4c-.2 0-.3 0-.4-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M270.5 212l.1-.3c.2 0 .3 0 .4.2l-.1.4c-.2 0-.3 0-.4-.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M277.8 208.5l-.8.5.6 1.3.2.1.3-.1.6-1.3-.9-.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.8 208.5l-.8.5.6 1.3.2.1.3-.1.6-1.3-.9-.5"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M276 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M276 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M279.6 210.5l-.3.5-1.3-.4-.1-.2v-.2l1.4-.3.4.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M279.6 210.5l-.3.5-1.3-.4-.1-.2v-.2l1.4-.3.4.6"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M272.5 209l-.7.7.9 1 .2.1.2-.1.2-1.3-.8-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M272.5 209l-.7.7.9 1 .2.1.2-.1.2-1.3-.8-.3"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M271.1 211.2l.5.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M271.1 211.2l.5.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M274.7 210.5l-.3.6h-1.3l-.2-.2.1-.3 1.2-.6.5.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M274.7 210.5l-.3.6h-1.3l-.2-.2.1-.3 1.2-.6.5.5"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M269.8 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M269.8 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M272.4 210.9c0-.3.2-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M272.4 210.9c0-.3.2-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M283.2 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M283.2 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M284.6 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M284.6 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M281 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M281 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M285.7 211.4v.6l1.4.2.2-.1v-.2l-1-.9-.6.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M285.7 211.4v.6l1.4.2.2-.1v-.2l-1-.9-.6.4"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M277.4 210.4c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.5.5 0 01-.5-.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M277.4 210.4c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.5.5 0 01-.5-.5z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M282.3 210.9c0-.3.3-.5.5-.5.3 0 .5.2.5.5s-.2.4-.5.4a.5.5 0 01-.5-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M282.3 210.9c0-.3.3-.5.5-.5.3 0 .5.2.5.5s-.2.4-.5.4a.5.5 0 01-.5-.4z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M277 205.4c0-.5.4-.8.8-.8s1 .3 1 .8-.5.8-1 .8a.9.9 0 01-.8-.8"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M278.5 205.1v.6H277v-.6h.4v-1.3h-.5v-.5h.5v-.6h.6v.6h.6v.6h-.6v1.2h.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M278.5 205.1v.6H277v-.6h.4v-1.3h-.5v-.5h.5v-.6h.6v.6h.6v.6h-.6v1.2h.4z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M279 205.1v.6h-2.4v-.6h1v-1.3h-.7v-.5h.6v-.6h.6v.6h.6v.6h-.6v1.2h1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M278.1 204.6c.4 0 .6.4.6.8 0 .5-.4.8-.9.8a.9.9 0 01-.8-.8c0-.4.2-.7.6-.8"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M268 212.2l-.6-.7a2.3 2.3 0 00-.7-.3c0-.1.3-.3.6-.3.2 0 .3 0 .4.2v-.2s.3 0 .4.3v1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M268 212.2l-.6-.7a2.3 2.3 0 00-.7-.3c0-.1.3-.3.6-.3.2 0 .3 0 .4.2v-.2s.3 0 .4.3v1z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M268 212c.1-.2.4-.2.5 0 .2.1.3.3.1.5l-.5-.1c-.1-.1-.2-.4 0-.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M268 212c.1-.2.4-.2.5 0 .2.1.3.3.1.5l-.5-.1c-.1-.1-.2-.4 0-.5z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M287.5 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M287.5 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M287.5 212c-.1-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M287.5 212c-.1-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M267.2 223h21.4v-5.5h-21.4v5.6z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M267.2 223h21.4v-5.5h-21.4v5.6z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M286.3 226.8a1 1 0 00-.4 0h-16.5c.6-.2 1-.7 1-1.2 0-.6-.4-1.1-1-1.3h17-.1c-.6.2-1 .7-1 1.3 0 .5.4 1 1 1.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M286.3 226.8a1 1 0 00-.4 0h-16.5c.6-.2 1-.7 1-1.2 0-.6-.4-1.1-1-1.3h17-.1c-.6.2-1 .7-1 1.3 0 .5.4 1 1 1.2z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M269.9 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.6 0-1-.4-1-.8s.5-.8 1-.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M269.9 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.6 0-1-.4-1-.8s.5-.8 1-.8z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M269.9 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.6 0-1-.2-1-.6 0-.3.4-.6 1-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M269.9 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.6 0-1-.2-1-.6 0-.3.4-.6 1-.6z"
  }), __jsx("path", {
    fill: "#005bbf",
    d: "M263 317.4c1.4 0 2.7-.3 3.7-.8a8.4 8.4 0 013.7-.8c1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.8a8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.8 3.8.8v2.4a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.8c-1.4 0-2.7.3-3.6.8-1 .5-2.3.9-3.8.9a8 8 0 01-3.7-.9 8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.9-3.8.9v-2.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 317.4c1.4 0 2.7-.3 3.7-.8a8.4 8.4 0 013.7-.8c1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.8a8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.8 3.8.8v2.4a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.8c-1.4 0-2.7.3-3.6.8-1 .5-2.3.9-3.8.9a8 8 0 01-3.7-.9 8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.9-3.8.9v-2.4z"
  }), __jsx("path", {
    fill: "#ccc",
    d: "M263 319.8c1.4 0 2.7-.4 3.7-.9s2.3-.8 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8c1.5 0 2.8.3 3.7.8 1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.1 8.1 0 00-3.7-.7c-1.4 0-2.7.2-3.6.7-1 .5-2.3.9-3.8.9a7 7 0 01-3.7-.9c-1-.4-2.3-.7-3.8-.7a8.3 8.3 0 00-3.7.7 8.1 8.1 0 01-3.8.9v-2.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 319.8c1.4 0 2.7-.4 3.7-.9s2.3-.8 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8c1.5 0 2.8.3 3.7.8 1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.1 8.1 0 00-3.7-.7c-1.4 0-2.7.2-3.6.7-1 .5-2.3.9-3.8.9a7 7 0 01-3.7-.9c-1-.4-2.3-.7-3.8-.7a8.3 8.3 0 00-3.7.7 8.1 8.1 0 01-3.8.9v-2.3"
  }), __jsx("path", {
    fill: "#005bbf",
    d: "M263 322c1.4 0 2.7-.2 3.7-.8 1-.4 2.3-.7 3.7-.7 1.4 0 2.8.2 3.8.7s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .6-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8V322"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 322c1.4 0 2.7-.2 3.7-.8 1-.4 2.3-.7 3.7-.7 1.4 0 2.8.2 3.8.7s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .6-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8V322"
  }), __jsx("path", {
    fill: "#ccc",
    d: "M263 326.7a8 8 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.9a8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8a8.3 8.3 0 003.8.8v-2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .5-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8v2.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 326.7a8 8 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.9a8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8a8.3 8.3 0 003.8.8v-2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .5-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8v2.3"
  }), __jsx("path", {
    fill: "#005bbf",
    d: "M263 329a8.1 8.1 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8 1 .5 2.4.8 3.8.8v-2.3a8.3 8.3 0 01-3.8-.8 8.2 8.2 0 00-3.7-.8 8.4 8.4 0 00-3.6.7 8.2 8.2 0 01-3.8.9c-1.4 0-2.8-.3-3.7-.8-1-.5-2.3-.8-3.8-.8-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v2.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M263 329a8.1 8.1 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8 1 .5 2.4.8 3.8.8v-2.3a8.3 8.3 0 01-3.8-.8 8.2 8.2 0 00-3.7-.8 8.4 8.4 0 00-3.6.7 8.2 8.2 0 01-3.8.9c-1.4 0-2.8-.3-3.7-.8-1-.5-2.3-.8-3.8-.8-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v2.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M286.3 308l-.1.5c0 1.5 1.2 2.6 2.7 2.6h-22c1.5 0 2.7-1.2 2.7-2.6l-.1-.5h16.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M286.3 308l-.1.5c0 1.5 1.2 2.6 2.7 2.6h-22c1.5 0 2.7-1.2 2.7-2.6l-.1-.5h16.8z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M269.9 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.6 0-1-.3-1-.8 0-.4.5-.7 1-.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M269.9 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.6 0-1-.3-1-.8 0-.4.5-.7 1-.7z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M266.9 316.7h22V311h-22v5.6z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M266.9 316.7h22V311h-22v5.6z"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M290.6 286.7c2.1 1.2 3.6 2.5 3.4 3.2-.1.6-.8 1-1.8 1.6-1.6 1.1-2.5 3-1.8 4a5.5 5.5 0 01.2-8.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M290.6 286.7c2.1 1.2 3.6 2.5 3.4 3.2-.1.6-.8 1-1.8 1.6-1.6 1.1-2.5 3-1.8 4a5.5 5.5 0 01.2-8.8z"
  }), __jsx("path", {
    fill: "#ccc",
    d: "M270.1 305.6h15.6V229h-15.6v76.5z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M281.4 229.1v76.3m1.8-76.3v76.3m-13 .2h15.5V229h-15.6v76.5z"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M254.2 257.7a49.6 49.6 0 0123.3-2c9.3 1.6 16.4 5.3 15.9 8.4v.2l3.5-8.2c.6-3.3-7.3-7.5-17.6-9.2a53.5 53.5 0 00-9.2-.7c-6.7 0-12.4.8-15.9 2.1v9.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M254.2 257.7a49.6 49.6 0 0123.3-2c9.3 1.6 16.4 5.3 15.9 8.4v.2l3.5-8.2c.6-3.3-7.3-7.5-17.6-9.2a53.5 53.5 0 00-9.2-.7c-6.7 0-12.4.8-15.9 2.1v9.4"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M285.7 267.3c4.4-.3 7.3-1.4 7.7-3.2.2-1.5-1.2-3-3.8-4.5-1.2.1-2.5.3-3.9.3v7.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M285.7 267.3c4.4-.3 7.3-1.4 7.7-3.2.2-1.5-1.2-3-3.8-4.5-1.2.1-2.5.3-3.9.3v7.4"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M270 261.5a13 13 0 00-5.7 1.9v.2c-.5 1 1.8 3 5.8 5.4v-7.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M270 261.5a13 13 0 00-5.7 1.9v.2c-.5 1 1.8 3 5.8 5.4v-7.5"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M295.4 282c.4-1.2-3.8-3.6-9.7-5.8-2.8-1-5-2-7.8-3.2-8.3-3.7-14.4-7.9-13.6-9.4v-.2c-.4.4-1 8-1 8-.8 1.3 4.8 5.5 12.4 9.1 2.4 1.2 7.6 3 10 4 4.3 1.4 8.7 4.3 8.3 5.3l1.4-7.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M295.4 282c.4-1.2-3.8-3.6-9.7-5.8-2.8-1-5-2-7.8-3.2-8.3-3.7-14.4-7.9-13.6-9.4v-.2c-.4.4-1 8-1 8-.8 1.3 4.8 5.5 12.4 9.1 2.4 1.2 7.6 3 10 4 4.3 1.4 8.7 4.3 8.3 5.3l1.4-7.7z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M263.9 254.4c.6-2.3 1.4-4.4 2.1-6.6h-.5a5.2 5.2 0 01-.5.1 52.8 52.8 0 01-1.4 4.8c-1-1.4-2-2.7-2.7-4.1l-1 .2h-1a131.3 131.3 0 014 5.7h.5l.5-.1m6-6.6h-1a8 8 0 01-.8 0v6.2h4.2v-.7h-2.6l.1-5.5m6.8 1l2 .3v-.7l-5.8-.5v.8a19.3 19.3 0 012 0l-.4 5.6h1.6l.5-5.4m2.4 6c.3 0 .5 0 .8.2l.8.2.7-2.9.6 1.2.8 2.1 1 .2c.4 0 .7.2 1 .3l-.3-.7c-.4-1-1-1.9-1.3-2.9 1 0 1.9-.3 2.1-1.2.1-.6 0-1-.7-1.5-.4-.3-1.2-.4-1.7-.5l-2.4-.5-1.4 6m3-5.2c.7.2 1.5.3 1.5 1v.5c-.3.9-1 1.2-2 .9l.5-2.4m8 7l-.2 2 .8.5.9.5.5-7a3.4 3.4 0 01-.7-.3l-6.1 3.8.5.3.4.2 1.7-1.2 2.3 1.3zm-1.7-1.5l2-1.4-.2 2.3-1.8-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M182.2 192.4c0-1 1-2 2-2s2.2 1 2.2 2c0 1.1-1 2-2.1 2a2 2 0 01-2.1-2z"
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M205.7 175.4c6.3 0 12 1 15.7 2.4a31.7 31.7 0 0014.6 2.3c2.7 0 6.5.8 10.3 2.4a27.3 27.3 0 017.4 4.7l-1.5 1.4-.4 3.8-4.1 4.7-2 1.8-5 3.9-2.5.2-.7 2.1-31.6-3.7-31.7 3.7-.8-2.1-2.5-.2-4.9-4-2-1.7-4.1-4.7-.5-3.8-1.5-1.4a27.6 27.6 0 017.5-4.7 26 26 0 0110.2-2.4c2 .2 4.2.1 6.6-.2a30 30 0 008-2c3.7-1.5 9-2.5 15.5-2.5z"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.2 217.1c-11.8 0-22.4-1.4-29.9-3.6a1.1 1.1 0 01-.8-1.2c0-.5.3-1 .8-1.2a109 109 0 0129.9-3.6c11.7 0 22.3 1.4 29.8 3.6a1.3 1.3 0 010 2.4c-7.5 2.2-18 3.6-29.8 3.6"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M206.1 215.6c-10.6 0-20.2-1.2-27.5-3.1 7.3-2 16.9-3 27.5-3.1a115 115 0 0127.6 3c-7.3 2-17 3.2-27.6 3.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M206.9 215.7v-6.3m-1.7 6.3v-6.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M203.6 215.7v-6.3m-1.6 6.3v-6.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M200.6 215.7v-6.3m-2.8 5.9v-5.7m1.3 5.8v-6m-3.8 5.6v-5.2m1.3 5.4v-5.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M192 214.8V210m1 4.7V210m1.2 5v-5m-3.4 4.7v-4.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M189.7 214.5v-4.2m-1.2 4.1v-4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".6",
    d: "M186 214v-3m1.3 3.2v-3.5m-2.5 3.1V211"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".7",
    d: "M183.7 213.6v-2.3m-1.3 2v-1.8m-1.2 1.6v-1.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".9",
    d: "M179.8 212.8v-.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M213.7 215.3v-5.8m-2.9 6v-6.1m-2.1 6.2v-6.3"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206 207.4a108 108 0 00-30 3.9c.6-.3.5-1-.3-3-1-2.5-2.4-2.4-2.4-2.4 8.3-2.5 20-4 32.8-4a123 123 0 0133 4s-1.5-.1-2.5 2.3c-.8 2-.8 2.8-.2 3-7.5-2.2-18.4-3.7-30.3-3.7"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.1 201.9c-12.9 0-24.5 1.5-32.8 4a1 1 0 01-1.3-.6 1 1 0 01.7-1.3 121 121 0 0133.4-4.2c13.2 0 25.2 1.7 33.5 4.2.6.2.9.8.7 1.3-.2.5-.8.8-1.3.6-8.4-2.5-20-4-32.9-4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".4",
    d: "M206.1 215.6c-10.6 0-20.2-1.2-27.5-3.1 7.3-2 16.9-3 27.5-3.1a115 115 0 0127.6 3c-7.3 2-17 3.2-27.6 3.2z"
  }), __jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M197 204.8c0-.5.4-1 1-1 .5 0 1 .5 1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.1 205.6H203a1 1 0 010-2h6.4c.5 0 1 .5 1 1s-.5 1-1 1h-3.2"
  }), __jsx("path", {
    fill: "#058e6e",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M190.3 206.5l-2.3.2c-.6.1-1-.3-1.2-.8a1 1 0 011-1.1l2.2-.3 2.4-.3c.5 0 1 .3 1.1.9.1.5-.3 1-.9 1l-2.3.4"
  }), __jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M181 206.7c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M174 208.5l1.2-1.6 3.3.4-2.6 2-1.8-.8"
  }), __jsx("path", {
    fill: "#058e6e",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M222 206.5l2.3.2c.5.1 1-.3 1.1-.8a1 1 0 00-.9-1.1l-2.2-.3-2.4-.3a1 1 0 00-1.1.9c-.1.5.3 1 .9 1l2.3.4"
  }), __jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M213.3 204.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1m15.8 1.9c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M238.2 208.5l-1.1-1.6-3.3.4 2.6 2 1.8-.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M177.3 212.8c7.4-2.1 17.6-3.4 28.8-3.4 11.3 0 21.4 1.3 28.9 3.4"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M182.3 183.8l1.4 1 2-3.2a7.4 7.4 0 01-3.6-7.2c.2-4.1 5.2-7.6 11.7-7.6 3.3 0 6.3 1 8.5 2.4 0-.6 0-1.2.2-1.8a17.4 17.4 0 00-8.7-2.1c-7.4 0-13.2 4.1-13.5 9.1a8.9 8.9 0 003 7.6l-1 1.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.3 183.8l1.4 1 2-3.2a7.4 7.4 0 01-3.6-7.2c.2-4.1 5.2-7.6 11.7-7.6 3.3 0 6.3 1 8.5 2.4 0-.6 0-1.2.2-1.8a17.4 17.4 0 00-8.7-2.1c-7.4 0-13.2 4.1-13.5 9.1a8.9 8.9 0 003 7.6l-1 1.8"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M182.4 183.8a9.3 9.3 0 01-4-7.3c0-3.2 2-6.1 5.3-8a8.5 8.5 0 00-3.4 6.8 8.9 8.9 0 003 6.7l-.9 1.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.4 183.8a9.3 9.3 0 01-4-7.3c0-3.2 2-6.1 5.3-8a8.5 8.5 0 00-3.4 6.8 8.9 8.9 0 003 6.7l-.9 1.8"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M160.1 187.1a8.8 8.8 0 01-2.3-5.9c0-1.3.3-2.6 1-3.8 2-4.2 8.4-7.2 16-7.2 2 0 4 .2 5.9.6l-1 1.4a25.5 25.5 0 00-4.9-.4c-7 0-12.8 2.7-14.5 6.3a7 7 0 00-.7 3.1 7.3 7.3 0 002.7 5.6l-2.6 4.1-1.3-1 1.7-2.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M160.1 187.1a8.8 8.8 0 01-2.3-5.9c0-1.3.3-2.6 1-3.8 2-4.2 8.4-7.2 16-7.2 2 0 4 .2 5.9.6l-1 1.4a25.5 25.5 0 00-4.9-.4c-7 0-12.8 2.7-14.5 6.3a7 7 0 00-.7 3.1 7.3 7.3 0 002.7 5.6l-2.6 4.1-1.3-1 1.7-2.8z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M162.7 173.3a10.5 10.5 0 00-4 4.1 8.6 8.6 0 00-.9 3.8c0 2.3.9 4.3 2.3 5.9l-1.5 2.5a10.4 10.4 0 01-2.3-6.5c0-4 2.5-7.5 6.4-9.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M162.7 173.3a10.5 10.5 0 00-4 4.1 8.6 8.6 0 00-.9 3.8c0 2.3.9 4.3 2.3 5.9l-1.5 2.5a10.4 10.4 0 01-2.3-6.5c0-4 2.5-7.5 6.4-9.8z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M206 164.4c1.7 0 3.2 1.1 3.5 2.6.3 1.4.4 2.9.4 4.5v1.1c.1 3.3.6 6.3 1.3 8.1l-5.2 5-5.2-5c.7-1.8 1.2-4.8 1.3-8.1v-1.1c0-1.6.2-3.1.4-4.5.3-1.5 1.8-2.6 3.5-2.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206 164.4c1.7 0 3.2 1.1 3.5 2.6.3 1.4.4 2.9.4 4.5v1.1c.1 3.3.6 6.3 1.3 8.1l-5.2 5-5.2-5c.7-1.8 1.2-4.8 1.3-8.1v-1.1c0-1.6.2-3.1.4-4.5.3-1.5 1.8-2.6 3.5-2.6z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M206 166c1 0 1.7.6 1.8 1.4.2 1.2.4 2.6.4 4.2v1c.1 3.2.6 6 1.2 7.7l-3.4 3.2-3.4-3.2c.7-1.7 1.1-4.5 1.2-7.7v-1a28.1 28.1 0 01.4-4.2 2 2 0 011.8-1.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206 166c1 0 1.7.6 1.8 1.4.2 1.2.4 2.6.4 4.2v1c.1 3.2.6 6 1.2 7.7l-3.4 3.2-3.4-3.2c.7-1.7 1.1-4.5 1.2-7.7v-1a28.1 28.1 0 01.4-4.2 2 2 0 011.8-1.4z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M229.7 183.8l-1.3 1-2-3.2a7.4 7.4 0 003.6-6.3 7 7 0 000-.9c-.2-4.1-5.3-7.6-11.7-7.6a15 15 0 00-8.5 2.4 23 23 0 00-.2-1.8 17.4 17.4 0 018.7-2.1c7.4 0 13.2 4.1 13.4 9.1a8.9 8.9 0 01-3 7.6l1 1.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M229.7 183.8l-1.3 1-2-3.2a7.4 7.4 0 003.6-6.3 7 7 0 000-.9c-.2-4.1-5.3-7.6-11.7-7.6a15 15 0 00-8.5 2.4 23 23 0 00-.2-1.8 17.4 17.4 0 018.7-2.1c7.4 0 13.2 4.1 13.4 9.1a8.9 8.9 0 01-3 7.6l1 1.8"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M229.6 183.8a9.1 9.1 0 004.1-7.3c0-3.2-2.1-6.1-5.3-8a8.5 8.5 0 013.4 6.8 8.9 8.9 0 01-3.2 6.7l1 1.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M229.6 183.8a9.1 9.1 0 004.1-7.3c0-3.2-2.1-6.1-5.3-8a8.5 8.5 0 013.4 6.8 8.9 8.9 0 01-3.2 6.7l1 1.8"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M252 187.1a8.8 8.8 0 002.2-5.9 8.7 8.7 0 00-.9-3.8c-2-4.2-8.4-7.2-16-7.2a29 29 0 00-6 .6l1 1.4a25.4 25.4 0 015-.4c7 0 12.8 2.7 14.4 6.3.5 1 .7 2 .7 3.1a7.3 7.3 0 01-2.6 5.6l2.5 4.1 1.3-1-1.7-2.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M252 187.1a8.8 8.8 0 002.2-5.9 8.7 8.7 0 00-.9-3.8c-2-4.2-8.4-7.2-16-7.2a29 29 0 00-6 .6l1 1.4a25.4 25.4 0 015-.4c7 0 12.8 2.7 14.4 6.3.5 1 .7 2 .7 3.1a7.3 7.3 0 01-2.6 5.6l2.5 4.1 1.3-1-1.7-2.8z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M249.3 173.3a10.6 10.6 0 014 4.1 8.7 8.7 0 01.9 3.8 8.8 8.8 0 01-2.3 5.9l1.6 2.5a10.4 10.4 0 002.3-6.5c0-4-2.6-7.5-6.5-9.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M249.3 173.3a10.6 10.6 0 014 4.1 8.7 8.7 0 01.9 3.8 8.8 8.8 0 01-2.3 5.9l1.6 2.5a10.4 10.4 0 002.3-6.5c0-4-2.6-7.5-6.5-9.8z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M204.2 181.4c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M204.2 181.4c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7z"
  }), __jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M204.2 178c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7m.4-3.7c0-.7.6-1.3 1.4-1.3.8 0 1.5.6 1.5 1.3 0 .8-.7 1.4-1.5 1.4s-1.4-.6-1.4-1.4m.4-3.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1m.2-2.8c0-.5.4-.8.8-.8.5 0 .9.3.9.8 0 .4-.4.8-.9.8a.8.8 0 01-.8-.8"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.2 191.8l1.2.2a4.6 4.6 0 004.5 6 4.7 4.7 0 004.4-3c.1 0 .5-1.7.7-1.7.2 0 .1 1.8.2 1.7.3 2.3 2.4 3.8 4.7 3.8a4.6 4.6 0 004.7-5l1.5-1.5.7 2a4 4 0 00-.4 1.9 4.4 4.4 0 004.5 4.2c1.6 0 3-.7 3.8-1.9l.9-1.2v1.5c0 1.5.6 2.8 2 3 0 0 1.7.1 4-1.6 2.1-1.7 3.3-3.1 3.3-3.1l.2 1.7s-1.8 2.8-3.8 4c-1 .6-2.7 1.3-4 1-1.4-.2-2.4-1.3-3-2.6a6.7 6.7 0 01-3.3 1 6.5 6.5 0 01-6.1-3.7 7 7 0 01-10.4-.3 7 7 0 01-4.6 1.8 6.9 6.9 0 01-5.7-3 6.9 6.9 0 01-5.7 3 7 7 0 01-4.7-1.8 7 7 0 01-10.4.3 6.5 6.5 0 01-6 3.7 6.7 6.7 0 01-3.4-1c-.6 1.3-1.5 2.4-3 2.7-1.2.2-2.9-.5-4-1.1-2-1.2-3.8-4-3.8-4l.2-1.7s1.2 1.4 3.4 3.1c2.2 1.8 3.9 1.6 3.9 1.6 1.4-.2 2-1.5 2-3v-1.5l1 1.2a4.6 4.6 0 003.7 2c2.5 0 4.5-2 4.5-4.3a4 4 0 00-.4-2l.8-1.9 1.5 1.5a4.4 4.4 0 000 .6c0 2.4 2 4.4 4.6 4.4 2.4 0 4.4-1.5 4.7-3.8 0 0 0-1.6.2-1.7.2 0 .6 1.7.7 1.6a4.7 4.7 0 004.5 3.1 4.6 4.6 0 004.5-6l1.2-.2"
  }), __jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M238.6 197.7c.3-.8 0-1.6-.6-1.8-.5-.2-1.2.3-1.5 1.1-.3.8 0 1.6.6 1.8.5.2 1.2-.3 1.5-1.1m-20.5-4c0-.8-.3-1.6-1-1.6-.5-.1-1 .5-1.2 1.4-.1.8.3 1.5.9 1.6.6 0 1.2-.6 1.3-1.4m-23.9 0c0-.8.4-1.6 1-1.6.6-.1 1.1.5 1.2 1.4.1.8-.3 1.5-.9 1.6-.6 0-1.1-.6-1.2-1.4m-20.6 4c-.2-.8 0-1.6.6-1.8.6-.2 1.2.3 1.5 1.1.3.8 0 1.6-.5 1.8-.6.2-1.3-.3-1.6-1.1"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.7 184a5.1 5.1 0 012.2 2.9s0-.3.6-.6 1-.3 1-.3l-.1 1.3-.3 2.2a7.4 7.4 0 01-.7 1.6 1.9 1.9 0 00-1.5-.4 1.8 1.8 0 00-1.2.9s-.7-.6-1.2-1.3l-1.1-2-.7-1.1s.5-.2 1.1 0c.6 0 .8.2.8.2a4.9 4.9 0 011-3.4m.4 9.8a1.8 1.8 0 01-.6-1c0-.5 0-.9.3-1.2 0 0-.9-.5-1.8-.7-.7-.2-2-.2-2.3-.2h-1l.2.5c.2.5.5.7.5.7a5 5 0 00-3 2 5.3 5.3 0 003.5 1l-.2.8v.6l1-.4c.3-.1 1.5-.5 2-1 .8-.4 1.5-1.1 1.5-1.1m2.7-.5a1.6 1.6 0 00.2-1.1 1.7 1.7 0 00-.6-1l1.4-1.3a10 10 0 012-.9l1.1-.4v.6a5.7 5.7 0 01-.2.8 5 5 0 013.4 1 5 5 0 01-2.9 2 6.4 6.4 0 00.7 1.2h-1c-.4 0-1.6 0-2.3-.2a11 11 0 01-1.8-.7"
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.2 192.4c0-1 1-2 2-2s2.2 1 2.2 2c0 1.1-1 2-2.1 2a2 2 0 01-2.1-2"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M206.1 180.8a5.7 5.7 0 011.9 3.7s.2-.3.9-.5c.7-.3 1.2-.2 1.2-.2l-.5 1.4-.8 2.4a8.2 8.2 0 01-1 1.7 2.1 2.1 0 00-1.7-.7c-.6 0-1.2.3-1.6.7 0 0-.6-.7-1-1.7l-.8-2.4-.5-1.4 1.2.2c.7.2.9.5.9.5 0-1.4.8-2.8 1.8-3.7"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M204.6 191.8a2 2 0 01-.5-1.2c0-.5.1-1 .4-1.3 0 0-.8-.7-1.8-1-.7-.4-2-.7-2.5-.7l-1.2-.2.2.6.4.9a5.9 5.9 0 00-3.7 1.7c1 .9 2.3 1.6 3.7 1.6l-.4 1-.2.6 1.2-.2c.4-.1 1.8-.4 2.5-.7 1-.4 1.9-1 1.9-1m3 0a1.9 1.9 0 00.1-2.6s.9-.7 1.8-1a8 8 0 012.5-.7l1.2-.3-.1.7-.4.9c1.4 0 2.7.8 3.6 1.7a5.9 5.9 0 01-3.6 1.6 6.9 6.9 0 00.5 1.6l-1.2-.2-2.5-.7c-1-.4-1.8-1-1.8-1m22-8a5.2 5.2 0 00-2.2 3l-.7-.6c-.6-.3-1-.3-1-.3l.2 1.3c0 .3 0 1.3.3 2.2.2 1 .6 1.6.6 1.6a2 2 0 011.5-.4c.6.1 1 .5 1.3.9l1.1-1.3c.6-.8 1-1.7 1.1-2l.7-1.1s-.4-.2-1 0c-.7 0-1 .2-1 .2a4.9 4.9 0 00-1-3.4m-.3 9.8c.3-.3.5-.6.6-1a1.6 1.6 0 00-.2-1.2s.8-.5 1.7-.7c.7-.2 2-.2 2.3-.2h1.1l-.3.5a6.2 6.2 0 01-.4.7 5 5 0 012.9 2 5.3 5.3 0 01-3.5 1l.2.8v.6l-1-.4c-.3-.1-1.4-.5-2-1-.8-.4-1.4-1.1-1.4-1.1m-2.8-.5a1.7 1.7 0 01-.2-1.1c0-.5.3-.8.6-1 0 0-.6-.8-1.4-1.3-.6-.4-1.7-.8-2-.9a171.4 171.4 0 01-1-.4v.6c0 .5.2.8.2.8a5.2 5.2 0 00-3.5 1c.7.9 1.7 1.7 3 2 0 0-.3.2-.5.7l-.3.5h1c.4 0 1.7 0 2.3-.2a11.1 11.1 0 001.8-.7"
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M226 192.4c0-1 1-2 2-2s2.1 1 2.1 2a2 2 0 01-2 2 2 2 0 01-2.1-2m23.2 4.4c-.4-.5-1.4-.4-2.2.2-.8.7-1 1.6-.5 2.2.5.5 1.5.4 2.3-.3.7-.6 1-1.6.5-2"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M246.3 198l.7-1c.7-.6 1.8-.7 2.3-.2l.1.2s1-2 2.3-2.6c1.3-.7 3.4-.5 3.4-.5a2.8 2.8 0 00-2.9-2.8 3 3 0 00-2.4 1l-.2-1s-1.3.3-1.9 1.8c-.6 1.5 0 3.6 0 3.6s-.3-.9-.7-1.5a8 8 0 00-2.4-1.6l-1.3-.7-.1.5a5 5 0 000 .8 7.9 7.9 0 00-3.7.5 4.7 4.7 0 002.5 2.2l-.8.7a4 4 0 00-.4.5l1.3.2 2.5.2a14.5 14.5 0 001.7-.2m-80.3 0c0-.4-.3-.7-.7-1-.7-.7-1.7-.8-2.2-.3l-.2.3s-1-2-2.3-2.7c-1.2-.7-3.3-.5-3.3-.5a2.8 2.8 0 012.8-2.8c1 0 1.9.4 2.4 1l.2-1s1.3.3 2 1.8c.5 1.5-.1 3.6-.1 3.6s.3-.9.8-1.5a8 8 0 012.4-1.6l1.3-.7v1.3a7.9 7.9 0 013.7.5 4.7 4.7 0 01-2.5 2.2l.8.7.4.5-1.2.2-2.6.2a14.7 14.7 0 01-1.7-.2"
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M163 196.8c.6-.5 1.6-.4 2.4.3.7.6 1 1.5.4 2-.5.6-1.5.5-2.2-.2-.8-.6-1-1.6-.5-2m41-6.3c0-1.1.9-2 2-2s2.1.9 2.1 2c0 1-1 2-2 2a2 2 0 01-2.1-2"
  }), __jsx("path", {
    fill: "#005bbf",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M201.8 160.6c0-2.2 1.9-4 4.3-4s4.2 1.8 4.2 4-1.9 4-4.3 4a4.1 4.1 0 01-4.2-4"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M205 149.3v2.2h-2.4v2.2h2.3v6.3H202l-.2.6c0 .6.1 1.1.3 1.6h7.9c.2-.5.3-1 .3-1.6l-.2-.6h-2.8v-6.3h2.3v-2.2h-2.3v-2.2h-2.4z"
  }), __jsx("path", {
    fill: "#ccc",
    d: "M206.5 330.6a82 82 0 01-35.5-8.2 22.7 22.7 0 01-12.8-20.4v-32h96.4v32a22.7 22.7 0 01-12.8 20.4 81 81 0 01-35.3 8.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.5 330.6a82 82 0 01-35.5-8.2 22.7 22.7 0 01-12.8-20.4v-32h96.4v32a22.7 22.7 0 01-12.8 20.4 81 81 0 01-35.3 8.2z"
  }), __jsx("path", {
    fill: "#ccc",
    d: "M206.3 270h48.3v-53.5h-48.3V270z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.3 270h48.3v-53.5h-48.3V270z"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M206.3 302c0 12.6-10.7 22.9-24 22.9s-24.2-10.3-24.2-23v-32h48.2v32"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M168.6 320.9c1.5.8 3.6 2 5.8 2.6l-.1-54.7h-5.7v52z"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".5",
    d: "M158 301.6a24.4 24.4 0 005.5 15v-47.5h-5.4v32.5z"
  }), __jsx("path", {
    fill: "#c7b500",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M179.4 324.7a26.6 26.6 0 005.6 0v-55.9h-5.6v56z"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M190 323.5a19 19 0 005.8-2.5v-52.2H190l-.1 54.7z"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M158.1 270h48.2v-53.5H158V270z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M158.1 270h48.2v-53.5H158V270z"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M201 316c2.4-2 4.6-6.8 5.4-12.2l.1-35H201l.1 47.3z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.3 302c0 12.6-10.7 22.9-24 22.9s-24.2-10.3-24.2-23v-32h48.2v32"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M254.6 270v32c0 12.6-10.8 22.9-24.1 22.9s-24.2-10.3-24.2-23v-32h48.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M254.6 270v32c0 12.6-10.8 22.9-24.1 22.9s-24.2-10.3-24.2-23v-32h48.3"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M215.1 294.1l.1.5c0 .6-.5 1-1.1 1a1 1 0 01-1.1-1v-.5h-1.5a2.5 2.5 0 001.8 2.9v3.9h1.6V297a2.6 2.6 0 001.7-1.6h4.4v-1.2h-6m21.8 0v1.2h-4a2.5 2.5 0 01-.3.6l4.6 5.2-1.2 1-4.6-5.3-.2.1v8.7h-1.6V297h-.2l-4.8 5.2-1.2-1 4.7-5.3a2.1 2.1 0 01-.2-.4h-4V294h13zm2.6 0v1.2h4.4c.3.8.9 1.4 1.7 1.6v3.9h1.6V297a2.5 2.5 0 001.8-2.4 2 2 0 000-.5h-1.6l.1.5c0 .6-.5 1-1 1-.7 0-1.2-.4-1.2-1a1 1 0 01.1-.5h-5.9m-6.7 22.1a15.6 15.6 0 003.7-1l.8 1.4a17.6 17.6 0 01-4.3 1.2 2.6 2.6 0 01-2.6 2 2.6 2.6 0 01-2.5-2 17.5 17.5 0 01-4.6-1.2l.8-1.4c1.3.5 2.6.9 4 1a2.5 2.5 0 011.5-1.3v-6.7h1.6v6.7c.7.2 1.3.7 1.6 1.4zm-11-2.2l-.8 1.4a16.6 16.6 0 01-3.6-3.1c-.9.2-1.8 0-2.5-.5a2.4 2.4 0 01-.3-3.5l.1-.1a15.3 15.3 0 01-1.3-4.8h1.7a13.1 13.1 0 001 4c.5 0 1 0 1.4.2l4.1-4.5 1.3 1-4.1 4.5c.5.9.5 2-.1 2.8a15.2 15.2 0 003.1 2.6zm-6-4.8c.3-.4 1-.5 1.5 0s.5 1 .1 1.4a1.2 1.2 0 01-1.6.1 1 1 0 010-1.5zm-2.2-4.5l-1.6-.3-.3-4.3 1.7-.6v2.5c0 1 0 1.8.2 2.7zm1.4-5.3l1.7.4v2.2c0-.8.3 2.1.3 2.1l-1.7.6a14 14 0 01-.3-2.7v-2.6zm5.6 13.7a15.7 15.7 0 004.8 2.6l.4-1.6a13.7 13.7 0 01-4-2l-1.2 1m-.8 1.4a17.4 17.4 0 004.8 2.6l-1.2 1.1a18.7 18.7 0 01-4-2l.4-1.7m2.2-9.4l1.6.7 3-3.3-1-1.4-3.6 4m-1.3-1l-1-1.4 3-3.3 1.6.7-3.6 4m18.1 9.9l.8 1.4a16.7 16.7 0 003.6-3.1c.9.2 1.8 0 2.5-.5a2.4 2.4 0 00.3-3.5l-.1-.1a15 15 0 001.3-4.8h-1.7a13.3 13.3 0 01-1 4 3 3 0 00-1.4.2l-4.1-4.5-1.3 1 4.1 4.5a2.4 2.4 0 00.1 2.8 15 15 0 01-3.1 2.6zm6-4.8a1.2 1.2 0 00-1.5 0 1 1 0 00-.1 1.4 1.2 1.2 0 001.6.1 1 1 0 000-1.5zm2.2-4.5l1.6-.3.3-4.3-1.7-.6v2.5c0 1 0 1.9-.2 2.8zm-1.4-5.3l-1.7.4v2.2c0-.8-.3 2.1-.3 2.1l1.7.6.3-2.7v-2.6m-5.6 13.7a15.7 15.7 0 01-4.8 2.6l-.4-1.6a13.7 13.7 0 004-2l1.2 1m.8 1.4a17.4 17.4 0 01-4.8 2.6l1.2 1.1a18.6 18.6 0 004-2l-.4-1.7m-2.2-9.4l-1.6.7-2.9-3.3 1-1.4 3.5 4m1.3-1l1-1.4-3-3.3-1.6.7 3.6 4m-20.1-8.7l.5 1.6h4.5l.5-1.6h-5.5m21.1 0l-.5 1.6h-4.5l-.5-1.6h5.5m-11.6 21.9c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm1.9-7.8l1.7-.4v-4.3l-1.7-.5v5.2m-1.6 0l-1.7-.4v-4.3l1.7-.5v5.2"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M211.5 294.2c.2-1 1-1.6 1.8-2V287h1.6v5.3c.8.3 1.5.9 1.7 1.6h4.4v.3h-6a1.2 1.2 0 00-1-.6c-.4 0-.7.3-1 .6h-1.5m12.2 0v-.3h4.1a2.4 2.4 0 01.2-.3l-5-5.7 1.2-1 5 5.6.2-.1V285h1.6v7.3h.3l4.9-5.5 1.2 1-4.9 5.5.3.6h4v.3h-13zm21.6 0a1.1 1.1 0 011-.6c.5 0 .8.3 1 .6h1.6c-.2-1-.9-1.6-1.8-2V287h-1.6v5.3c-.8.3-1.4.8-1.7 1.6h-4.4v.3h6m-30.2-15l6 6.8 1.3-1-6.1-6.7.3-.6h4.4V276h-4.4a2.6 2.6 0 00-2.5-1.7 2.6 2.6 0 00-2.7 2.5 2.5 2.5 0 001.8 2.4v5.2h1.6v-5.2h.3zm32 0v5.3h-1.7v-5.2a2.5 2.5 0 01-.4-.2l-6 6.8-1.3-1 6.2-6.9-.1-.3h-4.5V276h4.5a2.6 2.6 0 012.4-1.7 2.6 2.6 0 012.7 2.5 2.5 2.5 0 01-1.9 2.4zm-16.1 0v3.3h-1.7v-3.2a2.6 2.6 0 01-1.7-1.6h-4V276h4a2.6 2.6 0 012.5-1.7c1.2 0 2.2.7 2.5 1.7h4v1.6h-4a2.5 2.5 0 01-1.6 1.6zm-17.8 4l-1.7.4v4.3l1.7.5v-5.2m1.6 0l1.7.4v4.3l-1.7.5v-5.2m30.6 0l-1.7.4v4.3l1.7.5v-5.2m1.6 0l1.7.4v4.3l-1.7.5v-5.2m-25.5.8l1.6-.7 2.9 3.3-1 1.4-3.5-4m-1.3 1l-1 1.4 3 3.3 1.6-.7-3.6-4m18.5-1.1l-1.6-.7-3 3.3 1 1.4 3.6-4m1.2 1l1 1.4-3 3.3-1.5-.7 3.5-4m-20.3 9l.5-1.6h4.5l.5 1.6h-5.5m-6.7-17c0-.6.5-1 1.2-1a1 1 0 011 1c0 .6-.4 1-1 1a1.1 1.1 0 01-1.2-1zm12.1.8l-.5 1.6h-4.5l-.5-1.6h5.5m0-1.6l-.5-1.6h-4.5l-.5 1.6h5.5m15.7 17.8l-.5-1.6h-4.5l-.5 1.6h5.5m4.4-17c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm-16.1 0c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1.1 1a1.1 1.1 0 01-1.1-1zm6.2.8l.5 1.6h4.6l.5-1.6h-5.6m0-1.6l.5-1.6h4.6l.5 1.6h-5.6m-5.9 5l-1.7.5v4.3l1.7.5V281m1.7 0l1.6.5v4.3l-1.6.5V281"
  }), __jsx("path", {
    fill: "none",
    stroke: "#c8b100",
    strokeWidth: ".3",
    d: "M232.7 316.3a15.6 15.6 0 003.7-1.1l.8 1.4a17.6 17.6 0 01-4.3 1.2 2.6 2.6 0 01-2.6 2 2.6 2.6 0 01-2.5-2 17.5 17.5 0 01-4.6-1.2l.8-1.4c1.3.5 2.6.9 4 1a2.5 2.5 0 011.5-1.3v-6.7h1.6v6.7c.7.2 1.3.7 1.6 1.4zm-4.7-20.4a2.3 2.3 0 01-.2-.5h-4V294h4a2.6 2.6 0 01.2-.4l-5-5.6 1.2-1 5 5.5a2.2 2.2 0 01.2 0V285h1.7v7.3h.2l4.9-5.5 1.2 1-4.9 5.5.3.6h4v1.5h-4c0 .2-.2.4-.3.5l4.7 5.3-1.3 1-4.6-5.3-.2.1v8.7h-1.6V297l-.2-.1-4.8 5.3-1.2-1 4.7-5.3m-12.8-16.7l6 6.8 1.3-1-6.1-6.7.3-.6h4.4V276h-4.4a2.6 2.6 0 00-2.5-1.7 2.6 2.6 0 00-2.6 2.5 2.5 2.5 0 001.7 2.4v5.2h1.6v-5.2h.3zm6.5 34.8l-.8 1.4a16.6 16.6 0 01-3.6-3.1c-.9.2-1.8 0-2.5-.5a2.4 2.4 0 01-.3-3.5l.1-.1a15.3 15.3 0 01-1.2-4.8h1.6a13.1 13.1 0 001 4c.5 0 1 0 1.4.2l4.1-4.5 1.3 1-4.1 4.5c.6.9.5 2-.1 2.8a15.2 15.2 0 003.1 2.6zm-8.4-13.1V297a2.5 2.5 0 01-1.8-2.4c0-1 .8-2 1.8-2.4V287h1.6v5.3c.8.2 1.5.8 1.7 1.6h4.4v1.5h-4.4a2.6 2.6 0 01-1.6 1.6v3.9h-1.7m2.3 8.3c.4-.4 1.1-.5 1.6 0s.5 1 .1 1.4a1.2 1.2 0 01-1.6.1 1 1 0 010-1.5zm-2-4.5l-1.7-.3-.3-4.3 1.7-.6v2.5c0 1 0 1.8.3 2.7zm1.4-5.3l1.6.4v2.2c0-.8.3 2.1.3 2.1l-1.7.6-.3-2.7v-2.6zm5.5 13.7a15.7 15.7 0 004.8 2.6l.4-1.6a13.7 13.7 0 01-4-2l-1.2 1m-.8 1.4a17.4 17.4 0 004.8 2.6l-1.2 1.1a18.7 18.7 0 01-4-2l.4-1.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#c8b100",
    strokeWidth: ".3",
    d: "M221.9 305.1l1.6.7 3-3.3-1-1.4-3.6 4m-1.3-1l-1-1.4 3-3.3 1.6.7-3.6 4m-7.6-9.5c0-.6.5-1 1-1 .7 0 1.2.5 1.2 1 0 .6-.5 1.1-1.1 1.1a1 1 0 01-1.1-1zm25.7 19.4l.8 1.4a16.7 16.7 0 003.6-3.1c.9.2 1.8 0 2.6-.5a2.4 2.4 0 00.2-3.5l-.1-.1a15 15 0 001.3-4.8h-1.7a13.3 13.3 0 01-1 4 3 3 0 00-1.4.2l-4.1-4.5-1.3 1 4.1 4.5a2.4 2.4 0 00.1 2.8 15 15 0 01-3 2.6zm8.4-13.1V297a2.5 2.5 0 001.8-2.4c0-1-.7-2-1.8-2.4V287h-1.6v5.3c-.8.2-1.4.8-1.7 1.6h-4.4v1.5h4.4c.3.8.9 1.3 1.7 1.6v3.9h1.6zm-2.3 8.3a1.2 1.2 0 00-1.6 0 1 1 0 00-.1 1.4 1.2 1.2 0 001.6.1 1 1 0 000-1.5zm2-4.5l1.7-.3.3-4.3-1.7-.6v2.5c0 1 0 1.8-.2 2.7zm-1.3-5.3l-1.7.4v2.2c0-.8-.3 2.1-.3 2.1l1.7.6.3-2.7v-2.6m1.6-20.1v5.2h-1.6v-5.2a2.3 2.3 0 01-.4-.2l-6 6.8-1.2-1 6-7v-.2h-4.5V276h4.4a2.6 2.6 0 012.5-1.7 2.6 2.6 0 012.6 2.5 2.5 2.5 0 01-1.8 2.4zm-16 0v3.2h-1.7v-3.2a2.6 2.6 0 01-1.7-1.6h-4V276h4c.4-1 1.3-1.7 2.5-1.7s2.2.7 2.5 1.7h4v1.6h-4a2.5 2.5 0 01-1.6 1.6zm8.8 33.8a15.7 15.7 0 01-4.8 2.6l-.4-1.6a13.7 13.7 0 004-2l1.2 1m.8 1.4a17.4 17.4 0 01-4.8 2.6l1.2 1.1a18.7 18.7 0 004-2l-.4-1.7m-27.4-31.4l-1.7.5v4.3l1.7.5v-5.2m1.7 0l1.6.4v4.3l-1.6.5V283m30.5 0l-1.7.5v4.3l1.7.5V283"
  }), __jsx("path", {
    fill: "none",
    stroke: "#c8b100",
    strokeWidth: ".3",
    d: "M247.1 283.1l1.7.5v4.3l-1.7.5V283m-8.6 22l-1.6.7-2.9-3.3 1-1.4 3.5 4m1.3-1l1-1.4-3-3.3-1.6.7 3.6 4m-18.2-20l1.6-.7 3 3.3-1 1.4-3.6-4m-1.3 1l-1 1.4 3 3.3 1.6-.7-3.6-4m18.5-1.1l-1.6-.7-3 3.3 1 1.4 3.6-4m1.2 1l1 1.4-3 3.2-1.5-.6 3.5-4m-20.3 9l.5-1.6h4.5l.5 1.6h-5.5m0 1.5l.5 1.6h4.5l.5-1.6h-5.5M213 277c0-.6.5-1 1.2-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1.2-1zm12.1.8l-.5 1.6h-4.5l-.5-1.6h5.5m0-1.6l-.5-1.6h-4.5l-.5 1.6h5.5m20.1 18.5c0-.5.5-1 1.1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1.1-1 1.1a1 1 0 01-1.2-1zm-4.4-.7l-.5-1.6h-4.5l-.5 1.6h5.5m0 1.5l-.5 1.6h-4.5l-.5-1.6h5.5m-11.6 21.9c0-.6.5-1 1.1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1.1 1.1 0 01-1.2-1zm1.9-7.8l1.7-.4v-4.3l-1.7-.5v5.2m-1.6 0l-1.7-.4v-4.3l1.7-.5v5.2m15.7-32.6c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm-16.1 0c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm6.2.8l.5 1.6h4.6l.5-1.6h-5.5m0-1.6l.4-1.6h4.6l.5 1.6h-5.5m-6 5l-1.6.5v4.3l1.6.5V281m1.7 0l1.6.5v4.3l-1.6.5V281"
  }), __jsx("path", {
    fill: "#058e6e",
    d: "M227.7 294.7a2.6 2.6 0 012.6-2.5 2.6 2.6 0 012.6 2.5 2.6 2.6 0 01-2.6 2.4c-1.4 0-2.6-1-2.6-2.4"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M230.9 229.7v-.6l.1-.3-2.3-.1a5.9 5.9 0 01-2.3-1.2c-.8-.7-1.1-1-1.6-1.2-1.3-.2-2.3.4-2.3.4s1 .4 1.7 1.3 1.5 1.3 1.8 1.4c.6.2 2.6 0 3.1.1l1.8.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M230.9 229.7v-.6l.1-.3-2.3-.1a5.9 5.9 0 01-2.3-1.2c-.8-.7-1.1-1-1.6-1.2-1.3-.2-2.3.4-2.3.4s1 .4 1.7 1.3 1.5 1.3 1.8 1.4c.6.2 2.6 0 3.1.1l1.8.2z"
  }), __jsx("path", {
    fill: "#ed72aa",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M238.1 227.5v1.4c.2.6-.1 1.2 0 1.5 0 .4.1.6.3.9l.2.9-.7-.5-.6-.4v1c.1.2.3.8.6 1.1l1 1.3c.2.5.1 1.4.1 1.4s-.4-.7-.8-.8l-1.2-.7s.7.8.7 1.5c0 .8-.3 1.6-.3 1.6s-.3-.7-.8-1.1l-1-.9s.4 1.2.4 2v2.3l-.9-1-1-.7c0-.2.5.6.6 1.1 0 .5.3 2.3 1.8 4.5 1 1.3 2.3 3.6 5.3 2.9 3-.8 1.9-4.8 1.3-6.7a16.8 16.8 0 01-1-4.6c0-.8.6-2.9.5-3.3a8 8 0 01.2-3.1c.4-1.3.7-1.8.9-2.3.2-.6.4-.9.4-1.3l.1-1.3.7 1.3.1 1.5s.1-1 1-1.6c.8-.6 1.8-1.1 2-1.4.3-.3.3-.5.3-.5s0 1.8-.6 2.6l-1.7 2s.7-.3 1.2-.3h.9s-.6.4-1.4 1.6c-.8 1-.5 1.2-1 2.1-.6 1-1 1-1.7 1.5-1 .8-.5 4.2-.4 4.7.2.5 2 4.5 2 5.5s.2 3.2-1.5 4.6c-1.1 1-3 1-3.4 1.2-.4.3-1.2 1.1-1.2 2.8 0 1.7.6 2 1 2.4.6.5 1.2.2 1.3.6.2.3.2.5.5.7.2.2.3.4.2.8 0 .3-.8 1.1-1.1 1.7l-.8 2.4c0 .2-.1 1 .1 1.3 0 0 .9 1 .3 1.2-.4.2-.8-.2-1-.2l-.9.5c-.3-.1-.3-.3-.4-.8l-.1-.7c-.2 0-.3.2-.4.5 0 .2 0 .8-.3.8-.2 0-.5-.4-.8-.5-.2 0-.8-.2-.8-.4 0-.3.4-.9.7-1 .4 0 .8-.3.5-.5s-.5-.2-.7 0-.8 0-.7-.2v-.8c0-.2-.4-.5.1-.8.6-.3.8.2 1.4.1.6 0 .8-.3 1-.6.2-.3.2-1-.2-1.4-.4-.5-.7-.5-.9-.8l-.3-.9v2.2l-.7-.8c-.3-.3-.6-1.3-.6-1.3v1.3c0 .4.3.7.2.8-.1.1-.8-.7-1-.8a3.7 3.7 0 01-1-1l-.4-1.4a4.2 4.2 0 010-1.5l.4-1h-1.4c-.7 0-1.2-.3-1.5.2-.3.5-.2 1.5.2 2.8.3 1.2.5 1.9.4 2.1a3 3 0 01-.7.8h-.9a2.5 2.5 0 00-1.2-.3h-1.3l-1.1-.3c-.3.1-.8.3-.6.7.2.6-.2.7-.5.7l-.9-.2c-.4-.1-.9 0-.8-.4 0-.4.2-.4.4-.7.2-.3.2-.5 0-.5h-.6c-.2.2-.5.5-.8.4-.2-.1-.4-.4-.4-1s-.7-1.2 0-1.1c.5 0 1.3.4 1.4 0 .2-.3 0-.4-.2-.7s-.8-.4-.3-.7l.7-.5c.1-.2.4-.8.7-.6.6.2 0 .7.6 1.3.6.7 1 1 2 .8 1 0 1.3-.2 1.3-.5l-.1-1v-1s-.4.3-.5.6l-.4.8v-2a8 8 0 00-.2-.8l-.3.9-.1 1s-.7-.5-.5-1.5c.1-.7-.1-1.6.1-2 .2-.3.7-1.5 2-1.6h2.6l2-.3s-2.8-1.4-3.5-1.9a9.5 9.5 0 01-2-2l-.6-1.6s-.5 0-1 .3a5 5 0 00-1.2 1l-.7 1 .1-1.2v-.8s-.4 1.2-1 1.7l-1.4 1v-.8l.2-1s-.4.8-1.1 1c-.7 0-1.8 0-1.9.4 0 .5.2 1 0 1.4 0 .3-.4.5-.4.5l-.8-.4c-.4 0-.7.2-.7.2s-.3-.4-.2-.7c.1-.2.7-.6.5-.8l-.8.2c-.3.1-.8.3-.8-.2 0-.4.2-.7 0-1 0-.3 0-.5.2-.6l1.2-.1c0-.2-.2-.5-.8-.6-.6-.1-.8-.5-.5-.8.3-.2.3-.3.5-.6.1-.2.2-.7.7-.5.5.3.4.8 1 1a4 4 0 002-.2l1.5-1 1.5-1-1-.8c-.3-.3-.7-.9-1-1a8.3 8.3 0 00-1.8-.6 9 9 0 01-1.7-.5l.8-.3c.2-.2.6-.6.8-.6h.3-1.4c-.3-.1-1-.6-1.3-.6l-.8.1s.8-.4 1.4-.5l1-.1s-.9-.3-1.1-.6l-.6-1c-.2-.1-.3-.5-.6-.5l-1 .3c-.4 0-.6-.2-.6-.6l-.1-.5c-.2-.3-.6-.8-.2-1h1.4c0-.2-.5-.6-.8-.8-.4-.2-1-.5-.7-.8l.8-.5c.2-.3.3-1 .7-.7.4.2.8 1.2 1.1 1.1.3 0 .3-.8.3-1 0-.4 0-1 .2-.9.3 0 .5.4 1 .5.4 0 1-.1 1 .2 0 .3-.3.7-.6 1-.3.3-.4 1-.3 1.4.2.5.7 1.2 1.2 1.4.4.3 1.2.5 1.7.9.5.3 1.7 1.2 2.1 1.3l.8.4s.5-.2 1.1-.2c.7 0 2.1 0 2.6-.2.6-.2 1.3-.6 1-1-.1-.6-1.3-1-1.2-1.4 0-.4.5-.4 1.2-.4.8 0 1.8.1 2-1 .2-1 .2-1.5-.8-1.8-1-.2-1.8-.2-2-1-.2-.7-.4-.9-.2-1.1.3-.2.6-.3 1.4-.4.8 0 1.6 0 1.9-.2.2-.2.3-.7.6-.9.3-.2 1.4-.4 1.4-.4s1.4.7 2.7 1.7a15 15 0 012.2 2.1"
  }), __jsx("path", {
    d: "M228.1 226.8l-.2-.6v-.3s.8 0 .7.3c0 .2-.2.2-.3.3l-.2.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M228.1 226.8l-.2-.6v-.3s.8 0 .7.3c0 .2-.2.2-.3.3l-.2.3z"
  }), __jsx("path", {
    d: "M232 225.4v-.4s.7 0 1 .3c.5.4.9 1 .9 1l-.8-.4h-.5l-.3-.1v-.3h-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M232 225.4v-.4s.7 0 1 .3c.5.4.9 1 .9 1l-.8-.4h-.5l-.3-.1v-.3h-.3z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M237.3 231.3l-.4-.7a8 8 0 01-.3-.4"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M217.4 226.6s.5.4.8.4h.8s.2-.5.1-.8c-.2-1.2-1.2-1.4-1.2-1.4s.3.7.1 1a2 2 0 01-.6.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M217.4 226.6s.5.4.8.4h.8s.2-.5.1-.8c-.2-1.2-1.2-1.4-1.2-1.4s.3.7.1 1a2 2 0 01-.6.8z"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M215.2 227.6s-.4-.7-1.3-.6c-.8 0-1.4.8-1.4.8h1.2c.3.3.4 1 .4 1l.7-.6a7.2 7.2 0 00.4-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M215.2 227.6s-.4-.7-1.3-.6c-.8 0-1.4.8-1.4.8h1.2c.3.3.4 1 .4 1l.7-.6a7.2 7.2 0 00.4-.6z"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M214.2 230.6s-.8.1-1.2.6c-.4.5-.3 1.3-.3 1.3s.4-.5.9-.5l1 .2-.1-.8-.3-.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M214.2 230.6s-.8.1-1.2.6c-.4.5-.3 1.3-.3 1.3s.4-.5.9-.5l1 .2-.1-.8-.3-.8z"
  }), __jsx("path", {
    d: "M228.2 230.5l.3-.5.3.5h-.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M228.2 230.5l.3-.5.3.5h-.7"
  }), __jsx("path", {
    d: "M229 230.5l.3-.5.4.5h-.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M229 230.5l.3-.5.4.5h-.8"
  }), __jsx("path", {
    d: "M228.6 227.3l.8.3-.7.4-.1-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M228.6 227.3l.8.3-.7.4-.1-.6"
  }), __jsx("path", {
    d: "M229.5 227.6l.7.2-.5.4-.2-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M229.5 227.6l.7.2-.5.4-.2-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M224.2 233.7s-.7.2-1 .6c-.4.5-.3 1-.3 1s.6-.5 1.5-.3l1.2.3 1.3-.3s-.7.8-.7 1.3l.2 1.1c0 .7-.6 1.6-.6 1.6l1-.3a4.6 4.6 0 001.7-.8l.9-1s-.2 1 0 1.4l.2 1.6.8-.6c.2-.1.7-.4.9-.7l.3-1s0 .8.4 1.3l.6 1.6s.3-.8.6-1.1c.3-.4.7-.8.7-1a4.3 4.3 0 00-.1-.9l.4.8m-11 .6s.5-.8 1-1l1.1-.8.9-.4m1 5l1.3-.8a4 4 0 001-1"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M216.6 240.4s-.4-.5-1.1-.3c-.7 0-1.2.9-1.2.9s.6-.2 1-.1.6.4.6.4l.4-.4.3-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M216.6 240.4s-.4-.5-1.1-.3c-.7 0-1.2.9-1.2.9s.6-.2 1-.1.6.4.6.4l.4-.4.3-.6z"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M215.8 243.2s-.6 0-1.1.3c-.5.4-.5 1.2-.5 1.2s.4-.4.8-.3l.9.2v-.6c.2-.4-.1-.8-.1-.8"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M215.8 243.2s-.6 0-1.1.3c-.5.4-.5 1.2-.5 1.2s.4-.4.8-.3l.9.2v-.6c.2-.4-.1-.8-.1-.8z"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M217.2 245.8s0 .8.3 1.3c.4.5 1.1.5 1.1.5l-.3-.7c0-.4.3-.8.3-.8s-.3-.3-.7-.3h-.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M217.2 245.8s0 .8.3 1.3c.4.5 1.1.5 1.1.5l-.3-.7c0-.4.3-.8.3-.8s-.3-.3-.7-.3h-.7zm16 1.3s2 1.2 1.9 2.2c0 1-1 2.3-1 2.3"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M224.2 252.6s-.4-.6-1.1-.6c-.7 0-1.4.7-1.4.7s.8-.1 1 .2l.5.6.5-.3.5-.6"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M224.2 252.6s-.4-.6-1.1-.6c-.7 0-1.4.7-1.4.7s.8-.1 1 .2l.5.6.5-.3.5-.6z"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M222.2 255.3s-1-.1-1.4.3c-.4.5-.4 1.3-.4 1.3s.6-.6 1-.5c.5 0 1 .3 1 .3v-.7l-.3-.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M222.2 255.3s-1-.1-1.4.3c-.4.5-.4 1.3-.4 1.3s.6-.6 1-.5c.5 0 1 .3 1 .3v-.7l-.3-.7z"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M224 258.1s-.3.7 0 1.1c.3.5 1 .8 1 .8s-.3-.4-.2-.8c.1-.3.7-.8.7-.8l-1.4-.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M224 258.1s-.3.7 0 1.1c.3.5 1 .8 1 .8s-.3-.4-.2-.8c.1-.3.7-.8.7-.8l-1.4-.2z"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M236 259.3s-.8-.2-1.2 0c-.5.3-.8 1.4-.8 1.4s.7-.6 1.2-.5c.5 0 1 .3 1 .3v-.8l-.2-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M236 259.3s-.8-.2-1.2 0c-.5.3-.8 1.4-.8 1.4s.7-.6 1.2-.5c.5 0 1 .3 1 .3v-.8l-.2-.4z"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M236.4 262.2s-.6.6-.4 1.1l.6 1s0-.7.2-1l1-.3-.7-.5a15.8 15.8 0 01-.7-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M236.4 262.2s-.6.6-.4 1.1l.6 1s0-.7.2-1l1-.3-.7-.5a15.8 15.8 0 01-.7-.3z"
  }), __jsx("path", {
    fill: "#db4446",
    d: "M239.4 263s-.3.8.2 1.3c.6.5 1 .5 1 .5s-.3-.7-.2-1.1c.1-.5.5-.7.5-.7l-.8-.2-.7.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M239.4 263s-.3.8.2 1.3c.6.5 1 .5 1 .5s-.3-.7-.2-1.1c.1-.5.5-.7.5-.7l-.8-.2-.7.3z"
  }), __jsx("path", {
    fill: "#ffd691",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M208.8 316.4c2 .6 3 2 3 3.8 0 2.3-2.2 4-5 4-3 0-5.3-1.7-5.3-4 0-1.7 1-3.6 3-3.8l-.2-.4-.7-.7h1.2l.8.5.5-.7c.3-.4.6-.5.6-.5l.6.6.3.5.7-.4.8-.3s0 .4-.2.7l-.1.7"
  }), __jsx("path", {
    fill: "#058e6e",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.3 326.7s-3.8-2.6-5.5-3c-2-.4-4.5 0-5.5 0 0 0 1.2.8 1.8 1.4.5.5 2.3 1.5 3.3 1.8 3 .8 6-.2 6-.2m1 .2s2.4-2.5 5-2.9c3-.4 5 .3 6.2.6l-1.5.8c-.5.3-2 1.5-4 1.6-2 0-4.4-.3-4.8-.2l-.9.1"
  }), __jsx("path", {
    fill: "#ad1519",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M206.7 323.8a4.8 4.8 0 010-7.1 4.8 4.8 0 011.5 3.5 4.9 4.9 0 01-1.5 3.6"
  }), __jsx("path", {
    fill: "#058e6e",
    stroke: "#000",
    strokeWidth: ".5",
    d: "M205.7 329s.6-1.5.6-2.7l-.1-2.1h.8s.3 1.1.3 2l-.1 2.4-.7.1-.8.3"
  }), __jsx("path", {
    fill: "#fff",
    d: "M254 190.7c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M254 190.7c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M255.4 188.2c0-.6.5-1 1.1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M255.4 188.2c0-.6.5-1 1.1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M256.4 185.2c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M256.4 185.2c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M256.5 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M256.5 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M255.7 179c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M255.7 179c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M254.1 176.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M254.1 176.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M252 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M252 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M249.4 171.8c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M249.4 171.8c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M246.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M246.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M243.3 169.1c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M243.3 169.1c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M239.9 168.5c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M239.9 168.5c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M236.6 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M236.6 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M233.3 168.5c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M233.3 168.5c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M230.1 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M230.1 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
  }), __jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M231.7 171.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m.6 3.1c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1m0 3c0-.5.6-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1m-1 2.8c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1 0 .6-.4 1-1 1a1 1 0 01-1-1m-1.9 2.6c0-.5.5-1 1-1 .7 0 1.2.5 1.2 1s-.5 1-1.1 1c-.6 0-1-.4-1-1"
  }), __jsx("path", {
    fill: "#fff",
    d: "M227.6 166.5c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M227.6 166.5c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M224.8 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M224.8 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M221.6 164c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.5 1-1 1-.6 0-1.1-.5-1.1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M221.6 164c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.5 1-1 1-.6 0-1.1-.5-1.1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M218.3 163.4c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M218.3 163.4c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M215 163.5c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M215 163.5c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M211.7 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M211.7 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M208.6 165.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M208.6 165.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M156 190.7c0-.5.4-1 1-1s1 .5 1 1c0 .6-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M156 190.7c0-.5.4-1 1-1s1 .5 1 1c0 .6-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M154.5 188.2c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M154.5 188.2c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M153.5 185.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M153.5 185.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M153.4 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M153.4 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M154.2 179c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M154.2 179c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M155.8 176.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M155.8 176.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M158 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M158 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M160.5 171.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M160.5 171.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M163.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M163.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M166.6 169.1c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M166.6 169.1c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M170 168.5c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M170 168.5c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M173.4 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M173.4 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M176.6 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M176.6 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M179.8 168.5c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M179.8 168.5c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M178.2 171.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m-.7 3.1c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1m-.2 3c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m.9 2.8c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1.1-1m1.8 2.6c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "#fff",
    d: "M182.3 166.5c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M182.3 166.5c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M185.2 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M185.2 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M188.3 164c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1 0 .5-.4 1-1 1s-1-.5-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M188.3 164c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1 0 .5-.4 1-1 1s-1-.5-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M191.6 163.4c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M191.6 163.4c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M194.9 163.5c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M194.9 163.5c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M198.2 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M198.2 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M201.3 165.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M201.3 165.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M174.7 228.9h-1v-1h-1.5v3.6h1.6v2.5h-3.4v7h1.8v14.3h-3.5v7.3h27.2v-7.3h-3.5V241h1.8v-7h-3.4v-2.5h1.6V228h-1.6v.9h-.8v-1h-1.6v1h-1.1v-1h-1.6v3.6h1.6v2.5H184v-7.8h1.7v-3.5H184v.9h-1v-1h-1.5v1h-.9v-1H179v3.6h1.7v7.8h-3.3v-2.5h1.6V228h-1.6v.9h-.9v-1h-1.8v1zm-6 33.7H196m-27.3-1.8H196m-27.3-1.8H196m-27.3-1.7H196m-27.3-2H196m-23.8-1.6h20.2m-20.2-1.8h20.2m-20.2-2h20.2m-20.2-1.7h20.2m-20.2-1.8h20.2m-20.2-1.8h20.2m-20.2-1.7h20.2m-22-1.8h23.8m-23.8-1.8h23.8m-23.8-1.8h23.8m-23.8-1.8h23.8m-20.4-1.7h17m-10.2-1.8h3.4m-3.4-1.8h3.4m-3.4-1.8h3.4m-3.4-1.7h3.4m-5.1-2.2h6.8m-12 7.5h3.6m-5-2.2h6.6m-6.7 32.6v-1.8m0-1.8v-1.7m-1.8 1.7v1.8m3.4 0V259m1.7 3.6v-1.8m0-1.8v-1.7m0-2v-1.6m0-1.8v-2m-1.7 7.4v-2m-3.4 2v-2m7 0v2m1.5-2v-1.6m-5.1-1.8v1.8m3.5-1.8v1.8m3.3-1.8v1.8M179 252v-2m1.7-1.7v1.7m0-5.3v1.8m-1.7-3.6v1.8m1.7-3.5v1.7m-3.3-1.7v1.7m-3.5-1.7v1.7m-1.6-3.5v1.8m3.3-1.8v1.8m3.4-1.8v1.8m1.7-3.6v1.8m-3.3-1.8v1.8m-3.5-1.8v1.8m-1.6-3.6v1.8m6.7-1.8v1.8m-3.4-5.3v1.8m15.3-1.8h-3.5m5-2.2h-6.6m6.7 32.6v-1.8m0-1.8v-1.7m1.8 1.7v1.8m-3.4 0V259m-1.7 3.6v-1.8m0-1.8v-1.7m0-2v-1.6m0-1.8v-2m1.7 7.4v-2m3.4 2v-2m-7 0v2m-1.5-2v-1.6m5.1-1.8v1.8m-3.5-1.8v1.8m-3.3-1.8v1.8m1.7-1.8v-2m-1.7-1.7v1.7m0-5.3v1.8m1.7-3.6v1.8m-1.7-3.5v1.7m3.3-1.7v1.7m3.5-1.7v1.7m1.6-3.5v1.8m-3.3-1.8v1.8m-3.4-1.8v1.8m-1.7-3.6v1.8m3.3-1.8v1.8m3.5-1.8v1.8m1.6-3.6v1.8m-6.7-1.8v1.8m3.4-5.3v1.8m-7 18v-2m0-5.4v-1.8m0 5.4v-1.8m0-5.3v-1.8m0-1.8v-1.7m0-3.6v-1.8m0-1.7v-1.8m-8.3 4.6h3.5m3.3-5.3h3.4m3.3 5.3h3.5"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M186.8 262.6v-4.7c0-.8-.4-3.5-4.6-3.5-4 0-4.4 2.7-4.4 3.5v4.7h9z"
  }), __jsx("path", {
    fill: "#c8b100",
    stroke: "#000",
    strokeWidth: ".4",
    d: "M179.3 258.2l-2.2-.3c0-.9.2-2.2.9-2.6l2 1.5c-.3.2-.7 1-.7 1.4zm6 0l2.2-.3c0-.9-.2-2.2-.9-2.6l-2 1.5c.3.2.7 1 .7 1.4zm-2.2-2.3l1-2a5.3 5.3 0 00-2-.4l-1.7.4 1.1 2h1.6zm-4.2-5.5v-4.9c0-1.3-1-2.4-2.5-2.4s-2.4 1-2.4 2.4v4.9h4.9zm6.8 0v-4.9c0-1.3 1-2.4 2.5-2.4s2.4 1 2.4 2.4v4.9h-4.9zm-1.7-12l.4-4.4h-4.2l.2 4.4h3.6zm3.3 0l-.4-4.4h4.4l-.5 4.4h-3.5zm-10 0l.2-4.4h-4.2l.5 4.4h3.5z"
  }), __jsx("path", {
    fill: "#0039f0",
    d: "M185.3 262.6v-4c0-.7-.5-2.7-3.1-2.7-2.4 0-2.9 2-2.9 2.7v4h6zm-6.9-12.7v-4.2c0-1-.6-2.2-2-2.2s-2 1.1-2 2.2v4.3h4zm7.8 0v-4.2c0-1 .7-2.2 2-2.2s2 1.1 2 2.2v4.3h-4z"
  }), __jsx("path", {
    fill: "#ad1519",
    d: "M190.8 269.8c0-9.7 7-17.6 15.6-17.6s15.6 7.9 15.6 17.6-7 17.5-15.6 17.5-15.6-7.8-15.6-17.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".6",
    d: "M190.8 269.8c0-9.7 7-17.6 15.6-17.6s15.6 7.9 15.6 17.6-7 17.5-15.6 17.5-15.6-7.8-15.6-17.5z"
  }), __jsx("path", {
    fill: "#005bbf",
    d: "M195.4 269.7c0-7 5-12.8 11-12.8s11 5.7 11 12.8c0 7.2-5 13-11 13s-11-5.8-11-13"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".6",
    d: "M195.4 269.7c0-7 5-12.8 11-12.8s11 5.7 11 12.8c0 7.2-5 13-11 13s-11-5.8-11-13z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M201.2 260.9s-1.3 1.4-1.3 2.7a6 6 0 00.6 2.4c-.2-.5-.8-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.1-.3.5-.5 1-.5s1 .4 1 1a.9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.7 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M201.2 260.9s-1.3 1.4-1.3 2.7a6 6 0 00.6 2.4c-.2-.5-.8-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.1-.3.5-.5 1-.5s1 .4 1 1a.9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.7 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M199.2 269.9h4.1v-1h-4.1v1z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M199.2 269.9h4.1v-1h-4.1v1z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M211.4 260.9s-1.3 1.4-1.3 2.7c0 1.3.6 2.4.6 2.4-.2-.5-.7-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.2-.3.5-.5 1-.5a1 1 0 011 1 .9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.8.8 0 010-.3 1 1 0 011-1c.4 0 .8.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.6 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M211.4 260.9s-1.3 1.4-1.3 2.7c0 1.3.6 2.4.6 2.4-.2-.5-.7-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.2-.3.5-.5 1-.5a1 1 0 011 1 .9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.8.8 0 010-.3 1 1 0 011-1c.4 0 .8.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.6 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M209.4 269.9h4.1v-1h-4.1v1z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M209.4 269.9h4.1v-1h-4.1v1z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M206.3 269.6s-1.3 1.5-1.3 2.8.6 2.4.6 2.4c-.2-.5-.7-.9-1.4-.9-.8 0-1.4.6-1.4 1.4l.2.7.5 1c.1-.4.5-.6 1-.6a1 1 0 011 1 .9.9 0 010 .3h-1.2v1h1l-.8 1.5 1-.4.8.9.8-1 1 .5-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.2.9.6l.5-1 .2-.7a1.4 1.4 0 00-1.4-1.4c-.7 0-1.2.4-1.4 1 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeLinejoin: "round",
    strokeWidth: ".3",
    d: "M206.3 269.6s-1.3 1.5-1.3 2.8.6 2.4.6 2.4c-.2-.5-.7-.9-1.4-.9-.8 0-1.4.6-1.4 1.4l.2.7.5 1c.1-.4.5-.6 1-.6a1 1 0 011 1 .9.9 0 010 .3h-1.2v1h1l-.8 1.5 1-.4.8.9.8-1 1 .5-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.2.9.6l.5-1 .2-.7a1.4 1.4 0 00-1.4-1.4c-.7 0-1.2.4-1.4 1 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M204.3 278.6h4.1v-1h-4.1v1z"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M204.3 278.6h4.1v-1h-4.1v1z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M237.6 223.4h-.3a1.5 1.5 0 01-.3.4c-.2.2-.6.2-.8 0a.5.5 0 01-.1-.4.5.5 0 01-.5 0c-.3-.1-.3-.5-.1-.7v-.5h-.3l-.1.2c-.2.3-.5.3-.7.2a.6.6 0 010-.2h-.3c-.5.2-.7-1-.7-1.2l-.2.2s.2.7.1 1.2c0 .6-.3 1.2-.3 1.2a9 9 0 012.9 1.6 9 9 0 012.2 2.3l1.2-.5c.6-.2 1.3-.2 1.3-.2l.2-.2c-.3 0-1.5.1-1.5-.4v-.2a.7.7 0 01-.2 0c-.2-.2-.2-.4 0-.7l.2-.1v-.3h-.3l-.2.1c-.2.3-.6.3-.8 0a.4.4 0 01-.1-.4.6.6 0 01-.5 0c-.2-.2-.3-.5 0-.8l.2-.3v-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M237.6 223.4h-.3a1.5 1.5 0 01-.3.4c-.2.2-.6.2-.8 0a.5.5 0 01-.1-.4.5.5 0 01-.5 0c-.3-.1-.3-.5-.1-.7v-.5h-.3l-.1.2c-.2.3-.5.3-.7.2a.6.6 0 010-.2h-.3c-.5.2-.7-1-.7-1.2l-.2.2s.2.7.1 1.2c0 .6-.3 1.2-.3 1.2a9 9 0 012.9 1.6 9 9 0 012.2 2.3l1.2-.5c.6-.2 1.3-.2 1.3-.2l.2-.2c-.3 0-1.5.1-1.5-.4v-.2a.7.7 0 01-.2 0c-.2-.2-.2-.4 0-.7l.2-.1v-.3h-.3l-.2.1c-.2.3-.6.3-.8 0a.4.4 0 01-.1-.4.6.6 0 01-.5 0c-.2-.2-.3-.5 0-.8l.2-.3v-.3z"
  }), __jsx("path", {
    d: "M235.4 224h.2v.3h-.1c-.1 0-.1-.2 0-.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M235.4 224h.2v.3h-.1c-.1 0-.1-.2 0-.2z"
  }), __jsx("path", {
    d: "M236.3 224.8l-.3-.2v-.2h.1l.4.3.3.2v.2h-.2l-.3-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M236.3 224.8l-.3-.2v-.2h.1l.4.3.3.2v.2h-.2l-.3-.3"
  }), __jsx("path", {
    d: "M234.6 223.7l-.2-.2s-.1 0 0-.1l.3.1.3.1v.2h-.1l-.3-.1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M234.6 223.7l-.2-.2s-.1 0 0-.1l.3.1.3.1v.2h-.1l-.3-.1"
  }), __jsx("path", {
    d: "M233.7 223h.2v.2h-.2s-.1-.1 0-.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M233.7 223h.2v.2h-.2s-.1-.1 0-.2z"
  }), __jsx("path", {
    d: "M237.3 225.5v-.2h-.3l.1.2h.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M237.3 225.5v-.2h-.3l.1.2h.2z"
  }), __jsx("path", {
    d: "M237.9 226.2l.2.2h.1c.1 0 0-.1 0-.2l-.2-.2-.2-.2h-.1v.2l.2.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M237.9 226.2l.2.2h.1c.1 0 0-.1 0-.2l-.2-.2-.2-.2h-.1v.2l.2.2"
  }), __jsx("path", {
    d: "M238.8 227v-.3h-.3v.2h.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M238.8 227v-.3h-.3v.2h.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M236.2 221.1h-.6l-.1.9v.1h.2l.7-.5-.3-.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M236.2 221.1h-.6l-.1.9v.1h.2l.7-.5-.3-.5"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M234.6 221.6v.5l.9.1h.1v-.2l-.5-.7-.5.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M234.6 221.6v.5l.9.1h.1v-.2l-.5-.7-.5.3"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M236.4 222.6l-.4.3-.6-.7v-.1h1.1v.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M236.4 222.6l-.4.3-.6-.7v-.1h1.1v.5"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M235.3 222a.3.3 0 01.4 0 .3.3 0 010 .3.3.3 0 01-.3 0 .3.3 0 01-.1-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M235.3 222a.3.3 0 01.4 0 .3.3 0 010 .3.3.3 0 01-.3 0 .3.3 0 01-.1-.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M233.2 221.1l-.2-.7-.4-.4s.4-.2.8.1c.4.3 0 .9 0 .9l-.2.1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M233.2 221.1l-.2-.7-.4-.4s.4-.2.8.1c.4.3 0 .9 0 .9l-.2.1z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M234.2 221.4l-.4.4-.6-.6v-.2h1v.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M234.2 221.4l-.4.4-.6-.6v-.2h1v.4"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M233.1 221l.3-.1v.3c0 .2-.1.2-.2.2l-.1-.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M233.1 221l.3-.1v.3c0 .2-.1.2-.2.2l-.1-.3z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M238.3 222.5h-.5l-.3.7v.2h.2l.8-.4-.2-.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M238.3 222.5h-.5l-.3.7v.2h.2l.8-.4-.2-.5"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M236.7 222.8v.5l.8.2h.1v-.2l-.4-.7-.5.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M236.7 222.8v.5l.8.2h.1v-.2l-.4-.7-.5.2"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M238.4 224l-.5.2-.4-.7v-.2h.1l.9.2-.1.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M238.4 224l-.5.2-.4-.7v-.2h.1l.9.2-.1.5"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M237.3 223.2h.4a.3.3 0 010 .4.3.3 0 01-.3 0 .3.3 0 010-.4"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M237.3 223.2h.4a.3.3 0 010 .4.3.3 0 01-.3 0 .3.3 0 010-.4z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M240.2 224.3l.1.5-.8.3h-.2v-.2l.4-.8.5.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M240.2 224.3l.1.5-.8.3h-.2v-.2l.4-.8.5.2"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M240 225.8l-.5.1-.3-.8v-.1h.2l.8.3-.1.5"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M240 225.8l-.5.1-.3-.8v-.1h.2l.8.3-.1.5"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M238.6 224.3l-.2.5.9.3h.1v-.1l-.3-.8-.5.1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M238.6 224.3l-.2.5.9.3h.1v-.1l-.3-.8-.5.1"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M239.5 225.2a.3.3 0 000-.3.3.3 0 00-.4 0 .3.3 0 000 .3.3.3 0 00.4 0"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M239.5 225.2a.3.3 0 000-.3.3.3 0 00-.4 0 .3.3 0 000 .3.3.3 0 00.4 0z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M240.8 227h.8l.5.3s.1-.4-.3-.7c-.3-.3-.8.2-.8.2l-.2.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M240.8 227h.8l.5.3s.1-.4-.3-.7c-.3-.3-.8.2-.8.2l-.2.2z"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M240.3 226.1l-.3.5.8.5v-.1h.2l-.1-1-.6.1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M240.3 226.1l-.3.5.8.5v-.1h.2l-.1-1-.6.1"
  }), __jsx("path", {
    fill: "#c8b100",
    d: "M241 227s.1-.1 0-.2h-.3c-.2 0-.2.1-.1.2h.3"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".3",
    d: "M241 227s.1-.1 0-.2h-.3c-.2 0-.2.1-.1.2h.3zm38-21.9v.6h-2.4v-.6h1v-1.3h-.7v-.5h.6v-.6h.6v.6h.6v.6h-.6v1.2h1"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "0",
    d: "M134.4 217.1v-1.2m-.4 1.2v-1.2m-.2 1.2v-1.2m-.3 1.2v-1.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M133.2 217.1v-1.2m-.5 1.1v-1m.2 1v-1m-.7 1v-1m.2 1v-1m-.9 1v-1m.2 1v-1m.3 1v-1m-.7 1v-1m-.3.9v-.8m-.1.8v-.8m-.5.7v-.6m.2.6v-.6m-.4.5v-.5m-.2.5v-.4m-.3.3v-.3m-.3.3v-.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M129.2 216.6v-.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "0",
    d: "M135.7 217v-1m-.5 1v-1m-.4 1.2V216m143 1.1V216m-.4 1.1V216m-.3 1.1V216m-.3 1.2V216"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".1",
    d: "M276.6 217.1V216m-.6 1v-1m.3 1v-1m-.8 1v-1m.3 1v-1m-.9 1v-1m.2 1v-1m.2 1v-1m-.6 1v-1m-.3.9v-.8m-.2.8v-.8m-.4.7v-.6m.2.6v-.6m-.5.6v-.6m-.2.5v-.4m-.3.4v-.4m-.2.3v-.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: ".2",
    d: "M272.6 216.6v-.2"
  }), __jsx("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "0",
    d: "M279.1 217v-1m-.6 1v-1m-.4 1.1V216"
  }));
};

/***/ }),

/***/ "9T+x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./src/graphql/query/site.settings.query.ts
var site_settings_query = __webpack_require__("DwM4");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/css"
var css_ = __webpack_require__("ExBD");
var css_default = /*#__PURE__*/__webpack_require__.n(css_);

// CONCATENATED MODULE: ./src/layouts/logo/logo.style.tsx


const LogoBox = external_styled_components_default.a.span.withConfig({
  displayName: "logostyle__LogoBox",
  componentId: "lg7rb4-0"
})(css_default()({
  color: 'text.bold',
  fontSize: 26,
  fontWeight: 'bold',
  cursor: 'pointer',
  mr: [0, 20, 40],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));
const LogoImage = external_styled_components_default.a.img.withConfig({
  displayName: "logostyle__LogoImage",
  componentId: "lg7rb4-1"
})({
  display: 'block',
  backfaceVisibility: 'hidden',
  maxHeight: 60
});
// EXTERNAL MODULE: ./src/contexts/app/app.reducer.ts
var app_reducer = __webpack_require__("sDBz");

// EXTERNAL MODULE: ./src/utils/images-path.ts
var images_path = __webpack_require__("W1nP");

// CONCATENATED MODULE: ./src/layouts/logo/logo.tsx
var __jsx = external_react_default.a.createElement;








const Logo = ({
  refs,
  imageUrl,
  alt,
  onClick
}) => {
  const {
    data,
    error,
    loading
  } = Object(react_hooks_["useQuery"])(site_settings_query["a" /* GET_SETTING */]);
  const {
    0: siteSettingData,
    1: setSiteSettingData
  } = Object(external_react_["useState"])(app_reducer["b" /* initialState */]);
  Object(external_react_["useEffect"])(() => {
    if (data) {
      setSiteSettingData(JSON.parse(data.getSiteSetting.value));
    }
  }, [data]);

  function onLogoClick() {
    router_default.a.push('/[type]', `${onClick.href}`);
    return;
  }

  return __jsx(LogoBox, {
    onClick: onLogoClick,
    ref: refs
  }, data && __jsx(LogoImage, {
    src: siteSettingData ? images_path["a" /* SHOP_IMAGE_HOST */] + siteSettingData.image : imageUrl,
    alt: alt
  }));
};

/* harmony default export */ var logo = __webpack_exports__["a"] = (Logo);

/***/ }),

/***/ "9nwM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const BookIcon = ({
  width = '18px',
  height = '18px',
  color = 'currentColor'
}) => {
  return __jsx("svg", {
    id: "book",
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 30.011 24.606"
  }, __jsx("path", {
    "data-name": "Path 1",
    d: "M243.79,21.432V0l-.818.069a31.449,31.449,0,0,0-9.533,2.324L232,2.99V24.337l1.048-.436a32.716,32.716,0,0,1,9.861-2.4Zm0,0",
    transform: "translate(-216.459)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2",
    d: "M276.924,47.3h-1.608V66.054a.536.536,0,0,1-.492.536l-1.372.113q-.594.049-1.185.122c-.128.015-.255.036-.382.054-.265.035-.53.071-.794.113-.154.025-.307.053-.46.08-.236.041-.473.082-.709.129-.161.032-.322.068-.486.1-.225.048-.449.1-.672.149-.167.04-.334.082-.5.124-.217.054-.433.111-.648.172-.168.046-.335.095-.5.144-.214.063-.426.128-.637.2l-.5.161q-.318.107-.633.221c-.161.058-.322.117-.486.178l-.22.086h12.283Zm0,0",
    transform: "translate(-246.913 -44.129)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 3",
    d: "M40.818.069,40,0V21.433l.951.081a32.5,32.5,0,0,1,9.85,2.412l.988.411V2.99l-1.438-.6A31.448,31.448,0,0,0,40.818.069Zm0,0",
    transform: "translate(-37.32)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 4",
    d: "M0,47.3V68.733H12.292c-.066-.026-.132-.054-.2-.078-.153-.058-.308-.114-.462-.17-.218-.079-.435-.156-.654-.229q-.238-.08-.477-.156-.326-.107-.654-.2c-.161-.047-.322-.094-.482-.139-.22-.061-.441-.119-.663-.176-.161-.041-.322-.083-.486-.121-.225-.054-.45-.1-.676-.151-.161-.035-.322-.07-.482-.1-.234-.046-.468-.087-.7-.128L5.891,67c-.259-.041-.519-.076-.779-.111-.131-.018-.262-.038-.393-.053q-.59-.071-1.179-.122L2.1,66.59a.536.536,0,0,1-.49-.536V47.3Zm0,0",
    transform: "translate(0 -44.129)",
    fill: color
  }));
};

/***/ }),

/***/ "AQ4e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const CategoryIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 14 14"
  }, __jsx("path", {
    "data-name": "Path 2029",
    d: "M13.563,7.876H8.313a.437.437,0,0,0-.437.437v5.25A.437.437,0,0,0,8.313,14h5.25A.437.437,0,0,0,14,13.564V8.314A.437.437,0,0,0,13.563,7.876Zm0-7.875H8.313a.437.437,0,0,0-.437.437v5.25a.437.437,0,0,0,.437.437h5.25A.437.437,0,0,0,14,5.688V.438A.437.437,0,0,0,13.563,0ZM5.687,0H.437A.438.438,0,0,0,0,.438v5.25a.437.437,0,0,0,.437.437h5.25a.437.437,0,0,0,.437-.437V.438A.438.438,0,0,0,5.687,0Zm0,7.875H.437A.437.437,0,0,0,0,8.314v5.25A.437.437,0,0,0,.437,14h5.25a.437.437,0,0,0,.437-.437V8.314A.437.437,0,0,0,5.687,7.876Z",
    transform: "translate(0 -0.001)",
    fill: color
  }));
};

/***/ }),

/***/ "AiAP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Snacks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Snacks = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    fill: color
  }, __jsx("path", {
    "data-name": "Path 36",
    d: "M2.109 5.274H12.66a1.055 1.055 0 000-2.11h-.1a1.67 1.67 0 00-1.5-1.054 2.626 2.626 0 00-1.854-1.044 2.1 2.1 0 00-3.653 0 2.626 2.626 0 00-1.85 1.045h-.011a1.577 1.577 0 00-1.481 1.055h-.1a1.055 1.055 0 100 2.11z"
  }), __jsx("path", {
    "data-name": "Path 37",
    d: "M7.956 15.891l.863-9.562H5.946l.862 9.562z"
  }), __jsx("path", {
    "data-name": "Path 38",
    d: "M2.884 12.881a2.118 2.118 0 011.253 1.378 2.626 2.626 0 011.07 1.633h.542L4.887 6.33H2.164z"
  }), __jsx("path", {
    "data-name": "Path 39",
    d: "M12.601 6.329H9.877l-.862 9.562h2.059a.527.527 0 00.524-.469z"
  }), __jsx("path", {
    "data-name": "Path 40",
    d: "M1.054 16.946a.876.876 0 00.091-.019 1.577 1.577 0 102-2c0-.031.019-.058.019-.091a1.055 1.055 0 00-2.11 0 1.055 1.055 0 100 2.109z"
  })));
};

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

/***/ "DdEw":
/***/ (function(module, exports) {



/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Dtxv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFlag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const DEFlag = ({
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480",
    width: width,
    height: height
  }, __jsx("path", {
    fill: "#ffce00",
    d: "M0 320h640v160H0z"
  }), __jsx("path", {
    d: "M0 0h640v160H0z"
  }), __jsx("path", {
    fill: "#d00",
    d: "M0 160h640v160H0z"
  }));
};

/***/ }),

/***/ "DwM4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_SETTING; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GET_SETTING = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query GetSetting {
    getSiteSetting(key: "site-settings") {
      id
      key
      value
    }
  }
`;

/***/ }),

/***/ "EsHW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckMark; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const CheckMark = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 20.894 16"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_ios-checkmark (3)",
    d: "M169.184,175.473l-1.708-1.756a.367.367,0,0,0-.272-.116.352.352,0,0,0-.272.116l-11.837,11.925-4.308-4.308a.375.375,0,0,0-.543,0l-1.727,1.727a.387.387,0,0,0,0,.553l5.434,5.434a1.718,1.718,0,0,0,1.135.553,1.8,1.8,0,0,0,1.126-.534h.01l12.973-13.041A.415.415,0,0,0,169.184,175.473Z",
    transform: "translate(-148.4 -173.6)",
    fill: color
  }));
};

/***/ }),

/***/ "ExBD":
/***/ (function(module, exports) {

module.exports = require("@styled-system/css");

/***/ }),

/***/ "FSM0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaretUpIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const CaretUpIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 10 5"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_md-arrow-dropdown (2)",
    d: "M128,192l5,5,5-5Z",
    transform: "translate(138 197) rotate(180)",
    fill: color
  }));
};

/***/ }),

/***/ "FyrQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Members; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Members = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 56 56"
  }, __jsx("path", {
    "data-name": "Path 2434",
    d: "M56,21.656a4.49,4.49,0,0,0-3.218-4.326l-5.814-1.743V14.215a6.344,6.344,0,0,0,2.71-5.183V6.323a6.323,6.323,0,1,0-12.645,0v2.71a6.343,6.343,0,0,0,2.71,5.183v1.371l-4.065,1.219-4.065-1.219V14.215a6.344,6.344,0,0,0,2.71-5.183V6.323a6.323,6.323,0,1,0-12.645,0v2.71a6.343,6.343,0,0,0,2.71,5.183v1.371l-4.065,1.219-4.065-1.219V14.215a6.344,6.344,0,0,0,2.71-5.183V6.323a6.323,6.323,0,0,0-12.645,0v2.71a6.343,6.343,0,0,0,2.71,5.183v1.371L3.218,17.331A4.488,4.488,0,0,0,0,21.656v8.151H4.516V40.646H15.355v8.129H9.032V56H23.484V48.775H17.161V40.646h2.71V41.3l1.169.39a7.079,7.079,0,0,0,.665,1.6l-.552,1.1,2.2,2.2,1.1-.552a7.117,7.117,0,0,0,1.6.664l.39,1.169h3.109l.389-1.17a7.126,7.126,0,0,0,1.6-.664l1.1.552,2.2-2.2-.552-1.1a7.187,7.187,0,0,0,.665-1.6l1.17-.389v-.651h2.71v8.129H32.516V56H46.968V48.775H40.645V40.646H51.484V29.807H56ZM21.677,54.194H10.839V50.581H21.677Zm23.484,0H34.323V50.581H45.161ZM43.355,1.807A4.525,4.525,0,0,1,47.78,5.42H45.374a7.688,7.688,0,0,1-3.422-.808l-.583-.291-.46.46a2.192,2.192,0,0,1-1.541.639H38.93a4.525,4.525,0,0,1,4.425-3.613ZM38.839,9.033V7.226h.529a3.955,3.955,0,0,0,2.324-.747,9.5,9.5,0,0,0,3.682.747h2.5V9.033a4.534,4.534,0,0,1-2.259,3.908l-.451.261v2.574l-1.806,1.2-1.806-1.2V13.2L41.1,12.94a4.533,4.533,0,0,1-2.259-3.908ZM28,1.807A4.525,4.525,0,0,1,32.425,5.42H30.019A7.688,7.688,0,0,1,26.6,4.611l-.583-.291-.46.46a2.192,2.192,0,0,1-1.541.639h-.438A4.525,4.525,0,0,1,28,1.807ZM23.484,9.033V7.226h.529a3.955,3.955,0,0,0,2.324-.747,9.5,9.5,0,0,0,3.682.747h2.5V9.033a4.534,4.534,0,0,1-2.259,3.908l-.451.261v2.574L28,16.979l-1.806-1.2V13.2l-.451-.261a4.533,4.533,0,0,1-2.259-3.908Zm1.659,8.213L28,19.151l2.857-1.905,6.05,1.815a2.693,2.693,0,0,1,1.931,2.6V28H17.161V21.656a2.693,2.693,0,0,1,1.931-2.6ZM12.645,1.807A4.525,4.525,0,0,1,17.07,5.42h-.438a2.2,2.2,0,0,1-1.542-.639l-.461-.46-.583.291a7.679,7.679,0,0,1-3.421.808H8.22a4.525,4.525,0,0,1,4.425-3.613ZM8.129,9.033V7.226h2.5a9.5,9.5,0,0,0,3.682-.747,3.957,3.957,0,0,0,2.324.747h.529V9.033A4.533,4.533,0,0,1,14.9,12.94l-.451.261v2.574l-1.806,1.2-1.806-1.2V13.2l-.451-.261A4.533,4.533,0,0,1,8.129,9.033ZM1.806,21.656a2.693,2.693,0,0,1,1.931-2.6l6.05-1.816,2.857,1.906L15.5,17.246l1.975.593a4.474,4.474,0,0,0-2.123,3.818V28H1.806ZM34.323,39.994l-.907.3-.1.514a5.365,5.365,0,0,1-.8,1.932l-.291.436.428.856-.357.358-.855-.429L31,44.253a5.359,5.359,0,0,1-1.932.8l-.514.1-.3.909h-.5l-.3-.908-.514-.1a5.349,5.349,0,0,1-1.932-.8l-.437-.291-.855.429-.357-.358.428-.856-.291-.436a5.343,5.343,0,0,1-.8-1.932l-.1-.514-.907-.3v-.5l.907-.3.1-.514a5.352,5.352,0,0,1,.8-1.932l.291-.436-.428-.857.357-.357.855.429L25,35.231a5.359,5.359,0,0,1,1.932-.8l.514-.1.3-.908h.5l.3.908.514.1a5.349,5.349,0,0,1,1.932.8l.437.291.855-.429.357.357-.428.857.291.436a5.33,5.33,0,0,1,.8,1.932l.1.514.907.3Zm15.355-1.155H36.129v-.651L34.96,37.8a7.063,7.063,0,0,0-.665-1.6l.552-1.1-2.2-2.2-1.1.552a7.117,7.117,0,0,0-1.6-.664l-.39-1.169H26.445l-.389,1.17a7.125,7.125,0,0,0-1.6.664l-1.1-.552-2.2,2.2.552,1.1a7.169,7.169,0,0,0-.665,1.6l-1.17.389v.651H6.323V29.807H49.677ZM54.194,28H40.645V21.656a4.474,4.474,0,0,0-2.123-3.818l1.975-.593,2.857,1.905,2.857-1.905,6.05,1.815a2.693,2.693,0,0,1,1.931,2.6Zm0,0",
    transform: "translate(0 0)",
    fill: color
  }));
};

/***/ }),

/***/ "GNwe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoulderBags; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ShoulderBags = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 3",
    transform: "translate(-100.548 -66.187)",
    fill: color,
    stroke: "#fff",
    strokeMiterlimit: "10",
    strokeWidth: ".076"
  }, __jsx("path", {
    "data-name": "Path 6",
    d: "M105.083 69.531l-.917.243-.848-3.195a.149.149 0 01.068-.166h0a1.343 1.343 0 01.708-.188h0a.149.149 0 01.141.111z"
  }), __jsx("path", {
    "data-name": "Path 7",
    d: "M104.167 69.774l-.917.243-.848-3.195a.149.149 0 01.068-.166h0a1.342 1.342 0 01.708-.188h0a.149.149 0 01.141.111z"
  }), __jsx("path", {
    "data-name": "Path 8",
    d: "M106.5 69.531l.917.243.848-3.195a.149.149 0 00-.068-.166h0a1.343 1.343 0 00-.708-.188h0a.149.149 0 00-.141.111z"
  }), __jsx("path", {
    "data-name": "Path 9",
    d: "M107.421 69.774l.917.243.848-3.195a.149.149 0 00-.068-.166h0a1.342 1.342 0 00-.708-.188h0a.149.149 0 00-.141.111z"
  }), __jsx("path", {
    "data-name": "Path 10",
    d: "M110.987 80.15l-.645-7.545a3.781 3.781 0 00-3.768-3.459h-.78v1.23h0v-1.23h-.78a3.781 3.781 0 00-3.768 3.459l-.646 7.545a3.407 3.407 0 003.395 3.7h3.598a3.407 3.407 0 003.395-3.7z"
  }), __jsx("path", {
    "data-name": "Path 11",
    d: "M108.494 69.668c-1.336-.669-1.426-1.652-2.7-1.654h0c-1.272 0-1.362.985-2.7 1.654l.294-.046c1.191-.519 1.271-1.282 2.406-1.283s1.215.764 2.406 1.283z"
  }), __jsx("path", {
    "data-name": "Path 12",
    d: "M105.795 77.868l.132-.006 4.385-.192.239 2.792h0a16.8 16.8 0 01-4.579.636h-.177"
  }), __jsx("path", {
    "data-name": "Path 13",
    d: "M105.788 77.868l-.132-.006-4.385-.192-.239 2.792h0a16.8 16.8 0 004.579.636h.177"
  }), __jsx("path", {
    "data-name": "Path 14",
    d: "M110.625 80.455l-.591-6.916a3.54 3.54 0 00-3.527-3.239h-1.427a3.54 3.54 0 00-3.527 3.238l-.591 6.916a3.2 3.2 0 001.393 2.92l.083-.123a3.056 3.056 0 01-1.328-2.785l.591-6.916a3.372 3.372 0 013.38-3.1h1.426a3.372 3.372 0 013.379 3.1l.591 6.916a3.056 3.056 0 01-1.328 2.785l.083.123a3.2 3.2 0 001.392-2.921z"
  }), __jsx("path", {
    "data-name": "Path 15",
    d: "M105.792 84.149v-3.008h0a25.049 25.049 0 01-4.756-.676l-.447-.039A3.568 3.568 0 00104 84.149z"
  }), __jsx("path", {
    "data-name": "Path 16",
    d: "M105.795 81.141v3.008h1.8A3.568 3.568 0 00111 80.426l-.447.039a25.083 25.083 0 01-4.758.676z"
  }), __jsx("path", {
    "data-name": "Path 17",
    d: "M105.792 81.083v2.767h1.647a3.123 3.123 0 003.112-3.389 27.2 27.2 0 01-4.757.622z"
  }), __jsx("path", {
    "data-name": "Path 18",
    d: "M105.795 83.85v-2.765h0a27.157 27.157 0 01-4.759-.622h0a3.123 3.123 0 003.112 3.389z"
  }), __jsx("rect", {
    "data-name": "Rectangle 34",
    width: "2.177",
    height: "1.086",
    rx: ".281",
    transform: "rotate(-3.21 1460.138 -1873.834)"
  }), __jsx("path", {
    "data-name": "Path 19",
    d: "M103.251 80.12h0a.158.158 0 01-.158-.158v-6.679a.158.158 0 01.158-.158h0a.158.158 0 01.158.158v6.679a.158.158 0 01-.158.158z"
  }), __jsx("path", {
    "data-name": "Rectangle 35",
    d: "M103.093 74.874h.316v1.036h-.316z"
  })));
};

/***/ }),

/***/ "HPEz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SearchWrapper */
/* unused harmony export HeaderLeftSide */
/* unused harmony export HeaderRightSide */
/* unused harmony export MainMenu */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return MobileHeaderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MobileHeaderInnerWrapper; });
/* unused harmony export SelectedType */
/* unused harmony export DropDownArrow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DrawerWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LogoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return HamburgerIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DrawerContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawerClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DrawerProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LogoutView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LoginView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return UserAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return UserDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DrawerMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DrawerMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return UserOptionMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SearchModalWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SearchModalClose; });
/* unused harmony export LanguageItem */
/* unused harmony export LangSwitcher */
/* unused harmony export Flag */
/* unused harmony export TypeIcon */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const positionAnim = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{position:fixed;opacity:1;}to{opacity:0;transition:all 0.3s ease;}"]);
const hideSearch = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{display:none;}to{display:flex;}"]);
const SearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__SearchWrapper",
  componentId: "p56on2-0"
})(["padding:5px;cursor:pointer;color:", ";svg{display:block;width:17px;height:auto;}@media only screen and (min-width:991px) and (max-width:1366px){opacity:0;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'));
const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "headerstyle__HeaderWrapper",
  componentId: "p56on2-1"
})(["display:flex;align-items:center;justify-content:space-between;position:fixed;z-index:99999;top:0;left:0;width:100%;background-color:", ";box-shadow:", ";transition:all 0.3s ease;&.home{position:absolute;background-color:transparent;box-shadow:none;}@media (min-width:1600px){padding:0px 40px;}@media (max-width:990px){display:none;}.headerSearch{@media only screen and (min-width:991px) and (max-width:1200px){input{width:80%;}.buttonText{display:none;}}}&.unSticky{animation:", " 0.3s ease;.minimal-wrap,.headerSearch{animation:", " 0.3s ease;display:none;}.banner-search{width:650px;}@media (max-width:1366px){.headerSearc,.banner-search{margin:0 5%;}}}&.sticky{background-color:", ";position:fixed;box-shadow:", ";.modern-wrap,.banner-search{animation:", " 0.3s ease;display:none;}.minimal-wrap{animation:", " 0.3s ease;display:flex;width:75%;}@media (max-width:1400px){padding-top:20px;padding-bottom:20px;}@media (max-width:1366px){.minimal-wrap{margin:0 5%;}}.headerSearch{display:flex;svg{height:30px;width:30px;padding-left:15px;}form{background-color:", ";input{background-color:", ";}}@media only screen and (min-width:991px) and (max-width:1200px){.buttonText{display:none;}}}}.popover-wrapper{.popover-content{padding:20px 0;.menu-item{a{margin:0;padding:12px 30px;border-bottom:1px solid ", ";cursor:pointer;white-space:nowrap;&:last-child{border-bottom:0;}&:hover{color:", ";}&.current-page{color:", ";}.menu-item-icon{margin-right:15px;}}}}}.headerSearch{input{@media (max-width:1400px){padding:0 15px;font-size:", "px;}@media only screen and (min-width:991px) and (max-width:1200px){}}button{@media (max-width:1400px){padding:0 15px;font-size:", "px;}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)'), positionAnim, hideSearch, Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)'), hideSearch, hideSearch, Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.400', '#F3F3F3'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.400', '#F3F3F3'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'));
const HeaderLeftSide = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__HeaderLeftSide",
  componentId: "p56on2-2"
})(["display:flex;align-items:center;justify-content:space-between;flex-shrink:0;"]);
const HeaderRightSide = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__HeaderRightSide",
  componentId: "p56on2-3"
})(["display:flex;align-items:center;flex-shrink:0;.menu-icon{min-width:14px;margin-right:7px;}.menu-item{a{font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.2em;display:block;transition:0.15s ease-in-out;display:flex;align-items:center;margin-right:45px;@media (max-width:1400px){margin-right:35px;font-size:", "px;}&:hover{color:", ";}&.current-page{color:", ";}}}.user-pages-dropdown{.popover-handler{width:38px;height:38px;border-radius:50%;display:block;overflow:hidden;img{width:100%;height:auto;display:block;}}.popover-content{.inner-wrap{}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'));
const MainMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__MainMenu",
  componentId: "p56on2-4"
})(["display:flex;align-items:center;.popover-wrapper{.popover-content{.menu-item{font-family:", ";a{font-size:", "px;font-weight:", ";color:", ";line-height:1.2em;display:block;padding:15px 30px;border-radius:", ";transition:0.15s ease-in-out;display:flex;align-items:center;@media (max-width:1400px){margin-right:10px;font-size:", "px;}@media only screen and (min-width:991px) and (max-width:1200px){padding:15px 30px;}&:hover{color:", ";}&.current-page{color:", ";background-color:", ";}}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'));
const MobileHeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__MobileHeaderWrapper",
  componentId: "p56on2-5"
})(["@media (min-width:991px){.desktop{display:none;}}"]);
const MobileHeaderInnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__MobileHeaderInnerWrapper",
  componentId: "p56on2-6"
})(["display:flex;align-items:center;justify-content:space-between;padding:0px 15px;position:fixed;width:100%;top:0;left:0;z-index:999;transition:0.25s ease-in-out;&.home{position:absolute;background-color:transparent;box-shadow:none;}&.unSticky:not(.home){background-color:", ";box-shadow:", ";}&.sticky{position:fixed;background-color:", ";box-shadow:", ";@media only screen and (min-width:991px) and (max-width:1366px){.searchIconWrapper{opacity:1;}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)'));
const SelectedType = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "headerstyle__SelectedType",
  componentId: "p56on2-7"
})(["width:auto;height:38px;display:flex;align-items:center;background-color:", ";border:1px solid ", ";padding-top:0;padding-bottom:0;padding-left:15px;padding-right:15px;border-radius:", ";outline:0;min-width:150px;cursor:pointer;span{display:flex;align-items:center;font-family:", ";font-size:", "px;font-weight:", ";color:", ";text-decoration:none;&:first-child{margin-right:auto;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'));
const DropDownArrow = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "headerstyle__DropDownArrow",
  componentId: "p56on2-8"
})(["width:12px;margin-left:16px;"]);
const DrawerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__DrawerWrapper",
  componentId: "p56on2-9"
})([""]);
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__LogoWrapper",
  componentId: "p56on2-10"
})(["margin-left:auto;margin-right:auto;img{display:block;}"]);
const HamburgerIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__HamburgerIcon",
  componentId: "p56on2-11"
})(["width:26px;cursor:pointer;display:block;position:relative;> span{display:block;background-color:", ";border-radius:", ";height:2px;margin-bottom:6px;transition:0.2s ease-in-out;&:nth-child(1){width:26px;}&:nth-child(2){width:12px;}&:nth-child(3){width:22px;}&:last-child{margin-bottom:0;}}&:hover{> span{&:nth-child(1){width:12px;}&:nth-child(2){width:22px;}&:nth-child(3){width:26px;}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px'));
const DrawerContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__DrawerContentWrapper",
  componentId: "p56on2-12"
})(["padding-top:60px;"]);
const DrawerClose = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__DrawerClose",
  componentId: "p56on2-13"
})(["display:block;position:absolute;left:35px;top:14px;color:", ";cursor:pointer;padding:10px;z-index:1;svg{display:block;width:12px;height:auto;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c'));
const DrawerProfile = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__DrawerProfile",
  componentId: "p56on2-14"
})(["background-color:", ";padding:45px;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#F7F7F7'));
const LogoutView = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__LogoutView",
  componentId: "p56on2-15"
})(["display:flex;align-items:center;justify-content:center;.sign_in{border:0;padding-left:0;padding-right:25px;}.sign_in,.sign_up{height:36px;padding-left:15px;padding-right:15px;}"]);
const LoginView = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__LoginView",
  componentId: "p56on2-16"
})(["display:flex;align-items:center;"]);
const UserAvatar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__UserAvatar",
  componentId: "p56on2-17"
})(["width:50px;height:50px;flex-shrink:0;display:block;border-radius:50%;overflow:hidden;margin-right:15px;img{width:100%;height:auto;display:block;}"]);
const UserDetails = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__UserDetails",
  componentId: "p56on2-18"
})(["h3{font-size:calc(", " - 1px);font-weight:", ";color:", ";margin-bottom:10px;line-height:1.2;}span{display:block;font-size:", "px;font-weight:", ";color:", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base' + 'px', '15px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.xs', '12'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'));
const DrawerMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__DrawerMenu",
  componentId: "p56on2-19"
})(["padding:40px 0;"]);
const DrawerMenuItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__DrawerMenuItem",
  componentId: "p56on2-20"
})(["&:last-child{.drawer_menu_item{margin-bottom:0;}}.drawer_menu_item{a,.logoutBtn{display:block;padding:5px 45px;font-size:calc(", " - 1px);font-weight:", ";color:", ";margin-bottom:19px;position:relative;transition:0.15s ease-in-out;&:hover{color:", ";}&:before{content:'';display:block;position:absolute;top:0;left:0;width:5px;height:100%;background:transparent;}&.current-page{color:", ";font-weight:", ";&:before{background-color:", ";}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'));
const UserOptionMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__UserOptionMenu",
  componentId: "p56on2-21"
})(["padding:45px 0;border-top:1px solid ", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.700', '#e6e6e6'));
const SearchModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__SearchModalWrapper",
  componentId: "p56on2-22"
})(["padding-top:15px;padding-bottom:15px;background-color:", ";display:flex;width:100%;.header-modal-search{width:calc(100% - 60px);@media (max-width:420px){input{width:150px;}}button{background:transparent;color:", ";padding-left:15px;padding-right:15px;}input{color:", ";padding-left:5px;padding-right:5px;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'));
const SearchModalClose = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "headerstyle__SearchModalClose",
  componentId: "p56on2-23"
})(["border:0;background:transparent;display:block;padding:0 15px;color:", ";display:flex;align-items:center;justify-content:center;cursor:pointer;svg{display:block;width:20px;height:auto;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'));
const LanguageItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "headerstyle__LanguageItem",
  componentId: "p56on2-24"
})(["width:100%;font-size:", "px;font-weight:", ";color:", ";line-height:1.2em;display:block;padding:15px 30px;border-radius:", ";transition:0.15s ease-in-out;display:flex;align-items:center;border:0;border-bottom:1px solid ", ";border-radius:0;background-color:transparent;outline:0;cursor:pointer;&:last-child{border-bottom:0;}@media (max-width:1400px){margin-right:10px;font-size:", "px;}@media only screen and (min-width:991px) and (max-width:1200px){padding:15px 30px;}span{box-shadow:0 0 3px rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;border-radius:2px;overflow:hidden;margin-right:15px;svg{display:block;width:20px;height:auto;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'));
const LangSwitcher = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__LangSwitcher",
  componentId: "p56on2-25"
})(["margin-right:20px;@media (max-width:767px){margin-right:10px;}.popover-wrapper.right{.popover-content{padding:15px 0;}}"]);
const Flag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__Flag",
  componentId: "p56on2-26"
})(["margin-right:7px;box-shadow:0 0 3px rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;border-radius:2px;overflow:hidden;svg{width:20px;height:auto;}"]);
const TypeIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "headerstyle__TypeIcon",
  componentId: "p56on2-27"
})(["margin-right:7px;display:flex;align-items:center;justify-content:center;min-width:16px;"]);
/* harmony default export */ __webpack_exports__["r"] = (HeaderWrapper);

/***/ }),

/***/ "IGqs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GET_TYPE; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

/* query getCategories($searchText: String, $offset: Int) {
  categories(searchText: $searchText, offset: $offset) {
{limit, offset, searchText}: ICommonPaginationArgs,
 */

const GET_TYPE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query Types {
    types {
      totalCount
        items{
          id
          name
          slug
          image
          icon
          home_title
          home_subtitle
          meta_title
          meta_keyword
          meta_description
        }
    }
  }
`;

/***/ }),

/***/ "IWjl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OralCare; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const OralCare = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    fill: color
  }, __jsx("path", {
    "data-name": "Path 65",
    d: "M3.118 11.024a2.267 2.267 0 01.142 1.454l-.027.333c-.127 1.655.111 3.807 1.157 4.887a.463.463 0 00.1.046.252.252 0 00.317-.127.255.255 0 00.017-.15v-.02c-.017-.157-.385-3.87 1.27-5.887a1.035 1.035 0 011.6.009c1.623 2.025 1.257 5.719 1.241 5.875v.02a.255.255 0 00.017.15.252.252 0 00.317.127.388.388 0 00.111-.049c1.043-1.078 1.281-3.231 1.154-4.887a35.384 35.384 0 00-.027-.333 2.268 2.268 0 01.142-1.455 3.792 3.792 0 011.517-1.087 2.221 2.221 0 001-1.522 3.819 3.819 0 00-.16-2.192c-.555-1.388-1.827-1.924-3.5-1.466a4.521 4.521 0 00-1.368.622c-.2.126-.409.253-.666.384a2.761 2.761 0 001.566.237.248.248 0 11.1.486 3.837 3.837 0 01-2.355-.493 10.454 10.454 0 01-.478-.265 7.466 7.466 0 00-2.338-1.014A2.73 2.73 0 00.698 6.581a2.908 2.908 0 00.92 3.343 3.784 3.784 0 011.5 1.1z"
  }), __jsx("path", {
    "data-name": "Path 66",
    d: "M17.256.93H6.409L6.036.558A1.888 1.888 0 004.693.003H.664a.666.666 0 00-.666.666v1.889a.25.25 0 00.5 0V.667A.165.165 0 01.663.502h.1v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.497h.222v2.087a.25.25 0 10.5 0V.507a1.4 1.4 0 01.823.4l.792.789a1.888 1.888 0 001.343.555h9.441a.666.666 0 100-1.323z"
  })));
};

/***/ }),

/***/ "J7Kp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SearchIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 14 14"
  }, __jsx("path", {
    d: "M14.771,12.752,11.32,9.286a5.519,5.519,0,0,0,1.374-3.634A5.763,5.763,0,0,0,6.839,0,5.763,5.763,0,0,0,.984,5.652,5.763,5.763,0,0,0,6.839,11.3a5.936,5.936,0,0,0,3.354-1.023l3.477,3.492a.783.783,0,0,0,1.08.02A.72.72,0,0,0,14.771,12.752ZM6.839,1.475a4.259,4.259,0,0,1,4.327,4.178A4.259,4.259,0,0,1,6.839,9.83,4.259,4.259,0,0,1,2.511,5.652,4.259,4.259,0,0,1,6.839,1.475Z",
    transform: "translate(-0.984)",
    fill: color
  }));
};

/***/ }),

/***/ "JMIQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const OptionIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 3.5 14"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_md-more (1)",
    d: "M219.5,97.75a1.75,1.75,0,1,0-1.75,1.75A1.755,1.755,0,0,0,219.5,97.75Zm0,10.5a1.75,1.75,0,1,0-1.75,1.75A1.755,1.755,0,0,0,219.5,108.25Zm0-5.25a1.75,1.75,0,1,0-1.75,1.75A1.755,1.755,0,0,0,219.5,103Z",
    transform: "translate(-216 -96)",
    fill: color
  }));
};

/***/ }),

/***/ "JMMK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const InboxIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 13.867 12.133"
  }, __jsx("g", {
    "data-name": "Group 2932",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 325",
    d: "M7,3V0H5V3H4L6,5.5,8,3Z",
    transform: "translate(1 4)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 326",
    d: "M11.267,1H9.533v.867H10.66L12.913,8.8H9.533v1.733h-5.2V8.8H.953L3.207,1.867H4.333V1H2.6L0,8.8v4.333H13.867V8.8Z",
    transform: "translate(0 -1)",
    fill: color
  })));
};

/***/ }),

/***/ "Jhtu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pants; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Pants = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    fill: color
  }, __jsx("path", {
    "data-name": "Path 102",
    d: "M7.999 1.165a10.721 10.721 0 00-.139-.71L7.797.187A.243.243 0 007.561 0H.553a.243.243 0 00-.236.187L.253.455c-.056.235-.1.472-.139.71z"
  }), __jsx("path", {
    "data-name": "Path 103",
    d: "M.018 2.048a9.93 9.93 0 00-.015.828l.379 13.479a.243.243 0 00.242.236H.86v1.155a.254.254 0 00.254.254h1.288a.254.254 0 00.254-.254v-1.155h.172a.243.243 0 00.242-.225l.833-11.228a.15.15 0 01.3 0l.825 11.228a.243.243 0 00.242.225h.233v1.155a.254.254 0 00.254.254h1.288a.254.254 0 00.254-.254v-1.155h.179a.243.243 0 00.242-.236L8.1 2.876c.008-.276 0-.553-.015-.828z"
  })));
};

/***/ }),

/***/ "JsJ+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Handbag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Handbag = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    version: "1.1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 511.999 511.999",
    width: width,
    height: height,
    fill: color
  }, __jsx("g", null, __jsx("g", null, __jsx("path", {
    d: "M496.619,428.582l-51.45-221.82h-62.616v48.827H393.1v30.001h-51.096v-30.001h10.547v-48.827H159.448v48.827h10.547 v30.001H118.9v-30.001h10.547v-48.827H66.83l-51.45,221.82c-4.715,20.332,0.026,41.364,13.011,57.705 c12.985,16.341,32.401,25.712,53.272,25.712h348.672c20.871,0,40.289-9.372,53.273-25.712 C496.593,469.946,501.335,448.914,496.619,428.582z M298.917,285.591H271v23.18h-30.001v-23.18h-27.917V255.59h85.836V285.591z"
  }))), __jsx("g", null, __jsx("g", null, __jsx("path", {
    d: "M255.999,0c-69.781,0-126.553,56.772-126.553,126.552v80.21h30.001v-80.21c0-53.239,43.313-96.551,96.552-96.551 c53.238,0,96.552,43.313,96.552,96.551v80.21h30.001v-80.21C382.552,56.772,325.781,0,255.999,0z"
  }))), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null), __jsx("g", null));
};

/***/ }),

/***/ "JwyM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarCategoryIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SidebarCategoryIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12.958 13"
  }, __jsx("path", {
    "data-name": "Path 321",
    d: "M1.015,10.3,1,4.388a.4.4,0,0,1,.564-.373l5.379,2.3a.4.4,0,0,1,.246.371L7.2,12.594a.4.4,0,0,1-.564.373l-5.379-2.3A.4.4,0,0,1,1.015,10.3Zm12.323-5.63L8.375,6.816l.013,5.468,4.963-2.15-.013-5.468m.2-.713a.405.405,0,0,1,.405.4l.014,5.908a.4.4,0,0,1-.244.372L8.347,12.963a.4.4,0,0,1-.565-.37L7.768,6.684a.4.4,0,0,1,.244-.372l5.368-2.325a.4.4,0,0,1,.16-.034ZM7.44.626l-5.149,2.3L7.451,5.2,12.6,2.9,7.44.626m0-.626A.4.4,0,0,1,7.6.034l5.659,2.495a.4.4,0,0,1,0,.74L7.617,5.79a.4.4,0,0,1-.328,0L1.63,3.3a.4.4,0,0,1,0-.74L7.275.035A.4.4,0,0,1,7.439,0Z",
    transform: "translate(-1.001)",
    fill: color
  }));
};

/***/ }),

/***/ "KBQx":
/***/ (function(module, exports) {



/***/ }),

/***/ "KKLf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const UploadIcon = ({
  color = 'currentColor',
  width = '41px',
  height = '30px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 40.909 30"
  }, __jsx("g", {
    transform: "translate(0 -73.091)"
  }, __jsx("path", {
    "data-name": "Path 2125",
    d: "M39.129,89.827A8.064,8.064,0,0,0,34.58,86.94,5.446,5.446,0,0,0,30,78.546a5.207,5.207,0,0,0-3.537,1.321,10.921,10.921,0,0,0-10.1-6.776,10.511,10.511,0,0,0-7.713,3.2A10.508,10.508,0,0,0,5.454,84q0,.277.043.916A9.528,9.528,0,0,0,0,93.546a9.193,9.193,0,0,0,2.8,6.743,9.191,9.191,0,0,0,6.744,2.8H32.728a8.172,8.172,0,0,0,6.4-13.264Zm-12.06-.575a.656.656,0,0,1-.479.2H21.818v7.5a.691.691,0,0,1-.681.681H17.045a.691.691,0,0,1-.682-.681v-7.5H11.59a.655.655,0,0,1-.681-.681.8.8,0,0,1,.213-.512L18.6,80.783a.722.722,0,0,1,.98,0l7.5,7.5a.663.663,0,0,1,.191.49A.656.656,0,0,1,27.07,89.252Z",
    transform: "translate(0)",
    fill: "#e6e6e6"
  })));
};

/***/ }),

/***/ "KVte":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroceryIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const GroceryIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 14 16"
  }, __jsx("g", {
    "data-name": "Group 69",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 112",
    d: "M302.952,415.83a.326.326,0,0,0,.1.016.3.3,0,0,0,.287-.207.533.533,0,0,1,.675-.332,1.139,1.139,0,0,0,1.443-.71.3.3,0,1,0-.573-.2.533.533,0,0,1-.675.332,1.142,1.142,0,0,0-1.443.712.3.3,0,0,0,.189.384Zm0,0",
    transform: "translate(-293.38 -408.637)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 113",
    d: "M304.847,410.255a.31.31,0,0,0,.1.015.3.3,0,0,0,.287-.2.532.532,0,0,1,.675-.332,1.138,1.138,0,0,0,1.442-.712.3.3,0,1,0-.572-.194.533.533,0,0,1-.675.332,1.139,1.139,0,0,0-1.443.712.3.3,0,0,0,.189.384Zm0,0",
    transform: "translate(-294.558 -405.009)",
    fill: color
  }), __jsx("g", {
    "data-name": "Group 68"
  }, __jsx("path", {
    "data-name": "Path 114",
    d: "M306.737,404.967a.312.312,0,0,0,.1.015.3.3,0,0,0,.287-.205.4.4,0,0,1,.5-.245,1,1,0,0,0,1.266-.625.3.3,0,1,0-.573-.194.387.387,0,0,1-.2.226.393.393,0,0,1-.3.019,1,1,0,0,0-1.266.623.3.3,0,0,0,.189.385Zm0,0",
    transform: "translate(-295.734 -401.531)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 115",
    d: "M292,405.326a18.15,18.15,0,0,0,1.006-5.3,1.918,1.918,0,0,0-.582-1.376,1.4,1.4,0,0,0-1.6-.212c-.93.433-1.6,1.711-2.128,2.736q-.046.089-.091.173a1.664,1.664,0,0,0-.986-1.129,1.42,1.42,0,0,0-1.153-1.038.631.631,0,0,0-.024-.088,1.048,1.048,0,0,0-.889-.686,1.133,1.133,0,0,0-.662.122,1.209,1.209,0,0,0-.55-.129,1.127,1.127,0,0,0-1.114.8,1.3,1.3,0,0,0-1.03,1.207,1.443,1.443,0,0,0-1.167,1.367,1.3,1.3,0,0,0,.106.509,1.036,1.036,0,0,0-.273.7,1.025,1.025,0,0,0,.1.441,1.716,1.716,0,0,0-1.239-.542.282.282,0,1,0,.009.563.288.288,0,0,0,.03,0,1.114,1.114,0,0,1,.759.377,2.148,2.148,0,0,0-1.365.813,1.315,1.315,0,0,0-.076,1.034.442.442,0,0,0-.076.281l.529,6.812a1.705,1.705,0,0,0,1.771,1.523h8.733a1.7,1.7,0,0,0,1.77-1.518l.542-7.053a.347.347,0,0,0-.111-.274.416.416,0,0,0-.242-.109Zm-3.14-3.173c.123-.208.257-.466.4-.74.468-.9,1.108-2.129,1.849-2.476a.722.722,0,0,1,.869.1,1.386,1.386,0,0,1,.407.968,17.688,17.688,0,0,1-1,5.209c-.02.059-.065.177-.129.341l-.53.213-.033.015a1.054,1.054,0,0,1-.992,0l-.222-.119a1.736,1.736,0,0,0-.828-.208,1.87,1.87,0,0,0-.234.017,1.693,1.693,0,0,0-.614.191l-.222.121a1.055,1.055,0,0,1-.4.112c.006-.022.015-.043.021-.063q.13-.4.277-.788c.035-.1.073-.19.109-.285.082-.206.167-.411.254-.613.038-.087.075-.173.113-.26a17.883,17.883,0,0,1,.9-1.74Zm-3.6,3.332c-.033.006-.068.011-.1.019a1.722,1.722,0,0,0-.3.087l-.061-.247c.09.007.179.014.263.014a2.56,2.56,0,0,0,1.481-.47,4.033,4.033,0,0,1,.431-.242c-.029.073-.056.146-.084.22-.02.054-.042.1-.061.158q-.139.376-.26.759l-.208-.113a1.742,1.742,0,0,0-.826-.208,1.694,1.694,0,0,0-.223.017c-.017,0-.034.005-.052.007Zm-.494-3.806a.131.131,0,0,1-.153-.089.118.118,0,0,1,.1-.138l1.745-.344a.13.13,0,0,1,.126.092.109.109,0,0,1-.018.088.134.134,0,0,1-.08.051Zm.123,1.143c.036-.043.071-.084.1-.125a.523.523,0,0,0,.065-.091.551.551,0,0,0,.058-.419l1.3-.257a.622.622,0,0,0,.033.1.661.661,0,0,0,.307.312l.147.071.126.062.062.03c.036.018.071.038.108.059l.091.053c.035.022.068.047.1.07s.058.045.085.069.058.053.085.082a.977.977,0,0,1,.132.171c-.132.263-.257.532-.377.8-.018.043-.038.082-.056.125a3.293,3.293,0,0,0-1.077.487,1.975,1.975,0,0,1-1.524.336l-.19-.784a1.213,1.213,0,0,1,.42-1.159Zm-1.843,7a.283.283,0,1,1,0,.564h-2.178a.283.283,0,1,1,0-.564Zm-2.178,1.126h2.8a.283.283,0,1,1,0,.564h-2.8a.283.283,0,1,1,0-.564Zm.837-8.4.2-.153-.132-.206a.778.778,0,0,1-.128-.424.888.888,0,0,1,.9-.847l.378-.015-.088-.333a.615.615,0,0,1-.023-.162.733.733,0,0,1,.713-.7l.287-.02v-.279a.5.5,0,0,1,.523-.458.537.537,0,0,1,.346.124l.219.179.21-.187a.454.454,0,0,1,.363-.111.437.437,0,0,1,.365.286.339.339,0,0,1,.015.15l-.037.315h.351a.825.825,0,0,1,.851.719l.015.186.193.061a1.085,1.085,0,0,1,.795,1.038.946.946,0,0,1-.2.558,3.375,3.375,0,0,0-.621-.358c-.049-.023-.1-.045-.143-.07a.064.064,0,0,1-.037-.048.16.16,0,0,1,.044-.125.562.562,0,0,0,.146-.52l-.038-.155a.678.678,0,0,0-.789-.458l-.083.017h0l-.913.181-.89.176a.6.6,0,0,0-.506.714l.018.077h0l.018.076a.622.622,0,0,0,.386.422.18.18,0,0,1,.1.091c.007.021,0,.032-.015.058s-.064.076-.1.115-.07.081-.107.124l-.032.041c-.027.033-.053.066-.08.1l-.039.054c-.024.034-.047.069-.07.1-.014.019-.026.039-.038.059a1.2,1.2,0,0,0-.065.125l-.028.052a1.551,1.551,0,0,0-.071.194.26.26,0,0,1-.006.032,1.375,1.375,0,0,0-.035.18c0,.025,0,.051-.006.077s-.008.065-.008.1l-.026-.03-.063-.069c-.046-.052-.092-.1-.138-.147l-.068-.066c-.049-.044-.1-.085-.147-.125l-.054-.044a2.1,2.1,0,0,0-.2-.128c-.02-.011-.041-.02-.061-.03-.049-.025-.1-.047-.146-.066-.028-.011-.055-.019-.081-.027a1.3,1.3,0,0,0-.134-.036c-.027-.006-.055-.012-.082-.017a1.217,1.217,0,0,0-.17-.015l-.039,0a1.736,1.736,0,0,0-.88.268.52.52,0,0,1-.042-.2.528.528,0,0,1,.222-.424Zm-2,2.338a1.582,1.582,0,0,1,1.006-.539,1.735,1.735,0,0,0,.7-.362c.086-.074.168-.14.247-.2s.14-.1.205-.136l.007-.006a1.33,1.33,0,0,1,.363-.153l.014,0a.745.745,0,0,1,.161-.019c.392,0,.811.353,1.247,1.051a1.958,1.958,0,0,1,.206,1.375l-.07-.008a1.04,1.04,0,0,1-.316-.1l-.222-.121a1.752,1.752,0,0,0-.828-.208,1.954,1.954,0,0,0-.848.208l-.108.059a1.3,1.3,0,0,1-1.22,0l-.419-.228a.566.566,0,0,0-.175-.059.735.735,0,0,1,.051-.548Zm4.585,7.747h-3.423a.282.282,0,1,1,0-.562h3.423a.283.283,0,1,1,0,.562Zm1.867,0h-.623a.282.282,0,1,1,0-.562h.623a.283.283,0,1,1,0,.562Zm0,0",
    transform: "translate(-279.002 -398.28)",
    fill: color
  }))));
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

/***/ "L4Ub":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const UserIcon = ({
  width = '48px',
  height = '48px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 48 48"
  }, __jsx("g", {
    "data-name": "Group 2995",
    transform: "translate(-612 -752)"
  }, __jsx("path", {
    "data-name": "Path 3647",
    d: "M20,0h8A20,20,0,0,1,48,20v8A20,20,0,0,1,28,48H20A20,20,0,0,1,0,28V20A20,20,0,0,1,20,0Z",
    transform: "translate(612 752)",
    fill: "#d1f9f5"
  }), __jsx("path", {
    "data-name": "Path 3642",
    d: "M-707.226-726.091a.506.506,0,0,1-.23.677.506.506,0,0,1-.677-.23,11.921,11.921,0,0,1-.919-2.574,12.016,12.016,0,0,1-.311-2.719,11.963,11.963,0,0,1,3.515-8.485,11.962,11.962,0,0,1,8.485-3.515,11.962,11.962,0,0,1,8.485,3.515,11.963,11.963,0,0,1,3.515,8.485,12.016,12.016,0,0,1-.311,2.719,11.929,11.929,0,0,1-.919,2.574.506.506,0,0,1-.677.23.506.506,0,0,1-.23-.677,10.888,10.888,0,0,0,.84-2.352,11.01,11.01,0,0,0,.283-2.493A10.952,10.952,0,0,0-689.6-738.7a10.952,10.952,0,0,0-7.768-3.218,10.952,10.952,0,0,0-7.768,3.218,10.952,10.952,0,0,0-3.218,7.768,11.017,11.017,0,0,0,.283,2.493,10.9,10.9,0,0,0,.84,2.352Zm19.154,2.746a12.05,12.05,0,0,1-4.152,3.254,11.947,11.947,0,0,1-5.139,1.155,11.947,11.947,0,0,1-5.139-1.155,12.051,12.051,0,0,1-4.16-3.264.5.5,0,0,1-.109-.386h0a3.522,3.522,0,0,1,1.1-2.245,6.632,6.632,0,0,1,2.253-1.223c.4-.146.832-.281,1.256-.412a11.4,11.4,0,0,0,1.621-.582l.064-.035a.85.85,0,0,0,.408-.456.62.62,0,0,0-.045-.475l-.01-.021-.009-.016-.014-.026c-.067-.114-.163-.254-.267-.406a6.317,6.317,0,0,1-.928-1.8,1.354,1.354,0,0,1-.656-.588,3.944,3.944,0,0,1-.424-1.009,3.77,3.77,0,0,1-.116-.57c0-.005,0-.01,0-.016a1.387,1.387,0,0,1,0-.268.947.947,0,0,1,.3-.627.989.989,0,0,1,.43-.23l-.015-.432a4.265,4.265,0,0,1,2.5-4.277,4.8,4.8,0,0,1,1.967-.414,4.8,4.8,0,0,1,1.967.415,4.264,4.264,0,0,1,2.5,4.277v0h0l-.015.43a.987.987,0,0,1,.431.231.947.947,0,0,1,.295.625,1.409,1.409,0,0,1,0,.285l0,.016a3.824,3.824,0,0,1-.114.558,3.921,3.921,0,0,1-.423,1.007,1.353,1.353,0,0,1-.656.587,6.321,6.321,0,0,1-.929,1.8c-.11.162-.212.312-.279.428l-.018.035a.626.626,0,0,0-.045.479.85.85,0,0,0,.409.457l.064.033a11.415,11.415,0,0,0,1.625.584c.423.131.857.265,1.252.41a6.631,6.631,0,0,1,2.253,1.223,3.521,3.521,0,0,1,1.1,2.245.5.5,0,0,1-.117.4Zm-4.583,2.339a11.025,11.025,0,0,0,3.664-2.814,2.462,2.462,0,0,0-.747-1.422,5.756,5.756,0,0,0-1.916-1.017c-.4-.146-.8-.271-1.2-.394a12.03,12.03,0,0,1-1.783-.647c-.028-.014-.065-.035-.111-.061a1.843,1.843,0,0,1-.868-1.023,1.62,1.62,0,0,1,.1-1.243c.009-.018.024-.045.046-.082.1-.176.206-.33.319-.495a5.142,5.142,0,0,0,.874-1.816h0l.005-.022a.505.505,0,0,1,.6-.357c.012-.008.026-.076.082-.164a2.907,2.907,0,0,0,.3-.737,2.755,2.755,0,0,0,.083-.4v-.013a.49.49,0,0,0,0-.062h-.021a.853.853,0,0,0-.164,0,.5.5,0,0,1-.075,0,.505.505,0,0,1-.487-.523l.032-.917h0a3.3,3.3,0,0,0-1.905-3.321,3.788,3.788,0,0,0-1.551-.327,3.79,3.79,0,0,0-1.551.327,3.3,3.3,0,0,0-1.907,3.323l.031.91a.532.532,0,0,1,0,.071.505.505,0,0,1-.55.456.864.864,0,0,0-.173,0h-.022a.5.5,0,0,0,0,.053v.009a2.721,2.721,0,0,0,.084.408,2.922,2.922,0,0,0,.3.74c.056.088.068.157.08.164h0a.506.506,0,0,1,.606.38,5.138,5.138,0,0,0,.873,1.813c.107.158.207.3.3.469l.017.027.03.053.017.031a1.619,1.619,0,0,1,.1,1.243,1.842,1.842,0,0,1-.863,1.022c-.036.021-.075.042-.116.062a11.985,11.985,0,0,1-1.779.646c-.4.123-.808.25-1.2.4a5.758,5.758,0,0,0-1.917,1.017,2.462,2.462,0,0,0-.747,1.422,11.027,11.027,0,0,0,3.664,2.814,10.94,10.94,0,0,0,4.708,1.056,10.94,10.94,0,0,0,4.708-1.056Z",
    transform: "translate(1333.363 1506.936)",
    fill: "#27c7b7"
  })));
};

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

/***/ "LfNW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartPhone; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SmartPhone = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 15.602 24"
  }, __jsx("g", {
    transform: "translate(0)"
  }, __jsx("path", {
    "data-name": "Path 111",
    d: "M67.566,18.7V.808A.808.808,0,0,0,66.757,0H52.772a.808.808,0,0,0-.808.808V18.7h15.6Zm-7.8-4.449a.848.848,0,1,1,.848-.848A.848.848,0,0,1,59.765,14.247Zm2.844-2.267a.647.647,0,0,1-.914,0,2.728,2.728,0,0,0-3.859,0,.647.647,0,0,1-.915-.914,4.021,4.021,0,0,1,5.688,0A.646.646,0,0,1,62.609,11.98ZM54.991,9.134a6.75,6.75,0,0,1,9.548,0,.647.647,0,1,1-.915.914,5.457,5.457,0,0,0-7.719,0,.647.647,0,0,1-.915-.914Z",
    transform: "translate(-51.964)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 112",
    d: "M51.964,247.371v3.2a.808.808,0,0,0,.808.808H66.757a.808.808,0,0,0,.808-.808v-3.2Zm8.5,2.289h-1.4a.647.647,0,1,1,0-1.293h1.4a.647.647,0,1,1,0,1.293Z",
    transform: "translate(-51.964 -227.381)",
    fill: color
  })));
};

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

/***/ "M0iK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrowDown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ArrowDown = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 11.996 12"
  }, __jsx("path", {
    "data-name": "Path 2462",
    d: "M18.276,12.1,12.7,6.524a.424.424,0,0,0-.6,0L6.524,12.1a.424.424,0,0,0,0,.6.424.424,0,0,0,.6,0l4.854-4.854V17.977a.423.423,0,1,0,.847,0V7.846L17.677,12.7a.424.424,0,0,0,.6,0A.434.434,0,0,0,18.276,12.1Z",
    transform: "translate(18.396 18.4) rotate(180)",
    fill: color
  }));
};

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

/***/ "Nm2X":
/***/ (function(module, exports) {



/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "OQAR":
/***/ (function(module, exports) {



/***/ }),

/***/ "OYId":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ILFlag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ILFlag = ({
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480",
    width: width,
    height: height
  }, __jsx("defs", null, __jsx("clipPath", {
    id: "il-a"
  }, __jsx("path", {
    fillOpacity: ".7",
    d: "M-87.6 0H595v512H-87.6z"
  }))), __jsx("g", {
    fillRule: "evenodd",
    clipPath: "url(#il-a)",
    transform: "translate(82.1) scale(.94)"
  }, __jsx("path", {
    fill: "#fff",
    d: "M619.4 512H-112V0h731.4z"
  }), __jsx("path", {
    fill: "#00c",
    d: "M619.4 115.2H-112V48h731.4zm0 350.5H-112v-67.2h731.4zm-483-275l110.1 191.6L359 191.6l-222.6-.8z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M225.8 317.8l20.9 35.5 21.4-35.3-42.4-.2z"
  }), __jsx("path", {
    fill: "#00c",
    d: "M136 320.6L246.2 129l112.4 190.8-222.6.8z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M225.8 191.6l20.9-35.5 21.4 35.4-42.4.1zM182 271.1l-21.7 36 41-.1-19.3-36zm-21.3-66.5l41.2.3-19.8 36.3-21.4-36.6zm151.2 67l20.9 35.5-41.7-.5 20.8-35zm20.5-67l-41.2.3 19.8 36.3 21.4-36.6zm-114.3 0L189.7 256l28.8 50.3 52.8 1.2 32-51.5-29.6-52-55.6.5z"
  })));
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

/***/ "OfaO":
/***/ (function(module, exports) {



/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Ou8F":
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"Zuhause\",\"nav.grocery\":\"Lebensmittelgeschäft\",\"nav.makeup\":\"Bilden\",\"nav.bags\":\"Taschen\",\"nav.clothing\":\"Kleidung\",\"nav.furniture\":\"Möbel\",\"nav.book\":\"Buch\",\"nav.medicine\":\"Medizin\",\"nav.foods\":\"Lebensmittel\",\"nav.terms_and_services\":\"Nutzungsbedingungen\",\"nav.privacy_policy\":\"Datenschutz-Bestimmungen\",\"nav.offer\":\"Angebot\",\"nav.help\":\"Brauchen Sie Hilfe\",\"nav.profile\":\"Profil\",\"nav.checkout\":\"Auschecken\",\"nav.order_received\":\"Rechnung bestellen\",\"nav.logout\":\"Ausloggen\",\"nav.login\":\"Anmeldung\",\"nav.order\":\"Deine Bestellung\",\"groceriesTitle\":\"Lebensmittel in {minute} Minuten geliefert\",\"groceriesSubTitle\":\"Holen Sie sich den ganzen Tag über gesunde Lebensmittel und Snacks vor Ihre Haustür\",\"makeupTitle\":\"Eingebrannte und importierte Make-ups\",\"makeupSubTitle\":\"Der einfachste und günstigste Weg, um Ihre Marken- und Import-Make-ups zu erhalten\",\"bagsTitle\":\"Exklusive Markentaschen\",\"bagsSubTitle\":\"Erhalten Sie Ihre exklusiven & markenbezogenen Taschen in kürzester Zeit zugestellt\",\"womenClothsTitle\":\"Kaufen Sie Ihre Designer-Kleider\",\"womenClothsSubTitle\":\"Konfektionskleider für Sie aus dem Internet zugeschnitten. Beeilen Sie sich, solange der Vorrat reicht.\",\"furnitureTitle\":\"Exklusive Möbel zum günstigen Preis\",\"furnitureSubTitle\":\"Machen Sie aus Ihrem Haus ein Zuhause mit unserer großen Auswahl an schönen Möbeln\",\"booksTitle\":\"Dein eigener Buchladen\",\"booksSubTitle\":\"Holen Sie sich Ihre Lieblingsbücher aus unserer großen Auswahl an Büchern.\",\"medicineTitle\":\"Ihre Medikamente geliefert\",\"medicineSubTitle\":\"Verabschieden Sie sich mit uns von all Ihren Sorgen im Gesundheitswesen\",\"foodsTitle\":\"Sie bestellen, wir liefern\",\"foodsSubTitle\":\"Holen Sie sich Ihre Lieblingsspeisen in weniger als einer Stunde\",\"alternativeCheckout\":\"Checkout-Alternative\",\"termAndConditionHelper\":\"Mit diesem Kauf stimmen Sie unseren zu\",\"termAndCondition\":\"Geschäftsbedingungen.\",\"reqMedicine\":\"Medizin anfordern\",\"submitRequest\":\"Anfrage einreichen\",\"noteHead\":\"Hinweis\",\"noteDescription\":\"Produktverfügbarkeit und Preis werden telefonisch bestätigt. Versandkosten innerhalb der Stadt ${inside} und außerhalb der Stadt  ${outside}.\",\"rmMedicineName\":\"Name der Medizin\",\"rmMedicineQuantity\":\"Menge\",\"rmPrescripttionUpload\":\"Laden Sie Ihr Rezept hoch\",\"rmUploadText\":\"Ziehen Sie Ihre Datei hierher.\",\"cartTitle\":\"Deine Bestellung\",\"discountText\":\"Rabatt\",\"vatText\":\"Inkl. MwSt\",\"searchPlaceholder\":\"Suchen Sie hier nach Ihren Produkten\",\"searchButtonText\":\"Suche\",\"mobileSignInButtonText\":\"Dazu kommen\",\"navlinkAccountSettings\":\"Ihre Kontoeinstellungen\",\"cartItems\":\"Artikel\",\"cartItem\":\"Artikel\",\"addEcoToCartButton\":\"Wagen\",\"addToCartButton\":\"In den Warenkorb legen\",\"backBtn\":\"Zurück\",\"noProductFound\":\"Keine Produkte gefunden\",\"specialCode\":\"Hast du einen Gutschein?\",\"couponApplied\":\"Coupon angewendet\",\"couponPlaceholder\":\"Gutscheincode hier eingeben\",\"sidebarYourOrder\":\"Bestellung\",\"profilePageTitle\":\"Dein Profil\",\"profileNameField\":\"Name\",\"profileEmailField\":\"Email\",\"profileSaveBtn\":\"sparen\",\"contactNumberTItle\":\"Kontakt Nummer\",\"addContactBtn\":\"Kontakt hinzufügen\",\"deliveryAddresTitle\":\"Lieferadresse\",\"addAddressBtn\":\"Adresse hinzufügen\",\"addNew\":\"Neue hinzufügen\",\"paymentCardTitle\":\"Zahlungskarte\",\"addCardBtn\":\"Karte hinzufügen\",\"savedCardsId\":\"Gespeicherte Karten\",\"savedContactId\":\"Kontakt speichern\",\"savedAddressId\":\"Adresse speichern\",\"siteFooter\":\"Ditto ist ein Produkt von\",\"subTotal\":\"Zwischensumme\",\"itemsText\":\"Artikel\",\"shippinFeeText\":\"Versandkosten\",\"voucherText\":\"Gutschein\",\"voucherApply\":\"Sich bewerben\",\"couponError\":\"Ungültiger Gutschein\",\"totalText\":\"Gesamt\",\"deliverySchedule\":\"Lieferungsplan\",\"checkoutDeliveryAddress\":\"Lieferadresse\",\"contactNumberText\":\"Kontakt Nummer\",\"selectPaymentText\":\"Bezahlmöglichkeit\",\"proceesCheckout\":\"Zur Kasse\",\"backHomeBtn\":\"Zurück nach Hause\",\"orderReceivedText\":\"Bestellung erhalten\",\"orderReceivedSuccess\":\"Vielen Dank. Ihre Bestellung ist eingegangen\",\"orderNumberText\":\"Bestellnummer\",\"orderDateText\":\"Datum\",\"paymenMethodText\":\"Zahlungsmethode\",\"paymentMethodName\":\"Nachnahme\",\"orderDetailsText\":\"Bestelldetails\",\"totalItemText\":\"Gesamter Artikel\",\"orderTimeText\":\"Bestellzeitpunkt\",\"deliveryTimeText\":\"Lieferzeit\",\"deliveryLocationText\":\"Lieferort\",\"totalAmountText\":\"Gesamtmenge\",\"loadMoreBtn\":\"Mehr laden\",\"welcomeBack\":\"Willkommen zurück\",\"loginText\":\"Melden Sie sich mit Ihrer E-Mail-Adresse und Ihrem Passwort an\",\"emailAddressPlaceholder\":\"E-Mail-Adresse oder Kontaktnummer\",\"passwordPlaceholder\":\"Passwort (mindestens {minCharacter} Zeichen)\",\"continueBtn\":\"Fortsetzen\",\"orText\":\"oder\",\"continueFacebookBtn\":\"Weiter mit Facebook\",\"continueGoogleBtn\":\"Fahren Sie mit Google fort\",\"dontHaveAccount\":\"Noch keinen Account?\",\"signUpBtnText\":\"Anmelden\",\"forgotPasswordText\":\"Haben Sie Ihr Passwort vergessen?\",\"resetText\":\"Setzen Sie es zurück\",\"signUpText\":\"Mit Ihrer Anmeldung stimmen Sie Ditto's zu\",\"termsConditionText\":\"Nutzungsbedingungen\",\"alreadyHaveAccount\":\"Hast du schon ein Konto?\",\"backToSign\":\"Zurück zu\",\"loginBtnText\":\"Anmeldung\",\"forgotPassText\":\"Passwort vergessen\",\"sendResetPassText\":\"Wir senden Ihnen einen Link zum Zurücksetzen Ihres Passworts\",\"resetPasswordBtn\":\"Passwörter zurücksetzen\",\"intlCopyBtnId\":\"Kopieren\",\"intlCopySuccessId\":\"Kopiert\",\"locationModalheading\":\"Wähle deinen Standort\",\"locationModalSubHeading\":\"Sie müssen Ihren Standort für den Lieferservice auswählen\",\"locationModalFooter\":\"Kostenlose Lieferung für {number}Bestellung\",\"saleText\":\"Verkauf\",\"offText\":\"aus\",\"faqNo1Title\":\"Wie kann ich mit dem Kundenservice Kontakt aufnehmen?\",\"faqNo1Desc\":\"Unser Customer Experience Team ist {number1} Tage die Woche für Sie da und wir bieten zwei Möglichkeiten, um mit Ihnen in Kontakt zu treten. E-Mail und Chat. Wir bemühen uns, schnell zu antworten, damit Sie nicht zu lange auf eine Antwort warten müssen !.\",\"faqNo2Title\":\"App-Installation fehlgeschlagen, wie werden Systeminformationen aktualisiert?\",\"faqNo2Desc\":\"Bitte lesen Sie die Dokumentation sorgfältig durch. Wir haben auch einige Online-Video-Tutorials zu diesem Thema. Wenn das Problem weiterhin besteht, öffnen Sie ein Ticket im Support-Forum\",\"faqNo3Title\":\"Website-Antwort braucht Zeit, wie kann man sie verbessern?\",\"faqNo3Desc\":\"Bitte überprüfen Sie zunächst Ihre Internetverbindung. Wir haben auch einige Online-Video-Tutorials zu diesem Thema. Wenn das Problem weiterhin besteht, öffnen Sie ein Ticket im Support-Forum.\",\"faqNo4Title\":\"Wie erstelle ich ein Konto?\",\"faqNo4Desc\":\"Wenn Sie ein Konto für den persönlichen Gebrauch eröffnen möchten, können Sie dies telefonisch oder online tun. Die Online-Kontoeröffnung sollte nur wenige Minuten dauern.\",\"intlOrderDetailsDiscount\":\"Rabatt\",\"intlOrderDetailsDelivery\":\"Zustellgebühr\",\"intlOrderPageTitle\":\"Meine Bestellung\",\"intlNoOrderFound\":\"Keine Bestellung gefunden\",\"intlOrderPageDetails\":\"Bestelldetails\",\"intlTableColTitle2\":\"Menge\",\"intlTableColTitle3\":\"Preis\",\"intlOrderCardTitleText\":\"Bestellung\",\"intlOrderCardDateText\":\"Bestelldatum\",\"intlOrderCardTotalText\":\"Gesamtpreis\",\"joinButton\":\"Beitreten\",\"ar\":\"Arabisch\",\"zh\":\"Chinesisch\",\"en\":\"Englisch\",\"de\":\"Deutsche\",\"he\":\"Hebräisch\",\"es\":\"Spanisch\",\"intlTextBy\":\"durch\",\"intlReletedItems\":\"ähnliche Artikel\",\"readFreeSampleButton\":\"Kostenlose Probe lesen\",\"bookSectionTitle\":\"Über das Buch\",\"authorSectionTitle\":\"Über den Autor\",\"defaultIntlId\":\"Bitte fügen Sie einen Platzhalter aus der Sprachdatei hinzu\",\"noResultFound\":\"Entschuldigung, kein Ergebnis gefunden :(\",\"deliveryText\":\"Lieferung\",\"cuisineText\":\"Küche\",\"minOrderText\":\"Mindestbestellmenge\",\"fromText\":\"Von\",\"loadMoreButton\":\"Mehr laden\"}");

/***/ }),

/***/ "PElx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeatFish; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const MeatFish = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Layer 2"
  }, __jsx("g", {
    "data-name": "Layer 1"
  }, __jsx("path", {
    "data-name": "Path 31",
    d: "M9.976 12.775c-3.038-.539-8.7-1.222-9.868-4.621h.008C-.977 5.471 5.959-1.484 8.663.284a2.2 2.2 0 011.139 1.685c.058 1.832-1.961 4.468-4.123 6.1 2.183-1.393 4.262-4.117 4.643-6.1a9.461 9.461 0 011.014 9.288c1.112 1.079 2.5 2.252 3.735 2.053a1.566 1.566 0 011.868 1.437 1.49 1.49 0 01-.662 1.445 1.394 1.394 0 01-.877.2 1.34 1.34 0 01-.143.82 1.621 1.621 0 01-3-1c.117-1.248-1.117-2.45-2.279-3.435zM6.212 2.807c.983.643-2.222 3.936-3.21 3.293s2.226-3.936 3.21-3.293zM8.302.936c2.58 1.689-4.417 9.1-7 7.415s4.417-9.1 7-7.415zm3.072 11.145l-1.6-.155c1.211 1.034 3.237 2.4 3.062 4.271-.161 1.724 2.284 1.5 1.988.126a.4.4 0 01.475-.5c1.417.243 1.47-2.216-.184-1.949-1.318.21-2.647-.774-3.747-1.793z",
    fill: color,
    fillRule: "evenodd"
  }))));
};

/***/ }),

/***/ "PYmn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlusSquare; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const PlusSquare = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => __jsx("svg", {
  width: width,
  height: height,
  viewBox: "64 -65 897 897"
}, __jsx("g", null, __jsx("path", {
  d: "M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z",
  fill: color
})));

/***/ }),

/***/ "PsoQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// NAMESPACE OBJECT: ./src/assets/icons/flags.ts
var flags_namespaceObject = {};
__webpack_require__.r(flags_namespaceObject);
__webpack_require__.d(flags_namespaceObject, "DEFlag", function() { return DEFlag["a" /* DEFlag */]; });
__webpack_require__.d(flags_namespaceObject, "CNFlag", function() { return CNFlag["a" /* CNFlag */]; });
__webpack_require__.d(flags_namespaceObject, "USFlag", function() { return USFlag["a" /* USFlag */]; });
__webpack_require__.d(flags_namespaceObject, "ILFlag", function() { return ILFlag["a" /* ILFlag */]; });
__webpack_require__.d(flags_namespaceObject, "ESFlag", function() { return ESFlag["a" /* ESFlag */]; });
__webpack_require__.d(flags_namespaceObject, "SAFlag", function() { return SAFlag["a" /* SAFlag */]; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/layouts/header/menu/language-switcher/language-switcher.style.tsx


const Box = external_styled_components_default.a.div.withConfig({
  displayName: "language-switcherstyle__Box",
  componentId: "sc-1b0dr44-0"
})(["margin-right:20px;.popover-wrapper.right{.popover-content{padding:15px 0;}}@media (max-width:767px){margin-right:0px;}"]);
const SelectedItem = external_styled_components_default.a.button.withConfig({
  displayName: "language-switcherstyle__SelectedItem",
  componentId: "sc-1b0dr44-1"
})(["width:auto;height:38px;display:flex;align-items:center;background-color:", ";border:1px solid ", ";padding-top:0;padding-bottom:0;padding-left:10px;padding-right:10px;border-radius:", ";outline:0;cursor:pointer;span{display:flex;align-items:center;font-family:", ";font-size:", "px;font-weight:", ";color:", ";text-decoration:none;&:first-child{margin-right:auto;}}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const Flag = external_styled_components_default.a.div.withConfig({
  displayName: "language-switcherstyle__Flag",
  componentId: "sc-1b0dr44-2"
})(["margin-right:7px;box-shadow:0 0 3px rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;border-radius:2px;overflow:hidden;svg{width:20px;height:auto;}"]);
const MenuItem = external_styled_components_default.a.button.withConfig({
  displayName: "language-switcherstyle__MenuItem",
  componentId: "sc-1b0dr44-3"
})(["width:100%;font-size:", "px;font-weight:", ";color:", ";line-height:1.2em;display:block;padding:15px 30px;border-radius:", ";transition:0.15s ease-in-out;display:flex;align-items:center;border:0;border-bottom:1px solid ", ";border-radius:0;background-color:transparent;outline:0;cursor:pointer;&:last-child{border-bottom:0;}@media (max-width:1400px){margin-right:10px;font-size:", "px;}@media only screen and (min-width:991px) and (max-width:1200px){padding:15px 30px;}span{box-shadow:0 0 3px rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;border-radius:2px;overflow:hidden;margin-right:15px;svg{display:block;width:20px;height:auto;}}"], Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.gray.500', '#f1f1f1'), Object(theme_get_["themeGet"])('fontSizes.base', '15'));
// EXTERNAL MODULE: ./src/components/popover/popover.tsx + 2 modules
var popover = __webpack_require__("63jn");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./src/assets/icons/DEFlag.tsx
var DEFlag = __webpack_require__("Dtxv");

// EXTERNAL MODULE: ./src/assets/icons/CNFlag.tsx
var CNFlag = __webpack_require__("5kWH");

// EXTERNAL MODULE: ./src/assets/icons/USFlag.tsx
var USFlag = __webpack_require__("t1q0");

// EXTERNAL MODULE: ./src/assets/icons/ILFlag.tsx
var ILFlag = __webpack_require__("OYId");

// EXTERNAL MODULE: ./src/assets/icons/ESFlag.tsx
var ESFlag = __webpack_require__("940+");

// EXTERNAL MODULE: ./src/assets/icons/SAFlag.tsx
var SAFlag = __webpack_require__("pDgd");

// CONCATENATED MODULE: ./src/assets/icons/flags.ts






// EXTERNAL MODULE: ./src/contexts/language/language.provider.tsx + 2 modules
var language_provider = __webpack_require__("uiyz");

// EXTERNAL MODULE: ./src/site-settings/site-navigation.ts
var site_navigation = __webpack_require__("5l48");

// EXTERNAL MODULE: ./src/layouts/header/menu/left-menu/left-menu.style.tsx
var left_menu_style = __webpack_require__("X/+y");

// EXTERNAL MODULE: ./src/assets/icons/MenuDown.tsx
var MenuDown = __webpack_require__("rS9M");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./src/graphql/mutation/user.ts
var mutation_user = __webpack_require__("b6eG");

// EXTERNAL MODULE: ./src/contexts/profile/profile.context.tsx
var profile_context = __webpack_require__("p2kv");

// EXTERNAL MODULE: ./src/contexts/auth/auth.context.tsx
var auth_context = __webpack_require__("QfjN");

// CONCATENATED MODULE: ./src/layouts/header/menu/language-switcher/language-switcher.tsx
var __jsx = external_react_default.a.createElement;














const FlagIcon = ({
  name
}) => {
  const TagName = flags_namespaceObject[name];
  return !!TagName ? __jsx(TagName, null) : __jsx("p", null, "Invalid icon ", name);
};

const LanguageMenu = ({
  onClick
}) => {
  return __jsx(external_react_default.a.Fragment, null, site_navigation["j" /* LANGUAGE_MENU */].map(item => __jsx(MenuItem, {
    onClick: onClick,
    key: item.id,
    value: item.id
  }, __jsx("span", null, __jsx(FlagIcon, {
    name: item.icon
  })), __jsx(external_react_intl_["FormattedMessage"], {
    id: item.id,
    defaultMessage: item.defaultMessage
  }))));
};

const LanguageSwitcher = () => {
  const {
    locale,
    changeLanguage
  } = Object(language_provider["b" /* useLocale */])();
  const {
    authState: {
      user
    },
    authDispatch
  } = external_react_default.a.useContext(auth_context["a" /* AuthContext */]);
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(profile_context["a" /* ProfileContext */]);
  const [updateUserMutation] = Object(react_hooks_["useMutation"])(mutation_user["a" /* UPDATE_USER */]);

  const handleSave = async () => {
    const {
      name,
      email,
      id
    } = state; // await updateUserMutation({
    //   variables: {
    //     id,
    //      name,
    //      email
    //     }
    // });
    // setUserinfoMsg('Update user info successfully');
    // setTimeout(function () {
    //   setUserinfoMsg('');
    // }, 8000)
  };

  const selectedLanguage = site_navigation["j" /* LANGUAGE_MENU */].find(x => x.id === locale);

  const languageChangeHandler = e => {
    changeLanguage(e.target.value);
  };

  return __jsx(Box, null, __jsx(popover["a" /* default */], {
    className: "right",
    handler: __jsx(SelectedItem, null, __jsx("span", null, __jsx(external_react_intl_["FormattedMessage"], {
      id: selectedLanguage === null || selectedLanguage === void 0 ? void 0 : selectedLanguage.id,
      defaultMessage: selectedLanguage === null || selectedLanguage === void 0 ? void 0 : selectedLanguage.defaultMessage
    })), __jsx(left_menu_style["a" /* Arrow */], null, __jsx(MenuDown["a" /* MenuDown */], null))),
    content: __jsx(LanguageMenu, {
      onClick: languageChangeHandler
    })
  }));
};

/* harmony default export */ var language_switcher = __webpack_exports__["a"] = (LanguageSwitcher);

/***/ }),

/***/ "Q5dP":
/***/ (function(module, exports) {



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

/***/ "QfjN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

/***/ }),

/***/ "RHsn":
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"家\",\"nav.grocery\":\"杂货店\",\"nav.makeup\":\"补偿\",\"nav.bags\":\"包袋\",\"nav.clothing\":\"服装\",\"nav.furniture\":\"家具类\",\"nav.book\":\"书\",\"nav.medicine\":\"药物\",\"nav.foods\":\"食品类\",\"nav.terms_and_services\":\"条款及服务\",\"nav.privacy_policy\":\"隐私政策\",\"nav.offer\":\"提供\",\"nav.help\":\"需要帮忙\",\"nav.profile\":\"輪廓\",\"nav.checkout\":\"查看\",\"nav.order_received\":\"订单发票\",\"nav.logout\":\"登出\",\"nav.login\":\"登錄\",\"nav.order\":\"你的订单\",\"groceriesTitle\":\"{minute}分钟内送达的杂货\",\"groceriesSubTitle\":\"每天一整天都在您家门口提供健康食品和小吃\",\"makeupTitle\":\"品牌和进口化妆品\",\"makeupSubTitle\":\"最简单，最便宜的获得品牌和进口化妆品的方法\",\"bagsTitle\":\"独家品牌包\",\"bagsSubTitle\":\"立即获得您专属的品牌包包\",\"womenClothsTitle\":\"选购设计师礼服\",\"womenClothsSubTitle\":\"从网上即可为您量身定制礼服。 存货充足时快点。\",\"furnitureTitle\":\"廉价的独家家具\",\"furnitureSubTitle\":\"我们种类繁多的精美家具让您的房子成为家\",\"booksTitle\":\"你自己的书店\",\"booksSubTitle\":\"从我们广泛的书籍中获取您喜欢的书籍。\",\"medicineTitle\":\"您的药物已交付\",\"medicineSubTitle\":\"与您的所有医疗保健问题说再见\",\"foodsTitle\":\"您订购我们送货\",\"foodsSubTitle\":\"在不到一个小时的时间内得到您喜欢的食物\",\"alternativeCheckout\":\"结帐替代\",\"termAndConditionHelper\":\"购买后，即表示您同意我们的\",\"termAndCondition\":\"条款和条件。\",\"reqMedicine\":\"要求药\",\"submitRequest\":\"提交要求\",\"noteHead\":\"注意\",\"noteDescription\":\"产品可用性和价格将通过电话确认。 市区内送货费$ 5，市区外送货费$ 10。\",\"rmMedicineName\":\"药品名称\",\"rmMedicineQuantity\":\"数量\",\"rmPrescripttionUpload\":\"上传您的处方\",\"rmUploadText\":\"在此处拖动/上传文件。\",\"cartTitle\":\"你的订单\",\"discountText\":\"折扣\",\"vatText\":\"含税 增值税\",\"searchPlaceholder\":\"從這裡搜索您的產品\",\"searchButtonText\":\"搜索\",\"mobileSignInButtonText\":\"加入\",\"navlinkAccountSettings\":\"您的帳戶設置\",\"cartItems\":\"項目\",\"cartItem\":\"项目\",\"addEcoToCartButton\":\"大车\",\"addToCartButton\":\"添加到购物车\",\"backBtn\":\"背部\",\"noProductFound\":\"沒有找到產品\",\"specialCode\":\"你有优惠券吗？\",\"couponApplied\":\"優惠券已申請\",\"couponPlaceholder\":\"在此输入优惠券代码\",\"sidebarYourOrder\":\"订购\",\"profilePageTitle\":\"你的個人資料\",\"profileNameField\":\"名稱\",\"profileEmailField\":\"電子郵件\",\"profileSaveBtn\":\"保存\",\"contactNumberTItle\":\"聯繫電話\",\"addContactBtn\":\"增加聯繫人\",\"deliveryAddresTitle\":\"郵寄地址\",\"addAddressBtn\":\"添加地址\",\"addNew\":\"添新\",\"paymentCardTitle\":\"付款卡\",\"addCardBtn\":\"新增卡\",\"savedCardsId\":\"保存的卡\",\"savedContactId\":\"储存联络人\",\"savedAddressId\":\"保存地址\",\"siteFooter\":\"Mahdi Fashion是一個產品\",\"subTotal\":\"小計\",\"itemsText\":\"項目\",\"shippinFeeText\":\"運輸費用\",\"voucherText\":\"憑證\",\"voucherApply\":\"應用\",\"couponError\":\"優惠券無效\",\"totalText\":\"總\",\"deliverySchedule\":\"交货时间表\",\"checkoutDeliveryAddress\":\"邮寄地址\",\"contactNumberText\":\"联系电话\",\"selectPaymentText\":\"付款方式\",\"proceesCheckout\":\"進行結算\",\"backHomeBtn\":\"回到家\",\"orderReceivedText\":\"訂單已經收到\",\"orderReceivedSuccess\":\"謝謝。 您的訂單已收到\",\"orderNumberText\":\"訂單號\",\"orderDateText\":\"日期\",\"paymenMethodText\":\"付款方法\",\"paymentMethodName\":\"貨到付款\",\"orderDetailsText\":\"訂單詳細信息\",\"totalItemText\":\"總項目\",\"orderTimeText\":\"訂單時間\",\"deliveryTimeText\":\"交貨時間\",\"deliveryLocationText\":\"交貨地點\",\"totalAmountText\":\"總金額\",\"loadMoreBtn\":\"装载更多\",\"welcomeBack\":\"歡迎回來\",\"loginText\":\"使用您的電子郵件和密碼登錄\",\"emailAddressPlaceholder\":\"電郵地址或聯絡號碼\",\"passwordPlaceholder\":\"密碼（最少{minCharacter}個字符）\",\"continueBtn\":\"繼續\",\"orText\":\"要么\",\"continueFacebookBtn\":\"繼續使用Facebook\",\"continueGoogleBtn\":\"繼續使用Google\",\"dontHaveAccount\":\"沒有帳戶？\",\"signUpBtnText\":\"註冊\",\"forgotPasswordText\":\"忘記密碼了嗎？\",\"resetText\":\"重置它\",\"signUpText\":\"通過註冊，您同意Mahdi Fashion的\",\"termsConditionText\":\"條款和條件\",\"alreadyHaveAccount\":\"已經有賬號？\",\"backToSign\":\"回到\",\"loginBtnText\":\"登錄\",\"forgotPassText\":\"忘記密碼\",\"sendResetPassText\":\"我們會向您發送重置密碼的鏈接\",\"resetPasswordBtn\":\"重置密碼\",\"intlCopyBtnId\":\"复制\",\"intlCopySuccessId\":\"复制的\",\"locationModalheading\":\"选择你的位置\",\"locationModalSubHeading\":\"您必须选择位置以进行送货服务\",\"locationModalFooter\":\"免费送货第一订单\",\"saleText\":\"特卖\",\"offText\":\"关\",\"faqNo1Title\":\"如何与客户服务联系？\",\"faqNo1Desc\":\"我们的客户体验团队每周工作{number1}天，我们提供两种联系方式。电子邮件和聊天。 我们会尽快回复您，因此您无需等待太久就可以回复！\",\"faqNo2Title\":\"应用安装失败，如何更新系统信息？\",\"faqNo2Desc\":\"请仔细阅读文档。 我们也有一些有关此问题的在线视频教程。 如果问题仍然存在，请在支持论坛中打开故障单\",\"faqNo3Title\":\"网站响应耗时，如何改善？\",\"faqNo3Desc\":\"首先，请检查您的互联网连接。 我们也有一些有关此问题的在线视频教程。 如果问题仍然存在，请在支持论坛中打开故障单。\",\"faqNo4Title\":\"如何创建一个帐户？\",\"faqNo4Desc\":\"如果您想开设一个个人帐户，可以通过电话或在线进行。 在线开户仅需几分钟。\",\"intlOrderDetailsDiscount\":\"折扣\",\"intlOrderDetailsDelivery\":\"送货费\",\"intlOrderPageTitle\":\"我的订单\",\"intlNoOrderFound\":\"找不到订单\",\"intlOrderPageDetails\":\"订单详细信息\",\"intlTableColTitle2\":\"数量\",\"intlTableColTitle3\":\"价钱\",\"intlOrderCardTitleText\":\"订购\",\"intlOrderCardDateText\":\"订购日期\",\"intlOrderCardTotalText\":\"总价\",\"joinButton\":\"加入\",\"ar\":\"阿拉伯\",\"zh\":\"中文\",\"en\":\"英语\",\"de\":\"德语\",\"he\":\"希伯来语\",\"es\":\"西班牙文\",\"intlTextBy\":\"通过\",\"intlReletedItems\":\"相关项目\",\"readFreeSampleButton\":\"阅读免费样本\",\"bookSectionTitle\":\"关于这本书\",\"authorSectionTitle\":\"关于作者\",\"defaultIntlId\":\"请从语言文件添加占位符\",\"noResultFound\":\"对不起，没有找到结果:(\",\"deliveryText\":\"交货\",\"cuisineText\":\"美食\",\"minOrderText\":\"最低订购\",\"fromText\":\"从\",\"loadMoreButton\":\"装载更多\"}");

/***/ }),

/***/ "SihP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaptopBags; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const LaptopBags = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 6",
    fill: color,
    stroke: "#fff",
    strokeMiterlimit: "10",
    strokeWidth: ".091"
  }, __jsx("path", {
    "data-name": "Path 22",
    d: "M6.224 1.741a.408.408 0 01-.292-.175l-.013-.018v-.022c-.08-.612.818-.747.856-.753l.4-.057-.334.222h0a.807.807 0 00-.128.338c-.105.42-.375.465-.489.465zm-.13-.263a.213.213 0 00.13.081c.106 0 .244-.056.305-.323a1.686 1.686 0 01.07-.237c-.214.064-.523.205-.505.479z"
  }), __jsx("path", {
    "data-name": "Path 23",
    d: "M9 6.496H.046v6.8a.833.833 0 00.833.833h16.243a.833.833 0 00.833-.833v-6.8z"
  }), __jsx("path", {
    "data-name": "Path 24",
    d: "M17.44 2.135H.561a.515.515 0 00-.515.515v6.285a.833.833 0 00.833.833h16.243a.833.833 0 00.833-.833V2.65a.515.515 0 00-.515-.515z"
  }), __jsx("path", {
    "data-name": "Path 25",
    d: "M11.776 1.741c-.113 0-.387-.045-.482-.464a.734.734 0 00-.134-.342l-.334-.222.4.061c.038.006.936.141.856.753v.022l-.013.018a.408.408 0 01-.293.174zM11.4.999a1.682 1.682 0 01.071.238c.061.267.2.323.305.323a.216.216 0 00.13-.081c.019-.276-.291-.416-.506-.48z"
  }), __jsx("path", {
    "data-name": "Path 26",
    d: "M11.295.752A3.333 3.333 0 009 .045a3.333 3.333 0 00-2.295.707.136.136 0 00.158.222A3.036 3.036 0 018.999.318a3.037 3.037 0 012.136.656.136.136 0 10.158-.222z"
  }), __jsx("path", {
    "data-name": "Path 27",
    d: "M9 9.419h-.958v.751h1.917v-.751z"
  }), __jsx("path", {
    "data-name": "Path 28",
    d: "M8.698 8.214h0a.9.9 0 00-.657 1.24h1.917a.9.9 0 00-.657-1.24h0a1.656 1.656 0 00-.6 0z"
  }), __jsx("path", {
    "data-name": "Path 29",
    d: "M9 10.17h-.958v1.009h1.917V10.17z"
  }), __jsx("path", {
    "data-name": "Path 30",
    d: "M9 10.473h-.807v.706h1.615v-.706z"
  }), __jsx("path", {
    "data-name": "Path 31",
    d: "M4.725 2.135h1.136a1.287 1.287 0 00.648-.83.118.118 0 00-.117-.139h0a.116.116 0 00-.095.048 1.873 1.873 0 01-1.38.721.118.118 0 00-.088.05z"
  }), __jsx("path", {
    "data-name": "Path 32",
    d: "M13.275 2.135H12.14a1.287 1.287 0 01-.648-.83.118.118 0 01.116-.139h0a.116.116 0 01.095.048 1.873 1.873 0 001.38.721.118.118 0 01.088.05z"
  })));
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

/***/ "TdNF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IosArrowDown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const IosArrowDown = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 7 10"
  }, __jsx("path", {
    d: "M166.5,118.477a.454.454,0,0,0-.639,0l-2.115,2.108v-8.034a.452.452,0,0,0-.9,0v8.034l-2.115-2.112a.457.457,0,0,0-.639,0,.45.45,0,0,0,0,.636l2.883,2.862a.507.507,0,0,0,.142.094.431.431,0,0,0,.174.035.453.453,0,0,0,.316-.129l2.883-2.862A.442.442,0,0,0,166.5,118.477Z",
    transform: "translate(-159.962 -112.1)",
    fill: color
  }));
};

/***/ }),

/***/ "ToeK":
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"בית\",\"nav.grocery\":\"מכולת\",\"nav.makeup\":\"להשלים\",\"nav.bags\":\"תיקים\",\"nav.clothing\":\"ביגוד\",\"nav.furniture\":\"ריהוט\",\"nav.book\":\"ספר\",\"nav.medicine\":\"תרופה\",\"nav.foods\":\"אוכלים\",\"nav.terms_and_services\":\"תנאים ושירותים\",\"nav.privacy_policy\":\"מדיניות פרטיות\",\"nav.offer\":\"הצעה\",\"nav.help\":\"זקוק לעזרה\",\"nav.profile\":\"פרופיל\",\"nav.checkout\":\"לבדוק\",\"nav.order_received\":\"הזמנת חשבונית\",\"nav.logout\":\"להתנתק\",\"nav.login\":\"התחברות\",\"nav.order\":\"ההזמנה שלך\",\"groceriesTitle\":\"מצרכים הובאו תוך {minute} דקות\",\"groceriesSubTitle\":\"קבל את האוכל והחטיפים הבריאים שלך המובאים בפתח שלך כל היום בכל יום\",\"makeupTitle\":\"איפור ממותג ומיובא\",\"makeupSubTitle\":\"הדרך הקלה והזולה ביותר להשיג איפור ממותג ומיובא שלך\",\"bagsTitle\":\"תיקים ממותגים בלעדיים\",\"bagsSubTitle\":\"קבל את התיקים הבלעדיים והמותגיים שלך שנשלחו אליך תוך זמן קצר\",\"womenClothsTitle\":\"קנו את שמלות המעצבים שלך\",\"womenClothsSubTitle\":\"מוכנים ללבוש שמלות המותאמות עבורך מהאינטרנט. מהרו כשמלאי נמשך.\",\"furnitureTitle\":\"ריהוט בלעדי במחיר זול\",\"furnitureSubTitle\":\"הפוך את ביתך לבית עם אוסף הרהיטים היפה שלנו\",\"booksTitle\":\"חנות ספרים משלך\",\"booksSubTitle\":\"השג את הספרים המועדפים עליך ממגוון הספרים הרחב שלנו.\",\"medicineTitle\":\"התרופות שלך, מועברות\",\"medicineSubTitle\":\"להיפרד מכל הדאגות שלך בתחום הבריאות איתנו\",\"foodsTitle\":\"אתה מזמין שאנו מספקים\",\"foodsSubTitle\":\"השג את המזונות האהובים עליך תוך פחות משעה\",\"alternativeCheckout\":\"אלטרנטיבה לקופה\",\"termAndConditionHelper\":\"על ידי ביצוע רכישה זו אתה מסכים לשלנו\",\"termAndCondition\":\"תנאים.\",\"reqMedicine\":\"בקש רפואה\",\"submitRequest\":\"שלח בקשה\",\"noteHead\":\"פתק\",\"noteDescription\":\"זמינות המוצר ומחירם יאשרו בטלפון. תשלום משלוח בתוך העיר 5 $ ומחוצה לה 10 $.\",\"rmMedicineName\":\"שם הרפואה\",\"rmMedicineQuantity\":\"כמות\",\"rmPrescripttionUpload\":\"העלה את המרשם שלך\",\"rmUploadText\":\"גרור / העלה את הקובץ שלך לכאן.\",\"cartTitle\":\"ההזמנה שלך\",\"discountText\":\"הנחה\",\"vatText\":\"כולל מע\\\"מ\",\"searchPlaceholder\":\"חפש במוצרים שלך מכאן\",\"searchButtonText\":\"לחפש\",\"mobileSignInButtonText\":\"להצטרף\",\"navlinkAccountSettings\":\"הגדרות החשבון שלך\",\"cartItems\":\"פריטים\",\"cartItem\":\"פריט\",\"addEcoToCartButton\":\"עגלה\",\"addToCartButton\":\"הוסף לעגלה\",\"backBtn\":\"חזור\",\"noProductFound\":\"לא נמצאו מוצרים\",\"specialCode\":\"יש לך שובר?\",\"couponApplied\":\"קופון מיושם\",\"couponPlaceholder\":\"הזן כאן קוד שובר\",\"sidebarYourOrder\":\"להזמין\",\"profilePageTitle\":\"הפרופיל שלך\",\"profileNameField\":\"שם\",\"profileEmailField\":\"דוא\\\"ל\",\"profileSaveBtn\":\"לשמור\",\"contactNumberTItle\":\"מספר איש קשר\",\"addContactBtn\":\"הוסף איש קשר\",\"deliveryAddresTitle\":\"כתובת למשלוח\",\"addAddressBtn\":\"הוסף כתובת\",\"addNew\":\"הוסף חדש\",\"addCardBtn\":\"הוסף כרטיס\",\"savedCardsId\":\"כרטיסים שמורים\",\"savedContactId\":\"שמור איש קשר\",\"savedAddressId\":\"שמור כתובת\",\"paymentCardTitle\":\"כרטיס תשלומים\",\"siteFooter\":\"Ditto הוא מוצר מאת\",\"subTotal\":\"תת סה\\\"כ\",\"itemsText\":\"פריטים\",\"shippinFeeText\":\"דמי משלוח\",\"voucherText\":\"שובר\",\"voucherApply\":\"להגיש מועמדות\",\"couponError\":\"קופון לא חוקי\",\"deliverySchedule\":\"לוח הזמנים של המשלוח\",\"checkoutDeliveryAddress\":\"כתובת למשלוח\",\"contactNumberText\":\"מספר איש קשר\",\"selectPaymentText\":\"אפשרות תשלום\",\"proceesCheckout\":\"התקדם לנקודת הביקורת\",\"backHomeBtn\":\"בחזרה לבית\",\"orderReceivedText\":\"ההזמנה התקבלה\",\"orderReceivedSuccess\":\"תודה. ההזמנה שלך התקבלה\",\"orderNumberText\":\"מספר הזמנה\",\"orderDateText\":\"תאריך\",\"paymenMethodText\":\"אמצעי תשלום\",\"paymentMethodName\":\"מזומן במשלוח\",\"orderDetailsText\":\"פרטי הזמנה\",\"totalItemText\":\"סה\\\"כ פריט\",\"orderTimeText\":\"הזמן הזמן\",\"deliveryTimeText\":\"זמן משלוח\",\"deliveryLocationText\":\"מיקום המשלוח\",\"totalAmountText\":\"הכמות הכוללת\",\"loadMoreBtn\":\"טען עוד\",\"welcomeBack\":\"ברוך שובך\",\"loginText\":\"התחבר באמצעות הדוא\\\"ל והסיסמה שלך\",\"emailAddressPlaceholder\":\"כתובת דוא\\\"ל או מספר איש קשר\",\"passwordPlaceholder\":\"סיסמא (מינימום {minCharacter} תווים)\",\"continueBtn\":\"המשך\",\"orText\":\"או\",\"continueFacebookBtn\":\"המשך עם פייסבוק\",\"continueGoogleBtn\":\"המשך עם גוגל\",\"dontHaveAccount\":\"אין לך חשבון?\",\"signUpBtnText\":\"הירשם\",\"forgotPasswordText\":\"שכחת ססמה?\",\"resetText\":\"אפס אותו\",\"signUpText\":\"על ידי ההרשמה, אתה מסכים לפיקבזר\",\"termsConditionText\":\"תנאים והגבלות\",\"alreadyHaveAccount\":\"כבר יש לך חשבון?\",\"backToSign\":\"בחזרה ל\",\"loginBtnText\":\"התחברות\",\"forgotPassText\":\"שכחת את הסיסמא\",\"sendResetPassText\":\"אנו נשלח לך קישור לאיפוס הסיסמה שלך\",\"resetPasswordBtn\":\"אפס סיסמאות\",\"intlCopyBtnId\":\"עותק\",\"intlCopySuccessId\":\"הועתק\",\"locationModalheading\":\"בחר את המיקום שלךSelecciona tu ubicación\",\"locationModalSubHeading\":\"עליכם לבחור את המיקום שלכם לצורך שירות משלוחים\",\"locationModalFooter\":\"משלוח חינם להזמנה ראשונה\",\"saleText\":\"מכירה\",\"offText\":\"כבוי\",\"faqNo1Title\":\"כיצד ליצור קשר עם שירות לקוחות?\",\"faqNo1Desc\":\"צוות חוויית הלקוחות שלנו זמין {number1} ימים בשבוע ואנחנו מציעים {number2} דרכים ליצור קשר. דואר אלקטרוני וצ'אט. אנו מנסים לענות במהירות, כך שאתה לא צריך לחכות יותר מדי לתגובה !.\",\"faqNo2Title\":\"התקנת האפליקציה נכשלה, כיצד לעדכן את פרטי המערכת?\",\"faqNo2Desc\":\"אנא קרא את התיעוד בעיון. יש לנו גם כמה הדרכות וידאו מקוונות בנושא זה. אם הבעיה נותרה, אנא פתח כרטיס בפורום התמיכה\",\"faqNo3Title\":\"תגובת אתר לוקח זמן, כיצד לשפר?\",\"faqNo3Desc\":\"בהתחלה, אנא בדוק את חיבור האינטרנט שלך. יש לנו גם כמה הדרכות וידאו מקוונות בנושא זה. אם הבעיה נותרה, אנא פתח כרטיס בפורום התמיכה.\",\"faqNo4Title\":\"כיצד אוכל ליצור חשבון?\",\"faqNo4Desc\":\"אם אתה רוצה לפתוח חשבון לשימוש אישי אתה יכול לעשות זאת בטלפון או באינטרנט. פתיחת חשבון באופן מקוון אמורה לארוך מספר דקות בלבד.\",\"totalText\":\"סך הכל\",\"intlOrderDetailsDiscount\":\"הנחה\",\"intlOrderDetailsDelivery\":\"דמי משלוח\",\"intlOrderPageTitle\":\"ההזמנה שלי\",\"intlNoOrderFound\":\"לא נמצאה הזמנה\",\"intlOrderPageDetails\":\"פרטי הזמנה\",\"intlTableColTitle2\":\"כמות\",\"intlTableColTitle3\":\"מחיר\",\"intlOrderCardTitleText\":\"להזמין\",\"intlOrderCardDateText\":\"תאריך הזמנה\",\"intlOrderCardTotalText\":\"מחיר סופי\",\"joinButton\":\"הצטרף\",\"ar\":\"ערבית\",\"zh\":\"סינית\",\"en\":\"אנגלית\",\"de\":\"גרמנית\",\"he\":\"עברית\",\"es\":\"ספרדית\",\"intlTextBy\":\"על ידי\",\"intlReletedItems\":\"חפצים קשורים\",\"readFreeSampleButton\":\"קרא דוגמא בחינם\",\"bookSectionTitle\":\"לגבי הספר\",\"authorSectionTitle\":\"על הסופר\",\"defaultIntlId\":\"בבקשה הוסף מציין מיקום מקובץ השפה\",\"noResultFound\":\"מצטערים, לא נמצאה תוצאה :(\",\"deliveryText\":\"מסירה\",\"cuisineText\":\"מטבח\",\"minOrderText\":\"הזמנה מינמלית\",\"fromText\":\"מ\",\"loadMoreButton\":\"טען עוד\"}");

/***/ }),

/***/ "U8/s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaretDownIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const CaretDownIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 10 5"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_md-arrow-dropdown (2)",
    d: "M128,192l5,5,5-5Z",
    transform: "translate(-128 -192)",
    fill: color
  }));
};

/***/ }),

/***/ "UOxV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Revenue; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Revenue = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 56 56"
  }, __jsx("g", {
    "data-name": "Group 2541",
    transform: "translate(-1719 -150)"
  }, __jsx("path", {
    "data-name": "Path 2087",
    d: "M28,0A28,28,0,1,1,0,28,28,28,0,0,1,28,0Z",
    transform: "translate(1719 150)",
    fill: "#00c58d",
    opacity: "0.2"
  }), __jsx("g", {
    "data-name": "Group 2542",
    transform: "translate(1734.867 165.867)"
  }, __jsx("path", {
    "data-name": "Path 2088",
    d: "M3854.718,4669.131a.507.507,0,0,0-.359-.15l-.048,0-8.585.831a.511.511,0,0,0-.31.864l1.58,1.58-12.093,12.093a.507.507,0,0,0,0,.718l3.877,3.877a.511.511,0,0,0,.718,0l2.112-2.111a.508.508,0,0,0,.148-.359.507.507,0,0,0-.867-.358l-1.753,1.752-3.159-3.159,12.093-12.094a.506.506,0,0,0,0-.717l-1.177-1.178,6.9-.668-.667,6.9-1.178-1.177a.506.506,0,0,0-.718,0l-9.166,9.165a.508.508,0,1,0,.719.718l8.806-8.806,1.579,1.579a.5.5,0,0,0,.353.146h0a.507.507,0,0,0,.512-.455l.831-8.585A.5.5,0,0,0,3854.718,4669.131Z",
    transform: "translate(-3830.598 -4668.98)",
    fill: "#00c58d"
  }), __jsx("path", {
    "data-name": "Path 2089",
    d: "M3806.064,5023.59a.51.51,0,0,0-.718,0,.509.509,0,0,0,0,.72l3.877,3.876a.5.5,0,0,0,.359.147h0a.5.5,0,0,0,.386-.177.509.509,0,0,0-.026-.688Z",
    transform: "translate(-3802.428 -5006.836)",
    fill: "#00c58d"
  }), __jsx("path", {
    "data-name": "Path 2090",
    d: "M3776.51,5053.146a.508.508,0,0,0-.867.36.5.5,0,0,0,.149.358l3.877,3.877a.5.5,0,0,0,.358.147h0a.506.506,0,0,0,.359-.865Z",
    transform: "translate(-3774.258 -5035.007)",
    fill: "#00c58d"
  }), __jsx("path", {
    "data-name": "Path 2091",
    d: "M3746.954,5082.7a.508.508,0,1,0-.718.718l3.876,3.876a.5.5,0,0,0,.358.147h0a.506.506,0,0,0,.36-.865Z",
    transform: "translate(-3746.086 -5063.178)",
    fill: "#00c58d"
  }), __jsx("path", {
    "data-name": "Path 2092",
    d: "M4054.57,4973.039a4.424,4.424,0,1,0,4.424,4.424A4.43,4.43,0,0,0,4054.57,4973.039Zm0,7.833a3.409,3.409,0,1,1,3.408-3.409A3.413,3.413,0,0,1,4054.57,4980.873Z",
    transform: "translate(-4035.901 -4958.794)",
    fill: "#00c58d"
  }), __jsx("path", {
    "data-name": "Path 2093",
    d: "M4114.442,5005.083a.522.522,0,0,0,.108.011.508.508,0,0,0,.507-.507v-.255a1.265,1.265,0,0,0-1.017-1.246v-.282a.508.508,0,0,0-1.016,0v.309a1.4,1.4,0,0,0,.38,2.745h.255a.383.383,0,0,1,0,.767h-.382a.257.257,0,0,1-.256-.256.508.508,0,0,0-1.015,0,1.267,1.267,0,0,0,1.018,1.246v.281a.508.508,0,1,0,1.016,0v-.308a1.4,1.4,0,0,0,.4-2.5Zm-.251-.137,0,0a1.388,1.388,0,0,0-.535-.106h-.255a.383.383,0,0,1,0-.767h.381a.256.256,0,0,1,.256.256v.255A.5.5,0,0,0,4114.19,5004.945Z",
    transform: "translate(-4094.863 -4986.681)",
    fill: "#00c58d"
  }), __jsx("path", {
    "data-name": "Path 2094",
    d: "M3770.35,4697.666a4.424,4.424,0,1,0-4.424-4.424A4.428,4.428,0,0,0,3770.35,4697.666Zm0-7.832a3.409,3.409,0,1,1-3.408,3.408A3.412,3.412,0,0,1,3770.35,4689.834Z",
    transform: "translate(-3764.996 -4687.888)",
    fill: "#00c58d"
  }), __jsx("path", {
    "data-name": "Path 2095",
    d: "M3829.184,4721.638h.255a.383.383,0,0,1,0,.767h-.382a.256.256,0,0,1-.256-.256.508.508,0,0,0-1.015,0,1.267,1.267,0,0,0,1.018,1.246v.282a.508.508,0,0,0,1.015,0v-.309a1.4,1.4,0,0,0,.4-2.5.474.474,0,0,0,.108.011.508.508,0,0,0,.508-.508v-.254a1.266,1.266,0,0,0-1.018-1.246v-.282a.508.508,0,0,0-1.016,0v.309a1.4,1.4,0,0,0,.381,2.745Zm.791-.909a1.391,1.391,0,0,0-.536-.107h-.255a.383.383,0,1,1,0-.766h.382a.256.256,0,0,1,.256.256v.254A.5.5,0,0,0,3829.975,4720.729Z",
    transform: "translate(-3823.958 -4715.777)",
    fill: "#00c58d"
  }))));
};

/***/ }),

/***/ "Uoe+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DressIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const DressIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 8.069 16"
  }, __jsx("g", {
    "data-name": "Group 2483",
    transform: "translate(0)"
  }, __jsx("path", {
    "data-name": "Path 2037",
    d: "M128.461,11.218c-.107-.534-.341-3.042-.9-3.875a1.286,1.286,0,0,1-.169-.714.035.035,0,0,0,0-.006c.018-.257.046-.531.065-.677,0-.026.007-.051.01-.067.014-.086.033-.171.051-.257h0a14.282,14.282,0,0,0,.458-2.441c0-1.27-.651-1.644-.651-1.644.224-.95.384-1.462.384-1.462L127.522,0a9.387,9.387,0,0,0-.427,1.526,2.588,2.588,0,0,1-1.921.619,2.59,2.59,0,0,1-1.921-.619A9.4,9.4,0,0,0,122.825,0l-.192.075s.16.512.384,1.462c0,0-.651.374-.651,1.644a13.042,13.042,0,0,0,.437,2.339.086.086,0,0,0,0,.035c0,.008.006.019.009.031l.006.024c.027.109.066.3.072.311.013.077.027.216.039.358.005.049.009.1.012.145.005.068.01.132.014.184h-.006a1.3,1.3,0,0,1-.17.735c-.555.833-.79,3.341-.9,3.874s-.363,2.5-.491,3.074-.256,1.367-.256,1.367a3.288,3.288,0,0,0,1.068.128s-.075.224.576.16a12.831,12.831,0,0,1,1.75-.054c.448.021.135.107.64.107s.192-.085.64-.107a12.79,12.79,0,0,1,1.751.054c.651.064.576-.16.576-.16a3.3,3.3,0,0,0,1.067-.128s-.128-.79-.256-1.367S128.568,11.752,128.461,11.218Zm-1.139-5.467c-.05.069-.094.177-.036.224-.015.1-.024.206-.034.309-.058-.066-.243-.006-.243-.006-.138-.06.121.3.226.161,0,.058-.006.115-.009.173-.126-.009-.253-.018-.38-.025a.586.586,0,0,0-.061-.133c.014-.1-.1.014-.134.122-.273-.011-.547-.016-.822-.018-.057-.068-.244-.007-.244-.007-.028-.012-.04-.007-.039.008h-.028a.13.13,0,0,0,.015-.059.135.135,0,0,0-.27,0,.133.133,0,0,0,.015.06c-.361,0-.721.012-1.081.021a.7.7,0,0,0-.037-.069c.012-.082-.065-.015-.112.073l-.184,0a.436.436,0,0,0,.1-.178c.137-.086-.384-.065-.241.134a.182.182,0,0,0,.045.046l-.151,0a.078.078,0,0,0,0-.109c-.121-.176-.212.084-.222.114l-.263.006c0-.024,0-.048,0-.072.065-.01.28-.273.075-.315a.151.151,0,0,0-.1,0c-.01-.115-.024-.229-.043-.342a.6.6,0,0,0,.052-.12c.06-.037,0-.054-.085-.046-.01-.044-.022-.087-.035-.13l.2,0a.135.135,0,1,0,.26.051.132.132,0,0,0-.012-.055l.926-.017a.085.085,0,0,0,0,.117c.127.177.217-.064.236-.122l.426,0c.066.084.2.175.246.038a.184.184,0,0,0,.008-.041c.208,0,.417,0,.624,0a.133.133,0,0,0-.03.082.135.135,0,1,0,.27,0,.132.132,0,0,0-.029-.08c.342.006.681.022,1.021.042-.1.013-.226.069-.147.179.143.2.241-.134.241-.134.026-.016.028-.029.016-.037l.091.006s0,.005.007.007C127.34,5.661,127.331,5.706,127.322,5.751Z",
    transform: "translate(-121.139)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2038",
    d: "M254.937,189.152c-.128.076.352.067.224-.119S254.937,189.152,254.937,189.152Z",
    transform: "translate(-250.536 -182.787)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2039",
    d: "M237.086,189.725c-.088.209.221.124.221.124C237.441,189.916,237.175,189.516,237.086,189.725Z",
    transform: "translate(-233.276 -183.455)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2040",
    d: "M246.479,182.469c-.253-.051-.088.275-.088.275C246.346,182.908,246.731,182.52,246.479,182.469Z",
    transform: "translate(-242.24 -176.491)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2041",
    d: "M274.916,173.035c.084-.231-.247-.122-.247-.122C274.521,172.847,274.832,173.266,274.916,173.035Z",
    transform: "translate(-269.605 -167.228)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2042",
    d: "M264.6,178.247c.245.021.054-.27.054-.27C264.673,177.816,264.35,178.226,264.6,178.247Z",
    transform: "translate(-259.81 -172.115)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2043",
    d: "M255.758,174.715c.143.2.241-.134.241-.134C256.136,174.495,255.615,174.515,255.758,174.715Z",
    transform: "translate(-251.328 -168.82)",
    fill: color
  }), __jsx("circle", {
    "data-name": "Ellipse 71",
    cx: "0.135",
    cy: "0.135",
    r: "0.135",
    transform: "translate(2.892 6.148)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2044",
    d: "M218.467,182.406c-.128-.187-.224.119-.224.119C218.114,182.6,218.595,182.592,218.467,182.406Z",
    transform: "translate(-215.043 -176.377)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2045",
    d: "M219.072,192.782c-.148-.065.163.354.247.123S219.072,192.782,219.072,192.782Z",
    transform: "translate(-215.828 -186.447)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2046",
    d: "M199.506,183.093c-.088.209.221.124.221.124C199.86,183.284,199.594,182.885,199.506,183.093Z",
    transform: "translate(-196.925 -177.041)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2047",
    d: "M208.891,175.836c-.253-.051-.088.275-.088.275C208.758,176.276,209.143,175.887,208.891,175.836Z",
    transform: "translate(-205.882 -170.076)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2048",
    d: "M289.843,186.1a.135.135,0,1,1-.135.135A.135.135,0,0,1,289.843,186.1Z",
    transform: "translate(-284.19 -180.009)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2049",
    d: "M298.459,180.79c-.128.077.352.067.224-.119S298.459,180.79,298.459,180.79Z",
    transform: "translate(-292.633 -174.698)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2050",
    d: "M279.489,192.851c.143.2.241-.134.241-.134C279.867,192.631,279.346,192.651,279.489,192.851Z",
    transform: "translate(-274.281 -186.362)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2051",
    d: "M279.72,181.364c-.088.209.221.124.221.124C280.075,181.555,279.808,181.155,279.72,181.364Z",
    transform: "translate(-274.514 -175.368)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2052",
    d: "M289.113,174.1c-.253-.051-.089.275-.089.275C288.98,174.541,289.366,174.153,289.113,174.1Z",
    transform: "translate(-283.478 -168.398)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2053",
    d: "M228.78,171.616c.245.021.054-.27.054-.27C228.858,171.185,228.535,171.6,228.78,171.616Z",
    transform: "translate(-225.167 -165.701)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2054",
    d: "M193.371,173.035c.084-.231-.247-.122-.247-.122C192.976,172.847,193.287,173.266,193.371,173.035Z",
    transform: "translate(-190.73 -167.228)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2055",
    d: "M183.052,178.247c.245.021.054-.27.054-.27C183.13,177.816,182.807,178.226,183.052,178.247Z",
    transform: "translate(-180.936 -172.115)",
    fill: color
  })));
};

/***/ }),

/***/ "Upcg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloseSquare; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const CloseSquare = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => __jsx("svg", {
  viewBox: "64 -65 897 897",
  width: width,
  height: height
}, __jsx("g", null, __jsx("path", {
  d: "M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z",
  fill: color
})));

/***/ }),

/***/ "V/vm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PetCare; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const PetCare = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    fill: color
  }, __jsx("path", {
    "data-name": "Path 1",
    d: "M11.335 8.363h-.139a4.189 4.189 0 01-1.864-.44l-1.116-.558.011-.022-.493.493a1.283 1.283 0 01.536.457.879.879 0 00.732.392.326.326 0 01.326.326v.643a1.288 1.288 0 01-.964 1.245v.888a1.76 1.76 0 01-.3.977l-.35.515v.734l.737-.737a.326.326 0 01.548.227v2.186l.643-.426v-2.4a.326.326 0 01.128-.257l1.257-.944a2.143 2.143 0 00.5-1.274 4.447 4.447 0 00-.034-.809z"
  }), __jsx("path", {
    "data-name": "Path 2",
    d: "M9.08 7.077l.543.27a3.543 3.543 0 001.577.372h.056V5.791a.326.326 0 01.326-.326h.8a.483.483 0 00.482-.482v-.472h-.643a.326.326 0 01-.227-.094l-.651-.651a.76.76 0 00-.543-.223h-.7a.8.8 0 00-.564.233 2.932 2.932 0 00-.869 2.086v.573h.4a.242.242 0 00.241-.241V5.149h.643v1.045a.885.885 0 01-.881.887zm1.206-2.894h.643v.643h-.643z"
  }), __jsx("path", {
    "data-name": "Path 3",
    d: "M10.287 14.841l.643-.426v-1.873l-.643.482z"
  }), __jsx("path", {
    "data-name": "Path 4",
    d: "M17.794 3.684a6.04 6.04 0 00-.612-1.464 4.466 4.466 0 00-7.43-.434l-.493.651a.326.326 0 01-.515 0l-.493-.651A4.488 4.488 0 004.678 0H4.56A4.466 4.466 0 00.789 2.077 5.038 5.038 0 000 4.783v.929a7.535 7.535 0 003.244 6.206l.326-.485a8.686 8.686 0 01-1.6-1.539l-.29-.362a.326.326 0 01.5-.4l.289.362a8.042 8.042 0 001.455 1.412l.9-1.346v-.993A2.419 2.419 0 015.4 7.091l.457-.537a.326.326 0 01.557.13l.261 1.042h.258l1.1-1.1v-.76a3.57 3.57 0 011.052-2.541 1.441 1.441 0 011.018-.421h.7a1.394 1.394 0 01.992.412l.553.554h.832a.326.326 0 01.326.326v.8a1.126 1.126 0 01-1.128 1.118H11.9V7.7l.24 1.8a5.09 5.09 0 01.039.926 2.785 2.785 0 01-.6 1.593v1.975l3.04-2.016A7.541 7.541 0 0018 5.677v-.414a6.023 6.023 0 00-.208-1.573zM1.388 8.344a.326.326 0 01-.41-.2l-.05-.15A5.6 5.6 0 01.64 6.218v-.109a.326.326 0 11.643 0v.109a4.962 4.962 0 00.255 1.572l.05.149a.326.326 0 01-.2.407zm14.937 1.181l-.289.362a8.649 8.649 0 01-2.472 2.115l-.869.494a.326.326 0 01-.319-.558l.869-.494a8.009 8.009 0 002.29-1.954l.289-.362a.326.326 0 11.506.4zm1.035-3.309a5.6 5.6 0 01-.288 1.775l-.05.15a.326.326 0 01-.612-.2v.003l.05-.15a4.961 4.961 0 00.255-1.571v-.109a.326.326 0 11.643 0v.109zm0-1.392a.326.326 0 11-.643 0v-.326a.326.326 0 01.643 0z"
  }), __jsx("path", {
    "data-name": "Path 5",
    d: "M7.126 13.007l.4-.6a1.119 1.119 0 00.189-.624v-1.169a.326.326 0 01.326-.326.644.644 0 00.643-.643v-.356a1.52 1.52 0 01-.946-.644.642.642 0 00-.535-.287H6.43a.326.326 0 01-.312-.243l-.169-.679-.052.061a1.774 1.774 0 00-.434 1.078v1.072a.326.326 0 01-.054.178L3.78 12.271l.185.121.676.443 2.584 1.693-.118-.237a.326.326 0 01-.034-.143v-.964a.326.326 0 01.054-.174zM6.75 9.649v-.643h.645v.643z"
  }), __jsx("path", {
    "data-name": "Path 6",
    d: "M8.002 14.648a.325.325 0 01.034.144v.269l.326.211v-.99l-.359.359z"
  })));
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
  width: '120px',
  padding: '0px 8px',
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

/***/ "W1nP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADMIN_IMAGE_HOST */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHOP_IMAGE_HOST; });
const ADMIN_IMAGE_HOST = process.env.REACT_APP_IMAGE_URL;
const SHOP_IMAGE_HOST = "http://52.67.123.15/";

/***/ }),

/***/ "WIgf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeCleaning; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const HomeCleaning = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    transform: "translate(-1.125 -1.125)",
    fill: color
  }, __jsx("path", {
    "data-name": "Path 7",
    d: "M1.125 18.54H1.7v.58h-.58z"
  }), __jsx("path", {
    "data-name": "Path 8",
    d: "M18.54 18.54h.58v.58h-.58z"
  }), __jsx("circle", {
    "data-name": "Ellipse 1",
    cx: ".489",
    cy: ".489",
    r: ".489",
    transform: "translate(14.28 9.345)"
  }), __jsx("path", {
    "data-name": "Path 9",
    d: "M9.834 10.968V9.543H8.409a1.744 1.744 0 001.425 1.425z"
  }), __jsx("circle", {
    "data-name": "Ellipse 2",
    cx: ".489",
    cy: ".489",
    r: ".489",
    transform: "translate(4.99 12.247)"
  }), __jsx("path", {
    "data-name": "Path 10",
    d: "M9.834 7.537a1.744 1.744 0 00-1.425 1.425h1.425z"
  }), __jsx("path", {
    "data-name": "Path 11",
    d: "M2.867 15.64h3.486v.58H2.867z"
  }), __jsx("path", {
    "data-name": "Path 12",
    d: "M13.898 15.64h3.491v.58h-3.491z"
  }), __jsx("path", {
    "data-name": "Path 13",
    d: "M16.802 16.801H14.48v1.742h-.58v-1.742h-.58v-1.742h3.486v-6.66l-6.68-2.637-6.678 2.637v6.66h3.486v1.742h-.583v1.742h-.578v-1.742H3.448v1.742H2.286v.58h15.677v-.58h-1.161zm-3.486-7.257a1.163 1.163 0 001.164-1.165h.58a1.163 1.163 0 001.162 1.162v.58a1.163 1.163 0 00-1.159 1.162h-.58a1.163 1.163 0 00-1.162-1.162zm-3.191-2.613a2.322 2.322 0 11-2.328 2.322 2.322 2.322 0 012.328-2.322zm-4.352 7.258h-.584a1.163 1.163 0 00-1.162-1.162v-.58a1.163 1.163 0 001.162-1.162h.584a1.163 1.163 0 001.158 1.162v.58a1.163 1.163 0 00-1.158 1.162zm6.39 4.354v-3.77a2.032 2.032 0 10-4.064 0v3.77h-.584v-3.77a2.613 2.613 0 115.225 0v3.77zm-3.49-2.322v-.58h.59v.58z"
  }), __jsx("path", {
    "data-name": "Path 14",
    d: "M11.839 9.543h-1.425v1.425a1.744 1.744 0 001.425-1.425z"
  }), __jsx("path", {
    "data-name": "Path 15",
    d: "M18.049 6.598l-7.925-3.13-7.925 3.13a.772.772 0 00-.494.722.76.76 0 00.337.637.787.787 0 00.742.082l7.337-2.9 7.337 2.9a.787.787 0 00.742-.082.76.76 0 00.337-.637.772.772 0 00-.494-.719z"
  }), __jsx("path", {
    "data-name": "Path 16",
    d: "M10.414 7.537v1.425h1.425a1.744 1.744 0 00-1.425-1.425z"
  }), __jsx("path", {
    "data-name": "Path 17",
    d: "M17.962 2.286h-.58a1.163 1.163 0 01-1.162 1.162v.58a1.163 1.163 0 011.162 1.162h.58a1.163 1.163 0 011.162-1.162v-.58a1.163 1.163 0 01-1.162-1.162z"
  }), __jsx("path", {
    "data-name": "Path 18",
    d: "M4.028 4.027h.58a1.163 1.163 0 011.161-1.161v-.58a1.163 1.163 0 01-1.16-1.161h-.58a1.163 1.163 0 01-1.162 1.161v.58a1.163 1.163 0 011.161 1.161z"
  })));
};

/***/ }),

/***/ "X/+y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LeftMenuBox; });
/* unused harmony export MainMenu */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MenuItem; });
/* unused harmony export SelectedItem */
/* unused harmony export Icon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Arrow; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);


const LeftMenuBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "left-menustyle__LeftMenuBox",
  componentId: "flz2fw-0"
})(["display:flex;align-items:center;justify-content:space-between;flex-shrink:0;"]);
const MainMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "left-menustyle__MainMenu",
  componentId: "flz2fw-1"
})(["display:flex;align-items:center;"]);
const MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "left-menustyle__MenuItem",
  componentId: "flz2fw-2"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.2em;display:block;padding:12px 10px;border-radius:", ";transition:0.15s ease-in-out;display:flex;align-items:center;background-color:transparent;border:0;outline:0;cursor:pointer;svg{margin-right:15px;min-width:15px;}&:focus{outline:0;box-shadow:none;}@media (max-width:1400px){margin-right:10px;font-size:", "px;}@media only screen and (min-width:991px) and (max-width:1200px){padding:15px 10px;}&:hover{color:", ";}&.current-page{color:", ";background-color:#fff;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '14'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'));
const SelectedItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "left-menustyle__SelectedItem",
  componentId: "flz2fw-3"
})(["width:auto;height:38px;display:flex;align-items:center;background-color:", ";border:1px solid ", ";padding-top:0;padding-bottom:0;padding-left:15px;padding-right:15px;border-radius:", ";outline:0;min-width:150px;cursor:pointer;span{display:flex;align-items:center;font-family:", ";font-size:", "px;font-weight:", ";color:", ";text-decoration:none;&:first-child{margin-right:auto;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('radii.base', '6px'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'));
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "left-menustyle__Icon",
  componentId: "flz2fw-4"
})(["margin-right:7px;display:flex;align-items:center;justify-content:center;min-width:16px;"]);
const Arrow = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "left-menustyle__Arrow",
  componentId: "flz2fw-5"
})(["width:12px;margin-left:16px;"]);

/***/ }),

/***/ "X6fG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Deodorant; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Deodorant = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "018---Roll-On",
    fill: color
  }, __jsx("ellipse", {
    cx: "1.607",
    cy: "3.535",
    rx: "1.607",
    ry: "3.535",
    transform: "translate(2.176 8.678)"
  }), __jsx("path", {
    d: "M7.244 4.821H.321a.321.321 0 00-.32.356l.027.254a71.835 71.835 0 01.311 11.215A1.282 1.282 0 001.621 18h4.325a1.282 1.282 0 001.282-1.353 71.835 71.835 0 01.3-11.214l.027-.254a.321.321 0 00-.316-.358zm-6.355.962a.321.321 0 01.321-.321h.641a.321.321 0 110 .641H1.21a.321.321 0 01-.321-.32zm2.9 10.607c-1.261 0-2.25-1.832-2.25-4.178s.988-4.178 2.25-4.178 2.25 1.832 2.25 4.178-.995 4.181-2.256 4.181zM6.354 6.104H3.14a.321.321 0 110-.641h3.214a.321.321 0 110 .641z"
  }), __jsx("path", {
    "data-name": "Shape",
    d: "M3.783 0a2.25 2.25 0 00-2.224 1.929h4.447A2.25 2.25 0 003.783 0zM6.443 2.572H1.128a5.946 5.946 0 00-.237 1.607h5.785a5.946 5.946 0 00-.233-1.607zM11.82 16.716h3.214v-1.284a2.893 2.893 0 10-5.786 0v1.284h.964a.321.321 0 010 .641h-.964v.321a.321.321 0 00.321.321h5.143a.321.321 0 00.321-.321v-.321H11.82a.321.321 0 110-.641zm-.964-1.929a.321.321 0 01-.641 0 1.55 1.55 0 011.606-1.608.321.321 0 110 .641.916.916 0 00-.966.964z"
  })));
};

/***/ }),

/***/ "XHU+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getCookieFromBrowser */
/* unused harmony export getCookieFromServer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setCookie; });
/* unused harmony export removeCookie */
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3i/4");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_1__);

 // import { isBrowser } from './isBrowser';

const isBrowser = false;
const getCookieFromBrowser = key => {
  return js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(key);
};
const getCookieFromServer = (ctx, key = 'id_token') => {
  const cookie = next_cookies__WEBPACK_IMPORTED_MODULE_1___default()(ctx);
  const token = cookie && cookie[key] ? cookie[key] : false;

  if (!token) {
    return null;
  }

  return token;
};
const getCookie = (key, context) => {
  return isBrowser ? getCookieFromBrowser(key) : getCookieFromServer(context, key);
};
const setCookie = (key, token) => {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(key, token, {
    expires: 7
  });
};
const removeCookie = key => {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(key);
};

/***/ }),

/***/ "XYP1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tops; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Tops = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    fill: color
  }, __jsx("path", {
    "data-name": "Path 104",
    d: "M6.994 2.83L5.928 5.991a.315.315 0 01-.6 0L4.273 2.83a2.4 2.4 0 00-2.909-.026L0 3.822l.087.329a32.647 32.647 0 01.909 11.921L.79 18h9.7l-.215-1.909a32.667 32.667 0 01.912-11.96l.083-.31-1.366-1.013a2.4 2.4 0 00-2.909.026zm0 0"
  }), __jsx("path", {
    "data-name": "Path 105",
    d: "M.549 2.843l.62-.114L.714.261a.315.315 0 00-.62.114zm0 0"
  }), __jsx("path", {
    "data-name": "Path 106",
    d: "M10.978.369a.316.316 0 00-.622-.108L9.966 2.6l.622.108zm0 0"
  })));
};

/***/ }),

/***/ "XYff":
/***/ (function(module) {

module.exports = JSON.parse("{\"af\":\"Afganistán\",\"al\":\"Albania\",\"de\":\"Alemania\",\"ad\":\"Andorra\",\"ao\":\"Angola\",\"ai\":\"Anguila\",\"aq\":\"Antártida\",\"ag\":\"Antigua y Barbuda\",\"sa\":\"Arabia Saudí\",\"dz\":\"Argelia\",\"ar\":\"Argentina\",\"am\":\"Armenia\",\"aw\":\"Aruba\",\"au\":\"Australia\",\"at\":\"Austria\",\"az\":\"Azerbaiyán\",\"bs\":\"Bahamas\",\"bd\":\"Bangladés\",\"bb\":\"Barbados\",\"bh\":\"Baréin\",\"be\":\"Bélgica\",\"bz\":\"Belice\",\"bj\":\"Benín\",\"bm\":\"Bermudas\",\"by\":\"Bielorrusia\",\"bo\":\"Bolivia\",\"ba\":\"Bosnia y Herzegovina\",\"bw\":\"Botsuana\",\"br\":\"Brasil\",\"bn\":\"Brunéi\",\"bg\":\"Bulgaria\",\"bf\":\"Burkina Faso\",\"bi\":\"Burundi\",\"bt\":\"Bután\",\"cv\":\"Cabo Verde\",\"kh\":\"Camboya\",\"cm\":\"Camerún\",\"ca\":\"Canadá\",\"ic\":\"Canarias\",\"bq\":\"Caribe neerlandés\",\"qa\":\"Catar\",\"ea\":\"Ceuta y Melilla\",\"td\":\"Chad\",\"cz\":\"Chequia\",\"cl\":\"Chile\",\"cn\":\"China\",\"cy\":\"Chipre\",\"va\":\"Ciudad del Vaticano\",\"co\":\"Colombia\",\"km\":\"Comoras\",\"cg\":\"Congo\",\"kp\":\"Corea del Norte\",\"kr\":\"Corea del Sur\",\"cr\":\"Costa Rica\",\"ci\":\"Côte d’Ivoire\",\"hr\":\"Croacia\",\"cu\":\"Cuba\",\"cw\":\"Curazao\",\"dg\":\"Diego García\",\"dk\":\"Dinamarca\",\"dm\":\"Dominica\",\"ec\":\"Ecuador\",\"eg\":\"Egipto\",\"sv\":\"El Salvador\",\"ae\":\"Emiratos Árabes Unidos\",\"er\":\"Eritrea\",\"sk\":\"Eslovaquia\",\"si\":\"Eslovenia\",\"es\":\"España\",\"us\":\"Estados Unidos\",\"ee\":\"Estonia\",\"sz\":\"Esuatini\",\"et\":\"Etiopía\",\"ph\":\"Filipinas\",\"fi\":\"Finlandia\",\"fj\":\"Fiyi\",\"fr\":\"Francia\",\"ga\":\"Gabón\",\"gm\":\"Gambia\",\"ge\":\"Georgia\",\"gh\":\"Ghana\",\"gi\":\"Gibraltar\",\"gd\":\"Granada\",\"gr\":\"Grecia\",\"gl\":\"Groenlandia\",\"gp\":\"Guadalupe\",\"gu\":\"Guam\",\"gt\":\"Guatemala\",\"gf\":\"Guayana Francesa\",\"gg\":\"Guernsey\",\"gn\":\"Guinea\",\"gq\":\"Guinea Ecuatorial\",\"gw\":\"Guinea-Bisáu\",\"gy\":\"Guyana\",\"ht\":\"Haití\",\"hn\":\"Honduras\",\"hu\":\"Hungría\",\"in\":\"India\",\"id\":\"Indonesia\",\"iq\":\"Irak\",\"ir\":\"Irán\",\"ie\":\"Irlanda\",\"ac\":\"Isla de la Ascensión\",\"im\":\"Isla de Man\",\"cx\":\"Isla de Navidad\",\"nf\":\"Isla Norfolk\",\"is\":\"Islandia\",\"ax\":\"Islas Åland\",\"ky\":\"Islas Caimán\",\"cc\":\"Islas Cocos\",\"ck\":\"Islas Cook\",\"fo\":\"Islas Feroe\",\"gs\":\"Islas Georgia del Sur y Sandwich del Sur\",\"fk\":\"Islas Malvinas\",\"mp\":\"Islas Marianas del Norte\",\"mh\":\"Islas Marshall\",\"um\":\"Islas menores alejadas de EE. UU.\",\"pn\":\"Islas Pitcairn\",\"sb\":\"Islas Salomón\",\"tc\":\"Islas Turcas y Caicos\",\"vg\":\"Islas Vírgenes Británicas\",\"vi\":\"Islas Vírgenes de EE. UU.\",\"il\":\"Israel\",\"it\":\"Italia\",\"jm\":\"Jamaica\",\"jp\":\"Japón\",\"je\":\"Jersey\",\"jo\":\"Jordania\",\"kz\":\"Kazajistán\",\"ke\":\"Kenia\",\"kg\":\"Kirguistán\",\"ki\":\"Kiribati\",\"xk\":\"Kosovo\",\"kw\":\"Kuwait\",\"la\":\"Laos\",\"ls\":\"Lesoto\",\"lv\":\"Letonia\",\"lb\":\"Líbano\",\"lr\":\"Liberia\",\"ly\":\"Libia\",\"li\":\"Liechtenstein\",\"lt\":\"Lituania\",\"lu\":\"Luxemburgo\",\"mk\":\"Macedonia\",\"mg\":\"Madagascar\",\"my\":\"Malasia\",\"mw\":\"Malaui\",\"mv\":\"Maldivas\",\"ml\":\"Mali\",\"mt\":\"Malta\",\"ma\":\"Marruecos\",\"mq\":\"Martinica\",\"mu\":\"Mauricio\",\"mr\":\"Mauritania\",\"yt\":\"Mayotte\",\"mx\":\"México\",\"fm\":\"Micronesia\",\"md\":\"Moldavia\",\"mc\":\"Mónaco\",\"mn\":\"Mongolia\",\"me\":\"Montenegro\",\"ms\":\"Montserrat\",\"mz\":\"Mozambique\",\"mm\":\"Myanmar\",\"na\":\"Namibia\",\"nr\":\"Nauru\",\"np\":\"Nepal\",\"ni\":\"Nicaragua\",\"ne\":\"Níger\",\"ng\":\"Nigeria\",\"nu\":\"Niue\",\"no\":\"Noruega\",\"nc\":\"Nueva Caledonia\",\"nz\":\"Nueva Zelanda\",\"om\":\"Omán\",\"nl\":\"Países Bajos\",\"pk\":\"Pakistán\",\"pw\":\"Palaos\",\"pa\":\"Panamá\",\"pg\":\"Papúa Nueva Guinea\",\"py\":\"Paraguay\",\"pe\":\"Perú\",\"pf\":\"Polinesia Francesa\",\"pl\":\"Polonia\",\"pt\":\"Portugal\",\"pr\":\"Puerto Rico\",\"hk\":\"RAE de Hong Kong\",\"mo\":\"RAE de Macao\",\"gb\":\"Reino Unido\",\"cf\":\"República Centroafricana\",\"cd\":\"República Democrática del Congo\",\"do\":\"República Dominicana\",\"re\":\"Reunión\",\"rw\":\"Ruanda\",\"ro\":\"Rumanía\",\"ru\":\"Rusia\",\"eh\":\"Sáhara Occidental\",\"ws\":\"Samoa\",\"as\":\"Samoa Americana\",\"bl\":\"San Bartolomé\",\"kn\":\"San Cristóbal y Nieves\",\"sm\":\"San Marino\",\"mf\":\"San Martín\",\"pm\":\"San Pedro y Miquelón\",\"vc\":\"San Vicente y las Granadinas\",\"sh\":\"Santa Elena\",\"lc\":\"Santa Lucía\",\"st\":\"Santo Tomé y Príncipe\",\"sn\":\"Senegal\",\"rs\":\"Serbia\",\"sc\":\"Seychelles\",\"sl\":\"Sierra Leona\",\"sg\":\"Singapur\",\"sx\":\"Sint Maarten\",\"sy\":\"Siria\",\"so\":\"Somalia\",\"lk\":\"Sri Lanka\",\"za\":\"Sudáfrica\",\"sd\":\"Sudán\",\"ss\":\"Sudán del Sur\",\"se\":\"Suecia\",\"ch\":\"Suiza\",\"sr\":\"Surinam\",\"sj\":\"Svalbard y Jan Mayen\",\"th\":\"Tailandia\",\"tw\":\"Taiwán\",\"tz\":\"Tanzania\",\"tj\":\"Tayikistán\",\"io\":\"Territorio Británico del Océano Índico\",\"tf\":\"Territorios Australes Franceses\",\"ps\":\"Territorios Palestinos\",\"tl\":\"Timor-Leste\",\"tg\":\"Togo\",\"tk\":\"Tokelau\",\"to\":\"Tonga\",\"tt\":\"Trinidad y Tobago\",\"ta\":\"Tristán de Acuña\",\"tn\":\"Túnez\",\"tm\":\"Turkmenistán\",\"tr\":\"Turquía\",\"tv\":\"Tuvalu\",\"ua\":\"Ucrania\",\"ug\":\"Uganda\",\"uy\":\"Uruguay\",\"uz\":\"Uzbekistán\",\"vu\":\"Vanuatu\",\"ve\":\"Venezuela\",\"vn\":\"Vietnam\",\"wf\":\"Wallis y Futuna\",\"ye\":\"Yemen\",\"dj\":\"Yibuti\",\"zm\":\"Zambia\",\"zw\":\"Zimbabue\"}");

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

/***/ "Y9i8":
/***/ (function(module, exports) {

module.exports = "data:image/webp;base64,UklGRjABAABXRUJQVlA4WAoAAAAQAAAAHwAAHwAAQUxQSNcAAAABgFZrb95GEAxBEAzBDBYGNYOGQcxgZdAx6BgIQiEIgiE8P5zI3geAiJgA+U/T/eXgdtNF986lHyuSgVUVydXgleYML3K5OTZ14CpBdfYJdTYJF3qKVUwmjT1m3GYq3zEnnxyd40TxGMi4AZRBYEkb2hJHhzKUIeOxF3WQ9vZdxg2L7TxPgl/ssURPMe1oTIwWq5hMFnoKOR8zYrTIgct0oeuVQp6TB3ZlPGVhcvazA9cVUiAPCjdZ+8CTiDpNVr8xEcNluTqfB67rJHcgy09W2OVnW5P/FgBWUDggMgAAAFADAJ0BKiAAIAA+RRqJRCKhoRv0ACgERLSAAFzqvj3MFt0wAP79Odpv+KERv//sCwAA"

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

/***/ "YRZT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Refund; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Refund = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 56 56"
  }, __jsx("g", {
    "data-name": "Group 2541",
    transform: "translate(-1719 -150)"
  }, __jsx("path", {
    "data-name": "Path 2087",
    d: "M28,0A28,28,0,1,1,0,28,28,28,0,0,1,28,0Z",
    transform: "translate(1719 150)",
    fill: "#2170ff",
    opacity: "0.2"
  }), __jsx("g", {
    "data-name": "Group 2543",
    transform: "translate(1733 164)"
  }, __jsx("g", {
    "data-name": "Group 2544",
    transform: "translate(4.304 4.304)"
  }, __jsx("g", {
    "data-name": "Group 2543",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 2096",
    d: "M5368.315,4398.011a9.7,9.7,0,1,1,9.7-9.7A9.708,9.708,0,0,1,5368.315,4398.011Zm0-18.171a8.475,8.475,0,1,0,8.476,8.475A8.484,8.484,0,0,0,5368.315,4379.84Z",
    transform: "translate(-5358.62 -4378.62)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2097",
    d: "M5371.153,4381.62a9.534,9.534,0,1,0,9.533,9.533A9.545,9.545,0,0,0,5371.153,4381.62Zm0,18.171a8.638,8.638,0,1,1,8.638-8.638A8.647,8.647,0,0,1,5371.153,4399.791Z",
    transform: "translate(-5361.456 -4381.458)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2546",
    transform: "translate(10.041 8.13)"
  }, __jsx("g", {
    "data-name": "Group 2545",
    transform: "translate(0)"
  }, __jsx("path", {
    "data-name": "Path 2098",
    d: "M5468.736,4461.133a.611.611,0,0,1-.61-.61v-.375c-1.949-.181-3.348-1.2-3.348-2.465a.611.611,0,0,1,1.222,0c0,.5.847,1.09,2.126,1.239v-3.194c-1.642-.465-3.348-1.128-3.348-2.886,0-1.263,1.4-2.284,3.348-2.465V4450a.61.61,0,1,1,1.22,0v.374c1.949.181,3.348,1.2,3.348,2.465a.61.61,0,0,1-1.22,0c0-.495-.848-1.091-2.127-1.238v3.194c1.643.466,3.348,1.126,3.348,2.886,0,1.263-1.4,2.284-3.348,2.465v.375A.61.61,0,0,1,5468.736,4461.133Zm.61-2.21c1.28-.148,2.127-.744,2.127-1.239,0-.7-.562-1.128-2.127-1.611Zm-1.22-7.318c-1.279.147-2.126.743-2.126,1.238,0,.7.562,1.128,2.126,1.611Z",
    transform: "translate(-5464.777 -4449.392)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2099",
    d: "M5472.021,4457.758v-3.5c1.465.118,2.452.8,2.452,1.417a.448.448,0,1,0,.9,0c0-1.214-1.438-2.183-3.348-2.314v-.525a.448.448,0,1,0-.9,0v.525c-1.911.131-3.348,1.1-3.348,2.314,0,1.626,1.545,2.26,3.348,2.763v3.495c-1.465-.118-2.452-.8-2.452-1.416a.448.448,0,1,0-.9,0c0,1.213,1.437,2.183,3.348,2.316v.523a.448.448,0,1,0,.9,0v-.523c1.91-.133,3.348-1.1,3.348-2.316C5475.369,4458.895,5473.824,4458.26,5472.021,4457.758Zm-.9-.249c-1.819-.537-2.452-1.026-2.452-1.83,0-.618.987-1.3,2.452-1.417Zm.9,4.428v-3.246c1.818.538,2.452,1.025,2.452,1.83C5474.474,4461.139,5473.486,4461.82,5472.021,4461.937Z",
    transform: "translate(-5467.616 -4452.229)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2548",
    transform: "translate(2.391 0)"
  }, __jsx("g", {
    "data-name": "Group 2547",
    transform: "translate(0)"
  }, __jsx("path", {
    "data-name": "Path 2100",
    d: "M5334.839,4327a.61.61,0,1,1,0-1.221,12.786,12.786,0,1,0-9.167-21.685l.844-.281a.6.6,0,0,1,.194-.031.61.61,0,0,1,.192,1.19l-2.869.956a.626.626,0,0,1-.193.031.61.61,0,0,1-.6-.7l.478-3.348a.613.613,0,0,1,.6-.522.667.667,0,0,1,.087,0,.611.611,0,0,1,.518.691l-.173,1.2A14,14,0,1,1,5334.839,4327Z",
    transform: "translate(-5323.23 -4299)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2101",
    d: "M5347.463,4306.052a13.838,13.838,0,0,0-20.106.568l.246-1.718a.449.449,0,0,0-.888-.128l-.478,3.348a.451.451,0,0,0,.443.513.449.449,0,0,0,.144-.025l2.869-.956a.448.448,0,0,0-.284-.851l-1.442.48a12.941,12.941,0,1,1,9.712,21.493.449.449,0,0,0,0,.9,13.838,13.838,0,0,0,9.785-23.623Z",
    transform: "translate(-5326.069 -4301.836)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2550",
    transform: "translate(11.005 26.567)"
  }, __jsx("g", {
    "data-name": "Group 2549",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 2102",
    d: "M5483.667,4791.79a.585.585,0,0,1-.087-.006c-.165-.024-.333-.05-.493-.08a.61.61,0,0,1,.106-1.21.563.563,0,0,1,.108.009c.147.025.3.051.451.072a.61.61,0,0,1-.085,1.215Z",
    transform: "translate(-5482.584 -4790.493)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2103",
    d: "M5486.569,4793.572c-.153-.021-.307-.045-.457-.073a.448.448,0,1,0-.159.882c.161.03.325.055.487.078a.373.373,0,0,0,.065.006.449.449,0,0,0,.063-.894Z",
    transform: "translate(-5485.422 -4793.329)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2552",
    transform: "translate(8.34 25.795)"
  }, __jsx("g", {
    "data-name": "Group 2551",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 2104",
    d: "M5434.763,4777.729a.579.579,0,0,1-.19-.032c-.305-.1-.611-.212-.909-.333a.611.611,0,1,1,.459-1.131c.272.11.552.213.83.305a.611.611,0,0,1-.19,1.191Z",
    transform: "translate(-5433.283 -4776.188)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2105",
    d: "M5437.738,4779.53c-.281-.092-.565-.2-.84-.308a.448.448,0,1,0-.339.83c.3.12.6.231.9.331a.449.449,0,0,0,.279-.853Z",
    transform: "translate(-5436.119 -4779.026)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2554",
    transform: "translate(0.141 15.345)"
  }, __jsx("g", {
    "data-name": "Group 2553",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 2106",
    d: "M5282.4,4585.042a.614.614,0,0,1-.6-.481c-.069-.312-.126-.634-.174-.952a.613.613,0,0,1,.516-.693.771.771,0,0,1,.089,0,.614.614,0,0,1,.6.521c.042.29.1.583.158.87a.607.607,0,0,1-.082.459.614.614,0,0,1-.384.267A.653.653,0,0,1,5282.4,4585.042Z",
    transform: "translate(-5281.624 -4582.911)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2107",
    d: "M5285.676,4587.172c-.062-.29-.116-.586-.16-.88a.448.448,0,0,0-.887.13c.046.314.1.631.17.942a.45.45,0,0,0,.438.354.389.389,0,0,0,.1-.012A.446.446,0,0,0,5285.676,4587.172Z",
    transform: "translate(-5284.462 -4585.747)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2556",
    transform: "translate(0.262 9.839)"
  }, __jsx("g", {
    "data-name": "Group 2555",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 2108",
    d: "M5284.464,4483.11a.72.72,0,0,1-.121-.011.611.611,0,0,1-.478-.719c.063-.316.138-.632.223-.943a.614.614,0,0,1,.589-.45.635.635,0,0,1,.161.023.611.611,0,0,1,.428.751c-.077.282-.146.572-.2.86A.611.611,0,0,1,5284.464,4483.11Z",
    transform: "translate(-5283.853 -4480.987)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2109",
    d: "M5287.632,4484a.449.449,0,0,0-.552.314c-.083.306-.156.619-.22.931a.448.448,0,0,0,.352.528.461.461,0,0,0,.087.009.452.452,0,0,0,.441-.36c.059-.292.127-.585.206-.87A.45.45,0,0,0,5287.632,4484Z",
    transform: "translate(-5286.689 -4483.826)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2558",
    transform: "translate(0.829 18.034)"
  }, __jsx("g", {
    "data-name": "Group 2557",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 2110",
    d: "M5295.269,4634.7a.61.61,0,0,1-.557-.358c-.132-.293-.257-.594-.368-.9a.612.612,0,0,1,.36-.785.6.6,0,0,1,.211-.039.613.613,0,0,1,.573.4c.1.275.215.55.335.818a.611.611,0,0,1-.306.807A.592.592,0,0,1,5295.269,4634.7Z",
    transform: "translate(-5294.306 -4632.626)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2111",
    d: "M5298.513,4636.747c-.122-.271-.236-.549-.34-.829a.448.448,0,0,0-.84.311c.11.3.233.6.363.886a.45.45,0,0,0,.409.264.469.469,0,0,0,.185-.04A.447.447,0,0,0,5298.513,4636.747Z",
    transform: "translate(-5297.143 -4635.463)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2560",
    transform: "translate(0 12.575)"
  }, __jsx("g", {
    "data-name": "Group 2559",
    transform: "translate(0)"
  }, __jsx("path", {
    "data-name": "Path 2112",
    d: "M5279.609,4533.781a.612.612,0,0,1-.611-.606c0-.039,0-.077,0-.116,0-.282.01-.569.027-.85a.608.608,0,0,1,.607-.574h.038a.612.612,0,0,1,.573.646c-.015.258-.023.52-.023.778,0,.035,0,.07,0,.107a.612.612,0,0,1-.606.615h0Z",
    transform: "translate(-5278.998 -4531.634)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2113",
    d: "M5282.5,4534.634a.449.449,0,0,0-.475.421c-.016.277-.025.561-.025.84v.117a.448.448,0,0,0,.449.443h0a.45.45,0,0,0,.446-.451v-.108c0-.262.006-.526.022-.787A.447.447,0,0,0,5282.5,4534.634Z",
    transform: "translate(-5281.836 -4534.47)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2562",
    transform: "translate(5.893 24.485)"
  }, __jsx("g", {
    "data-name": "Group 2561",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 2114",
    d: "M5389.413,4753.693a.618.618,0,0,1-.306-.083c-.28-.161-.556-.335-.82-.515a.61.61,0,1,1,.685-1.011c.243.165.5.323.748.47a.612.612,0,0,1,.223.834A.615.615,0,0,1,5389.413,4753.693Z",
    transform: "translate(-5388.019 -4751.979)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2115",
    d: "M5392.479,4755.533c-.257-.149-.512-.309-.759-.476a.449.449,0,0,0-.5.743c.264.178.537.348.811.509a.454.454,0,0,0,.225.061.449.449,0,0,0,.226-.836Z",
    transform: "translate(-5390.858 -4754.817)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2564",
    transform: "translate(2.054 20.521)"
  }, __jsx("g", {
    "data-name": "Group 2563",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 2116",
    d: "M5318.141,4680.616a.613.613,0,0,1-.493-.25c-.19-.26-.375-.529-.544-.8a.61.61,0,1,1,1.032-.65c.158.248.324.494.5.731a.611.611,0,0,1-.493.971Z",
    transform: "translate(-5317.009 -4678.629)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2117",
    d: "M5321.343,4682.579c-.175-.239-.344-.489-.5-.74a.448.448,0,1,0-.758.479c.169.27.35.535.537.792a.449.449,0,0,0,.724-.53Z",
    transform: "translate(-5319.85 -4681.467)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2566",
    transform: "translate(3.769 22.7)"
  }, __jsx("g", {
    "data-name": "Group 2565",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 2118",
    d: "M5350,4720.845a.609.609,0,0,1-.408-.156c-.238-.216-.473-.442-.7-.673a.61.61,0,0,1,.877-.849c.205.211.419.417.637.614a.61.61,0,0,1-.408,1.064Z",
    transform: "translate(-5348.718 -4718.981)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2119",
    d: "M5353.132,4722.74c-.221-.2-.437-.408-.644-.623a.448.448,0,1,0-.644.625c.221.228.453.452.688.664a.443.443,0,0,0,.3.116.449.449,0,0,0,.3-.782Z",
    transform: "translate(-5351.555 -4721.819)",
    fill: "#2170ff"
  }))), __jsx("g", {
    "data-name": "Group 2568",
    transform: "translate(1.091 7.652)"
  }, __jsx("g", {
    "data-name": "Group 2567",
    transform: "translate(0)"
  }, __jsx("path", {
    "data-name": "Path 2120",
    d: "M5299.792,4442.2a.61.61,0,0,1-.566-.385.609.609,0,0,1,.005-.466c.067-.153.136-.308.208-.457a.616.616,0,0,1,.552-.348.607.607,0,0,1,.261.058.614.614,0,0,1,.29.814c-.066.136-.128.276-.19.415A.608.608,0,0,1,5299.792,4442.2Z",
    transform: "translate(-5299.182 -4440.542)",
    fill: "#2170ff"
  }), __jsx("path", {
    "data-name": "Path 2121",
    d: "M5303.023,4443.585a.449.449,0,0,0-.6.212c-.07.148-.139.3-.2.45a.449.449,0,0,0,.824.356c.061-.141.125-.282.191-.421A.45.45,0,0,0,5303.023,4443.585Z",
    transform: "translate(-5302.022 -4443.379)",
    fill: "#2170ff"
  }))))));
};

/***/ }),

/***/ "YugL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Restaurant; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Restaurant = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 9.919 14"
  }, __jsx("g", {
    id: "Food",
    transform: "translate(-760.678 -69.1)"
  }, __jsx("path", {
    id: "Path_2721",
    "data-name": "Path 2721",
    d: "M773.859,140.736a5.543,5.543,0,0,1-4.261-2.051l.749,7.838a.482.482,0,0,0,.48.48h6.2a.482.482,0,0,0,.48-.48l.619-7.84A5.544,5.544,0,0,1,773.859,140.736Z",
    transform: "translate(-8.192 -63.904)",
    fill: color
  }), __jsx("path", {
    id: "Path_2722",
    "data-name": "Path 2722",
    d: "M765.543,76.5c-.08,0-.159-.005-.238-.011l-.1-.007v-4.5c0-.126-.063-.2-.09-.2h-.9c-.026,0-.091.071-.091.2v4.29L764,76.223c-.08-.027-.159-.057-.238-.088l-.066-.026V71.979a.629.629,0,0,1,.481-.666l-.062-.724c-.011-.127-.078-.192-.1-.192l-.895.09c-.012,0-.03.016-.047.048a.314.314,0,0,0-.027.163l.455,5.326-.163-.081c-.086-.044-.17-.088-.25-.134l-.048-.027-.149-1.75-.727-2.476c-.031-.106-.1-.163-.133-.163l-.862.294c-.03.01-.066.106-.031.225l.882,3.013-.081.043-.17-.2c-.08-.086-.151-.166-.216-.244l-.174-.217-.659-2.252a.786.786,0,0,1,.011-.49.508.508,0,0,1,.305-.319l.854-.293a.417.417,0,0,1,.134-.022.637.637,0,0,1,.559.489l.12.412L762.6,70.74a.777.777,0,0,1,.107-.476.488.488,0,0,1,.362-.242l.893-.089.042,0a.619.619,0,0,1,.542.616l.065.764h.149V69.769a.612.612,0,0,1,.529-.669h.9a.612.612,0,0,1,.529.669v1.822l.084-.885a.621.621,0,0,1,.543-.61l.048,0,.891.1a.489.489,0,0,1,.36.246.779.779,0,0,1,.1.477l-.075.783.029-.1a.637.637,0,0,1,.559-.489.416.416,0,0,1,.134.022l.855.293a.508.508,0,0,1,.3.319.786.786,0,0,1,.011.49l-.617,2.09-.156.187c-.067.08-.14.163-.224.253l-.162.163-.079-.046.819-2.786a.315.315,0,0,0,.005-.166c-.01-.035-.026-.055-.037-.059l-.856-.293c-.043,0-.109.056-.139.162l-1.247,4.261-.042.02-.126.056c-.079.034-.158.065-.238.094l-.137.051V73.41c0-.126-.063-.2-.09-.2h-.9c-.026,0-.091.071-.091.2v3.059l-.094.009c-.079.008-.158.014-.238.018l-.107.005v-.88h-.164V76.5Zm.269-1.345V73.41a.63.63,0,0,1,.467-.665V69.769c0-.131-.064-.2-.091-.2h-.9c-.028,0-.091.076-.091.2v1.552a.636.636,0,0,1,.447.658v3.175Zm1.426-2.413a.612.612,0,0,1,.528.669V74.8l.254-.868.289-3.053a.287.287,0,0,0-.04-.188.056.056,0,0,0-.031-.024l-.9-.1c-.027,0-.093.068-.1.191l-.189,1.987Z",
    fill: color
  })));
};

/***/ }),

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

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

/***/ "ZU8V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Accessories; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Accessories = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 15",
    fill: color
  }, __jsx("path", {
    "data-name": "Path 53",
    d: "M17.356 0H.643A.643.643 0 000 .643v10.925a.643.643 0 00.643.643h16.714a.643.643 0 00.643-.643V.643A.644.644 0 0017.356 0zM2.431 11.27a1.306 1.306 0 111.306-1.306 1.306 1.306 0 01-1.306 1.306zm0-3.857a1.305 1.305 0 11.924-.382 1.306 1.306 0 01-.924.382zm0-3.857a1.306 1.306 0 11.925-.384 1.306 1.306 0 01-.925.384zm3.218 7.714a1.307 1.307 0 11.922-.382 1.306 1.306 0 01-.922.382zm0-3.857a1.307 1.307 0 11.922-.381 1.306 1.306 0 01-.922.381zm0-3.857a1.307 1.307 0 11.92-.385 1.306 1.306 0 01-.92.385zm3.218 7.714a1.09 1.09 0 10-.008 0zm0-3.857a1.091 1.091 0 10-.008 0zm0-3.857a1.091 1.091 0 10-.008 0zm3.218 7.714a1.1 1.1 0 10-.012 0zm-1.306-5.166a.525.525 0 11-.012 0zm1.306-2.551a1.571 1.571 0 10-.012 0zm4.8 7c0 .355-.412.643-.921.643H15.5c-.508 0-.921-.288-.921-.643V1.768c0-.355.412-.643.921-.643h.461c.508 0 .921.288.921.643z"
  }), __jsx("path", {
    "data-name": "Path 54",
    d: "M16.348 2.78c-.318-1.052-.434-.893-.476-1.186-.013-.1-.346-.095-.351 0-.017.261-.15.378-.365.888-.236.562-.193 1 0 1.186h-.069v2.52a.274.274 0 00-.085.2v4.2h1.445v-4.2a.273.273 0 00-.085-.2V3.684c.106-.13.143-.393-.014-.904zm-.29 3.134h-.672V3.971h.67z"
  }), __jsx("path", {
    "data-name": "Path 55",
    d: "M2.43 1.246a1 1 0 101 1 1 1 0 00-1-1z"
  }), __jsx("path", {
    "data-name": "Path 56",
    d: "M12.073 1.246a1 1 0 101 1 1 1 0 00-1-1z"
  }), __jsx("path", {
    "data-name": "Path 57",
    d: "M8.859 5.103a1 1 0 101 1 1 1 0 00-1-1z"
  }), __jsx("path", {
    "data-name": "Path 58",
    d: "M5.645 8.96a1 1 0 101 1 1 1 0 00-1-1z"
  }), __jsx("path", {
    "data-name": "Path 59",
    d: "M12.073 8.96a1 1 0 101 1 1 1 0 00-1-1z"
  })));
};

/***/ }),

/***/ "ZpXP":
/***/ (function(module, exports) {

module.exports = require("react-phone-input-2");

/***/ }),

/***/ "Zvww":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Beverage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Beverage = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 9"
  }, __jsx("path", {
    "data-name": "Path 30",
    d: "M12.405.7a3.635 3.635 0 00-3.591 3.1H4.4L.811 0 .043.723l2.9 3.084H-.001l6.262 7.018v6.121H3.327V18h7.03v-1.054H7.32v-6.122l3.091-3.46a3.629 3.629 0 102-6.66zM9.817 6.442H3.771L2.358 4.863h8.87z",
    fill: color
  })));
};

/***/ }),

/***/ "Zzj4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const CoinIcon = ({
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 48 48"
  }, __jsx("g", {
    "data-name": "Group 2993",
    transform: "translate(-608 -807)"
  }, __jsx("path", {
    "data-name": "Path 3646",
    d: "M20,0h8A20,20,0,0,1,48,20v8A20,20,0,0,1,28,48H20A20,20,0,0,1,0,28V20A20,20,0,0,1,20,0Z",
    transform: "translate(608 807)",
    fill: "#ffe8b2"
  }), __jsx("g", {
    transform: "translate(620 819)"
  }, __jsx("g", {
    "data-name": "Group 2982",
    transform: "translate(0)"
  }, __jsx("g", {
    "data-name": "Group 2981"
  }, __jsx("path", {
    "data-name": "Path 3639",
    d: "M20.485,3.515A12,12,0,0,0,3.515,20.485,12,12,0,0,0,20.485,3.515ZM12,22.594A10.594,10.594,0,1,1,22.594,12,10.606,10.606,0,0,1,12,22.594Z",
    transform: "translate(0 0)",
    fill: "#ffb300"
  }))), __jsx("g", {
    "data-name": "Group 2984",
    transform: "translate(8.284 4.519)"
  }, __jsx("g", {
    "data-name": "Group 2983"
  }, __jsx("path", {
    "data-name": "Path 3640",
    d: "M181.2,103.179H179.7a1.556,1.556,0,1,1,0-3.112h3.013a.7.7,0,1,0,0-1.406h-1.556V97.1a.7.7,0,0,0-1.406,0V98.66h-.05a2.962,2.962,0,1,0,0,5.925H181.2a1.556,1.556,0,0,1,0,3.113H178.19a.7.7,0,0,0,0,1.406h1.556v1.556a.7.7,0,0,0,1.406,0V109.1h.05a2.963,2.963,0,0,0,0-5.925Z",
    transform: "translate(-176.734 -96.401)",
    fill: "#ffb300"
  }))))));
};

/***/ }),

/***/ "a4aU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lips; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Lips = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 14"
  }, __jsx("path", {
    "data-name": "Path 52",
    d: "M6.035 17.392v-6.2a.567.567 0 00-.516-.61H5.5V5.269h-.527c0-.877.008-1.608.013-2.212.019-2.149.023-2.66-.235-2.923A.454.454 0 004.422 0a1.282 1.282 0 00-.549.193 4.29 4.29 0 01-.708.3 2.882 2.882 0 00-2.117 2.235v2.541H.541v5.306H.519a.567.567 0 00-.516.61v6.2a.567.567 0 00.516.61h5.006a.567.567 0 00.51-.603zm-1.144-6.817H1.148V5.932l3.743.043z",
    fill: color
  })));
};

/***/ }),

/***/ "aYlt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShavingNeeds; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ShavingNeeds = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 17"
  }, __jsx("g", {
    "data-name": "Group 16"
  }, __jsx("path", {
    "data-name": "Path 60",
    d: "M17.24.609h-5.239a.741.741 0 00-.731.731v.667a.741.741 0 00.731.731h.183a1.222 1.222 0 011.222 1.222v1.222l-.152 3.351h2.777l-.183-3.351V3.959a1.222 1.222 0 011.222-1.222h.183a.741.741 0 00.731-.731v-.667a.741.741 0 00-.744-.731zm-2.011 4.265h-1.222v-.609h1.222zm.03-1.222h-1.28a1.741 1.741 0 00-.457-.914h2.163a1.952 1.952 0 00-.425.92z",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 19"
  }, __jsx("g", {
    "data-name": "Group 18"
  }, __jsx("path", {
    "data-name": "Path 61",
    d: "M16.023 9.138h-2.8l-.061 1.222h2.924z",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 21"
  }, __jsx("g", {
    "data-name": "Group 20"
  }, __jsx("path", {
    "data-name": "Path 62",
    d: "M16.413 16.144l-.243-5.178h-3.046l-.243 5.178a1.768 1.768 0 103.533 0z",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 23"
  }, __jsx("g", {
    "data-name": "Group 22"
  }, __jsx("path", {
    "data-name": "Path 63",
    d: "M8.499 1.827V0H2.436v2.742h-.918V4.11A2.283 2.283 0 000 6.274V7.31h6.092v7.31H0v1.066a2.3 2.3 0 002.284 2.285h3.934a2.282 2.282 0 002.284-2.284V6.244a2.312 2.312 0 00-1.526-2.163V2.742h-.915v-.915zM6.092 3.351h.3v.609h-4.26v-.609z",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 25"
  }, __jsx("g", {
    "data-name": "Group 24"
  }, __jsx("path", {
    "data-name": "Path 64",
    d: "M0 7.92v1.222h2.132a.304.304 0 110 .609H0v.914h3.655a.304.304 0 110 .609H0v.914h3.655a.304.304 0 110 .609H0v1.222h5.482V7.927z",
    fill: color
  }))));
};

/***/ }),

/***/ "aiMV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const HelpIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 14 14"
  }, __jsx("path", {
    id: "Path_111",
    "data-name": "Path 111",
    d: "M269.443,404.312a7,7,0,1,0,7,7,6.98,6.98,0,0,0-7-7Zm.635,10.818a.3.3,0,0,1-.319.319h-.635a.3.3,0,0,1-.319-.319v-.635a.3.3,0,0,1,.319-.319h.635a.3.3,0,0,1,.319.319Zm.859-2.832c-.446.382-.763.637-.859.987a.308.308,0,0,1-.319.255h-.635a.309.309,0,0,1-.319-.35,2.988,2.988,0,0,1,1.336-1.876c.574-.446.892-.732.892-1.274a1.591,1.591,0,1,0-3.182,0v.191a.3.3,0,0,1-.224.351l-.6.189a.318.318,0,0,1-.414-.253,2.363,2.363,0,0,1-.033-.479,2.864,2.864,0,0,1,5.729,0,2.792,2.792,0,0,1-1.369,2.259Zm0,0",
    transform: "translate(-262.442 -404.312)",
    fill: color
  }));
};

/***/ }),

/***/ "b6eG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UPDATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UPDATE_USER_WORK_INFO; });
/* unused harmony export UPDATE_USER_LOGS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UPDATE_USER_TODO_TASKS; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const UPDATE_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation UpdateUser(
    $id: ID!, 
    $name: String!,
    $email: String,
    $lenguage: String,
  ) { updateUserNameEmailAndLenguage(
      id: $id, 
      name: $name,
      email: $email,
      lenguage: $lenguage,
    ) {
    status
      message
    }
  }
`;
const UPDATE_USER_WORK_INFO = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation UpdateUserWorkInfo(
    $id: ID!, 
    $isWorking: Boolean,
    $startedWorkTime: String,
    $stoppedWorkTime: String,
    $ratePerHour: Int,
    $logDescription: String,
    $totalWorkingMinutesPerWeek: Int,
    $totalSalaryToPayWeekly: Int,
    $advancedSalaryPaid: Int,
    $taskRelated: String,
    $role: String
  ) { updateUserWorkInfo(
      id: $id, 
      isWorking: $isWorking,
      startedWorkTime: $startedWorkTime,
      stoppedWorkTime: $stoppedWorkTime,
      ratePerHour: $ratePerHour,
      logDescription: $logDescription,
      totalWorkingMinutesPerWeek: $totalWorkingMinutesPerWeek,
      totalSalaryToPayWeekly: $totalSalaryToPayWeekly,
      advancedSalaryPaid: $advancedSalaryPaid,
      taskRelated: $taskRelated,
      role: $role
    ) {
    status
      message
    }
  }
`;
const UPDATE_USER_LOGS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation UpdateUserLogs(
    $id: ID!, 
    $logs: any,
  ) { updateUserLogs(
      id: $id, 
      logs: $logs,
    ) {
    status
      message
    }
  }
`;
const UPDATE_USER_TODO_TASKS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation UpdateUserTasks(
    $id: ID!, 
    $taskId: String,
    $description: String,
    $startDate: String,
    $finishDate: String,
    $plannedDate: String,
    $isRepetitived: Boolean,
    $completationTimes: String,
    $workedHours: String,
    $isDone: Boolean
  ) { updateUserTasks(
      id: $id, 
      taskId: $taskId,
      description: $description,
      startDate: $startDate,
      finishDate: $finishDate,
      plannedDate: $plannedDate,
      isRepetitived: $isRepetitived,
      completationTimes: $completationTimes,
      workedHours: $workedHours,
      isDone: $isDone
    ) {
    status
      message
    }
  }
`;

/***/ }),

/***/ "bM43":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initializeApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useApollo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YvTO");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);
// import { useMemo } from 'react';
// import {
//   ApolloClient,
//   HttpLink,
//   ApolloLink,
//   InMemoryCache,
//   concat,
// } from '@apollo/client';
// let apolloClient;
// const httpLink = new HttpLink({
//   uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT,
//   onError: ({ networkError, graphQLErrors }) => {
//     console.log('graphQLErrors', graphQLErrors);
//     console.log('networkError', networkError);
//   },
// });
// const authMiddleware = new ApolloLink((operation, forward) => {
//   // add the authorization to the headers
//   let token = null;
//   if (typeof window !== 'undefined') {
//     token = localStorage.getItem('access_token');
//   }
//   operation.setContext({
//     headers: {
//       'x-access-token': token ? token : '',
//     },
//   });
//   return forward(operation);
// });
// const client = new ApolloClient({
//   link: authMiddleware.concat(httpLink),
//   cache: new InMemoryCache(),
// });
// console.log(process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT);
// function createApolloClient() {
//   let token = null;
//   if (typeof window !== 'undefined') {
//     token = localStorage.getItem('access_token');
//   }
//   return new ApolloClient({
//     ssrMode: typeof window === 'undefined',
//     link: new HttpLink({
//       uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT, // Server URL (must be absolute)
//       credentials: 'same-origin', // Additional fetch() options like `credentials`
//       headers: {
//         'x-access-token': token ? token : '',
//       }, // Additional fetch() options like `headers`
//       onError: ({ networkError, graphQLErrors }) => {
//         console.log('graphQLErrors', graphQLErrors);
//         console.log('networkError', networkError);
//       },
//     }),
//     cache: new InMemoryCache(),
//   });
// }
// export function initializeApollo(initialState = null) {
//   const _apolloClient = apolloClient ?? client;
//   // If your page has Next.js data fetching methods that use Apollo Client, the initial state
//   // gets hydrated here
//   if (initialState) {
//     _apolloClient.cache.restore(initialState);
//   }
//   // For SSG and SSR always create a new Apollo Client
//   if (typeof window === 'undefined') return _apolloClient;
//   // Create the Apollo Client once in the client
//   if (!apolloClient) apolloClient = _apolloClient;
//   return _apolloClient;
// }
// export function useApollo(initialState) {
//   const store = useMemo(() => initializeApollo(initialState), [initialState]);
//   return store;
// }



const omitDeep = __webpack_require__("+M2j");

const httpLink = new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["HttpLink"]({
  uri: "http://52.67.123.15/api",
  // Server URL (must be absolute)
  credentials: 'same-origin',
  // Additional fetch() options like `credentials`
  onError: ({
    networkError,
    graphQLErrors
  }) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
});
const authLink = new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"]((operation, forward) => {
  // Retrieve the authorization token from local storage.
  let token = null;

  if (false) {} // Use the setContext method to set the HTTP headers.


  operation.setContext({
    headers: {
      'x-access-token': token ? token : ''
    }
  }); // Call the next link in the middleware chain.
  // return forward(operation);

  if (operation.variables) {
    operation.variables = omitDeep(operation.variables, '__typename');
  }

  return forward(operation).map(data => {
    return data;
  });
});
let apolloClient;

function createApolloClient() {
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
    ssrMode: true,
    link: authLink.concat(httpLink),
    cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]()
  });
}

function initializeApollo(initialState = null) {
  var _apolloClient2;

  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(); // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here


  if (initialState) {
    _apolloClient.cache.restore(initialState);
  } // For SSG and SSR always create a new Apollo Client


  if (true) return _apolloClient; // Create the Apollo Client once in the client

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}
function useApollo(initialState) {
  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => initializeApollo(initialState), [initialState]);
  return store;
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "cTCn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IconWrapper */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Container; });
/* unused harmony export LogoWrapper */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SubHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return OfferSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Offer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SubrequirementContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Requirement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return HelperText; });
/* unused harmony export Divider */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LinkButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("B68Z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return components_button_button__WEBPACK_IMPORTED_MODULE_2__["a"]; });





const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "authentication-formstyle__IconWrapper",
  componentId: "sc-19mebf4-0"
})(["display:flex;margin-right:6px;"]);
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "authentication-formstyle__Wrapper",
  componentId: "sc-19mebf4-1"
})(["text-align:center;background-color:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'));
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "authentication-formstyle__Container",
  componentId: "sc-19mebf4-2"
})(["padding:40px 60px 0;@media (max-width:768px){padding:40px 30px 0;}"]);
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "authentication-formstyle__LogoWrapper",
  componentId: "sc-19mebf4-3"
})(["margin-bottom:30px;img{max-width:160px;}"]);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "authentication-formstyle__Heading",
  componentId: "sc-19mebf4-4"
})(["margin-bottom:10px;font-family:", ";font-size:", "px;font-weight:", ";color:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.heading', 'sans-serif'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.lg', '21'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'));
const SubHeading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "authentication-formstyle__SubHeading",
  componentId: "sc-19mebf4-5"
})(["margin-bottom:30px;font-family:", ";font-size:", "px;font-weight:", ";color:", ";display:block;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c'));
const OfferSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "authentication-formstyle__OfferSection",
  componentId: "sc-19mebf4-6"
})(["padding:20px;background-color:", ";color:", ";display:flex;justify-content:center;align-items:center;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'));
const Offer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "authentication-formstyle__Offer",
  componentId: "sc-19mebf4-7"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin:0;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c'));
const Dot = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "authentication-formstyle__Dot",
  componentId: "sc-19mebf4-8"
})(["background-color:", ";border-radius:2,width:4,height:4,align-self:'center'"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#F7F7F7'));
const SubrequirementContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "authentication-formstyle__SubrequirementContainer",
  componentId: "sc-19mebf4-9"
})(["flex-direction:'row',align-items:'center',margin-top:5,margin-left:15"]);
const Requirement = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "authentication-formstyle__Requirement",
  componentId: "sc-19mebf4-10"
})(["margin-left:10,font-size:10,font-family:", ";color:", ";"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.200', '#F7F7F7'));
const HelperText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "authentication-formstyle__HelperText",
  componentId: "sc-19mebf4-11"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin:0;text-align:center;width:100%;a{font-weight:", ";color:", ";text-decoration:underline;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.sm', '13'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.regular', '#77798c'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.blue.link', '#4285f4')); // export const Input = styled.input`
//   width: 100%;
//   height: 48px;
//   border-radius: ${themeGet('radii.base', '6px')};
//   background-color: ${themeGet('colors.gray.200', '#f7f7f7')};
//   border: 1px solid ${themeGet('colors.gray.700', '#e6e6e6')};
//   font-family: ${themeGet('fonts.body', 'Lato')};
//   font-size: ${themeGet('fontSizes.base', '15')}px;
//   font-weight: ${themeGet('fontWeights.regular', '400')};
//   color: ${themeGet('colors.text.bold', '#0D1136')};
//   line-height: 19px;
//   padding: 0 18px;
//   box-sizing: border-box;
//   transition: border-color 0.25s ease;
//   margin-bottom: 10px;
//   &:hover,
//   &:focus {
//     outline: 0;
//   }
//   &:focus {
//     border-color: ${themeGet('colors.primary.regular', '#009e7f')};
//   }
//   &::placeholder {
//     color: ${themeGet('colors.text.regular', '#77798c')};
//     font-size: calc(${themeGet('fontSizes.base', '15')}px + 1px);
//   }
//   &::-webkit-inner-spin-button,
//   &::-webkit-outer-spin-button {
//     -webkit-appearance: none;
//     margin: 0;
//   }
//   &.disabled {
//     .inner-wrap {
//       cursor: not-allowed;
//       opacity: 0.6;
//     }
//   }
// `;

const Divider = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "authentication-formstyle__Divider",
  componentId: "sc-19mebf4-12"
})(["padding:15px 0;width:100%;display:flex;justify-content:center;align-items:center;position:relative;span{font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1;background-color:", ";z-index:1;position:relative;padding:0 10px;}&::before{content:'';width:100%;height:1px;background-color:", ";position:absolute;top:50%;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fonts.body', 'Lato'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontSizes.base', '15'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.regular', '400'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.text.bold', '#0D1136'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.gray.500', '#f1f1f1'));
const LinkButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "authentication-formstyle__LinkButton",
  componentId: "sc-19mebf4-13"
})(["background-color:transparent;border:0;outline:0;box-shadow:none;padding:0;font-size:17px;font-weight:", ";color:", ";text-decoration:underline;cursor:pointer;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('fontWeights.bold', '700'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary.regular', '#009e7f'));

/***/ }),

/***/ "d1O7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Skirts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Skirts = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    fill: color
  }, __jsx("path", {
    "data-name": "Path 107",
    d: "M17.688 16.585L14.826 5.454a3.95 3.95 0 00-.26-.682l-.822-1.6a.749.749 0 00-.616-.376H4.576a.746.746 0 00-.615.377l-.841 1.65a4.017 4.017 0 00-.258.683L.017 16.585a.373.373 0 00.374.482h.64a1.52 1.52 0 01.612.158l1.246.691a.824.824 0 00.728 0l1.24-.691a.607.607 0 01.514 0l1.246.691a.824.824 0 00.728 0l1.246-.691a.607.607 0 01.514 0l1.246.691a.824.824 0 00.728 0l1.246-.691a.607.607 0 01.514 0l1.246.691a.824.824 0 00.728 0l1.246-.691a1.52 1.52 0 01.612-.158h.64a.373.373 0 00.374-.482z"
  }), __jsx("path", {
    "data-name": "Path 108",
    d: "M4.525 2.1h8.656a.333.333 0 00.333-.333V.333A.333.333 0 0013.181 0H4.525a.333.333 0 00-.331.333v1.438a.333.333 0 00.331.331zM7.833.652a.267.267 0 01.262-.266h1.508a.267.267 0 01.266.266v.8a.267.267 0 01-.266.266H8.095a.267.267 0 01-.266-.266z"
  }), __jsx("path", {
    "data-name": "Rectangle 2",
    d: "M8.275.83h1.153v.444H8.275z"
  })));
};

/***/ }),

/***/ "dtQr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Purse; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Purse = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 2"
  }, __jsx("g", {
    "data-name": "Group 1",
    fill: color,
    stroke: "#fff",
    strokeMiterlimit: "10",
    strokeWidth: ".091",
    transform: "translate(-85.169 -7.348)"
  }, __jsx("path", {
    "data-name": "Path 1",
    d: "M98.946 11.381l.217-.061a5.124 5.124 0 00-.6-1.341 11.3 11.3 0 00-1.04-1.279 4.724 4.724 0 00-.93-.679l-.269-.143a3.735 3.735 0 00-.88-.323 5.437 5.437 0 00-1.274-.167l-.317.014a5.3 5.3 0 00-.957.152c-.1.024-.2.061-.3.092a5.009 5.009 0 00-.846.374 4.734 4.734 0 00-.93.679 5.709 5.709 0 00-1.639 2.615l.217.061.217.061a4.7 4.7 0 01.972-1.8 5.106 5.106 0 01.6-.508 4.982 4.982 0 01.874-.521 5.2 5.2 0 011.018-.35 5.315 5.315 0 011.1-.123 5.5 5.5 0 011.1.123 5.2 5.2 0 011.018.35 4.99 4.99 0 01.874.521 5.066 5.066 0 01.585.5 4.7 4.7 0 01.982 1.806z"
  }), __jsx("path", {
    "data-name": "Path 2",
    d: "M93.787 22.392a22.149 22.149 0 01-8.561-1.727l3.3-9.285h11.282l3.3 9.285a22.149 22.149 0 01-8.561 1.727z"
  }), __jsx("path", {
    "data-name": "Path 3",
    d: "M88.531 11.381l-1.353 3.8a17.645 17.645 0 006.609 1.351h.765a17.643 17.643 0 006.609-1.351l-1.353-3.8z"
  }), __jsx("path", {
    "data-name": "Path 4",
    d: "M88.531 11.23l-1.225 3.442a14.059 14.059 0 006.481 1.71h.765a14.059 14.059 0 006.481-1.71l-1.224-3.442z"
  }), __jsx("rect", {
    "data-name": "Rectangle 26",
    width: "2.01",
    height: "2.01",
    rx: ".672",
    transform: "rotate(-44.999 66.026 -103.976)"
  }), __jsx("path", {
    "data-name": "Path 5",
    d: "M101.162 15.182h0l-.173-.486a14.034 14.034 0 01-6.436 1.687h-.273v.15h.272a17.649 17.649 0 006.61-1.351z"
  }), __jsx("rect", {
    "data-name": "Rectangle 27",
    width: "2.01",
    height: "2.01",
    rx: ".672",
    transform: "rotate(-44.999 66.026 -103.976)"
  }), __jsx("rect", {
    "data-name": "Rectangle 28",
    width: "1.5",
    height: "1.5",
    rx: ".501",
    transform: "rotate(-44.999 66.206 -104.411)"
  }))));
};

/***/ }),

/***/ "eIRs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FurnitureIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const FurnitureIcon = ({
  width = '18px',
  height = '18px',
  color = 'currentColor'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 30.402 26.348"
  }, __jsx("g", {
    id: "bed",
    transform: "translate(0 -32)"
  }, __jsx("g", {
    id: "Group_2",
    "data-name": "Group 2",
    transform: "translate(0 32)"
  }, __jsx("g", {
    id: "Group_1",
    "data-name": "Group 1",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 5",
    d: "M29.9,47.2h-.507v-1.52a2.533,2.533,0,0,0-1.52-2.319V35.547a.507.507,0,0,0-.3-.464,2.006,2.006,0,0,0,.3-1.056,2.027,2.027,0,1,0-4.054,0A2.006,2.006,0,0,0,24.1,35.04H6.305a2.006,2.006,0,0,0,.282-1.013,2.027,2.027,0,0,0-4.054,0,2.006,2.006,0,0,0,.3,1.056.507.507,0,0,0-.3.464v7.815a2.533,2.533,0,0,0-1.52,2.319V47.2H.507A.507.507,0,0,0,0,47.708V54.8a.507.507,0,0,0,.507.507h.507v2.533a.507.507,0,0,0,.507.507H3.547a.507.507,0,0,0,.507-.507V55.308H26.348v2.533a.507.507,0,0,0,.507.507h2.027a.507.507,0,0,0,.507-.507V55.308H29.9A.507.507,0,0,0,30.4,54.8V47.708A.507.507,0,0,0,29.9,47.2ZM25.842,33.013a1.013,1.013,0,1,1-1.013,1.013A1.013,1.013,0,0,1,25.842,33.013Zm-21.281,0a1.013,1.013,0,1,1-1.013,1.013A1.013,1.013,0,0,1,4.56,33.013Zm-1.013,3.04H26.855v7.094h-2.04a2.507,2.507,0,0,0,.52-1.52V40.614A2.537,2.537,0,0,0,22.8,38.08H18.748a2.537,2.537,0,0,0-2.533,2.534v1.013a2.507,2.507,0,0,0,.52,1.52H13.668a2.507,2.507,0,0,0,.52-1.52V40.614a2.537,2.537,0,0,0-2.533-2.534H7.6a2.537,2.537,0,0,0-2.533,2.534v1.013a2.507,2.507,0,0,0,.52,1.52H3.547Zm20.775,4.56v1.013a1.52,1.52,0,0,1-1.52,1.52H18.748a1.52,1.52,0,0,1-1.52-1.52V40.614a1.52,1.52,0,0,1,1.52-1.52H22.8A1.52,1.52,0,0,1,24.322,40.614Zm-11.147,0v1.013a1.52,1.52,0,0,1-1.52,1.52H7.6a1.52,1.52,0,0,1-1.52-1.52V40.614a1.52,1.52,0,0,1,1.52-1.52h4.054A1.52,1.52,0,0,1,13.174,40.614ZM2.027,45.681a1.52,1.52,0,0,1,1.52-1.52H26.855a1.52,1.52,0,0,1,1.52,1.52V47.2H2.027ZM3.04,57.335H2.027V55.308H3.04Zm25.335,0H27.362V55.308h1.013Zm1.013-3.04H1.013v-6.08H29.389Z",
    transform: "translate(0 -32)",
    fill: color
  }))), __jsx("g", {
    id: "Group_4",
    "data-name": "Group 4",
    transform: "translate(2.027 52.268)"
  }, __jsx("g", {
    id: "Group_3",
    "data-name": "Group 3"
  }, __jsx("path", {
    "data-name": "Path 6",
    d: "M34.533,352H32.507a.507.507,0,0,0,0,1.013h2.027a.507.507,0,0,0,0-1.013Z",
    transform: "translate(-32 -352)",
    fill: color
  }))), __jsx("g", {
    id: "Group_6",
    "data-name": "Group 6",
    transform: "translate(6.08 52.268)"
  }, __jsx("g", {
    id: "Group_5",
    "data-name": "Group 5"
  }, __jsx("path", {
    "data-name": "Path 7",
    d: "M117.788,352H96.507a.507.507,0,0,0,0,1.013h21.281a.507.507,0,0,0,0-1.013Z",
    transform: "translate(-96 -352)",
    fill: color
  })))));
};

/***/ }),

/***/ "eL1f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Google; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Google = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 16.677 17"
  }, __jsx("path", {
    d: "M68.579,55.29l-.086-.364H60.584v3.348h4.725a4.73,4.73,0,0,1-4.627,3.556,5.533,5.533,0,0,1-3.724-1.484,5.316,5.316,0,0,1-1.586-3.752,5.483,5.483,0,0,1,1.557-3.748,5.3,5.3,0,0,1,3.7-1.447,4.825,4.825,0,0,1,3.147,1.226l2.379-2.367a8.417,8.417,0,0,0-5.6-2.158A8.391,8.391,0,0,0,52,56.6,8.541,8.541,0,0,0,54.326,62.5a8.873,8.873,0,0,0,6.4,2.6,7.891,7.891,0,0,0,5.747-2.416,8.486,8.486,0,0,0,2.207-5.878,9.788,9.788,0,0,0-.1-1.516Z",
    transform: "translate(-52 -48.1)",
    fill: color
  }));
};

/***/ }),

/***/ "f++M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Eyes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Eyes = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    fill: color
  }, __jsx("path", {
    "data-name": "Path 49",
    d: "M3.002 0h-1.5v.75h-1.5v1.5h1.5V3h-1.5v1.5h1.5v.75h-1.5v1.5h1.5v3.75h-.75a.75.75 0 00-.744.842l.75 6a.75.75 0 00.744.657h1.5a.75.75 0 00.744-.657l.75-6a.75.75 0 00-.744-.842h-.75V6.748h1.5v-1.5h-1.5V4.5h1.5V3h-1.5v-.75h1.5V.75h-1.5z"
  }), __jsx("path", {
    "data-name": "Path 50",
    d: "M11.995 17.187l-.746-9.69h-4.5l-.747 9.69a.75.75 0 00.748.807h4.5a.75.75 0 00.748-.807z"
  }), __jsx("path", {
    "data-name": "Path 51",
    d: "M11.251 5.249a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v1.5h4.5z"
  })));
};

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return deliveryMethodCookieKeyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DeliveryMethodsConstants; });
/* unused harmony export deliverySelectOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Roles; });
/* unused harmony export roleSelectOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SensorsTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Locales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return timezones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return RelaysIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return HumiditySensorMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DistanceMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return PlugMode; });
/* unused harmony export PlugSensorMode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CommonMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LightSensorMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return WeekDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return distanceModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return humidityModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return lightModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return manualModeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return fourRelaysOptions; });
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
let SensorsTypes;

(function (SensorsTypes) {
  SensorsTypes["SOIL_HUMIDITY"] = "SOIL_HUMIDITY";
  SensorsTypes["LIGHT"] = "LIGHT";
  SensorsTypes["DISTANCE"] = "DISTANCE";
  SensorsTypes["PLUG"] = "PLUG";
  SensorsTypes["HUMIDITY_TEMPETURE"] = "HUMIDITY_TEMPETURE";
})(SensorsTypes || (SensorsTypes = {}));

let Locales;

(function (Locales) {
  Locales["ES"] = "es";
  Locales["EN"] = "en";
})(Locales || (Locales = {}));

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
  label: 'Calendario de riego'
}, {
  value: HumiditySensorMode.SCHEDULE_DOUBLE_ACTION,
  label: 'Calendario de riego, doble acción'
}, {
  value: HumiditySensorMode.NONE,
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

/***/ "fKbR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IosArrowUp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const IosArrowUp = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 7 10"
  }, __jsx("path", {
    d: "M166.5,115.723a.454.454,0,0,1-.639,0l-2.115-2.108v8.034a.452.452,0,0,1-.9,0v-8.034l-2.115,2.112a.457.457,0,0,1-.639,0,.45.45,0,0,1,0-.636l2.883-2.862a.507.507,0,0,1,.142-.094.431.431,0,0,1,.174-.035.453.453,0,0,1,.316.129l2.883,2.862A.442.442,0,0,1,166.5,115.723Z",
    transform: "translate(-159.962 -112.1)",
    fill: color
  }));
};

/***/ }),

/***/ "fX+b":
/***/ (function(module, exports) {



/***/ }),

/***/ "fc4E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SettingIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 13 13"
  }, __jsx("path", {
    "data-name": "005-repairing-service",
    d: "M12.961,5.778a.423.423,0,0,0-.418-.32,1.435,1.435,0,0,1-.982-2.5.361.361,0,0,0,.04-.49,6.435,6.435,0,0,0-1.03-1.04.362.362,0,0,0-.494.04,1.5,1.5,0,0,1-1.621.364A1.444,1.444,0,0,1,7.577.422a.361.361,0,0,0-.319-.38A6.487,6.487,0,0,0,5.8.039a.362.362,0,0,0-.322.372A1.446,1.446,0,0,1,4.584,1.8a1.5,1.5,0,0,1-1.609-.367.362.362,0,0,0-.491-.041,6.462,6.462,0,0,0-1.051,1.04.362.362,0,0,0,.039.494,1.44,1.44,0,0,1,.363,1.622,1.5,1.5,0,0,1-1.414.879.354.354,0,0,0-.376.319,6.516,6.516,0,0,0,0,1.478.43.43,0,0,0,.426.32,1.426,1.426,0,0,1,1.338.891,1.446,1.446,0,0,1-.364,1.607.361.361,0,0,0-.039.49,6.458,6.458,0,0,0,1.028,1.04.361.361,0,0,0,.495-.039,1.5,1.5,0,0,1,1.62-.364,1.442,1.442,0,0,1,.88,1.411.361.361,0,0,0,.319.38,6.472,6.472,0,0,0,1.462,0,.362.362,0,0,0,.322-.372,1.445,1.445,0,0,1,.89-1.386,1.5,1.5,0,0,1,1.61.366.363.363,0,0,0,.491.041,6.47,6.47,0,0,0,1.051-1.04.361.361,0,0,0-.039-.494,1.44,1.44,0,0,1-.364-1.621,1.455,1.455,0,0,1,1.33-.881l.08,0a.362.362,0,0,0,.38-.319A6.487,6.487,0,0,0,12.961,5.778ZM6.5,10.247A3.747,3.747,0,1,1,9.719,8.421L8.078,6.78A2.3,2.3,0,0,0,5.356,3.666a.26.26,0,0,0-.18.181.254.254,0,0,0,.072.248s.81.816,1.081,1.087a.168.168,0,0,1,.024.121l0,.018a5.181,5.181,0,0,1-.123.793l-.017.017-.018.018a5.107,5.107,0,0,1-.805.125v0l-.014,0H5.361a.173.173,0,0,1-.125-.053c-.282-.282-1.06-1.055-1.06-1.055a.265.265,0,0,0-.189-.084.257.257,0,0,0-.242.2A2.3,2.3,0,0,0,6.859,8L8.518,9.657A3.728,3.728,0,0,1,6.5,10.247Z",
    transform: "translate(-0.002 0.001)",
    fill: color
  }));
};

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

/***/ "g+f/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiftBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const GiftBox = ({
  width = '18px',
  height = '18px',
  color = 'currentColor'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 14.857 16"
  }, __jsx("g", {
    "data-name": "Group 2485",
    transform: "translate(-81.5 40)"
  }, __jsx("g", {
    "data-name": "Group 2484"
  }, __jsx("g", {
    "data-name": "Group 2483",
    transform: "translate(-5.5 21)"
  }, __jsx("path", {
    "data-name": "_ionicons_svg_ios-gift (1)",
    d: "M61.714,35.714H58.7a2.1,2.1,0,0,0,.725-1.571A2.2,2.2,0,0,0,57.175,32a1.993,1.993,0,0,0-1.746.979A1.993,1.993,0,0,0,53.682,32a2.2,2.2,0,0,0-2.254,2.143,2.086,2.086,0,0,0,.725,1.571H49.143A1.142,1.142,0,0,0,48,36.857v.714a.143.143,0,0,0,.143.143H62.714a.143.143,0,0,0,.143-.143v-.714A1.142,1.142,0,0,0,61.714,35.714ZM57.175,33a1.144,1.144,0,1,1,0,2.286h-1.2C55.971,33.571,56.511,33,57.175,33Zm-3.493,0c.664,0,1.2.571,1.2,2.286h-1.2a1.144,1.144,0,1,1,0-2.286Zm-5.111,5.929v7.929A1.146,1.146,0,0,0,49.714,48h5.214V38.643H48.857A.287.287,0,0,0,48.571,38.929ZM62,38.643H55.929V48h5.214a1.146,1.146,0,0,0,1.143-1.143V38.929A.287.287,0,0,0,62,38.643Z",
    transform: "translate(39 -93)",
    fill: "currentColor"
  })))));
};

/***/ }),

/***/ "hMPX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EllipsisIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const EllipsisIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 26 6"
  }, __jsx("g", {
    "data-name": "Group 152",
    transform: "translate(589 479)"
  }, __jsx("ellipse", {
    "data-name": "Ellipse 20",
    cx: "3.136",
    cy: "3",
    rx: "3.136",
    ry: "3",
    transform: "translate(-589 -479)",
    fill: color
  }), __jsx("ellipse", {
    "data-name": "Ellipse 22",
    cx: "3.136",
    cy: "3",
    rx: "3.136",
    ry: "3",
    transform: "translate(-569.271 -479)",
    fill: color
  }), __jsx("ellipse", {
    "data-name": "Ellipse 21",
    cx: "3.136",
    cy: "3",
    rx: "3.136",
    ry: "3",
    transform: "translate(-579.136 -479)",
    fill: color
  })));
};

/***/ }),

/***/ "hUgY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ ExtendedApp; });

// NAMESPACE OBJECT: ./src/assets/icons/category-menu-icons.ts
var category_menu_icons_namespaceObject = {};
__webpack_require__.r(category_menu_icons_namespaceObject);
__webpack_require__.d(category_menu_icons_namespaceObject, "Accessories", function() { return Accessories["a" /* Accessories */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "AdobeIcon", function() { return AdobeIcon["a" /* AdobeIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "AlertDotIcon", function() { return AlertDotIcon["a" /* AlertDotIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "ArrowDown", function() { return ArrowDown["a" /* ArrowDown */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "ArrowDropDown", function() { return ArrowDropDown["a" /* ArrowDropDown */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "ArrowLeftRound", function() { return ArrowLeftRound["a" /* ArrowLeftRound */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "ArrowNext", function() { return ArrowNext["a" /* ArrowNext */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "ArrowPrev", function() { return ArrowPrev["a" /* ArrowPrev */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "ArrowUp", function() { return ArrowUp["a" /* ArrowUp */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "BathOil", function() { return BathOil["a" /* BathOil */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "BeautyHealth", function() { return BeautyHealth["a" /* BeautyHealth */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Beverage", function() { return Beverage["a" /* Beverage */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "BookIcon", function() { return BookIcon["a" /* BookIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Breakfast", function() { return Breakfast["a" /* Breakfast */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "CaretDownIcon", function() { return CaretDownIcon["a" /* CaretDownIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "CaretUpIcon", function() { return CaretUpIcon["a" /* CaretUpIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "CartIcon", function() { return CartIcon["a" /* CartIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "CartIconBig", function() { return CartIconBig["a" /* CartIconBig */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "CategoryIcon", function() { return CategoryIcon["a" /* CategoryIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "CheckMark", function() { return CheckMark["a" /* CheckMark */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "CloseIcon", function() { return CloseIcon["a" /* CloseIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "CloseSquare", function() { return CloseSquare["a" /* CloseSquare */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "CNFlag", function() { return CNFlag["a" /* CNFlag */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "CoinIcon", function() { return CoinIcon["a" /* CoinIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Cooking", function() { return Cooking["a" /* Cooking */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "CouponIcon", function() { return CouponIcon["a" /* CouponIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "CustomerIcon", function() { return CustomerIcon["a" /* CustomerIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Dairy", function() { return Dairy["a" /* Dairy */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "DashboardIcon", function() { return DashboardIcon["a" /* DashboardIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "DEFlag", function() { return DEFlag["a" /* DEFlag */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "DeliveryIcon", function() { return DeliveryIcon["a" /* DeliveryIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Deodorant", function() { return Deodorant["a" /* Deodorant */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "DressIcon", function() { return DressIcon["a" /* DressIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "EllipsisIcon", function() { return EllipsisIcon["a" /* EllipsisIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "ESFlag", function() { return ESFlag["a" /* ESFlag */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Eyes", function() { return Eyes["a" /* Eyes */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Face", function() { return Face["a" /* Face */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Facebook", function() { return Facebook["a" /* Facebook */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "FacialCare", function() { return FacialCare["a" /* FacialCare */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "FruitsVegetable", function() { return FruitsVegetable["a" /* FruitsVegetable */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "FurnitureIcon", function() { return FurnitureIcon["a" /* FurnitureIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "GiftBox", function() { return GiftBox["a" /* GiftBox */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Google", function() { return Google["a" /* Google */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "GooglePlus", function() { return GooglePlus["a" /* GooglePlus */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "GroceryIcon", function() { return GroceryIcon["a" /* GroceryIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Handbag", function() { return Handbag["a" /* Handbag */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "HandBags", function() { return HandBags["a" /* HandBags */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "HelpIcon", function() { return HelpIcon["a" /* HelpIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "HomeCleaning", function() { return HomeCleaning["a" /* HomeCleaning */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "ILFlag", function() { return ILFlag["a" /* ILFlag */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "InboxIcon", function() { return InboxIcon["a" /* InboxIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "InkPen", function() { return InkPen["a" /* InkPen */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "IosArrowDown", function() { return IosArrowDown["a" /* IosArrowDown */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "IosArrowUp", function() { return IosArrowUp["a" /* IosArrowUp */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "LaptopBags", function() { return LaptopBags["a" /* LaptopBags */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Linkedin", function() { return Linkedin["a" /* Linkedin */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Lips", function() { return Lips["a" /* Lips */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "LockIcon", function() { return LockIcon["a" /* LockIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "LogoutIcon", function() { return LogoutIcon["a" /* LogoutIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "LongArrowLeft", function() { return LongArrowLeft["a" /* LongArrowLeft */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "MakeupIcon", function() { return MakeupIcon["a" /* MakeupIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "MeatFish", function() { return MeatFish["a" /* MeatFish */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "MedicineIcon", function() { return MedicineIcon["a" /* MedicineIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Members", function() { return Members["a" /* Members */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "MenuDown", function() { return MenuDown["a" /* MenuDown */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "MenuIcon", function() { return MenuIcon["a" /* MenuIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Minus", function() { return PlusMinus["a" /* Minus */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Plus", function() { return PlusMinus["b" /* Plus */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "MinusSquare", function() { return MinusSquare["a" /* MinusSquare */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "NoCartBag", function() { return NoCartBag["a" /* NoCartBag */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "NotificationIcon", function() { return NotificationIcon["a" /* NotificationIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "OptionIcon", function() { return OptionIcon["a" /* OptionIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "OralCare", function() { return OralCare["a" /* OralCare */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "OrderIcon", function() { return OrderIcon["a" /* OrderIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "OuterWear", function() { return OuterWear["a" /* OuterWear */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Pants", function() { return Pants["a" /* Pants */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "PencilIcon", function() { return PencilIcon["a" /* PencilIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "PetCare", function() { return PetCare["a" /* PetCare */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "PlusOutline", function() { return PlusOutline["a" /* PlusOutline */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "PlusSquare", function() { return PlusSquare["a" /* PlusSquare */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "ProductIcon", function() { return ProductIcon["a" /* ProductIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Purse", function() { return Purse["a" /* Purse */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Refund", function() { return Refund["a" /* Refund */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "RefundIcon", function() { return RefundIcon["a" /* RefundIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Restaurant", function() { return Restaurant["a" /* Restaurant */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Revenue", function() { return Revenue["a" /* Revenue */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "SAFlag", function() { return SAFlag["a" /* SAFlag */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "SearchIcon", function() { return SearchIcon["a" /* SearchIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "SearchIconSmall", function() { return SearchIconSmall["a" /* SearchIconSmall */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "SettingIcon", function() { return SettingIcon["a" /* SettingIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "ShavingNeeds", function() { return ShavingNeeds["a" /* ShavingNeeds */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Shirts", function() { return Shirts["a" /* Shirts */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "ShoppingBag", function() { return ShoppingBag["a" /* ShoppingBag */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "ShoppingBagLarge", function() { return ShoppingBagLarge["a" /* ShoppingBagLarge */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "ShoulderBags", function() { return ShoulderBags["a" /* ShoulderBags */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "SidebarCategoryIcon", function() { return SidebarCategoryIcon["a" /* SidebarCategoryIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "SiteSettings", function() { return SiteSettings["a" /* SiteSettings */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Skirts", function() { return Skirts["a" /* Skirts */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "SmartPhone", function() { return SmartPhone["a" /* SmartPhone */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Snacks", function() { return Snacks["a" /* Snacks */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Tops", function() { return Tops["a" /* Tops */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Twitter", function() { return Twitter["a" /* Twitter */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "UploadIcon", function() { return UploadIcon["a" /* UploadIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "UserAvatar", function() { return UserAvatar["a" /* UserAvatar */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "UserIcon", function() { return UserIcon["a" /* UserIcon */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "USFlag", function() { return USFlag["a" /* USFlag */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "Wallet", function() { return Wallet["a" /* Wallet */]; });
__webpack_require__.d(category_menu_icons_namespaceObject, "WomenDress", function() { return WomenDress["a" /* WomenDress */]; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/site-settings/site-theme/default.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const baseColor = {
  white: '#ffffff',
  black: '#000000',
  gray: {
    100: '#f9f9f9',
    200: '#F7F7F7',
    300: '#f4f4f4',
    400: '#F3F3F3',
    500: '#f1f1f1',
    // border alt color
    600: '#EdEdEd',
    700: '#E6E6E6',
    // border color
    800: '#C2C3CC',
    900: '#bdbdbd'
  },
  text: {
    bold: '#0D1136',
    // heading color
    medium: '#424561',
    regular: '#77798C',
    // regular text color
    light: '#909090',
    label: '#767676'
  },
  transparent: 'transparent',
  primary: {
    regular: '#009E7F',
    // primary color
    hover: '#019376',
    alternate: '#028489',
    light: '#b7dbdd'
  },
  secondary: {
    regular: '#ff5b60',
    hover: '#FF282F',
    alternate: '#fc5c63'
  },
  yellow: {
    regular: '#FFAD5E',
    hover: '#FFB369',
    alternate: '#f4c243'
  },
  blue: {
    regular: '#2e70fa',
    dark: '#161F6A',
    light: '#666D92',
    link: '#4285f4'
  },
  red: '#ea4d4a',
  success: '',
  warning: '',
  muted: '',
  highlight: ''
};
const defaultTheme = {
  colors: _objectSpread(_objectSpread({}, baseColor), {}, {
    body: {
      bg: '',
      text: ''
    },
    borderColor: 'gray.500',
    headingsColor: 'text.bold',
    subheadingsColor: '',
    textColor: 'text.regular',
    buttonColor: 'white',
    buttonBgColor: 'primary.regular',
    buttonBgHoverColor: 'primary.hover',
    buttonBorderColor: 'primary.regular',
    linkColor: 'primary.regular',
    input: {
      text: '',
      bg: '',
      border: '',
      focus: '',
      placeholder: ''
    }
  }),
  // btnBorderRadius: '',
  breakpoints: ['767px', '991px', '70em', '90em'],
  // space: [0, 4, 8, 10, 15, 20, 25, 30, 40, 56],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  // export const space = [0, 0.25, 0.5, 1, 1.5, 3].map(n => n + 'rem')
  // fontSizes: [10, 13, 15, 19, 21, 30, 45],
  // fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontSizes: {
    xs: 12,
    sm: 13,
    base: 15,
    md: 19,
    lg: 21,
    xl: 24,
    '2xl': 30,
    '3xl': 36,
    '4xl': 42,
    '5xl': 48
  },
  // fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  fontWeights: {
    body: 400,
    heading: 700,
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    bolder: 900
  },
  fonts: {
    body: 'Lato, sans-serif',
    heading: 'Poppins, sans-serif',
    monospace: 'Menlo, monospace'
  },
  // Custom Theme keys
  customs: {
    // transitions: {
    //   base: '.3s ease-out',
    // },
    transition: '0.35s ease'
  },
  // lineHeights: {
  //   solid: 1,
  //   title: 1.25,
  //   copy: 1.5,
  // },
  lineHeights: {
    body: 1.5,
    // body: 1.625,
    heading: 1.125 // heading: 1.25,

  },
  boxSizing: 'border-box',
  radii: {
    base: '6px',
    small: '3px',
    medium: '12px',
    big: '18px'
  },
  shadows: {
    base: '0 3px 6px rgba(0, 0, 0, 0.16)',
    medium: '0 6px 12px rgba(0, 0, 0, 0.16)',
    big: '0 21px 36px rgba(0, 0, 0, 0.16)',
    header: '0 1px 2px rgba(0, 0, 0, 0.06)'
  },
  // letterSpacings: {
  //   normal: 'normal',
  //   tracked: '0.1em',
  //   tight: '-0.05em',
  //   mega: '0.25em',
  // },
  // borders: {
  //   0,
  //   sm:'1px solid',
  //   medium:'2px solid',
  //   large:'3px solid',
  //   '4px solid',
  //   '5px solid',
  //   '6px solid',
  // },
  // radius: [3, 4, 5, 6, '50%'],
  // widths: [36, 40, 44, 48, 54, 70, 81, 128, 256],
  // heights: [36, 40, 44, 48, 50, 54, 70, 81, 128],
  // maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  globals: {// body: {
    //   backgroundColor: 'red',
    //   fontFamily: 'body',
    //   lineHeight: 'body',
    //   fontWeight: 'body',
    // },
  }
}; // xs: 0,
// sm: 576px,
// md: 768px,
// lg: 992px,
// xl: 1200px,
// xxl: 1400px
// EXTERNAL MODULE: ./src/contexts/app/app.provider.ts + 1 modules
var app_provider = __webpack_require__("xZKy");

// EXTERNAL MODULE: ./src/contexts/auth/auth.context.tsx
var auth_context = __webpack_require__("QfjN");

// EXTERNAL MODULE: ./src/utils/constant.ts
var constant = __webpack_require__("f/wd");

// CONCATENATED MODULE: ./src/contexts/auth/auth.provider.tsx
var __jsx = external_react_default.a.createElement;

function auth_provider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function auth_provider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { auth_provider_ownKeys(Object(source), true).forEach(function (key) { auth_provider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { auth_provider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function auth_provider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const isBrowser = false;
const INITIAL_STATE = {
  isAuthenticated: isBrowser && !!localStorage.getItem('access_token'),
  currentForm: 'signIn',
  currentUser: false,
  user: {},
  isStaff: false,
  isManager: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'SIGNIN':
      return auth_provider_objectSpread(auth_provider_objectSpread({}, state), {}, {
        currentForm: 'signIn'
      });

    case 'SIGNIN_SUCCESS':
      return auth_provider_objectSpread(auth_provider_objectSpread({}, state), {}, {
        isAuthenticated: true,
        isStaff: [constant["j" /* Roles */].MEMBER, constant["j" /* Roles */].ADMIN, constant["j" /* Roles */].MANAGER, constant["j" /* Roles */].DELIVERY_BOY, constant["j" /* Roles */].STAFF].includes(action.user.role),
        isManager: [constant["j" /* Roles */].ADMIN, constant["j" /* Roles */].MANAGER].includes(action.user.role),
        user: action.user
      });

    case 'CURRENT_USER':
      return auth_provider_objectSpread(auth_provider_objectSpread({}, state), {}, {
        currentUser: true
      });

    case 'SIGN_OUT':
      return auth_provider_objectSpread(auth_provider_objectSpread({}, state), {}, {
        isAuthenticated: false,
        user: {}
      });

    case 'SIGNUP':
      return auth_provider_objectSpread(auth_provider_objectSpread({}, state), {}, {
        currentForm: 'signUp'
      });

    case 'OTP_VERIFICATION':
      return auth_provider_objectSpread(auth_provider_objectSpread({}, state), {}, {
        currentForm: 'otpVerification'
      });

    case 'LOCATION_MODAL':
      return auth_provider_objectSpread(auth_provider_objectSpread({}, state), {}, {
        currentForm: 'locationModal'
      });

    case 'PHONE_VERIFICATION':
      return auth_provider_objectSpread(auth_provider_objectSpread({}, state), {}, {
        currentForm: 'phoneVerification'
      });

    case 'FORGOTPASS':
      return auth_provider_objectSpread(auth_provider_objectSpread({}, state), {}, {
        currentForm: 'forgotPass'
      });

    default:
      return state;
  }
}

const AuthProvider = ({
  children
}) => {
  const {
    0: authState,
    1: authDispatch
  } = Object(external_react_["useReducer"])(reducer, INITIAL_STATE);
  return __jsx(auth_context["a" /* AuthContext */].Provider, {
    value: {
      authState,
      authDispatch
    }
  }, children);
};
// EXTERNAL MODULE: ./src/contexts/language/language.provider.tsx + 2 modules
var language_provider = __webpack_require__("uiyz");

// EXTERNAL MODULE: ./src/contexts/cart/use-cart.tsx + 2 modules
var use_cart = __webpack_require__("tFEG");

// EXTERNAL MODULE: ./src/utils/apollo.js
var apollo = __webpack_require__("bM43");

// EXTERNAL MODULE: ./src/utils/use-media.ts
var use_media = __webpack_require__("ft+Y");

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-stickynode"
var external_react_stickynode_ = __webpack_require__("isz7");
var external_react_stickynode_default = /*#__PURE__*/__webpack_require__.n(external_react_stickynode_);

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: ./src/features/authentication-form/index.tsx + 9 modules
var authentication_form = __webpack_require__("kp67");

// EXTERNAL MODULE: ./src/layouts/header/menu/language-switcher/language-switcher.tsx + 2 modules
var language_switcher = __webpack_require__("PsoQ");

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./src/layouts/header/menu/right-menu/right-menu.style.tsx


const RightMenuBox = external_styled_components_default.a.div.withConfig({
  displayName: "right-menustyle__RightMenuBox",
  componentId: "olumvj-0"
})(["display:flex;align-items:center;flex-shrink:0;.menu-icon{min-width:14px;margin-right:7px;}.menu-item{a{font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:1.2em;display:block;transition:0.15s ease-in-out;display:flex;align-items:center;margin-right:45px;@media (max-width:1400px){margin-right:35px;font-size:", "px;}&:hover{color:", ";}&.current-page{color:", ";}}}.user-pages-dropdown{.popover-handler{width:38px;height:38px;border-radius:50%;display:block;overflow:hidden;img{width:100%;height:auto;display:block;}}.popover-content{.inner-wrap{}}}"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
// CONCATENATED MODULE: ./src/layouts/header/menu/right-menu/right-menu.tsx
var right_menu_jsx = external_react_default.a.createElement;




const AuthMenu = dynamic_default()(() => __webpack_require__.e(/* import() */ 31).then(__webpack_require__.bind(null, "IQ03")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("IQ03")],
    modules: ['../auth-menu']
  }
});
const RightMenu = ({
  onLogout,
  avatar,
  isAuthenticated,
  isStaff,
  onJoin
}) => {
  return right_menu_jsx(RightMenuBox, null, right_menu_jsx(language_switcher["a" /* default */], null), right_menu_jsx(AuthMenu, {
    avatar: avatar,
    onJoin: onJoin,
    onLogout: onLogout,
    isAuthenticated: isAuthenticated,
    isStaff: isStaff
  }));
};
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: ./src/layouts/logo/logo.tsx + 1 modules
var logo_logo = __webpack_require__("9T+x");

// EXTERNAL MODULE: ./src/site-settings/site-navigation.ts
var site_navigation = __webpack_require__("5l48");

// EXTERNAL MODULE: ./src/graphql/query/type.query.ts
var type_query = __webpack_require__("IGqs");

// EXTERNAL MODULE: ./src/components/error-message/error-message.tsx
var error_message = __webpack_require__("quMH");

// EXTERNAL MODULE: ./src/assets/icons/Accessories.tsx
var Accessories = __webpack_require__("ZU8V");

// EXTERNAL MODULE: ./src/assets/icons/AdobeIcon.tsx
var AdobeIcon = __webpack_require__("/z7V");

// EXTERNAL MODULE: ./src/assets/icons/AlertDotIcon.tsx
var AlertDotIcon = __webpack_require__("1S32");

// EXTERNAL MODULE: ./src/assets/icons/ArrowDown.tsx
var ArrowDown = __webpack_require__("M0iK");

// EXTERNAL MODULE: ./src/assets/icons/ArrowDropDown.tsx
var ArrowDropDown = __webpack_require__("3RdR");

// EXTERNAL MODULE: ./src/assets/icons/ArrowLeftRound.tsx
var ArrowLeftRound = __webpack_require__("6I9l");

// EXTERNAL MODULE: ./src/assets/icons/ArrowNext.tsx
var ArrowNext = __webpack_require__("0zej");

// EXTERNAL MODULE: ./src/assets/icons/ArrowPrev.tsx
var ArrowPrev = __webpack_require__("KclG");

// EXTERNAL MODULE: ./src/assets/icons/ArrowUp.tsx
var ArrowUp = __webpack_require__("4PR6");

// EXTERNAL MODULE: ./src/assets/icons/BathOil.tsx
var BathOil = __webpack_require__("/h3U");

// EXTERNAL MODULE: ./src/assets/icons/BeautyHealth.tsx
var BeautyHealth = __webpack_require__("6pqc");

// EXTERNAL MODULE: ./src/assets/icons/Beverage.tsx
var Beverage = __webpack_require__("Zvww");

// EXTERNAL MODULE: ./src/assets/icons/BookIcon.tsx
var BookIcon = __webpack_require__("9nwM");

// EXTERNAL MODULE: ./src/assets/icons/Breakfast.tsx
var Breakfast = __webpack_require__("njV9");

// EXTERNAL MODULE: ./src/assets/icons/CaretDownIcon.tsx
var CaretDownIcon = __webpack_require__("U8/s");

// EXTERNAL MODULE: ./src/assets/icons/CaretUpIcon.tsx
var CaretUpIcon = __webpack_require__("FSM0");

// EXTERNAL MODULE: ./src/assets/icons/CartIcon.tsx
var CartIcon = __webpack_require__("VlNk");

// EXTERNAL MODULE: ./src/assets/icons/CartIconBig.tsx
var CartIconBig = __webpack_require__("mzFI");

// EXTERNAL MODULE: ./src/assets/icons/CategoryIcon.tsx
var CategoryIcon = __webpack_require__("AQ4e");

// EXTERNAL MODULE: ./src/assets/icons/CheckMark.tsx
var CheckMark = __webpack_require__("EsHW");

// EXTERNAL MODULE: ./src/assets/icons/CloseIcon.tsx
var CloseIcon = __webpack_require__("2nMb");

// EXTERNAL MODULE: ./src/assets/icons/CloseSquare.tsx
var CloseSquare = __webpack_require__("Upcg");

// EXTERNAL MODULE: ./src/assets/icons/CNFlag.tsx
var CNFlag = __webpack_require__("5kWH");

// EXTERNAL MODULE: ./src/assets/icons/CoinIcon.tsx
var CoinIcon = __webpack_require__("Zzj4");

// EXTERNAL MODULE: ./src/assets/icons/Cooking.tsx
var Cooking = __webpack_require__("2/GM");

// EXTERNAL MODULE: ./src/assets/icons/CouponIcon.tsx
var CouponIcon = __webpack_require__("x/sk");

// EXTERNAL MODULE: ./src/assets/icons/CustomerIcon.tsx
var CustomerIcon = __webpack_require__("2SF0");

// EXTERNAL MODULE: ./src/assets/icons/Dairy.tsx
var Dairy = __webpack_require__("s8q9");

// EXTERNAL MODULE: ./src/assets/icons/DashboardIcon.tsx
var DashboardIcon = __webpack_require__("tD6N");

// EXTERNAL MODULE: ./src/assets/icons/DEFlag.tsx
var DEFlag = __webpack_require__("Dtxv");

// EXTERNAL MODULE: ./src/assets/icons/DeliveryIcon.tsx
var DeliveryIcon = __webpack_require__("3NfG");

// EXTERNAL MODULE: ./src/assets/icons/Deodorant.tsx
var Deodorant = __webpack_require__("X6fG");

// EXTERNAL MODULE: ./src/assets/icons/DressIcon.tsx
var DressIcon = __webpack_require__("Uoe+");

// EXTERNAL MODULE: ./src/assets/icons/EllipsisIcon.tsx
var EllipsisIcon = __webpack_require__("hMPX");

// EXTERNAL MODULE: ./src/assets/icons/ESFlag.tsx
var ESFlag = __webpack_require__("940+");

// EXTERNAL MODULE: ./src/assets/icons/Eyes.tsx
var Eyes = __webpack_require__("f++M");

// EXTERNAL MODULE: ./src/assets/icons/Face.tsx
var Face = __webpack_require__("mt7J");

// EXTERNAL MODULE: ./src/assets/icons/Facebook.tsx
var Facebook = __webpack_require__("lJ4R");

// EXTERNAL MODULE: ./src/assets/icons/FacialCare.tsx
var FacialCare = __webpack_require__("17+d");

// EXTERNAL MODULE: ./src/assets/icons/FruitsVegetable.tsx
var FruitsVegetable = __webpack_require__("pQO/");

// EXTERNAL MODULE: ./src/assets/icons/FurnitureIcon.tsx
var FurnitureIcon = __webpack_require__("eIRs");

// EXTERNAL MODULE: ./src/assets/icons/GiftBox.tsx
var GiftBox = __webpack_require__("g+f/");

// EXTERNAL MODULE: ./src/assets/icons/Google.tsx
var Google = __webpack_require__("eL1f");

// EXTERNAL MODULE: ./src/assets/icons/GooglePlus.tsx
var GooglePlus = __webpack_require__("j+XB");

// EXTERNAL MODULE: ./src/assets/icons/GroceryIcon.tsx
var GroceryIcon = __webpack_require__("KVte");

// EXTERNAL MODULE: ./src/assets/icons/Handbag.tsx
var Handbag = __webpack_require__("JsJ+");

// EXTERNAL MODULE: ./src/assets/icons/HandBags.tsx
var HandBags = __webpack_require__("6tF6");

// EXTERNAL MODULE: ./src/assets/icons/HelpIcon.tsx
var HelpIcon = __webpack_require__("aiMV");

// EXTERNAL MODULE: ./src/assets/icons/HomeCleaning.tsx
var HomeCleaning = __webpack_require__("WIgf");

// EXTERNAL MODULE: ./src/assets/icons/ILFlag.tsx
var ILFlag = __webpack_require__("OYId");

// EXTERNAL MODULE: ./src/assets/icons/InboxIcon.tsx
var InboxIcon = __webpack_require__("JMMK");

// EXTERNAL MODULE: ./src/assets/icons/InkPen.tsx
var InkPen = __webpack_require__("cER5");

// EXTERNAL MODULE: ./src/assets/icons/IosArrowDown.tsx
var IosArrowDown = __webpack_require__("TdNF");

// EXTERNAL MODULE: ./src/assets/icons/IosArrowUp.tsx
var IosArrowUp = __webpack_require__("fKbR");

// EXTERNAL MODULE: ./src/assets/icons/LaptopBags.tsx
var LaptopBags = __webpack_require__("SihP");

// EXTERNAL MODULE: ./src/assets/icons/Linkedin.tsx
var Linkedin = __webpack_require__("QArJ");

// EXTERNAL MODULE: ./src/assets/icons/Lips.tsx
var Lips = __webpack_require__("a4aU");

// EXTERNAL MODULE: ./src/assets/icons/LockIcon.tsx
var LockIcon = __webpack_require__("l3mL");

// EXTERNAL MODULE: ./src/assets/icons/LogoutIcon.tsx
var LogoutIcon = __webpack_require__("nbZN");

// EXTERNAL MODULE: ./src/assets/icons/LongArrowLeft.tsx
var LongArrowLeft = __webpack_require__("iAPg");

// EXTERNAL MODULE: ./src/assets/icons/MakeupIcon.tsx
var MakeupIcon = __webpack_require__("y1j5");

// EXTERNAL MODULE: ./src/assets/icons/MeatFish.tsx
var MeatFish = __webpack_require__("PElx");

// EXTERNAL MODULE: ./src/assets/icons/MedicineIcon.tsx
var MedicineIcon = __webpack_require__("/Q/Y");

// EXTERNAL MODULE: ./src/assets/icons/Members.tsx
var Members = __webpack_require__("FyrQ");

// EXTERNAL MODULE: ./src/assets/icons/MenuDown.tsx
var MenuDown = __webpack_require__("rS9M");

// EXTERNAL MODULE: ./src/assets/icons/MenuIcon.tsx
var MenuIcon = __webpack_require__("x2Nq");

// EXTERNAL MODULE: ./src/assets/icons/PlusMinus.tsx
var PlusMinus = __webpack_require__("OeMJ");

// EXTERNAL MODULE: ./src/assets/icons/MinusSquare.tsx
var MinusSquare = __webpack_require__("w2qo");

// EXTERNAL MODULE: ./src/assets/icons/NoCartBag.tsx
var NoCartBag = __webpack_require__("MXV/");

// EXTERNAL MODULE: ./src/assets/icons/NotificationIcon.tsx
var NotificationIcon = __webpack_require__("05h5");

// EXTERNAL MODULE: ./src/assets/icons/OptionIcon.tsx
var OptionIcon = __webpack_require__("JMIQ");

// EXTERNAL MODULE: ./src/assets/icons/OralCare.tsx
var OralCare = __webpack_require__("IWjl");

// EXTERNAL MODULE: ./src/assets/icons/OrderIcon.tsx
var OrderIcon = __webpack_require__("nRGc");

// EXTERNAL MODULE: ./src/assets/icons/OuterWear.tsx
var OuterWear = __webpack_require__("hXVB");

// EXTERNAL MODULE: ./src/assets/icons/Pants.tsx
var Pants = __webpack_require__("Jhtu");

// EXTERNAL MODULE: ./src/assets/icons/PencilIcon.tsx
var PencilIcon = __webpack_require__("1Zbg");

// EXTERNAL MODULE: ./src/assets/icons/PetCare.tsx
var PetCare = __webpack_require__("V/vm");

// EXTERNAL MODULE: ./src/assets/icons/PlusOutline.tsx
var PlusOutline = __webpack_require__("mho/");

// EXTERNAL MODULE: ./src/assets/icons/PlusSquare.tsx
var PlusSquare = __webpack_require__("PYmn");

// EXTERNAL MODULE: ./src/assets/icons/ProductIcon.tsx
var ProductIcon = __webpack_require__("6nhp");

// EXTERNAL MODULE: ./src/assets/icons/Purse.tsx
var Purse = __webpack_require__("dtQr");

// EXTERNAL MODULE: ./src/assets/icons/Refund.tsx
var Refund = __webpack_require__("YRZT");

// EXTERNAL MODULE: ./src/assets/icons/RefundIcon.tsx
var RefundIcon = __webpack_require__("rvb8");

// EXTERNAL MODULE: ./src/assets/icons/Restaurant.tsx
var Restaurant = __webpack_require__("YugL");

// EXTERNAL MODULE: ./src/assets/icons/Revenue.tsx
var Revenue = __webpack_require__("UOxV");

// EXTERNAL MODULE: ./src/assets/icons/SAFlag.tsx
var SAFlag = __webpack_require__("pDgd");

// EXTERNAL MODULE: ./src/assets/icons/SearchIcon.tsx
var SearchIcon = __webpack_require__("J7Kp");

// EXTERNAL MODULE: ./src/assets/icons/SearchIconSmall.tsx
var SearchIconSmall = __webpack_require__("8ekf");

// EXTERNAL MODULE: ./src/assets/icons/SettingIcon.tsx
var SettingIcon = __webpack_require__("fc4E");

// EXTERNAL MODULE: ./src/assets/icons/ShavingNeeds.tsx
var ShavingNeeds = __webpack_require__("aYlt");

// EXTERNAL MODULE: ./src/assets/icons/Shirts.tsx
var Shirts = __webpack_require__("n0yZ");

// EXTERNAL MODULE: ./src/assets/icons/ShoppingBag.tsx
var ShoppingBag = __webpack_require__("MkjF");

// EXTERNAL MODULE: ./src/assets/icons/ShoppingBagLarge.tsx
var ShoppingBagLarge = __webpack_require__("AuPN");

// EXTERNAL MODULE: ./src/assets/icons/ShoulderBags.tsx
var ShoulderBags = __webpack_require__("GNwe");

// EXTERNAL MODULE: ./src/assets/icons/SidebarCategoryIcon.tsx
var SidebarCategoryIcon = __webpack_require__("JwyM");

// EXTERNAL MODULE: ./src/assets/icons/SiteSettings.tsx
var SiteSettings = __webpack_require__("m0gv");

// EXTERNAL MODULE: ./src/assets/icons/Skirts.tsx
var Skirts = __webpack_require__("d1O7");

// EXTERNAL MODULE: ./src/assets/icons/SmartPhone.tsx
var SmartPhone = __webpack_require__("LfNW");

// EXTERNAL MODULE: ./src/assets/icons/Snacks.tsx
var Snacks = __webpack_require__("AiAP");

// EXTERNAL MODULE: ./src/assets/icons/Tops.tsx
var Tops = __webpack_require__("XYP1");

// EXTERNAL MODULE: ./src/assets/icons/Twitter.tsx
var Twitter = __webpack_require__("DFQe");

// EXTERNAL MODULE: ./src/assets/icons/UploadIcon.tsx
var UploadIcon = __webpack_require__("KKLf");

// EXTERNAL MODULE: ./src/assets/icons/UserAvatar.tsx
var UserAvatar = __webpack_require__("kZWF");

// EXTERNAL MODULE: ./src/assets/icons/UserIcon.tsx
var UserIcon = __webpack_require__("L4Ub");

// EXTERNAL MODULE: ./src/assets/icons/USFlag.tsx
var USFlag = __webpack_require__("t1q0");

// EXTERNAL MODULE: ./src/assets/icons/Wallet.tsx
var Wallet = __webpack_require__("0AHN");

// EXTERNAL MODULE: ./src/assets/icons/WomenDress.tsx
var WomenDress = __webpack_require__("4FEu");

// CONCATENATED MODULE: ./src/assets/icons/category-menu-icons.ts











































































































// EXTERNAL MODULE: ./src/layouts/header/menu/left-menu/left-menu.style.tsx
var left_menu_style = __webpack_require__("X/+y");

// CONCATENATED MODULE: ./src/layouts/header/menu/left-menu/left-menu.tsx
var left_menu_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












const left_menu_CategoryIcon = ({
  name
}) => {
  const TagName = category_menu_icons_namespaceObject[name];
  return !!TagName ? left_menu_jsx(TagName, null) : left_menu_jsx("p", null, " ");
};

const CategoryMenu = props => {
  const {
    0: typeMenu,
    1: setTypeMenu
  } = Object(external_react_["useState"])([]);
  const intl = Object(external_react_intl_["useIntl"])();

  const handleOnClick = item => {
    if (item.dynamic) {
      router_default.a.push('/[type]', `${item.href}`);
      props.onClick(item);
      return;
    }

    router_default.a.push(`${item.href}`);
    props.onClick(item);
  };

  Object(external_react_["useEffect"])(() => {
    Object(site_navigation["d" /* CATEGORY_MENU */])().then(res => {
      setTypeMenu(res);
    });
    return;
  }, []);
  return left_menu_jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, typeMenu.map(item => {
    return left_menu_jsx(left_menu_style["c" /* MenuItem */], _extends({
      key: item.id
    }, props, {
      onClick: () => handleOnClick(item)
    }), left_menu_jsx(left_menu_CategoryIcon, {
      name: item.icon
    }), left_menu_jsx(external_react_intl_["FormattedMessage"], {
      id: item.id,
      defaultMessage: item.defaultMessage
    }));
  }));
};

const LeftMenu = ({
  logo
}) => {
  const router = Object(router_["useRouter"])();
  const intl = Object(external_react_intl_["useIntl"])();
  const {
    data,
    error,
    loading
  } = Object(react_hooks_["useQuery"])(type_query["a" /* GET_TYPE */], {
    variables: {
      searchText: ''
    }
  });

  if (loading) {
    return left_menu_jsx(error_message["default"], {
      message: intl.formatMessage({
        id: 'loading',
        defaultMessage: 'Cargando...'
      })
    });
  }

  ;

  if (error) {
    return left_menu_jsx(error_message["default"], {
      message: error.message
    });
  }

  ;
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
  return left_menu_jsx(left_menu_style["b" /* LeftMenuBox */], null, left_menu_jsx(logo_logo["a" /* default */], {
    imageUrl: logo,
    alt: 'Shop Logo',
    onClick: initialMenu ? initialMenu : JSON.parse(localStorage.getItem('myMenu'))
  }));
}; // import React, { useState, useEffect } from 'react';
// import Router, { useRouter } from 'next/router';
// import { FormattedMessage } from 'react-intl';
// import Popover from 'components/popover/popover';
// import { useQuery } from '@apollo/react-hooks';
// import Logo from 'layouts/logo/logo';
// import { MenuDown } from 'assets/icons/MenuDown';
// import { CATEGORY_MENU_ITEMS,CATEGORY_MENU } from 'site-settings/site-navigation';
// import { GET_TYPE } from 'graphql/query/type.query';
// import ErrorMessage from 'components/error-message/error-message';
// import * as categoryMenuIcons from 'assets/icons/category-menu-icons';
// import {
//   MainMenu,
//   MenuItem,
//   SelectedItem,
//   Icon,
//   Arrow,
//   LeftMenuBox,
// } from './left-menu.style';
// const CategoryIcon = ({ name }) => {
//   const TagName = categoryMenuIcons[name];
//   return !!TagName ? <TagName /> : <p> </p>;
// };
// const CategoryMenu = (props: any) => {
//   const [typeMenu, setTypeMenu] = useState([]);
//   const handleOnClick = (item) => {
//     if (item.dynamic) {
//       Router.push('/[type]', `${item.href}`);
//       props.onClick(item);
//       return;
//     }
//     Router.push(`${item.href}`);
//     props.onClick(item);
//   };
//   useEffect(() => {
//     CATEGORY_MENU().then((res) => {
//       setTypeMenu(res);
//     })
//     return;
//   }, []);
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column' }}>
//       {typeMenu.map((item) => {
//         return(
//         <MenuItem key={item.id} {...props} onClick={() => handleOnClick(item)}>
//           <CategoryIcon name={item.icon} />
//           <FormattedMessage id={item.id} defaultMessage={item.defaultMessage} />
//         </MenuItem>
//       )})}
//     </div>
//   );
// };
// type Props = {
//   logo: string;
// };
// export const LeftMenu: React.FC<Props> = ({ logo }) => {
//   const router = useRouter();
//   const { data, error, loading } = useQuery(
//     GET_TYPE,
//     {
//       variables: {
//         searchText: ''
//       }
//     }
//   );
//   if (loading) {
//     return <ErrorMessage message={'Cargando...'} />
//   };
//   if (error) {
//     return (
//       <ErrorMessage message={error.message} />
//     );
//   };
//   const typeMenu = data.types.items.map((item) => {
//     return({
//       id: item.id,
//       href: `/${item.slug}`,
//       defaultMessage: item.name,
//       icon: item.icon,
//       dynamic: true,
//     })
//   })
//   const initialMenu = router.asPath == '/' ? typeMenu[0] : typeMenu.find((item) => item.href == router.asPath);
//   if(initialMenu){
//     if(localStorage.getItem('myMenu')){
//       localStorage.removeItem('myMenu');
//     }
//     localStorage.setItem('myMenu', JSON.stringify(initialMenu));
//   }
//   const [activeMenu, setActiveMenu] = React.useState(
//     initialMenu ?? JSON.parse(localStorage.getItem('myMenu'))
//   );
//   return(
//     <LeftMenuBox>
//       <Logo
//         imageUrl={logo}
//         alt={'Shop Logo'}
//         onClick={initialMenu ? initialMenu: JSON.parse(localStorage.getItem('myMenu'))}
//       />
//       <MainMenu>
//         <Popover
//           className="right"
//           handler={
//             <SelectedItem>
//               <span>
//                 <Icon>
//                   <CategoryIcon name={activeMenu?.icon} />
//                 </Icon>
//                 <span>
//                   <FormattedMessage
//                     id={activeMenu?.id}
//                     defaultMessage={activeMenu?.defaultMessage}
//                   />
//                 </span>
//               </span>
//               <Arrow>
//                 <MenuDown />
//               </Arrow>
//             </SelectedItem>
//           }
//           content={<CategoryMenu onClick={setActiveMenu} />}
//         />
//       </MainMenu>
//     </LeftMenuBox>
//   );
// };
// EXTERNAL MODULE: ./src/layouts/header/header.style.tsx
var header_style = __webpack_require__("HPEz");

// EXTERNAL MODULE: ./src/assets/images/logo.svg
var images_logo = __webpack_require__("40cp");
var logo_default = /*#__PURE__*/__webpack_require__.n(images_logo);

// EXTERNAL MODULE: ./src/assets/images/user.png
var user = __webpack_require__("upeG");
var user_default = /*#__PURE__*/__webpack_require__.n(user);

// EXTERNAL MODULE: ./src/layouts/is-home-page.ts
var is_home_page = __webpack_require__("hp67");

// CONCATENATED MODULE: ./src/layouts/header/header.tsx
var header_jsx = external_react_default.a.createElement;












const Header = ({
  className
}) => {
  const {
    authState: {
      isAuthenticated,
      isStaff
    },
    authDispatch
  } = external_react_default.a.useContext(auth_context["a" /* AuthContext */]);
  const {
    pathname,
    query
  } = Object(router_["useRouter"])();

  const handleLogout = () => {
    if (false) {}
  };

  const handleJoin = () => {
    authDispatch({
      type: 'SIGNIN'
    });
    if (!reuse_modal_["openModal"]) return;
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

  const type = pathname === '/restaurant' ? 'restaurant' : query.type;
  const showSearch = Object(is_home_page["a" /* isCategoryPage */])(type);
  return header_jsx(header_style["r" /* default */], {
    className: className,
    id: "layout-header"
  }, header_jsx(LeftMenu, {
    logo: logo_default.a
  }), header_jsx(RightMenu, {
    isAuthenticated: isAuthenticated,
    isStaff: isStaff,
    onJoin: handleJoin,
    onLogout: handleLogout,
    avatar: user_default.a
  }));
};

/* harmony default export */ var header = (Header);
// CONCATENATED MODULE: ./src/layouts/layout.style.tsx


const LayoutWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "layoutstyle__LayoutWrapper",
  componentId: "sc-1owhsib-0"
})(["background-color:", ";.reuseModalHolder{padding:0;overflow:auto;border-radius:", " ", " 0 0;border:0;}"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('radii.small', '3px'), Object(theme_get_["themeGet"])('radii.small', '3px'));
// EXTERNAL MODULE: ./src/assets/images/locationIcon.webp
var locationIcon = __webpack_require__("Y9i8");
var locationIcon_default = /*#__PURE__*/__webpack_require__.n(locationIcon);

// CONCATENATED MODULE: ./src/components/popover-bigger/useOnClickOutside.js

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
// CONCATENATED MODULE: ./src/components/popover-bigger/popover-bigger.style.tsx


const PopoverBiggerWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "popover-biggerstyle__PopoverBiggerWrapper",
  componentId: "sc-1j2qz1n-0"
})(["position:relative;cursor:pointer;.popover-handler{display:inline-block;cursor:pointer;}.popover-content{left:0px;top:calc(100% + 2px);display:block;min-width:340px;padding:15px 20px;position:absolute;border-radius:", ";background-color:", ";box-shadow:0 3px 20px rgba(142,142,142,0.14);z-index:99;&:before{content:'';position:absolute;width:0;height:0;border-style:solid;border-width:0 8px 9px 8px;border-color:transparent transparent ", " transparent;top:-8px;left:15px;box-shadow:-4px -4px 8px -3px rgba(142,142,142,0.14);pointer-events:none;}}&.right{.popover-content{left:auto;right:0px;&:before{left:auto;right:15px;}}}"], Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
/* harmony default export */ var popover_bigger_style = (PopoverBiggerWrapper);
// CONCATENATED MODULE: ./src/components/popover-bigger/popover-bigger.tsx
var popover_bigger_jsx = external_react_default.a.createElement;




const PopoverBigger = ({
  className,
  openHandler,
  closeHandler,
  content,
  direction
}) => {
  // PopoverBigger State
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
  } // Toggle PopoverBigger content


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
  return popover_bigger_jsx(popover_bigger_style, {
    className: addAllClasses.join(' '),
    ref: ref
  }, popover_bigger_jsx("div", {
    className: "popover-handler",
    onClick: handleToggle
  }, state ? openHandler : closeHandler), state && popover_bigger_jsx("div", {
    className: "popover-content"
  }, content && popover_bigger_jsx("div", {
    className: "inner-wrap",
    onClick: handleToggle
  }, content)));
};

/* harmony default export */ var popover_bigger = (PopoverBigger);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: ./src/utils/session.ts
var session = __webpack_require__("XHU+");

// EXTERNAL MODULE: ./src/features/delivery-selection/delivery-selection.tsx + 3 modules
var delivery_selection = __webpack_require__("4g4/");

// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// CONCATENATED MODULE: ./src/features/sub-header/sub-header.style.tsx



const hideSearch = Object(external_styled_components_["keyframes"])(["from{display:none;}to{display:flex;}"]);
const positionAnim = Object(external_styled_components_["keyframes"])(["from{position:fixed;opacity:1;}to{opacity:0;transition:all 0.3s ease;}"]);
const SubHeaderWrapper = external_styled_components_default.a.header.withConfig({
  displayName: "sub-headerstyle__SubHeaderWrapper",
  componentId: "sc-1oc18m6-0"
})(["position:absolute;background-color:transparent;box-shadow:none;border-bottom:1px solid ", ";border-top:1px solid ", ";padding:0px 10px;top:60px;display:flex;align-items:center;justify-content:space-between;left:0;width:100%;background-color:", ";box-shadow:", ";transition:all 0.3s ease;&.home{}@media (min-width:1600px){padding:0px 40px;}.headerSearch{@media only screen and (min-width:991px) and (max-width:1200px){input{width:80%;}.buttonText{display:none;}}}&.unSticky{animation:", " 0.3s ease;.minimal-wrap,.headerSearch{animation:", " 0.3s ease;display:none;}.banner-search{width:650px;}@media (max-width:1366px){.headerSearc,.banner-search{margin:0 5%;}}}&.sticky{background-color:", ";position:fixed;box-shadow:", ";.modern-wrap,.banner-search{animation:", " 0.3s ease;display:none;}.minimal-wrap{animation:", " 0.3s ease;display:flex;width:75%;}@media (max-width:1366px){.minimal-wrap{margin:0 5%;}}.headerSearch{display:flex;svg{height:30px;width:30px;padding-left:15px;}form{background-color:", ";input{background-color:", ";}}@media only screen and (min-width:991px) and (max-width:1200px){.buttonText{display:none;}}}}.popover-wrapper{.popover-content{padding:20px 0;.menu-item{a{margin:0;padding:12px 30px;border-bottom:1px solid ", ";cursor:pointer;white-space:nowrap;&:last-child{border-bottom:0;}&:hover{color:", ";}&.current-page{color:", ";}.menu-item-icon{margin-right:15px;}}}}}.headerSearch{input{@media (max-width:1400px){padding:0 15px;font-size:", "px;}@media only screen and (min-width:991px) and (max-width:1200px){}}button{@media (max-width:1400px){padding:0 15px;font-size:", "px;}}}"], Object(theme_get_["themeGet"])('colors.primary.regular', '#dbe9e5'), Object(theme_get_["themeGet"])('colors.primary.regular', '#dbe9e5'), Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)'), positionAnim, hideSearch, Object(theme_get_["themeGet"])('colors.white', '#ffffff'), Object(theme_get_["themeGet"])('shadows.header', '0 1px 2px rgba(0, 0, 0, 0.06)'), hideSearch, hideSearch, Object(theme_get_["themeGet"])('colors.gray.400', '#F3F3F3'), Object(theme_get_["themeGet"])('colors.gray.400', '#F3F3F3'), Object(theme_get_["themeGet"])('colors.gray.200', '#F7F7F7'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontSizes.base', '15'));
const BannerText = external_styled_components_default.a.div.withConfig({
  displayName: "sub-headerstyle__BannerText",
  componentId: "sc-1oc18m6-1"
})(["font-family:'Poppins';color:black;margin-left:4px;margin-top:2px;"]);
const DeliveryText = external_styled_components_default.a.div.withConfig({
  displayName: "sub-headerstyle__DeliveryText",
  componentId: "sc-1oc18m6-2"
})(["font-family:'Poppins';color:black;margin:0px 5px;"]);
const LocationContent = external_styled_components_default.a.div.withConfig({
  displayName: "sub-headerstyle__LocationContent",
  componentId: "sc-1oc18m6-3"
})(["display:flex;align-items:center;justify-content:space-between;"]);
const DeliveryMethods = external_styled_components_default.a.div.withConfig({
  displayName: "sub-headerstyle__DeliveryMethods",
  componentId: "sc-1oc18m6-4"
})(["display:flex;flex-direction:column;"]);
const Options = external_styled_components_default.a.div.withConfig({
  displayName: "sub-headerstyle__Options",
  componentId: "sc-1oc18m6-5"
})(["display:flex;flex-direction:row;justify-content:space-around;padding:0px 20px;"]);
const CardWrapper = external_styled_components_default.a.span.withConfig({
  displayName: "sub-headerstyle__CardWrapper",
  componentId: "sc-1oc18m6-6"
})(["display:flex;width:100px;flex-direction:column;position:relative;background-color:#e4f4fc;padding:5px 8px;border-radius:", ";border-width:1px;margin-bottom:10px;border-style:solid;border-color:", ";text-align:center;"], Object(theme_get_["themeGet"])('radii.base', '6px'), props => props.color || '#e4f4fc');
const MethodOption = external_styled_components_default.a.div.withConfig({
  displayName: "sub-headerstyle__MethodOption",
  componentId: "sc-1oc18m6-7"
})(["display:flex;align-items:center;justify-content:space-between;width:60px;height:30px;"]);
const BannerIcon = external_styled_components_default.a.span.withConfig({
  displayName: "sub-headerstyle__BannerIcon",
  componentId: "sc-1oc18m6-8"
})(["line-height:0;img{height:18px;line-height:0;-webkit-filter:invert(100%);filter:invert(100%);}"]);
const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "sub-headerstyle__Wrapper",
  componentId: "sc-1oc18m6-9"
})(["text-align:center;background-color:", ";"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
const Container = external_styled_components_default.a.div.withConfig({
  displayName: "sub-headerstyle__Container",
  componentId: "sc-1oc18m6-10"
})(["padding:10px 20px;@media (max-width:768px){padding:10px 20px;}"]);
const LogoWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "sub-headerstyle__LogoWrapper",
  componentId: "sc-1oc18m6-11"
})(["margin-bottom:30px;img{max-width:160px;}"]);
const Heading = external_styled_components_default.a.h4.withConfig({
  displayName: "sub-headerstyle__Heading",
  componentId: "sc-1oc18m6-12"
})(["color:black;margin-bottom:10px;font-family:", ";font-size:", "px;font-weight:", ";"], Object(theme_get_["themeGet"])('fonts.heading', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.base', '17'), Object(theme_get_["themeGet"])('fontWeights.medium', '500'));
const SubHeading = external_styled_components_default.a.span.withConfig({
  displayName: "sub-headerstyle__SubHeading",
  componentId: "sc-1oc18m6-13"
})(["margin-bottom:30px;font-family:", ";font-size:", "px;font-weight:", ";color:", ";display:block;line-height:1.5;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const OfferSection = external_styled_components_default.a.div.withConfig({
  displayName: "sub-headerstyle__OfferSection",
  componentId: "sc-1oc18m6-14"
})(["padding:20px;background-color:", ";color:", ";display:flex;justify-content:center;align-items:center;"], Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const Offer = external_styled_components_default.a.p.withConfig({
  displayName: "sub-headerstyle__Offer",
  componentId: "sc-1oc18m6-15"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin:0;margin-left:10px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const Input = external_styled_components_default.a.input.withConfig({
  displayName: "sub-headerstyle__Input",
  componentId: "sc-1oc18m6-16"
})(["width:100%;height:48px;cursor:pointer;border-radius:", ";background-color:", ";border:1px solid ", ";font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:19px;padding:0 18px;box-sizing:border-box;transition:border-color 0.25s ease;margin-bottom:20px;text-align:center;&:hover,&:focus{outline:0;}&:focus{border-color:", ";}&::placeholder{color:", ";}&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}&.disabled{.inner-wrap{cursor:not-allowed;opacity:0.6;}}"], Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'), Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'), Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c')); // export const Button = styled(Buttons)`
//   border-radius: ${themeGet('radii.base', '6px')};
// `;


// CONCATENATED MODULE: ./src/features/sub-header/sub-header.tsx
var sub_header_jsx = external_react_default.a.createElement;












const LocationMenu = ({
  deliveryMethodSaved,
  isOpen
}) => {
  var _deliveryMethodSaved$, _deliveryMethodSaved$2, _deliveryMethodSaved$3, _deliveryMethodSaved$4, _deliveryMethodSaved$5, _deliveryMethodSaved$6, _deliveryMethodSaved$7, _deliveryMethodSaved$8, _deliveryMethodSaved$9;

  const mobile = Object(use_media["a" /* useMedia */])('(max-width: 580px)');
  const address = mobile ? deliveryMethodSaved === null || deliveryMethodSaved === void 0 ? void 0 : (_deliveryMethodSaved$ = deliveryMethodSaved.details) === null || _deliveryMethodSaved$ === void 0 ? void 0 : (_deliveryMethodSaved$2 = _deliveryMethodSaved$.split('|')) === null || _deliveryMethodSaved$2 === void 0 ? void 0 : _deliveryMethodSaved$2[0].substring(0, (deliveryMethodSaved === null || deliveryMethodSaved === void 0 ? void 0 : (_deliveryMethodSaved$3 = deliveryMethodSaved.details) === null || _deliveryMethodSaved$3 === void 0 ? void 0 : (_deliveryMethodSaved$4 = _deliveryMethodSaved$3.split('|')) === null || _deliveryMethodSaved$4 === void 0 ? void 0 : (_deliveryMethodSaved$5 = _deliveryMethodSaved$4[0]) === null || _deliveryMethodSaved$5 === void 0 ? void 0 : _deliveryMethodSaved$5.length) - 6) : deliveryMethodSaved === null || deliveryMethodSaved === void 0 ? void 0 : (_deliveryMethodSaved$6 = deliveryMethodSaved.details) === null || _deliveryMethodSaved$6 === void 0 ? void 0 : (_deliveryMethodSaved$7 = _deliveryMethodSaved$6.split('|')) === null || _deliveryMethodSaved$7 === void 0 ? void 0 : _deliveryMethodSaved$7[0];
  const time = deliveryMethodSaved === null || deliveryMethodSaved === void 0 ? void 0 : (_deliveryMethodSaved$8 = deliveryMethodSaved.details) === null || _deliveryMethodSaved$8 === void 0 ? void 0 : (_deliveryMethodSaved$9 = _deliveryMethodSaved$8.split('|')) === null || _deliveryMethodSaved$9 === void 0 ? void 0 : _deliveryMethodSaved$9[1];
  const intl = Object(external_react_intl_["useIntl"])();
  const defaultText = intl.formatMessage({
    id: 'defaultDeliveryPickupText',
    defaultMessage: 'check here'
  });
  return sub_header_jsx(LocationContent, null, isOpen ? sub_header_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faChevronCircleDown"],
    className: "fas fa-chevron-down",
    style: {
      color: "black"
    }
  }) : sub_header_jsx(react_fontawesome_["FontAwesomeIcon"], {
    icon: free_solid_svg_icons_["faChevronCircleUp"],
    className: "fas fa-chevron-up",
    style: {
      color: "black"
    }
  }), sub_header_jsx(DeliveryText, null, deliveryMethodSaved ? (deliveryMethodSaved === null || deliveryMethodSaved === void 0 ? void 0 : deliveryMethodSaved.isPickUp) ? constant["c" /* DeliveryMethodsConstants */].PICKUP : constant["c" /* DeliveryMethodsConstants */].DELIVERY : defaultText), (deliveryMethodSaved === null || deliveryMethodSaved === void 0 ? void 0 : deliveryMethodSaved.name) && address && sub_header_jsx(external_react_default.a.Fragment, null, "|", sub_header_jsx(BannerIcon, null, sub_header_jsx("img", {
    src: locationIcon_default.a,
    alt: ""
  })), sub_header_jsx(BannerText, null, `${deliveryMethodSaved.name} - ${address}`)));
};

const SubHeader = (_ref) => {
  let props = Object.assign({}, _ref);
  const [deliveryMethodSaved, setDeliveryMethodSaved] = external_react_default.a.useState();
  Object(external_react_["useEffect"])(() => {
    if (Object(session["a" /* getCookie */])(constant["m" /* deliveryMethodCookieKeyName */]) && !deliveryMethodSaved) {
      const deliveryMethodSaved = JSON.parse(Object(session["a" /* getCookie */])(constant["m" /* deliveryMethodCookieKeyName */]));
      setDeliveryMethodSaved(deliveryMethodSaved);
    }
  }, [deliveryMethodSaved]);
  return sub_header_jsx(SubHeaderWrapper, {
    className: props.className,
    id: "layout-header"
  }, sub_header_jsx(popover_bigger, {
    direction: "left",
    className: "user-pages-dropdown",
    openHandler: sub_header_jsx(LocationMenu, {
      isOpen: false,
      deliveryMethodSaved: deliveryMethodSaved
    }),
    closeHandler: sub_header_jsx(LocationMenu, {
      isOpen: true,
      deliveryMethodSaved: deliveryMethodSaved
    }),
    content: sub_header_jsx(delivery_selection["a" /* default */], {
      deliveryMethodSaved: deliveryMethodSaved,
      setDeliveryMethodSaved: setDeliveryMethodSaved
    })
  }));
};

/* harmony default export */ var sub_header = (SubHeader);
// CONCATENATED MODULE: ./src/layouts/app-layout.tsx
var app_layout_jsx = external_react_default.a.createElement;












const MobileHeader = dynamic_default()(() => __webpack_require__.e(/* import() */ 30).then(__webpack_require__.bind(null, "UTRa")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("UTRa")],
    modules: ['./header/mobile-header']
  }
});

const Layout = ({
  className,
  children,
  // deviceType: { mobile, tablet, desktop },
  token
}) => {
  const intl = Object(external_react_intl_["useIntl"])();
  const isSticky = Object(app_provider["c" /* useAppState */])('isSticky');
  const {
    pathname,
    query
  } = Object(router_["useRouter"])();
  const type = pathname === '/restaurant' ? 'restaurant' : query.type;
  const newTypeArry = [];
  const {
    data,
    error,
    loading
  } = Object(react_hooks_["useQuery"])(type_query["a" /* GET_TYPE */], {
    variables: {
      searchText: ''
    }
  });

  if (loading) {
    return app_layout_jsx(error_message["default"], {
      message: intl.formatMessage({
        id: 'loading',
        defaultMessage: 'Cargando...'
      })
    });
  }

  ;

  if (error) {
    return app_layout_jsx(error_message["default"], {
      message: error.message
    });
  }

  ;

  const isHomeHandler = (typedata, type) => {
    if (typedata) {
      typedata.types.items.map((item, index) => {
        newTypeArry.push(item.slug);
      });

      if (newTypeArry.includes(`${type}`)) {
        return true;
      } else {
        return false;
      }
    } else {
      return;
    }
  };

  return app_layout_jsx(LayoutWrapper, {
    className: `layoutWrapper ${className}`
  }, app_layout_jsx(external_react_stickynode_default.a, {
    enabled: isSticky,
    innerZ: 1001
  }, app_layout_jsx(MobileHeader, {
    className: `${isSticky ? 'sticky' : 'unSticky'} ${isHomeHandler(data, type) ? 'home' : ''} desktop`
  }), app_layout_jsx(header, {
    className: `${isSticky && isHomeHandler(data, type) ? 'sticky' : 'unSticky'} ${isHomeHandler(data, type) ? 'home' : ''}`
  }), app_layout_jsx(sub_header, {
    className: `${isSticky ? 'sticky' : 'unSticky'} ${isHomeHandler(data, type) ? 'home' : ''} desktop`
  })), children);
};

/* harmony default export */ var app_layout = (Layout);
// EXTERNAL MODULE: /Users/estebanmuruzabal/work/ditto/client/node_modules/rc-drawer/assets/index.css
var assets = __webpack_require__("5sXw");

// EXTERNAL MODULE: /Users/estebanmuruzabal/work/ditto/client/node_modules/rc-table/assets/index.css
var rc_table_assets = __webpack_require__("fX+b");

// EXTERNAL MODULE: /Users/estebanmuruzabal/work/ditto/client/node_modules/rc-collapse/assets/index.css
var rc_collapse_assets = __webpack_require__("Nm2X");

// EXTERNAL MODULE: /Users/estebanmuruzabal/work/ditto/client/node_modules/react-multi-carousel/lib/styles.css
var styles = __webpack_require__("KBQx");

// EXTERNAL MODULE: ./src/components/multi-carousel/multi-carousel.style.css
var multi_carousel_style = __webpack_require__("OfaO");

// EXTERNAL MODULE: /Users/estebanmuruzabal/work/ditto/client/node_modules/@redq/reuse-modal/lib/index.css
var lib = __webpack_require__("2p10");

// EXTERNAL MODULE: ./src/assets/styles/global.style.tsx
var global_style = __webpack_require__("jbEd");

// EXTERNAL MODULE: /Users/estebanmuruzabal/work/ditto/client/node_modules/react-phone-input-2/lib/material.css
var material = __webpack_require__("wn6T");

// EXTERNAL MODULE: /Users/estebanmuruzabal/work/ditto/client/node_modules/@fortawesome/fontawesome-svg-core/styles.css
var fontawesome_svg_core_styles = __webpack_require__("Q5dP");

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__("sLJp");

// EXTERNAL MODULE: /Users/estebanmuruzabal/work/ditto/client/node_modules/react-time-picker/dist/TimePicker.css
var TimePicker = __webpack_require__("OQAR");

// EXTERNAL MODULE: ./src/site-settings/site-translation/lang/en.json
var en = __webpack_require__("r/UT");

// EXTERNAL MODULE: ./src/site-settings/site-translation/lang/ar.json
var ar = __webpack_require__("ojJp");

// EXTERNAL MODULE: ./src/site-settings/site-translation/lang/es.json
var es = __webpack_require__("wrRK");

// EXTERNAL MODULE: ./src/site-settings/site-translation/lang/de.json
var de = __webpack_require__("Ou8F");

// EXTERNAL MODULE: ./src/site-settings/site-translation/lang/zh.json
var zh = __webpack_require__("RHsn");

// EXTERNAL MODULE: ./src/site-settings/site-translation/lang/he.json
var he = __webpack_require__("ToeK");

// CONCATENATED MODULE: ./src/site-settings/site-translation/messages.ts






const messages = {
  en: en,
  ar: ar,
  es: es,
  de: de,
  zh: zh,
  he: he
};
// EXTERNAL MODULE: /Users/estebanmuruzabal/work/ditto/client/node_modules/typeface-lato/index.css
var typeface_lato = __webpack_require__("DdEw");

// EXTERNAL MODULE: /Users/estebanmuruzabal/work/ditto/client/node_modules/typeface-poppins/index.css
var typeface_poppins = __webpack_require__("mVRT");

// CONCATENATED MODULE: ./src/pages/_app.tsx

var _app_jsx = external_react_default.a.createElement;

function _app_extends() { _app_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _app_extends.apply(this, arguments); }










 // External CSS import here








 // import Font Awesome CSS



fontawesome_svg_core_["config"].autoAddCss = false;
 // import 'react-clock/dist/Clock.css';
// Language translation messages



 // need to provide types

function ExtendedApp({
  Component,
  pageProps
}) {
  const mobile = Object(use_media["a" /* useMedia */])('(max-width: 580px)');
  const tablet = Object(use_media["a" /* useMedia */])('(max-width: 991px)');
  const desktop = Object(use_media["a" /* useMedia */])('(min-width: 992px)');
  const apolloClient = Object(apollo["b" /* useApollo */])(pageProps.initialApolloState);
  return _app_jsx(react_hooks_["ApolloProvider"], {
    client: apolloClient
  }, _app_jsx(external_styled_components_["ThemeProvider"], {
    theme: defaultTheme
  }, _app_jsx(language_provider["a" /* LanguageProvider */], {
    messages: messages
  }, _app_jsx(use_cart["a" /* CartProvider */], null, _app_jsx(app_provider["a" /* AppProvider */], null, _app_jsx(AuthProvider, null, _app_jsx(app_layout, null, _app_jsx(Component, _app_extends({}, pageProps, {
    deviceType: {
      mobile,
      tablet,
      desktop
    }
  }))), _app_jsx(global_style["a" /* GlobalStyle */], null)))))));
}

/***/ }),

/***/ "hXVB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OuterWear; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const OuterWear = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 29",
    fill: color
  }, __jsx("path", {
    "data-name": "Path 99",
    d: "M15.643 5.659a1.993 1.993 0 00.453-.062c-.224-1.2-.4-1.9-.4-1.9a5.546 5.546 0 00-1.713-1.068 1.964 1.964 0 001.66 3.03z"
  }), __jsx("path", {
    "data-name": "Path 100",
    d: "M.896 5.596a1.962 1.962 0 002.113-2.97 5.561 5.561 0 00-1.712 1.068s-.178.697-.401 1.902z"
  }), __jsx("path", {
    "data-name": "Path 101",
    d: "M15.641 6.146a2.466 2.466 0 01-2.463-2.463 2.436 2.436 0 01.348-1.24 14.661 14.661 0 00-2.08-.61L11.422.664A5.484 5.484 0 008.947.008c-.225-.01-.677-.01-.904 0a5.5 5.5 0 00-2.478.653l-.02 1.169a14.746 14.746 0 00-2.08.612 2.446 2.446 0 01-2.658 3.64 53.686 53.686 0 00-.771 11.244H.26v.123a.512.512 0 00.532.493h1.24a.512.512 0 00.532-.493v-.123h.23s-.238-7.281 1.02-9.143v9.08a23.275 23.275 0 004.326.735V1.151a5.227 5.227 0 01-1.749-.19S6.529.498 8.043.516h.9c1.5.023 1.653.445 1.653.445a5.226 5.226 0 01-1.751.19v16.847a23.274 23.274 0 004.329-.736V8.184c1.259 1.866 1.023 9.143 1.023 9.143h.229v.123a.511.511 0 00.532.493H16.2a.512.512 0 00.532-.493v-.123h.224a53.827 53.827 0 00-.771-11.246 2.462 2.462 0 01-.544.065z"
  })));
};

/***/ }),

/***/ "hp67":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isCategoryPage; });
/* harmony import */ var site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5l48");

const arr = [site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_0__[/* HOME_PAGE */ "i"], site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_0__[/* GROCERY_PAGE */ "h"], site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_0__[/* CLOTHING_PAGE */ "f"], site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_0__[/* MAKEUP_PAGE */ "k"], site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_0__[/* BAGS_PAGE */ "b"], site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_0__[/* FURNITURE_PAGE */ "g"], site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_0__[/* BOOK_PAGE */ "c"], site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_0__[/* MEDICINE_PAGE */ "l"], site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_0__[/* RESTAURANT_PAGE */ "r"], site_settings_site_navigation__WEBPACK_IMPORTED_MODULE_0__[/* PROFILE_PAGE */ "n"]];
function isCategoryPage(pathname) {
  return arr.includes(`/${pathname}`);
}

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

/***/ "ik7d":
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "isz7":
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

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

/***/ "kZWF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAvatar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const UserAvatar = ({
  width = '25px',
  height = '30px',
  color = 'currentColor'
}) => {
  return __jsx("svg", {
    id: "user",
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 25.057 30.034"
  }, __jsx("path", {
    "data-name": "Path 1",
    d: "M94.265,14.467a7,7,0,0,0,5.115-2.119A7,7,0,0,0,101.5,7.233,7,7,0,0,0,99.38,2.119a7.232,7.232,0,0,0-10.229,0,7,7,0,0,0-2.119,5.114,7,7,0,0,0,2.12,5.115A7,7,0,0,0,94.265,14.467Zm0,0",
    transform: "translate(-81.926)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2",
    d: "M25,255.9a17.868,17.868,0,0,0-.243-1.9,14.951,14.951,0,0,0-.467-1.908,9.425,9.425,0,0,0-.784-1.779,6.715,6.715,0,0,0-1.183-1.541,5.215,5.215,0,0,0-1.7-1.068,5.872,5.872,0,0,0-2.169-.393,2.2,2.2,0,0,0-1.176.5c-.352.23-.765.5-1.225.79a7.018,7.018,0,0,1-1.585.7,6.154,6.154,0,0,1-3.877,0,7,7,0,0,1-1.584-.7c-.456-.291-.868-.557-1.226-.79a2.2,2.2,0,0,0-1.175-.5,5.864,5.864,0,0,0-2.169.393,5.211,5.211,0,0,0-1.7,1.068,6.716,6.716,0,0,0-1.182,1.541A9.443,9.443,0,0,0,.77,252.1,14.987,14.987,0,0,0,.3,254.006a17.8,17.8,0,0,0-.243,1.9c-.04.575-.06,1.171-.06,1.774a4.987,4.987,0,0,0,1.481,3.773A5.332,5.332,0,0,0,5.3,262.843H19.759a5.331,5.331,0,0,0,3.816-1.392,4.985,4.985,0,0,0,1.481-3.773C25.057,257.072,25.036,256.475,25,255.9Zm0,0",
    transform: "translate(0 -232.809)",
    fill: color
  }));
};

/***/ }),

/***/ "kp67":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ AuthenticationForm; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/features/authentication-form/authentication-form.style.tsx
var authentication_form_style = __webpack_require__("cTCn");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./src/contexts/auth/auth.context.tsx
var auth_context = __webpack_require__("QfjN");

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: ./src/components/forms/input.tsx
var input = __webpack_require__("VnWI");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./src/graphql/mutation/signin.ts

const SIGNIN_MUTATION = external_graphql_tag_default.a`
mutation Login($phone: String!, $password: String!) {
    login(phone: $phone, password: $password) {
        user {
            id
            role
            phones{
                number
            }
        }
        access_token
    }
}
`;
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-phone-input-2"
var external_react_phone_input_2_ = __webpack_require__("ZpXP");
var external_react_phone_input_2_default = /*#__PURE__*/__webpack_require__.n(external_react_phone_input_2_);

// EXTERNAL MODULE: /Users/estebanmuruzabal/work/ditto/client/node_modules/react-phone-input-2/lang/es.json
var es = __webpack_require__("XYff");

// CONCATENATED MODULE: ./src/features/authentication-form/login.tsx
var __jsx = external_react_default.a.createElement;











function SignInModal() {
  var _error$toString, _error$toString2;

  const router = Object(router_["useRouter"])();
  const intl = Object(external_react_intl_["useIntl"])();
  const {
    authDispatch
  } = Object(external_react_["useContext"])(auth_context["a" /* AuthContext */]);
  const [phone, setPhone] = external_react_default.a.useState('');
  const [password, setPassword] = external_react_default.a.useState('');

  const toggleSignUpForm = () => {
    authDispatch({
      type: 'SIGNUP'
    });
  };

  const toggleForgotPassForm = () => {
    authDispatch({
      type: 'FORGOTPASS'
    });
  };

  const togglePhoneVerificationForm = () => {
    authDispatch({
      type: 'PHONE_VERIFICATION'
    });
  };

  const [signinMeMutation, {
    loading,
    error,
    data
  }] = Object(react_hooks_["useMutation"])(SIGNIN_MUTATION, {
    onCompleted: data => {
      const {
        access_token,
        user
      } = data.login;

      if (false) {}
    },
    onError: error => {
      setPhone('');
      setPassword('');
    }
  });

  const handlePhoneChange = (value, data, event, formattedValue) => {
    setPhone(value);
  };

  const authError = (error === null || error === void 0 ? void 0 : (_error$toString = error.toString()) === null || _error$toString === void 0 ? void 0 : _error$toString.includes("User dose not exits.")) || (error === null || error === void 0 ? void 0 : (_error$toString2 = error.toString()) === null || _error$toString2 === void 0 ? void 0 : _error$toString2.includes("Password dose not match"));
  return __jsx(authentication_form_style["l" /* Wrapper */], null, __jsx(authentication_form_style["b" /* Container */], null, __jsx(authentication_form_style["d" /* Heading */], null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "welcomeBack",
    defaultMessage: "Welcome Back"
  })), __jsx(authentication_form_style["j" /* SubHeading */], null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "loginText",
    defaultMessage: "Login with your phone number & password"
  })), __jsx("form", {
    onSubmit: async e => {
      e.preventDefault();
      await signinMeMutation({
        variables: {
          phone,
          password
        }
      });
    }
  }, __jsx(external_react_phone_input_2_default.a, {
    inputProps: {
      name: 'phone',
      required: true,
      autoFocus: false
    },
    containerStyle: {
      textAlign: "left"
    },
    inputStyle: {
      backgroundColor: "#F7F7F7",
      height: "48px",
      marginBottom: "10px",
      width: "100%"
    },
    onlyCountries: ['us'],
    localization: es,
    country: 'us',
    masks: {
      us: '(...) ...-......'
    },
    value: phone,
    onChange: handlePhoneChange
  }), __jsx(input["a" /* Input */], {
    type: "password",
    placeholder: intl.formatMessage({
      id: 'passwordPlaceholder',
      defaultMessage: 'Password'
    }),
    value: password,
    onChange: e => setPassword(e.target.value),
    required: true,
    height: "48px",
    backgroundColor: "#F7F7F7",
    width: "100%",
    mb: "10px"
  }), __jsx(authentication_form_style["a" /* Button */], {
    variant: "primary",
    size: "big",
    disable: loading,
    style: {
      width: '100%'
    },
    type: "submit"
  }, !loading ? __jsx(external_react_intl_["FormattedMessage"], {
    id: "continueBtn",
    defaultMessage: "Continue"
  }) : __jsx(external_react_intl_["FormattedMessage"], {
    id: "loading",
    defaultMessage: "Cargando..."
  }))), authError && __jsx("p", {
    style: {
      marginTop: "15px",
      fontSize: '16px'
    }
  }, " ", intl.formatMessage({
    id: 'userNotFound',
    defaultMessage: 'Invalid user/password'
  })), error && !authError && __jsx("p", {
    style: {
      marginTop: "15px",
      fontSize: '16px'
    }
  }, " ", `${(error === null || error === void 0 ? void 0 : error.message) || error}. Please try again`), __jsx(authentication_form_style["g" /* Offer */], {
    style: {
      padding: '20px 0',
      fontSize: '20px'
    }
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "dontHaveAccount",
    defaultMessage: "Don't have an account?"
  }), ' ', __jsx(authentication_form_style["f" /* LinkButton */], {
    onClick: toggleSignUpForm
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "signUpBtnText",
    defaultMessage: "Sign Up"
  })))), __jsx(authentication_form_style["h" /* OfferSection */], null, __jsx(authentication_form_style["g" /* Offer */], null, __jsx(external_react_intl_["FormattedMessage"], {
    id: "phoneVerifyText",
    defaultMessage: "Phone number not verified?"
  }), ' ', __jsx(authentication_form_style["f" /* LinkButton */], {
    onClick: togglePhoneVerificationForm
  }, __jsx(external_react_intl_["FormattedMessage"], {
    id: "verifyNowText",
    defaultMessage: "Verify Now"
  })))));
}
// EXTERNAL MODULE: /Users/estebanmuruzabal/work/ditto/client/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./src/graphql/mutation/signup.ts

const SIGNUP_MUTATION = external_graphql_tag_default.a`
mutation SignUp($phone: String!, $password: String!, $name: String!) {
  signUp(phone: $phone, password: $password, name: $name) {
    status
    message
  }
}
`;
const PHONE_VERIFICATION_MUTATION = external_graphql_tag_default.a`
mutation phoneVerification($phone: String!) {
    phoneVerification(phone: $phone) {
    status
    message
  }
}
`;
const PHONE_VERIFICATION_CHECK_MUTATION = external_graphql_tag_default.a`
mutation phoneVerificationCheck($phone: String!, $verification_code: String!) {
    phoneVerificationCheck(phone: $phone, verification_code: $verification_code) {
        user {
            id
            phones{
                number
            }
        }
        access_token
  }
}
`;
// CONCATENATED MODULE: ./src/features/authentication-form/register.tsx
var register_jsx = external_react_default.a.createElement;










function SignOutModal() {
  const intl = Object(external_react_intl_["useIntl"])();
  const {
    authState,
    authDispatch
  } = Object(external_react_["useContext"])(auth_context["a" /* AuthContext */]);

  const toggleSignInForm = () => {
    authDispatch({
      type: 'SIGNIN'
    });
  };

  const toggleOtpForm = () => {
    authDispatch({
      type: 'OTP_VERIFICATION'
    });
  }; //signup


  const [phone, setPhone] = external_react_default.a.useState('');
  const [password, setPassword] = external_react_default.a.useState('');
  const [name, setName] = external_react_default.a.useState('');
  const [email, setEmail] = external_react_default.a.useState('');
  const [repeatPassword, setRepeatPassword] = external_react_default.a.useState('');
  const [errorMessage, setErrorMessage] = external_react_default.a.useState(null);
  const [signupMeMutation, {
    loading,
    error
  }] = Object(react_hooks_["useMutation"])(SIGNUP_MUTATION, {
    onCompleted: data => {
      if (false) {}

      setErrorMessage(null);
    },
    onError: error => {
      setPassword('');
      setRepeatPassword('');
      if ((error === null || error === void 0 ? void 0 : error.toString()) && (error === null || error === void 0 ? void 0 : error.toString().includes('User already registered'))) setErrorMessage(intl.formatMessage({
        id: 'userAlreadyRegistered',
        defaultMessage: 'User already registered'
      }));else if ((error === null || error === void 0 ? void 0 : error.toString()) && (error === null || error === void 0 ? void 0 : error.toString().includes('Incorrect length'))) setErrorMessage(intl.formatMessage({
        id: 'atLeast6Char',
        defaultMessage: 'Mínimo 6 caracteres'
      }));else setErrorMessage(error === null || error === void 0 ? void 0 : error.toString());
    }
  });

  const handlePhoneChange = (value, data, event, formattedValue) => {
    setPhone(value);
  };

  const hasMinLength = () => {
    return password.length >= 6;
  };

  const passwordsAreEqual = () => {
    return password === repeatPassword;
  }; // private hasSecurity() {
  //   let securityChecks = 0;
  //   // @ts-ignore
  //   securityChecks += this.hasLowerCase() + this.hasUpperCase() + this.hasDigit() + this.hasSpecialChar();
  //   return securityChecks >= 3;
  // }
  // private hasLowerCase() {
  //   return !!this.state.password.match(new RegExp('[a-z]'));
  // }
  // private hasUpperCase() {
  //   return !!this.state.password.match(new RegExp('[A-Z]'));
  // }
  // private hasDigit() {
  //   return !!this.state.password.match(new RegExp('[0-9]'));
  // }
  // private hasSpecialChar() {
  //   return !!this.state.password.match(/[\~\`\!\@\#\$\%\^\&\*\(\)\+\=\_\-\{\}\[\]\\|\:\;\"\'\?\/\<\>\,\.]/);
  // }


  const upperCaseEverything = str => {
    var splitStr = str.toLowerCase().split(' ');

    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    } // Directly return the joined string


    return splitStr.join(' ');
  };

  const setErrorFor5Sec = messageId => {
    const error = intl.formatMessage({
      id: messageId,
      defaultMessage: 'Please check the form'
    });
    setErrorMessage(error);
    setTimeout(() => setErrorMessage(null), 1500);
    return null;
  };

  return register_jsx(authentication_form_style["l" /* Wrapper */], null, register_jsx(authentication_form_style["b" /* Container */], null, register_jsx(authentication_form_style["d" /* Heading */], null, register_jsx(external_react_intl_["FormattedMessage"], {
    id: "signUpBtnText",
    defaultMessage: "Sign Up"
  })), register_jsx(authentication_form_style["j" /* SubHeading */], null, register_jsx(external_react_intl_["FormattedMessage"], {
    id: "signUpText",
    defaultMessage: ""
  })), register_jsx("form", {
    method: "post",
    onSubmit: async e => {
      e.preventDefault();

      if (!passwordsAreEqual()) {
        setErrorFor5Sec('passShouldBeEqual');
        return;
      }

      await signupMeMutation({
        variables: {
          phone,
          password,
          name
        }
      });
    }
  }, register_jsx(input["a" /* Input */], {
    type: "text",
    name: "name",
    width: "100%",
    value: upperCaseEverything(name),
    onChange: e => setName(upperCaseEverything(e.target.value)),
    placeholder: intl.formatMessage({
      id: 'namePlaceholder',
      defaultMessage: 'Complete name'
    }),
    oninvalid: "this.setCustomValidity('Please Enter valid email')",
    oninput: "setCustomValidity('')",
    height: "48px",
    backgroundColor: "#F7F7F7",
    mb: "10px",
    required: true
  }), register_jsx(input["a" /* Input */], {
    type: "email",
    name: "email",
    width: "100%",
    placeholder: intl.formatMessage({
      id: 'emailSignUpPlaceholder',
      defaultMessage: 'Email address'
    }),
    value: email,
    onChange: e => setEmail(e.target.value),
    backgroundColor: "#F7F7F7",
    marginBottom: "10px" // intlInputLabelId="profileEmailField"

  }), register_jsx(external_react_phone_input_2_default.a, {
    inputProps: {
      name: 'Numero de telefono',
      required: true,
      autoFocus: false
    },
    containerStyle: {
      textAlign: "left"
    },
    inputStyle: {
      backgroundColor: "#F7F7F7",
      height: "48px",
      marginBottom: "10px",
      width: "100%"
    },
    onlyCountries: ['us'],
    localization: es,
    country: 'us',
    masks: {
      us: '(...) ...-....'
    },
    value: phone,
    onChange: handlePhoneChange
  }), register_jsx(input["a" /* Input */], {
    type: "text",
    name: "password",
    value: password,
    onChange: e => setPassword(e.target.value),
    placeholder: intl.formatMessage({
      id: 'passwordPlaceholderRegister',
      defaultMessage: 'Password (min 6 characters)'
    }),
    height: "48px",
    width: "100%",
    backgroundColor: "#F7F7F7",
    mb: "10px",
    required: true
  }), register_jsx(input["a" /* Input */], {
    type: "text",
    name: "password",
    width: "100%",
    value: repeatPassword,
    onChange: e => setRepeatPassword(e.target.value),
    placeholder: intl.formatMessage({
      id: 'passwordRepeatPlaceholder',
      defaultMessage: 'Password (min 6 characters)'
    }),
    height: "48px",
    backgroundColor: "#F7F7F7",
    mb: "10px",
    required: true
  }), !hasMinLength && register_jsx(authentication_form_style["k" /* SubrequirementContainer */], null, register_jsx(authentication_form_style["c" /* Dot */], null), register_jsx(authentication_form_style["i" /* Requirement */], null, intl.formatMessage({
    id: 'atLeast6Char',
    defaultMessage: 'At least 6 characters'
  }))), !passwordsAreEqual && register_jsx(authentication_form_style["k" /* SubrequirementContainer */], null, register_jsx(authentication_form_style["c" /* Dot */], null), register_jsx(authentication_form_style["i" /* Requirement */], null, intl.formatMessage({
    id: 'passShouldBeEqual',
    defaultMessage: 'Passwords does not match'
  }))), register_jsx(authentication_form_style["e" /* HelperText */], {
    style: {
      padding: '20px 0 30px'
    }
  }, register_jsx(external_react_intl_["FormattedMessage"], {
    id: "tramsText",
    defaultMessage: "By signing up, you agree to Ditto's"
  }), "\xA0", register_jsx(link_default.a, {
    href: "/terms"
  }, register_jsx("a", null, register_jsx(external_react_intl_["FormattedMessage"], {
    id: "termsConditionText",
    defaultMessage: "Terms & Conditions"
  })))), register_jsx(authentication_form_style["a" /* Button */], {
    variant: "primary",
    size: "big",
    width: "100%",
    type: "submit"
  }, register_jsx(external_react_intl_["FormattedMessage"], {
    id: "registerBtn",
    defaultMessage: "Continue"
  }))), loading && register_jsx("p", {
    style: {
      marginTop: "15px"
    }
  }, intl.formatMessage({
    id: 'loading',
    defaultMessage: 'Cargando...'
  })), (error || errorMessage) && register_jsx("p", {
    style: {
      marginTop: "15px",
      color: "red"
    }
  }, errorMessage), register_jsx(authentication_form_style["g" /* Offer */], {
    style: {
      padding: '20px 0'
    }
  }, register_jsx(external_react_intl_["FormattedMessage"], {
    id: "alreadyHaveAccount",
    defaultMessage: "Already have an account?"
  }), ' ', register_jsx(authentication_form_style["f" /* LinkButton */], {
    onClick: toggleSignInForm
  }, register_jsx(external_react_intl_["FormattedMessage"], {
    id: "loginBtnText",
    defaultMessage: "Login"
  })))));
}
// CONCATENATED MODULE: ./src/features/authentication-form/forgot-password.tsx
var forgot_password_jsx = external_react_default.a.createElement;





function ForgotPasswordModal() {
  const {
    authDispatch
  } = Object(external_react_["useContext"])(auth_context["a" /* AuthContext */]);
  const intl = Object(external_react_intl_["useIntl"])();

  const toggleSignInForm = () => {
    authDispatch({
      type: 'SIGNIN'
    });
  };

  return forgot_password_jsx(authentication_form_style["l" /* Wrapper */], null, forgot_password_jsx(authentication_form_style["b" /* Container */], {
    style: {
      paddingBottom: 30
    }
  }, forgot_password_jsx(authentication_form_style["d" /* Heading */], null, forgot_password_jsx(external_react_intl_["FormattedMessage"], {
    id: "forgotPassText",
    defaultMessage: "Forgot Password"
  })), forgot_password_jsx(authentication_form_style["j" /* SubHeading */], null, forgot_password_jsx(external_react_intl_["FormattedMessage"], {
    id: "sendResetPassText",
    defaultMessage: "We'll send you a link to reset your password"
  })), forgot_password_jsx(input["a" /* Input */], {
    type: "text",
    placeholder: intl.formatMessage({
      id: 'emailAddressPlaceholder',
      defaultMessage: 'Email Address or Contact No.'
    }),
    height: "48px",
    backgroundColor: "#F7F7F7",
    mb: "10px"
  }), forgot_password_jsx(authentication_form_style["a" /* Button */], {
    variant: "primary",
    size: "big",
    style: {
      width: '100%'
    },
    type: "submit"
  }, forgot_password_jsx(external_react_intl_["FormattedMessage"], {
    id: "resetPasswordBtn",
    defaultMessage: "Reset Password"
  })), forgot_password_jsx(authentication_form_style["g" /* Offer */], {
    style: {
      padding: '20px 0 0'
    }
  }, forgot_password_jsx(external_react_intl_["FormattedMessage"], {
    id: "backToSign",
    defaultMessage: "Back to"
  }), ' ', forgot_password_jsx(authentication_form_style["f" /* LinkButton */], {
    onClick: toggleSignInForm
  }, forgot_password_jsx(external_react_intl_["FormattedMessage"], {
    id: "loginBtnText",
    defaultMessage: "Login"
  })))));
}
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/features/authentication-form/otpForm.tsx
var otpForm_jsx = external_react_default.a.createElement;









const Container = external_styled_components_default.a.div.withConfig({
  displayName: "otpForm__Container",
  componentId: "riqlfd-0"
})(["padding:40px 60px;@media (max-width:768px){padding:40px 30px;}"]);
function OtpModal() {
  const router = Object(router_["useRouter"])();
  const intl = Object(external_react_intl_["useIntl"])();
  const {
    authDispatch
  } = Object(external_react_["useContext"])(auth_context["a" /* AuthContext */]);
  const [otp, setOtp] = external_react_default.a.useState('');
  const [signinMeMutation, {
    loading,
    error,
    data
  }] = Object(react_hooks_["useMutation"])(PHONE_VERIFICATION_CHECK_MUTATION, {
    onCompleted: data => {
      const {
        access_token,
        user
      } = data.phoneVerificationCheck;

      if (false) {}
    },
    onError: error => {
      setOtp('');
    }
  });

  const submitForm = async e => {
    e.preventDefault();
    await signinMeMutation({
      variables: {
        verification_code: otp,
        phone: localStorage.getItem('phone_number')
      }
    });
  };

  return otpForm_jsx(authentication_form_style["l" /* Wrapper */], null, otpForm_jsx(Container, null, otpForm_jsx(authentication_form_style["d" /* Heading */], null, otpForm_jsx(external_react_intl_["FormattedMessage"], {
    id: "otpForm",
    defaultMessage: "Verify Phone Number"
  })), otpForm_jsx(authentication_form_style["j" /* SubHeading */], null, otpForm_jsx(external_react_intl_["FormattedMessage"], {
    id: "otpSubText",
    defaultMessage: "Login with your phone number & password"
  })), otpForm_jsx("form", {
    onSubmit: submitForm
  }, otpForm_jsx(authentication_form_style["a" /* Button */], {
    variant: "primary",
    size: "big",
    style: {
      width: '100%'
    },
    type: "submit"
  }, otpForm_jsx(external_react_intl_["FormattedMessage"], {
    id: "continueBtn",
    defaultMessage: "Continuar"
  }))), loading && otpForm_jsx("p", {
    style: {
      marginTop: "15px"
    }
  }, intl.formatMessage({
    id: 'loading',
    defaultMessage: 'Cargando...'
  })), error && otpForm_jsx("p", {
    style: {
      marginTop: "15px",
      color: "red"
    }
  }, " ", error.message)));
}
// CONCATENATED MODULE: ./src/features/authentication-form/phone-verification.tsx
var phone_verification_jsx = external_react_default.a.createElement;







function PhoneVerificationModal(props) {
  const {
    authDispatch
  } = Object(external_react_["useContext"])(auth_context["a" /* AuthContext */]);
  const [phone, setPhone] = external_react_default.a.useState('');
  const intl = Object(external_react_intl_["useIntl"])();

  const toggleSignInForm = () => {
    authDispatch({
      type: 'SIGNIN'
    });
  };

  const toggleOtpForm = () => {
    authDispatch({
      type: 'OTP_VERIFICATION'
    });
  };

  const [phoneVerificationMutation, {
    loading,
    error
  }] = Object(react_hooks_["useMutation"])(PHONE_VERIFICATION_MUTATION, {
    onCompleted: data => {
      if (false) {}
    },
    onError: error => {
      setPhone('');
      console.log(error);
    }
  });

  const handlePhoneChange = (value, data, event, formattedValue) => {
    setPhone(value);
  };

  return phone_verification_jsx(authentication_form_style["l" /* Wrapper */], null, phone_verification_jsx(authentication_form_style["b" /* Container */], {
    style: {
      paddingBottom: 30
    }
  }, phone_verification_jsx(authentication_form_style["d" /* Heading */], null, phone_verification_jsx(external_react_intl_["FormattedMessage"], {
    id: "phoneVerificationText",
    defaultMessage: "Phone Verification"
  })), phone_verification_jsx(authentication_form_style["j" /* SubHeading */], null, phone_verification_jsx(external_react_intl_["FormattedMessage"], {
    id: "sendPhoneVerifyText",
    defaultMessage: "We'll send you a verification code to verify your phone number"
  })), phone_verification_jsx("form", {
    method: "post",
    onSubmit: async e => {
      e.preventDefault();
      await phoneVerificationMutation({
        variables: {
          phone
        }
      });
    }
  }, phone_verification_jsx(external_react_phone_input_2_default.a, {
    inputProps: {
      name: 'phone',
      required: true,
      autoFocus: true
    },
    containerStyle: {
      textAlign: "left"
    },
    inputStyle: {
      backgroundColor: "#F7F7F7",
      height: "48px",
      marginBottom: "10px",
      width: "100%"
    },
    country: 'bd',
    value: phone,
    onChange: handlePhoneChange
  }), phone_verification_jsx(authentication_form_style["a" /* Button */], {
    variant: "primary",
    size: "big",
    style: {
      width: '100%'
    },
    type: "submit"
  }, "Send Code")), loading && phone_verification_jsx("p", {
    style: {
      marginTop: "15px"
    }
  }, intl.formatMessage({
    id: 'loading',
    defaultMessage: 'Cargando...'
  })), error && phone_verification_jsx("p", {
    style: {
      marginTop: "15px",
      color: "red"
    }
  }, "Please try again!"), phone_verification_jsx(authentication_form_style["g" /* Offer */], {
    style: {
      padding: '20px 0'
    }
  }, phone_verification_jsx(external_react_intl_["FormattedMessage"], {
    id: "backToSign",
    defaultMessage: "Back to"
  }), ' ', phone_verification_jsx(authentication_form_style["f" /* LinkButton */], {
    onClick: toggleSignInForm
  }, phone_verification_jsx(external_react_intl_["FormattedMessage"], {
    id: "loginBtnText",
    defaultMessage: "Login"
  })))));
}
// EXTERNAL MODULE: ./src/utils/session.ts
var session = __webpack_require__("XHU+");

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// EXTERNAL MODULE: ./src/components/button/button.tsx
var button_button = __webpack_require__("B68Z");

// CONCATENATED MODULE: ./src/features/location-modal/location-modal.style.tsx



const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "location-modalstyle__Wrapper",
  componentId: "ujqpys-0"
})(["text-align:center;background-color:", ";"], Object(theme_get_["themeGet"])('colors.white', '#ffffff'));
const location_modal_style_Container = external_styled_components_default.a.div.withConfig({
  displayName: "location-modalstyle__Container",
  componentId: "ujqpys-1"
})(["padding:60px 60px 45px;@media (max-width:768px){padding:40px 30px;}"]);
const LogoWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "location-modalstyle__LogoWrapper",
  componentId: "ujqpys-2"
})(["margin-bottom:30px;img{max-width:160px;}"]);
const Heading = external_styled_components_default.a.h3.withConfig({
  displayName: "location-modalstyle__Heading",
  componentId: "ujqpys-3"
})(["color:", ";margin-bottom:10px;font-family:", ";font-size:", "px;font-weight:", ";"], Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('fonts.heading', 'sans-serif'), Object(theme_get_["themeGet"])('fontSizes.lg', '21'), Object(theme_get_["themeGet"])('fontWeights.bold', '700'));
const SubHeading = external_styled_components_default.a.span.withConfig({
  displayName: "location-modalstyle__SubHeading",
  componentId: "ujqpys-4"
})(["margin-bottom:30px;font-family:", ";font-size:", "px;font-weight:", ";color:", ";display:block;line-height:1.5;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const OfferSection = external_styled_components_default.a.div.withConfig({
  displayName: "location-modalstyle__OfferSection",
  componentId: "ujqpys-5"
})(["padding:20px;background-color:", ";color:", ";display:flex;justify-content:center;align-items:center;"], Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'));
const Offer = external_styled_components_default.a.p.withConfig({
  displayName: "location-modalstyle__Offer",
  componentId: "ujqpys-6"
})(["font-family:", ";font-size:", "px;font-weight:", ";color:", ";margin:0;margin-left:10px;"], Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c'));
const Input = external_styled_components_default.a.input.withConfig({
  displayName: "location-modalstyle__Input",
  componentId: "ujqpys-7"
})(["width:100%;height:48px;border-radius:", ";background-color:", ";border:1px solid ", ";font-family:", ";font-size:", "px;font-weight:", ";color:", ";line-height:19px;padding:0 18px;box-sizing:border-box;transition:border-color 0.25s ease;margin-bottom:20px;text-align:center;&:hover,&:focus{outline:0;}&:focus{border-color:", ";}&::placeholder{color:", ";}&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}&.disabled{.inner-wrap{cursor:not-allowed;opacity:0.6;}}"], Object(theme_get_["themeGet"])('radii.base', '6px'), Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'), Object(theme_get_["themeGet"])('colors.gray.200', '#f7f7f7'), Object(theme_get_["themeGet"])('fonts.body', 'Lato'), Object(theme_get_["themeGet"])('fontSizes.base', '15'), Object(theme_get_["themeGet"])('fontWeights.regular', '400'), Object(theme_get_["themeGet"])('colors.text.bold', '#0D1136'), Object(theme_get_["themeGet"])('colors.primary.regular', '#009e7f'), Object(theme_get_["themeGet"])('colors.text.regular', '#77798c')); // export const Button = styled(Buttons)`
//   border-radius: ${themeGet('radii.base', '6px')};
// `;


// EXTERNAL MODULE: ./src/assets/icons/GiftBox.tsx
var GiftBox = __webpack_require__("g+f/");

// CONCATENATED MODULE: ./src/features/location-modal/location-modal.tsx
var location_modal_jsx = external_react_default.a.createElement;





 // import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
// import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";

const googleApiKey = process.env.GOOGLE_API_KEY; // import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
// import { useJsApiLoader } from '@react-google-maps/api';

function LocationModal({
  isPickUp
}) {
  // Your existing state variables and functions here
  const {
    0: address,
    1: setAddress
  } = Object(external_react_["useState"])("");
  const intl = Object(external_react_intl_["useIntl"])(); // Handle place selection
  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: "YOUR_API_KEY"
  // })
  // const handleSelect = async (address) => {
  //   console.log('address',address)
  //   setAddress(address);
  //   const results = await geocodeByAddress(address);
  //   const latLng = await getLatLng(results[0]);
  // };

  const handleZipCode = () => {
    Object(session["b" /* setCookie */])('zip_code', address);
    Object(reuse_modal_["closeModal"])();
  };

  const handleSelect = address => {// geocodeByAddress(address)
    //   .then(results => getLatLng(results[0]))
    //   .then(latLng => {
    //     console.log('Success', latLng)
    //     setAddress(address)
    //   })
    //   .catch(error => console.error('Error', error));
  }; // const handleSelect = address => {
  //   geocodeByAddress(address)
  //     .then(results => getLatLng(results[0]))
  //     .then(latLng => {
  //       console.log('Success', latLng)
  //       setDeliveryAddress(address)
  //     })
  //     .catch(error => console.error('Error', error));
  // };
  // const isPointInPolygon = (latitude, longitude, polygon) => {
  //   if (typeof latitude !== 'number' || typeof longitude !== 'number') {
  //     throw new TypeError('Invalid latitude or longitude. Numbers are expected')
  //   } else if (!polygon || !Array.isArray(polygon)) {
  //     throw new TypeError('Invalid polygon. Array with locations expected')
  //   } else if (polygon.length === 0) {
  //     throw new TypeError('Invalid polygon. Non-empty Array expected')
  //   }
  //   const x = latitude; const y = longitude
  //   let inside = false
  //   for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
  //     const xi = polygon[i][0]; const yi = polygon[i][1]
  //     const xj = polygon[j][0]; const yj = polygon[j][1]
  //     const intersect = ((yi > y) !== (yj > y)) &&
  //             (x < (xj - xi) * (y - yi) / (yj - yi) + xi)
  //     if (intersect) inside = !inside
  //   }
  //   return inside
  // };
  // const dogsBeachPolygon = [
  //   { latitude: 32.7502030, longitude: -117.2432460},
  //   { latitude: 32.7489451, longitude: -117.2523153},
  //   { latitude: 32.7541973, longitude: -117.2525931},
  //   { latitude: 32.7542674, longitude: -117.2460937},
  // ]
  // console.log('isInside:', isPointInPolygon(32.7449888, -117.2263579, dogsBeachPolygon))
  // const fetchCurrentPosition = () => {
  //   navigator.geolocation.getCurrentPosition(
  //     function(position) {
  //       var pos = new google.maps.LatLng(
  //         position.coords.latitude,
  //         position.coords.longitude
  //       );
  //       console.log(position.coords);
  //       google.maps.geometry.poly.containsLocation(pos, refPoly.current.polygon)
  //         ? setShowBtn(true)
  //         : setShowBtn(false);
  //     },
  //     function(error) {
  //       console.log(error);
  //     }
  //   );
  // };


  Object(external_react_["useEffect"])(() => {
    if (!Object(session["a" /* getCookie */])('first_visit')) {
      Object(session["b" /* setCookie */])('first_visit', true);
    }
  }, []);
  console.log('addresss', address);
  return location_modal_jsx(Wrapper, null, location_modal_jsx(location_modal_style_Container, null, location_modal_jsx(Heading, null, isPickUp ? location_modal_jsx(external_react_intl_["FormattedMessage"], {
    id: "pickupModalheading",
    defaultMessage: "Select Your Location"
  }) : location_modal_jsx(external_react_intl_["FormattedMessage"], {
    id: "deliveryModalheading",
    defaultMessage: "Select Your Location"
  })), location_modal_jsx(button_button["a" /* Button */], {
    fullwidth: true,
    radius: 100,
    onClick: handleZipCode
  }, location_modal_jsx(external_react_intl_["FormattedMessage"], {
    id: "continueBtn",
    defaultMessage: "Continue"
  }))), location_modal_jsx(OfferSection, null, location_modal_jsx(GiftBox["a" /* GiftBox */], null), location_modal_jsx(Offer, null, location_modal_jsx(external_react_intl_["FormattedMessage"], {
    id: "locationModalFooter",
    defaultMessage: "Free Delivery For 1st Order",
    values: {
      number: 1
    }
  }))));
}
// CONCATENATED MODULE: ./src/features/authentication-form/index.tsx
var authentication_form_jsx = external_react_default.a.createElement;








function AuthenticationForm() {
  const {
    authState
  } = Object(external_react_["useContext"])(auth_context["a" /* AuthContext */]);
  let RenderForm;

  if (authState.currentForm === 'signIn') {
    RenderForm = SignInModal;
  }

  if (authState.currentForm === 'signUp') {
    RenderForm = SignOutModal;
  }

  if (authState.currentForm === 'locationModal') {
    RenderForm = LocationModal;
  }

  if (authState.currentForm === 'forgotPass') {
    RenderForm = ForgotPasswordModal;
  }

  if (authState.currentForm === 'otpVerification') {
    RenderForm = OtpModal;
  }

  if (authState.currentForm === 'phoneVerification') {
    RenderForm = PhoneVerificationModal;
  }

  if (authState.currentForm === 'errorForm') {
    RenderForm = PhoneVerificationModal;
  }

  return authentication_form_jsx(RenderForm, null);
}

/***/ }),

/***/ "l3mL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const LockIcon = ({
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
    d: "M376 192h-24v-46.7c0-52.7-42-96.5-94.7-97.3-53.4-.7-97.3 42.8-97.3 96v48h-24c-22 0-40 18-40 40v192c0 22 18 40 40 40h240c22 0 40-18 40-40V232c0-22-18-40-40-40zM270 316.8v68.8c0 7.5-5.8 14-13.3 14.4-8 .4-14.7-6-14.7-14v-69.2c-11.5-5.6-19.1-17.8-17.9-31.7 1.4-15.5 14.1-27.9 29.6-29 18.7-1.3 34.3 13.5 34.3 31.9 0 12.7-7.3 23.6-18 28.8zM324 192H188v-48c0-18.1 7.1-35.1 20-48s29.9-20 48-20 35.1 7.1 48 20 20 29.9 20 48v48z"
  }));
};

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

/***/ "m0gv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteSettings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SiteSettings = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 56 56"
  }, __jsx("g", {
    transform: "translate(-0.001)"
  }, __jsx("g", {
    "data-name": "Group 2845",
    transform: "translate(0.001)"
  }, __jsx("g", {
    "data-name": "Group 2844"
  }, __jsx("path", {
    "data-name": "Path 2442",
    d: "M20.211,11.444l-1.1-.95v-.456l1.1-.95a.935.935,0,0,0,.3-.9,10.074,10.074,0,0,0-.727-2.166.933.933,0,0,0-.762-.537l-1.438-.131q-.146-.211-.3-.41l.31-1.355a.935.935,0,0,0-.287-.9,10.539,10.539,0,0,0-1.877-1.344.934.934,0,0,0-.924.007l-1.237.718c-.167-.057-.338-.111-.516-.16L12.183.567A.934.934,0,0,0,11.324,0H9.212a.933.933,0,0,0-.859.567L7.782,1.909c-.178.049-.349.1-.516.16L6.029,1.351A.938.938,0,0,0,5.1,1.343,10.575,10.575,0,0,0,3.228,2.687a.933.933,0,0,0-.287.9l.31,1.354c-.1.133-.206.271-.3.411L1.51,5.488a.933.933,0,0,0-.762.537A10.066,10.066,0,0,0,.021,8.191a.934.934,0,0,0,.3.9l1.1.95v.456l-1.1.95a.935.935,0,0,0-.3.9,10.074,10.074,0,0,0,.727,2.166.933.933,0,0,0,.762.537l1.438.131q.146.211.3.41l-.31,1.355a.933.933,0,0,0,.287.9A10.455,10.455,0,0,0,5.1,19.189a.931.931,0,0,0,.923-.007l1.238-.717c.167.057.338.111.516.16l.571,1.342a.934.934,0,0,0,.859.567h2.113a.933.933,0,0,0,.859-.567l.571-1.342c.178-.049.349-.1.516-.16l1.237.718a.936.936,0,0,0,1.012-.048l1.71-1.224a.934.934,0,0,0,.366-.968l-.31-1.354c.1-.133.206-.271.3-.411l1.438-.131a.933.933,0,0,0,.762-.537,10.072,10.072,0,0,0,.727-2.166A.935.935,0,0,0,20.211,11.444Zm-2.646.185.994.855q-.107.376-.256.753l-1.333.121a.935.935,0,0,0-.709.439,6.84,6.84,0,0,1-.688.931.933.933,0,0,0-.21.827l.274,1.2-.714.511-1.1-.638A.939.939,0,0,0,13,16.572a6.962,6.962,0,0,1-1.127.352.933.933,0,0,0-.651.544l-.511,1.2h-.88l-.511-1.2a.929.929,0,0,0-.651-.544,6.989,6.989,0,0,1-1.127-.352.932.932,0,0,0-.826.055l-1.146.664q-.349-.224-.68-.486l.286-1.25a.934.934,0,0,0-.209-.826,6.863,6.863,0,0,1-.689-.931.935.935,0,0,0-.709-.439l-1.333-.121q-.148-.377-.256-.753l.994-.855a.935.935,0,0,0,.324-.707V9.611A.935.935,0,0,0,2.971,8.9l-.994-.856q.107-.375.256-.752l1.332-.121a.935.935,0,0,0,.709-.439A6.839,6.839,0,0,1,4.963,5.8a.933.933,0,0,0,.21-.827l-.286-1.25q.33-.261.681-.487l1.145.664a.942.942,0,0,0,.826.055,6.962,6.962,0,0,1,1.127-.352.933.933,0,0,0,.651-.544l.511-1.2h.88l.511,1.2a.929.929,0,0,0,.651.544A6.977,6.977,0,0,1,13,3.961a.936.936,0,0,0,.826-.055l1.145-.664q.35.226.681.487l-.286,1.25a.934.934,0,0,0,.209.826,6.864,6.864,0,0,1,.689.931.935.935,0,0,0,.709.439L18.3,7.3q.148.377.256.753l-.994.855a.935.935,0,0,0-.324.707v1.311A.935.935,0,0,0,17.565,11.629Z",
    transform: "translate(-0.001)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2847",
    transform: "translate(5.601 5.6)"
  }, __jsx("g", {
    "data-name": "Group 2846"
  }, __jsx("path", {
    "data-name": "Path 2443",
    d: "M52.669,48a4.667,4.667,0,1,0,4.667,4.667A4.667,4.667,0,0,0,52.669,48Zm0,7.467a2.8,2.8,0,1,1,2.8-2.8A2.8,2.8,0,0,1,52.669,55.467Z",
    transform: "translate(-48.002 -48)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2849",
    transform: "translate(1.868 46.667)"
  }, __jsx("g", {
    "data-name": "Group 2848"
  }, __jsx("path", {
    "data-name": "Path 2444",
    d: "M24.4,400H16.935a.933.933,0,0,0-.933.933h0V408.4a.933.933,0,0,0,.933.933H24.4a.933.933,0,0,0,.933-.933h0v-7.467A.933.933,0,0,0,24.4,400Zm-.934,7.467h-5.6v-5.6h5.6Z",
    transform: "translate(-16.002 -400)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2851",
    transform: "translate(15.868 43.867)"
  }, __jsx("g", {
    "data-name": "Group 2850"
  }, __jsx("path", {
    "data-name": "Path 2445",
    d: "M144.4,376h-7.467a.933.933,0,0,0-.933.933h0V387.2a.933.933,0,0,0,.933.933H144.4a.933.933,0,0,0,.933-.933h0V376.933A.933.933,0,0,0,144.4,376Zm-.934,10.267h-5.6v-8.4h5.6Z",
    transform: "translate(-136.002 -376)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2853",
    transform: "translate(29.868 40.133)"
  }, __jsx("g", {
    "data-name": "Group 2852"
  }, __jsx("path", {
    "data-name": "Path 2446",
    d: "M264.4,344h-7.467a.933.933,0,0,0-.933.933h0v14a.933.933,0,0,0,.933.933H264.4a.933.933,0,0,0,.933-.933h0v-14A.933.933,0,0,0,264.4,344Zm-.934,14h-5.6V345.867h5.6Z",
    transform: "translate(-256.002 -344)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2855",
    transform: "translate(43.868 31.733)"
  }, __jsx("g", {
    "data-name": "Group 2854"
  }, __jsx("path", {
    "data-name": "Path 2447",
    d: "M384.4,272h-7.467a.933.933,0,0,0-.933.933h0v22.4a.933.933,0,0,0,.933.933H384.4a.933.933,0,0,0,.933-.933h0v-22.4A.933.933,0,0,0,384.4,272Zm-.934,22.4h-5.6V273.867h5.6Z",
    transform: "translate(-376.002 -272)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2857",
    transform: "translate(1.356 18.702)"
  }, __jsx("g", {
    "data-name": "Group 2856"
  }, __jsx("path", {
    "data-name": "Path 2448",
    d: "M42.263,162.177l-.017-.005-6.533-1.867-.513,1.8,4.574,1.307L11.611,181.889l1.024,1.56,27.7-18.179L38.8,170.262l1.784.549,2.3-7.467A.934.934,0,0,0,42.263,162.177Z",
    transform: "translate(-11.611 -160.305)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2859",
    transform: "translate(36.401 3.733)"
  }, __jsx("g", {
    "data-name": "Group 2858"
  }, __jsx("path", {
    "data-name": "Path 2449",
    d: "M326.654,37.255a.933.933,0,0,0-.511-.255l-4.022-.615-1.807-3.85a.933.933,0,0,0-1.69,0l-1.807,3.85L312.794,37a.933.933,0,0,0-.527,1.574l2.938,3.011-.695,4.263a.933.933,0,0,0,1.373.967l3.586-1.982,3.586,1.982a.933.933,0,0,0,1.373-.967l-.695-4.263,2.938-3.011A.933.933,0,0,0,326.654,37.255Zm-4.587,3.364a.932.932,0,0,0-.253.8l.462,2.831-2.356-1.3a.933.933,0,0,0-.9,0l-2.356,1.3.462-2.831a.932.932,0,0,0-.253-.8l-2-2.048,2.719-.416a.931.931,0,0,0,.7-.526l1.174-2.5,1.174,2.5a.932.932,0,0,0,.7.526l2.719.416Z",
    transform: "translate(-312.002 -31.998)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2861",
    transform: "translate(41.774 22.245)"
  }, __jsx("g", {
    "data-name": "Group 2860"
  }, __jsx("path", {
    "data-name": "Path 2450",
    d: "M361.942,190.672a10.25,10.25,0,0,1-1.778.155h-.014a10.286,10.286,0,0,1-1.773-.153l-.321,1.839a18.6,18.6,0,0,0,2.109.18,12.1,12.1,0,0,0,2.1-.184Z",
    transform: "translate(-358.057 -190.672)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2863",
    transform: "translate(45.621 0.176)"
  }, __jsx("g", {
    "data-name": "Group 2862"
  }, __jsx("path", {
    "data-name": "Path 2451",
    d: "M391.342,1.508l-.316,1.839a10.177,10.177,0,0,1,3.351,1.208l.929-1.619A12.016,12.016,0,0,0,391.342,1.508Z",
    transform: "translate(-391.026 -1.508)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2865",
    transform: "translate(37.772 0.187)"
  }, __jsx("g", {
    "data-name": "Group 2864"
  }, __jsx("path", {
    "data-name": "Path 2452",
    d: "M327.708,1.6a12.054,12.054,0,0,0-3.955,1.453l.94,1.613a10.191,10.191,0,0,1,3.344-1.229Z",
    transform: "translate(-323.753 -1.602)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2867",
    transform: "translate(49.006 18.729)"
  }, __jsx("g", {
    "data-name": "Group 2866"
  }, __jsx("path", {
    "data-name": "Path 2453",
    d: "M422.772,160.531a10.3,10.3,0,0,1-2.73,2.294l.936,1.615a12.15,12.15,0,0,0,3.223-2.708Z",
    transform: "translate(-420.042 -160.531)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2869",
    transform: "translate(53.519 12.099)"
  }, __jsx("g", {
    "data-name": "Group 2868"
  }, __jsx("path", {
    "data-name": "Path 2454",
    d: "M460.795,103.7l-1.454.035a10.241,10.241,0,0,1-.616,3.512l1.755.638a12.138,12.138,0,0,0,.727-4.177Z",
    transform: "translate(-458.725 -103.703)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2871",
    transform: "translate(51.711 4.302)"
  }, __jsx("g", {
    "data-name": "Group 2870"
  }, __jsx("path", {
    "data-name": "Path 2455",
    d: "M444.65,36.875l-1.425,1.2a10.223,10.223,0,0,1,1.794,3.078l1.752-.645A12.071,12.071,0,0,0,444.65,36.875Z",
    transform: "translate(-443.225 -36.875)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2873",
    transform: "translate(32.455 4.355)"
  }, __jsx("g", {
    "data-name": "Group 2872"
  }, __jsx("path", {
    "data-name": "Path 2456",
    d: "M280.274,37.328a12.093,12.093,0,0,0-2.1,3.652l1.755.634a10.223,10.223,0,0,1,1.777-3.089Z",
    transform: "translate(-278.174 -37.328)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2875",
    transform: "translate(34.585 18.743)"
  }, __jsx("g", {
    "data-name": "Group 2874"
  }, __jsx("path", {
    "data-name": "Path 2457",
    d: "M297.859,160.656l-1.427,1.2a12.154,12.154,0,0,0,3.228,2.7l.933-1.617A10.286,10.286,0,0,1,297.859,160.656Z",
    transform: "translate(-296.432 -160.656)",
    fill: color
  }))), __jsx("g", {
    "data-name": "Group 2877",
    transform: "translate(31.735 12.154)"
  }, __jsx("g", {
    "data-name": "Group 2876"
  }, __jsx("path", {
    "data-name": "Path 2458",
    d: "M273.873,104.18l-1.867,0a12.084,12.084,0,0,0,.736,4.147l1.753-.642A10.227,10.227,0,0,1,273.873,104.18Z",
    transform: "translate(-272.006 -104.18)",
    fill: color
  })))));
};

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "mVRT":
/***/ (function(module, exports) {



/***/ }),

/***/ "mho/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlusOutline; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const PlusOutline = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 16 16"
  }, __jsx("g", {
    id: "Group_3371",
    "data-name": "Group 3371",
    transform: "translate(-1539 -2317.5)"
  }, __jsx("rect", {
    id: "Rectangle_680",
    "data-name": "Rectangle 680",
    width: "16",
    height: "1.5",
    transform: "translate(1539 2325)",
    fill: color
  }), __jsx("rect", {
    id: "Rectangle_681",
    "data-name": "Rectangle 681",
    width: "16",
    height: "1.5",
    transform: "translate(1547.5 2317.5) rotate(90)",
    fill: color
  })));
};

/***/ }),

/***/ "mt7J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Face; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Face = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    fill: color
  }, __jsx("path", {
    "data-name": "Path 41",
    d: "M6.388 9.238c-3.319 0-5.11 1.36-5.11 1.911s1.791 1.911 5.11 1.911a9.995 9.995 0 002.653-.345 5.1 5.1 0 011.387-2.612 8.865 8.865 0 00-4.04-.864z"
  }), __jsx("path", {
    "data-name": "Path 42",
    d: "M8.34 8.908a7.515 7.515 0 012.3.841 5.111 5.111 0 01.581-.391 7 7 0 00-1.969-.887 5.957 5.957 0 01-.912.438z"
  }), __jsx("path", {
    "data-name": "Path 43",
    d: "M8.958 13.383a10.774 10.774 0 01-2.571.3c-3.29 0-5.749-1.349-5.749-2.555 0-.908 1.394-1.9 3.484-2.33a6.017 6.017 0 01-.9-.433c-1.96.571-3.224 1.647-3.224 2.762 0 1.731 2.922 3.193 6.388 3.193a11.64 11.64 0 002.573-.285c-.008-.112-.018-.234-.018-.354.002-.097.011-.197.017-.298z"
  }), __jsx("path", {
    "data-name": "Path 44",
    d: "M6.388 8.952a4.833 4.833 0 005.11-4.471A4.833 4.833 0 006.388.01a4.833 4.833 0 00-5.11 4.471 4.833 4.833 0 005.11 4.471zm0-8.3a4.194 4.194 0 014.471 3.833 4.194 4.194 0 01-4.471 3.833A4.194 4.194 0 011.917 4.48 4.194 4.194 0 016.388.647z"
  }), __jsx("path", {
    "data-name": "Path 45",
    d: "M6.391 7.675a3.561 3.561 0 003.833-3.193 3.561 3.561 0 00-3.833-3.195A3.561 3.561 0 002.558 4.48a3.561 3.561 0 003.833 3.195zm0-5.749a2.969 2.969 0 013.193 2.555h-.638c0-1.039-1.17-1.911-2.555-1.911z"
  }), __jsx("path", {
    "data-name": "Path 46",
    d: "M17.39 11.304a6.91 6.91 0 01-.592.319 5.4 5.4 0 00-2.518 2.518 6.026 6.026 0 01-2.81 2.81 7.22 7.22 0 00-.486.259 4.466 4.466 0 006.407-5.9zm-3.877 6.051v-.638a3.238 3.238 0 00.581-.053l.112.628a3.847 3.847 0 01-.694.063zm1.394-.261l-.233-.595a3.176 3.176 0 002.032-2.976h.638a3.812 3.812 0 01-2.438 3.571z"
  }), __jsx("path", {
    "data-name": "Path 47",
    d: "M12.66 15.332a4.74 4.74 0 001.044-1.472 6.029 6.029 0 012.809-2.815c.173-.085.337-.17.518-.278a4.527 4.527 0 00-.4-.45 6.37 6.37 0 01-.731.407 5.386 5.386 0 00-2.512 2.521 6.03 6.03 0 01-2.81 2.81 6.962 6.962 0 00-.532.285 4.507 4.507 0 00.414.438 6.34 6.34 0 01.727-.406 4.733 4.733 0 001.474-1.042z"
  }), __jsx("path", {
    "data-name": "Path 48",
    d: "M11.769 14.439a4.74 4.74 0 001.044-1.472 6.022 6.022 0 012.81-2.81c.166-.082.328-.164.5-.265a4.462 4.462 0 00-6.435 5.922c.219-.136.419-.236.614-.337a4.747 4.747 0 001.47-1.037z"
  })));
};

/***/ }),

/***/ "mzFI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartIconBig; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const CartIconBig = ({
  width = '48px',
  height = '48px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 48 48"
  }, __jsx("g", {
    "data-name": "Group 2994",
    transform: "translate(-601 -757)"
  }, __jsx("rect", {
    "data-name": "Rectangle 541",
    width: "48",
    height: "48",
    rx: "20",
    transform: "translate(601 757)",
    fill: "#facaca"
  }), __jsx("g", {
    transform: "translate(610.988 768.246)"
  }, __jsx("g", {
    "data-name": "Group 2985",
    transform: "translate(3.013 0.754)"
  }, __jsx("path", {
    "data-name": "Path 3641",
    d: "M6.071,15.424H23.177a.726.726,0,0,0,.724-.674l.778-10.885a.726.726,0,0,0-.724-.778h-8.6V1.48a.726.726,0,1,0-1.452,0V3.087H5.832c-.051-.618-2.058-.416-.7-.077-.113-.517-.571-.277-.71,0L5.29,14.073a3.058,3.058,0,0,0,.78,6.016h.121a3.058,3.058,0,1,0,5.2,0h6.849a3.059,3.059,0,1,0,5.175-.042.726.726,0,0,0-.241-1.41H6.071a1.607,1.607,0,0,1,0-3.213ZM13.9,4.539V9.058L12.8,7.964a.726.726,0,0,0-1.027,1.027l2.333,2.333a.726.726,0,0,0,1.027,0L17.47,8.991a.726.726,0,0,0-1.027-1.027L15.35,9.058V4.539h7.825L22.5,13.972H6.739L5.953,4.539Zm6.946,15.55A1.607,1.607,0,1,1,19.237,21.7,1.608,1.608,0,0,1,20.844,20.089Zm-12.051,0A1.607,1.607,0,1,1,7.186,21.7,1.608,1.608,0,0,1,8.792,20.089Z",
    transform: "translate(-3.013 -0.754)",
    fill: "#ff6e6e"
  })))));
};

/***/ }),

/***/ "n0yZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shirts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Shirts = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    fill: color
  }, __jsx("path", {
    "data-name": "Path 109",
    d: "M6.751 2.546a.172.172 0 00.04 0l2.206-.525 2.2.543a.171.171 0 00.041 0 .142.142 0 00.111-.051.149.149 0 00.027-.128l-.21-.983a.362.362 0 010-.115l.221-1.1a.144.144 0 00-.026-.122.138.138 0 00-.168-.029l-2.192 1.05L6.813.017a.137.137 0 00-.169.028.144.144 0 00-.027.122l.21 1.1a.362.362 0 010 .115l-.217.979a.149.149 0 00.027.128.142.142 0 00.11.053z"
  }), __jsx("path", {
    "data-name": "Path 110",
    d: "M2.563 15.126l-1.806-.153a.4.4 0 00-.4.278l-.342 1.214a.285.285 0 00.039.248.285.285 0 00.224.112l1.8.058h.013a.428.428 0 00.391-.288l.334-1.1a.282.282 0 00-.252-.372z"
  }), __jsx("path", {
    "data-name": "Path 111",
    d: "M17.985 16.466l-.338-1.2a.4.4 0 00-.4-.278l-1.806.152a.282.282 0 00-.252.372l.33 1.083a.428.428 0 00.391.288l1.815-.058a.274.274 0 00.264-.359z"
  }), __jsx("path", {
    "data-name": "Path 112",
    d: "M17.024 14.342a.286.286 0 00.257-.372l-.756-2.678a5.452 5.452 0 01-.105-.451l-1.321-6.627a.61.61 0 00-.315-.4l-2.139-.945a.63.63 0 00-.248-.046.638.638 0 00-.263.051L9.176 4.248a.483.483 0 01-.346 0L5.865 2.876a.64.64 0 00-.263-.051.63.63 0 00-.248.046l-2.139.945a.61.61 0 00-.315.4l-1.318 6.626c-.025.125-.074.328-.105.451l-.759 2.662a.286.286 0 00.257.372l1.824.154a.405.405 0 00.407-.275l.874-2.857a3.587 3.587 0 00.105-.476l.278-2.1-.254 8.162a.326.326 0 00.327.337h8.99a.325.325 0 00.326-.338l-.292-8.058.265 2.006a3.582 3.582 0 00.105.476l.875 2.874a.405.405 0 00.407.275zM8.998 16.3a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.558zm0-2.422a.558.558 0 11.558-.558.558.558 0 01-.558.562z"
  })));
};

/***/ }),

/***/ "nRGc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const OrderIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 11.321 13"
  }, __jsx("g", {
    "data-name": "Group 1087",
    transform: "translate(0)"
  }, __jsx("g", {
    "data-name": "Group 1086"
  }, __jsx("path", {
    "data-name": "Path 322",
    d: "M274.867.365A.733.733,0,0,0,274.234,0h-2.718V3.215h5Z",
    transform: "translate(-265.461)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 323",
    d: "M48.821,0H46.077a.733.733,0,0,0-.633.366L43.8,3.215h5.02V0Z",
    transform: "translate(-43.528)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 324",
    d: "M33.057,156.648v8.127a.9.9,0,0,0,.9.9h9.529a.9.9,0,0,0,.9-.9v-8.127Zm7.39,3.418-1.971,1.971a.38.38,0,0,1-.539,0l-.924-.924a.381.381,0,1,1,.539-.539l.654.654,1.7-1.7a.381.381,0,1,1,.539.539Z",
    transform: "translate(-33.057 -152.671)",
    fill: color
  }))));
};

/***/ }),

/***/ "nbZN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const LogoutIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 15.999 13"
  }, __jsx("defs", null, __jsx("filter", {
    x: "4.583",
    y: "1.792",
    width: "11.416",
    height: "10.333",
    filterUnits: "userSpaceOnUse"
  }, __jsx("feGaussianBlur", {
    stdDeviation: "1",
    result: "blur"
  }), __jsx("feFlood", {
    floodOpacity: "0.161"
  }), __jsx("feComposite", {
    operator: "in",
    in2: "blur"
  }), __jsx("feComposite", {
    in: "SourceGraphic"
  }))), __jsx("g", {
    "data-name": "007-logout",
    transform: "translate(0)"
  }, __jsx("g", {
    "data-name": "Group 1075"
  }, __jsx("g", {
    "data-name": "Group 1074",
    transform: "translate(0)"
  }, __jsx("g", {
    transform: "matrix(1, 0, 0, 1, 0, 0)",
    filter: "url(#Path_319)"
  }, __jsx("path", {
    "data-name": "Path 319",
    d: "M304.055,151.3a.547.547,0,0,0-.118-.177l-1.624-1.624a.542.542,0,0,0-.766.766l.7.7h-3.026a.542.542,0,1,0,0,1.083h3.026l-.7.7a.542.542,0,1,0,.766.766l1.624-1.624a.536.536,0,0,0,.118-.177A.542.542,0,0,0,304.055,151.3Z",
    transform: "translate(-291.1 -145.55)",
    fill: color
  })), __jsx("path", {
    "data-name": "Path 320",
    d: "M9.222,7.583a.542.542,0,0,0-.542.542v2.708H6.514V2.167a.542.542,0,0,0-.386-.519L4.247,1.083H8.681V3.792a.542.542,0,0,0,1.083,0V.542A.542.542,0,0,0,9.222,0H.556A.483.483,0,0,0,.5.01.535.535,0,0,0,.27.09C.258.1.244.1.232.107S.226.116.222.12A.537.537,0,0,0,.078.291.442.442,0,0,0,.063.336.514.514,0,0,0,.02.463a.337.337,0,0,0,0,.047C.021.521.014.531.014.542V11.375a.541.541,0,0,0,.435.531l5.417,1.083A.5.5,0,0,0,5.972,13a.542.542,0,0,0,.542-.542v-.542H9.222a.542.542,0,0,0,.542-.542V8.125A.542.542,0,0,0,9.222,7.583Z",
    transform: "translate(-0.014)",
    fill: color
  })))));
};

/***/ }),

/***/ "njV9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Breakfast; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Breakfast = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Group 7",
    fill: color
  }, __jsx("path", {
    "data-name": "Path 27",
    d: "M13.034 14.465c2.98-.12 4.31-1.476 4.31-3.136 0-1.442-1-2.655-3.217-3.028.01-.539.011-1.054.011-1.536H0c0 3.158 0 7.743 2.84 9.935-1.724.131-2.84.342-2.84.577 0 .4 3.163.723 7.067.723s7.066-.323 7.066-.723c0-.236-1.118-.446-2.84-.577a5.965 5.965 0 001.741-2.235zm1.035-4.79c1.243.288 1.465.9 1.451 1.687-.016.9-.276 1.508-1.973 1.712a16.339 16.339 0 00.521-3.4zM1.706 7.862h2.209c-.99 2.922.681 7.542.68 7.542-3.611-2.765-2.889-7.542-2.889-7.542z"
  }), __jsx("path", {
    "data-name": "Path 28",
    d: "M8.229 4.861c.281-2.545 5.9-1.272 4.729-4.576-.18-.5-.989-.287-.808.222.514 1.449-1.437 1.625-2.432 1.958a2.92 2.92 0 00-2.328 2.4c-.061.534.774.528.839-.004z"
  }), __jsx("path", {
    "data-name": "Path 29",
    d: "M12.207 3.082a2.924 2.924 0 00-2.439 1.879.419.419 0 00.807.222c.377-1.272 2.047-1.293 3.115-1.6a2.031 2.031 0 001.644-2.346c-.069-.528-.906-.539-.837 0 .195 1.472-1.16 1.579-2.29 1.845z"
  })));
};

/***/ }),

/***/ "ojJp":
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"الصفحة الرئيسية\",\"nav.grocery\":\"بقالة\",\"nav.makeup\":\"ميك أب\",\"nav.bags\":\"أكياس\",\"nav.clothing\":\"ملابس\",\"nav.furniture\":\"أثاث المنزل\",\"nav.book\":\"كتاب\",\"nav.medicine\":\"الدواء\",\"nav.foods\":\"الأطعمة\",\"nav.terms_and_services\":\"الشروط والخدمات\",\"nav.privacy_policy\":\"سياسة خاصة\",\"nav.offer\":\"عرض\",\"nav.help\":\"تحتاج مساعدة\",\"nav.profile\":\"الملف الشخصي\",\"nav.checkout\":\"الدفع\",\"nav.order_received\":\"طلب الفاتورة\",\"nav.logout\":\"الخروج\",\"nav.login\":\"تسجيل الدخول\",\"nav.order\":\"طلبك\",\"groceriesTitle\":\"تسليم البقالة في {minute} دقيقة\",\"groceriesSubTitle\":\"احصل على الأطعمة الصحية والوجبات الخفيفة التي تقدمها على عتبة دارك طوال اليوم\",\"makeupTitle\":\"مكياج ذو العلامات التجارية والمستوردة\",\"makeupSubTitle\":\"أسهل وأرخص وسيلة للحصول على الماكياج الخاص بك المستوردة والمستوردة\",\"bagsTitle\":\"الحقائب ذات العلامات التجارية الحصرية\",\"bagsSubTitle\":\"احصل على حقائبك الحصرية والعلامة التجارية التي تم تسليمها إليك في أي وقت من الأوقات\",\"womenClothsTitle\":\"تسوق مصمم الفساتين الخاصة بك\",\"womenClothsSubTitle\":\"على استعداد لارتداء الفساتين المخصصة لك من الانترنت. عجلوا في حين يستمر المخزون.\",\"furnitureTitle\":\"الأثاث الحصري بأسعار رخيصة\",\"furnitureSubTitle\":\"اجعل منزلك منزلاً من خلال مجموعتنا الواسعة من الأثاث الجميل\",\"booksTitle\":\"متجر الكتب الخاصة بك\",\"booksSubTitle\":\"احصل على كتبك المفضلة من مجموعة واسعة من الكتب.\",\"medicineTitle\":\"سلم الدواء الخاص بك\",\"medicineSubTitle\":\"قل وداعا لجميع همومك الصحية معنا\",\"foodsTitle\":\"أنت تأمر نحن تسليم\",\"foodsSubTitle\":\"احصل على طعامك المفضل في أقل من ساعة\",\"alternativeCheckout\":\"بديل الخروج\",\"termAndConditionHelper\":\"من خلال إجراء هذا الشراء فإنك توافق على موقعنا\",\"termAndCondition\":\"الأحكام والشروط.\",\"reqMedicine\":\"طلب الطب\",\"submitRequest\":\"تقديم الطلب\",\"noteHead\":\"ملحوظة\",\"noteDescription\":\"سيتأكد توفر المنتج والسعر عبر الهاتف. رسوم التوصيل داخل المدينة 5 دولارات وخارج المدينة 10 دولارات.\",\"rmMedicineName\":\"اسم الدواء\",\"rmMedicineQuantity\":\"كمية\",\"rmPrescripttionUpload\":\"حمل الوصفة الطبية الخاصة بك\",\"rmUploadText\":\"اسحب / حمل ملفك هنا.\",\"cartTitle\":\"طلبك\",\"discountText\":\"خصم\",\"vatText\":\"مدفوع. ضريبة القيمة المضافة\",\"searchPlaceholder\":\"ابحث عن منتجاتك من هنا\",\"searchButtonText\":\"بحث\",\"mobileSignInButtonText\":\"إنضم إلى\",\"navlinkAccountSettings\":\"إعدادات حسابك\",\"cartItems\":\"العناصر\",\"cartItem\":\"بند\",\"addEcoToCartButton\":\"عربة التسوق\",\"addToCartButton\":\"أضف إلى السلة\",\"backBtn\":\"عودة\",\"noProductFound\":\"لا توجد منتجات\",\"specialCode\":\"هل لديك قسيمة؟\",\"couponApplied\":\"القسيمة المطبقة\",\"couponPlaceholder\":\"أدخل رمز القسيمة هنا\",\"sidebarYourOrder\":\"طلب\",\"profilePageTitle\":\"ملفك الشخصي\",\"profileNameField\":\"اسم\",\"profileEmailField\":\"البريد الإلكتروني\",\"profileSaveBtn\":\"حفظ\",\"contactNumberTItle\":\"رقم الاتصال\",\"addContactBtn\":\"إضافة جهة اتصال\",\"deliveryAddresTitle\":\"عنوان التسليم\",\"addAddressBtn\":\"اضف عنوان\",\"addNew\":\"اضف جديد\",\"addCardBtn\":\"إضافة بطاقة\",\"savedCardsId\":\"البطاقات المحفوظة\",\"savedContactId\":\"حفظ جهة الاتصال\",\"savedAddressId\":\"حفظ العنوان\",\"paymentCardTitle\":\"بطاقة المدفوعات\",\"siteFooter\":\"Ditto هو منتج من قبل\",\"subTotal\":\"المجموع الفرعي\",\"itemsText\":\"العناصر\",\"shippinFeeText\":\"رسوم الشحن\",\"voucherText\":\"إيصال\",\"voucherApply\":\"تطبيق\",\"couponError\":\"قسيمة غير صالحة\",\"totalText\":\"مجموع\",\"deliverySchedule\":\"جدول التسليم\",\"checkoutDeliveryAddress\":\"عنوان التسليم\",\"contactNumberText\":\"رقم الاتصال\",\"selectPaymentText\":\"خيار الدفع\",\"proceesCheckout\":\"باشرالخروج من الفندق\",\"backHomeBtn\":\"العودة إلى المنزل\",\"orderReceivedText\":\"طلب وارد\",\"orderReceivedSuccess\":\"شكرا لكم. تم استلام طلبك\",\"orderNumberText\":\"رقم الطلب\",\"orderDateText\":\"تاريخ\",\"paymenMethodText\":\"طريقة الدفع او السداد\",\"paymentMethodName\":\"الدفع عن الاستلام\",\"orderDetailsText\":\"تفاصيل الطلب\",\"totalItemText\":\"مجموع البند\",\"orderTimeText\":\"وقت الطلب\",\"deliveryTimeText\":\"موعد التسليم\",\"deliveryLocationText\":\"موقع التسليم\",\"totalAmountText\":\"المبلغ الإجمالي\",\"loadMoreBtn\":\"تحميل المزيد\",\"welcomeBack\":\"مرحبا بعودتك\",\"loginText\":\"تسجيل الدخول باستخدام البريد الإلكتروني وكلمة المرور الخاصة بك\",\"emailAddressPlaceholder\":\"عنوان البريد الإلكتروني أو رقم الاتصال\",\"passwordPlaceholder\":\"كلمة المرور (بحد أدنى {minCharacter} أحرف)\",\"continueBtn\":\"استمر\",\"orText\":\"أو\",\"continueFacebookBtn\":\"تواصل مع Facebook\",\"continueGoogleBtn\":\"تواصل مع جوجل\",\"dontHaveAccount\":\"ليس لديك أي حساب؟\",\"signUpBtnText\":\"سجل\",\"forgotPasswordText\":\"نسيت رقمك السري؟\",\"resetText\":\"إعادة تعيينها\",\"signUpText\":\"بالتسجيل ، أنت توافق على Ditto\",\"termsConditionText\":\"الشروط والأحكام\",\"alreadyHaveAccount\":\"هل لديك حساب؟\",\"backToSign\":\"ارجع الى\",\"loginBtnText\":\"تسجيل الدخول\",\"forgotPassText\":\"هل نسيت كلمة المرور\",\"sendResetPassText\":\"سنرسل لك رابطًا لإعادة تعيين كلمة المرور الخاصة بك\",\"resetPasswordBtn\":\"إعادة تعيين كلمات المرور\",\"intlCopyBtnId\":\"نسخ\",\"intlCopySuccessId\":\"نسخ\",\"locationModalheading\":\"حدد موقعك\",\"locationModalSubHeading\":\"يجب عليك تحديد موقعك لغرض تقديم الخدمة\",\"locationModalFooter\":\"توصيل مجاني للطلب الأول\",\"saleText\":\"تخفيض السعر\",\"offText\":\"إيقاف\",\"faqNo1Title\":\"كيف تتصل بخدمة العملاء؟\",\"faqNo1Desc\":\"يتوفر فريق تجربة العملاء لدينا {number1} أيام في الأسبوع ، ونقدم طريقتين للاتصال. البريد الإلكتروني والدردشة. نحن نحاول الرد بسرعة ، لذلك لا تحتاج إلى الانتظار طويلًا للحصول على رد!\",\"faqNo2Title\":\"فشل تثبيت التطبيق ، وكيفية تحديث معلومات النظام؟\",\"faqNo2Desc\":\"يرجى قراءة الوثائق بعناية. لدينا أيضًا بعض برامج الفيديو التعليمية عبر الإنترنت فيما يتعلق بهذه المشكلة. في حالة استمرار المشكلة ، يرجى فتح تذكرة في منتدى الدعم\",\"faqNo3Title\":\"استجابة الموقع يستغرق بعض الوقت ، وكيفية تحسين؟\",\"faqNo3Desc\":\"في البداية ، يرجى التحقق من اتصالك بالإنترنت. لدينا أيضًا بعض برامج الفيديو التعليمية عبر الإنترنت فيما يتعلق بهذه المشكلة. في حالة استمرار المشكلة ، يرجى فتح تذكرة في منتدى الدعم.\",\"faqNo4Title\":\"كيف يمكنني إنشاء حساب؟\",\"faqNo4Desc\":\"إذا كنت تريد فتح حساب للاستخدام الشخصي ، يمكنك القيام بذلك عبر الهاتف أو عبر الإنترنت. يجب أن يستغرق فتح الحساب عبر الإنترنت بضع دقائق فقط.\",\"intlOrderDetailsDiscount\":\"خصم\",\"intlOrderDetailsDelivery\":\"رسوم التوصيل\",\"intlOrderPageTitle\":\"طلبي\",\"intlNoOrderFound\":\"لم يتم العثور على أي طلب\",\"intlOrderPageDetails\":\"تفاصيل الطلب\",\"intlTableColTitle2\":\"كمية\",\"intlTableColTitle3\":\"السعر\",\"intlOrderCardTitleText\":\"طلب\",\"intlOrderCardDateText\":\"تاريخ الطلب\",\"intlOrderCardTotalText\":\"السعر الكلي\",\"joinButton\":\"انضم\",\"ar\":\"عربى\",\"zh\":\"صينى\",\"en\":\"الإنجليزية\",\"de\":\"ألمانية\",\"he\":\"اللغة العبرية\",\"es\":\"الأسبانية\",\"intlTextBy\":\"بواسطة\",\"intlReletedItems\":\"الأصناف ذات الصلة\",\"readFreeSampleButton\":\"قراءة عينة مجانية\",\"bookSectionTitle\":\"عن الكتاب\",\"authorSectionTitle\":\"عن المؤلف\",\"defaultIntlId\":\"يرجى إضافة عنصر نائب من ملف اللغة\",\"noResultFound\":\"عذرا ، لم يتم العثور على نتيجة :(\",\"deliveryText\":\"توصيل\",\"cuisineText\":\"أطباق\",\"minOrderText\":\"لمين\",\"fromText\":\"من عند\",\"loadMoreButton\":\"تحميل المزيد\"}");

/***/ }),

/***/ "p2kv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ProfileContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

/***/ }),

/***/ "pDgd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SAFlag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const SAFlag = ({
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "flag-icon-css-sa",
    viewBox: "0 0 640 480",
    width: width,
    height: height
  }, __jsx("defs", null, __jsx("clipPath", {
    id: "sa-a"
  }, __jsx("path", {
    fillOpacity: ".7",
    d: "M-85.3 0h682.6v512H-85.3z"
  }))), __jsx("g", {
    fillRule: "evenodd",
    clipPath: "url(#sa-a)",
    transform: "translate(80) scale(.9375)"
  }, __jsx("path", {
    fill: "#199d00",
    d: "M-128 0h768v512h-768z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M65.5 145.1c-.8 12-2 33 8.3 35.2 12.3 1.2 5.5-20.8 10-24.8.8-2 2.3-2 2.4.5v18.7c0 6 4 7.8 7 9 3.2-.2 5.4 0 6.6 3l1.6 32.3s7.4 2.2 7.8-18.1c.3-12-2.4-21.9-.8-24.2 0-2.3 3-2.4 5-1.3 3.2 2.2 4.6 5 9.6 4 7.6-2.2 12.2-5.9 12.3-11.7a47 47 0 00-3.5-16.6c.4-1-1.4-3.7-1-4.7 1.3 2.2 3.4 2 3.8 0-1.3-4.2-3.3-8.3-6.5-10-2.7-2.4-6.7-2-8 3-.8 5.7 2 12.4 6.1 18 .9 2.1 2.1 5.7 1.6 8.9-2.2 1.3-4.4.7-6.3-1.2 0 0-6-4.5-6-5.6 1.6-10.2.3-11.4-.6-14.3-.6-3.9-2.5-5.2-4-7.8-1.5-1.6-3.5-1.6-4.5 0-2.7 4.6-1.4 14.5.5 19 1.4 4.1 3.5 6.7 2.5 6.7-.8 2.3-2.5 1.7-3.8-1a66.6 66.6 0 01-2.1-17.4c-.5-4.6-1.1-14.4-4.2-17-1.8-2.4-4.5-1.2-5.5 1a82.4 82.4 0 00.3 13.4c2 7.4 2.7 14 3.7 21.5.3 10.1-5.8 4.4-5.5-.7a45 45 0 00-.3-19.4c-1-2.6-2.1-3.2-4.6-2.8-1.9 0-6.8 5.3-8.2 14.3 0 0-1.2 4.6-1.7 8.7-.7 4.6-3.7 8-5.9-.6-1.8-6.3-3-21.6-6-18z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M99 194.2l-32 15.4c.3-7.3 15.1-20.4 25.3-20.5 6.5.1 4.9 2.5 6.6 5.1z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M93.3 204.2c-16.8 43.5 39.5 49.6 45.8 1.8.6-2 3-3.9 3.4-.7-1.3 43.3-43.6 46.2-50.8 32.6a41.9 41.9 0 01-2.5-14.6c-1-8.5-5.5-5.2-6.2 3.2-.7 4.7-.5 6-.5 10.5 2.2 34.2 56.7 19.5 65.6-8.7 4.7-15.6-.8-27.1 1.7-27.1 5.4 5.8 13 .8 14.7-1.2.7-1 2.5-1.7 3.7-.4 4.2 3 11.6 1.6 13.2-3.7.9-5.3 1.6-10.7 1.8-16.2-3.5 1-6 1.7-6.3 3.2l-.7 4.6c-.3 1.5-3.2 1.5-3.4-.4-1.3-6-6.7-6.7-10 2.5-2.1 1.8-6.1 2.2-6.5-.5.5-6.2-2-7-7-4.1l-4.8-36.2c2 0 4 1.5 5.9-.9-2-6.5-6.5-19.7-9-20.7-1.1-1.4-2.1-.5-3.7-.1-2.6.8-5 3-4.2 7.4 3 18.8 5 33.1 8.1 52 .5 2.1-1.3 5-3.7 4.7-4-2.7-5-8.2-12-8-5 0-10.6 5.5-11.3 10.7-.9 4.2-1.2 8.7 0 12.3 3.5 4.2 7.7 3.8 11.4 2.9 3-1.3 5.5-4.3 6.6-3.6.7.9.1 10.9-14.3 18.5-8.7 4-15.7 4.8-19.4-2.3-2.3-4.5.2-21.4-5.6-17.5z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M165 160c3.3-1.2 19.3-19.6 19.3-19.6l-2.4-2c-.9-.7-.8-1.5 0-2.2 4-2.4 2.7-7.4.7-9.8a9.7 9.7 0 00-8.7.1c-2.8 2.7-3.4 7-1.2 9.6 2.1 1 4.2 3.2 2.8 4.4-6.6 7-24.5 19.1-22.4 19.5.4.6 11.5.6 11.8 0zm-97 65c-6 9.6-6.5 23.9-3.2 28.2 1.8 2 4.7 2.9 6.8 2.2 3.8-1.6 5.5-9.3 4.6-12-1.3-2-2.3-2.3-3.6-.7-2.6 5.4-3.7 1.7-4-1.3a70 70 0 01.8-15.2c.7-4.2 0-3-1.4-1.2zm257.1-15.3c-5.8-12.6-13.9-25-16.4-29.7a557.6 557.6 0 00-24.8-36c-6.2-7.4 10.2 3.1-2-11.7l-8.9-7.5c-2-1.4-6.8-4-7.6.2-.4 3.8-.2 5.8.4 8.9.5 2 3.5 5.5 5 7.5a565 565 0 0153.8 86.5c2.6-1.3 2-16.1.5-18.2z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M299.6 251.5c-1.2 1.3 2.8 6.8 8 6.8 8.6-1 16.2-5.8 23.2-18.6a33 33 0 005.3-14.2 317 317 0 00-5.8-72.4c-.3-2 0-4.4.2-5 .6-.7 2.5 0 3.5-1.7 1.5-1.5-4-14-7-18.7-1-2.2-1.5-3.6-3.3.2a27 27 0 00-3 13.6c4.1 28.5 5.4 53.4 8 81.9.3 2.8-.1 6.8-2 8.4a80.2 80.2 0 01-27.1 19.7zm116.5-.1c-6.2 3.6-6.2 7.7-1.2 7.8 8.6-1 18.8-1.7 25.8-12.3a41 41 0 004.2-16 303 303 0 00-4.7-71.4c-.2-2-1.1-6.7-.8-7.3.6-1.4 3.4.1 4.4-1.5 1.4-1.5-7.3-12.7-10.4-17.5-1-2.2-1.4-3.6-3.3.2a22.3 22.3 0 00-1.8 13.6c4.6 31 8 54.2 8.7 81.6-.4 2.6-.5 4-1.7 7.3-2.7 3.4-5.7 7.8-8.5 9.9-2.8 2-8.8 4-10.7 5.6z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M420.7 223.7c0-7.3.1-13.5-.1-19a34 34 0 00-3-13.5c-1.8-4.1-.7-7.4-1.6-11.8-.8-4.4-.6-11-1.8-16.1-.4-2-1.4-8.5-1.1-9.2.5-1.4 2.4 0 3.4-1.6 1.4-1.5-5-18-8.2-22.7-1.1-2.1-3.3-1.4-5.8 2-2.5 2.3-1.6 7.4-.6 12.3 6.1 32.3 10.8 61.6 9.8 92.3-.4 2.6 9-7.8 9-12.7zm-45.7-40c-3.9-.2-12-7.7-14.4-12a8 8 0 01.4-6.5c1.5-1 3.7-2 5.4-1 0 0 1.7 2.4 1.4 2.7 2 1 3 .5 3.2-.4.1-1.5-.6-2.4-.6-4 .9-4.6 6-5.3 8-2.4 1.4 1.8 2 5.5 2.1 8 0 1.3-2-.2-3.3 0-1.1.4-1.4 1.8-1.5 3-.2 3.3-.6 8.6-.7 12.5zm-71.8 48c1-9.8-.4-27.3-.5-33.1A477 477 0 00299 154c-1.2-8.4 3.4.9 2.8-4-1.5-8.3-6.1-14-11.6-21.5-1.7-2.5-1.7-3-4.4.6-3 6.7-.4 11.4.4 16.7 3.9 17.2 6.2 33 7.3 48.7a393.4 393.4 0 01.4 49c3 .1 7.6-4.7 9.3-11.8z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M434 216c-6.9-11.6-17.2-24-20-28.7a658 658 0 00-29.2-37.8c-8.5-9 4-1.5-1.6-8.5-4.7-5.1-6-6.8-10.1-9.9-2-1.3-3.2-3.8-4 .5a83 83 0 00-.2 11.2c0 1.7 1.8 5 3.4 7 20.7 25.5 43.4 51.5 61.6 84.2 2.6-1.3 1.7-16 0-18z"
  }), __jsx("path", {
    fill: "#1ba400",
    d: "M122.6 194.7c-.5.9-1.6 2-1.2 3.1.7 1 1.4 1.3 2.6 1.3 1.1 0 2.7.3 3-.3.6-.7 1-2 .6-3.3-1.2-3-4.4-1.8-5-.8z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M354.2 362.5c9.2.4 15.2.5 23.3 1.4l9.6-1c10.6-1 11 15.1 11 15.1 0 9.5-3.7 10-8.4 11-2.7.4-4-1.6-5.5-3.6a14 14 0 01-7 .4c-3.9-.2-7.7-.2-11.5-.5-4-.3-6.2.5-10.3.1-.8 1.3-2 3.1-4.4 2.6-2-.3-4.5-6-3.8-10.5 1.5-3.2 1-2.1 1-3.5-37.6-1-75.5-2.7-112.3-2.2-28.8.1-57.2 1.3-85.7 2.5-15.2-.2-26.8-2.6-34.8-14.3.8 0 38.8 2.1 49.9 1.4 20.5-.2 39.3-1.9 60.2-2.5 41.2.7 82.1.7 123.3 3.6-4-2.7-4-9 2-10.6.5-.4.8 3.1 1.7 3 4.9-.3 2.7 6.3 1.7 7.6zM188.6 135.3c-6.2 17.8 3.6 37.4 10.4 35.5 5 2 8-7.4 10-17.6 1.5-2.9 2.5-3.2 3.2-1.7-.2 13.6 1 16.7 4.5 20.8 7.8 6 14.3.8 14.8.3l6-6.1c1.4-1.5 3.2-1.5 5.1-.3 1.9 1.7 1.6 4.6 5.6 6.6 3.4 1.4 10.5.4 12.2-2.5 2.2-3.9 2.8-5.2 3.8-6.6 1.6-2.1 4.3-1.2 4.3-.5-.3 1.2-1.9 2.3-.8 4.5 2 1.4 2.4.5 3.5.2 4-2 7-10.6 7-10.6.1-3.2-1.7-3-2.9-2.2l-3.1 2.1c-2 .3-5.7 1.6-7.6-1.3-1.9-3.4-1.9-8.3-3.3-11.8 0-.2-2.6-5.5-.2-5.8 1.2.2 3.7.9 4.1-1.2 1.2-2.1-2.6-8-5.3-11-2.3-2.5-5.5-2.8-8.6-.2-2.2 2-1.9 4.2-2.3 6.3a9.8 9.8 0 002 8.7c2.2 4.2 6.1 9.7 4.8 17.5 0 0-2.3 3.6-6.3 3.1-1.7-.3-4.4-1-5.8-11.8-1.1-8 .2-19.4-3.2-24.7-1.3-3.3-2.2-6.4-5.2-.9-.8 2.2-4.3 5.5-1.8 12.2a36 36 0 012 19c-1.5 2.2-1.8 2.9-3.7 5-2.6 3-5.5 2.2-7.7 1.1-2-1.3-3.6-2-4.6-6.5.2-7 .6-18.5-.7-20.9-1.9-3.8-5-2.4-6.3-1.2a47.7 47.7 0 00-11.5 23.5c-1.8 5.8-3.7 4.1-5 1.8-3.2-3-3.5-26.7-7.4-22.8z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M207.4 174.1c2.9-2 1.6-3.4 5.8.8a72 72 0 019.2 31.3c-.2 2.6 1.6 4.2 2.5 3.6.4-6 15.1-14.4 28.6-15.6 2-.5 1-4.4 1.3-6.4-.8-7.5 4.2-14.3 11.2-14.8 9.6 1.4 12.8 6.5 13 14.2-1.1 15-16.7 17.5-25.4 18.7-1.3.5-1.9 1.1 0 1.8l36.6.2 1.9 1c.2 1-.6.2-2 2.6a29.5 29.5 0 00-3.7 11.5c-10.9 3.6-22.2 5-33.6 6.5-4 2-6 4.7-5.2 7.7 1.4 3.3 10.2 6.7 10.2 6.8 1.7 1 3.6 3.5-.5 8.6-17.8-.8-31.7-8.4-36.5-19.1-1.4-1.1-3 0-4 1.4-7 9-13.8 17-25.7 21.4-7 1.8-14.3-1.1-17.7-5.7-2.3-2.7-2.2-5.6-3-6.2-3.9 1.7-36.9 15.7-32.7 9.1 8-8.5 22-14.9 34.2-23.3.9-2.9 2.5-12.5 7.3-15.6.3 0-.7 5.6-.6 8 0 2-.2 2.7.2 2.2.9-.5 15.7-12.2 17-15.8 1.4-2 .3-7.2.3-7.4-2.8-7.2-6.7-7.8-8.1-11.4-1.3-4.7-.7-10.1 2-11.7 2.4-2.1 5.2-1.9 7.9.5 3 2.7 5.6 8 6.4 11.9-.5 1.5-4-1-5-.3a16 16 0 013.7 7.8c2 8.2 1.4 11.4-.6 16.7-6.6 13.9-15 18-22.4 23.2-.2 0-.3 3.5 2.4 5.4 1 1 4.9 1.5 9.4 0a54.5 54.5 0 0022.3-23.3 51 51 0 00-2.4-22.2c-2.9-6.7-6.3-16.2-6.3-16.4-.1-4.2.2-5.6 2-7.7zm-95.8-38.6c4.2 2 12.2 1.1 11.8-5.7l-.2-3.1c-.8-2-3.2-1.5-3.7.5-.2.7.3 1.8-.3 2.1-.4.4-1.7.2-1.7-1.7 0-.6-.4-1.2-.7-1.6-.2-.2-.4-.2-.9-.2-.6 0-.6.1-.9.6-.1.5-.3 1-.3 1.6 0 .7-.4.9-.8 1-.6 0-.5 0-1-.2-.2-.3-.5-.4-.5-1l-.3-1.6c-.2-.3-.6-.5-1-.6-2.3 0-2.5 2.7-2.3 3.7-.2.2-.3 4.9 2.8 6.2z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M235.1 187.7c4.2 2 14.3.9 11.8-5.6l-.2-3.2c-.9-2-3.2-1.5-3.7.6-.2.6.3 1.7-.4 2-.3.4-1.7.2-1.6-1.6 0-.6-.4-1.3-.7-1.7-.3-.1-.4-.2-1-.2-.5 0-.5.2-.8.7-.2.5-.3 1-.3 1.6-.1.6-.4.8-.9 1-.5 0-.4 0-.8-.3-.3-.3-.6-.4-.6-.9l-.3-1.6c-.2-.3-.6-.5-1-.6-2.3 0-2.5 2.6-2.4 3.6-.1.2-.2 5 3 6.2zm72-21.6c4.2 2 12.1 1.1 11.8-5.6l-.2-3.2c-.9-2-3.2-1.5-3.7.5-.2.7.3 1.8-.4 2.2-.3.3-1.7.1-1.6-1.8 0-.6-.4-1.2-.7-1.6-.3-.2-.4-.2-1-.2-.5 0-.5.2-.8.7l-.3 1.5c-.1.7-.4 1-.9 1s-.4 0-.8-.2c-.3-.3-.6-.4-.6-.9s-.1-1.3-.3-1.7c-.2-.3-.6-.4-1-.5-2.3 0-2.5 2.6-2.4 3.6-.1.2-.2 4.9 3 6.2zm37.3 54.3c-7.3 8.3-4.1 22-2.4 25 2.4 4.8 4.3 7.9 9 10.3 4.3 3.1 7.7 1.2 9.5-1 4.3-4.5 4.4-16 6.4-18.2 1.4-4.2 5-3.5 6.7-1.6a16.5 16.5 0 006.2 5.3c4 3.5 8.8 4.2 13.6 1 3.2-1.9 5.3-4.2 7.2-8.9 2-5.6 1-31.6.5-47l-4.2-21.5c0-.2-.5-10.2-1-12.5 0-1-.3-1.3.7-1.2 1.1 1 1.2 1 2 1.3 1 .2 2-1.7 1.3-3.3l-10-18.6c-.8-.8-1.9-1.6-3.2.2a7.3 7.3 0 00-2.4 5.5c.3 4.4 1 8.9 1.3 13.3l4 22.6c1.3 16 1.6 29.2 2.9 45.3-.2 6.8-2.3 12.7-4.3 13.6 0 0-3 1.7-5-.2-1.5-.6-7.4-9.9-7.4-9.9-3-2.7-5-2-7.1 0-6 5.8-8.6 16.4-12.7 23.8-1 1.7-4 3-7.2-.1-8.2-11.3-3.4-27.3-4.4-23.2zM309 126.7c3.8 1.5 6.4 9.2 5.6 13-.8 4.5-2.8 9.5-4.2 8.9-1.6-.6 1-4.6-.5-8.8-.8-2.8-6-7.8-5.4-9.2-1-3.1 2.2-4.5 4.5-4z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M356.6 225c.7-9.2-.6-14.8-.8-20.2s-6.1-46.6-7.3-50.6c-1.5-7.8 5.7-1 4.9-5.6-2.5-5.6-8.6-13.9-10.5-18.8-1.2-2-.7-4-3.3-.5a42.3 42.3 0 00-2.3 19.2c6.2 32.3 12.5 59.1 11.5 89.8 3 0 6.3-6.7 7.8-13.3zm64.4-85.3c3.5 1.7 5.5 11.3 5.1 14-.7 5-2.5 10.4-3.8 9.7-1.5-.6.3-7.4-.4-9.5-.8-3-5.5-8.4-5-10-1-3.4 2-4.8 4.1-4.2zm-255.7 67.9c3.3 1.3 5.3 8.3 5 10.3-.8 3.7-2.5 7.7-3.8 7.1-1.3-.4.3-5.4-.3-7-.3-3.7-4.9-5.7-4.8-7.3-.8-3 2-3.5 4-3.1z"
  }), __jsx("path", {
    fill: "#1b9d00",
    d: "M244.9 218.2c4.2.2 6.3 3.6 2.4 5-4 1.3-7.7 2.4-7.8 8 1.5 8-2 5.2-4 4.2-2.4-1.8-9.2-6-10.2-15-.1-2.1 1.6-4 4.3-4 4 1.1 10 1.2 15.3 1.8z"
  }), __jsx("path", {
    fill: "#fff",
    d: "M77.4 124.4c4.8 1.4 5.1 8.6 4.8 10.7-.7 3.8-2.4 7.9-3.6 7.4-1.4-.5 0-5.7-.7-7.3-.7-2.2-4.8-6.4-4.4-7.6-.9-2.5 2-3.7 3.9-3.2zm95.9 33.6c-3.8 2-5.2 8-2.9 11.6 2.2 3 5.6 1.9 6 1.9 3.7.4 5.9-6.9 5.9-6.9s.1-2-4.2 1.9c-1.9.3-2-.4-2.5-1.4a9 9 0 01.5-5.7c.7-1.8-.7-2.6-2.8-1.4zm28-36.4c-2 1.3-5.7 5.2-5.8 9.6-.1 2.5-.6 2.5 1 4 1.3 1.8 2.4 1.7 4.8.4a5.1 5.1 0 002.3-3.4c.6-2.8-3 1.4-3.4-1.8-.8-3 1.5-4.2 3.7-7 0-2 0-3.3-2.7-1.8zm22.4 4a59.5 59.5 0 00-1.6 11.1c-.6 2.8 3 4 4.5.4 2.4-6.5 2.4-9.3 2.6-12-.7-4.3-3.6-4.2-5.5.5zm142 72.3c.4-.5 20-14.4 20-14.4 2-.7 1.5 7.2.6 7.1a77.8 77.8 0 01-20.7 14.3c-1 .7-1.9-5.3 0-7zm17.7-.2c3.5 1.7 4.9 11.8 4.5 14.5 0 5.4-3.3 9.6-4.7 9-1.4-.7.2-6.7-.5-8.8-.8-3-3.7-8.5-3.2-10.1-1-3.4 1.8-5.2 4-4.6zm-116 43.4a26 26 0 015.6-4.9c2-1 3.8.8 3.7.7.3 2-1.2 3.7-.7 6.3.4 1 .7 2.2 2.6 1.8 3.1-2.5 6-2.7 9-2.8 2.5.1 2.6 4.2 1 4.2-5.7 1.2-8.2 2.8-12.3 4.3-2 1.2-3.6-.3-3.6-.4s-1.1-1.1-.4-3.7c.2-2-.6-3.2-2.4-3-1.2.8-2.4 1.2-3-.3-.3-1-.4-1.6.5-2.2zm136.6 5.4c.8 1 1.4 2-.1 3.8l-3.7 3.2c-.6 1-1 2.8 1 3.3 3.6 1 12-4.5 12-4.6 1.4-1 1-3 .8-3-.8-.9-2.6-.3-3.8-.5-.6 0-2.5-.2-1.6-2a11.4 11.4 0 001.6-2.9c.5-1.2 0-2-2-2.7-2.1-.4-3-.2-5.3 0-1.2.2-1.6.8-1.9 2.3.1 2.3 1.5 2.2 3 3z"
  }), __jsx("path", {
    fill: "#259f00",
    d: "M268.1 189.7c-.5 1-2.3 1-4 0s-2.7-2.6-2.1-3.5 2.3-.9 4 0 2.6 2.6 2.1 3.5zm-89-53.6c-1 .3-2.4-.6-3-2s-.3-2.6.7-2.9 2.3.7 3 2 .3 2.7-.8 3z"
  }), __jsx("path", {
    fill: "#209000",
    d: "M355.2 375c9.4.4 18.2 0 27.5.5 1.7 1.5.5 5-.6 4.8l-7.8-.3c-.1-3-7.7-2.5-7.5.1-4.1.5-7.8-.1-12-.3-1.2-1.5-1-4.2.4-4.8z"
  })));
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

/***/ "pQO/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FruitsVegetable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const FruitsVegetable = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    "data-name": "Layer 2"
  }, __jsx("g", {
    "data-name": "Layer 3"
  }, __jsx("path", {
    "data-name": "Path 16",
    d: "M10.235 3.966a2.943 2.943 0 00-1.38-2.122c-.528-.243-.485-.618-.338-.854s.41-.231.832.164a5 5 0 011.368 2.87z",
    fill: color,
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: ".416"
  }), __jsx("path", {
    "data-name": "Path 17",
    d: "M6.514 7.976a4.757 4.757 0 109.513 0c0-2.627-1.5-4.976-4.757-4.73-2.619.197-4.767 1.656-4.756 4.73z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.387"
  }), __jsx("path", {
    "data-name": "Path 18",
    d: "M6.514 7.976a4.757 4.757 0 109.513 0c0-2.627-1.5-4.976-4.757-4.73-2.619.197-4.767 1.656-4.756 4.73z",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 19",
    d: "M14.731 5.045s1.506 1.544.714 2.993c-.287.526-1.2.192-1.234-.485s.25-1.27-.236-2.05c-.349-.566.26-.878.756-.458z",
    fill: "#fff"
  }), __jsx("path", {
    "data-name": "Path 20",
    d: "M10.834 3.413s1.161-4.315 6.469-2.048c0 0-2.459 4.074-6.469 2.048z",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.387"
  }), __jsx("path", {
    "data-name": "Path 21",
    d: "M10.834 3.413s1.161-4.315 6.469-2.048c0 0-2.459 4.074-6.469 2.048z",
    fill: "#fff"
  }), __jsx("path", {
    "data-name": "Path 22",
    d: "M10.516 4.513a10.193 10.193 0 015.63-2.863c-2.736-.521-6.018 1.748-6.018 1.748s.289.864.388 1.115z",
    fill: color,
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".035"
  }), __jsx("path", {
    "data-name": "Path 23",
    d: "M10.895 9.896h0c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308h0a4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z",
    fill: "#fff",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "3.19"
  }), __jsx("path", {
    "data-name": "Path 24",
    d: "M10.895 9.896h0c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308h0a4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.387"
  }), __jsx("path", {
    "data-name": "Path 25",
    d: "M10.895 9.896h0c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308h0a4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z",
    fill: "#fff",
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: ".069"
  }), __jsx("path", {
    "data-name": "Path 26",
    d: "M10.895 9.896c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308 4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 27",
    d: "M1.595 11.342a4.375 4.375 0 00.128.684 2.664 2.664 0 00.3.335c1.067 1.028 4.409 1.723 7.173 1 .883-.23 1.522-1.3.526-1.851-.139-.076-.243-.184-.208-.277s.089-.106.269-.1a1.2 1.2 0 001.232-.735 4.126 4.126 0 00-.121-.509c-.272-.876-1.974-1.644-4.239-1.715a5.286 5.286 0 00-4.515 1.858 2.024 2.024 0 00-.545 1.31z",
    fill: "#fff"
  }), __jsx("path", {
    "data-name": "Path 28",
    d: "M1.921 9.984a1.569 1.569 0 00.1 2.377c1.066 1.028 4.409 1.723 7.173 1 .883-.23 1.522-1.3.526-1.851-.139-.076-.243-.184-.208-.277s.089-.106.269-.1a1.183 1.183 0 001.259-.823 1.321 1.321 0 00-.785-1.413",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".416"
  }), __jsx("path", {
    "data-name": "Path 29",
    d: "M8.013 10.78c-.018.471-.87.791-1.9.752s-1.856-.423-1.837-.9.87-.963 1.9-.924 1.855.605 1.837 1.072z",
    fill: color,
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".555"
  }), __jsx("path", {
    "data-name": "Path 30",
    d: "M9.722 12.123a2.411 2.411 0 01.467 2.08 2.759 2.759 0 01-1.5 2.427",
    fill: "none",
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: ".555"
  }))));
};

/***/ }),

/***/ "qC9r":
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

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
  // height: '100vh',
  padding: '1.5rem',
  fontSize: '15px',
  color: '000',
  backgroundColor: '#fff'
});

/***/ }),

/***/ "r/UT":
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"Home\",\"nav.grocery\":\"Grocery\",\"nav.makeup\":\"Makeup\",\"nav.bags\":\"Bags\",\"nav.clothing\":\"Clothing\",\"nav.furniture\":\"Furniture\",\"nav.book\":\"Book\",\"nav.medicine\":\"Medicine\",\"nav.foods\":\"Foods\",\"nav.terms_and_services\":\"Terms and Services\",\"nav.privacy_policy\":\"Privacy Policy\",\"nav.offer\":\"Offer\",\"nav.help\":\"Need Help\",\"nav.profile\":\"Profile\",\"nav.checkout\":\"Checkout\",\"nav.order_received\":\"Order Invoice\",\"nav.logout\":\"Logout\",\"nav.login\":\"Login\",\"nav.order\":\"Your orders\",\"nav.plants\":\"Your plants\",\"addressRefId\":\"Location ref. name. For ex.: 'My office/house'\",\"addressId\":\"Address line\",\"locationId\":\"Town/city\",\"instructionsId\":\"¿Any delivery instructions? Ex. '2nd floor, appt. 'B'.\",\"groceriesTitle\":\"Groceries Delivered in {minute} Minute\",\"groceriesSubTitle\":\"Get your healthy foods & snacks delivered at your doorsteps all day everyday\",\"makeupTitle\":\"Branded & imported makeups\",\"makeupSubTitle\":\"Easiest and cheapest way to get your branded & imported makeups\",\"bagsTitle\":\"Exclusive Branded bags\",\"bagsSubTitle\":\"Get your exclusive & branded bags delivered to you in no time\",\"womenClothsTitle\":\"Shop your designer dresses\",\"womenClothsSubTitle\":\"Ready to wear dresses tailored for you from online. Hurry up while stock lasts.\",\"furnitureTitle\":\"Exclusive furniture on cheap price\",\"furnitureSubTitle\":\"Make your house a home with our wide collection of beautiful furniture\",\"booksTitle\":\"Your own books store\",\"booksSubTitle\":\"Get your favorite books from our wide range of books.\",\"medicineTitle\":\"Your medication, delivered\",\"medicineSubTitle\":\"Say goodbye to all your healthcare worries with  us\",\"foodsTitle\":\"You order we deliver\",\"foodsSubTitle\":\"Get your favorite foods in less than an hour\",\"alternativeCheckout\":\"Checkout Alternative\",\"termAndConditionHelper\":\"By making this purchase you agree to our\",\"termAndCondition\":\"terms and conditions.\",\"removeCoupon\":\"(Remove)\",\"reqMedicine\":\"Request Medicine\",\"submitRequest\":\"Submit Request\",\"noteHead\":\"Note\",\"noteDescription\":\"Product availability & price will confirm over phone. Delivery Charge inside the city ${inside} & outside the city ${outside}.\",\"rmMedicineName\":\"Medicine Name\",\"rmMedicineQuantity\":\"Quantity\",\"rmPrescripttionUpload\":\"Upload your prescription\",\"rmUploadText\":\"Drag/Upload your file here.\",\"cartTitle\":\"Your Order\",\"discountText\":\"Discount\",\"vatText\":\"Incl. VAT\",\"searchPlaceholder\":\"Search your products from here\",\"searchButtonText\":\"Search\",\"mobileSignInButtonText\":\"Sign in/up\",\"navlinkAccountSettings\":\"Your Account Settings\",\"cartItems\":\"Items\",\"cartItem\":\"Item\",\"printInvoiceBtn\":\"Print Invoice\",\"backProfileBtn\":\"Back to Profile\",\"addEcoToCartButton\":\"Buy\",\"addToCartButton\":\"Add to cart\",\"deliveryFee\":\"Delivery Fee\",\"checkoutDeliveryAddressInvalid\":\"Delivery Address not selected (Step 2)\",\"checkoutDeliveryMethodInvalid\":\"Delivery Method not selected (Step 1)\",\"checkoutContactNumberInvalid\":\"Contact Number not selected (Step 3)\",\"checkoutPaymentMethodInvalidOption3\":\"Payment Method not selected (Step 3)\",\"checkoutPaymentMethodInvalidOption4\":\"Payment Method not selected (Step 4)\",\"backBtn\":\"Back\",\"noProductFound\":\"No products found\",\"specialCode\":\"Do you have a voucher?\",\"couponApplied\":\"Coupon Applied\",\"couponPlaceholder\":\"Enter voucher code here\",\"sidebarYourOrder\":\"Order\",\"profilePageTitle\":\"Your Profile\",\"profileNameField\":\"Name\",\"profileEmailField\":\"Email\",\"profileSaveBtn\":\"Save\",\"contactNumberTItle\":\"Contact Number\",\"addContactBtn\":\"Add Contact\",\"deliveryAddresTitle\":\"Delivery Address\",\"addAddressBtn\":\"Add Address\",\"addNew\":\"Add New\",\"paymentCardTitle\":\"Payments Card\",\"addCardBtn\":\"Add Card\",\"savedCardsId\":\"Saved Cards\",\"savedContactId\":\"Save Contact\",\"savedAddressId\":\"Save Address\",\"siteFooter\":\"Ditto is a product by\",\"subTotal\":\"Sub Total\",\"itemsText\":\"items\",\"shippinFeeText\":\"Shipping Fee\",\"voucherText\":\"Voucher\",\"voucherApply\":\"Apply\",\"couponError\":\"Invalid Coupon\",\"totalText\":\"Total\",\"selectDeliverySchedule\":\"Select Delivery Method\",\"deliveryScheduleSelected\":\"Delivery Method Selected\",\"pickupScheduleSelected\":\"Pickup Method Selected\",\"checkoutDeliveryAddress\":\"Select Delivery Address\",\"contactNumberText\":\"Contact Number\",\"selectPaymentText\":\"Payment Option\",\"proceesCheckout\":\"Proceed to Checkout\",\"backHomeBtn\":\"Back to Home\",\"orderReceivedText\":\"Order\",\"orderReceivedSuccess\":\"Thank you. Your order has been received\",\"orderNumberText\":\"Order Number\",\"orderDateText\":\"Date\",\"paymenMethodText\":\"Payment Method\",\"paymentMethodName\":\"Cash on delivery\",\"deliveryDetailsText\":\"Delivery details\",\"pickupDetailsText\":\"Pick Up details\",\"orderTrackingText\":\"Order Tracking\",\"totalItemText\":\"Amount of items\",\"orderTimeText\":\"Order Method\",\"deliveryMethodTitle\":\"Where ?\",\"deliveryTimeText\":\"Delivery Time\",\"deliveryTime\":\"When ?\",\"deliveryLocationText\":\"Delivery Location\",\"totalAmountText\":\"Payment Details\",\"loadMoreBtn\":\"Load More\",\"dittoBotsIds\":\"DittoBots Available\",\"noDittoBotsTextId\":\"You dont have any DittoBots at the moment. Buy one to get started!\",\"welcomeBack\":\"Welcome Back\",\"clickHereId\":\"Click Here\",\"otpForm\":\"Account created successfully!\",\"otpText\":\"Verify your phone number to authenticate\",\"verificationCodePlaceholder\":\"Verification Code\",\"loginText\":\"\",\"otpSubText\":\"\",\"processCheckout\":\"Pay\",\"emailAddressPlaceholder\":\"Phone Number\",\"passwordPlaceholder\":\"Password\",\"passwordPlaceholderRegister\":\"Password (Six characters minimum)\",\"passwordRepeatPlaceholder\":\"Repeat the password here\",\"continueBtn\":\"Continue\",\"loginBtn\":\"Log in\",\"orText\":\"or\",\"continueFacebookBtn\":\"Continue with Facebook\",\"continueGoogleBtn\":\"Continue with Google\",\"dontHaveAccount\":\"Don't have an account?\",\"signUpBtnText\":\"Sign Up Here\",\"pickUpId\":\"Pickup\",\"deliveryId\":\"Delivery\",\"forgotPasswordText\":\"Forgot your password?\",\"resetText\":\"Reset It\",\"phoneVerifyText\":\"Phone number not verified?\",\"userAlreadyRegistered\":\"User already registered\",\"notAuth\":\"You are not authenticate user! Please login to place your order.\",\"verifyNowText\":\"Verify Now\",\"phoneVerificationText\":\"Phone Verification\",\"sendPhoneVerifyText\":\"We'll send you a verification code to verify your phone number\",\"signUpText\":\"Purchase confirmations are being sent to your WhatsApp. Fill out the email field if you wish to receive them that way!\",\"tramsText\":\"By signing up, you agree to Ditto's\",\"termsConditionText\":\"Terms & Conditions\",\"alreadyHaveAccount\":\"Already have an account?\",\"backToSign\":\"Back to\",\"loginBtnText\":\"Login\",\"forgotPassText\":\"Forgot Password\",\"sendResetPassText\":\"We'll send you a link to reset your password\",\"resetPasswordBtn\":\"Reset Password\",\"loading\":\"Loading...\",\"intlCopyBtnId\":\"Copy\",\"intlCopySuccessId\":\"Copied\",\"pickupModalheading\":\"Find your closest PickUp Location\",\"deliveryModalheading\":\"Where do we send it?\",\"changeDeliveryMethod\":\"Change\",\"defaultDeliveryPickupText\":\"How do you want your items?\",\"locationModalSubHeading\":\"You have to select your location for deliver service perpous\",\"locationModalFooter\":\"Free Delivery For 1st Order\",\"saleText\":\"Sale\",\"offText\":\"Off\",\"somethingWentWrong\":\"Something went wrong, please try again later.\",\"faqNo1Title\":\"How to contact with Customer Service?\",\"faqNo1Desc\":\"Our Customer Experience Team is available {number1} days a week and we offer {number2} ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.\",\"faqNo2Title\":\"App installation failed, how to update system information?\",\"faqNo2Desc\":\"Please read the documentation carefully . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum\",\"faqNo3Title\":\"Website reponse taking time, how to improve?\",\"faqNo3Desc\":\"At first, Please check your internet connection . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .\",\"faqNo4Title\":\"How do I create a account?\",\"faqNo4Desc\":\"If you want to open an account for personal use you can do it over the phone or online. Opening an account online should only take a few minutes.\",\"intlOrderDetailsDiscount\":\"Discount\",\"intlOrderDetailsDelivery\":\"Delivery Fee\",\"intlOrderPageTitle\":\"My Order\",\"intlNoOrderFound\":\"No order found\",\"intlOrderPageDetails\":\"Order Details\",\"intlTableColTitle2\":\"Quantity\",\"intlTableColTitle3\":\"Price\",\"intlOrderCardTitleText\":\"Order\",\"intlOrderCardDateText\":\"Order Date\",\"intlOrderCardTotalText\":\"Total Price\",\"joinButton\":\"Sign in/up\",\"ar\":\"Arabic\",\"zh\":\"Chinese\",\"en\":\"English\",\"de\":\"German\",\"he\":\"Hebrew\",\"es\":\"Spanish\",\"intlTextBy\":\"by\",\"intlReletedItems\":\"Related Items\",\"editContactId\":\"Edit number phone\",\"readFreeSampleButton\":\"Read Free Sample\",\"bookSectionTitle\":\"About The Book\",\"authorSectionTitle\":\"About The Author\",\"defaultIntlId\":\"Please add a Placeholder from language file\",\"noResultFound\":\"Sorry, No result found :(\",\"deliveryText\":\"Delivery\",\"cuisineText\":\"Cuisine\",\"minOrderText\":\"Min Order\",\"fromText\":\"From\"}");

/***/ }),

/***/ "rS9M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuDown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const MenuDown = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 6"
  }, __jsx("path", {
    id: "Path_2897",
    "data-name": "Path 2897",
    d: "M0,63.75l6,6,6-6Z",
    transform: "translate(0 -63.75)",
    fill: color
  }));
};

/***/ }),

/***/ "rvb8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefundIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const RefundIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    "data-name": "Group 2392",
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 15 13"
  }, __jsx("g", {
    "data-name": "Group 2391"
  }, __jsx("path", {
    "data-name": "Path 335",
    d: "M301.479,70.5a3.284,3.284,0,1,0-2.812-3.25A3.058,3.058,0,0,0,301.479,70.5Zm-.765-4.656.625-.361a.275.275,0,0,1,.3.016.377.377,0,0,1,.148.307v2.889a.316.316,0,1,1-.625,0v-2.3l-.173.1a.3.3,0,0,1-.419-.162A.389.389,0,0,1,300.715,65.844Z",
    transform: "translate(-289.917 -64)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 336",
    d: "M2.919,213.931l-2.545-.588a.284.284,0,0,0-.259.075A.387.387,0,0,0,0,213.7v5.778a.339.339,0,0,0,.313.361H2.271a1,1,0,0,0,.928-.93l.464-3.759A1.08,1.08,0,0,0,2.919,213.931Z",
    transform: "translate(0 -208.28)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 337",
    d: "M138.085,247.5a7.23,7.23,0,0,0-1.64.332.362.362,0,0,0-.235.368c0,.007,0,.014,0,.022a1.747,1.747,0,0,1-.585,1.351,2.141,2.141,0,0,1-1.477.462,11.623,11.623,0,0,1-3.5-.769.38.38,0,0,1-.236-.418.315.315,0,0,1,.4-.281,11.347,11.347,0,0,0,3.339.745,1.552,1.552,0,0,0,1.1-.319.984.984,0,0,0,.334-.772,1.416,1.416,0,0,0-.016-.172c-.118-1-1.254-1.353-2.422-1.627a4.926,4.926,0,0,1-1.335-.569,3.055,3.055,0,0,0-1.539-.521,5.015,5.015,0,0,0-.752.06.353.353,0,0,0-.27.386,1.994,1.994,0,0,1-.009.384l-.464,3.76a.985.985,0,0,1-.02.1l-.017.072a.38.38,0,0,0,.176.416,13.78,13.78,0,0,0,4.481,1.685c1.212,0,3.708-1.418,5.359-2.356.426-.242.779-.443,1.01-.56a.364.364,0,0,0,.193-.321C139.968,248.1,139.195,247.5,138.085,247.5Z",
    transform: "translate(-124.96 -239.191)",
    fill: color
  })));
};

/***/ }),

/***/ "s8q9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dairy; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Dairy = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 18 18"
  }, __jsx("g", {
    fill: color
  }, __jsx("path", {
    "data-name": "Path 19",
    d: "M4.313 14.945V12.23a.34.34 0 00-.34-.34H.332a5.534 5.534 0 00-.125 3.393h3.767a.34.34 0 00.339-.338z"
  }), __jsx("path", {
    "data-name": "Path 20",
    d: "M7.652 16.402l.345-.4a3.843 3.843 0 00-.065-4.593l-.223-.278V9.176a1.876 1.876 0 01-.21-.465 1.015 1.015 0 00-.462-1.925H2.968a1.018 1.018 0 00-.391 1.958A2.656 2.656 0 011.7 9.93a4.641 4.641 0 00-1.056 1.282h3.331a1.019 1.019 0 011.014 1.017v2.714a1.019 1.019 0 01-1.018 1.018H.462A3.259 3.259 0 003.41 18h3.261a3.056 3.056 0 001.428-.36 2.313 2.313 0 01-.321-.723zM3.689 8.147h-.722a.34.34 0 010-.678h4.07a.34.34 0 110 .678H3.682z"
  }), __jsx("path", {
    "data-name": "Rectangle 1",
    d: "M13.136 7.14h3.732v7.465h-3.732z"
  }), __jsx("path", {
    "data-name": "Path 21",
    d: "M15.237 3.144l-.25-.21a.4.4 0 01-.13-.321.547.547 0 01.062-.221h-2.368a.34.34 0 010-.678h2.886a1.006 1.006 0 00.071-.353v-.343A1.019 1.019 0 0014.492 0H10.76a1.019 1.019 0 00-1.018 1.018v.34a1 1 0 00.072.353h1.38a.34.34 0 010 .678h-.838a.546.546 0 01.073.2.355.355 0 01-.081.284.68.68 0 01-.063.063c-.077.066-.158.133-.241.2a3.638 3.638 0 00-1.657 2.967v4.786l.074.092a4.507 4.507 0 01.049 5.461l-.115.133.042.171a1.619 1.619 0 001.572 1.233h5.24a1.623 1.623 0 001.622-1.622v-1.074h-4.414V6.462h4.411v-.355a3.645 3.645 0 00-1.631-2.963z"
  })));
};

/***/ }),

/***/ "sDBz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appReducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  searchTerm: '',
  isSticky: false,
  isSidebarSticky: true,
  isDrawerOpen: false
};
function appReducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return _objectSpread(_objectSpread({}, state), {}, {
        searchTerm: action.payload
      });

    case 'SET_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSticky: true
      });

    case 'REMOVE_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSticky: false
      });

    case 'SET_SIDEBAR_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSidebarSticky: true
      });

    case 'REMOVE_SIDEBAR_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSidebarSticky: false
      });

    case 'TOGGLE_DRAWER':
      return _objectSpread(_objectSpread({}, state), {}, {
        isDrawerOpen: !state.isDrawerOpen
      });

    default:
      {
        throw new Error(`Unsupported action type at App Reducer`);
      }
  }
}

/***/ }),

/***/ "sLJp":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "t1q0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USFlag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const USFlag = ({
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "flag-icon-css-us",
    viewBox: "0 0 640 480",
    width: width,
    height: height
  }, __jsx("g", {
    fillRule: "evenodd"
  }, __jsx("g", {
    strokeWidth: "1pt"
  }, __jsx("path", {
    fill: "#bd3d44",
    d: "M0 0h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8V197H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8V512H0z",
    transform: "scale(.9375)"
  }), __jsx("path", {
    fill: "#fff",
    d: "M0 39.4h972.8v39.4H0zm0 78.8h972.8v39.3H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0z",
    transform: "scale(.9375)"
  })), __jsx("path", {
    fill: "#192f5d",
    d: "M0 0h389.1v275.7H0z",
    transform: "scale(.9375)"
  }), __jsx("path", {
    fill: "#fff",
    d: "M32.4 11.8L36 22.7h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 39.4l3.5 10.9h11.5L70.6 57 74 67.9l-9-6.7-9.3 6.7L59 57l-9-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7L124 57l-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5L330 57l3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 66.9L36 78h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zM64.9 94.5l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 122.1L36 133h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 149.7l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zM32.4 177.2l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 204.8l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 232.4l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7H29zm64.9 0l3.5 10.9h11.5L103 250l3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9H177l-9 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.5z",
    transform: "scale(.9375)"
  })));
};

/***/ }),

/***/ "tD6N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const DashboardIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 15 15"
  }, __jsx("g", {
    "data-name": "Group 2583",
    transform: "translate(0 0)"
  }, __jsx("path", {
    "data-name": "Path 2129",
    d: "M1667.731,877.683a3.066,3.066,0,1,1-3.067-3.068A3.061,3.061,0,0,1,1667.731,877.683Z",
    transform: "translate(-1652.731 -865.747)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2130",
    d: "M1471.213,874.615a3.066,3.066,0,1,1-3.072,3.064A3.06,3.06,0,0,1,1471.213,874.615Z",
    transform: "translate(-1468.141 -865.747)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2131",
    d: "M1474.272,684.227a3.066,3.066,0,1,1-3.044-3.075A3.063,3.063,0,0,1,1474.272,684.227Z",
    transform: "translate(-1468.14 -681.152)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2132",
    d: "M1674.436,691.284q0,1.143,0,2.286c0,.335-.107.441-.443.441h-4.572c-.326,0-.438-.108-.438-.43q0-2.295,0-4.589c0-.323.111-.433.435-.433h4.572c.344,0,.445.105.446.455Q1674.436,690.149,1674.436,691.284Z",
    transform: "translate(-1659.775 -688.219)",
    fill: color
  })));
};

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

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

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

/***/ }),

/***/ "upeG":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAADjCAAAAADP6PUYAAAXPElEQVR42u0dq47rPNMvULhsddiCRQuWlC0oLe6SotKSBUflhWWlBSUFK/UFKvUBAgNLiiKFJga2nCgh/uOm8SW32omzZz/pNxqdPZnOJPbMeK6AshXCbDEgZRAqoJAwKGZQzCDCoJRBCBYQezJUkVCOhOIoCq7Oab9eTKeTyWQ6/Vws/66328Px7Fw8H0W3X8jR0QZ0fWgCw7CHUPaA7+z/foDW9bLYnr3sJxD6D7GHkHfcTIH2mmxOHsL/Efa87yUwX39Wp/CH2YNlVLCKSj42BAXn1RPovMZbFxLczp4ZTSDMVr6lgjAMciwMuu2VhEERgyIGJTdpwaAcS/ZokJOS4UCUHOeg91o5afai7NAUhgBW5d3tJeWo2EvKUTEoR1X34RAOjgtgaa2cEKP+NLFliT13BWyuP5sLGpS9sBlVWEYVHdvF//Pbx3y13Z/OJ7bO59Nhu5pP3p5HbQ/NzkkfmqrsQY4KFic4YVCOikFJcZZhgQoh6m8ayXwaZ2rN9fw4uUkBmmJM8O1Rmv2T77nn3XL83KgTd2GmYsxpktiBoDjB4iyH4iznUopBuZSqnuBrgxIYjVdHF1JCECJNAoH9LaLoclp9NIjbld+FJgo51EfvUXqpZ+5jfb5EJicmvp7Xk9pN8HUt79AfUusIXRa1ZlZmgWTfxUwgZN8R+aflSx2DF7FD+7LHoFALFb581fC2dFAFiY5ACHN6kPP1WsX690K02AurdjlI05SmiC1aQJhBCYMIg2IGxQxiHwUlNEOW+pvqcVue/RvZdUhuUMSg6I7kji5l6HAOsWf987K6Szd+8ogmGR26Q2mqWi3iBIdtFgIKjpWXPNn5/YSUEAjBflLG/noMUBtNoUWrBbuz8s8vnPwBO4Ywhk7lWE8d/CNWS1LZl0+bC0E27fzMgCWXTVlZrPOt34M9HYHgjMvaN7ghzbdEkP03MyElBEIoIcneTLArCdK3s76QKtjLjyFbN4HAgPwEcyhiUC4QsvNb+nR/MubuoklFktYgyQWChC5bhD+KFSRM0gTbP6UPmMm/Ck0FkqQGSavVEpYFAnZV63K0hQQWZ5k9EBoJqQaBwNHBCJbe5puDoxJNoTWrJdlVbSbU5krqZucr6PzSXWQzmNWCVBNsennoKbPAHqWu6rX5DLqw91ggXN6UQ/cdVAVCaCSkVIFQRidoCg6KEH129IUUyE91tnIxoEK5QGBQQk+lfZmQ/FSzv3IkuAYJ4UhygcCgmD+aqBBW0OVISOKpBuCeJhxJVINE0PTYasnfebpWlIHTIhC0hFSrQKhBclZk6BLn+8CW1ZIqVsSXN6xvuc7f7SkHfwJtWi1Q1gejI4LpT7OXQnRUDqCnx17d5gz55gxvm9OXj/b0ivlZ1tpXN3R39rLFN6chEkguiqXt3jZnyDdnHboQELYStlQoYkDMIHpR9A6O6x9ohGIVXcygiEOaSBiUIEUHnqmKru5RDavFkXGeUOs7Dx8LqccCofkTYmWDHm1YLTJ3rxdidmJsqHWJJkhcWYJ+97dazvKx8zH8p+yFEHvyATzosSc2QlgSCPK3+xtBY4FQElL3zRk2bs46dApNCC8V/tqFFIjZithKqpDC3Ybe/k08UAclbVCcQUnUE0lC18r5I23o2q0WWWbu42YhrGu19FAMQkiF8VaWdW00tVstnvya4h4nxoJal09xclD0X0erJZQ8cqcY/h72YCwriOsjq6VeWyXvAoVDWwVCp80ZdNSgtz9KAn0UtpjUjacyncsbvF0WaEKxCvVBJ9/PxihpFC1N75yu5HOnKxDa37mGYgh1rdfkW9A3p8ZWi7S7D7GdE2NDrYtTLDt+tqZWiyvpuwT+RvZgspbNaz2r5b4RQuFBXVFrAkHDpNa/WmUMSC4Kr2Fz1l4+YiFWZkmk3mBM7jLR4wtR1OlWlUOx8KFNUFRHU63VgoVZ8BbAGoEg5Eto4zobdrReoS8CVWtcg67WapEtzQuCdk+M1VOMLiXrTMdqQcKheSa2BYJdIUWE+nsONK0WofG2xMYdu5MjUPPeL4V0lnVWS+5tZcfwDiXC3vmMcw8sIYXLNIPujlIOkQKSkUhQ4cbNoIgjiZuQ3KAmJAlHImiKRSj1mFTQgZL/PEAeP65PXtwWlWt2wgc2nPBN6MphnSt34z1fURlJRa3jv+Lg4YFOjNVTjMVuW94dsM1WCzpLohb+F9iDeF324zVbLT73R499aFkg6IQvobGQCqDPb27vftlqUaPF6U66BVeCz7Ea6CWlaPHDCHZj8LkmblwXwa4LiGfoJAN5m5SCz0LvZScYXUbCcWQYpreSOhDy1AEjIbWRzZBmtY6+hDE27Imxe4qDN0m6NLKHhDV2SgZgLxmKvUQYLw5qslog5CpyAUnnfIbmpCvKVDV9nIVpLKQI5PHHGQ9ec6vlnjIn+Wc8kZ4mCQQuBiiXKhSpEOWigXKBwPLZaOAevhaf88VyfXCu2W8p6HADEgERBV2FJsln6VBBk7Bast2QTqXLvUlyYVASCNXUgetGzmUaTTZXHSFlkoTJ73CTVEIiq3X+8V6gTYEQU7cmr3Xm3HKhrQkp9CIcE3VWC6ITObBkjT1y/apPlF5ciE0ZzH1fE7kKhZ9gwsXmOO6Ull0rECA+NlbdjA4YGlstjTQl3N5yiGq15Hd0fvKOmTlQJNWj4rbOoLuUQkXqAFKgez1KkUbN/hsuJYyU1zqTKvABEgldK00R/3xTWqCTrBZu2Xzcqo6MSyLqdihJH1TeLFKx4QWSoEvpCIwmclSlrNYXwmlhzc6HD2umFvbuHsIvv6yy53Orm1i7xiCNQr4vZO1qlXDl41eslo2I53YrJqsKBLLVKYfaEl2r5SFNR/k+kFstOXko4Jl+HioV7cTwpryqpTqlT1h5565euZfbvA8EJTo0IeH2DJCi90TCyJrYsvOTDz323iNbdw/hNjtihT00lS5Mltg76FbrbW2xJ7y6U+XrQf7vn8TSLQ3jF132RgG2dHMkC/GVJPbQRjhj5GLVZqsleGC1BNG3frHlLnlktWjSJBxhGySXBhe33TfS4hFuDqGoru78nX/oszeOeMxDI/Gjjaa00A1/pBCK2LMba+67q0mt7NWaS5HrIhdxtS4kjmuNvZ0Jeztr7F0kDVCwx+9KH9gae18m7C2tsRcVKmDEvx7i+ncbdykqrIsMpFMT9iaJrZKBaC/5lO6lwTtxBvSlVKvklOOmOnXqHmx3SunT5Cli5MbehN9zqa2GJp5ZHb5nq6GJuLa+FewhYT6k/4i9q71+LXv52sDY4/eki+mbambv+s++3kVOtWbsrYVOv9nkmBf311nnXFTVlvnfDfsOXw/SKjpxT9CniWv2ZW61cLWwiMIezUNUgQBHRuyFWl4kLZoIV0mIWS3iRR+xvaAjNpKcL8heIBSdpMsPkIpXXGSPPUO9l1pkjwfxDjhjj1tkb/2ahwQ9rJYvC54yThMuDt+KQIDiQustksKnmEcqGKq8VwBDlUcq8j4d9w4BrX7OvQl7+8d+Tn2akiL54S1hpcFKzUqP5iHKfQ+6Juy5yDCU1koTP3xpphg8+bZgL6YKTfqUBVbjvBehxwHn9RlaZU9JVn+0N2Or7JEX7pAG3MH50THgX5UqORLypm1QQ/wYnQlNE25VA/rJlXxDpkXcmvOBm7I/6FFfsDQhQWkXmnjO35wCwn8EWeoVUFzVgqn2yTMqsnlIEyq8WM8EBMr1z2aqFNIUng62nL4lEjxCcJGtWruZYERL9x2I7ew0YWZ6QAhO2CNNsT4rCWn0nluj+oYmPVInIS5KNB3wzS+3oswf8V4BSO4VgHivAMSL+xHvEHAXA7z1AGI91x5GwFaEFOhqkKSoC02YFjl0J7CTvTm2U4Rp8MD0XEE6QNpyUgi1Iyjusst4kGJ6uGkNngxT4B8XL3UPiqDDOhom0Q2fG0MpzycyTPJdVLzTNZhyAWZqIWg1NAkh8tdNDQCxMTo9mkghUJZgzFMANXsFJIa9AkhS2ydxeaEJsdW/oPQATxCcgVeeaTZYr4AAoetW6fcw3V4R6loarEFTodc/wDO/Dg2Z4J3dNaF73K3X683+dEU379eASeeFvfQGnvjdaPj8dcpUIW3qR2yRvcIU+wNGPIOzR0modgUYtFG3/pimwioT6WzXtKngrrF+LzKo2muv3+uGrhFJWrDHna2jKxq2HDuwW2zVShOPNpfZGzB/Pfy5nHp0LfvIh2GPokyW5MYsKbLEGZTLlwQXuZY/xV6loUm/zemdjvvdbrfdbjdrphS2m3xtt/vd/nD4Pp4c37ChidbmFOxxyZnENlem53S7qC9OmR60+uOJEC0jHuwzEMKPG5o4n0apA5f+iiGsUQwjrhqu9tQ6puc3YLgmrs1ekUXw9Bm8WLdaiDvp0uZ+fiXWrZYX8M5tTjvaCqFN1z7+e4QsadDC5nwHxZs+p1ZsDepPQOf1CVMr9k9aZM5NQFEVdcIWWt9Bch2BHuvVxzba8ZHCQT4H3C1BLKh1cu47aMIlFtQ6KfxjX4C7JSyw1587VkJiwddS+Fc3oPAkL+I281XLEYhcYGG5SNOkbqaJNyw5gCNPuGo91RodSEQpRK818qlmf5Rm+fbB/Zwn7qXuPGYg929BOrYz5+Wdbfg+/QvClMcvQbGhngLYT61H1obZrKKeIRS/EN8u8OWS6B7s4TOwtk6kH3tcBvgAifhen/AlDEb22AM+7NO/QOQlIcCT4HdUCcQkPBDDQjKI94CWgkNyXIdanbPEAuFKrMmIJp4u8E4BXcr5zJ3HDFyB1eX26l8w48lOgGcaj3up9ald9ia91LrYkIDXOz8FPdhzgOV17sGeJ0rYgVDGbo+kq4lt9sY07Jx05Yh0Y4BE5kf8eJpGfQcS+x+PvXndCR9lmhJeiRIhAElxbOZRZ6tlZp+9WefRB5yhKZHzOV+Drmr9CgZYXle17hd5ERvGnlCCnbNx10Owt+2ajeuIYj0IQshlywF1SxWPR0Ow99oxVVw0OMxsH5bo/84zzPL0V8yTXnMplc/bKpJec3xS+is5gkGWQ6SUXAOaptxmyesYNlI+eoeEx2g2DHusRK2D1RI8SUVEQNYTTie17g3DHXgnndT6WXCTsxfz99WFPXQeiD2WxNeBPZ4HFRcVYEU8YJx2KHBD30Oxd0YdCtzIq5AkGXusKkeU9BG1uF9jSmhKt0Ox991hmqpw1h1IUX3J1fI66VCmsRmKvXWHMo3kS8lPzWtnuSwNOqj19VDsLTqodV71OZUqnw+ytPk17H12YE/dm/dBPYFSzKNtIeTyZTD25h0mdvOIcABFQxNUaOZnz1itk9VQ7C2JqVoX1V8zpWfEt/xNzfQeGezrbYlxSwxew/0tsyfM6omxWseDKYaTsVoPRDshqLSjWUnlDIZWy+nXWC3CgFqV2tFwu3NB6kKFLRGiwWzOMbn3DmnIa6nShD/LYSbeE34ibsmGkpMuh2HvSE0l51XyI5Ym2ZxKdrXBbX0QXwQYRca3dX7CTpU+ZfzKPfKN27AN8vn2xm3YuHwcxdUuc1vh5DAtDQ6GuO0ZlwYL+2Jb00SP0/jkI/0bQy6g9vbZu9Q0K2ulSWp0EAj2RANLzvzGvKHJwrrOM29oshZejJpJNkiExn3zEIplL/zOPIQiPp6Pa7urrqSLlil7ycy2WDFlj1P/t9JdNUcl+L+alQaHamdvKxpPZe+xSX2R3Nvl3rj34v6VdJFMeDvTmEExb6x6l8TVhgPO28jKuk81UVsPYN5YtYEm3gl0JdMkT7IRrfQya9a4oUlII8/3L2z52fIYcG2CrgzyVKh4NOjQ0EQaSnuBTfP3hPB890m3fE7+zm8Q4W8/5o0f0sLLfPf98Dct3rlxPifxeX7sGjf3hPf4XNDNED3hB2t5n/CD/+Sh5o7+Uq3ypfPAgq69AvT6k9fSJE7Vjqgd/dXW6wHXX7OU1kZCqcVO7l26y9fQJGplwUegIikPCxEe9R220XbbRv+CR7F1vJMyDtrn70nNiC8o/C+MepG7GywRfTDJRoz1mQb/jUk24kA9XWETe0UGkHDpgg3Wz0pq6UDSsX9BqJmVJM3pOZDKmKXy/BmMRSfwc2o6f6a9A0ljukZTfxSNmTipkBZznucmxk1Us2M8Hip/9pElgWDev0CzoQkSo+5HHtWaGiwMnBn87Wpdasl01Jy/J11OWXz7V8/fW8vxpHr2ynnL1BN9EL7JIHPXLM2CIyIy/OrRKjqYj/YsDbxLpBwxJx1iap6dSX4KnUkNTaRhMKsUN/DT0PrMQztCKvUV74XJ1GChHV4D9DvVOgpelYNnMjUYikcnIfqN7CEo3FfviOpNDebhCmnk6QwXt0bNXgFh67TY1jJV7dJgkRAA7l3JazdnUy2LPPF7nkaRtVm/duYPR/K89DNtogmEjSd4Jyfes7P8o+Pk2xuaxHJcY98yTh42n5i/Mn/wN6l1mC6V9JcmmmAbe5L4BAsCw9/DHlko2S8t7IUt2iqVXOufCAX9Z9xrl6m2jTZHSCqKn7bRFIKIrVutfhVKpenPYIqShv9mBvVFEiVoIkeok7YHQOtZTng7Olbhh1Jb4+T7CKkUSu/8LY5baQIPTgyS56+VJsr9E7VOJIUMXsiDU/yIPYqe5ahb/K/Zi+U0k1dCtdhrEwhI7hK3IXDYzdmu/KSxJswUix9qUPDwQCdIromdw7T4YxJVIU3RUveoBrpUmQg3IclDJI1Wi3jniVK99uoyDdi101W9Ygi1rBZI3FelCid5aL22Wi3ixCiZHTveIO5H1TpCe7VAM0fSeoqhHntqzubcQz/PHvLm5RKcSIO9UO+OraS7j450cJO63Mj09FQJTz++94dA8y5TGqa39FPt5ozm/QsqUOorXVpHF6p5qwLaAkFtMz36vjsNH0uV3tdZBI9KEdY00G7HBwxOjJp2O3Xpz6h16s7K+f/ap9iEPVpKTF2HP8FeubvuiRqzpxkZSC9q/fboEElbwoojUN2ciMbfz+qeuaQm0QqAeXG/6EvNoRjLPaBxTJNS4vTb8RYa5kjSGiQJR3JDx3sFYNFIWkAcCb5Fpk+lLiLbhJZpqkHC2yFgYNo8xC2NDRyfkt4Ne0WkMJSRpOdSptrYNW2yoqnWJVSVTtPjI4mQbbWOSHwqp+FtQtNT3IE9QtxyB4XXzZWUM276sJcx5+3eSz8ydQgxZy80z2dA4eFPpWLEsRi+hO6qPMX8eRcg8xyLsBR8TlsDvSK5xauWnkz21zgmaddeAUXwOUr8Y7W/xl+PPqKpNoINugmEbIfWJODOT9ceHY5uj/qnZXX8/KeDSYcmK6ZqXan4QE5NhurT4uSz5LcuLYCy1+J81YwOm55Q50nGoLtAQKlT16VlNNs5fiRetw57BEeB+z1/ruvcck5QdyEF+k1scupzjN/mOyfMf6g96Sp/qdj9XtZ3AZue016Tre4pczSl9/S0AmLpacW8rQy6z9viKXM0T5mLoNuUBP8yXR1dP7odVJznc4peATHCJB9Q7J42s6ZmpQsnjM1pYimjPGUO9sslyr6R11LA9zSerXYnx734qdLeOLi6zvmwnn/8aakMvt62WefWcN3Ueo0KRftHef5PL+8fk+ns83P+OZtNJ+PX50flXzto4e5hh73sfLurPxaro/46AaFW2GuwWgxnX0KEfefLDnOLs4+KjOE+NInS4K5TQqk8ahQT//jVt3XL4tvPE8zt0AT6TkuT7XyUXbXcTed6m/HGiRBGdZf/rjSBAbyTwXFl3MtyvD4GA3hMh2CPIhL65/2XJo+T1cHxIUZ0MPY6Tsdum315U9reabdeThoGEb3Pvjb7s58foAfRiq40NSoG0t2/VUKSwpDV0mR6/HTM1umcaXnPD4oOJAaRQmJN75nPnW3eUlzKsaaU9yIbtYRTjz1zmiyp9X9dZDOw1fJ/9v4Ne/8De4IWgRZNlOQAAAAASUVORK5CYII="

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "w2qo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinusSquare; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const MinusSquare = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => __jsx("svg", {
  width: width,
  height: height,
  viewBox: "64 -65 897 897"
}, __jsx("g", null, __jsx("path", {
  d: "M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 347h-442q-14 0 -25 10.5t-11 25.5v0q0 15 11 25.5t25 10.5h442q14 0 25 -10.5t11 -25.5v0 q0 -15 -11 -25.5t-25 -10.5z",
  fill: color
})));

/***/ }),

/***/ "wiMN":
/***/ (function(module, exports) {

module.exports = require("localforage");

/***/ }),

/***/ "wn6T":
/***/ (function(module, exports) {



/***/ }),

/***/ "wrRK":
/***/ (function(module) {

module.exports = JSON.parse("{\"nav.home\":\"Inicio\",\"nav.grocery\":\"Tienda de comestibles\",\"nav.makeup\":\"Maquillaje\",\"nav.bags\":\"Pantalones\",\"nav.clothing\":\"Ropa\",\"nav.furniture\":\"Mueble\",\"nav.book\":\"Libro\",\"nav.medicine\":\"Medicamento\",\"nav.foods\":\"Alimentos\",\"nav.terms_and_services\":\"Términos y servicios\",\"nav.privacy_policy\":\"Política de privacidad\",\"nav.offer\":\"Ofertas\",\"nav.help\":\"Necesitas ayuda\",\"nav.profile\":\"Perfil\",\"nav.checkout\":\"Revisa\",\"nav.order_received\":\"Factura de pedido\",\"nav.logout\":\"Cerrar sesión\",\"nav.login\":\"Iniciar sesión\",\"nav.order\":\"Mis compras\",\"nav.plants\":\"Mis DittoBots\",\"groceriesTitle\":\"Abarrotes entregados en {minute} minutos\",\"getInvoiceId\":\"Ver factura\",\"groceriesSubTitle\":\"Obtenga sus alimentos y refrigerios saludables entregados en su puerta todo el día todos los días\",\"makeupTitle\":\"Maquillajes de marca e importados\",\"makeupSubTitle\":\"La forma más fácil y económica de obtener sus maquillajes de marca e importados\",\"bagsTitle\":\"Bolsos exclusivos de marca\",\"bagsSubTitle\":\"Obtenga sus bolsos exclusivos y de marca entregados en poco tiempo\",\"womenClothsTitle\":\"Compra tus vestidos de diseñador\",\"womenClothsSubTitle\":\"Listo para usar vestidos a medida para usted en línea. Date prisa mientras duren las existencias.\",\"workPageTitle\":\"Datos de la chamba\",\"workedHours\":\"Horas trabajadas:\",\"salaryPerHour\":\"Salario por hora:\",\"pendingTasks\":\"Tareas pendientes:\",\"inProgressTasks\":\"Tareas en progreso:\",\"doneTasks\":\"Tareas realizadas:\",\"advancedSalaryPaid\":\"Adelantados:\",\"totalSalaryToPayWeekly\":\"Salario final:\",\"passwordEmptyFields\":\"Has dejado cambios vacios. Por favor, rellenalos para proceder\",\"subtotalSalary\":\"Salario subtotal:\",\"furnitureTitle\":\"Muebles exclusivos a precio económico\",\"furnitureSubTitle\":\"Haga de su casa un hogar con nuestra amplia colección de hermosos muebles.\",\"booksTitle\":\"Tu propia tienda de libros\",\"booksSubTitle\":\"Obtenga sus libros favoritos de nuestra amplia gama de libros.\",\"medicineTitle\":\"Su medicamento, entregado\",\"medicineSubTitle\":\"Diga adiós a todas sus preocupaciones de atención médica con nosotros.\",\"foodsTitle\":\"Tu orden lo entregamos\",\"foodsSubTitle\":\"Obtenga sus comidas favoritas en menos de una hora\",\"alternativeCheckout\":\"Alternativa de pago\",\"termAndConditionHelper\":\"Al hacer click en comprar, usted acepta nuestros\",\"termAndCondition\":\"términos y Condiciones.\",\"reqMedicine\":\"Solicitar medicina\",\"submitRequest\":\"Enviar peticion\",\"noteHead\":\"Nota\",\"noteDescription\":\"La disponibilidad del producto y el precio se confirmarán por teléfono. Cargo por entrega dentro de la ciudad $ 5 y fuera de la ciudad $ 10.\",\"rmMedicineName\":\"Nombre de medicina\",\"rmMedicineQuantity\":\"Cantidad\",\"rmPrescripttionUpload\":\"Sube tu receta\",\"rmUploadText\":\"Arrastra / sube tu archivo aquí.\",\"cartTitle\":\"Su pedido\",\"discountText\":\"Descuento\",\"ccrChargeText\":\"Recargo por tarjeta\",\"removeCoupon\":\"Quitar cupón\",\"vatText\":\"Incl. IVA\",\"searchPlaceholder\":\"Buscar\",\"searchButtonText\":\"Buscar\",\"mobileSignInButtonText\":\"Iniciar sesión\",\"navlinkLogout\":\"Cerrar sesión\",\"navlinkAccountSettings\":\"La configuración de su cuenta\",\"cartItems\":\"Artículos\",\"payStaticCard\":\"Pagar \",\"cartItem\":\"articulo\",\"addEcoToCartButton\":\"EcoCompra\",\"ecoDescription\":\"EcoCompra: pagás ${packageDiscount} menos si traes tu propia bolsa para este producto :)\",\"addCartButton\":\"Comprar\",\"addDittoBotButton\":\"Añadir\",\"deleteSettingId\":\"Eliminar\",\"changeModeButton\":\"Cambiar modo\",\"plantNameField\":\"Ingresar nombre\",\"addSensorId\":\"Agregar módulo\",\"timezone\":\"Timezone\",\"loading\":\"Loading...\",\"changePlantTypeId\":\"Cambiar tipo de planta\",\"plantModeId\":\"Config planta\",\"fillModeAndRelayToWork\":\"(Seleccioná un Módo y asociá un enchufe para funcionar)\",\"plantNamePlaceholderId\":\"Plantas del balcón\",\"serialNumberPlaceholderId\":\"Mira atrás del Ditto Bot\",\"distanceId\":\"Capacidad\",\"moistHumidityId\":\"Humedad de tierra\",\"airHumidityAndTempetureId\":\"Humedad y temp. de aire\",\"lightSensorId\":\"Lúz\",\"intelligentPlugId\":\"Enchufe inteligente\",\"plantIdField\":\"Número de serie\",\"outOfStock\":\"Sin Stock\",\"backBtn\":\"Ir atrás\",\"buyNowId\":\"Pagar ya\",\"noProductFound\":\"No se encontraron productos.\",\"specialCode\":\"¿Tienes un cupón?\",\"couponApplied\":\"Cupón Aplicado:\",\"couponPlaceholder\":\"Ingrese el código de cupón aquí\",\"namePlaceholder\":\"Nombre completo\",\"emailSignUpPlaceholder\":\"Correo electronico (si gusta recibir solo confirmación de pedidos)\",\"sidebarYourOrder\":\"Orden\",\"profilePageTitle\":\"Tu perfil\",\"profileNameField\":\"Nombre\",\"profileEmailField\":\"Correo electronico\",\"profileSaveBtn\":\"Guardar\",\"pendingStatusId\":\"Pendiente\",\"primaryId\":\"Principal\",\"secundaryId\":\"Secundario\",\"contactNumberTItle\":\"Número de contacto\",\"changePasswordTitle\":\"Cambiar contraseña\",\"addContactBtn\":\"Agregar número\",\"deliveryAddresTitle\":\"Dirección de entrega\",\"addAddressBtn\":\"Añadir dirección\",\"fullDeliveryAddressesMsg\":\"Podes tener hasta 3 direcciones\",\"productStockLimit\":\"No hay mas disponibilidad :(\",\"addNew\":\"Agregar\",\"paymentCardTitle\":\"Tarjeta de pagos\",\"addCardBtn\":\"Agregar tarjeta\",\"savedCardsId\":\"Tarjetas guardadas\",\"savedContactId\":\"Guardar contacto\",\"savedAddressId\":\"Guardar dirección\",\"siteFooter\":\"Ditto Store es un producto de\",\"itemsText\":\"artículos\",\"shippinFeeText\":\"Gastos de envío\",\"voucherText\":\"Vale\",\"voucherApply\":\"Aplicar\",\"couponError\":\"Cupón Inválido\",\"minMaxWarningId\":\"Min: 0. Max: 100\",\"noDittoBotsTextId\":\"No tienes DittoBots agregados. Compra uno para empezar a cultivar!\",\"deliverySchedule\":\"Seleccione tipo/fecha de entrega\",\"deliveryChargeText\":\"Envío\",\"noDeliveryOptionsDefinedId\":\"No hay métodos de envios por el momento\",\"navlinkCheckout\":\"Pagar\",\"otpForm\":\"Cuenta creada exitosamente!\",\"otpSubText\":\"Por favor rellena algunos datos personales para recibir mas información sobre tus encargos\",\"deliveryMethod\":\"Selecciona metodo de envio de entregas\",\"checkoutDeliveryAddress\":\"Dirección de envío\",\"checkoutDeliveryAddressInvalid\":\"Dirección de envío no seleccionado (Paso 2)\",\"checkoutDeliveryMethodInvalid\":\"Forma de envío no seleccionado (Paso 1)\",\"checkoutContactNumberInvalid\":\"Teléfono de contacto no seleccionado (Paso 3)\",\"checkoutPaymentMethodInvalidOption3\":\"Seleccione un método de pago (Paso 3)\",\"checkoutPaymentMethodInvalidOption4\":\"Seleccione un método de pago (Paso 4)\",\"deliveryFee\":\"Costo de envío\",\"contactNumberText\":\"Número de contacto\",\"selectPaymentText\":\"Opcion de pago\",\"savedCardsId2\":\"Métodos de pago guardados\",\"noPaymentMethodsAddedId\":\"No hay métodos de pago configurados\",\"processCheckout\":\"Confirmar pedido\",\"processesingCheckout\":\"Procesando...\",\"backProfileBtn\":\"Volver a perfil\",\"orderReceivedText\":\"Hemos recibido tu pedido!\",\"orderReceivedSuccess\":\"Gracias. Tu orden ha sido recibida!\",\"orderNumberText\":\"Número de orden\",\"orderDateText\":\"Fecha\",\"paymenMethodText\":\"Método de pago\",\"paymentMethodName\":\"Contra reembolso\",\"orderDetailsText\":\"Detalles del pedido\",\"plantName\":\"Nombre Sensor\",\"plantNameRequiredNameId\":\"Ingresar nombre\",\"irrigationTimeId\":\"Tiempo riego\",\"irrigationEvacuationTimeId\":\"Tiempo evacuación\",\"runingMinMaxWarningTimeId\":\"Tiempo encendido\",\"notifyChangesId\":\"Notificaciones\",\"minHumidityId\":\"Humedad mínima\",\"maxHumidityId\":\"Humedad máxima\",\"minDistanceId\":\"Mínimo\",\"maxDistanceId\":\"Máximo\",\"timeWithoutNotice\":\"Snooze time\",\"intlDescriptionId\":\"descripcion\",\"manualModeStateId\":\"Estado\",\"asociateRelayId\":\"Asociar enchufe\",\"asociateRelay1Id\":\"Asociar acción 1 a \",\"asociateRelay2Id\":\"Asociar acción 2 a \",\"asociatedRelayId\":\"Enchufe asociado\",\"smartLightingLabelId\":\"Luces inteligentes\",\"asociateRelayOneId\":\"Asociar acción mínima a \",\"disabledLabelId\":\"Deshabilitar\",\"asociateRelayToId\":\"Asociar acción a \",\"asociatedToId\":\"Asociado a \",\"asociateRelayTwoId\":\"Asociar accion máxima a \",\"startTimeId\":\"Empieza\",\"endTimeId\":\"Termina\",\"desdeId\":\"De\",\"aId\":\"a\",\"addTimeFrameId\":\"Agregar\",\"editTimeFrameId\":\"Guardar\",\"cancelTimeFrameId\":\"Cancelar\",\"smartLightingId\":\"Apagar luces si en el rango hay luz solar\",\"manualModeStateOnId\":\"Prendido\",\"manualModeStateOffId\":\"Apagado\",\"relayAlreadyAssinged\":\"Enchufe ya asignado en \",\"relayAlreadyAssinged2\":\". Seguro querés utilizarlo aquí también? (Puede generar conflictos)\",\"humidityModeId\":\"Modo de riego\",\"lightModeId\":\"Modo\",\"distanceModeId\":\"Modo\",\"tempSensorId\":\"Temperatura de ambiente\",\"controllerNameId\":\"Alias del DittoBot\",\"statusId\":\"Última conexión\",\"addTimeScheduleId\":\"Agregar calendario\",\"editTimeScheduleId\":\"Editar calendario\",\"modoRequiredWarningText\":\"Selecciona un modo para poder habilitar + funcionalidades\",\"humedadAmbienteSensorId\":\"Humedad de ambiente\",\"lightId\":\"Luz\",\"soilHumidityId\":\"Humedad tierra\",\"totalItemText\":\"Cant. de artículos\",\"orderTimeText\":\"Tiempo de la orden\",\"orderMethodText\":\"Método de envío\",\"orderMethodDetailText\":\"Detalle del método de envío\",\"deliveryTimeText\":\"El tiempo de entrega\",\"deliveryLocationText\":\"Lugar de entrega:\",\"deliveryAddressTitle\":\"Dirección de entrega:\",\"totalAmountText\":\"Pago\",\"loadMoreBtn\":\"Cargar más\",\"welcomeBack\":\"Bienvenido!\",\"addToCartButton\":\"Agregar al carrito\",\"loginText\":\"La próxima vez, puede iniciar sesión con su número de celular y contraseña\",\"emailAddressPlaceholder\":\"Dirección de correo electrónico o número de contacto\",\"editAddressId\":\"Editar dirección\",\"editContactId\":\"Editar contacto\",\"addNewContactId\":\"Agregar número\",\"addNewAddressId\":\"Agregar nueva dirección\",\"instructionsId\":\"¿Alguna instrucción para la entrega? Ej. 'piso 2, dpto 'B', portón gris.'\",\"addressRefId\":\"Nombre de ref. Ejemplo: 'Casa de Lucas'\",\"locationId\":\"Localidad\",\"provinciaId\":\"Provincia\",\"printInvoiceBtn\":\"Imprimir\",\"productsNameId\":\"productos\",\"addressId\":\"Dirección\",\"addressTitleId\":\"Dirección: \",\"localidadTitleId\":\"Localidad: \",\"instructionsTitleId\":\"Instrucciones de entrega: \",\"selectYourCategoryId\":\"Busca por categoría\",\"passwordPlaceholder\":\"Contraseña\",\"passwordRepeatPlaceholder\":\"Repita su contraseña\",\"atLeast6Char\":\"La contraseña debe tener mínimo 6 caracteres\",\"passShouldBeEqual\":\"Las contraseñas no coinciden\",\"somethingWentWrong\":\"Algo salió mal, por favor, intente nuevamente mas tarde.\",\"somethingWentWrongAuth\":\"Su sesión expiró, por favor, ingrese a su cuenta nuevamente. O registrese en caso de no tener una 🙏\",\"phoneVerifyText\":\"¿Te registraste y no recibiste la verificación? \",\"setDescription\":\"Set Your Description Through Language File\",\"setTitle\":\"Set Your Title Through Language File\",\"verifyNowText\":\"Verificar ahora\",\"continueBtn\":\"Continuar\",\"registerBtn\":\"Registrate\",\"orText\":\"o\",\"continueFacebookBtn\":\"Continuar con Facebook\",\"continueGoogleBtn\":\"Continuar con Google\",\"dontHaveAccount\":\"¿No tienes cuenta? 👉👉\",\"signUpBtnText\":\"Registrate\",\"forgotPasswordText\":\"¿Olvidaste tu contraseña?\",\"resetText\":\"Reinicialo\",\"signUpText\":\"Al registrarte, aceptas Ditto's\",\"termsConditionText\":\"Términos y condiciones\",\"tramsText\":\"Al registrarte, aceptas los siguientes \",\"alreadyHaveAccount\":\"¿Ya tienes una cuenta?\",\"backToSign\":\"De regreso\",\"loginBtnText\":\"Iniciar sesión\",\"forgotPassText\":\"Se te olvidó tu contraseña\",\"sendResetPassText\":\"Le enviaremos un enlace para restablecer su contraseña\",\"resetPasswordBtn\":\"Restablecer contraseñas\",\"intlCopyBtnId\":\"Copiar\",\"intlCopySuccessId\":\"Copiado\",\"notAuth\":\"Usuario no autenticado. Por favor ingresa a tu cuenta o registrate para realizar tu pedido.\",\"userNotFound\":\"Usuario/contraseña invalida\",\"locationModalheading\":\"Selecciona tu ubicación\",\"locationModalSubHeading\":\"Debe seleccionar su ubicación para el servicio de entrega\",\"locationModalFooter\":\"Entrega gratuita para el primer pedido\",\"saleText\":\"Rebaja\",\"offText\":\"Apagada\",\"oldPasswordId\":\"Contraseña vieja\",\"newPasswordId\":\"Contraseña nueva\",\"contactNumberTitle\":\"Número de teléfono de contacto\",\"confirmPasswordId\":\"Confirmar contraseña\",\"productInfoDetailed\":\"Para mas detalle de los productos, abrir esta página desde una computadora\",\"faqNo1Title\":\"¿Cómo contactar con el Servicio al Cliente?\",\"faqNo1Desc\":\"Nuestro equipo de experiencia del cliente está disponible los {number1} días de la semana y ofrecemos {number2} formas de ponerse en contacto: correo electrónico dittofarmresistencia@gmail.com o +5493624951926. Intentamos responder rápidamente, por lo que no debe esperar demasiado para recibir una respuesta.\",\"faqNo2Title\":\"La instalación de la aplicación falló, ¿cómo actualizar la información del sistema?\",\"faqNo2Desc\":\"Por favor lea la documentación cuidadosamente. También tenemos algunos videos tutoriales en línea sobre este tema. Si el problema persiste, abra un ticket en el foro de soporte\",\"faqNo3Title\":\"Respuesta del sitio web tomando tiempo, ¿cómo mejorar?\",\"faqNo3Desc\":\"Al principio, verifique su conexión a internet. También tenemos algunos videos tutoriales en línea sobre este tema. Si el problema persiste, abra un ticket en el foro de soporte.\",\"faqNo4Title\":\"¿Cómo creo una cuenta?\",\"faqNo4Desc\":\"Si desea abrir una cuenta para uso personal, puede hacerlo por teléfono o en línea. Abrir una cuenta en línea solo debería tomar unos minutos.\",\"totalText\":\"Total\",\"subTotal\":\"Subtotal\",\"intlOrderDetailsDiscount\":\"Descuento\",\"intlOrderDetailsDelivery\":\"Gastos de envío\",\"intlOrderPageTitle\":\"Mi pedido\",\"dittoBotsIds\":\"DittoBots disponibles\",\"addController\":\"Agregar DittoBot\",\"phId\":\"PH\",\"intlNoOrderFound\":\"No se ha encontrado ningún pedido.\",\"intlOrderPageDetails\":\"Detalles del pedido\",\"intlTableColTitle2\":\"Cantidad\",\"intlTableColTitle4\":\"Cantidad Eco\",\"intlTableColTitle3\":\"Precio total\",\"spanishOnlyTitle\":\"🌱 Compra tus verduras online, buscalos o enviatelos en San Diego OB o El Cajon 🌱\",\"spanishOnlyDescription\":\"🌎 Usando técnicas orgánicas y amigables con el medio ambiente para proveer de comida real a nuestra comunidad 🌎\",\"intlOrderCardTitleText\":\"ID de la compra: \",\"clickHereId\":\"Click aquí\",\"deliveryDetailsText\":\"Delivery details\",\"pickupDetailsText\":\"Pick Up details\",\"intlOrderCardDateText\":\"Fecha de la compra\",\"intlOrderCardTotalText\":\"Total\",\"userInfoSuccess\":\"Datos guardados con éxito\",\"userAlreadyRegistered\":\"Usuario ya registrado\",\"deliveryMethodTitle\":\"Donde\",\"pickUpDateTitle\":\"Fecha de entrega\",\"pickUpAddressTitle\":\"Fecha de entrega\",\"deliveryDateTitle\":\"Fecha de envío:\",\"joinButton\":\"Iniciar sesión\",\"ar\":\"Arábica\",\"zh\":\"Chino\",\"en\":\"Inglés\",\"de\":\"Alemán\",\"he\":\"Hebreo\",\"es\":\"Español\",\"intlTextBy\":\"por\",\"intlReletedItems\":\"Artículos relacionados\",\"deliveryTime\":\"Fecha de entrega:\",\"totalPrice\":\"Precio total:\",\"discount\":\"Descuento:\",\"order\":\"Pedido\",\"contactNumber\":\"Número de contacto\",\"deliveryAddress\":\"Dirección de envío:\",\"orderDate\":\"Fecha del pedido:\",\"readFreeSampleButton\":\"Leer muestra gratis\",\"bookSectionTitle\":\"Acerca del libro\",\"authorSectionTitle\":\"Sobre el autor\",\"defaultIntlId\":\"Agregue un marcador de posición del archivo de idioma\",\"noResultFound\":\"Lo sentimos, no se encontraron resultados :(\",\"deliveryText\":\"Entrega\",\"cuisineText\":\"Cocina\",\"minOrderText\":\"La orden mínima\",\"fromText\":\"Desde\",\"loadMoreButton\":\"Cargar más\"}");

/***/ }),

/***/ "x/sk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const CouponIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    "data-name": "Group 2930",
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 11.426 13"
  }, __jsx("g", null, __jsx("path", {
    "data-name": "Path 3616",
    d: "M116.344,226.9a1.513,1.513,0,0,0-.27.027l-.982-1.113,1.958-2.219a1.526,1.526,0,0,0-.135-2.15l-2.839,3.218,0,0-.632.716h-.769l.386.439-.984,1.115a1.523,1.523,0,1,0,1.222,1.493,1.5,1.5,0,0,0-.085-.478l.862-.977.839.952a1.5,1.5,0,0,0-.093.5,1.523,1.523,0,1,0,1.523-1.523Zm-4.57,2.285a.762.762,0,1,1,.762-.762A.764.764,0,0,1,111.774,229.182Zm4.57,0a.762.762,0,1,1,.762-.762A.764.764,0,0,1,116.344,229.182Zm0,0",
    transform: "translate(-107.965 -216.944)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 3617",
    d: "M4.605,0V1.574H3.844V0H-2.25V7.668H2.884l.96-1.089v-1.2h.762v.335L6.632,3.425l.571.5A2.287,2.287,0,0,1,7.409,7.15l-.457.518H9.176V0ZM1.178,3.479A1.141,1.141,0,0,1,1.559,5.7v.8H.8V5.7A1.139,1.139,0,0,1,.035,4.621H.8a.381.381,0,1,0,.381-.381A1.141,1.141,0,0,1,.8,2.024v-.83h.762v.83A1.139,1.139,0,0,1,2.32,3.1H1.559a.381.381,0,1,0-.381.381ZM4.605,4.621H3.844V3.859h.762Zm0-1.523H3.844V2.336h.762Zm0,0",
    transform: "translate(2.25)",
    fill: color
  })));
};

/***/ }),

/***/ "x2Nq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const MenuIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 25.5 18"
  }, __jsx("g", {
    transform: "translate(-2 -6)"
  }, __jsx("path", {
    "data-name": "Path 216",
    d: "M26.589,6H2.911A.842.842,0,0,0,2,6.75a.842.842,0,0,0,.911.75H26.589a.842.842,0,0,0,.911-.75A.842.842,0,0,0,26.589,6Z",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 217",
    d: "M2.75,16.5H12.5a.75.75,0,0,0,0-1.5H2.75a.75.75,0,0,0,0,1.5Z",
    transform: "translate(0 -0.75)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 218",
    d: "M23.562,24H2.938a.769.769,0,1,0,0,1.5H23.562a.769.769,0,1,0,0-1.5Z",
    transform: "translate(0 -1.5)",
    fill: color
  })));
};

/***/ }),

/***/ "xZKy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ useAppState; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ useAppDispatch; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ AppProvider; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/contexts/create-context.tsx
var __jsx = external_react_default.a.createElement;

function useCreateContext(reducer, initialState) {
  const defaultDispatch = () => initialState;

  const stateCtx = Object(external_react_["createContext"])(initialState);
  const dispatchCtx = Object(external_react_["createContext"])(defaultDispatch);

  function useStateCtx(property) {
    const state = Object(external_react_["useContext"])(stateCtx);
    return state[property]; // only one depth selector for comparison
  }

  function useDispatchCtx() {
    return Object(external_react_["useContext"])(dispatchCtx);
  }

  function Provider(props) {
    const [state, dispatch] = external_react_default.a.useReducer(reducer, initialState);
    return __jsx(dispatchCtx.Provider, {
      value: dispatch
    }, __jsx(stateCtx.Provider, {
      value: state
    }, props.children));
  }

  return [useStateCtx, useDispatchCtx, Provider];
} // const [useTextState, useTextDispatch, TextProvider] = useCreateContext(initialState, reducer);
// export const TextContext = ctx;
// export function App() {
//   return (
//     <TextProvider>
//       <Component />
//     </TextProvider>
//   )
// }
// export function Component() {
//   const state = useTextState('state')
//   const dispatch = useTextDispatch()
// const increment = useCallback(() => dispatch({ type: 'increment' }), [dispatch]);
//   return (
//     <div>
//       {state}
//       <button onClick={increment}>Toggle</button>
//     </div>
//   )
// }
// EXTERNAL MODULE: ./src/contexts/app/app.reducer.ts
var app_reducer = __webpack_require__("sDBz");

// CONCATENATED MODULE: ./src/contexts/app/app.provider.ts


const [app_provider_state, app_provider_dispatch, provider] = useCreateContext(app_reducer["a" /* appReducer */], app_reducer["b" /* initialState */]);
const useAppState = app_provider_state;
const useAppDispatch = app_provider_dispatch;
const AppProvider = provider;

/***/ }),

/***/ "y1j5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeupIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const MakeupIcon = ({
  color = 'currentColor',
  width = '18px',
  height = '18px'
}) => {
  return __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 11.401 16"
  }, __jsx("g", {
    transform: "translate(-0.004)"
  }, __jsx("path", {
    "data-name": "Path 2031",
    d: "M20.758,112.77v2.76h3.383v-2.352a2.422,2.422,0,0,1-1.367.409A3.01,3.01,0,0,1,20.758,112.77Zm0,0",
    transform: "translate(-20.105 -109.246)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2032",
    d: "M4.228,233.031H.408a.4.4,0,0,0-.4.4v7.909a.4.4,0,0,0,.4.4h3.82a.4.4,0,0,0,.4-.4v-7.909A.4.4,0,0,0,4.228,233.031Zm0,0",
    transform: "translate(0 -225.749)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2033",
    d: "M216.715,453.338a.4.4,0,0,0,.4.4h3.82a.4.4,0,0,0,.4-.4v-1.475h-4.629Zm0,0",
    transform: "translate(-209.939 -437.743)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2034",
    d: "M220.939,233.031h-3.82a.4.4,0,0,0-.4.4v5.494h4.629v-5.494A.4.4,0,0,0,220.939,233.031Zm0,0",
    transform: "translate(-209.939 -225.749)",
    fill: color
  }), __jsx("path", {
    "data-name": "Path 2035",
    d: "M22.7.482a1.7,1.7,0,0,0-2.381.006,1.7,1.7,0,0,0,.431,2.342,1.7,1.7,0,0,0,2.381-.006A1.7,1.7,0,0,0,22.7.482Zm0,0",
    transform: "translate(-19.381)",
    fill: color
  })));
};

/***/ })

/******/ });