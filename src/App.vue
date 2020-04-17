<template>
  <div id="app">
    <mheader></mheader>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script type="text/ecmascript-6">
  import Mheader from 'components/m-header/m-header.vue'
  import Tab from 'components/tab/tab' //"Tab" class大写
  import Player from 'components/player/player'
  export default {
    components: {
      Mheader,
      Tab,
      Player
    }
  }
</script>
<style lang="stylus" scoped rel="stylesheet/stylus"></style>

<style lang="stylus" scoped>
  rel=""
</style>



