<template>
    <Teleport to="body">
      <Transition name="modal-outer">
        <div
          v-show="modalDimActive"
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
              v-if="modalDimActive"
              class="p-4 bg-white self-start max-w-screen-md rounded-sm fixed get-margin"
            >
            <button
                class="text-white mt-8 bg-weather-primary py-2 px-6 float-right"
                @click="$emit('modalDimClose')"
              >
                Close
              </button>
  
              <div class="modal-inside">
  
                <div class="modal-line">
                  <div class="modal-which">
                    Dimension:
                  </div>
                  <div>
                    {{ theDimension }}
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
    props: ["theDimension", "modalDimActive"],
    emits: ["modalDimClose"],
    components: { Teleport },
    setup(props, context) {
      const cstore = coursesStore();
      const description = ref('');
      const dimension = ref(props.theDimension)

  
      watchEffect( ()=>{
        const tempObject = ref({})
        if (props.modalDimActive){
            console.log('made it here')
            tempObject.value = cstore.currentCourse.techniques.find((item) =>{
            item.dimension === props.theDimension
            if (item.dimension === props.theDimension){
                description.value = item.description
            }
          })
          
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
    max-height: 500px;
  }
  
  .modal-line{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-bottom: 15px;
  }
  
  .modal-which{
    width:110px;
    font-weight:bold;
    padding-right: 20px;
  }
  </style>