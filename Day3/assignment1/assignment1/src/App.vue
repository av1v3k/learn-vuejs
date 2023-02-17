<script setup>
import { ref } from 'vue';
import Header from './components/Day8/Layout/Layout1/Header.vue';
import Container from './components/Day8/Container.vue';
import Body from './components/Day8/Layout/Layout1/Body.vue';
import Footer from './components/Day8/Layout/Layout1/Footer.vue';





// import { provide, ref } from 'vue';

// const formDetails = ref({
//   firstName: '',
//   lastName: ''
// });
// provide('userForm', formDetails);

// import List from './components/List/List.vue';
// import HeaderIBM from "./components/Header.vue";
// import ContainerIBM from "./components/Container.vue";
// import FooterIBM from "./components/Footer.vue";
// import ProductContainer from "./components/Products/ProductContainer.vue";
// import StatusBar from "./components/StatusBar.vue";
// import UserContainer from './components/Users/UserContainer.vue';
// export default {
//   components: { Header, Container, Footer },
// }

// export default {
//   components: { HeaderIBM, ContainerIBM, FooterIBM },
//   setup() {
//   }
// }

// export default {
//   components: { ProductContainer }
// }

const props = ref({
  firstName: 'IBM',
  passwordDefault: '',
  themeDefault: false,
});

const formValue =  ref(null);

const collectData = (data) => {
  formValue.value = data;
}

const collectTheme = (theme) => {
  document.body.style.background = theme ? 'black' : 'white';
  document.body.style.color = theme ? 'white' : 'black';
}
</script>


<template>
  {{formValue}}
  <Container>
    <template #header>
      <Header></Header>
    </template>
    <template #body>

      <Body :firstNameDefault="props.firstName" :passwordDefault="props.passwordDefault"
        :themeDefault="props.themeDefault" @setTheme="collectTheme" @sendFormData="collectData"></Body>
    </template>
    <template #footer>
      <Footer></Footer>
    </template>
  </Container>
</template>