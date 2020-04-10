import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import SignUp from '../views/SignUp.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Manage from '../views/Manage.vue';

import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter(to, from, next) {
      store
        .dispatch('auth/authenticate')
        .then(() => {
          next('/dashboard');
        })
        .catch(() => {
          next('/login');
        });
    },
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter(to, from, next) {
      store
        .dispatch('auth/authenticate')
        .then(() => {
          next();
        })
        .catch(() => {
          next('/login');
        });
    },
  },
  {
    path: '/manage',
    name: 'manage',
    component: Manage,
    beforeEnter(to, from, next) {
      store
        .dispatch('auth/authenticate')
        .then(() => {
          next();
        })
        .catch(() => {
          next('/login');
        });
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
