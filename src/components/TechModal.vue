<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div
        v-show="modalActive"
        class="
          absolute
          w-full
          bg-black bg-opacity-30
          h-screen
          top-0
          left-0
          flex
          justify-center
          px-8
        "
      >
        <Transition name="modal-inner">
          <div
            v-if="modalActive"
            class="p-4 bg-white self-start mt-32 max-w-screen-md rounded-sm"
          >
            <div class="text-2xl text-black opacity-100">Hello there</div>
            <div class="text-2xl text-black opacity-100">
              {{ mItem.dimension }}
            </div>
            <div class="text-2xl text-black opacity-100">
              {{ mItem.strategy }}
            </div>
            <div class="text-2xl text-black opacity-100">
              {{ description }}
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
    const mItem = ref({});
    const cstore = coursesStore();
    const description = ref("");

    watchEffect(() => {
      if (props.theTech.dimension != "" && props.theTech.strategy != "") {
        cstore.findDescription(
          "procrastination",
          props.theTech.dimension,
          props.theTech.strategy
        );
        description.value = cstore.getDescription;
        mItem.value = props.theTech;
      }
    });
    return { mItem, description };
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
</style>