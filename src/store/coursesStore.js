import {defineStore} from "pinia"
import {  ref } from 'vue'
import { db, storage } from '../firebase/config'
import { userStore } from "./userStore"
import { collection, onSnapshot, query, where, doc, updateDoc, arrayUnion, getDoc, arrayRemove, getDocs, addDoc } from 'firebase/firestore'
import {getDownloadURL, ref as reff} from 'firebase/storage'


export const coursesStore  = defineStore("courses", {
    state: ()=> {
        return {
        allCourses: [],
        currentModule:{},
        currentCourseTotal: 0,
        currentVideo: {},
        
        
        currentDescription: '',
        currentTimestamp:'',
        downloadLink:'',
        courseModules: [],
        }
    },
    getters: {
        getCourseModules(){
            return this.courseModules
        },
        // getModulesLength(){
        //     return this.courseModules.length
        // },
        getCourseSeconds(){
            return this.currentCourseTotal
        },
        getfullCourse(){
            return this.courseAll
        },
        
        getDescription(){
            return this.currentDescription
        },
        getTimestamp(){
            return this.currentTimestamp
        },
        getDownloadLink(){
            return this.downloadLink
        },
        getCourses(){
            return this.allCourses
        }
    },
    actions: {
        async setCourses(){
            let colRef = await collection(db, 'courses')
            let results = []
            this.setDownloadLink()
            const unsub = await onSnapshot(colRef, snapshot => {
                
                snapshot.docs.forEach(doc => {
                    let hasAccess = false
                    let totalSecs = 0
                    if (doc.data().col_name == 'cps'){
                        hasAccess = true
                    }
                    results.push({ ...doc.data(), id: doc.id, hasAccess, totalSecs })
                })
                this.allCourses = results
            })
            
            
            
        },
       

        async addModule(modinfo){
            console.log("here now: ", modinfo)
            let mresults = []
            let modRef = collection(db, 'course-modules')
            const mSnap = await addDoc(modRef, modinfo)
            if (mSnap){
                this.courseModules.push(modinfo)
            }
        },
        
        async findDescription(dimension, tool){
            if (dimension && tool ){
                let toolRef = collection(db, 'tools')
                let tresults = []


                toolRef =  query(toolRef, where("course", "==", 'procrastination'), where("dimension", "==", dimension), where("tool", "==", tool))
                const toolsub = await onSnapshot(toolRef, snap => {
                    snap.docs.forEach(doc => {
                        tresults.push({ ...doc.data(), id: doc.id })
                    })
                    this.currentDescription = tresults[0].description
                    this.currentTimestamp = tresults[0].timestamp
                })
                

                
            }
        },
        // async setCourseModules(course){
        //     let modresults = []
        //     console.log('asdfa: ', course)
        //     let colRef = collection(db, 'course-modules')
        //     colRef = query(colRef, where("course", "==", course))
        //     const colSnap = await getDocs(colRef)
        //     colSnap.forEach(doc => {
        //         modresults.push({ ...doc.data(), id: doc.id })
        //     })
        //     modresults.sort((a, b) => (a.modnumb > b.modnumb) ? 1 : -1)
        //     this.courseModules = modresults
        //         console.log("now: ", this.courseModules)
        //         console.log('length: ', this.courseModules.length)
            
        // },
        
        setCurrentCourse(course){
            this.currentCourse = course
        },
        unsetCurrentCourse(){
            this.currentCourse = {}
        },
        // async setPercentage(p){
        //     console.log('setting percentage: ', p)
        //     const ustore = userStore()
        //     const userID = ref(ustore.getUserId)
        //     if (p>this.currentPercentage) {
        //         this.currentPercentage=p
        //     }
        //     if (this.currentPercentage>this.initialPercentage){
        //         const docRef = doc(db, this.currentCourse.col_name, this.currentVideo.id)
        //         const docSnap = await getDoc(docRef)
        //         if (!docSnap.data().percentages){
        //            await  updateDoc(docRef, {percentages: [{uid: userID.value, percentage: this.currentPercentage}]})
                   
        //             this.currentVideo.percentages = this.currentPercentage
        //         } else {
        //             let findObject = docSnap.data().percentages.find((obj) => obj.uid===userID.value)
        //             if(findObject){
        //                 await updateDoc(docRef, {percentages: arrayRemove(findObject)})
        //             }
        //             await updateDoc(docRef, {percentages: arrayUnion({uid: userID.value, percentage: this.currentPercentage})})
        //         }
        //         this.currentVideo.percentages=this.currentPercentage
        //         ustore.updateCompVids(this.currentPercentage, docSnap.data().length, this.currentCourse.col_name)
        //     }
            
         
        // },
        updateProgress(p){
            if (p>this.currentPercentage) {
                this.currentPercentage=p
            }
            
        },
        async setDownloadLink(){
            const fileRef = reff(storage, 'gs://self-relationality/VAPS.pdf');
            this.downloadLink = await getDownloadURL(fileRef)
            
        }
    },
    persist:true,
});