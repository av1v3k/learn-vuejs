<script setup>

const emit= defineEmits(['emitSendtoParent']);

defineProps({
    selectedReview: {
        id: {
            type: String
        },
        name: {
            type: String
        }
    }
})

const emitBacktoParent = (data) => {
    emit('emitSendtoParent', data);
}

</script>

<template>
    <div>
        <h1>{{ selectedReview.id }}</h1>

        <h2>{{ selectedReview.name }}</h2>
        <button @click="emitBacktoParent(selectedReview)">More details</button>
    </div>

</template>
