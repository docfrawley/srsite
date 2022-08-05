<template>

    <div class="module-view" >
        <p>MODULE: {{ theModule.module }} {{ theModule.title}}</p>
        <p>{{ theModule.description }}</p>

        <div v-for="video in theModule.videos" :key="video.id">
            <ShowVidDetails :theMod="theModule" :video="video" :percent="0"/> <br /><br />
        </div>
    </div>
</template>

<script>
import ShowVidDetails from '@/components/ShowVidDetails.vue'
import { coursesStore } from '@/store/coursesStore'
import { ref, watch } from 'vue'


export default {
    props: ['theModule'],
    components: { ShowVidDetails },
    setup(props) {
        const cstore = coursesStore()
        const theModule = ref(props.theModule)
        const currentVid = ref(cstore.currentVideo)

        watch(cstore.currentVideo, ()=>{
            currentVid.value = cstore.currentVideo
        })
        // const {error, documents: videos}  = getOrderDocs(props.document.course, 'module', props.document.modnumb)
        // const logInfo =(video)=>{
        //     context.emit('vidInfo', { ...video.vidinfo })
        // }

        return { currentVid, theModule }
    }
}



</script>

<style>

</style>