import {defineStore} from "pinia"
import { watchEffect } from 'vue'

// firebase imports
import { auth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword  } from 'firebase/auth'
import { db } from '../firebase/config'
import { collection, onSnapshot, query, where, addDoc } from 'firebase/firestore'


export const userStore  = defineStore("user", {
    state: ()=> {
        return {
        displayName: "",
        admin:null,
        email:"",
        userID:"",
        coursePercentages: []
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
                    let documentRef = collection(db, 'users')
                    documentRef = await query(documentRef, where("uid", "==", res.user.uid))
                    onSnapshot(documentRef, snap => {
                            let results = []
                            snap.docs.forEach(doc => {
                                // must wait for the server to create the timestamp & send it back
                                results.push({ ...doc.data(), id: doc.id })

                            })
                            if (results) {
                                this.admin = results[0].admin
                                this.displayName = results[0].DisplayName
                                
                                this.email = email;
                                this.userID = res.user.uid
                            }
                        })
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
                const documentRef = collection(db, 'users')
                const response = await addDoc(documentRef, {DisplayName: dn, admin:false, uid: res.user.uid})
                if (response){
                    this.email = e
                    this.displayName=dn
                    this.admin = false
                    this.userID = res.user.uid
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
        }
    }
});