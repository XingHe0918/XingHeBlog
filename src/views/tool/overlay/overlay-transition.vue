<template>
  <transition name="overlay-fade">
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
  background-color: rgba(0, 0, 0, 1); /* 黑色半透明背景 */
  z-index: 19999; /* 确保覆盖在页面内容之上 */
  transition: top 1s ease-in-out; /* 添加过渡效果 */
}

.overlay-fade-enter-active{
  top: 0;
}
.overlay-fade-leave-active {
  top: 100%;
}
</style>
