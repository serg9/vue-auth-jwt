<template>
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    <div class="card-content">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@import "tailwindcss" reference;

.card {
  @apply bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden;
}

.card-header {
  @apply px-6 py-5 border-b border-gray-200;
}

.card-content {
  @apply px-6 py-5;
}
</style>

