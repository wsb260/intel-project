import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/list.vue')
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import('../views/edit.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/create.vue')
  },
  {
    path: '/view',
    name: 'View',
    component: () => import('../views/view.vue')
  },
  {
    path: '/d3',
    name: 'D3',
    component: () => import('../views/d3.vue')
  }, {
    path: '/g6',
    name: 'g6',
    component: () => import('../views/antv/g6.vue')
  }, {
    path: '/flow-chart',
    name: 'flowChart',
    component: () => import('../views/antv/flow/flowChart.vue')
  }, {
    path: '/trend',
    name: 'trend',
    component: () => import('../views/HelloWorld.vue')
  }, {
    path: '/ava',
    name: 'ava',
    component: () => import('../views/antv/ava.vue')
  }, {
    path: '/test1',
    name: 'test1',
    component: () => import('../views/antv/test1.vue')
  }, {
    path:'/test2',
    name: 'test2',
    component: () => import('../views/antv/test2.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
