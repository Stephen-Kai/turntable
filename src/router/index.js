import Vue from 'vue'
import Router from 'vue-router'
import Turntable from '@/components/Turntable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'turntable',
      component: Turntable
    }
  ]
})
