<template>
    <div class="smcontainer">
        <div v-if="currentVideo.iframe">
            <div class="video-responsive">
                <vue-vimeo-player class="video-responsive-item" :video-id="currentVideo.iframe"
                    :options="{ responsive: true }" :events-to-emit="['ended','progress']" @progress="CheckProgress"
                    @ended="NowEnded" @pause="WhenPaused" />
            </div>
            <p>{{ currentVideo.title}}</p>
            <p>{{ currentVideo.description}}</p>
            <p>{{ currentVideo.length}}</p>
        </div>

        <div class=" module-view">



            <div v-for="video in currentModule.videos" :key="video.id">
                <div @click="newVideo(video)">
                    <ShowVidDetails :theMod="currentModule" :video="video" :order="video.order" :percent="0"
                        :key="componentKey" />
                    <br /><br />
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import getOrderDocs from '@/composables/getOrderDocs'
import getLesson from '@/composables/getLesson'
import ShowVidDetails from '@/components/ShowVidDetails.vue'
import { ref, watchEffect } from '@vue/reactivity'
import { vueVimeoPlayer } from 'vue-vimeo-player'
import { coursesStore } from '@/store/coursesStore'

export default {
    components: { ShowVidDetails, vueVimeoPlayer },
    setup(){
        const cstore = coursesStore()
        // const theVideo =  getLesson(props.specifics.course, props.specifics.module, props.specifics.order)
        // const { error, documents: videos } = getOrderDocs(props.specifics.course, 'module', props.specifics.module)
        const ElementNum = ref(0)
        const percentVid = ref(0)
        const componentKey = ref(0)
        const currentModule = ref()
        const currentVideo = ref()

        currentVideo.value = cstore.currentVideo
        currentModule.value = cstore.currentModule

        // watchEffect(() => {
        //     currentVideo.value = cstore.currentVideo
        //     currentModule.value = cstore.currentModule
        // })

        const newVideo =(specs) => {
            currentVideo.value = specs
            cstore.setCurrentVideo(specs)
            componentKey.value++
            console.log('got here: ', cstore.currentVideo)
        }

        const CheckProgress = (e, d, p)=>{
            percentVid.value=e.percent
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