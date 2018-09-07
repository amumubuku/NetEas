<template>
  <div class="box-swiper">
    <swiper :current="activeIndex" :duration="300" :indicator-dots="showdots" :autoplay="autoplay" :indicator-color="color" :indicator-active-color="activecolor" :circular="circular" >
      <swiper-item v-for="(item, index) in swiper" :key="index">
          <img :src="item.picUrl" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {banner, recommned} from '@/api/index.js'
export default {
  data () {
    return {
      swiper: [],
      showdots: true,
      autoplay: true,
      color: '#D7E2D6',
      activecolor: '#ff3326',
      circular: true,
      recommend: []
    }
  },
  created () {
    banner().then(res => {
      this.swiper = res
    })
    recommned().then(res => {
      this.recommend = res
    })
  }
}
</script>

<style>
.card {
  padding: 10px;
}
img {
    width: 100%;
    height: 100%;
}
.nav {
  display: flex;
  align-content: center;
  justify-content:center; 
  width: 100%;
  height: 38px;
  background-color: blue;
  z-index: 999;
}
.nav .nav-item {
  flex: 1;
  background-color: red;
  margin:  0 6px;
  color: black
}
</style>
