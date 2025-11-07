<template>
  <div class="page-container">
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Welcome to Vue Auth JWT</h1>
        <p class="hero-subtitle">
          A modern authentication solution built with Vue 3, Pinia, and JWT tokens
        </p>
        <div class="hero-actions">
          <router-link
            v-if="!auth.isAuthenticated"
            :to="{ name: 'login' }"
            class="btn-primary"
          >
            Get Started
          </router-link>
          <router-link v-else :to="{ name: 'dashboard' }" class="btn-primary">
            Go to Dashboard
          </router-link>
        </div>
      </div>
    </div>

    <div class="features-section">
      <div class="section-header">
        <h2 class="section-title">Features</h2>
        <p class="section-subtitle">Everything you need for secure authentication</p>
      </div>

      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "../store/auth";

const auth = useAuthStore();

const features = [
  {
    title: "Secure Authentication",
    description: "JWT-based authentication with secure token storage",
  },
  {
    title: "Modern Stack",
    description:
      "Built with Vue 3 Composition API, Pinia state management, and Vite for fast development",
  },
  {
    title: "Beautiful UI",
    description: "Clean and professional interface inspired by shadcn design system",
  },
  {
    title: "Role-Based Access",
    description: "Support for different user roles with protected routes and admin panel",
  },
];
</script>

<style scoped>
@import "tailwindcss" reference;

.page-container {
  @apply min-h-[calc(100vh-73px)] bg-gradient-to-b from-gray-50 to-white;
}

.hero-section {
  @apply py-20 px-4;
}

.hero-content {
  @apply max-w-4xl mx-auto text-center;
}

.hero-title {
  @apply text-5xl font-bold text-gray-900 mb-6;
}

.hero-subtitle {
  @apply text-xl text-gray-600 mb-8 max-w-2xl mx-auto;
}

.hero-actions {
  @apply flex justify-center gap-4;
}

.btn-primary {
  @apply px-6 py-3 bg-gray-900 text-white text-base font-medium rounded-md
         hover:bg-gray-800
         focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2
         transition-all;
}

.features-section {
  @apply py-16 px-4 bg-white;
}

.section-header {
  @apply max-w-4xl mx-auto text-center mb-12;
}

.section-title {
  @apply text-3xl font-semibold text-gray-900 mb-3;
}

.section-subtitle {
  @apply text-lg text-gray-600;
}

.features-grid {
  @apply max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}

.feature-card {
  @apply bg-white border border-gray-200 rounded-lg p-6 shadow-sm
         hover:shadow-md hover:border-gray-300
         transition-all;
}

.feature-icon {
  @apply text-4xl mb-4;
}

.feature-title {
  @apply text-lg font-semibold text-gray-900 mb-2;
}

.feature-description {
  @apply text-sm text-gray-600 leading-relaxed;
}
</style>
