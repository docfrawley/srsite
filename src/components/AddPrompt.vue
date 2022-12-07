<template>
<form @submit.prevent="handleSubmit" class="w-2/3">
    <h4>Add Prompt</h4>
    <input type="text" required placeholder="Cue" v-model="vcue">
    <textarea required placeholder="Prompt" v-model="vprompt"></textarea>
    <!-- <div class="error">{{ fileError }}</div> -->

    <button v-if="!isPending">ADD MODULE</button>
    <button v-else disabled>Saving...</button>
</form>
</template>

<script>
import { ref } from 'vue'
import useCollection from '@/composables/useCollection'

export default {
    props: ['vid'],
    emits: ['promptAdded'],
    setup(props, context) {
        const { error, addTheDocument } = useCollection('questions')
        const wasAdded = ref(false)
        const isPending = ref(false)
        const vcue = ref()
        const vprompt = ref()


        const handleSubmit = async () => {
            isPending.value = true
            const res = await addTheDocument({
                prompt: vprompt.value,
                vcue: vcue.value,
                type: 'question',
                vid: props.vid,
                active: false
            })
            isPending.value = false
            if (res) {
                context.emit('promptAdded', { wasadded: true })
            }

        }


        return { isPending, wasAdded, handleSubmit, vcue, vprompt }
    }
}
</script>

<style>

</style>