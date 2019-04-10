import Vue from 'vue'
import vueRouter from 'vue-router'

import Login from '@/pages/login'

import Home from '@/pages/home'
import HomeInfo from '@/pages/home/views/homeInfo'

import Page2 from '@/pages/page2/views/page'
import PageIView from '@/pages/page3/views/pageIView'

/* 公共部分 */
import Error from '@/components/error'

// 引入状态管理
import store from '../store'
Vue.use(vueRouter)

/* eslint-disable */
const router = new vueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    // { path: '/', redirect: '/home' },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/homeInfo',
      name: 'homeInfo',
      component: HomeInfo
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2
    },
    {
      path: '/pageIView',
      name: 'pageIView',
      component: PageIView
    },
    { path: '*', component: Error }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (/(home|page2|pageIView)/g.test(to.name)) {
//     store.dispatch('showMenu')
//   } else {
//     store.dispatch('hideMenu')
//   }
//   next()
// })

export default router
