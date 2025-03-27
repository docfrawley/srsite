<template>
  <div class="admin-container">
<div>
  <p>This is the admin panel area</p>
  
 <p>First pick which course to edit:</p>
</div>
  
  <div class="course-container">
<div v-for="course in allCourses" :key="course.id">
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
    import CourseForm from '@/components/CourseForm.vue'
    import AddCourse from '@/components/AddCourse.vue'
    import { coursesStore } from '@/store/coursesStore';
    
    export default {
      components: {CourseForm, AddCourse },
     setup() {
      const currentCourse = ref()
      const cstore = coursesStore();
      const allCourses = ref(cstore.getCourses)
      const componentKey=ref(0)
      const showAddForm = ref(false)
    
      const goToCourse = (c) => {
        currentCourse.value = null
        if (c){
          currentCourse.value = c
          componentKey.value++
          showAddForm.value = false
          cstore.setCourseModules(c.col_name)
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
    
    
      return { showAddForm, componentKey, goToCourse, allCourses, currentCourse, newCourseForm, wasItAdded }
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
      height:50px;
      background-color: bisque;
      cursor: pointer;
      margin: 10px;
    }
</style>