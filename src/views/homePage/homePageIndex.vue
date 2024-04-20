

<template>
  <div class="homePageIndexMain">
    <div class="homePageIndexHead">
      <img class="rounded-image" src="@/image/background1.jpg">
    </div>
    <div class="homePageIndexBody">
      <div class="left-section">
        <div class="homePageIndexUserInfo">

        </div>
      </div>
      <div class="right-section">
        <!-- 右侧内容 -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.homePageIndexHead{
  position: relative;
  z-index: -1;
}
.homePageIndexBody{

}
.rounded-image {
  width: 98vw;
  margin-top: -50px;
  border-radius: 10px;
  background-color: yellow;
}

.left-section {
  float: left;
  width: 35%;
}

.right-section {
  float: right;
  width: 64%;
  height: 1000px;
}

.left-section,
.right-section {
  display: flex;
  justify-content: center; /* 水平居中 */
  overflow: hidden; /* 避免内容溢出 */
  border: #181818 solid 1px;
}
.homePageIndexUserInfo {
  width: 400px; /* 宽度 */
  height: 400px; /* 高度 */
  background: linear-gradient(to right, #ff9966, #ff5e62); /* 渐变背景颜色 */
  border-radius: 5%; /* 圆形 */
}
@media (max-width: 768px) {
  .left-section,
  .right-section {
    display: flex;
    justify-content: center; /* 水平居中 */
    overflow: hidden; /* 避免内容溢出 */
    border: #181818 solid 1px;
    width: 100%;
    float: none;
  }

  .homePageIndexUserInfo {
    width: 100%; /* 宽度占满 */
    height: auto; /* 自适应高度 */
    border-radius: 0; /* 取消圆角 */
  }
}
</style>
