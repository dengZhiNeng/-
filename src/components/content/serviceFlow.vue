<template>
  <div class="serviceFlow">
  	<div class="flex-full" v-for="ser in serviceFlow">
  		<h3>{{ ser.title }}</h3>
  		<div class="imgs">
  			<img :src="ser.imgs"  alt="">
  		</div>
  		<div class="info" v-for="item in ser.info">
  			<div v-for="ps1 in item" v-html="ps1"></div>
  		</div>
  	</div>

  	<div class="tabs">
  		<h3>付款信息</h3>

  		<table v-for="tablesP in tables">
  			<thead>
  				<tr>
  					<th colspan="2">{{ tablesP.th }}</th>
  				</tr>
  			</thead>
  			<tbody>
  				<tr v-for="item in tablesP.tdlist">
  					<td v-for="td in item">{{ td }}</td>
  				</tr>
  			</tbody>
  		</table>



  	</div>
  </div>
</template>

<script>
export default {
  name: 'serviceFlow',
  data () {
    return {
      msg: '服务流程11',
      tables: [
      	{
      		th: '捷利讯对公人民币银行信息',

      		tdlist: [
      			{
      				td1: '公司信息',
      				td2: '深圳市捷利讯工业器材有限公司'
      			},
      			{
      				td1: '电话',
      				td2: '400-6288-199'
      			},
      			{
      				td1: '邮箱',
      				td2: 'info@wahkoo.com'
      			},
      			{
      				td1: '类型',
      				td2: '对公人民币账户'
      			},
      			{
      				td1: '账号',
      				td2: '2000351110000175'
      			},
      			{
      				td1: '开户银行',
      				td2: '渤海银行股份有限公司深圳分行'
      			}
      		]
      	},


      	{
      		th: '華固實業（香港）外币银行信息',

      		tdlist: [
      			{
      				td1: '公司信息',
      				td2: '華固實業（香港）有限公司'
      			},
      			{
      				td1: '电话',
      				td2: '00852-69534440'
      			},
      			{
      				td1: '邮箱',
      				td2: 'info@wahkoo.com'
      			},
      			{
      				td1: '类型',
      				td2: '外币账户'
      			},
      			{
      				td1: '账号',
      				td2: 'NRA114311001137100'
      			},
      			{
      				td1: '开户银行',
      				td2: 'THE BANK OF EAST ASIA(CHINA)LTD.,SHENZHEN SUB-BRANCH'
      			}
      		]
      	}
      ],
      serviceFlow: [
      	{
      		title: '订货流程',
      		imgs: require('./../../assets/images/dd.jpg'),

      		info: [
      			{
      				ps1: '<h4>1. 关于电话订购</h4>',
      				ps2: '<p>阁下对报价单内所有条款无异议产品工程师将为阁下确认订单双方确认合同条款，签字（盖章）确认。</p>',
      				ps3: '<h4>2. 关于传真订单</h4>',
      				ps4: '<p>阁下对报价单内所有条款无异议产品工程师将为阁下确认订单双方确认合同条款，签字（盖章）确认。</p>',
      				ps5: '<h6>华固-捷利讯期待您的认可，您的支持鼓励是我们做更好服务的动力！</h6>' 
      			}
      		]
      	},
      	{
      		title: '开票流程',
      		imgs: require('./../../assets/images/dd2.jpg'),

      		info: [
      			{
      				ps1: '<h4>国际空运直达香港国际机场</h4>',
      				ps2: '<h4>超级一号货运站南座414/华固-捷利讯香港中转仓（提货点）</h4>',
      				ps3: '<h4>电话：00852-69534440  邮箱：buyer@wahkoo.com</h4>',
      				ps4: '<h4>提货时间：星期一至五9:00 - 12:00 / 14:00 - 17:30</h4>'
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
