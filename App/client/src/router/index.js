/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';

import Camera from '../views/Camera.vue';
import Charts from '../views/Charts.vue';
import Dashboard from '../views/Dashboard.vue';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Manage from '../views/Manage.vue';

import Users from '../views/Manage/Users.vue';
import Notifications from '../views/Manage/Notifications.vue';
import Logs from '../views/Manage/Logs.vue';

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
    meta: {
      breadcrumb: [{ name: 'Home', link: '/' }],
    },
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
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: isLoggedIn,
    meta: {
      breadcrumb: [
        { name: 'Home', link: '/dashboard' },
        { name: 'Dashboard', link: '/dashboard' },
      ],
    },
  },
  {
    path: '/manage',
    component: {
      render(c) {
        return c('router-view');
      },
    },
    beforeEnter: isLoggedIn,
    children: [
      { path: '', component: Manage, name: 'Manage', beforeEnter: isLoggedIn },
      { path: 'users', name: 'users', component: Users },
      { path: 'notifications', name: 'notifications', component: Notifications },
      { path: 'logs', name: 'logs', component: Logs },
    ],
    meta: {
      breadcrumb: [
        { name: 'Home', link: '/dashboard' },
        { name: 'manage', link: '/manage' },
      ],
    },
  },
  {
    path: '/camera',
    name: 'Camera',
    component: Camera,
    beforeEnter: isLoggedIn,
    meta: {
      breadcrumb: [
        { name: 'Home', link: '/dashboard' },
        { name: 'Camera', link: '/camera' },
      ],
    },
  },
  {
    path: '/charts',
    name: 'Charts',
    component: Charts,
    beforeEnter: isLoggedIn,
    meta: {
      breadcrumb: [
        { name: 'Home', link: '/dashboard' },
        { name: 'Charts', link: '/charts' },
      ],
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
