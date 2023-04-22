<template>
  <div class="page-container">
    <div class="grid-container">
        <div class="fill-up course-stuff">
          <div class="top-title title-cap">
            <h1>{{ currentCourse.title }}</h1>
          </div>
          <div class="top-title">
            <h4>with {{ currentCourse.instructor }}</h4>
          </div>
          <div class="total-percentage">You have completed {{ totalPercentage }}% of the course</div>
              <div class="loading-bar">
                <div class="percentage" :style="{ 'width': totalPercentage + '%'}"></div>
              </div>
        </div>
        <PossMotivations />
        <TopTools />

    <div v-if="currentVideo" class="grid-col-span-3">
        <SingleModel/>
    </div>
    </div>
    
  </div>
</template>

<script>
import ShowModule from "@/components/ShowModule.vue";
import ShowVidDetails from "@/components/ShowVidDetails.vue";
import PossMotivations from "@/components/PossMotivations.vue";
import TopTools from "@/components/TopTools.vue";

import { ref } from "vue";
import SingleModel from "@/components/SingleModel.vue";
import { coursesStore } from "@/store/coursesStore";
import { userStore } from "@/store/userStore";


export default {
  name: "Courseview",
  components: { ShowModule, SingleModel, ShowVidDetails, PossMotivations, TopTools },
  props: ["course"],
  setup(props) {
    // const { error, documents } = getOrderDocs('course-modules', 'course', props.course)
    // const whichVid= reactive({
    //     course:props.course,
    //     module: null,
    //     order: null
    // })

    const cstore = coursesStore();
    const ustore = userStore();
   
    const currentCourse = ref(cstore.currentCourse);
    const currentModule = ref(cstore.currentModule);
    const currentVideo = ref(cstore.currentVideo);
    const items = ref(cstore.currentCourse.techniques);
    const totalPercentage = ref(ustore.getTotalPercentage)
totalPercentage.value = totalPercentage.value.toFixed(2)

    

    const showvidInfo = (video) => {
      // whichVid.module = video.module
      // whichVid.order=video.order
      // componentKey.value++
    };

    const moveModule = (theMod) => {
      let whichElement = theMod - 1;

      currentModule.value = cstore.courseAll[whichElement];
      currentVideo.value = currentModule.value.videos[0];
      cstore.setCurrentVideo(currentVideo.value);
      cstore.setCurrentModule(currentModule.value);
    };

    return {
      currentCourse,
      showvidInfo,
      moveModule,
      currentModule,
      currentVideo,
      totalPercentage
    };
  },
};
</script>

<style scoped>

.title-cap{
  text-transform: capitalize;
  font-size: 20px;
  font-weight: bold;
}

.current-course {
  background-color: white;
  margin-bottom: 5px;
  border-radius: 10px;
  padding: 20px;
  width: 540px;
  cursor: pointer;
  height: 100px;
}

.grid-container{
    display: grid;
    gap: 1rem;
    padding-block: 2rem;
    width: min(95%, 70rem);
    margin-inline: auto;
    

}

.course-stuff{
  display:none;
}
@media (min-width: 50em){
  .grid-container{
    grid-template-columns: repeat(3, 1fr);
  }
  .course-stuff{
  display:block;
}
  
}

.total-percentage{
  margin-top: 25px;
  font-size: 15px;
  line-height: 40px;
}


</style>