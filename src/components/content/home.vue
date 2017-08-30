<template>
  <div class="home">
    <!-- Swiper -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in banner">
                <a :href="item.bannerUrl" title=""><img :src="item.bannerImg" alt=""></a>
            </div>
        </div>
        <!-- Add Pagination -->
       <!--  <div class="swiper-pagination"></div> -->
    </div>

    <div class="titleImg"></div>

    <div class="h-products">
        <ul>
            <li v-for="item in hProducts">
                <a :href="item.hProductsUrl" title="">
                    <div class="imgs"><img :src="item.hProductsImG" alt=""></div>
                    <h3>{{ item.hProductsTitle }}</h3>
                </a>
            </li>
        </ul>
    </div>

    <div class="titleImg2"></div>

    <div class="h-news">
        <ul>
            <li v-for="item in hNews">
                <a :href="item.url" title="">
                    <div class="text">
                        {{ item.text }}
                    </div>
                    <div class="time">
                        {{ item.time }}
                    </div>
                </a>
            </li>
        </ul>
    </div>

    <div class="titleImg3"></div>


    <div class="pppImg">
        <img :src="pppImg" alt="">
    </div>

    <div class="titleImg4"></div>

    <div class="nwsSwiper">
        <SwiperT></SwiperT>
    </div>
    
  </div>
</template>

<script>
import SwiperT from './../swiper/slider'


import News from './../content/news'
export default {
  name: 'home',
  components: { SwiperT , News },
  data () {
    return {
      msg: '',
      pppImg: require('./../../assets/images/zl_bg.png'),
      banner : [
        {
            bannerUrl: 'www.baidu.com',
            bannerImg: require('./../../assets/images/banner.jpg')
        },
        {
            bannerUrl: '#',
            bannerImg: require('./../../assets/images/banner2.jpg')
        },
        {
            bannerUrl: '#',
            bannerImg: require('./../../assets/images/banner3.jpg')
        }
      ],
      hProducts: [
        {
            hProductsUrl: "/",
            hProductsImG: require('./../../assets/images/s1.png'),
            hProductsTitle: "机械动力及工具"
        },
        {
            hProductsUrl: "/",
            hProductsImG: require('./../../assets/images/s2.png'),
            hProductsTitle: "流体及过滤装置"
        },
        {
            hProductsUrl: "/",
            hProductsImG: require('./../../assets/images/s3.png'),
            hProductsTitle: "电子及电气自动化"
        },
        {
            hProductsUrl: "/",
            hProductsImG: require('./../../assets/images/s4.png'),
            hProductsTitle: "设备及零部件"
        },
      ],
      hNews: [
        {   
            url: "/",
            text: "发GV大神范德萨日嘎是通过啊set啊set",
            time: "2131"
        },
        {   
            url: "/",
            text: "哥啊阿瑟风格阿萨德 feast热爱上突然发色通过个",
            time: "dfqw"
        },
        {
            url: "/",
            text: "人生更合适的人阿尔突然他人 给杀掉他色让他死",
            time: "vbdfsv"
        },
        {
            url: "/",
            text: "黑白色人工湖ear问题给他安慰她安慰她啊",
            time: "bfgbf"
        },
        {
            url: "/",
            text: "好水调歌头啊set个图儿童阿尔山个大神啊十多个阿瑟",
            time: "bgfb"
        },
        {
            url: "/",
            text: "放大镜V型从V型从咋都是 发个啥的烦人的事防守打法阿斯顿发阿瑟",
            time: "sxv"
        },
        {
            url: "/",
            text: "东方红单方事故撒旦法沙发沙发撒旦法士大夫地方白癜风",
            time: "vsdv"
        },
        {
            url: "/",
            text: "好男人个人头阿尔阿尔我燃烧过大神的感受",
            time: "vsv"
        }
      ]
    }
  },
  mounted () {
    this.slider();

  },
  methods: {
    slider () {
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        loop: true
    });
    }



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">

  
</style>
