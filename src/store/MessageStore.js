import Message from '../models/Message'
import AuthStore from './AuthStore'
import api from '../services/api'

const MessageStore = {
  namespaced: true,
  state: {
    messages: []
  },

  mutations: {
    set(state, payload) {
      state.messages = payload.map(item => new Message(item))
    },
    push(state, payload) {
      state.messages.push(new Message(payload))
    }
  },

  actions: {
    async listMessage({ commit }, connectionId) {
      const response = await api
        .listMessage(AuthStore.state.token, connectionId)
        .catch(err => {
          console.log(err)
        })
      console.log(response)
      commit('set', response.data)
    }
  }
}

export default MessageStore
