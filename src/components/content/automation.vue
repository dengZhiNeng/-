<template>
  <div class="automation">
  	<div class="mbanner">
  		<a href="javasccript:;" title="">
  			<img :src=" mbanner " alt="">
  		</a>
  	</div>

  	<div class="m-imgs"  v-for="item in Mimgs">
  		<div  v-bind:class="item.classObject"></div>   
	  	<div class="mbanner mbannerF">
	  		<a href="javasccript:;" title="">
	  			<img :src="item.img" alt="">
	  		</a>
	  	</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'automation',
  data () {
    return {
      msg: 'automation',
      mbanner: require('./../../assets/images/mbanner2.jpg'),
      Mimgs: [
      	{
      		url: '#',
      		img: require('./../../assets/images/bg2.png'),
      		classObject: {
		    titleImg10: true
		  }
      	},
      	{
      		url: '#',
      		img: require('./../../assets/images/bg3.png'),
      		classObject: {
		    titleImg11: true
		  }

      	},
      	{
      		url: '#',
      		img: require('./../../assets/images/cjwt_pic.png'),
      		classObject: {
		    titleImg12: true
		  }

      	},
      	{
      		url: '#',
      		img: require('./../../assets/images/cbyb_pic.png'),
      		classObject: {
		    titleImg13: true
		  }

      	}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
