<template>
  <div class="navbar">
    <nav>
      <h1>
        <router-link :to="{ name: 'home' }">Self-Relationality</router-link>
      </h1>
      <div class="links">
        <div v-if="user" class="nav_row">
          <div v-if="isAdmin" class="video-admin">
            <router-link class="btn" :to="{ name: 'VideoAdmin' }">Video Admin</router-link>
          </div>
          <div v-if="user.displayName">
            <span> Hi there, {{ user.displayName }}</span>
          </div>

          <button @click="handleClick">Logout</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'Signup' }">Signup</router-link>
          <router-link class="btn" :to="{ name: 'Login' }">Login</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from '../composables/useLogout'
import { useRouter} from 'vue-router'
import getUser from '@/composables/getUser'
import { ref } from '@vue/reactivity'
import getUserAdmin from '@/composables/getUserAdmin'

export default {
    setup(props, context) {
      const { user } = getUser()
        const {logout, error } = useLogout()
        const router = useRouter()
        const isAdmin = getUserAdmin('users', user.value.uid)
        console.log(isAdmin)

        const handleClick =async () => {
            await logout()
            if (!error.value){
                console.log('user logged out')
                // context.emit('logout')
                router.push({ name: 'Login'})
            }
        }

    const goVideoAdmin = () => {
      router.push({ name: 'VideoAdmin' })
    }

    return { handleClick, user, isAdmin }
    }
}
</script>

<style scoped>
  .navbar {
    padding: 16px 10px;
    margin-bottom: 60px;
    background: white;
  }
  nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .nav_row{
    display: flex;
  }
  nav img {
    max-height: 60px;
  }
  nav h1 {
    margin-left: 20px;
  }
  nav .links {
    margin-left: auto;
  }
  nav .links a, button {
    margin-left: 16px;
    font-size: 14px;
  }
  span {
    font-size: 14px;
    display: inline-block;
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid #eee;
  }

  .video-admin{
    display: inline;
  }
</style>