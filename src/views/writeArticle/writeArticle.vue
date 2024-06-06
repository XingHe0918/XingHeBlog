<template>
  <div class="writeArticleCard">
    <div class="writeArticleBody">
      <el-card>
        <div>标题</div>
        <div>文章简介</div>
        <div>标签</div>
        <div>分类</div>
        <div>封面</div>
        <div>发布/保存</div>
        <div>
          <md-editor v-model="form.content" @save="saveArticle"/>
        </div>
      </el-card>
    </div>

  </div>

</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {MdEditor} from "md-editor-v3";
import 'md-editor-v3/lib/style.css'
import MarkdownIt from "markdown-it";
import { useRoute } from 'vue-router'


const router = useRoute()
const id = ref();
const form = ref({
  content:''
})

onMounted(() => {
  id.value = router.query.id;
})

function saveArticle() {
  console.log(form.value.content)
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
