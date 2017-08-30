<template>
  <div class="whole">
  	<div class="w-base">
  		<h3>工业检测</h3>
  		<ul>
  			<li v-for="title in base">
  				<div class="spans">
  					<a href="#" title="">{{ title.title }}</a>

  					<div class="ul" >
  						<li v-for="item in title.list"><a href="#" title="">{{ item.info }}</a></li>
  					</div>
  				</div>
  			</li>
  		</ul>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'whole',
  data () {
    return {
      msg: '品牌的分类111',
      base: {
      	pc1: {
      		title: '工业检测',
      		list: [
      			{
      				info: '流量计'
      			},
      			{
      				info: '流量计'
      			},
      			{
      				info: '流量计'
      			},
      			{
      				info: '流量计'
      			}
      		]
      	},
      	pc2: {
      		title: '工业检测2',
      		list: [
      			{
      				info: '流量计'
      			},
      			{
      				info: '流量计'
      			},
      			{
      				info: '流量计'
      			},
      			{
      				info: '流量计'
      			}
      		]
      	},
      	pc3: {
      		title: '工业检测3',
      		list: [
      			{
      				info: '流量计'
      			},
      			{
      				info: '流量计'
      			},
      			{
      				info: '流量计'
      			},
      			{
      				info: '流量计'
      			}
      		]
      	},
      	pc4: {
      		title: '工业检测4',
      		list: [
      			{
      				info: '流量计'
      			},
      			{
      				info: '流量计'
      			},
      			{
      				info: '流量计'
      			},
      			{
      				info: '流量计'
      			}
      		]
      	}

      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less">

  
</style>
