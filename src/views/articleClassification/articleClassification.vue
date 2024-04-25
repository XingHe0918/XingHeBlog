
<template>
  <div>
    <slide-up-overlay :visible="overlay_out_view"></slide-up-overlay>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import slideUpOverlay from '@/views/tool/overlay/overlay-out.vue'
import {onBeforeRouteLeave} from "vue-router";
const overlay_out_view = ref(false)

onBeforeRouteLeave((to, from, next) => {
  console.log('beforeRouteLeave called'); // 添加日志输出以确认是否调用
  overlay_out_view.value = true
  setTimeout(() => {
    overlay_out_view.value = false
    next(); // 调用 next() 以继续路由导航
  }, 2000); // 假设动画持续时间为 500ms
})
</script>

<style scoped>

</style>
