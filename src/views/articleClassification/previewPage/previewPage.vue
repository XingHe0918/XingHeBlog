<template>
  <div class="previewPageMain">
    <div class="infinite-list-wrapper" style="overflow: auto">
      <ul
          v-infinite-scroll="load"
          class="list"
          :infinite-scroll-disabled="disabled"
      >
        <li v-for="i in count" :key="i" class="list-item">{{ i }}</li>
      </ul>
      <p v-if="loading">Loading...</p>
      <p v-if="noMore">No more</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, nextTick, onMounted, ref} from 'vue'

const count = ref(10)
const loading = ref(false)
const noMore = computed(() => count.value >= 20)
const disabled = computed(() => loading.value || noMore.value)

const listItem = ref<HTMLElement | null>(null) // 声明 ref 为 HTMLElement 类型
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 使用类型断言来访问 style 属性
      // (entry.target as HTMLElement).style.transform = 'scale(1.5)';
      (entry.target as HTMLElement).style.width = '50vw';
      (entry.target as HTMLElement).style.height = '100px';
      // (entry.target as HTMLElement).style.margin = '100px 100px 100px 100px';
      (entry.target as HTMLElement).style.transition = 'width 0.8s ease-in-out, height 0.8s ease-in-out';
    } else {
      // 同样地，使用类型断言
      (entry.target as HTMLElement).style.transform = 'scale(1)'
    }
  })
}, {
  root: null,
  threshold: 0.99
})

onMounted(() => {
  nextTick(() => {
    // 获取所有列表项并分别观察它们
    const listItems = document.querySelectorAll('.list-item')
    listItems.forEach((listItem) => {
      io.observe(listItem)
    })
  })
})
const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 2
    loading.value = false
  }, 2000)
}
</script>

<style>
.previewPageMain{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.infinite-list-wrapper {
  height: 80vh;
  width: 50vw;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  border: #181818 solid 1px;
}
.infinite-list-wrapper .list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  width: 20vw;
  border: #181818 solid 1px;
}
.infinite-list-wrapper .list-item + .list-item {
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
