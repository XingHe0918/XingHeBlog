

<template>
  <div class="homePageIndexMain">
    <div class="homePageIndexHeader">
    </div>
    <div class="homePageIndexBody">
      <text_out class="homePageIndexBody_LOGO" :text="logo.text" :props_textBottom="logo.text_bottom" ></text_out>
      <text_out style="margin-top: -100px;" :text="BlogCreate.text" :props_textBottom="BlogCreate.text_bottom"></text_out>
    </div>
<!--    <slide-up-overlay :visible="overlay_out_view"></slide-up-overlay>-->
  </div>
</template>

<script setup lang="ts">
import text_out from '@/views/homePage/tool/text-out-view.vue'
// import SlideUpOverlay from "@/views/tool/overlay/overlay-out.vue";
import {ref} from "vue";
// import {onBeforeRouteLeave} from "vue-router";
//
// const overlay_out_view = ref(false);
const logo:any = ref({
    text: "XingHe",
      text_bottom: -120
});
const BlogCreate:any = ref({
  text:"Blog created in 2024",
  text_bottom: -50
});
// onBeforeRouteLeave((to, from, next) => {
//   console.log('beforeRouteLeave called'); // 添加日志输出以确认是否调用
//   overlay_out_view.value = true
//   setTimeout(() => {
//     overlay_out_view.value = false
//     next(); // 调用 next() 以继续路由导航
//   }, 2000); // 假设动画持续时间为 500ms
// })
</script>

<style scoped>
.homePageIndexMain{
  background-image: url("@/image/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: -60px;
  transition: width 0.8s ease-out, left 0.8s ease-out;
}
.homePageIndexBody{
  padding-top: 200px;
  height: 300px;
  justify-content: center;
  align-items: center;
}
.homePageIndexBody_LOGO{
  color: black;
  font-size: 90px;
  font-weight: normal;
  font-family: 'PingFang SC', sans-serif;
  transition:font-size 1s ease-out;
}

@media (max-width: 850px) {
  .homePageIndexBody_LOGO{
    color: black;
    font-size: 50px;
    font-weight: normal;
    font-family: 'PingFang SC', sans-serif;
    transition:font-size 1s ease-out;
  }
}

@keyframes drillUp {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.homePageIndexHeader{

}

.homePageIndexFooter{

}



</style>
