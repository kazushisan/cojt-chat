const AuthStore = {
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
