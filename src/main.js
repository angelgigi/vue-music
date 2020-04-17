// The Vue build version to load with the `import` command
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'

import 'common/stylus/index.styl'

fastclick.attach(document.body);

Vue.use(vueLazyLoad,{
  loading:require('common/image/default.png')
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})
