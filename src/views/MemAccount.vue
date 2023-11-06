<template>
    <div class="page-container">
    <div class="grid-container">
        <div class="grid-col-span-3 fill-up">
            <div>
            <p>Hello <span>{{ displayName }}</span>!</p>
            <p>current email: <span class="bolded">{{ userEmail }}</span></p>
            </div>
    
            <div>You created your account on: <span class="bolded">{{ createdWhen }}</span></div>
    
            <div v-if="!wasSent&&(!boolName&&!boolEmail)" class="something">
                <button class="log-button" @click="boolName=true">Change Display Name</button>
                <button class="log-button" @click="boolEmail=true">Change Email</button>
                <button class="log-button" @click="sendEmail">Change Password</button>
            </div>
            
            <div v-if="wasSent">
                <div class="was-sent">
                    <p>An email has been sent to that email address currently associated with this account with instructions on how to reset your password.</p>
                </div>
                <div class="something">
                    <button class="log-button" @click="wasSent=!wasSent">Go Back</button>
                </div>
            </div>
            <div v-if="boolName">
                <ChangeName @cancel="boolName=false" @submit="changeName"/>
            </div>
            <div v-if="boolEmail">
                <ChangeEmail @cancel="boolEmail=false" @submit="changeEmail"/>
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
import ChangeName from '@/components/ChangeName.vue';
import ChangeEmail from '@/components/ChangeEmail.vue';
export default {
    components: { ChangeName, ChangeEmail },
    setup() {
        const ustore = userStore()
        const displayName = ref(ustore.getDisplayName)
        const userEmail = ref(ustore.getUserEmail)
        const createdWhen = new Date(ustore.getWhenCreatedAt).toLocaleDateString()
        const wasSent = ref(false)
        const boolEmail = ref(false)
        const boolName = ref(false)

        const sendEmail=()=>{
            wasSent.value = true
            console.log('you have sent an email')
            // wasSent.value = ustore.sendPRemail(userEmail.value)
        }

        const changeName=(newName)=>{
            boolName.value = false
            console.log('this is the name' + newName)
            /* changeID.value = !(ustore.updateName(newName.value)) */
        }

        const changeEmail=(newEmail)=>{
            boolEmail.value = false
            console.log('this is the email ' + newEmail)
        }

        return {displayName, userEmail, createdWhen, sendEmail, changeName, changeEmail, boolEmail, boolName, wasSent}
    }
    
}
</script>

<style scoped>
input {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #eee;
    margin-right: 0.75em;
    margin-left: 0.25em;
}

form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

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

.something {
    display: flex;
    justify-content: space-around;
    margin-top: 1em;
}

.bolded {
    font-weight: bold;
    color: black;
}
</style>