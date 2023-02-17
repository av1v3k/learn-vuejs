<script setup>
import { onMounted, ref } from 'vue';
import useFetch from './useHooks/useFetch';

  const {data, error} = useFetch('https://jsonplaceholder.typicode.com/todos');
</script>
<template>
    <div>Todo App</div>
    <div v-if="error">Opps! Error Encountered</div>
    <div v-else-if="data">
        <div v-for="todo of data">
            <p>{{todo.title}}</p>
        </div>
    </div>
    <div v-else>
        <h1>Loading...</h1>
    </div>
</template>
<style>
</style>