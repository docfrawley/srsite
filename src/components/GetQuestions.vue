<template>

    <div v-if="documents" >
        <div v-for="document in documents" :key="document.id" class="questions-pos">
            <div class="display-question">
                <PromptForm :vprompt="document" />
                
            </div>
          
        </div>

    </div>

 
</template>

<script>
import { ref } from 'vue'
import getOrderDocs from '@/composables/getOrderDocs'
import AddPrompt from './AddPrompt.vue'
import PromptForm from './PromptForm.vue'

export default {
    props: ['videoID'],
    components: { AddPrompt, PromptForm},
    setup(props) {
        const { documents } = getOrderDocs('questions', 'vid', props.videoID)
        const componentKey = ref(0)
        const currentVideo = ref(props.videoID)

 


        return { documents, currentVideo }
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
.display-question {
    display: flex;
    width:700px;
    justify-content: space-around;
    margin:15px;
}

.questions-pos{
    display: flex;
    flex-direction: column;
    align-content: space-around;
}

.the-prompt{
    width:500px;
}


</style>