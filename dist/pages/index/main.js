require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(114);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_027aadf8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(133);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(115)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-027aadf8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_027aadf8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-027aadf8", Component.options)
  } else {
    hotAPI.reload("data-v-027aadf8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 115:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_my__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_mvdetail__ = __webpack_require__(129);

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
  data: function data() {
    return {
      slideOffset: 0,
      activeIndex: 1,
      sliderWidth: 96,
      contentHeight: 0,
      scroll: true,
      musicshow: false,
      playid: 0,
      picUrl: '',
      name: '',
      navInfo: {}
    };
  },

  components: {
    Home: __WEBPACK_IMPORTED_MODULE_2__components_home__["a" /* default */],
    Mv: __WEBPACK_IMPORTED_MODULE_4__components_mvdetail__["a" /* default */],
    My: __WEBPACK_IMPORTED_MODULE_3__components_my__["a" /* default */]
  },
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    playicon: function playicon() {
      return this.playing ? 'flaticon-pause' : 'flaticon-play-button';
    },

    taggle: function taggle() {
      return {};
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])(['playlist', 'currentIndex', 'currentSong', 'playing'])),
  mounted: function mounted() {
    var systemInfo = wx.getSystemInfoSync();
    var reg = /ios/i;
    this.navInfo.pt = systemInfo.statusBarHeight;
    if (reg.test(systemInfo.system)) {
      this.navInfo.h = 44;
    } else {
      this.navInfo.h = 48;
    }
  },

  methods: {
    next: function next() {
      this.setPlayindex(this.currentIndex + 1);
    },
    search: function search() {
      var url = '../search/main';
      wx.navigateTo({ url: url });
    },
    rank: function rank() {
      var url = '../rank/main';
      wx.navigateTo({ url: url });
    },
    player: function player() {
      var url = '../player/main';
      wx.navigateTo({ url: url });
    },
    changIndex: function changIndex(index) {
      this.activeIndex = index;
    },
    Change: function Change(e) {
      this.activeIndex = e.target.current;
    }
  }
});

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_home_vue__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_672dad26_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_home_vue__ = __webpack_require__(124);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(118)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-672dad26"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_672dad26_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_home_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-672dad26", Component.options)
  } else {
    hotAPI.reload("data-v-672dad26", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 118:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_index_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_banner__ = __webpack_require__(120);

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
  name: 'Home',
  components: {
    Banner: __WEBPACK_IMPORTED_MODULE_3__components_banner__["a" /* default */]
  },
  data: function data() {
    return {
      recommend: []
    };
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapMutations */])({
    setDes: 'SET_DES'
  }), {
    handerPlaylist: function handerPlaylist(item) {
      var data = {
        id: item.id,
        picUrl: item.picUrl,
        name: item.name,
        des: item.copywriter
      };
      this.setDes(data);
      var url = '../musiclist/main';
      wx.navigateTo({ url: url });
    },
    rank: function rank() {
      var url = '../rank/main';
      wx.navigateTo({ url: url });
    }
  }),
  mounted: function mounted() {
    var _this = this;

    console.log(wx.getSystemInfoSync());
    Object(__WEBPACK_IMPORTED_MODULE_1__api_index_js__["k" /* recommned */])().then(function (res) {
      var data = [];
      res.forEach(function (element) {
        element.playCount = Math.floor(element.playCount / 10000);
        data.push(element);
      });
      _this.recommend = data;
      _this.picUrl = res[0].picUrl;
      _this.name = res[0].name;
    });
  }
});

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_banner_vue__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1e7bb933_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_banner_vue__ = __webpack_require__(123);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(121)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_banner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_1e7bb933_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_banner_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\banner.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] banner.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e7bb933", Component.options)
  } else {
    hotAPI.reload("data-v-1e7bb933", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 121:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_index_js__ = __webpack_require__(3);
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
  name: 'Banner',
  data: function data() {
    return {
      swiper: [],
      activeIndex: 0,
      showdots: true,
      autoplay: true,
      color: '#000',
      activecolor: '#ff3326',
      circular: true
    };
  },
  mounted: function mounted() {
    var _this = this;

    Object(__WEBPACK_IMPORTED_MODULE_0__api_index_js__["d" /* banner */])().then(function (res) {
      _this.swiper = res;
    });
  }
});

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "box-swiper"
  }, [_c('swiper', {
    staticStyle: {
      "height": "175px"
    },
    attrs: {
      "current": _vm.activeIndex,
      "duration": 300,
      "indicator-dots": _vm.showdots,
      "autoplay": _vm.autoplay,
      "indicator-color": _vm.color,
      "indicator-active-color": _vm.activecolor,
      "circular": _vm.circular
    }
  }, _vm._l((_vm.swiper), function(item, index) {
    return _c('swiper-item', {
      key: index,
      attrs: {
        "mpcomid": '0-' + index
      }
    }, [_c('img', {
      attrs: {
        "src": item.picUrl,
        "alt": ""
      }
    })])
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1e7bb933", esExports)
  }
}

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "homo-warpper"
  }, [_c('banner', {
    attrs: {
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "nav-box"
  }, [_c('div', {
    staticClass: "nav-item"
  }, [_c('div', {
    staticClass: "item-top"
  }), _vm._v(" "), _c('p', [_vm._v("私人FM")])], 1), _vm._v(" "), _c('div', {
    staticClass: "nav-item"
  }, [_c('div', {
    staticClass: "item-top"
  }), _vm._v(" "), _c('p', [_vm._v("每日推荐")])], 1), _vm._v(" "), _c('div', {
    staticClass: "nav-item"
  }, [_c('div', {
    staticClass: "item-top"
  }), _vm._v(" "), _c('p', [_vm._v("歌单")])], 1), _vm._v(" "), _c('div', {
    staticClass: "nav-item",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.rank
    }
  }, [_c('div', {
    staticClass: "item-top"
  }), _vm._v(" "), _c('p', [_vm._v("排行榜")])], 1)]), _vm._v(" "), _c('h3', [_vm._v("推荐歌单 "), _c('i', {
    staticClass: "flaticon-right-arrow"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "recommend"
  }, _vm._l((_vm.recommend), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "recommend-item",
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.handerPlaylist(item)
        }
      }
    }, [_c('i', {
      staticClass: "playCount"
    }, [_vm._v(_vm._s(item.playCount) + "万")]), _vm._v(" "), _c('img', {
      attrs: {
        "src": item.picUrl,
        "alt": ""
      }
    }), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.name))])], 1)
  })), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.recommend.length),
      expression: "!recommend.length"
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
     require("vue-hot-reload-api").rerender("data-v-672dad26", esExports)
  }
}

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_my_vue__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_99edd19a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_my_vue__ = __webpack_require__(128);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(126)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_my_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_99edd19a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_my_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\my.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] my.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-99edd19a", Component.options)
  } else {
    hotAPI.reload("data-v-99edd19a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 126:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(5);

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
  data: function data() {
    return {
      songlist: [],
      Collectionsong: [],
      userid: 454819620
    };
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["c" /* mapMutations */])({
    setDes: 'SET_DES'
  }), {
    handercilik: function handercilik(item) {
      var data = {
        id: item.id,
        picUrl: item.coverImgUrl,
        name: item.name,
        description: item.description
      };
      this.setDes(data);
      var url = '../musiclist/main';
      wx.navigateTo({ url: url });
    }
  }),
  mounted: function mounted() {
    var _this = this;

    Object(__WEBPACK_IMPORTED_MODULE_1__api_index__["i" /* phoneLogin */])(19984480032, 'Fizz0311.').then(function (res) {});
    Object(__WEBPACK_IMPORTED_MODULE_1__api_index__["o" /* userplaylist */])(this.userid).then(function (res) {
      res.forEach(function (element) {
        if (element.userId === _this.userid) {
          _this.songlist.push(element);
        } else {
          _this.Collectionsong.push(element);
        }
      });
    });
  }
});

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "my-content"
  }, [_c('div', {
    staticClass: "my-background"
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "user-song"
  }, [_c('div', {
    staticClass: "my-item"
  }, [_c('div', {
    staticClass: "item-icon"
  }, [_c('i', {
    staticClass: "flaticon-musical-note"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "item-detail"
  }, [_vm._v("本地音乐")])]), _vm._v(" "), _c('div', {
    staticClass: "my-item"
  }, [_c('div', {
    staticClass: "item-icon"
  }, [_c('i', {
    staticClass: "flaticon-heart"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "item-detail"
  }, [_vm._v("我喜欢的")])]), _vm._v(" "), _c('div', {
    staticClass: "my-item"
  }, [_c('div', {
    staticClass: "item-icon"
  }, [_c('i', {
    staticClass: "flaticon-passage-of-time"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "item-detail"
  }, [_vm._v("最近播放")])]), _vm._v(" "), _c('div', {
    staticClass: "songlist"
  }, [_c('div', [_c('i', {
    staticClass: "flaticon-right-arrow"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "songname"
  }, [_vm._v("创建的歌单(" + _vm._s(_vm.songlist.length + 1) + ")")]), _vm._v(" "), _c('div', [_c('i', {
    staticClass: "flaticon-settings"
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "user-song-item"
  }, _vm._l((_vm.songlist), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "song-item",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.handercilik(item)
        }
      }
    }, [_c('div', {
      staticClass: "song-left"
    }, [_c('img', {
      attrs: {
        "src": item.coverImgUrl,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "song-right"
    }, [_c('div', {
      staticClass: "song-detail"
    }, [_c('p', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.trackCount))])], 1), _vm._v(" "), _c('div', [_c('i', {
      staticClass: "flaticon-more"
    })], 1)])])
  })), _vm._v(" "), _c('div', {
    staticClass: "songlist"
  }, [_c('div', [_c('i', {
    staticClass: "flaticon-right-arrow"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "songname"
  }, [_vm._v("收藏的歌单(" + _vm._s(_vm.Collectionsong.length + 1) + ")")]), _vm._v(" "), _c('div', [_c('i', {
    staticClass: "flaticon-settings"
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "user-collectionsong"
  }, _vm._l((_vm.Collectionsong), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "song-item",
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.handercilik(item)
        }
      }
    }, [_c('div', {
      staticClass: "song-left"
    }, [_c('img', {
      attrs: {
        "src": item.coverImgUrl,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "song-right"
    }, [_c('div', {
      staticClass: "song-detail"
    }, [_c('p', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.trackCount))])], 1), _vm._v(" "), _c('div', [_c('i', {
      staticClass: "flaticon-more"
    })], 1)])])
  }))])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "user-detail"
  }, [_c('div', {
    staticClass: "user-head-image"
  }), _vm._v(" "), _c('div', {
    staticClass: "user-name"
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-99edd19a", esExports)
  }
}

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_mvdetail_vue__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2f796681_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_mvdetail_vue__ = __webpack_require__(132);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(130)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_mvdetail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2f796681_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_mvdetail_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\mvdetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mvdetail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f796681", Component.options)
  } else {
    hotAPI.reload("data-v-2f796681", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 130:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index__ = __webpack_require__(15);
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
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      mv: [],
      currentIndex: -1
    };
  },

  props: {
    index: {
      tyep: Number,
      default: 0
    }
  },
  methods: {
    scrolltolower: function scrolltolower() {
      this.getmv();
    },
    playmv: function playmv(index) {
      this.currentIndex = index;
    },
    getmv: function getmv() {
      var _this = this;

      var offset = this.mv.length / 10;
      Object(__WEBPACK_IMPORTED_MODULE_0__api_index__["b" /* Gettopmv */])(offset).then(function (res) {
        res.forEach(function (element, index) {
          Object(__WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* Getmvdetail */])(element.id).then(function (res) {
            if (res.playCount > 10000) {
              res.playCount = Math.floor(res.playCount / 10000);
              res.duration = Object(__WEBPACK_IMPORTED_MODULE_1__utils_index__["d" /* format */])(res.duration / 1000);
            }
            _this.mv.push(res);
          });
        });
      });
    }
  },
  watch: {
    index: function index(newIndex, oldIndex) {
      if (newIndex === 2) {
        this.getmv();
      }
    }
  }
});

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mv"
  }, [_c('scroll-view', {
    staticClass: "scroll-view_H",
    staticStyle: {
      "width": "100%",
      "height": "100%"
    },
    attrs: {
      "scroll-y": "",
      "eventid": '2'
    },
    on: {
      "scrolltolower": _vm.scrolltolower
    }
  }, [_c('div', {
    staticClass: "mv-detail"
  }, _vm._l((_vm.mv), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "mv-item",
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.playmv(index)
        }
      }
    }, [_c('div', {
      staticClass: "mv-content"
    }, [_c('img', {
      attrs: {
        "src": item.cover,
        "alt": ""
      }
    }), _vm._v(" "), (index === _vm.currentIndex) ? _c('video', {
      attrs: {
        "src": item.brs[1080],
        "autoplay": "autoplay"
      }
    }) : _vm._e(), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (index != _vm.currentIndex),
        expression: "index != currentIndex"
      }],
      staticClass: "video-detail"
    }, [_c('p', {
      staticClass: "playCount flaticon-next"
    }, [_vm._v(_vm._s(item.playCount) + "万")]), _vm._v(" "), _c('p', {
      staticClass: "duration flaticon-passage-of-time"
    }, [_vm._v(_vm._s(item.duration))])], 1), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (index != _vm.currentIndex),
        expression: "index != currentIndex"
      }],
      staticClass: "play-video",
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.playmv(index)
        }
      }
    }, [_c('i', {
      staticClass: "flaticon-next"
    })], 1)]), _vm._v(" "), _c('div', {
      staticClass: "mv-bot"
    }, [_c('p', [_vm._v(_vm._s(item.name) + " - " + _vm._s(item.artistName))]), _vm._v(" "), _c('span', {
      staticClass: "likeCount flaticon-thumb-up"
    }, [_vm._v(_vm._s(item.likeCount))]), _vm._v(" "), _c('span', {
      staticClass: "flaticon-menu"
    }, [_vm._v(_vm._s(item.subCount))])], 1)])
  }))])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2f796681", esExports)
  }
}

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "header",
    style: ({
      height: _vm.navInfo.h + 'px',
      paddingTop: _vm.navInfo.pt + 'px'
    })
  }, [_c('div', {
    staticClass: "search-icon",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.search
    }
  }, [_c('i', {
    staticClass: "flaticon-search"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "tab-warpper"
  }, [_c('div', {
    staticClass: "my ripple",
    class: {
      active: _vm.activeIndex === 0
    },
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.changIndex(0)
      }
    }
  }, [_c('i', {
    staticClass: "flaticon-musical-note"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "home ripple",
    class: {
      active: _vm.activeIndex === 1
    },
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.changIndex(1)
      }
    }
  }, [_c('i', {
    staticClass: "flaticon-5b77b6a5cfe0a"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "video ripple",
    class: {
      active: _vm.activeIndex === 2
    },
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.changIndex(2)
      }
    }
  }, [_c('i', {
    staticClass: "flaticon-social-media"
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "tabbar-wrapper",
    style: ({
      top: _vm.navInfo.h + _vm.navInfo.pt + 'px'
    })
  }, [_c('swiper', {
    staticClass: "swiper",
    attrs: {
      "current": _vm.activeIndex,
      "duration": 300,
      "eventid": '4'
    },
    on: {
      "change": _vm.Change
    }
  }, [_c('swiper-item', {
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('scroll-view', {
    staticStyle: {
      "height": "100%"
    },
    attrs: {
      "scroll-y": ""
    }
  }, [_c('my', {
    attrs: {
      "mpcomid": '0'
    }
  })], 1)], 1), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('scroll-view', {
    staticStyle: {
      "height": "100%"
    },
    attrs: {
      "scroll-y": ""
    }
  }, [_c('home', {
    attrs: {
      "mpcomid": '2'
    }
  })], 1)], 1), _vm._v(" "), _c('swiper-item', {
    attrs: {
      "mpcomid": '5'
    }
  }, [_c('scroll-view', {
    staticStyle: {
      "height": "100%"
    },
    attrs: {
      "scroll-y": ""
    }
  }, [_c('mv', {
    attrs: {
      "index": _vm.activeIndex,
      "mpcomid": '4'
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), (_vm.playlist.length > 1) ? _c('div', {
    staticClass: "player",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.playerdetail
    }
  }, [_c('div', {
    staticClass: "mini-player"
  }, [_c('div', {
    staticClass: "mini-player-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.currentSong.image,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "mini-player-detail"
  }, [_c('p', [_vm._v(_vm._s(_vm.currentSong.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.currentSong.singer))])], 1), _vm._v(" "), _c('div', {
    staticClass: "mini-player-icon"
  }, [_c('div', {
    staticClass: "player-stop ",
    class: _vm.playicon,
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.next
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "player-list flaticon-list"
  })])])]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-027aadf8", esExports)
  }
}

/***/ })

},[113]);
//# sourceMappingURL=main.js.map