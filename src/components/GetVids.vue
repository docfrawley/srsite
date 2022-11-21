<template>
   

    <div v-if="documents" class="video-container">
        <div v-for="document in documents" :key="document.id">
            <div class="video-listing" @click="showVid(document)">{{ document.title }} </div>
        </div>
       
    </div>

    <div v-if="currentVideo" class="order-questions">
        <div class="video-resp">
            <p>{{currentVideo.title}}</p>
            <vue-vimeo-player class="video-item" :video-id="currentVideo.iframe" :options="{ responsive: true }" />
        </div>
       <div class="all-prompts">
            <AddPrompt @promptAdded="wasItAdded" :vid="currentVideo.id"/>
            <GetQuestions :videoID="currentVideo.id" :key="componentKey"/>
        </div>
    </div>

</template>

<script>
import { ref } from 'vue'
import getOrderDocs from '@/composables/getOrderDocs'
import { vueVimeoPlayer } from 'vue-vimeo-player'
import GetQuestions from '@/components/GetQuestions.vue'
import AddPrompt from './AddPrompt.vue'

export default {
    props: ['moduleInfo'],
    components: { vueVimeoPlayer, GetQuestions, AddPrompt },
    setup(props) {
        const { documents } = getOrderDocs(props.moduleInfo.course, 'module', props.moduleInfo.modnumb)
        const componentKey = ref(0)
        const currentVideo = ref()
  
        const wasItAdded = () => {
            componentKey.value++
        }
   
        const showVid = (info) => {
            currentVideo.value = info
            componentKey.value++
        }

        return {documents, showVid, currentVideo, componentKey, wasItAdded }
    }

}
</script>

<style>

.video-listing {
    padding: 10px;
    background-color: lightblue;
    cursor: pointer;
    margin: 10px;
}

.video-resp {
    position: relative;
    display: block;
    width: 600px;
    height: 400px;
    overflow: hidden;
    border-radius: 5px;
}

.video-resp-item {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;

}

.order-questions{
    display: flex;
    margin-top: 50px;
}

.all-prompte{
    display: flex;
    flex-direction: column;
}
</style>