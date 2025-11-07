<template>
  <div
    class="flex items-center justify-center -m-8 bg-gray-50 p-4 min-h-[calc(100vh-5rem)]"
  >
    <div class="w-full max-w-md">
      <div class="card">
        <div class="mb-8 text-center">
          <h1 class="text-2xl font-semibold text-gray-900 mb-2">Welcome back</h1>
          <p class="text-sm text-gray-600">Enter your credentials to sign in</p>
        </div>

        <DemoCredentials class="mb-6" />

        <LoginForm @submit="handleLogin" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useAuth } from "../composables/useAuth";
import LoginForm from "../components/features/LoginForm.vue";
import DemoCredentials from "../components/features/DemoCredentials.vue";

const router = useRouter();
const { login } = useAuth();

async function handleLogin({ email, password }) {
  await login(email, password);
  router.push({ name: "dashboard" });
}
</script>

<style scoped>
@import "tailwindcss" reference;

.card {
  @apply bg-white rounded-lg shadow-sm border border-gray-200 p-8;
}
</style>
