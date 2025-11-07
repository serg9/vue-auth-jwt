<template>
  <form @submit.prevent="handleSubmit" class="space-y-5">
    <BaseInput
      id="email"
      v-model="email"
      type="email"
      label="Email"
      placeholder="name@example.com"
      required
    />

    <BaseInput
      id="password"
      v-model="password"
      type="password"
      label="Password"
      placeholder="••••••••"
      required
    />

    <BaseAlert v-model="error" variant="error">
      {{ error }}
    </BaseAlert>

    <BaseButton
      type="submit"
      variant="primary"
      :loading="loading"
      loading-text="Signing in..."
      full-width
    >
      Sign in
    </BaseButton>
  </form>
</template>

<script setup>
import { ref } from "vue";
import BaseInput from "../ui/BaseInput.vue";
import BaseButton from "../ui/BaseButton.vue";
import BaseAlert from "../ui/BaseAlert.vue";

const emit = defineEmits(["submit"]);

const email = ref("");
const password = ref("");
const error = ref("");
const loading = ref(false);

async function handleSubmit() {
  error.value = "";
  loading.value = true;
  try {
    await emit("submit", { email: email.value, password: password.value });
  } catch (e) {
    error.value = "Login failed";
  } finally {
    loading.value = false;
  }
}

defineExpose({
  setError: (message) => {
    error.value = message;
  },
  setLoading: (value) => {
    loading.value = value;
  },
});
</script>

