<template>
  <div class="rank">
    <h3>官方榜</h3>
    <div class="rank-item" v-for="(item, index) in rank" :key="index" @click="selectrank(item)">
      <div class="item-left">
        <img :src="item.coverImgUrl" alt="">
        <p>{{item.updateFrequency}}</p>
      </div>
      <div class="item-right">
        <ul>
          <li v-for="(data, i) in item.tracks" :key="i">
            <span class="song-index">{{i + 1}}</span>
            <span class="song-name">{{data.first}} - {{data.second}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="loading" v-show="rank.length < 0"></div>
  </div>
</template>

<script>
import {rank} from '@/api/index'
import {mapMutations} from 'vuex'
export default {
  components: {
  },
  data () {
    return {
      rank: []
    }
  },
  methods: {
    ...mapMutations({
      setplayid: 'SET_PLAYID'
    }),
    selectrank (item) {
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
  onLoad () {
    rank().then(res => {
      this.rank = res
    })
  }
}
</script>

<style>
.rank-item {
  display: flex;
  position: relative;
  background-color: #fff;
  font-size: 11px;
}
.item-left {
  margin: 6px 4px 0px 4px ;
}
.item-right {
  border-bottom: 1px solid #ccc;
  flex: 1;
  padding-bottom: 20px;
  margin: auto 0;
  line-height: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #666;
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
