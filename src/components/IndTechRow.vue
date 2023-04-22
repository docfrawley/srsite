<template>
<div class="t-container">
        <div v-for="item in items" :key="item.id" >
            <div v-if="item.dimension == whichDim" class="drag-row">
                <div class="drag-el">{{ item.dimension }}</div>
                <div v-for="strategy in item.techs" :key="item.dimension + strategy" draggable="true"
                    @dragstart="startDragRow($event, item, strategy)" @drop="onDropRow($event, item, strategy)"
                    @dragenter.prevent @dragover.prevent>
                    <div class="drag-strat">{{ strategy }}</div>
                </div>
            </div>
        </div>

    <div>
        <button @click="handleTechs" class="reset-button">SAVE</button>
    </div>

</div>
</template>

<script>
import { coursesStore } from '@/store/coursesStore'
import { userStore } from '@/store/userStore'
import { ref, watchEffect } from 'vue';

export default {


    setup() {
        const cstore = coursesStore()
        const ustore = userStore()
        const items = ref(cstore.currentCourse.techniques)
        const cvid = ref(cstore.currentVideo)
        const UserTechs = ref(ustore.getUserTechniques)
        const whichDim = ref('')

        watchEffect(() => {
            cvid.value = cstore.currentVideo
            switch (cvid.value.order){
            case 2:
                whichDim.value = 'Context'
                break
            case 3:
                whichDim.value = 'Behavioral'
                    break
            case 4:
                whichDim.value = 'Cognitive'
                    break
            case 5:
                whichDim.value = 'Cognitive'
                    break
            case 6:
                whichDim.value = 'Motivations'
                    break
            default:
                whichDim.value = ''
        }
        })
        


        if (UserTechs.value.length > 0) {
            items.value = UserTechs.value
        }

        const startDragRow = (evt, item, tech) => {
            const stringObject = JSON.stringify({
                dimension: item.dimension,
                tech: tech
            });
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'
            evt.dataTransfer.setData('itemStuffing', stringObject)
        }

        const onDropRow = (evt, whichitem, whereDrop) => {
            const itemStuff = JSON.parse(evt.dataTransfer.getData('itemStuffing'))
            const whereItem = items.value.findIndex(item => item.dimension === itemStuff.dimension)
            if (whichitem.dimension === items.value[whereItem].dimension) {
                const whereStarted = whichitem.techs.findIndex(item => item == itemStuff.tech)
                const whereEnding = whichitem.techs.findIndex(item => item === whereDrop)
                const tempObject = whichitem.techs[whereStarted]
                whichitem.techs.splice(whereStarted, 1)
                whichitem.techs.splice(whereEnding, 0, tempObject)
                items.value[whereItem].techs = whichitem.techs
                ustore.updateTechs(items.value)
            }
        }

        const handleTechs = () => {

            ustore.setTechniques()

        }


        return { items, startDragRow, onDropRow, handleTechs, whichDim, cvid}

    }

}
</script>

<style>
.drop-zone {
    display: flex;
    flex-direction: column;
    background-color: #ecf0f1;
    margin-bottom: 10px;
    padding: 10px;
    width: 70%;
    min-height: 10px;
}

.drag-row {
    display: flex;
    flex-direction: row;
}

.drag-el {
    background-color: #3498db;
    color: white;
    margin: 5px;
    padding: 5px;
    width: 200px;
    text-align: center;
}

.drag-strat {
    background-color: red;
    color: white;
    margin: 5px;
    padding: 5px;
    width: 200px;
    text-align: center;
}

.reset-button {
    background-color: #3498db;
    color: white;
    width: 150px;
    height: 50px;
    margin-top: 50px;

}

.t-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>