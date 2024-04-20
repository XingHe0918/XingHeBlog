

<template>

  <div class="AppMain">
    <div style="margin-top: 20px">
      <div class="App-logo">
        <el-text style="color: white">XingHe</el-text>
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
<style>

.AppMain{
  width: 98vw;

  scrollbar-width: thin;
  overflow: hidden;
}
.AppMain::-webkit-scrollbar{
  width: 8px;
}
.App-navigation{
  float: right;
  display: flex;
  align-items: center; /* 垂直居中 */
}
.App-navigation-router-link{
  margin-right: 40px;
  text-decoration: none;
}

.App-logo {
  z-index: 9999; /* 设置 z-index 值，使其位于最上层 */
  float: left;
}

</style>
