import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import router from './router'
import createStore from './store'

Vue.use(Vuex)

const store = createStore()

const app = () =>
  new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
  })

app()
