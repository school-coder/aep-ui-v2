import Vue from 'vue'
import Router from 'vue-router'
import HackathonList from './views/hackathon/List.vue'
import Home from './views/home/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/hackathon',
      name: 'list',
      component: HackathonList
    }
  ]
})
