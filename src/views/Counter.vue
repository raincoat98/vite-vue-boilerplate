<script lang="ts" setup>
import { useCounterStore } from '@/store/counter';

const store = useCounterStore();

const { count, name, doubleCount } = storeToRefs(store);
// increment 액션은 그냥 구조화 가능.
const { increment } = store;
</script>

<template>
  <div class="container mx-auto h-screen">
    <div class="pb-primary flex h-full w-full items-center justify-center">
      <div class="card flex w-4/12 flex-col gap-2 text-center shadow-2xl">
        <p class="text-6xl font-bold text-primary-500">Counter</p>
        <p class="text-xl">This is the home page</p>

        <router-link to="/about" class="text-blue-800">
          Go to About
        </router-link>
        <router-link to="/" class="text-blue-800"> Go to Home </router-link>
        <p>Count: {{ count }}</p>
        <p>Name: {{ name }}</p>
        <p>Double count: {{ doubleCount }}</p>
        <Button @click="increment" label="Increment" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
