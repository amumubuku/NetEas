require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(174);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6fafef98_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(177);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(175)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6fafef98_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\search\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6fafef98", Component.options)
  } else {
    hotAPI.reload("data-v-6fafef98", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 175:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_musicdetail__ = __webpack_require__(47);
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
  components: {
    musicdetail: __WEBPACK_IMPORTED_MODULE_2__components_musicdetail__["a" /* default */]
  },
  data: function data() {
    return {
      rank: [],
      shortcthot: [],
      keyWord: '',
      songs: [],
      loading: false
    };
  },
  onLoad: function onLoad() {
    var _this = this;

    this.$watch('keyWord', Object(__WEBPACK_IMPORTED_MODULE_1__utils_index__["c" /* dobounce */])(function (newVal) {
      _this.keyWord = newVal;
      _this.loading = true;
      _this.endsearch();
    }, 300));
    Object(__WEBPACK_IMPORTED_MODULE_0__api_index__["m" /* shortcut */])().then(function (res) {
      _this.shortcthot = res.hots;
    });
  },

  methods: {
    SelectShortct: function SelectShortct(keyWord) {
      this.keyWord = keyWord;
    },
    empty: function empty() {
      this.keyWord = '';
    },
    changinput: function changinput(e) {},
    endsearch: function endsearch() {
      var data = [];
      if (this.keyWord === '') {
        return;
      }
      Object(__WEBPACK_IMPORTED_MODULE_0__api_index__["l" /* search */])(this.keyWord).then(function (res) {
        res.forEach(function (element) {
          Object(__WEBPACK_IMPORTED_MODULE_0__api_index__["h" /* getsongdetail */])(element.id).then(function (res) {
            data.push(Object(__WEBPACK_IMPORTED_MODULE_1__utils_index__["b" /* Songsdetail */])(res[0]));
          });
        });
      });
      this.songs = data;
      this.loading = false;
    }
  }
});

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "search"
  }, [_c('div', {
    staticClass: "search-wrapper"
  }, [_c('div', {
    staticClass: "search-input"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.keyWord),
      expression: "keyWord"
    }],
    attrs: {
      "type": "text",
      "placeholder": "搜索歌曲、歌手",
      "placeholder-style": "color:#e6ecf7",
      "bindinput": _vm.changinput,
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.keyWord)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.keyWord = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.keyWord != ''),
      expression: "keyWord != ''"
    }],
    staticClass: "search-empty ripple",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.empty
    }
  }, [_c('i', {
    staticClass: "flaticon-close"
  })], 1)]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.keyWord === ''),
      expression: "keyWord === ''"
    }],
    staticClass: "shortcut-wrapper"
  }, [_c('h3', [_vm._v("热门搜索")]), _vm._v(" "), _c('div', {
    staticClass: "shortcut"
  }, _vm._l((_vm.shortcthot), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "shortcut-item",
      attrs: {
        "eventid": '2-' + index
      },
      on: {
        "click": function($event) {
          _vm.SelectShortct(item.first)
        }
      }
    }, [_c('span', [_vm._v(_vm._s(item.first))])])
  }))], 1), _vm._v(" "), _c('musicdetail', {
    attrs: {
      "songs": _vm.songs,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
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
     require("vue-hot-reload-api").rerender("data-v-6fafef98", esExports)
  }
}

/***/ })

},[173]);
//# sourceMappingURL=main.js.map