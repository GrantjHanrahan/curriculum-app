import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DisplayCurriculum from '../views/DisplayCurriculum'
import DisplayCurricula from '../views/DisplayCurricula'
import CreateCurricula from '../views/CreateCurricula'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/curricula',
    name: 'Home',
    component: DisplayCurricula
  },
  {
    path: '/curriculum',
    name: 'curriculum',
    component: DisplayCurriculum
  },
  {
    path: '/curricula/create',
    name: 'create',
    component: CreateCurricula
  }
]

const router = new VueRouter({
  routes
})

export default router
