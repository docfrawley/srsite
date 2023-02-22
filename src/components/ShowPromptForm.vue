<template>
    <div class="form-prompt">
        <form @submit.prevent="handleSubmit" action="">
        <label>{{ question }} </label>
        <div v-if="lastUpdated" class="text-xs mt-0.5 last-updated">Last Updated: {{ lastUpdated }}</div>
        <textarea ref="userinput" autofocus v-model="answer"></textarea>
        <button>SAVE</button>
    </form>
    </div>
    
</template>

<script>
import { ref } from 'vue'
import { userStore } from '@/store/userStore'
export default {
    props: ['prompt'],
    emits: ['answerAdded'],
    setup(props, context) {
        const answer = ref('')
        const ustore= userStore()
        const question = ref(props.prompt.prompt)
        const lastUpdated = ref()

        if (ustore.promptAnswers.length>0){
            const found = ustore.promptAnswers.find(element => props.prompt.id===element.promptId)
            if (found){
                answer.value = found.answer
                if (found.createdAt){
                    lastUpdated.value = new Date(found.createdAt.seconds * 1000).toLocaleDateString()
                }
                
            }
        }
        

        const handleSubmit = async () => {
            await ustore.setAnswer(answer.value, props.prompt.id)
            context.emit('answerAdded', { wasadded: true })
            

        }
        return { answer, handleSubmit, question, lastUpdated }
    }


}
</script >

<style scoped>
/* .Active {
    border-color: red;
    border-width: 5px;
    background-color: lightgrey;
} */

.form-prompt {
  position:relative;
  margin: 0 auto;
  padding: 10px;
  border-radius: .25rem;
  box-shadow: 1px 2px 3px rgba(50,50,50,0.05);
  border: solid 1px var(--primeblue);
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
}

.last-updated{
    color:var(--primepurple);
}
</style>