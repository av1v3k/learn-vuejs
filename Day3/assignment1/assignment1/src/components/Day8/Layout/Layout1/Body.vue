<script setup>

import { computed } from 'vue';

const props = defineProps({
    firstNameDefault: {
        type: String,
    },
    passwordDefault: {
        type: String
    },
    themeDefault: {
        type: Boolean,
        // default: false
    }
});


const firstNameComp = computed(() => {
    props.firstNameDefault === "" ? "Error" : '';
})

const emit = defineEmits(['sendFormData', 'setTheme']);

const submitForm = (evt) => {
    const form = new FormData(evt.target);
    const formObj = {};
    for (var [key, value] of form.entries()) {
        formObj[key] = value;
    }
    emit('sendFormData', formObj);
}

const setTheme = (evt) => {
    emit('setTheme', evt.target.checked);
}

</script>
<template>
    <form id="personal" @submit.prevent="submitForm">
        <div class="col align-self-center">
            <label for="firstname" class="col-sm-2">
                Name:
            </label>
                <input class="form-control col-sm-10" type="text" id="firstname" :value="firstNameDefault" name="firstName" aria-label="fn" />
        </div>
        <div class="col">
            <label for="password col-sm-2">
                Password:
            </label>
                <input class="form-control col-sm-10" type="password" id="password" :value="passwordDefault" name="password" aria-label="fn" />
        </div>
        <div class="col">
            <label for="theme">
                <input type="checkbox" @change="setTheme" :checked="themeDefault" id="theme" name="theme"
                    aria-label="th" />
                Dark Theme
            </label>
        </div>
        <button class="btn btn-primary" type="submit">Submit Form</button>
    </form>
</template>