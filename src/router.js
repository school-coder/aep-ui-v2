import Vue from 'vue'
import Router from 'vue-router'
import HackathonList from './views/hackathon/List.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/hackathon',
      name: 'list',
      component: HackathonList
    }
  ]
})
