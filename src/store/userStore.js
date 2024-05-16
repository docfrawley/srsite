import {defineStore} from "pinia"

// firebase imports
import { auth } from '../firebase/config'
import { getAuth, onAuthStateChanged,updateEmail, sendEmailVerification, GoogleAuthProvider  } from 'firebase/auth'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup  } from 'firebase/auth'
import { db } from '../firebase/config'
import { collection, onSnapshot, query, where, addDoc, updateDoc, doc, getDoc, setDoc, Timestamp, arrayUnion, arrayRemove } from 'firebase/firestore'
import { ref } from "vue"
import { coursesStore } from "./coursesStore"

const provider = new GoogleAuthProvider();


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
        moduleNotes: [],
        userCourses: []
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
        async loginEmailPassword(email, password){
            try {
                const res = await signInWithEmailAndPassword(auth, email, password)
                if (!res) {
                throw new Error('Could not login')
                return false
                } else {
                    const cstore = coursesStore();
                    const docRef = doc(db, "users", res.user.uid);
                    const docSnap = await getDoc(docRef);
                    let whenCreated = res.user.metadata.creationTime
                    this.userCreated = new Date(whenCreated).toLocaleDateString()
                    if (docSnap.exists()){
                        this.admin = docSnap.data().admin
                        this.displayName = docSnap.data().DisplayName
                        this.email = email;
                        this.userID = res.user.uid
                        cstore.setCourses();
                        if (docSnap.data().completedVids.length>0) {
                            const courseObject = docSnap.data().completedVids[0]

                            await cstore.setCourseAll(courseObject.col_name);
                            const courseTotalSecs = cstore.getCourseSeconds
                            this.courseSecsTotal = courseObject.totalSecs
                            this.courseTotalPercentage = (this.courseSecsTotal/courseTotalSecs)*100
                            this.userCourses.push(courseObject)
                        }
                        if (docSnap.data().answers){
                            this.promptAnswers = docSnap.data().answers
                        }
                        if (docSnap.data().theTechs){
                            this.UserTechniques = docSnap.data().theTechs.currentAnswers
                            console.log('user techs', this.UserTechniques)
                        } else {
                            this.UserTechniques = cstore.originalTechs
                            console.log('hey this worked')
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
        async outsideLogin(){
            let result = false
            try {
                const res = await signInWithPopup(auth, provider)
                if (!res) {
                    throw new Error('Could not login')
                    return false
                } else {
                    result = await this.login(res)
                }

                if (!result) {
                    const cstore = coursesStore();
                    await cstore.setCourses();
                    await setDoc(doc(db, 'users', res.user.uid), {
                        DisplayName: res.user.displayName, admin:false, uid: res.user.uid, completedVids: []
                    })
                    // await cstore.setCourseAll("procrastination");
                    this.email = res.user.email
                    this.displayName=res.user.displayName
                    this.admin = false
                    this.userID = res.user.uid
                    localStorage.loggedin = true
                    return true
                }
            }
            catch(err) {
                console.log('error message: ', err.message)
            }
            return result
        },
        async login(credentials) {
            if (typeof credentials === 'object' && credentials !== null) {
                const cstore = coursesStore();
                const docRef = doc(db, "users", credentials.user.uid);
                const docSnap = await getDoc(docRef);
                this.userCreated = credentials.user.metadata.creationTime
                if (docSnap.exists()){
                    this.admin = docSnap.data().admin
                    this.displayName = docSnap.data().DisplayName
                    this.email = credentials.user.email
                    this.userID = credentials.user.uid
                    cstore.setCourses();
                    await cstore.setCourseAll("procrastination");
                    if (docSnap.data().completedVids.length>0) {
                        const courseTotalSecs = cstore.getCourseSeconds
                        this.courseSecsTotal = docSnap.data().completedVids[0].totalSecs
                        this.courseTotalPercentage = (this.courseSecsTotal/courseTotalSecs)*100
                    }
                    if (docSnap.data().answers){
                        this.promptAnswers = docSnap.data().answers
                    }
                    if (docSnap.data().theTechs){
                        this.UserTechniques = docSnap.data().theTechs
                        console.log('four four')
                    } else {
                        this.UserTechniques = cstore.originalTechs
                        console.log('five five')
                    }
                    if (docSnap.data().modNotes){
                        this.moduleNotes = docSnap.data().modNotes
                    }
                    return true
                } else {
                    return false
                }
            }
        },
        async signup(e, pw, dn){
            try {
                const cstore = coursesStore();
                const res = await createUserWithEmailAndPassword(auth, e, pw)
                await cstore.setCourses();
                if (!res) {
                throw new Error('Could not complete signup')
                } else {
                    
                    await setDoc(doc(db, 'users', res.user.uid), {
                        DisplayName: dn, admin:false, uid: res.user.uid, completedVids: []
                    })
                        // await cstore.setCourseAll("procrastination");
                        this.email = e
                        this.displayName=dn
                        this.admin = false
                        this.userID = res.user.uid
                        localStorage.loggedin = true
                        return true
                        
                        
                }   
                
            }            
            catch(err) {
            console.log(err.message)
            }
        },
        async outsideSignUp(){
            try {
                const cstore = coursesStore();
                const res = await signInWithPopup(auth, provider)
                const docRef = doc(db, "users", res.user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    throw new Error('There is already an account associated with that google address')
                    return false
                }
                await cstore.setCourses();
                if (!res) {
                throw new Error('Could not complete signup')
                } else {
                    
                    await setDoc(doc(db, 'users', res.user.uid), {
                        DisplayName: res.user.displayName, admin:false, uid: res.user.uid, completedVids: []
                    })
                        // await cstore.setCourseAll("procrastination");
                        this.email = res.user.email
                        this.displayName=res.user.displayName
                        this.admin = false
                        this.userID = res.user.uid
                        localStorage.loggedin = true
                        return true
  
                }                   
            }            
            catch(err) {
            console.log(err.message)
            }
        },
        async sendPRemail(email){
            try {
                const res = await sendPasswordResetEmail(auth, email)
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
        async updateName(name){
            //console.log('you are updating the name to: ' + name)
            const nameRef = await doc(db, 'users', this.userID) 
            if (nameRef){
                try {
                    await updateDoc(nameRef, {DisplayName: name})
                    this.displayName = name
                    return true
                } catch (updateError) {
                    console.error('Error updating username:', updateError )
                }
            }
            return false
        },
        async updateEmail(email){
            try{
                await updateEmail(auth.currentUser, email)
                this.email = email
                console.log("updated the email")
                try {
                    await sendEmailVerification(auth.currentUser)
                    console.log("verification email sent")
                    return true
                } catch(verificationError) {
                    console.error("error sending verification email:", verificationError)
                }
            } catch (updateError) {
                console.error("error updating the email:", updateError)
            }
            return false
        },
        async purchaseCourse(course){
            // success_url: 'https://learn.vogeacademy.com/account',
            console.log('we are in the purchase zone')

            const userDocRef = doc(db, 'users', this.userID);
            const checkoutSessionsCollectionRef = collection(userDocRef, 'checkout_sessions');
            const checkoutSessionRef = await addDoc(checkoutSessionsCollectionRef, {
                mode: 'payment',
                price: 'price_1P7iakKgvg6dyKdRcK1zgj8p',
                course: course,
                success_url: 'https://learn.vogeacademy.com/account',
                cancel_url: window.location.origin,
                allow_promotion_codes: true
              });
              
              // Wait for the CheckoutSession to get attached by the extension
              const sessionDocRef = doc(db, 'users', this.userID, 'checkout_sessions', checkoutSessionRef.id);
              onSnapshot(sessionDocRef, (snap) => {
                const { error, url } = snap.data();
                if (error) {
                  // Show an error to your customer and
                  // inspect your Cloud Function logs in the Firebase console.
                  alert(`An error occurred: ${error.message}`);
                }
                if (url) {
                  // We have a Stripe Checkout URL, let's redirect.
                  window.location.assign(url);
                }
              });
        },
        async establishCompletedVids(course){
            const cstore = coursesStore();
            const compRef = await doc(db, 'users', this.userID)
            const compSnap = await getDoc(compRef)
                cstore.setCourses();
                cstore.setCourseAll(course);
            if (!compSnap.data().completedVids){
                await updateDoc(compRef, {completedVids: arrayUnion(this.userCourses[0])})
                await updateDoc(compRef, {theTechs: cstore.originalTechs})
                this.UserTechniques = cstore.originalTechs
            } 
        },
        async DidBuyCourse(){
            let results = []
            const userDocRef =  await doc(db, 'users', this.userID);
            const paymentsRef =  await collection(userDocRef, 'payments');
            if (paymentsRef){
                const unsub = await onSnapshot(paymentsRef, snapshot => {
                    snapshot.docs.forEach(doc => {
                        if (doc.data().items[0].description=='Overcoming Procrastination Course' || doc.data().items[0].description=='Overcoming Procrastination')
                    results.push({ ...doc.data(), id: doc.id })
                    })
                    if (results.length>0){
                        let tempCourse = 'procrastination'
                        let tempstamp = new Date();
                        let tempDate = tempstamp.toLocaleDateString()
                        const element = this.userCourses.find(obj => obj.col_name === tempCourse);
                        if (!element){
                            let tempObject = {
                                col_name: tempCourse,
                                boughtAt: tempDate,
                                price: results[0].items[0].amount_total,
                                totalSecs: 0
                            }
                            this.userCourses.push(tempObject)
                            this.establishCompletedVids(tempCourse)
                        }
                       
                    }
                })
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
            const boughtAt = ref('')
            const price = ref(0)
            if (compSnap.data().completedVids.length>0){
                let compObject = compSnap.data().completedVids[0]
                boughtAt.value = compObject.boughtAt
                price.value=compObject.price
                totalSecs.value = compObject.totalSecs
                await updateDoc(compRef, {completedVids: arrayRemove(compObject)})
            } 
            totalSecs.value = totalSecs.value + (p*secs)
            totalPer.value = ((totalSecs.value / cstore.getCourseSeconds )*100).toFixed(2)
            const newObject = {
                col_name: course,
                boughtAt: boughtAt.value,
                price: price.value,
                totalSecs: totalSecs.value
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
                await updateDoc(techsRef, {theTechs: tempObject.value})
            
            }
            return true
            
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