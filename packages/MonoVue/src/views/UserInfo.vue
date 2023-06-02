<template>
  <div>
    {{ userInfo?.nickname }} 的用户 ID 是：{{ userId }}
  </div>
  <button @click="() => getUserInfo(uuid())">更新用户</button>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useUserStore } from '@/stores/user'
  import { uuid } from 'mono-utils'
  const store = useUserStore()
  const { userInfo, userId } = storeToRefs(store)
  const { getUserInfo } = store
</script>

<style lang="scss"></style>