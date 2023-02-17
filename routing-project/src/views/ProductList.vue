<script setup>
import { ref, onMounted } from 'vue';


let dataAPI = ref([]);
const fetchData = async () => {
    dataAPI.value = await fetch('https://jsonplaceholder.typicode.com/users').then(d => d.json());
}



onMounted(() => {
    fetchData();
})

</script>

<template>
    <article>
        <div v-if="!dataAPI">Loading...</div>
        <div v-else-if="dataAPI && dataAPI.length > 0">
            <div v-for="(item, i) in dataAPI">
                <!-- <RouterLink :to="'product/' + item.id + '/name/' + item.name">
                    {{ item.id }}
                    {{ item.name }}
                </RouterLink> -->
                <RouterLink :to="{ name: 'product', params: { id: item.id, name: item.name } }">
                    {{ item.id }}
                    {{ item.name }}
                </RouterLink>

            </div>
        </div>
    </article>
</template>
