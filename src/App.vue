<template>
  <div class="AppMain">
    <div class="AppHead" >
      <div class="App-logo">
        <div style="width: 350px; height: 50px; overflow: hidden">
          <div class="navbar" style=" float: left; height: 10px;width: 20px;outline: black" >
            <input  type="checkbox" @click="changeMenuView">
            <span></span>
            <span></span>
          </div>
          <img class="homePageIndexMenuImage" style="float: left;" src="@/image/动态.gif">
          <div style="float: left;margin-top: 5px;margin-left: 10px">
            <el-text class="main_text" style="position: relative; z-index: 10000;color: black; font-size: 24px; font-weight: bold; font-family: 'PingFang SC', sans-serif;">XingHe</el-text>
          </div>

          <div class="navbar-drawer" :class="{ 'open': menuView }">
            <div style="width: 100%;">
              <el-menu>
                <el-menu-item index="/">
                  <el-text class="App-navigation-router-link" style="color: black; font-size: 24px; font-family: 'PingFang SC', sans-serif;">首页</el-text>
                </el-menu-item>
              </el-menu>
            </div>
          </div>
        </div>
      </div>
      <div class="App-navigation">
        <overlayTransition :visible="isOverlayVisible"/>
        <transition name="overlay-slide">
          <overlayOut v-if="isOverlayOutVisible"></overlayOut>
        </transition>
        <router-link to="/" class="App-navigation-router-link" style="color: black; font-size: 24px; font-family: 'PingFang SC', sans-serif;">首页</router-link>
        <router-link to="/about">abot</router-link>
      </div>
    </div>
      <RouterView class="APPBody"/>
  </div>


</template>

<script>
import overlayTransition from "@/views/tool/overlay/overlay-transition.vue";
import overlayOut from "@/views/tool/overlay/overlay-out.vue";
export default {
  components:{
    overlayTransition,
    overlayOut,
  },

  data() {
    return {
      menuView: false,
      isOverlayVisible: false,
      isOverlayOutVisible: false,
    }
  },
  watch: {
    '$route'(to, from) {
      this.isOverlayVisible = true;
      this.$nextTick(() => {
        this.isOverlayVisible = false;
      });
    }
  },

  // beforeRouteEnter(to, from, next) {
  //   console.log('beforeRouteEnter called'); // 添加日志输出以确认是否调用
  //   next(vm => {
  //     vm.isOverlayVisible = true;
  //     vm.$nextTick(() => {
  //       setTimeout(() => {
  //         vm.isOverlayVisible = false;
  //       }, 500); // 假设动画持续时间为 500ms
  //     });
  //   });
  // },

  // beforeUnmount() {
  //   // 在组件销毁前执行操作
  //   console.log('Component will be destroyed');
  // },
  //
  // beforeRouteLeave(to, from, next) {
  //   console.log('beforeRouteLeave called'); // 添加日志输出以确认是否调用
  //   this.isOverlayOutVisible = true;
  //   this.$nextTick(() => {
  //     setTimeout(() => {
  //       this.isOverlayVisible = false;
  //       next(); // 调用 next() 以继续路由导航
  //     }, 500); // 假设动画持续时间为 500ms
  //   });
  // },
  methods:{
    changeMenuView(){
      this.menuView = !this.menuView
    },
  }
}
</script>

<style>
/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for Firefox */
html {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.navbar-drawer {
  display: none;
}


.AppMain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  scrollbar-width: thin;
  overflow: hidden;
}

.AppMain::-webkit-scrollbar {
  width: 8px;
}

.APPBody{
  width: 100vw;
  height: 100vh;
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

.App-navigation-router-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2.5px;
  background-color: black;
  opacity: 0; /* 初始状态为透明 */
  transition: opacity 0.5s ease-out, transform 0.5s ease-out; /* 过渡效果用于透明度和变形 */
  transform-origin: 0 100%; /* 变形原点设置在右侧底部 */
}

.App-navigation-router-link:hover::after {
  opacity: 1; /* 鼠标移入时变为不透明 */
  transform: scaleX(1); /* 横向缩放至100% */
}

.App-navigation-router-link:not(:hover)::after {
  opacity: 0; /* 鼠标移出时变为透明 */
  transform: scaleX(0); /* 横向缩放至0%，实现从左往右消失效果 */
}

.main_text{
  color: black; font-size: 24px; font-weight: bold; font-family: 'PingFang SC', sans-serif;
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
  z-index: 10000;
}

.homePageIndexMenu{
}
.homePageIndexMenuImage {
  z-index: 10000;
  position: relative;
  margin-left: 60px;
  object-fit: cover;
  width: 160px;
  height: 40px;
  filter: grayscale(100%);
  border-radius: 15% 15% 15% 15% / 50% 50% 50% 50%;
  transition: margin-left 0.8s ease, width 0.8s ease, height 0.8s ease, border-radius 0.8s ease, filter 0.8s ease;
}
.homePageIndexMenuImage:hover{
  width: 170px;
  height: 45px;
  filter: grayscale(0%);
}

.navbar {
  display: none;
}

.homePageIndexMenuImage--small {
  margin-left: 60px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
@media (max-width: 850px)  {
  .App-navigation {
    display: none;
  }
  .homePageIndexMenuImage{

    margin-left: 10px;
    object-fit: cover;
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .homePageIndexMenuImage:hover{
    width: 50px;
    height: 50px;
  }

  .navbar {
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 20px;
    background-color: #fff;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0);
  }

  .navbar input {
    margin-left: 20px;
    transform: scale(2);
    opacity: 0;
    cursor: pointer;
  }

  .navbar span {
    position: absolute;
    left: 15px;
    width: 30px;
    height: 4px;
    top: calc(50% - 10px);
    border-radius: 15px;
    background-color: #999;
    pointer-events: none;
    transition: transform 0.3s ease-in-out, top 0.3s ease-in-out 0.3s;
  }

  .navbar span:nth-child(3) {
    top: calc(50% + 6px);
  }

  .navbar input:checked~span:nth-child(2) {
    top: calc(50% - 2px);
    transform: rotate(-45deg);
    background-color: #868484;
    transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
  }

  .navbar input:checked~span:nth-child(3) {
    top: calc(50% - 2px);
    transform: rotate(45deg);
    background-color: #888787;
    transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
  }
  .navbar-drawer {
    padding-top: 100px;
    display: flex;
    position: fixed;
    top: 0px;
    left: -100%;
    width: 0%;
    height: 100%;
    background-color: #fff;
    transition: left 0.8s ease, width 0.8s ease;
    z-index: 999;
  }

  .navbar-drawer.open {
    left: 0;
    width: 100%;
  }

}




</style>
