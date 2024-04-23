<!--<template>-->
<!--  <div class="drawer">-->
<!--    &lt;!&ndash; 遮罩层 &ndash;&gt;-->
<!--    <div class="mask-show" v-if="drawerShow" @click="close()"></div>-->
<!--    &lt;!&ndash; 抽屉层 &ndash;&gt;-->
<!--    <div class="darwer-box" :class="{ show: drawerShow }"></div>-->
<!--  </div>-->
<!--</template>-->
<!--<script setup>-->
<!--import { watch, reactive, defineProps, defineEmits } from 'vue'-->

<!--const emits = defineEmits(['handleCloseDialog'])-->

<!--const props = defineProps({-->
<!--  drawerShow: {-->
<!--    type: Boolean,-->
<!--    default: false,-->
<!--  },-->
<!--})-->

<!--watch(-->
<!--    () => props.drawerShow,-->
<!--    () => {-->
<!--      dataDarw.drawerShow = props.drawerShow-->
<!--    }-->
<!--)-->

<!--const dataDarw = reactive({-->
<!--  drawerShow: props.drawerShow,-->
<!--})-->

<!--const close = () => {-->
<!--  emits('handleCloseDialog', false)-->
<!--}-->

<!--watch(-->
<!--    () => props.data,-->
<!--    (val) => {-->
<!--      // eslint-disable-next-line vue/no-mutating-props-->
<!--      props.data = val-->
<!--    },-->
<!--    { deep: true }-->
<!--)-->
<!--</script>-->
<!--<style>-->
<!--.drawer {-->
<!--  width: 100%;-->
<!--  display: flex;-->
<!--  display: -webkit-flex;-->
<!--  flex-direction: column;-->
<!--  .mask-show {-->
<!--    width: 100%;-->
<!--    height: 100%;-->
<!--    background: rgb(0, 0, 0, 0.5);-->
<!--    position: fixed;-->
<!--    z-index: 100;-->
<!--    top: 0;-->
<!--    left: 0;-->
<!--    right: 0;-->
<!--    bottom: 0;-->
<!--    backface-visibility: hidden;-->
<!--  }-->
<!--  .darwer-box {-->
<!--    padding: 20px;-->
<!--    position: fixed;-->
<!--    z-index: 1100;-->
<!--    top: 0px;-->
<!--    bottom: 0px;-->
<!--    width: 60%;-->
<!--    height: calc(100% - 40px);-->

<!--    background: linear-gradient(-->
<!--            312.9deg,-->
<!--            rgba(255, 255, 255, 0.3) 4.49%,-->
<!--            rgba(233, 240, 247, 0.3) 95.45%-->
<!--    ),-->
<!--    #e9f0f7;-->
<!--    border-left: 1px solid #cfd8dc !important;-->
<!--    box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.12);-->
<!--    -webkit-transition: all 1s ease;-->
<!--    transition: all 1s ease;-->
<!--    right: -62%;-->
<!--    overflow-y: auto;-->
<!--  }-->
<!--  .show {-->
<!--    right: 0;-->
<!--  }-->
<!--}-->

<!--</style>-->
