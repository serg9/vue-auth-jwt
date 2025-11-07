import { computed } from 'vue'
import { useAuthStore } from '../store/auth'

export function useAuth() {
  const authStore = useAuthStore()

  const isAuthenticated = computed(() => authStore.isAuthenticated)
  const user = computed(() => authStore.user)
  const isAdmin = computed(() => authStore.user?.role === 'admin')

  const login = async (email, password) => {
    return await authStore.login(email, password)
  }

  const logout = () => {
    authStore.logout()
  }

  return {
    isAuthenticated,
    user,
    isAdmin,
    login,
    logout,
  }
}
