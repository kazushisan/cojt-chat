import Vuex from 'vuex'
import UserStore from './UserStore'
import AuthStore from './AuthStore'
import ConnectionStore from './ConnectionStore'

const store = () =>
  new Vuex.Store({
    modules: {
      UserStore,
      AuthStore,
      ConnectionStore
    }
  })

export default store
