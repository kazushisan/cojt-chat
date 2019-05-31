import Connection from '../models/Connection'

const ConnectionStore = {
  namespaced: true,
  state: {
    connections: []
  },

  mutations: {
    set(state, payload) {
      payload.forEach(item => {
        state.connections.push(new Connection(item))
      })
    }
  }
}

export default ConnectionStore
