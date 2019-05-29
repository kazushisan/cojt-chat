const AuthStore = {
  namespaced: true,
  state: {
    token: ''
  },

  mutations: {
    setToken(state, token) {
      state.token = token
      window.sessionStorage.setItem('cojt-chat-token', token)
    },

    loadToken(state) {
      const token = window.sessionStorage.getItem('cojt-chat-token')

      if (token) {
        state.token = token
      }
    }
  }
}

export default AuthStore
