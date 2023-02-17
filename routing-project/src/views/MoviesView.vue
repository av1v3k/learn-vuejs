<script setup>


</script>

<template>
    <RouterLink :to="'/action'">Action</RouterLink>
    Movies View
    <div>
        <RouterLink :to="'/products'">Back</RouterLink>
    </div>
    <RouterView />
</template>
