<template>

    <div class="module-view">
        <p>MODULE: {{ document.module }} {{ document.title}}</p>
        <p>{{ document.description }}</p>

        <div v-for="video in videos" :key="video.id">
            <ShowVidDetails :video="video" @logInfo="logInfo"/> <br /><br />
        </div>
    </div>
</template>

<script>
import getOrderDocs from '@/composables/getOrderDocs'
import ShowVidDetails from '@/components/ShowVidDetails.vue'

export default {
    props: ['document'],
    components: { ShowVidDetails },
    setup(props, context) {
        const {error, documents: videos}  = getOrderDocs(props.document.course, 'module', props.document.module)

        const logInfo =(video)=>{
            context.emit('vidInfo', { ...video.vidinfo })
        }

        return {error, videos, logInfo}
    }
}



</script>

<style>

</style>