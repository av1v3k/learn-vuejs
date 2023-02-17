<script>
import SearchPanel from "./SearchPanel.vue";


export default {
    components: { SearchPanel },
    setup() {

    }
}
// export default {
//     setup() {
//         components: { SearchPanel }
//     }
// }
</script>

<template>
    <header>
        <SearchPanel></SearchPanel>
    </header>
</template>

<style>
header {
    height: 30px;
    background: grey;
}
</style>