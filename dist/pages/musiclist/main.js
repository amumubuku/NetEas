require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(140);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_75f172a9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(150);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(141)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-75f172a9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_75f172a9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\musiclist\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75f172a9", Component.options)
  } else {
    hotAPI.reload("data-v-75f172a9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 141:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_music_list__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navigation_bar__ = __webpack_require__(146);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapGetters */])(['personalizeds'])),
  data: function data() {
    return {
      songs: []
    };
  },

  components: {
    MusicList: __WEBPACK_IMPORTED_MODULE_4__components_music_list__["a" /* default */],
    NavigationBar: __WEBPACK_IMPORTED_MODULE_5__components_navigation_bar__["a" /* default */]
  },
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["c" /* mapMutations */])({
    setPlaylist: 'SET_PLAYLIST'
  }), {
    personalized: function personalized() {
      var _this = this;

      Object(__WEBPACK_IMPORTED_MODULE_2__api_index__["f" /* getpersonalized */])(this.personalizeds.id).then(function (res) {
        var result = [];
        res.tracks.forEach(function (element) {
          result.push(Object(__WEBPACK_IMPORTED_MODULE_1__utils_index__["a" /* CreateSongs */])(element));
        });
        _this.songs = result;
      });
    },
    playall: function playall() {
      var url = '../player/main';
      this.setPlaylist({
        list: this.songs,
        index: 1
      });
      wx.navigateTo({ url: url });
    }
  }),
  mounted: function mounted() {
    this.songs = [];
    wx.setNavigationBarTitle({
      title: this.personalizeds.des
    });
    this.personalized();
  }
});

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_navigation_bar_vue__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_16b9a4e1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_navigation_bar_vue__ = __webpack_require__(149);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(147)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-16b9a4e1"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_navigation_bar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_16b9a4e1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_navigation_bar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\navigation-bar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] navigation-bar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-16b9a4e1", Component.options)
  } else {
    hotAPI.reload("data-v-16b9a4e1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 147:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'NavigationBar',
  props: {
    title: {
      tyep: String,
      default: ''
    }
  },
  data: function data() {
    return {
      navInfo: {}
    };
  },

  methods: {
    back: function back() {
      wx.navigateBack({
        delta: 1
      });
    }
  },
  mounted: function mounted() {
    var systemInfo = wx.getSystemInfoSync();
    var reg = /ios/i;
    this.navInfo.pt = systemInfo.statusBarHeight;
    if (reg.test(systemInfo.system)) {
      this.navInfo.h = 44;
    } else {
      this.navInfo.h = 48;
    }
    console.log(this.navInfo);
  }
});

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "nvaigation-warpper",
    style: ({
      height: _vm.navInfo.h + 'px',
      paddingTop: _vm.navInfo.pt + 'px',
      lineHeight: _vm.navInfo.pt + 'px'
    })
  }, [_c('div', {
    staticClass: "nvaigation-hender"
  }, [_c('div', {
    staticClass: "nvaigation-back",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.back
    }
  }, [_c('i', {
    staticClass: "flaticon-down-arrow"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "hender-detail"
  }, [_c('p', [_vm._v("歌单")]), _vm._v(" "), _c('p', {
    staticClass: "nvaigation-title"
  }, [_vm._v(_vm._s(_vm.title))])], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-16b9a4e1", esExports)
  }
}

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "music-list"
  }, [_c('navigation-bar', {
    attrs: {
      "title": _vm.personalizeds.des,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "music-top"
  }, [_c('img', {
    attrs: {
      "src": _vm.personalizeds.picUrl,
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.personalizeds.name))])], 1), _vm._v(" "), _c('div', {
    staticClass: "playall",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.playall
    }
  }, [_c('div', {
    staticClass: "play-icon "
  }, [_c('i', {
    staticClass: "flaticon-play-button"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "play-list"
  }, [_vm._v("播放全部"), _c('span', [_vm._v("(共" + _vm._s(_vm.songs.length) + "首)")])])]), _vm._v(" "), _c('music-list', {
    attrs: {
      "songs": _vm.songs,
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.songs.length),
      expression: "!songs.length"
    }],
    staticClass: "loading"
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-75f172a9", esExports)
  }
}

/***/ })

},[139]);
//# sourceMappingURL=main.js.map