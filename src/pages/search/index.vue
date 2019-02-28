<template>
  <div class="search">
    <div class="search-wrapper">
      <div class="search-input">
        <input type="text" placeholder="搜索歌曲、歌手"  :bindinput="changinput" v-model="value">
      </div>
      <div class="search-empty ripple" @click="empty" v-show="value">
        <i class="flaticon-close"></i>
      </div>
    </div>
    <div class="shortcut-wrapper" v-show="value === ''">
      <h3>热门搜索</h3>
      <div class="shortcut">
        <div class="shortcut-item" v-for="(item, index) in shortcthot" :key="index" @click="SelectShortct(item.first)">
          <span>{{item.first}}</span>
        </div>
      </div>
    </div>
    <music-list :songs="songs"></music-list>
    <div class="loading" v-show="loading"></div>
  </div>
</template>

<script>
import {shortcut, search, getsongdetail} from '@/api/index'
import {Songsdetail, dobounce} from '@/utils/index'
import MusicList from '@/components/music-list'
export default {
  components: {
    MusicList
  },
  data () {
    return {
      rank: [],
      shortcthot: [],
      value: '',
      songs: [],
      loading: false
    }
  },
  mounted () {
    this.$watch('value', dobounce((newVal) => {
      this.value = newVal
      this.loading = true
      this.endsearch()
    }, 300))
    shortcut().then(res => {
      this.shortcthot = res.hots
    })
  },
  methods: {
    SelectShortct (value) {
      this.value = value
    },
    empty () {
      this.value = ''
    },
    changinput (e) {
    },
    endsearch () {
      let data = []
      if (this.value === '') {
        return
      }
      search(this.value).then(res => {
        res.forEach(element => {
          getsongdetail(element.id).then(res => {
            data.push(Songsdetail(res[0]))
          })
        })
      })
      this.songs = data
      this.loading = false
    }
  }
}
</script>

<style>
.search-empty {
  position: absolute;
  right: 13px;
  height: 20px;
  width: 20px;
  top: 1px;
  padding: 8px;
  border-radius: 50%;
  z-index: 1;
}
.flaticon-close::before {
  font-size: 14px;
  color: #fff;
  position: absolute;
  top: 8px;
  left: -12px;
}
.search-input {
 height: 36px;
 width: 100%;
 background-color: #ff3326;
}
.search-wrapper {
  width: 100%;
  margin-bottom: 16px;
  position: relative;
}
input {
  height: 83%;
  width: 100%;
  margin: 0 22px;
  margin-right: 6px;
  font-size: 13px;
  line-height: 14px;
  border: 0;
  border-bottom: 1px solid rgb(230, 214, 214);
  color: #fff;
}
h3 {
  font-size: 10px;
  color: #c0c0c0;
  margin-left: 12px;
}
.shortcut {
  display: flex;
  font-size: 12px;
  align-items: center;
  align-content: center;
  justify-items: inherit;
  flex-flow: wrap;
}
.shortcut-item {
  line-height: 28px;
  text-align: center;
  padding: 0 8px;
  margin: 4px 7px;
  border: 1px solid #ccc;
  border-radius: 14px;
  font-size: 10px;
  color: #222;
}
</style>
