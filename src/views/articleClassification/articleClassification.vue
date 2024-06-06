
<template>
  <div class="articleClassificationMain">
    <div>
<!--      <el-affix >-->
      <div class="articleClassificationBodyLeft">
        <div class="articleClassificationBodySearch">
          <div class="articleClassificationBodySearchLeft">
            <el-text>搜索</el-text>
            <div>
              <input class="articleClassificationBodySearchInput" type="text" placeholder="请输入内容"/>
            </div>
          </div>
          <div class="articleClassificationBodySearchRight">
            <el-image class="articleClassificationBodySearchImage" :src="SearchImage"></el-image>
          </div>
        </div>
        <div class="articleClassificationBodyTimeline">
          <div class="articleClassificationBodyTimelineTitle">
            <el-text>时间线</el-text>
          </div>
          <div  class="articleClassificationBodyTimelineBody">
            <el-menu>
              <el-menu-item v-for="(item,index) in timelinePageData" :key="index" @click="toRouter('/timelinePage',item.dataTime)">
                <el-text>
                  {{item.dataTime}}
                </el-text>
                <el-text>
                  {{item.sum}}
                </el-text>
              </el-menu-item>
            </el-menu>
          </div>
        </div>
        <div class="articleClassificationBodyCategory">
          <div>
            <el-text class="articleClassificationBodyCategoryTable">分类</el-text>
          </div>
          <div class="articleClassificationBodyCategoryBody">
            <div v-for="(item,index) in categoryPageData" :key="index">
              <div class="articleClassificationBodyCategoryName" @click="toRouter('/labelClassification','articleClassification:' + item.id)">
               <el-text>{{item.name}}</el-text>
              </div>
            </div>
          </div>
        </div>
        <div class="articleClassificationBodyCategory">
          <div>
            <el-text class="articleClassificationBodyCategoryTable">标签</el-text>
          </div>
          <div class="articleClassificationBodyCategoryBody">
            <div v-for="(item,index) in tagPageData" :key="index">
              <div class="articleClassificationBodyCategoryName" @click="toRouter('/labelClassification','labelClassification:' + item.id)">
                <el-text>{{item.name}}</el-text>
              </div>
            </div>
          </div>
        </div>

      </div>
<!--      </el-affix>-->
      <div class="articleClassificationBodyRight">
        <RouterView/>
      </div>
    </div>
<!--    <slide-up-overlay :visible="overlay_out_view"></slide-up-overlay>-->
  </div>
</template>

<script setup lang="ts">
import {Ref, ref} from 'vue'
// import slideUpOverlay from '@/views/tool/overlay/overlay-out.vue'
// import {onBeforeRouteLeave} from "vue-router";
import SearchImage from '@/image/搜索.png';

import {
  timelineData,
  categoryData,
  tagData
} from "./articleClassification";
import router from "@/router";

// const overlay_out_view = ref(false)
const timelinePageData: Ref<timelineData[]> = ref([])
const categoryPageData: Ref<categoryData[]> = ref([])
const tagPageData: Ref<tagData[]> = ref([])


function toRouter(routerIndex:string ,id:any){
  router.push({
    path: routerIndex,
    query: {
      id: id
    }
  })
  // location.reload();
}
// 初始化数据
timelinePageData.value.push({
  dataTime: '2023',
  sum: 10,
})
timelinePageData.value.push({
  dataTime: '2022',
  sum: 9,
})
timelinePageData.value.push({
  dataTime: '2021',
  sum: 8,
})
timelinePageData.value.push({
  dataTime: '2020',
  sum: 7,
})

categoryPageData.value.push({
  id: 1,
  name: '分类1'
})
categoryPageData.value.push({
  id: 1,
  name: '分类2sd'
})
categoryPageData.value.push({
  name: '分类3'
})
categoryPageData.value.push({
  name: '分类wa4'
})
categoryPageData.value.push({
  name: '分类dfdsf5'
})
categoryPageData.value.push({
  name: '分类6'
})
categoryPageData.value.push({
  name: '分类7'
})
categoryPageData.value.push({
  name: '分类8'
})

tagPageData.value.push({
  id: 1,
  name: '标签1'
})
tagPageData.value.push({
  name: '标签2'
})
tagPageData.value.push({
  name: '标签3'
})
tagPageData.value.push({
  name: '标签4'
})
tagPageData.value.push({
  name: '标签5'
})
tagPageData.value.push({
  name: '标签6'
})

//



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
.articleClassificationMain{
  overflow: auto;
}

.articleClassificationBodyLeft {

  width: 25%;
  position: relative;
  float: left;
  padding-top: 10px;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.articleClassificationBodyLeft > div{
  margin-bottom: 30px;
}

.articleClassificationBodyRight {

  width: 70%;
  height: 100vh;
  position: relative;
  float: left;
}


.articleClassificationBodySearch {
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  width: 65%;
  height: 60px;
  position: relative;
  float: left;
  border-radius: 7% 7% 7% 7% / 25% 25% 25% 25%;
  padding-top: 3%;
  padding-left: 8%;
  transition: transform 0.5s ease ,padding-top 0.5s ease,padding-left 0.8s ease;
}

.articleClassificationBodySearch:hover{
  padding-top: 12px;
  transform: scale(1.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .4), 0 0 6px rgba(0, 0, 0, .04);
}



.articleClassificationBodySearchLeft{
  float: left;
  width: 50%;
}
.articleClassificationBodySearchRight{
  margin-top: 10px;
  margin-right: 30px;
  float: right;
}

.articleClassificationBodySearchInput{
  outline: none;
  border: none;
  width: 80%;
}

.articleClassificationBodySearchImage {
  width: 30px;
  float: right;
}

.articleClassificationBodyTimeline {
  width: 80%;
  height: 20%;
  position: relative;
  float: left;
  border-radius: 7% 7% 7% 7% / 15% 15% 15% 15%;
}

.articleClassificationBodyTimelineColumnName{
  margin-left: 8%;
}



.articleClassificationBodyTimelineBody{
  background: white;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  height: 80%;
  width: 90%;
  margin-left: 15px;
  margin-top: 25px;
  border-radius: 7% 7% 7% 7% / 15% 15% 15% 15%;
  overflow: auto;
  transition: transform 0.5s ease , box-shadow 0.5s ease;
}
.articleClassificationBodyTimelineBody:hover{
  transform: scale(1.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, .4), 0 0 6px rgba(0, 0, 0, .04);
}

.articleClassificationBodyTimelineTitle{
  margin-left: 10px;
}

.articleClassificationBodyTimelineBody>>>.el-menu-item{
  height: 40px;
}

.articleClassificationBodyTimelineBody>>>.el-text{
  margin-left: 5%;
  margin-right: 60%;
}

.articleClassificationBodyCategory {
  width: 80%;
  position: relative;
  float: left;
  border-radius: 5% 5% 5% 5% / 15% 15% 15% 15%;
}

.articleClassificationBodyCategoryTable{
  margin-left: 10px;
}

.articleClassificationBodyCategoryBody{
  position: relative;
  margin-left: 30px;
  height: 80%;
}

.articleClassificationBodyCategoryName {
  position: relative;
  float: left;
  padding-top: 2px;
  margin-right: 20px;
  margin-top: 20px;
  height: 30px;
  background: white;
  border-radius: 10% 10% 10% 10% / 20% 20% 20% 20%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  transition: transform 0.5s ease; /* 添加过渡效果 */
  cursor:pointer
}


.articleClassificationBodyCategoryName:hover{
  transform: scale(1.2); /* 鼠标悬停时放大1.2倍 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, .4), 0 0 6px rgba(0, 0, 0, .04);
}


.articleClassificationBodyCategoryName>>>.el-text{
  margin: 10px;
  font-size: 16px;
  font-family: 'PingFang SC', sans-serif;
}


.articleClassificationBodyTag {
  border: #181818 solid 1px;
  width: 100%;
  height: 10%;
  position: relative;
  float: left;
  border-radius: 5% 5% 5% 5% / 15% 15% 15% 15%;
}


@media (max-width: 740px) {

  .articleClassificationBodyLeft {
    width: 100%;
  }
  .articleClassificationBodyRight {
    width: 100%;
  }



}

</style>
