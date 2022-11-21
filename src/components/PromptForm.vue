<template>
    <form @submit.prevent="handleSubmit" class="prompt-form">
        <input type="text" required v-model="allprompt.vcue">
        <textarea required v-model="allprompt.prompt"></textarea>
        <!-- <div class="error">{{ fileError }}</div> -->
    
        <button v-if="!isPending"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
            <path
                d="M5 19h1.4l8.625-8.625-1.4-1.4L5 17.6ZM19.3 8.925l-4.25-4.2 1.4-1.4q.575-.575 1.413-.575.837 0 1.412.575l1.4 1.4q.575.575.6 1.388.025.812-.55 1.387ZM17.85 10.4 7.25 21H3v-4.25l10.6-10.6Zm-3.525-.725-.7-.7 1.4 1.4Z" />
        </svg></button>
        <button v-else disabled>Saving...</button>
        <button @click="handleDelete">
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"
                @click="handleDelete">
                <path
                    d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" />
            </svg>
        </button>
        
    </form>

    <div v-if="updated">module updated</div>
    <!-- <p>{{ document.vcue }}</p>
    <p class="the-prompt">{{ document.prompt }}</p> -->
   

</template>

<script>
import { ref } from 'vue'
import useDocument from '@/composables/useDocument'



export default {
    props: [ 'vprompt'],
    components: { },
    setup(props) {
        const { isPending, error, deleteTheDoc, updateTheDoc } = useDocument('questions', props.vprompt.id)
        const updated = ref(false)
        const allprompt = ref(props.vprompt)

        const handleDelete = async () => {
            await deleteTheDoc(allprompt.value)
        }


        const handleSubmit = async () => {
            console.log("got here: ", allprompt.value)
            await updateTheDoc(allprompt.value)
            updated.value = true
        }

   


        return { isPending, updated, handleSubmit, allprompt, handleDelete}
    }

}
</script>

<style scoped>
input[type=text] {
    width:40px;
    background-color: lightgray;
}
.prompt-form {
    width:700px;
    height:200px;
    margin:0px;
    display: flex;
    justify-content: flex-start;
}
button {
    height: 40px;
    width: 50px;
}


</style>