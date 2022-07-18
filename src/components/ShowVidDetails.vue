<template>
  <div class="show-vid-details" @click="sendInfo">



    <p>#{{ video.order }}, {{ video.title }}:</p>
    <p>{{vidLength}}</p>


    <!-- <div class="video-responsive" v-html="video.iframe"></div> -->
  </div>
  <div v-if="showProgress">
    <div class="loading-bar">
      <div class="percentage" :style="{'width' : percentage + '%'}"></div>
    </div>
    <div v-if="isComplete">
      <p>&#10003; COMPLETE!</p>
    </div>
  </div>
  <div v-else>
    <div class="loading-bar">
      <div class="percentage" :style="{'width' : 0+ '%'}"></div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    props: ['video', 'order', 'percent'],
    setup(props, context){
      const video = ref(props.video)
      let minutes = Math.floor(parseInt(video.value.length)/60)
      let seconds = parseInt(video.value.length) - minutes*60
      const vidLength = ref(minutes +':'+seconds)
      const percentage = ref(props.percent*100)
      const isComplete = ref(false)
      const showProgress = ref(false)
        if (video.value.order == props.order){
          vidLength.value = "Now Playing"
          showProgress.value = true
          
        }
      if (percentage.value >= 100){
        isComplete.value = true
          console.log("is complete: ", isComplete.value)
      }
      

        const sendInfo = () =>{
          context.emit('logInfo', {'vidinfo':props.video})
          
        }
      return { video, sendInfo, vidLength, percentage, showProgress, isComplete }
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
  border-radius: 8px;
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
    background-image: linear-gradient(135deg, rgba($color: #fff, $alpha: .15) 25%, transparent 25%,
        transparent 50%, rgba($color: #fff, $alpha: .15) 50%,
        rgba($color: #fff, $alpha: .15) 75%, transparent 75%,
        transparent);
    animation: animate-stripes 3s linear infinite;
  }


@keyframes animate-stripes {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 60px 0;
  }
}

/* Youtube Link */
#yt_link {
  position: absolute;
  right: 0;
  left: 0;
  bottom: -200px;
  display: block;
  width: 160px;
  text-align: center;
  color: #fff;
  font-size: 15px;
  text-decoration: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 10px;
  margin: 0 auto;
  background-color: red;
  border-radius: 2px;
  animation: showYtLink 1.5s ease 3s forwards;
}


</style>