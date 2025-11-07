<template>
  <BaseCard>
    <template #header>
      <h2 class="card-title">{{ title }}</h2>
    </template>

    <div class="space-y-4">
      <InfoRow label="Email">
        {{ user?.email || "N/A" }}
      </InfoRow>

      <InfoRow label="Role">
        <BaseBadge :variant="badgeVariant">
          {{ user?.role || "user" }}
        </BaseBadge>
      </InfoRow>

      <InfoRow v-if="showStatus" label="Status">
        <BaseBadge variant="success">Active</BaseBadge>
      </InfoRow>

      <InfoRow v-if="showPermissions" label="Permissions">
        Full Access
      </InfoRow>
    </div>
  </BaseCard>
</template>

<script setup>
import { computed } from "vue";
import BaseCard from "../ui/BaseCard.vue";
import InfoRow from "../ui/InfoRow.vue";
import BaseBadge from "../ui/BaseBadge.vue";

const props = defineProps({
  user: {
    type: Object,
    default: null,
  },
  title: {
    type: String,
    default: "Profile Information",
  },
  showPermissions: {
    type: Boolean,
    default: false,
  },
  showStatus: {
    type: Boolean,
    default: true,
  },
});

const badgeVariant = computed(() => {
  return props.user?.role === "admin" ? "admin" : "default";
});
</script>

<style scoped>
@import "tailwindcss" reference;

.card-title {
  @apply text-lg font-semibold text-gray-900;
}
</style>

