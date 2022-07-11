<template>
    <div v-if="theVideo">
        <div v-html="theVideo.iframe" class="video-responsive"></div>
       <p>{{theVideo.title}}</p>
       <p>{{theVideo.description}}</p>
       <p>{{theVideo.length}}</p>
    </div>

    <div class="module-view">



        <div v-for="video in videos" :key="video.id">
            <ShowVidDetails :video="video" @logInfo="newVideo" /> <br /><br />
        </div>

    </div>
</template>

<script>
import getOrderDocs from '@/composables/getOrderDocs'
import getLesson from '@/composables/getLesson'
import ShowVidDetails from '@/components/ShowVidDetails.vue'
import { ref } from '@vue/reactivity'

export default {
    props: ['specifics'],
    components: { ShowVidDetails },
    setup(props){
        const theVideo =  getLesson(props.specifics.course, props.specifics.module, props.specifics.order)
        const { error, documents: videos } = getOrderDocs(props.specifics.course, 'module', props.specifics.module)

        const newVideo =(specs) => {
            theVideo.value = specs.vidinfo
        }

        return { theVideo, videos, newVideo}
    }

}
</script>

<style>

</style>