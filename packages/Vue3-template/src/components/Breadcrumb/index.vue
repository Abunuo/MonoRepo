<!--
 * @Date: 2024-11-22 11:03:55
 * @Description: 面包屑
-->
<template>
  <div class="custom-breadcrumb">
    <div class="label">
      <img src="@/assets/images/position.png" alt="position" width="14" height="14">
      当前位置:
    </div>
    <template v-for="(item, index) in path" :key="item.id">
      <div class="breadcrumb-item" @click="breadcrumbClickHandler(item)">
        <span v-if="!isHref || path.length - 1 === index || !item.href">{{ item.name }}</span>
        <RouterLink v-else :to="item.href">{{ item.name }}</RouterLink>
      </div>
      <div class="breadcrumb-separator" v-if="path.length - 1 !== index">></div>
    </template>
  </div>
</template>

<script lang="ts">
export type BreadcrumbPathProps = {
  id: any;
  name: string;
  href?: string;
}[];
</script>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
const { path = [], isHref = false } = defineProps<{
  isHref: Boolean;
  path: BreadcrumbPathProps
}>()
const emit = defineEmits(['clickItemHandler'])

const breadcrumbClickHandler = (item: any) => {
  if (isHref) return;
  const index = path.findIndex(i => i.id === item.key)
  if (index === path.length - 1) return;
  emit('clickItemHandler', item)
}
</script>

<style lang="scss">
.custom-breadcrumb {
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 54px;
  font-size: 14px;
  color: #333;
  background-color: #fff;

  .label {
    display: flex;
    align-items: center;
    margin-right: 10px;
    gap: 6px;
  }

  .breadcrumb-item {
    a {
      color: #333;
    }

    &:not(:last-child):hover {
      cursor: pointer;
      color: #0741A2;

      a {
        color: #0741A2;
      }
    }
  }

  .breadcrumb-separator {
    margin: 0 6px;
  }
}
</style>