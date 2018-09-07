<template>
  <div class="player-detail">
    <div class="background">
      <img :src="currentSong.image" alt="">
    </div>
    <div class="player-hender">
      <p>{{currentSong.name}}</p>
      <p class="player-singer">{{currentSong.singer}}</p>
    </div>
    <div class="player-wrapper">
      <div class="player-cd">
         <img :src="currentSong.image" alt=""> 
      </div>
      <div class="Lyric">
        <p v-for="(item, index) in currentLyric.lines" :key="index" :class="{'current': currentLineNum === index}">{{item.txt}}</p>
      </div>
    </div>
    <div class="player-buttom">
      <div class="buttom-hender"></div>
      <div class="progress-bar-wrapper">
        <div class="progress-btn">
          <p>{{Time}}</p>
          <div class="progress-inner" id="box">
             <div class="progressBtn" :style="{ left: left + 'px' }" :animation="btn"></div>
             <progress :percent="percent" stroke-width="3" backgroundColor="#888" activeColor="#ff3326"/>
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
          <i class="flaticon-pause"></i>
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
      btnwidth: 0,
      currentLyric: '',
      playingLyric: '',
      currentLineNum: 0
    }
  },
  computed: {
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
    getLyric () {
      this.currentSong.getLyric().then(lyric => {
        if (lyric.length === 27) {
          this.playingLyric = lyric.slice(10)
          return
        }
        if (this.currentLyric === lyric) {
          return
        }
        this.currentLyric = new Lyric(lyric, this.handleLyric)
        this.currentLyric.play()
      }).catch(() => {
        this.currentLyric = null
        this.currentLineNum = 0
        this.playingLyric = ''
      })
    },
    next () {
      let currentIndex
      if (this.currentIndex >= this.playlist.length) {
        currentIndex = 0
        this.setPlayindex(currentIndex)
        return
      }
      currentIndex++
      this.setPlayindex(currentIndex)
    },
    prve () {
      let currentIndex
      if (this.currentIndex === 0) {
        currentIndex = this.playlist.length
        this.setPlayindex(currentIndex)
        return
      }
      currentIndex--
      this.setPlayindex(currentIndex)
    },
    changplaying () {
      this.setplaying(!this.playing)
    },
    handleLyric ({lineNum, txt}) {
      this.currentLineNum = lineNum
      if (lineNum > 5) {
      } else {
      }
      this.playingLyric = txt
    },
    ...mapMutations({
      setplayid: 'SET_PLAYID',
      setPlayindex: 'SET_CURRENT_INDEX',
      setplaying: 'SET_PLAYING'
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
      let play = this.currentSong
      this.percent = 0
      this.left = 0
      this.duration = play.duration / 1000
      this.dt = this.format(this.duration)
      this.backgroundAudioManager.title = play.name
      this.backgroundAudioManager.epname = play.name
      this.backgroundAudioManager.singer = play.singer
      this.backgroundAudioManager.coverImgUrl = play.image
      this.backgroundAudioManager.src = play.url
    },
    offset (percent) {
      var that = this
      if (!that.btnwidth > 0) {
        this.query = wx.createSelectorQuery()
        this.query.select('#box').boundingClientRect(function (rect) {
          that.btnwidth = rect.width
        }).exec()
      }
      that.left = percent * (that.btnwidth - 4)
    }
  },
  onLoad () {
    this.backgroundAudioManager = wx.getBackgroundAudioManager()
    this.backgroundAudioManager.onTimeUpdate(e => {
      this.currentTime = this.backgroundAudioManager.currentTime
      this.Time = this.format(this.currentTime)
    })
    this.backgroundAudioManager.onPlay(e => {
    })
  },
  watch: {
    playing (newplaying, old) {
      newplaying ? this.backgroundAudioManager.play() : this.backgroundAudioManager.pause()
    },
    currentSong (newSong, oldSong) {
      this.play()
      this.getLyric()
    },
    currentTime (newTime, oldtime) {
      this.percent = newTime / this.duration * 100
      this.offset(newTime / this.duration)
    }
  }
}
</script>

<style>
.current {
  color: #fff;
  font-size: 14px;
  line-height: 17px;
}
.Lyric p {
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #666;
}
.Lyric {
  width: 100%;
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
  height: 67%;
  width: 100%;
  margin: 0 auto;
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
.operators .player-icon > .flaticon-pause::before {
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
