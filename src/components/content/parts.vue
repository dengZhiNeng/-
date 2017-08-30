<template>
  <div class="parts">
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
  name: 'parts',
  data () {
    return {
      msg: 'parts',
      mbanner: require('./../../assets/images/mbanner3.jpg'),
      Mimgs: [
      	{
      		url: '#',
      		img: require('./../../assets/images/sbzc1.png'),
      		classObject: {
		    titleImg14: true
		  }
      	},
      	{
      		url: '#',
      		img: require('./../../assets/images/sbzc2.png'),
      		classObject: {
		    titleImg15: true
		  }

      	},
      	{
      		url: '#',
      		img: require('./../../assets/images/sbzc3.png'),
      		classObject: {
		    titleImg16: true
		  }

      	},
      	{
      		url: '#',
      		img: require('./../../assets/images/sbzc4.png'),
      		classObject: {
		    titleImg17: true
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
