<template>
  <div v-if="edCourse" >
    <form @submit.prevent="handleSubmit" class="class-form">
      <h4>Edit Course Form</h4>
      <label>Title</label><input type="text" required placeholder="title" v-model="edCourse.title">
      <label>Instructor</label><input type="text" required placeholder="instructor" v-model="edCourse.instructor">
      <label>Launch</label><input type="text" required placeholder="launch" v-model="edCourse.launch">
      <label>Status</label><input type="text" required placeholder="status" v-model="edCourse.status">
      <label>Col_Name</label><input type="text" required placeholder="col_name" v-model="edCourse.col_name">
      <label>Desscription</label><textarea required placeholder="description" v-model="edCourse.description"></textarea>
      <!-- <div class="error">{{ fileError }}</div> -->

      <button v-if="!isPending">UPDATE</button>
      <button v-else disabled>Saving...</button>
    </form>
    <div v-if="updated">course updated</div>
  </div>
  <div v-if="allCourses" class="module-container">
    <div v-for="doc in courseModules" :key="doc.id">
      <div class="module-listing" @click="showModule(doc)">{{doc.title}} </div>
    </div>
    <button @click="newModuleForm">
      ADD MODULE +
    </button>
  </div>
  <div v-if="modToEdit">
    <ModuleForm :moduleInfo="modToEdit" :modColName="edCourse.col_name" :key="componentKey" />
  </div>

  <div v-if="showAddForm">
    <AddModule @moduleAdded="wasItAdded" :modColName="edCourse.col_name" />
  </div>
 

</template>

<script>
import { ref, watchEffect } from 'vue'
import useDocument from '@/composables/useDocument'
import getOrderDocs from '@/composables/getOrderDocs'
import ModuleForm from '@/components/ModuleForm.vue'
import AddModule from '@/components/AddModule.vue'
import { coursesStore } from '@/store/coursesStore';


export default {
  components: { ModuleForm, AddModule },
  props: ['courseInfo'],
  setup(props) {
    const cstore = coursesStore();

    const edCourse = ref(props.courseInfo)
    const courseModules = ref([])
    const { isPending, error, deleteTheDoc, updateTheDoc } = useDocument('courses', props.courseInfo.id)
    const updated=ref(false)
    const allCourses = ref(cstore.getCourses)
    const { documents } = getOrderDocs('course-modules', 'course', props.courseInfo.col_name)
    const modToEdit = ref()
    const componentKey=ref(0)
    const showAddForm = ref(false)

    watchEffect(() => {
            courseModules.value = cstore.getCourseModules
        })

    const handleSubmit = async () =>{
      await updateTheDoc(edCourse.value)
      updated.value=true
    }

    const showModule =  (theMod) => {
      modToEdit.value = theMod
      showAddForm.value = false
      componentKey.value++
    }

    const newModuleForm = () => {
      showAddForm.value = true
      modToEdit.value = false
    }

    const wasItAdded = (addedYes) => {
      showAddForm.value = false
    }


    return { courseModules, showAddForm, isPending, updated, edCourse, handleSubmit, documents, showModule, allCourses, modToEdit, componentKey, newModuleForm, wasItAdded }
  }

}
</script>

<style>

.module-container2 {
  display:flex;
  justify-content: space-around;
  flex-direction: row;
}

.module-listing {
  padding: 10px;
  background-color: aquamarine;
  cursor: pointer;
  margin: 10px;
}

.class-form{
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-left:50px;
  margin-bottom: 50px;
}
</style>