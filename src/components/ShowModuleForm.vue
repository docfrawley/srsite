<template>
    <div class="form-prompt">
        <form @submit.prevent="handleSubmit" action="">
        <div v-if="lastUpdated" class="text-xs mt-0.5 last-updated">Last Updated: {{ lastUpdated }}</div>
        <textarea ref="userinput" autofocus v-model="modNote"></textarea>
        <button>SAVE</button>
    </form>
    </div>
    
</template>

<script>
import { ref, watchEffect } from 'vue'
import { userStore } from '@/store/userStore'
import { coursesStore } from '@/store/coursesStore'
export default {
    
    emits: ['noteAdded'],
    setup(context) {
        const modNote = ref('')
        const ustore= userStore()
        const lastUpdated = ref()
        const cstore = coursesStore()
        const whichModule = ref(cstore.getCurrentModule)

        watchEffect(()=>{
            modNote.value = ''
            lastUpdated.value=''
            whichModule.value = cstore.getCurrentModule
            if (ustore.moduleNotes.length>0){
            const found = ustore.moduleNotes.find(element => element.modnumb===whichModule.value.modnumb)
            if (found){
                modNote.value = found.modnote
                if (found.createdAt){
                    lastUpdated.value = new Date(found.createdAt.seconds * 1000).toLocaleDateString()
                }
                
            }
        }
        })

        
        

        const handleSubmit = async () => {
            await ustore.setNote(modNote.value, whichModule.value.modnumb)
            context.emit('noteAdded', { wasadded: true })
            

        }
        return { modNote, handleSubmit, lastUpdated }
    }


}
</script >

<style scoped>


.form-prompt {
  position:relative;
  margin: 0 auto;
  padding: 10px;
  color: white;
  margin-bottom: 10px;
  font-size: 14px;
  
}
input, textarea {
  border: 0;
  border: 1px solid var(--lightblue);
  padding: 5px;
  outline: none;
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin: 10px auto;
  border-radius: .25rem;
  font-size: 12px;
  min-height: 400px;
  overflow-y: scroll;
}

.last-updated{
    color:var(--primepurple);
}
</style>