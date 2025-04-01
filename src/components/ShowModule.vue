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
import { userStore } from "@/store/userStore";
import { ref } from 'vue'


export default {
    props: ['theModule'],
    components: { ShowVidDetails },
    setup(props) {
        const ustore = userStore();
        const theModule = ref(props.theModule)
        const currentVid = ref(ustore.getcurrentVideo)
       
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