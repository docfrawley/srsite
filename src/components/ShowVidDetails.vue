<template>
  <div class="show-vid-details" @click="setVideo">



    <p>#{{ video.order }}: {{ video.title }}</p>
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
      console.log('what I got: ', video.value)
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
  padding: 10px;
  display: flex;
  justify-content: space-between;
  width: 500px;
  background-color: #fff;
  cursor: pointer;
  text-decoration: none;
}

.show-vid-details p:hover {
  text-decoration: none;
}

</style>