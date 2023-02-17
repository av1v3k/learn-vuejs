<script>
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';




const backToPRoducts = () => {

}

onMounted(() => {
    const route = useRoute();
    console.log(route?.params);
})
</script>
<template>
    <RouterLink :to="'/products'">Back</RouterLink>
    {{ $route.params }}
    {{ $route.params.id }}
    {{ $route.params.name }}
</template>