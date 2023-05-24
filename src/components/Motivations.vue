<template>
  <div class="fill-up">
    <div class="top-title title-header">{{the_title}}</div>
    <div class="split-lines">{{ helpMov }}</div>
  </div>
</template>

<script>
import { userStore } from '@/store/userStore';
import { ref } from 'vue';
export default {
  props: ['title', 'qprompt'],
  setup(props){
    const ustore = userStore();
    const motivations = ustore.getPromptAnswers
    const the_title = props.title
    const helpMov = ref('')
    const positiveMov = motivations.find((mov)=>{
                mov.promptId===props.qprompt
                if (mov.promptId==props.qprompt){
                  helpMov.value = mov.answer
                }
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

.title-header{
  color: var(--primeblue);
  background-color: var(--primegreen);
  border-bottom: 2px solid var(--primegreen);
}
</style>