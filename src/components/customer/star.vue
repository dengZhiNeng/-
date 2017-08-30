<template>
  <div class="star">
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
  name: 'Star',
  data () {
    return {
      msg: '客户之星',
            news: [
      	{
      		url: '#',
      		title: '客户之星客户之星',
      		time: '2017-03-09'
      	},
      	{
      		url: '#',
      		title: '客户之星客户之星',
      		time: '2017-03-09'
      	},
      	{
      		url: '#',
      		title: '客户之星客户之星',
      		time: '2017-03-09'
      	},
      	{
      		url: '#',
      		title: '客户之星客户之星',
      		time: '2017-03-09'
      	},
      	{
      		url: '#',
      		title: '客户之星客户之星',
      		time: '2017-03-09'
      	},
      	{
      		url: '#',
      		title: '客户之星客户之星',
      		time: '2017-03-09'
      	},
      	{
      		url: '#',
      		title: '客户之星客户之星',
      		time: '2017-03-09'
      	},
      	{
      		url: '#',
      		title: '客户之星客户之星',
      		time: '2017-03-09'
      	},
      	{
      		url: '#',
      		title: '客户之星客户之星',
      		time: '2017-03-09'
      	},
      	{
      		url: '#',
      		title: '客户之星客户之星',
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
