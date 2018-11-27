<template>
  <div class="music-list">
    <div class="music-top">
      <img :src="personalizeds.picUrl" alt="">
      <p>{{personalizeds.name}}</p>
    </div>
    <music-list :songs="songs"></music-list>
    <div class="loading" v-show="!songs.length"></div>
  </div>
</template>
<script>
import { CreateSongs } from '@/utils/index'
import { getpersonalized } from '@/api/index'
import { mapGetters} from 'vuex'
import MusicList from '@/components/musicdetail'
export default {
  computed: {
    ...mapGetters(['personalizeds'])
  },
  data() {
    return {
      songs: []
    }
  },
  components: {
    MusicList
  },
  methods: {
    createSong(musicdata) {
      let res = []
      musicdata.forEach(element => {
        res.push(CreateSongs(element))
      })
      this.songs = res
    },
    personalized() {
      wx.setNavigationBarTitle({
        title: this.personalizeds.description
          ? this.personalizeds.description
          : ''
      })
      getpersonalized(this.personalizeds.id).then(res => {
        this.createSong(res.tracks)
      })
    }
  },
  mounted() {
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
</style>
