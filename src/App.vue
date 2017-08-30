<style type="text/css" media="screen" src="./assets/css/reset.css"></style>
<template>
  <div id="app">
    <v-header></v-header>

    <transition name="fade" mode="out-in">
	    <keep-alive>
	    	<router-view></router-view>
	    </keep-alive>
    </transition>
    
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from './components/header/header'
import Footer from './components/footer/footer'


import axios from 'axios'

export default {
  name: 'app',
  components: { 'v-header':Header, 'v-footer': Footer },
  mounted () {
    this.get();


  },
  methods: {
    get() {
      axios.get('http://192.168.100.6:8000/dd.json').then(function (res) {
        console.log(res)
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>

<style>
	.fade-enter-active {
  transition: all .2s ease;
}
.fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
