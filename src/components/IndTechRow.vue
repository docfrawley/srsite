<template>
<div class="t-container">
    <div v-for="item in items" :key="item.id" >
            <div v-if="item.dimension == whichDim" class="drag-row">
                <div class="drag-el-specific">{{ item.dimension }} Strategies</div>
<div>Order strategies by dragging the ones most important to you towards the top. Make sure to SAVE once you have all the strategies in the order you want.</div>
        
                <div v-for="strategy in item.techs" :key="item.dimension + strategy" draggable="true"
                    @dragstart="startDragRow($event, item, strategy)" @drop="onDropRow($event, item, strategy)"
                    @dragenter.prevent @dragover.prevent>
                    <div class="drag-strat">{{ strategy }}
                        <svg
                            @click="openModel(item.dimension, strategy)"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            width="24"
                            >
                            <path
                                d="M11.25 16.75h1.5V11h-1.5ZM12 9.3q.35 0 .575-.238.225-.237.225-.587 0-.325-.225-.563-.225-.237-.575-.237t-.575.237q-.225.238-.225.563 0 .35.225.587.225.238.575.238Zm0 12.2q-1.975 0-3.712-.75Q6.55 20 5.275 18.725T3.25 15.712Q2.5 13.975 2.5 12t.75-3.713Q4 6.55 5.275 5.275T8.288 3.25Q10.025 2.5 12 2.5t3.713.75q1.737.75 3.012 2.025t2.025 3.012q.75 1.738.75 3.713t-.75 3.712q-.75 1.738-2.025 3.013t-3.012 2.025q-1.738.75-3.713.75Zm0-1.5q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

    <div>
        <button @click="handleTechs" class="reset-button">SAVE</button>
    </div>
    <TechModal
      @modalClose="toggleModal"
      :theTech="strategyItems"
      :modalActive="modalActive"
    />
</div>


</template>

<script>
import { coursesStore } from '@/store/coursesStore'
import { userStore } from '@/store/userStore'
import { ref, watchEffect } from 'vue';
import TechModal from './TechModal.vue';

export default {
    components: { TechModal },
  setup() {
        const cstore = coursesStore()
        const ustore = userStore()
        const items = ref(cstore.currentCourse.techniques)
        const cvid = ref(cstore.currentVideo)
        const UserTechs = ref(ustore.getUserTechniques)
        const whichDim = ref('')
        const modalActive = ref(false);
        const strategyItems = ref({});

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

        const openModel =  async (dimension, strategy) => {
            await cstore.findDescription(dimension, strategy)
            strategyItems.value = {
                dimension: dimension,
                strategy: strategy,
            };
        modalActive.value = true;
    };

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };


        return { items, startDragRow, onDropRow, handleTechs, whichDim, cvid, modalActive, strategyItems, openModel, toggleModal}

    }

}
</script>

<style>

.drag-el-specific{
    background-color: var(--primeblue);
    color: white;
    margin: 5px;
    padding: 5px;
    width: 200px;
    text-align: center;
    border-radius: .25rem;
}
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
    flex-direction: column;
}



svg {
  display: inline;
  float: right;
  fill: var(--primeblue);
  cursor: pointer;
}

.t-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>