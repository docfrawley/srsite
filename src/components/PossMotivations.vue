<template>
  <div class="fill-up">
    <div class="top-title">MY POSITIVE MOTIVATIONS</div>
    <div class="split-lines">{{ helpMov }}</div>
  </div>
</template>

<script>
import { userStore } from '@/store/userStore';
import { ref } from 'vue';
export default {
  setup(){
    const ustore = userStore();
    const pmotivations = ref(ustore.getPositiveMotivations)
    const motivations = ustore.getPromptAnswers
    const helpMov = ref('')
    const positiveMov = motivations.find((mov)=>{
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

.split-lines{
  white-space: pre-line;
  padding:10px;
}
</style>