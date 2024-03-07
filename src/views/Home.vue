<script lang="ts" setup>
import { useCounterStore } from "@/store/counter";

const store = useCounterStore();

const { count, name, doubleCount } = storeToRefs(store);

// increment 액션은 그냥 구조화 가능.
const { increment } = store;
</script>

<template>
  <div>
    <p class="text-indigo text-h1">Welcome to Vite Quasar</p>
    <h1 class="text-bold">Home</h1>
    <p>This is the home page</p>
    <router-link to="/about">Go to About</router-link>
    <p>Count: {{ count }}</p>
    <p>Name: {{ name }}</p>
    <p>Double count: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<style lang="scss" scoped></style>
@/store/counter-store@/store/counter
