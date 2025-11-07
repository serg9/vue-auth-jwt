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

        <LoginForm :loading="loading" :error="error" @submit="handleLogin" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "../composables/useAuth";
import LoginForm from "../components/features/LoginForm.vue";
import DemoCredentials from "../components/features/DemoCredentials.vue";

const router = useRouter();
const { login } = useAuth();
const loading = ref(false);
const error = ref("");

async function handleLogin({ email, password }) {
  error.value = "";
  loading.value = true;

  try {
    await login(email, password);
    router.push({ name: "dashboard" });
  } catch (err) {
    error.value = "Invalid email or password";
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
@import "tailwindcss" reference;

.card {
  @apply bg-white rounded-lg shadow-sm border border-gray-200 p-8;
}
</style>
