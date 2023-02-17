<script>
export default {
    created() {
        console.log(this.$attrs);
    },
    inheritAttrs: false
}
</script >

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['onRequest']);
let counter = ref(0);

const props = defineProps({
    isPassed: {
        type: Boolean
    },
    address: {
        type: Object,
        default: {
        },
        city: {
            type: String,
            default: 'CITY DEFAULT'
        },
        state: {
            type: String,
            default: 'STATE DEFAULT'
        }
    }
});

const onSendByCode = () => {
    emit('onRequest', counter.value++)
}



</script>


<template>
    <div>
        {{ address.city }}
    </div>
    <div>
        {{ address.state }}
    </div>
    <button class="fancy-style" @click="onSendByCode">Send By Code</button>
    <button @click="$emit('onRequest', counter++)">Inline Emit</button>
</template>

<style scoped>
.fancy-style {
    color: green;
}
</style>