<template>
  <div class="login-stuff">
    <form @submit.prevent="handleSubmit">
      <h3>Login</h3>
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <div v-if="error" class="error">{{ error }}</div>
      <button v-if="!isPending">Log in</button>
      <button v-if="isPending" disabled>Loading</button>
    </form>
  </div>
</template>

<script>
// using @ means start at the project src root
import useLogin from "@/composables/useLogin";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { userStore } from "@/store/userStore";
import { coursesStore } from "@/store/coursesStore";

export default {
  setup() {
    const { error, login, isPending } = useLogin();
    const email = ref("");
    const password = ref("");
    const router = useRouter();
    const ustore = userStore();
    const cstore = coursesStore();

    const handleSubmit = async () => {
      await ustore.login(email.value, password.value);
      await ustore.getTechniques();

      router.push({
        name: "CourseView",
        params: { course: "procrastination" },
      });
    };
    return { email, password, handleSubmit, error, isPending };
  },
};
</script>

<style scoped>
.login-stuff {
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