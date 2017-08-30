<template>
  <div class="products">
    <div class="p-list">
         <ul>
             <li><router-link to="/products/recommend">推荐品牌</router-link></li>
             <li><router-link to="/products/listproduct">全部品牌</router-link></li>
             <li><router-link to="/products/whole">产品分类</router-link></li>
             <li><router-link to="/products/stock">库存产品</router-link></li>
             <li><router-link to="/products/solve">解决方案</router-link></li>
         </ul>
    </div>



    <div>
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
  name: 'products',
  data () {
    return {
      msg: 'products'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">
  .fade-enter-active {
  transition: all .2s ease;
}
.fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
  
</style>
