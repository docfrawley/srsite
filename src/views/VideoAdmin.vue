<template>
  This is the admin panel area

  First pick which course to edit:
  <div class="course-container">
    <div v-for="course in courses" :key="course.id">
      <div class="course-listing" @click="goToCourse(course)">{{course.title}} </div>
    </div>
  </div>
  
<div @click="newCourseForm">ADD COURSE +</div>

<div v-if="currentCourse">
  <div v-if="no_ed_course">
    <div @click="!no_ed_course">
      Edit Course Info
    </div>
  </div>
  <div v-else>
    <ShowCourseForm :courseInfo="currentCourse"/>
  </div>
</div>

  <div v-if="themods" class="module-container">
      <div v-for="amod in themods.value" :key="amod.id" >
          <div class="module-listing" @click="showModule(amod.module)">{{amod.title}} </div>
      </div>
      <div>
        ADD MODULE +
      </div>
  </div>

  <div v-if="currentModule" class="video-container">
    <div v-for="vid in currentModule.value" :key="vid.id" >
          <div class="video-listing" @click="showVid(vid.title)">{{vid.title}} </div>
      </div>
      <div>
        ADD Video +
      </div>
  </div>

  

  
</template>

<script>
import { ref } from 'vue'
import getOrderDocs from '@/composables/getOrderDocs'
import getCollection from '@/composables/getCollection'
import getLesson from '@/composables/getLesson'

export default {
 setup() {
  const themods = ref()
  const currentCourse = ref()
  const currentModule = ref()
  const no_ed_course = ref(true)
  const { error, documents: courses} = getCollection('courses')

  const goToCourse = async (c) => {
    currentCourse.value = c
    const {error: err, documents:mods } = await getOrderDocs('course-modules', 'course', c.col_name)
    if (mods){
      themods.value = mods
    }
  }

  const showModule = async (theMod)=>{
          const {error: the_error, documents:vids}  = await getOrderDocs(currentCourse.value.col_name, 'modules', theMod)
            currentModule.value = vids            
        }

  const showVid = (info)=>{
    console.log("made it to vid info: ", info)
  }

  const newCourseForm=()=>{
      currentCourse.value.col_name = "new_course"
  }


  return { no_ed_course, goToCourse, error, courses, themods, showModule, currentCourse, currentModule, showVid, newCourseForm}
 }
}
</script>

<style scoped>
.course-container, .module-container, .video-container{
  display:flex;
  justify-content: space-between;
  flex-direction: row;
}
.course-listing{
  width:250px;
  height:300px;
  background-color: bisque;
  cursor: pointer;
  margin: 10px;
}

.module-listing{
  padding:10px;
  background-color:aquamarine;
  cursor: pointer;
  margin: 10px;
}

.video-listing{
  padding:10px;
  background-color:lightblue;
  cursor: pointer;
  margin: 10px;
}


</style>