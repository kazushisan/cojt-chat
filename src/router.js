import Vue from 'vue'
import Router from 'vue-router'

import { pages } from './components'

const { Home } = pages

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})
