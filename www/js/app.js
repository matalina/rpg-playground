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
/* harmony import */ var _scene_NewBaseSence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene/NewBaseSence */ "./src/js/scene/NewBaseSence.js");



_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.scene("main", _scene_Main__WEBPACK_IMPORTED_MODULE_1__.default);
_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.scene("next", _scene_NewBaseSence__WEBPACK_IMPORTED_MODULE_2__.default);
_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.start("main");

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TILE_SIZE": () => (/* binding */ TILE_SIZE),
/* harmony export */   "TILE_COUNT": () => (/* binding */ TILE_COUNT)
/* harmony export */ });
var TILE_SIZE = 50;
var TILE_COUNT = 9;

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
var overview = ['BBmmmmmBB', 'BMMMMMOOB', 'mMMMMDOOo', 'mMMMDDOOo', 'mMMDDDDOg', 'mGDDDGGGg', 'gGGGDGGGg', 'BGGGHGGGB', 'BBGhhhGBB'];
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/js/constants.js");



_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.loadSprite('ground', "images/ground_tile.png", {
  sliceX: 4,
  sliceY: 3
});
function Main() {
  _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.addLevel(_maps_000_overview__WEBPACK_IMPORTED_MODULE_1__.default, {
    width: _constants__WEBPACK_IMPORTED_MODULE_2__.TILE_SIZE,
    height: _constants__WEBPACK_IMPORTED_MODULE_2__.TILE_SIZE,
    'B': [_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.sprite('ground', {
      frame: 0
    }), 'bubble', _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.scale(.25)],
    'M': [_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.sprite('ground', {
      frame: 1
    }), 'mountain', _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.scale(.25)],
    'm': [_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.sprite('ground', {
      frame: 1
    }), 'mountain', 'border', _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.scale(.25)],
    'G': [_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.sprite('ground', {
      frame: 5
    }), 'grasslands', _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.scale(.25)],
    'g': [_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.sprite('ground', {
      frame: 5
    }), 'grasslands', 'border', _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.scale(.25)],
    'H': [_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.sprite('ground', {
      frame: 4
    }), 'hilltop', _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.scale(.25)],
    'h': [_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.sprite('ground', {
      frame: 4
    }), 'hilltop', 'border', _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.scale(.25)],
    'D': [_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.sprite('ground', {
      frame: 3
    }), 'deadlands', _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.scale(.25)],
    'O': [_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.sprite('ground', {
      frame: 2
    }), // oasis
    'oasis', _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.scale(.25)],
    'o': [_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.sprite('ground', {
      frame: 2
    }), // oasis
    'oasis', 'border', _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.scale(.25)]
  });
  var loc = _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.add([_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.pos(_constants__WEBPACK_IMPORTED_MODULE_2__.TILE_SIZE * _constants__WEBPACK_IMPORTED_MODULE_2__.TILE_COUNT / 2, _constants__WEBPACK_IMPORTED_MODULE_2__.TILE_SIZE * _constants__WEBPACK_IMPORTED_MODULE_2__.TILE_COUNT - _constants__WEBPACK_IMPORTED_MODULE_2__.TILE_SIZE / 2 + 1), _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.origin('center'), _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.rect(10, 10), _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.color(1, 0, 0)]);
  _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.add([_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.pos(_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.width() / 2, _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.height() / 2), _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.text("rpg playground", 32), _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.origin('center')]);
  var SPEED = _constants__WEBPACK_IMPORTED_MODULE_2__.TILE_SIZE * _constants__WEBPACK_IMPORTED_MODULE_2__.TILE_SIZE + _constants__WEBPACK_IMPORTED_MODULE_2__.TILE_SIZE * 10;
  _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.keyPress('n', function () {
    loc.move({
      x: 0,
      y: -1 * SPEED
    });

    if (loc.pos.y <= 0) {
      loc.move({
        x: 0,
        y: SPEED
      });
      _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.camShake(10);
    }

    ;
  });
  _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.keyPress('up', function () {
    loc.move({
      x: 0,
      y: -1 * SPEED
    });

    if (loc.pos.y <= 0) {
      loc.move({
        x: 0,
        y: SPEED
      });
      _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.camShake(10);
    }

    ;
  });
  _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.keyPress('s', function () {
    loc.move({
      x: 0,
      y: SPEED
    });

    if (loc.pos.y >= _constants__WEBPACK_IMPORTED_MODULE_2__.TILE_SIZE * _constants__WEBPACK_IMPORTED_MODULE_2__.TILE_COUNT) {
      loc.move({
        x: 0,
        y: -1 * SPEED
      });
      _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.camShake(10);
    }

    ;
  });
  _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.keyPress('down', function () {
    loc.move({
      x: 0,
      y: SPEED
    });

    if (loc.pos.y >= _constants__WEBPACK_IMPORTED_MODULE_2__.TILE_SIZE * _constants__WEBPACK_IMPORTED_MODULE_2__.TILE_COUNT) {
      loc.move({
        x: 0,
        y: -1 * SPEED
      });
      _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.camShake(10);
    }

    ;
  });
  _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.keyPress('w', function () {
    loc.move({
      y: 0,
      x: -1 * SPEED
    });

    if (loc.pos.x < 0) {
      loc.move({
        y: 0,
        x: SPEED
      });
      _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.camShake(10);
    }

    ;
  });
  _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.keyPress('left', function () {
    loc.move({
      y: 0,
      x: -1 * SPEED
    });

    if (loc.pos.x < 0) {
      loc.move({
        y: 0,
        x: SPEED
      });
      _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.camShake(10);
    }

    ;
  });
  _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.keyPress('e', function () {
    loc.move({
      y: 0,
      x: SPEED
    });

    if (loc.pos.x >= _constants__WEBPACK_IMPORTED_MODULE_2__.TILE_SIZE * _constants__WEBPACK_IMPORTED_MODULE_2__.TILE_COUNT) {
      loc.move({
        y: 0,
        x: -1 * SPEED
      });
      _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.camShake(10);
    }

    ;
  });
  _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.keyPress('right', function () {
    loc.move({
      y: 0,
      x: SPEED
    });

    if (loc.pos.x >= _constants__WEBPACK_IMPORTED_MODULE_2__.TILE_SIZE * _constants__WEBPACK_IMPORTED_MODULE_2__.TILE_COUNT) {
      loc.move({
        y: 0,
        x: -1 * SPEED
      });
      _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.camShake(10);
    }

    ;
  });
  _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.keyPress('space', function () {
    var level = {
      x: Math.round(loc.pos.x / _constants__WEBPACK_IMPORTED_MODULE_2__.TILE_SIZE),
      y: Math.round(loc.pos.y / _constants__WEBPACK_IMPORTED_MODULE_2__.TILE_SIZE)
    };
    _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.go('next');
  });
}

/***/ }),

/***/ "./src/js/scene/NewBaseSence.js":
/*!**************************************!*\
  !*** ./src/js/scene/NewBaseSence.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewBaseSence)
/* harmony export */ });
/* harmony import */ var _kaboom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kaboom */ "./src/js/kaboom.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/js/constants.js");
 //import overview from '../maps/000-overview';


function NewBaseSence() {
  _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.add([_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.pos(_kaboom__WEBPACK_IMPORTED_MODULE_0__.default.width() / 2, _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.height() / 2), _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.text("Next Scene", 32), _kaboom__WEBPACK_IMPORTED_MODULE_0__.default.origin('center')]);
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