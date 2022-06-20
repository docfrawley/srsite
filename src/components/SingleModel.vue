<template>
    <div v-if="theVideo">
        <div v-html="theVideo" class="video-responsive"></div>
       
    </div>

    <div class="module-view">



        <div v-for="video in videos" :key="video.id">
            <ShowVidDetails :video="video" @logInfo="newVideo" /> <br /><br />
        </div>

    </div>
</template>

<script>
import getOrderDocs from '@/composables/getOrderDocs'
import ShowVidDetails from '@/components/ShowVidDetails.vue'
import { ref } from '@vue/reactivity'

export default {
    props: ['specifics'],
    components: { ShowVidDetails },
    setup(props){
        const theVideo = ref(props.specifics.iframe)
        const { error, documents: videos } = getOrderDocs(props.specifics.course, 'module', props.specifics.module)
        

        const newVideo =(specs) => {
            theVideo.value = specs.vidinfo.iframe
            
        }

       

        return { theVideo, videos, newVideo}
    }

}
</script>

<style>

</style>