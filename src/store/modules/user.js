/*
 * @Author: RenBin
 * @Date: 2020-08-07 18:07:38
 * @LastEditTime: 2020-08-07 18:37:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rms\src\store\modules\user.js
 */
const state = {
  token: '',
  user: {}
}

const mutations = {

}

const actions = {
  login ({ commit }, userInfo) {
    console.log(userInfo)
    console.log(commit)
    return new Promise()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
