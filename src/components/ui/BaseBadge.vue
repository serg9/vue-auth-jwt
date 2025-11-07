<template>
  <span :class="badgeClass">
    <slot />
  </span>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "default",
    validator: (value) => ["default", "admin", "success"].includes(value),
  },
});

const badgeClass = computed(() => {
  const base =
    "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium capitalize";

  const variants = {
    default: "bg-gray-100 text-gray-800",
    admin: "bg-purple-100 text-purple-800",
    success: "bg-green-100 text-green-800",
  };

  return `${base} ${variants[props.variant]}`;
});
</script>

<style scoped>
@import "tailwindcss" reference;
</style>

