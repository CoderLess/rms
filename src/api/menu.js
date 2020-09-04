/*
 * @Author: your name
 * @Date: 2020-09-04 14:07:26
 * @LastEditTime: 2020-09-04 14:20:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rms\src\api\menu.js
 */
import request from '@/utils/request.js'

export function menuList () {
  return request({
    url: '/menu/list',
    method: 'get'
  })
}
