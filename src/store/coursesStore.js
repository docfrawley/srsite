import {defineStore} from "pinia"
import {  ref, watchEffect } from 'vue'
import { db } from '../firebase/config'
import { userStore } from "./userStore"
import { collection, onSnapshot, query, where, addDoc } from 'firebase/firestore'


export const coursesStore  = defineStore("courses", {
    state: ()=> {
        return {
        allCourses: [],
        currentCourse: {},
        courseAll: [],
        currentModule:{},
        courseAllVideos: [],
        currentVideo: {}
        }
    },
    getters: {
    },
    actions: {
        setCourses(){
            let colRef = collection(db, 'courses')
            const unsub = onSnapshot(colRef, snapshot => {
                let results = []
                snapshot.docs.forEach(doc => {
                results.push({ ...doc.data(), id: doc.id })
                })
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
            const userID = ref(ustore.userID)
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
                        const percentage = ref(0)
                        if (video.percentages){
                            for (let [key, value] of Object.entries(video.percentages)){
                                if (key == userID.value){ percentage.value = value}
                                console.log('key: ', key)
                            }
                            console.log('percentage: ', percentage.value, userID.value)
                        //     let percentage = video.percentages.filter(what => Object.keys(what) == userID)
                        // console.log('percent = ', percentage)
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
        },
        setCurrentCourse(course){
            this.currentCourse = course
        },
    }
});