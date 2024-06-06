<template>
  <div class="labelClassificationPageMain">
        <el-card class="labelClassificationPageCardMain" v-for="(item, index) in labelIdData" :key="index" @click="toBlogContent(item.id)" style="cursor: pointer;">
<!--          {{item.id}}-->
          <el-row>
            <el-col :span="16">
              <el-row>
                <el-col><h2>{{item.title}}</h2></el-col>
                <el-col><p>{{item.time}}</p></el-col>
<!--                <div v-for="name in item.label" :key="name.name">-->
<!--                  <el-col>-->
<!--                    <el-button class="labelClassificationPageCardLabel" text style="background: #2a9c8e">-->
<!--                      <el-text style="color: white">{{name.name}}</el-text>-->
<!--                    </el-button>-->
<!--                  </el-col>-->
<!--                </div>-->
              </el-row>
            </el-col>
            <el-col :span="8">
              <div class="labelClassificationPageCard">
                <el-image :src="item.image" style="border-radius: 5% 5% 5% 5% / 5% 5% 5% 5%;"></el-image>
              </div>
            </el-col>
          </el-row>
        </el-card>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, watch} from 'vue';
import {  useRoute} from 'vue-router';
import Image from '@/image/background.jpg'
import router from "@/router";
import type {LabelClassificationData} from "@/views/labelClassification/labelClassification";

const route = useRoute();
const labelId = ref<string>('');
const labelIdData = ref< LabelClassificationData>([]);

// 监听路由参数的变化
watch(() => route.query.id, (newValue, oldValue) => {
  labelId.value = newValue as string;
  // 在这里可以执行其他相关的逻辑
  labelIdData.value.push({
    id: 1,
    title: 'xxxx',
    label: [
      {
        name: '标签1',
      },
      {
        name: '标签2',
      }
    ],
    image: Image,
    // ...其他数据
  });
});

onMounted(() => {
  labelId.value = route.query.id as string;
  labelIdData.value.push({
    id: 1,
    title: 'xxxx',
    time: '2023-04-01',
    image: Image,
    // ...其他数据
  });

  labelIdData.value.push({
    id: 2,
    title: 'xxxx',
    time: '2023-04-01',
    image: Image,
  });

  // 执行其他初始化操作...

});


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
.labelClassificationPageMain{
  overflow: auto;
  height: 90vh;
}
.labelClassificationPageCardMain{
  width: 45%;
  margin: 10px;
  float: left;
}
.labelClassificationPageCard{
  width: 100px;
  margin-top: 20px;
  float: right;
}
.labelClassificationPageCardLabel{
  margin: 10px;
}
</style>
