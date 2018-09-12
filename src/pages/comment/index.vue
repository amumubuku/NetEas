<template>
  <div class="comment">
    <scroll-view class="scroll-comment" scroll-y @scrolltolower="scrolltolower" style="width: 100%;height:100%">
    <div class="comment-song">
      <div class="song-left">
        <img :src="currentSong.image" alt="">
      </div>
      <div class="song-right">
        <p>{{currentSong.singer}}</p>
         <p class="song-name">{{currentSong.name}}</p>
      </div>
    </div>
    <h3 class="hot-comment">精彩评论</h3>
    <div class="comment-item" v-for="(item, index) in Hotcomments" :key="index">
      <div class="comment-hander">
        <div class="user-image"><img :src="item.user.avatarUrl" alt=""></div>
        <div class="user-detail">
          <p>{{item.user.nickname}}</p>
          <p class="time">{{item.time}}</p>
        </div>
        <div class="link-count ">
          <p v-if="item.likedCount != 0">{{item.likedCount}}</p>
          <i class="flaticon-thumb-up"></i>
        </div>
      </div>
      <div class="comment-content">
        <p>{{item.content}}</p>
      </div>
    </div>
     <h3 class="hot-comment">最新评论</h3>
    <div class="comment-item" v-for="(item, index) in comments" :key="index">
      <div class="comment-hander">
        <div class="user-image"><img :src="item.user.avatarUrl" alt=""></div>
        <div class="user-detail">
          <p>{{item.user.nickname}}</p>
          <p>{{item.time}}</p>
        </div>
        <div class="link-count ">
          <p v-if="item.likedCount === 0">{{item.likedCount}}</p>
           <i class="flaticon-thumb-up"></i>
        </div>
      </div>
      <div class="comment-content">
        <p>{{item.content}}</p>
        <div class="item-replied" v-for="(commentReplied, i) in item.beReplied" :key="i">
          <p class="nick-name">@{{item.user.nickname}}: </p>
          <p> {{commentReplied.content}}</p>
        </div>
      </div>
    </div>
   </scroll-view>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {comment} from '@/api/index'
import {formatTime} from '@/utils/index'
export default {
  components: {
  },
  computed: {
    ...mapGetters([
      'commentid',
      'currentSong'
    ])
  },
  data () {
    return {
      songs: [],
      total: 0,
      Hotcomments: [],
      comments: []
    }
  },
  methods: {
    scrolltolower () {
      this.getComment()
    },
    getComment () {
      let offset = this.comments.length / 10
      comment(this.currentSong.id, offset).then(res => {
        if (!this.Hotcomments.length > 0) {
          wx.setNavigationBarTitle({
            title: `评论(${res.total})`
          })
          res.hotComments.forEach(element => {
            element.time = formatTime(new Date(element.time))
            this.Hotcomments.push(element)
          })
        }
        res.comments.forEach(element => {
          element.time = formatTime(new Date(element.time))
          this.comments.push(element)
        })
      })
    }
  },
  onLoad () {
    this.getComment()
  },
  watch: {
    currentSong (newSong, oldSong) {
      this.Hotcomments = []
      this.comments = []
      this.getComment()
    }
  }
}
</script>
<style>
.item-replied {
  background-color: #fff;
  display: flex;
  margin: 4px 0;
  color: rgb(165, 158, 158)
}
.nick-name {
  color: rgb(36, 36, 143)
}
.comment-content {
  padding: 15px 0;
  margin-left: 38px;
  line-height: 17px;
  border-bottom: 1px solid red;
}
.link-count p {
  position: relative;
  left: 13px;
  top: 1px;
}
.link-count {
  display: flex;
}
.user-detail {
  flex: 1;
}
.comment-item {
  display: flex;
  flex-direction: column;
  background-color: #ccc;
  padding: 15px 4px 15px 13px;
}
.user-image {
  width: 30px;
  height: 30px;
  margin-right: 8px;
}
.user-image img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.comment-hander {
  display: flex
}
.comment-song {
  display: flex;
  width: 100%;
  height: 80px;
  font-size: 12px;
  align-items: center
}
.song-left {
  width: 56px;
  height: 56px;
  margin: 0 12px;
}
.song-left img {
  width: 100%;
  height: 100%;
  border-radius:5px; 
}
.song-right {
  flex: 1;
}
.song-name {
  color: #888
}
.comment {
  background-color: #fff;
  font-size: 12px;
  position: fixed;
  width: 100%;
  height: 100%;
}
.hot-comment {
  background-color: #999;
  font-size: 11px;
  padding: 5px 0;
}
.time {
  font-size: 11px;
  line-height: 14px;
}
.flaticon-thumb-up::before {
  top: 0;
  left: 0;
  font-size: 12px;
  color: #444;
}
</style>
