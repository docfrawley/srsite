<template>
  this is the course form:
  <div v-if="edCourse">
    <form @submit.prevent="handleSubmit">
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
  <div v-if="documents" class="module-container">
    <div v-for="doc in documents" :key="doc.id">
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
import { ref } from 'vue'
import useDocument from '@/composables/useDocument'
import getOrderDocs from '@/composables/getOrderDocs'
import ModuleForm from '@/components/ModuleForm.vue'
import AddModule from '@/components/AddModule.vue'


export default {
  components: { ModuleForm, AddModule },
  props: ['courseInfo'],
  setup(props) {
    const edCourse = ref(props.courseInfo)
    const { isPending, error, deleteTheDoc, updateTheDoc } = useDocument('courses', props.courseInfo.id)
    const updated=ref(false)
    const { documents } = getOrderDocs('course-modules', 'course', props.courseInfo.col_name)
    const modToEdit = ref()
    const componentKey=ref(0)
    const showAddForm = ref(false)

    
    const handleSubmit = async () =>{
      await updateTheDoc(edCourse.value)
      updated.value=true
    }

    const showModule =  (theMod) => {
      modToEdit.value = theMod
      componentKey.value++
    }

    const newModuleForm = () => {
      showAddForm.value = true
      modToEdit.value = null
    }

    const wasItAdded = (addedYes) => {
      showAddForm.value = false
    }


    return { showAddForm, isPending, updated, edCourse, handleSubmit, showModule, documents, modToEdit, componentKey, newModuleForm, wasItAdded }
  }

}
</script>

<style>

.module-listing {
  padding: 10px;
  background-color: aquamarine;
  cursor: pointer;
  margin: 10px;
}
</style>