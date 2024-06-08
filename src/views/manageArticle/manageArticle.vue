

<template>
<div class="manageArticleMain">
   <el-table :data="tableData" style="width: 100%" max-height="80vh"  >
     <el-table-column label="序号" width="140">
       <template #default="{ $index }">
         {{ $index + 1 }}
       </template>
     </el-table-column>
     <el-table-column prop="id" label="序号" width="140"/>
     <el-table-column prop="title" label="标题" width="140"/>
     <el-table-column prop="author" label="作者" width="140"/>
     <el-table-column prop="date" label="日期" width="140"/>
     <el-table-column prop="content" label="是否发布" width="140">
       <template #default="scope">
         <el-button size="small" @click="handleEdit(scope.$index, scope.row)">发布</el-button>
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

const tablePage = ref(1)

const tableData = ref([
    {
      id: '1',
      title: '文章1',
      author: '作者1',
      date: '2022-01-01',
      content: '内容1'
    },
    {
      id: '5',
      title: '文章2',
      author: '作者2',
      date: '2022-01-02',
      content: '内容2'
    },
    {
      id: '3',
      title: '文章3',
      author: '作者3',
    },
])

function handleEdit(index,item){
  console.log(index,item)

}
function handleDelete(index,item){
  console.log(index,item)
  tableData.value.splice(index,1)
}

const handleCurrentChange = (newPage: number) => {
  tablePage.value = newPage;
};

</script>

<style scoped>
.manageArticleMain{
  overflow: auto;
}

</style>
