<template>
  <div class="news">
  	<div class="n-new" v-for="item in news">
  		<a :href="item.href" title="">
  			<div class="flex-full">
  			<div class="dix">
  				<div class="imgs">
                    <img :src="item.url" alt="">
                </div>
                <h4>{{ item.title }}</h4>
  			</div>
  				<div class="ps">				
					{{ item.ps }}
  				</div>
  			</div>
  		</a>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      msg: 'news',
      props: ['hNews'],
      news: [
        {
            href: '#',
            url: require('./../../assets/images/news.jpg'),
            title: '专注品牌工业产品市场---Jelesion 捷利讯品牌工业产品渠道集成供应商',
            ps: 'Jelesion于2006年成立于深圳，从事品牌工业零部件领域产品的分销，其中品牌零部件占据了整个公司75%以上的销售额。在成立初期，Jelesion非常坚持走经营品牌产品这条路线。发展到2010年Jelesion成立了深圳市捷利讯工业器材有限公司，专注品牌工业产品渠道集成供应.'
        },
        {
            href: '#',
            url: require('./../../assets/images/news2.png'),
            title: '美国Heyco公司被PennEngineering公司收购',
            ps: 'PENNENGINEERING® ENTERS INTO AGREEMENT TO ACQUIRE HEYCO® PRODUCTS INC'
        },
        {
            href: '#',
            url: require('./../../assets/images/news3.jpg'),
            title: 'DISC-LOCK--安全车轮螺母为什么值得购买',
            ps: 'What is aDISC-LOCK Safety Wheel Nut?The DISC-LOCK Safety Wheel Nut is a vibration / shock proof locking nut for hub piloted wheels that does not back off. It st'
        },
        {
            href: '#',
            url: require('./../../assets/images/news.jpg'),
            title: '专注品牌工业产品市场---Jelesion 捷利讯品牌工业产品渠道集成供应商',
            ps: 'Jelesion于2006年成立于深圳，从事品牌工业零部件领域产品的分销，其中品牌零部件占据了整个公司75%以上的销售额。在成立初期，Jelesion非常坚持走经营品牌产品这条路线。发展到2010年Jelesion成立了深圳市捷利讯工业器材有限公司，专注品牌工业产品渠道集成供应.'
        },
        {
            href: '#',
            url: require('./../../assets/images/news2.png'),
            title: '美国Heyco公司被PennEngineering公司收购',
            ps: 'PENNENGINEERING® ENTERS INTO AGREEMENT TO ACQUIRE HEYCO® PRODUCTS INC'
        },
        {
            href: '#',
            url: require('./../../assets/images/news3.jpg'),
            title: 'DISC-LOCK--安全车轮螺母为什么值得购买',
            ps: 'What is aDISC-LOCK Safety Wheel Nut?The DISC-LOCK Safety Wheel Nut is a vibration / shock proof locking nut for hub piloted wheels that does not back off. It st'
        }

    ]
    }

  },
  mounted () {
    console.log(this.hNews)

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
