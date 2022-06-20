<template>
  <div class="home">
    home page
    <div @click="sendview('procrastination')" class="course">
      Procrastination Course
    </div>
  </div>



</template>

<script>

import { useRouter } from 'vue-router'


export default {
  name: 'HomeView',
  
  setup() {
   
    const router = useRouter()
    const sendview = (course) => {
      router.push({ name: 'CourseView', params: { course: course } })
    }
    return {sendview}
    }
}
</script>

<style scoped>
  
</style>