import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import CourseView from '../views/CourseView.vue'
import VideoAdmin from '../views/VideoAdmin.vue'
import { auth } from '@/firebase/config'

const requireAuth = (to, from, next) => {
  let user = auth.currentUser
  if (!user){
    next({ name: 'Login'})
  } else {
    next()
  }
}

const requireAdmin = (to, from, next) => {
  let user = auth.currentUser
  if (!user){
    next({ name: 'HomeView'})
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/course/:course',
    name: 'CourseView',
    component: CourseView,
    beforeEnter: requireAuth,
    props:true
  },
  {
    path: '/videoadmin',
    name: 'VideoAdmin',
    component: VideoAdmin,
    beforeEnter: requireAdmin,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
