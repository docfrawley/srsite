<template>
    this is the add module form:
    <form @submit.prevent="handleSubmit">
        <h4>Add Module Form of course with Col_Name of: {{col_name}} and this will be the {{order+1}} module</h4>
        <label>Title</label><input type="text" required placeholder="title" v-model="title">
        <label>Description</label><textarea required placeholder="Description" v-model="description"></textarea>
        <!-- <div class="error">{{ fileError }}</div> -->

        <button v-if="!isPending">ADD MODULE</button>
        <button v-else disabled>Saving...</button>
    </form>
    <div v-if="wasAdded">course added</div>
</template>

<script>
import { ref } from 'vue'
import useCollection from '@/composables/useCollection'
import getLength from '@/composables/getLength'

export default {
    props: ['modColName'],
    emits: ['moduleAdded'],
    setup(props, context) {
        const { error, addTheDocument } = useCollection('course-modules')
        const wasAdded = ref(false)
        const isPending = ref(false)
        const title = ref()
        const course = ref()
        const { order } = getLength(props.modColName)
        const description = ref()
        const col_name = ref(props.modColName)


        const handleSubmit = async () => {
            const res = await addTheDocument({
                course: col_name.value,
                title: title.value,
                modnumb: order.value + 1,
                description: description.value
            })
            isPending.value = false
            if (res) {
                context.emit('moduleAdded', { wasadded: true })
            }

        }


        return { isPending, wasAdded, handleSubmit, title, course, order, description, col_name }
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