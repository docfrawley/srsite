<template>
    <div class="absolute top-10 mt-5 pt-5  inset-0 z-40 opacity-75 bg-pink-500 h-1/2 w-1/2">

        <div class="bg-black w-4 float-right cursor-pointer" @click="closeModal">X</div>
        <div class="text-2xl text-black opacity-100">Hello there</div>
        <div>{{ item.dimension }}</div>
        <div>{{ item.strategy }}</div>
        
    </div>

</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    props:['theTech'],
    emits: ['modalClose'],
    setup(props, context) {
        const item = ref(props.theTech)

        function closeModal() {
            context.emit('modalClose')
        }

        return { item, closeModal}

    }

}
</script>

<style>

</style>>