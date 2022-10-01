<script setup lang="ts">
import { useSlots } from "vue";
// Components
import WrapperCard from "./WrapperCard.vue";
import LineMdLoadingLoopIcon from "./LoadingLoopIcon.vue";

defineProps<{
  title?: string;
  loading?: boolean;
}>();

const emit = defineEmits<{
  (name: "reload"): void;
}>();

const slots = useSlots();
</script>

<template>
  <div class="grid items-start gap-2 p-5">
    <WrapperCard>
      <div class="grid grid-flow-col justify-between items-center">
        <slot name="toolbar-left">
          <h1>{{ title }}</h1>
        </slot>

        <slot name="toolbar-right">
          <button
            v-if="!('toolbar-right' in slots)"
            class="btn"
            @click="emit('reload')"
          >
            <LineMdLoadingLoopIcon v-if="loading" />
            <template v-else>Reload</template>
          </button>
        </slot>
      </div>
    </WrapperCard>

    <WrapperCard> <slot /> </WrapperCard>
  </div>
</template>
