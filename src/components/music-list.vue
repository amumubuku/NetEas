<template>
  <div class="music-list">
      <div class="music-top">
          <img :src="personalizeds.picUrl" alt="">
          <p>{{personalizeds.name}}</p>
      </div>
      <musicdetail :songs="MusicData"></musicdetail> 
      <div class="loading" v-show="MusicData.length < 1"></div>
  </div>
</template>
<script>
import {CreateSongs} from '@/utils/index'
import {getpersonalized} from '@/api/index'
import {mapGetters} from 'vuex'
import musicdetail from '@/components/musicdetail'
export default {
  computed: {
    ...mapGetters([
      'personalizeds',
      'currentIndex',
      'currentSong'
    ])
  },
  components: {
    musicdetail
  },
  data () {
    return {
      MusicData: []
    }
  },
  methods: {
    createSong (musicdata) {
      let res = []
      musicdata.forEach(element => {
        res.push(CreateSongs(element))
      })
      this.MusicData = res
      return false
    },
    personalized () {
      wx.setNavigationBarTitle({
        title: this.personalizeds.description ? this.personalizeds.description : ''
      })
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#898994',
        animation: {
          duration: 200,
          timingFunc: 'easeIn'
        }
      })
      getpersonalized(this.personalizeds.id).then(res => {
        this.createSong(res.tracks)
      })
    }
  },
  onLoad () {
    this.MusicData = []
    this.personalized()
  }
}
</script>
<style>
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
 background-image: linear-gradient(180deg, #898994 0%, #CEBEB8 100%);
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
</style>
