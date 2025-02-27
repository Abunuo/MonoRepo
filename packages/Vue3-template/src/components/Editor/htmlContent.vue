<!--
 * @Date: 2024-11-28 08:56:51
 * @Description: 编辑器内容回显
-->
<template>
  <div class="editor-html-content w-e-text-container" v-html="transformHtml ?? text"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { html, text } = defineProps<{
  html?: string;
  text?: string;
}>()
const transformHtml = computed(() => html?.replaceAll('\\', ''))
</script>

<style lang="scss">
.editor-html-content {
  color: #333;
  p {
    margin: 15px 0;
  }
  img {
    max-width: 100%;
  }
  li {
    margin: 5px 0;
  }
}
</style>