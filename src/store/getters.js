// import {normalSongs} from '../common/js/util'
export const singer = state => state.singer
export const playlist = state => state.playlist
export const currentIndex = state => state.currentIndex
export const currentSong = state => {
  return state.playlist[state.currentIndex] || {}
}
export const fullScreen = state => state.fullScreen
export const playing = state => state.playing
export const iscloselist = state => state.closelist
export const disc = state => state.disc
export const toplist = state => state.toplist
export const loadsearch = state => state.searchHitory
export const personalizeds = state => state.personalized
export const commentid = state => state.commentid
// export const loadplaylist = state => normalSongs(state.playHitory)
