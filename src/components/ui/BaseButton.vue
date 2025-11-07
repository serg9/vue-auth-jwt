<template>
  <button :type="type" :disabled="disabled || loading" :class="buttonClass">
    <span v-if="loading">{{ loadingText }}</span>
    <slot v-else />
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "secondary", "danger"].includes(value),
  },
  type: {
    type: String,
    default: "button",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  loadingText: {
    type: String,
    default: "Loading...",
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
});

const buttonClass = computed(() => {
  const base =
    "px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all";
  const width = props.fullWidth ? "w-full" : "";

  const variants = {
    primary:
      "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900",
    secondary:
      "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus:ring-gray-900",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600",
  };

  return `${base} ${variants[props.variant]} ${width}`;
});
</script>

<style scoped>
@import "tailwindcss" reference;
</style>

