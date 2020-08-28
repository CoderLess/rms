/*
 * @Author: your name
 * @Date: 2020-08-28 10:18:08
 * @LastEditTime: 2020-08-28 15:49:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rms\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/token'
// import store from '@/store/index'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   redirect: '/index'
  // },
  // 用户登入
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/index',
    component: () => import('@/views/dashboard/index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const token = getToken()
  if (token) {
    // 如果已经登入了，检测一下有没有角色
    // const res = await store.dispatch('user/getInfo')
    // console.log(res)
    next()
  } else {
    next()
  }
})

export default router
