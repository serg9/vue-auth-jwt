<template>
  <div>
    <AppHeader />

    <main class="p-8">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useIdle } from "@vueuse/core";
import { useAuthStore } from "@/store/auth";
import { watch } from "vue";

import AppHeader from "../components/AppHeader.vue";

const authStore = useAuthStore();

const inactivityTimeout = 5 * 60 * 1000;
const { idle } = useIdle(inactivityTimeout);

watch(idle, (isIdle) => {
  if (isIdle && authStore.isAuthenticated) {
    authStore.logout();
    alert("Session expired due to inactivity.");
  }
});
</script>

<style scoped>
@import "tailwindcss" reference;

.inactivity-banner {
  @apply bg-yellow-50 border-b border-yellow-200 px-4 py-3;
}

.banner-content {
  @apply max-w-7xl mx-auto flex items-center justify-center gap-2;
}

.warning-icon {
  @apply text-lg;
}

.warning-text {
  @apply text-sm font-medium text-yellow-800;
}
</style>
