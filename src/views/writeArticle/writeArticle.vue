<template>
  <div class="writeArticleCard">
    <div class="writeArticleBody">
      <el-card>
        <el-form :model="formData" label-width="120px">
          <el-form-item label="标题">
            <el-input placeholder="请输入标题" v-model="formData.title"/>
            </el-form-item>
          <el-form-item label="文章简介">
            <el-input placeholder="请输入文章简介" v-model="formData.synopsis"/>
          </el-form-item>
          <div style="display: flex">
            <el-form-item label="标签" >
              <el-select-v2
                  v-model="formData.tag"
                  :options="labelOptions"
                  placeholder="选择标签"
                  style="width: 240px"
                  multiple
              />
            </el-form-item>
            <el-form-item label="分类" >
              <el-select-v2
                  v-model="formData.category"
                  :options="categoryOptions"
                  placeholder="选择分类"
                  style="width: 240px"
                  multiple
              />
            </el-form-item>
          </div>
          <el-form-item label="封面">
              <el-input placeholder="存储网络图片URL链接" v-model="formData.image"/>
            </el-form-item>
          <el-form-item label="发布/保存">
            <el-button type="primary" @click="saveArticle(1)">发布</el-button>
            <el-button @click="saveArticle(0)">保存</el-button>
          </el-form-item>
        </el-form>
        <div >
          <md-editor v-model="formData.content" @save="saveArticle(0)"/>
        </div>
      </el-card>
    </div>

  </div>

</template>

<script setup lang="ts">
import {h, onMounted, reactive, ref, watch} from 'vue'
import {MdEditor} from "md-editor-v3";
import 'md-editor-v3/lib/style.css'
import { useRoute } from 'vue-router'
import {ElNotification} from "element-plus";
import ProgressComponent from "@/views/writeArticle/ProgressComponent/ProgressComponent.vue";


import {writeArticleData} from "@/api/writeArticle/types";
import {addArticle, getArticleById} from "@/api/writeArticle";

import {userDataStore} from "@/stores/userData";
const userData = userDataStore()

const router = useRoute()
const id = ref();
const formData = reactive<writeArticleData>({})


// 您可以在 setup 中访问 $route.query
const articleId = ref(router.query.id);
// 检查 routerId 是否存在的函数
function checkRouterId() {
    if (router.query.id !== undefined){
      getArticleById(router.query.id.toString()).then(res => {
        Object.assign(formData, res.data)
        // 将以逗号分隔的字符串转换为数组
        formData.category = formData.category.split(',').map(item => item.trim());
        formData.tag = formData.tag.split(',').map(item => item.trim());
      })
    } else {
      Object.assign(formData, {})
    }
}
// function saveArticle(isSave: number) {
//     if(!isButtonDisabled.value.value){
//       isButtonDisabled.value.inform = isSave === 1 ? '发布' : '保存'
//       // 创建一个通知实例进度百分比
//       const notificationInstance = ElNotification({
//         })
//       })
//     }
// }

// 组件加载时进行检查
checkRouterId();

const isButtonDisabled = ref({
  value: ref(false),
  inform: ref('保存')
})
const upLoadLine = ref(
  {
    value: 0,
    isSuccess: '',
  }
);

const tagInitials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
const labelOptions = ref(
    Array.from({ length: 1000 }).map((_, idx) => ({
      value: `${tagInitials[idx % 10]}${idx}`,
      label: `${tagInitials[idx % 10]}${idx}`,
    }))
)

const categoryInitials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
const categoryOptions = ref(
    Array.from({ length: 1000 }).map((_, idx) => ({
      value: `${categoryInitials[idx % 10]}${idx}`,
      label: `${categoryInitials[idx % 10]}${idx}`,
    }))
)

onMounted(() => {
  id.value = router.query.id;
})

function saveArticle(isSave: number) {
  if(!isButtonDisabled.value.value){
    isButtonDisabled.value.inform = isSave === 1 ? '发布' : '保存'
    // 创建一个通知实例进度百分比
    const notificationInstance = ElNotification({
      title: isButtonDisabled.value.inform,
      message: h(ProgressComponent, { upLoadLine: upLoadLine }),
      duration: 0
    });
    //标记发布/保存已经点击
    isButtonDisabled.value.value = true;
    //模拟上传过程
    uploadProgress()
    //进行后端数据传输
    formData.isOpen = String(isSave)
    formData.uid = userData.getName
    formData.datetime = String(new Date().toISOString().split('T')[0])
    formData.readTime = String(Math.ceil(formData.content?.length/ 200))
    formData.tag = formData.tag.toString()
    formData.category = formData.category.toString()
    addArticle(formData).then((res) => {
      if (res.data === 1){
        outInform(notificationInstance,'success')
      } else {
        outInform(notificationInstance,'error')
      }

    }).catch(() => {
      outInform(notificationInstance,'error')
    })
  } else {
    //提示一点击过发布/保存按钮
    saveArticleInform('',false)
  }
}

function outInform(notificationInstance,isOK){
  setTimeout(() => {
    isButtonDisabled.value.value = false;
    upLoadLine.value.value = 100;
    upLoadLine.value.isSuccess = isOK === 'success' ? 'success' : 'exception';
    saveArticleInform('save',isOK === 'success')
    setTimeout(() => {
      notificationInstance.close();
      setTimeout(() => {
        upLoadLine.value.value = 0;
        upLoadLine.value.isSuccess = '';
      },500)
    }, 1000)
  }, 3000)
}

function uploadProgress() {
  // 模拟上传过程，每次增加一个随机数值，直到达到 100
  const interval = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log("Random number:", randomNumber);
    if (upLoadLine.value.value + randomNumber < 99) {
      upLoadLine.value.value += randomNumber;
    } else {
      upLoadLine.value.value = 99; // 确保进度值不超过 100
      clearInterval(interval); // 达到 100 后清除定时器
    }
  }, 1000); // 每次增加上传进度的间隔时间，这里设置为 1000 毫秒（1 秒）
}

function saveArticleInform (save: string, TORF: boolean){

  let informMessage = h('i', { style: 'color: teal' }, '正在'+isButtonDisabled.value.inform+'操作')
  let informType = ''
  if(save === 'save'){
    if(TORF){
      informMessage = h('i', { style: 'color: teal' }, isButtonDisabled.value.inform + '成功')
      informType = 'success'
    } else {
      informMessage = h('i', { style: 'color: teal' }, isButtonDisabled.value.inform + '失败')
      informType = 'error'
    }
  }
  ElNotification({
    title: '',
    message: informMessage,
    type: informType
  })
}




</script>

<style scoped>

.writeArticleBody {
  overflow: auto;
}
.writeArticleCard {
  margin-left: 3%;
  width: 94%;
  height: 90vh;
  overflow: auto;
}
</style>
