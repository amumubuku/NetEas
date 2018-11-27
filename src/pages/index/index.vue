<template>
  <div class="container">
    <div class="header">
      <div class="menu">
        <div class="menu-box ripple">
          <i class="flaticon-menu-options"></i>
        </div>
      </div>
      <div class="tab-warpper">
        <div class="my ripple" @click="changIndex(0)" :class="{ active: activeIndex === 0}">
          <i class="flaticon-musical-note"></i>
        </div>
        <div class="home ripple" @click="changIndex(1)" :class="{ active: activeIndex === 1}">
          <i class="flaticon-5b77b6a5cfe0a"></i>
        </div>
        <div class="video ripple" @click="changIndex(2)" :class="{ active: activeIndex === 2}">
          <i class="flaticon-social-media"></i>
        </div>
      </div>
      <div class="search" @click="search">
        <div class="search-box ripple">
          <i class="flaticon-search"></i>
        </div>
      </div>
    </div>
    <div class="tabbar-wrapper">
      <swiper :current="activeIndex" :duration="300" @change="Change" class="swiper">
        <swiper-item>
          <scroll-view scroll-y style="height: 100%">
            <my />
          </scroll-view>
        </swiper-item>
        <swiper-item >
           <scroll-view scroll-y style="height: 100%">
             <home />
          </scroll-view>
        </swiper-item>
        <swiper-item >
           <scroll-view scroll-y style="height: 100%">
            <mv :index="activeIndex" />
          </scroll-view>
        </swiper-item>
      </swiper>
    </div>
    <div class="player" v-if="playlist.length > 1" @click="playerdetail">
      <div class="mini-player">
        <div class="mini-player-img">
          <img :src="currentSong.image" alt="">
        </div>
        <div class="mini-player-detail">
          <p>{{currentSong.name}}</p>
          <p>{{currentSong.singer}}</p>
        </div>
        <div class="mini-player-icon">
          <div class="player-stop " :class="playicon" @click="next">
          </div>
          <div class="player-list flaticon-list">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import Home from '@/components/home'
import My from '@/components/my'
import Mv from '@/components/mvdetail'
export default {
  data() {
    return {
      slideOffset: 0,
      activeIndex: 1,
      sliderWidth: 96,
      contentHeight: 0,
      scroll: true,
      musicshow: false,
      playid: 0,
      picUrl: '',
      name: ''
    }
  },
  components: {
    Home,
    Mv,
    My
  },
  computed: {
    playicon() {
      return this.playing ? 'flaticon-pause' : 'flaticon-play-button'
    },
    taggle: function() {
      return {}
    },
    ...mapGetters(['playlist', 'currentIndex', 'currentSong', 'playing'])
  },
  methods: {
    next() {
      this.setPlayindex(this.currentIndex + 1)
    },
    search() {
      const url = '../search/main'
      wx.navigateTo({ url })
    },
    rank() {
      const url = '../rank/main'
      wx.navigateTo({ url })
    },
    player() {
      const url = '../player/main'
      wx.navigateTo({ url })
    },
    changIndex(index) {
      this.activeIndex = index
    },
    Change(e) {
      this.activeIndex = e.target.current
    }
  }
}
</script>

<style scoped>
.search-box {
  width: 26px;
  height: 26px;
  position: absolute;
  right: 2px;
  top: 0;
  padding: 6px;
}
.menu-box {
  width: 26px;
  height: 26px;
  position: absolute;
  left: 2px;
  top: 0;
  padding: 6px;
}
.flaticon-search::before,
.flaticon-menu-options::before {
  position: absolute;
  top: 2px;
  left: -13px;
  font-size: 20px;
  color: #fff;
}
.flaticon-social-media,
.flaticon-5b77b6a5cfe0a,
.flaticon-musical-note {
  position: relative;
  left: -11px;
  top: 0;
}
.mini-player-img {
  width: 12%;
  height: 100%;
  position: relative;
  margin: 0 auto;
  margin-left: 4px;
}
.mini-player-img img {
  height: 80%;
  width: 80%;
  display: table;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
}
.mini-player-detail {
  flex: 1;
  height: 100%;
  font-size: 11px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.flaticon-play-button,
.flaticon-list {
  width: 50%;
  position: relative;
}
.flaticon-play-button::before,
.flaticon-pause::before {
  font-size: 25px;
  margin: 0 auto;
  color: red;
}
.flaticon-list::before {
  font-size: 18px;
  margin: 0 auto;
  color: #222;
}
.mini-player-icon {
  width: 18%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: Center;
}
.flaticon-5b77b6a5cfe0a::before {
  font-size: 30px;
}
.flaticon-musical-note::before,
.flaticon-social-media::before {
  font-size: 22px;
  position: relative;
  top: 4px;
}
.flaticon-musical-note::before {
  font-size: 20px;
}
.tabbar-wrapper {
  position: fixed;
  top: 37px;
  bottom: 0;
  width: 100%;
}
.box {
  height: 200px;
  width: 100px;
  background-color: red;
}
.swiper {
  height: 100%;
  height: 100%;
}
.flaticon-right-arrow::before {
  position: absolute;
  left: 62rpx;
  top: 2px;
  font-size: 15px;
}
.header {
  height: 37px;
  background-color: #ff3326;
  width: 100%;
  display: flex;
}
.menu,
.centent,
.search {
  flex: 1;
  margin: 0 auto;
  align-content: flex-end;
}
.menu {
  align-content: flex-start;
}
.tab-warpper {
  display: flex;
  color: #ece0de;
}
.tab-box div {
  flex: 1;
  height: 100%;
}
.active {
  color: #fff;
}
.mini-player {
  width: 100%;
  height: 46px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  border-top: 1px solid #888;
  display: flex;
}
</style>
