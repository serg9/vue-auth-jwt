<template>
  <div class="demo-credentials">
    <div class="demo-title">Demo Accounts</div>
    <div class="demo-accounts">
      <div class="demo-account">
        <span class="demo-label">Admin:</span>
        <code class="demo-code">admin@test.com / admin123</code>
      </div>
      <div class="demo-account">
        <span class="demo-label">User:</span>
        <code class="demo-code">user@test.com / user123</code>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@import "tailwindcss" reference;

.demo-credentials {
  @apply p-4 bg-blue-50 border border-blue-200 rounded-md;
}

.demo-title {
  @apply text-xs font-semibold text-blue-900 mb-2;
}

.demo-accounts {
  @apply space-y-1.5;
}

.demo-account {
  @apply flex items-center gap-2 text-xs;
}

.demo-label {
  @apply font-medium text-blue-700;
}

.demo-code {
  @apply px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-mono;
}
</style>

