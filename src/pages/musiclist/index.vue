<template>
  <div class="music-list">
    <navigation-bar :title="personalizeds.des"></navigation-bar>
    <div class="music-top">
      <img :src="personalizeds.picUrl"
           alt="">
      <p>{{personalizeds.name}}</p>
    </div>
    <div class="playall"
         @click="playall">
      <div class="play-icon ">
        <i class="flaticon-play-button"></i>
      </div>
      <div class="play-list">播放全部<span>(共{{songs.length}}首)</span>
      </div>
    </div>
    <music-list :songs="songs"></music-list>
    <div class="loading"
         v-show="!songs.length"></div>
  </div>
</template>
<script>
import { CreateSongs } from '@/utils/index'
import { getpersonalized } from '@/api/index'
import { mapGetters, mapMutations } from 'vuex'
import MusicList from '@/components/music-list'
import NavigationBar from '@/components/navigation-bar'
export default {
  computed: {
    ...mapGetters(['personalizeds'])
  },
  data () {
    return {
      songs: []
    }
  },
  components: {
    MusicList,
    NavigationBar
  },
  methods: {
    ...mapMutations({
      setPlaylist: 'SET_PLAYLIST'
    }),
    personalized () {
      getpersonalized(this.personalizeds.id).then(res => {
        let result = []
        res.tracks.forEach(element => {
          result.push(CreateSongs(element))
        })
        this.songs = result
      })
    },
    playall () {
      const url = '../player/main'
      this.setPlaylist({
        list: this.songs,
        index: 1
      })
      wx.navigateTo({ url })
    }
  },
  mounted () {
    this.songs = []
    wx.setNavigationBarTitle({
      title: this.personalizeds.des
    })
    this.personalized()
  }
}
</script>
<style scoped>
.music-list {
  background-color: #fff;
  position: absolute;
  width: 100%;
  height: 100%;
}
.music-top {
  font-size: 14px;
  color: #fff;
  width: 100%;
  height: 32%;
  background-image: linear-gradient(180deg, #898994 0%, #cebeb8 100%);
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.music-top img {
  width: 98px;
  height: 98px;
  border-radius: 4px;
  position: relative;
  left: 4%;
  margin-right: 7%;
}
.playall {
  display: flex;
  height: 36px;
  line-height: 36px;
  width: 100%;
  flex-flow: row nowrap;
  border-radius: 6px;
  font-size: 14px;
  color: #000;
  align-items: center;
  text-align: center;
}
.play-icon {
  text-align: center;
}
.playall span {
  color: #cebeb8;
  font-size: 12px;
}
</style>
