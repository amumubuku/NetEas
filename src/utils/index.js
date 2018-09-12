import {Lyric} from '@/api/index'
function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}
export default class Song {
  constructor ({ id, singer, name, image, duration }) {
    this.id = id
    this.singer = singer
    this.name = name
    this.duration = duration
    this.image = image
    this.url = `http://music.163.com/song/media/outer/url?id=${id}.mp3 `
  }
  getLyric () {
    if (this.Lyric) {
      return Promise.resolve(this.Lyric)
    }
    return new Promise((resolve, reject) => {
      Lyric(this.id).then(res => {
        this.Lyric = res
        resolve(res)
      })
    })
  }
}
export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${year}年${month}月${day}日 ${t2}`
}
function filetsinger (singer) {
  let ret = []
  if (!singer) {
    return ''
  } else {
    singer.forEach((item, index) => {
      ret.push(item.name)
    })
  }
  return ret.join('/')
}
export function CreateSongs (data) {
  return new Song({
    id: data.id,
    singer: filetsinger(data.artists),
    name: data.name,
    image: data.album.picUrl,
    duration: data.duration
  })
}
export function Songsdetail (data) {
  return new Song({
    id: data.id,
    singer: data.al.name,
    name: data.name,
    image: data.al.picUrl,
    duration: data.dt
  })
}
export function dobounce (fuc, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fuc.apply(this, args)
    }, delay)
  }
}
export function format (interval) {
  interval = interval | 0
  const minute = interval / 60 | 0
  const second = _pad(interval % 60)
  return `${minute}:${second}`
}
function _pad (num, n = 2) {
  let len = num.toString().length
  while (len < n) {
    num = '0' + num
    len++
  }
  return num
}
