

<template>
<div class="manageArticleMain">
   <el-table :data="tableData" style="width: 100%" max-height="80vh"  >
     <el-table-column label="序号" width="140" type="index" />
     <el-table-column prop="title" label="标题" width="140"/>
     <el-table-column prop="author" label="作者" width="140"/>
     <el-table-column prop="date" label="日期" width="140"/>
     <el-table-column prop="content" label="是否发布" width="140">
       <template #default="scope">
<!--         <el-button size="small" @click="handleEdit(scope.$index, scope.row)">发布</el-button>-->
         <el-tag style="cursor: pointer;caret-color: transparent;" size="small" :type="scope.row.status === '0' ? 'danger' : 'success'" disable-transitions @click="isPublish(scope.$index, scope.row)">
           {{ scope.row.status === '0' ? '未发布' : '已发布' }}
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

import {ref} from "vue";
import router from "@/router";

const tablePage = ref(1)

const tableData = ref([
    {
      id: '1',
      title: '文章1',
      author: '作者1',
      date: '2022-01-01',
      status: '0',
    },
    {
      id: '5',
      title: '文章2',
      author: '作者2',
      date: '2022-01-02',
      status: '0',
    },
    {
      id: '3',
      title: '文章3',
      author: '作者3',
      date: '2022-01-03',
      status: '0',
    },
])

function handleEdit(index,item){
  console.log(index,item)
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
