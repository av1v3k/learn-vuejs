Day 1:
=====

- General Overview/history of JS Evolution.
- SSR, Client side scripting, SPA
- Modules


Day 2:
=====

1. npm init vue@latest

- To initialize the Vue Project with Vite


2. API Classification

 - Options API Style based - Vue 2.0 & Vue 3.x
 - Composition API based - Vue 3.x 
  - Setup Function
  - Setup Attribute


3. Component Creation Pattern

 - Plain JS (imperative way of component creation, with no build)
 - SFC(Single File Component)


 NOTE: SFC + Composition is recommended approach of creating Vue

Day 3:
=======

- Options API with SFC
 - has export default(){}, but no setup() {} function

- Compositional API with setup() function
 - has export default() {}, setup() {} function, components: {} with list of components as comma separated

- Compositional API with setup attribute
 - no need of using export default() {}, setup(){}
 - use setup attribute in <script> tag
 - writing JS in script tag and refer the variables directly in <template> tag.

- assignment

- 2 types of registration
 - Global
 - Local

- install vue devtools,
- customElements
- data attributes
- components can also be referred using <HelloWorld> <hello-world> - either as camel case or 
- builder pattern is same as chaining as in jQuery.
- camel case way of registering component has more advantage rather than any other case.

- Templates:
 - data binding
 - View
 - Static & Dynamic Templates

- MVC Architecture:
 - Vue is based on MVC & Flex


- Interpolation:
 - {{}} same as Angular


Day 4:
=====

- Directives
 - adding behaviour to HTML elements.
 
 Code resue patterns
  1. Components
  2. Composables(Hooks)
  3. Directives

- every component is a custom element rendered in browser

Built-in Directives:
 - v-if, v-for, v-else

v-html
 - Used as vice-versa for interpolation or simple can be used as {{}}


Component Driven Design Principle
- 


1. Static prop passing: 
Props Drilling / Props pattern
- passing props from Parent component to Child Component


Using Options API - Props pattern

 - inside export default{}, use 'props' key with array of strings as value.


Compositional API with setup() function.
 - inside setup() function, return as Object with key as 'props'.
 - Example: setup() {return {props} }


Compositional API with setup() function.
 - parent component no change.
 - only in child component, use defineProps(['title']) to access the appropriate props inside child comp.
 - NOTE: need to import child component in parent comp.


 2. Pass dynamic props to component.

 - use v-bind to pass property values


- Setting value for default props
 - use defineProps({ '<prop-name>' : { default: '<value as string>' } })



- Property Validation:
 - Example 1: 
  defineProps({
      title: {
          default: 'This is default title',
          type: String, // ==> type Validation
          required: true // => if the property is required
      }

- History of Object oriented Language vs object based lang
- SGML, GML
- JS is object based language
Books:
1. object oriented analysis and design book
2. Lambda Calculus 
3. JS: Good Parts

Links: 

http://dmitrysoshnikov.com/ecmascript/javascript-the-core-2nd-edition/
https://www.youtube.com/watch?v=3VQ382QG-y4



Day 5:

- setting props manually will give warning message

Example: Set operation on key "title" failed: target is readonly.

- Passing props from Parent Component to Child Component.


State Pattern:
 - Non Reactive
 - Reactive

Event Handling:

Syntax:
- 1. v-on:<name of the event>: "handler"
- 2. @click="handler" directive

1. Options API Example:

export default {
  methods: {
    sayHello(evt) {

    }
  }
}

<button @click="sayHello"></button>

- How to pass custom props inside sayHello() ?


2. Composition API setup()

export default {
  setup() {

    function sayHello(evt) {

    }
  }

  return {
    sayHello
  }
}

3. Compositional API with setup attribute

- just a plain/ES6 function 

    function sayHello(evt) {

    }

- Multiple event listener on an element:
 - v-on:<eventname>="listener", v-on:<eventname>="listener"
 - v-on="{evetname: <listener>, eventname: <listener>}"


1. Reactive - Options API

export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increment() {
      this.counter++
    }
  }
}

<element>@click="increment"</element>

2. Reactive - Compositional API with setup()

export default {
  setup() {

    let counter = 0;
    let increment = () => {
      counter++;
    }

    return {
      counter, increment
    }
  }
}

- Above won't work
- use Reactivity (manually enable in Compositional API)
- Reactivity works on Proxy principle.
- use ref(), computed(), etc,.
- ref() is a function which returns Object not value
- ref() is used for primitive data types.

Above code can be modified with ref() as below,

import { ref } from 'vue';
export default {
  setup() {

    let counter = ref(0);
    let increment = () => {
      counter.value++;
    }

    return {
      counter, increment
    }
  }
}

3. Reactive - Compositional API with setup attribute.

import { ref } from 'vue';

    let counter = ref(0);
    let increment = () => {
      counter.value++;
    }

Multiple listener for 

Day 6:

- using reactive() method, multiple properties of an object can be updated. It is NOT mutated.
- for deep convertion, use reactive(), else use shallowReactive()
- shallowReactive doesn't update nested object's key value pair.

- v-for
- :key="unique id "

Example:

<li v-for="(todo, index) in todos" :key="todo.id">
</li>

How to loop nested objects ?

- Outer use for..in
- Inner use for..of
- can use in any combination, but, above is recommended.

Assignment:

- Listing list of users.
- On Click of each user, display details of the current user.


Life-cycle:



Filtering / Sorting arrays with immutable API
-


Day 7:

Destructuring:

- Destructuring from reactive() will not update the props via code.
- To update the value of the specific keys in an object, use toRefs() wrapping reactive() method.
- Example: easy


computed()

- for caching the values.
- will not be triggered unneccesarily.

Component communication pattern:

1. Parent to Child

- props pattern

2. Child to Parent

- using defineEmits() in child component
- use @on-request="" in parent component
- for inline event emit in child component, @click="$emit('onRequest', counter++)"
- for child emits, use emit('onRequest', counter.value++)

3. Parent to Child

Fall through attributes

1. access via template
2. access via script (make a separate <script> tag to access the attributes passed from Parent to Child)

NOTE: sharing CSS styles to child component.

In Child component,

const props = defineProps(['title']);

in template, we can access with {{props.title}}

================

<script>
  export default {
    created() {
      console.log(this.$attrs);
    }
  }
  </script>


  using 'scoped' as attribute in <style> tag would override the style passed from parent to child component.

- inheritAttrs: false in export default


Slots:

- passing component as props.

fallback for slots:

- how to ? giving some content inside <slot> tag.


Named slots:

- 
In Parent:
<template>
  <Layout>
    <template v-slot="header"></template>
    <template v-slot="footer"></template>
  </Layout>
</template>

NOTE: instead of directive, we can also use #header, #footer


In Child component of Layout,
<slot name="header">
<!-- Fallback content -->
</slot>

<slot name="footer">
<!-- Fallback content -->
</slot>


Day 8:

- #default holder can be given as attribute in a slot.

Dynamic Slots:

 const h = ref('header');
- <template #[h]>


Scoped slots:

- Passing data from child to Parent.

Props drilling:

- provide / inject can be used for passing data from parent to child.

Assignment:

- 

Composables(Hooks):

- onMounted, onUnMounted lifecycle hooks to update mouse position.

Day 9:

- Lifecycle methods
- fetch as composables
- Directives
- directive accepting value.
 - in main.js, add as a chain method directive()

 directive('<name of the firective>', (<element name>, binding) => {

 })

 - binding.value, binding.modifiers.<key>


 Plugins:

 - Are 3rd party libraries.
 - using app.use()

 app.use(myPlugin, {
  /* optional options */
})


Routing assignment:

- 

Day 10:

- Routing extended

$route.params


<RouterLink :to="'product/' + item.id + '/name/' + item.name">  can be simplified as below,

<RouterLink :to="{ name: 'product', params: { id: item.id, name: item.name } }">


Redirection:

- inside routes array config we can use as below,

redirect: {name: 'home'}

- difference in using redirect key and component key is, in redirect key, the URL getting changed is reflected.

- props: true //Can also be used without using $params inside the component.



pinia - State management
