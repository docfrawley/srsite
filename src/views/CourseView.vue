<template>
  <div class="page-container">
    <div class="grid-container">
        <div class="fill-up">
      <div>
        <h1>{{ currentCourse.title }}</h1>
      </div>
      <div>
        <h4>with {{ currentCourse.instructor }}</h4>
      </div>
    </div>
    <div class="fill-up">Your Motivations...</div>
    <div class="fill-up">Your Top Tools</div>

    <div v-if="currentVideo">
        <SingleModel :key="componentKey" />
    </div>
    </div>
    

    <div v-if="currentVideo.iframe">
      <div class="module-list">
        <div v-for="mod in fullCourse" :key="'A' + mod.id">
          <span
            v-if="currentModule.modnumb != mod.modnumb"
            class="ind-mod np-module"
            @click="moveModule(mod.modnumb)"
            >{{ mod.title }}
          </span>
          <span
            v-else
            class="ind-mod np-active"
            @click="moveModule(mod.modnumb)"
            >{{ mod.title }}
          </span>
        </div>
      </div>
      

      <div class="next-previous">
        <div
          class="np-module"
          v-if="currentModule.modnumb > 1"
          @click="moveModule(currentModule.modnumb - 1)"
        >
          <svg xmlns="http://www.w3.org/2000/svg">
            <path
              d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z"
            />
          </svg>
          <p>Previous Module</p>
        </div>

        <div
          class="np-module"
          v-if="currentModule.modnumb < numbModules"
          @click="moveModule(currentModule.modnumb + 1)"
        >
          <p>Next Module</p>
          <svg xmlns="http://www.w3.org/2000/svg">
            <path
              d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"
            />
          </svg>
        </div>
      </div>
    </div>

   

      <!-- <div v-for="aModule in fullCourse" :key="'B' + aModule.id">
        <ShowModule :theModule="aModule" />
        <br />
      </div> -->
    
  </div>
</template>

<script>
import ShowModule from "@/components/ShowModule.vue";
import ShowVidDetails from "@/components/ShowVidDetails.vue";

import { ref, reactive, watchEffect } from "vue";
import SingleModel from "@/components/SingleModel.vue";
import { coursesStore } from "@/store/coursesStore";
import { userStore } from "@/store/userStore";

export default {
  name: "Courseview",
  components: { ShowModule, SingleModel, ShowVidDetails },
  props: ["course"],
  setup(props) {
    // const { error, documents } = getOrderDocs('course-modules', 'course', props.course)
    // const whichVid= reactive({
    //     course:props.course,
    //     module: null,
    //     order: null
    // })

    const componentKey = ref(0);
    const cstore = coursesStore();
    const ustore = userStore();
    const fullCourse = ref(cstore.courseAll);
    const currentCourse = ref(cstore.currentCourse);
    const currentModule = ref(cstore.currentModule);
    const currentVideo = ref(cstore.currentVideo);
    const numbModules = ref(cstore.courseAll.length);
    const items = ref(cstore.currentCourse.techniques);
    console.log("second: ", currentVideo.value);

    watchEffect(() => {
      fullCourse.value = cstore.courseAll;
      numbModules.value = cstore.courseAll.length;
    });

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
      componentKey.value++;
    };

    return {
      currentCourse,
      showvidInfo,
      moveModule,
      componentKey,
      fullCourse,
      currentModule,
      currentVideo,
      numbModules,
    };
  },
};
</script>

<style scoped>
.module-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--lines);
  margin-bottom: 30px;
  background-color: #fff;
}

.module-list svg {
  cursor: pointer;
  fill: #001e41;
  margin-left: 20px;
}
.ind-mod {
  display: inline-block;
  cursor: pointer;
}
.next-previous {
  display: flex;
  justify-content: center;
}
.next-previous:hover {
  color: #fff;
}
.np-module {
  cursor: pointer;
  margin: 0 15px;
  color: #000;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  align-items: center;
}
.np-module:hover,
p:hover,
svg:hover {
  color: #ffffff;
  background-color: #001e41;
  fill: #fff;
}

.np-active {
  cursor: pointer;
  margin: 0 15px;
  color: #ffffff;
  background-color: #001e41;
  padding: 15px;
  border-radius: 8px;
}

.np-module svg {
  height: 45px;
  width: 45px;
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

.fill-up{
    background-color: white;
    padding: .75rem;
    border-radius: 0.2rem;
    border: solid 2px var(--primeblue);
    box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(var(--clr-secondary-400) / 0.25);
    
}


</style>