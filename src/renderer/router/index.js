import Vue from 'vue'
import Router from 'vue-router'
let _import = file => () => import('@/components/' + file + '.vue');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: _import('main')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
