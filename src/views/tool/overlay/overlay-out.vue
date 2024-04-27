<template>
  <transition name="slide-up-overlay">
    <div v-if="visible" class="overlay"></div>
  </transition>
</template>

<script setup lang="ts">
defineProps<{
  visible: boolean;
}>();

</script>


<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  z-index: 19999;
  transition: top 0.8s ease;
}

.slide-up-overlay-enter-active {
  top: 100%;
}

.slide-up-overlay-leave-active {
  top: 0;
}

.slide-up-overlay-enter,
.slide-up-overlay-leave-to {
  transform: translateY(0%);
}

/*.overlay {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
  z-index: 19999;
  transition: bottom 1s ease;
}

.slide-up-overlay-enter-active {
  bottom: 100%;
}

.slide-up-overlay-leave-active {
  bottom: 0;
}

.slide-up-overlay-enter,
.slide-up-overlay-leave-to {
  transform: translateY(0);
}*/
</style>
