/*
 * @Author: RenBin
 * @Date: 2020-08-07 18:07:38
 * @LastEditTime: 2020-08-07 18:37:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \rms\src\store\modules\user.js
 */
import { login } from '@/api/user.js'
import { getToken, setToken } from '@/utils/token.js'
const state = {
  token: getToken(),
  user: {}
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {
  login ({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        // resolve()
        console.log('1111111111')
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
