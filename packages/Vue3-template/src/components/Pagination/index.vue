<!--
 * @Date: 2024-11-22 10:14:48
 * @Description: 通用分页组件
-->
<template>
  <el-pagination :class="props.class" :style="props.style" class="custom-pagination" layout="prev, pager, next" background prev-text="上页" next-text="下页"
    v-bind="$attrs" />
</template>

<script setup lang="ts">
const props = defineProps(['class', 'style'])
</script>

<style lang="scss">
.custom-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;

  .btn-prev,
  .btn-next,
  .number,
  .more {
    color: #808080;
    background-color: #fff !important;
    border: 1px solid rgba(51, 51, 51, 0.2);
    border-radius: 4px;

    &.btn-prev,
    &.btn-next {
      padding: 0 10px;
    }

    &.is-active {
      color: #fff !important;
      background-color: #0741A2 !important;
    }
  }
}
</style>