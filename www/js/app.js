(self["webpackChunkrpg_playground"] = self["webpackChunkrpg_playground"] || []).push([["/js/app"],{

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var kaboom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kaboom */ "./node_modules/kaboom/dist/kaboom.mjs");
/* harmony import */ var kaboom_plugins_aseprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kaboom/plugins/aseprite */ "./node_modules/kaboom/dist/plugins/aseprite.mjs");


var k = (0,kaboom__WEBPACK_IMPORTED_MODULE_0__.default)({
  scale: 1,
  plugins: [kaboom_plugins_aseprite__WEBPACK_IMPORTED_MODULE_1__.default],
  clearColor: [0, 0, 0, 1],
  fullscreen: true
});
k.scene("main", function () {
  k.add([k.text("ohhimark", 32), k.pos(100, 100)]);
});
k.start("main");

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