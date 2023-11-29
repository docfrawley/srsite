<template>
  <div class="page-container">
    <div class="grid-container">
      <div class="fill-up">
        <div class="top-title title-header">GOALS FOR THIS COURSE</div>
          <ShowPromptTK
                :prompt="goalstuff"
                @answerAdded="wasItAdded"
              />
        </div>
      
        <TopTools />
        <div class="fill-up">
          <div class="top-title title-header">MY POSITIVE MOTIVATIONS</div>
          <ShowPromptTK
              :prompt="motstuff"
              @answerAdded="wasItAdded"
            />
        </div>
        
    </div>
    <div class="drop-zone grid-container2">
    <h1>THE STRATEGIES</h1>
    <p class="matrix-description">Below is a matrix containing six dimensions and each of the strategies for that dimension. Order the dimensions by dragging what you feel are the most important or relevant dimensions towards the top. You can also order or reorder the strategies within each dimension as well by dragging the more relevant strategies for you towards the left.</p>
    <p class="matrix-description">The first two strategies on the left in the top most dimension and the first strategy on the left of the second highest dimension are considered your top three strategies. These three strategies are listed in "MY TOP TOOLS".</p>
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
        <div class="drag-el-tk"><p class="grid-dimension">{{ item.dimension }}</p>
          <svg style="fill:white; margin-right:5px;"
          @click="openDimModel(item.dimension)"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
            >
              <path
                d="M11.25 16.75h1.5V11h-1.5ZM12 9.3q.35 0 .575-.238.225-.237.225-.587 0-.325-.225-.563-.225-.237-.575-.237t-.575.237q-.225.238-.225.563 0 .35.225.587.225.238.575.238Zm0 12.2q-1.975 0-3.712-.75Q6.55 20 5.275 18.725T3.25 15.712Q2.5 13.975 2.5 12t.75-3.713Q4 6.55 5.275 5.275T8.288 3.25Q10.025 2.5 12 2.5t3.713.75q1.737.75 3.012 2.025t2.025 3.012q.75 1.738.75 3.713t-.75 3.712q-.75 1.738-2.025 3.013t-3.012 2.025q-1.738.75-3.713.75Zm0-1.5q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"
              />
            </svg>
        </div>
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
            }}
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

      <div>
        <button @click="handleReset" class="reset-button">RESET</button>
        <button @click="handleTechs" class="reset-button">SAVE</button>
      </div>
  </div>
  
  <div class="grid-container2">
  <a class="download-stuff" href="https://storage.cloud.google.com/self-relationality.appspot.com/VAPS.pdf?authuser=3" target="_blank" rel="noopener noreferrer">DOWNLOAD WORKSHEET</a>
  </div>

    <TechModal
      @modalClose="toggleModal"
      :theTech="strategyItems"
      :modalActive="modalActive"
    />

    <TechDimModal
      @modalDimClose="toggleDimModal"
      :theDimension="theDimension"
      :modalDimActive="modalDimActive"
    />
  </div>
  
</template>

<script>
import { ref } from "@vue/reactivity";
import { userStore } from "@/store/userStore";
import { coursesStore } from "@/store/coursesStore";
import TechModal from "@/components/TechModal.vue";
import TechDimModal from "@/components/TechDimModal.vue";
import Motivations from "@/components/Motivations.vue";
import TopTools from "@/components/TopTools.vue";
import ShowPromptTK from "@/components/ShowPromptTK.vue";

export default {
  components: { TechModal, TechDimModal, Motivations, TopTools, ShowPromptTK },
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
    const modalDimActive = ref(false)
    const strategyItems = ref({});
    const theDimension = ref('')
    const topArray = ref([])
    const goalstuff =  {
      prompt:"",
      id:"uwi6QJH5wozGZOF8oVbd"
    }
    const motstuff = {
      prompt: "",
      id: "zEfmgpumIi2gbGCG8eJt"
    }
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

    const openDimModel = (dimension) => {
      theDimension.value = dimension
      console.log('here now: ', theDimension.value)

      modalDimActive.value = true
    }

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

    const toggleDimModal = () => {
      modalDimActive.value = !modalDimActive.value;
    };
    const wasItAdded = (addedYes) => {
      console.log('added')    
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
      modalDimActive,
      toggleModal,
      toggleDimModal,
      strategyItems,
      openModel,
      topArray,
      currentModule,
      currentVideo,
      currentCourse,
      totalPercentage,
      goalstuff,
      motstuff,
      wasItAdded,
      openDimModel,
      theDimension
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

  fill: var(--primeblue);
  cursor: pointer;
}

.drag-el-tk {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--primeblue);
    color: white;
    margin: 5px;
    padding-left: 25x;
    min-width: 130px;
    border-radius: .25rem;
    font-size: 12px;
  }
  
  .drag-strat-tk {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--primegreen);
    color: var(--primeblue);
    margin: 5px;
    padding: 5px;
    min-width: 135px;
    border-radius: .25rem;
    font-size: 12px;
  }

  .grid-dimension{
    color: white;
    padding-left:5px;
  }

  .grid-container2{
  display: grid;
  padding-block: 1rem;
  width: min(99%, 85rem);
  margin-inline: auto;
}

.download-stuff{
  background-color: var(--primeblue);
  color: white;
  text-align: center;
  border-radius: .25rem;
  border: 0;
  padding: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
  pointer-events: auto;
  color:white;
}

.download-stuff:hover{
  color: var(--primegreen);
}

.matrix-description{
  font-size: 14px;
  width: 90%;
  margin: 10px 0 10px 0;
}

h1 {
  font-size: 20px;
  font-weight: bold;
}

/* .drag-el:nth-last-of-type(1){
    margin-bottom: 0;
} */
</style>