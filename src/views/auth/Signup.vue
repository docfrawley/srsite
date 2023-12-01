<template>
  <div class="su-stuff">
    <div class="signup-form">
      <form @submit.prevent="handleSubmit">
        <p class="step-one">STEP ONE:</p>
        <p class="sub-one">Thanks so much for your interest. Let's get you signed up with an account after which you can purchase the course.</p>
        <input type="text" required placeholder="Display name" v-model="displayName">
        <input type="email" required placeholder="Email" v-model="email">
        <input type="password" required placeholder="Password" v-model="password">
        <div v-if="error" class="error">{{ error }}</div>
        <button class="log-button" v-if="!isPending">Sign up</button>
        <button class="log-button" v-if="isPending" disabled>Loading...</button>
      </form>
      <div class="button-container">
        <button class="google-button" @click="googleSignUp">Sign Up With Google</button>
      </div>
    </div>
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
    const ustore = userStore()
    const email = ref('')
    const password = ref('')
    const displayName = ref('')
    const router = useRouter()
    const cstore = coursesStore()

    const handleSubmit = async () => {
      isPending.value = true
      let didSignup = await ustore.signup(email.value, password.value, displayName.value)
      if (didSignup){
        isPending.value = false
        router.push({
          name: "home",
          // params: { course: "procrastination" },
        });
        } else {
          error.value = "Sorry, could not sign you up"
          isPending.value=false
        }
    }

    const googleSignUp = async () => {
      isPending.value=true
      let didSignup = await ustore.outsideSignUp();
      if (didSignup){
        isPending.value = false
        router.push({
          name: "home",
          // params: { course: "procrastination" },
        });
        } else {
          error.value = "Sorry, there may already be an account associated with that google address, please try logging in using google"
          isPending.value=false
        }
    };
    return { email, password, displayName, googleSignUp, handleSubmit, error, isPending }
  }
}
</script>

<style scoped>
.su-stuff{
  padding-top: 150px;
}

.step-one {
  font-size: 22px;
}

.sub-one {
  margin-top: 15px;
  font-size: 18px;
}

.signup-form {
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
button{
  margin-bottom: 0.5em;
}

.google-button {
  background: var(--primeblue);
  border-radius: .25rem;
  border: 0;
  padding: 8px;
  font-weight: 600;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  pointer-events: auto;
  color:white;
  width:100%;
  text-align: center;
}

.google-button:hover{
  color: var(--primegreen);
}

</style>