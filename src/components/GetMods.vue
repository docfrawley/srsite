<template>
    <div v-if="documents" class="module-container">
        <div v-for="doc in documents" :key="doc.id">
            <div class="module-listing" @click="showModule(doc)">{{ doc.title }} </div>
        </div>
    </div>

    <div v-if="modInfo">
        <GetVids :moduleInfo="modInfo" :key="componentKey" />
    </div>
 

</template>

<script>
import { ref } from 'vue'
import getOrderDocs from '@/composables/getOrderDocs'
import GetVids from './GetVids.vue'



export default {
    components: { GetVids },
    props: ['modColName'],
    setup(props) {
        const { documents } = getOrderDocs('course-modules', 'course', props.modColName)
        const modInfo = ref()
        const componentKey = ref(0)

        const showModule = (theMod) => {
            modInfo.value = theMod
            componentKey.value++
        }


        return { documents, showModule, modInfo, componentKey }
    }

}
</script>

<style>
.module-listing {
    padding: 10px;
    background-color: aquamarine;
    cursor: pointer;
    margin: 10px;
}
</style>