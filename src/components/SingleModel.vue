<template>
    <div class="smcontainer">
        <div v-if="theVideo">
            <div class="video-responsive">
                <vue-vimeo-player class="video-responsive-item" :video-id="theVideo.iframe"
                    :options="{ responsive: true }" :events-to-emit="['ended','progress']" @progress="CheckProgress"
                    @ended="NowEnded" @pause="WhenPaused" />
            </div>
            <p>{{theVideo.title}}</p>
            <p>{{theVideo.description}}</p>
            <p>{{theVideo.length}}</p>
        </div>

        <div class=" module-view">



            <div v-for="video in videos" :key="video.id">
                <ShowVidDetails :video="video" :order="theVideo.order" :percent="percentVid" @logInfo="newVideo"
                    :key="percentVid" />
                <br /><br />
            </div>

        </div>
    </div>
</template>

<script>
import getOrderDocs from '@/composables/getOrderDocs'
import getLesson from '@/composables/getLesson'
import ShowVidDetails from '@/components/ShowVidDetails.vue'
import { ref } from '@vue/reactivity'
import { vueVimeoPlayer } from 'vue-vimeo-player'

export default {
    props: ['specifics'],
    components: { ShowVidDetails, vueVimeoPlayer },
    setup(props){
        const theVideo =  getLesson(props.specifics.course, props.specifics.module, props.specifics.order)
        const { error, documents: videos } = getOrderDocs(props.specifics.course, 'module', props.specifics.module)
        const ElementNum = ref(0)
        const percentVid = ref(0)
        const componentKey = ref(0)

        const newVideo =(specs) => {
            theVideo.value = specs.vidinfo
            ElementNum.value = theVideo.value.order - 1
            componentKey.value++
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

        return { theVideo, videos, componentKey, percentVid, newVideo, CheckProgress, NowEnded, WhenPaused }
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