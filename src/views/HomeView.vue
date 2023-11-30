<template>


<div class="step2-container">
  <div class="su-stuff">
  <p class="step-one">STEP TWO:</p>
  <p class="sub-one">Thanks for creating your account, {{ displayName }}.</p>
  <p class="sub-one">Now, if you're ready to start Overcoming Procrastination with Nic Voge as your guide, please click on the Purchase Course below</p>
  <div v-if="!pending">
    <button class="log-button" @click="purchase('procrastination')">Purchase Course</button>
  </div>
  <div v-if="pending">
    <button class="log-button">Loading...</button>
  </div>
</div>
</div>

</template>

<script>

import { useRouter } from 'vue-router'
import { userStore } from '@/store/userStore'
import { coursesStore } from '@/store/coursesStore'
import { ref } from 'vue'

export default {
  name: 'HomeView',
  
  setup() {
    const ustore = userStore()
    const router = useRouter()
    const pending = ref(false)
    const displayName = ref(ustore.displayName)
 
  

    const purchase = (course) => {
            pending.value = true
            ustore.purchaseCourse(course)
        }
    return { purchase, pending, displayName }
    }
}
</script>

<style scoped>
.step2-container {
  padding-top: 150px;
}

    

    .su-stuff{
      position:relative;
      top:20px;
      width: 400px;
      margin: 0 auto;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 1px 2px 3px rgba(50,50,50,0.05);
      border: 1px solid  var(--secondary);
      background: white;
    }

.step-one {
  font-size: 22px;

}

.sub-one {
  margin-top: 20px;
  font-size: 18px;
  margin-bottom: 15px;
}

form {
  position:relative;
  top:20px;
  width: 400px;
  margin: 0 auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 1px 2px 3px rgba(50,50,50,0.05);
  border: 1px solid  var(--secondary);
  background: white;
  margin-bottom: 50px;
}
input, textarea {
  border: 0;
  border-bottom: 1px solid var(--secondary);
  padding: 10px;
  outline: none;
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin:
  }
</style>