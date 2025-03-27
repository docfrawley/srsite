<template>
    this is the add course form:
        <form @submit.prevent="handleSubmit">
            <h4>Add Course Form</h4>
            <label>Title</label><input type="text" required placeholder="title" v-model="title">
            <label>Instructor</label><input type="text" required placeholder="instructor" v-model="instructor">
            <label>Launch</label><input type="text" required placeholder="launch" v-model="launch">
            <label>Status</label><input type="text" required placeholder="status" v-model="status">
            <label>Col_Name</label><input type="text" required placeholder="col_name" v-model="col_name">
            <label>Desscription</label><textarea required placeholder="description"
                v-model="description"></textarea>
            <!-- <div class="error">{{ fileError }}</div> -->

            <button v-if="!isPending">ADD COURSE</button>
            <button v-else disabled>Saving...</button>
        </form>
        <div v-if="wasAdded">course added</div>   
</template>

<script>
import { ref } from 'vue'
import useCollection from '@/composables/useCollection'
import { coursesStore } from '@/store/coursesStore'

export default {
    emits: ['courseAdded'],
    setup(props, context) {
        const { error, addTheDocument } = useCollection('courses')
        const wasAdded = ref(false)
        const isPending=ref(false)
        const title = ref()
        const instructor = ref()
        const status = ref()
        const launch = ref()
        const col_name = ref()
        const description = ref()
        

        const handleSubmit = async () => {
            const res = await addTheDocument({
                title: title.value,
                instructor: instructor.value,
                status: status.value,
                launch: launch.value,
                col_name: col_name.value,
                description: description.value
            })
            isPending.value = false
            if (res){
                context.emit('courseAdded', {wasadded: true})
            }
            
        }


        return { isPending, wasAdded, handleSubmit, title, instructor, status, launch, col_name, description }
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