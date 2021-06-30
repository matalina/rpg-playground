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

var k = (0,kaboom__WEBPACK_IMPORTED_MODULE_0__.default)({
  scale: 1,
  clearColor: [0, 0, 0, 1],
  fullscreen: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (k);

/***/ }),

/***/ "./src/js/maps/000-overview.js":
/*!*************************************!*\
  !*** ./src/js/maps/000-overview.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "overview": () => (/* binding */ overview),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var overview = ['BBMMMMMBB', 'BMMMMMOOB', 'MMMMMDOOO', 'MMMMDDOOO', 'MMMDDDDOG', 'MGDDDGGGG', 'GGGGDGGGG', 'BGGGHGGGB', 'BBGHHHGBB'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (overview);

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
/* harmony import */ var _maps_000_overview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../maps/000-overview */ "./src/js/maps/000-overview.js");


_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.loadSprite('ground', "images/ground_tile.png", {
  sliceX: 4,
  sliceY: 3
});
var TILE_SIZE = 50;
var TILE_COUNT = 9;
function Main() {
  _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.addLevel(_maps_000_overview__WEBPACK_IMPORTED_MODULE_1__.default, {
    width: TILE_SIZE,
    height: TILE_SIZE,
    'B': [_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.sprite('ground', {
      frame: 0
    }), 'bubble', _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.scale(.25)],
    'M': [_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.sprite('ground', {
      frame: 1
    }), 'mountain', _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.scale(.25)],
    'G': [_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.sprite('ground', {
      frame: 5
    }), 'grasslands', _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.scale(.25)],
    'H': [_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.sprite('ground', {
      frame: 4
    }), 'hilltop', _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.scale(.25)],
    'D': [_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.sprite('ground', {
      frame: 3
    }), 'deadlands', _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.scale(.25)],
    'O': [_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.sprite('ground', {
      frame: 2
    }), // oasis
    'oasis', _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.scale(.25)]
  });
  var loc = _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.add([_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.pos(TILE_SIZE * TILE_COUNT / 2, TILE_SIZE * TILE_COUNT - TILE_SIZE / 2 + 1), _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.origin('center'), _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.rect(10, 10), _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.color(1, 0, 0)]);
  _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.add([_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.pos(_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.width() / 2, _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.height() / 2), _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.text("rpg playground", 32), _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.origin('center')]);
  var SPEED = TILE_SIZE * TILE_SIZE + TILE_SIZE * 10;
  _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.keyPress('n', function () {
    loc.move({
      x: 0,
      y: -1 * SPEED
    });
  });
  _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.keyPress('s', function () {
    loc.move({
      x: 0,
      y: SPEED
    });
  });
  _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.keyPress('w', function () {
    loc.move({
      y: 0,
      x: -1 * SPEED
    });
  });
  _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.keyPress('e', function () {
    loc.move({
      y: 0,
      x: SPEED
    });
  });
  _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.keyPress('space', function () {// open area map
  });
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