<template>
    <div class="smcontainer">
        <div v-if="currentVideo.iframe">
            <div class="video-responsive">
                <vue-vimeo-player class="video-responsive-item" :video-id="currentVideo.iframe"
                    :options="{ responsive: true }" :events-to-emit="['ended','progress', 'pause']" @progress="CheckProgress"
                    @ended="NowEnded" @pause="WhenPaused" />
            </div>
            <p>{{ currentVideo.title}}</p>
            <p>{{ currentVideo.description}}</p>
            <p>{{ currentVideo.length}}</p>
        </div>

        <div class=" module-view">



            <div v-for="video in currentModule.videos" :key="video.id">
                <div @click="newVideo(video)">
                    <ShowVidDetails :theMod="currentModule" :video="video" :percent="percentVid"
                        :key="componentKey" />
                    <br /><br />
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import ShowVidDetails from '@/components/ShowVidDetails.vue'
import { ref } from '@vue/reactivity'
import { vueVimeoPlayer } from 'vue-vimeo-player'
import { coursesStore } from '@/store/coursesStore'
import { userStore } from '@/store/userStore'

export default {
    components: { ShowVidDetails, vueVimeoPlayer },
    setup(){
        const cstore = coursesStore()
        const ustore = userStore()
        // const theVideo =  getLesson(props.specifics.course, props.specifics.module, props.specifics.order)
        // const { error, documents: videos } = getOrderDocs(props.specifics.course, 'module', props.specifics.module)
        const ElementNum = ref(0)
        const percentVid = ref(0)
        const componentKey = ref(0)
        const currentModule = ref()
        const currentVideo = ref()


        currentVideo.value = cstore.currentVideo
        currentModule.value = cstore.currentModule

        if (currentVideo.value.percentages){
            percentVid.value = currentVideo.value.percentages[0].percentage
        }

        // watchEffect(() => {
        //     currentVideo.value = cstore.currentVideo
        //     currentModule.value = cstore.currentModule
        // })

        const newVideo = async (specs) => {
            // if (percentVid.value > 0){
            //     if (currentVideo.value.percentages){
            //         if (percentVid.value > currentVideo.value.percentages)
            //         {cstore.setPercentage(percentVid.value)}
            //     } else {
            //         cstore.setPercentage(percentVid.value)
            //     }
            // }
            currentVideo.value = specs
            cstore.setCurrentVideo(specs)
            percentVid.value = (currentVideo.value.percentages)?currentVideo.value.percentages:0
            componentKey.value++
        }

        const CheckProgress = (e, d, p)=>{
            if (currentVideo.value.percentages){
                percentVid.value = currentVideo.value.percentages > e.percent ? currentVideo.value.percentages: e.percent
            } else {
                percentVid.value = e.percent
            }
            
            componentKey.value++
        }

       
        const NowEnded = (e,d,p)=>{
            
                ElementNum.value++
                if (ElementNum.value == videos.value.length){
                    ElementNum.value = 0
                }
                theVideo.value =videos.value[ElementNum.value]
            componentKey.value++
        }

        const WhenPaused = () => {
            console.log('on pause: ')
            cstore.setPercentage(percentVid.value)
        }

        return { currentVideo, currentModule, componentKey, percentVid, newVideo, CheckProgress, NowEnded, WhenPaused }
    }

}
</script>

<style>
.smcontainer{
    display: flex;
}
.video-responsive {
    position: relative;
    display: block;
    width: 600px;
    height: 400px;
    overflow: hidden;
    margin-top: 25px;
}

.video-responsive-item {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    
}

.video-responsive-item iframe{
border-radius: 10px;
}
</style>