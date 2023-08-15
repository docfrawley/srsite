import {defineStore} from "pinia"

// firebase imports
import { auth, timestamp } from '../firebase/config'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail  } from 'firebase/auth'
import { db } from '../firebase/config'
import { collection, onSnapshot, query, where, addDoc, updateDoc, doc, getDoc, setDoc, Timestamp, arrayUnion, arrayRemove } from 'firebase/firestore'
import { ref } from "vue"
import { coursesStore } from "./coursesStore"


export const userStore  = defineStore("user", {
    state: ()=> {
        return {
        displayName: "",
        admin:null,
        email:"",
        userID:"",
        userCreated: "",
        coursePercentages: [],
        courseSecsTotal: 0,
        courseTotalPercentage: 0,
        promptAnswers: [],
        UserTechniques: [],
        positiveMov: {},
        moduleNotes: []
        }
    },
    getters: {
        getTotalPercentage(){
            return this.courseTotalPercentage
        },
        getUserId(){
            return this.userID
        },
        getUserEmail(){
            return this.email
        },
        getUserTechniques(){
            return this.UserTechniques
        },
        getPromptAnswers(){
            return this.promptAnswers
        },
        getDisplayName(){
            console.log('now: ', this.displayName)
            return this.displayName
        },
        getPositiveMotivations(){
            const positiveMov =  this.promptAnswers.find((mov)=>{
                mov.promptId=="zEfmgpumIi2gbGCG8eJt"
               })
            return positiveMov
        },
        getWhenCreatedAt(){
            return this.userCreated
        }
    },
    actions: {
        async login(email, password){
            try {
                const res = await signInWithEmailAndPassword(auth, email, password)
                if (!res) {
                throw new Error('Could not login')
                return false
                } else {
                    const cstore = coursesStore();
                    const docRef = doc(db, "users", res.user.uid);
                    const docSnap = await getDoc(docRef);
                    this.userCreated = res.user.metadata.creationTime
                    if (docSnap.exists()){
                        this.admin = docSnap.data().admin
                        this.displayName = docSnap.data().DisplayName
                        this.email = email;
                        this.userID = res.user.uid
                        cstore.setCourses();
                        await cstore.setCourseAll("procrastination");
                        if (docSnap.data().completedVids) {
                            const courseTotalSecs = cstore.getCourseSeconds

                         this.courseSecsTotal = docSnap.data().completedVids[0].totalSecs
                         this.courseTotalPercentage = this.courseSecsTotal/courseTotalSecs*100
                        }
                        if (docSnap.data().answers){
                            this.promptAnswers = docSnap.data().answers
                        }
                        if (docSnap.data().theTechs){
                            this.UserTechniques = docSnap.data().theTechs[0].currentAnswers
                        }
                        if (docSnap.data().modNotes){
                            this.moduleNotes = docSnap.data().modNotes
                        }
                    }
                    return true
                }
            }
            catch(err) {
                    console.log('error message: ', err.message)
                }
        },
        async signup(e, pw, dn){
            try {
                const res = await createUserWithEmailAndPassword(auth, e, pw)
                
                if (!res) {
                throw new Error('Could not complete signup')
                } else {
                    response = await setDoc(doc(db, 'users', res.user.uid), {
                        DisplayName: dn, admin:false, uid: res.user.uid, completedVids: []
                    })
                // const documentRef = collection(db, 'users')
                // const response = await addDoc(documentRef, {DisplayName: dn, admin:false, uid: res.user.uid})
                if (response){
                    this.email = e
                    this.displayName=dn
                    this.admin = false
                    this.userID = res.user.uid
                    localStorage.loggedin = true
                    }
                }   
            }            
            catch(err) {
            console.log(err.message)
            }
        },
        async sendPRemail(email){
            console.log('one: ', email)
            try {
                const res = await sendPasswordResetEmail(auth, email)
                console.log('two')
                if (!res) {
                throw new Error('Could not send')
                return false
                } else {
                    return true
                }
            }
            catch(err) {
                    console.log('error message: ', err.message)
                }

        },
        async setCoursePercentages(course){
            let colRef = collection(db, 'percentages')
            colRef =  await query(colRef, where("uid", "==", this.userID), where("col_name", "==", 'procrastination'))
            const unsub = onSnapshot(colRef, snapshot => {
                let results = []
                snapshot.docs.forEach(doc => {
                results.push({ ...doc.data(), id: doc.id })
                })
            this.coursePercentages = results
            })
        },
        // getCourseVidsComp(course){
        //     let searchObject= []
        //     if (this.compVids.length>0){
        //         searchObject = this.compVids.find((obj) => obj.col_name==course)
        //     }
        //     return searchObject
        // },
        async updateCompVids(p, secs, course){
            const compRef = doc(db, 'users', this.userID)
            const compSnap = await getDoc(compRef)
            const totalSecs = ref(0)
            const totalPer = ref(0)
            const cstore = coursesStore()
            if (compSnap.data().completedVids.length>0){
                let compObject = compSnap.data().completedVids[0]
                totalSecs.value = compObject.totalSecs
                await updateDoc(compRef, {completedVids: arrayRemove(compObject)})
            } 
            totalSecs.value = totalSecs.value + (p*secs)
            totalPer.value = ((totalSecs.value / cstore.getCourseSeconds )*100).toFixed(2)
            const newObject = {
                col_name: course,
                totalSecs: totalSecs.value,
                totalPercentage: totalPer.value
            }
            await updateDoc(compRef, {completedVids: arrayUnion(newObject)})
            this.courseSecsTotal = totalSecs.value
            this.courseTotalPercentage = totalPer.value
            console.log('user total secs = ', totalSecs.value)
            
            
        },
        async setAnswer(answer, promptId){

            const ansRef = await doc(db, 'users', this.userID)
            const ansSnap = await getDoc(ansRef)
            const ansObject = ref({
                answer:answer, 
                createdAt: Timestamp.now(),
                promptId:promptId
            })            
            if (ansSnap.exists()){
                let answerObject = this.promptAnswers.find((obj) => obj.promptId==promptId)
                if(answerObject){
                    await updateDoc(ansRef, {answers: arrayRemove(answerObject)})
                    let filtered = this.promptAnswers.filter((ansObj)=> ansObj.promptId != promptId)
                    this.promptAnswers = filtered
                }
                await updateDoc(ansRef, {answers: arrayUnion(ansObject.value)})
               

            } 
            this.promptAnswers.push(ansObject.value)
            
        },
        async setNote(modnote, modnumb){
            console.log('user: ', modnote, modnumb)
            const noteRef = await doc(db, 'users', this.userID)
            const noteSnap = await getDoc(noteRef)
            const noteObject = ref({
                modnote: modnote, 
                createdAt: Timestamp.now(),
                modnumb:modnumb
            })            
            if (noteSnap.exists()){
                let nObject = this.moduleNotes.find((obj) => obj.modnumb==modnumb)
                if(nObject){
                    await updateDoc(noteRef, {modNotes: arrayRemove(nObject)})
                    let filtered = this.moduleNotes.filter((noteObj)=> noteObj.modnumb != modnumb)
                    this.moduleNotes = filtered
                }
                await updateDoc(noteRef, {modNotes: arrayUnion(noteObject.value)})
               

            } 
            this.moduleNotes.push(noteObject.value)
        },
        async setTechniques(){
            const techsRef = doc(db, 'users', this.userID)
            const techsSnap = await getDoc(techsRef)
            const tempObject = ref({
                course: 'procrastination',
                createdAt: Timestamp.now(),
                currentAnswers: this.UserTechniques
            })
            if (techsSnap.exists()){
                let techObject = techsSnap.data().theTechs.find((obj) => obj.course == 'procrastination')
                if (techObject){
                    await updateDoc(techsRef, {theTechs: arrayRemove(techObject)})
                }
                await updateDoc(techsRef, {theTechs: arrayUnion(tempObject.value)})
            
            }
            
        },
        updateTechs(items){
            this.UserTechniques = items
        },
        async getTechniques(){
            const techRef = doc(db, 'users', this.userID)
            const techSnap = await getDoc(techRef) 
            if (techSnap.data().techniques){
                this.UserTechniques = techSnap.data().theTechs
            }
        },
        unsetpromptAnswers(){
            this.promptAnswers = []
        },
        unsetCompVids(){
            this.compVids = []
        },
        unsetcoursepercentages(){
            this.coursePercentages = []
        }
    },
    persist: true,
});