/*
 * @Author: your name
 * @Date: 2020-08-28 10:18:08
 * @LastEditTime: 2020-08-28 10:21:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \rms\src\api\user.js
 */
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
export function userInfo () {
  return request({
    url: '/userInfo',
    method: 'get'
  })
}
