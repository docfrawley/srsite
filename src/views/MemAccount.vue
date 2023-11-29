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
                <button class="log-button" @click="changePass">Change Password</button>
            </div>
            
            
            <div v-if="wasSent">
                <div class="was-sent" v-if="passwordM">
                    <p>An email has been sent to the email address currently associated with this account with instructions on how to reset your password.</p>
                </div>
                <div class="was-sent" v-if="emailM">
                    <p>You have changed your email to {{ userEmail }}, an email has been sent with a verficiation link to this address. Please verify before the next time you log in.</p>
                </div>
                <div class="was-sent" v-if="nameM">
                    <p>You have changed your dislay name to {{ displayName }}</p>
                </div>
                <div class="something">
                    <button class="log-button" @click="reset">Go Back</button>
                </div>
            </div>
            <div v-if="boolName">
                <ChangeName @cancel="boolName=false" @submit="changeName"/>
            </div>
            <div v-if="boolEmail">
                <ChangeEmail @cancel="boolEmail=false" @submit="changeEmail"/>
            </div>
        </div>
        
        <div v-if="testPur" class="grid-col-span-2 fill-up memAccountStuff">

        
            <div>Thank you for purchasing the Overcoming Procrastination Course</div>
            <div>Amount Paid: ${{(testPur.price/100).toFixed(2)}}</div>
            <div>Date of Purchase: {{whenBought}}</div>
            <div class="log-button" @click="goToCourse">Go To Course</div>
        </div>
    </div>
    </div>
        
    
  
</template>

<script>
import { userStore } from '@/store/userStore';
import { coursesStore } from '@/store/coursesStore';
import { useRouter } from "vue-router";
import { ref, watchEffect, onMounted } from 'vue';
import ChangeName from '@/components/ChangeName.vue';
import ChangeEmail from '@/components/ChangeEmail.vue';

export default {
    components: { ChangeName, ChangeEmail },
    setup() {
        const ustore = userStore()
        const displayName = ref(ustore.getDisplayName)
        const userEmail = ref(ustore.getUserEmail)
        const createdWhen = new Date(ustore.getWhenCreatedAt).toLocaleDateString()
        const router = useRouter();
        const wasSent = ref(false)
        const boolEmail = ref(false)
        const boolName = ref(false)
        const emailM = ref(false)
        const nameM = ref(false)
        const passwordM = ref(false)
        const Purchased = ref(false)
        const testPur = ref(ustore.userCourses[0])
        const blay = ref(ustore.DidBuyCourse())
        const whenBought = ref('')

        if (blay.value){
            testPur.value = ustore.userCourses[0]
            console.log('value: ', testPur.value)
            whenBought.value = new Date(testPur.boughtAt).toLocaleDateString()
            console.log('bought when: ', whenBought.value)
        }


        watchEffect()(() => {
            displayName.value = ustore.getDisplayName
            userEmail.value = ustore.getUserEmail  
            testPur.value = ustore.userCourses[0]
            console.log('value: ', testPur.value)
            whenBought.value = new Date(testPur.boughtAt).toLocaleDateString()
            console.log('bought when: ', whenBought.value)
        })

        ustore.$subscribe((login, state) => {
            testPur.value = ustore.userCourses[0]
        });

        onMounted(() => {
            testPur.value = ustore.userCourses[0]
        });

        const changePass=()=>{
            console.log('you have sent an email')
            wasSent.value = ustore.sendPRemail(userEmail.value)
            passwordM.value = true
        }

        const changeName=(newName)=>{
            const outcome = ustore.updateName(newName)
            boolName.value = false
            wasSent.value = true
            nameM.value = true
        }

        const changeEmail=(newEmail)=>{
            ustore.updateEmail(newEmail)
            boolEmail.value = false
            wasSent.value = true
            emailM.value = true
        }

        const reset = () => {
            wasSent.value = false
            passwordM.value = false
            nameM.value = false
            emailM.value = false
        }

        const goToCourse = () => {
            router.push({
                name: "CourseView",
                params: { course: "procrastination" },
            });
        };

        

        return {
            displayName, 
            userEmail,
            createdWhen,
            changePass,
            changeName,
            changeEmail,
            reset,
            boolEmail,
            boolName,
            passwordM,
            emailM,
            nameM,
            wasSent,
            Purchased,
            testPur,
            goToCourse,
            whenBought
        }
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

.memAccountStuff{
    min-height: 250px;
    display: flex;
    flex-direction: column;
    align-content: space-around;
    flex-wrap: wrap;
}
</style>