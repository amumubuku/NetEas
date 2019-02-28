<template>
  <div class="music-detail">
    <div class="detail-item ripple"
         v-for="(item, index) in songs"
         :key="index"
         @click="play(index)">
      <div class="detail-left">{{index + 1}}</div>
      <div class="detail-right">
        <p>{{item.name}}</p>
        <p class="singer">{{item.singer}}</p>
        <i class="flaticon-more"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'MusicList',
  props: {
    songs: {
      tyep: Array,
      default: []
    }
  },
  methods: {
    ...mapMutations({
      setPlaylist: 'SET_PLAYLIST'
    }),
    play (index) {
      const url = '../player/main'
      this.setPlaylist({
        list: this.songs,
        index: index
      })
      wx.navigateTo({ url })
    }
  }
}
</script>

<style>
.music-detail {
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}
.detail-item {
  display: flex;
  width: 100%;
  line-height: 24px;
  font-size: 12px;
  position: relative;
  justify-content: center;
  align-items: center;
}
.detail-left {
  width: 6%;
  color: #d2d6d6;
  text-align: center;
  padding: 0 3px;
}
.detail-right {
  border-bottom: 1px solid rgb(233, 234, 235);
  flex: 1;
  margin-top: 3px;
}
.detail-right .flaticon-more {
  position: absolute;
  right: 6px;
  top: 14px;
  color: #c9c4c4;
}
.singer {
  color: #aaa2a2;
  font-size: 11px;
}
.flaticon-more::before {
  font-size: 14px;
}
</style>
