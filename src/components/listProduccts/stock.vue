<template>
  <div class="stock">
  	<div class="xiang">
		<h3>{{ xiang }}</h3> 		
		<div class="t-list">
			<ul>
				<li v-for="item in t_list">
					<a :href="item.url" title="">
						<div class="bor">
							<img :src="item.img" alt="">
						</div>
					</a>
				</li>
			</ul>
		</div>
  	</div>


  	<div class="xiang2">
		<h3>{{ xiang2 }}</h3> 

		<div class="t-list2">
			<ul>
				<li v-for="item in t_list2">
					<a :href="item.url" title="">
						<div class="bor">
							<div class="img">
								<img :src="item.img" alt="">
							</div>
							<h5>{{ item.title }}</h5>
						</div>
						
					</a>
				</li>
			</ul>
		</div>		
		
  	</div>
  </div>
</template>

<script>
export default {
  name: 'stock',
  data () {
    return {
      msg: '库存产品111',
      xiang: '相关品牌',
      xiang2: '产品列表',
      t_list: [
      	{	url: '#',
      		img: require('./../../assets/images/plist1.png')
      	},
      	{	url: '#',
      		img: require('./../../assets/images/plist2.png')
      	},
      	{	url: '#',
      		img: require('./../../assets/images/plist3.png')
      	},
      	{	url: '#',
      		img: require('./../../assets/images/plist1.png')
      	},
      	{	url: '#',
      		img: require('./../../assets/images/plist2.png')
      	},
      	{	url: '#',
      		img: require('./../../assets/images/plist3.png')
      	},
      	{	url: '#',
      		img: require('./../../assets/images/plist1.png')
      	},
      	{	url: '#',
      		img: require('./../../assets/images/plist2.png')
      	},
      	{	url: '#',
      		img: require('./../../assets/images/plist3.png')
      	},
      	{	url: '#',
      		img: require('./../../assets/images/plist1.png')
      	},
      	{	url: '#',
      		img: require('./../../assets/images/plist2.png')
      	},
      	{	url: '#',
      		img: require('./../../assets/images/plist3.png')
      	},
      	{	url: '#',
      		img: require('./../../assets/images/plist1.png')
      	},
      	{	url: '#',
      		img: require('./../../assets/images/plist2.png')
      	},
      	{	url: '#',
      		img: require('./../../assets/images/plist3.png')
      	},
      	{	url: '#',
      		img: require('./../../assets/images/plist1.png')
      	},
      	{	url: '#',
      		img: require('./../../assets/images/plist2.png')
      	},
      	{	url: '#',
      		img: require('./../../assets/images/plist3.png')
      	}
      ],
      t_list2: [
    	{
    		url: '#',
    		img: require('./../../assets/images/plist1.png'),
    		title: '发顺丰发GV爱的色'
    	},
    	{
    		url: '#',
    		img: require('./../../assets/images/plist2.png'),
    		title: '发顺丰发GV爱的色'
    	},
    	{
    		url: '#',
    		img: require('./../../assets/images/plist3.png'),
    		title: '发顺丰发GV爱的色'
    	},
    	{
    		url: '#',
    		img: require('./../../assets/images/plist1.png'),
    		title: '发顺丰发GV爱的色'
    	},
    	{
    		url: '#',
    		img: require('./../../assets/images/plist2.png'),
    		title: '发顺丰发GV爱的色'
    	},
    	{
    		url: '#',
    		img: require('./../../assets/images/plist3.png'),
    		title: '发顺丰发GV爱的色'
    	},
    	{
    		url: '#',
    		img: require('./../../assets/images/plist1.png'),
    		title: '发顺丰发GV爱的色'
    	},
    	{
    		url: '#',
    		img: require('./../../assets/images/plist2.png'),
    		title: '发顺丰发GV爱的色'
    	}
    ]

    }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">

  
</style>
