import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  state: {
    playlist: [],
    currentSong: [],
    playing: false,
    des: [],
    songIndex: -1
  },
  mutations: {
    SET_PLAYLIST: (state, playlist) => {
      state.playlist = playlist.list
      state.songIndex = playlist.index
    },
    SET_DES: (state, arr) => {
      state.des = arr
    },
    SET_SONGINDEX: (state, numder) => {
      state.songIndex = numder
    },
    SET_PLAYING: (state, flg) => {
      state.playing = flg
    }
  },
  actions: {
  }
})

export default store
