<template>
  <div class="motion">
  	<div class="mbanner">
  		<a href="javasccript:;" title="">
  			<img src="./../../assets/images/mbanner.jpg" alt="">
  		</a>
  	</div>

  	<div>
  		<div class="titleImg5"></div>
	  	<div class="m-slider">
	  		<MSwiper></MSwiper>
	  	</div>
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
import MSwiper from './../swiper/Mslider'

export default {
  name: 'motion',
  data () {
    return {
      msg: 'motion',
      Mimgs: [
      	{
      		url: '#',
      		img: require('./../../assets/images/choice.png'),
      		classObject: {
		    titleImg6: true
		  }
      	},
      	{
      		url: '#',
      		img: require('./../../assets/images/zcsxzl_pic.png'),
      		classObject: {
		    titleImg7: true
		  }

      	},
      	{
      		url: '#',
      		img: require('./../../assets/images/step.png'),
      		classObject: {
		    titleImg8: true
		  }

      	},
      	{
      		url: '#',
      		img: require('./../../assets/images/wchzl_pic.png'),
      		classObject: {
		    titleImg9: true
		  }

      	}
      ]
    }
  },
   components: { MSwiper }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
