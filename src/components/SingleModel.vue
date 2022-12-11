<template>
    
    <div class="smcontainer">
        <div v-if="currentVideo.iframe">
            <div class="video-responsive">
                <vue-vimeo-player class="video-responsive-item" :video-id="currentVideo.iframe"
                    :options="{ responsive: true }" :events-to-emit="['ended','progress', 'pause', 'timeupdate']"
                    @progress="CheckProgress" @ended="NowEnded" @pause="WhenPaused" @timeupdate="ShowUpdate"/>
            </div>
            <div class="video-details">
                <p>{{currentModule.title}}, {{ currentVideo.title}}</p>
                <p>{{ currentVideo.description}}</p>
            </div>

        </div>
        <div class="flex flex-col questions-class">
            <div v-for="question in currentVideo.questions" :key="question.id" >
                <ShowPromptForm :prompt="question" :class="{Active: question.active}" @answerAdded="wasItAdded" :key="answerKey"/>
                <!-- <div :class="{Active: question.active}"> -->
                    <!-- <form @submit.prevent="handleSubmit" action="" class="rounded-md border-2 border-black mb-1 h-4.5 bg-gray-100" :class="{Active: question.active}">
                        <label>{{ question.prompt }}</label>
                        <textarea ref="userinput" autofocus v-model="answer"></textarea>
                        <button >SAVE</button>
                    </form>
                </div> -->
                   
            </div>
        </div>
        
        <div class="module-view">
        
        
        
            <div v-for="video in currentModule.videos" :key="video.id">
                <div @click="newVideo(video)">
                    <ShowVidDetails :theMod="currentModule" :video="video" :percent="percentVid" :key="componentKey" />
        
                </div>
        
            </div>
        
        </div>
        
    </div>

    
</template>

<script>
import ShowVidDetails from '@/components/ShowVidDetails.vue'
import ShowPromptForm from './ShowPromptForm.vue'
import { ref } from '@vue/reactivity'
import { onMounted } from 'vue'
import { vueVimeoPlayer } from 'vue-vimeo-player'
import { coursesStore } from '@/store/coursesStore'
import { userStore } from '@/store/userStore'
import { timestamp } from '@/firebase/config'

export default {
    components: { ShowVidDetails, vueVimeoPlayer, ShowPromptForm},
    setup(){
        const cstore = coursesStore()
        const ustore = userStore()
        // const theVideo =  getLesson(props.specifics.course, props.specifics.module, props.specifics.order)
        // const { error, documents: videos } = getOrderDocs(props.specifics.course, 'module', props.specifics.module)
        const ElementNum = ref(0)
        const percentVid = ref(0)
        const componentKey = ref(0)
        const currentModule = ref(cstore.currentModule)
        const currentVideo = ref(cstore.currentVideo)
        const showForm = ref(false)
        const userinput=ref(null)
        const answer = ref()
        const answerKey = ref(0)
  

        if (currentVideo.value.percentages){
            percentVid.value = currentVideo.value.percentages
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

       
        const NowEnded = ()=>{
            console.log("i am here now:", componentKey.value)
                ElementNum.value++
                console.log('two')
            if (ElementNum.value == currentModule.value.videos.length){
                    ElementNum.value = 0
                }
                console.log('three')
            currentVideo.value =currentModule.value.videos[ElementNum.value]
                console.log('four')
            componentKey.value++
        }

        const WhenPaused = () => {
            cstore.setPercentage(percentVid.value)
        }

        const handleSubmit = ()=> {
            console.log('answer: ', answer.value)
        }

        const ShowUpdate = (e,d,p) => {
            for (let i = 0; i < currentVideo.value.questions.length; i++) {
                if (i + 1 != currentVideo.value.questions.length){
                    if (currentVideo.value.questions[i].vcue <= e.seconds && e.seconds <= currentVideo.value.questions[i + 1].vcue) {
                        currentVideo.value.questions.forEach(element => {
                            element.active=false
                        });
                        currentVideo.value.questions[i].active = true
                    }
                } else{
                    if (currentVideo.value.questions[i].vcue <= e.seconds) {
                        currentVideo.value.questions.forEach(element => {
                            element.active = false
                        });
                        currentVideo.value.questions[i].active = true
                    }
                }
                
            }
        }

        const wasItAdded = (addedYes) => {
            answerKey.value++
        }

        return { answerKey, wasItAdded, currentVideo, currentModule, componentKey, percentVid, newVideo, CheckProgress, NowEnded, WhenPaused, ShowUpdate, showForm, handleSubmit, userinput, answer }
    }

}
</script>

<style scoped>
.Active {
    border-color: red;        
    border-width: 5px;
    background-color: lightgrey;
}

.questions-class{
    font-size: 14px;
    width:500px;
    margin:20px;
    height:500px;
    overflow: hidden;
    overflow: -moz-scrollbars-vertical;
        overflow-y: scroll;
}

.smcontainer{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 200px;
}
.video-responsive {
    position: relative;
    display: block;
    width: 600px;
    height: 340px;
    overflow: hidden;
}

.video-details {
    padding: 20px;
    background: #fff;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    height: 200px;
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

.video-responsive-item iframe {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}
</style>