import {defineStore} from "pinia"
import {  ref, watchEffect } from 'vue'
import { db } from '../firebase/config'
import { userStore } from "./userStore"
import { collection, onSnapshot, query, where, doc, updateDoc, arrayUnion, getDoc, arrayRemove } from 'firebase/firestore'



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
        initialPercentage: null,
        currentDescription: '',
        }
    },
    getters: {
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
        }
    },
    actions: {
         setCourses(){
            const ustore = userStore()
            let colRef = collection(db, 'courses')
            const unsub = onSnapshot(colRef, snapshot => {
                let results = []
                snapshot.docs.forEach(doc => {
                results.push({ ...doc.data(), id: doc.id })
                })
                // for (var i = 0; i < results.length; i++) {
                //     if (results[i].status=='published'){
                //         const userObject = ustore.getCourseVidsComp(results[i].col_name)
                //         if (userObject.length>0){
                //         results[i].completedVids = (userObject.numVids) ? userObject.numVids :0
                //         results[i].completedSecs = (userObject.totalSecs) ? userObject.totalSecs :0 
                //         results[i].percentCompleted = (userObject.totalSecs) ? (userObject.totalSecs / results[i].total_length*100).toFixed(2): 0

                //         }
                //     }
                // }
            this.allCourses = results
            })

            watchEffect((onInvalidate) => {
                onInvalidate(() => unsub());
            });
        },
         unsetCourseAll(){
            this.courseAll=[]
        },
         async setCourseAll(course){
            let results = []
            let vidResults = []
            const totalVidsSecs = ref(0)
            
            this.currentCourse = course
            this.originalTechs = course.techniques
            const ustore = userStore()
            const uID = ref(ustore.getUserId)
            let colRef = collection(db, 'course-modules')
            colRef =  await query(colRef, where("course", "==", course.col_name))
            
            const unsub =  await onSnapshot(colRef, snap => {
                snap.docs.forEach(doc => {
                results.push({...doc.data(), id: doc.id})
                });
                results.sort((a, b) => (a.modnumb > b.modnumb) ? 1 : -1)
            })
            

            let questionRef = await collection(db, 'questions')

            let vidRef =  await collection(db, course.col_name)
            const unsubVid = onSnapshot(vidRef, snap => {
                snap.docs.forEach(doc => {
                    vidResults.push({ ...doc.data(), id: doc.id });
                });
                for (let i = 0; i < results.length; i++) {
                    let modVids = vidResults.filter(vid => vid.module == results[i].modnumb);
                    modVids.sort((a, b) => (a.order > b.order) ? 1 : -1);
                    modVids.forEach( video => {
                        let qresults = []
                        let qRef = query(questionRef, where("vid", "==", video.id))
                        let usub = onSnapshot(qRef, snap => {
                            snap.docs.forEach(doc => {
                            qresults.push({...doc.data(), id: doc.id})
                            });
                            qresults.sort((a, b) => (a.vcue > b.vcue) ? 1 : -1)
                        })
                        totalVidsSecs.value = totalVidsSecs.value + parseInt(video.length)
                        video.questions = qresults
                       
                        if (Array.isArray(video.percentages)){
                            const percentageVid = video.percentages.filter(doc =>
                                doc.uid === uID.value)
                            if (percentageVid[0]){
                            video.percentages = percentageVid[0].percentage
                            } else {
                                video.percentages= null
                            }
                        }
                        
                        
                        
                    });
                    results[i].videos = modVids;
                }
                this.courseAll = results
                this.currentCourseTotal = totalVidsSecs.value
            })
            
        },
        
        async findDescription(course, dimension, tool){
            if (dimension && tool ){
                let toolRef = collection(db, 'tools')
                let tresults = []
                const description = ref('')


                toolRef =  await query(toolRef, where("course", "==", course), where("dimension", "==", dimension), where("tool", "==", tool))
                const toolsub =  await onSnapshot(toolRef, snap => {
                    snap.docs.forEach(doc => {
                    tresults.push({...doc.data(), id: doc.id})
                    });
                       this.currentDescription =  tresults[0].description
                })
            
             
            }
            
            //  if (toolSnap.data()){
            //     console.log(course, dimension, tool)
            //     return toolSnap.data().description
            //  }
        },
        setCurrentModule(mod){
            this.currentModule = mod;
        },
        unsetCurrentModule(){
            this.currentModule = {}
        },
        setCurrentVideo(video){
            this.currentVideo = video;
            if (video.percentages){
                this.initialPercentage = video.percentages
            } else {
                this.initialPercentage = 0
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
            const ustore = userStore()
            const userID = ref(ustore.getUserId)
            if (p>this.initialPercentage){
                const docRef = await doc(db, this.currentCourse.col_name, this.currentVideo.id)
                const docSnap = await getDoc(docRef)
                if (!docSnap.data().percentages){
                   await  updateDoc(docRef, {percentages: [{uid: userID.value, percentage: p}]})
                   
                    this.currentVideo.percentages = p
                } else {
                    // this.courseAll[this.currentVideo.module-1].videos[this.currentVideo.order-1].percentages = p
                    let findObject = docSnap.data().percentages.find((obj) => obj.uid===userID.value)
                    if(findObject){
                        console.log('i am here: ', this.courseAll)
                        console.log('what object: ', findObject)
                        await updateDoc(docRef, {percentages: arrayRemove(findObject)})
                    }
                    await updateDoc(docRef, {percentages: arrayUnion({uid: userID.value, percentage: p})})
                console.log('coursefullllasdfasdfasdf: ', this.courseAll)
                }
                this.unsetCourseAll()
                this.setCourseAll(this.currentCourse)
                ustore.updateCompVids(p, docSnap.data().length, this.currentCourse.col_name)
            }
            
         
        }
    },
    persist:true,
});