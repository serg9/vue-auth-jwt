<template>
  <header class="header">
    <nav class="nav-container">
      <div class="nav-links">
        <router-link :to="{ name: 'home' }" class="nav-link"> Home </router-link>
        <router-link
          v-if="isAuthenticated"
          :to="{ name: 'dashboard' }"
          class="nav-link"
        >
          Dashboard
        </router-link>
        <router-link v-if="isAdmin" :to="{ name: 'admin' }" class="nav-link">
          Admin
        </router-link>
      </div>

      <router-link v-if="!isAuthenticated" :to="{ name: 'login' }" class="login-btn">
        Login
      </router-link>
      <button v-else @click="logout" class="logout-btn">Logout</button>
    </nav>
  </header>
</template>

<script setup>
import { useAuth } from "../composables/useAuth";

const { isAuthenticated, isAdmin, logout } = useAuth();
</script>

<style scoped>
@import "tailwindcss" reference;

.header {
  @apply bg-white border-b border-gray-200 shadow-sm;
}

.nav-container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center;
}

.nav-links {
  @apply flex items-center gap-1;
}

.nav-link {
  @apply px-2 py-1 text-sm font-medium text-gray-600
         hover:text-gray-900 hover:underline
         transition-colors;
}

.nav-link.router-link-active {
  @apply text-gray-900 underline underline-offset-4;
}

.login-btn {
  @apply px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md
         hover:bg-gray-50
         focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2
         transition-all;
}

.logout-btn {
  @apply px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-md
         hover:bg-gray-800
         focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2
         transition-all;
}
</style>
