import Vuex from 'vuex'
import UserStore from './UserStore'

const store = () =>
  new Vuex.Store({
    modules: {
      UserStore
    }
  })

export default store
