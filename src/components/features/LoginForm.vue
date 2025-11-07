<template>
  <form @submit.prevent="handleSubmit" class="space-y-5">
    <BaseInput
      id="email"
      v-model="formData.email"
      type="email"
      label="Email"
      placeholder="name@example.com"
      required
      :disabled="loading"
    />

    <BaseInput
      id="password"
      v-model="formData.password"
      type="password"
      label="Password"
      placeholder="••••••••"
      required
      :disabled="loading"
    />

    <BaseButton
      type="submit"
      variant="primary"
      :loading="loading"
      loading-text="Signing in..."
      full-width
    >
      Sign in
    </BaseButton>

    <div v-if="error" class="error-message">
      {{ error }}
    </div>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import BaseInput from "../ui/BaseInput.vue";
import BaseButton from "../ui/BaseButton.vue";

const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["submit"]);

const formData = reactive({
  email: "",
  password: "",
});

function handleSubmit() {
  emit("submit", { email: formData.email, password: formData.password });
}
</script>

<style scoped>
@import "tailwindcss" reference;

.error-message {
  @apply text-sm text-red-600 text-center;
}
</style>
