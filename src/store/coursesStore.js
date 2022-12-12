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
                        if (userObject.length>0){
                        results[i].completedVids = (userObject.numVids) ? userObject.numVids :0
                        results[i].completedSecs = (userObject.totalSecs) ? userObject.totalSecs :0 
                        results[i].percentCompleted = (userObject.totalSecs) ? (userObject.totalSecs/results[i].total_length*100).toFixed(2): 0
                        }
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

                        video.questions = qresults
                       
                        
                        if (video.percentages){
                            const percentageVid = video.percentages.filter(doc =>
                                doc.uid === ustore.userID)
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
                const docRef = doc(db, this.currentCourse.col_name, this.currentVideo.id)
                const docSnap = await getDoc(docRef)
                console.log('before if: ', docSnap)
                if (!docSnap.data().percentages){
                    updateDoc(docRef, {percentages: [{uid: ustore.userID, percentage: p}]})
                    this.currentVideo.percentages = p
                } else {
                    this.courseAll[this.currentVideo.module-1].videos[this.currentVideo.order-1].percentages = p
                    let findObject = docSnap.data().percentages.find((obj) => obj.uid===ustore.userID)
                    if(findObject){
                    await updateDoc(docRef, {percentages: arrayRemove(findObject)})
                }
                await updateDoc(docRef, {percentages: arrayUnion({uid: ustore.userID, percentage: p})})

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
    },
    persist:true,
});