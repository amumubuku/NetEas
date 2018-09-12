<template>
  <div class="container">
   <div class="header">
     <div class="menu">
       <div class="menu-box ripple">
         <i class="flaticon-menu-options"></i>
       </div>
     </div>
     <div class="content">
       <div class="tab-box">
         <div class="my ripple" @click="changIndex(0)" :class="{ active: activeIndex === 0}">
           <i class="flaticon-musical-note"></i>
        </div>
        <div class="home ripple"  @click="changIndex(1)" :class="{ active: activeIndex === 1}">
          <i class="flaticon-5b77b6a5cfe0a"  ></i>
        </div>
        <div class="video ripple" @click="changIndex(2)" :class="{ active: activeIndex === 2}">
          <i class="flaticon-social-media" ></i>
        </div>
       </div>
     </div>
     <div class="search" @click="search">
       <div class="search-box ripple">
         <i class="flaticon-search"></i>
       </div>
     </div>
   </div>
   <div class="tabs">
    <swiper :current="activeIndex" :duration="300" @change="Change" class="swiper">
      <swiper-item class="swiper-item">
        <view><my></my></view>
      </swiper-item>
      <swiper-item class="swiper-item">
          <home></home>
          <div class="nav-box">
            <div class="nav-item">
              <div class="item-top"></div>
              <p>私人FM</p>
            </div>
            <div class="nav-item">
              <div class="item-top"></div>
              <p>每日推荐</p>
            </div>
            <div class="nav-item">
              <div class="item-top"></div>
              <p>歌单</p>
            </div>
            <div class="nav-item" @click="rank">
              <div class="item-top"></div>
              <p>排行榜</p>
            </div>
          </div>
          <h3>推荐歌单 <i class="flaticon-right-arrow"></i></h3>
          <div class="recommend">
            <div class="recommend-item" v-for="(item, index) in recommend" :key="index" @click="handercilik(item)">
              <i class="playCount">{{item.playCount}}万</i>
              <img :src="item.picUrl" alt="">
              <p>{{item.name}}</p>
            </div>
          </div>
      </swiper-item>
      <swiper-item class="swiper-item">
        <view><mv :index="activeIndex"></mv></view>
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
   <div class="loading" v-show="!recommend"></div>
  </div>
</template>
<script>
import {recommned} from '@/api/index.js'
import {mapMutations, mapGetters} from 'vuex'
import home from '@/components/home'
import my from '@/components/my'
import mv from '@/components/mvdetail'
export default {
  data () {
    return {
      slideOffset: 0,
      activeIndex: 1,
      sliderWidth: 96,
      contentHeight: 0,
      recommend: [],
      scroll: true,
      musicshow: false,
      playid: 0,
      picUrl: '',
      name: ''
    }
  },
  components: {
    home,
    mv,
    my
  },
  computed: {
    playicon () {
      return this.playing ? 'flaticon-pause' : 'flaticon-play-button'
    },
    taggle: function () {
      return {
      }
    },
    ...mapGetters([
      'playlist',
      'currentIndex',
      'currentSong',
      'playing'
    ])
  },
  methods: {
    next () {
      this.setPlayindex(this.currentIndex + 1)
    },
    search () {
      const url = '../search/main'
      wx.navigateTo({ url })
    },
    ...mapMutations({
      setplayid: 'SET_PLAYID',
      setPlayindex: 'SET_CURRENT_INDEX'
    }),
    rank () {
      const url = '../rank/main'
      wx.navigateTo({ url })
    },
    handercilik (item) {
      let data = {
        id: item.id,
        picUrl: item.picUrl,
        name: item.name,
        description: item.copywriter
      }
      this.setplayid(data)
      const url = '../musiclist/main'
      wx.navigateTo({ url })
    },
    playerdetail () {
      const url = '../playerdetail/main'
      wx.navigateTo({ url })
    },
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    changIndex (index) {
      this.activeIndex = index
    },
    Change (e) {
      this.activeIndex = e.target.current
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
    // login().then(res => {
    //   console.log(res)
    // })
    // phoneLogin().then(res => {
    //   console.log(res)
    // })
    recommned().then(res => {
      let data = []
      res.forEach(element => {
        element.playCount = Math.floor(element.playCount / 10000)
        data.push(element)
      })
      this.recommend = data
      this.picUrl = res[0].picUrl
      this.name = res[0].name
    })
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
.flaticon-search::before,.flaticon-menu-options::before{
  position: absolute;
  top: 2px;
  left: -13px;
  font-size: 22px;
  color: #fff;
}
.flaticon-social-media,.flaticon-5b77b6a5cfe0a,.flaticon-musical-note {
  position: relative;
  left: -11px;
  top: 0;
}
.playCount {
  width: 100%;
  position: absolute;
  font-size: 11px;
  top: 4px;
  right: 2px;
  color: #fff;
  text-align: end;
  padding-right: 4px;
}
.mini-player-img {
  width: 12%;
  height: 100%;
  position: relative;
  margin: 0 auto;
  margin-left: 4px;
}
.mini-player-img img{
  height: 80%;
  width: 80%;
  display: table;
  align-items: center;
  position: absolute;
  top:50%;
  transform: translateY(-50%);
  margin: auto;
}
.mini-player-detail {
  flex: 1;
  height: 100%;
  font-size: 11px;
  display: flex;
  justify-content:center;
  flex-direction: column;
}
.flaticon-play-button, .flaticon-list {
  width: 50%;
  position: relative;
  
}
.flaticon-play-button::before, .flaticon-pause::before {
  font-size: 25px;
  margin:  0 auto;
  color: red;
}
.flaticon-list::before {
  font-size: 18px;
  margin: 0 auto;
  color: #222
}
.mini-player-icon {
  width: 18%;
  height: 100%;
  display: flex;
  justify-content:center;
  align-items:Center;
}
.flaticon-5b77b6a5cfe0a::before {
  font-size: 30px;
}
.flaticon-musical-note::before,.flaticon-social-media::before {
  font-size: 22px;
  position: relative;
  top: 4px;
}
.flaticon-musical-note::before {
 top: 3px;
}
.tabs {
  height: 100%;
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
.swiper-item {
  overflow: auto;
}
h3 {
  font-size: 13px;
  font-weight: 500;
  position: relative;
  left: 13px;
}
.flaticon-right-arrow::before{
  position: absolute;
  left:62rpx;
  top: 2px;
  font-size: 15px;
}
.header {
  height: 30px;
  background-color: #ff3326;
  width: 100%;
  display: flex;
}
.menu,.centent,.search {
  flex: 1;
  margin: 0 auto;
}
.menu {
  align-content: flex-start;
}
.search {
  align-content: flex-end;
}
.tab-box {
  display:flex;
  color: #ece0de;
  align-items:flex-start;
  justify-content: flex-start;
  margin: 0 auto;
  position: relative;
}
.tab-box div {
  flex: 1;
  height: 100%;
}
.active {
  color: #fff;
}
.nav-box {
  display: flex;
  align-content: center;
  justify-content:center; 
  width: 100%;
  position: relative;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px; 
  background-color:#fff;
  text-align: center;
  margin: 12px 0;
}
.nav-box .nav-item {
  flex: 1;
  color: black;
  font-size: 10px;
  display: flex;
  flex-direction: column;
  align-items: center
}
.item-top {
  border-radius: 50%;
  width: 38px;
  height: 38px;
  background-color: #ff3326;
}
.recommend {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content:center;
  margin-bottom: 60px;
}
.recommend-item {
  width: 30%;
  height: 110px;
  margin: 16px 2px;
  position: relative;
} 
.recommend img {
  width: 100%;
  height: 100%;
  border-radius: 6px; 
}
.recommend-item p {
  font-size: 11px;
  position: relative;
  top: -5px;
  line-height: 15px;
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
