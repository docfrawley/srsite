<template>
    <div class="drop-zone" >
        <div v-for="item in items" :key="item.id" class="drag-row" draggable="true" 
            @dragstart="startDrag($event, item)" @drop="onDrop($event, item)" @dragenter.prevent @dragover.prevent>
            <div class="drag-el">{{ item.title }}</div>
            <div v-for="strategy in item.strategies" :key="item.title + strategy" draggable="true" 
                @dragstart="startDragRow($event, item, strategy)" @drop="onDropRow($event, item, strategy)" @dragenter.prevent @dragover.prevent>
                <div class="drag-strat">{{ strategy }}</div>
            </div>
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
                    title: 'Context',
                    order: 1,
                    type: 'dimension',
                    strategies: ['first', 'second', 'third']
                },
                {
                    id: 1,
                    title: 'Behavioral',
                    order: 1,
                    type: 'dimension',
                    strategies: ['first', 'second', 'third', 'fourth', 'fifth']
                },
                {
                    id: 2,
                    title: 'Cognitive',
                    type: 'dimension',
                    strategies: ['first', 'second', 'third', 'fourth']
                },
                {
                    id: 3,
                    title: 'Emotions',
                    order: 1,
                    type: 'dimension',
                    strategies: ['first', 'second', 'third']
                },
                {
                    id: 4,
                    title: 'Motivations',
                    order: 1,
                    type: 'dimension',
                    strategies: ['first', 'second', 'third', 'fourth', 'fifth']
                },
                {
                    id: 5,
                    title: 'Beliefs',
                    type: 'dimension',
                    strategies: ['first', 'second', 'third', 'fourth']
                }
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
        }

        const startDragRow = (evt, item, strategy) => {
            const stringObject = JSON.stringify({
                title: item.title,
                strategy: strategy
            });
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'
            evt.dataTransfer.setData('itemStuffing', stringObject)
        }

        const onDropRow = (evt, whichitem, whereDrop) => {
            const itemStuff = JSON.parse(evt.dataTransfer.getData('itemStuffing'))
            const whereItem = items.value.findIndex(item => item.title === itemStuff.title)
            if (whichitem.title === items.value[whereItem].title){
                const whereStarted = whichitem.strategies.findIndex(item => item == itemStuff.strategy)
                const whereEnding = whichitem.strategies.findIndex(item => item === whereDrop)
                const tempObject = whichitem.strategies[whereStarted]
                whichitem.strategies.splice(whereStarted, 1)
                whichitem.strategies.splice(whereEnding, 0, tempObject)
                items.value[whereItem].strategies = whichitem.strategies
            }
        }

        return { getList, startDrag, onDrop, items, startDragRow, onDropRow }
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

/* .drag-el:nth-last-of-type(1){
    margin-bottom: 0;
} */
</style>