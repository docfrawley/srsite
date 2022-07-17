<template>
  this is the video form:
  <div v-if="edVid">
    <form @submit.prevent="handleSubmit">
      <h4>Add/Edit Video</h4>
      <label>title</label><input type="text" required placeholder="title" v-model="edVid.title"/>
      <label>length</label><input type="text" required placeholder="length" v-model="edVid.length"/>
      <label>module</label><input type="text" required placeholder="modnumb" v-model="edVid.module"/>
      <label>order</label><input type="text" required placeholder="title" v-model="edVid.order"/>
      <label>description</label><textarea required placeholder="description" v-model="edVid.description"></textarea>
      <label>iframe</label><input type="text" required placeholder="iframe id" v-model="edVid.iframe"/>
      <!-- <div class="error">{{ fileError }}</div> -->

      <button v-if="!isPending">UPDATE</button>
      <button v-else disabled>Saving...</button>
    </form>
    <div v-if="updated">video updated</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { timestamp } from '@/firebase/config'
import useDocument from '@/composables/useDocument'
export default {
  props: ['videoInfo', 'courseCol'],
  setup(props) {
    const edVid = ref(props.videoInfo)
    const { isPending, error, deleteTheDoc, updateTheDoc } = useDocument(props.courseCol, props.videoInfo.id)
    const updated = ref(false)

    const handleSubmit = async () => {
      await updateTheDoc(edVid.value)
      updated.value = true
    }


    return { isPending, updated, edVid, handleSubmit }
  }

}
</script>

<style>
</style>