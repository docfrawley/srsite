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
        currentCourse: {},
        courseAll: [],
        currentModule:{},
        currentCourseTotal: 0,
        currentVideo: {},
        originalTechs: [],
        initialPercentage: 0,
        currentPercentage: 0,
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
        getModulesLength(){
            return this.courseModules.length
        },
        getCourseSeconds(){
            return this.currentCourseTotal
        },
        getfullCourse(){
            return this.courseAll
        },
        getOriginalTechs(){
            return this.originalTechs
        },
        getDescription(){
            return this.currentDescription
        },
        getTimestamp(){
            return this.currentTimestamp
        },
        getCurrentVideo(){
            return this.currentVideo
        },
        getCurrentModule(){
            return this.currentModule
        },
        getcurrentVidPercentage(){
            return this.currentPercentage
        },
        getInitPercentage(){
            return this.initialPercentage
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
            const unsub = onSnapshot(colRef, snapshot => {
                let results = []
                snapshot.docs.forEach(doc => {
                    results.push({ ...doc.data(), id: doc.id })
                })
                this.allCourses = results
            })
            this.setDownloadLink()

        },
         unsetCourseAll(){
            this.courseAll=[]
        },
         async setCourseAll(course){
            let results = []
            let vidResults = []
            const totalVidsSecs = ref(0)
            const courseRef =  doc(db, 'courses', 'inxvegSzZpja4SLz5FcT')
            const courseSnap = await getDoc(courseRef)
            if (courseSnap.exists()){
                this.currentCourse = courseSnap.data()
                this.originalTechs = this.currentCourse.techniques
            }
            const ustore = userStore()
            const uID = ref(ustore.getUserId)
            let colRef = collection(db, 'course-modules')
            colRef = query(colRef, where("course", "==", 'procrastination'))
            const colSnap = await getDocs(colRef)
            colSnap.forEach(doc => {
                results.push({ ...doc.data(), id: doc.id })
            })
            results.sort((a, b) => (a.modnumb > b.modnumb) ? 1 : -1)
            let vidRef = collection(db, 'procrastination')
            const vidSnap = await getDocs(vidRef)
            vidSnap.forEach(doc => {
                vidResults.push({ ...doc.data(), id: doc.id })
            })
            for (let i = 0; i < results.length; i++) {
                let modVids = vidResults.filter(vid => vid.module == results[i].modnumb)
                modVids.sort((a, b) => (a.order > b.order) ? 1 : -1)
                modVids.forEach(video => {
                totalVidsSecs.value = totalVidsSecs.value + parseInt(video.length) 
                if (Array.isArray(video.percentages)) {
                    const percentageVid = video.percentages.filter(doc => doc.uid === uID.value)
                    if (percentageVid[0]) {
                        video.percentages = percentageVid[0].percentage
                        
                    } else {
                        video.percentages = null
                    }
                }
                })
                results[i].videos = modVids
            }
            this.courseAll = results
            this.currentModule = this.courseAll[0]
            this.setCurrentVideo(this.currentModule.videos[0])
            this.addQuestions()
            this.currentCourseTotal = totalVidsSecs.value
        },
        async addQuestions(){
            let qresults = []
            let questionRef = collection(db, 'questions')
            let qRef = query(questionRef, where("vid", "==", this.currentVideo.id))
            const qSnap = await getDocs(qRef)
            qSnap.forEach(doc => {
                qresults.push({ ...doc.data(), id: doc.id })
            })
            qresults.sort((a, b) => (a.vcue > b.vcue) ? 1 : -1)
            this.currentVideo.questions = qresults
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
        async setCourseModules(course){
            let modresults = []
            console.log('asdfa: ', course)
            let colRef = collection(db, 'course-modules')
            colRef = query(colRef, where("course", "==", course))
            const colSnap = await getDocs(colRef)
            colSnap.forEach(doc => {
                modresults.push({ ...doc.data(), id: doc.id })
            })
            modresults.sort((a, b) => (a.modnumb > b.modnumb) ? 1 : -1)
            this.courseModules = modresults
                console.log("now: ", this.courseModules)
                console.log('length: ', this.courseModules.length)
            
        },
        setCurrentModule(mod){
            this.currentModule = mod;
        },
        unsetCurrentModule(){
            this.currentModule = {}
        },
        setCurrentVideo(video){
            this.currentVideo = video;
            if (!video.questions){
                this.addQuestions()
            }
            if (video.percentages){
                this.initialPercentage = video.percentages
                this.currentPercentage = video.percentages
            } else {
                this.initialPercentage = 0
                this.currentVideo.percentages = 0
                this.currentPercentage = 0
            }
        },
        unsetCurrentVideo(){
            this.currentVideo = {};
            this.initialPercentage = null
        },
        setCurrentCourse(course){
            this.currentCourse = course
        },
        unsetCurrentCourse(){
            this.currentCourse = {}
        },
        async setPercentage(p){
            console.log('setting percentage: ', p)
            const ustore = userStore()
            const userID = ref(ustore.getUserId)
            if (p>this.currentPercentage) {
                this.currentPercentage=p
            }
            if (this.currentPercentage>this.initialPercentage){
                const docRef = doc(db, this.currentCourse.col_name, this.currentVideo.id)
                const docSnap = await getDoc(docRef)
                if (!docSnap.data().percentages){
                   await  updateDoc(docRef, {percentages: [{uid: userID.value, percentage: this.currentPercentage}]})
                   
                    this.currentVideo.percentages = this.currentPercentage
                } else {
                    let findObject = docSnap.data().percentages.find((obj) => obj.uid===userID.value)
                    if(findObject){
                        await updateDoc(docRef, {percentages: arrayRemove(findObject)})
                    }
                    await updateDoc(docRef, {percentages: arrayUnion({uid: userID.value, percentage: this.currentPercentage})})
                }
                this.currentVideo.percentages=this.currentPercentage
                ustore.updateCompVids(this.currentPercentage, docSnap.data().length, this.currentCourse.col_name)
            }
            
         
        },
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