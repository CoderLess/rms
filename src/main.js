/*
 * @Author: your name
 * @Date: 2020-08-04 08:08:32
 * @LastEditTime: 2020-08-07 18:04:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rms\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

// element-ui样式
import 'element-ui/lib/theme-chalk/index.css'

import './plugins/element-ui.js'
// 全局样式
import './styles/index.scss'
// 图标
import './icons/iconfont.css'

Vue.config.productionTip = false

// 从根组件注入到每一个子组件
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
