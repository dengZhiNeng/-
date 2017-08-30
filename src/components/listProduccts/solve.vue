<template>
  <div class="solve">
  	<div class="news">
  		<ul>
  			<li v-for="item in news">
  				<a :href="item.url" title="">
  					<span>
  						{{ item.title }}
  					</span>
  					<span>
  						{{ item.time }}
  					</span>
  				</a>
  			</li>
  		</ul>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'solve',
  data () {
    return {
      msg: '解决方案11',
      news: [
      	{
      		url: '#',
      		title: 'Heyco三代传承的线缆保护专家',
      		time: '2017-02-07'
      	},
      	{
      		url: '#',
      		title: 'Heyco三代传承的线缆保护专家',
      		time: '2017-02-07'
      	},
      	{
      		url: '#',
      		title: 'Heyco三代传承的线缆保护专家',
      		time: '2017-02-07'
      	},
      	{
      		url: '#',
      		title: 'Heyco三代传承的线缆保护专家',
      		time: '2017-02-07'
      	},
      	{
      		url: '#',
      		title: 'Heyco三代传承的线缆保护专家',
      		time: '2017-02-07'
      	},
      	{
      		url: '#',
      		title: 'Heyco三代传承的线缆保护专家',
      		time: '2017-02-07'
      	},
      	{
      		url: '#',
      		title: 'Heyco三代传承的线缆保护专家',
      		time: '2017-02-07'
      	},
      	{
      		url: '#',
      		title: 'Heyco三代传承的线缆保护专家发v大神发发',
      		time: '2017-02-07'
      	},
      	{
      		url: '#',
      		title: 'Heyco三代传承的线缆保护专家',
      		time: '2017-02-07'
      	},
      	{
      		url: '#',
      		title: 'Heyco三代传承的线缆保护专家3412312312',
      		time: '2017-02-07'
      	}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">

  
</style>
