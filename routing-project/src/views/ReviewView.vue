<script setup>
import { ref } from 'vue';
import ReviewDetail from './ReviewDetail.vue';

const emit = defineEmits(['emitReviewData']);

let dataAPI = ref([]);
let selectedReviewRef = ref(null);
let parentEmit = ref(null);
const fetchData = async () => {
    dataAPI.value = await fetch('https://jsonplaceholder.typicode.com/users').then(d => d.json());
}

const selectReview = (item) => {
    selectedReviewRef.value = item;
    emit('emitReviewData', item);
}

const clearSelection = () => {
    selectedReviewRef.value = null;
}

const collectData = (data) => {
    console.log(data);
    parentEmit.value = data;
}


</script>

<template>
    <article>
        <button type="button" @click="fetchData">Like</button>
        <button type="button" @click="clearSelection">Dislike</button>
        <div v-for="(item, i) in dataAPI" @click="selectReview(item)">
            <!-- <div v-for="(item, i) in dataAPI" @click="$emit('emitReviewData', item)"> -->
            {{ item.id }}
            {{ item.name }}
        </div>
    </article>
    <div v-if="selectedReviewRef">
        <ReviewDetail :selectedReview="selectedReviewRef" @emitSendtoParent="collectData"></ReviewDetail>
    </div>
    {{ parentEmit }}
</template>
