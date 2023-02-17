<script setup>
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore();
</script>
<template>
    {{ store.count }}
    {{ store.doubleCount }}
    <button type="button" @click="store.increment">+</button>
    <!-- <button type="button" @click="store.doubleCount">++</button> -->
    Counter Component
</template>