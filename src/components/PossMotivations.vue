<template>
  <div class="fill-up">
    <div>MY POSITIVE MOTIVATIONS</div>
    <div>{{ helpMov }}</div>
  </div>
</template>

<script>
import { userStore } from '@/store/userStore';
import { ref, watchEffect } from 'vue';
export default {
  setup(){
    const ustore = userStore();
    const pmotivations = ref(ustore.getPositiveMotivations)
    const motivations = ustore.getPromptAnswers
    const helpMov = ref('')
    console.log(motivations, pmotivations.value)
    const positiveMov = motivations.find((mov)=>{
                mov.promptId==="zEfmgpumIi2gbGCG8eJt"
                if (mov.promptId=="zEfmgpumIi2gbGCG8eJt"){
                  helpMov.value = mov.answer
                }
               })
    if (positiveMov) {
      console.log(positiveMov)

    } else {
      console.log('womp womp')
    }

    return {helpMov}
    
  }

}
</script>

<style>
 
</style>