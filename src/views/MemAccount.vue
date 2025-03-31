<template>
    <div class="page-container">
    <div class="grid-container">
        <div class="grid-col-span-3 fill-up mem-top">
            
            <div class="welcome">Hello <span>{{ displayName }}</span>!</div>
            <div class="bolded">Current Email: <span >{{ userEmail }}</span></div>
            
    
            <div class="bolded" v-if="createdWhen != 'Invalid Date'">Account Created: <span>{{ createdWhen }}</span></div>
    
            <div v-if="!wasSent&&(!boolName&&!boolEmail)" class="something">
                <button class="log-button response-gap" @click="boolName=true">Change Display Name</button>
                <button class="log-button response-gap" @click="boolEmail=true">Change Email</button>
                <button class="log-button response-gap" @click="changePass">Change Password</button>
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
        
            <div v-if="testPur.length!=0">
                <div v-for="doc in testPur" :key="doc.id">
                    <div v-if="doc.hasAccess" class="grid-col-span-3 fill-up memAccountStuff">
                        <div><p>{{ doc.title }}</p></div>
                        <div class="log-button" @click="goToCourse(doc.col_name)">Go To Course</div>
                    </div>
                    <div v-else class="grid-col-span-3 fill-up memAccountStuff">
                        <div>
                            <p class="step-one">Overcoming Procrastination Course</p>
                            <p class="sub-one">Join instructor Nic Voge and learn how procrastination holds</p>
                            <p class="sub-one">you back, where it comes from, and how to overcome it.</p><br/>
                            <p class="sub-one2">Buy now and get access to:</p>
                            <ul>
                                <li>Over two hours of content</li>
                                <li>Goals and tools to help you succeed</li>
                                <li>Techniques you'll use for the rest of your life</li>
                            </ul>
                        </div>
                        
                        <div v-if="!pending">
                            <button class="log-button2" @click="purchase('procrastination')">Purchase Course</button>
                        </div>
                        <div v-if="pending">
                            <button class="log-button2">Loading...</button>
                        </div>
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
import { ref, watchEffect } from 'vue';
import ChangeName from '@/components/ChangeName.vue';
import ChangeEmail from '@/components/ChangeEmail.vue';

export default {
    components: { ChangeName, ChangeEmail },
    setup() {
        const ustore = userStore()
        const cstore = coursesStore()
        const displayName = ref(ustore.getDisplayName)
        const userEmail = ref(ustore.getUserEmail)
        const createdWhen = new Date(ustore.getWhenCreatedAt).toLocaleDateString()
        if (createdWhen.value=="Invalid Date"){
            createdWhen.value = new Date().toLocaleDateString()
        }
        const router = useRouter();
        const wasSent = ref(false)
        const boolEmail = ref(false)
        const boolName = ref(false)
        const emailM = ref(false)
        const nameM = ref(false)
        const passwordM = ref(false)
        const Purchased = ref(false)
        const testPur = ref([])
        const blay = ref(ustore.DidBuyCourse())
        const pending = ref(false)
 
        if (testPur.value.length == 0){
            testPur.value = ustore.getUserCourses
        }

        const purchase = (course) => {
            pending.value = true
            ustore.purchaseCourse(course)
        }

        if (blay.value){
            testPur.value = ustore.userCourses[0]
        }


        watchEffect(() => {
            displayName.value = ustore.getDisplayName
            userEmail.value = ustore.getUserEmail  
            testPur.value = ustore.getUserCourses
        })


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

        const goToCourse = (col_name) => {
            ustore.setCourseAll(col_name)
            if(ustore.getCurrentCourse){
                router.push({
                name: "CourseView"
            });
            }
            
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
            purchase, 
            pending
        }
    }
    
}
</script>

<style scoped>

.welcome {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
}

.mem-top{
    padding: 25px;
}

.sub-one2{
    font-size: 18px;
    font-weight: bold;
}
.step-one {
  font-size: 22px;
}

li::before{
    content: '\2713';
    margin-right: 2px;
    color: var(--primegreen);
    font-size: 20px;
}
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

.response-gap {
    margin:0;
}

@media (max-width: 570px) {
    .something{
        flex-direction: column;
        justify-content: center;
        align-content: space-between;
    }

    .response-gap {
        margin: 10px;
    }
    

}

.bolded {
    font-weight: bold;
    color: black;
}

.memAccountStuff{
    padding:25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

.log-button2 { 
  background: var(--primegreen);
  border-radius: .25rem;
  border: 0;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  pointer-events: auto;
  color: var(--primeblue);
  max-width: 220px;
  max-height: 45px;
  text-align: center;
}

.log-button2:hover{
  color:var(--primegreen);
  background-color: var(--primeblue);
}
</style>