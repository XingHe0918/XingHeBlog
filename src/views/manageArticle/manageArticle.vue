

<template>
<div class="manageArticleMain">
   <el-table :data="tableData"  style="width: 100%" max-height="80vh"  >
     <el-table-column label="序号" width="140" type="index" />
     <el-table-column prop="title" label="标题" width="140"/>
     <el-table-column prop="uid" label="作者" width="140"/>
     <el-table-column prop="datetime" label="日期" width="140"/>
     <el-table-column prop="isOpen" label="是否发布" width="140">
       <template #default="scope">
<!--         <el-button size="small" @click="handleEdit(scope.$index, scope.row)">发布</el-button>-->
         <el-tag style="cursor: pointer;caret-color: transparent;" size="small" :type="scope.row.isOpen === '0' ? 'danger' : 'success'" disable-transitions @click="isPublish(scope.$index, scope.row)">
           {{ scope.row.isOpen === '0' ? '未发布' : '已发布' }}
         </el-tag>
       </template>
     </el-table-column>
     <el-table-column label="操作" width="200">
       <template #default="scope">
         <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
         <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
       </template>

     </el-table-column>
   </el-table>
  {{tablePage}}
  <el-pagination background layout="prev, pager, next" :total="1000" v-model="tableData" @current-change="handleCurrentChange"/>

</div>
</template>

<script setup lang="ts">

import {onMounted, reactive, ref} from "vue";
import router from "@/router";

const tablePage = ref(1)

import {manageArticleData} from "@/api/manageArticle/types";
import {getArticleAll} from "@/api/manageArticle";

const tableData = ref([<manageArticleData>{}])

onMounted(() => {
  getArticleAll().then(res => {
    console.log(res)
    tableData.value = res.data
  })
})

function handleEdit(index,item){
  router.push({path: '/writeArticle', query: {id: item.id}})
}
function handleDelete(index,item){
  console.log(index,item)
  tableData.value.splice(index,1)
}

const handleCurrentChange = (newPage: number) => {
  tablePage.value = newPage;
};

const isPublish = (index: number,item: any) => {
  item.status = item.status === '0' ? '1' : '0'
}


</script>

<style scoped>
.manageArticleMain{
  overflow: auto;
}

</style>
