import User from '../models/User'
import AuthStore from './AuthStore'
import api from '../services/api'

const UserStore = {
  namespaced: true,
  state: {
    user: new User()
  },

  mutations: {
    set(state, payload) {
      state.user = new User(payload)
    }
  },

  actions: {
    async getUser({ commit }) {
      const response = await api.getUser(AuthStore.state.token).catch(err => {
        console.log(err)
      })
      commit('set', response.data)
    }
  }
}

export default UserStore
