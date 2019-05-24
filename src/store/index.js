import Vuex from 'vuex'
import UserStore from './UserStore'
import AuthStore from './AuthStore'

const store = () =>
  new Vuex.Store({
    modules: {
      UserStore,
      AuthStore
    }
  })

export default store
