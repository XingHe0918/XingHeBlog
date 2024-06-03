<template>
  <div class="timelinePageMain">
    <div>timelinePage{{ timeLine }}</div>
    <el-timeline style="max-width: 600px">
      <el-timeline-item v-for="(item, index) in TimeLineData" :key="index" :timestamp="item.time" placement="top">
        <el-card>
          <el-row>
            <el-col :span="6">
              <el-row>
                <el-col><h2>标题</h2></el-col>
                <el-col>时间</el-col>
              </el-row>
            </el-col>
            <el-col :span="18">
              <div class="timelinePageCard">
                <el-image :src="Image" style="border-radius: 5% 5% 5% 5% / 5% 5% 5% 5%;"></el-image>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, watch} from 'vue';
import { useRoute } from 'vue-router';
import Image from '@/image/background.jpg'

const route = useRoute();
const timeLine = ref<string>('');
const TimeLineData = ref<any[]>([]);

// 监听路由参数的变化
watch(() => route.query.timeLine, (newValue, oldValue) => {
  console.log('Route parameter timeLine changed:', newValue);
  timeLine.value = newValue as string;
  // 在这里可以执行其他相关的逻辑
  TimeLineData.value.push({
    time: '2018/4/12 20:46',
    // ...其他数据
  });

  TimeLineData.value.push({
    time: '2018/4/3 20:46',
    // ...其他数据
  });
});

onMounted(() => {
  console.log("timeLInePage onMounted")
  timeLine.value = route.query.timeLine as string;
  TimeLineData.value.push({
    time: '2018/4/12 20:46',
    // ...其他数据
  });

  TimeLineData.value.push({
    time: '2018/4/3 20:46',
    // ...其他数据
  });
  // 处理时间线逻辑
  // 请求后端页面数据

});
</script>

<style>
.timelinePageMain{
  overflow: auto;
  height: 90vh;
}
.timelinePageCard{
  width: 100px;
  margin-top: 20px;
  float: right;
}
</style>
