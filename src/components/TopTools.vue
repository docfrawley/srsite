<template>
  <div class="fill-up"><h1 class="top-title title-header">MY TOP TOOLS</h1>
    <div class="sub-line">To rearrange your Top Tools, go to your Toolkit Page</div>
    <div v-for="item in topArray" :key="item.tool + item.dimension" class="top-tools">
      <div class="tool-element">{{ item.tool }}<svg
              @click="openModel(item.dimension, item.tool)"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
            >
              <path
                d="M11.25 16.75h1.5V11h-1.5ZM12 9.3q.35 0 .575-.238.225-.237.225-.587 0-.325-.225-.563-.225-.237-.575-.237t-.575.237q-.225.238-.225.563 0 .35.225.587.225.238.575.238Zm0 12.2q-1.975 0-3.712-.75Q6.55 20 5.275 18.725T3.25 15.712Q2.5 13.975 2.5 12t.75-3.713Q4 6.55 5.275 5.275T8.288 3.25Q10.025 2.5 12 2.5t3.713.75q1.737.75 3.012 2.025t2.025 3.012q.75 1.738.75 3.713t-.75 3.712q-.75 1.738-2.025 3.013t-3.012 2.025q-1.738.75-3.713.75Zm0-1.5q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"
              />
            </svg></div>
    </div>
  
  <TechModal
      @modalClose="toggleModal"
      :theTech="strategyItems"
      :modalActive="modalActive"
    />
</div>


</template>

<script>
import { userStore } from '@/store/userStore';
import { coursesStore } from '@/store/coursesStore';
import { ref, watch } from 'vue';
import TechModal from "@/components/TechModal.vue";

export default {
  components: { TechModal },
  setup() {
    const cstore = coursesStore()
    const ustore = userStore()
    const UserTs = ref(ustore.getUserTechniques)
    const topArray = ref([])
    const strategyItems = ref({})
    const modalActive = ref(false);
     
      
    if (UserTs.value.length>0){
      topArray.value.push({dimension:UserTs.value[0].dimension, tool: UserTs.value[0].techs[0]})
      topArray.value.push({dimension:UserTs.value[0].dimension, tool: UserTs.value[0].techs[1]})
      topArray.value.push({dimension:UserTs.value[1].dimension, tool: UserTs.value[1].techs[0]})
    }
      
    
    watch(ustore, ()=>{
      UserTs.value = {}
      UserTs.value = ustore.getUserTechniques
      topArray.value = []
      if (UserTs.value.length>0) {
        topArray.value.push({dimension:UserTs.value[0].dimension, tool: UserTs.value[0].techs[0]})
        topArray.value.push({dimension:UserTs.value[0].dimension, tool: UserTs.value[0].techs[1]})
        topArray.value.push({dimension:UserTs.value[1].dimension, tool: UserTs.value[1].techs[0]})
      }
    })
    

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

    return {topArray, openModel, toggleModal, strategyItems, modalActive}

  }

}
</script>

<style scoped>

.sub-line{
  padding-top:10px;
  font-size: 12px;
  text-align: center;
}
.top-title{
  font-weight: bold;
  font-size: 18px;
  margin: auto;
  text-align: center;
}

.tool-element {
  background-color: var(--lightblue);
  color: var(--primeblue);
    margin: 5px;
    padding: 5px;
    width: 200px;
    text-align: center;
    display: relative;
    min-width: 200px;
    border-radius: .25rem;
}

.top-tools{
  display: flex;
  flex-direction: colum;
  justify-content: center;
}

svg {
  display: inline;
  float: right;
  fill: var(--primeblue);
  cursor: pointer;
}

</style>