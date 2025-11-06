<template>
  <nav class="flex justify-between items-center p-4 bg-gray-100">
    <div class="flex gap-4">
      <router-link :to="{ name: 'public' }" class="px-3 py-2 hover:bg-gray-200 rounded">
        Public
      </router-link>
      <router-link
        v-if="auth.isAuthenticated"
        :to="{ name: 'dashboard' }"
        class="px-3 py-2 hover:bg-gray-200 rounded"
        active-class="bg-blue-500 text-white hover:bg-blue-600"
      >
        Dashboard
      </router-link>
      <router-link
        v-if="isAdmin"
        :to="{ name: 'admin' }"
        class="px-3 py-2 hover:bg-gray-200 rounded"
        active-class="bg-blue-500 text-white hover:bg-blue-600"
      >
        Admin
      </router-link>
    </div>

    <router-link
      v-if="!auth.isAuthenticated"
      :to="{ name: 'login' }"
      class="px-3 py-2 hover:bg-gray-200 rounded"
      active-class="bg-blue-500 text-white hover:bg-blue-600"
    >
      Login
    </router-link>
    <button
      v-else
      @click="auth.logout"
      class="px-4 py-2 bg-red-900 text-white rounded hover:bg-red-700 cursor-pointer"
    >
      Logout
    </button>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useAuthStore } from "../store/auth";

const auth = useAuthStore();

const isAdmin = computed(() => {
  return auth.isAuthenticated && auth.user?.role === "admin";
});
</script>

