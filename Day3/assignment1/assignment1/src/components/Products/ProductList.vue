<script setup>

// export default {
//     props: ['title'],
//     setup(props) {
//         return {
//             props
//         }
//     }
// }

const props = defineProps({
    title: {
        default: 'This is default title',
    },
    city: {
        default: 'Chennai'
    },
    name
});
</script>


<template>
    <div>
        Product List: {{ title }} {{name}} {{city}}
    </div>
</template>