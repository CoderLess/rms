/*
 * @Author: RenBin
 * @Date: 2020-08-07 10:45:38
 * @LastEditTime: 2020-09-04 14:29:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rms\src\utils\validate.js
 */
/**
 * @description: 校验用户名是否正确
 * @param {String}
 * @return {Boolean}
 */
export function validUsername (username) {
  // 手机号码校验规则
  var patrn = /^1[3456789][0-9]{9}$/
  return patrn.exec(username)
}
/**
 * @description: 校验用户的密码是否正确
 * @param {String}
 * @return {Boolean}
 */
export function validPassword (password) {
  // 密码为6-20位数字，字母，下划线组成
  var patrn = /^(\w){6,20}$/
  return patrn.exec(password)
}

export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
