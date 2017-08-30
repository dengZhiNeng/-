<template>
  <div class="customer">
  	<div class="lists">
  		<ul>
        <li><router-link to="/customer/customer2">客户中心</router-link></li>
  			<li><router-link to="/customer/problem">常见问题</router-link></li>
  			<li><router-link to="/customer/star">客户之星</router-link></li>
  		</ul>
  	</div>
  	<div class="keepL">
    <transition name="fade" mode="out-in">
  		<keep-alive>
    	   <router-view></router-view>
        </keep-alive>
    </transition>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'Customer',
  data () {
    return {
      msg: '客户中心1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .fade-enter-active {
  transition: all .2s ease;
}
.fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
