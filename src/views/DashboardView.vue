<template>
  <div class="content-wrapper">
    <div class="header-section">
      <h1 class="page-title">Dashboard</h1>
      <p class="page-subtitle">Welcome back to your dashboard</p>
    </div>

    <div class="card">
      <div class="card-header">
        <h2 class="card-title">Profile Information</h2>
        <p class="card-description">Your account details</p>
      </div>

      <div class="card-content">
        <div class="info-row">
          <span class="info-label">Email</span>
          <span class="info-value">{{ auth.user?.email || "N/A" }}</span>
        </div>

        <div class="info-row">
          <span class="info-label">Role</span>
          <span class="badge">{{ auth.user?.role || "user" }}</span>
        </div>

        <div class="info-row">
          <span class="info-label">Status</span>
          <span class="status-badge">Active</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "../store/auth";

const auth = useAuthStore();
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

.page-subtitle {
  @apply text-sm text-gray-600;
}

.card {
  @apply bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden;
}

.card-header {
  @apply px-6 py-5 border-b border-gray-200;
}

.card-title {
  @apply text-lg font-semibold text-gray-900 mb-1;
}

.card-description {
  @apply text-sm text-gray-600;
}

.card-content {
  @apply px-6 py-5 space-y-4;
}

.info-row {
  @apply flex justify-between items-center py-3 border-b border-gray-100 last:border-0;
}

.info-label {
  @apply text-sm font-medium text-gray-700;
}

.info-value {
  @apply text-sm text-gray-900;
}

.badge {
  @apply inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium
         bg-gray-100 text-gray-800 capitalize;
}

.status-badge {
  @apply inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium
         bg-green-100 text-green-800;
}
</style>
