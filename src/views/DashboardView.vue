<template>
  <div>
    <h1>Dashboard</h1>
    <p v-if="auth.user">Hello, {{ auth.user.email }}</p>
    <button @click="onLogout">Logout</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'

const router = useRouter()
const auth = useAuthStore()

function onLogout() {
  auth.logout()
  router.push({ name: 'login' })
}
</script>


