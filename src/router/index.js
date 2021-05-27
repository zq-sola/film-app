import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/film',
    name: 'Film',
    component: () => import ('@/views/Film'),
    children:[
      {
        path:'Now-hit',
        component: () => import ("@/views/Film/Now-hit")
      },
      {
        path:'comingsoon',
        component: () => import ("@/views/Film/comingsoon")
      },
      {
        path:'',
        redirect:'Now-hit'
      }
    ]
  },
  {
    path: '/Ciname',
    name: 'Ciname',
    component: () => import ('@/views/Ciname')
  },
  {
    path: '/News',
    name: 'News',
    component: () => import ('@/views/News')
  },
  {
    path: '/My',
    name: 'My',
    component: () => import ('@/views/My')
  },
  {
    path: '*',
    redirect: '/film'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
