

<template>
  <div class="homePageIndexMain">
    <div class="homePageIndexHead">
      <img class="rounded-image" src="@/image/background1.jpg">
    </div>
    <div class="homePageIndexBody">
      <div class="left-section">
        <div class="homePageIndexUserInfo">
          <div class="homePageIndexUserInfoHeadImage">
            <img class="homePageIndexUserInfoHeadImage" src="@/image/head.png">
          </div>
          <div class="homePageIndexUserInfoBody">
            <div class="homePageIndexUserInfoBodyName">
              <h1>用户名</h1>
            </div>
            <div class="homePageIndexUserInfoBodyIntroduction">
              <div>
                <div>文章</div>
                <div>100</div>
              </div>
              <div>
                <div>点赞</div>
                <div>100</div>
              </div>
              <div>
                <div>收藏</div>
                <div>100</div>
              </div>
              <div>
                <div>粉丝</div>
                <div>100</div>
              </div>
            </div>
          </div>
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
  margin-top: 30px;
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 350px; /* 宽度 */
  height: 400px; /* 高度 */
  background: linear-gradient(to right, #ff9966, #ff5e62); /* 渐变背景颜色 */
  border-radius: 5%; /* 圆形 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* 添加阴影 */
  transition: box-shadow 0.3s ease; /* 添加过渡动画 */
}
.homePageIndexUserInfo:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.8); /* 鼠标悬停时的阴影效果 */
}

.homePageIndexUserInfoHeadImage {
  width: 100px; /* 宽度 */
  height: 100px; /* 高度 */
  background: white;
  border-radius: 50%; /* 圆形 */
}
.homePageIndexUserInfoHeadImage img {
  transition: transform 0.5s ease;
}
.homePageIndexUserInfoHeadImage:hover img {
  transform: rotate(360deg);
  transition: transform 0.5s ease; /* 添加过渡动画 */
}

.homePageIndexUserInfoBody {
  text-align: center;
  float: none;
}
@media (max-width: 850px) {
  .left-section,
  .right-section {
    display: flex;
    justify-content: center; /* 水平居中 */
    overflow: hidden; /* 避免内容溢出 */
    border: #181818 solid 1px;
    width: 98%;
    float: none;
  }

  .homePageIndexUserInfo {
    width: 100%; /* 宽度占满 */
  }
}
.homePageIndexUserInfoBodyIntroduction{
  display: flex;
  justify-content: space-around;
  gap: 50px;
}


</style>
