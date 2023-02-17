<script setup>
// import PersonalDetails from './PersonalDetails.vue';
import Address from './Address.vue';
import Age from './Age.vue';
import { ref, computed, reactive, shallowReactive, provide } from 'vue';

const count = ref(0);
provide('message', count);
const users = [
    {
        personal: {
            firstName: '',
            lastName: 'Bah',
            age: 22
        },
        address: {
            city: 'Bengalore',
            state: 'KA'
        }
    },
    {
        personal: {
            firstName: 'Bre',
            lastName: 'Hal',
            age: 23
        },
        address: {
            city: 'Chennai',
            state: 'TN'
        }
    },
    {}
];






const filteredData = computed(() => {
    return users.filter((ele) => Object.keys(ele).length !== 0)
})

let counter = ref(0);
let counter2 = reactive({ like: 0, subscribe: 0, recommend: { rating: { count: 0 } } });
let counter3 = shallowReactive({ like: 0, subscribe: 0, recommend: { rating: { count: 0 } } });

const increment = () => {
    counter.value++;
    // counter2.like += 2;
    // counter2.subscribe += 1;
}

const satHello = (msg, evt) => {
    console.log(msg, evt);
}

function satHello2() {
    console.log('2');
}

let employee = [
    {
        name: 'IBM',
        address: [
            { city: 'TY' },
            { city2: 'TYU' },
        ]
    },
    {
        name: 'IBM 2',
        address: [
            { city: 'TY 23' },
            { city2: 'TYU 23' },
        ]
    }
];


let selectedUser = ref([]);

let setUser = (idx) => {
    selectedUser.value = employee[idx].address;
    console.log(selectedUser);
}

const parentValue = ref(0);

const getData = (data) => {
    parentValue.value = data;
}

const title = ref('hello');

const searchText = ref('');
</script>



<template>
    <!-- <div v-on="{ mouseover: satHello(counter, $event), dblclick: satHello2 }">Say Hello</div> -->
    <button class="fancy-style" @click="increment">Click</button>
    <div v-if="filteredData.length === 0">No Data</div>
    <div v-else v-for="user in filteredData" class="container">
        <!-- <PersonalDetails v-bind:personal="user.personal" :counter="counter" :counter2="counter2"></PersonalDetails> -->
        <Address v-bind:address="user.address" @on-request="getData" class="fancy-style" :isPassed="true"></Address>
    </div>
    Parent Vlaue :{{ parentValue }}
    <!-- <div>Counter 2 like: {{ counter2.like }}</div>
    <div>Counter 2 count:{{ counter2.recommend.rating.count }}</div>
    <button @click="counter2.like++">Update 2</button>
    <button @click="counter2.recommend.rating.count++">Update 2</button> -->

    <!-- <div>---- Shallow Reactive ----</div> -->
    <!-- Shallow -->
    <!-- <div @click="counter3.like++">{{counter3.like}}</div> -->
    <!-- <div @click="counter3.recommend.rating.count++">{{counter3.recommend.rating.count}}</div> -->
    <!-- <div>Counter 3 like: {{ counter3.like }}</div>
    <div>Counter 3 count: {{ counter3.recommend.rating.count }}</div>
    <button @click="counter3.like++">Update 3</button>
    <button @click="counter3.recommend.rating.count++">Update 3</button> -->

    <div v-for="item, index in employee">
        <div @click="setUser(index)">{{ item.name }}</div>
    </div>
    <div v-if="selectedUser && selectedUser">
        <div v-for="address in selectedUser">
            City:{{ address.city }}
            City2:{{ address.city2 }}
        </div>
    </div>
    <!-- // <div v-for="add in addresses.address" class="nested">
    //     <span>{{ add.city }}</span>
    //     <span>{{ add.city2 }}</span>
    // </div> -->

    <div>
        <Age :title='title'>
            <h1>Bubble</h1>
        </Age>
    </div>
    <div>
        <Age :title='title' v-slot="header">
        </Age>
    </div>
    <div>
        <Age>
            <template #default>
                Sorry, it's not available
            </template>
        </Age>
    </div>
    <div>
        <Age v-slot="slotProps">
            {{ slotProps.text }}
        </Age>
    </div>

    <input :value="searchText" @input="searchText = $event.target.value" />
    <input v-model="searchText" />
    {{ searchText }}
</template>

<style>
.container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.nested::before {
    content: '';
    /* display: block; */
    margin-left: 5px;
    border-radius: 50%;
    border: 1px solid green;
}

.fancy-style {
    color: red;
}
</style>