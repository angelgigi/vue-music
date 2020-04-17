import storage from "good-storage"

const SEARCH_KEY = '__search__'
const SEARCH_MAX_LENGTH = 15

const PLAY_KEY = '__play__'
const PLAY_MAX_LENGTH = 200


function insertArray(arr,val,compare,maxlen){
  const index = arr.findIndex(compare)
  if(index === 0){
    return
  }
  if(index > 0){
    arr.splice(index,1)
  }
  arr.unshift(val)
  if(maxlen && arr.length > maxlen){
    arr.pop()
  }
}

export function saveSearch(query){
  let searches = storage.get(SEARCH_KEY,[])
  insertArray(searches,query, (item) =>{
    return item === query
  },SEARCH_MAX_LENGTH)
  storage.set(SEARCH_KEY,searches)
  return searches
}

//本地缓存中读取search
export function loadSearch(){
  return storage.get(SEARCH_KEY,[])
}

//删除一条数据
function deleteFromArray(arr,compare){
  const index = arr.findIndex(compare)
  if(index > -1){
    arr.splice(index,1)
  }
}

export function deleteSearch(query){
  let searches = storage.get(SEARCH_KEY,[])
  deleteFromArray(searches,(item) =>{
    return item === query
  })
  storage.set(SEARCH_KEY,searches)
  return searches
}

//清空缓存数据
export function clearSearch(){
  storage.remove(SEARCH_KEY)
  return []
}
//将歌曲数据保存到本地缓存
export function savePlay(song){
  let songs = storage.get(PLAY_KEY,[])
  insertArray(songs,song,(item) =>{
    return song.id === item.id
  },PLAY_MAX_LENGTH)
  storage.set(PLAY_KEY,songs)
  return songs
}
//从本地缓存中取出歌曲数据
export function loadPlay(){
  return storage.get(PLAY_KEY,[])
}

