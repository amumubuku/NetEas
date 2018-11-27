const getters = {
  playlist: state => state.playlist,
  personalizeds: state => state.des,
  currentIndex: state => state.songIndex,
  currentSong: state => state.playlist[state.songIndex],
  playing: state => state.playing
}
export default getters
