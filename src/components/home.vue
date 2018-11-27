<template>
    <div class="homo-warpper">
        <banner />
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
            <div class="recommend-item" v-for="(item, index) in recommend" :key="index" @click="handerPlaylist(item)">
                <i class="playCount">{{item.playCount}}万</i>
                <img :src="item.picUrl" alt="">
                <p>{{item.name}}</p>
            </div>
        </div>
         <div class="loading" v-show="!recommend.length"></div>
    </div>
</template>

<script>
import { recommned } from '@/api/index.js'
import {mapMutations, mapGetters} from 'vuex'
import Banner from '@/components/banner'
export default {
  name: 'Home',
  components: {
    Banner
  },
  data () {
    return {
      recommend: []
    }
  },
  methods: {
     ...mapMutations({
      setDes: 'SET_DES'
    }),
    handerPlaylist(item) {
      let data = {
        id: item.id,
        picUrl: item.picUrl,
        name: item.name,
        description: item.description
      }
      this.setDes(data)
      const url = '../musiclist/main'
      wx.navigateTo({ url })
    },
    rank () {
      const url = '../rank/main'
      wx.navigateTo({ url })
    }
  },
  mounted () {
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
.tab-box {
  display: flex;
  color: #ece0de;
  align-items: flex-start;
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
  justify-content: center;
  width: 100%;
  position: relative;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
  background-color: #fff;
  text-align: center;
  margin: 12px 0;
}
.nav-box .nav-item {
  flex: 1;
  color: black;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav-box .nav-item p {
 line-height: 22px;
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
  justify-content: center;
  margin-bottom: 6px;
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
</style>
