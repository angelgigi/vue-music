import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'

//jsonp抓取数据 
export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platfrom: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getDiscList() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

/* export function getSongList (disstid) {
  const url = '/api/getSongList'

  const data = Object.assign({}, commonParams, {
    g_tk:1928093487,
    disstid, //关键数据
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    needNewCode:0
})
 return axios.get(url, {
  params: data
 }).then((res) => {
   console.log(res.data)
    return Promise.resolve(res.data)
 })
} */
export function getSongList (disstid) {
  const url = '/api/getSongList'

  const data = Object.assign({}, commonParams, {
    uin: 0,
    format: 'json',
    notice: 0,
    needNewCode: 1,
    new_format: 1,
    pic: 500,
    disstid, //关键数据
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    picmid: 1,
    nosign: 1,
    song_begin: 0,
    platform: 'h5',
    song_num: 100,
    _: +new Date()
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

