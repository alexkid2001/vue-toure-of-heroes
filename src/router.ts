import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import Heroes from './components/Heroes.vue'
import HeroDetail from './components/HeroDetail.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/heroes',
      name: 'heroes',
      component: Heroes
    },
    {
      path: '/detail/:id',
      component: HeroDetail,
      props: true
    }


  ]
})
