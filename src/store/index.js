import Vuex from 'vuex'
import UserStore from './UserStore'
import AuthStore from './AuthStore'
import ConnectionStore from './ConnectionStore'
import MessageStore from './MessageStore'

const store = () =>
  new Vuex.Store({
    modules: {
      UserStore,
      AuthStore,
      ConnectionStore,
      MessageStore
    }
  })

export default store
