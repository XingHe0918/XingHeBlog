<template>
  <div class="container">
    <div class="line"></div>
    <div class="text" :style="{ bottom: textBottom + 'px' }">{{this.$props.text}}</div>
  </div>

</template>

<script setup lang="ts">
import { ref, onMounted,} from "vue";
const textBody = defineProps<{
  text: string,
  props_textBottom: number,
}>()
const textBottom = ref<number>(textBody.props_textBottom);

onMounted(() => {
  setTimeout(() => {
    textBottom.value = 0;
  }, 500);
});
</script>


<style scoped>
.container {
  position: relative;
  height: 200px; /* 根据需要调整容器高度 */
  overflow: hidden; /* 隐藏超出容器的内容 */
}

.line {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1px;
}

.text {
  position: absolute;
  width: 100%;
  text-align: center;
  transition: bottom 2s ease-out; /* 文本向上移动的动画 */
}

</style>
