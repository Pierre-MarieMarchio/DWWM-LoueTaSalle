/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/scss/main.scss":
/*!**********************************!*\
  !*** ./src/pages/scss/main.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/pages/scss/main.scss?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_pages_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/pages/scss/main.scss */ \"./src/pages/scss/main.scss\");\n/* harmony import */ var _scripts_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/App */ \"./src/scripts/App.ts\");\n\n\nvar app = new _scripts_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n\n//# sourceURL=webpack://my-webpack-project/./src/main.ts?");

/***/ }),

/***/ "./src/scripts/App.ts":
/*!****************************!*\
  !*** ./src/scripts/App.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router */ \"./src/scripts/Router.ts\");\n\nvar App = /** @class */ (function () {\n    function App() {\n        this._router = null;\n        if (App._instance != null && App._instance instanceof App) {\n            return App._instance;\n        }\n        App._instance = this;\n        this._router = new _Router__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n    Object.defineProperty(App, \"instance\", {\n        get: function () {\n            return new App();\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(App.prototype, \"router\", {\n        get: function () {\n            return this._router;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    App.prototype.render = function () {\n        var page = document.getElementById(\"app\");\n        page.firstElementChild.remove();\n        page.appendChild(this.router.screen);\n    };\n    App._instance = null;\n    return App;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scripts/App.ts?");

/***/ }),

/***/ "./src/scripts/Router.ts":
/*!*******************************!*\
  !*** ./src/scripts/Router.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/scripts/App.ts\");\n/* harmony import */ var _view_screen_HomeScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/screen/HomeScreen */ \"./src/scripts/view/screen/HomeScreen.ts\");\n\n\nvar Router = /** @class */ (function () {\n    function Router() {\n        var _this = this;\n        this._screen = null;\n        this.handlePageClick = function (e) {\n            var _a;\n            var link = (_a = e.target) === null || _a === void 0 ? void 0 : _a.closest('[target=\"SPA\"]');\n            if (link) {\n                e.preventDefault();\n                history.pushState(null, \"\", link.href);\n                _this.navigate();\n            }\n        };\n        this.navigate = function () {\n            var page = document.getElementById(\"app\");\n            if (location.pathname === \"/\") {\n                _this._screen = new _view_screen_HomeScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n            }\n            else if (location.pathname === \"/lieux\") {\n                _this._screen = new _view_screen_HomeScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n            }\n            else if (location.pathname === \"/contact\") {\n                _this._screen = new _view_screen_HomeScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n            }\n            else if (location.pathname === \"/reservation\") {\n                _this._screen = new _view_screen_HomeScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n            }\n            else {\n                _this._screen = new _view_screen_HomeScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n            }\n            _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"].instance.render();\n        };\n        window.onclick = this.handlePageClick;\n        window.onload = this.navigate;\n        window.onpopstate = this.navigate;\n    }\n    Object.defineProperty(Router.prototype, \"screen\", {\n        get: function () {\n            return this._screen;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return Router;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scripts/Router.ts?");

/***/ }),

/***/ "./src/scripts/view/screen/HomeScreen.ts":
/*!***********************************************!*\
  !*** ./src/scripts/view/screen/HomeScreen.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar HomeScreen = /** @class */ (function (_super) {\n    __extends(HomeScreen, _super);\n    function HomeScreen() {\n        var _this = _super.call(this) || this;\n        _this.innerHTML = _this.render();\n        return _this;\n    }\n    HomeScreen.prototype.render = function () {\n        return \"\\n        <div>\\n        \".concat(this.constructor.name, \"\\n        </div>\\n        \");\n    };\n    return HomeScreen;\n}(HTMLElement));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeScreen);\ncustomElements.define(\"home-screen\", HomeScreen);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scripts/view/screen/HomeScreen.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;