<template>
  <div v-if="modelValue" :class="alertClass">
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: [Boolean, String],
    default: false,
  },
  variant: {
    type: String,
    default: "error",
    validator: (value) => ["error", "success", "warning", "info"].includes(value),
  },
});

const alertClass = computed(() => {
  const base = "px-4 py-3 border rounded-md text-sm";

  const variants = {
    error: "bg-red-50 border-red-200 text-red-800",
    success: "bg-green-50 border-green-200 text-green-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    info: "bg-blue-50 border-blue-200 text-blue-800",
  };

  return `${base} ${variants[props.variant]}`;
});
</script>

<style scoped>
@import "tailwindcss" reference;
</style>

