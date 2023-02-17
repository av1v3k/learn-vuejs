import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CounterContainerView from '../views/CounterContainerView.vue'
import EmployeeFormView from '../views/EmployeeFormView.vue'
import EmployeeList from '../views/EmployeeList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/countercontainer',
      name: 'countercontainer',
      component: CounterContainerView
    },
    {
      path: '/employeeform',
      name: 'employeeform',
      component: EmployeeFormView
    },
    {
      path: '/employeeeditform:id',
      name: 'employeeeditform',
      component: EmployeeFormView
    },
    {
      path: '/employeelist',
      name: 'employeelist',
      component: EmployeeList
    },
  ]
})

export default router
