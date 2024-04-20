<template>
  <div class="AppMain">
    <div class="AppHead">
      <div class="App-logo">
        <el-text style="color: white;font-size: 24px;font-weight: bold">XingHe</el-text>
      </div>
      <div class="App-navigation">
        <router-link to="/" class="App-navigation-router-link" style="color: white">首页</router-link>
        <router-link to="/about"> <img src="@/image/head.png" alt="" style="height: 40px;"></router-link>
      </div>
    </div>
    <RouterView/>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.AppMain {
  width: 98vw;
  scrollbar-width: thin;
  overflow: hidden;
}

.AppMain::-webkit-scrollbar {
  width: 8px;
}

.App-navigation {
  float: right;
  display: flex;
  align-items: center;
}


.App-navigation-router-link {
  margin-right: 40px;
  text-decoration: none;
  color: white;
  position: relative; /* 相对定位，以便下划线定位 */
}

.App-navigation-router-link:hover::after {
  content: '';
  position: absolute; /* 绝对定位，相对于父元素 */
  left: 0;
  bottom: -2px; /* 控制下划线位置 */
  width: 100%; /* 宽度与文字元素一致 */
  height: 2px; /* 下划线高度 */
  background-color: white; /* 下划线颜色 */
  animation: slideIn 0.5s forwards; /* 滑入动画 */
}

@keyframes slideIn {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.App-logo {
  float: left;
}

.AppHead {
  height: 50px;
  margin-top: 10px;
  border-radius: 10px;
  z-index: 9999;
  background: rgba(0,0,0,0);
  transition: background-color 0.5s ease-out;
}
.AppHead:hover{
  background-color: rgba(0,0,0,0.5);
}



</style>
