<script setup>
// import ProductList from './ProductList.vue';

import ProductList from "./ProductList.vue";

const title = 'title-IBM';
const name = 'IBM';
const city = 'Bangalore';

// export default {
//     components: { ProductList }
// }

</script>


<template>
    <div>
        <ProductList v-bind:title="title" v-bind:name="name" :city="city"></ProductList>
        <ProductList></ProductList>
    </div>


</template>