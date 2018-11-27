<template>
  <div class="box-swiper">
    <swiper style="height: 175px;" :current="activeIndex" :duration="300" :indicator-dots="showdots" :autoplay="autoplay" :indicator-color="color" :indicator-active-color="activecolor" :circular="circular" >
      <swiper-item v-for="(item, index) in swiper" :key="index">
          <img :src="item.picUrl" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {banner} from '@/api/index.js'
export default {
  name: 'Banner',
  data () {
    return {
      swiper: [],
      activeIndex: 0,
      showdots: true,
      autoplay: true,
      color: '#000',
      activecolor: '#ff3326',
      circular: true
    }
  },
  mounted () {
    banner().then(res => {
      this.swiper = res
    })
  }
}
</script>

<style>

img {
    width: 100%;
  height: 100%;
}
</style>
