<template>
    <form @submit.prevent="handleSubmit" action="" class="rounded-md border-2 border-black mb-1 h-4.5 bg-gray-100">
        <label>{{ question }}</label>
        <textarea ref="userinput" autofocus v-model="answer"></textarea>
        <button>SAVE</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import useDocument from '@/composables/useDocument'
export default {
    props: ['prompt'],
    setup(props) {
        const answer = ref('')
        const question = ref(props.prompt.prompt)

        const handleSubmit = () => {
            console.log('answer: ', answer.value)
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