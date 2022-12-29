<template>
    <div class="drop-zone" >
        <div v-for="item in items" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)" @drop="onDrop($event, item)" @dragenter.prevent @dragover.prevent>
            {{ item.title }}
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

export default {
    setup(){
        const items = ref(
            [
                {
                    id: 0,
                    title: 'Item A',
                    order: 1,
                },
                {
                    id: 1,
                    title: 'Item B',
                    order: 1,
                },
                {
                    id: 2,
                    title: 'Item C',
                    list: 2,
                },
            ]
        )

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
            const whereStarted= items.value.findIndex(item => item.id===itemStuff.id)
            const whereEnding = items.value.findIndex(item => item.id === whereDrop.id)
            const tempObject = items.value[whereStarted]
            items.value.splice(whereStarted, 1)
            items.value.splice(whereEnding, 0, tempObject)
            console.log('items: ', items.value)
        }

        return { getList, startDrag, onDrop, items }
    }

}
</script>

<style>
.drop-zone {
    position: relative;
        top: 175px;
        display: flex;
        flex-direction: column;
    background-color: #ecf0f1;
    margin-bottom: 10px;
    padding: 10px;
    width:50%;
    min-height: 10px;
}

.drag-el {
    background-color: #3498db;
    color:white;
    margin-bottom: 10px;
    padding: 5px;
}

.drag-el:nth-last-of-type(1){
    margin-bottom: 0;
}
</style>