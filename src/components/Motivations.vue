<template>
  <div class="fill-up">
    <div class="top-title title-header">{{the_title}}</div>
    <div v-if="helpMov" class="split-lines">{{ helpMov }}</div>
    <div v-else class="split-lines2">You will enter your goals and motivations in the last video of the first module. You can also edit this section in your toolkit page.</div>
  </div>
</template>

<script>
import { userStore } from '@/store/userStore';
import { ref, watchEffect } from 'vue';
export default {
  props: ['title', 'qprompt'],
  setup(props){
    const ustore = userStore();
    const motivations = ustore.getPromptAnswers
    const the_title = props.title
    const helpMov = ref('')
    let positiveMov = motivations.find((mov)=>{
                mov.promptId===props.qprompt
                if (mov.promptId==props.qprompt){
                  helpMov.value = mov.answer
                }
               })

    watchEffect(()=>{
      positiveMov = motivations.find((mov)=>{
                mov.promptId===props.qprompt
                if (mov.promptId==props.qprompt){
                  helpMov.value = mov.answer
                }
               })
    })


    return {helpMov, the_title}
    
  }

}
</script>

<style>

.split-lines{
  white-space: pre-line;
  padding:10px;
}

.split-lines2{
  white-space: pre-line;
  padding:10px;
  font-size: 12px;
}


</style>