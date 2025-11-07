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

        <div class="demo-credentials">
          <div class="demo-title">🔐 Test Accounts</div>
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

        <form @submit.prevent="onSubmit" class="space-y-5">
          <div class="form-group">
            <label for="email" class="label">Email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="name@example.com"
              class="input"
              required
            />
          </div>

          <div class="form-group">
            <label for="password" class="label">Password</label>
            <input
              id="password"
              v-model="password"
              type="password"
              placeholder="••••••••"
              class="input"
              required
            />
          </div>

          <div v-if="error" class="alert">
            {{ error }}
          </div>

          <button type="submit" :disabled="loading" class="btn">
            <span v-if="loading">Signing in...</span>
            <span v-else>Sign in</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../store/auth";

const email = ref("");
const password = ref("");
const error = ref("");
const loading = ref(false);
const router = useRouter();
const auth = useAuthStore();

async function onSubmit() {
  error.value = "";
  loading.value = true;
  try {
    await auth.login(email.value, password.value);
    router.push({ name: "dashboard" });
  } catch (e) {
    error.value = "Login failed";
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

.form-group {
  @apply space-y-2;
}

.label {
  @apply block text-sm font-medium text-gray-700;
}

.input {
  @apply w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm
         placeholder:text-gray-400
         focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent
         disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
         transition-colors;
}

.btn {
  @apply w-full px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md
         hover:bg-gray-800 
         focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2
         disabled:opacity-50 disabled:cursor-not-allowed
         transition-all;
}

.alert {
  @apply px-4 py-3 bg-red-50 border border-red-200 text-red-800 text-sm rounded-md;
}

.demo-credentials {
  @apply mb-6 p-4 bg-blue-50 border border-blue-200 rounded-md;
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
