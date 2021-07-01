(self["webpackChunkrpg_playground"] = self["webpackChunkrpg_playground"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/OverviewMap.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/OverviewMap.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var kaboom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kaboom */ "./node_modules/kaboom/dist/kaboom.mjs");
/* harmony import */ var _scene_overviewMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scene/overviewMap */ "./src/js/scene/overviewMap.js");
/* harmony import */ var _scene_newBaseScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scene/newBaseScene */ "./src/js/scene/newBaseScene.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/js/constants.js");
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'overview-map',
  data: function data() {
    return {
      kaboom: null
    };
  },
  methods: {
    overviewMap: _scene_overviewMap__WEBPACK_IMPORTED_MODULE_1__.default,
    newBaseScene: _scene_newBaseScene__WEBPACK_IMPORTED_MODULE_2__.default
  },
  mounted: function mounted() {
    var canvas = document.getElementById("map");
    var root = document.getElementById("root");
    this.kaboom = (0,kaboom__WEBPACK_IMPORTED_MODULE_0__.default)({
      scale: 1,
      clearColor: [0, 0, 0, 1],
      width: _constants__WEBPACK_IMPORTED_MODULE_3__.TILE_SIZE * _constants__WEBPACK_IMPORTED_MODULE_3__.TILE_COUNT,
      height: _constants__WEBPACK_IMPORTED_MODULE_3__.TILE_SIZE * _constants__WEBPACK_IMPORTED_MODULE_3__.TILE_COUNT,
      canvas: canvas,
      root: root
    });
    this.kaboom.loadSprite('ground', "images/ground_tile.png", {
      sliceX: 4,
      sliceY: 3
    });
    this.kaboom.scene("main", this.overviewMap);
    this.kaboom.scene("next", this.newBaseScene);
    this.kaboom.start("main");
  }
});

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _components_OverviewMap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/OverviewMap.vue */ "./src/js/components/OverviewMap.vue");


vue__WEBPACK_IMPORTED_MODULE_1__.default.use('overview-map', _components_OverviewMap_vue__WEBPACK_IMPORTED_MODULE_0__.default);
var app = new vue__WEBPACK_IMPORTED_MODULE_1__.default({
  el: '#app',
  components: {
    'overview-map': _components_OverviewMap_vue__WEBPACK_IMPORTED_MODULE_0__.default
  }
});

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

/***/ "./src/js/scene/newBaseScene.js":
/*!**************************************!*\
  !*** ./src/js/scene/newBaseScene.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newBaseSence)
/* harmony export */ });
function newBaseSence() {
  this.kaboom.add([this.kaboom.pos(k.width() / 2, k.height() / 2), this.kaboom.text("Next Scene", 32), this.kaboom.origin('center')]);
}

/***/ }),

/***/ "./src/js/scene/overviewMap.js":
/*!*************************************!*\
  !*** ./src/js/scene/overviewMap.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ overviewMap)
/* harmony export */ });
/* harmony import */ var _maps_000_overview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../maps/000-overview */ "./src/js/maps/000-overview.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/js/constants.js");


function overviewMap() {
  var _this = this;

  this.kaboom.addLevel(_maps_000_overview__WEBPACK_IMPORTED_MODULE_0__.default, {
    width: _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_SIZE,
    height: _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_SIZE,
    'B': [this.kaboom.sprite('ground', {
      frame: 0
    }), 'bubble', this.kaboom.scale(.25)],
    'M': [this.kaboom.sprite('ground', {
      frame: 1
    }), 'mountain', this.kaboom.scale(.25)],
    'm': [this.kaboom.sprite('ground', {
      frame: 1
    }), 'mountain', 'border', this.kaboom.scale(.25)],
    'G': [this.kaboom.sprite('ground', {
      frame: 5
    }), 'grasslands', this.kaboom.scale(.25)],
    'g': [this.kaboom.sprite('ground', {
      frame: 5
    }), 'grasslands', 'border', this.kaboom.scale(.25)],
    'H': [this.kaboom.sprite('ground', {
      frame: 4
    }), 'hilltop', this.kaboom.scale(.25)],
    'h': [this.kaboom.sprite('ground', {
      frame: 4
    }), 'hilltop', 'border', this.kaboom.scale(.25)],
    'D': [this.kaboom.sprite('ground', {
      frame: 3
    }), 'deadlands', this.kaboom.scale(.25)],
    'O': [this.kaboom.sprite('ground', {
      frame: 2
    }), // oasis
    'oasis', this.kaboom.scale(.25)],
    'o': [this.kaboom.sprite('ground', {
      frame: 2
    }), // oasis
    'oasis', 'border', this.kaboom.scale(.25)]
  });
  var loc = this.kaboom.add([this.kaboom.pos(_constants__WEBPACK_IMPORTED_MODULE_1__.TILE_SIZE * _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_COUNT / 2, _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_SIZE * _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_COUNT - _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_SIZE / 2 + 1), this.kaboom.origin('center'), this.kaboom.rect(10, 10), this.kaboom.color(1, 0, 0)]);
  this.kaboom.add([this.kaboom.pos(this.kaboom.width() / 2, this.kaboom.height() / 2), this.kaboom.text("rpg playground", 32), this.kaboom.origin('center')]);
  var SPEED = _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_SIZE * _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_SIZE + _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_SIZE * 10;
  this.kaboom.keyPress('n', function () {
    loc.move({
      x: 0,
      y: -1 * SPEED
    });

    if (loc.pos.y <= 0) {
      loc.move({
        x: 0,
        y: SPEED
      });

      _this.kaboom.camShake(10);
    }

    ;
  });
  this.kaboom.keyPress('up', function () {
    loc.move({
      x: 0,
      y: -1 * SPEED
    });

    if (loc.pos.y <= 0) {
      loc.move({
        x: 0,
        y: SPEED
      });

      _this.kaboom.camShake(10);
    }

    ;
  });
  this.kaboom.keyPress('s', function () {
    loc.move({
      x: 0,
      y: SPEED
    });

    if (loc.pos.y >= _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_SIZE * _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_COUNT) {
      loc.move({
        x: 0,
        y: -1 * SPEED
      });

      _this.kaboom.camShake(10);
    }

    ;
  });
  this.kaboom.keyPress('down', function () {
    loc.move({
      x: 0,
      y: SPEED
    });

    if (loc.pos.y >= _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_SIZE * _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_COUNT) {
      loc.move({
        x: 0,
        y: -1 * SPEED
      });

      _this.kaboom.camShake(10);
    }

    ;
  });
  this.kaboom.keyPress('w', function () {
    loc.move({
      y: 0,
      x: -1 * SPEED
    });

    if (loc.pos.x < 0) {
      loc.move({
        y: 0,
        x: SPEED
      });

      _this.kaboom.camShake(10);
    }

    ;
  });
  this.kaboom.keyPress('left', function () {
    loc.move({
      y: 0,
      x: -1 * SPEED
    });

    if (loc.pos.x < 0) {
      loc.move({
        y: 0,
        x: SPEED
      });

      _this.kaboom.camShake(10);
    }

    ;
  });
  this.kaboom.keyPress('e', function () {
    loc.move({
      y: 0,
      x: SPEED
    });

    if (loc.pos.x >= _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_SIZE * _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_COUNT) {
      loc.move({
        y: 0,
        x: -1 * SPEED
      });

      _this.kaboom.camShake(10);
    }

    ;
  });
  this.kaboom.keyPress('right', function () {
    loc.move({
      y: 0,
      x: SPEED
    });

    if (loc.pos.x >= _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_SIZE * _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_COUNT) {
      loc.move({
        y: 0,
        x: -1 * SPEED
      });

      _this.kaboom.camShake(10);
    }

    ;
  });
  this.kaboom.keyPress('space', function () {
    var level = {
      x: Math.round(loc.pos.x / _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_SIZE),
      y: Math.round(loc.pos.y / _constants__WEBPACK_IMPORTED_MODULE_1__.TILE_SIZE)
    };

    _this.kaboom.go('next');
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


/***/ }),

/***/ "./src/js/components/OverviewMap.vue":
/*!*******************************************!*\
  !*** ./src/js/components/OverviewMap.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OverviewMap_vue_vue_type_template_id_df3a8cf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OverviewMap.vue?vue&type=template&id=df3a8cf2& */ "./src/js/components/OverviewMap.vue?vue&type=template&id=df3a8cf2&");
/* harmony import */ var _OverviewMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OverviewMap.vue?vue&type=script&lang=js& */ "./src/js/components/OverviewMap.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _OverviewMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _OverviewMap_vue_vue_type_template_id_df3a8cf2___WEBPACK_IMPORTED_MODULE_0__.render,
  _OverviewMap_vue_vue_type_template_id_df3a8cf2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/OverviewMap.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/js/components/OverviewMap.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/js/components/OverviewMap.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OverviewMap.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/OverviewMap.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./src/js/components/OverviewMap.vue?vue&type=template&id=df3a8cf2&":
/*!**************************************************************************!*\
  !*** ./src/js/components/OverviewMap.vue?vue&type=template&id=df3a8cf2& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewMap_vue_vue_type_template_id_df3a8cf2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewMap_vue_vue_type_template_id_df3a8cf2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewMap_vue_vue_type_template_id_df3a8cf2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OverviewMap.vue?vue&type=template&id=df3a8cf2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/OverviewMap.vue?vue&type=template&id=df3a8cf2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/OverviewMap.vue?vue&type=template&id=df3a8cf2&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/OverviewMap.vue?vue&type=template&id=df3a8cf2& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "root" } }, [
      _c("canvas", { attrs: { id: "map" } })
    ])
  }
]
render._withStripped = true



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