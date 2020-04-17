import {playMode} from 'common/js/config'
import {loadSearch,loadPlay} from 'common/js/cache'

const state = {
    singer:{},
    playing:false,//播放状态   
    fullScreen:false, //播放器展开方式：全屏或收起
    playlist:[], //播放列表
    sequenceList:[], //顺序列表
    mode:playMode.sequence,//播放模式: 顺序、循环、随机
    currentIndex:-1,
    disc:{},
    topList:{}, //排行榜详情页
    searchHistory:loadSearch(),
    playHistory:loadPlay()
}

export default state