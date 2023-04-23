<template>
  <div class="vid-whole">
  <div class="show-vid-details" @click="setVideo">
    <div class="flex">
      <div v-if="isComplete" class="complete-circle">&#10003;</div>
      <div v-else class="circle"></div>
      <div>
        <p>#{{ video.order }}: {{ video.title }}</p>
      </div>
    
    </div>
    <p>{{whatShow}}</p>


    <!-- <div class="video-responsive" v-html="video.iframe"></div> -->
  </div>
    <div class="loading-bar-vid">
      <div class="percentage-vid" :style="{'width' : percentage + '%'}"></div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { coursesStore } from '@/store/coursesStore'
import { watchEffect } from 'vue'

export default {
    props: ['theMod', 'video', 'percent'],
    setup(props){
      const cstore=coursesStore()
      const currentVideo = ref(cstore.getcurrentVideo)
      const video = ref(props.video)
      let minutes = Math.floor(parseInt(video.value.length)/60).toString()
      let seconds = parseInt(video.value.length) - minutes*60



      if (seconds<10){
        seconds = "0" + seconds.toString()
      } else {
        seconds = seconds.toString()
      }
      const vidLength = ref(minutes +':'+seconds)
      const whatShow = ref(vidLength.value)
      const percentage = ref(0)
      const isComplete = ref(false)
      if (video.value.percentages){
        percentage.value = video.value.percentages*100
      }
      
      if (percentage.value >= 100){
        isComplete.value = true
      }

      

      watchEffect(()=>{
        if (video.value.order == cstore.currentVideo.order){
        whatShow.value = "Now Playing"
        percentage.value=0
        if (props.percent*100>percentage.value){
          percentage.value = props.percent*100
        }
        if (percentage.value >= 100){
        isComplete.value = true
      } 
      } else {
        whatShow.value = vidLength.value
      }
        
      })
      

        const setVideo = () =>{
          cstore.setCurrentVideo(props.video)
          // cstore.setCurrentModule(props.theMod)
          // context.emit('logInfo', {'vidinfo':props.video})
        }
      return { video, setVideo, whatShow, percentage, isComplete }
    }

}


</script>

<style>

.show-vid-details {
  padding: 10px;
  display: flex;
  justify-content:space-between;
  width: 90%;
  background-color: #fff;
  cursor: pointer;
  text-decoration: none;
  }

.show-vid-details p:hover {
  text-decoration: none;
}

.circle {
    background-color:#fff;
    border:1px solid var(--primeblue);    
    height:25px;
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    width:25px;
    margin-right:10px;
    display: inline-block;
}

.complete-circle {
  display: inline-block;
  background-color:var(--primegreen);
    border:1px solid var(--primeblue);    
    height:25px;
    border-radius:50%;
    -moz-border-radius:50%;
    -webkit-border-radius:50%;
    width:25px;
    text-align: center;
    margin-right:10px;
}

.vid-whole{
  padding: 5px 10px 15px 10px;
  border: solid 1px var(--primeblue);
  border-radius: .25rem;
}

.loading-bar-vid {
  position: relative;
  margin-left:60px;
  width: 80%;
  height: 12px;
  border-radius: 18px;
  overflow: hidden;
  background-color: #ececec;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba( #000, .4),
    0 -1px 1px #fff, 0 1px 0 #fff;
}

  .percentage-vid {
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 18px;
    background-color: #a5df41;
    background: #001e41;
      /* Old browsers */
      background: -moz-linear-gradient( #a3ceff, #001e41);
      /* FF3.6-15 */
      background: -webkit-linear-gradient( #a3ceff, #001e41);
      /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to right, #a3ceff 10%, #001e41 90%);
  }



</style>