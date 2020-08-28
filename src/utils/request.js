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
      console.log('11111111')
      this.$message(res.message)
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  }
)

export default service
