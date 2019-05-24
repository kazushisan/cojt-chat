import User from '../models/User'

const UserStore = {
  state: {
    user: new User()
  },

  mutations: {
    set(state, payload) {
      Object.keys(payload).forEach(key => {
        state.user[key] = payload[key]
      })
    }
  }
}

export default UserStore
