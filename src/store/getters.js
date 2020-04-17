import { stat } from "fs"

//数据映射
export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList.slice()

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

export const currentSong = (state) =>{
  return state.playlist[state.currentIndex] || {} //获取不到则为空
}

export const disc = state => state.disc

export const topList = state => state.topList

export const searchHistory = state => state.searchHistory

export const playHistory = state => state.playHistory
