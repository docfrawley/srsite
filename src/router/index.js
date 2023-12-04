import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/auth/Login.vue'
import Signup from '../views/auth/Signup.vue'
import CourseView from '../views/CourseView.vue'
import VideoAdmin from '../views/VideoAdmin.vue'
import ToolkitAdmin from '../views/ToolkitAdmin.vue'
import MyToolkit from '../views/MyToolkit.vue'
import MemAccount from '../views/MemAccount.vue'
import ForgotPassword from '../views/auth/ForgotPassword.vue'
import CourseCheckout from '../views/CourseCheckout.vue'
import { auth } from '@/firebase/config'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const getCurrentUser=()=>{
  return new Promise((resolve, reject)=>{
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      
      reject
    );
  });
}

const requiresAuth = async (to, from, next) => {
  if(await getCurrentUser()){
      next();
    } else {
      next({ name: 'Login'})
    }
}

const requireAdmin = (to, from, next) => {
  let user = auth.currentUser
  if (!user){
    next({ name: 'home'})
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: requiresAuth,
    redirect: 'account'
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
    beforeEnter: requiresAuth,
    props:true
  },
  {
    path: '/toolkit',
    name: 'MyToolkit',
    component: MyToolkit,
    beforeEnter: requiresAuth,
    props:true
  },
  {
    path: '/videoadmin',
    name: 'VideoAdmin',
    component: VideoAdmin,
    beforeEnter: requireAdmin,
    props:true
  },
  {
    path: '/toolkitadmin',
    name: 'ToolkitAdmin',
    component: ToolkitAdmin,
    beforeEnter: requireAdmin,
    props:true
  },
  {
    path: '/account',
    name: 'MemAccount',
    component: MemAccount,
    beforeEnter: requiresAuth,
    props:true
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword,
    props:true
  },
  {
    path: '/checkout',
    name: 'CourseCheckout',
    component: CourseCheckout,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
