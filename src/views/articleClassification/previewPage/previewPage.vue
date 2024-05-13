<template>
  <div class="infinite-list-wrapper" style="overflow: auto">
    <ul
        v-infinite-scroll="load"
        class="list"
        :infinite-scroll-disabled="disabled"
    >
      <li v-for="i in count" :key="i" class="list-item">
        <div class="previewPageListElCard">
          <el-image class="previewPageListElCard_image" :src="Image"> </el-image>
          <el-row class="previewPageListElCard_el_row">
            <el-button v-for="i in 2" :key="i" class="previewPageListElCard_el_row_button" text style="background: #2a9c8e">
              <el-text style="color: white">标签</el-text>
            </el-button>
          </el-row>
          <div>
            <h2 style="margin-left: 10px; text-align: left;">标题</h2>
            <p style="margin-left: 10px; text-align: left;">简介</p>
            <el-row class="previewPageListElCard_el_row">
              <el-col :span="8">
                <el-row>
                  <el-col :span="5">
                    <el-image class="previewPageListElCard_el_rowImage" :src="DateImage" style="margin-top: 10px"></el-image>
                  </el-col>
                  <el-col :span="10" style="padding-top: 8px;">
                    <el-text>2024年5月13日</el-text>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="5">
                    <el-image class="previewPageListElCard_el_rowImage" :src="ReadTimeImage" style="margin-top: 10px"></el-image>
                  </el-col>
                  <el-col :span="10" style="padding-top: 8px;">
                    <el-text>阅读时长: 3 分钟</el-text>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="8">
                <el-row>
                  <el-col :span="5">
                    <el-image class="previewPageListElCard_el_rowImage" :src="TextNumImage" style="margin-top: 10px"></el-image>
                  </el-col>
                  <el-col :span="10" style="padding-top: 8px;">
                    <el-text>字数 : 1000字</el-text>
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
import { computed, ref } from 'vue'
import Image from "@/image/background.jpg"
import DateImage from "@/image/日历,日期.png"
import ReadTimeImage from "@/image/时间.png"
import TextNumImage from "@/image/笔.png"

const count = ref(10)
const loading = ref(false)
const noMore_Sum = ref(20)// 设置加载次数
const noMore = computed(() => count.value >= noMore_Sum.value)
const disabled = computed(() => loading.value || noMore.value)
const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 2
    loading.value = false
  }, 2000)
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
  height: 430px;
}
.infinite-list-wrapper .list-item + .list-item {
  margin-top: 50px;
}
.previewPageListElCard{
  width: 800px;
  height: 430px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .12);
  border-radius: 3% 3% 0 0 / 10% 10% 0 0;
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

</style>
