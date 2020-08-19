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
      config.headers['X-Token'] = getToken()
    }
    return config
  }
)
// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    // 全局：根据响应码处理
    if (response.status !== 200) {
      console.log(res)
    } else {
      return res
    }
  }
)

export default service
