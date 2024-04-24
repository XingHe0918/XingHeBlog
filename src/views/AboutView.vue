<template>
  <div class="container">
    <div class="line"></div>
    <div class="text" :style="{ bottom: textBottom + 'px' }">{这是移动中的文本{{this.$props.text}}}</div>
  </div>
</template>

<script>
export default {
  props:{
    text: String,
  },
  data() {
    return {
      textBottom: -50, // 初始位置在横线下方
    };
  },
  mounted() {
    // 使用Vue的$nextTick确保DOM已经更新
    this.$nextTick(() => {
      // 设置定时器使文本开始移动
      setTimeout(() => {
        this.textBottom = 0; // 将文本移动到横线上方
      }, 500); // 延迟1秒后开始动画
    });
  },
};
</script>

<style scoped>
.container {
  position: relative;
  z-index: 11111;
  height: 200px; /* 根据需要调整容器高度 */
  overflow: hidden; /* 隐藏超出容器的内容 */
}

.line {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: black;
}

.text {
  position: absolute;
  width: 100%;
  text-align: center;
  transition: bottom 2s ease-out; /* 文本向上移动的动画 */
}
</style>
