<template>
  <div class="recommnedsongs">
    每日推荐
  </div>
</template>

<script>
import {getresource} from '@/api/index'
export default {
  components: {
  },
  data () {
    return {
      songs: []
    }
  },
  onLoad () {
    getresource().then(res => {
      this.songs = res
    })
  }
}
</script>

<style>
</style>
