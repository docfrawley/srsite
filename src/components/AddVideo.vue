<template>
    this is the add video form:
    <form @submit.prevent="handleSubmit">
        <h4>Add Video Form for the Col_name: {{course}} and module # {{module}} with order # of {{order+1}}</h4>
        <label>Title</label><input type="text" required placeholder="title" v-model="title">
        <label>Length</label><input type="text" required placeholder="length" v-model="length">
        <p>make sure to add 'class="video-responsive-item"'<br />And remove any vimeo styles</p>
        <label>iframe</label><textarea required placeholder="iframe" v-model="iframe"></textarea>
        <label>Description</label><textarea required placeholder="Description" v-model="description"></textarea>
        <!-- <div class="error">{{ fileError }}</div> -->

        <button v-if="!isPending">ADD VIDEO</button>
        <button v-else disabled>Saving...</button>
    </form>
    <div v-if="wasAdded">course added</div>
</template>

<script>
import { ref } from 'vue'
import useCollection from '@/composables/useCollection'
import getLength from '@/composables/getLength'

export default {
    props: ['courseCol', 'moduleNumb'],
    emits: ['videoAdded'],
    setup(props, context) {
        const { error, addTheDocument } = useCollection(props.courseCol)
        const {order} = getLength(props.courseCol, 'module', props.moduleNumb)
        const wasAdded = ref(false)
        const isPending = ref(false)
        const title = ref()
        const course = ref(props.courseCol)
        const module = ref(props.moduleNumb)
        const description = ref()
        const iframe = ref()
        const length = ref()

        const handleSubmit = async () => {
            const res = await addTheDocument({
                course: course.value,
                title: title.value,
                module: module.value,
                order: order.value+1,
                iframe: iframe.value,
                description: description.value,
                length: length.value
            })
            isPending.value = false
            if (res) {
                context.emit('videoAdded', { wasadded: true })
            }

        }


        return { isPending, wasAdded, handleSubmit, title, course, module, description, order, iframe, length }
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