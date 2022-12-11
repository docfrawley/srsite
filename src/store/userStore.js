import {defineStore} from "pinia"
import { watchEffect } from 'vue'

// firebase imports
import { auth, timestamp } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword  } from 'firebase/auth'
import { db } from '../firebase/config'
import { collection, onSnapshot, query, where, addDoc, updateDoc, doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
import { ref } from "vue"


export const userStore  = defineStore("user", {
    state: ()=> {
        return {
        displayName: "",
        admin:null,
        email:"",
        userID:"",
        coursePercentages: [],
        compVids: [],
        promptAnswers: []
        }
    },
    getters: {
    },
    actions: {
        async login(email, password){
            try {
                const res = await signInWithEmailAndPassword(auth, email, password)
                if (!res) {
                throw new Error('Could not login')
                } else {
                    const docRef = doc(db, "users", res.user.uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()){
                        this.admin = docSnap.data().admin
                        this.displayName = docSnap.data().DisplayName
                        this.email = email;
                        this.userID = res.user.uid
                        if (docSnap.data().completedVids) {
                         this.compVids = docSnap.data().completedVids
                        }
                    }
                }
            }
            catch(err) {
                    console.log(err.message)
                }
        },
        async signup(e, pw, dn){
            try {
                const res = await createUserWithEmailAndPassword(auth, e, pw)
                if (!res) {
                throw new Error('Could not complete signup')
                } else {
                    response = await setDoc(doc(db, 'users', res.user.uid), {
                        DisplayName: dn, admin:false, uid: res.user.uid
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
        async setCoursePercentages(course){
            let colRef = collection(db, 'percentages')
            colRef =  await query(colRef, where("uid", "==", this.userID), where("col_name", "==", course.col_name))
            const unsub = onSnapshot(colRef, snapshot => {
                let results = []
                snapshot.docs.forEach(doc => {
                results.push({ ...doc.data(), id: doc.id })
                })
            this.coursePercentages = results
            })

            watchEffect((onInvalidate) => {
                onInvalidate(() => unsub());
            });
        },
        getCourseVidsComp(course){
            let searchObject= []
            if (this.compVids.length>0){
                searchObject = this.compVids.find((obj) => obj.col_name==course)
            }
            return searchObject
        },
        async setAnswer(answer, promptID){

            const ansRef = doc(db, 'users', this.userID)
            const ansSnap = await getDoc(ansRef)
            const ansObject = ref({
                answer:answer, 
                promptId:promptID,
                createdAt: Timestamp.now()
            })            
            if (ansSnap.exists()){
                await updateDoc(ansRef, {answers: [ansObject.value]})

                await updateDoc(ansRef, {createAt: timestamp})
            } 
            this.promptAnswers.push(ansObject.value)
            
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