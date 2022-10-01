import { createRouter, createWebHistory } from 'vue-router'
import ProductsModule from '@/modules/products/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ProductsModule],
})

export default router
