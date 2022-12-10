<template>
    <form @submit.prevent="handleSubmit" action="" class="rounded-md border-2 border-black mb-1 h-4.5 bg-gray-100">
        <label>{{ question }}</label>
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
    setup(props) {
        const answer = ref('')
        const ustore= userStore()
        const question = ref(props.prompt.prompt)

        const handleSubmit = () => {
            ustore.setAnswer(answer.value, props.prompt.id)
        }
        return { answer, handleSubmit, question }
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