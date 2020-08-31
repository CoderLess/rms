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
// import { getToken } from '@/utils/token'
import store from '@/store/index'
import Layout from '@/layout/index'

Vue.use(VueRouter)

const routes = [
  // 根目录跳转
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard'
      }
    ]
  },
  // 用户登入
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },
  // 用户登入后的主页面
  {
    path: '/dashboard',
    component: () => import('@/views/dashboard/index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  if (token && store.getters.role.length < 1) {
    // 如果已经登入了，检测一下有没有角色
    await store.dispatch('user/userInfo')
    next()
  } else {
    next()
  }
})

export default router
