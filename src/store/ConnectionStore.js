import Connection from '../models/Connection'

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
      state.connections.find(item => item._id === state.current)
    }
  }
}

export default ConnectionStore
