import Message from '../models/Message'

const MessageStore = {
  namespaced: true,
  state: {
    messages: []
  },

  mutations: {
    set(state, payload) {
      payload.forEach(item => {
        state.messages.push(new Message(item))
      })
    },
    push(state, payload) {
      state.messages.push(new Message(payload))
    }
  }
}

export default MessageStore
