<script setup lang="ts">

</script>

<template>

  <div class="AppMain">
    <div>
      <div class="App-logo">
        <el-text>XingHe</el-text>
      </div>
      <div class="App-navigation">
        <router-link to="/" class="App-navigation-router-link">首页</router-link>
        <router-link to="/about">我</router-link>
      </div>
    </div>
    <RouterView/>
  </div>
</template>

<style>
.AppMain{
  width: 98vw;

}
.App-navigation{
  float: right;
}
.App-navigation-router-link{
  margin-right: 20px;
}

.App-logo {
  float: left;
}
</style>
