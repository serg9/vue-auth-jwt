<template>
  <div class="info-row">
    <span class="info-label">
      <slot name="label">{{ label }}</slot>
    </span>
    <span class="info-value">
      <slot>{{ value }}</slot>
    </span>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
@import "tailwindcss" reference;

.info-row {
  @apply flex justify-between items-center py-3 border-b border-gray-100 last:border-0;
}

.info-label {
  @apply text-sm font-medium text-gray-700;
}

.info-value {
  @apply text-sm text-gray-900;
}
</style>

