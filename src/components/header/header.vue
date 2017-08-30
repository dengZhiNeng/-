<template>
  <div id="header">
      <div class="logo">
          <a href="/" title=""><img :src="logo" alt=""></a>
      </div>

      <div class="nav" @click="show = !show">
          <span><i class="iconfont icon-iconfontzuoshangjiaotubiao"></i></span>

          <transition name="fade">
            <div class="list" v-if="show">
              <ul>
                <li><router-link to="/home"><i class="iconfont icon-shouye"></i>首页</router-link></li>
                <li><router-link to="/products"><i class="iconfont icon-chanpin"></i>产品及解决方案</router-link></li>
                <li><router-link to="/motion"><i class="iconfont icon-jixieqimo"></i>机械动力及工具</router-link></li>
                <li><router-link to="/automation"><i class="iconfont icon-dianzi"></i>电子及电气自动化</router-link></li>
                <li><router-link to="/parts"><i class="iconfont icon-pinpai"></i>品牌零部件</router-link></li>
                <li><router-link to="/about"><i class="iconfont icon-guanyuwomen"></i>关于我们</router-link></li>
                <li><router-link to="/news"><i class="iconfont icon-xinwenzhongxin"></i>新闻中心</router-link></li>
                <li><router-link to="/customer"><i class="iconfont icon-kehuzhongxin"></i>客户中心</router-link></li>
                <li><router-link to="/serviceFlow"><i class="iconfont icon-z104"></i>服务流程</router-link></li>
                <li><router-link to="/afterSale"><i class="iconfont icon-shouhoufuwu"></i>售后服务</router-link></li>
                <li><router-link to="/terms"><i class="iconfont icon-shiyongtiaokuan"></i>使用条款</router-link></li>
              </ul>
            </div>
        </transition>
      </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'header',
      show: false,
      logo: require('./../../assets/images/logo.png')
    }
  }
}
</script>
  
<style scoped  lang="less">

.fade-enter-active {
  transition: all .2s ease;
}
.fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(100%);
  opacity: 0;
}
  
</style>



