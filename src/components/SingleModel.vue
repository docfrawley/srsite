<template>
  <div class="smcontainer">
    <div class="fill-up-now">
      <div class="video-responsive">
        <div v-if="showPause" @click="startPlaying" class="overlay-Pause">
          <div class="inside-pause">press here when ready to resume video</div>
        </div>
        <vue-vimeo-player
          ref="player"
          class="video-responsive-item"
          :video-id="currentVideo.iframe"
          :options="{ responsive: true }"
          :events-to-emit="['ended', 'progress', 'pause', 'timeupdate']"
          @progress="CheckProgress"
          @ended="NowEnded"
          @pause="WhenPaused"
          @timeupdate="ShowUpdate"
        />
      </div>
      <div class="video-details">
        <p><u>Module #{{ currentModule.modnumb }}:</u> <i>{{ currentModule.title }}</i></p>
        <p><u>Video #{{currentVideo.order}}:</u> <i>{{ currentVideo.title }}</i></p>
        <p><u>Video Description:</u> <i>{{ currentVideo.description }}</i></p>
      </div>
    </div>
    <div class="fill-up-now">
      <div class="flex flex-col questions-class">
        <div>Video Prompts</div>
      <div v-for="question in currentVideo.questions" :key="'A' + question.id">
        <ShowPromptForm
          :prompt="question"
          :class="{ Active: question.active }"
          @answerAdded="wasItAdded"
          :key="'Y' + answerKey"
        />
        <!-- <div :class="{Active: question.active}"> -->
        <!-- <form @submit.prevent="handleSubmit" action="" class="rounded-md border-2 border-black mb-1 h-4.5 bg-gray-100" :class="{Active: question.active}">
                        <label>{{ question.prompt }}</label>
                        <textarea ref="userinput" autofocus v-model="answer"></textarea>
                        <button >SAVE</button>
                    </form>
                </div> -->
      </div>
    </div>
    </div>
    
    <div v-if="currentModule.modnumb == 3 && currentVideo.order > 1">
      <div class="fill-up-now">
      <IndTechRow />
      </div>
    </div>
    
    <div class="fill-up-now">
      <div class="module-view2">
        <div v-for="video in currentModule.videos" :key="'thisvideo' + video.id">
          <div @click="newVideo(video)">
            <ShowVidDetails
              :theMod="currentModule"
              :video="video"
              :percent="percentVid"
              :key="'hereitis' + componentKey"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShowVidDetails from "@/components/ShowVidDetails.vue";
import { ref } from "vue";
import ShowPromptForm from "./ShowPromptForm.vue";
import IndTechRow from "@/components/IndTechRow.vue";
import { vueVimeoPlayer } from "vue-vimeo-player";
import { coursesStore } from "@/store/coursesStore";
import { userStore } from "@/store/userStore";

export default {
  components: { ShowVidDetails, vueVimeoPlayer, ShowPromptForm, IndTechRow },
  setup() {
    const cstore = coursesStore();
    const ustore = userStore();
    // const theVideo =  getLesson(props.specifics.course, props.specifics.module, props.specifics.order)
    // const { error, documents: videos } = getOrderDocs(props.specifics.course, 'module', props.specifics.module)
    const ElementNum = ref(0);
    const percentVid = ref(0);
    const componentKey = ref(0);
    const currentModule = ref(cstore.currentModule);
    const currentVideo = ref(cstore.currentVideo);
    const showForm = ref(false);
    const userinput = ref(null);
    const answer = ref();
    const answerKey = ref(0);
    const player = ref();
    const showPause = ref(false);

    if (currentVideo.value.percentages) {
      percentVid.value = currentVideo.value.percentages;
    }

    const newVideo = async (specs) => {
      // if (percentVid.value > 0){
      //     if (currentVideo.value.percentages){
      //         if (percentVid.value > currentVideo.value.percentages)
      //         {cstore.setPercentage(percentVid.value)}
      //     } else {
      //         cstore.setPercentage(percentVid.value)
      //     }
      // }
      currentVideo.value = specs;
      cstore.unsetCurrentVideo();
      cstore.setCurrentVideo(specs);
      percentVid.value = currentVideo.value.percentages
        ? currentVideo.value.percentages
        : 0;
      componentKey.value++;
    };

    const CheckProgress = (e, d, p) => {
      if (currentVideo.value.percentages) {
        percentVid.value =
          currentVideo.value.percentages > e.percent
            ? currentVideo.value.percentages
            : e.percent;
      } else {
        percentVid.value = e.percent;
      }

      componentKey.value++;
    };

    const NowEnded = () => {
      ElementNum.value++;
      if (ElementNum.value == currentModule.value.videos.length) {
        ElementNum.value = 0;
      }
      currentVideo.value = currentModule.value.videos[ElementNum.value];
      componentKey.value++;
    };

    const WhenPaused = () => {
      cstore.setPercentage(percentVid.value);
    };

    const handleSubmit = () => {
      console.log("answer: ", answer.value);
    };

    const ShowUpdate = (e, d, p) => {
      for (let i = 0; i < currentVideo.value.questions.length; i++) {
        if (i + 1 != currentVideo.value.questions.length) {
          if (
            e.seconds > currentVideo.value.questions[i].vcue - 0.1 &&
            e.seconds < currentVideo.value.questions[i].vcue + 0.1
          ) {
            player.value.pause();
            showPause.value = true;
          }
          if (
            currentVideo.value.questions[i].vcue <= e.seconds &&
            e.seconds <= currentVideo.value.questions[i + 1].vcue
          ) {
            currentVideo.value.questions.forEach((element) => {
              element.active = false;
            });
            currentVideo.value.questions[i].active = true;
          }
        } else {
          if (currentVideo.value.questions[i].vcue <= e.seconds) {
            currentVideo.value.questions.forEach((element) => {
              element.active = false;
            });
            currentVideo.value.questions[i].active = true;
          }
        }
      }
    };

    const startPlaying = () => {
      player.value.play();
      showPause.value = false;
    };

    const wasItAdded = (addedYes) => {
      answerKey.value++;
    };

    return {
      startPlaying,
      showPause,
      player,
      answerKey,
      wasItAdded,
      currentVideo,
      currentModule,
      componentKey,
      percentVid,
      newVideo,
      CheckProgress,
      NowEnded,
      WhenPaused,
      ShowUpdate,
      showForm,
      handleSubmit,
      userinput,
      answer,
    };
  },
};
</script>

<style scoped>
.Active {
  border-color: var(--primegreen);
  border-width: 5px;
  background-color: var(--primegreen);
}

.module-view2{
  background-color: #fff;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 8px;
}

.questions-class {
  /* font-size: 14px; */
  /* max-width: 500px; */
  /* margin: 20px; */
  /* max-height: 500px; */
  overflow: hidden;
  overflow: -moz-scrollbars-vertical;
  overflow-y: scroll;
}



.smcontainer {
  display: grid;
    gap: 1rem;
    width: min(100%, 70rem);
    margin-inline: auto;
}


.fill-up-now{
  background-color: white;
  border: solid 2px var(--primeblue);
    padding: .75rem;
    border-radius: 0.2rem;
    box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(var(--clr-secondary-400) / 0.25);
    
}
.video-responsive {
  position: relative;
  display: block;
  min-width: 80%;
  min-height: 80%;
  overflow: hidden;
}

.video-details {
  padding: 20px;
  font-size: 12px;
  border: solid 1px var(--primegreen)
}

/* .video-responsive-item {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
} */

.video-responsive-item iframe {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.overlay-Pause {
  display: flex;
  justify-content: center;
  align-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  z-index: 500;
  background-color: white;
  opacity: 0.5;
  cursor: pointer;
}

.inside-pause {
  text-align: center;
  padding: 30px;
  opacity: 1;
  font-size: 45px;
  color: black;
}
</style>