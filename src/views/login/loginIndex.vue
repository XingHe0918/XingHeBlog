<template>
  <div class="loginPageMain">
    <el-card class="loginPageCard">
      <el-text style="text-align: center;"><h1>LOGIN</h1></el-text>
      <el-form label-width="60px" style="margin-top: 60px">
        <el-form-item label="用户名" prop="username" class="loginPageCard_el-form-item">
          <el-input class="loginPageCard_el-form-item_el-input" v-model="userData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" class="loginPageCard_el-form-item">
          <el-input type="password" class="loginPageCard_el-form-item_el-input" v-model="userData.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="loginPageCard_button" @click="toManagePage">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import router from "@/router";

import {useAuthStore} from '@/stores/useAuthStore'

const authStore = useAuthStore()

const userData = ref({
  username: '',
  password:''
})

function toManagePage() {
  if (userData.value.username === 'admin' && userData.value.password === '123456') {
    authStore.setToken("userToken",60 * 24)
    router.push('/manageArticle')
  } else {
    alert('用户名或密码错误')
  }
}


</script>

<style scoped>
.loginPageMain {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
.loginPageCard {
  width: 350px;
  height: 350px;
  padding: 20px;
}
.loginPageCard_el-form-item {
  margin-bottom: 20px;
}
.loginPageCard_el-form-item_el-input {
  width: 100%;
}
.loginPageCard_button{
  margin-left: 30%;
}
</style>
