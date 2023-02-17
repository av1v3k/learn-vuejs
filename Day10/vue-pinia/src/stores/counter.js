import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const employeeList = ref([{ firstname: 'Vanilla', level: 'A', position: 'junior' }]);
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  const addEmployee = (data) => {
    employeeList.value = [...employeeList.value, data];
  }

  const getEmployee = (id) => {
    return employeeList.value[id] ? employeeList.value[id] : {};
  }

  const removeEmployee = (idx) => {
    return employeeList.value.splice(idx, 1);
  }

  return { count, doubleCount, increment, addEmployee, employeeList, getEmployee, removeEmployee }
})
