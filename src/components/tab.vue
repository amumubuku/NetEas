<template>
  <div class="tabs">
    <swiper :current="activeIndex" :duration="300" :bindchange="bindChange">
      <swiper-item>
        <view>热门视频</view>
      </swiper-item>
      <swiper-item>
        <view>比赛集锦</view>
      </swiper-item>
      <swiper-item>
        <view>你懂专栏</view>
      </swiper-item>
      <swiper-item>
        <view>天下足球</view>
      </swiper-item>
    </swiper> 
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabs: tabs,
      slideOffset: 0,
      activeIndex: 0,
      sliderWidth: 96,
      contentHeight: 0
    }
  },
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
