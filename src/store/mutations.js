import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  },
  [types.SET_PLAYLIST] (state, {list, index}) {
    state.playlist = list
    state.currentIndex = index
  },
  [types.ADD_PLAYLIST] (state, song) {
    state.playlist.unshift(song)
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  },
  [types.SET_FULLSCREEN] (state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAYING] (state, flag) {
    state.playing = flag
  },
  [types.SET_ISCLOSELIST] (state, flag) {
    state.closelist = flag
  },
  [types.SET_DISC] (state, disc) {
    state.disc = disc
  },
  [types.SET_TOPLIST] (state, list) {
    state.toplist = list
  },
  [types.SET_SEARCH_HITORY] (state, hitory) {
    state.searchHitory = hitory
  },
  [types.SET_PLAYLIST_HITORY] (state, hitory) {
    state.playHitory = hitory
  },
  [types.SET_PLAYID] (state, item) {
    state.personalized = item
  }
}
export default mutations
