<template>
  <div class="su-stuff">
    <form @submit.prevent="handleSubmit">
      <h3>Sign up</h3>
      <input type="text" required placeholder="Display name" v-model="displayName">
      <input type="email" required placeholder="Email" v-model="email">
      <input type="password" required placeholder="Password" v-model="password">
      <div v-if="error" class="error">{{ error }}</div>
      <button v-if="!isPending" class="log-button">Sign Up</button>
      <button v-if="isPending" disabled>Loading</button>
    </form>
  </div>
  
</template>

<script>
// using @ means start at the project src root
import useSignup from '@/composables/useSignup'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { userStore } from '@/store/userStore'
import { coursesStore } from '@/store/coursesStore'

export default {
  setup() {
    const { error, signup, isPending } = useSignup()
    const store = userStore()
    const email = ref('')
    const password = ref('')
    const displayName = ref('')
    const router = useRouter()
    const cstore = coursesStore()

    const handleSubmit = async () => {
      isPending.value = true
      await store.signup(email.value, password.value, displayName.value)
      cstore.setCourses()
      isPending.value = false
      router.push({ name: 'home' })
    }
    return { email, password, displayName, handleSubmit, error, isPending }
  }
}
</script>

<style scoped>
.su-stuff{
  padding-top: 150px;
}

form {
  position:relative;
  top:20px;
  width: 400px;
  margin: 0 auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 1px 2px 3px rgba(50,50,50,0.05);
  border: 1px solid  var(--secondary);
  background: white;
  margin-bottom: 50px;
}
input, textarea {
  border: 0;
  border-bottom: 1px solid var(--secondary);
  padding: 10px;
  outline: none;
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
}

</style>