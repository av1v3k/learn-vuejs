<script setup>

const props = defineProps({
    counter2: {
        type: Object,
        like: {
            type: Number
        },
        subscribe: {
            type: Number
        },
        recommend: {
            type: Object,
            rating: {
                type: Object,
                count: {
                    type: Number
                }
            }
        }
    },
    counter: {
        type: Number,
        default: null
    },
    personal: {
        type: Object,
        default: {

        },
        firstName: {
            type: String,
            default: 'FIRSTNAME HOLDER'
        },
        lastName: {
            type: String,
            default: 'LASTNAME HOLDER'
        },
        age: {
            type: Number,
            default: 'age HOLDER'
        }
    }
});

</script>


<template>
    <div>
        {{ personal.firstName }}
    </div>
    <div>
        {{ personal.lastName }}
    </div>
    <div>
        {{ personal.age }}
    </div>
    <div>
        {{ counter }}
    </div>
    <div>
        Likes: {{ counter2.like++ }}
        Subscribe: {{ counter2.subscribe++ }}
        Rating: {{ counter2.recommend.rating.count++ }}
    </div>
</template>