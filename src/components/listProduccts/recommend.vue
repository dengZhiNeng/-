<template>
  <div class="recommend">
  	<div class="flex-full">
  		<ul>
  			<li v-for="item in plist">
  				<a :href="item.listUrl" title="">
  					<div class="pimg">
  						<img :src="item.pimg" alt="">
  					</div>
  					<h3>{{ item.title }}</h3>
  				</a>
  			</li>
  		</ul>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  data () {
    return {
      msg: '推荐品牌1',
      plist: [
      	{
      		listUrl: '#',
      		pimg: require('./../../assets/images/plist1.png'),
      		title: 'Avdel'
      	},
      	{
      		listUrl: '#',
      		pimg: require('./../../assets/images/plist2.png'),
      		title: '2E-MECHATRONIC'
      	},
      	{
      		listUrl: '#',
      		pimg: require('./../../assets/images/plist3.png'),
      		title: 'Emile-Maurin'
      	},{
      		listUrl: '#',
      		pimg: require('./../../assets/images/plist1.png'),
      		title: 'Avdel'
      	},{
      		listUrl: '#',
      		pimg: require('./../../assets/images/plist1.png'),
      		title: 'Avdel'
      	},{
      		listUrl: '#',
      		pimg: require('./../../assets/images/plist1.png'),
      		title: 'Avdel'
      	},{
      		listUrl: '#',
      		pimg: require('./../../assets/images/plist1.png'),
      		title: 'Avdel'
      	},{
      		listUrl: '#',
      		pimg: require('./../../assets/images/plist1.png'),
      		title: 'Avdel'
      	},
      	{
      		listUrl: '#',
      		pimg: require('./../../assets/images/plist1.png'),
      		title: 'Avdel'
      	},
      	{
      		listUrl: '#',
      		pimg: require('./../../assets/images/plist1.png'),
      		title: 'Avdel'
      	},
      	{
      		listUrl: '#',
      		pimg: require('./../../assets/images/plist1.png'),
      		title: 'Avdel'
      	},
      	{
      		listUrl: '#',
      		pimg: require('./../../assets/images/plist1.png'),
      		title: 'Avdel'
      	},
      	{
      		listUrl: '#',
      		pimg: require('./../../assets/images/plist1.png'),
      		title: 'Avdel'
      	},
      	{
      		listUrl: '#',
      		pimg: require('./../../assets/images/plist1.png'),
      		title: 'Avdel'
      	},
      	{
      		listUrl: '#',
      		pimg: require('./../../assets/images/plist1.png'),
      		title: 'Avdel'
      	},
      	{
      		listUrl: '#',
      		pimg: require('./../../assets/images/plist1.png'),
      		title: 'Avdel'
      	}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">

  
</style>
