import Connection from '../models/Connection'
import AuthStore from './AuthStore'
import api from '../services/api'

const ConnectionStore = {
  namespaced: true,
  state: {
    connections: [],
    current: ''
  },

  mutations: {
    set(state, payload) {
      state.connections = payload.map(item => new Connection(item))
    },
    setCurrent(state, payload) {
      state.current = payload
    }
  },

  getters: {
    currentConnection(state) {
      return state.connections.find(item => item._id === state.current)
    }
  },

  actions: {
    async listConnection({ commit }) {
      const response = await api
        .listConnection(AuthStore.state.token)
        .catch(err => {
          console.log(err)
        })
      commit('set', response.data)
    }
  }
}

export default ConnectionStore
