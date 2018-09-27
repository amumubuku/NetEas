<template>
  <div class="my-content">
    <div class="my-background">
    </div>
    <div class="user-detail">
      <div class="user-head-image"></div>
      <div class="user-name"></div>
    </div>
   <div class="user-song">
     <div class="my-item">
     <div class="item-icon">
       <i class="flaticon-musical-note"></i>
     </div>
     <div class="item-detail">本地音乐</div>
   </div>
   <div class="my-item">
     <div class="item-icon">
       <i class="flaticon-heart"></i>
     </div>
     <div class="item-detail">我喜欢的</div>
   </div>
      <div class="my-item">
     <div class="item-icon">
       <i class="flaticon-passage-of-time"></i>
     </div>
     <div class="item-detail">最近播放</div>
   </div>
   <div class="songlist">
     <div><i class="flaticon-right-arrow"></i></div>
     <div class="songname">创建的歌单({{songlist.length + 1}})</div>
     <div><i class="flaticon-settings"></i></div>
   </div>
   <div class="user-song-item">
     <div class="song-item" v-for="(item, index) in songlist" :key="index" @click="handercilik(item)">
       <div class="song-left">
         <img :src="item.coverImgUrl" alt="">
       </div>
       <div class="song-right">
         <div class="song-detail">
          <p>{{item.name}}</p>
          <p>{{item.trackCount}}</p>
         </div>
         <div>
           <i class="flaticon-more"></i>
         </div>
       </div>
     </div>
   </div>
   <div class="songlist">
     <div><i class="flaticon-right-arrow"></i></div>
     <div class="songname">收藏的歌单({{Collectionsong.length + 1}})</div>
     <div><i class="flaticon-settings"></i></div>
   </div>
   <div class="user-collectionsong">
     <div class="song-item" v-for="(item, index) in Collectionsong" :key="index" @click="handercilik(item)">
       <div class="song-left">
         <img :src="item.coverImgUrl" alt="">
       </div>
       <div class="song-right">
         <div class="song-detail">
          <p>{{item.name}}</p>
          <p>{{item.trackCount}}</p>
         </div>
         <div>
           <i class="flaticon-more"></i>
         </div>
       </div>
     </div>
   </div>
   </div>
  </div>
</template>

<script>
import {userplaylist} from '@/api/index'
import {mapMutations} from 'vuex'
export default {
  data () {
    return {
      songlist: [],
      Collectionsong: [],
      userid: 454819620
    }
  },
  methods: {
    ...mapMutations({
      setplayid: 'SET_PLAYID'
    }),
    handercilik (item) {
      console.log(item)
      let data = {
        id: item.id,
        picUrl: item.coverImgUrl,
        name: item.name,
        description: item.description
      }
      this.setplayid(data)
      const url = '../musiclist/main'
      wx.navigateTo({ url })
    }
  },
  created () {
    userplaylist(this.userid).then(res => {
      res.forEach(element => {
        if (element.userId === this.userid) {
          this.songlist.push(element)
        } else {
          this.Collectionsong.push(element)
        }
      })
    })
  }
}
</script>
<style>
.user-song {
  margin-top: 26px;
}
.user-detail {
  position: absolute;
  width: 96%;
  height: 56px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow:0px 5px 20px #9E9597;
  top: 6px;
  left: 2%;
}
.song-left {
  height: 100%;
  width: 40px;
  margin: 0 12px;
  display: flex;
  align-items: center;
}
.song-left > img {
  width: 40px;
  height: 40px;
  border-radius: 6px;
}
.song-right {
 height: 100%;
 flex: 1;
 display: flex;
 font-size: 12px;
 border-bottom: 1px solid #888; 
}
.song-right .song-detail {
  flex: 1;
  display: flex;
  align-items: center;
}
.song-right div {
  height: 100%;
  width: 40px;
}
.song-item {
  display: flex;
  height: 48px;
  width: 100%;
  background-color: #fff;
}
.songlist {
  height: 22px;
  width: 100%;
  background-color: #c0c0c0;
  font-size: 12px;
  display: flex;
  position: relative;
  align-items: center;
}
.songlist div {
  width: 20px;
  height: 100%;
}
.songname {
  flex: 1;
  line-height: 22px;
}
.my-item {
  height: 42px;
  width: 100%;
  display: flex;
  font-size: 12px;
  align-items: center;
}
.item-icon {
  height: 100%;
  width: 40px;
}
.item-icon > .flaticon-musical-note::before, .flaticon-heart::before, .flaticon-passage-of-time::before{
  position: relative;
  font-size: 20px;
  left: -12px;
  top: 10px;
  color: #ff3326
}
.item-detail {
  flex: 1;
  border-bottom: 1px solid #c0c0c0;
  line-height: 42px;
}
.flaticon-right-arrow::before {
  font-size: 12px;
  position: absolute;
  top: 6px;
  left: -15px;
}
.flaticon-settings::before {
  font-size: 12px;
  position: absolute;
  top: 6px;
  right: 8px;
}
.flaticon-more::before {
  position: relative;
  top: 17px;
}
.my-background {
 width: 100%;
 height: 40px;
 background-color: #ff3326;
}
.my-content {
  width: 100%;
  height: 100%;
}
</style>
