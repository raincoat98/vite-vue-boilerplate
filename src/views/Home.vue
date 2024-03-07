<script lang="ts" setup>
import { useCounterStore } from "@/store/counter";
import { storeToRefs } from "pinia";

const store = useCounterStore();

const { count, name, doubleCount } = storeToRefs(store);
// increment 액션은 그냥 구조화 가능.
const { increment } = store;
</script>

<template>
  <div>
    <h1>Home</h1>
    <p>This is the home page</p>
    <router-link to="/about">Go to About</router-link>
    <p>Count: {{ count }}</p>
    <p>Name: {{ name }}</p>
    <p>Double count: {{ doubleCount }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<style lang="scss" scoped></style>
