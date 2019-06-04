import Message from '../models/Message'

const MessageStore = {
  namespaced: true,
  state: {
    messages: []
  },

  mutations: {
    set(state, payload) {
      state.message = payload.map(item => new Message(item))
    },
    push(state, payload) {
      state.messages.push(new Message(payload))
    }
  }
}

export default MessageStore
