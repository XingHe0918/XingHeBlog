<template>
  <div>
    <el-progress
        type="circle"
        :percentage="upLoadLine.value.value"
        :status="upLoadLine.value.isSuccess"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  upLoadLine
}>();
</script>

<style scoped>
/* 添加你需要的样式 */
</style>
