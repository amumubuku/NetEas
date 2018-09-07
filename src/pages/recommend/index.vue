<template>
  <div class="recommnedsongs">
    每日推荐
  </div>
</template>

<script>
import {recommnedsongs} from '@/api/index'
export default {
  components: {
  },
  data () {
    return {
      songs: []
    }
  },
  onLoad () {
    recommnedsongs().then(res => {
      this.songs = res
    })
  }
}
</script>

<style>
</style>
