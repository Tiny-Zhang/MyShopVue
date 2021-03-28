import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Formvuex from '../views/FormVuex.vue'   //区分大小写 名字一定不能错

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/formvuex',
    name: 'Formvuex',
    component: Formvuex
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
