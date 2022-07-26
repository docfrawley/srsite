<template>
    <div @click="returnToAll" class="current-course">
        <div>
            <h1>{{currentCourse.title}}</h1>
        </div>
        <div>
            <h3>{{currentCourse.description}}</h3>
        </div>
        <div>
            <h4>Taught by {{currentCourse.instructor}}</h4>
        </div>
    </div>


    <div v-if="currentVideo.iframe">
        <!-- <div class="module-list">
            <div v-for="document in documents" :key="document.id">
                <span class="ind-mod" @click="moveModule(document.modnumb)">{{document.title}} </span>
            </div>
        </div> -->
        <SingleModel :key="componentKey" />

        <!-- <div class="next-previous">
            <div class="np-module" v-if="whichVid.module>1" @click="moveModule(whichVid.module-1)">Previous Module
            </div>

            <div class="np-module" v-if="whichVid.module<documents.length" @click="moveModule(whichVid.module+1)">
                Next
                Module</div>
        </div> -->
    </div>

    <!-- <div v-else>
        <div v-for="document in documents" :key="document.id">
            <ShowModule :document="document" @vidInfo="showvidInfo" />
        </div>
    </div> -->

    <div v-else>
        <div v-for="aModule in fullCourse" :key="aModule.id">
            <ShowModule :theModule="aModule" />
            <br />
        </div>
    </div>

</template>

<script>
import ShowModule from '@/components/ShowModule.vue'
import getOrderDocs from '@/composables/getOrderDocs'
import { ref, reactive, watchEffect, watch } from 'vue'
import SingleModel from '@/components/SingleModel.vue'
import { coursesStore } from '@/store/coursesStore'


export default {
    name: 'Courseview',
    components: { ShowModule, SingleModel },
    props: ['course'],
    setup(props) {
        // const { error, documents } = getOrderDocs('course-modules', 'course', props.course)
        // const whichVid= reactive({
        //     course:props.course,
        //     module: null,
        //     order: null
        // })
        const componentKey = ref(0)
        const cstore = coursesStore()
        const fullCourse = ref()
        const currentCourse = ref(cstore.currentCourse)
        const currentModule = ref()
        const currentVideo = ref()

        currentModule.value = cstore.currentModule
        currentVideo.value = cstore.currentVideo        

        watchEffect(() => {
            fullCourse.value = cstore.courseAll
            currentVideo.value = cstore.currentVideo
            currentModule.value = cstore.currentModule
        })
        

        const showvidInfo= (video) =>{
            // whichVid.module = video.module
            // whichVid.order=video.order
            // componentKey.value++
        }

        const moveModule = async(theMod)=>{
        //    whichVid.module=theMod
        //    whichVid.order=1
        //     componentKey.value++
        }

        const returnToAll=()=>{
            componentKey.value = 0
            cstore.currentVideo={}
            cstore.currentModule={}
        }

        

        return {currentCourse, showvidInfo, returnToAll, moveModule, componentKey, fullCourse, currentModule, currentVideo}
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
    .current-course{
        background-color: white;
        margin-bottom: 25px;
        border-radius: 10px;
        padding:20px;
        width:50%;
        cursor: pointer;
    }

</style>