const AuthStore = {
  namespaced: true,
  state: {
    token: ''
  },

  mutations: {
    setToken(state, token) {
      state.token = token
    }
  }
}

export default AuthStore
