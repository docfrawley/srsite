<template>
    <div @click="returnToAll" class="course">
        Course View: {{whichVid.course}}
    </div>


    <div v-if="whichVid.module">
        <div class="module-list">
            <div v-for="document in documents" :key="document.id">
                <span class="ind-mod" @click="moveModule(document.modnumb)">{{document.title}} </span>
            </div>
        </div>
        <SingleModel :specifics="whichVid" :key="componentKey" />

        <div class="next-previous">
            <div class="np-module" v-if="whichVid.module>1" @click="moveModule(whichVid.module-1)">Previous Module
            </div>

            <div class="np-module" v-if="whichVid.module<documents.length" @click="moveModule(whichVid.module+1)">
                Next
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
import { ref, reactive } from 'vue'
import SingleModel from '@/components/SingleModel.vue'

export default {
    name: 'Courseview',
    components: { ShowModule, SingleModel },
    props: ['course'],
    setup(props) {
        const { error, documents } = getOrderDocs('course-modules', 'course', props.course)
        const whichVid= reactive({
            course:props.course,
            module: null,
            order: null
        })
        const componentKey = ref(0)

        const showvidInfo= (video) =>{
            whichVid.module = video.module
            whichVid.order=video.order
            componentKey.value++
        }

        const moveModule = async(theMod)=>{
           whichVid.module=theMod
           whichVid.order=1
            componentKey.value++
        }

        const returnToAll=()=>{
            whichVid.module = null
            whichVid.order = null
            componentKey.value = 0
        }

        

        return { documents, showvidInfo, whichVid, returnToAll, moveModule, componentKey}
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