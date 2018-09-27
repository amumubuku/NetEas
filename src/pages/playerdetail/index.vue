<template>
  <div class="player-detail">
    <div class="background">
      <img :src="currentSong.image" alt="">
    </div>
    <div class="player-hender">
      <p>{{currentSong.name}}</p>
      <p class="player-singer">{{currentSong.singer}}</p>
    </div>
    <div class="player-wrapper" @touchstart="Touchstart" @touchend="TouchEnd" @click="toggleying">
      <div class="player-cd" v-show="toggleplaying">
         <img :src="currentSong.image" alt=""> 
      </div>
      <scroll-view class="scroll-lyric" scroll-y style="width: 100%;height:100%" :scroll-into-view="scroll_id" scroll-with-animation="true" v-show="!toggleplaying">
        <div class="Lyric">
          <p v-for="(item, index) in currentLyric.lines" :key="index" :class="{'current': currentLineNum === index}" :id="scroll + index">{{item.txt}}</p>
        </div>
      </scroll-view>
    </div>
    <div class="player-buttom">
      <div class="buttom-hender">
        <div class="comment"><div class="comment-icon" @click="opencomment"><i class="flaticon-menu"></i></div></div>
      </div>
      <div class="progress-bar-wrapper">
        <div class="progress-btn">
          <p>{{Time}}</p>
          <div class="progress-inner" >
             <div class="progressBtn" :style="{ left: left + 'px' }" :animation="btn"></div>
             <progress @click="seek" :percent="percent" stroke-width="3" backgroundColor="#888" activeColor="#ff3326" id="box"/>
          </div>
          <p>{{dt}}</p>
        </div>
      </div>
      <div class="operators">
        <div class="player-icon">
          <i class="flaticon-loop"></i>
        </div>
        <div class="player-icon" @click="pevr">
          <i class="flaticon-next-1"></i>
        </div>
        <div class="player-icon" @click="changplaying">
          <i :class="playicon"></i>
        </div>
        <div class="player-icon" @click="next">
          <i class="flaticon-next"></i>
        </div>
        <div class="player-icon">
          <i class="flaticon-list"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations, mapGetters} from 'vuex'
import Lyric from 'lyric-parser'
const btnWidht = 6
export default {
  components: {
  },
  data () {
    return {
      rank: [],
      currentTime: 0,
      duration: 0,
      percent: 0,
      left: 0,
      btn: {},
      dt: 0,
      Time: 0.00,
      query: '',
      progressWidth: 0,
      currentLyric: '',
      playingLyric: '',
      currentLineNum: 0,
      scroll_id: 'scroll0',
      scroll: 'scroll',
      offLeft: 0,
      currentScroll: false,
      toggleplaying: false
    }
  },
  computed: {
    playicon () {
      return this.playing ? 'flaticon-pause' : 'flaticon-play-button'
    },
    taggle: function () {
      return {
      }
    },
    ...mapGetters([
      'playlist',
      'currentIndex',
      'currentSong',
      'playing'
    ])
  },
  methods: {
    toggleying () {
      this.toggleplaying = !this.toggleplaying
    },
    opencomment () {
      this.setcomment(this.currentSong.id)
      const url = '../comment/main'
      wx.navigateTo({ url })
    },
    Touchstart (e) {
      this.currentScroll = true
    },
    TouchEnd (e) {
      this.currentScroll = false
    },
    seek (e) {
      this.touch.percent = (e.touches[0].pageX - this.offLeft - btnWidht) / this.progressWidth
      let startTime = this.touch.percent * this.duration
      this.backgroundAudioManager.seek(startTime)
      this.currentLyric.seek(startTime * 1000)
    },
    getLyric () {
      this.currentSong.getLyric().then(lyric => {
        this.currentLyric = new Lyric(lyric, this.handleLyric)
        this.currentLyric.play()
        let play = this.currentSong
        this.percent = 0
        this.left = 0
        this.duration = play.duration / 1000
        this.dt = this.format(this.duration)
        this.backgroundAudioManager.title = play.name
        this.backgroundAudioManager.name = play.name
        this.backgroundAudioManager.singer = play.singer
        this.backgroundAudioManager.coverImgUrl = play.image
        this.backgroundAudioManager.src = play.url
      }).catch(() => {
        this.currentLyric = null
        this.currentLineNum = 0
        this.playingLyric = ''
      })
    },
    next () {
      let index = 0
      if (this.currentIndex >= this.playlist.length) {
        index = 0
        this.setPlayindex(index)
        return
      }
      this.setPlayindex(index + 1)
    },
    prve () {
      let index = 0
      if (this.currentIndex === 0) {
        index = this.playlist.length
        this.setPlayindex(index)
        return
      }
      index--
      this.setPlayindex(index)
    },
    changplaying () {
      this.setplaying(!this.playing)
    },
    handleLyric ({lineNum, txt}) {
      this.currentLineNum = lineNum
      if (lineNum > 6 && this.currentScroll) {
        return
      } else {
        this.scroll_id = this.scroll + (lineNum - 5)
      }
      this.playingLyric = txt
    },
    ...mapMutations({
      setplayid: 'SET_PLAYID',
      setPlayindex: 'SET_CURRENT_INDEX',
      setplaying: 'SET_PLAYING',
      setcomment: 'SET_COMMENTID'
    }),
    format (interval) {
      interval = interval | 0
      const minute = interval / 60 | 0
      const second = this._pad(interval % 60)
      return `${minute}:${second}`
    },
    _pad (num, n = 2) {
      let len = num.toString().length
      while (len < n) {
        num = '0' + num
        len++
      }
      return num
    },
    play () {
      this.setplaying(!this.playing)
      this.getLyric()
    },
    offset (percent) {
      var that = this
      if (!that.progressWidth > 0) {
        this.query = wx.createSelectorQuery()
        this.query.select('#box').boundingClientRect(function (rect) {
          that.progressWidth = rect.width - rect.left
          that.offLeft = rect.left + 12
        }).exec()
      }
      that.left = percent * (that.progressWidth - btnWidht)
    }
  },
  created () {
    this.touch = {}
    this.backgroundAudioManager = wx.getBackgroundAudioManager()
    this.backgroundAudioManager.onTimeUpdate(e => {
      this.currentTime = this.backgroundAudioManager.currentTime
      this.Time = this.format(this.currentTime)
    })
    this.backgroundAudioManager.onPlay(e => {
    })
    this.backgroundAudioManager.onEnded(e => {
      this.next()
    })
  },
  watch: {
    playing (newplaying, old) {
      newplaying ? this.backgroundAudioManager.play() : this.backgroundAudioManager.pause()
    },
    currentSong (newSong, oldSong) {
      if (newSong === oldSong) {
        return
      }
      if (this.currentLyric) {
        this.scroll_id = 'scroll0'
        this.currentLyric.stop()
      }
      this.play()
    },
    currentTime (newTime, oldtime) {
      this.percent = newTime / this.duration * 100
      this.offset(newTime / this.duration)
    }
  }
}
</script>
<style>
.flaticon-menu::before {
  color: #fff
}
#box {
  padding: 4px;
  position: relative;
  top:-3px;
  left: 0;
}
.current {
  color: #fff;
  font-size: 13px;
}
.scroll-lyric {
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #666;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}
.player-cd {
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 80%;
}
.progressBtn {
  width: 11px;
  height: 11px;
  background-color: #fff;
  position: absolute;
  top: -3px;
  left: 0;
  border-radius: 50%; 
  z-index: 1;
}
.progressBtn::before {
  content: '';
  width: 9px;
  height: 9px;
  background-color: red;
  border-radius:50%; 
}
.background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: .6;
  -webkit-filter: blur(20px);
  filter: blur(20px);
}
.background img {
  height: 100%;
  width: 100%;
}
.player-detail {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #222;
}
.player-hender {
  font-size: 12px;
  text-align: center;
  color: #fff;
  margin-bottom: 32px;
}
.player-singer {
  font-size: 10px;
  color: #ccc;
}
.player-wrapper {
  height: 72%;
  width: 100%;
  margin: 0 auto;
  position: relative;
}
.player-wrapper img {
  position: absolute;
  left: 10%;
  top: 0;
  width: 80%;
  box-sizing: border-box;
  height: 100%;
  border-radius: 50%;
}
.operators {
  width: 100%;
  display: flex;
  height: 56%;
  justify-content: center;
  align-content: center;
}
.operators .player-icon  {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.operators .player-icon > i::before {
  position: relative;
  left: -12px;
  color: #fff;
  font-size: 20px;
}
.operators .player-icon > .flaticon-pause::before .flaticon-play-button::before {
  font-size: 24px;
}
.operators .player-icon > i {
  height: 34px;
  width: 34px;
}
.progress-bar-wrapper {
  height: 18%;
  margin: 0 12px;
  position: relative;
}
.buttom-hender {
 height: 26%;
}
.player-buttom {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 18%;
}
.inner-item {
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 3px;
}
.progress-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  color: #fff;
}
.progress-inner {
  flex: 1;
  height: 4px;
  margin: 0 6px;
  border-radius: 3px;
  position: relative;
}
</style>
