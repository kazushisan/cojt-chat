import User from '../models/User'

const UserStore = {
  namespaced: true,
  state: {
    user: new User()
  },

  mutations: {
    set(state, payload) {
      state.user = new User(payload)
    }
  }
}

export default UserStore
