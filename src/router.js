import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/home/Home.vue'
import Login from './views/login/Login.vue'
import Register from './views/register/Register.vue'

import HackathonList from './views/hackathon/ListHackathon.vue'
import HackathonCreate from './views/hackathon/CreateHackathon.vue'
import HackathonView from './views/hackathon/ViewHackathon.vue'

import Hackathon from './views/hackathon/Hackathon.vue'

Vue.use(Router)

/* const HackathonList = resolve => {
  require.ensure(['./views/hackathon/ListHackathon.vue'], () => {
      resolve(require('./views/hackathon/ListHackathon.vue'));
  }, 'hackathon');
};
const HackathonCreate = resolve => {
  require.ensure(['./views/hackathon/CreateHackathon.vue'], () => {
      resolve(require('./views/hackathon/CreateHackathon.vue'));
  }, 'hackathon');
}; */

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
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/hackathon',
      components: {
        default: Hackathon
      },
      children: [
        {
          path: '',
          name: 'hackathonlist',
          component: HackathonList
        },
        {
          path: 'create',
          name: 'hackathonCreate',
          component: HackathonCreate
        },
        {
          path: 'detail/:id',
          name: 'hackathonView',
          component: HackathonView
        }
      ]
    }
  ]
})
