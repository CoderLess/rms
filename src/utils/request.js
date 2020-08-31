/*
 * @Author: your name
 * @Date: 2020-08-28 10:18:08
 * @LastEditTime: 2020-08-28 16:02:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rms\src\utils\request.js
 */
import axios from 'axios'
import store from '@/store/index.js'
import Vue from 'vue'
import { getToken } from '@/utils/token.js'
// 创建一个axios的实例
const service = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 5000
})
// 请求拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['JWT-Token'] = getToken()
    }
    return config
  }
)
// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    // 全局：根据响应码处理
    if (res.status !== 200) {
      // 请求异常
      // 这里的this不是vue对象，所以不能用this.$message
      Vue.prototype.$message.error(res.message)
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      // 请求结果正常返回
      return res
    }
  }
)

export default service
