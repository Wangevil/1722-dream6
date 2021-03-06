// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@/assets/css/reset.css'
import 'swiper/dist/css/swiper.css'
import store from '@/store/'
import '@/assets/iconfont/iconfont/iconfont.css'

FastClick.attach(document.body)
Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
const bus = new Vue()
Vue.prototype.$bus = bus
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
