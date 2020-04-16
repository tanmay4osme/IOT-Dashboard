/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';

import Camera from '../views/Camera.vue';
import Charts from '../views/Charts.vue';
import Dashboard from '../views/Dashboard.vue';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';

import Users from '../views/Manage/Users.vue';
import Notifications from '../views/Manage/Notifications.vue';
import Logs from '../views/Manage/Logs.vue';
import Account from '../views/Account.vue';
import store from '../store/index';

import '../assets/css/nprogress.css';
import NProgress from "nprogress";

Vue.use(VueRouter);

// NProgress.configure({parent: '.v-content__wrap'});
NProgress.configure({parent: '.breadcrumb'});
NProgress.configure({ showSpinner: false });

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
    name: 'dashboard',
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
      {
        path: '',
        name: 'Manage',
        beforeEnter: isLoggedIn,
      },
      {
        path: 'users',
        name: 'users',
        component: Users,
        meta: {
          breadcrumb: [
            { name: 'Home', link: '/dashboard' },
            { name: 'Manage', link: '/manage' },
            { name: 'Users', link: '/users' },
          ],
        },
      },
      {
        path: 'notifications',
        name: 'notifications',
        component: Notifications,
        meta: {
          breadcrumb: [
            { name: 'Home', link: '/dashboard' },
            { name: 'Manage', link: '/manage' },
            { name: 'Notifications', link: '/notifications' },
          ],
        },
      },
      {
        path: 'logs',
        name: 'logs',
        component: Logs,
        meta: {
          breadcrumb: [
            { name: 'Home', link: '/dashboard' },
            { name: 'Manage', link: '/manage' },
            { name: 'Logs', link: '/Logs' },
          ],
        },
      },
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
    name: 'camera',
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
    name: 'charts',
    component: Charts,
    beforeEnter: isLoggedIn,
    meta: {
      breadcrumb: [
        { name: 'Home', link: '/dashboard' },
        { name: 'Charts', link: '/charts' },
      ],
    },
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
    beforeEnter: isLoggedIn,
    meta: {
      breadcrumb: [
        { name: 'Home', link: '/dashboard' },
        { name: 'account', link: '/account' },
      ],
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start();
  }
  next();
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done();
})



export default router;
