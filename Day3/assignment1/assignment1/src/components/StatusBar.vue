<script setup>



const statuslocal = {
    ariaDescribe: 'hello',
    status: true,
    name: 'IBM',
    address: [{
        city: 'LA',
        pincode: 45675
    },
    {
        city: 'TA',
        pincode: 343
    }
    ]
}
// export default {
//     setup() {

//     },
//     data() {
//         return {
//             status: true,
//             name: 'IBM',
//             address: [{
//                 city: 'LA',
//                 pincode: 45675
//             },
//             {
//                 city: 'TA',
//                 pincode: 343
//             }
//             ]
//         }
//     }
// }
</script>
<!-- <template>
    <div>status: {{ name }}</div>
    <div v-if="status">
        <ul>
            <li v-for="item in address">
                {{ item.city }} {{ item.pincode }}
            </li>
        </ul>
    </div>
</template> -->

<template>
    <!-- v-html binding example -->
    <h1 v-html="`${statuslocal.name}`"></h1>

    <!-- v-bind Example -->
    <div :aria-describedby="statuslocal.ariaDescribe">Hello</div>
    <div v-bind:aria-describedby="statuslocal.ariaDescribe">Hello 2</div>

    <!-- v:bind Example - disabled attribute -->
    <button v-bind:disabled="statuslocal.status">Click</button>


    <div>status: {{ statuslocal.name }}</div>
    <div v-if="statuslocal.status">
        <ul>
            <li v-for="item in statuslocal.address">
                {{ item.city }} {{ item.pincode }}
            </li>
        </ul>
    </div>
</template>