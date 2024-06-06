
<template>
  <div class="ManageMain">
    <div class="ManageHead">
      <el-text>管理页面</el-text>
    </div>
    <div class="ManageBody">
      <div class="ManageBodyLeft">
        <el-menu router>
          <el-menu-item index="/manageArticle">
            <el-text>文章管理</el-text>
          </el-menu-item>
          <el-menu-item index="/writeArticle">
            <el-text>文章编写</el-text>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="ManageBodyRight">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {onMounted} from "vue";
import {useAuthStore} from "@/stores/useAuthStore"
import router from "@/router";

onMounted(() => {
  const authStore = useAuthStore()
  if( !authStore.isTokenValid()){
    router.push('/login')
  }
})

</script>


<style scoped>
.ManageMain {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.ManageHead {
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ManageBody {
  height: 90%;
  width: 100%;
  display: flex;
}

.ManageBodyLeft {
  height: 100%;
  width: 20%;
  background: #181818;
}
.ManageBodyRight{
  margin-left: 100px;
}
.ManageBodyRightDetail{
  position: fixed;
  top: 30%;
  left: 30%;
  z-index: 10;
  width: 450px;
}
</style>
