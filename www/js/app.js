(self["webpackChunkrpg_playground"] = self["webpackChunkrpg_playground"] || []).push([["/js/app"],{

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kaboom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kaboom */ "./src/js/kaboom.js");
/* harmony import */ var _scene_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene/Main */ "./src/js/scene/Main.js");


_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.scene("main", _scene_Main__WEBPACK_IMPORTED_MODULE_1__.default);
_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.start("main");

/***/ }),

/***/ "./src/js/kaboom.js":
/*!**************************!*\
  !*** ./src/js/kaboom.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ k),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var kaboom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kaboom */ "./node_modules/kaboom/dist/kaboom.mjs");
/* harmony import */ var kaboom_plugins_aseprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kaboom/plugins/aseprite */ "./node_modules/kaboom/dist/plugins/aseprite.mjs");


var k = (0,kaboom__WEBPACK_IMPORTED_MODULE_0__.default)({
  scale: 1,
  plugins: [kaboom_plugins_aseprite__WEBPACK_IMPORTED_MODULE_1__.default],
  clearColor: [0, 0, 0, 1],
  fullscreen: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (k);

/***/ }),

/***/ "./src/js/scene/Main.js":
/*!******************************!*\
  !*** ./src/js/scene/Main.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _kaboom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kaboom */ "./src/js/kaboom.js");

function Main() {
  _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.add([_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.pos(_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.width() / 2, _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.height() / 2), _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.text("rpg playground", 32), _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.origin('center')]);
}

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./src/js/app.js"), __webpack_exec__("./src/sass/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);