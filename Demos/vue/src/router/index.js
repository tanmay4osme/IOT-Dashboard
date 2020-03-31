import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Camera from '../views/Camera.vue'
import History from '../views/History.vue'
import Logs from '../views/Logs.vue'
import Charts from '../views/Charts.vue'
import Notifications from '../views/Notifications.vue'
import Backup from '../views/Backup.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard  
  },
  {
    path: '/camera',
    name: 'Camera',
    component: Camera  
  },
  {
    path: '/history',
    name: 'History',
    component: History  
  },
  {
    path: '/logs',
    name: 'Logs',
    component: Logs  
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Notifications  
  },
  {
    path: '/backup',
    name: 'Backup',
    component: Backup  
  },
  {
    path: '/charts',
    name: 'Charts',
    component: Charts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
