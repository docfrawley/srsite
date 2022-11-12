<template>
    <div class="page-container">

    
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
        <div class="module-list">
            <div @click="returnToAll">
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                    <path
                        d="M7 42.55V22.5l-3.9 3-2.5-3.3L7 17.3v-6.2h4.15v3l12.8-9.7 23.4 17.85-2.5 3.25-3.9-3v20.05H25.9v-12.1h-4.15v12.1ZM7 8.6q.1-3.1 2.275-5.3Q11.45 1.1 14.5 1.1q1.4 0 2.375-1 .975-1 .975-2.35h4.2q-.15 3.1-2.3 5.3-2.15 2.2-5.25 2.2-1.35 0-2.325.975Q11.2 7.2 11.2 8.6Z" />
                </svg>
            </div>
            <div v-for="mod in fullCourse" :key="mod.id">
                <span v-if="currentModule.modnumb!=mod.modnumb" class="ind-mod np-module" @click="moveModule(mod.modnumb)">{{mod.title}} </span>
                <span v-else class="ind-mod np-active" @click="moveModule(mod.modnumb)">{{mod.title}} </span>
            </div>
        </div>
        <SingleModel :key="componentKey" />

        <div class="next-previous">
            <div class="np-module" v-if="currentModule.modnumb>1" @click="moveModule(currentModule.modnumb -1)">

                <svg xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" />
                </svg>
                <p>Previous Module</p>
            </div>

            <div class="np-module" v-if="currentModule.modnumb < numbModules"
                @click="moveModule(currentModule.modnumb +1)">
                <p>Next Module</p>
                <svg xmlns="http://www.w3.org/2000/svg">
                    <path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" />
                </svg>
            </div>
        </div>
    </div>

    <div v-else>
        <div v-for="document in documents" :key="document.id">
            <ShowModule :document="document" @vidInfo="showvidInfo" />
        </div>
    </div>

    <div v-else>
        <div v-for="aModule in fullCourse" :key="aModule.id">
            <ShowModule :theModule="aModule" />
            <br />
        </div>
    </div>
</div>
</template>

<script>
import ShowModule from '@/components/ShowModule.vue'
import { ref, reactive, watchEffect } from 'vue'
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
        const numbModules = ref(cstore.courseAll.length)
        

        currentModule.value = cstore.currentModule
        currentVideo.value = cstore.currentVideo        

        watchEffect(() => {
            fullCourse.value = cstore.courseAll
            currentVideo.value = cstore.currentVideo
            currentModule.value = cstore.currentModule
            numbModules.value = cstore.courseAll.length
        })
        

        const showvidInfo= (video) =>{
            // whichVid.module = video.module
            // whichVid.order=video.order
            // componentKey.value++
        }

        const moveModule=(theMod)=>{
            let whichElement = theMod - 1

            currentModule.value = cstore.courseAll[whichElement]
            currentVideo.value = currentModule.value.videos[0]
            cstore.setCurrentVideo(currentVideo.value)
            cstore.setCurrentModule(currentModule.value)
            componentKey.value++
        }

        const returnToAll=()=>{
            componentKey.value = 0
            cstore.currentVideo={}
            cstore.currentModule={}
        }

        

        return { currentCourse, showvidInfo, returnToAll, moveModule, componentKey, fullCourse, currentModule, currentVideo, numbModules}
    }
}
</script>

<style scoped>
    .module-list{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        padding:10px;
        border-radius: 8px;
        border: 1px solid var(--lines);
        margin-bottom: 30px;
        background-color: #fff;
    }

    .module-list svg {
        cursor: pointer;
        fill: #001e41;
        margin-left:20px;
    }
    .ind-mod {
        display: inline-block;
        cursor: pointer;
    }
    .next-previous {
        display: flex;
        justify-content: center;
    }
        .next-previous:hover{
            color:#fff;
        }
    .np-module {
        cursor: pointer;
        margin: 0 15px;
        color:#000;
        padding: 15px;
        border-radius:8px;
        display: flex;
        align-items: center;
    }
    .np-module:hover, p:hover, svg:hover{
        color:#ffffff;
        background-color: #001e41;
        fill: #fff;
    }

    .np-active {
        cursor: pointer;
        margin: 0 15px;
        color: #ffffff;
        background-color: #001e41;
        padding: 15px;
        border-radius: 8px;

    }

    .np-module svg{
        height: 45px;
        width:45px;
    }
    .current-course{
        background-color: white;
        margin-bottom: 5px;
        border-radius: 10px;
        padding:20px;
        width:540px;
        cursor: pointer;
        height:100px;
    }

</style>