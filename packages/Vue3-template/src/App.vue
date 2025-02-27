<template>
  <ElConfigProvider :locale="zhCn">
    <RouterView />
  </ElConfigProvider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ElConfigProvider } from "element-plus"
import zhCn from 'element-plus/es/locale/lang/zh-cn'

</script>

<style scoped></style>
