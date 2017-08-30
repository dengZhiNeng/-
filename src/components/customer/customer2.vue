<template>
  <div class="customer2">
  	<div class="beases">
	  	<ul>
	  		<li v-for="beasesLs in beases">
	  			<a :href="beasesLs.url" title="">
		  			<div class="imgs">
		  				<img :src="beasesLs.imgs"  alt="">
		  			</div>

		  			<div class="b-tit" v-for="item in beasesLs.list">
		  				<p v-for="itemps in item" v-html="itemps"></p>
		  			</div>
		  		</a>
	  		</li>
	  	</ul>
  		
  	</div>
  </div>
</template>

<script>
export default {
  name: 'customer2',
  data () {
    return {
      msg: '客户中心',
      beases: [
      	{
      		url: '#',
      		imgs: require('./../../assets/images/cus.jpg'),

      		list: [
      			{
      				td1: '<h3>陈总</h3>',
					td2: '<p>飞盒飞机制造</p>',
					td3: '<p>陈总</p>',
					td4: '<p>捷利...</p>'
      			}
      		]
      	},
      	{
      		url: '#',
      		imgs: require('./../../assets/images/cus2.jpg'),

      		list: [
      			{
      				td1: '<h3>陈总</h3>',
					td2: '<p>飞盒飞机制造</p>',
					td3: '<p>陈总</p>',
					td4: '<p>捷利...</p>'
      			}
      		]
      	},
      	{
      		url: '#',
      		imgs: require('./../../assets/images/cus3.jpg'),

      		list: [
      			{
      				td1: '<h3>陈总</h3>',
					td2: '<p>飞盒飞机制造</p>',
					td3: '<p>陈总</p>',
					td4: '<p>捷利...</p>'
      			}
      		]
      	},
      	{
      		url: '#',
      		imgs: require('./../../assets/images/cus4.jpg'),

      		list: [
      			{
      				td1: '<h3>陈总</h3>',
					td2: '<p>飞盒飞机制造</p>',
					td3: '<p>陈总</p>',
					td4: '<p>捷利...</p>'
      			}
      		]
      	}
      ]

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


