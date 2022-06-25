<template>
    <div @click="returnToAll" class="course">
        Course View: {{whichcourse}}
    </div>



    <div v-if="whichVid.module">
        <div class="module-list">
            <div v-for="document in documents" :key="document.id">
                <span class="ind-mod" @click="moveModule(document.module)">{{document.title}} </span>
            </div>
        </div>
        <div v-if="whichVid.iframe">
            <SingleModel :specifics="whichVid" />
        </div>

        <div class="next-previous">
            <div class="np-module" v-if="whichVid.module>1" @click="moveModule(whichVid.module-1)">Previous Module</div>
            <div class="np-module" v-if="whichVid.module<documents.length" @click="moveModule(whichVid.module+1)">Next
                Module</div>
        </div>

    </div>

    <div v-else>
        <div v-for="document in documents" :key="document.id">
            <ShowModule :document="document" @vidInfo="showvidInfo" />
        </div>
    </div>

</template>

<script>
import ShowModule from '@/components/ShowModule.vue'
import getOrderDocs from '@/composables/getOrderDocs'
import getLesson from '@/composables/getLesson'
import { ref } from 'vue'
import SingleModel from '@/components/SingleModel.vue'

export default {
    name: 'Courseview',
    components: { ShowModule, SingleModel },
    props: ['course'],
    setup(props) {
        const { error, documents } = getOrderDocs('course-modules', 'course', props.course)
        
        const whichcourse = ref(props.course)
        const whichVid = ref({})

        whichVid.value.iframe=''
        whichVid.value.module=null
        whichVid.value.course = whichcourse

        const showvidInfo = (video) =>{
            whichVid.value.iframe = video.iframe
            whichVid.value.module = video.module
           
        }

        const moveModule = async (theMod)=>{
            whichVid.value.iframe  = await getLesson(whichcourse.value, theMod, 1)
            whichVid.value.module = theMod
        }

        

        const returnToAll=()=>{
            whichVid.value.iframe = ''
            whichVid.value.module = null
            whichVid.value.course = whichcourse
            
        }

        

        return { whichcourse, error, documents, showvidInfo, whichVid, returnToAll, moveModule}
    }
}
</script>

<style scoped>
    .module-list{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .ind-mod {
        display: inline-block;
        cursor: pointer;
    }
    .next-previous {
        display: flex;
        justify-content: center;
    }
    .np-module {
        cursor: pointer;
        margin: 0 15px;
    }

</style>