<template>
  <div class="min-h-screen">
    <AppHeader />

    <main class="p-8">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import AppHeader from "../components/AppHeader.vue";
</script>
