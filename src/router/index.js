import Vue from 'vue'
import Router from 'vue-router'
import xmLogin from '../xmPages/xmLogin'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component:xmLogin
    }
  ]
})
