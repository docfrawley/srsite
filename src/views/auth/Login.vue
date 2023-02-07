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

<style>
.login-stuff {
  padding-top: 150px;
}
</style>