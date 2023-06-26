<template>
    <div class="login-stuff">
        <div v-if="!wasSent">
            <form @submit.prevent="handleSubmit">
                <h5>Please Enter Email Address Associated with Your Account</h5>
                <input type="email" placeholder="Email" v-model="email" />
                <div v-if="error" class="error">{{ error }}</div>
                <div v-if="!isPending" class="log-flex">
                <button class="log-button">Submit</button>
                <router-link class="forgot-password" :to="{ name: 'Login' }">Back to Login</router-link>
                </div>
                
                <div v-if="isPending" disabled>Loading</div>
            </form>
        </div>
        <div v-else>
            <div class="was-sent">
                <p>An email has been sent to that email address with instructions on how to reset your password.</p>
                <router-link  class="log-button" :to="{ name: 'Login' }">Back to Login</router-link>
            </div>
        </div>
     
    </div>
  </template>
  
  <script>
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
      const wasSent = ref(false)

  
      const handleSubmit = async () => {
        isPending.value = true
        wasSent.value = ustore.sendPRemail(email.value)
        isPending.value = false
      };

      return { email, password, handleSubmit, error, isPending, wasSent };
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

  .was-sent{
    position:relative;
    top:20px;
    width: 50%;
    margin: 0 auto;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 1px 2px 3px rgba(50,50,50,0.05);
    border: 1px solid  var(--secondary);
    background: white;
    margin-bottom: 50px;
  }

 p {
    margin-bottom: 20px;
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