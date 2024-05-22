<template>
  <div class="infinite-list-wrapper" style="overflow: auto">
    <ul
        v-infinite-scroll="load"
        class="list"
        :infinite-scroll-disabled="disabled"
    >
      <li v-for="item in previewPageData" :key="item" class="list-item">
        <div class="previewPageListElCard" @click="toBlogContent(item.id)">
          <el-image class="previewPageListElCard_image" :src="item.image"> </el-image>
          <el-row>
            <el-button v-for="i in item.tag" :key="i" class="previewPageListElCard_el_row_button" text style="background: #2a9c8e">
              <el-text style="color: white">{{ i.name }}</el-text>
            </el-button>
          </el-row>
          <div>
            <h2 style="margin-left: 10px; margin-top: -5px; text-align: left;">{{ item.title }}</h2>
            <p style="margin-left: 10px; margin-top: -5px; text-align: left;">{{item.synopsis}}</p>
            <el-row class="previewPageListElCard_el_footer">
              <el-col :span="8">
                <el-row>
                  <el-col :span="5">
                    <el-image class="previewPageListElCard_el_rowImage" :src="DateImage" style="margin-top: 10px"></el-image>
                  </el-col>
                  <el-col :span="10" style="padding-top: 8px;">
                    <el-text>{{ item.datetime }}</el-text>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="5">
                    <el-image class="previewPageListElCard_el_rowImage" :src="ReadTimeImage" style="margin-top: 10px"></el-image>
                  </el-col>
                  <el-col :span="10" style="padding-top: 8px;">
                    <el-text>阅读时长: {{item.readTime}} 分钟</el-text>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="5">
                    <el-image class="previewPageListElCard_el_rowImage" :src="TextNumImage" style="margin-top: 10px"></el-image>
                  </el-col>
                  <el-col :span="10" style="padding-top: 8px;">
                    <el-text>字数 : {{item.textNum}}字</el-text>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>

        </div>
      </li>
    </ul>
    <p v-if="loading">Loading...</p>
    <p v-if="noMore">No more</p>
  </div>
</template>

<script lang="ts" setup>
import {computed, Ref, ref} from 'vue'
import router from "@/router";

import Image from "@/image/background.jpg"
import DateImage from "@/image/日历,日期.png"
import ReadTimeImage from "@/image/时间.png"
import TextNumImage from "@/image/笔.png"
import {previewPageDataValue} from './previewPage'


const count = ref(10)
const loading = ref(false)
const noMore_Sum = ref(20)// 设置加载次数
const noMore = computed(() => count.value >= noMore_Sum.value)
const disabled = computed(() => loading.value || noMore.value)

const previewPageData: Ref<previewPageDataValue[]> = ref([])

// previewPageData.value.push({
//   title : '标题',
//   synopsis : '简介',
//   tag : ref([
//     {
//       name: '标签1'
//     },
//     {
//       name:'标签2'
//     }
//   ]),
//   datetime : '2024年5月13日',
//   readTime : '3',
//   textNum : '1000',
//   image : Image,
// })


const load = () => {
  loading.value = true
  setTimeout(() => {
    previewPageData.value.push({
      id: 1,
      title : '标题',
      synopsis : '简介',
      tag : [
        {
          name: '标签1'
        },
        {
          name:'标签2'
        }
      ],
      datetime : '2024年5月13日',
      readTime : '3',
      textNum : '1000',
      image : Image,
    })
    // count.value += 2
    loading.value = false
  }, 2000)
}


function toBlogContent(id){
  console.log(id);
  router.push({
    path: '/blogContent',
    query: {
      id: id
    }
  })
}


</script>

<style>
.infinite-list-wrapper {
  margin-top: 20px;
  height: 85%;
  text-align: center;
}
.infinite-list-wrapper .list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list-wrapper .list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 450px;
}
.infinite-list-wrapper .list-item + .list-item {
  margin-top: 50px;
}
.previewPageListElCard{
  width: 800px;
  height: 450px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .12);
  border-radius: 3% 3% 3% 3% / 10% 10% 5% 5%;
}

.previewPageListElCard_image{
  border-radius: 3% 3% 0 0 / 10% 10% 0 0;
  height: 260px;
  width: 800px;
}
.previewPageListElCard_el_row_button{
  margin: 10px;
}
.previewPageListElCard_el_rowImage{
  width: 20px;
}
.previewPageListElCard_el_footer{
  position: relative;
  width: 900px;
  bottom: -10px;
}
</style>
