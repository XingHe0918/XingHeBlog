
<template>
  <div>timelinePage{{timeLine}}</div>
  <div>
    <el-timeline style="max-width: 600px">
      <el-timeline-item v-for="(item,index) in TimeLineData" :key="index" :timestamp="item.time" placement="top">
        <el-card>
          {{item.time}}
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const timeLine = ref<string>('');
const TimeLineData = ref<any[]>([]);

onMounted(() => {
  if (route.query && route.query.timeLine) {
    timeLine.value = route.query.timeLine as string;
  }
  // 处理时间线逻辑
  //请求后端页面数据




  // 请求后端页面数据
});

TimeLineData.value.push({
  time: '2018/4/12 20:46',
  // ...其他数据
});

TimeLineData.value.push({
  time: '2018/4/3 20:46',
  // ...其他数据
});



</script>


<style scoped>

</style>
