<script setup lang="ts">
import * as apiTo from '@/api'
// Libraries
import { useApi } from '@roland1993/api'
// Components
import MainLayout from '@/layouts/main-layout/MainLayout.vue'
import ProductCard from './ProductCard.vue'
// Types
import type { Product } from '@/api/modules/types'

const {
  loading,
  data: products,
  call: getProducts,
} = useApi<Product[]>(apiTo.getProducts)
</script>

<template>
  <MainLayout title="Products store" :loading="loading" @reload="getProducts">
    <div class="flex flex-wrap gap-4 justify-center">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </MainLayout>
</template>
