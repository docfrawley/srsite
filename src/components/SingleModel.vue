<template>
  <div class="smcontainer">
    <div class="fill-up-vid grid-col-span-2">
      <div class="video-responsive">
        <div v-if="showPause" @click="startPlaying" class="overlay-Pause">
          <div class="inside-pause">Please answer the video prompt highlighted in green and press here when ready to resume video</div>
        </div>
        <div v-if="currentVideo.iframe">
          <vue-vimeo-player
          ref="player"
          class="video-responsive-item"
          :video-id="currentVideo.iframe"
          :options="{ responsive: true }"
          :events-to-emit="['ended', 'pause', 'timeupdate']"
          @ended="NowEnded"
          @pause="WhenPaused"
          @timeupdate="ShowUpdate"
        />
        </div>
        
      </div>
        <div class="module-view2">
          <div class="module-list">
            <div class="mod-title-row"> MODULES: </div>
            <div v-for="mod in fullCourse" :key="'A' + mod.id">
              <span
                v-if="currentModule.modnumb != mod.modnumb"
                class="ind-mod"
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
          <div v-for="video in currentModule.videos" :key="'thisvideo' + video.description">
            <div @click="newVideo(video)">
              <ShowVidDetails
                :theMod="currentModule"
                :video="video"
                :percent="percentVid"
              />
            </div>
          </div>
    </div>
  </div>
  
    <div class="fill-up grid-col-span-1" >
      <div v-if="showStrategies">
          <div class="flex flex-col questions-class">
            <div v-if="showStrategies == 'strategies'">
              <IndTechRow />
            </div>
            <div v-if="showStrategies =='prompts'">
              <div class="v-prompts">VIDEO #{{ currentVideo.order }} PROMPTS</div>
              <div v-for="question in currentVideo.questions" :key="'A' + question.id">
                <ShowPromptForm
                  :prompt="question"
                  :class="{ Active: question.active }"
                  @answerAdded="wasItAdded"
                />
              </div> 
            </div>
            <div v-if="showStrategies=='worksheet'">
              <div class="worksheet-vid">
                <a class="download-stuff2" :href="theURL" target="_blank" rel="noopener noreferrer">DOWNLOAD WORKSHEET</a>
              </div>
            </div>
          </div>
      </div>
      <div class="questions-class-bottom">
          <p class="v-prompts">Module # {{ currentModule.modnumb }} General Notes</p>
          <ShowModuleForm @noteAdded="wasNoteAdded"/>
      </div>
          
    </div>
        
    
    </div>
    
  
</template>

<script>
import ShowVidDetails from "@/components/ShowVidDetails.vue";
import { ref, watchEffect  } from "vue";
import ShowPromptForm from "./ShowPromptForm.vue";
import ShowModuleForm from "./ShowModuleForm.vue";
import IndTechRow from "@/components/IndTechRow.vue";
import Motivations from "./Motivations.vue";
import { vueVimeoPlayer } from "vue-vimeo-player";
import { coursesStore } from "@/store/coursesStore";
import { userStore } from "@/store/userStore";

export default {
  components: { ShowVidDetails, vueVimeoPlayer, ShowPromptForm, IndTechRow, Motivations, ShowModuleForm },
    setup() {
    const cstore = coursesStore();
    const ustore = userStore();
    const percentVid = ref(ustore.getInitPercentage);
    const currentModule = ref({});
    const currentVideo =  ref({});
    const showForm = ref(false);
    const userinput = ref(null);
    const answer = ref();
    const player = ref();
    const showPause = ref(false);
    const fullCourse = ref(ustore.courseAll);
    const showStrategies = ref('')
    const theURL = ref(cstore.getDownloadLink);

    watchEffect( ()=>{
      currentModule.value = ustore.getCurrentModule
      currentVideo.value = ustore.getCurrentVideo
          percentVid.value = currentVideo.value.percentages
          if (currentModule.value.course=='procrastination'){
            if (currentVideo.value.order>1 && currentModule.value.modnumb==3){
            showStrategies.value='strategies'
          } else {
            if ((currentVideo.value.order==3 && currentModule.value.modnumb==4 )||(currentVideo.value.order==6 && currentModule.value.modnumb==2 )){
              showStrategies.value = 'worksheet'
            } else{
              showStrategies.value = 'prompts'
            }
          }
          }
          
          
      })

     

    if (currentVideo.value.percentages) {
      percentVid.value = currentVideo.value.percentages;
    }

    const newVideo = async (specs) => {
      percentVid.value = 0
      
      currentVideo.value = specs;
      cstore.unsetCurrentVideo();
      cstore.setCurrentVideo(specs);
      
     
      // percentVid.value = currentVideo.value.percentages
      //   ? currentVideo.value.percentages
      //   : 0;
    };

    const NowEnded = (e, d, p) => {
     let ElementNum = currentVideo.value.order + 1
      if (currentVideo.value.percentages<e.percent){
        cstore.setPercentage(1);
      }
      if (ElementNum == currentModule.value.videos.length) {
        ElementNum = 0;
      }
      currentVideo.value = currentModule.value.videos[ElementNum];
    };

    const WhenPaused = (e,d,p) => {
      if (currentVideo.value.percentages<e.percent){
        cstore.setPercentage(e.percent);
      }
      
     
    };

    const handleSubmit = () => {
      console.log("answer: ", answer.value);
    };

    const ShowUpdate = (e, d, p) => {
      cstore.updateProgress(e.percent)
        for (let i = 0; i < currentVideo.value.questions.length; i++) {
          if (
            e.seconds > currentVideo.value.questions[i].vcue  &&
            e.seconds <  currentVideo.value.questions[i].vcue +.3
          ) {
            currentVideo.value.questions.forEach((element) => {
              element.active = false;
            });
            currentVideo.value.questions[i].active = true;
            player.value.pause();
            showPause.value = true;
          }
        }    
        
        if (e.percent>.999){
          let ElementNum = currentVideo.value.order
          if (currentVideo.value.percentages<e.percent){
            cstore.setPercentage(e.percent);
          }
          if (ElementNum == currentModule.value.videos.length) {
            ElementNum = 0;
          }
          currentVideo.value = currentModule.value.videos[ElementNum];
        cstore.setCurrentVideo(currentVideo.value);
        }
    };

    const startPlaying = () => {
      player.value.play();
      showPause.value = false;
    };

    const wasItAdded = (addedYes) => {
      console.log('added')    
    };

    const wasNoteAdded = () =>{
      consol.log('note added')
    }

    const moveModule = (theMod) => {
      
      let whichElement = theMod - 1;
      percentVid.value = 0
      currentModule.value = cstore.courseAll[whichElement];
      currentVideo.value = currentModule.value.videos[0];
      cstore.unsetCurrentVideo()
      cstore.unsetCurrentModule()
      cstore.setCurrentVideo(currentVideo.value)
      cstore.setCurrentModule(currentModule.value)
      
    };

    const moveVideo = (order) => {
      
      let whichElement = order - 1;

      currentVideo.value = currentModule.value.videos[whichElement];
      cstore.setCurrentVideo(currentVideo.value);
    };

    return {
      startPlaying,
      showPause,
      player,
      wasItAdded,
      currentVideo,
      currentModule,
      percentVid,
      newVideo,
      NowEnded,
      WhenPaused,
      ShowUpdate,
      showForm,
      handleSubmit,
      userinput,
      answer,
      moveModule,
      moveVideo,
      fullCourse,
      showStrategies,
      wasNoteAdded,
      theURL
    };
  },
};
</script>

<style scoped>
.worksheet-vid{
  margin-top: 35px;
  display: flex;
  flex-direction: column;
}

.download-stuff2{
  background-color: var(--primeblue);
  color: white;
  text-align: center;
  border-radius: .25rem;
  border: 0;
  padding: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
  pointer-events: auto;
  color:white;
  width: 95%;
  display: inline-block;
}

.download-stuff2:hover{
  color: var(--primegreen);
}

.fill-up-vid{
  background-color: white;
  padding: .75rem;
  border-radius: 0.2rem;
  border: solid 3px var(--primeblue);
  box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(var(--clr-secondary-400) / 0.25);
  
}
.Active {
  border-color: var(--primegreen);
  border-width: 5px;
}

.module-view2{
  background-color: #fff;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: .25rem;
  width:100%;
  border: solid 1px var(--primegreen);
}

.questions-class {
  overflow: hidden;
  overflow: -moz-scrollbars-vertical;
  overflow-y: scroll;
  min-height: 40%;
  max-height: 50%;
  padding-bottom: 20px;
  width:100%;
  border-bottom: solid 4px var(--primeblue);
}

.questions-class-bottom {
  margin-top: 30px;
}



.smcontainer {
  display: grid;
    gap: 1rem;
    width: min(100%, 70rem);
    margin-inline: auto;
}
@media (min-width: 50em){
  .smcontainer {
    grid-template-columns: 1fr 1fr 1fr;
}


}


.fill-up-now{
  background-color: white;
  border: solid 1px var(--primeblue);
    padding: .75rem;
    border-radius: 0.2rem;
    box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(var(--clr-secondary-400) / 0.25);
    
}
.video-responsive {
  position: relative;
  display: block;
  min-width: 80%;
  overflow: hidden;
}

.video-details {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  font-size: 12px;
  border: solid 1px var(--primegreen);
  border-radius: .25rem;
}

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


.next-previous {
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.np-module {
  cursor: pointer;
  color: #000;
  display: flex;
  align-items: center;
  padding-right: 5px;
  
}

.np-module:hover {
  color: var(--primegreen);
}

.left-col-stuff{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.right-col-stuff{
  display: flex;
  flex-direction: column;
  justify-content: flex-ecenternd;
}

.mod-row{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.mod-des{
  margin-right: 10px;
  min-width: 220px;
}

.module-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-bottom: 25px;
  text-align: center;
}

@media screen and (max-width: 600px){
    
  .module-list {
  padding: 10px;
  padding-bottom: 15px;
  text-align: center;
  font-size: 10px;
}
  }

.mod-title-row{
  font-weight: 900;
  color: var(--primegreen);
  background-color: var(--primeblue);
  padding: 10px;
  border-radius: .25rem;
  text-align: center;
}


.module-list svg {
  cursor: pointer;
  fill: #001e41;
  margin-left: 20px;
}
.ind-mod {
  cursor: pointer;
}

.ind-mod:hover {
  color: var(--primegreen);
}


.np-active {
  cursor: pointer;
  margin: auto;
  color: #ffffff;
  background-color: #001e41;
  padding: 10px;
  border-radius: .25rem;
  min-width: 100px;
  text-align: center;
}

.np-module svg {
  height: 45px;
  width: 45px;
}

.vid-mod-module{
  display: flex;
  justify-content: space-between;
}

.v-prompts{
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  color: #ffffff;
  background-color: #001e41;
  padding: 10px;
  border-radius: .25rem;
}

.mod-vid-head{
  font-size: 22px;
  font-weight: bold;
}

svg{
  fill: var(--primeblue);
  margin-top:-15px;
}
svg:hover{
  fill: var(--primegreen);
}

.bottom-fill{
  margin-bottom: 50px;
}

</style>