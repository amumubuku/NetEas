<template>
  <div class="my">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
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
</style>
