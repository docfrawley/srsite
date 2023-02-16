<template>
  <div class="fill-up">
    <div>MY POSITIVE MOTIVATIONS</div>
    <div>{{ helpMov }}</div>
  </div>
</template>

<script>
import { userStore } from '@/store/userStore';
import { helperNameMap } from '@vue/compiler-core';
import { ref } from 'vue';
export default {
  setup(){
    const ustore = userStore();
    // const pmotivations = ref(ustore.getPositiveMotivations)
    const motivations = ustore.getPromptAnswers
    const helpMov = ref('')
    console.log(motivations)
    const positiveMov = motivations.filter((mov)=>{
                mov.promptId==="zEfmgpumIi2gbGCG8eJt"
                if (mov.promptId=="zEfmgpumIi2gbGCG8eJt"){
                  helpMov.value = mov.answer
                }
               })
    
    

    return {helpMov}
    
  }

}
</script>

<style>
 
</style>