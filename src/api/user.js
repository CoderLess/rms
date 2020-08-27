import request from '@/utils/request.js'

// 用户登入
export function login (data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
// 获取用户基本信息
export function getUserInfo () {
  return request({
    url: '/getUserInfo',
    method: 'get'
  })
}
