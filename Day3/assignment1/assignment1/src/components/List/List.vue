<script setup>
import { reactive } from 'vue';
let todos = reactive([]);



let addData = () => {
    todos.push({ id: '', name: 'asdf' })
}
</script>



<template>
    <button @click="addData()">Add</button>
    <div v-for="item in todos">
        {{ item.name }}
    </div>
</template>

