import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/content/home'
import Products from '@/components/content/products'
import Motion from '@/components/content/motion'
import Automation from '@/components/content/automation'
import Parts from '@/components/content/parts'
import About from '@/components/content/about'
import News from '@/components/content/news'
import Customer from '@/components/content/customer'
import ServiceFlow from '@/components/content/serviceFlow'
import AfterSale from '@/components/content/afterSale'
import Terms from '@/components/content/Terms'




import Listproduct from '@/components/listProduccts/listproduct'
import Recommend from '@/components/listProduccts/recommend'
import Whole from '@/components/listProduccts/whole'
import Stock from '@/components/listProduccts/stock'
import Solve from '@/components/listProduccts/solve'



import Problem from '@/components/customer/problem'
import Customer2 from '@/components/customer/customer2'
import Star from '@/components/customer/star'

Vue.use(Router)




export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
      children: [
        {
            path: 'listproduct',
            name: 'Listproduct',
            component: Listproduct,
        },
        {
            path: 'recommend',
            name: 'Recommend',
            component: Recommend,
        },
        {
            path: 'whole',
            name: 'Whole',
            component: Whole,
        },
        {
            path: 'stock',
            name: 'Stock',
            component: Stock,
        },
        {
            path: 'solve',
            name: 'Solve',
            component: Solve,
        },
        {
            path: '/',
            name: 'Recommend',
            component: Recommend,
        }
      ]
    },
    {
      path: '/motion',
      name: 'Motion',
      component: Motion
    },
    {
      path: '/automation',
      name: 'Automation',
      component: Automation
    },
    {
      path: '/parts',
      name: 'Parts',
      component: Parts
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/customer',
      name: 'Customer',
      component: Customer,
      children: [
        {
            path: '/',
            name: 'Customer2',
            component: Customer2
        },
        {
            path: 'customer2',
            name: 'Customer2',
            component: Customer2
        },
        {
            path: 'problem',
            name: 'Problem',
            component: Problem
        },
        {
            path: 'star',
            name: 'Star',
            component: Star
        }
      ]
    },
    {
      path: '/serviceFlow',
      name: 'ServiceFlow',
      component: ServiceFlow
    },
    {
      path: '/afterSale',
      name: 'AfterSale',
      component: AfterSale
    },
    {
      path: '/terms',
      name: 'Terms',
      component: Terms
    },
    {
      path: '*',
      redirect: 'Home'
    }
  ]
})


