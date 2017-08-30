<template>
  <div class="slider2">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in slder">
                <div class="img">
                    <img :src="item.img"   alt="">
                </div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.p1 }}</p>
                <div class="as">
                    <a :href="item.url" title="">{{ item.as }}</a>
                </div>
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'slider',
  data () {
    return {
      msg: 'slider',
      slder: [
        {
            url: '#',
            img: require('./../../assets/images/jx4.png'),
            title: '减速箱',
            p1: '产品品牌',
            as: '详细查询'
        },
        {
            url: '#',
            img: require('./../../assets/images/jx5.png'),
            title: '减速箱',
            p1: '产品品牌',
            as: '详细查询'
        },
        {
            url: '#',
            img: require('./../../assets/images/jx1.png'),
            title: '减速箱',
            p1: '产品品牌',
            as: '详细查询'
        },
        {
            url: '#',
            img: require('./../../assets/images/jx2.png'),
            title: '减速箱',
            p1: '产品品牌',
            as: '详细查询'
        },
        {
            url: '#',
            img: require('./../../assets/images/jx3.png'),
            title: '减速箱',
            p1: '产品品牌',
            as: '详细查询'
        }
      ]
    }
  },
  mounted () {
    this.slider2()
  },
  methods: {
    slider2 () {
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 20,
        grabCursor: true,
        loop: true
    });
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">



</style>
