<template>
  <div class="admin-container">
<div>
  <p>This is the admin panel area</p>
  
 <p>First pick which course to edit:</p>
</div>
  
  <div class="course-container">
<div v-for="course in courses" :key="course.id">
  <div class="course-listing" @click="goToCourse(course)">{{course.title}} </div>
</div>
<button class="course-listing" @click="newCourseForm">ADD COURSE +</button>
  </div>

  <div v-if="currentCourse">
<CourseForm :courseInfo="currentCourse" :key="componentKey" />
  </div>

  <div v-if="showAddForm">
<AddCourse @courseAdded="wasItAdded"/>
  </div>




</div>

</template>
    
<script>
    import { ref, reactive } from 'vue'
    import getCollection from '@/composables/getCollection'
    import CourseForm from '@/components/CourseForm.vue'
    import AddCourse from '@/components/AddCourse.vue'
    
    export default {
      components: {CourseForm, AddCourse },
     setup() {
      const currentCourse = ref()
      const { documents: courses} = getCollection('courses')
      const componentKey=ref(0)
      const showAddForm = ref(false)
    
      const goToCourse = (c) => {
        currentCourse.value = null
        if (c){
          currentCourse.value = c
          componentKey.value++
        }
       
      }
    
      const newCourseForm=()=>{
          showAddForm.value=true
          currentCourse.value=null
      }

       const wasItAdded =(addedYes)=>{
        console.log('i am here now')
        showAddForm.value =false
       }
    
    
      return { showAddForm, componentKey, goToCourse, courses, currentCourse, newCourseForm, wasItAdded }
     }
    }
    </script>
    
<style scoped>
    .admin-container {
          position: relative;
          top: 175px;
          display: flex;
          flex-direction: column;
          justify-content: center;
      }
    .course-listing{
      width:250px;
      height:300px;
      background-color: bisque;
      cursor: pointer;
      margin: 10px;
    }
</style>