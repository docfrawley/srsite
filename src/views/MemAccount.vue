<template>
    <div class="page-container">
    <div class="grid-container">
        <div class="grid-col-span-3 fill-up">
            <div>
            <p>Hello {{ displayName }}</p>
            </div>
    
            <div>You created your account on: {{ createdWhen }}</div>
    
            <div>
                <p>Change your email address</p>
            </div>
            <div v-if="!wasSent">
                <button class="log-button" @click="sendEmail">Change Password</button>
            </div>
            <div v-else>
                <div class="was-sent">
                    <p>An email has been sent to that email address currently associated with this account with instructions on how to reset your password.</p>
                </div>
            </div>
    </div>
    </div>
    </div>
        
    
  
</template>

<script>
import { userStore } from '@/store/userStore';
import { coursesStore } from '@/store/coursesStore';
import { useRouter } from "vue-router";
import { ref } from 'vue';
export default {
    setup() {
        const ustore = userStore()
        const displayName = ref(ustore.getDisplayName)
        const userEmail = ref(ustore.getUserEmail)
        const createdWhen = new Date(ustore.getWhenCreatedAt).toLocaleDateString()
        const wasSent = ref(false)

        const sendEmail=()=>{
            wasSent.value = ustore.sendPRemail(userEmail.value)
        }

        return {displayName, createdWhen, sendEmail, wasSent}
    }
    
}
</script>

<style>
.acc-container{
    position:relative;
  top:435px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.was-sent{
    position:relative;
    top:20px;
    width: 50%;
    margin: 0 auto;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 1px 2px 3px rgba(50,50,50,0.05);
    border: 1px solid  var(--secondary);
    background: white;
    margin-bottom: 50px;
  }
</style>