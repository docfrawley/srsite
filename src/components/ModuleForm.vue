<template>
  this is the module form:
  <div v-if="edMod">
    <form @submit.prevent="handleSubmit">
      <h4>Add/Edit Module</h4>
      <label>Course</label><input type="text" required placeholder="course" v-model="edMod.course">
      <label>Module#</label><input type="text" required placeholder="modnumb" v-model="edMod.modnumb">
      <label>Title</label><input type="text" required placeholder="title" v-model="edMod.title">
      <label>Description</label><textarea required placeholder="description" v-model="edMod.description"></textarea>
      <!-- <div class="error">{{ fileError }}</div> -->

      <button v-if="!isPending">UPDATE</button>
      <button v-else disabled>Saving...</button>
    </form>
    <div v-if="updated">module updated</div>
  </div>

  <div v-if="documents" class="video-container">
    <div v-for="document in documents" :key="document.id">
      <div class="video-listing" @click="showVid(document)">{{document.title}} </div>
    </div>
    <button @click="showAddVideoForm">
      ADD Video +
    </button>
  </div>

  <div v-if="currentVideo">
    hello there
    <VideoForm :videoInfo="currentVideo" :courseCol="colName" :key="componentKey" />
  </div>

  <div v-if="showAddForm">
    <AddVideo @videoAdded="wasItAdded" :courseCol="colName" :moduleNumb="modNumber" />
  </div>

</template>

<script>
import { ref } from 'vue'
import useDocument from '@/composables/useDocument'
import VideoForm from '@/components/VideoForm.vue'
import getOrderDocs from '@/composables/getOrderDocs'
import AddVideo from '@/components/AddVideo.vue'


export default {
  props: ['moduleInfo', 'modColName'],
  components: {VideoForm, AddVideo},
  setup(props) {
    const edMod = ref(props.moduleInfo)
    const { isPending, error, deleteTheDoc, updateTheDoc } = useDocument('course-modules', props.moduleInfo.id)
    const { documents } = getOrderDocs(props.modColName, 'modules', props.moduleInfo.modnumb)
    const updated = ref(false)
    const componentKey = ref(0)
    const currentVideo = ref()
    const colName = ref(props.modColName)
    const showAddForm = ref(false)
    const modNumber = ref(props.moduleInfo.modnumb)


    const handleSubmit = async () => {
      console.log("got here: ", edMod)
      await updateTheDoc(edMod.value)
      updated.value = true
    }

    const showVid = (info) => {
      currentVideo.value = info
      componentKey.value++
      showAddForm.value = false
    }

    const wasItAdded = (addedYes) => {
      console.log("I got here now: ", addedYes)
      showAddForm.value = false
    }

    const showAddVideoForm = () =>{
      showAddForm.value=true
      currentVideo.value=null
    }


    return { modNumber, showAddVideoForm, isPending, updated, edMod, handleSubmit, showVid, componentKey, documents, colName, currentVideo, showAddForm, wasItAdded }
  }

}
</script>

<style>

.video-listing {
  padding: 10px;
  background-color: lightblue;
  cursor: pointer;
  margin: 10px;
}
</style>