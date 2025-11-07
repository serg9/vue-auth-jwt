<template>
  <div>
    <AppHeader />

    <main class="p-8">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useInactivityLogout } from "../composables/useInactivityLogout";
import AppHeader from "../components/AppHeader.vue";

useInactivityLogout();
</script>
