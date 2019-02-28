require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([9],{

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(152);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b43c9cde_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(156);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(153)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b43c9cde_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\player\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b43c9cde", Component.options)
  } else {
    hotAPI.reload("data-v-b43c9cde", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 153:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lyric_parser__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lyric_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lyric_parser__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var btnWidht = 6;
/* harmony default export */ __webpack_exports__["a"] = ({
  components: {},
  data: function data() {
    return {
      rank: [],
      currentTime: 0,
      duration: 0,
      percent: 0,
      left: 0,
      btn: {},
      dt: 0,
      Time: 0.0,
      query: '',
      progressWidth: 0,
      currentLyric: '',
      playingLyric: '',
      currentLineNum: 0,
      scroll_id: 'scroll0',
      scroll: 'scroll',
      offLeft: 0,
      currentScroll: false,
      toggleplaying: false
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    playicon: function playicon() {
      return this.playing ? 'flaticon-pause' : 'flaticon-play-button';
    },

    taggle: function taggle() {
      return {};
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapGetters */])(['playlist', 'currentIndex', 'currentSong', 'playing'])),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    back: function back() {
      wx.navigateBack({
        delta: 1
      });
    },
    toggleying: function toggleying() {
      this.toggleplaying = !this.toggleplaying;
    },
    opencomment: function opencomment() {
      this.setcomment(this.currentSong.id);
      var url = '../comment/main';
      wx.navigateTo({ url: url });
    },
    Touchstart: function Touchstart(e) {
      this.currentScroll = true;
    },
    TouchEnd: function TouchEnd(e) {
      this.currentScroll = false;
    },
    seek: function seek(e) {
      this.touch.percent = (e.touches[0].pageX - this.offLeft - btnWidht) / this.progressWidth;
      var startTime = this.touch.percent * this.duration;
      this.backgroundAudioManager.seek(startTime);
      this.currentLyric.seek(startTime * 1000);
    },
    getLyric: function getLyric() {
      var _this = this;

      this.currentSong.getLyric().then(function (lyric) {
        _this.currentLyric = new __WEBPACK_IMPORTED_MODULE_2_lyric_parser___default.a(lyric, _this.handleLyric);
        _this.currentLyric.play();
        var play = _this.currentSong;
        _this.percent = 0;
        _this.left = 0;
        _this.duration = play.duration / 1000;
        _this.dt = _this.format(_this.duration);
        _this.backgroundAudioManager.title = play.name;
        _this.backgroundAudioManager.name = play.name;
        _this.backgroundAudioManager.singer = play.singer;
        _this.backgroundAudioManager.coverImgUrl = play.image;
        _this.backgroundAudioManager.src = play.url;
      }).catch(function () {
        _this.currentLyric = null;
        _this.currentLineNum = 0;
        _this.playingLyric = '';
      });
    },
    next: function next() {
      var index = 0;
      if (this.currentIndex >= this.playlist.length) {
        index = 0;
        this.setPlayindex(index);
        return;
      }
      this.setPlayindex(index + 1);
    },
    prve: function prve() {
      var index = 0;
      if (this.currentIndex === 0) {
        index = this.playlist.length;
        this.setPlayindex(index);
        return;
      }
      index--;
      this.setPlayindex(index);
    },
    changplaying: function changplaying() {
      this.setplaying(!this.playing);
    },
    handleLyric: function handleLyric(_ref) {
      var lineNum = _ref.lineNum,
          txt = _ref.txt;

      this.currentLineNum = lineNum;
      if (lineNum > 6 && this.currentScroll) {
        return;
      } else {
        this.scroll_id = this.scroll + (lineNum - 5);
      }
      this.playingLyric = txt;
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapMutations */])({
    setplayid: 'SET_PLAYID',
    setPlayindex: 'SET_CURRENT_INDEX',
    setplaying: 'SET_PLAYING',
    setcomment: 'SET_COMMENTID'
  }), {
    format: function format(interval) {
      interval = interval | 0;
      var minute = interval / 60 | 0;
      var second = this._pad(interval % 60);
      return minute + ':' + second;
    },
    _pad: function _pad(num) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

      var len = num.toString().length;
      while (len < n) {
        num = '0' + num;
        len++;
      }
      return num;
    },
    play: function play() {
      this.setplaying(!this.playing);
      this.getLyric();
    },
    offset: function offset(percent) {
      var that = this;
      if (!that.progressWidth > 0) {
        this.query = wx.createSelectorQuery();
        this.query.select('#box').boundingClientRect(function (rect) {
          that.progressWidth = rect.width - rect.left;
          that.offLeft = rect.left + 12;
        }).exec();
      }
      that.left = percent * (that.progressWidth - btnWidht);
    }
  }),
  created: function created() {
    var _this2 = this;

    this.touch = {};
    this.backgroundAudioManager = wx.getBackgroundAudioManager();
    this.backgroundAudioManager.onTimeUpdate(function (e) {
      _this2.currentTime = _this2.backgroundAudioManager.currentTime;
      _this2.Time = _this2.format(_this2.currentTime);
    });
    this.backgroundAudioManager.onPlay(function (e) {});
    this.backgroundAudioManager.onEnded(function (e) {
      _this2.next();
    });
  },

  watch: {
    playing: function playing(newplaying, old) {
      newplaying ? this.backgroundAudioManager.play() : this.backgroundAudioManager.pause();
    },
    currentSong: function currentSong(newSong, oldSong) {
      if (newSong === oldSong) {
        return;
      }
      if (this.currentLyric) {
        this.scroll_id = 'scroll0';
        this.currentLyric.stop();
      }
      this.play();
    },
    currentTime: function currentTime(newTime, oldtime) {
      this.percent = newTime / this.duration * 100;
      this.offset(newTime / this.duration);
    }
  }
});

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "player-detail"
  }, [_c('div', {
    staticClass: "background"
  }, [_c('img', {
    attrs: {
      "src": _vm.currentSong.image,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "player-hender"
  }, [_c('div', {
    staticClass: "player-back",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.back
    }
  }, [_c('i', {
    staticClass: "flaticon-down-arrow"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "player-content"
  }, [_c('p', [_vm._v(_vm._s(_vm.currentSong.name))]), _vm._v(" "), _c('p', {
    staticClass: "player-singer"
  }, [_vm._v(_vm._s(_vm.currentSong.singer))]), _vm._v(" "), _c('div', {
    staticClass: "hender-line"
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "player-wrapper",
    attrs: {
      "eventid": '1'
    },
    on: {
      "touchstart": _vm.Touchstart,
      "touchend": _vm.TouchEnd,
      "click": _vm.toggleying
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.toggleplaying),
      expression: "toggleplaying"
    }],
    staticClass: "player-cd"
  }, [_c('img', {
    class: {
      'stoprotate': !_vm.playing
    },
    attrs: {
      "src": _vm.currentSong.image,
      "alt": ""
    }
  })]), _vm._v(" "), _c('scroll-view', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.toggleplaying),
      expression: "!toggleplaying"
    }],
    staticClass: "scroll-lyric",
    staticStyle: {
      "width": "100%",
      "height": "100%"
    },
    attrs: {
      "scroll-y": "",
      "scroll-into-view": _vm.scroll_id,
      "scroll-with-animation": "true"
    }
  }, [_c('div', {
    staticClass: "Lyric"
  }, _vm._l((_vm.currentLyric.lines), function(item, index) {
    return _c('p', {
      key: index,
      class: {
        'current': _vm.currentLineNum === index
      },
      attrs: {
        "id": _vm.scroll + index
      }
    }, [_vm._v(_vm._s(item.txt))])
  }))])], 1), _vm._v(" "), _c('div', {
    staticClass: "player-buttom"
  }, [_c('div', {
    staticClass: "buttom-hender"
  }, [_c('div', {
    staticClass: "comment"
  }, [_c('div', {
    staticClass: "comment-icon",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.opencomment
    }
  }, [_c('i', {
    staticClass: "flaticon-menu"
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "progress-bar-wrapper"
  }, [_c('div', {
    staticClass: "progress-btn"
  }, [_c('p', [_vm._v(_vm._s(_vm.Time))]), _vm._v(" "), _c('div', {
    staticClass: "progress-inner"
  }, [_c('div', {
    staticClass: "progressBtn",
    style: ({
      left: _vm.left + 'px'
    }),
    attrs: {
      "animation": _vm.btn
    }
  }), _vm._v(" "), _c('progress', {
    attrs: {
      "percent": _vm.percent,
      "stroke-width": "3",
      "backgroundColor": "#888",
      "activeColor": "#ff3326",
      "id": "box",
      "eventid": '3'
    },
    on: {
      "click": _vm.seek
    }
  })], 1), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.dt))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "operators"
  }, [_c('div', {
    staticClass: "player-icon"
  }, [_c('i', {
    staticClass: "flaticon-loop"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "player-icon",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.pevr
    }
  }, [_c('i', {
    staticClass: "flaticon-next-1"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "player-icon",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.changplaying
    }
  }, [_c('i', {
    class: _vm.playicon
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "player-icon",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.next
    }
  }, [_c('i', {
    staticClass: "flaticon-next"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "player-icon"
  }, [_c('i', {
    staticClass: "flaticon-list"
  })], 1)])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b43c9cde", esExports)
  }
}

/***/ })

},[151]);
//# sourceMappingURL=main.js.map