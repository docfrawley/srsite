<template>
    <div class="page-container">
    <div class="grid-container">
        <div class="grid-col-span-3 fill-up">
            <div>
            <p>Hello <span>{{ displayName }}</span>!</p>
            <p>current email: <span class="bolded">{{ userEmail }}</span></p>
            </div>
    
            <div>You created your account on: <span class="bolded">{{ createdWhen }}</span></div>
    
            <div v-if="!wasSent&&(!changeID&&!changeEmail)" class="something">
                <button class="log-button" @click="changeID=true">Change Display Name</button>
                <button class="log-button" @click="changeEmail=true">Change Email</button>
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
            <div v-if="changeID">
                <div class="was-sent">
                    <form @submit.prevent="changeName">
                        <h2>Email Change</h2>

                        <label for="text">New Display Name: </label>
                        <input type="text" name="Display Name" v-model="newName" required>

                        <button class="log-button">submit</button>
                    </form>
                </div>
                <div class="something">
                    <button class="log-button" @click="changeID=false">Cancel</button>
                </div>
            </div>
            <div v-if="changeEmail">
                <div class="was-sent">
                    <form @submit.prevent="resetEmail">
                        <h2>Display Name Change</h2>

                        <label for="text">New Email: </label>
                        <input type="email" name="Email" v-model="newEmail" required>

                        <button class="log-button">submit</button>
                    </form>
                </div>
                <div class="something">
                    <button class="log-button" @click="changeEmail=false">Cancel</button>
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
        const changeEmail = ref(false)
        const changeID = ref(false)
        const newName = ref('')
        const newEmail = ref('')

        const sendEmail=()=>{
            wasSent.value = true
            console.log('you have sent an email')
            // wasSent.value = ustore.sendPRemail(userEmail.value)
        }

        const changeName=()=>{
            changeID.value = !(ustore.updateName(newName.value))
            newName.value = ''
        }

        const resetEmail=()=>{
            newEmail.value = ''
        }

        return {displayName, userEmail, createdWhen, sendEmail, changeName, resetEmail, newName, newEmail, changeEmail, changeID, wasSent}
    }
    
}
</script>

<style scoped>
input {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #eee;
    margin-right: 0.75em;
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