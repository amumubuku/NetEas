require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([12],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "comment"
  }, [_c('scroll-view', {
    staticClass: "scroll-comment",
    staticStyle: {
      "width": "100%",
      "height": "100%"
    },
    attrs: {
      "scroll-y": "",
      "eventid": '0'
    },
    on: {
      "scrolltolower": _vm.scrolltolower
    }
  }, [_c('div', {
    staticClass: "comment-song"
  }, [_c('div', {
    staticClass: "song-left"
  }, [_c('img', {
    attrs: {
      "src": _vm.currentSong.image,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "song-right"
  }, [_c('p', [_vm._v(_vm._s(_vm.currentSong.singer))]), _vm._v(" "), _c('p', {
    staticClass: "song-name"
  }, [_vm._v(_vm._s(_vm.currentSong.name))])], 1)]), _vm._v(" "), _c('h3', {
    staticClass: "hot-comment"
  }, [_vm._v("精彩评论")]), _vm._v(" "), _vm._l((_vm.Hotcomments), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "comment-item"
    }, [_c('div', {
      staticClass: "comment-hander"
    }, [_c('div', {
      staticClass: "user-image"
    }, [_c('img', {
      attrs: {
        "src": item.user.avatarUrl,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "user-detail"
    }, [_c('p', [_vm._v(_vm._s(item.user.nickname))]), _vm._v(" "), _c('p', {
      staticClass: "time"
    }, [_vm._v(_vm._s(item.time))])], 1), _vm._v(" "), _c('div', {
      staticClass: "link-count "
    }, [(item.likedCount != 0) ? _c('p', [_vm._v(_vm._s(item.likedCount))]) : _vm._e(), _vm._v(" "), _c('i', {
      staticClass: "flaticon-thumb-up"
    })], 1)]), _vm._v(" "), _c('div', {
      staticClass: "comment-content"
    }, [_c('p', [_vm._v(_vm._s(item.content))])], 1)])
  }), _vm._v(" "), _c('h3', {
    staticClass: "hot-comment"
  }, [_vm._v("最新评论")]), _vm._v(" "), _vm._l((_vm.comments), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "comment-item"
    }, [_c('div', {
      staticClass: "comment-hander"
    }, [_c('div', {
      staticClass: "user-image"
    }, [_c('img', {
      attrs: {
        "src": item.user.avatarUrl,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "user-detail"
    }, [_c('p', [_vm._v(_vm._s(item.user.nickname))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.time))])], 1), _vm._v(" "), _c('div', {
      staticClass: "link-count "
    }, [(item.likedCount === 0) ? _c('p', [_vm._v(_vm._s(item.likedCount))]) : _vm._e(), _vm._v(" "), _c('i', {
      staticClass: "flaticon-thumb-up"
    })], 1)]), _vm._v(" "), _c('div', {
      staticClass: "comment-content"
    }, [_c('p', [_vm._v(_vm._s(item.content))]), _vm._v(" "), _vm._l((item.beReplied), function(commentReplied, i) {
      return _c('div', {
        key: i,
        staticClass: "item-replied"
      }, [_c('p', {
        staticClass: "nick-name"
      }, [_vm._v("@" + _vm._s(item.user.nickname) + ": ")]), _vm._v(" "), _c('p', [_vm._v(" " + _vm._s(commentReplied.content))])], 1)
    })], 2)])
  })], 2)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-76c69ef6", esExports)
  }
}

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(65);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_76c69ef6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(106);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(66)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_76c69ef6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\comment\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76c69ef6", Component.options)
  } else {
    hotAPI.reload("data-v-76c69ef6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 66:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index__ = __webpack_require__(15);

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
  components: {},
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])(['commentid', 'currentSong'])),
  data: function data() {
    return {
      songs: [],
      total: 0,
      Hotcomments: [],
      comments: []
    };
  },

  methods: {
    scrolltolower: function scrolltolower() {
      this.getComment();
    },
    getComment: function getComment() {
      var _this = this;

      var offset = this.comments.length / 10;
      Object(__WEBPACK_IMPORTED_MODULE_2__api_index__["e" /* comment */])(this.currentSong.id, offset).then(function (res) {
        if (!_this.Hotcomments.length > 0) {
          wx.setNavigationBarTitle({
            title: '\u8BC4\u8BBA(' + res.total + ')'
          });
          res.hotComments.forEach(function (element) {
            element.time = Object(__WEBPACK_IMPORTED_MODULE_3__utils_index__["e" /* formatTime */])(new Date(element.time));
            _this.Hotcomments.push(element);
          });
        }
        res.comments.forEach(function (element) {
          element.time = Object(__WEBPACK_IMPORTED_MODULE_3__utils_index__["e" /* formatTime */])(new Date(element.time));
          _this.comments.push(element);
        });
      });
    }
  },
  onLoad: function onLoad() {
    this.getComment();
  },

  watch: {
    currentSong: function currentSong(newSong, oldSong) {
      this.Hotcomments = [];
      this.comments = [];
      this.getComment();
    }
  }
});

/***/ })

},[64]);
//# sourceMappingURL=main.js.map