

<template>
  <div class="homePageIndexMain">
    <div class="homePageIndexHeader">

    </div>
    <div class="homePageIndexBody">
      <text_out :text="logo.text" :props_textBottom="logo.text_bottom" style="color: black; font-size: 90px; font-weight: normal; font-family: 'PingFang SC', sans-serif;"></text_out>
    </div>


    <div class="homePageIndexFooter">

    </div>
  </div>
</template>

<script>
import text_out from '@/views/homePage/tool/text-out-view.vue'


export default {
  components:{
    text_out,
  },
  data(){
    return{
      logo:{
        text: "XingHe",
        text_bottom: -100
      }
    }
  }
}
</script>

<style scoped>
.homePageIndexMain{
  background-image: url("@/image/background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  width: 99vw;
  height: 99.5vh;
  margin-top: -70px;
}
.drill-up-text {
  position: relative;
  animation: drillUp 2s ease-out forwards; /* 应用动画，持续时间为2秒，缓出效果，动画结束后保持最终状态 */
  opacity: 1; /* 初始状态透明 */
  transform: translateY(100%); /* 初始位置在视口下方 */
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
.homePageIndexBody{
  padding-top: 200px;
  height: 300px;
  justify-content: center;
  align-items: center;
}
.homePageIndexFooter{

}



</style>
