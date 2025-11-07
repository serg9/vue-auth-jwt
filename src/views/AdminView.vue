<template>
  <div class="content-wrapper">
    <div class="header-section">
      <h1 class="page-title">Admin Panel</h1>
    </div>

    <ProfileCard
      :user="user"
      title="Admin Information"
      :show-permissions="true"
      :show-status="false"
    />
  </div>
</template>

<script setup>
import { useAuth } from "../composables/useAuth";
import ProfileCard from "../components/features/ProfileCard.vue";

const { user } = useAuth();
</script>

<style scoped>
@import "tailwindcss" reference;

.content-wrapper {
  @apply max-w-4xl mx-auto space-y-6;
}

.header-section {
  @apply mb-8;
}

.page-title {
  @apply text-3xl font-semibold text-gray-900 mb-2;
}
</style>
