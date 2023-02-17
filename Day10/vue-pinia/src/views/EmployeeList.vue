<script setup>
import { useRouter } from 'vue-router';

import { useCounterStore } from '@/stores/counter'
const store = useCounterStore();
let router = useRouter();



const EditForm = (idx) => {
    console.log(idx);

    router.push({ name: "employeeeditform", params: { id: idx } })
}

const DeleteFormData = (idx) => {
    console.log(idx);
    store.removeEmployee(idx);
}


</script>


<template>
    <article v-for="(emp, index) in store.employeeList">
        <div>{{ emp.firstname }} {{ emp.level }} {{ emp.position }}
            <button @click="EditForm(index)">Edit</button>
            <button @click="DeleteFormData(index)">Delete</button>
        </div>
    </article>
</template>