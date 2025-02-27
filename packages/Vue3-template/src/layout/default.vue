<!--
 * @Date: 2024-11-20 10:50:53
 * @Description: web layout
-->
<template>
  <div class="container">
    <div class="container-body">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  min-width: 1440px;
  min-height: 100%;
  box-sizing: border-box;

  .container-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 1400px;
    margin: 0 auto;
  }
}
</style>
