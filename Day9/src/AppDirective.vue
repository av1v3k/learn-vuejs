<script setup>
const vFocus = {
    mounted: (ele) => {
        if (!ele) return;
        ele.focus();
        ele.style.borderColor = 'red';
        ele.style.height = '35px';
        ele.style.padding = '5px';
    }
}
</script>
<template>
    <input v-focus type="text" />
</template>
<style>

</style>