require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([2],{

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SET_SINGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SET_PLAYLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_CURRENT_INDEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SET_FULLSCREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SET_PLAYING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SET_ISCLOSELIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_DISC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SET_TOPLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_PLAYLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SET_SEARCH_HITORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SET_PLAYLIST_HITORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SET_PLAYID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_COMMENTID; });
var SET_SINGER = 'SET_SINGER';
var SET_PLAYLIST = 'SET_PLAYLIST';
var SET_CURRENT_INDEX = 'SET_CURRENT_INDEX';
var SET_FULLSCREEN = 'SET_FULLSCREEN';
var SET_PLAYING = 'SET_PLAYING';
var SET_ISCLOSELIST = 'SET_ISCLOSELIST';
var SET_DISC = 'SET_DISC';
var SET_TOPLIST = 'SET_TOPLIST';
var ADD_PLAYLIST = 'ADD_PLAYLIST';
var SET_SEARCH_HITORY = 'SET_SEARCH_HITORY';
var SET_PLAYLIST_HITORY = 'SET_PLAYLIST_HITORY';
var SET_PLAYID = 'SET_PLAYID';
var SET_COMMENTID = 'SET_COMMENTID';

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__font_flaticon_css__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__font_flaticon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__font_flaticon_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_index__ = __webpack_require__(54);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_3__store_index__["a" /* default */];
var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(52);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(51)
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

/***/ 51:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({});

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_state__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_mutations__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_actions__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_getters__ = __webpack_require__(63);







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: __WEBPACK_IMPORTED_MODULE_2__store_state__["a" /* default */],
  actions: __WEBPACK_IMPORTED_MODULE_4__store_actions__,
  getters: __WEBPACK_IMPORTED_MODULE_5__store_getters__,
  mutations: __WEBPACK_IMPORTED_MODULE_3__store_mutations__["a" /* default */]
}));

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// import {loadSearch, loadPlaylist} from '../common/js/cache'

var state = {
  personalized: {},
  singer: {},
  playlist: [],
  currentIndex: -1,
  playing: '',
  fullScreen: false,
  closelist: false,
  commnetid: 0,
  disc: {},
  toplist: {}
  // searchHitory: loadSearch(),
  // playHitory: loadPlaylist()
};
/* harmony default export */ __webpack_exports__["a"] = (state);

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutation_types__ = __webpack_require__(31);


var _mutations;



var mutations = (_mutations = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["l" /* SET_SINGER */], function (state, singer) {
  state.singer = singer;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["i" /* SET_PLAYLIST */], function (state, _ref) {
  var list = _ref.list,
      index = _ref.index;

  state.playlist = list;
  state.currentIndex = index;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["a" /* ADD_PLAYLIST */], function (state, song) {
  state.playlist.unshift(song);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["c" /* SET_CURRENT_INDEX */], function (state, index) {
  state.currentIndex = index;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["e" /* SET_FULLSCREEN */], function (state, flag) {
  state.fullScreen = flag;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["h" /* SET_PLAYING */], function (state, flag) {
  state.playing = flag;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["f" /* SET_ISCLOSELIST */], function (state, flag) {
  state.closelist = flag;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["d" /* SET_DISC */], function (state, disc) {
  state.disc = disc;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["m" /* SET_TOPLIST */], function (state, list) {
  state.toplist = list;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["k" /* SET_SEARCH_HITORY */], function (state, hitory) {
  state.searchHitory = hitory;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["j" /* SET_PLAYLIST_HITORY */], function (state, hitory) {
  state.playHitory = hitory;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["g" /* SET_PLAYID */], function (state, item) {
  state.personalized = item;
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_1__mutation_types__["b" /* SET_COMMENTID */], function (state, COMMENTID) {
  state.commentid = COMMENTID;
}), _mutations);
/* harmony default export */ __webpack_exports__["a"] = (mutations);

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPlay", function() { return selectPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlay", function() { return addPlay; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutation_types__ = __webpack_require__(31);

// import {saveSearch, deleteSearch, clearSearch, savePlaylist} from '../common/js/cache'

var selectPlay = function selectPlay(_ref, _ref2) {
  var commit = _ref.commit,
      state = _ref.state;
  var list = _ref2.list,
      index = _ref2.index;

  commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["i" /* SET_PLAYLIST */], list);
  commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["c" /* SET_CURRENT_INDEX */], index);
  commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["e" /* SET_FULLSCREEN */], true);
  commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["h" /* SET_PLAYING */], true);
};
var addPlay = function addPlay(_ref3, song) {
  var commit = _ref3.commit,
      state = _ref3.state;

  commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["a" /* ADD_PLAYLIST */], song);
  commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["c" /* SET_CURRENT_INDEX */], 0);
  commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["e" /* SET_FULLSCREEN */], true);
  commit(__WEBPACK_IMPORTED_MODULE_0__mutation_types__["h" /* SET_PLAYING */], true);
};
// export const saveSearchHitory = ({commit}, query) => {
//   commit(types.SET_SEARCH_HITORY, saveSearch(query))
// }
// export const deleteSearchHitory = ({commit}, query) => {
//   commit(types.SET_SEARCH_HITORY, deleteSearch(query))
// }
// export const clearSearchHitory = ({commit}) => {
//   commit(types.SET_SEARCH_HITORY, clearSearch())
// }
// export const savePlayHitory = ({commit}, song) => {
//   commit(types.SET_PLAYLIST_HITORY, savePlaylist(song))
// }

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singer", function() { return singer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playlist", function() { return playlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentIndex", function() { return currentIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentSong", function() { return currentSong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullScreen", function() { return fullScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playing", function() { return playing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iscloselist", function() { return iscloselist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disc", function() { return disc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toplist", function() { return toplist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadsearch", function() { return loadsearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personalizeds", function() { return personalizeds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentid", function() { return commentid; });
// import {normalSongs} from '../common/js/util'
var singer = function singer(state) {
  return state.singer;
};
var playlist = function playlist(state) {
  return state.playlist;
};
var currentIndex = function currentIndex(state) {
  return state.currentIndex;
};
var currentSong = function currentSong(state) {
  return state.playlist[state.currentIndex] || {};
};
var fullScreen = function fullScreen(state) {
  return state.fullScreen;
};
var playing = function playing(state) {
  return state.playing;
};
var iscloselist = function iscloselist(state) {
  return state.closelist;
};
var disc = function disc(state) {
  return state.disc;
};
var toplist = function toplist(state) {
  return state.toplist;
};
var loadsearch = function loadsearch(state) {
  return state.searchHitory;
};
var personalizeds = function personalizeds(state) {
  return state.personalized;
};
var commentid = function commentid(state) {
  return state.commentid;
};
// export const loadplaylist = state => normalSongs(state.playHitory)

/***/ })

},[48]);
//# sourceMappingURL=app.js.map