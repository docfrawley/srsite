<template>
  <div class="page-container">
    <div class="grid-container">
        <div class="grid-col-span-3 fill-background">
            <div>
              <p class="top-title">{{ currentCourse.title }}</p>
              <p>with {{ currentCourse.instructor }}</p>
            </div>
            <div class="show-completed">
              <div class="total-percentage">You have completed {{ totalPercentage }}% of the course</div>
              <div class="loading-bar-top">
                <div class="percentage" :style="{ 'width': totalPercentage + '%'}"></div>
              </div>
            </div>
        </div>
        <div v-if="currentCourse.col_name=='procrastination'">
        
          <Motivations title="GOALS FOR THIS COURSE" qprompt="uwi6QJH5wozGZOF8oVbd" :key="goalCounter"/>
          <TopTools />
          <Motivations class="bottom-fill" title="MY POSITIVE MOTIVATIONS" qprompt="zEfmgpumIi2gbGCG8eJt" :key="motCounter"/>
        
      </div>

    <div v-if="currentVideo" class="grid-col-span-3">
        <SingleModel/>
    </div>
    </div>
    
  </div>
</template>

<script>
import ShowModule from "@/components/ShowModule.vue";
import ShowVidDetails from "@/components/ShowVidDetails.vue";
import Motivations from "@/components/Motivations.vue";
import TopTools from "@/components/TopTools.vue";
import { ref, watch, watchEffect } from "vue";
import SingleModel from "@/components/SingleModel.vue";
import { coursesStore } from "@/store/coursesStore";
import { userStore } from "@/store/userStore";


export default {
  name: "Courseview",
  components: { ShowModule, SingleModel, ShowVidDetails, Motivations, TopTools },
  setup() {
    // const { error, documents } = getOrderDocs('course-modules', 'course', props.course)
    // const whichVid= reactive({
    //     course:props.course,
    //     module: null,
    //     order: null
    // })

    const cstore = coursesStore();
    const ustore = userStore();
    const currentCourse = ref({});
    const currentModule = ref({});
    const currentVideo = ref({});
    // const items = ref(ustore.currentCourse.techniques);
    const motCounter = ref(0)
    const goalCounter = ref(0)
    const totalPercentage = ref(0)
    
    watch(ustore, ()=>{
      motCounter.value++
      goalCounter.value++
      
    })

    watchEffect(()=>{
      totalPercentage.value = ustore.getTotalPercentage
      totalPercentage.value = parseInt(totalPercentage.value).toFixed(2)
      currentCourse.value = ustore.getCurrentCourse
      currentModule.value = ustore.getCurrentModule
      currentVideo.value = ustore.getCurrentVideo
    })
    

    const showvidInfo = (video) => {
      // whichVid.module = video.module
      // whichVid.order=video.order
      // componentKey.value++
    };

    const moveModule = (theMod) => {
      let whichElement = theMod - 1;

      currentModule.value = ustore.courseAll[whichElement];
      currentVideo.value = currentModule.value.videos[0];
      ustore.setCurrentVideo(currentVideo.value);
      ustore.setCurrentModule(currentModule.value);
    };

    return {
      currentCourse,
      showvidInfo,
      moveModule,
      currentModule,
      currentVideo,
      totalPercentage,
      motCounter,
      goalCounter
    };
  },
};
</script>

<style scoped>

.show-completed{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.top-title{
  font-size: 24px;
  font-weight: bold;
}



</style>