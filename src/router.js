import Vue from 'vue'
import Router from 'vue-router'
import HackathonList from './views/hackathon/List.vue'
import Home from './views/home/Home.vue'
import Login from './views/login/Login.vue'

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
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/hackathon',
      name: 'list-hackathons',
      component: HackathonList
    }
  ]
})
