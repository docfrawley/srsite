<template>
    <div class="toolkit-container">
        <div class="drop-zone" >
            <div v-for="item in items" :key="item.id" class="drag-row" draggable="true" 
                @dragstart="startDrag($event, item)" @drop="onDrop($event, item)" @dragenter.prevent @dragover.prevent>
                <div class="drag-el">{{ item.dimension }}</div>
                <div v-for="strategy in item.techs" :key="item.dimension + strategy" draggable="true" 
                    @dragstart="startDragRow($event, item, strategy)" @drop="onDropRow($event, item, strategy)" @dragenter.prevent @dragover.prevent>
                    <div class="drag-strat">{{ strategy }}</div>
                </div>
            </div>
        </div>

        <div >
            <button @click="handleReset" class="reset-button">RESET</button>
            <button @click="handleTechs" class="reset-button">SAVE</button>
        </div>

    </div>
    

    <!-- <div class="drop-zone" @drop="onDrop($event, 1)" @dragenter.prevent @dragover.prevent>
        <div v-for="item in getList(1)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)">
            {{ item.title }}
        </div>
    </div>

    <div class="drop-zone" @drop="onDrop($event, 2)" @dragenter.prevent @dragover.prevent>
        <div v-for="item in getList(2)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)">
            {{ item.title }}
        </div>
    </div> -->

</template>

<script>
import { ref } from '@vue/reactivity'
import { userStore } from '@/store/userStore'
import { coursesStore } from '@/store/coursesStore'

export default {
    setup(){
        const ustore = userStore()
        const cstore = coursesStore()
        const items = ref(cstore.currentCourse.techniques)
        const original_items = ref(JSON.parse(JSON.stringify(items.value)))
        const UserTechs = ref(ustore.getUserTechniques)

        if (UserTechs.value.length>0){
            console.log('current answers: ', items.value)
            items.value = UserTechs.value.currentAnswers
        }

        if (UserTechs.value.length>0){
            items.value = UserTechs.value
        }

        const getList = (list) => {
            return items.value.filter((item) => item.list==list)
        }

        const startDrag =(evt, item) =>{
            const stringObject = JSON.stringify(item);
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'
            evt.dataTransfer.setData('itemStuff', stringObject)
        }

        const onDrop = (evt, whereDrop) => {
            const itemStuff = JSON.parse(evt.dataTransfer.getData('itemStuff'))
            const whereStarted= items.value.findIndex(item => item.dimension===itemStuff.dimension)
            const whereEnding = items.value.findIndex(item => item.dimension === whereDrop.dimension)
            const tempObject = items.value[whereStarted]
            items.value.splice(whereStarted, 1)
            items.value.splice(whereEnding, 0, tempObject)
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
            if (whichitem.dimension === items.value[whereItem].dimension){
                const whereStarted = whichitem.techs.findIndex(item => item == itemStuff.tech)
                const whereEnding = whichitem.techs.findIndex(item => item === whereDrop)
                const tempObject = whichitem.techs[whereStarted]
                whichitem.techs.splice(whereStarted, 1)
                whichitem.techs.splice(whereEnding, 0, tempObject)
                items.value[whereItem].techs = whichitem.techs
                ustore.updateTechs(items.value)
            }
        }

        const handleReset = () => {
            
            items.value = original_items.value
            original_items.value = JSON.parse(JSON.stringify(items.value))
            
        }

        const handleTechs = () => {

            ustore.setTechniques()

        }

        return { getList, startDrag, onDrop, items, startDragRow, onDropRow, handleReset, handleTechs }
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
    width:70%;
    min-height: 10px;
}

.drag-row{
    display: flex;
    flex-direction: row;
}

.drag-el {
    background-color: #3498db;
    color:white;
    margin: 5px;
    padding: 5px;
    width:200px;
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

.reset-button{
    background-color: #3498db;
    color:white;
    width: 150px;
    height: 50px;
    margin-top: 50px;

}

.toolkit-container{
    padding-top: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

/* .drag-el:nth-last-of-type(1){
    margin-bottom: 0;
} */
</style>