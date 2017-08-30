// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'swiper/dist/css/swiper.css'
import router from './router'

require('./assets/js/rem.js')
require('./assets/css/header.less')
require('./assets/css/iconfont.css')

require('swiper')


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})





router.afterEach(function () {
	document.documentElement.scrollTop = 0;
})