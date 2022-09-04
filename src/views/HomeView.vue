<template>
  <div class="page-container">
  <div class="home">
    <div v-if="allCourses">
      <div v-for="course in allCourses" :key="course.id">

        <div v-if="course.status=='published'">
          <div @click="sendview(course)" class="course">
            <div>
              <h1>{{course.title}}</h1>
            </div>
            <div>
              <h4>Instructor: {{course.instructor}}</h4>
            </div>
            <div>
              <h6>{{course.description}}</h6>
            </div>
            <div>And you have completed {{ course.percentCompleted }}% of the course</div>
            <div class="loading-bar">
              <div class="percentage" :style="{ 'width': course.percentCompleted + '%'}"></div>
            </div>
          </div>

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
      if (cstore.currentCourse != course){
        await cstore.setCourseAll(course)
        await cstore.setCurrentCourse(course)
      }
      if (cstore.currentVideo){
        cstore.currentVideo={}
      }
      router.push({ name: 'CourseView', params: { course: course.col_name } })
    }
    return {sendview, allCourses}
    }
}
</script>

<style scoped>
    .course {
      background: #fff;
      border-radius: 5px;
      border: 1px solid var(--lines);
      padding: 15px 20px;
      font-weight: 600;
      cursor: pointer;
      display: inline-block;
      font-size: 18px;
      margin: 10px;
    }
  
    .course:hover {
      border: 2px solid var(--lines);
    }
</style>