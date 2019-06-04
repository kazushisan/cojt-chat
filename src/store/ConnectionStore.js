import Connection from '../models/Connection'

const ConnectionStore = {
  namespaced: true,
  state: {
    connections: []
  },

  mutations: {
    set(state, payload) {
      state.connections = payload.map(item => new Connection(item))
    }
  }
}

export default ConnectionStore
