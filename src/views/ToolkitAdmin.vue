<template>
  <div class="temporary">this is the audio toolkit</div>
  <div class="course-container">
    <div v-for="course in courses" :key="course.id">
      <div class="course-listing" @click="goToCourse(course)">{{ course.title }} </div>
    </div>
  </div>
  
  <div v-if="currentCourse">
    <GetMods :modColName="currentCourse.col_name" />
  </div>
  
  
</template>

<script>
import { ref, reactive } from 'vue'
import getCollection from '@/composables/getCollection'
import GetMods from '@/components/GetMods.vue'
export default {
  components: { GetMods },
  setup() {
    const currentCourse = ref()
    const { documents: courses } = getCollection('courses')
    const componentKey = ref(0)

    const goToCourse = (c) => {
      currentCourse.value = null
      if (c) {
        currentCourse.value = c
        componentKey.value++
        console.log("here: ", currentCourse.value)
      }

    }

    return { courses, goToCourse, currentCourse }
  }
} 
</script>



<style scoped>
.temporary{
    padding-top:100px;
}
.course-listing {
  width: 250px;
  background-color: bisque;
  cursor: pointer;
  margin: 10px;
  padding:10px;
  border-radius: 3px;
}

</style>