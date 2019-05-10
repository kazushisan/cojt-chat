import Vue from 'vue'
import Router from 'vue-router'
import pages from './pages'

const { Home } = pages

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})
