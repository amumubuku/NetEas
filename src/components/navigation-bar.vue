<template>
  <div class="nvaigation-warpper"
       :style="{height: navInfo.h + 'px', paddingTop: navInfo.pt + 'px', lineHeight:navInfo.pt + 'px' }">
    <div class="nvaigation-hender">
      <div class="nvaigation-back"
           @click="back">
        <i class="flaticon-down-arrow"></i>
      </div>
      <div class="hender-detail">
        <p>歌单</p>
        <p class="nvaigation-title">{{title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  props: {
    title: {
      tyep: String,
      default: ''
    }
  },
  data () {
    return {
      navInfo: {}
    }
  },
  methods: {
    back () {
      wx.navigateBack({
        delta: 1
      })
    }
  },
  mounted () {
    let systemInfo = wx.getSystemInfoSync()
    let reg = /ios/i
    this.navInfo.pt = systemInfo.statusBarHeight
    if (reg.test(systemInfo.system)) {
      this.navInfo.h = 44
    } else {
      this.navInfo.h = 48
    }
    console.log(this.navInfo)
  }
}
</script>

<style scoped>
.nvaigation-warpper {
  position: fixed;
  top: 0px;
  width: 100%;
}
.back {
  padding: 6px;
}
.nvaigation-hender {
  display: flex;
  flex-flow: row nowrap;
}
.hender-detail p {
  font-size: 14px;
  color: #fff;
}
.hender-detail .nvaigation-title {
  font: 12px;
  color: #c0c0c0;
  line-height: 14px;
}
</style>
