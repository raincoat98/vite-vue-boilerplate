<script lang="ts" setup>
import { useCounterStore } from "@/store/counter";
import { storeToRefs } from "pinia";

const store = useCounterStore();

const { count, name, doubleCount } = storeToRefs(store);
// increment 액션은 그냥 구조화 가능.
const { increment } = store;
</script>

<template>
  <div class="container mx-auto h-screen">
    <div class="h-full w-full flex items-center justify-center">
      <div class="card w-4/12 shadow-2xl flex flex-col gap-2 text-center">
        <p class="text-6xl font-bold text-primary-500">Home</p>
        <p class="text-xl">This is the home page</p>

        <router-link to="/about" class="text-blue-800">Go to About</router-link>
        <p>Count: {{ count }}</p>
        <p>Name: {{ name }}</p>
        <p>Double count: {{ doubleCount }}</p>
        <Button @click="increment" label="Increment" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
