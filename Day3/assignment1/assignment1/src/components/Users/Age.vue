<script>

</script >

<script setup>

const props = defineProps(['title']);

// const props = defineProps({
//     title: {
//         type: String
//     }
// });

const message = "Universe";
</script>


<template>
    Age:{{ title }}
    <!-- <slot v-for="i in 2"></slot> -->
    <slot name="header">It's empty</slot>
    <div>

        <slot :text="message">
        </slot>
    </div>

</template>
