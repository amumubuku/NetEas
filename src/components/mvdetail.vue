<template>
  <div class="mv">
    <scroll-view class="scroll-view_H" scroll-y @scrolltolower="scrolltolower" style="width: 100%;height:100%">
       <div class="mv-detail">
         <div class="mv-item" v-for="(item, index) in mv" :key="index" @click="playmv(index)">
             <div class="mv-content">
                <video :src="item.brs[1080]" v-if="index === currentIndex" autoplay="autoplay"></video>
                <img :src="item.cover" alt="" v-if="index != currentIndex">
                <div class="video-detail">
                  <p class="playCount flaticon-next">{{item.playCount}}万</p>
                  <p class="duration flaticon-passage-of-time">{{item.duration}}</p>
                </div>
             </div>
             <div class="mv-bot">
               <p>{{item.name}} - {{item.artistName}}</p>
               <span class="likeCount flaticon-thumb-up">{{item.likeCount}}</span>
               <span class="flaticon-menu">{{item.subCount}}</span>
             </div>
         </div>
     </div>
   </scroll-view>
  </div>
</template>

<script>
import {Gettopmv, Getmvdetail} from '@/api/index'
import {format} from '@/utils/index'
export default {
  data () {
    return {
      mv: [],
      currentIndex: ''
    }
  },
  methods: {
    scrolltolower () {
      this.getmv()
    },
    playmv (index) {
      this.currentIndex = index
    },
    getmv () {
      let offset = this.mv.length / 10
      Gettopmv(offset).then(res => {
        res.forEach((element, index) => {
          Getmvdetail(element.id).then(res => {
            if (res.playCount > 10000) {
              res.playCount = Math.floor(res.playCount / 10000)
              res.duration = format(res.duration / 1000)
            }
            this.mv.push(res)
          })
        })
      })
    }
  },
  onLoad () {
    this.getmv()
  }
}
</script>

<style>
.mv {
  width: 100%;
  height: 100%;
  position: fixed;
}
.flaticon-next::before, .flaticon-passage-of-time::before {
  color: #fff;
  font-size: 13px;
  margin: 0 3px;
}
 .flaticon-thumb-up::before, .flaticon-menu::before {
  font-size: 15px;
  color: 333;
  margin: 0 4px;
}
.mv-bot {
  display: flex;
  margin: 0 6px;
}
.mv-bot p {
  flex: 1;
}
.mv-bot span {
  font-size: 11px;
  color: #666;
  margin-right: 4px;
}
.mv-content {
  height: 80%;
  position: relative;
  margin: 0 7px;
  border-radius: 4px; 
  margin-bottom: 10px;
}
.mv-item p {
  font-size: 13px;
  color: #444;
}
.mv-detail {
 position: absolute;
 width: 100%;
 height: 100%;
 background-color: #ccc;
 margin-bottom: 20%;
}
.mv-item {
  width: 100%;
  height: 37%;
  background-color: #fff;
}
.mv-detail video, .mv-detail img {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
}
.video-detail {
  display: flex;
  bottom: 6px;
  position: absolute;
  z-index: 1;
  width: 94%;
  margin-left: 2%
}
.video-detail p {
  color: #fff;
  font-size: 12px;
  flex: 1;
}
.duration {
  text-align: end;
}
</style>
