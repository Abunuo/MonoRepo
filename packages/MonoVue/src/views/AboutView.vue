<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ count }}</div>
    <div>dubule: {{ doubleCount }}</div>
    <button @click="() => increment()">increment</button>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useCounterStore } from '@/stores/counter';

  const counter = useCounterStore()

  const { count, doubleCount } = storeToRefs(counter);
  const { increment } = counter

</script>

<style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>
