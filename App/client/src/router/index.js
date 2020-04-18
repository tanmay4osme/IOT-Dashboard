/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';

import '../assets/css/nprogress.css';
import NProgress from 'nprogress';

Vue.use(VueRouter);

// NProgress.configure({parent: '.v-content__wrap'});
NProgress.configure({ parent: '.breadcrumb' });
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
    component: () => import(/* webpackChunkName:"Home" */ '../views/Home'),
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
    component: () => import(/* webpackChunkName:"Login" */ '../views/Login'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName:"Dashboard" */'../views/Dashboard'),
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
        component: () => import(/* webpackChunkName:"Users" */ '../views/Manage/Users'),
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
        component: () => import(/* webpackChunkName:"Notifications" */ '../views/Manage/Notifications'),
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
        component: () => import(/* webpackChunkName:"Logs" */'../views/Manage/Logs'),
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
    component: () => import(/* webpackChunkName:"Camera" */ '../views/Camera'),
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
    component: () => import(/* webpackChunkName:"Charts" */ '../views/Charts'),
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
    component: () => import(/* webpackChunkName:"Account" */ '../views/Account'),
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
});

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});


export default router;
