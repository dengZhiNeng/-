<template>
  <div class="problem">
  	<div class="p_pnews">
  		<ul>
  			<li v-for="item in news">
  				<a :href="item.url" title="">
  					<div class="flex-full">
  						<h5>{{ item.title }}</h5>
	  					<div class="time" >
	  						{{ item.time }}
	  					</div>
  					</div>
  				</a>
  			</li>
  		</ul>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'problem',
  data () {
    return {
      msg: '常见问题11',
      news: [
      	{
      		url: '#',
      		title: '连接件被卡住怎么连接件被卡住怎么办？连接件被卡住怎么办？连接件被卡住怎么办？办？',
      		time: '2017-03-09'
      	},
      	{
      		url: '#',
      		title: '连接件被卡住怎么连接件被卡住怎么办？连接件被卡住怎么办？连接件被卡住怎么办？办？',
      		time: '2017-03-09'
      	},
      	{
      		url: '#',
      		title: '连接件被卡住怎么连接件被卡住怎么办？连接件被卡住怎么办？连接件被卡住怎么办？办？',
      		time: '2017-03-09'
      	},
      	{
      		url: '#',
      		title: '连接件被卡住怎么连接件被卡住怎么办？连接件被卡住怎么办？连接件被卡住怎么办？办？',
      		time: '2017-03-09'
      	},
      	{
      		url: '#',
      		title: '连接件被卡住怎么连接件被卡住怎么办？连接件被卡住怎么办？连接件被卡住怎么办？办？',
      		time: '2017-03-09'
      	},
      	{
      		url: '#',
      		title: '连接件被卡住怎么连接件被卡住怎么办？连接件被卡住怎么办？连接件被卡住怎么办？办？',
      		time: '2017-03-09'
      	},
      	{
      		url: '#',
      		title: '连接件被卡住怎么连接件被卡住怎么办？连接件被卡住怎么办？连接件被卡住怎么办？办？',
      		time: '2017-03-09'
      	},
      	{
      		url: '#',
      		title: '连接件被卡住怎么连接件被卡住怎么办？连接件被卡住怎么办？连接件被卡住怎么办？办？',
      		time: '2017-03-09'
      	},
      	{
      		url: '#',
      		title: '连接件被卡住怎么连接件被卡住怎么办？连接件被卡住怎么办？连接件被卡住怎么办？办？',
      		time: '2017-03-09'
      	},
      	{
      		url: '#',
      		title: '连接件被卡住怎么连接件被卡住怎么办？连接件被卡住怎么办？连接件被卡住怎么办？办？',
      		time: '2017-03-09'
      	}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
