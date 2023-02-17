import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import ProductList from '../views/ProductList.vue'
import MoviesView from '../views/MoviesView.vue'
import ActionView from '../views/ActionView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      redirect: { name: 'about' }
      // component: ActionView

    },
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
      path: '/review',
      name: 'review',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ReviewView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: ProductList
    },
    {
      path: '/product/:id/name/:name',
      name: 'product',
      component: ProductView
      //props: true //Can also be used without using $params inside the component.
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesView,
      children: [
        {
          path: '/action',
          name: 'action',
          component: ActionView
        }
      ]
    }
  ]
})

export default router
