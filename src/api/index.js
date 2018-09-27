const host = 'https://api.mtnhao.com'
const code = 200
export function banner () {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + '/banner',
      success: function (res) {
        if (!res.data.code === code) {
          return
        }
        resolve(res.data.banners)
      }
    })
  })
}
export function recommned () {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + '/personalized',
      success: function (res) {
        if (!res.data.code === code) {
          return false
        }
        resolve(res.data.result)
      }
    })
  })
}
export function getpersonalized (id) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + `/playlist/detail?id=${id}`,
      success: function (res) {
        if (!res.data.code === code) {
          return false
        }
        resolve(res.data.result)
      }
    })
  })
}
export function getaudioUrl (id) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + `/music/url?id=${id}`,
      success: function (res) {
        if (!res.data.code === code) {
          return false
        }
        resolve(res.data.data)
      }
    })
  })
}
export function rank (id) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + `/toplist/detail`,
      success: function (res) {
        if (!res.data.code === code) {
          return false
        }
        resolve(res.data.list)
      }
    })
  })
}
export function recommnedsongs () {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + '/recommend/songs',
      success: function (res) {
        if (!res.data.code === code) {
          return false
        }
        resolve(res.data.result)
      }
    })
  })
}
export function getresource () {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + '/recommend/resource',
      success: function (res) {
        if (!res.data.code === code) {
          return false
        }
        resolve(res.data.result)
      }
    })
  })
}
export function shortcut () {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + '/search/hot',
      success: function (res) {
        if (!res.data.code === code) {
          return false
        }
        resolve(res.data.result)
      }
    })
  })
}
export function search (keywords) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + '/search?keywords=' + keywords,
      success: function (res) {
        if (!res.data.code === code) {
          return false
        }
        resolve(res.data.result.songs)
      }
    })
  })
}
export function getsongdetail (songid) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + '/song/detail?ids=' + songid,
      success: function (res) {
        if (!res.data.code === code) {
          return false
        }
        resolve(res.data.songs)
      }
    })
  })
}
export function phoneLogin (phone, pass) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + `/login/cellphone?phone=${phone}&password=${pass}`,
      success: function (res) {
        if (!res.data.code === code) {
          return false
        }
        resolve(res.data)
      }
    })
  })
}
export function emailLogin (email, pass) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + `/login?email=${email}&password=pass`,
      success: function (res) {
        if (!res.data.code === code) {
          return false
        }
        resolve(res.data)
      }
    })
  })
}
export function Gettopmv (offset = 0, limit = 10) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + '/top/mv?limit=' + limit + `&offset=${offset}`,
      success: function (res) {
        if (!res.data.code === code) {
          return false
        }
        resolve(res.data.data)
      }
    })
  })
}
export function Getmvdetail (mvid) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + '/mv?mvid=' + mvid,
      success: function (res) {
        if (!res.data.code === code) {
          return false
        }
        resolve(res.data.data)
      }
    })
  })
}
export function Lyric (id) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + '/lyric?id=' + id,
      success: function (res) {
        if (!res.data.code === code) {
          return false
        }
        resolve(res.data.lrc.lyric)
      }
    })
  })
}
export function suggest (keywords) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + '/search/suggest?keywords=' + keywords,
      success: function (res) {
        // if (!res.data.code === code) {
        //   return false
        // }
        resolve(res.data)
      }
    })
  })
}
export function comment (songid, offset = 1) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + `/comment/music?id=${songid}&limit=10&offset=${offset}`,
      success: function (res) {
        if (!res.data.code === code) {
          return false
        }
        resolve(res.data)
      }
    })
  })
}
export function userplaylist (userid) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + `/user/playlist?uid=${userid}`,
      success: function (res) {
        if (!res.data.code === code) {
          return false
        }
        resolve(res.data.playlist)
      }
    })
  })
}
export function userdetail (userid) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + `/user/detail?uid=${userid}`,
      success: function (res) {
        if (!res.data.code === code) {
          return false
        }
        resolve(res.data.playlist)
      }
    })
  })
}
