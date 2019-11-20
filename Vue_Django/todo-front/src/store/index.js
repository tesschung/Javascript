import Vue from 'vue'
import Vuex from 'vuex'
import jwtDecode from 'jwt-decode'

Vue.use(Vuex)

export default new Vuex.Store({
  // status
  state: {
    // 가장 처음에는 token이 없는 상태
    token: null,
  },
  // computed
  getters: {
    isLoggedIn(state) {
      // 삼항연산자 있다면 true 없다면 false
      return state.token ? true : false
    },
    options(state) {
      return {
        headers: {
          Authorization: 'JWT ' + state.token
        }
      }
    },
    userId(state) {
      // jwt token이 있을때만 넣어주고, 그렇지 않은경우 null 로
      return state.token ? jwtDecode(state.token).user_id : null
    }
  },
  // 상태를 변경하는 함수
  mutations: {
    setToken(state, token) {
      state.token = token
    }
  },
  // method
  actions: {
    login(context, token) {
      context.commit('setToken', token)
    },
    logout(context) {
      context.commit('setToken', null)
    }
  },
})
