/*
 * @Author: RenBin
 * @Date: 2020-08-07 18:07:38
 * @LastEditTime: 2020-08-28 15:54:50
 * @LastEditors: Please set LastEditors
 * @Description: vuex只能保存当前页面修改的值，如果页面刷新将会丢失已经保存的数据
 * @FilePath: \rms\src\store\modules\user.js
 */
import { login, userInfo } from '@/api/user.js'
import { getToken, setToken } from '@/utils/token.js'
const state = {
  token: getToken(),
  role: ''
}
// 必须同步执行。
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_ROLE: (state, role) => {
    state.role = role
  }
}
// 可以异步，但不能直接操作State(通过mutation来修改state)
const actions = {
  login ({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data)
        setToken(data)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  userInfo ({ commit }) {
    return new Promise((resolve, reject) => {
      userInfo().then(response => {
        const { data } = response
        if (response.status === 200) {
          commit('SET_ROLE', data)
        }
        resolve(data)
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
