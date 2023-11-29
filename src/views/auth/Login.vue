<template>
  <div class="login-stuff">
    <form @submit.prevent="handleSubmit">
      <h3>Login</h3>
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="!isPending" class="log-flex">
        <button class="log-button">Submit</button>
        <router-link class="forgot-password" :to="{ name: 'ForgotPassword' }">Forgot Password</router-link>
      </div>
      <div class="button-container">
        <button class="google-button" @click="googleSignIn">Sign In With Google</button>
      </div>
      
      <div v-if="isPending" disabled>Loading</div>
    </form>
  </div>
</template>

<script>
// using @ means start at the project src root
import { ref } from "vue";
import { useRouter } from "vue-router";
import { userStore } from "@/store/userStore";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();
    const ustore = userStore();
    const error = ref('')
    const isPending = ref(false)

    const handleSubmit = async () => {
      isPending.value=true
       let didlogin = await ustore.loginEmailPassword(email.value, password.value);
       if (didlogin){
        isPending.value=false
        await ustore.getTechniques();
        if (ustore.userCourses.length>0){
          router.push({
          name: "CourseView",
          params: { course: "procrastination" },
       });
        } else{
          router.push({
            name: "home"
          })
        }
      
       } else { 
        error.value = "Sorry, could not recognize your email or password"
        isPending.value=false
       }
      
    };

    const googleSignIn = async () => {
      isPending.value=true
      let didlogin2 = await ustore.outsideLogin();
      if (didlogin2){
        isPending.value=false
        await ustore.getTechniques();

      router.push({
        name: "CourseView",
        params: { course: "procrastination" },
      });
       } else {
        error.value = "Sorry, could not recognize your email or password"
        isPending.value=false
       }
    };

    return { email, password, handleSubmit, googleSignIn, error, isPending };
  },
};
</script>

<style scoped>
.login-stuff {
  padding-top: 150px;
}
.log-flex{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding:5px;
}

.forgot-password{
  color: var(--primeblue);
}
.forgot-password:hover{
  color:var(--primegreen)
}

.button-container{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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