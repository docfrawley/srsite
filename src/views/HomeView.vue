<template>
  <div class="page-container">
    <div v-if="allCourses">
      <div v-for="course in allCourses" :key="'Z' + course.id">
        <div v-if="course.status=='published'">
          <div @click="sendview(course)" class="course-view">
            <div>
              <h2>{{course.title}}</h2>
              <h3>Instructor: {{course.instructor}}</h3>
            </div>
      
            <div>
              <h4>{{course.description}}</h4>
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
import { ref } from 'vue'

export default {
  name: 'HomeView',
  
  setup() {
    const ustore = userStore()
    const cstore = coursesStore()
    const router = useRouter()
    const allCourses = ref(cstore.allCourses)
 
    
    const sendview = async (course) => {
      if (cstore.currentCourse != course){
        await cstore.setCourseAll(course.col_name)
        await cstore.setCurrentCourse(course)
        await ustore.buyCourse(course.col_name)
      }
      router.push({ name: 'CourseView', params: { course: course.col_name } })
    }
    return { sendview, allCourses }
    }
}
</script>

<style scoped>
    .course-view {
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      background-blend-mode: darken;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 5px;
      border: 1px solid var(--lines);
      padding: 25px 20px;
      font-weight: 600;
      cursor: pointer;
      font-size: 18px;
      background-image:url("../assets/procrastinateLarge.jpg");
      height: 375px;
      width: 500px;
      color: #fff;
    }

    .course h1, h2, h3, h4, h5, h6{
      color:#fff;
    }
  
    @media screen and (max-width: 600px){
    
      .course-view {
        display: flex;
      flex-wrap: wrap;
      height: 230px;
      max-width: 300px;
      font-size:12px;
      background-image:url("../assets/procrastinateSmall.jpg");
    }
    
  }
</style>