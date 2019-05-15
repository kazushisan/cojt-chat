const UserStore = {
  state: {
    _id: '',
    displayName: '',
    name: '',
    password: '',
    mail: ''
  },

  mutations: {
    set(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  }
}

export default UserStore
