<template>
    <form @submit.prevent="handleSubmit" action="" class="rounded-md border-2 border-black mb-1 h-4.5 bg-gray-100">
        <label>{{ question }} </label>
        <div v-if="lastUpdated" class="text-xs mt-0.5 text-green-500">Last Updated: {{ lastUpdated }}</div>
        <textarea ref="userinput" autofocus v-model="answer"></textarea>
        <button>SAVE</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import { userStore } from '@/store/userStore'
import { timestamp } from '@/firebase/config'
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
</script>

<style>
/* .Active {
    border-color: red;
    border-width: 5px;
    background-color: lightgrey;
} */
</style>