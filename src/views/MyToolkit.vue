<template>
  <div class="page-container">
    <div class="grid-container">
        
        <Motivations title="GOALS FOR THIS COURSE" qprompt="uwi6QJH5wozGZOF8oVbd" />
        <TopTools />
        <Motivations class="bottom-fill" title="MY POSITIVE MOTIVATIONS" qprompt="zEfmgpumIi2gbGCG8eJt" />
    </div>
    <div class="drop-zone grid-container">
      <div
        v-for="item in items"
        :key="item.id"
        class="drag-row"
        draggable="true"
        @dragstart="startDrag($event, item)"
        @drop="onDrop($event, item)"
        @dragenter.prevent
        @dragover.prevent
      >
        <div class="drag-el-tk">{{ item.dimension }}</div>
        <div
          v-for="strategy in item.techs"
          :key="item.dimension + strategy"
          draggable="true"
          @dragstart="startDragRow($event, item, strategy)"
          @drop="onDropRow($event, item, strategy)"
          @dragenter.prevent
          @dragover.prevent
        >
          <div class="drag-strat-tk">
            {{ strategy
            }}<svg
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

      <div>
        <button @click="handleReset" class="reset-button">RESET</button>
        <button @click="handleTechs" class="reset-button">SAVE</button>
      </div>
  </div>


    <TechModal
      @modalClose="toggleModal"
      :theTech="strategyItems"
      :modalActive="modalActive"
    />
  </div>

</template>

<script>
import { ref } from "@vue/reactivity";
import { userStore } from "@/store/userStore";
import { coursesStore } from "@/store/coursesStore";
import TechModal from "@/components/TechModal.vue";
import Motivations from "@/components/Motivations.vue";
import TopTools from "@/components/TopTools.vue";

export default {
  components: { TechModal, Motivations, TopTools },
  setup() {
    const ustore = userStore();
    const cstore = coursesStore();
    const currentCourse = ref(cstore.currentCourse);
    const currentModule = ref(cstore.currentModule);
    const currentVideo = ref(cstore.currentVideo);
    const items = ref(cstore.currentCourse.techniques);
    const original_items = ref(JSON.parse(JSON.stringify(items.value)));
    const UserTechs = ref(ustore.getUserTechniques);
    const modalActive = ref(false);
    const strategyItems = ref({});
    const topArray = ref([])
    const totalPercentage = ref(ustore.getTotalPercentage)
    totalPercentage.value = parseInt(totalPercentage.value).toFixed(2)

    if (UserTechs.value.length > 0) {
      items.value = UserTechs.value.currentAnswers;
      topArray.value.push({dimension:UserTechs.value[0].dimension, tool: UserTechs.value[0].techs[0]})
      topArray.value.push({dimension:UserTechs.value[0].dimension, tool: UserTechs.value[0].techs[1]})
      topArray.value.push({dimension:UserTechs.value[1].dimension, tool: UserTechs.value[1].techs[0]})
    
    }


    if (UserTechs.value.length > 0) {
      items.value = UserTechs.value;
    }

    const getList = (list) => {
      return items.value.filter((item) => item.list == list);
    };

    const startDrag = (evt, item) => {
      const stringObject = JSON.stringify(item);
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemStuff", stringObject);
    };

    const onDrop = (evt, whereDrop) => {
      const itemStuff = JSON.parse(evt.dataTransfer.getData("itemStuff"));
      const whereStarted = items.value.findIndex(
        (item) => item.dimension === itemStuff.dimension
      );
      const whereEnding = items.value.findIndex(
        (item) => item.dimension === whereDrop.dimension
      );
      const tempObject = items.value[whereStarted];
      items.value.splice(whereStarted, 1);
      items.value.splice(whereEnding, 0, tempObject);
    };

    const startDragRow = (evt, item, tech) => {
      const stringObject = JSON.stringify({
        dimension: item.dimension,
        tech: tech,
      });
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemStuffing", stringObject);
    };

    const onDropRow = (evt, whichitem, whereDrop) => {
      const itemStuff = JSON.parse(evt.dataTransfer.getData("itemStuffing"));
      const whereItem = items.value.findIndex(
        (item) => item.dimension === itemStuff.dimension
      );
      if (whichitem.dimension === items.value[whereItem].dimension) {
        const whereStarted = whichitem.techs.findIndex(
          (item) => item == itemStuff.tech
        );
        const whereEnding = whichitem.techs.findIndex(
          (item) => item === whereDrop
        );
        const tempObject = whichitem.techs[whereStarted];
        whichitem.techs.splice(whereStarted, 1);
        whichitem.techs.splice(whereEnding, 0, tempObject);
        items.value[whereItem].techs = whichitem.techs;
        ustore.updateTechs(items.value);
        topArray.value=[]
        topArray.value.push({dimension:UserTechs.value[0].dimension, tool: UserTechs.value[0].techs[0]})
      topArray.value.push({dimension:UserTechs.value[0].dimension, tool: UserTechs.value[0].techs[1]})
      topArray.value.push({dimension:UserTechs.value[1].dimension, tool: UserTechs.value[1].techs[0]})
      }
    };

    const openModel =  async (dimension, strategy) => {
      await cstore.findDescription(dimension, strategy)
      strategyItems.value = {
        dimension: dimension,
        strategy: strategy,
      };
      modalActive.value = true;
    };

    const handleReset = () => {
      items.value = original_items.value;
      original_items.value = JSON.parse(JSON.stringify(items.value));
    };

    const handleTechs = () => {
      ustore.setTechniques();
    };

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };

    return {
      getList,
      startDrag,
      onDrop,
      items,
      startDragRow,
      onDropRow,
      handleReset,
      handleTechs,
      modalActive,
      toggleModal,
      strategyItems,
      openModel,
      topArray,
      currentModule,
      currentVideo,
      currentCourse,
      totalPercentage
    };
  },
};
</script>

<style scoped>
.drop-zone {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: .75rem;
  border-radius: 0.2rem;
  border: solid 1px var(--primeblue);
  box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(var(--clr-secondary-400) / 0.25);
  margin:auto;
}

.drag-row {
  display: flex;
  flex-direction: row;
}



.reset-button {
  background-color: var(--primeblue);
  color: white;
  width: 100px;
  height: 40px;
  margin-top: 50px;
  margin-right:10px;
}

.reset-button:hover{
  color: var(--primegreen);
}

.toolkit-container {
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

svg {
  display: inline;
  float: right;
  fill: var(--primeblue);
  cursor: pointer;
}

.drag-el-tk {
    background-color: var(--primeblue);
    color: white;
    margin: 5px;
    padding: 5px;
    min-width: 100px;
    text-align: center;
    border-radius: .25rem;
    font-size: 12px;
  }
  
  .drag-strat-tk {
    background-color: var(--primegreen);
    color: var(--primeblue);
    margin: 5px;
    padding: 5px;
    min-width: 120px;
    text-align: center;
    display: relative;
    border-radius: .25rem;
    font-size:12px;
  }

/* .drag-el:nth-last-of-type(1){
    margin-bottom: 0;
} */
</style>