<template>
  <div class="terms">
    <div class="mbanner">
  		<a href="javasccript:;" title="">
  			<img :src=" mbanner " alt="">
  		</a>
  	</div>


  	<div class="info" v-for="infos in info2" :class="infos.classObject">
  		<h3>{{ infos.title }}</h3>
  		<span>{{ infos.span1 }}</span>
  		<span>{{ infos.span2 }}</span>
  		<p v-for="item in infos.list">{{ item.p1}}</p>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'terms',
  data () {
    return {
      msg: '使用条款',
      mbanner: require('./../../assets/images/about.png'),
      info2: [

      	{
      		title: '版权保护',
      		list: [

      			{
      				p1: '深圳市捷利讯工业器材有限公司拥有本网站所有内容的版权。其余任何人不得以任何形式复制本网站内容的部分或全部，也不得将本网站内容向第三人再复制并与第三人共用，不得将本网站内容的重要部分或任何其他的部分纳入其他网站、电子数据检索系统、出版物或其他任何作品之中。'
      			}
      		]
      	},
      	{
      		title: '销售条款',
      		classObject: {
				info2: true
			 },

      		list: [
      			{
      				p1: ' 1. 定义 '
      			},
      			{
      				p1: '1.1 在本条款中： '
      			},
      			{
      				p1: '「买方」指在货物销售中接受卖方报价单的一方或其订购单被接纳的一方 '
      			},
      			{
      				p1: '「货物」指卖方按本条款供应的货物（包括任何分期交付的或任何部分的货物）  '
      			},
      			{
      				p1: '「卖方」指深圳市捷利讯工业器材有限公司'
      			},
      			{
      				p1: '「本条款」指本文件中订立的标准销售条款和条件以及（除非上下文另有所指）包括买方与卖方之间书面协议的任何特别条款和条件'
      			},
      			{
      				p1: '「合约」指货物的买卖合约 '
      			},
      			{
      				p1: '「本条款」指本文件中订立的标准销售条款和条件以及（除非上下文另有所指）包括买方与卖方之间书面协议的任何特别条款和条件'
      			},
      			{
      				p1: '「合约」指货物的买卖合约 '
      			},
      			{
      				p1: '「书面」包括信件、传真及类似的沟通方式  '
      			},
      			{
      				p1: '1.2 任何参考法令的条款应包括不时修订、重新制定及延展的条文。 '
      			},
      			{
      				p1: '1.3 本条款的标题仅作方便查阅之用，并不影响其诠释。'
      			},
      			{
      				p1: '2. 销售准则 '
      			},
      			{
      				p1: '2.1 根据买方接受卖方的书面报价，或卖方接受买方的书面订单，卖方应销售而买方则应购买货物，在任何一种情况下，该合约应摒除任何其它条款和条件下仅受本条款管限。  '
      			},
      			{
      				p1: '2.2 除非卖方与买方的授权代表之间以书面协议，否则条款的任何改动都没有约束力。  '
      			},
      			{
      				p1: '2.3 除非卖方以书面确认，否则卖方的员工或代理人不获授权做任何有关货物的意见或建议。  '
      			},
      			{
      				p1: '2.4 卖方或其员工或代理向买方或其员工或代理就货物的储存、应用或使用提供的任何意见或建议，如非由卖方以书面确认，买方跟从或依从行事的风险应自负，而卖方不须因此等未经确认的意见或建议负责。'
      			},
      			{
      				p1: '2.5 由卖方发出的销售印刷品、报价单、价钱表、接受要约、发票或其它文件或资讯中的任何印刷、文书或其它错误或遗漏均有待更正，而卖方无须负责。 '
      			},
      			{
      				p1: '2.6 每份合约皆以特别订货为准则。  '
      			},
      			{
      				p1: '2.7 未经卖方书面同意，买方不能重新出售货物或任何部分或其中分期交付的部分。  '
      			},
      			{
      				p1: '3. 订单及细则 '
      			},
      			{
      				p1: '3.1 除非及直至由卖方授权代表书面确认，否则买方提交的订单不会被视为已被卖方接纳。  '
      			},
      			{
      				p1: '3.2 只有买方才须为任何买方提交的订单条款的准确性向卖方负责（包括任何适用的规定），并在足够的时间向卖方提供有关货物的任何资料，让卖方可以按条款履行合约。  '
      			},
      			{
      				p1: '3.3 货物的数量、质量、描述及任何规格必须在卖方报价单（如买方接受的话）或买方的订购单（如 卖方 接受的话）订明或在合理的情况下与之近似。  '
      			},
      			{
      				p1: '3.4 如卖方需按买方提交的规格生产或处理货物，而卖方因此而侵犯了他人的专利、版权、设计、商 标或 其它工业或知识产权，买方须向卖方赔偿任何被裁定须负责或因此招致的，与索偿有关或卖方就索偿达成和解而已支付或者同意支付的全部损失、损害、成本及费用。  '
      			},
      			{
      				p1: '3.5 卖方保留权利更改货物的规格，以符合任何适用的安全或其他法定要求，或因按卖方规格而供应，对 货物的质量或性能没有实质影响。  '
      			},
      			{
      				p1: '3.6 任何已被卖方接纳的订单均不得由买方取消，除非由卖方书面同意，及买方向卖方赔偿所有因取消订单引致的损失（包括利润损失）、费用（包括所有人力及材料费用）、损毁、收费及开支。  '
      			},
      			{
      				p1: '4. 付款条款 '
      			},
      			{
      				p1: '100%预付款（款到即被认为订单生效）。'
      			},
      			{
      				p1: '5. 违约责任'
      			},
      			{
      				p1: '按合同法办理，解决合同纠纷方式：卖方和买方友好协商，如协商不能解决，应由双方所在地人民法院管辖。  '
      			},
      			{
      				p1: '6. 担保和责任 '
      			},
      			{
      				p1: '6.1 合约中明示或暗示的担保按以下条件由卖方做出：  '
      			},
      			{
      				p1: '6.1.1 若因疏忽、任何由买方提供的绘图、设计或规格而引致 有关货物的瑕疵，卖方均不会负上法律 责任； '
      			},
      			{
      				p1: '6.1.2 因合理磨损、故意损坏、疏忽、不正常的操作环境、未能按卖方指引使用（不论 是口头或书面 ）、滥用或未经卖方同意改装或维修而引致的损毁，卖方概不负责；  '
      			},
      			{
      				p1: '6.1.3 如到期付款日仍未支付货物款项，卖方对明示或暗示的担保（或任何其他保证、条 件或保修） 概不负责；  '
      			},
      			{
      				p1: '6.1.4 以上担保不包括非由卖方生产的材料，买方只能享有由生产商给予卖方的保证或保 修的得益。  '
      			},
      			{
      				p1: '6.2 买方使用货物时应严格跟从卖方给予的指引，如因未能依照指示使用货物而造成的任何损坏、费用索偿或诉讼，卖方概不负责。 '
      			},
      			{
      				p1: '6.3 货物的性能规格只限于产品说明书内提及的资料，任何额外的性能规格要求，须由卖方书面确认才被接纳。  '
      			},
      			{
      				p1: '7. 知识产权 '
      			},
      			{
      				p1: '7.1 所有由卖方向买方提供的绘图、规格、专利、设计、商标、颜色或其 它工业或知识产权（下称「知识 产权」）均为卖方的财物，在要求下应归还卖方。如买方未能归还任何此等物品，买方须为此而引致的损失或开支向卖方负责。  '
      			},
      			{
      				p1: '7.2 在未经卖方书面同意前，买方不得更改或修订知识产权中有版权的资料。在未经卖方书面同意 前，不 得使用知识产权以外的插图于任何货物上。知识产权中任何有版权的资料不得用于任何货物中有关生产、分销或市场推广之用，除非货物指定要使用该等资料。  '
      			},
      			{
      				p1: '7.3 买方接纳卖方对知识产权的拥有权，不能在知识产权或任何部分声称有任何权利或利益，除非获得卖方授予。  '
      			},
      			{
      				p1: '7.5 买方不得使用任何部分的知识产权作侵权假冒，而买方应通知卖方有第三者使用知识产权的任何 部分 或第三者的任何活动对买方而言可能造成侵权或假冒。'
      			}
      		]
      	},
      	{
      		title: '商务合作',
      		classObject: {
				info2: true
			},
      		list: [

      			{
      				p1: '做为国内领先的品牌工业产品渠道集成供应商，我们诚意邀请各地相关行业代理商和中间商合作。我们品牌工业产品渠道集成化的营销优势，力争使双方达成共赢！'
      			},
      			{
      				p1: '我们将为您提供两种合作模式：'
      			},
      			{
      				p1: '1、在双方协商的基础上实行返还佣金模式；'
      			},
      			{
      				p1: '2、直接享受合作伙伴优势价格模式；'
      			},
      			{
      				p1: '具体的事宜及相关资讯，请与我们联系。'
      			},
      			{
      				p1: '合作热线 :   张先生0755-27926986 '
      			},
      			{
      				p1: '邮箱 :   张先生0755-27926986 '
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
