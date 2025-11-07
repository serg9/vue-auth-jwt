<template>
  <div class="form-group">
    <label v-if="label" :for="inputId" class="label">{{ label }}</label>
    <input
      :id="inputId"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      class="input"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: "",
  },
});

defineEmits(["update:modelValue"]);

const inputId = computed(() => props.id || `input-${Math.random().toString(36).substr(2, 9)}`);
</script>

<style scoped>
@import "tailwindcss" reference;

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
</style>

