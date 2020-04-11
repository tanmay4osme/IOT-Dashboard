import Vue from 'vue';
import VueRouter from 'vue-router';

import Camera from '../views/Camera.vue';
import Charts from '../views/Charts.vue';
import Dashboard from '../views/Dashboard.vue';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Manage from '../views/Manage.vue';
import SignUp from '../views/SignUp.vue';

import store from '../store/index';

Vue.use(VueRouter);

const isLoggedIn = (to, from, next) => {
  store
    .dispatch('auth/authenticate')
    .then(() => {
      next();
    })
    .catch(() => {
      next('/login');
    });
};

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
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: isLoggedIn,
  },
  {
    path: '/manage',
    name: 'Manage',
    component: Manage,
    beforeEnter: isLoggedIn,
  },
  {
    path: '/camera',
    name: 'Camera',
    component: Camera,
    beforeEnter: isLoggedIn,
  },
  {
    path: '/charts',
    name: 'Charts',
    component: Charts,
    beforeEnter: isLoggedIn,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
