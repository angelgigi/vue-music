<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>
<script type="text/ecmascript-6">
import { mapGetters } from "vuex";
import { getSingerDetail ,getMusic} from "api/singer";
import { ERR_OK } from "api/config";
import { createSong } from "common/js/song";
import MusicList from "components/music-list/music-list";

export default {
  data() {
    return {
      songs: []
    };
  },
  computed: {
    title() {
      return this.singer.name;
    },
    bgImage() {
      return this.singer.avatar;
    },
    ...mapGetters(["singer"])
  },
  created() {
    this._getDetail();
  },
  methods: {
    _getDetail() {
      if (!this.singer.id) {
        this.$router.push("/singer");
        return;
      }
      getSingerDetail(this.singer.id).then(res => {
        if (res.code === ERR_OK) {
          this.songs = this._normallizeSongs(res.data.list);
        }
      });
    },
     _normallizeSongs(list){
         let ret = []  //返回值
         list.forEach((item) => {
            let {musicData} = item   //得到music对象
            //console.log(musicData)
            //createSong必传两个参数
            if(musicData.songid && musicData.albummid){  
              // console.log(getMusic(musicData.songmid))
               getMusic(musicData.songmid).then((res) => {
                  if(res.code === ERR_OK){
                     //console.log(res.data)
                     const svkey = res.data.items
                     const songVkey = svkey[0].vkey
                     //console.log(svkey)
                     ret.push(createSong(musicData, songVkey))
                  }
               })
            }
         })
         // console.log(ret)
         return ret
      }
  },
  components: {
    MusicList
  }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s;
}

.slide-enter, .slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>

