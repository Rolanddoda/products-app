<script setup lang="ts">
import * as apiTo from '@/api'
// Libraries
import { useApi } from '@roland1993/api'
// Components
import MainLayout from '@/layouts/main-layout/MainLayout.vue'
import BackArrow from './BackArrow.vue'
// Types
import type { Product } from '@/api/modules/types'

const props = defineProps<{
  id: string
}>()

const {
  loading,
  data: product,
  call: getProduct,
} = useApi<Product>(() => apiTo.getProduct(+props.id))
</script>

<template>
  <MainLayout class="detail" :loading="loading" @reload="getProduct">
    <template #toolbar-left>
      <router-link to="/" class="flex items-center gap-1">
        <BackArrow /> <span>Go back to the store</span>
      </router-link>
    </template>

    <template #default>
      <div v-if="product" class="grid lg:grid-cols-2 gap-4">
        <div class="px-4 text-center">
          <h1 class="text-4xl font-bold">{{ product.title }}</h1>
          <p class="py-6">
            {{ product.description }}
          </p>

          <div class="stats shadow">
            <div class="stat">
              <div class="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="inline-block w-8 h-8 stroke-current"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12.025 21q-.425 0-.713-.288q-.287-.287-.287-.712v-1.15Q9.9 18.6 9.05 17.975q-.85-.625-1.375-1.75q-.175-.35-.013-.737q.163-.388.588-.563q.35-.15.725.013q.375.162.575.537q.425.75 1.075 1.138q.65.387 1.6.387q1.025 0 1.738-.462q.712-.463.712-1.438q0-.875-.55-1.388q-.55-.512-2.55-1.162q-2.15-.675-2.95-1.612q-.8-.938-.8-2.288q0-1.625 1.05-2.525q1.05-.9 2.15-1.025V4q0-.425.287-.713Q11.6 3 12.025 3t.713.287q.287.288.287.713v1.1q.95.15 1.65.613q.7.462 1.15 1.137q.225.325.088.725q-.138.4-.563.575q-.35.15-.725.012q-.375-.137-.7-.487q-.325-.35-.762-.538q-.438-.187-1.088-.187q-1.1 0-1.675.488q-.575.487-.575 1.212q0 .825.75 1.3q.75.475 2.6 1q1.725.5 2.613 1.587q.887 1.088.887 2.513q0 1.775-1.05 2.7q-1.05.925-2.6 1.15V20q0 .425-.287.712q-.288.288-.713.288Z"
                  ></path>
                </svg>
              </div>
              <div class="stat-title">Price</div>
              <div class="stat-value text-primary">{{ product.price }}</div>
            </div>

            <div class="stat">
              <div class="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="inline-block w-8 h-8 stroke-current"
                  width="32"
                  height="32"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"
                  ></path>
                </svg>
              </div>
              <div class="stat-title">Rating</div>
              <div class="stat-value text-primary">
                {{ product.rating.rate }}
              </div>
            </div>

            <div class="stat">
              <div class="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="inline-block w-8 h-8 stroke-current"
                  width="32"
                  height="32"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M904 747H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM165.7 621.8l39.7 39.5c3.1 3.1 8.2 3.1 11.3 0l234.7-233.9l97.6 97.3a32.11 32.11 0 0 0 45.2 0l264.2-263.2c3.1-3.1 3.1-8.2 0-11.3l-39.7-39.6a8.03 8.03 0 0 0-11.3 0l-235.7 235l-97.7-97.3a32.11 32.11 0 0 0-45.2 0L165.7 610.5a7.94 7.94 0 0 0 0 11.3z"
                  ></path>
                </svg>
              </div>
              <div class="stat-title">Left in stock</div>
              <div class="stat-value text-primary">
                {{ product.rating.count }}
              </div>
            </div>
          </div>
        </div>

        <img :src="product.image" alt="image" class="height: 100%" />
      </div>
    </template>
  </MainLayout>
</template>

<style scoped>
@media (max-width: 640px) {
  .stats {
    display: grid;
    grid-auto-flow: revert;
  }

  :where(.stats) > :not([hidden]) ~ :not([hidden]) {
    border-left-width: 0;
    border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  }
}
</style>
