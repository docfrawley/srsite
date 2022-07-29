<template>
  <div class="home">
    <div v-if="allCourses">
      <div v-for="course in allCourses" :key="course.id">

        <div v-if="course.status=='published'">
          <div @click="sendview(course)" class="course">
            {{course.title}}
          </div>

        </div>

      </div>
    </div>
  </div>



</template>

<script>

import { useRouter } from 'vue-router'
import { userStore } from '@/store/userStore'
import { coursesStore } from '@/store/coursesStore'
import { ref, watchEffect } from 'vue'

export default {
  name: 'HomeView',
  
  setup() {
    const ustore = userStore()
    const cstore = coursesStore()
    const router = useRouter()
    const allCourses = ref(null)
    allCourses.value = cstore.allCourses
    
    watchEffect(() =>{
      allCourses.value = cstore.allCourses
    })
    
    const sendview = async (course) => {
        await cstore.setCourseAll(course)
        await cstore.setCurrentCourse(course)
        await ustore.setCoursePercentages(course)
      router.push({ name: 'CourseView', params: { course: course.col_name } })
    }
    return {sendview, allCourses}
    }
}
</script>

<style scoped>
    .course {
      background: var(--secondary);
      border-radius: 8px;
      border: 0;
      padding: 8px 12px;
      font-weight: 600;
      cursor: pointer;
      display: inline-block;
      font-size: 35px;
      margin: 10px;
    }
  
    .course:hover {
      background: var(--primary);
      color: white;
    }
</style>