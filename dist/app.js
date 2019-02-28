require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([3],{

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__font_flaticon_css__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__font_flaticon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__font_flaticon_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(52);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */];
var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(50);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(49)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-143db36f", Component.options)
  } else {
    hotAPI.reload("data-v-143db36f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 49:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getters__ = __webpack_require__(53);



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  getters: __WEBPACK_IMPORTED_MODULE_2__getters__["a" /* default */],
  state: {
    playlist: [],
    currentSong: [],
    playing: false,
    des: [],
    songIndex: -1
  },
  mutations: {
    SET_PLAYLIST: function SET_PLAYLIST(state, playlist) {
      state.playlist = playlist.list;
      state.songIndex = playlist.index;
    },
    SET_DES: function SET_DES(state, arr) {
      state.des = arr;
    },
    SET_SONGINDEX: function SET_SONGINDEX(state, numder) {
      state.songIndex = numder;
    },
    SET_PLAYING: function SET_PLAYING(state, flg) {
      state.playing = flg;
    }
  },
  actions: {}
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getters = {
  playlist: function playlist(state) {
    return state.playlist;
  },
  personalizeds: function personalizeds(state) {
    return state.des;
  },
  currentIndex: function currentIndex(state) {
    return state.songIndex;
  },
  currentSong: function currentSong(state) {
    return state.playlist[state.songIndex];
  },
  playing: function playing(state) {
    return state.playing;
  }
};
/* harmony default export */ __webpack_exports__["a"] = (getters);

/***/ })

},[46]);
//# sourceMappingURL=app.js.map