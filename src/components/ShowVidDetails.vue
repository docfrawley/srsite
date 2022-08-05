<template>
  <div class="show-vid-details" @click="setVideo">



    <p>#{{ video.order }}, {{ video.title }}:</p>
    <p>{{vidLength}}</p>


    <!-- <div class="video-responsive" v-html="video.iframe"></div> -->
  </div>
    <div class="loading-bar">
      <div class="percentage" :style="{'width' : percentage + '%'}"></div>
    </div>
    <div v-if="isComplete">
      <p>&#10003; COMPLETE!</p>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { coursesStore } from '@/store/coursesStore'

export default {
    props: ['theMod', 'video', 'percent'],
    setup(props){
      const cstore=coursesStore()
      const video = ref(props.video)
      let minutes = Math.floor(parseInt(video.value.length)/60)
      let seconds = parseInt(video.value.length) - minutes*60
      const vidLength = ref(minutes +':'+seconds)
      const percentage = ref(0)
      const isComplete = ref(false)
      
      if (video.value.percentages){
        percentage.value = video.value.percentages*100
      }
      if (video.value.order == cstore.currentVideo.order){
        vidLength.value = "Now Playing"
        percentage.value = props.percent*100
      }
      if (percentage.value >= 100){
        isComplete.value = true
      }
      

        const setVideo = () =>{
          cstore.setCurrentVideo(props.video)
          cstore.setCurrentModule(props.theMod)
          // context.emit('logInfo', {'vidinfo':props.video})
          
        }
      return { video, setVideo, vidLength, percentage, isComplete }
    }

}


</script>

<style>

.show-vid-details {
  border-bottom: solid black 2px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  width: 500px;
  background-color: antiquewhite;
  cursor: pointer;
}

.loading-bar {
  position: relative;
  width: 400px;
  height: 20px;
  border-radius: 18px;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba( #000, .4),
    0 -1px 1px #fff, 0 1px 0 #fff;
}

  .percentage {
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    display: block;
    height: 100%;
    border-radius: 8px;
    background-color: #a5df41;
    background-size: 20px 20px;
  }

</style>