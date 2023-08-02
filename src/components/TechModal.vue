<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div
        v-show="modalActive"
        class="
          
          w-full
          bg-black bg-opacity-30
          h-screen
          top-0
          left-0
          fixed
          flex
          justify-center
          items-center
          px-8
        "
      >
        <Transition name="modal-inner">
          <div
            v-if="modalActive"
            class="p-4 bg-white self-start max-w-screen-md rounded-sm fixed get-margin"
          >

            <div class="modal-inside">
              <div class="modal-line">
                <div class="modal-which">
                  Dimension:
                </div>
                <div>
                  {{ theTech.dimension }}
                </div>
              </div>

              <div class="modal-line">
                <div class="modal-which">
                  Strategy:
                </div>
                <div>
                  {{ theTech.strategy }}
                </div>
              </div>
              
              <div class="modal-line">
                <div class="modal-which">
                  Description:
                </div>
                <div>
                  {{ description }}
                </div>
              </div>
            </div>
            
            
            <button
              class="text-white mt-8 bg-weather-primary py-2 px-6"
              @click="$emit('modalClose')"
            >
              Close
            </button>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import { ref } from "@vue/reactivity";
import { Teleport, watchEffect } from "vue";
import { coursesStore } from "@/store/coursesStore";
export default {
  props: ["theTech", "modalActive"],
  emits: ["modalClose"],
  components: { Teleport },
  setup(props, context) {
    const cstore = coursesStore();
    const description = ref('');
    const strategy = ref(props.theTech.strategy)
    const dimension = ref(props.theTech.dimension)

    watchEffect( ()=>{
      description.value = ''
      if (props.modalActive){
        description.value = cstore.getDescription;
      }
      
    })



    return { description };
  },
};
</script>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}

.get-margin{
  margin-top: 200px;
}

.modal-inside{
  display: flex;
  flex-direction: column;
  align-content: space-around;
}

.modal-line{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-bottom: 15px;
}

.modal-which{
  width:100px;
  font-weight:900;
}
</style>