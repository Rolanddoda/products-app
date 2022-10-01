<script setup lang="ts">
// Types
import type { Product } from "@/api/modules/types";

defineProps<{
  product: Product;
}>();
</script>

<template>
  <router-link
    :to="`/${product.id}`"
    class="relative grid grid-rows-[250px,200px,50px] gap-4 text-center p-5 bg-primary-content rounded-lg shadow-xl min-w-[300px] max-w-[450px] hover:scale-105 transition-all duration-300 hover:text-white hover:z-10"
  >
    <div>
      <div
        alt="Random image"
        class="h-full bg-contain bg-no-repeat bg-center rounded-md drop-shadow-2xl"
        :style="{
          backgroundImage: `url(${product.image})`,
          borderRadius: '76px',
        }"
      />
    </div>

    <div class="prose">
      <h2 class="text-center">{{ product.title }}</h2>
      <p class="line-clamp-3">{{ product.description }}</p>
    </div>

    <div class="flex items-center justify-between">
      <div class="rating rating-md items-center gap-1">
        <input
          type="radio"
          name="rating-7"
          class="mask mask-star-2 bg-orange-400"
          checked
        />
        <span class="text-lg">
          {{ product.rating.rate }}
        </span>
      </div>

      <h1 class="text-2xl font-bold text-white">${{ product.price }}</h1>
    </div>

    <div class="absolute -top-2 -left-2 border border-accent badge badge-ghost badge-lg text-white p-3">
      {{ product.category }}
    </div>
  </router-link>
</template>
