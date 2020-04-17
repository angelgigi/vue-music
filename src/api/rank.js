import jsonp from '@/common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'

export function getTopList() {
  const url = "https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg"

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    needNewcode: 1
  })
  return jsonp(url, data, options)
}

export function getMusicList(topid) {
  const url = '/api/getMusicList'

  const data = Object.assign({}, commonParams, {
    topid: topid,
    page: 'detail',
    type: 'top',
    tpl: 3,
    platform: 'h5',
    needNewcode: 1,
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
