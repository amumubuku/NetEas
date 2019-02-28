<template>
  <div class="rank-wrapper">
    <h3>官方榜</h3>
    <div class="rank-item"
         v-for="(item, index) in rank"
         :key="index"
         @click="selectrank(item)">
      <div class="item-left">
        <img :src="item.coverImgUrl"
             alt="">
        <p>{{item.updateFrequency}}</p>
      </div>
      <ul class="item-right">
        <li v-for="(data, i) in item.tracks"
            :key="i"
            class="song">
          <span class="song-index">{{i + 1}}</span>
          <span class="song-name">{{data.first}} - {{data.second}}</span>
        </li>
      </ul>
    </div>
    <div class="loading"
         v-show="!rank.length"></div>
  </div>
</template>

<script>
import { rank } from '@/api/index'
import { mapMutations } from 'vuex'
export default {
  components: {},
  data () {
    return {
      rank: []
    }
  },
  methods: {
    ...mapMutations({
      setDes: 'SET_DES'
    }),
    selectrank (item) {
      let data = {
        id: item.id,
        picUrl: item.coverImgUrl,
        name: item.name,
        description: item.description
      }
      this.setDes(data)
      const url = '../musiclist/main'
      wx.navigateTo({ url })
    }
  },
  mounted () {
    rank().then(res => {
      this.rank = res
    })
  }
}
</script>

<style scoped>
.rank-item {
  display: flex;
  background-color: #fff;
  font-size: 12px;
  flex-flow: row nowrap;
  width: 100%;
  height: 100px;
  padding-top: 8px;
}
.item-left {
  margin: 6px 4px 0px 4px;
  flex: 0 0 75px;
}
.item-right {
  border-bottom: 1px solid #ccc;
  flex: 1;
  line-height: 22px;
  font-size: 12px;
  color: #444;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin-right: 18px;
  overflow: hidden;
}
.item-right .song {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.rank-item img {
  width: 78px;
  height: 78px;
  border-radius: 6px;
  margin: 0 2px;
}
h3 {
  font-size: 12px;
  font-weight: 600;
  color: #222;
}
.song-index {
  color: #ccc;
  margin: 0 4px;
}
</style>
