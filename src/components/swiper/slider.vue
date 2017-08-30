<template>
  <div class="slider">
    <div class="sliderp">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in sliderMM">
                    <a :href="item.mmUrl" title="">
                        <div class="img">
                            <img :src="item.mmImage" alt="">
                        </div>
                        <p>{{ item.mmP1 }}</p>
                        <p>{{ item.mmp2 }}</p>
                        <p>{{ item.mmp3 }}</p>
                        <div class="img2">
                            <img :src="item.mmImage2" alt="">
                        </div>
                    </a>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'slider',
  data () {
    return {
      msg: 'slider',
      sliderMM: [
        {
            mmUrl: '/',
            mmImage: require('./../../assets/images/slider1.jpg'),
            mmP1: '飞盒飞机制造',
            mmp2: '陈总',
            mmp3: '捷利讯是个非常务实的团队，他们做的事情很有用，能帮我们省下每年几十万的飞机零部件采购成本。',
            mmImage2: require('./../../assets/images/kh_by.png')
        },
        {
            mmUrl: '/',
            mmImage: require('./../../assets/images/slider2.jpg'),
            mmP1: '珠海海卫飞机制造',
            mmp2: '陈总',
            mmp3: '高效、专业的一站式服务，成为我们飞机制造的好伙伴',
            mmImage2: require('./../../assets/images/kh_by.png')
        },
        {
            mmUrl: '/',
            mmImage: require('./../../assets/images/slider3.jpg'),
            mmP1: '珠海海卫飞机制造',
            mmp2: '陈总',
            mmp3: '高效、专业的一站式服务，成为我们飞机制造的好伙伴',
            mmImage2: require('./../../assets/images/kh_by.png')
        },
        {
            mmUrl: '/',
            mmImage: require('./../../assets/images/slider4.jpg'),
            mmP1: '珠海海卫飞机制造',
            mmp2: '陈总',
            mmp3: '高效、专业的一站式服务，成为我们飞机制造的好伙伴',
            mmImage2: require('./../../assets/images/kh_by.png')
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">
.slider {
  h1 {
    width: 100%;
    font-size: 0.3rem;
  }
}
  
</style>
