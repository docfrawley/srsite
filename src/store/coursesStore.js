import {defineStore} from "pinia"
import {  ref, watchEffect } from 'vue'
import { db } from '../firebase/config'
import { userStore } from "./userStore"
import { collection, onSnapshot, query, where, doc, updateDoc, arrayUnion } from 'firebase/firestore'



export const coursesStore  = defineStore("courses", {
    state: ()=> {
        return {
        allCourses: [],
        currentCourse: {},
        courseAll: [],
        currentModule:{},
        courseAllVideos: [],
        currentVideo: {},
        initialPercentage: null
        }
    },
    getters: {
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
                for (var i = 0; i < results.length; i++) {
                    if (results[i].status=='published'){
                        const userObject = ustore.getCourseVidsComp(results[i].col_name)
                        results[i].completedVids = userObject.numVids
                        results[i].completedSecs = userObject.totalSecs
                        results[i].percentCompleted = (userObject.totalSecs/results[i].total_length*100).toFixed(2)
                    }
                }
            this.allCourses = results
            })

            watchEffect((onInvalidate) => {
                onInvalidate(() => unsub());
            });
        },
         async setCourseAll(course){
            let results = []
            let vidResults = []
            this.currentCourse = course
            const ustore = userStore()
            let colRef = collection(db, 'course-modules')
            colRef =  await query(colRef, where("course", "==", course.col_name))
            
            const unsub =  await onSnapshot(colRef, snap => {
                snap.docs.forEach(doc => {
                results.push({...doc.data(), id: doc.id})
                });
                results.sort((a, b) => (a.modnumb > b.modnumb) ? 1 : -1)
            })
            let vidRef = collection(db, course.col_name)
            const unsubVid = onSnapshot(vidRef, snap => {
                snap.docs.forEach(doc => {
                    vidResults.push({ ...doc.data(), id: doc.id });
                });
                for (var i = 0; i < results.length; i++) {
                    const modVids = vidResults.filter(vid => vid.module == results[i].modnumb);
                    modVids.sort((a, b) => (a.order > b.order) ? 1 : -1);
                    modVids.forEach( video => {
                        
                        if (video.percentages){
                            const percentageVid = ref(video.percentages.filter(doc =>
                                doc.uid === ustore.userID))
                            // for (let [key, value] of Object.entries(video.percentages)){
                            //     if (key == userID.value){ percentage.value = value}
                            // }
                        //     let percentage = video.percentages.filter(what => Object.keys(what) == userID)
                        // console.log('percent = ', percentage)
                            if (percentageVid.value[0]){
                            video.percentages = percentageVid.value[0].percentage
                            } else {
                                video.percentages= null
                            }

                        }
                        
                        
                    });
                    results[i].videos = modVids;
                }
                this.courseAll = results
            })
            
        },
        setCurrentModule(mod){
            this.currentModule = mod;
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
            if (p>this.initialPercentage){
                const document = ref(null)
                let docRef = doc(db, this.currentCourse.col_name, this.currentVideo.id)
                const unsub = onSnapshot(docRef, doc => {
                    if (doc.data()){
                        document.value = {...doc.data(), id:doc.id}
                    } 
                })
                if (!document.percentages){
                    updateDoc(docRef, {percentages: [{uid: ustore.userID, percentage: p}]})
                    this.currentVideo.percentages = p
                } else {
                    this.courseAll[this.currentVideo.module-1].videos[this.currentVideo.order-1].percentages = p
                    const findObject = document.percentages.findIndex(doc =>{
                        doc.uid==this.ustore.userID
                    })
                    if (findObject){
                        document.percentages[findObject].percentage=p
                    } else {
                        document.percentages.push({uid: ustore.userID, percentage: p})
                    }
                    updateDoc(docRef, {percentages: document.percentages})

                }

            }
            // colRef =  await query(colRef, where("iframe", "==", this.currentVideo.iframe))
            // const unsub =  await onSnapshot(colRef, snap => {
            //     snap.docs.forEach(doc => {
            //     results.push({...doc.data(), id: doc.id})
            //     });
            // })
            // console.log('results: ', results[0])

            // if (results[0].percentages){
            //     let obj = results[0].percentages.find((o,i)=>{
            //         if (o.uid === ustore.userID) {
            //         results[0].percentages[i] = { uid: ustore.userID, percentage: p };
            //         } else {
            //             results[0].percentages.push({ uid: ustore.userID, percentage: p })
            //         }
            //     })
            // } else {
            //     results[0].percentages=[{ uid: ustore.userID, percentage: p }]
            // }
            //             console.log("percentage: ", p)
            //                         console.log("percentages: ", results[0].percentages)


        }
    }
});