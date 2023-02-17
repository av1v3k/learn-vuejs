<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useCounterStore } from '@/stores/counter'
import { onMounted, ref } from 'vue';

let router = useRouter();
let route = useRoute();

const empref = ref(null);

let store = useCounterStore();

const submitFormData = (evt) => {
    let emF = document.getElementById('employeeform');
    let form = new FormData(emF);
    let formObj = {};
    for (let [key, value] of form.entries()) {
        formObj[key] = value;
    }
    console.log(formObj);
    store.addEmployee(formObj);
    router.push({ path: '/employeelist' });
}

onMounted(() => {
    const params = route?.params;
    console.log(params);
    const empdata = store.getEmployee(params.id);
    console.log(empdata);
    empref.value = empdata;
});



</script>

<template>
    <form id="employeeform">
        <div>
            <input aria-label="fn" name="firstname" type="text" :value="empref ? empref.firstname : ''" />
        </div>
        <div>
            <input aria-label="le" name="level" type="text" :value="empref ? empref.level : ''" />
        </div>
        <div>
            <label for="ju">
                Junior
                <input id="ju" type="radio" name="position" value="junior"
                    :checked="empref && empref.position === 'junior' ? true : false" />
            </label>
            <label for="mi">
                Mid
                <input id="mi" type="radio" name="position" value="mid"
                    :checked="empref && empref.position === 'mid' ? true : false" />
            </label>
            <label for="se">
                Senior
                <input type="radio" id="se" name="position" value="senior"
                    :checked="empref && empref.position === 'senior' ? true : false" />
            </label>
        </div>
        <div>
            <button type="button" @click="submitFormData">Add</button>
        </div>
    </form>
</template>