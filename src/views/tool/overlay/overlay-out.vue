<template>
  <div class="overlay"></div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* 黑色半透明背景 */
  z-index: 9999; /* 确保覆盖在页面内容之上 */
  transition: top 0.5s ease-in-out; /* 定义动画效果 */
}

/* 进入动画的起始状态 */
.overlay-slide-enter-active {
  top: 0; /* 进入动画结束位置 */
}

/* 离开动画的起始状态 */
.overlay-slide-leave-active {
  top: -100%; /* 离开动画结束位置 */
}
</style>
