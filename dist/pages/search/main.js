require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{"1kNa":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("5nAL"),n=s.n(a),i=s("ar59");new n.a(i.a).$mount()},Uhdc:function(t,e){},ar59:function(t,e,s){"use strict";var a=s("r/9Q"),n=s("hoeo");var i=function(t){s("Uhdc")},c=s("ybqe")(a.a,n.a,i,null,null);e.a=c.exports},hoeo:function(t,e,s){"use strict";var a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search"},[s("div",{staticClass:"search-wrapper"},[s("div",{staticClass:"search-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text",placeholder:"搜索歌曲、歌手",bindinput:t.changinput,eventid:"0"},domProps:{value:t.value},on:{input:function(e){e.target.composing||(t.value=e.target.value)}}})]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"search-empty ripple",attrs:{eventid:"1"},on:{click:t.empty}},[s("i",{staticClass:"flaticon-close"})],1)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:""===t.value,expression:"value === ''"}],staticClass:"shortcut-wrapper"},[s("h3",[t._v("热门搜索")]),t._v(" "),s("div",{staticClass:"shortcut"},t._l(t.shortcthot,function(e,a){return s("div",{key:a,staticClass:"shortcut-item",attrs:{eventid:"2-"+a},on:{click:function(s){t.SelectShortct(e.first)}}},[s("span",[t._v(t._s(e.first))])])}))],1),t._v(" "),s("music-list",{attrs:{songs:t.songs,mpcomid:"0"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading"})],1)},staticRenderFns:[]};e.a=a},"r/9Q":function(t,e,s){"use strict";var a=s("gyMJ"),n=s("0xDb"),i=s("yf6o");e.a={components:{MusicList:i.a},data:function(){return{rank:[],shortcthot:[],value:"",songs:[],loading:!1}},mounted:function(){var t=this;this.$watch("value",Object(n.c)(function(e){t.value=e,t.loading=!0,t.endsearch()},300)),Object(a.n)().then(function(e){t.shortcthot=e.hots})},methods:{SelectShortct:function(t){this.value=t},empty:function(){this.value=""},changinput:function(t){},endsearch:function(){var t=[];""!==this.value&&(Object(a.m)(this.value).then(function(e){e.forEach(function(e){Object(a.h)(e.id).then(function(e){t.push(Object(n.b)(e[0]))})})}),this.songs=t,this.loading=!1)}}}}},["1kNa"]);