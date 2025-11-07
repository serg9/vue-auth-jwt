<template>
  <div class="feature-card">
    <h3 class="feature-title">{{ title }}</h3>
    <p class="feature-description">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
@import "tailwindcss" reference;

.feature-card {
  @apply bg-white border border-gray-200 rounded-lg p-6 shadow-sm
         hover:shadow-md hover:border-gray-300
         transition-all;
}

.feature-title {
  @apply text-lg font-semibold text-gray-900 mb-2;
}

.feature-description {
  @apply text-sm text-gray-600 leading-relaxed;
}
</style>
